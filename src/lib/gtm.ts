export const GTM_ID = "GTM-5RS9F324";
export const THANK_YOU_PATH = "/thank-you-get-a-quote";
export const PENDING_LEAD_STORAGE_KEY = "hdm_pending_lead_conversion";

export interface LeadConversionPayload {
  fullName?: string;
  email?: string;
  company?: string;
  country?: string;
  serviceInterest?: string;
  budget?: string;
  source: string;
}

export interface EnhancedUserData {
  email?: string;
  address?: {
    first_name?: string;
    last_name?: string;
    country?: string;
  };
}

export interface StoredPendingLead {
  source: string;
  serviceInterest?: string;
  budget?: string;
  userData?: EnhancedUserData;
  timestamp: number;
}

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown> | unknown[]>;
    gtag?: (...args: unknown[]) => void;
    __hdmConsumedLead?: StoredPendingLead | null;
  }
}

/** Pushes a structured event object onto window.dataLayer safely on the client. */
export function pushToDataLayer(payload: Record<string, unknown>): void {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(payload);
}

/** Builds standard Google Ads / GTM Enhanced Conversions user_data from lead fields. */
export function buildEnhancedUserData(
  payload: Pick<LeadConversionPayload, "fullName" | "email" | "country">
): EnhancedUserData | undefined {
  const cleanEmail = payload.email?.trim().toLowerCase();
  const rawName = payload.fullName?.trim();
  const cleanName =
    rawName && rawName !== "Footer Lead" ? rawName : undefined;
  const cleanCountry =
    payload.country && payload.country !== "Other" ? payload.country.trim() : undefined;

  let firstName: string | undefined;
  let lastName: string | undefined;

  if (cleanName) {
    const parts = cleanName.split(/\s+/);
    firstName = parts[0];
    if (parts.length > 1) {
      lastName = parts.slice(1).join(" ");
    }
  }

  const address: EnhancedUserData["address"] = {};
  if (firstName) address.first_name = firstName;
  if (lastName) address.last_name = lastName;
  if (cleanCountry) address.country = cleanCountry;

  const hasAddress = Object.keys(address).length > 0;
  if (!cleanEmail && !hasAddress) return undefined;

  return {
    ...(cleanEmail ? { email: cleanEmail } : {}),
    ...(hasAddress ? { address } : {}),
  };
}

/**
 * Fires GTM dataLayer and gtag beacon events at the moment a lead form is submitted,
 * and persists Enhanced Conversions user_data briefly for the /thank-you-get-a-quote page.
 */
export function trackQuoteFormConversion(payload: LeadConversionPayload): void {
  if (typeof window === "undefined") return;

  const userData = buildEnhancedUserData(payload);
  const serviceInterest = payload.serviceInterest || "Marketing & Web Services";

  try {
    const stored: StoredPendingLead = {
      source: payload.source,
      serviceInterest,
      budget: payload.budget,
      userData,
      timestamp: Date.now(),
    };
    window.sessionStorage.setItem(PENDING_LEAD_STORAGE_KEY, JSON.stringify(stored));
  } catch {
    // Ignore storage failures in restricted browsing contexts
  }

  if (userData) {
    pushToDataLayer({ user_data: userData });
    window.gtag?.("set", "user_data", userData);
  }

  pushToDataLayer({
    event: "form_submit",
    form_id: payload.source,
    form_name: payload.source,
    lead_source: payload.source,
    service_interest: serviceInterest,
  });

  pushToDataLayer({
    event: "generate_lead",
    currency: "USD",
    lead_source: payload.source,
    service_interest: serviceInterest,
    ...(userData ? { user_data: userData } : {}),
  });

  window.gtag?.("event", "generate_lead", {
    lead_source: payload.source,
    service_interest: serviceInterest,
    transport_type: "beacon",
  });
}

/** Records lead conversion telemetry, allows beacons to flush, and performs a full load to /thank-you-get-a-quote. */
export async function trackAndRedirectToThankYou(
  payload: LeadConversionPayload
): Promise<void> {
  trackQuoteFormConversion(payload);

  // Brief settle window so sendBeacon/dataLayer hits flush cleanly before full navigation
  await new Promise((resolve) => setTimeout(resolve, 150));

  // Full document navigation guarantees GTM's gtm.js page-load trigger fires cleanly on /thank-you-get-a-quote
  window.location.href = THANK_YOU_PATH;
}

/** Reads and clears recent pending lead metadata (within 10 minutes) on the thank-you page. */
export function consumePendingLeadConversion(): StoredPendingLead | null {
  if (typeof window === "undefined") return null;

  if (window.__hdmConsumedLead) {
    const cached = window.__hdmConsumedLead;
    window.__hdmConsumedLead = null;
    return cached;
  }

  try {
    const raw = window.sessionStorage.getItem(PENDING_LEAD_STORAGE_KEY);
    if (!raw) return null;

    window.sessionStorage.removeItem(PENDING_LEAD_STORAGE_KEY);
    const parsed = JSON.parse(raw) as StoredPendingLead;

    if (!parsed || typeof parsed.timestamp !== "number") return null;
    if (Date.now() - parsed.timestamp > 10 * 60 * 1000) return null;

    return parsed;
  } catch {
    return null;
  }
}


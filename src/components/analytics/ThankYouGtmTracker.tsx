"use client";

import { useEffect, useRef } from "react";
import {
  consumePendingLeadConversion,
  pushToDataLayer,
  THANK_YOU_PATH,
} from "@/lib/gtm";

/**
 * Fires GTM dataLayer and GA4 conversion confirmation events when /thank-you-get-a-quote mounts.
 * Ensures Enhanced Conversions user_data and lead metadata are forwarded reliably.
 */
export function ThankYouGtmTracker() {
  const hasTracked = useRef(false);

  useEffect(() => {
    if (hasTracked.current) return;
    hasTracked.current = true;

    const pending = consumePendingLeadConversion();

    if (pending?.userData) {
      pushToDataLayer({ user_data: pending.userData });
      window.gtag?.("set", "user_data", pending.userData);
    }

    pushToDataLayer({
      event: "thank_you_page_view",
      conversion_page: THANK_YOU_PATH,
      lead_source: pending?.source || "Direct / Referral",
      service_interest: pending?.serviceInterest || "Marketing & Web Services",
      ...(pending?.userData ? { user_data: pending.userData } : {}),
    });

    if (pending) {
      pushToDataLayer({
        event: "quote_conversion_complete",
        lead_source: pending.source,
        service_interest: pending.serviceInterest || "Marketing & Web Services",
      });

      window.gtag?.("event", "lead_conversion_confirmed", {
        lead_source: pending.source,
        service_interest: pending.serviceInterest || "Marketing & Web Services",
        transport_type: "beacon",
      });
    }
  }, []);

  return null;
}


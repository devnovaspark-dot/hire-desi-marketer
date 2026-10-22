import { NextRequest, NextResponse } from "next/server";

interface QuotePayload {
  fullName?: string;
  email?: string;
  company?: string;
  country?: string;
  serviceInterest?: string;
  message?: string;
  source?: string;
}

const FORMSUBMIT_EMAIL =
  process.env.FORMSUBMIT_EMAIL?.trim() || "novasdmagency@gmail.com";

export async function POST(req: NextRequest) {
  try {
    const body: QuotePayload = await req.json();

    const { fullName, email, company, country, serviceInterest, message, source } = body;

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email.trim())) {
      return NextResponse.json(
        { error: "Please enter a valid work email address." },
        { status: 400 }
      );
    }

    // Determine clean name and allow quick lead / footer submissions
    const cleanName =
      fullName?.trim() || (source?.includes("Footer") ? "Quick Lead (Footer)" : "");

    if (!cleanName && !source?.includes("Footer")) {
      return NextResponse.json(
        { error: "Please enter your full name." },
        { status: 400 }
      );
    }

    const cleanCountry = country?.trim() || "Not specified";
    const cleanService =
      serviceInterest?.trim() || "Free Marketing Plan Consultation";
    const cleanCompany = company?.trim() || "Not provided";
    const cleanMessage = message?.trim() || "No additional message provided";
    const cleanSource = source?.trim() || "Quote Form / Hero Banner";

    // Extract headers for FormSubmit verification
    const origin =
      req.headers.get("origin") ||
      process.env.NEXT_PUBLIC_APP_URL ||
      "https://hiredesimarketer.com";
    const referer = req.headers.get("referer") || origin;

    const subject = `New Inquiry: ${cleanName || email.trim()} — ${cleanService}`;

    // Payload formatted for FormSubmit email table delivery
    const formSubmitPayload = {
      _subject: subject,
      _template: "table",
      _captcha: "false",
      "Full Name": cleanName || "N/A",
      "Work Email": email.trim(),
      "Company": cleanCompany,
      "Country / Region": cleanCountry,
      "Service Interest / Plan": cleanService,
      "Requirements / Notes": cleanMessage,
      "Submission Source": cleanSource,
      "Submitted At (UTC)": new Date().toISOString(),
    };

    console.log(`[FORMSUBMIT DISPATCH] Sending to ${FORMSUBMIT_EMAIL}:`, {
      name: cleanName,
      email: email.trim(),
      service: cleanService,
    });

    const formSubmitRes = await fetch(
      `https://formsubmit.co/ajax/${encodeURIComponent(FORMSUBMIT_EMAIL)}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Origin: origin,
          Referer: referer,
        },
        body: JSON.stringify(formSubmitPayload),
      }
    );

    const formSubmitData = await formSubmitRes.json().catch(() => null);

    console.log("[FORMSUBMIT RESPONSE]:", {
      status: formSubmitRes.status,
      data: formSubmitData,
      recipient: FORMSUBMIT_EMAIL,
    });

    const isActivationPending =
      formSubmitData?.message?.toLowerCase().includes("activation") || false;

    return NextResponse.json({
      success: true,
      mode: "formsubmit",
      recipient: FORMSUBMIT_EMAIL,
      activationPending: isActivationPending,
      message:
        "Thank you! Your quote request has been dispatched to our team.",
      formSubmitNotice: formSubmitData?.message || null,
    });
  } catch (error) {
    console.error("Quote API FormSubmit error:", error);
    return NextResponse.json(
      { error: "Internal server error processing quote request." },
      { status: 500 }
    );
  }
}

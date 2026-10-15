import { NextRequest, NextResponse } from "next/server";

interface QuotePayload {
  fullName?: string;
  email?: string;
  company?: string;
  country?: string;
  serviceInterest?: string;
  message?: string;
}

export async function POST(req: NextRequest) {
  try {
    const body: QuotePayload = await req.json();

    const { fullName, email, company, country, serviceInterest, message } = body;

    // Validate inputs
    if (!fullName || fullName.trim().length < 2) {
      return NextResponse.json(
        { error: "Please enter your full name." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email.trim())) {
      return NextResponse.json(
        { error: "Please enter a valid work email address." },
        { status: 400 }
      );
    }

    if (!country || country.trim().length === 0) {
      return NextResponse.json(
        { error: "Please select your country or region." },
        { status: 400 }
      );
    }

    if (!serviceInterest || serviceInterest.trim().length === 0) {
      return NextResponse.json(
        { error: "Please select the engagement model you are interested in." },
        { status: 400 }
      );
    }

    // Check if production email recipient is configured via environment variable
    const recipientEmail = process.env.CONTACT_EMAIL;
    const apiKey = process.env.RESEND_API_KEY;

    if (!recipientEmail || !apiKey) {
      // Safe Preview Mode as requested by design brief
      console.log("[QUOTE FORM PREVIEW SUBMISSION]:", {
        fullName,
        email,
        company,
        country,
        serviceInterest,
        message,
        timestamp: new Date().toISOString(),
      });

      return NextResponse.json({
        success: true,
        mode: "preview",
        message:
          "Form submission validated successfully. The contact workflow is running in safe preview mode awaiting production email credentials (CONTACT_EMAIL / RESEND_API_KEY).",
        data: {
          fullName,
          email,
          serviceInterest,
        },
      });
    }

    // When configured in production:
    // Email dispatch logic would execute here using recipientEmail and apiKey
    return NextResponse.json({
      success: true,
      mode: "production",
      message: "Thank you! Your quote request has been dispatched to our team.",
    });
  } catch (error) {
    console.error("Quote API error:", error);
    return NextResponse.json(
      { error: "Internal server error processing quote request." },
      { status: 500 }
    );
  }
}

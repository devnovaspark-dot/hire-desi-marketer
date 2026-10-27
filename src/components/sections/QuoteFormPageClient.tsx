"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  CheckCircle2,
  Clock,
  ShieldCheck,
  AlertCircle,
  Sparkles,
  ArrowRight,
  Lock,
  Globe2,
  MessageSquare,
  TrendingUp,
  Users,
} from "lucide-react";

export function QuoteFormPageClient() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    country: "United States",
    serviceInterest: "Dedicated team — request a quote (3/5/7)",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  useEffect(() => {
    router.prefetch("/thank-you-get-a-quote");
  }, [router]);

  const countries = [
    "United States",
    "Canada",
    "United Kingdom",
    "Australia",
    "Germany / Europe",
    "UAE / Middle East",
    "Singapore / Hong Kong",
    "India",
    "Other",
  ];

  const models = [
    "Dedicated team — request a quote (3/5/7)",
    "Hourly Dedicated Specialist ($8/hr)",
    "Growth Bundle ($999/mo) — Full Turnkey Marketing",
    "SEO & Content Marketing Squad",
    "Paid Media & Performance Ads (Google, Meta, TikTok)",
    "Social Media & Short-Form Video Production",
    "Custom Hybrid Marketing Team",
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    if (!formData.fullName.trim()) {
      setErrorMsg("Please enter your full name.");
      return;
    }

    if (!formData.email.trim() || !formData.email.includes("@")) {
      setErrorMsg("Please enter a valid work email address.");
      return;
    }

    setIsLoading(true);

    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          source: "Dedicated Quote Form Page (/get-a-quote)",
        }),
      });

      const data = await res.json().catch(() => null);

      if (!res.ok) {
        // Fallback directly to FormSubmit
        const fallbackRes = await fetch(
          "https://formsubmit.co/ajax/novasdmagency@gmail.com",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
            body: JSON.stringify({
              _subject: `New Lead (/get-a-quote): ${formData.fullName} - ${formData.serviceInterest}`,
              _template: "table",
              _captcha: "false",
              "Full Name": formData.fullName,
              "Work Email": formData.email,
              "Company": formData.company || "Not provided",
              "Country / Region": formData.country,
              "Service Model": formData.serviceInterest,
              "Message / Goals": formData.message || "Not specified",
              "Source": "Dedicated Quote Form Page (/get-a-quote)",
              "Submitted At": new Date().toISOString(),
            }),
          }
        );

        if (!fallbackRes.ok) {
          throw new Error(data?.error || "Submission failed. Please try again.");
        }
      }

      // Fast, immediate redirect directly to /thank-you-get-a-quote at the exact instant of submission
      window.location.href = "/thank-you-get-a-quote";
    } catch (err: unknown) {
      setIsLoading(false);
      if (err instanceof Error) {
        setErrorMsg(err.message);
      } else {
        setErrorMsg("An unexpected error occurred. Please try again.");
      }
    }
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Symmetrical Dual-Panel Stage */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 xl:gap-10 items-stretch">
        
        {/* =========================================================================
            LEFT PANEL: THE VISUAL PANEL (HIGH-RES TEAM IMAGE + VALUE PROPOSITION)
            ========================================================================= */}
        <div className="lg:col-span-6 rounded-3xl overflow-hidden relative border-2 border-[#D8D0C0] shadow-2xl bg-[#060B24] flex flex-col justify-between p-6 sm:p-8 lg:p-9 min-h-[520px] lg:min-h-[580px] group">
          {/* Background Image: Real Team at Bhubaneswar HQ */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/1200_1000px.webp"
              alt="Hire Desi Marketer Dedicated In-House Team at Bhubaneswar Campus"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 620px"
              className="object-cover object-center group-hover:scale-[1.03] transition-transform duration-700"
            />
            {/* Rich Luxury Vignette Gradients for Text Contrast */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#040716] via-[#040716]/65 to-[#040716]/80 pointer-events-none" />
          </div>

          {/* Top Content Layer */}
          <div className="relative z-10 flex flex-col gap-3.5 sm:gap-4 text-left">
            <div className="flex items-center justify-between gap-2">
              <span className="skeuo-badge-gold px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-wider inline-flex items-center gap-1.5 w-fit shadow-md">
                <Sparkles className="w-3.5 h-3.5 text-[#FFB020]" />
                <span>Free 90-Day Plan &amp; Audit</span>
              </span>

              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#060B24]/90 backdrop-blur-md border border-white/20 text-[11px] text-white font-bold shadow-md">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>100% In-House Team</span>
              </div>
            </div>

            <h1 className="font-display text-3xl sm:text-4xl lg:text-[2.65rem] font-black text-white tracking-tight leading-[1.08] drop-shadow-md">
              Stop overpaying for marketing.{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFB020] via-[#FFD166] to-[#FFE28A] block">
                Hire Desi.
              </span>
            </h1>

            <p className="text-sm sm:text-base text-slate-200 leading-relaxed max-w-lg drop-shadow-sm">
              Tell us about your brand and growth goals. We will prepare an in-depth audit,
              a custom 90-day execution roadmap, and a transparent quote tailored to your budget.
            </p>
          </div>

          {/* Bottom Content Layer: Trust Checkmarks + Live Campus Pill */}
          <div className="relative z-10 flex flex-col gap-4 pt-6">
            {/* 3 Reassurance Checkmarks */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              <div className="p-2.5 rounded-xl bg-[#060B24]/90 backdrop-blur-md border border-white/15 flex flex-col gap-0.5 text-left shadow-lg">
                <div className="flex items-center gap-1.5 text-emerald-400 font-extrabold text-xs">
                  <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                  <span>24h Turnaround</span>
                </div>
                <span className="text-[11px] text-slate-300 leading-tight">
                  Guaranteed custom roadmap
                </span>
              </div>

              <div className="p-2.5 rounded-xl bg-[#060B24]/90 backdrop-blur-md border border-white/15 flex flex-col gap-0.5 text-left shadow-lg">
                <div className="flex items-center gap-1.5 text-blue-400 font-extrabold text-xs">
                  <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
                  <span>Mutual NDA</span>
                </div>
                <span className="text-[11px] text-slate-300 leading-tight">
                  Strict IP protection on request
                </span>
              </div>

              <div className="p-2.5 rounded-xl bg-[#060B24]/90 backdrop-blur-md border border-white/15 flex flex-col gap-0.5 text-left shadow-lg">
                <div className="flex items-center gap-1.5 text-[#FFB020] font-extrabold text-xs">
                  <Clock className="w-3.5 h-3.5 shrink-0" />
                  <span>Zero Lock-In</span>
                </div>
                <span className="text-[11px] text-slate-300 leading-tight">
                  Cancel anytime flexibility
                </span>
              </div>
            </div>

            {/* Bottom Live Telemetry Bar */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 p-3 rounded-2xl bg-[#060B24]/95 backdrop-blur-xl border border-white/20 text-xs text-white shadow-xl">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                <span className="font-bold text-slate-200">
                  Bhubaneswar HQ Campus Live · Western Shifts Active
                </span>
              </div>
              <div className="flex items-center gap-1 text-[#FFB020] font-black uppercase tracking-wider text-[11px]">
                <Globe2 className="w-3.5 h-3.5" />
                <span>EST · PST · GMT Overlap</span>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================================
            RIGHT PANEL: THE CONVERSION FORM (LUXURY DARK CARD FORM)
            ========================================================================= */}
        <div className="lg:col-span-6 flex flex-col justify-center">
          <div className="skeuo-card-dark specular-shine rounded-3xl p-6 sm:p-8 lg:p-9 shadow-2xl relative border-2 border-white/20 h-full flex flex-col justify-between">
            <form onSubmit={handleSubmit} className="flex flex-col gap-3.5 sm:gap-4 my-auto">
                {/* Form Header */}
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <div>
                    <h2 className="font-display font-black text-xl sm:text-2xl text-white tracking-tight">
                      Request Your Free Marketing Plan
                    </h2>
                    <p className="text-xs text-slate-300 mt-0.5">
                      Delivered within 24 hours to your email · No commitment required
                    </p>
                  </div>
                  <span className="skeuo-badge-gold px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase shrink-0">
                    100% Free
                  </span>
                </div>

                {errorMsg && (
                  <div className="p-3 rounded-xl bg-rose-500/20 border border-rose-500/40 text-xs text-rose-200 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0 text-rose-300" />
                    <span>{errorMsg}</span>
                  </div>
                )}

                {/* Row 1: Full Name & Work Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                  <div className="flex flex-col gap-1 text-left">
                    <label
                      htmlFor="form-page-name"
                      className="text-[11px] font-bold uppercase tracking-wider text-slate-300"
                    >
                      Full Name *
                    </label>
                    <input
                      id="form-page-name"
                      name="fullName"
                      type="text"
                      required
                      placeholder="e.g. Alex Morgan"
                      value={formData.fullName}
                      onChange={(e) =>
                        setFormData({ ...formData, fullName: e.target.value })
                      }
                      className="skeuo-recessed-dark h-[40px] px-3.5 rounded-xl text-white placeholder:text-slate-500 text-sm focus:outline-none focus:border-[#FFB020] transition-colors border border-white/10"
                    />
                  </div>

                  <div className="flex flex-col gap-1 text-left">
                    <label
                      htmlFor="form-page-email"
                      className="text-[11px] font-bold uppercase tracking-wider text-slate-300"
                    >
                      Work Email *
                    </label>
                    <input
                      id="form-page-email"
                      name="email"
                      type="email"
                      required
                      placeholder="alex@company.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="skeuo-recessed-dark h-[40px] px-3.5 rounded-xl text-white placeholder:text-slate-500 text-sm focus:outline-none focus:border-[#FFB020] transition-colors border border-white/10"
                    />
                  </div>
                </div>

                {/* Row 2: Company & Country */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                  <div className="flex flex-col gap-1 text-left">
                    <label
                      htmlFor="form-page-company"
                      className="text-[11px] font-bold uppercase tracking-wider text-slate-300"
                    >
                      Company or Website
                    </label>
                    <input
                      id="form-page-company"
                      name="company"
                      type="text"
                      placeholder="e.g. Acme Corp / acme.com"
                      value={formData.company}
                      onChange={(e) =>
                        setFormData({ ...formData, company: e.target.value })
                      }
                      className="skeuo-recessed-dark h-[40px] px-3.5 rounded-xl text-white placeholder:text-slate-500 text-sm focus:outline-none focus:border-[#FFB020] transition-colors border border-white/10"
                    />
                  </div>

                  <div className="flex flex-col gap-1 text-left">
                    <label
                      htmlFor="form-page-country"
                      className="text-[11px] font-bold uppercase tracking-wider text-slate-300"
                    >
                      Country / Time Zone *
                    </label>
                    <select
                      id="form-page-country"
                      name="country"
                      value={formData.country}
                      onChange={(e) =>
                        setFormData({ ...formData, country: e.target.value })
                      }
                      className="skeuo-recessed-dark h-[40px] px-3.5 rounded-xl text-white text-sm focus:outline-none focus:border-[#FFB020] transition-colors cursor-pointer border border-white/10"
                    >
                      {countries.map((c) => (
                        <option key={c} value={c} className="bg-[#0B132B] text-white">
                          {c}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Row 3: Interested Model */}
                <div className="flex flex-col gap-1 text-left">
                  <label
                    htmlFor="form-page-model"
                    className="text-[11px] font-bold uppercase tracking-wider text-slate-300"
                  >
                    I&apos;m Interested In *
                  </label>
                  <select
                    id="form-page-model"
                    name="serviceInterest"
                    value={formData.serviceInterest}
                    onChange={(e) =>
                      setFormData({ ...formData, serviceInterest: e.target.value })
                    }
                    className="skeuo-recessed-dark h-[40px] px-3.5 rounded-xl text-white text-sm focus:outline-none focus:border-[#FFB020] transition-colors cursor-pointer border border-white/10"
                  >
                    {models.map((m) => (
                      <option key={m} value={m} className="bg-[#0B132B] text-white">
                        {m}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Row 4: Goals / Message */}
                <div className="flex flex-col gap-1 text-left">
                  <label
                    htmlFor="form-page-message"
                    className="text-[11px] font-bold uppercase tracking-wider text-slate-300"
                  >
                    Current Goals (Optional)
                  </label>
                  <textarea
                    id="form-page-message"
                    name="message"
                    rows={2}
                    placeholder="e.g. Scaling search ads, increasing local SEO ranking, or building a dedicated marketing squad..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="skeuo-recessed-dark h-[56px] px-3.5 py-2 rounded-xl text-white placeholder:text-slate-500 text-sm focus:outline-none focus:border-[#FFB020] transition-colors resize-none border border-white/10"
                  />
                </div>

                {/* Big 3D Luxury Gold Button */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="btn-luxury-gold btn-shimmer h-[48px] px-5 rounded-xl text-center text-xs sm:text-sm font-black uppercase tracking-wider flex items-center justify-center gap-2 group cursor-pointer shadow-lg mt-1 disabled:opacity-50"
                >
                  <span>
                    {isLoading ? "Submitting Plan Request..." : "Get My Free Plan & Quote"}
                  </span>
                  {!isLoading && (
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform stroke-[2.5]" />
                  )}
                </button>

                <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-400 text-center">
                  <Lock className="w-3 h-3 text-emerald-400" />
                  <span>Your data is strictly confidential. Mutual NDA guaranteed. Zero spam.</span>
                </div>
              </form>
          </div>
        </div>

      </div>
    </div>
  );
}

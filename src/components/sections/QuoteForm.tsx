"use client";

import React, { useState } from "react";
import {
  CheckCircle2,
  Clock,
  ShieldCheck,
  AlertCircle,
  Sparkles,
  ArrowRight,
  Lock,
} from "lucide-react";

export function QuoteForm() {
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
  const [successInfo, setSuccessInfo] = useState<{
    mode: string;
    message: string;
  } | null>(null);

  const countries = [
    "United States",
    "Canada",
    "United Kingdom",
    "Australia",
    "Germany / Europe",
    "UAE / Middle East",
    "Africa",
    "Singapore / Hong Kong",
    "Other",
  ];

  const models = [
    "Dedicated team — request a quote (3/5/7)",
    "$999/mo Growth Bundle",
    "Hourly — $8/hr",
    "Not sure — advise me on the best model",
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    if (!formData.fullName.trim()) {
      setErrorMsg("Please enter your name.");
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
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Submission failed.");
      }

      setSuccessInfo({
        mode: data.mode,
        message: data.message,
      });
    } catch (err: unknown) {
      if (err instanceof Error) {
        setErrorMsg(err.message);
      } else {
        setErrorMsg("An unexpected error occurred. Please try again.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="quote" className="py-10 lg:py-14 bg-[#FAF8F5] border-t border-[#E2DBD0] scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Reassurance & Proposition */}
          <div className="lg:col-span-5 flex flex-col gap-6 text-left">
            <span className="skeuo-badge-gold px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-wider inline-flex items-center gap-1.5 w-fit">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Free 90-Day Plan &amp; Audit</span>
            </span>

            <h2 className="font-display text-4xl sm:text-5xl font-black text-[#0B1B3A] tracking-tight leading-[1.08]">
              Stop overpaying for marketing.{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C47900] to-[#FFB020] block">
                Hire Desi.
              </span>
            </h2>

            <p className="text-base sm:text-lg text-[#5A6680] leading-relaxed">
              Tell us about your brand and growth goals. We will prepare an in-depth audit,
              a 90-day execution roadmap, and a transparent quote tailored to your budget.
            </p>

            <div className="flex flex-col gap-3 pt-2 text-sm text-[#0B1B3A]">
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <span className="font-bold">Guaranteed response within 24 hours</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-3.5 h-3.5" />
                </div>
                <span className="font-bold">Mutual NDA on request</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                  <Clock className="w-3.5 h-3.5" />
                </div>
                <span className="font-bold">Zero lock-in contracts · Cancel anytime</span>
              </div>
            </div>
          </div>

          {/* Right Column: Clean, High-Conversion Conversion Terminal */}
          <div className="lg:col-span-7">
            <div className="skeuo-card-dark specular-shine rounded-3xl p-6 sm:p-10 shadow-2xl relative border border-white/20">
              {successInfo ? (
                <div className="flex flex-col items-center text-center py-10 gap-4 animate-in fade-in duration-300">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center shadow-xl">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>

                  <h3 className="font-display font-black text-2xl sm:text-3xl text-white">
                    Request Received Successfully!
                  </h3>

                  <p className="text-sm text-slate-300 max-w-md leading-relaxed">
                    Thank you, <strong>{formData.fullName}</strong>. Your inquiry for{" "}
                    <strong>{formData.serviceInterest}</strong> has been logged. Our operations desk will reach out within 24 hours.
                  </p>

                  <button
                    onClick={() => {
                      setSuccessInfo(null);
                      setFormData({
                        fullName: "",
                        email: "",
                        company: "",
                        country: "United States",
                        serviceInterest: "Dedicated team — request a quote (3/5/7)",
                        message: "",
                      });
                    }}
                    className="skeuo-button-navy px-5 py-2.5 rounded-xl text-xs font-bold mt-2 cursor-pointer"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div className="flex items-center justify-between pb-3 border-b border-white/10">
                    <div>
                      <h3 className="font-display font-black text-xl text-white">
                        Request Your Free Marketing Plan
                      </h3>
                      <p className="text-xs text-slate-300 mt-0.5">
                        Delivered within 24 hours to your email
                      </p>
                    </div>
                    <span className="skeuo-badge-gold px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase">
                      100% Free
                    </span>
                  </div>

                  {errorMsg && (
                    <div className="p-3 rounded-xl bg-rose-500/20 border border-rose-500/40 text-xs text-rose-200 flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div className="flex flex-col gap-1.5 text-left">
                      <label htmlFor="name-input" className="text-xs font-bold uppercase tracking-wider text-slate-300">
                        Full Name *
                      </label>
                      <input
                        id="name-input"
                        type="text"
                        required
                        placeholder="e.g. Alex Morgan"
                        value={formData.fullName}
                        onChange={(e) =>
                          setFormData({ ...formData, fullName: e.target.value })
                        }
                        className="skeuo-recessed-dark px-4 py-2.5 rounded-xl text-white placeholder:text-slate-500 text-sm focus:outline-none focus:border-[#FFB020] transition-colors border border-white/10"
                      />
                    </div>

                    {/* Email */}
                    <div className="flex flex-col gap-1.5 text-left">
                      <label htmlFor="email-input" className="text-xs font-bold uppercase tracking-wider text-slate-300">
                        Work Email *
                      </label>
                      <input
                        id="email-input"
                        type="email"
                        required
                        placeholder="alex@company.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="skeuo-recessed-dark px-4 py-2.5 rounded-xl text-white placeholder:text-slate-500 text-sm focus:outline-none focus:border-[#FFB020] transition-colors border border-white/10"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Company */}
                    <div className="flex flex-col gap-1.5 text-left">
                      <label htmlFor="company-input" className="text-xs font-bold uppercase tracking-wider text-slate-300">
                        Company or Website
                      </label>
                      <input
                        id="company-input"
                        type="text"
                        placeholder="e.g. Acme Corp / acme.com"
                        value={formData.company}
                        onChange={(e) =>
                          setFormData({ ...formData, company: e.target.value })
                        }
                        className="skeuo-recessed-dark px-4 py-2.5 rounded-xl text-white placeholder:text-slate-500 text-sm focus:outline-none focus:border-[#FFB020] transition-colors border border-white/10"
                      />
                    </div>

                    {/* Country */}
                    <div className="flex flex-col gap-1.5 text-left">
                      <label htmlFor="country-select" className="text-xs font-bold uppercase tracking-wider text-slate-300">
                        Country / Time Zone *
                      </label>
                      <select
                        id="country-select"
                        value={formData.country}
                        onChange={(e) =>
                          setFormData({ ...formData, country: e.target.value })
                        }
                        className="skeuo-recessed-dark px-4 py-2.5 rounded-xl text-white text-sm focus:outline-none focus:border-[#FFB020] transition-colors cursor-pointer border border-white/10"
                      >
                        {countries.map((c) => (
                          <option key={c} value={c} className="bg-[#0B132B] text-white">
                            {c}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Interested Model */}
                  <div className="flex flex-col gap-1.5 text-left">
                    <label htmlFor="model-select" className="text-xs font-bold uppercase tracking-wider text-slate-300">
                      I&apos;m Interested In *
                    </label>
                    <select
                      id="model-select"
                      value={formData.serviceInterest}
                      onChange={(e) =>
                        setFormData({ ...formData, serviceInterest: e.target.value })
                      }
                      className="skeuo-recessed-dark px-4 py-2.5 rounded-xl text-white text-sm focus:outline-none focus:border-[#FFB020] transition-colors cursor-pointer border border-white/10"
                    >
                      {models.map((m) => (
                        <option key={m} value={m} className="bg-[#0B132B] text-white">
                          {m}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Goals */}
                  <div className="flex flex-col gap-1.5 text-left">
                    <label htmlFor="message-input" className="text-xs font-bold uppercase tracking-wider text-slate-300">
                      Current Goals (Optional)
                    </label>
                    <textarea
                      id="message-input"
                      rows={2}
                      placeholder="e.g. Scaling search ads, increasing local SEO ranking, or producing short-form Reels..."
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="skeuo-recessed-dark px-4 py-2.5 rounded-xl text-white placeholder:text-slate-500 text-sm focus:outline-none focus:border-[#FFB020] transition-colors resize-none border border-white/10"
                    />
                  </div>

                  {/* Physical 3D Push Button - Sleek & Tactile */}
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="btn-luxury-gold btn-shimmer h-[44px] px-5 rounded-xl text-center text-xs sm:text-sm font-black uppercase tracking-wider flex items-center justify-center gap-2 group cursor-pointer shadow-lg mt-1 disabled:opacity-50"
                  >
                    <span>
                      {isLoading ? "Submitting..." : "Get My Free Plan & Quote"}
                    </span>
                    {!isLoading && <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform stroke-[2.5]" />}
                  </button>

                  <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-400 text-center">
                    <Lock className="w-3 h-3 text-emerald-400" />
                    <span>Your data is strictly confidential. No spam, ever.</span>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

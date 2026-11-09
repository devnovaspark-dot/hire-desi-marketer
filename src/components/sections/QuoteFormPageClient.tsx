"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  CheckCircle2,
  Clock,
  ShieldCheck,
  Sparkles,
  ArrowRight,
  Building2,
  User,
  Mail,
  Globe,
  Layers,
  Send,
  Lock,
} from "lucide-react";

export function QuoteFormPageClient() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    websiteUrl: "",
    serviceNeeded: "Custom Website Design & Bespoke Dev",
    engagementModel: "Fixed-Cost Project (Milestone-based)",
    projectScope: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  useEffect(() => {
    router.prefetch("/thank-you-get-a-quote");
  }, [router]);

  const serviceOptions = [
    "Custom Website Design & Bespoke Dev",
    "Website Redesign & Modernization",
    "E-Commerce Storefront (Shopify Plus & Stripe)",
    "Modern CMS Platform (WordPress & Webflow)",
    "Full-Service Digital Marketing & SEO",
    "Dedicated Full-Stack Dev Squad",
  ];

  const engagementOptions = [
    "Fixed-Cost Project (Milestone-based)",
    "Monthly Dedicated Dev Squad",
    "Hourly Dedicated Support",
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
          fullName: formData.fullName,
          email: formData.email,
          company: formData.company,
          websiteUrl: formData.websiteUrl,
          serviceInterest: `${formData.serviceNeeded} (${formData.engagementModel})`,
          message: formData.projectScope || "Requested via Dedicated Quote Form",
          source: "Dedicated Dual-Pane Quote Page (/get-a-quote)",
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
              _subject: `New Lead (/get-a-quote): ${formData.fullName} - ${formData.serviceNeeded}`,
              _template: "table",
              _captcha: "false",
              "Full Name": formData.fullName,
              "Work Email": formData.email,
              "Company": formData.company || "Not provided",
              "Website URL": formData.websiteUrl || "Not provided",
              "Service Needed": formData.serviceNeeded,
              "Engagement Model": formData.engagementModel,
              "Project Scope / Notes": formData.projectScope || "Not specified",
              "Source": "Dedicated Dual-Pane Quote Page (/get-a-quote)",
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
      {/* Symmetrical Luxury Dual-Pane Stage */}
      <div className="rounded-3xl skeuo-card-dark text-white p-4 sm:p-8 lg:p-12 border-2 border-white/15 shadow-2xl relative overflow-hidden">
        {/* Background Ambient Glows */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#FFB020]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
          {/* =========================================================================
              LEFT PANE (6 cols): Dark Luxury Authority, Team Avatars & Trust
              ========================================================================= */}
          <div className="lg:col-span-6 space-y-4 sm:space-y-6 text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-slate-200 text-xs font-black uppercase tracking-wider border border-white/15 shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#FFB020]" />
              <span>Get Started Today</span>
            </div>

            <h1 className="font-display font-black text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight leading-[1.14]">
              Ready to Build, Redesign or Upgrade Your Website?
            </h1>

            <p className="text-xs sm:text-base text-slate-300 leading-relaxed font-normal">
              Let&apos;s turn your website ideas into reality. Whether you&apos;re
              starting from scratch, improving an existing website, or
              looking for dedicated development support, our team is ready to
              help.
            </p>

            {/* Team Avatars & Direct Architect Access */}
            <div className="p-3 sm:p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-3 sm:gap-4 shadow-inner">
              <div className="flex -space-x-2.5 sm:-space-x-3 overflow-hidden shrink-0">
                <div className="inline-block h-9 w-9 sm:h-11 sm:w-11 rounded-full ring-2 ring-[#060B22] overflow-hidden relative">
                  <Image
                    src="/images/team-sankarsan.webp"
                    alt="Sankarsan Nayak - Founder & CEO"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="inline-block h-9 w-9 sm:h-11 sm:w-11 rounded-full ring-2 ring-[#060B22] overflow-hidden relative">
                  <Image
                    src="/images/team-pranjal.webp"
                    alt="Pranjal Sharma - COO"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="inline-block h-9 w-9 sm:h-11 sm:w-11 rounded-full ring-2 ring-[#060B22] overflow-hidden relative">
                  <Image
                    src="/images/team-bikram.webp"
                    alt="Bikram Keshari Sahu - Operations"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div>
                <div className="text-xs sm:text-[13px] font-bold text-white leading-tight">
                  Direct Access to Senior Web Architects
                </div>
                <div className="text-[10.5px] sm:text-xs text-[#FFB020] font-semibold mt-0.5">
                  Free scoping roadmap &amp; fixed milestone quotation
                </div>
              </div>
            </div>

            {/* Reassurance Checks */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-1 text-xs text-slate-300">
              <div className="flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Response in &lt; 24h</span>
              </div>
              <span className="text-slate-600">•</span>
              <div className="flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Zero Obligation</span>
              </div>
              <span className="text-slate-600">•</span>
              <div className="flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Strict NDA</span>
              </div>
            </div>
          </div>

          {/* =========================================================================
              RIGHT PANE (6 cols): Clean White Conversion Form
              ========================================================================= */}
          <div className="lg:col-span-6">
            <div className="bg-white text-slate-900 rounded-2xl sm:rounded-3xl p-5 sm:p-7 lg:p-8 shadow-2xl border border-white/20 text-left">
              {/* Form Header */}
              <div className="mb-4 sm:mb-5 pb-3 border-b border-slate-100">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#FFB020]/15 text-[#B87A00] text-[10px] font-black uppercase tracking-wider mb-1.5">
                  <Sparkles className="w-3 h-3 text-[#FFB020]" />
                  <span>Fast 24-Hour Scope</span>
                </div>
                <h2 className="font-display font-black text-xl sm:text-2xl text-[#0B1B3A] tracking-tight">
                  Start Your Free Consultation
                </h2>
                <p className="text-xs text-slate-500 mt-0.5">
                  Share your requirements &amp; our technical architects will prepare your scope.
                </p>
              </div>

              {errorMsg && (
                <div className="mb-4 p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs font-semibold">
                  {errorMsg}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-3.5">
                {/* Row 1: Name and Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) =>
                          setFormData({ ...formData, fullName: e.target.value })
                        }
                        placeholder="e.g. Alex Morgan"
                        className="w-full pl-9 pr-3 py-2 text-xs rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-[#FFB020] focus:ring-2 focus:ring-[#FFB020]/20 outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Work Email *
                    </label>
                    <div className="relative">
                      <Mail className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="alex@company.com"
                        className="w-full pl-9 pr-3 py-2 text-xs rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-[#FFB020] focus:ring-2 focus:ring-[#FFB020]/20 outline-none transition-all"
                      />
                    </div>
                  </div>
                </div>

                {/* Row 2: Company and Website */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Company
                    </label>
                    <div className="relative">
                      <Building2 className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) =>
                          setFormData({ ...formData, company: e.target.value })
                        }
                        placeholder="Company / brand name"
                        className="w-full pl-9 pr-3 py-2 text-xs rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-[#FFB020] focus:ring-2 focus:ring-[#FFB020]/20 outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Website URL
                    </label>
                    <div className="relative">
                      <Globe className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        value={formData.websiteUrl}
                        onChange={(e) =>
                          setFormData({ ...formData, websiteUrl: e.target.value })
                        }
                        placeholder="https://yourwebsite.com"
                        className="w-full pl-9 pr-3 py-2 text-xs rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-[#FFB020] focus:ring-2 focus:ring-[#FFB020]/20 outline-none transition-all"
                      />
                    </div>
                  </div>
                </div>

                {/* Row 3: Service and Model */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Service Needed
                    </label>
                    <div className="relative">
                      <Layers className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                      <select
                        value={formData.serviceNeeded}
                        onChange={(e) =>
                          setFormData({ ...formData, serviceNeeded: e.target.value })
                        }
                        className="w-full pl-9 pr-3 py-2 text-xs rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:bg-white focus:border-[#FFB020] focus:ring-2 focus:ring-[#FFB020]/20 outline-none transition-all cursor-pointer"
                      >
                        {serviceOptions.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Engagement Model
                    </label>
                    <div className="relative">
                      <Clock className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                      <select
                        value={formData.engagementModel}
                        onChange={(e) =>
                          setFormData({ ...formData, engagementModel: e.target.value })
                        }
                        className="w-full pl-9 pr-3 py-2 text-xs rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:bg-white focus:border-[#FFB020] focus:ring-2 focus:ring-[#FFB020]/20 outline-none transition-all cursor-pointer"
                      >
                        {engagementOptions.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                {/* Project Scope / Notes */}
                <div>
                  <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Project Scope / Notes
                  </label>
                  <textarea
                    rows={3}
                    value={formData.projectScope}
                    onChange={(e) =>
                      setFormData({ ...formData, projectScope: e.target.value })
                    }
                    placeholder="Briefly describe your project scope, target timeline, or reference links..."
                    className="w-full p-3 text-xs rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-[#FFB020] focus:ring-2 focus:ring-[#FFB020]/20 outline-none transition-all resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full btn-luxury-gold btn-shimmer py-3.5 px-6 rounded-xl font-display font-black text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg hover:shadow-[0_0_25px_rgba(255,176,32,0.4)] transition-all cursor-pointer disabled:opacity-60"
                >
                  {isLoading ? (
                    <span>Submitting Your Scope...</span>
                  ) : (
                    <>
                      <span>Get Free Consultation &amp; Estimate</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>

                {/* Trust Footer */}
                <div className="pt-1 flex items-center justify-center gap-3 text-[10px] text-slate-500 font-semibold text-center">
                  <span className="flex items-center gap-1">
                    <Lock className="w-3 h-3 text-emerald-600" />
                    100% Confidential • Strict NDA
                  </span>
                  <span>•</span>
                  <span>No Obligation Proposal</span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

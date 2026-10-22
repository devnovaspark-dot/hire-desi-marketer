"use client";

import React, { useState } from "react";
import {
  CheckCircle2,
  ArrowRight,
  Sparkles,
  User,
  Mail,
  Globe2,
  SlidersHorizontal,
  Clock,
  ShieldCheck,
  Check,
} from "lucide-react";
import { cn } from "@/lib/utils";

export function QuickQuoteHeroBanner() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    country: "United States",
    serviceInterest: "Growth Bundle — $999/mo",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const planOptions = [
    { id: "Hourly — $8/hr", label: "⚡ Hourly ($8/hr)", tag: "Pay-As-You-Go" },
    { id: "Growth Bundle — $999/mo", label: "🔥 Growth Bundle ($999/mo)", tag: "Most Popular", highlight: true },
    { id: "Dedicated Team — 3/5/7", label: "🏢 Dedicated Squad (3/5/7)", tag: "Full-Stack" },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email) return;

    setIsSubmitting(true);
    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          source: "Hero Express Proposal Banner",
          message: `Quick Quote Banner inquiry for ${formData.serviceInterest}`,
        }),
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        // Fallback directly to FormSubmit
        await fetch("https://formsubmit.co/ajax/novasdmagency@gmail.com", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            _subject: `New Lead (Hero Banner): ${formData.fullName} - ${formData.serviceInterest}`,
            _template: "table",
            _captcha: "false",
            "Full Name": formData.fullName,
            "Work Email": formData.email,
            "Country": formData.country,
            "Selected Plan": formData.serviceInterest,
            "Source": "Hero Express Proposal Banner",
            "Submitted At": new Date().toISOString(),
          }),
        });
        setSubmitted(true);
      }
    } catch {
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative -mt-6 sm:-mt-16 z-30 max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
      {/* High-Fidelity Skeuomorphic Proposal Console */}
      <div className="relative bg-gradient-to-b from-[#FFFFFF] via-[#FAF8F3] to-[#F2EFE7] rounded-2xl sm:rounded-3xl p-3.5 sm:p-7 shadow-[0_30px_70px_-15px_rgba(11,27,58,0.25),0_12px_24px_-6px_rgba(11,27,58,0.1),inset_0_2px_0_rgba(255,255,255,1)] border border-[#DDD6C8] border-b-[5px] border-b-[#C4B8A2] overflow-hidden">
        {/* Specular Top Rim */}
        <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#FFB020] to-transparent opacity-80" />

        {/* Card Header Row */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 sm:gap-3 pb-3 sm:pb-4 border-b border-[#E8E1D3]">
          <div className="flex flex-col gap-0.5">
            <span className="text-[10px] sm:text-[11px] font-black uppercase tracking-wider text-[#9A5B00] flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#FFB020]" />
              Express Proposal Terminal
            </span>
            <h2 className="font-display text-lg sm:text-2xl lg:text-3xl font-black text-[#0B1B3A] tracking-tight">
              Get a free custom marketing plan in 24 hours
            </h2>
          </div>
          <div className="flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs font-black text-emerald-800 bg-emerald-100/90 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full border border-emerald-300 w-fit shadow-xs">
            <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-700 shrink-0 stroke-[2.5]" />
            <span>Free · No obligation · Strict NDA</span>
          </div>
        </div>

        {/* Interactive Model Selection Pills (Zero Layout Shift Guaranteed) */}
        <div className="pt-2.5 sm:pt-3 pb-1 flex flex-wrap items-center gap-2">
          <span className="text-[10px] sm:text-[11px] font-black uppercase tracking-wider text-[#5A6680] shrink-0">
            Selected Tier:
          </span>
          <div className="flex flex-wrap items-center gap-1 sm:gap-1.5 p-1 rounded-xl sm:rounded-2xl bg-[#EAE4D7] border border-[#D5CDBC] shadow-[inset_0_2px_4px_rgba(0,0,0,0.08)]">
            {planOptions.map((opt) => {
              const isSelected = formData.serviceInterest === opt.id;
              return (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => setFormData({ ...formData, serviceInterest: opt.id })}
                  className={cn(
                    "px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg sm:rounded-xl text-[11px] sm:text-xs font-black transition-colors cursor-pointer flex items-center gap-1 sm:gap-1.5 border-2",
                    isSelected
                      ? "bg-[#0B1B3A] text-white border-[#FFB020] shadow-[0_4px_12px_rgba(11,27,58,0.25)]"
                      : "bg-white/80 text-[#0B1B3A] border-transparent hover:bg-white hover:text-[#0B1B3A]"
                  )}
                >
                  <span>{opt.label}</span>
                  <span
                    className={cn(
                      "w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-colors shrink-0",
                      isSelected ? "bg-[#FFB020] animate-pulse" : "bg-transparent"
                    )}
                  />
                </button>
              );
            })}
          </div>
        </div>

        {/* Form Inputs Horizontal Strip with Tactile Wells & Real Icons */}
        {submitted ? (
          <div className="py-6 flex items-center justify-center gap-3 text-emerald-800 bg-emerald-50 rounded-2xl border border-emerald-300 mt-4 shadow-xs">
            <CheckCircle2 className="w-6 h-6 text-emerald-600" />
            <div className="text-sm font-bold">
              Thank you {formData.fullName}! Your request has been received. Our Bhubaneswar leadership desk will deliver your 90-day plan within 24 hours.
            </div>
          </div>
        ) : (
          <form
            action="https://formsubmit.co/novasdmagency@gmail.com"
            method="POST"
            onSubmit={handleSubmit}
            className="pt-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-3 items-end"
          >
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />
            <input
              type="hidden"
              name="_subject"
              value={`New Quote Request (Hero): ${formData.fullName || "Inquiry"} - ${formData.serviceInterest}`}
            />

            {/* Full Name */}
            <div className="lg:col-span-3 flex flex-col gap-1 text-left">
              <label htmlFor="quick-name" className="text-[11px] font-black uppercase tracking-wider text-[#4A5568]">
                Full name
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#5A6680]">
                  <User className="w-4 h-4 text-[#9A5B00]" />
                </div>
                <input
                  id="quick-name"
                  name="fullName"
                  type="text"
                  required
                  placeholder="Jane Cooper"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full pl-10 pr-3 py-2.5 rounded-xl border border-[#D5CDBC] border-t-[#BFB39E] bg-[#F7F4EE] text-sm font-bold text-[#0B1B3A] placeholder:text-[#5A6680]/50 shadow-[inset_0_2px_4px_rgba(11,27,58,0.06)] focus:bg-white focus:border-[#FFB020] focus:ring-2 focus:ring-[#FFB020]/25 transition-all outline-none"
                />
              </div>
            </div>

            {/* Work Email */}
            <div className="lg:col-span-3 flex flex-col gap-1 text-left">
              <label htmlFor="quick-email" className="text-[11px] font-black uppercase tracking-wider text-[#4A5568]">
                Work email
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#5A6680]">
                  <Mail className="w-4 h-4 text-[#9A5B00]" />
                </div>
                <input
                  id="quick-email"
                  name="email"
                  type="email"
                  required
                  placeholder="jane@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full pl-10 pr-3 py-2.5 rounded-xl border border-[#D5CDBC] border-t-[#BFB39E] bg-[#F7F4EE] text-sm font-bold text-[#0B1B3A] placeholder:text-[#5A6680]/50 shadow-[inset_0_2px_4px_rgba(11,27,58,0.06)] focus:bg-white focus:border-[#FFB020] focus:ring-2 focus:ring-[#FFB020]/25 transition-all outline-none"
                />
              </div>
            </div>

            {/* Country Dropdown */}
            <div className="lg:col-span-2 flex flex-col gap-1 text-left">
              <label htmlFor="quick-country" className="text-[11px] font-black uppercase tracking-wider text-[#4A5568]">
                Country
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#5A6680]">
                  <Globe2 className="w-4 h-4 text-[#9A5B00]" />
                </div>
                <select
                  id="quick-country"
                  name="country"
                  value={formData.country}
                  onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                  className="w-full pl-10 pr-3 py-2.5 rounded-xl border border-[#D5CDBC] border-t-[#BFB39E] bg-[#F7F4EE] text-sm font-bold text-[#0B1B3A] shadow-[inset_0_2px_4px_rgba(11,27,58,0.06)] focus:bg-white focus:border-[#FFB020] focus:ring-2 focus:ring-[#FFB020]/25 transition-all outline-none cursor-pointer"
                >
                  <option value="United States">United States</option>
                  <option value="Canada">Canada</option>
                  <option value="United Kingdom">United Kingdom</option>
                  <option value="Australia">Australia</option>
                  <option value="Germany / Europe">Germany / Europe</option>
                  <option value="UAE / Middle East">UAE / Middle East</option>
                  <option value="Singapore">Singapore</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>

            {/* Service Interest (Hidden on desktop since chips control it, or secondary selector) */}
            <div className="lg:col-span-2 flex flex-col gap-1 text-left">
              <label htmlFor="quick-service" className="text-[11px] font-black uppercase tracking-wider text-[#4A5568]">
                Plan Type
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#5A6680]">
                  <SlidersHorizontal className="w-4 h-4 text-[#9A5B00]" />
                </div>
                <select
                  id="quick-service"
                  name="serviceInterest"
                  value={formData.serviceInterest}
                  onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
                  className="w-full pl-10 pr-2 py-2.5 rounded-xl border border-[#D5CDBC] border-t-[#BFB39E] bg-[#F7F4EE] text-xs font-bold text-[#0B1B3A] shadow-[inset_0_2px_4px_rgba(11,27,58,0.06)] focus:bg-white focus:border-[#FFB020] focus:ring-2 focus:ring-[#FFB020]/25 transition-all outline-none cursor-pointer truncate"
                >
                  <option value="Hourly — $8/hr">Hourly — $8/hr</option>
                  <option value="Growth Bundle — $999/mo">Growth Bundle — $999/mo</option>
                  <option value="Dedicated Team — 3/5/7">Dedicated Team (3/5/7)</option>
                  <option value="Advise Me on Best Model">Advise Me on Best Model</option>
                </select>
              </div>
            </div>

            {/* 3D Tactile Skeuomorphic Submit Button - Sleek & Exact 42px Matching Height */}
            <div className="lg:col-span-2 flex flex-col justify-end">
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-luxury-gold btn-shimmer w-full h-[42px] px-3 rounded-xl text-xs font-black uppercase tracking-wide flex items-center justify-center gap-1.5 cursor-pointer shadow-md disabled:opacity-50 whitespace-nowrap"
              >
                <span>{isSubmitting ? "Sending..." : "Get Free Plan"}</span>
                <ArrowRight className="w-4 h-4 shrink-0 stroke-[2.5]" />
              </button>
            </div>
          </form>
        )}

        {/* Bottom Micro-Guarantees */}
        <div className="pt-3 mt-3 border-t border-[#E8E1D3] flex flex-wrap items-center justify-between text-[11px] text-[#5A6680] gap-2">
          <div className="flex items-center gap-1.5 font-bold text-[#0B1B3A]">
            <Clock className="w-3.5 h-3.5 text-[#FFB020]" />
            <span>Guaranteed &lt; 24h Turnaround</span>
          </div>
          <div className="flex items-center gap-1.5 font-bold text-[#0B1B3A]">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>100% Confidential Mutual NDA</span>
          </div>
          <div className="flex items-center gap-1.5 font-bold text-[#0B1B3A]">
            <Check className="w-3.5 h-3.5 text-emerald-600" />
            <span>Competitor Audit &amp; 90-Day Roadmap Included</span>
          </div>
        </div>
      </div>
    </div>
  );
}

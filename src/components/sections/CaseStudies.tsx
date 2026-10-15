"use client";

import React, { useState } from "react";
import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CASE_STUDIES } from "@/data/case-studies";
import {
  Check,
  ArrowRight,
  ShieldAlert,
  BarChart3,
  MapPin,
  Sparkles,
  TrendingUp,
  CheckCircle2,
  Stethoscope,
  Home,
  Coffee,
  ShieldCheck,
  Clock,
  Layers,
} from "lucide-react";
import { cn } from "@/lib/utils";

// Industry icons and short location badges for the compact tactile filter
const INDUSTRY_CONFIG: Record<
  string,
  { icon: React.ElementType; shortLocation: string; deliverables: string[] }
> = {
  "dental-clinic": {
    icon: Stethoscope,
    shortLocation: "Toronto, CA",
    deliverables: ["Dynamic GA4 Call Tracking", "60-Sec Mobile Booking Funnel", "Weekly Negative Keyword Pruning"],
  },
  "roofing-contractor": {
    icon: Home,
    shortLocation: "Dallas, US",
    deliverables: ["Google Map Pack Local 3-Pack", "Emergency Storm Landing Pages", "Automated SMS Review Engine"],
  },
  "cafe-roastery": {
    icon: Coffee,
    shortLocation: "Sydney, AU",
    deliverables: ["4x Short-Form Reels/Wk", "Instagram Local Geo-Fencing", "Digital Barcode Offer Pacing"],
  },
  "aesthetic-clinic": {
    icon: Sparkles,
    shortLocation: "Dubai, UAE",
    deliverables: ["< 3 Min WhatsApp Auto-Routing", "High-Aesthetic Meta Lead Ads", "Full Clinical Mobile Redesign"],
  },
};

export function CaseStudies() {
  const [activeTab, setActiveTab] = useState(0);
  const current = CASE_STUDIES[activeTab];

  // Specific key impact highlights per industry
  const impactHighlights: Record<string, { metric: string; label: string; tag: string }> = {
    "dental-clinic": { metric: "+312%", label: "Booked Patient Inquiries", tag: "Toronto Catchment" },
    "roofing-contractor": { metric: "#1-3", label: "Local Map Pack in 45 Days", tag: "8 DFW Target ZIPs" },
    "cafe-roastery": { metric: "4.2x", label: "Local Social Reach & Footfall", tag: "Sydney Metro" },
    "aesthetic-clinic": { metric: "< 3 Min", label: "WhatsApp Lead Concierge", tag: "Dubai Expat Cohort" },
  };

  const highlight = impactHighlights[current.id] || { metric: "+240%", label: "Average Performance", tag: "Verified" };
  const currentConfig = INDUSTRY_CONFIG[current.id] || {
    icon: Sparkles,
    shortLocation: current.location.split("·")[0].trim(),
    deliverables: ["Dedicated Media Buying", "Creative Design Sprint", "Weekly Analytics Handover"],
  };

  return (
    <section id="work" className="py-6 sm:py-8 lg:py-10 bg-[#F5F2EB] border-y border-[#DED7CA] scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-3.5 sm:gap-4">
        {/* Section Heading - Sleek & Compact */}
        <SectionHeading
          kicker="Case Studies &amp; Proof"
          title={
            <>
              Real campaigns.{" "}
              <span className="text-[#9A5B00]">Measurable weekly growth.</span>
            </>
          }
          subtitle="Inspect actual campaign architectures, localized sprint deliverables, and verified conversion metrics."
          align="center"
        />

        {/* Compact, Smaller-Width Tactile Tab Filter Bar */}
        <div className="w-full max-w-xl mx-auto">
          <div
            role="tablist"
            aria-label="Case Study Industries"
            className="p-1 rounded-2xl bg-[#EAE4D7] border border-[#D5CDBC] shadow-[inset_0_2px_4px_rgba(0,0,0,0.08),0_1px_0_rgba(255,255,255,0.9)] grid grid-cols-2 sm:grid-cols-4 gap-1"
          >
            {CASE_STUDIES.map((study, idx) => {
              const isSelected = activeTab === idx;
              const config = INDUSTRY_CONFIG[study.id] || {
                icon: Sparkles,
                shortLocation: "Global",
                deliverables: [],
              };
              const TabIcon = config.icon;

              return (
                <button
                  key={study.id}
                  role="tab"
                  id={`tab-${study.id}`}
                  aria-selected={isSelected}
                  aria-controls={`panel-${study.id}`}
                  tabIndex={isSelected ? 0 : -1}
                  onClick={() => setActiveTab(idx)}
                  className={cn(
                    "py-1.5 px-2 rounded-xl text-center transition-all duration-150 cursor-pointer flex flex-col items-center justify-center gap-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFB020]",
                    isSelected
                      ? "bg-[#0B1B3A] text-white shadow-[0_3px_10px_rgba(11,27,58,0.25)] border-t border-white/20"
                      : "text-[#5A6680] hover:text-[#0B1B3A] hover:bg-white/60"
                  )}
                >
                  <div className="flex items-center gap-1">
                    <TabIcon
                      className={cn(
                        "w-3 h-3 shrink-0",
                        isSelected ? "text-[#FFB020]" : "text-[#7A879E]"
                      )}
                    />
                    <span
                      className={cn(
                        "font-display font-black text-[11px] tracking-tight truncate",
                        isSelected ? "text-white" : "text-[#0B1B3A]"
                      )}
                    >
                      {study.industry}
                    </span>
                  </div>
                  <span
                    className={cn(
                      "text-[9px] font-bold tracking-tight truncate",
                      isSelected ? "text-[#FFB020]" : "text-[#7A879E]"
                    )}
                  >
                    {config.shortLocation}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Premium Compact Skeuomorphic Case Showcase Console */}
        <div
          role="tabpanel"
          id={`panel-${current.id}`}
          aria-labelledby={`tab-${current.id}`}
          className="bg-gradient-to-b from-[#FFFFFF] via-[#FAF8F5] to-[#F5F2EB] rounded-2xl sm:rounded-3xl p-3.5 sm:p-5 lg:p-6 shadow-[0_20px_50px_-15px_rgba(11,27,58,0.1),inset_0_2px_0_rgba(255,255,255,1)] border-2 border-[#D8D0C0] border-b-[4px] border-b-[#C4B8A2] relative overflow-hidden flex flex-col gap-3 sm:gap-3.5"
        >
          {/* Specular Top Rim */}
          <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#FFB020] to-transparent opacity-80" />

          {/* Top Quick-Impact Metrics & Title Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 pb-2.5 border-b border-[#E2DBD0]">
            <div className="flex flex-col gap-0.5">
              <div className="flex items-center gap-2 flex-wrap">
                <div className="px-2 py-0.2 rounded-full bg-[#0B1B3A] text-[#FFB020] text-[9px] font-black uppercase tracking-wider flex items-center gap-1 shadow-2xs">
                  <TrendingUp className="w-2.5 h-2.5 text-[#FFB020]" />
                  <span>{highlight.tag}</span>
                </div>
                <div className="flex items-center gap-1 text-[10px] font-bold text-[#5A6680]">
                  <MapPin className="w-2.5 h-2.5 text-[#9A5B00]" />
                  <span>{current.location}</span>
                </div>
                <span className="text-[9px] text-emerald-800 bg-emerald-100 border border-emerald-300 font-extrabold px-1.5 py-0.2 rounded-full">
                  Verified Client Sprint
                </span>
              </div>
              <h3 className="font-display font-black text-lg sm:text-xl text-[#0B1B3A] tracking-tight">
                {current.clientType}
              </h3>
            </div>

            {/* 3D Tactile Stat Trophy Capsule (Compact) */}
            <div className="self-start sm:self-auto px-3 py-1.5 rounded-xl bg-gradient-to-b from-[#ECFDF5] via-[#D1FAE5] to-[#A7F3D0] border border-emerald-300 shadow-[0_2px_8px_rgba(5,150,105,0.12),inset_0_1px_0_rgba(255,255,255,0.9)] flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-b from-[#059669] to-[#047857] text-white flex items-center justify-center shrink-0 shadow-sm border border-white/20">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-100 stroke-[2.5]" />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-black text-lg sm:text-xl text-emerald-950 leading-none tracking-tight">
                  {highlight.metric}
                </span>
                <span className="text-[10px] font-extrabold text-emerald-800 leading-tight mt-0.5">
                  {highlight.label}
                </span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-3.5 lg:gap-5 items-start">
            {/* Left: Interactive Laptop Frame & Verified Sprint Deliverables */}
            <div className="lg:col-span-5 flex flex-col gap-2.5">
              <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden border-2 border-slate-700 bg-slate-900 shadow-md group">
                {/* Browser top chrome */}
                <div className="h-5 bg-slate-800 border-b border-slate-700 px-2.5 flex items-center justify-between z-10 relative">
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-rose-500/80" />
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-500/80" />
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500/80" />
                    <span className="text-[8px] text-slate-400 font-mono ml-1.5 truncate">
                      verified-campaign.internal/{current.id}
                    </span>
                  </div>
                  <span className="text-[8px] text-emerald-400 font-mono font-bold">100% In-House</span>
                </div>

                <div className="relative w-full h-[calc(100%-20px)]">
                  <Image
                    src={current.mockupImage}
                    alt={current.mockupAlt}
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-300"
                  />
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Floating Service Pill inside mockup */}
                <div className="absolute bottom-2 left-2 right-2">
                  <div className="bg-[#0A122A]/90 backdrop-blur-md px-2.5 py-1 rounded-lg border border-white/10 text-white text-[10px] font-bold flex items-center justify-between shadow-sm">
                    <span className="truncate">{current.servicesTag}</span>
                    <span className="text-emerald-400 font-mono text-[9px] shrink-0 font-black">99.4% SLA</span>
                  </div>
                </div>
              </div>

              {/* Tangible Sprint Assets Verified */}
              <div className="p-2 rounded-xl bg-[#FAF8F5] border border-[#DDD5C7] shadow-2xs flex flex-col gap-1">
                <span className="text-[9px] font-black uppercase tracking-wider text-[#9A5B00] flex items-center gap-1">
                  <Layers className="w-2.5 h-2.5 text-[#FFB020]" />
                  <span>Key Delivered Campaign Assets:</span>
                </span>
                <div className="flex flex-wrap gap-1">
                  {currentConfig.deliverables.map((item, idx) => (
                    <span
                      key={idx}
                      className="px-1.5 py-0.2 rounded bg-white border border-[#D5CDBC] text-[9px] font-bold text-[#0B1B3A] shadow-2xs flex items-center gap-1"
                    >
                      <Check className="w-2 h-2 text-emerald-600 stroke-[3]" />
                      <span>{item}</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* Data Integrity Notice */}
              <div className="p-1.5 rounded-lg bg-[#F7F4EE] border border-[#DDD5C7] flex items-center gap-1.5 text-[10px] text-[#5A6680]">
                <ShieldAlert className="w-3 h-3 text-[#9A5B00] shrink-0" />
                <span className="leading-tight">
                  Representative architecture. GA4 logs shared under mutual NDA.
                </span>
              </div>
            </div>

            {/* Right: Focused Strategy, Execution & Verified Metrics */}
            <div className="lg:col-span-7 flex flex-col gap-2.5 text-left">
              {/* Challenge Box in Warm Tactile Well */}
              <div className="p-2.5 rounded-xl bg-gradient-to-r from-[#FFFBEB] via-[#FEF3C7] to-[#FDE68A]/50 border border-amber-300/80 shadow-xs flex flex-col gap-0.5">
                <span className="text-[9px] font-black uppercase tracking-wider text-[#9A5B00] flex items-center gap-1">
                  <Clock className="w-2.5 h-2.5 text-[#9A5B00]" />
                  <span>The Operational Challenge:</span>
                </span>
                <p className="text-[11px] sm:text-xs text-[#0B1B3A] leading-relaxed font-medium">
                  {current.challenge}
                </p>
              </div>

              {/* What Our In-House India Team Executed */}
              <div className="flex flex-col gap-1">
                <span className="text-[10px] font-black uppercase tracking-wider text-[#0B1B3A] flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3 text-emerald-600" />
                  <span>What Our In-House India Squad Executed:</span>
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-[#0B1B3A]">
                  {current.whatWeDid.map((step, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2 p-2 rounded-lg bg-white border border-[#DDD5C7] shadow-2xs hover:border-[#FFB020] transition-colors"
                    >
                      <div className="w-4 h-4 rounded-full bg-gradient-to-b from-[#34D399] via-[#059669] to-[#047857] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-2xs border border-[#A7F3D0]">
                        <Check className="w-2.5 h-2.5 stroke-[3]" />
                      </div>
                      <span className="text-[10px] leading-snug font-bold text-[#0B1B3A]">{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Weekly Monitored Metrics on Client Call */}
              <div className="flex flex-col gap-1 pt-1.5 border-t border-[#E8E2D5]">
                <span className="text-[9px] font-black uppercase tracking-wider text-[#5A6680] flex items-center gap-1">
                  <BarChart3 className="w-3 h-3 text-[#0B1B3A]" />
                  <span>Monitored Weekly on Live Client Video Call:</span>
                </span>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5">
                  {current.measuredWeekly.map((metric, idx) => (
                    <div
                      key={idx}
                      className="p-1.5 rounded-lg bg-white border border-[#DDD5C7] text-[9px] font-extrabold text-[#0B1B3A] flex items-center gap-1 shadow-2xs"
                    >
                      <Sparkles className="w-2.5 h-2.5 text-[#FFB020] shrink-0" />
                      <span className="truncate">{metric}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Link & Direct Consultation CTA */}
              <div className="pt-1 flex flex-wrap items-center gap-2.5">
                <a
                  href="#quote"
                  className="btn-luxury-gold btn-shimmer h-[38px] px-5 rounded-lg text-xs font-black uppercase tracking-wider inline-flex items-center gap-1.5 cursor-pointer shadow-sm"
                >
                  <span>Request Custom Strategy for {current.industry}</span>
                  <ArrowRight className="w-3.5 h-3.5 stroke-[3]" />
                </a>
                <span className="text-[10px] font-bold text-[#5A6680]">
                  Free 24-hr scope &amp; competitive breakdown included
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

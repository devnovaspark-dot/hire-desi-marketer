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
              From Campaign Execution to{" "}
              <span className="text-[#9A5B00]">Measurable Results</span>
            </>
          }
          subtitle="Get an inside look at our campaign strategies, location-focused sprints, and conversion tracking that brings marketing performance into focus."
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
                    "h-11 sm:h-12 px-2 rounded-xl text-center transition-all duration-150 cursor-pointer flex flex-col items-center justify-center gap-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFB020] box-border border",
                    isSelected
                      ? "bg-[#0B1B3A] text-white shadow-[0_3px_10px_rgba(11,27,58,0.25)] border-[#0B1B3A] border-t-white/30"
                      : "text-[#5A6680] hover:text-[#0B1B3A] hover:bg-white/60 border-transparent"
                  )}
                >
                  <div className="flex items-center gap-1 max-w-full">
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
            <div className="flex flex-col gap-0.5 min-w-0">
              <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap">
                <div className="px-2 py-0.5 rounded-full bg-[#0B1B3A] text-[#FFB020] text-[9px] font-black uppercase tracking-wider flex items-center gap-1 shadow-2xs whitespace-nowrap">
                  <TrendingUp className="w-2.5 h-2.5 text-[#FFB020] shrink-0" />
                  <span>{highlight.tag}</span>
                </div>
                <div className="flex items-center gap-1 text-[10px] font-bold text-[#5A6680] whitespace-nowrap">
                  <MapPin className="w-2.5 h-2.5 text-[#9A5B00] shrink-0" />
                  <span>{current.location}</span>
                </div>
                <span className="text-[9px] text-emerald-800 bg-emerald-100 border border-emerald-300 font-extrabold px-1.5 py-0.5 rounded-full whitespace-nowrap">
                  Verified Client Sprint
                </span>
              </div>
              <h3 className="font-display font-black text-base sm:text-xl text-[#0B1B3A] tracking-tight leading-snug min-h-[44px] sm:min-h-0 flex items-center">
                {current.clientType}
              </h3>
            </div>

            {/* 3D Tactile Stat Trophy Capsule (Compact & Locked Dimensions) */}
            <div className="self-start sm:self-auto min-w-[200px] h-[52px] px-3 py-1.5 rounded-xl bg-gradient-to-b from-[#ECFDF5] via-[#D1FAE5] to-[#A7F3D0] border border-emerald-300 shadow-[0_2px_8px_rgba(5,150,105,0.12),inset_0_1px_0_rgba(255,255,255,0.9)] flex items-center gap-2.5 shrink-0">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-b from-[#059669] to-[#047857] text-white flex items-center justify-center shrink-0 shadow-sm border border-white/20">
                <CheckCircle2 className="w-4 h-4 text-emerald-100 stroke-[2.5]" />
              </div>
              <div className="flex flex-col justify-center">
                <span className="font-display font-black text-lg sm:text-xl text-emerald-950 leading-none tracking-tight tabular-nums">
                  {highlight.metric}
                </span>
                <span className="text-[10px] font-extrabold text-emerald-800 leading-tight mt-0.5 whitespace-nowrap">
                  {highlight.label}
                </span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-3.5 lg:gap-5 items-start">
            {/* Left: Campaign Mockup Showcase & Verified Sprint Deliverables */}
            <div className="lg:col-span-5 flex flex-col gap-2.5">
              <div className="relative aspect-[1800/1140] w-full rounded-xl sm:rounded-2xl overflow-hidden border border-[#D5CDBC] shadow-md bg-white group">
                <Image
                  src={current.mockupImage}
                  alt={current.mockupAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-contain object-center group-hover:scale-[1.01] transition-transform duration-300"
                />
              </div>

              {/* Tangible Sprint Assets Verified - Locked Min-Height */}
              <div className="p-2 rounded-xl bg-[#FAF8F5] border border-[#DDD5C7] shadow-2xs flex flex-col justify-between min-h-[66px] sm:min-h-[58px] gap-1">
                <span className="text-[9px] font-black uppercase tracking-wider text-[#9A5B00] flex items-center gap-1">
                  <Layers className="w-2.5 h-2.5 text-[#FFB020] shrink-0" />
                  <span>Key Delivered Campaign Assets:</span>
                </span>
                <div className="flex flex-wrap gap-1">
                  {currentConfig.deliverables.map((item, idx) => (
                    <span
                      key={idx}
                      className="px-1.5 py-0.5 rounded bg-white border border-[#D5CDBC] text-[9px] font-bold text-[#0B1B3A] shadow-2xs flex items-center gap-1 whitespace-nowrap"
                    >
                      <Check className="w-2 h-2 text-emerald-600 stroke-[3] shrink-0" />
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
              {/* Challenge Box in Warm Tactile Well - Locked Min-Height */}
              <div className="p-2.5 rounded-xl bg-gradient-to-r from-[#FFFBEB] via-[#FEF3C7] to-[#FDE68A]/50 border border-amber-300/80 shadow-xs flex flex-col justify-center min-h-[78px] sm:min-h-[64px] gap-0.5">
                <span className="text-[9px] font-black uppercase tracking-wider text-[#9A5B00] flex items-center gap-1">
                  <Clock className="w-2.5 h-2.5 text-[#9A5B00] shrink-0" />
                  <span>The Challenge:</span>
                </span>
                <p className="text-[11px] sm:text-xs text-[#0B1B3A] leading-relaxed font-medium">
                  {current.challenge}
                </p>
              </div>

              {/* What Our In-House India Team Executed - Locked Card Height to Prevent Jitter */}
              <div className="flex flex-col gap-1">
                <span className="text-[10px] font-black uppercase tracking-wider text-[#0B1B3A] flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3 text-emerald-600 shrink-0" />
                  <span>How Our India Team Addressed It:</span>
                </span>
                <div className="grid grid-cols-2 gap-1.5 text-xs text-[#0B1B3A]">
                  {current.whatWeDid.map((step, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-1.5 sm:gap-2 p-1.5 sm:p-2 rounded-lg bg-white border border-[#DDD5C7] shadow-2xs hover:border-[#FFB020] transition-colors min-h-[78px] sm:min-h-[60px]"
                    >
                      <div className="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-gradient-to-b from-[#34D399] via-[#059669] to-[#047857] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-2xs border border-[#A7F3D0]">
                        <Check className="w-2 h-2 sm:w-2.5 sm:h-2.5 stroke-[3]" />
                      </div>
                      <span className="text-[9px] sm:text-[10px] leading-snug font-bold text-[#0B1B3A] line-clamp-3 sm:line-clamp-none">
                        {step}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Weekly Monitored Metrics on Client Call */}
              <div className="flex flex-col gap-1 pt-1.5 border-t border-[#E8E2D5]">
                <span className="text-[9px] font-black uppercase tracking-wider text-[#5A6680] flex items-center gap-1">
                  <BarChart3 className="w-3 h-3 text-[#0B1B3A] shrink-0" />
                  <span>Monitored Weekly on Live Client Video Call:</span>
                </span>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5">
                  {current.measuredWeekly.map((metric, idx) => (
                    <div
                      key={idx}
                      className="h-[28px] px-1.5 rounded-lg bg-white border border-[#DDD5C7] text-[9px] font-extrabold text-[#0B1B3A] flex items-center gap-1 shadow-2xs"
                    >
                      <Sparkles className="w-2.5 h-2.5 text-[#FFB020] shrink-0" />
                      <span className="truncate">{metric}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Link & Direct Consultation CTA - Zero Layout Shift */}
              <div className="pt-1 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-2.5">
                <a
                  href="#quote"
                  className="btn-luxury-gold btn-shimmer h-[38px] px-4 sm:px-5 rounded-lg text-xs font-black uppercase tracking-wider inline-flex items-center justify-center gap-1.5 cursor-pointer shadow-sm whitespace-nowrap self-start"
                >
                  <span className="sm:inline hidden">Request Custom Strategy for {current.industry}</span>
                  <span className="sm:hidden inline">Request Custom Strategy</span>
                  <ArrowRight className="w-3.5 h-3.5 stroke-[3] shrink-0" />
                </a>
                <span className="text-[10px] font-bold text-[#5A6680] leading-tight">
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

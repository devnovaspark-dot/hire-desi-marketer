"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Sparkles,
  ArrowRight,
  AlertTriangle,
  Zap,
  ShieldCheck,
  TrendingDown,
  TrendingUp,
  Activity,
  Gauge,
  CheckCircle2,
  XCircle,
  Clock,
  Compass,
  Layers,
} from "lucide-react";
import { cn } from "@/lib/utils";
import StarBorder from "@/components/ui/StarBorder";

type EngineMode = "leaky" | "hdm";

// ====================================================================
// AUTHENTIC HIGH-RESOLUTION BRAND ICONS (LARGER, SHARPER, TACTILE)
// ====================================================================

function RealGoogleAdsIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <defs>
        <filter id="gads-shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="1" stdDeviation="1" floodColor="#000" floodOpacity="0.15" />
        </filter>
      </defs>
      <path
        d="M4.05 14.53l6.09-10.55c.67-1.16 2.15-1.56 3.31-.89l3.41 1.97c1.16.67 1.56 2.15.89 3.31L11.66 18.92c-.67 1.16-2.15 1.56-3.31.89L4.94 17.84c-1.16-.67-1.56-2.15-.89-3.31z"
        fill="#FBBC04"
        filter="url(#gads-shadow)"
      />
      <path
        d="M19.95 14.53l-6.09-10.55c-.67-1.16-2.15-1.56-3.31-.89l-3.41 1.97c-1.16.67-1.56 2.15-.89 3.31l6.09 10.55c.67 1.16 2.15 1.56 3.31.89l3.41-1.97c1.16-.67 1.56-2.15.89-3.31z"
        fill="#4285F4"
        filter="url(#gads-shadow)"
      />
      <circle cx="7.7" cy="16.5" r="3.2" fill="#34A853" filter="url(#gads-shadow)" />
    </svg>
  );
}

function RealMetaIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <defs>
        <linearGradient id="meta-grad-real" x1="2" y1="12" x2="22" y2="12" gradientUnits="userSpaceOnUse">
          <stop stopColor="#0064E0" />
          <stop offset="0.45" stopColor="#0082FB" />
          <stop offset="0.85" stopColor="#00A2FF" />
          <stop offset="1" stopColor="#00C7FF" />
        </linearGradient>
      </defs>
      <path
        d="M16.995 3c-2.457 0-4.07 1.488-4.995 2.871C11.075 4.488 9.462 3 7.005 3 3.633 3 1 5.922 1 9.94c0 4.673 3.978 8.653 10.428 11.06.37.139.774.139 1.144 0C19.022 18.593 23 14.613 23 9.94 23 5.922 20.367 3 16.995 3zm-9.99 12.35c-2.185 0-3.957-1.772-3.957-3.957 0-2.185 1.772-3.957 3.957-3.957 1.93 0 3.308 1.42 4.148 2.766-.99 1.587-2.316 5.148-4.148 5.148zm9.99 0c-1.832 0-3.158-3.561-4.148-5.148.84-1.346 2.218-2.766 4.148-2.766 2.185 0 3.957 1.772 3.957 3.957 0 2.185-1.772 3.957-3.957 3.957z"
        fill="url(#meta-grad-real)"
      />
    </svg>
  );
}

function RealGoogleSearchIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24">
      <path
        fill="#4285F4"
        d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"
      />
      <path
        fill="#34A853"
        d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.27 21.36 7.33 24 12 24z"
      />
      <path
        fill="#FBBC05"
        d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.99 0 12s.45 3.82 1.25 5.42l4.03-3.15z"
      />
      <path
        fill="#EA4335"
        d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.27 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
      />
    </svg>
  );
}

function RealBrandShieldIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <defs>
        <linearGradient id="brand-gold-glow" x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFE082" />
          <stop offset="0.5" stopColor="#FFB020" />
          <stop offset="1" stopColor="#B37400" />
        </linearGradient>
      </defs>
      <path
        d="M12 2L3 6.5v6.2c0 5.6 3.8 10.8 9 12.3 5.2-1.5 9-6.7 9-12.3V6.5L12 2z"
        fill="url(#brand-gold-glow)"
        stroke="#FFFFFF"
        strokeWidth="1.2"
      />
      <path
        d="M12 6.5l1.6 3.3 3.6.5-2.6 2.5.6 3.6-3.2-1.7-3.2 1.7.6-3.6-2.6-2.5 3.6-.5L12 6.5z"
        fill="#060B22"
      />
    </svg>
  );
}

// ====================================================================
// CHANNEL SPECIFICATIONS & INTENT DATA
// ====================================================================

interface MetricDial {
  label: string;
  value: string;
  note: string;
}

interface ChannelData {
  id: string;
  name: string;
  badge: string;
  icon: (props: { className?: string }) => React.ReactElement;
  step1Label: string;
  leaky: {
    headline: string;
    description: string;
    step2Title: string;
    step2Sub: string;
    step3Title: string;
    step3Sub: string;
    retentionBar: string;
    retentionPercent: number;
    comparisonCallout: string;
    speed: MetricDial;
    quality: MetricDial;
    roas: MetricDial;
  };
  hdm: {
    headline: string;
    description: string;
    step2Title: string;
    step2Sub: string;
    step3Title: string;
    step3Sub: string;
    retentionBar: string;
    retentionPercent: number;
    comparisonCallout: string;
    speed: MetricDial;
    quality: MetricDial;
    roas: MetricDial;
  };
}

const CHANNELS: ChannelData[] = [
  {
    id: "google-ads",
    name: "Google Ads",
    badge: "Paid Search Intent",
    icon: RealGoogleAdsIcon,
    step1Label: "Search Intent Keyword Click",
    leaky: {
      headline: "Paying Top-Dollar CPC for Visitors Who Bounce in 3 Seconds",
      description: "Generic slow templates cause 72% bounce before the landing page hero finishes loading, wasting budget on unengaged clicks.",
      step2Title: "3.6s Template Freeze",
      step2Sub: "72% Bounce Before Headline Loads",
      step3Title: "Wasted Ad Spend",
      step3Sub: "$0 Inbound Pipeline Created",
      retentionBar: "28% Visitors Retained • 72% Marketing Capital Lost",
      retentionPercent: 28,
      comparisonCallout: "⚠️ 6x Slower Load Time • 72% Budget Lost to Bounce • High Bid Cost Penalties",
      speed: { label: "Page Paint Speed", value: "3.6s", note: "Slow template lag" },
      quality: { label: "Google Quality Score", value: "3 / 10", note: "High CPC bid penalty" },
      roas: { label: "Return on Ad Spend", value: "0.8x", note: "Capital leak" },
    },
    hdm: {
      headline: "Lowest Cost-Per-Click & 3.8x Higher Inbound Leads",
      description: "Exact keyword-to-headline alignment with sub-second page paint turns expensive search clicks into instant booked consultations.",
      step2Title: "0.58s Instant Edge Paint",
      step2Sub: "100% of Incoming Visitors Retained",
      step3Title: "Qualified Inbound Inquiry",
      step3Sub: "Instant Calendar Consultation",
      retentionBar: "96% Retained Traffic Efficiency (Top 1% Global Tier)",
      retentionPercent: 96,
      comparisonCallout: "⚡ vs. Typical Template: 6x Faster Speed • 10/10 Quality Score • 3.8x More Inbound Leads",
      speed: { label: "Page Paint Speed", value: "0.58s", note: "Sub-second edge paint ✓" },
      quality: { label: "Google Quality Score", value: "10 / 10", note: "Lowest CPC / Top rank ✓" },
      roas: { label: "Return on Ad Spend", value: "4.8x", note: "High-impact ROAS ✓" },
    },
  },
  {
    id: "meta-ads",
    name: "Meta & Instagram",
    badge: "Social Mobile Feed",
    icon: RealMetaIcon,
    step1Label: "Instagram & Meta Feed Click",
    leaky: {
      headline: "Mobile Feed Shoppers Abandon Clumsy Multi-Page Forms",
      description: "Mobile friction and sluggish page weight lose 81% of feed scrollers before they reach the second fold.",
      step2Title: "3.9s Mobile Delay",
      step2Sub: "81% Dropoff on Mobile Feed",
      step3Title: "Negative Social ROI",
      step3Sub: "Cart & Intake Abandoned",
      retentionBar: "19% Mobile Retention • 81% Ad Dollars Drained",
      retentionPercent: 19,
      comparisonCallout: "⚠️ High Drop-off • Slow Mobile Render • Abandoned Checkout Penalties",
      speed: { label: "Mobile Paint Speed", value: "3.9s", note: "Severe mobile lag" },
      quality: { label: "Mobile Conversion", value: "0.9%", note: "Cart abandon penalty" },
      roas: { label: "Return on Ad Spend", value: "0.6x", note: "Negative return" },
    },
    hdm: {
      headline: "Thumb-First Mobile Flow with Maximum ROAS",
      description: "Ultra-responsive mobile layout, instant slide cart, and frictionless 1-tap checkout capture mobile buyers seamlessly.",
      step2Title: "0.62s Fluid Mobile Paint",
      step2Sub: "Zero Layout Shift & Smooth 60 FPS",
      step3Title: "Direct Customer Purchase",
      step3Sub: "1-Tap Apple & Google Pay",
      retentionBar: "94% Mobile Conversion Flow (Sub-Second SLA)",
      retentionPercent: 94,
      comparisonCallout: "⚡ vs. Typical Template: Instant Slide Cart • 1-Tap Booking • +380% Mobile Conversion",
      speed: { label: "Mobile Paint Speed", value: "0.62s", note: "Fluid 60 FPS mobile UI ✓" },
      quality: { label: "Mobile Conversion", value: "4.6%", note: "+380% conversion lift ✓" },
      roas: { label: "Return on Ad Spend", value: "5.4x", note: "Compounding returns ✓" },
    },
  },
  {
    id: "seo",
    name: "Technical SEO",
    badge: "Organic Search",
    icon: RealGoogleSearchIcon,
    step1Label: "Organic Keyword Search Click",
    leaky: {
      headline: "Google Rank Penalties from Layout Shift and Poor Vitals",
      description: "Failing Core Web Vitals and unstable layout shifts (CLS) trigger algorithmic rank demotions, drying up organic traffic.",
      step2Title: "Failing Core Web Vitals",
      step2Sub: "65% Pogo-Sticking Bounce",
      step3Title: "Declining Rankings",
      step3Sub: "Suppressed Search Visibility",
      retentionBar: "35% Organic Retention • Pogo-Sticking Penalties",
      retentionPercent: 35,
      comparisonCallout: "⚠️ Failing Google Vitals • Algorithmic Rank Demotions • Zero Organic Lift",
      speed: { label: "Core Web Vitals", value: "Failing", note: "Fails Google audit" },
      quality: { label: "Organic Rank Position", value: "#18-35", note: "Suppressed keyword rank" },
      roas: { label: "Organic Pipeline", value: "Stagnant", note: "Zero compounding growth" },
    },
    hdm: {
      headline: "Compounding Top-3 Ranks with Sub-Second Edge Delivery",
      description: "Clean semantic HTML5, zero CLS, and automated Schema.org structured data get rewarded with top Google rankings.",
      step2Title: "100/100 Core Web Vitals",
      step2Sub: "Sub-Second Edge Rendering SLA",
      step3Title: "Top-3 Organic Positions",
      step3Sub: "Free Compounding Inbound Leads",
      retentionBar: "98% Search Authority • Top 1% Lighthouse Score",
      retentionPercent: 98,
      comparisonCallout: "⚡ vs. Typical Template: 100/100 Lighthouse Vitals • Zero CLS • Top-3 Google Rankings",
      speed: { label: "Core Web Vitals", value: "100/100", note: "Google top 1% benchmark ✓" },
      quality: { label: "Organic Rank Position", value: "Top 3", note: "High search authority ✓" },
      roas: { label: "Organic Pipeline", value: "3.8x Lift", note: "Free compounding leads ✓" },
    },
  },
  {
    id: "brand",
    name: "Brand & Direct",
    badge: "Executive Authority",
    icon: RealBrandShieldIcon,
    step1Label: "Executive Referral & Direct Visit",
    leaky: {
      headline: "High-Ticket Enterprise Referrals Bounce Without Inquiring",
      description: "Executive referrals land on dated, generic homepages with no clear commercial next step, losing major deals.",
      step2Title: "Generic Template Look",
      step2Sub: "58% Inactive Executive Exits",
      step3Title: "Lost Major Deals",
      step3Sub: "Zero Brand Credibility",
      retentionBar: "42% Executive Retention • Missed Enterprise Deals",
      retentionPercent: 42,
      comparisonCallout: "⚠️ Clunky Navigation • Generic Theme Bloat • Lost High-Ticket Contracts",
      speed: { label: "Executive Perception", value: "Generic", note: "Template look & feel" },
      quality: { label: "Form Completion", value: "12%", note: "Friction-heavy intake" },
      roas: { label: "Enterprise Pipeline", value: "Low Win-Rate", note: "Weak brand credibility" },
    },
    hdm: {
      headline: "Institutional Authority & Direct Enterprise Scoping",
      description: "Bespoke executive-grade design, interactive scoping modules, and direct senior calendar routing secure major accounts.",
      step2Title: "Bespoke Brand Authority",
      step2Sub: "Sub-Second Interactive Scoping",
      step3Title: "Enterprise Client Retained",
      step3Sub: "Direct Senior Calendar Routing",
      retentionBar: "95% Executive Trust • High-Value Retainer Won",
      retentionPercent: 95,
      comparisonCallout: "⚡ vs. Typical Template: Bespoke Figma Craft • Interactive Scoping • Instant Enterprise Trust",
      speed: { label: "Executive Perception", value: "Elite Tier", note: "Bespoke digital craft ✓" },
      quality: { label: "Form Completion", value: "48%", note: "Direct 1-tap intake ✓" },
      roas: { label: "Enterprise Pipeline", value: "High-Value", note: "Premium pricing power ✓" },
    },
  },
];

export function MarketingWebsiteSynergy() {
  const [mode, setMode] = useState<EngineMode>("hdm");
  const [activeChannelId, setActiveChannelId] = useState<string>("google-ads");

  const activeChannel =
    CHANNELS.find((c) => c.id === activeChannelId) || CHANNELS[0];
  const state = mode === "hdm" ? activeChannel.hdm : activeChannel.leaky;
  const isHdm = mode === "hdm";
  const ActiveIcon = activeChannel.icon;

  return (
    <section
      id="marketing-foundation"
      className="py-12 sm:py-16 lg:py-20 bg-[#FAF8F5] border-y border-[#E2DBD0] select-none scroll-mt-24 relative overflow-hidden text-left"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-7 sm:space-y-9 text-center">
        {/* ============================================================ */}
        {/* 1. SECTION HEADER                                            */}
        {/* ============================================================ */}
        <div className="space-y-3 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#060B22] text-[#FFB020] text-xs font-black uppercase tracking-wider border border-[#FFB020]/30 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#FFB020]" />
            <span>Conversion Architecture · Marketing &amp; Website Synergy</span>
          </div>

          <h2 className="font-display font-black text-2xl sm:text-3xl lg:text-4xl text-[#0B1B3A] tracking-tight leading-tight">
            A Great Advertising Campaign Cannot Fix a Leaky Website.
          </h2>

          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal max-w-2xl mx-auto">
            Your ad spend is only as profitable as the website it sends visitors to. Compare how traffic performs on a typical template versus an engineered conversion engine.
          </p>
        </div>

        {/* ============================================================ */}
        {/* 2. DUAL-MODE CONTROLLER & CHANNELS (LARGER, REAL ICONS)       */}
        {/* ============================================================ */}
        <div className="flex flex-col items-center gap-3.5 sm:gap-4 max-w-3xl mx-auto">
          {/* Tactile Mode Toggle Switch */}
          <div className="inline-flex items-center p-1.5 bg-white rounded-2xl border border-[#E2DBD0] shadow-sm">
            <button
              type="button"
              onClick={() => setMode("leaky")}
              className={cn(
                "py-2 px-3.5 sm:px-5 rounded-xl text-xs font-bold transition-all duration-300 cursor-pointer flex items-center gap-2",
                !isHdm
                  ? "bg-rose-950 text-rose-300 border border-rose-500/40 shadow-sm font-black scale-102"
                  : "bg-transparent text-slate-600 hover:text-slate-900 hover:bg-slate-50"
              )}
            >
              <AlertTriangle className={cn("w-4 h-4", !isHdm ? "text-rose-400" : "text-slate-400")} />
              <span>Typical Leaky Website</span>
            </button>

            <button
              type="button"
              onClick={() => setMode("hdm")}
              className={cn(
                "py-2 px-3.5 sm:px-5 rounded-xl text-xs font-bold transition-all duration-300 cursor-pointer flex items-center gap-2",
                isHdm
                  ? "bg-[#060B22] text-[#FFB020] border border-[#FFB020]/60 shadow-sm font-black scale-102"
                  : "bg-transparent text-slate-600 hover:text-slate-900 hover:bg-slate-50"
              )}
            >
              <Zap className={cn("w-4 h-4", isHdm ? "text-[#FFB020] fill-[#FFB020]" : "text-slate-400")} />
              <span>HDM Revenue Engine</span>
            </button>
          </div>

          {/* 4 Clean Traffic Channels with Bigger, Real Brand Icons */}
          <div className="flex items-center justify-center gap-2 sm:gap-2.5 flex-wrap">
            {CHANNELS.map((ch) => {
              const isSelected = ch.id === activeChannelId;
              const IconComp = ch.icon;

              return (
                <button
                  key={ch.id}
                  type="button"
                  onClick={() => setActiveChannelId(ch.id)}
                  className={cn(
                    "px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-2xl text-xs font-bold transition-all duration-300 cursor-pointer flex items-center gap-2.5 border shadow-2xs group",
                    isSelected
                      ? isHdm
                        ? "bg-[#060B22] text-white border-[#FFB020] ring-2 ring-[#FFB020]/25 shadow-md scale-102"
                        : "bg-rose-950 text-rose-100 border-rose-500 ring-2 ring-rose-500/25 shadow-md scale-102"
                      : "bg-white text-slate-700 border-[#E2DBD0] hover:border-slate-400 hover:bg-slate-50"
                  )}
                >
                  {/* Real, Bigger Brand Icon Container */}
                  <div className="w-6 h-6 flex items-center justify-center shrink-0 transition-transform group-hover:scale-110">
                    <IconComp className="w-5 h-5 sm:w-5.5 sm:h-5.5" />
                  </div>

                  <span className="font-extrabold">{ch.name}</span>

                  {isSelected && (
                    <span
                      className={cn(
                        "w-2 h-2 rounded-full ml-0.5",
                        isHdm ? "bg-teal-400 animate-pulse" : "bg-rose-400 animate-ping"
                      )}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* ============================================================ */}
        {/* 3. LUXURY DARK CONVERSION ENGINE HUD (BETTER UNDERSTANDABLE) */}
        {/* ============================================================ */}
        <div
          className={cn(
            "rounded-2xl sm:rounded-3xl border transition-all duration-500 p-4 sm:p-7 lg:p-9 text-white relative overflow-hidden shadow-2xl text-left",
            isHdm
              ? "bg-gradient-to-br from-[#060B22] via-[#091536] to-[#040817] border-[#FFB020]/40 shadow-[0_20px_50px_-15px_rgba(6,11,34,0.5)]"
              : "bg-gradient-to-br from-[#1C0A0E] via-[#240B12] to-[#120508] border-rose-500/40 shadow-[0_20px_50px_-15px_rgba(239,68,68,0.25)]"
          )}
        >
          {/* Ambient Glows */}
          <div
            className={cn(
              "absolute -top-24 -right-24 w-80 h-80 rounded-full blur-[100px] pointer-events-none transition-all duration-700",
              isHdm ? "bg-[#FFB020]/20" : "bg-rose-600/25"
            )}
          />
          <div
            className={cn(
              "absolute -bottom-24 -left-24 w-80 h-80 rounded-full blur-[100px] pointer-events-none transition-all duration-700",
              isHdm ? "bg-teal-500/20" : "bg-red-800/20"
            )}
          />

          <div className="relative z-10 space-y-5 sm:space-y-6">
            {/* Top State Badge with Big Authentic Brand Emblem */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3.5 border-b border-white/10 gap-2.5 sm:gap-3">
              <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
                {/* Bigger, High-Res Brand Emblem Box */}
                <div
                  className={cn(
                    "w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl flex items-center justify-center transition-all duration-300 shadow-md shrink-0 border",
                    isHdm
                      ? "bg-gradient-to-b from-white/15 to-white/5 border-white/20 ring-2 ring-[#FFB020]/40"
                      : "bg-rose-950/80 border-rose-500/30 ring-2 ring-rose-500/30"
                  )}
                >
                  <ActiveIcon className="w-5 h-5 sm:w-7 sm:h-7" />
                </div>

                <div className="min-w-0">
                  <div
                    className={cn(
                      "text-[9.5px] sm:text-[11px] font-mono font-bold uppercase tracking-wider flex items-center gap-1.5 truncate",
                      isHdm ? "text-[#FFB020]" : "text-rose-400"
                    )}
                  >
                    <span>{isHdm ? "Engine: Active" : "Friction Detected"}</span>
                    <span>•</span>
                    <span className="text-white font-mono">{activeChannel.name}</span>
                  </div>
                  <div className="text-white font-black text-xs sm:text-base mt-0.5 truncate">
                    {activeChannel.name}{" "}
                    <span className="opacity-70 font-mono text-[10.5px] sm:text-xs font-normal">
                      ({activeChannel.badge})
                    </span>
                  </div>
                </div>
              </div>

              <div
                className={cn(
                  "px-2.5 sm:px-3.5 py-0.5 sm:py-1.5 rounded-full font-mono text-[9px] sm:text-xs font-bold border inline-flex items-center gap-1.5 self-start sm:self-auto shrink-0",
                  isHdm
                    ? "bg-teal-500/15 text-teal-300 border-teal-500/40"
                    : "bg-rose-500/15 text-rose-300 border-rose-500/40"
                )}
              >
                <span
                  className={cn(
                    "w-1.5 h-1.5 rounded-full",
                    isHdm ? "bg-teal-400 animate-pulse" : "bg-rose-400 animate-ping"
                  )}
                />
                <span>{isHdm ? "MAX CONVERSION" : "BUDGET LEAK"}</span>
              </div>
            </div>

            {/* Core Outcome Headline & Summary */}
            <div className="space-y-1.5">
              <h3 className="font-display font-black text-lg sm:text-2xl text-white tracking-tight leading-snug">
                {state.headline}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal max-w-3xl">
                {state.description}
              </p>
            </div>

            {/* ============================================================ */}
            {/* VISUAL 3-STAGE CONVERSION JOURNEY (CLEAR, INTUITIVE FLOW)    */}
            {/* ============================================================ */}
            <div
              className={cn(
                "p-3.5 sm:p-5 rounded-2xl border transition-all duration-300 space-y-3",
                isHdm ? "bg-white/[0.03] border-white/10" : "bg-rose-950/30 border-rose-500/20"
              )}
            >
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3.5 items-stretch text-center">
                {/* Step 1: Traffic Channel Inflow */}
                <div className="flex flex-col justify-center gap-1 p-2.5 sm:p-3 rounded-xl bg-black/30 border border-white/5 text-left sm:text-center">
                  <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider flex items-center justify-between sm:justify-center gap-1.5">
                    <span>Stage 01</span>
                    <span>•</span>
                    <span>Traffic Influx</span>
                  </div>
                  <div className="text-xs sm:text-sm font-extrabold text-white">
                    {activeChannel.step1Label}
                  </div>
                </div>

                {/* Step 2: The Landing Page Battleground (The Direct Difference) */}
                <div
                  className={cn(
                    "flex flex-col justify-center gap-1 p-2.5 sm:p-3 rounded-xl border text-left sm:text-center transition-colors",
                    isHdm
                      ? "bg-teal-950/40 border-teal-500/40 text-teal-300"
                      : "bg-rose-950/50 border-rose-500/40 text-rose-300"
                  )}
                >
                  <div className="text-[10px] font-mono uppercase tracking-wider opacity-80 flex items-center justify-between sm:justify-center gap-1.5">
                    <span>Stage 02</span>
                    <span>•</span>
                    <span>Visitor Retention</span>
                  </div>
                  <div className="flex items-center justify-start sm:justify-center gap-1.5 text-xs sm:text-sm font-black">
                    {isHdm ? (
                      <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                    ) : (
                      <XCircle className="w-4 h-4 text-rose-400 shrink-0" />
                    )}
                    <span>{state.step2Title}</span>
                  </div>
                  <div className="text-[10.5px] opacity-80 truncate">
                    {state.step2Sub}
                  </div>
                </div>

                {/* Step 3: Commercial Outcome */}
                <div
                  className={cn(
                    "flex flex-col justify-center gap-1 p-2.5 sm:p-3 rounded-xl border text-left sm:text-center transition-colors",
                    isHdm
                      ? "bg-[#FFB020]/15 border-[#FFB020]/40 text-[#FFB020]"
                      : "bg-rose-950/50 border-rose-500/40 text-rose-300"
                  )}
                >
                  <div className="text-[10px] font-mono uppercase tracking-wider opacity-80 flex items-center justify-between sm:justify-center gap-1.5">
                    <span>Stage 03</span>
                    <span>•</span>
                    <span>Commercial Return</span>
                  </div>
                  <div className="text-xs sm:text-sm font-black text-white">
                    {state.step3Title}
                  </div>
                  <div className="text-[10.5px] opacity-85 truncate">
                    {state.step3Sub}
                  </div>
                </div>
              </div>

              {/* Traffic Efficiency Progress Bar (Visual Difference) */}
              <div className="pt-2 border-t border-white/10 space-y-1.5 text-left">
                <div className="flex items-center justify-between text-[10.5px] sm:text-xs font-mono font-bold">
                  <span className={cn(isHdm ? "text-teal-300" : "text-rose-400")}>
                    {state.retentionBar}
                  </span>
                  <span className="text-slate-400 font-mono">
                    {state.retentionPercent}% Efficiency
                  </span>
                </div>
                <div className="h-2 w-full bg-black/40 rounded-full overflow-hidden p-0.5 border border-white/5">
                  <div
                    className={cn(
                      "h-full rounded-full transition-all duration-700 ease-out",
                      isHdm
                        ? "bg-gradient-to-r from-teal-400 via-emerald-400 to-[#FFB020] shadow-[0_0_10px_rgba(45,212,191,0.8)]"
                        : "bg-gradient-to-r from-rose-600 to-red-600 shadow-[0_0_10px_rgba(244,63,94,0.8)]"
                    )}
                    style={{ width: `${state.retentionPercent}%` }}
                  />
                </div>
              </div>
            </div>

            {/* Direct Comparison Callout Pill */}
            <div
              className={cn(
                "p-2.5 sm:p-3 rounded-xl border text-[11px] sm:text-xs font-mono font-bold flex flex-col sm:flex-row items-start sm:items-center justify-between gap-1 sm:gap-2",
                isHdm
                  ? "bg-[#060B22] border-[#FFB020]/40 text-[#FFB020]"
                  : "bg-rose-950/60 border-rose-500/30 text-rose-300"
              )}
            >
              <span className="leading-snug">{state.comparisonCallout}</span>
              <span className="text-[10px] text-slate-400 uppercase shrink-0 hidden sm:inline">
                Real-Time Benchmark
              </span>
            </div>

            {/* ============================================================ */}
            {/* 3 LIVE TELEMETRY METRIC CARDS (BIGGER, RICHER ICONS)          */}
            {/* ============================================================ */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3.5">
              {/* Dial 1: Initial Paint Speed */}
              <div
                className={cn(
                  "p-3.5 sm:p-4 rounded-xl sm:rounded-2xl border transition-all duration-500 space-y-1 relative overflow-hidden",
                  isHdm ? "bg-white/[0.04] border-white/10" : "bg-rose-950/40 border-rose-500/20"
                )}
              >
                <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-wider text-slate-400">
                  <span>{state.speed.label}</span>
                  <div className="w-6 h-6 rounded-lg bg-white/5 flex items-center justify-center">
                    <Clock className="w-3.5 h-3.5 text-slate-300" />
                  </div>
                </div>
                <div
                  className={cn(
                    "font-display font-black text-2xl sm:text-3xl transition-colors",
                    isHdm ? "text-teal-400" : "text-rose-400"
                  )}
                >
                  {state.speed.value}
                </div>
                <div className="text-[11px] text-slate-400 font-medium truncate">
                  {state.speed.note}
                </div>
              </div>

              {/* Dial 2: Quality Score */}
              <div
                className={cn(
                  "p-3.5 sm:p-4 rounded-xl sm:rounded-2xl border transition-all duration-500 space-y-1 relative overflow-hidden",
                  isHdm ? "bg-white/[0.04] border-white/10" : "bg-rose-950/40 border-rose-500/20"
                )}
              >
                <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-wider text-slate-400">
                  <span>{state.quality.label}</span>
                  <div className="w-6 h-6 rounded-lg bg-white/5 flex items-center justify-center">
                    <Gauge className="w-3.5 h-3.5 text-slate-300" />
                  </div>
                </div>
                <div
                  className={cn(
                    "font-display font-black text-2xl sm:text-3xl transition-colors",
                    isHdm ? "text-[#FFB020]" : "text-rose-400"
                  )}
                >
                  {state.quality.value}
                </div>
                <div className="text-[11px] text-slate-400 font-medium truncate">
                  {state.quality.note}
                </div>
              </div>

              {/* Dial 3: Return on Ad Spend */}
              <div
                className={cn(
                  "p-3.5 sm:p-4 rounded-xl sm:rounded-2xl border transition-all duration-500 space-y-1 relative overflow-hidden",
                  isHdm ? "bg-white/[0.04] border-white/10" : "bg-rose-950/40 border-rose-500/20"
                )}
              >
                <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-wider text-slate-400">
                  <span>{state.roas.label}</span>
                  <div className="w-6 h-6 rounded-lg bg-white/5 flex items-center justify-center">
                    {isHdm ? (
                      <TrendingUp className="w-3.5 h-3.5 text-teal-400" />
                    ) : (
                      <TrendingDown className="w-3.5 h-3.5 text-rose-400" />
                    )}
                  </div>
                </div>
                <div
                  className={cn(
                    "font-display font-black text-2xl sm:text-3xl transition-colors",
                    isHdm ? "text-teal-400" : "text-rose-400"
                  )}
                >
                  {state.roas.value}
                </div>
                <div className="text-[11px] text-slate-400 font-medium truncate">
                  {state.roas.note}
                </div>
              </div>
            </div>

            {/* ============================================================ */}
            {/* BOTTOM AUDIT ACTION BAR                                      */}
            {/* ============================================================ */}
            <div className="pt-3 sm:pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="flex items-center gap-2 text-xs text-slate-300 text-left">
                <ShieldCheck className="w-4 h-4 text-teal-400 shrink-0" />
                <span>
                  Stop leaking ad budget. Our lead architects will audit your website conversion funnel.
                </span>
              </div>

              <StarBorder
                as={Link}
                href="/get-a-quote"
                className="w-full sm:w-auto py-2.5 sm:py-3 px-5 sm:px-6 rounded-xl text-xs font-black uppercase tracking-wider inline-flex items-center justify-center gap-2 shrink-0 cursor-pointer shadow-lg group"
                radius={12}
                color="#FFF8E7"
                trailColor="#FFB020"
                backgroundColor="#FFB020"
                textColor="#060B22"
                borderColor="rgba(255, 176, 32, 0.5)"
                sparkle={true}
                glow={0.8}
              >
                <span>AUDIT YOUR WEBSITE FUNNEL</span>
                <ArrowRight className="w-4 h-4 text-[#060B22] group-hover:translate-x-1 transition-transform" />
              </StarBorder>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

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
} from "lucide-react";
import { cn } from "@/lib/utils";
import StarBorder from "@/components/ui/StarBorder";

type EngineMode = "leaky" | "hdm";

// Real Brand SVGs for authentic industry recognizability
function GoogleAdsIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path
        d="M4.05 14.53l6.09-10.55c.67-1.16 2.15-1.56 3.31-.89l3.41 1.97c1.16.67 1.56 2.15.89 3.31L11.66 18.92c-.67 1.16-2.15 1.56-3.31.89L4.94 17.84c-1.16-.67-1.56-2.15-.89-3.31z"
        fill="#FBBC04"
      />
      <path
        d="M19.95 14.53l-6.09-10.55c-.67-1.16-2.15-1.56-3.31-.89l-3.41 1.97c-1.16.67-1.56 2.15-.89 3.31l6.09 10.55c.67 1.16 2.15 1.56 3.31.89l3.41-1.97c1.16-.67 1.56-2.15.89-3.31z"
        fill="#4285F4"
      />
      <circle cx="7.7" cy="16.5" r="3.2" fill="#34A853" />
    </svg>
  );
}

function MetaInstagramIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path
        fill="url(#meta-grad)"
        d="M16.995 3c-2.457 0-4.07 1.488-4.995 2.871C11.075 4.488 9.462 3 7.005 3 3.633 3 1 5.922 1 9.94c0 4.673 3.978 8.653 10.428 11.06.37.139.774.139 1.144 0C19.022 18.593 23 14.613 23 9.94 23 5.922 20.367 3 16.995 3zm-9.99 12.35c-2.185 0-3.957-1.772-3.957-3.957 0-2.185 1.772-3.957 3.957-3.957 1.93 0 3.308 1.42 4.148 2.766-.99 1.587-2.316 5.148-4.148 5.148zm9.99 0c-1.832 0-3.158-3.561-4.148-5.148.84-1.346 2.218-2.766 4.148-2.766 2.185 0 3.957 1.772 3.957 3.957 0 2.185-1.772 3.957-3.957 3.957z"
      />
      <defs>
        <linearGradient id="meta-grad" x1="1" y1="12" x2="23" y2="12" gradientUnits="userSpaceOnUse">
          <stop stopColor="#0064E0" />
          <stop offset="0.5" stopColor="#0082FB" />
          <stop offset="1" stopColor="#00A2FF" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function GoogleSearchIcon({ className = "w-4 h-4" }: { className?: string }) {
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

function BrandDirectIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path
        d="M12 2L3 7v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-9-5z"
        fill="url(#brand-shield-grad)"
        stroke="#FFB020"
        strokeWidth="1.5"
      />
      <path
        d="M12 6l2.12 4.3 4.75.69-3.44 3.35.81 4.73L12 16.84l-4.24 2.23.81-4.73-3.44-3.35 4.75-.69L12 6z"
        fill="#060B22"
      />
      <defs>
        <linearGradient id="brand-shield-grad" x1="3" y1="2" x2="21" y2="25" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFB020" />
          <stop offset="1" stopColor="#B87A00" />
        </linearGradient>
      </defs>
    </svg>
  );
}

interface MetricDial {
  label: string;
  value: string;
  note: string;
}

interface ChannelData {
  id: string;
  name: string;
  badge: string;
  icon: React.ReactNode;
  leaky: {
    headline: string;
    description: string;
    step2Status: string;
    step3Status: string;
    speed: MetricDial;
    quality: MetricDial;
    roas: MetricDial;
  };
  hdm: {
    headline: string;
    description: string;
    step2Status: string;
    step3Status: string;
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
    icon: <GoogleAdsIcon className="w-4 h-4 shrink-0" />,
    leaky: {
      headline: "Paying High CPC for Clicks That Bounce in 3 Seconds",
      description: "Generic slow templates cause 72% bounce before the landing page hero finishes loading, wasting budget on unengaged clicks.",
      step2Status: "3.6s Template Freeze (72% Dropoff)",
      step3Status: "Wasted Ad Spend",
      speed: { label: "Initial Paint Speed", value: "3.6s", note: "Slow template lag" },
      quality: { label: "Quality Score", value: "3/10", note: "High CPC bid penalty" },
      roas: { label: "Return on Ad Spend", value: "0.8x", note: "Capital leak" },
    },
    hdm: {
      headline: "Lowest Cost-Per-Click & 3.8x Higher Inbound Leads",
      description: "Exact keyword-to-headline alignment with sub-second page paint turns expensive search clicks into instant booked consultations.",
      step2Status: "0.58s Edge Paint (Zero Dropoff)",
      step3Status: "Verified Inbound Inquiry",
      speed: { label: "Initial Paint Speed", value: "0.58s", note: "Sub-second edge paint ✓" },
      quality: { label: "Quality Score", value: "10/10", note: "Lowest CPC / Top rank ✓" },
      roas: { label: "Return on Ad Spend", value: "4.8x", note: "High-impact ROAS ✓" },
    },
  },
  {
    id: "meta-ads",
    name: "Meta & Instagram",
    badge: "Social Mobile Feed",
    icon: <MetaInstagramIcon className="w-4 h-4 shrink-0" />,
    leaky: {
      headline: "Mobile Feed Shoppers Abandon Clumsy Multi-Page Forms",
      description: "Mobile friction and sluggish page weight lose 81% of feed scrollers before they reach the second fold.",
      step2Status: "3.9s Mobile Lag (81% Dropoff)",
      step3Status: "Negative Ad ROI",
      speed: { label: "Mobile Paint Speed", value: "3.9s", note: "Severe mobile dropoff" },
      quality: { label: "Conversion Rate", value: "0.9%", note: "Cart abandon penalty" },
      roas: { label: "Return on Ad Spend", value: "0.6x", note: "Negative return" },
    },
    hdm: {
      headline: "Thumb-First Mobile Flow with Maximum ROAS",
      description: "Ultra-responsive mobile layout, instant slide cart, and frictionless 1-tap checkout capture mobile buyers seamlessly.",
      step2Status: "0.62s Mobile Paint (Instant Flow)",
      step3Status: "Direct Customer Purchase",
      speed: { label: "Mobile Paint Speed", value: "0.62s", note: "Fluid 60 FPS mobile UI ✓" },
      quality: { label: "Conversion Rate", value: "4.6%", note: "+380% conversion lift ✓" },
      roas: { label: "Return on Ad Spend", value: "5.4x", note: "Compounding returns ✓" },
    },
  },
  {
    id: "seo",
    name: "Technical SEO",
    badge: "Organic Search",
    icon: <GoogleSearchIcon className="w-4 h-4 shrink-0" />,
    leaky: {
      headline: "Google Rank Penalties from Layout Shift and Poor Vitals",
      description: "Failing Core Web Vitals and unstable layout shifts (CLS) trigger algorithmic rank demotions, drying up organic traffic.",
      step2Status: "Failing Vitals (65% Pogo-Sticking)",
      step3Status: "Declining Rankings",
      speed: { label: "Core Web Vitals", value: "Poor", note: "Fails Google audit" },
      quality: { label: "Organic Rank Position", value: "#18-35", note: "Suppressed keyword rank" },
      roas: { label: "Organic Pipeline", value: "Stagnant", note: "Zero compounding growth" },
    },
    hdm: {
      headline: "Compounding Top-3 Ranks with Sub-Second Edge Delivery",
      description: "Clean semantic HTML5, zero CLS, and automated Schema.org structured data get rewarded with top Google rankings.",
      step2Status: "100/100 Vitals (Sub-Second SLA)",
      step3Status: "Top-3 Organic Positions",
      speed: { label: "Core Web Vitals", value: "100/100", note: "Google top 1% benchmark ✓" },
      quality: { label: "Organic Rank Position", value: "Top 3", note: "High search authority ✓" },
      roas: { label: "Organic Pipeline", value: "3.8x Lift", note: "Free compounding leads ✓" },
    },
  },
  {
    id: "brand",
    name: "Brand & Direct",
    badge: "Executive Authority",
    icon: <BrandDirectIcon className="w-4 h-4 shrink-0" />,
    leaky: {
      headline: "High-Ticket Enterprise Referrals Bounce Without Inquiring",
      description: "Executive referrals land on dated, generic homepages with no clear commercial next step, losing major deals.",
      step2Status: "Confusing Navigation (58% Exit)",
      step3Status: "Lost Enterprise Deals",
      speed: { label: "Executive Perception", value: "Generic", note: "Template look & feel" },
      quality: { label: "Form Completion", value: "12%", note: "Friction-heavy intake" },
      roas: { label: "Enterprise Pipeline", value: "Low Win-Rate", note: "Weak brand credibility" },
    },
    hdm: {
      headline: "Institutional Authority & Direct Enterprise Scoping",
      description: "Bespoke executive-grade design, interactive scoping modules, and direct senior calendar routing secure major accounts.",
      step2Status: "Bespoke Authority (Sub-Second Flow)",
      step3Status: "High-Ticket Client Retained",
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

  return (
    <section
      id="marketing-foundation"
      className="py-12 sm:py-16 lg:py-20 bg-[#FAF8F5] border-y border-[#E2DBD0] select-none scroll-mt-24 relative overflow-hidden"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-7 sm:space-y-9 text-center">
        {/* ============================================================ */}
        {/* 1. CLEAN SECTION HEADER                                      */}
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
        {/* 2. DUAL-MODE CONTROLLER & CHANNELS (SUPER CLEAN UI)           */}
        {/* ============================================================ */}
        <div className="flex flex-col items-center gap-3.5 sm:gap-4 max-w-3xl mx-auto">
          {/* Elegant Mode Toggle Switch */}
          <div className="inline-flex items-center p-1 bg-white rounded-2xl border border-[#E2DBD0] shadow-xs">
            <button
              type="button"
              onClick={() => setMode("leaky")}
              className={cn(
                "py-2 px-3.5 sm:px-5 rounded-xl text-xs font-bold transition-all duration-300 cursor-pointer flex items-center gap-1.5 sm:gap-2",
                !isHdm
                  ? "bg-rose-950 text-rose-300 border border-rose-500/40 shadow-sm font-black"
                  : "bg-transparent text-slate-600 hover:text-slate-900 hover:bg-slate-50"
              )}
            >
              <AlertTriangle className={cn("w-3.5 h-3.5", !isHdm ? "text-rose-400" : "text-slate-400")} />
              <span>Typical Leaky Website</span>
            </button>

            <button
              type="button"
              onClick={() => setMode("hdm")}
              className={cn(
                "py-2 px-3.5 sm:px-5 rounded-xl text-xs font-bold transition-all duration-300 cursor-pointer flex items-center gap-1.5 sm:gap-2",
                isHdm
                  ? "bg-[#060B22] text-[#FFB020] border border-[#FFB020]/60 shadow-sm font-black"
                  : "bg-transparent text-slate-600 hover:text-slate-900 hover:bg-slate-50"
              )}
            >
              <Zap className={cn("w-3.5 h-3.5", isHdm ? "text-[#FFB020] fill-[#FFB020]" : "text-slate-400")} />
              <span>HDM Revenue Engine</span>
            </button>
          </div>

          {/* 4 Clean Traffic Channels Pills */}
          <div className="flex items-center justify-center gap-1.5 sm:gap-2 flex-wrap">
            {CHANNELS.map((ch) => {
              const isSelected = ch.id === activeChannelId;
              return (
                <button
                  key={ch.id}
                  type="button"
                  onClick={() => setActiveChannelId(ch.id)}
                  className={cn(
                    "px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl text-xs font-bold transition-all duration-300 cursor-pointer flex items-center gap-2 border shadow-2xs",
                    isSelected
                      ? isHdm
                        ? "bg-[#060B22] text-white border-[#FFB020] ring-2 ring-[#FFB020]/25 shadow-md scale-102"
                        : "bg-rose-950 text-rose-100 border-rose-500 ring-2 ring-rose-500/25 shadow-md scale-102"
                      : "bg-white text-slate-700 border-[#E2DBD0] hover:border-slate-400 hover:bg-slate-50"
                  )}
                >
                  <div className="w-4 h-4 flex items-center justify-center shrink-0">
                    {ch.icon}
                  </div>
                  <span>{ch.name}</span>
                  {isSelected && (
                    <span
                      className={cn(
                        "w-1.5 h-1.5 rounded-full",
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
        {/* 3. LUXURY DARK CONVERSION ENGINE HUD (SUPER CLEAN & ATTRACTIVE) */}
        {/* ============================================================ */}
        <div
          className={cn(
            "rounded-2xl sm:rounded-3xl border transition-all duration-500 p-4 sm:p-7 lg:p-9 text-white relative overflow-hidden shadow-2xl text-left",
            isHdm
              ? "bg-gradient-to-br from-[#060B22] via-[#091536] to-[#040817] border-[#FFB020]/40 shadow-[0_20px_50px_-15px_rgba(6,11,34,0.5)]"
              : "bg-gradient-to-br from-[#1C0A0E] via-[#240B12] to-[#120508] border-rose-500/40 shadow-[0_20px_50px_-15px_rgba(239,68,68,0.25)]"
          )}
        >
          {/* Subtle Ambient Glows */}
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
            {/* Top State Badge & Channel Indicator */}
            <div className="flex items-center justify-between pb-3.5 border-b border-white/10 gap-3">
              <div className="flex items-center gap-2.5">
                <div
                  className={cn(
                    "w-8 h-8 sm:w-9 sm:h-9 rounded-xl flex items-center justify-center font-black transition-all duration-300 shadow-md shrink-0",
                    isHdm
                      ? "bg-[#FFB020] text-[#060B22] ring-2 ring-[#FFB020]/30"
                      : "bg-rose-600 text-white ring-2 ring-rose-500/30"
                  )}
                >
                  {isHdm ? <Zap className="w-4 h-4 fill-[#060B22]" /> : <AlertTriangle className="w-4 h-4" />}
                </div>

                <div>
                  <div
                    className={cn(
                      "text-[10px] sm:text-[11px] font-mono font-bold uppercase tracking-wider",
                      isHdm ? "text-[#FFB020]" : "text-rose-400"
                    )}
                  >
                    {isHdm ? "Engine Status: Active & Optimizing" : "Simulation: Friction Detected"}
                  </div>
                  <div className="text-white font-extrabold text-xs sm:text-sm">
                    {activeChannel.name} • {activeChannel.badge}
                  </div>
                </div>
              </div>

              <div
                className={cn(
                  "px-2.5 sm:px-3 py-1 rounded-full font-mono text-[10px] sm:text-xs font-bold border inline-flex items-center gap-1.5 shrink-0",
                  isHdm
                    ? "bg-teal-500/15 text-teal-300 border-teal-500/30"
                    : "bg-rose-500/15 text-rose-300 border-rose-500/30"
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

            {/* Headline & Concise Insight */}
            <div className="space-y-1 sm:space-y-1.5">
              <h3 className="font-display font-black text-lg sm:text-2xl text-white tracking-tight leading-snug">
                {state.headline}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal max-w-3xl">
                {state.description}
              </p>
            </div>

            {/* ============================================================ */}
            {/* VISUAL 3-STEP CONVERSION PIPELINE (INTUITIVE & CLEAN)         */}
            {/* ============================================================ */}
            <div
              className={cn(
                "p-3 sm:p-4 rounded-xl sm:rounded-2xl border transition-all duration-300",
                isHdm ? "bg-white/[0.03] border-white/10" : "bg-rose-950/30 border-rose-500/20"
              )}
            >
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3 items-center text-center">
                {/* Step 1: Ad Click */}
                <div className="flex items-center sm:flex-col justify-between sm:justify-center gap-1 p-2 rounded-lg bg-black/20 border border-white/5">
                  <span className="text-[10px] font-mono text-slate-400 uppercase">Step 01</span>
                  <span className="text-xs sm:text-sm font-bold text-white">Paid Traffic Click</span>
                </div>

                {/* Step 2: Landing Page Paint */}
                <div
                  className={cn(
                    "flex items-center sm:flex-col justify-between sm:justify-center gap-1 p-2 rounded-lg border",
                    isHdm
                      ? "bg-teal-950/40 border-teal-500/30 text-teal-300"
                      : "bg-rose-950/50 border-rose-500/30 text-rose-300"
                  )}
                >
                  <span className="text-[10px] font-mono uppercase opacity-75">Step 02 · Experience</span>
                  <div className="flex items-center gap-1.5 text-xs sm:text-sm font-bold">
                    {isHdm ? (
                      <CheckCircle2 className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                    ) : (
                      <XCircle className="w-3.5 h-3.5 text-rose-400 shrink-0" />
                    )}
                    <span>{state.step2Status}</span>
                  </div>
                </div>

                {/* Step 3: Commercial Outcome */}
                <div
                  className={cn(
                    "flex items-center sm:flex-col justify-between sm:justify-center gap-1 p-2 rounded-lg border",
                    isHdm
                      ? "bg-[#FFB020]/10 border-[#FFB020]/30 text-[#FFB020]"
                      : "bg-rose-950/50 border-rose-500/30 text-rose-300"
                  )}
                >
                  <span className="text-[10px] font-mono uppercase opacity-75">Step 03 · Commercial</span>
                  <span className="text-xs sm:text-sm font-bold">{state.step3Status}</span>
                </div>
              </div>
            </div>

            {/* ============================================================ */}
            {/* 3 LIVE TELEMETRY METRIC CARDS                                */}
            {/* ============================================================ */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3.5">
              {/* Dial 1 */}
              <div
                className={cn(
                  "p-3 sm:p-4 rounded-xl sm:rounded-2xl border transition-all duration-500 space-y-1 relative overflow-hidden",
                  isHdm ? "bg-white/[0.04] border-white/10" : "bg-rose-950/40 border-rose-500/20"
                )}
              >
                <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-wider text-slate-400">
                  <span>{state.speed.label}</span>
                  <Activity className="w-3.5 h-3.5 text-slate-400" />
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

              {/* Dial 2 */}
              <div
                className={cn(
                  "p-3 sm:p-4 rounded-xl sm:rounded-2xl border transition-all duration-500 space-y-1 relative overflow-hidden",
                  isHdm ? "bg-white/[0.04] border-white/10" : "bg-rose-950/40 border-rose-500/20"
                )}
              >
                <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-wider text-slate-400">
                  <span>{state.quality.label}</span>
                  <Gauge className="w-3.5 h-3.5 text-slate-400" />
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

              {/* Dial 3 */}
              <div
                className={cn(
                  "p-3 sm:p-4 rounded-xl sm:rounded-2xl border transition-all duration-500 space-y-1 relative overflow-hidden",
                  isHdm ? "bg-white/[0.04] border-white/10" : "bg-rose-950/40 border-rose-500/20"
                )}
              >
                <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-wider text-slate-400">
                  <span>{state.roas.label}</span>
                  {isHdm ? (
                    <TrendingUp className="w-3.5 h-3.5 text-teal-400" />
                  ) : (
                    <TrendingDown className="w-3.5 h-3.5 text-rose-400" />
                  )}
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

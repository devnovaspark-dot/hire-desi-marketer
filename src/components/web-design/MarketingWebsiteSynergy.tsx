"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Sparkles,
  ArrowRight,
  AlertTriangle,
  Zap,
  CheckCircle2,
  Activity,
  ShieldCheck,
  TrendingDown,
  TrendingUp,
  Droplets,
  Gauge,
  Flame,
} from "lucide-react";
import { cn } from "@/lib/utils";
import StarBorder from "@/components/ui/StarBorder";
import TileReveal from "@/components/ui/TileReveal";

type EngineMode = "leaky" | "hdm";

// Real High-Conversion Portfolio & Benchmark Screens for React Bits Tile Reveal
const TILE_IMAGES = [
  "/images/ref-linear.jpg",
  "/images/ref-allbirds.jpg",
  "/images/ref-onemedical.jpg",
  "/images/ref-mckinsey.jpg",
  "/images/services-ui-design-showcase.jpg",
  "/images/hero-devices-mockup.jpg",
  "/images/case-study-aesthetic.webp",
  "/images/case-study-cafe.webp",
  "/images/case-study-dental.webp",
];

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

interface TrafficChannel {
  id: string;
  name: string;
  badge: string;
  icon: React.ReactNode;
  leakyState: {
    friction: string;
    speed: string;
    bounce: string;
    roas: string;
    lossHeadline: string;
  };
  hdmState: {
    breakthrough: string;
    speed: string;
    conversion: string;
    roas: string;
    growthHeadline: string;
  };
}

const CHANNELS: TrafficChannel[] = [
  {
    id: "google-ads",
    name: "Google Ads",
    badge: "Paid Search Intent",
    icon: <GoogleAdsIcon className="w-4 h-4 shrink-0" />,
    leakyState: {
      friction: "Slow generic lander with mismatched headlines causes 72% bounce before form view.",
      speed: "3.6s Initial Paint",
      bounce: "72% Bounce Rate",
      roas: "0.8x (Budget Waste)",
      lossHeadline: "Paying Top Dollar for Clicks That Bounce in 3 Seconds",
    },
    hdmState: {
      breakthrough: "Exact keyword-to-headline alignment with sub-second page paint and 1-tap booking.",
      speed: "0.58s Initial Paint",
      conversion: "10/10 Quality Score",
      roas: "4.8x High-Impact ROAS",
      growthHeadline: "Lowest Cost-Per-Click & 3.8x Higher Inbound Qualified Leads",
    },
  },
  {
    id: "meta-ads",
    name: "Meta & Instagram",
    badge: "Social Mobile Feed",
    icon: <MetaInstagramIcon className="w-4 h-4 shrink-0" />,
    leakyState: {
      friction: "Mobile lag > 2.5s and clumsy multi-page forms lose 81% of feed shoppers instantly.",
      speed: "3.9s Mobile Load",
      bounce: "81% Dropoff Rate",
      roas: "0.6x (Negative ROI)",
      lossHeadline: "Ad Algorithms Optimize for Bounced Mobile Clicks",
    },
    hdmState: {
      breakthrough: "Thumb-first mobile flow with server-side CAPI event tracking and instant slide cart.",
      speed: "0.62s Mobile Paint",
      conversion: "4.2x ROAS Lift",
      roas: "5.4x Blended ROAS",
      growthHeadline: "Frictionless Mobile Checkout with Maximum Return on Ad Spend",
    },
  },
  {
    id: "seo",
    name: "Technical SEO",
    badge: "Organic Search",
    icon: <GoogleSearchIcon className="w-4 h-4 shrink-0" />,
    leakyState: {
      friction: "Layout shifts (CLS) and failing Core Web Vitals get demoted by Google rank algorithms.",
      speed: "Failing Vitals",
      bounce: "65% Pogo-Sticking",
      roas: "Declining Traffic",
      lossHeadline: "Google Demotes Organic Keyword Rankings Due to Poor UX",
    },
    hdmState: {
      breakthrough: "Clean semantic HTML5, zero CLS, and automated Schema.org structured JSON-LD data.",
      speed: "100/100 Core Web Vitals",
      conversion: "Top-3 Keyword Ranks",
      roas: "Free Compounding Leads",
      growthHeadline: "Compounding Organic Rankings with Sub-Second Edge Delivery",
    },
  },
  {
    id: "social-brand",
    name: "Brand & Direct",
    badge: "Executive Authority",
    icon: <BrandDirectIcon className="w-4 h-4 shrink-0" />,
    leakyState: {
      friction: "Executive referrals land on outdated homepages with no clear commercial next step.",
      speed: "Confusing Navigation",
      bounce: "58% Inactive Exits",
      roas: "Lost Big Deals",
      lossHeadline: "High-Ticket Enterprise Referrals Leave Without Inquiring",
    },
    hdmState: {
      breakthrough: "Curated campaign landers with direct interactive Calendar & lead qualification funnel.",
      speed: "Instant Interactive Flow",
      conversion: "+48% Booked Calls",
      roas: "Enterprise Pipeline",
      growthHeadline: "Direct Conversion of High-Value Founder & Enterprise Inquiries",
    },
  },
];

export function MarketingWebsiteSynergy() {
  const [mode, setMode] = useState<EngineMode>("hdm");
  const [activeChannelId, setActiveChannelId] = useState<string>("google-ads");

  const activeChannel =
    CHANNELS.find((c) => c.id === activeChannelId) || CHANNELS[0];

  return (
    <section
      id="marketing-foundation"
      className="bg-[#FAF8F5] border-y border-[#E2DBD0] select-none scroll-mt-24"
    >
      {/* ============================================================ */}
      {/* 1. REACT BITS PRO TILE REVEAL COMPONENT                      */}
      {/* Image tiles fly in & split on scroll to reveal the headline  */}
      {/* ============================================================ */}
      <TileReveal
        images={TILE_IMAGES}
        columns={3}
        gap={16}
        gridWidth={880}
        scrollLength={0.85}
        backgroundColor="#FAF8F5"
        headline={
          <div className="max-w-3xl mx-auto space-y-3 px-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#060B22] text-[#FFB020] text-xs font-black uppercase tracking-wider border border-[#FFB020]/30 shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#FFB020]" />
              <span>03 · The Marketing + Website Relationship</span>
            </div>

            <h2 className="font-display font-black text-2xl sm:text-3xl lg:text-4xl text-[#0B1B3A] tracking-tight leading-tight">
              A Great Advertising Campaign Cannot Fix a Leaky Website.
            </h2>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal max-w-2xl mx-auto">
              Your ad spend is only as profitable as the website it sends visitors to. See the difference between a typical template and an engineered conversion engine.
            </p>
          </div>
        }
      />

      {/* ============================================================ */}
      {/* 2. THE INTERACTIVE CONVERSION ENGINE SIMULATOR               */}
      {/* ============================================================ */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-8 text-center pb-16 pt-2">

        {/* ============================================================ */}
        {/* 2. DUAL-MODE INTERACTIVE TOGGLE SWITCH                       */}
        {/* ============================================================ */}
        <div className="flex flex-col items-center justify-center space-y-2">
          <div className="p-1.5 bg-white rounded-2xl border border-[#E2DBD0] shadow-sm flex items-center gap-2 max-w-md w-full">
            <button
              type="button"
              onClick={() => setMode("leaky")}
              className={cn(
                "flex-1 py-2.5 px-4 rounded-xl text-xs font-bold transition-all duration-300 cursor-pointer flex items-center justify-center gap-2 border",
                mode === "leaky"
                  ? "bg-rose-950 text-rose-300 border-rose-500/50 shadow-md scale-102 font-black"
                  : "bg-transparent text-slate-600 border-transparent hover:text-slate-900 hover:bg-slate-50"
              )}
            >
              <AlertTriangle className="w-4 h-4 text-rose-400" />
              <span>Typical Leaky Website</span>
            </button>

            <button
              type="button"
              onClick={() => setMode("hdm")}
              className={cn(
                "flex-1 py-2.5 px-4 rounded-xl text-xs font-bold transition-all duration-300 cursor-pointer flex items-center justify-center gap-2 border",
                mode === "hdm"
                  ? "bg-[#060B22] text-[#FFB020] border-[#FFB020] shadow-md scale-102 font-black"
                  : "bg-transparent text-slate-600 border-transparent hover:text-slate-900 hover:bg-slate-50"
              )}
            >
              <Zap className="w-4 h-4 text-[#FFB020]" />
              <span>HDM Revenue Engine</span>
            </button>
          </div>

          <div className="text-[11px] font-mono text-slate-500">
            {mode === "hdm" ? (
              <span className="text-teal-700 font-bold flex items-center gap-1.5 justify-center">
                <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
                Simulating: Sub-second paint, zero layout shift, 1-tap conversion flow
              </span>
            ) : (
              <span className="text-rose-700 font-bold flex items-center gap-1.5 justify-center">
                <span className="w-2 h-2 rounded-full bg-rose-500 animate-ping" />
                Simulating: Slow legacy template, 70%+ bounce rate, wasted ad budget
              </span>
            )}
          </div>
        </div>

        {/* ============================================================ */}
        {/* 3. CHANNEL SELECTOR STRIP WITH REAL BRAND ICONS              */}
        {/* ============================================================ */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 overflow-x-auto pb-1 no-scrollbar">
          {CHANNELS.map((ch) => {
            const isSelected = ch.id === activeChannelId;
            return (
              <button
                key={ch.id}
                type="button"
                onClick={() => setActiveChannelId(ch.id)}
                className={cn(
                  "px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-2xl text-xs font-bold transition-all duration-300 cursor-pointer whitespace-nowrap flex items-center gap-2.5 border shadow-2xs group",
                  isSelected
                    ? mode === "hdm"
                      ? "bg-[#060B22] text-white border-[#FFB020] ring-2 ring-[#FFB020]/25 shadow-md scale-102"
                      : "bg-rose-950 text-rose-100 border-rose-500 ring-2 ring-rose-500/25 shadow-md scale-102"
                    : "bg-white text-slate-700 border-[#E2DBD0] hover:border-slate-400 hover:bg-white"
                )}
              >
                <div
                  className={cn(
                    "w-6 h-6 rounded-lg flex items-center justify-center transition-transform group-hover:scale-110",
                    isSelected ? "bg-white/10" : "bg-[#FAF8F5]"
                  )}
                >
                  {ch.icon}
                </div>
                <span className="font-extrabold">{ch.name}</span>
                <span className="text-[10px] font-mono opacity-70 hidden md:inline">
                  ({ch.badge})
                </span>
                {isSelected && (
                  <span
                    className={cn(
                      "w-1.5 h-1.5 rounded-full ml-0.5",
                      mode === "hdm" ? "bg-teal-400 animate-pulse" : "bg-rose-400 animate-ping"
                    )}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Animated Traffic Data Stream Beam Connecting Channel to Chamber */}
        <div className="relative h-4 flex items-center justify-center overflow-hidden pointer-events-none">
          <div
            className={cn(
              "w-1 h-full rounded-full transition-all duration-500",
              mode === "hdm"
                ? "bg-gradient-to-b from-[#FFB020] via-teal-400 to-teal-400 shadow-[0_0_8px_rgba(45,212,191,0.8)]"
                : "bg-gradient-to-b from-rose-500 to-rose-700 shadow-[0_0_8px_rgba(244,63,94,0.8)] animate-pulse"
            )}
          />
        </div>

        {/* ============================================================ */}
        {/* 4. THE INTERACTIVE CONVERSION CHAMBER (ANIMATED HUD DISPLAY) */}
        {/* ============================================================ */}
        <div
          className={cn(
            "rounded-3xl border transition-all duration-700 p-6 sm:p-8 lg:p-10 text-white relative overflow-hidden shadow-2xl text-left",
            mode === "hdm"
              ? "bg-gradient-to-br from-[#060B22] via-[#091638] to-[#060B22] border-[#FFB020]/40 shadow-[0_25px_60px_-15px_rgba(255,176,32,0.25)]"
              : "bg-gradient-to-br from-[#1C0A0E] via-[#2A0E15] to-[#140609] border-rose-500/40 shadow-[0_25px_60px_-15px_rgba(239,68,68,0.25)]"
          )}
        >
          {/* Ambient Chamber Glows */}
          <div
            className={cn(
              "absolute -top-24 -right-24 w-96 h-96 rounded-full blur-[130px] pointer-events-none transition-all duration-700",
              mode === "hdm" ? "bg-[#FFB020]/25" : "bg-rose-600/30"
            )}
          />
          <div
            className={cn(
              "absolute -bottom-24 -left-24 w-96 h-96 rounded-full blur-[130px] pointer-events-none transition-all duration-700",
              mode === "hdm" ? "bg-teal-500/25" : "bg-red-800/25"
            )}
          />

          <div className="relative z-10 space-y-6 sm:space-y-8">
            {/* Top State Status Bar */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div
                  className={cn(
                    "w-11 h-11 rounded-2xl flex items-center justify-center font-black transition-all duration-500 shadow-md",
                    mode === "hdm"
                      ? "bg-[#FFB020] text-[#060B22] ring-2 ring-[#FFB020]/40"
                      : "bg-rose-600 text-white ring-2 ring-rose-500/40 animate-pulse"
                  )}
                >
                  {mode === "hdm" ? <Zap className="w-5 h-5" /> : <Droplets className="w-5 h-5" />}
                </div>

                <div>
                  <div
                    className={cn(
                      "text-[10.5px] font-mono font-bold uppercase tracking-wider flex items-center gap-1.5",
                      mode === "hdm" ? "text-[#FFB020]" : "text-rose-400"
                    )}
                  >
                    <span>{mode === "hdm" ? "HDM Conversion Engine Active" : "Leaky Website Simulation"}</span>
                    <span>·</span>
                    <span className="text-white font-mono">{activeChannel.name}</span>
                  </div>
                  <div className="text-white font-black text-sm sm:text-base mt-0.5">
                    Traffic Source: {activeChannel.name} ({activeChannel.badge})
                  </div>
                </div>
              </div>

              <div
                className={cn(
                  "px-3.5 py-1.5 rounded-full font-mono text-xs font-bold border inline-flex items-center gap-2 self-start sm:self-center transition-all",
                  mode === "hdm"
                    ? "bg-teal-500/20 text-teal-300 border-teal-500/40 shadow-xs"
                    : "bg-rose-500/20 text-rose-300 border-rose-500/40 shadow-xs"
                )}
              >
                <span
                  className={cn(
                    "w-2 h-2 rounded-full",
                    mode === "hdm" ? "bg-teal-400 animate-pulse" : "bg-rose-400 animate-ping"
                  )}
                />
                <span>
                  {mode === "hdm" ? "REVENUE MULTIPLIER: ACTIVE" : "BUDGET LEAKAGE DETECTED"}
                </span>
              </div>
            </div>

            {/* Core Outcome Headline */}
            <div className="space-y-2">
              <h3 className="font-display font-black text-xl sm:text-2xl lg:text-3xl text-white tracking-tight leading-snug">
                {mode === "hdm"
                  ? activeChannel.hdmState.growthHeadline
                  : activeChannel.leakyState.lossHeadline}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-3xl font-normal">
                {mode === "hdm"
                  ? activeChannel.hdmState.breakthrough
                  : activeChannel.leakyState.friction}
              </p>
            </div>

            {/* 3 Live Visual Telemetry Meters */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
              <div
                className={cn(
                  "p-4 rounded-2xl border transition-all duration-500 space-y-1 relative overflow-hidden",
                  mode === "hdm"
                    ? "bg-white/[0.04] border-white/10"
                    : "bg-rose-950/40 border-rose-500/20"
                )}
              >
                <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-wider text-slate-400">
                  <span>Initial Paint Speed</span>
                  <Activity className="w-3.5 h-3.5 text-slate-400" />
                </div>
                <div
                  className={cn(
                    "font-display font-black text-2xl transition-colors",
                    mode === "hdm" ? "text-teal-400" : "text-rose-400"
                  )}
                >
                  {mode === "hdm"
                    ? activeChannel.hdmState.speed
                    : activeChannel.leakyState.speed}
                </div>
                <div className="text-[11px] text-slate-400 font-medium">
                  {mode === "hdm" ? "Sub-second edge paint ✓" : "Causes instant mobile bounce ✗"}
                </div>
              </div>

              <div
                className={cn(
                  "p-4 rounded-2xl border transition-all duration-500 space-y-1 relative overflow-hidden",
                  mode === "hdm"
                    ? "bg-white/[0.04] border-white/10"
                    : "bg-rose-950/40 border-rose-500/20"
                )}
              >
                <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-wider text-slate-400">
                  <span>Quality Score &amp; Vitals</span>
                  <Gauge className="w-3.5 h-3.5 text-slate-400" />
                </div>
                <div
                  className={cn(
                    "font-display font-black text-2xl transition-colors",
                    mode === "hdm" ? "text-[#FFB020]" : "text-rose-400"
                  )}
                >
                  {mode === "hdm"
                    ? activeChannel.hdmState.conversion
                    : activeChannel.leakyState.bounce}
                </div>
                <div className="text-[11px] text-slate-400 font-medium">
                  {mode === "hdm" ? "Lowest CPC / Highest Rank ✓" : "Ad algorithm cost penalties ✗"}
                </div>
              </div>

              <div
                className={cn(
                  "p-4 rounded-2xl border transition-all duration-500 space-y-1 relative overflow-hidden",
                  mode === "hdm"
                    ? "bg-white/[0.04] border-white/10"
                    : "bg-rose-950/40 border-rose-500/20"
                )}
              >
                <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-wider text-slate-400">
                  <span>ROAS / Capital Multiplier</span>
                  {mode === "hdm" ? (
                    <TrendingUp className="w-3.5 h-3.5 text-teal-400" />
                  ) : (
                    <TrendingDown className="w-3.5 h-3.5 text-rose-400" />
                  )}
                </div>
                <div
                  className={cn(
                    "font-display font-black text-2xl transition-colors",
                    mode === "hdm" ? "text-teal-400" : "text-rose-400"
                  )}
                >
                  {mode === "hdm"
                    ? activeChannel.hdmState.roas
                    : activeChannel.leakyState.roas}
                </div>
                <div className="text-[11px] text-slate-400 font-medium">
                  {mode === "hdm" ? "Full conversion on ad dollars ✓" : "Capital drained before inquiry ✗"}
                </div>
              </div>
            </div>

            {/* Bottom Direct Audit Action */}
            <div className="pt-5 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs text-slate-300 text-left">
                <ShieldCheck className="w-4 h-4 text-teal-400 shrink-0" />
                <span>
                  Stop leaking marketing budget. Our lead architects will audit your website conversion funnel.
                </span>
              </div>

              <StarBorder
                as={Link}
                href="/get-a-quote"
                className="py-3 px-6 rounded-xl text-xs font-black uppercase tracking-wider inline-flex items-center justify-center gap-2 shrink-0 cursor-pointer shadow-lg group"
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
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </StarBorder>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

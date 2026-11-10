"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Sparkles,
  ArrowRight,
  TrendingUp,
  AlertTriangle,
  Zap,
  Target,
  MousePointerClick,
  Search,
  Share2,
  CheckCircle2,
  XCircle,
  Activity,
  ShieldCheck,
  Flame,
} from "lucide-react";
import { cn } from "@/lib/utils";

type EngineMode = "leaky" | "hdm";

interface TrafficChannel {
  id: string;
  name: string;
  badge: string;
  icon: React.ReactNode;
  leakyState: {
    friction: string;
    speed: string;
    bounce: string;
    lossHeadline: string;
  };
  hdmState: {
    breakthrough: string;
    speed: string;
    conversion: string;
    growthHeadline: string;
  };
}

const CHANNELS: TrafficChannel[] = [
  {
    id: "google-ads",
    name: "Google Ads",
    badge: "Paid Search Intent",
    icon: <Target className="w-4 h-4" />,
    leakyState: {
      friction: "Slow generic lander with mismatched headlines causes 72% bounce.",
      speed: "3.6s Initial Paint",
      bounce: "72% Bounce Rate",
      lossHeadline: "Paying Top Dollar for Clicks That Bounce in 3 Seconds",
    },
    hdmState: {
      breakthrough: "Exact keyword-to-headline alignment with sub-second page paint.",
      speed: "0.58s Initial Paint",
      conversion: "10/10 Quality Score",
      growthHeadline: "Lowest Cost-Per-Click & 3.8x Higher Lead Capture",
    },
  },
  {
    id: "meta-ads",
    name: "Meta & Instagram",
    badge: "Social Mobile Feed",
    icon: <MousePointerClick className="w-4 h-4" />,
    leakyState: {
      friction: "Mobile lag > 2.5s and clumsy multi-page forms lose 81% of feed shoppers.",
      speed: "3.9s Mobile Load",
      bounce: "81% Dropoff Rate",
      lossHeadline: "Ad Algorithms Optimize for Bounced Clicks",
    },
    hdmState: {
      breakthrough: "Thumb-first mobile flow with server-side CAPI and 1-tap checkout.",
      speed: "0.62s Mobile Paint",
      conversion: "4.2x ROAS Lift",
      growthHeadline: "Frictionless Mobile Checkout with Maximum Return on Ad Spend",
    },
  },
  {
    id: "seo",
    name: "Technical SEO",
    badge: "Organic Search",
    icon: <Search className="w-4 h-4" />,
    leakyState: {
      friction: "Layout shifts (CLS) and failing Core Web Vitals get penalized by Google.",
      speed: "Failing Vitals",
      bounce: "65% Pogo-Sticking",
      lossHeadline: "Google Demotes Rankings Due to Bad User Experience",
    },
    hdmState: {
      breakthrough: "Clean semantic HTML5, zero CLS, and automated Schema structured data.",
      speed: "100/100 Core Web Vitals",
      conversion: "Top-3 Keyword Ranks",
      growthHeadline: "Compounding Organic Rankings with Sub-Second Edge Delivery",
    },
  },
  {
    id: "social-brand",
    name: "Brand & Direct",
    badge: "Executive Authority",
    icon: <Share2 className="w-4 h-4" />,
    leakyState: {
      friction: "Bio links dropped on cluttered homepages with no clear commercial next step.",
      speed: "Confusing Navigation",
      bounce: "58% Inactive Exits",
      lossHeadline: "Executive Referrals Leave Without Booking Consultation",
    },
    hdmState: {
      breakthrough: "Curated campaign landers with direct Calendar & Lead Funnel integration.",
      speed: "Instant Interactive Flow",
      conversion: "+48% Booked Calls",
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
      className="py-12 sm:py-16 lg:py-20 bg-[#FAF8F5] border-y border-[#E2DBD0] select-none scroll-mt-24"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10 text-center">
        {/* ============================================================ */}
        {/* 1. CENTERED SECTION HEADER (CLEAN & PUNCHY)                  */}
        {/* ============================================================ */}
        <div className="max-w-3xl mx-auto space-y-3 pb-6 border-b border-[#E2DBD0]">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#060B22] text-[#FFB020] text-xs font-black uppercase tracking-wider border border-[#FFB020]/30 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#FFB020]" />
            <span>03 · The Marketing + Website Relationship</span>
          </div>

          <h2 className="font-display font-black text-2xl sm:text-3xl lg:text-4xl text-[#0B1B3A] tracking-tight leading-tight">
            A Great Advertising Campaign Cannot Fix a Leaky Website.
          </h2>

          <p className="text-xs sm:text-base text-slate-600 leading-relaxed font-normal max-w-2xl mx-auto">
            Your ad spend is only as profitable as the website it sends visitors to. See the difference between a typical template and an engineered conversion engine.
          </p>
        </div>

        {/* ============================================================ */}
        {/* 2. DUAL-MODE INTERACTIVE TOGGLE SWITCH                       */}
        {/* ============================================================ */}
        <div className="flex flex-col items-center justify-center space-y-2">
          <div className="p-1.5 bg-white rounded-2xl border border-[#E2DBD0] shadow-sm flex items-center gap-2 max-w-md w-full">
            <button
              type="button"
              onClick={() => setMode("leaky")}
              className={cn(
                "flex-1 py-3 px-4 rounded-xl text-xs font-bold transition-all duration-300 cursor-pointer flex items-center justify-center gap-2 border",
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
                "flex-1 py-3 px-4 rounded-xl text-xs font-bold transition-all duration-300 cursor-pointer flex items-center justify-center gap-2 border",
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
              <span className="text-emerald-700 font-bold flex items-center gap-1.5 justify-center">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Simulating: Sub-second paint, zero layout shift, 1-tap conversion flow
              </span>
            ) : (
              <span className="text-rose-700 font-bold flex items-center gap-1.5 justify-center">
                <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
                Simulating: Slow legacy template, 70%+ bounce rate, wasted ad budget
              </span>
            )}
          </div>
        </div>

        {/* ============================================================ */}
        {/* 3. CHANNEL SELECTOR STRIP                                    */}
        {/* ============================================================ */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-1 no-scrollbar">
          {CHANNELS.map((ch) => {
            const isSelected = ch.id === activeChannelId;
            return (
              <button
                key={ch.id}
                type="button"
                onClick={() => setActiveChannelId(ch.id)}
                className={cn(
                  "px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap flex items-center gap-2 border",
                  isSelected
                    ? mode === "hdm"
                      ? "bg-[#060B22] text-[#FFB020] border-[#FFB020] shadow-sm"
                      : "bg-rose-950 text-rose-200 border-rose-500 shadow-sm"
                    : "bg-white text-slate-600 border-[#E2DBD0] hover:border-slate-400"
                )}
              >
                <span>{ch.icon}</span>
                <span>{ch.name}</span>
                <span className="text-[10px] font-mono opacity-70 hidden sm:inline">
                  ({ch.badge})
                </span>
              </button>
            );
          })}
        </div>

        {/* ============================================================ */}
        {/* 4. THE INTERACTIVE CONVERSION CHAMBER (ANIMATED DISPLAY)     */}
        {/* ============================================================ */}
        <div
          className={cn(
            "rounded-3xl border transition-all duration-700 p-6 sm:p-10 text-white relative overflow-hidden shadow-2xl text-left",
            mode === "hdm"
              ? "bg-gradient-to-br from-[#060B22] via-[#091638] to-[#060B22] border-[#FFB020]/40 shadow-[0_20px_60px_-15px_rgba(255,176,32,0.25)]"
              : "bg-gradient-to-br from-[#1C0A0E] via-[#2A0E15] to-[#140609] border-rose-500/40 shadow-[0_20px_60px_-15px_rgba(239,68,68,0.2)]"
          )}
        >
          {/* Ambient Chamber Glow */}
          <div
            className={cn(
              "absolute -top-24 -right-24 w-96 h-96 rounded-full blur-[120px] pointer-events-none transition-all duration-700",
              mode === "hdm" ? "bg-[#FFB020]/25" : "bg-rose-600/25"
            )}
          />
          <div
            className={cn(
              "absolute -bottom-24 -left-24 w-96 h-96 rounded-full blur-[120px] pointer-events-none transition-all duration-700",
              mode === "hdm" ? "bg-emerald-500/20" : "bg-red-800/20"
            )}
          />

          <div className="relative z-10 space-y-8">
            {/* Top State Status Bar */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-6 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div
                  className={cn(
                    "w-10 h-10 rounded-2xl flex items-center justify-center font-black text-sm",
                    mode === "hdm"
                      ? "bg-[#FFB020] text-[#060B22]"
                      : "bg-rose-500 text-white"
                  )}
                >
                  {mode === "hdm" ? <Zap className="w-5 h-5" /> : <AlertTriangle className="w-5 h-5" />}
                </div>

                <div>
                  <div
                    className={cn(
                      "text-[11px] font-mono font-bold uppercase tracking-wider",
                      mode === "hdm" ? "text-[#FFB020]" : "text-rose-400"
                    )}
                  >
                    {mode === "hdm" ? "HDM Conversion Engine State" : "Typical Leaky Template State"}
                  </div>
                  <div className="text-white font-bold text-sm sm:text-base">
                    Channel: {activeChannel.name} ({activeChannel.badge})
                  </div>
                </div>
              </div>

              <div
                className={cn(
                  "px-3.5 py-1.5 rounded-full font-mono text-xs font-bold border inline-flex items-center gap-2 self-start sm:self-center",
                  mode === "hdm"
                    ? "bg-emerald-500/20 text-emerald-300 border-emerald-500/40"
                    : "bg-rose-500/20 text-rose-300 border-rose-500/40"
                )}
              >
                <span
                  className={cn(
                    "w-2 h-2 rounded-full",
                    mode === "hdm" ? "bg-emerald-400 animate-pulse" : "bg-rose-400 animate-ping"
                  )}
                />
                <span>
                  {mode === "hdm" ? "REVENUE MULTIPLIER ACTIVE" : "MARKETING BUDGET LEAKAGE"}
                </span>
              </div>
            </div>

            {/* Core Outcome Headline */}
            <div className="space-y-2">
              <h3 className="font-display font-black text-2xl sm:text-3xl text-white tracking-tight leading-snug">
                {mode === "hdm"
                  ? activeChannel.hdmState.growthHeadline
                  : activeChannel.leakyState.lossHeadline}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-3xl">
                {mode === "hdm"
                  ? activeChannel.hdmState.breakthrough
                  : activeChannel.leakyState.friction}
              </p>
            </div>

            {/* Live Visual Telemetry Meters */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1">
                <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400">
                  Initial Paint Speed
                </div>
                <div
                  className={cn(
                    "font-display font-black text-2xl",
                    mode === "hdm" ? "text-emerald-400" : "text-rose-400"
                  )}
                >
                  {mode === "hdm"
                    ? activeChannel.hdmState.speed
                    : activeChannel.leakyState.speed}
                </div>
                <div className="text-[11px] text-slate-400">
                  {mode === "hdm" ? "Zero bounce penalty" : "Causes instant dropoff"}
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1">
                <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400">
                  Conversion &amp; Vitals
                </div>
                <div
                  className={cn(
                    "font-display font-black text-2xl",
                    mode === "hdm" ? "text-[#FFB020]" : "text-rose-400"
                  )}
                >
                  {mode === "hdm"
                    ? activeChannel.hdmState.conversion
                    : activeChannel.leakyState.bounce}
                </div>
                <div className="text-[11px] text-slate-400">
                  {mode === "hdm" ? "Highest ad ranking" : "Ad algorithm penalties"}
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1">
                <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400">
                  Business Capital Impact
                </div>
                <div
                  className={cn(
                    "font-display font-black text-2xl",
                    mode === "hdm" ? "text-emerald-400" : "text-rose-400"
                  )}
                >
                  {mode === "hdm" ? "Maximized ROAS" : "Wasted Ad Dollars"}
                </div>
                <div className="text-[11px] text-slate-400">
                  {mode === "hdm" ? "Full return on ad spend" : "Lost customer inquiries"}
                </div>
              </div>
            </div>

            {/* Bottom Direct Audit Action */}
            <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>
                  Stop leaking marketing budget. Our lead architects will audit your website conversion funnel.
                </span>
              </div>

              <Link
                href="/get-a-quote"
                className="btn-luxury-gold btn-shimmer py-3 px-6 rounded-xl text-xs font-black uppercase tracking-wider inline-flex items-center justify-center gap-2 shrink-0 cursor-pointer shadow-lg group"
              >
                <span>Audit Your Website Funnel</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

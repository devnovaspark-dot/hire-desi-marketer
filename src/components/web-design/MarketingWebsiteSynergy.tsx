"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Sparkles,
  ArrowRight,
  Target,
  Search,
  Share2,
  MousePointerClick,
  CheckCircle2,
  XCircle,
  Zap,
  Activity,
  Lock,
  TrendingUp,
  AlertTriangle,
  Flame,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface ChannelConfig {
  id: string;
  name: string;
  badge: string;
  icon: React.ReactNode;
  accentColor: string;
  bgGlow: string;
  queryExample: string;
  trafficVolume: string;
  // Leaky website scenario
  leakScenario: {
    bounceRate: string;
    friction: string;
    wastedAdSpend: string;
  };
  // HDM Engineered scenario
  hdmScenario: {
    conversionMultiplier: string;
    speedScore: string;
    outcome: string;
  };
}

const CHANNELS: ChannelConfig[] = [
  {
    id: "google-ads",
    name: "Google Ads",
    badge: "Paid Search Intent",
    icon: <Target className="w-4 h-4 text-[#FFB020]" />,
    accentColor: "#FFB020",
    bgGlow: "rgba(255,176,32,0.25)",
    queryExample: '"hire web development agency india"',
    trafficVolume: "High Commercial Intent",
    leakScenario: {
      bounceRate: "72% Bounce Rate",
      friction: "Slow generic lander, mismatched headline, lost buyer in 3 seconds.",
      wastedAdSpend: "High Cost-Per-Click Budget Burn",
    },
    hdmScenario: {
      conversionMultiplier: "3.8x Lead Lift",
      speedScore: "10/10 Quality Score",
      outcome: "Exact keyword-to-headline match with sub-second initial paint.",
    },
  },
  {
    id: "meta-ads",
    name: "Meta Ads",
    badge: "Paid Social & Instagram",
    icon: <MousePointerClick className="w-4 h-4 text-[#38BDF8]" />,
    accentColor: "#38BDF8",
    bgGlow: "rgba(56,189,248,0.25)",
    queryExample: "Instagram Feed Visual Impulse",
    trafficVolume: "High Mobile Volume",
    leakScenario: {
      bounceRate: "81% Mobile Dropoff",
      friction: "Mobile lag > 2.5s, iOS signal loss, clumsy checkout forms.",
      wastedAdSpend: "Ad Algorithm Bids on Bounced Users",
    },
    hdmScenario: {
      conversionMultiplier: "4.2x ROAS",
      speedScore: "< 0.6s Mobile Paint",
      outcome: "Thumb-first mobile flow with server-side CAPI telemetry & 1-tap checkout.",
    },
  },
  {
    id: "seo",
    name: "Technical SEO",
    badge: "Organic Search Engines",
    icon: <Search className="w-4 h-4 text-[#34D399]" />,
    accentColor: "#34D399",
    bgGlow: "rgba(52,211,153,0.25)",
    queryExample: "Top-3 Ranking Commercial Keywords",
    trafficVolume: "Compounding Traffic",
    leakScenario: {
      bounceRate: "68% Pogo-Sticking",
      friction: "Failing Core Web Vitals, layout shifts (CLS), users return to search results.",
      wastedAdSpend: "Google Demotes Organic Keyword Rankings",
    },
    hdmScenario: {
      conversionMultiplier: "100/100 Vitals",
      speedScore: "< 0.8s LCP Edge",
      outcome: "Clean semantic HTML5, zero CLS, and automated Schema.org structured data.",
    },
  },
  {
    id: "social",
    name: "Social & Brand",
    badge: "Executive Inbound Authority",
    icon: <Share2 className="w-4 h-4 text-[#A78BFA]" />,
    accentColor: "#A78BFA",
    bgGlow: "rgba(167,139,250,0.25)",
    queryExample: "Founder Podcast & LinkedIn Bio Links",
    trafficVolume: "Warm Trust Traffic",
    leakScenario: {
      bounceRate: "75% Abandonment",
      friction: "Bio links dropped on homepages with no clear conversion funnel or proof.",
      wastedAdSpend: "Curious Prospects Never Turn Into Calls",
    },
    hdmScenario: {
      conversionMultiplier: "2.9x Retainer Lift",
      speedScore: "Executive Proof Hub",
      outcome: "Dedicated campaign landers with verified metrics and 1-click consultation scheduling.",
    },
  },
];

export function MarketingWebsiteSynergy() {
  const [activeChannelId, setActiveChannelId] = useState<string>("google-ads");
  const [mode, setMode] = useState<"engine" | "leak">("engine");

  const active =
    CHANNELS.find((c) => c.id === activeChannelId) || CHANNELS[0];

  return (
    <section
      id="marketing-foundation"
      className="py-12 sm:py-16 lg:py-20 bg-[#060B22] text-white border-y border-white/10 relative overflow-hidden text-left"
    >
      {/* Cinematic Ambient Glows */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#FFB020]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8 sm:space-y-10">
        {/* ================================================================ */}
        {/* HEADER: Editorial Narrative with Mode Toggle                     */}
        {/* ================================================================ */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-6">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-[#FFB020] text-xs font-black uppercase tracking-wider border border-[#FFB020]/30 shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#FFB020]" />
              <span>Interactive Marketing Infographic</span>
            </div>
            <h2 className="font-display font-black text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight leading-tight">
              Traffic Drives Visitors.{" "}
              <span className="text-[#FFB020]">Your Website Captures Revenue.</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
              Advertising without a high-converting website is pouring money into a leaky bucket. Click channels to see how HDM engineering multiplies your ROI.
            </p>
          </div>

          {/* Interactive Simulation Switcher: Revenue Engine vs Leaky Bucket */}
          <div className="flex items-center gap-1.5 p-1 bg-white/10 backdrop-blur-md rounded-2xl border border-white/15 shrink-0">
            <button
              type="button"
              onClick={() => setMode("engine")}
              className={cn(
                "px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer",
                mode === "engine"
                  ? "bg-gradient-to-r from-[#FFB020] to-[#E68A00] text-[#060B22] shadow-[0_0_20px_rgba(255,176,32,0.4)] font-black"
                  : "text-slate-300 hover:text-white"
              )}
            >
              <Zap className="w-3.5 h-3.5" />
              <span>HDM Revenue Engine</span>
            </button>

            <button
              type="button"
              onClick={() => setMode("leak")}
              className={cn(
                "px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer",
                mode === "leak"
                  ? "bg-rose-500 text-white shadow-[0_0_20px_rgba(244,63,94,0.4)] font-black"
                  : "text-slate-300 hover:text-white"
              )}
            >
              <AlertTriangle className="w-3.5 h-3.5" />
              <span>Typical Leaky Website</span>
            </button>
          </div>
        </div>

        {/* ================================================================ */}
        {/* INTERACTIVE INFOGRAPHIC TOPOLOGY CANVAS                          */}
        {/* ================================================================ */}
        <div className="rounded-3xl bg-gradient-to-b from-white/[0.07] to-white/[0.02] border border-white/15 backdrop-blur-xl p-5 sm:p-8 lg:p-10 shadow-2xl space-y-8 relative overflow-hidden">
          {/* Channel Selector Ribbon */}
          <div className="flex items-center justify-start lg:justify-center gap-2 overflow-x-auto pb-1 no-scrollbar">
            {CHANNELS.map((channel) => {
              const isSelected = channel.id === active.id;

              return (
                <button
                  key={channel.id}
                  type="button"
                  onClick={() => setActiveChannelId(channel.id)}
                  className={cn(
                    "px-4 py-2 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer select-none inline-flex items-center gap-2 shrink-0 border",
                    isSelected
                      ? "bg-[#FFB020] text-[#060B22] border-[#FFB020] shadow-[0_0_25px_rgba(255,176,32,0.4)] scale-102 font-black"
                      : "bg-white/5 text-slate-300 border-white/10 hover:border-white/30 hover:text-white"
                  )}
                >
                  <span>{channel.icon}</span>
                  <span>{channel.name}</span>
                  {isSelected && (
                    <span className="w-1.5 h-1.5 rounded-full bg-[#060B22] animate-pulse shrink-0" />
                  )}
                </button>
              );
            })}
          </div>

          {/* ============================================================== */}
          {/* 3-NODE INFOGRAPHIC CIRCUIT (Inbound -> Central Engine -> Pipeline) */}
          {/* ============================================================== */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-center relative">
            {/* 1. NODE 1: Inbound Traffic Emitter (4 cols) */}
            <div className="lg:col-span-4 p-5 rounded-2xl bg-white/5 border border-white/10 space-y-3 relative overflow-hidden text-left">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-black uppercase tracking-wider text-slate-400">
                  Step 01 · Inbound Source
                </span>
                <span className="w-2 h-2 rounded-full bg-blue-400 animate-ping" />
              </div>

              <div className="space-y-1">
                <div className="font-display font-black text-xl text-white flex items-center gap-2">
                  <span>{active.icon}</span>
                  <span>{active.name}</span>
                </div>
                <div className="text-xs text-[#FFB020] font-semibold">
                  {active.badge}
                </div>
              </div>

              {/* Sample User Query / Trigger */}
              <div className="p-2.5 rounded-xl bg-black/40 border border-white/10 font-mono text-[11px] text-slate-300 truncate">
                <span className="text-slate-500 select-none">&gt; </span>
                <span>{active.queryExample}</span>
              </div>

              <div className="flex items-center justify-between text-[11px] text-slate-400 pt-1">
                <span>Audience Volume:</span>
                <span className="text-white font-bold">{active.trafficVolume}</span>
              </div>
            </div>

            {/* Glowing Flow Arrow (1 col) */}
            <div className="lg:col-span-1 flex items-center justify-center py-2 lg:py-0">
              <div className="flex flex-col lg:flex-row items-center gap-1.5">
                <span
                  className={cn(
                    "w-2.5 h-2.5 rounded-full animate-ping",
                    mode === "engine" ? "bg-[#FFB020]" : "bg-rose-400"
                  )}
                />
                <ArrowRight
                  className={cn(
                    "w-6 h-6 rotate-90 lg:rotate-0 transition-colors",
                    mode === "engine" ? "text-[#FFB020]" : "text-rose-400"
                  )}
                />
              </div>
            </div>

            {/* 2. NODE 2: The Central Website Conversion Engine (4 cols) */}
            <div
              className={cn(
                "lg:col-span-4 p-5 sm:p-6 rounded-2xl transition-all duration-500 space-y-3.5 relative overflow-hidden text-left",
                mode === "engine"
                  ? "bg-gradient-to-b from-[#0E1A3D] to-[#060B22] border-2 border-[#FFB020] shadow-[0_0_40px_rgba(255,176,32,0.3)]"
                  : "bg-gradient-to-b from-rose-950/60 to-[#060B22] border-2 border-rose-500 shadow-[0_0_40px_rgba(244,63,94,0.3)]"
              )}
            >
              {/* Mini Browser Bar */}
              <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
                  <span className="text-[10px] font-mono text-slate-300 pl-1.5">
                    {mode === "engine" ? "hdm-engine://active" : "slow-template://lagging"}
                  </span>
                </div>
                <span
                  className={cn(
                    "text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded",
                    mode === "engine"
                      ? "text-[#FFB020] bg-[#FFB020]/20"
                      : "text-rose-400 bg-rose-500/20"
                  )}
                >
                  {mode === "engine" ? "The Multiplier" : "The Leak"}
                </span>
              </div>

              {/* Central Status */}
              <div className="space-y-1">
                <div className="text-[11px] font-mono uppercase text-slate-400">
                  Step 02 · Conversion Crucible
                </div>
                <div className="font-display font-black text-base sm:text-lg text-white">
                  {mode === "engine"
                    ? "HDM Engineered Conversion Website"
                    : "Generic Slow Template Website"}
                </div>
              </div>

              {/* Dynamic Telemetry Meter */}
              {mode === "engine" ? (
                <div className="space-y-2 pt-1 animate-in fade-in duration-300">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-300">Conversion Velocity</span>
                    <span className="text-emerald-400 font-mono font-bold">
                      {active.hdmScenario.conversionMultiplier}
                    </span>
                  </div>
                  <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                    <div className="bg-gradient-to-r from-[#FFB020] to-emerald-400 h-full w-[92%]" />
                  </div>
                  <p className="text-[11px] text-slate-300 leading-snug pt-1">
                    {active.hdmScenario.outcome}
                  </p>
                </div>
              ) : (
                <div className="space-y-2 pt-1 animate-in fade-in duration-300">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-rose-300">Traffic Leakage</span>
                    <span className="text-rose-400 font-mono font-bold">
                      {active.leakScenario.bounceRate}
                    </span>
                  </div>
                  <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                    <div className="bg-rose-500 h-full w-[78%]" />
                  </div>
                  <p className="text-[11px] text-rose-200 leading-snug pt-1">
                    {active.leakScenario.friction}
                  </p>
                </div>
              )}
            </div>

            {/* Glowing Flow Arrow (1 col) */}
            <div className="lg:col-span-1 flex items-center justify-center py-2 lg:py-0">
              <div className="flex flex-col lg:flex-row items-center gap-1.5">
                <span
                  className={cn(
                    "w-2.5 h-2.5 rounded-full animate-ping",
                    mode === "engine" ? "bg-emerald-400" : "bg-rose-500"
                  )}
                />
                <ArrowRight
                  className={cn(
                    "w-6 h-6 rotate-90 lg:rotate-0 transition-colors",
                    mode === "engine" ? "text-emerald-400" : "text-rose-500"
                  )}
                />
              </div>
            </div>

            {/* 3. NODE 3: Business Outcome Pipeline (4 cols) */}
            <div
              className={cn(
                "lg:col-span-4 p-5 rounded-2xl border space-y-3 relative overflow-hidden text-left transition-all duration-500",
                mode === "engine"
                  ? "bg-emerald-950/40 border-emerald-500/40"
                  : "bg-rose-950/30 border-rose-500/30"
              )}
            >
              <div className="flex items-center justify-between">
                <span
                  className={cn(
                    "text-[10px] font-black uppercase tracking-wider",
                    mode === "engine" ? "text-emerald-400" : "text-rose-400"
                  )}
                >
                  Step 03 · Pipeline Impact
                </span>
                <span
                  className={cn(
                    "w-2 h-2 rounded-full animate-pulse",
                    mode === "engine" ? "bg-emerald-400" : "bg-rose-400"
                  )}
                />
              </div>

              <div className="space-y-1">
                <div className="font-display font-black text-xl text-white">
                  {mode === "engine"
                    ? "Verified Business Revenue"
                    : "Wasted Advertising Capital"}
                </div>
                <div
                  className={cn(
                    "text-xs font-semibold",
                    mode === "engine" ? "text-emerald-300" : "text-rose-300"
                  )}
                >
                  {mode === "engine"
                    ? active.hdmScenario.speedScore
                    : active.leakScenario.wastedAdSpend}
                </div>
              </div>

              <p className="text-[11px] text-slate-300 leading-relaxed">
                {mode === "engine"
                  ? "Qualified client calls booked, verified e-commerce sales, and maximum advertising ROAS."
                  : "Visitors bounce without taking action, ad algorithms bid blindly, and acquisition costs spiral."}
              </p>
            </div>
          </div>

          {/* ============================================================== */}
          {/* BOTTOM DIRECT AUDIT ACTION BAR                                  */}
          {/* ============================================================== */}
          <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs text-slate-300 text-center sm:text-left">
              <Sparkles className="w-4 h-4 text-[#FFB020] shrink-0" />
              <span>
                Stop leaking marketing dollars. Let our web architects audit your conversion funnel.
              </span>
            </div>

            <Link
              href="/get-a-quote"
              className="btn-luxury-gold btn-shimmer py-3 px-6 rounded-xl text-xs font-black uppercase tracking-wider inline-flex items-center justify-center gap-2 shrink-0 cursor-pointer shadow-lg"
            >
              <span>Audit Your Website Funnel</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

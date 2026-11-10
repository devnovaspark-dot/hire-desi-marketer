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
} from "lucide-react";
import { cn } from "@/lib/utils";

interface TrafficSource {
  id: string;
  name: string;
  channel: string;
  intent: string;
  icon: React.ReactNode;
  activeColor: string;
  frictionPoint: string;
  hdmImpact: string;
}

const TRAFFIC_SOURCES: TrafficSource[] = [
  {
    id: "google-ads",
    name: "Google Ads",
    channel: "Paid Search Intent",
    intent: "High-intent buyers searching specific solutions",
    icon: <Target className="w-4 h-4 text-[#FFB020]" />,
    activeColor: "#FFB020",
    frictionPoint: "Slow generic lander causes 70% bounce & inflated cost-per-click.",
    hdmImpact: "Exact keyword-to-headline match with sub-second page rendering.",
  },
  {
    id: "meta-ads",
    name: "Meta Ads",
    channel: "Paid Social & Instagram",
    intent: "Visual impulse curiosity on mobile feeds",
    icon: <MousePointerClick className="w-4 h-4 text-[#FFB020]" />,
    activeColor: "#38BDF8",
    frictionPoint: "Mobile lag > 2s and cluttered forms lose 80% of ad clickers.",
    hdmImpact: "Thumb-first mobile flow with instant 1-tap booking or checkout.",
  },
  {
    id: "seo",
    name: "Technical SEO",
    channel: "Organic Search Engines",
    intent: "High-volume commercial discovery queries",
    icon: <Search className="w-4 h-4 text-[#FFB020]" />,
    activeColor: "#34D399",
    frictionPoint: "Poor Core Web Vitals and layout shifts tank Google keyword rankings.",
    hdmImpact: "100/100 Core Web Vitals, clean semantic HTML5 and automated Schema.",
  },
  {
    id: "social",
    name: "Social & Brand",
    channel: "Executive Inbound Authority",
    intent: "Founder podcasts, LinkedIn content, and referrals",
    icon: <Share2 className="w-4 h-4 text-[#FFB020]" />,
    activeColor: "#A78BFA",
    frictionPoint: "Bio links dropped on homepages with no clear conversion path.",
    hdmImpact: "Curated campaign hubs with immediate consultation scheduling.",
  },
];

export function MarketingWebsiteSynergy() {
  const [activeChannelId, setActiveChannelId] = useState<string>("google-ads");

  const activeChannel =
    TRAFFIC_SOURCES.find((t) => t.id === activeChannelId) || TRAFFIC_SOURCES[0];

  return (
    <section
      id="marketing-foundation"
      className="py-12 sm:py-16 bg-[#060B22] text-white border-y border-white/10 relative overflow-hidden text-left"
    >
      {/* Background Cinematic Glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#FFB020]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8 sm:space-y-10">
        {/* Section Header: 40% Content Ratio */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/10 pb-6">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-[#FFB020] text-xs font-black uppercase tracking-wider border border-[#FFB020]/30 shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#FFB020]" />
              <span>Interactive Marketing Infographic</span>
            </div>
            <h2 className="font-display font-black text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight leading-tight">
              Traffic Brings Visitors.{" "}
              <span className="text-[#FFB020]">Your Website Captures Revenue.</span>
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal max-w-md">
            Advertising without a high-converting website is like pouring water into a leaky bucket. Your website is where marketing ROI is determined.
          </p>
        </div>

        {/* 60% Visual: Interactive Visual Infographic Demonstration */}
        <div className="rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md p-5 sm:p-8 lg:p-10 shadow-2xl space-y-8">
          {/* Channel Selector Pills */}
          <div className="flex items-center justify-start lg:justify-center gap-2 overflow-x-auto pb-1 no-scrollbar">
            {TRAFFIC_SOURCES.map((source) => {
              const isSelected = source.id === activeChannel.id;

              return (
                <button
                  key={source.id}
                  type="button"
                  onClick={() => setActiveChannelId(source.id)}
                  className={cn(
                    "px-4 py-2 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer select-none inline-flex items-center gap-2 shrink-0 border",
                    isSelected
                      ? "bg-[#FFB020] text-[#060B22] border-[#FFB020] shadow-[0_0_20px_rgba(255,176,32,0.35)] scale-102 font-black"
                      : "bg-white/5 text-slate-300 border-white/10 hover:border-white/30 hover:text-white"
                  )}
                >
                  <span>{source.icon}</span>
                  <span>{source.name}</span>
                  {isSelected && (
                    <span className="w-1.5 h-1.5 rounded-full bg-[#060B22] animate-pulse shrink-0" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Interactive Infographic Flow Stage (Left: Inbound Source -> Center: Central Website Engine -> Right: Captured Revenue) */}
          <div className="grid grid-cols-1 lg:grid-cols-11 gap-4 items-center">
            {/* 1. Inbound Marketing Source (3 cols) */}
            <div className="lg:col-span-3 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-black uppercase tracking-wider text-slate-400">
                  Step 01 · Inbound Campaign
                </span>
                <span className="w-2 h-2 rounded-full bg-blue-400 animate-ping" />
              </div>
              <div className="font-display font-black text-lg text-white">
                {activeChannel.name}
              </div>
              <div className="text-xs text-[#FFB020] font-semibold">
                {activeChannel.channel}
              </div>
              <p className="text-[11px] text-slate-300 leading-relaxed">
                {activeChannel.intent}
              </p>
            </div>

            {/* Glowing Connector Stream (1 col) */}
            <div className="lg:col-span-1 flex items-center justify-center text-[#FFB020] py-2 lg:py-0">
              <div className="flex flex-col lg:flex-row items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-[#FFB020] animate-pulse" />
                <ArrowRight className="w-5 h-5 rotate-90 lg:rotate-0 text-[#FFB020]" />
              </div>
            </div>

            {/* 2. Central Website Conversion Multiplier (3 cols) */}
            <div className="lg:col-span-3 p-5 rounded-2xl bg-gradient-to-b from-[#0E1A3D] to-[#060B22] border-2 border-[#FFB020] shadow-[0_0_35px_rgba(255,176,32,0.25)] space-y-3 relative overflow-hidden">
              <div className="flex items-center justify-between border-b border-white/10 pb-2">
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-[#FF5F56]" />
                  <div className="w-2 h-2 rounded-full bg-[#FFBD2E]" />
                  <div className="w-2 h-2 rounded-full bg-[#27C93F]" />
                  <span className="text-[10px] font-mono text-slate-300 pl-1">hdm-funnel.live</span>
                </div>
                <span className="text-[9px] font-black text-[#FFB020] uppercase tracking-wider">
                  Multiplier
                </span>
              </div>

              <div className="space-y-1">
                <div className="text-xs font-bold text-slate-300">
                  Step 02 · Central Conversion Engine
                </div>
                <div className="text-sm sm:text-base font-black text-white">
                  High-Converting Experience
                </div>
              </div>

              {/* Conversion Metrics Meter */}
              <div className="space-y-1.5 pt-1">
                <div className="flex items-center justify-between text-[11px]">
                  <span className="text-slate-300">Conversion Rate</span>
                  <span className="text-emerald-400 font-mono font-bold">3.4x Industry Avg</span>
                </div>
                <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-gradient-to-r from-[#FFB020] to-emerald-400 h-full w-[88%]" />
                </div>
              </div>
            </div>

            {/* Glowing Connector Stream (1 col) */}
            <div className="lg:col-span-1 flex items-center justify-center text-emerald-400 py-2 lg:py-0">
              <div className="flex flex-col lg:flex-row items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <ArrowRight className="w-5 h-5 rotate-90 lg:rotate-0 text-emerald-400" />
              </div>
            </div>

            {/* 3. Captured Business Revenue Pipeline (3 cols) */}
            <div className="lg:col-span-3 p-4 sm:p-5 rounded-2xl bg-emerald-950/40 border border-emerald-500/30 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-black uppercase tracking-wider text-emerald-400">
                  Step 03 · Pipeline Impact
                </span>
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              </div>
              <div className="font-display font-black text-lg text-emerald-100">
                Verified Business Revenue
              </div>
              <div className="text-xs text-emerald-300 font-semibold">
                Zero Leaked Marketing Dollars
              </div>
              <p className="text-[11px] text-emerald-300/80 leading-relaxed">
                Qualified inquiries, paid transactions, and booked consultation calls.
              </p>
            </div>
          </div>

          {/* Minimalist Before vs After Comparison Strip */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-white/10 text-xs">
            <div className="flex items-start gap-2.5 p-3 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-200">
              <XCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
              <div className="space-y-0.5">
                <div className="text-[10px] font-black uppercase tracking-wider text-rose-300">
                  Without HDM High-Converting Website:
                </div>
                <div className="text-[11.5px] leading-snug">{activeChannel.frictionPoint}</div>
              </div>
            </div>

            <div className="flex items-start gap-2.5 p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/25 text-emerald-200">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <div className="space-y-0.5">
                <div className="text-[10px] font-black uppercase tracking-wider text-emerald-300">
                  With Hire Desi Marketer Engineering:
                </div>
                <div className="text-[11.5px] leading-snug font-medium">{activeChannel.hdmImpact}</div>
              </div>
            </div>
          </div>

          {/* Direct Funnel Audit Action */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10">
            <div className="text-xs text-slate-300 text-center sm:text-left">
              Ensure every dollar spent on Google, Meta, SEO or Social converts into business pipeline.
            </div>
            <Link
              href="/get-a-quote"
              className="btn-luxury-gold py-2.5 px-6 rounded-xl text-xs font-black uppercase tracking-wider inline-flex items-center gap-2 shrink-0 cursor-pointer shadow-lg"
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

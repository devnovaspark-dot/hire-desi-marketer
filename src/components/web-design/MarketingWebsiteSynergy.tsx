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
} from "lucide-react";
import { cn } from "@/lib/utils";

interface JourneyPathway {
  id: string;
  channel: string;
  icon: React.ReactNode;
  trafficSource: string;
  websiteAdvantage: string;
  businessOutcome: string;
  metricBadge: string;
  frictionPoint: string;
  hdmSolution: string;
}

const PATHWAYS: JourneyPathway[] = [
  {
    id: "google-ads",
    channel: "Google Ads",
    icon: <Target className="w-3.5 h-3.5 text-[#FFB020]" />,
    trafficSource: "High-Intent Keyword Search",
    websiteAdvantage: "Sub-Second Exact-Match Lander",
    businessOutcome: "10/10 Quality Score & Max Leads",
    metricBadge: "Quality Score 10/10",
    frictionPoint: "Generic slow page, 70% bounce rate, inflated cost-per-click.",
    hdmSolution: "Exact keyword-to-headline match with sub-second initial paint.",
  },
  {
    id: "meta-ads",
    channel: "Meta Ads",
    icon: <MousePointerClick className="w-3.5 h-3.5 text-[#FFB020]" />,
    trafficSource: "Instagram & FB Mobile Feed",
    websiteAdvantage: "Thumb-First Mobile Flow + CAPI",
    businessOutcome: "Zero Signal Loss & Scalable ROAS",
    metricBadge: "< 0.6s Mobile Paint",
    frictionPoint: "Mobile lag > 2s, iOS signal loss, abandoned ad clicks.",
    hdmSolution: "Server-side CAPI telemetry with 1-tap frictionless checkout.",
  },
  {
    id: "seo",
    channel: "Technical SEO",
    icon: <Search className="w-3.5 h-3.5 text-[#FFB020]" />,
    trafficSource: "Top-3 Commercial Rankings",
    websiteAdvantage: "100/100 Core Web Vitals & Schema",
    businessOutcome: "High Dwell Time & Compounding Rank",
    metricBadge: "100/100 Vitals Score",
    frictionPoint: "Failing Vitals, layout shifts, high pogo-stick bounces.",
    hdmSolution: "Clean semantic HTML5, zero CLS, and automated Schema JSON-LD.",
  },
  {
    id: "social-media",
    channel: "Social & Brand",
    icon: <Share2 className="w-3.5 h-3.5 text-[#FFB020]" />,
    trafficSource: "Founder Bio Links & Content",
    websiteAdvantage: "Executive Brand Story & Proof",
    businessOutcome: "Turn Curiosity Into Booked Clients",
    metricBadge: "2.4x Conv. Lift",
    frictionPoint: "Bio links dropped on cluttered pages with no clear next step.",
    hdmSolution: "Curated campaign hubs with instant consultation scheduling.",
  },
];

export function MarketingWebsiteSynergy() {
  const [activePathwayId, setActivePathwayId] = useState<string>("google-ads");

  const active =
    PATHWAYS.find((p) => p.id === activePathwayId) || PATHWAYS[0];

  return (
    <section
      id="marketing-foundation"
      className="py-10 sm:py-14 bg-[#060B22] text-white border-y border-white/10 relative overflow-hidden"
    >
      {/* Cinematic Ambient Glows */}
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-[#FFB020]/15 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 space-y-6 text-center">
        {/* Compact Editorial Header */}
        <div className="space-y-2 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-[#FFB020] text-[11px] font-black uppercase tracking-wider border border-[#FFB020]/30 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#FFB020]" />
            <span>The Marketing + Website Relationship</span>
          </div>

          <h2 className="font-display font-black text-2xl sm:text-3xl text-white tracking-tight leading-tight">
            Your Marketing Generates Traffic.{" "}
            <span className="text-[#FFB020]">Your Website Captures Revenue.</span>
          </h2>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
            Advertising brings visitors. But your website is where every single marketing dollar is won or lost.
          </p>
        </div>

        {/* Compact Minimalist Showcase Card */}
        <div className="rounded-2xl bg-white/5 border border-white/15 backdrop-blur-md p-4 sm:p-6 shadow-xl text-left space-y-5">
          {/* Sleek Channel Selector Pills */}
          <div className="flex items-center justify-center gap-1.5 sm:gap-2 overflow-x-auto pb-1 no-scrollbar">
            {PATHWAYS.map((p) => {
              const isSelected = p.id === active.id;
              return (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => setActivePathwayId(p.id)}
                  className={cn(
                    "px-3.5 sm:px-4 py-1.5 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer select-none inline-flex items-center gap-1.5 shrink-0 border",
                    isSelected
                      ? "bg-[#FFB020] text-[#060B22] border-[#FFB020] shadow-sm font-black"
                      : "bg-white/5 text-slate-300 border-white/10 hover:border-white/30 hover:text-white"
                  )}
                >
                  <span>{p.icon}</span>
                  <span>{p.channel}</span>
                  {isSelected && (
                    <span className="w-1.5 h-1.5 rounded-full bg-[#060B22] animate-pulse shrink-0" />
                  )}
                </button>
              );
            })}
          </div>

          {/* 3-Stage Visual Pipeline */}
          <div className="grid grid-cols-1 md:grid-cols-11 gap-2.5 items-center">
            {/* Stage 1 */}
            <div className="md:col-span-3 p-3 sm:p-3.5 rounded-xl bg-white/5 border border-white/10 space-y-1">
              <div className="text-[9.5px] font-black uppercase tracking-wider text-slate-400">
                1 · Inbound Traffic
              </div>
              <div className="text-xs sm:text-sm font-bold text-white truncate">
                {active.trafficSource}
              </div>
              <div className="text-[10.5px] text-slate-400">Paid / Organic Visit</div>
            </div>

            {/* Arrow */}
            <div className="md:col-span-1 flex items-center justify-center text-[#FFB020]">
              <ArrowRight className="w-4 h-4 rotate-90 md:rotate-0" />
            </div>

            {/* Stage 2: Website Multiplier */}
            <div className="md:col-span-3 p-3 sm:p-3.5 rounded-xl bg-gradient-to-b from-[#0E1A3D] to-[#060B22] border-2 border-[#FFB020] shadow-[0_0_20px_rgba(255,176,32,0.15)] space-y-1">
              <div className="flex items-center justify-between">
                <span className="text-[9.5px] font-black uppercase tracking-wider text-[#FFB020]">
                  2 · Website Filter
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              </div>
              <div className="text-xs sm:text-sm font-black text-white truncate">
                {active.websiteAdvantage}
              </div>
              <div className="text-[10px] font-mono text-emerald-300 font-bold">
                {active.metricBadge}
              </div>
            </div>

            {/* Arrow */}
            <div className="md:col-span-1 flex items-center justify-center text-[#FFB020]">
              <ArrowRight className="w-4 h-4 rotate-90 md:rotate-0" />
            </div>

            {/* Stage 3 */}
            <div className="md:col-span-3 p-3 sm:p-3.5 rounded-xl bg-emerald-950/40 border border-emerald-500/30 space-y-1">
              <div className="text-[9.5px] font-black uppercase tracking-wider text-emerald-400">
                3 · Real Revenue
              </div>
              <div className="text-xs sm:text-sm font-bold text-emerald-100 truncate">
                {active.businessOutcome}
              </div>
              <div className="text-[10.5px] text-emerald-300/80">Captured Opportunity</div>
            </div>
          </div>

          {/* Compact Contrast Callout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2 border-t border-white/10 text-xs">
            <div className="flex items-start gap-2 p-2.5 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-200">
              <XCircle className="w-3.5 h-3.5 text-rose-400 shrink-0 mt-0.5" />
              <div className="space-y-0.5 text-[11px] leading-snug">
                <span className="font-bold text-rose-300">Without HDM Website: </span>
                <span>{active.frictionPoint}</span>
              </div>
            </div>

            <div className="flex items-start gap-2 p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/25 text-emerald-200">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
              <div className="space-y-0.5 text-[11px] leading-snug">
                <span className="font-bold text-emerald-300">With HDM Engineering: </span>
                <span>{active.hdmSolution}</span>
              </div>
            </div>
          </div>

          {/* Direct Minimalist Action Strip */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-white/10">
            <span className="text-[11px] text-slate-300 text-center sm:text-left">
              Don't let ad dollars leak through a slow or uninspiring website.
            </span>
            <Link
              href="/get-a-quote"
              className="btn-luxury-gold py-2 px-4 rounded-xl text-xs font-black uppercase tracking-wider inline-flex items-center justify-center gap-1.5 shrink-0 shadow-sm cursor-pointer"
            >
              <span>Audit Your Website Funnel</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

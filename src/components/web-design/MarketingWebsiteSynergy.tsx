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
} from "lucide-react";
import { cn } from "@/lib/utils";

interface JourneyPathway {
  id: string;
  channel: string;
  badge: string;
  icon: React.ReactNode;
  trafficSource: string;
  trafficSub: string;
  websiteAdvantage: string;
  websiteSub: string;
  businessOutcome: string;
  outcomeSub: string;
  metricBadge: string;
  frictionPoint: string;
  hdmSolution: string;
}

const PATHWAYS: JourneyPathway[] = [
  {
    id: "google-ads",
    channel: "Google Ads",
    badge: "Paid Search",
    icon: <Target className="w-4 h-4 text-[#FFB020]" />,
    trafficSource: "High-Intent Keyword Search",
    trafficSub: "Exact user query looking to buy",
    websiteAdvantage: "Sub-Second Exact-Match Lander",
    websiteSub: "Headline matches keyword 100%",
    businessOutcome: "10/10 Quality Score & Max Leads",
    outcomeSub: "Lowest cost-per-click & zero wasted budget",
    metricBadge: "Quality Score 10/10",
    frictionPoint: "Generic slow page, 70% bounce rate, inflated cost-per-click",
    hdmSolution: "Exact keyword-to-headline match with sub-second initial paint",
  },
  {
    id: "meta-ads",
    channel: "Meta Ads",
    badge: "Paid Social",
    icon: <MousePointerClick className="w-4 h-4 text-[#FFB020]" />,
    trafficSource: "Instagram / FB Feed Clicks",
    trafficSub: "Visual impulse mobile interest",
    websiteAdvantage: "Thumb-First Mobile Flow + CAPI",
    websiteSub: "Instant rendering & 1-tap booking",
    businessOutcome: "Zero Signal Loss & Scalable ROAS",
    outcomeSub: "Ad algorithm bids on verified buyers",
    metricBadge: "< 0.6s Mobile Paint",
    frictionPoint: "Mobile lag > 2s, iOS signal loss, abandoned ad clicks",
    hdmSolution: "Server-side CAPI telemetry with 1-tap frictionless checkout",
  },
  {
    id: "seo",
    channel: "Technical SEO",
    badge: "Organic Search",
    icon: <Search className="w-4 h-4 text-[#FFB020]" />,
    trafficSource: "Top-3 Commercial Rankings",
    trafficSub: "High-volume organic searches",
    websiteAdvantage: "100/100 Core Web Vitals & Schema",
    websiteSub: "Zero layout shift & clean JSON-LD",
    businessOutcome: "High Dwell Time & Compounding Rank",
    outcomeSub: "Visitors stay engaged and convert",
    metricBadge: "100/100 Vitals Score",
    frictionPoint: "Failing Vitals, layout shifts, high pogo-stick bounces",
    hdmSolution: "Clean semantic HTML5, zero CLS, and automated Schema JSON-LD",
  },
  {
    id: "social-media",
    channel: "Social & Brand",
    badge: "Inbound Curiosity",
    icon: <Share2 className="w-4 h-4 text-[#FFB020]" />,
    trafficSource: "Founder Bio Links & Content",
    trafficSub: "Viral reach and industry authority",
    websiteAdvantage: "Executive Brand Story & Proof",
    websiteSub: "Verified case studies & client proof",
    businessOutcome: "Turn Curiosity Into Booked Clients",
    outcomeSub: "Casual scrollers become retainer contracts",
    metricBadge: "2.4x Conv. Lift",
    frictionPoint: "Bio links dropped on cluttered pages with no clear next step",
    hdmSolution: "Curated campaign hubs with instant consultation scheduling",
  },
];

export function MarketingWebsiteSynergy() {
  const [activePathwayId, setActivePathwayId] = useState<string>("google-ads");

  const active =
    PATHWAYS.find((p) => p.id === activePathwayId) || PATHWAYS[0];

  return (
    <section
      id="marketing-foundation"
      className="py-12 sm:py-16 lg:py-20 bg-[#060B22] text-white border-y border-white/10 relative overflow-hidden"
    >
      {/* Cinematic Ambient Glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#FFB020]/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-[#FFB020] text-xs font-black uppercase tracking-wider border border-[#FFB020]/30 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#FFB020]" />
            <span>The Marketing + Website Relationship</span>
          </div>

          <h2 className="font-display font-black text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight leading-tight">
            Your Marketing Only Works If Your Website Converts.
          </h2>

          <p className="text-xs sm:text-base text-slate-300 leading-relaxed font-normal max-w-2xl mx-auto">
            Advertising brings traffic. SEO brings visibility. Social media builds awareness.
            <br className="hidden sm:inline" /> But your <strong className="text-white font-bold">website is where every marketing dollar is won or lost</strong>.
          </p>
        </div>

        {/* 1. Connected Visual Pathway Architecture (Glassmorphism & High-Contrast) */}
        <div className="rounded-3xl bg-white/5 border border-white/15 backdrop-blur-md p-5 sm:p-8 shadow-2xl max-w-5xl mx-auto text-left space-y-6">
          {/* Channel Tabs */}
          <div className="flex items-center justify-center gap-1.5 sm:gap-2.5 overflow-x-auto pb-1 no-scrollbar">
            {PATHWAYS.map((p) => {
              const isSelected = p.id === active.id;
              return (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => setActivePathwayId(p.id)}
                  className={cn(
                    "px-4 sm:px-5 py-2 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer select-none inline-flex items-center gap-2 shrink-0 border",
                    isSelected
                      ? "bg-[#FFB020] text-[#060B22] border-[#FFB020] shadow-[0_0_20px_rgba(255,176,32,0.3)] font-black scale-102"
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

          {/* Animated 3-Stage Visual Pipeline */}
          <div className="grid grid-cols-1 md:grid-cols-11 gap-3 items-center pt-1">
            {/* Stage 1: Traffic Channel */}
            <div className="md:col-span-3 p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1">
              <div className="text-[10px] font-black uppercase tracking-wider text-slate-400">
                Stage 1 · Campaign Inbound
              </div>
              <div className="text-xs sm:text-sm font-bold text-white">
                {active.trafficSource}
              </div>
              <div className="text-[11px] text-slate-400">
                {active.trafficSub}
              </div>
            </div>

            {/* Glowing Connector Arrow 1 */}
            <div className="md:col-span-1 flex items-center justify-center text-[#FFB020]">
              <ArrowRight className="w-5 h-5 rotate-90 md:rotate-0 animate-pulse" />
            </div>

            {/* Stage 2: The Website Filter (The Critical Deciding Factor) */}
            <div className="md:col-span-3 p-4 rounded-2xl bg-gradient-to-b from-[#0E1A3D] to-[#060B22] border-2 border-[#FFB020] shadow-[0_0_30px_rgba(255,176,32,0.2)] space-y-1.5 relative overflow-hidden">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-black uppercase tracking-wider text-[#FFB020]">
                  Stage 2 · Website Filter
                </span>
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              </div>
              <div className="text-xs sm:text-sm font-black text-white">
                {active.websiteAdvantage}
              </div>
              <div className="text-[11px] text-slate-300">
                {active.websiteSub}
              </div>
              <div className="pt-1">
                <span className="inline-block text-[10px] font-mono font-bold text-emerald-300 bg-emerald-950/80 px-2 py-0.5 rounded-md border border-emerald-500/40">
                  {active.metricBadge}
                </span>
              </div>
            </div>

            {/* Glowing Connector Arrow 2 */}
            <div className="md:col-span-1 flex items-center justify-center text-[#FFB020]">
              <ArrowRight className="w-5 h-5 rotate-90 md:rotate-0 animate-pulse" />
            </div>

            {/* Stage 3: Real Business Growth */}
            <div className="md:col-span-3 p-4 rounded-2xl bg-emerald-950/40 border border-emerald-500/30 space-y-1">
              <div className="text-[10px] font-black uppercase tracking-wider text-emerald-400">
                Stage 3 · Real Pipeline
              </div>
              <div className="text-xs sm:text-sm font-bold text-emerald-100">
                {active.businessOutcome}
              </div>
              <div className="text-[11px] text-emerald-300/80">
                {active.outcomeSub}
              </div>
            </div>
          </div>

          {/* Compact Contrast Callout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3 border-t border-white/10 text-xs">
            <div className="flex items-start gap-2.5 p-3 rounded-2xl bg-rose-500/10 border border-rose-500/20 text-rose-200">
              <XCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
              <div className="space-y-0.5">
                <div className="text-[10px] font-black uppercase tracking-wider text-rose-300">
                  Without High-Converting Website:
                </div>
                <div className="text-[11.5px] leading-snug">{active.frictionPoint}</div>
              </div>
            </div>

            <div className="flex items-start gap-2.5 p-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/25 text-emerald-200">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <div className="space-y-0.5">
                <div className="text-[10px] font-black uppercase tracking-wider text-emerald-300">
                  With Hire Desi Marketer Engineering:
                </div>
                <div className="text-[11.5px] leading-snug font-medium">{active.hdmSolution}</div>
              </div>
            </div>
          </div>
        </div>

        {/* 2. Editorial Closing Statement Banner */}
        <div className="rounded-2xl bg-gradient-to-r from-white/10 via-white/5 to-white/10 border border-white/15 p-5 sm:p-7 max-w-5xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-left">
          <div className="space-y-1.5 max-w-xl">
            <blockquote className="font-display font-black text-sm sm:text-base lg:text-lg text-white tracking-tight leading-snug">
              &ldquo;Your ads bring visitors. Your SEO brings visibility. Your social media builds awareness.{" "}
              <span className="text-[#FFB020]">
                Your website turns all of it into business growth.
              </span>
              &rdquo;
            </blockquote>
            <p className="text-xs text-slate-300">
              Never let advertising spend leak through slow load speeds or uninspired landing pages.
            </p>
          </div>

          <Link
            href="/get-a-quote"
            className="btn-luxury-gold btn-shimmer py-3 px-6 rounded-xl text-xs font-black uppercase tracking-wider inline-flex items-center justify-center gap-2 shrink-0 cursor-pointer shadow-lg text-center"
          >
            <span>Audit Your Website Funnel</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
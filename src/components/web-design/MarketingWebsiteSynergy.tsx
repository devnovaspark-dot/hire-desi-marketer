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
  TrendingUp,
  Activity,
  Layers,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface JourneyPathway {
  id: string;
  channel: string;
  badge: string;
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
    badge: "Paid Search",
    icon: <Target className="w-4 h-4 text-[#FFB020]" />,
    trafficSource: "High-Intent Keyword Search",
    websiteAdvantage: "Sub-Second Exact-Match Lander",
    businessOutcome: "10/10 Quality Score & Max Leads",
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
    websiteAdvantage: "Thumb-First Mobile Flow + CAPI",
    businessOutcome: "Zero Signal Loss & Scalable ROAS",
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
    websiteAdvantage: "100/100 Core Web Vitals & Schema",
    businessOutcome: "High Dwell Time & Compounding Rank",
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
    websiteAdvantage: "Executive Brand Story & Proof",
    businessOutcome: "Turn Curiosity Into Booked Clients",
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
      className="py-10 sm:py-14 lg:py-16 bg-[#FAF8F5] border-y border-[#E2DBD0] relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-7 sm:space-y-9">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-2.5">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#060B22] text-[#FFB020] text-xs font-black uppercase tracking-wider border border-[#FFB020]/30 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#FFB020]" />
            <span>The Marketing + Website Relationship</span>
          </div>

          <h2 className="font-display font-black text-2xl sm:text-3xl text-[#0B1B3A] tracking-tight leading-tight">
            Your Marketing Only Works If Your Website Converts.
          </h2>

          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
            Every marketing channel requires a high-performing website to turn clicks into paying clients.
          </p>
        </div>

        {/* 1. Connected Visual Pathway Architecture (Compact & Interactive) */}
        <div className="rounded-2xl bg-white border border-[#E2DBD0] p-4 sm:p-6 shadow-xs max-w-5xl mx-auto text-left space-y-5">
          {/* Channel Tabs */}
          <div className="flex items-center justify-center gap-1.5 sm:gap-2 overflow-x-auto pb-1 no-scrollbar">
            {PATHWAYS.map((p) => {
              const isSelected = p.id === active.id;
              return (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => setActivePathwayId(p.id)}
                  className={cn(
                    "px-3.5 sm:px-4 py-1.5 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer select-none inline-flex items-center gap-2 shrink-0 border",
                    isSelected
                      ? "bg-[#060B22] text-[#FFB020] border-[#FFB020] shadow-2xs ring-2 ring-[#FFB020]/20"
                      : "bg-[#FAF8F5] text-slate-700 border-[#E2DBD0] hover:border-slate-400"
                  )}
                >
                  <span>{p.icon}</span>
                  <span>{p.channel}</span>
                  {isSelected && (
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Animated 3-Stage Visual Pipeline */}
          <div className="grid grid-cols-1 md:grid-cols-11 gap-3 items-center pt-2">
            {/* Stage 1: Traffic Channel */}
            <div className="md:col-span-3 p-3.5 rounded-xl bg-[#FAF8F5] border border-[#E2DBD0] space-y-1">
              <div className="text-[10px] font-black uppercase tracking-wider text-slate-400">
                1. Campaign Inbound
              </div>
              <div className="text-xs font-bold text-[#0B1B3A]">
                {active.trafficSource}
              </div>
              <div className="text-[10.5px] text-slate-500">
                {active.badge} acquisition traffic
              </div>
            </div>

            {/* Glowing Connector Arrow 1 */}
            <div className="md:col-span-1 flex items-center justify-center text-[#B87A00]">
              <ArrowRight className="w-4 h-4 rotate-90 md:rotate-0" />
            </div>

            {/* Stage 2: The Website Filter (The Critical Deciding Factor) */}
            <div className="md:col-span-3 p-3.5 rounded-xl bg-[#060B22] text-white border border-[#FFB020]/30 shadow-xs space-y-1">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-black uppercase tracking-wider text-[#FFB020]">
                  2. Website Conversion Filter
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              </div>
              <div className="text-xs font-bold text-white">
                {active.websiteAdvantage}
              </div>
              <div className="text-[10.5px] text-emerald-300 font-mono">
                {active.metricBadge}
              </div>
            </div>

            {/* Glowing Connector Arrow 2 */}
            <div className="md:col-span-1 flex items-center justify-center text-[#B87A00]">
              <ArrowRight className="w-4 h-4 rotate-90 md:rotate-0" />
            </div>

            {/* Stage 3: Real Business Growth */}
            <div className="md:col-span-3 p-3.5 rounded-xl bg-emerald-50/80 border border-emerald-200 space-y-1">
              <div className="text-[10px] font-black uppercase tracking-wider text-emerald-700">
                3. Business Outcome
              </div>
              <div className="text-xs font-bold text-emerald-950">
                {active.businessOutcome}
              </div>
              <div className="text-[10.5px] text-emerald-700 font-medium">
                Predictable, scalable customer pipeline
              </div>
            </div>
          </div>

          {/* Compact Contrast Callout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 border-t border-slate-100 text-xs">
            <div className="flex items-start gap-2 p-2.5 rounded-xl bg-rose-50/70 border border-rose-100 text-rose-800">
              <XCircle className="w-3.5 h-3.5 text-rose-500 shrink-0 mt-0.5" />
              <div className="space-y-0.5">
                <div className="text-[10px] font-black uppercase tracking-wider text-rose-600">
                  Without High-Converting Website:
                </div>
                <div className="text-[11px] leading-snug">{active.frictionPoint}</div>
              </div>
            </div>

            <div className="flex items-start gap-2 p-2.5 rounded-xl bg-emerald-50/70 border border-emerald-100 text-emerald-900">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
              <div className="space-y-0.5">
                <div className="text-[10px] font-black uppercase tracking-wider text-emerald-700">
                  With Hire Desi Marketer Engineering:
                </div>
                <div className="text-[11px] leading-snug">{active.hdmSolution}</div>
              </div>
            </div>
          </div>
        </div>

        {/* 2. Editorial Closing Statement Banner */}
        <div className="rounded-xl bg-[#060B22] text-white p-4 sm:p-6 border border-white/10 shadow-sm max-w-5xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-left">
          <div className="space-y-1 max-w-xl">
            <blockquote className="font-display font-black text-sm sm:text-base text-white tracking-tight leading-snug">
              &ldquo;Your ads bring visitors. Your SEO brings visibility. Your social media builds awareness.{" "}
              <span className="text-[#FFB020]">
                Your website turns all of it into business growth.
              </span>
              &rdquo;
            </blockquote>
            <p className="text-[11px] text-slate-300">
              Stop letting advertising spend leak through slow load speeds or uninspired landing pages.
            </p>
          </div>

          <Link
            href="/get-a-quote"
            className="btn-luxury-gold py-2.5 px-5 rounded-xl text-xs font-black uppercase tracking-wider inline-flex items-center justify-center gap-2 shrink-0 cursor-pointer shadow-xs"
          >
            <span>Audit Your Website Funnel</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
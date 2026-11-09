"use client";

import React from "react";
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

interface SynergyCard {
  id: string;
  channel: string;
  badge: string;
  icon: React.ReactNode;
  heading: string;
  summary: string;
  friction: string;
  solution: string;
  metric: string;
  metricLabel: string;
}

const SYNERGY_CARDS: SynergyCard[] = [
  {
    id: "google-ads",
    channel: "Google Ads",
    badge: "Paid Search",
    icon: <Target className="w-4 h-4 text-[#FFB020]" />,
    heading: "Lower CPC & High Quality Score",
    summary: "Exact-match landing pages that signal high relevance to Google and convert search clicks into leads.",
    friction: "Generic slow page, 70% bounce rate, inflated cost-per-click",
    solution: "Sub-second bespoke lander, 10/10 Quality Score, lowest CPA",
    metric: "10/10",
    metricLabel: "Quality Score Benchmark",
  },
  {
    id: "meta-ads",
    channel: "Meta Ads",
    badge: "Paid Social",
    icon: <MousePointerClick className="w-4 h-4 text-[#FFB020]" />,
    heading: "Instant Mobile Speed & CAPI",
    summary: "Thumb-first mobile flows with server-side CAPI telemetry so ad algorithms bid on real buyers.",
    friction: "Mobile lag > 2s, iOS signal loss, abandoned ad clicks",
    solution: "Sub-second paint, 1-tap booking, full server-side attribution",
    metric: "< 0.6s",
    metricLabel: "Mobile Edge First Paint",
  },
  {
    id: "seo",
    channel: "Technical SEO",
    badge: "Organic Search",
    icon: <Search className="w-4 h-4 text-[#FFB020]" />,
    heading: "Core Web Vitals & Dwell Time",
    summary: "Clean semantic HTML5 and Schema structured data that keep visitors engaged and protect rankings.",
    friction: "Failing Vitals, layout shifts, high pogo-stick bounces",
    solution: "100/100 Core Vitals, Schema JSON-LD, top search retention",
    metric: "100/100",
    metricLabel: "Core Web Vitals Score",
  },
  {
    id: "social-media",
    channel: "Social & Brand",
    badge: "Inbound Curiosity",
    icon: <Share2 className="w-4 h-4 text-[#FFB020]" />,
    heading: "Turn Curiosity Into Contracts",
    summary: "Authoritative digital storefronts and link-in-bio hubs that prove credibility and capture inquiries.",
    friction: "Bio links dropped on cluttered pages with no clear CTA",
    solution: "Curated campaign paths with instant consultation booking",
    metric: "2.4x",
    metricLabel: "Average Conversion Lift",
  },
];

export function MarketingWebsiteSynergy() {
  return (
    <section
      id="marketing-foundation"
      className="py-10 sm:py-14 lg:py-16 bg-[#FAF8F5] border-y border-[#E2DBD0] relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10">
        {/* Section Header - Clean & Compact */}
        <div className="text-center max-w-2xl mx-auto space-y-2.5">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#060B22] text-[#FFB020] text-xs font-black uppercase tracking-wider border border-[#FFB020]/30 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#FFB020]" />
            <span>The Marketing + Website Relationship</span>
          </div>

          <h2 className="font-display font-black text-2xl sm:text-3xl text-[#0B1B3A] tracking-tight leading-tight">
            Your Marketing Only Works If Your Website Converts.
          </h2>

          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
            Advertising brings traffic. SEO brings visibility. But your website is where every marketing dollar is won or lost.
          </p>
        </div>

        {/* 4 Minimalist, Compact, Best-in-Class UI Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {SYNERGY_CARDS.map((card) => (
            <div
              key={card.id}
              className="rounded-2xl bg-white border border-[#E2DBD0] hover:border-[#FFB020]/60 p-4 sm:p-5 flex flex-col justify-between space-y-4 transition-all duration-200 hover:shadow-md group text-left"
            >
              {/* Card Header: Icon, Channel Name & Badge */}
              <div className="space-y-2.5">
                <div className="flex items-center justify-between">
                  <div className="w-8 h-8 rounded-lg bg-[#060B22] text-[#FFB020] flex items-center justify-center shrink-0 shadow-2xs">
                    {card.icon}
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-wider text-[#B87A00] bg-[#FFB020]/15 px-2.5 py-0.5 rounded-full border border-[#FFB020]/30">
                    {card.badge}
                  </span>
                </div>

                <div>
                  <div className="text-[11px] font-black uppercase tracking-wider text-slate-500">
                    {card.channel}
                  </div>
                  <h3 className="font-display font-bold text-base text-[#0B1B3A] tracking-tight leading-snug">
                    {card.heading}
                  </h3>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  {card.summary}
                </p>
              </div>

              {/* Compact Before vs After Comparison */}
              <div className="space-y-1.5 pt-2 border-t border-slate-100 text-[11px]">
                <div className="flex items-start gap-1.5 text-rose-700 bg-rose-50/70 p-2 rounded-lg border border-rose-100">
                  <XCircle className="w-3.5 h-3.5 text-rose-500 shrink-0 mt-0.5" />
                  <span className="leading-tight">{card.friction}</span>
                </div>

                <div className="flex items-start gap-1.5 text-emerald-800 bg-emerald-50/70 p-2 rounded-lg border border-emerald-100">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="leading-tight font-medium">{card.solution}</span>
                </div>
              </div>

              {/* Metric Benchmark Pill */}
              <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[10px] text-slate-500 font-medium">{card.metricLabel}</span>
                <span className="font-mono text-xs font-black text-[#0B1B3A] bg-[#FAF8F5] px-2 py-0.5 rounded-md border border-[#E2DBD0]">
                  {card.metric}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Minimalist Bottom Callout & Direct CTA */}
        <div className="rounded-xl bg-[#060B22] text-white p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-left">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-[#FFB020]/20 text-[#FFB020] flex items-center justify-center shrink-0">
              <Zap className="w-3.5 h-3.5" />
            </div>
            <p className="text-xs sm:text-sm text-slate-200">
              Want landing pages engineered specifically for your active advertising campaigns?
            </p>
          </div>

          <Link
            href="/get-a-quote"
            className="btn-luxury-gold py-2 px-4 rounded-lg text-xs font-black uppercase tracking-wider inline-flex items-center justify-center gap-2 shrink-0 cursor-pointer shadow-xs"
          >
            <span>Audit Your Website Funnel</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
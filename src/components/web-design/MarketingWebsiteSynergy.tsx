"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Sparkles,
  ArrowRight,
  Target,
  Search,
  Share2,
  CheckCircle2,
  Zap,
  MousePointerClick,
  Activity,
  ArrowDown,
  ShieldCheck,
  AlertTriangle,
  TrendingUp,
  BarChart3,
  DollarSign,
  Layers,
  ShieldAlert,
  Sliders,
  Check,
  X,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface ChannelConfig {
  id: string;
  tabLabel: string;
  channelName: string;
  icon: React.ReactNode;
  tagline: string;
  coreProblem: string;
  coreSolution: string;
  benchmarkBadge: string;
  // Metrics comparison when toggle is "slow" vs "optimized"
  metrics: {
    label: string;
    slowValue: string;
    slowStatus: "bad" | "warn";
    optValue: string;
    optStatus: "good";
    improvement: string;
  }[];
  // 3-step Funnel visualization
  funnelSteps: {
    trafficSource: string;
    slowGateway: {
      title: string;
      friction: string;
      bounceRate: string;
    };
    optGateway: {
      title: string;
      advantage: string;
      bounceRate: string;
    };
    slowOutcome: {
      result: string;
      cpa: string;
      leakage: string;
    };
    optOutcome: {
      result: string;
      cpa: string;
      leakage: string;
    };
  };
  // 4 Essential Website Standards
  pillars: {
    title: string;
    standard: string;
    impact: string;
  }[];
}

const MARKETING_CHANNELS: ChannelConfig[] = [
  {
    id: "google-ads",
    tabLabel: "Google Ads",
    channelName: "Google Paid Search (PPC)",
    icon: <Target className="w-4 h-4 text-[#FFB020]" />,
    tagline: "Google Ads Demand High-Converting, Exact-Match Landing Pages",
    coreProblem:
      "Sending high-intent Google Search traffic to a slow, generic homepage burns your budget. Low ad relevance and slow mobile load tank your Quality Score, driving up CPCs while 68%+ of paid clicks bounce immediately.",
    coreSolution:
      "We engineer dedicated, sub-second landing pages aligned with exact search intent. 10/10 Quality Scores cut your cost-per-click while friction-free conversion paths maximize qualified lead generation.",
    benchmarkBadge: "10/10 Quality Score Standard",
    metrics: [
      {
        label: "Landing Experience / Quality Score",
        slowValue: "3 / 10 (Poor)",
        slowStatus: "bad",
        optValue: "10 / 10 (Max Benchmark)",
        optStatus: "good",
        improvement: "+7 Points",
      },
      {
        label: "Mobile Bounce Rate",
        slowValue: "71% (Clicks Wasted)",
        slowStatus: "bad",
        optValue: "14% (Deep Engagement)",
        optStatus: "good",
        improvement: "-57% Drop",
      },
      {
        label: "Visitor-to-Lead Conversion",
        slowValue: "1.1% (Template Friction)",
        slowStatus: "bad",
        optValue: "5.8% (High-Converting)",
        optStatus: "good",
        improvement: "5.2x Higher",
      },
      {
        label: "Effective Cost Per Lead (CPL)",
        slowValue: "Inflated & Unsustainable",
        slowStatus: "bad",
        optValue: "Lowest Possible CPA",
        optStatus: "good",
        improvement: "Up to 68% Lower",
      },
    ],
    funnelSteps: {
      trafficSource: "High-Intent Keyword Searches (e.g. 'Enterprise ERP Consultant')",
      slowGateway: {
        title: "Standard Slow Homepage",
        friction: "3.8s load, generic copy, 5 navigation links, no clear CTA",
        bounceRate: "71% Bounce Rate",
      },
      optGateway: {
        title: "Bespoke HDM High-Speed Lander",
        advantage: "580ms load, headline matches ad keyword, 1-tap booking",
        bounceRate: "14% Bounce Rate",
      },
      slowOutcome: {
        result: "11 Inquiries / 1,000 Clicks",
        cpa: "High Acquisition Cost",
        leakage: "89% Budget Wasted on Bounces",
      },
      optOutcome: {
        result: "58 Qualified Leads / 1,000 Clicks",
        cpa: "Lowest Market CPL",
        leakage: "Zero Conversion Leaks",
      },
    },
    pillars: [
      {
        title: "Exact Keyword-to-Headline Alignment",
        standard: "Message Match 100%",
        impact: "Signals immediate relevance, reducing instant bounce to under 15%.",
      },
      {
        title: "Sub-Second Edge Page Speed",
        standard: "< 650ms First Contentful Paint",
        impact: "Prevents the 53% drop-off that occurs on mobile sites loading > 3 seconds.",
      },
      {
        title: "High-Contrast Friction-Free Capture",
        standard: "Zero-Clutter Visual Hierarchy",
        impact: "Keeps 100% of visitor attention focused on requesting a consultation.",
      },
      {
        title: "Server-Side Conversion Tracking",
        standard: "GTM + Offline Lead Sync",
        impact: "Feeds Google's Smart Bidding algorithm accurate target conversion data.",
      },
    ],
  },
  {
    id: "meta-ads",
    tabLabel: "Meta & Social Ads",
    channelName: "Meta Ads (Instagram & Facebook)",
    icon: <MousePointerClick className="w-4 h-4 text-[#FFB020]" />,
    tagline: "Meta Ads Require Instant Mobile Speed & First-Party CAPI Telemetry",
    coreProblem:
      "Meta ads generate mobile impulse traffic. If your website stutters for even 2 seconds or lacks server-side Conversions API (CAPI), visitors abandon before the page loads and ad algorithms bid blindly due to iOS tracking signal loss.",
    coreSolution:
      "We design fluid, thumb-friendly mobile landing experiences with first-party CAPI integration, sticky conversion prompts, and zero layout shift—turning casual social scrollers into high-value inbound customers.",
    benchmarkBadge: "9.6/10 Meta CAPI Signal",
    metrics: [
      {
        label: "Mobile Page Load Speed",
        slowValue: "3.4s (Visitors Leave)",
        slowStatus: "bad",
        optValue: "0.55s (Instant Paint)",
        optStatus: "good",
        improvement: "6.1x Faster",
      },
      {
        label: "Ad Platform Tracking Signal",
        slowValue: "4.2/10 (Severe Data Loss)",
        slowStatus: "bad",
        optValue: "9.6/10 (Full CAPI Telemetry)",
        optStatus: "good",
        improvement: "Zero Signal Loss",
      },
      {
        label: "Mobile Checkout / Form Completion",
        slowValue: "0.9% (Pinch & Zoom)",
        slowStatus: "bad",
        optValue: "4.4% (1-Tap Native)",
        optStatus: "good",
        improvement: "4.8x Higher",
      },
      {
        label: "Return on Ad Spend (ROAS)",
        slowValue: "Negative to Mediocre",
        slowStatus: "bad",
        optValue: "Predictable Scaling ROAS",
        optStatus: "good",
        improvement: "Consistently Profitable",
      },
    ],
    funnelSteps: {
      trafficSource: "Instagram / Facebook Mobile Feed & Story Ads",
      slowGateway: {
        title: "Cluttered Desktop-First Site",
        friction: "Slow web fonts, browser lag, tiny form fields, broken tracking",
        bounceRate: "78% Mobile Drop",
      },
      optGateway: {
        title: "HDM Native Mobile Landing Flow",
        advantage: "Instant mobile rendering, Apple Pay / 1-tap form, server-side CAPI",
        bounceRate: "18% Mobile Drop",
      },
      slowOutcome: {
        result: "Lost Attribution & Unspent Opportunity",
        cpa: "Elevated Cost-per-Acquisition",
        leakage: "Algorithm Cannot Optimize",
      },
      optOutcome: {
        result: "Maximized Mobile Conversion Flow",
        cpa: "Down to Lowest Target CPA",
        leakage: "100% Signal Passed to Meta AI",
      },
    },
    pillars: [
      {
        title: "First-Party Meta Conversions API (CAPI)",
        standard: "Server-Side Telemetry",
        impact: "Bypasses iOS tracking blocks, ensuring ad algorithms optimize for buyers.",
      },
      {
        title: "Thumb-First Mobile Touch Architecture",
        standard: "48px+ Touch Targets",
        impact: "Zero friction on smaller screens; sticky CTAs remain in natural thumb zone.",
      },
      {
        title: "Creative-to-Page Visual Continuity",
        standard: "Seamless Brand Narrative",
        impact: "Reassures social visitors that they landed in the exact right place.",
      },
      {
        title: "Sub-Second Edge Asset Caching",
        standard: "Zero Layout Shift (CLS 0.00)",
        impact: "Instant visual gratification that capitalizes on fleeting social attention.",
      },
    ],
  },
  {
    id: "seo",
    tabLabel: "Technical SEO",
    channelName: "Search Engine Optimization & Organic Authority",
    icon: <Search className="w-4 h-4 text-[#FFB020]" />,
    tagline: "SEO Rankings Depend on Flawless Technical Architecture & High Dwell Time",
    coreProblem:
      "Ranking in Google's top 3 is useless if your website fails Core Web Vitals or causes visitors to 'pogo-stick' back to search results. Google notices fast bounces and quickly demotes your domain in favor of better-built competitors.",
    coreSolution:
      "We architect clean semantic HTML5, automated Schema.org structured data, zero CLS, and lightning-fast LCP (< 0.8s). High engagement times tell Google your site is the definitive authority in your sector.",
    benchmarkBadge: "100/100 Core Web Vitals Standard",
    metrics: [
      {
        label: "Google Core Web Vitals",
        slowValue: "Red / Failing (LCP 4.1s)",
        slowStatus: "bad",
        optValue: "100 / 100 Green (LCP 0.6s)",
        optStatus: "good",
        improvement: "Top 1% Worldwide",
      },
      {
        label: "Average User Dwell Time",
        slowValue: "28 seconds (High Bounce)",
        slowStatus: "bad",
        optValue: "3m 45s (Deep Exploration)",
        optStatus: "good",
        improvement: "7.8x Longer",
      },
      {
        label: "Search Intent Alignment",
        slowValue: "Generic Wall of Text",
        slowStatus: "bad",
        optValue: "Interactive Skimmable UX",
        optStatus: "good",
        improvement: "Zero Pogo-Sticking",
      },
      {
        label: "Organic Lead Capture Rate",
        slowValue: "Passive (Lost Visitors)",
        slowStatus: "bad",
        optValue: "Active Inbound Pipeline",
        optStatus: "good",
        improvement: "Continuous Inquiries",
      },
    ],
    funnelSteps: {
      trafficSource: "High-Value Organic Commercial Searches (Top 3 Rankings)",
      slowGateway: {
        title: "Bloated Theme / Legacy CMS",
        friction: "Render-blocking JS, layout jumps, slow mobile server response",
        bounceRate: "64% Pogo-Stick Rate",
      },
      optGateway: {
        title: "Clean Semantic Next.js / React Architecture",
        advantage: "Instant edge rendering, Schema JSON-LD, intuitive scannable content",
        bounceRate: "16% Pogo-Stick Rate",
      },
      slowOutcome: {
        result: "Lost Ranking Velocity & Few Leads",
        cpa: "Organic Traffic Fails to Monetize",
        leakage: "Google Algorithm Downgrades Page",
      },
      optOutcome: {
        result: "Compound Organic Authority & Leads",
        cpa: "$0 Inbound Client Acquisition",
        leakage: "Rankings Solidify at #1 Positions",
      },
    },
    pillars: [
      {
        title: "Automated Schema.org JSON-LD Hierarchy",
        standard: "Rich Snippets & Entity Graphs",
        impact: "Ensures Google AI and crawlers understand your exact business offerings.",
      },
      {
        title: "Zero Cumulative Layout Shift (CLS 0.00)",
        standard: "Stable Visual Rendering",
        impact: "Zero accidental clicks or jumping elements, passing Google Core Web Vitals.",
      },
      {
        title: "Logical Topic Silo & Internal Linking",
        standard: "Clean Breadcrumb & URL Tree",
        impact: "Distributes domain authority efficiently to all high-ticket service pages.",
      },
      {
        title: "Engaging Scannable Content Architecture",
        standard: "High Dwell Time Layouts",
        impact: "Keeps decision-makers reading, sending positive behavioral signals to Google.",
      },
    ],
  },
  {
    id: "social-media",
    tabLabel: "Brand & Social",
    channelName: "Organic Social, LinkedIn & Creator Attention",
    icon: <Share2 className="w-4 h-4 text-[#FFB020]" />,
    tagline: "Social Media Generates Curiosity. Your Website Secures the Contract.",
    coreProblem:
      "Viral LinkedIn posts and social content create brief moments of curiosity. But when interested decision-makers click your link-in-bio or search your company name, an outdated website destroys credibility and loses the deal.",
    coreSolution:
      "We design authoritative, modern digital storefronts and bespoke campaign hubs that validate your prestige, demonstrate tangible case studies, and guide interested prospects directly to book a discovery call.",
    benchmarkBadge: "2.4x Average Conversion Lift",
    metrics: [
      {
        label: "Brand Credibility Perception",
        slowValue: "Outdated / Generic Freelance",
        slowStatus: "bad",
        optValue: "World-Class Market Leader",
        optStatus: "good",
        improvement: "Instant High Trust",
      },
      {
        label: "Bio-Link to Inquiry Rate",
        slowValue: "0.6% (Unfocused Navigation)",
        slowStatus: "bad",
        optValue: "3.9% (Curated Pathway)",
        optStatus: "good",
        improvement: "6.5x Higher",
      },
      {
        label: "Case Study & Social Proof Impact",
        slowValue: "Hidden Behind Dense Menus",
        slowStatus: "bad",
        optValue: "Interactive Metric Showcases",
        optStatus: "good",
        improvement: "Decisive Confidence",
      },
      {
        label: "Consultation Booking Velocity",
        slowValue: "Days of Back-and-Forth Email",
        slowStatus: "bad",
        optValue: "Instant Direct Calendar Sync",
        optStatus: "good",
        improvement: "Frictionless Booking",
      },
    ],
    funnelSteps: {
      trafficSource: "LinkedIn Content, Founder Brand, YouTube & Industry Podcasts",
      slowGateway: {
        title: "Stale Template Homepage",
        friction: "Outdated copyright, generic stock photos, slow loading, zero proof",
        bounceRate: "74% Drop-Off",
      },
      optGateway: {
        title: "Executive HDM Brand Experience",
        advantage: "Bespoke typography, verified client outcomes, instant 1-click booking",
        bounceRate: "19% Drop-Off",
      },
      slowOutcome: {
        result: "Attention Wasted; Zero Contracts",
        cpa: "Brand Equity Leaks Away",
        leakage: "Prospects Hire Faster Competitors",
      },
      optOutcome: {
        result: "High-Ticket Contracts & Advisory Retainers",
        cpa: "Maximum Brand Lifetime Value",
        leakage: "Curiosity Converted into Revenue",
      },
    },
    pillars: [
      {
        title: "Instant Brand Authority & Visual Prestige",
        standard: "Award-Caliber Polish",
        impact: "Validates your premium pricing within the critical first 3 seconds.",
      },
      {
        title: "Dedicated Campaign & Bio-Link Hubs",
        standard: "Curated Conversion Paths",
        impact: "Gives social visitors direct access to your highest-value offers.",
      },
      {
        title: "Interactive Client Proof & Outcomes",
        standard: "Real Verifiable Case Studies",
        impact: "Converts casual curiosity into definitive trust without long sales cycles.",
      },
      {
        title: "Integrated Calendar & Multi-Channel Touch",
        standard: "Direct Meeting Sync",
        impact: "Enables warm prospects to book a consultation while their interest is peaked.",
      },
    ],
  },
];

export function MarketingWebsiteSynergy() {
  const [activeChannelId, setActiveChannelId] = useState<string>("google-ads");
  // Interactive simulator mode: "slow" (traditional template) vs "optimized" (HDM engineering)
  const [simulatorMode, setSimulatorMode] = useState<"slow" | "optimized">("optimized");

  const activeChannel =
    MARKETING_CHANNELS.find((c) => c.id === activeChannelId) ||
    MARKETING_CHANNELS[0];

  const isOptimized = simulatorMode === "optimized";

  return (
    <section
      id="marketing-foundation"
      className="py-10 sm:py-16 lg:py-20 bg-[#FAF8F5] border-y border-[#E2DBD0] relative overflow-hidden"
    >
      {/* Subtle Background Lighting & Mesh */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#FFB020]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#060B22]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10 relative z-10">
        {/* 1. SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#060B22] text-[#FFB020] text-xs font-black uppercase tracking-wider border border-[#FFB020]/30 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#FFB020]" />
            <span>The Marketing + Website Relationship</span>
          </div>

          <h2 className="font-display font-black text-2xl sm:text-3xl lg:text-4xl text-[#0B1B3A] tracking-tight leading-tight">
            Your Marketing Efforts Will Only Work If You Have a Good Website.
          </h2>

          <p className="text-xs sm:text-base text-slate-600 leading-relaxed font-normal">
            Advertising brings traffic. SEO creates visibility. Social media builds attention.
            <br className="hidden sm:inline" /> But your <strong className="text-[#0B1B3A] font-bold">website is where every dollar is won or lost</strong>.
          </p>
        </div>

        {/* 2. INTERACTIVE CHANNEL SELECTOR TABS */}
        <div className="flex items-center justify-center gap-1.5 sm:gap-2.5 overflow-x-auto pb-1 no-scrollbar">
          {MARKETING_CHANNELS.map((ch) => {
            const isSelected = ch.id === activeChannel.id;
            return (
              <button
                key={ch.id}
                type="button"
                onClick={() => setActiveChannelId(ch.id)}
                className={cn(
                  "px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer select-none inline-flex items-center gap-2 shrink-0 border",
                  isSelected
                    ? "bg-[#060B22] text-[#FFB020] border-[#FFB020] shadow-sm ring-2 ring-[#FFB020]/20"
                    : "bg-white text-slate-700 border-[#E2DBD0] hover:border-slate-400"
                )}
              >
                <span>{ch.icon}</span>
                <span>{ch.tabLabel}</span>
                {isSelected && (
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                )}
              </button>
            );
          })}
        </div>

        {/* 3. INTERACTIVE SIMULATOR STUDIO ENGINE */}
        <div className="rounded-2xl sm:rounded-3xl bg-white border border-[#E2DBD0] shadow-sm overflow-hidden">
          {/* Top Control Bar: Channel Title & Live State Toggle */}
          <div className="p-4 sm:p-6 bg-[#060B22] text-white border-b border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="space-y-1 text-left">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[10px] font-black uppercase tracking-wider text-[#FFB020]">
                  Live Campaign Simulator · {activeChannel.channelName}
                </span>
              </div>
              <h3 className="font-display font-black text-lg sm:text-xl text-white tracking-tight">
                {activeChannel.tagline}
              </h3>
            </div>

            {/* Interactive Website Experience Toggle */}
            <div className="flex items-center gap-1.5 p-1 rounded-xl bg-white/10 border border-white/15 self-start md:self-auto shrink-0">
              <button
                type="button"
                onClick={() => setSimulatorMode("slow")}
                className={cn(
                  "px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer",
                  !isOptimized
                    ? "bg-rose-500 text-white shadow-sm"
                    : "text-slate-300 hover:text-white"
                )}
              >
                <AlertTriangle className="w-3.5 h-3.5" />
                <span>Slow / Generic Site</span>
              </button>

              <button
                type="button"
                onClick={() => setSimulatorMode("optimized")}
                className={cn(
                  "px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer",
                  isOptimized
                    ? "bg-[#FFB020] text-[#060B22] shadow-sm font-black"
                    : "text-slate-300 hover:text-white"
                )}
              >
                <Zap className="w-3.5 h-3.5 fill-[#060B22]" />
                <span>HDM Engineered Site</span>
              </button>
            </div>
          </div>

          {/* Main Studio Body: 2-Column Split */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
            {/* Left Column (7 cols): The 3-Stage Visual Funnel Flow */}
            <div className="lg:col-span-7 p-5 sm:p-7 border-b lg:border-b-0 lg:border-r border-[#E2DBD0] flex flex-col justify-between space-y-6 text-left">
              {/* Problem / Solution Narrative */}
              <div className="space-y-2">
                <div className="text-[10px] font-black uppercase tracking-wider text-slate-500">
                  {isOptimized ? "The High-Performance Growth Engine" : "The Silent Budget Drain"}
                </div>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                  {isOptimized ? activeChannel.coreSolution : activeChannel.coreProblem}
                </p>
              </div>

              {/* Dynamic Visual Funnel Flow */}
              <div className="space-y-3 pt-2">
                <div className="flex items-center justify-between text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                  <span>Visual Acquisition Journey</span>
                  <span className={isOptimized ? "text-emerald-600 font-black" : "text-rose-600 font-black"}>
                    {isOptimized ? "● High Conversion Flow" : "▲ Critical Traffic Bottleneck"}
                  </span>
                </div>

                <div className="space-y-2.5">
                  {/* Step 1: Traffic Source */}
                  <div className="p-3 rounded-xl bg-[#FAF8F5] border border-[#E2DBD0] flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#060B22] text-[#FFB020] flex items-center justify-center shrink-0">
                      <Target className="w-4 h-4" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="text-[10px] font-black uppercase tracking-wider text-slate-500">
                        Stage 1 · Inbound Campaign Traffic
                      </div>
                      <div className="text-xs font-bold text-[#0B1B3A] truncate">
                        {activeChannel.funnelSteps.trafficSource}
                      </div>
                    </div>
                  </div>

                  {/* Flow Arrow */}
                  <div className="flex justify-center -my-1">
                    <ArrowDown className="w-4 h-4 text-slate-400 animate-bounce" />
                  </div>

                  {/* Step 2: The Website Gateway (The Decisive Filter) */}
                  <div
                    className={cn(
                      "p-3.5 rounded-xl border transition-all duration-300",
                      isOptimized
                        ? "bg-emerald-50 border-emerald-300 ring-2 ring-emerald-400/20"
                        : "bg-rose-50 border-rose-300 ring-2 ring-rose-400/20"
                    )}
                  >
                    <div className="flex items-center justify-between gap-2 mb-1.5">
                      <div className="flex items-center gap-2">
                        {isOptimized ? (
                          <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                        ) : (
                          <AlertTriangle className="w-4 h-4 text-rose-600 shrink-0" />
                        )}
                        <span
                          className={cn(
                            "text-xs font-black uppercase tracking-wider",
                            isOptimized ? "text-emerald-900" : "text-rose-900"
                          )}
                        >
                          Stage 2 · The Website Experience (The Deciding Factor)
                        </span>
                      </div>
                      <span
                        className={cn(
                          "text-[10px] font-black px-2 py-0.5 rounded-full border",
                          isOptimized
                            ? "bg-emerald-200/60 text-emerald-900 border-emerald-300"
                            : "bg-rose-200/60 text-rose-900 border-rose-300"
                        )}
                      >
                        {isOptimized
                          ? activeChannel.funnelSteps.optGateway.bounceRate
                          : activeChannel.funnelSteps.slowGateway.bounceRate}
                      </span>
                    </div>

                    <div className="text-xs font-bold text-[#0B1B3A]">
                      {isOptimized
                        ? activeChannel.funnelSteps.optGateway.title
                        : activeChannel.funnelSteps.slowGateway.title}
                    </div>
                    <div className="text-[11px] text-slate-600 leading-snug mt-0.5">
                      {isOptimized
                        ? activeChannel.funnelSteps.optGateway.advantage
                        : activeChannel.funnelSteps.slowGateway.friction}
                    </div>
                  </div>

                  {/* Flow Arrow */}
                  <div className="flex justify-center -my-1">
                    <ArrowDown className="w-4 h-4 text-slate-400" />
                  </div>

                  {/* Step 3: Qualified Revenue Outcome */}
                  <div
                    className={cn(
                      "p-3.5 rounded-xl border transition-all duration-300",
                      isOptimized
                        ? "bg-[#060B22] text-white border-[#FFB020]/40 shadow-sm"
                        : "bg-slate-100 text-slate-800 border-slate-300"
                    )}
                  >
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <div className="flex items-center gap-2">
                        <TrendingUp
                          className={cn(
                            "w-4 h-4",
                            isOptimized ? "text-[#FFB020]" : "text-slate-500"
                          )}
                        />
                        <span
                          className={cn(
                            "text-xs font-black uppercase tracking-wider",
                            isOptimized ? "text-[#FFB020]" : "text-slate-600"
                          )}
                        >
                          Stage 3 · Real Pipeline Outcome
                        </span>
                      </div>
                      <span
                        className={cn(
                          "text-[10px] font-bold px-2 py-0.5 rounded-full",
                          isOptimized
                            ? "bg-[#FFB020]/20 text-[#FFB020] border border-[#FFB020]/30"
                            : "bg-rose-100 text-rose-700 border border-rose-200"
                        )}
                      >
                        {isOptimized
                          ? activeChannel.funnelSteps.optOutcome.leakage
                          : activeChannel.funnelSteps.slowOutcome.leakage}
                      </span>
                    </div>

                    <div className="text-xs font-bold">
                      {isOptimized
                        ? activeChannel.funnelSteps.optOutcome.result
                        : activeChannel.funnelSteps.slowOutcome.result}
                    </div>
                    <div
                      className={cn(
                        "text-[11px] mt-0.5",
                        isOptimized ? "text-slate-300" : "text-slate-500"
                      )}
                    >
                      {isOptimized
                        ? activeChannel.funnelSteps.optOutcome.cpa
                        : activeChannel.funnelSteps.slowOutcome.cpa}
                    </div>
                  </div>
                </div>
              </div>

              {/* Section Anchor CTA */}
              <div className="pt-2">
                <Link
                  href="/get-a-quote"
                  className="btn-luxury-navy py-2.5 px-5 rounded-xl text-xs font-black uppercase tracking-wider inline-flex items-center gap-2 shadow-xs cursor-pointer w-full sm:w-auto justify-center"
                >
                  <span>Audit Your {activeChannel.tabLabel} Website Funnel</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#FFB020]" />
                </Link>
              </div>
            </div>

            {/* Right Column (5 cols): Live Telemetry Meters & Crucial Standards */}
            <div className="lg:col-span-5 p-5 sm:p-7 bg-[#FAF8F5] flex flex-col justify-between space-y-6 text-left">
              {/* Telemetry Dashboard Header */}
              <div className="space-y-1">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <BarChart3 className="w-4 h-4 text-[#B87A00]" />
                    <span className="text-xs font-black uppercase tracking-wider text-[#0B1B3A]">
                      Campaign Impact Telemetry
                    </span>
                  </div>
                  <span className="text-[10px] font-bold text-slate-500">
                    Mode: {isOptimized ? "HDM Engine" : "Slow Site"}
                  </span>
                </div>
                <p className="text-[11px] text-slate-500">
                  Simulated performance variance on an identical ad spend:
                </p>
              </div>

              {/* 4 Interactive Telemetry Comparison Meters */}
              <div className="space-y-3">
                {activeChannel.metrics.map((m, i) => (
                  <div
                    key={i}
                    className="p-3 rounded-xl bg-white border border-[#E2DBD0] space-y-1.5 shadow-2xs"
                  >
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-[#0B1B3A]">{m.label}</span>
                      {isOptimized && (
                        <span className="text-[10px] font-black text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                          {m.improvement}
                        </span>
                      )}
                    </div>

                    <div className="flex items-center justify-between text-xs pt-0.5">
                      <span
                        className={cn(
                          "font-mono font-bold text-[11.5px]",
                          isOptimized ? "text-emerald-600" : "text-rose-600"
                        )}
                      >
                        {isOptimized ? m.optValue : m.slowValue}
                      </span>

                      <span className="text-[10px] text-slate-400">
                        {isOptimized ? "Target Benchmark" : "High Risk Level"}
                      </span>
                    </div>

                    {/* Visual Progress Bar */}
                    <div className="w-full h-1.5 rounded-full bg-slate-100 overflow-hidden">
                      <div
                        className={cn(
                          "h-full rounded-full transition-all duration-500",
                          isOptimized ? "bg-emerald-500 w-[94%]" : "bg-rose-500 w-[24%]"
                        )}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* 4 Crucial Website Engineering Standards for This Channel */}
              <div className="space-y-2 pt-2 border-t border-[#E2DBD0]">
                <div className="text-[10px] font-black uppercase tracking-wider text-slate-700 flex items-center justify-between">
                  <span>Non-Negotiable Website Standards:</span>
                  <span className="text-[10px] text-[#B87A00] font-bold">
                    {activeChannel.benchmarkBadge}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {activeChannel.pillars.map((pillar, i) => (
                    <div
                      key={i}
                      className="p-2.5 rounded-xl bg-white border border-[#E2DBD0] space-y-0.5 text-left"
                    >
                      <div className="flex items-center gap-1.5 font-bold text-[#0B1B3A] text-[11px]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#B87A00] shrink-0" />
                        <span className="truncate">{pillar.title}</span>
                      </div>
                      <p className="text-[10px] text-slate-500 leading-snug">
                        {pillar.impact}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4. CLOSING AGENCY MANIFESTO BANNER */}
        <div className="rounded-2xl sm:rounded-3xl skeuo-card-dark text-white p-5 sm:p-8 border border-white/15 shadow-xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-center text-left">
            <div className="lg:col-span-8 space-y-2">
              <blockquote className="font-display font-black text-base sm:text-xl lg:text-2xl text-white tracking-tight leading-snug">
                &ldquo;Your ads bring visitors. Your SEO brings visibility. Your social media builds awareness.{" "}
                <span className="text-[#FFB020]">
                  Your website turns all of it into business growth.
                </span>
                &rdquo;
              </blockquote>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                Never let valuable campaign traffic leak away through slow load speeds, uninspired wireframes, or friction-heavy forms. We build websites engineered from the ground up to turn traffic into paying clients.
              </p>
            </div>

            <div className="lg:col-span-4 flex items-center justify-start lg:justify-end">
              <Link
                href="/get-a-quote"
                className="btn-luxury-gold btn-shimmer py-3 px-6 rounded-xl text-xs font-black uppercase tracking-wider inline-flex items-center gap-2 shadow-lg cursor-pointer w-full sm:w-auto justify-center"
              >
                <span>Start Your Website Project</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
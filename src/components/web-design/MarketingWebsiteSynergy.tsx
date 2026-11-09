"use client";

import React, { useState } from "react";
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
  Check,
  AlertTriangle,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface MarketingChannelData {
  id: string;
  tabLabel: string;
  channel: string;
  icon: React.ReactNode;
  badge: string;
  heading: string;
  explanation: string;
  pillars: {
    title: string;
    description: string;
  }[];
  metricBadge: {
    label: string;
    value: string;
  };
  beforeState: string;
  afterState: string;
  signalTag: string;
}

const MARKETING_CHANNELS: MarketingChannelData[] = [
  {
    id: "google-ads",
    tabLabel: "Google Ads",
    channel: "Google Paid Search",
    icon: <Target className="w-4 h-4 text-[#FFB020]" />,
    badge: "Paid Search Performance",
    heading: "Google Ads Need High-Converting Landing Pages",
    explanation:
      "Driving high-intent Google Search traffic to a generic, slow homepage burns your advertising budget. Google Ads demand fast, laser-focused landing pages matching ad copy to drive high Quality Scores, lower CPCs, and maximum ROAS.",
    pillars: [
      {
        title: "Relevant Landing Page Content",
        description: "Exact keyword-to-headline alignment that maximizes relevance.",
      },
      {
        title: "Fast Loading Speed",
        description: "Sub-second initial paint to prevent costly bounce rates.",
      },
      {
        title: "Strong CTA Placement",
        description: "High-contrast, friction-free forms above and below the fold.",
      },
      {
        title: "Conversion-Focused Design",
        description: "Distraction-free layout engineered solely to capture inquiries.",
      },
    ],
    metricBadge: {
      label: "Quality Score",
      value: "10/10 Benchmark",
    },
    beforeState: "Generic slow homepage, 68% bounce rate, inflated cost-per-click",
    afterState: "Sub-second bespoke lander, 10/10 Quality Score, lowest acquisition cost",
    signalTag: "Ad Relevance 100%",
  },
  {
    id: "meta-ads",
    tabLabel: "Meta Ads",
    channel: "Meta Paid Social",
    icon: <MousePointerClick className="w-4 h-4 text-[#FFB020]" />,
    badge: "Social Paid Acquisition",
    heading: "Meta Ads Need Conversion-Ready Websites",
    explanation:
      "Meta Ads generate visual impulse traffic on mobile feeds. If your site takes longer than 2 seconds to load or lacks server-side tracking, visitors bounce instantly and Meta's algorithm fails to optimize for conversions.",
    pillars: [
      {
        title: "Meta Pixel & CAPI Integration",
        description: "First-party Conversions API setup ensuring zero signal loss.",
      },
      {
        title: "Conversion Tracking",
        description: "Granular funnel events from scroll depth to qualified lead submissions.",
      },
      {
        title: "Campaign-Specific Landing Pages",
        description: "Bespoke story flow reflecting specific creative hooks and promos.",
      },
      {
        title: "Mobile-First Experience",
        description: "Thumb-friendly navigation, sticky CTAs, and instant micro-loads.",
      },
    ],
    metricBadge: {
      label: "CAPI Signal Quality",
      value: "9.4/10 Great",
    },
    beforeState: "Signal loss from ad blockers, untracked mobile drops, blind bidding",
    afterState: "First-party CAPI telemetry, 1-tap mobile booking, self-learning ROAS",
    signalTag: "Zero Signal Loss",
  },
  {
    id: "seo",
    tabLabel: "SEO & Organic",
    channel: "Search Engine Optimization",
    icon: <Search className="w-4 h-4 text-[#FFB020]" />,
    badge: "Organic Search Authority",
    heading: "SEO Needs a Technically Strong Website",
    explanation:
      "SEO is not just keywords and backlinks. Google prioritizes websites with flawless Core Web Vitals, clean semantic HTML5 hierarchy, automated Schema markup, and intuitive mobile UI/UX that keeps visitors engaged.",
    pillars: [
      {
        title: "Technical SEO Foundation",
        description: "Zero indexation errors, clean canonical tags, and structured Schema.",
      },
      {
        title: "Optimized Structure",
        description: "Logical silo architecture and internal linking for effortless indexing.",
      },
      {
        title: "Mobile Responsiveness",
        description: "100% fluid layouts that pass Google mobile-first indexing audits.",
      },
      {
        title: "Excellent User Experience",
        description: "High dwell time and low bounce rates signaling market authority.",
      },
    ],
    metricBadge: {
      label: "Core Web Vitals",
      value: "95+ Green Score",
    },
    beforeState: "Red Core Web Vitals, layout shifts, uncrawled dynamic scripts",
    afterState: "100/100 Vitals, clean Schema JSON-LD, instant organic rankings",
    signalTag: "Google Top 1% Speed",
  },
  {
    id: "social-media",
    tabLabel: "Social Media",
    channel: "Brand & Organic Social",
    icon: <Share2 className="w-4 h-4 text-[#FFB020]" />,
    badge: "Brand Engagement & Trust",
    heading: "Social Media Needs a Website That Converts",
    explanation:
      "Social media content and influencer mentions attract casual curiosity and attention, but your website is where trust is established and curiosity transforms into paid contracts, bookings, and loyal customers.",
    pillars: [
      {
        title: "Consistent Brand Experience",
        description: "Seamless aesthetic alignment from social profile to website UI.",
      },
      {
        title: "Clear Conversion Journeys",
        description: "Frictionless paths leading casual profile visitors to consultation calls.",
      },
      {
        title: "Dedicated Landing Pages",
        description: "Custom link-in-bio hubs tailored to active campaigns and offers.",
      },
      {
        title: "Strong CTAs",
        description: "Clear, irresistible calls to action that motivate decisive action.",
      },
    ],
    metricBadge: {
      label: "Lead Conversion Lift",
      value: "2.4x Avg. Increase",
    },
    beforeState: "Bio link dropped onto desktop homepage with confusing navigation",
    afterState: "Custom campaign flow, instant trust triggers, direct appointment booking",
    signalTag: "2.4x Avg. Conv. Lift",
  },
];

export function MarketingWebsiteSynergy() {
  const [activeChannelId, setActiveChannelId] = useState<string>("google-ads");

  const activeChannel =
    MARKETING_CHANNELS.find((c) => c.id === activeChannelId) ||
    MARKETING_CHANNELS[0];

  return (
    <section
      id="marketing-foundation"
      className="py-8 sm:py-12 lg:py-16 bg-white border-y border-[#E2DBD0] relative overflow-hidden"
    >
      {/* Ambient Gradient Mesh */}
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-[#FFB020]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-[#060B22]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2.5">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#060B22] text-[#FFB020] text-xs font-black uppercase tracking-wider border border-[#FFB020]/30 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#FFB020]" />
            <span>The Marketing + Website Relationship</span>
          </div>

          <h2 className="font-display font-black text-2xl sm:text-3xl lg:text-4xl text-[#0B1B3A] tracking-tight leading-tight">
            Your Marketing Efforts Will Only Work If You Have a Good Website.
          </h2>

          <p className="text-xs sm:text-base text-slate-600 leading-relaxed font-normal">
            Every marketing channel needs a strong website experience to turn visitors into customers.
          </p>
        </div>

        {/* Interactive Channel Selector Ribbon (Touch Friendly on Mobile) */}
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
                    : "bg-[#FAF8F5] text-slate-700 border-[#E2DBD0] hover:border-slate-400"
                )}
              >
                <span>{ch.icon}</span>
                <span>{ch.tabLabel}</span>
                {isSelected && (
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                )}
              </button>
            );
          })}
        </div>

        {/* Interactive Visual Transformation Studio (Breaks Generic 4-Card Look) */}
        <div className="rounded-2xl sm:rounded-3xl bg-[#FAF8F5] border border-[#E2DBD0] p-4 sm:p-7 lg:p-8 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
            {/* Left Column (7 cols): Channel Requirements & Standards */}
            <div className="lg:col-span-7 space-y-4 text-left flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[10px] font-black uppercase tracking-wider text-[#B87A00] bg-[#FFB020]/20 px-2.5 py-0.5 rounded-full border border-[#FFB020]/30">
                    {activeChannel.badge}
                  </span>
                  <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200 flex items-center gap-1">
                    <Activity className="w-3 h-3 text-emerald-500" />
                    <span>{activeChannel.metricBadge.value}</span>
                  </span>
                </div>

                <h3 className="font-display font-black text-xl sm:text-2xl text-[#0B1B3A] tracking-tight leading-snug">
                  {activeChannel.heading}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {activeChannel.explanation}
                </p>
              </div>

              {/* 4 Required Website Standards */}
              <div className="pt-2 border-t border-[#E2DBD0] space-y-2">
                <div className="text-[10px] font-black uppercase tracking-wider text-slate-700">
                  Required Website Standards for {activeChannel.tabLabel}:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {activeChannel.pillars.map((pillar, i) => (
                    <div
                      key={i}
                      className="p-2.5 rounded-xl bg-white border border-[#E2DBD0] space-y-0.5 text-left"
                    >
                      <div className="flex items-center gap-1.5 font-bold text-[#0B1B3A] text-[11px] sm:text-xs">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#B87A00] shrink-0" />
                        <span>{pillar.title}</span>
                      </div>
                      <p className="text-[10.5px] text-slate-500 leading-relaxed pl-5">
                        {pillar.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column (5 cols): Funnel Transformation Visual (The "Why It Matters" Engine) */}
            <div className="lg:col-span-5 rounded-2xl bg-[#060B22] text-white p-4 sm:p-6 flex flex-col justify-between space-y-4 shadow-md border border-white/10 text-left">
              <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-[#FFB020]" />
                  <span className="text-xs font-black uppercase tracking-wider text-white">
                    Traffic-to-Revenue Bridge
                  </span>
                </div>
                <span className="text-[10px] font-bold text-[#FFB020] bg-white/10 px-2 py-0.5 rounded-full">
                  {activeChannel.signalTag}
                </span>
              </div>

              {/* Visual Funnel Comparison */}
              <div className="space-y-3 flex-1 flex flex-col justify-center">
                {/* Friction State */}
                <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/20 text-xs space-y-1">
                  <div className="flex items-center gap-1.5 font-bold text-rose-300 text-[11px]">
                    <AlertTriangle className="w-3.5 h-3.5 text-rose-400" />
                    <span>Without High-Converting Website:</span>
                  </div>
                  <p className="text-[10.5px] text-slate-300 leading-snug">
                    {activeChannel.beforeState}
                  </p>
                </div>

                <div className="flex justify-center">
                  <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-slate-400">
                    <ArrowDown className="w-3.5 h-3.5 text-[#FFB020]" />
                  </div>
                </div>

                {/* Optimized Solution State */}
                <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/25 text-xs space-y-1">
                  <div className="flex items-center gap-1.5 font-bold text-emerald-300 text-[11px]">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    <span>With Hire Desi Marketer Engineering:</span>
                  </div>
                  <p className="text-[10.5px] text-slate-200 leading-snug">
                    {activeChannel.afterState}
                  </p>
                </div>
              </div>

              {/* Action Button inside Studio */}
              <a
                href="/get-a-quote"
                className="btn-luxury-gold btn-shimmer py-2.5 px-4 rounded-xl text-xs font-black uppercase tracking-wider flex items-center justify-center gap-2 shadow-sm text-center cursor-pointer"
              >
                <span>Audit Your {activeChannel.tabLabel} Flow</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Closing Impact Synthesis Banner */}
        <div className="rounded-2xl sm:rounded-3xl skeuo-card-dark text-white p-4 sm:p-7 lg:p-8 border border-white/15 shadow-xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 items-center text-left">
            <div className="lg:col-span-8 space-y-2">
              <blockquote className="font-display font-black text-base sm:text-xl lg:text-2xl text-white tracking-tight leading-snug">
                &ldquo;Your ads bring visitors. Your SEO brings visibility. Your social media builds awareness.{" "}
                <span className="text-[#FFB020]">
                  Your website turns all of it into business growth.
                </span>
                &rdquo;
              </blockquote>
              <p className="text-[11px] sm:text-xs text-slate-300 leading-relaxed font-normal">
                Don't let valuable campaign traffic leak away through slow load speeds, uninspired wireframes, or friction-heavy forms. We build websites engineered from the ground up to turn traffic into paying clients.
              </p>
            </div>

            <div className="lg:col-span-4 flex items-center justify-start lg:justify-end">
              <a
                href="/get-a-quote"
                className="btn-luxury-gold btn-shimmer py-3 px-5 rounded-xl text-xs font-black uppercase tracking-wider inline-flex items-center gap-2 shadow-lg cursor-pointer w-full sm:w-auto justify-center"
              >
                <span>Start Your Website Project</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

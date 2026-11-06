"use client";

import React from "react";
import Image from "next/image";
import {
  Sparkles,
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  Search,
  Share2,
  Crosshair,
  BarChart3,
  Layers,
  Zap,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface MarketingPillar {
  id: string;
  channel: string;
  channelKicker: string;
  iconBg: string;
  icon: string | React.ReactNode;
  title: string;
  description: string;
  keyPoints: string[];
  impactMetric: string;
}

const MARKETING_PILLARS: MarketingPillar[] = [
  {
    id: "google-ads",
    channel: "Google Ads",
    channelKicker: "Paid Search · High Intent",
    iconBg: "bg-blue-500/10 text-blue-600 border-blue-500/20",
    icon: "/icons/google-ads.svg",
    title: "Google Ads Need High-Converting Landing Pages.",
    description:
      "Your Google Ads campaigns need high-quality landing pages that match your advertisements, build trust, and encourage visitors to take action.",
    keyPoints: [
      "Relevant landing page content matching search intent",
      "Strong CTA placement above the fold",
      "Sub-second loading speed preventing paid click bounces",
      "Conversion-focused design eliminating buyer friction",
    ],
    impactMetric: "Higher Quality Score · Lower CPC",
  },
  {
    id: "meta-ads",
    channel: "Meta Ads",
    channelKicker: "Facebook & Instagram · Visual Discovery",
    iconBg: "bg-indigo-500/10 text-indigo-600 border-indigo-500/20",
    icon: "/icons/meta-ads.svg",
    title: "Meta Ads Need Conversion-Ready Websites.",
    description:
      "Successful Facebook and Instagram advertising requires engaging landing pages, properly implemented conversion tracking, and an optimized user experience.",
    keyPoints: [
      "Campaign-specific landing pages tailored to creative angles",
      "Server-side Meta Conversions API (CAPI) & Pixel integration",
      "Frictionless 1-step lead routing and purchase flows",
      "Mobile-first responsive experience for social app visitors",
    ],
    impactMetric: "Accurate Attribution · Higher ROAS",
  },
  {
    id: "seo",
    channel: "SEO & Search",
    channelKicker: "Organic Visibility · Long-Term Asset",
    iconBg: "bg-emerald-500/10 text-emerald-600 border-emerald-500/20",
    icon: <Search className="w-5 h-5 text-emerald-600" />,
    title: "SEO Needs a Technically Strong Website.",
    description:
      "Search engine optimization requires a technically sound website with optimized structure, fast loading speeds, quality content presentation, and excellent UI/UX.",
    keyPoints: [
      "Technical SEO foundation with clean semantic HTML & Schema",
      "Optimized website architecture & internal crawl hierarchy",
      "Flawless mobile responsiveness across all viewport sizes",
      "Intuitive navigation keeping bounce rates below 30%",
    ],
    impactMetric: "Core Web Vitals 95+ · Organic Domination",
  },
  {
    id: "social-media",
    channel: "Social Media",
    channelKicker: "Brand Reach & Community Attention",
    iconBg: "bg-amber-500/10 text-amber-600 border-amber-500/20",
    icon: <Share2 className="w-5 h-5 text-[#B87A00]" />,
    title: "Social Media Needs a Website That Converts.",
    description:
      "Social media builds awareness and attracts attention. A professional website helps turn that attention into inquiries, leads, and customers.",
    keyPoints: [
      "Consistent brand experience from post to destination page",
      "Dedicated landing pages tailored for bio links and stories",
      "Clear, persuasive conversion journeys with zero distractions",
      "Strong, compelling CTAs that capture warm prospective clients",
    ],
    impactMetric: "Traffic to Paying Clients · Brand Retention",
  },
];

export function WebDesignMarketingAlignment() {
  return (
    <div className="space-y-8 sm:space-y-12">
      {/* 1. Section Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#060B22] text-[#FFB020] text-xs font-black uppercase tracking-wider border border-[#FFB020]/30 shadow-xs">
          <Crosshair className="w-3.5 h-3.5 text-[#FFB020]" />
          <span>The Marketing Foundation</span>
        </div>
        <h2 className="font-display font-black text-2xl sm:text-4xl lg:text-[40px] text-[#0B1B3A] tracking-tight leading-tight">
          Your Marketing Efforts Will Only Work If You Have a Good Website
        </h2>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-medium">
          Every marketing channel needs a strong website experience to turn
          visitors into customers.
        </p>
      </div>

      {/* 2. Four Editorial Cards (2x2 Grid with Refined Luxury Styling) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-7 items-stretch">
        {MARKETING_PILLARS.map((pillar, idx) => (
          <div
            key={pillar.id}
            className="rounded-2xl sm:rounded-3xl bg-white border border-[#E2DBD0] hover:border-[#FFB020] p-5 sm:p-8 flex flex-col justify-between shadow-[0_4px_20px_-4px_rgba(6,11,34,0.05)] hover:shadow-[0_16px_36px_-6px_rgba(255,176,32,0.14)] hover:-translate-y-1 transition-all duration-300 relative group overflow-hidden text-left"
          >
            {/* Top Hover Accent Bar */}
            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#FFB020]/0 to-transparent group-hover:via-[#FFB020] transition-all duration-300" />

            <div className="space-y-4 sm:space-y-5">
              {/* Card Header with Channel Badge & Metric */}
              <div className="flex items-center justify-between gap-3 border-b border-slate-100 pb-3 sm:pb-4">
                <div className="flex items-center gap-2.5 sm:gap-3">
                  <div
                    className={cn(
                      "w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center p-2 border shrink-0 transition-transform duration-300 group-hover:scale-105 shadow-2xs",
                      pillar.iconBg
                    )}
                  >
                    {typeof pillar.icon === "string" ? (
                      <Image
                        src={pillar.icon}
                        alt={pillar.channel}
                        width={22}
                        height={22}
                        className="object-contain"
                      />
                    ) : (
                      pillar.icon
                    )}
                  </div>

                  <div>
                    <span className="text-[10px] font-black uppercase tracking-wider text-[#B87A00] block">
                      {pillar.channelKicker}
                    </span>
                    <h3 className="font-display font-black text-base sm:text-lg text-[#0B1B3A] tracking-tight">
                      {pillar.channel}
                    </h3>
                  </div>
                </div>

                <span className="text-[10px] sm:text-[11px] font-bold text-slate-500 bg-slate-50 border border-slate-200/80 px-2 sm:px-2.5 py-1 rounded-full text-right truncate max-w-[140px] sm:max-w-none">
                  {pillar.impactMetric}
                </span>
              </div>

              {/* Title & Description */}
              <div className="space-y-2">
                <h4 className="font-display font-black text-lg sm:text-xl text-[#0B1B3A] tracking-tight leading-snug group-hover:text-[#B87A00] transition-colors">
                  {pillar.title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {pillar.description}
                </p>
              </div>

              {/* Key Bullet Checklist */}
              <div className="space-y-2 pt-1">
                <div className="text-[10px] sm:text-xs font-black uppercase tracking-wider text-slate-400">
                  Critical Website Requirements:
                </div>
                <ul className="space-y-2 text-xs text-slate-700">
                  {pillar.keyPoints.map((point, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2 leading-snug">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#FFB020] shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Bottom Card Footer with Subtle CTA Link */}
            <div className="pt-4 sm:pt-5 border-t border-slate-100 flex items-center justify-between mt-5">
              <span className="text-[11px] text-slate-500 font-semibold">
                Optimized for maximum conversion
              </span>
              <a
                href="#lead-form"
                className="text-xs font-bold text-[#0B1B3A] group-hover:text-[#B87A00] inline-flex items-center gap-1 transition-colors cursor-pointer"
              >
                <span>Discuss {pillar.channel} Landing Page</span>
                <ArrowRight className="w-3 h-3 text-[#FFB020] transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* 3. Authoritative Closing Statement Banner (Phase 7 Requirement) */}
      <div className="p-6 sm:p-8 rounded-3xl skeuo-card-dark text-white border border-white/10 shadow-xl relative overflow-hidden">
        {/* Ambient Warm Backlights */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#FFB020]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2.5 max-w-2xl text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-slate-200 text-xs font-black uppercase tracking-wider border border-white/10">
              <Sparkles className="w-3.5 h-3.5 text-[#FFB020]" />
              <span>Full-Funnel Growth Alignment</span>
            </div>
            <p className="font-display font-black text-lg sm:text-2xl text-white tracking-tight leading-snug">
              &ldquo;Your ads bring visitors. Your SEO brings visibility. Your social media builds awareness.{" "}
              <span className="text-[#FFB020]">Your website turns all of it into business growth.&rdquo;</span>
            </p>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
              Stop losing paid clicks and organic traffic to slow, confusing websites. We engineer high-converting digital flagships designed to maximize every dollar you spend on marketing.
            </p>
          </div>

          <a
            href="#lead-form"
            className="btn-luxury-gold btn-shimmer px-6 sm:px-8 py-3.5 rounded-xl text-xs sm:text-sm font-black uppercase tracking-wider inline-flex items-center justify-center gap-2 shrink-0 shadow-lg cursor-pointer w-full sm:w-auto"
          >
            <span>Let&apos;s Build Your Website</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
}

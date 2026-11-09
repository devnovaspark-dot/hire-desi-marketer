"use client";

import React, { useState } from "react";
import {
  Sparkles,
  ArrowRight,
  TrendingUp,
  Target,
  Search,
  Share2,
  CheckCircle2,
  Zap,
  ShieldCheck,
  MousePointerClick,
  Layers,
  Activity,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface MarketingChannelCard {
  id: string;
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
  gradient: string;
}

const MARKETING_CHANNELS: MarketingChannelCard[] = [
  {
    id: "google-ads",
    channel: "Google Ads",
    icon: <Target className="w-5 h-5 text-[#FFB020]" />,
    badge: "Paid Search Performance",
    heading: "Google Ads Need High-Converting Landing Pages",
    explanation:
      "Driving high-intent Google Search traffic to a generic, slow homepage burns your advertising budget. Google Ads demand fast, laser-focused landing pages matching ad copy to drive high Quality Scores and maximum ROAS.",
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
    gradient: "from-amber-500/10 via-amber-500/5 to-transparent",
  },
  {
    id: "meta-ads",
    channel: "Meta Ads",
    icon: <MousePointerClick className="w-5 h-5 text-[#FFB020]" />,
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
    gradient: "from-blue-500/10 via-blue-500/5 to-transparent",
  },
  {
    id: "seo",
    channel: "Search Engine Optimization (SEO)",
    icon: <Search className="w-5 h-5 text-[#FFB020]" />,
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
    gradient: "from-emerald-500/10 via-emerald-500/5 to-transparent",
  },
  {
    id: "social-media",
    channel: "Organic Social Media",
    icon: <Share2 className="w-5 h-5 text-[#FFB020]" />,
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
    gradient: "from-purple-500/10 via-purple-500/5 to-transparent",
  },
];

export function MarketingWebsiteSynergy() {
  const [activeCard, setActiveCard] = useState<string>("google-ads");

  return (
    <section
      id="marketing-foundation"
      className="py-12 sm:py-16 lg:py-20 bg-white border-y border-[#E2DBD0] relative overflow-hidden"
    >
      {/* Background Decorative Ambient Gradients */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#FFB020]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#060B22]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3.5">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#060B22] text-[#FFB020] text-xs font-black uppercase tracking-wider border border-[#FFB020]/30 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#FFB020]" />
            <span>The Marketing + Website Relationship</span>
          </div>

          <h2 className="font-display font-black text-2xl sm:text-4xl lg:text-[40px] text-[#0B1B3A] tracking-tight leading-[1.18]">
            Your Marketing Efforts Will Only Work If You Have a Good Website.
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            Every marketing channel needs a strong website experience to turn visitors into customers. Without high-velocity code, persuasive architecture, and frictionless conversion funnels, advertising traffic is wasted.
          </p>
        </div>

        {/* 4 Interactive Editorial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 items-stretch">
          {MARKETING_CHANNELS.map((item, idx) => {
            const isActive = activeCard === item.id;

            return (
              <div
                key={item.id}
                onMouseEnter={() => setActiveCard(item.id)}
                className={cn(
                  "rounded-2xl sm:rounded-3xl p-5 sm:p-6 flex flex-col justify-between transition-all duration-300 relative text-left group cursor-pointer border overflow-hidden",
                  isActive
                    ? "bg-[#060B22] text-white border-[#FFB020] shadow-[0_20px_40px_-8px_rgba(6,11,34,0.35)] -translate-y-1.5 ring-2 ring-[#FFB020]/20"
                    : "bg-[#FAF8F5] text-[#0B1B3A] border-[#E2DBD0] hover:border-[#FFB020]/70 hover:shadow-lg hover:-translate-y-1"
                )}
              >
                {/* Top Subtle Glow Line on active card */}
                <div
                  className={cn(
                    "absolute top-0 inset-x-0 h-1 transition-all duration-300",
                    isActive
                      ? "bg-gradient-to-r from-transparent via-[#FFB020] to-transparent"
                      : "bg-transparent group-hover:bg-[#FFB020]/50"
                  )}
                />

                <div className="space-y-4 flex-1 flex flex-col">
                  {/* Top Bar: Icon + Metric Badge */}
                  <div className="flex items-center justify-between gap-2">
                    <div
                      className={cn(
                        "w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors border",
                        isActive
                          ? "bg-white/10 border-white/20 text-[#FFB020]"
                          : "bg-white border-[#E2DBD0] text-[#0B1B3A] group-hover:bg-[#FFB020]/20"
                      )}
                    >
                      {item.icon}
                    </div>

                    <span
                      className={cn(
                        "px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border shrink-0",
                        isActive
                          ? "bg-[#FFB020] text-[#060B22] border-[#FFB020] font-black"
                          : "bg-white text-slate-600 border-[#E2DBD0] group-hover:border-[#FFB020]/40"
                      )}
                    >
                      {item.metricBadge.value}
                    </span>
                  </div>

                  {/* Channel Tag & Headline */}
                  <div className="space-y-1.5">
                    <div
                      className={cn(
                        "text-[10px] font-black uppercase tracking-wider",
                        isActive ? "text-[#FFB020]" : "text-[#B87A00]"
                      )}
                    >
                      {item.badge}
                    </div>
                    <h3
                      className={cn(
                        "font-display font-black text-lg sm:text-xl tracking-tight leading-snug transition-colors",
                        isActive ? "text-white" : "text-[#0B1B3A] group-hover:text-[#B87A00]"
                      )}
                    >
                      {item.heading}
                    </h3>
                  </div>

                  {/* Explanation Paragraph */}
                  <p
                    className={cn(
                      "text-xs leading-relaxed font-normal",
                      isActive ? "text-slate-300" : "text-slate-600"
                    )}
                  >
                    {item.explanation}
                  </p>

                  {/* 4 Foundation Pillars */}
                  <div
                    className={cn(
                      "pt-3 mt-auto border-t space-y-2.5",
                      isActive ? "border-white/10" : "border-[#E2DBD0]"
                    )}
                  >
                    <div
                      className={cn(
                        "text-[10px] font-black uppercase tracking-wider",
                        isActive ? "text-slate-400" : "text-slate-500"
                      )}
                    >
                      Required Website Standards:
                    </div>

                    <ul className="space-y-2 text-xs">
                      {item.pillars.map((pillar, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-2">
                          <CheckCircle2
                            className={cn(
                              "w-3.5 h-3.5 shrink-0 mt-0.5",
                              isActive ? "text-[#FFB020]" : "text-[#B87A00]"
                            )}
                          />
                          <div className="min-w-0">
                            <span
                              className={cn(
                                "font-bold text-[11px] block leading-snug",
                                isActive ? "text-white" : "text-[#0B1B3A]"
                              )}
                            >
                              {pillar.title}
                            </span>
                            <span
                              className={cn(
                                "text-[10.5px] block leading-snug",
                                isActive ? "text-slate-400" : "text-slate-500"
                              )}
                            >
                              {pillar.description}
                            </span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom Card Footer */}
                <div
                  className={cn(
                    "pt-4 mt-4 border-t flex items-center justify-between text-[11px] font-bold",
                    isActive ? "border-white/10 text-[#FFB020]" : "border-slate-200/80 text-slate-500 group-hover:text-[#B87A00]"
                  )}
                >
                  <span className="flex items-center gap-1.5">
                    <Activity className="w-3.5 h-3.5" />
                    <span>Conversion Ready</span>
                  </span>
                  <span className="font-mono text-[10px]">0{idx + 1}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Closing Impact Statement & Direct Conversion Banner */}
        <div className="rounded-2xl sm:rounded-3xl skeuo-card-dark text-white p-6 sm:p-8 lg:p-10 border border-white/15 shadow-xl relative overflow-hidden">
          {/* Subtle Ambient Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#FFB020]/15 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center relative z-10">
            {/* Left Column: Authoritative Closing Synthesis */}
            <div className="lg:col-span-8 space-y-3 text-left">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-[#FFB020] text-[10px] sm:text-xs font-black uppercase tracking-wider border border-white/15">
                <Zap className="w-3.5 h-3.5 text-[#FFB020]" />
                <span>The Complete Conversion Formula</span>
              </div>

              <blockquote className="font-display font-black text-lg sm:text-2xl lg:text-3xl text-white tracking-tight leading-snug">
                &ldquo;Your ads bring visitors. Your SEO brings visibility. Your social media builds awareness.{" "}
                <span className="text-[#FFB020]">
                  Your website turns all of it into business growth.
                </span>
                &rdquo;
              </blockquote>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal max-w-2xl">
                Don't let valuable campaign traffic leak away through slow load speeds, uninspired wireframes, or friction-heavy forms. We build websites engineered from the ground up to maximize the ROI of every single marketing dollar you invest.
              </p>
            </div>

            {/* Right Column: High-Intent Action Button */}
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col items-stretch justify-center gap-3">
              <a
                href="#lead-form"
                className="btn-luxury-gold btn-shimmer py-3.5 px-6 rounded-xl text-xs font-black uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg transition-all cursor-pointer text-center"
              >
                <span>Audit Your Website Conversion Flow</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#services"
                className="py-3 px-5 rounded-xl text-xs font-bold text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/15 flex items-center justify-center gap-1.5 transition-colors cursor-pointer text-center"
              >
                <span>Explore Website Solutions</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


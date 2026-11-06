"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Palette,
  RefreshCw,
  ShoppingBag,
  Users,
  Star,
  Clock,
  ShieldCheck,
  Zap,
  Globe,
  Code2,
  ChevronRight,
  TrendingUp,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { WebDesignLeadForm } from "./WebDesignLeadForm";

interface BentoFeature {
  id: string;
  icon: React.ReactNode;
  iconBg: string;
  title: string;
  kicker: string;
  highlightMetric: string;
  description: string;
}

const BENTO_FEATURES: BentoFeature[] = [
  {
    id: "custom-design",
    icon: <Palette className="w-4 h-4 text-[#B87A00]" />,
    iconBg: "bg-amber-500/15 border-amber-500/25",
    title: "Custom UI/UX & Dev",
    kicker: "Bespoke Design",
    highlightMetric: "Figma to Code",
    description: "Tailored brand aesthetics, pixel-perfect responsiveness, and zero generic cookie-cutter templates.",
  },
  {
    id: "speed-redesign",
    icon: <Zap className="w-4 h-4 text-emerald-600" />,
    iconBg: "bg-emerald-500/15 border-emerald-500/25",
    title: "Redesign & Speed",
    kicker: "Pure Performance",
    highlightMetric: "Core Vitals 98+",
    description: "Sub-second first contentful paint (<0.8s) with zero render-blocking scripts for maximum conversions.",
  },
  {
    id: "ecommerce-cms",
    icon: <ShoppingBag className="w-4 h-4 text-indigo-600" />,
    iconBg: "bg-indigo-500/15 border-indigo-500/25",
    title: "CMS & E-Commerce",
    kicker: "Revenue Platforms",
    highlightMetric: "Shopify & Headless",
    description: "High-velocity storefronts and dynamic visual CMS architectures designed to scale to 8 figures.",
  },
  {
    id: "dedicated-squad",
    icon: <Users className="w-4 h-4 text-blue-600" />,
    iconBg: "bg-blue-500/15 border-blue-500/25",
    title: "Dedicated Dev Squad",
    kicker: "Agile Offshore Wing",
    highlightMetric: "Fixed Milestones",
    description: "Senior web architects aligned with your timezone, daily async standups, and 100% code ownership.",
  },
];

export function WebDesignHero() {
  const [activeFeature, setActiveFeature] = useState<number>(0);
  const [timezones, setTimezones] = useState({
    ny: "--:--",
    ldn: "--:--",
    syd: "--:--",
  });

  // Calculate live real-world time for US, UK, and Australia
  useEffect(() => {
    const updateClocks = () => {
      const now = new Date();
      setTimezones({
        ny: now.toLocaleTimeString("en-US", {
          timeZone: "America/New_York",
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        }),
        ldn: now.toLocaleTimeString("en-GB", {
          timeZone: "Europe/London",
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        }),
        syd: now.toLocaleTimeString("en-AU", {
          timeZone: "Australia/Sydney",
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        }),
      });
    };

    updateClocks();
    const interval = setInterval(updateClocks, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden py-4 sm:py-8 lg:py-12 bg-[#F6F4EE]">
      {/* Dynamic Animated Ambient Background Blobs */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl pointer-events-none animate-pulse duration-1000" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
          {/* Left Column (7 cols): Interactive Eyebrow, Dynamic Headline, Bento Cards, Actions, Proof */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-5 text-left">
            {/* 1. Interactive Live Timezone Overlap Kicker */}
            <div className="inline-flex flex-wrap items-center gap-2 px-3 py-1.5 rounded-full bg-white/90 border border-[#E2DBD0] shadow-2xs text-xs">
              <span className="flex items-center gap-1.5 text-emerald-700 font-bold text-[11px] sm:text-xs">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span>Active Engineering Overlap:</span>
              </span>

              <div className="flex items-center gap-2 text-[10px] sm:text-[11px] font-mono text-slate-600">
                <span className="font-semibold text-slate-800">
                  🇺🇸 NY {timezones.ny}
                </span>
                <span className="text-slate-300">·</span>
                <span className="font-semibold text-slate-800">
                  🇬🇧 LDN {timezones.ldn}
                </span>
                <span className="text-slate-300">·</span>
                <span className="font-semibold text-slate-800">
                  🇦🇺 SYD {timezones.syd}
                </span>
              </div>
            </div>

            {/* 2. Main Headline with Luxury Gradient Highlights & Shimmer */}
            <div className="space-y-2">
              <h1 className="font-display font-black text-2xl sm:text-4xl lg:text-[40px] xl:text-[44px] text-[#0B1B3A] tracking-tight leading-[1.12]">
                The Right Design &amp; Development Talent for{" "}
                <span className="relative inline-block">
                  <span className="relative z-10 bg-gradient-to-r from-[#B87A00] via-[#E68A00] to-[#FFB020] bg-clip-text text-transparent">
                    Your Industry and Website
                  </span>
                  <span className="absolute bottom-1 left-0 right-0 h-2.5 bg-[#FFB020]/20 -rotate-1 rounded-sm -z-0" />
                </span>
              </h1>

              {/* Subheading */}
              <p className="text-xs sm:text-sm lg:text-base text-slate-700 leading-relaxed max-w-2xl font-medium">
                We bring together senior UI/UX designers and full-stack engineers to build high-performing websites tailored to your industry, business goals, and audience — helping your business turn online visitors into paying clients.
              </p>
            </div>

            {/* 3. Interactive 4-Bento Capability Cards with Hover Reveal */}
            <div className="grid grid-cols-2 gap-2.5 pt-1 text-xs">
              {BENTO_FEATURES.map((feat, idx) => {
                const isActive = activeFeature === idx;
                return (
                  <div
                    key={feat.id}
                    onMouseEnter={() => setActiveFeature(idx)}
                    onClick={() => setActiveFeature(idx)}
                    className={cn(
                      "p-2.5 sm:p-3 rounded-xl sm:rounded-2xl border transition-all duration-300 cursor-pointer text-left relative overflow-hidden group select-none",
                      isActive
                        ? "bg-white border-[#FFB020] shadow-md ring-2 ring-[#FFB020]/20 scale-101"
                        : "bg-white/85 border-[#E2DBD0] hover:bg-white hover:border-slate-400 hover:shadow-xs"
                    )}
                  >
                    {/* Top Accent Strip */}
                    <div
                      className={cn(
                        "absolute top-0 inset-x-0 h-1 transition-colors",
                        isActive ? "bg-[#FFB020]" : "bg-transparent"
                      )}
                    />

                    <div className="flex items-start justify-between gap-1.5 mb-1.5">
                      <div
                        className={cn(
                          "w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center p-1.5 border shrink-0 transition-transform duration-300 group-hover:scale-110",
                          feat.iconBg
                        )}
                      >
                        {feat.icon}
                      </div>

                      <span
                        className={cn(
                          "text-[9px] sm:text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full border truncate",
                          isActive
                            ? "bg-[#FFB020]/20 text-[#B87A00] border-[#FFB020]/30"
                            : "bg-slate-100 text-slate-600 border-slate-200"
                        )}
                      >
                        {feat.highlightMetric}
                      </span>
                    </div>

                    <div className="min-w-0">
                      <h4 className="font-display font-black text-slate-900 text-[11px] sm:text-xs leading-tight truncate">
                        {feat.title}
                      </h4>
                      <p className="text-[9.5px] sm:text-[10.5px] text-slate-600 mt-0.5 line-clamp-1 group-hover:line-clamp-2 transition-all">
                        {feat.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* 4. Live Benchmark & Velocity Proof Strip */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-4 py-1.5 px-3 rounded-xl bg-white/70 border border-[#E2DBD0] text-[10px] sm:text-[11px] font-semibold text-slate-700">
              <span className="flex items-center gap-1.5 text-emerald-700 font-bold">
                <Zap className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>99/100 Core Web Vitals</span>
              </span>
              <span className="text-slate-300 hidden sm:inline">•</span>
              <span className="flex items-center gap-1.5 text-amber-700 font-bold">
                <TrendingUp className="w-3.5 h-3.5 text-[#B87A00] shrink-0" />
                <span>2.4x Avg. Conversion Lift</span>
              </span>
              <span className="text-slate-300 hidden sm:inline">•</span>
              <span className="flex items-center gap-1.5 text-blue-700 font-bold">
                <Clock className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                <span>&lt; 24h Project Scope</span>
              </span>
            </div>

            {/* 5. Primary & Secondary CTAs with Animated Shimmer */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a
                href="#lead-form"
                className="btn-luxury-gold btn-shimmer py-3 px-6 rounded-xl text-xs sm:text-sm font-black uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all cursor-pointer group"
              >
                <span>Get a Free Website Consultation</span>
                <ArrowRight className="w-4 h-4 text-[#060B22] group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#engagement-models"
                className="btn-luxury-navy py-3 px-5 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 shadow-sm border border-slate-700 hover:border-[#FFB020] transition-colors cursor-pointer"
              >
                <span>Explore Engagement Models</span>
              </a>
            </div>

            {/* 6. Social Proof & Trust Badges */}
            <div className="pt-3 border-t border-[#E2DBD0] flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-slate-600">
              <div className="flex items-center gap-1.5">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-3.5 h-3.5 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>
                <span className="font-bold text-[#0B1B3A]">4.9 / 5.0 Rating</span>
                <span className="text-[10px] text-slate-500 font-normal">
                  (120+ Reviews)
                </span>
              </div>
              <span className="text-slate-300 hidden sm:inline">•</span>
              <div className="flex items-center gap-1.5 font-semibold">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>100% Code Ownership</span>
              </div>
              <span className="text-slate-300 hidden sm:inline">•</span>
              <div className="flex items-center gap-1.5 font-semibold">
                <Code2 className="w-3.5 h-3.5 text-[#FFB020]" />
                <span>Zero Lock-In Contracts</span>
              </div>
            </div>
          </div>

          {/* Right Column (5 cols): Compact High-Converting Lead Form */}
          <div className="lg:col-span-5 relative">
            {/* Subtle Decorative Glow behind Form */}
            <div className="absolute -inset-1 bg-gradient-to-r from-[#FFB020]/20 to-blue-500/20 rounded-3xl blur-xl opacity-75 pointer-events-none" />

            <div className="relative z-10">
              <WebDesignLeadForm
                formId="lead-form"
                sourceTag="Web Design Landing Page - Hero Form"
                title="Get a Free Website Consultation"
                subtitle="Fill in your project scope below for an actionable roadmap."
                variant="light"
                compact={true}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

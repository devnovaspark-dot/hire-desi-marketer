"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Sparkles,
  ArrowRight,
  Palette,
  Zap,
  ShoppingBag,
  Users,
  Star,
  ShieldCheck,
  Clock,
  CheckCircle2,
  Activity,
  Code2,
  Check,
  Laptop,
} from "lucide-react";
import { WebDesignLeadForm } from "./WebDesignLeadForm";
import { cn } from "@/lib/utils";

interface ArchitecturePillar {
  id: string;
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  metric: string;
}

const ARCHITECTURE_PILLARS: ArchitecturePillar[] = [
  {
    id: "bespoke",
    icon: <Palette className="w-3.5 h-3.5 text-[#FFB020]" />,
    title: "Bespoke UI/UX & Code",
    subtitle: "Custom Figma wireframes to clean code",
    metric: "100% Tailored",
  },
  {
    id: "speed",
    icon: <Zap className="w-3.5 h-3.5 text-[#FFB020]" />,
    title: "Sub-Second Performance",
    subtitle: "Core Web Vitals 95+ speed guaranteed",
    metric: "< 0.8s LCP",
  },
  {
    id: "commerce",
    icon: <ShoppingBag className="w-3.5 h-3.5 text-[#FFB020]" />,
    title: "CMS & Modern Commerce",
    subtitle: "Shopify Plus, Webflow & custom WordPress",
    metric: "Headless & Native",
  },
  {
    id: "squad",
    icon: <Users className="w-3.5 h-3.5 text-[#FFB020]" />,
    title: "Dedicated Dev Squad",
    subtitle: "Direct timezone overlap & fixed milestones",
    metric: "Realtime Sync",
  },
];

export function WebDesignHero() {
  const [activeMetric, setActiveMetric] = useState<string>("speed");

  return (
    <section className="relative overflow-hidden w-full min-h-auto lg:min-h-[calc(100vh-4.5rem)] flex flex-col justify-center py-6 sm:py-8 lg:py-6 bg-[#F6F4EE] border-b border-[#E2DBD0]">
      {/* Dynamic Animated Ambient Background Orbs */}
      <div className="absolute top-12 left-6 sm:left-16 w-72 sm:w-96 h-72 sm:h-96 bg-[#FFB020]/15 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-8 right-6 sm:right-24 w-64 sm:w-80 h-64 sm:h-80 bg-[#060B22]/8 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          {/* Left Column (7 cols): Editorial Typography, Storytelling & Visual Craft */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-4.5 text-left">
            {/* 1. Prestige Agency Live Overlap Kicker */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E2DBD0] shadow-2xs">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-[10px] sm:text-[11px] font-bold text-[#060B22] uppercase tracking-wider">
                Enterprise Web Engineering &amp; Bespoke UI/UX
              </span>
              <span className="text-slate-300 hidden sm:inline">|</span>
              <span className="text-[9.5px] sm:text-[10.5px] font-semibold text-slate-500 hidden sm:inline">
                Open for Q2/Q3 Projects
              </span>
            </div>

            {/* 2. Authority Headline with Pure Luxury Contrast */}
            <div className="space-y-2.5">
              <h1 className="font-display font-black text-2xl sm:text-3xl lg:text-[34px] xl:text-[38px] text-[#060B22] tracking-tight leading-[1.14]">
                Professional Web Design and Development Services for{" "}
                <span className="bg-gradient-to-r from-[#060B22] via-[#B87A00] to-[#E68A00] bg-clip-text text-transparent">
                  Growing Businesses.
                </span>
              </h1>

              {/* Subheading: Clear, Authentic Agency Messaging */}
              <div className="space-y-2 text-xs sm:text-[13px] text-slate-700 leading-relaxed font-normal max-w-xl">
                <p>
                  If you are searching for web design and development services to build or upgrade your business website, Hire Desi Marketer offers web design and development services that blend simple design ideas, up-to-date development tools and user-friendly experiences to make websites that fit your business goals.
                </p>
                <p>
                  From custom website design and website redesign services to ecommerce website development and CMS development, our team offers scalable and user-friendly website solutions. Whether you need a website or want to hire experienced web developers in India, we help turn your requirements into a good digital experience.
                </p>
              </div>
            </div>

            {/* 3. Live Engineering Telemetry Layer (Demonstrates Genuine Tech Craft on Mobile & Desktop) */}
            <div className="p-3 sm:p-3.5 rounded-2xl bg-white border border-[#E2DBD0] shadow-sm relative overflow-hidden group">
              <div className="flex items-center justify-between border-b border-slate-100 pb-2 mb-2 text-[10px] sm:text-[11px] font-bold text-slate-500">
                <div className="flex items-center gap-1.5 text-[#060B22]">
                  <Activity className="w-3.5 h-3.5 text-emerald-500 animate-pulse" />
                  <span>Verified Engineering Standards</span>
                </div>
                <div className="hidden sm:flex items-center gap-2 font-mono text-[10px] text-slate-400">
                  <span>Stack: Next.js 16 + React 19</span>
                  <span>•</span>
                  <span>Zero Bloat</span>
                </div>
              </div>

              {/* 4 Interactive Architecture Pillars with Micro-States */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 sm:gap-2">
                {ARCHITECTURE_PILLARS.map((pillar) => {
                  const isSelected = activeMetric === pillar.id;

                  return (
                    <button
                      key={pillar.id}
                      type="button"
                      onClick={() => setActiveMetric(pillar.id)}
                      className={cn(
                        "p-2 rounded-xl border text-left transition-all duration-200 cursor-pointer select-none flex flex-col justify-between min-h-[58px] sm:min-h-[64px]",
                        isSelected
                          ? "bg-[#060B22] text-white border-[#FFB020] shadow-xs ring-1 ring-[#FFB020]/30"
                          : "bg-slate-50/80 text-[#060B22] border-slate-200/80 hover:bg-white hover:border-[#FFB020]/60"
                      )}
                    >
                      <div className="flex items-center justify-between gap-1">
                        <div
                          className={cn(
                            "w-5 h-5 rounded-md flex items-center justify-center shrink-0",
                            isSelected
                              ? "bg-white/10 text-[#FFB020]"
                              : "bg-[#060B22]/5 text-[#060B22]"
                          )}
                        >
                          {pillar.icon}
                        </div>
                        <span
                          className={cn(
                            "text-[8.5px] sm:text-[9px] font-black uppercase tracking-wider px-1.5 py-0.2 rounded-full",
                            isSelected
                              ? "bg-[#FFB020] text-[#060B22]"
                              : "bg-white text-slate-500 border border-slate-200"
                          )}
                        >
                          {pillar.metric}
                        </span>
                      </div>
                      <div className="font-bold text-[10.5px] sm:text-[11px] leading-tight truncate mt-1">
                        {pillar.title.split("&")[0].trim()}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 4. Prominent Primary & Secondary CTAs */}
            <div className="pt-0.5 flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-3">
              <a
                href="#lead-form"
                className="btn-luxury-gold btn-shimmer py-2.5 sm:py-3 px-5 sm:px-6 rounded-xl text-xs font-black uppercase tracking-wider flex items-center justify-center gap-2 shadow-md hover:shadow-[0_0_25px_rgba(255,176,32,0.35)] transition-all cursor-pointer text-center"
              >
                <span>Get a Free Consultation &amp; Estimate</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>

              <div className="grid grid-cols-2 sm:flex items-center gap-2">
                <a
                  href="#services"
                  className="btn-luxury-navy py-2.5 sm:py-3 px-3 sm:px-4 rounded-xl text-[11px] sm:text-xs font-bold flex items-center justify-center gap-1.5 shadow-2xs border border-slate-700 hover:border-[#FFB020] transition-colors cursor-pointer text-center"
                >
                  <span>Explore Solutions</span>
                </a>

                <a
                  href="#engagement-models"
                  className="py-2.5 sm:py-3 px-3 sm:px-3.5 rounded-xl text-[11px] sm:text-xs font-bold text-slate-700 hover:text-[#060B22] bg-white border border-[#E2DBD0] hover:border-[#FFB020] flex items-center justify-center gap-1 shadow-2xs transition-all cursor-pointer text-center"
                >
                  <span>Engagement</span>
                </a>
              </div>
            </div>

            {/* 5. Clean Trust & Social Proof Row */}
            <div className="pt-2 border-t border-[#E2DBD0] flex flex-wrap items-center gap-3 sm:gap-5 text-[10.5px] sm:text-[11px] text-slate-600">
              <div className="flex items-center gap-1.5">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-3 h-3 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>
                <span className="font-bold text-[#060B22]">4.9 / 5.0</span>
                <span className="text-[10px] text-slate-500 font-normal">
                  (120+ Clients)
                </span>
              </div>
              <span className="text-slate-300 hidden sm:inline">•</span>
              <div className="flex items-center gap-1.5 font-semibold text-slate-700">
                <ShieldCheck className="w-3 h-3 text-emerald-600" />
                <span>100% Code Ownership</span>
              </div>
              <span className="text-slate-300 hidden sm:inline">•</span>
              <div className="flex items-center gap-1.5 font-semibold text-slate-700">
                <Clock className="w-3 h-3 text-[#B87A00]" />
                <span>&lt; 24h Proposal Turnaround</span>
              </div>
            </div>
          </div>

          {/* Right Column (5 cols): Compact, Complete Form in Single Window */}
          <div className="lg:col-span-5 relative mt-2 lg:mt-0">
            {/* Subtle Layered Floating Indicator (Visible on Desktop) */}
            <div className="hidden xl:flex items-center gap-2 absolute -top-3.5 right-6 px-3 py-1 rounded-full bg-[#060B22] text-[#FFB020] border border-[#FFB020]/30 shadow-md text-[10px] font-bold z-20 animate-float-subtle">
              <Code2 className="w-3 h-3 text-[#FFB020]" />
              <span>Full-Stack Development Squad</span>
            </div>

            <div className="relative z-10 shadow-[0_8px_30px_-6px_rgba(6,11,34,0.08)] rounded-2xl sm:rounded-3xl overflow-hidden border border-[#E2DBD0]">
              <WebDesignLeadForm
                formId="lead-form"
                sourceTag="Web Design Landing Page - Hero Form"
                title="Get a Free Website Consultation"
                subtitle="Share requirements & our technical architects will prepare a roadmap."
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

"use client";

import React from "react";
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
} from "lucide-react";
import { WebDesignLeadForm } from "./WebDesignLeadForm";

interface ArchitecturePillar {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
}

const ARCHITECTURE_PILLARS: ArchitecturePillar[] = [
  {
    icon: <Palette className="w-3.5 h-3.5 text-[#B87A00]" />,
    title: "Bespoke UI/UX & Code",
    subtitle: "Custom Figma wireframes to clean code",
  },
  {
    icon: <Zap className="w-3.5 h-3.5 text-[#B87A00]" />,
    title: "Sub-Second Performance",
    subtitle: "Core Web Vitals 95+ speed guaranteed",
  },
  {
    icon: <ShoppingBag className="w-3.5 h-3.5 text-[#B87A00]" />,
    title: "CMS & Modern Commerce",
    subtitle: "Shopify Plus, Webflow & custom WordPress",
  },
  {
    icon: <Users className="w-3.5 h-3.5 text-[#B87A00]" />,
    title: "Dedicated Dev Squad",
    subtitle: "Direct timezone overlap & fixed milestones",
  },
];

export function WebDesignHero() {
  return (
    <section className="relative overflow-hidden py-3 sm:py-5 lg:py-6 bg-[#F6F4EE] border-b border-[#E2DBD0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-8 items-center">
          {/* Left Column (7 cols): Snug, High-Impact Editorial Layout */}
          <div className="lg:col-span-7 space-y-3 sm:space-y-4 text-left">
            {/* 1. Prestige Agency Kicker */}
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
            <div className="space-y-2">
              <h1 className="font-display font-black text-2xl sm:text-3xl lg:text-[34px] xl:text-[38px] text-[#060B22] tracking-tight leading-[1.14]">
                The Right Design &amp; Development Talent for{" "}
                <span className="bg-gradient-to-r from-[#060B22] via-[#B87A00] to-[#E68A00] bg-clip-text text-transparent">
                  Your Industry &amp; Website.
                </span>
              </h1>

              {/* Subheading: Compact, Clear, Confident */}
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal max-w-xl">
                We engineer bespoke, conversion-focused websites and scalable digital platforms tailored to your business goals. From brand-new digital flagships to ongoing dedicated development, get senior engineering talent with real-time timezone alignment and zero agency bloat.
              </p>
            </div>

            {/* 3. Four Architecture Pillars (Unified Luxury Styling, Compact) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5 pt-0.5">
              {ARCHITECTURE_PILLARS.map((pillar, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2.5 p-2 sm:p-2.5 rounded-xl bg-white border border-[#E2DBD0] hover:border-[#FFB020] hover:shadow-2xs transition-all duration-200 text-left group"
                >
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-[#060B22] text-[#FFB020] border border-[#FFB020]/30 flex items-center justify-center shrink-0 group-hover:bg-[#FFB020] group-hover:text-[#060B22] transition-colors duration-200">
                    {pillar.icon}
                  </div>
                  <div className="min-w-0">
                    <span className="font-bold text-[11px] sm:text-xs text-[#060B22] block truncate">
                      {pillar.title}
                    </span>
                    <span className="text-[9.5px] sm:text-[10px] text-slate-500 block truncate">
                      {pillar.subtitle}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* 4. Strategic Secondary Actions */}
            <div className="pt-1 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5">
              <a
                href="#services"
                className="btn-luxury-navy py-2 px-4 rounded-xl text-xs font-bold flex items-center justify-center gap-2 shadow-2xs border border-slate-700 hover:border-[#FFB020] transition-colors cursor-pointer"
              >
                <span>Explore Full-Spectrum Solutions</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#FFB020]" />
              </a>

              <a
                href="#engagement-models"
                className="py-2 px-4 rounded-xl text-xs font-bold text-slate-700 hover:text-[#060B22] bg-white border border-[#E2DBD0] hover:border-[#FFB020] flex items-center justify-center gap-2 shadow-2xs transition-all cursor-pointer"
              >
                <span>View Engagement Models</span>
              </a>
            </div>

            {/* 5. Clean Trust & Social Proof Row */}
            <div className="pt-2 border-t border-[#E2DBD0] flex flex-wrap items-center gap-3 sm:gap-5 text-[11px] text-slate-600">
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
          <div className="lg:col-span-5 relative">
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

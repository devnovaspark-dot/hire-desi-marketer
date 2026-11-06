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
  Code2,
} from "lucide-react";
import { WebDesignLeadForm } from "./WebDesignLeadForm";

interface ArchitecturePillar {
  icon: React.ReactNode;
  iconBg: string;
  title: string;
  subtitle: string;
}

const ARCHITECTURE_PILLARS: ArchitecturePillar[] = [
  {
    icon: <Palette className="w-4 h-4 text-[#B87A00]" />,
    iconBg: "bg-amber-500/10 border-amber-500/20 text-[#B87A00]",
    title: "Custom UI/UX & Code",
    subtitle: "Bespoke Figma wireframes to clean semantic code",
  },
  {
    icon: <Zap className="w-4 h-4 text-emerald-600" />,
    iconBg: "bg-emerald-500/10 border-emerald-500/20 text-emerald-600",
    title: "Sub-Second Speed",
    subtitle: "Core Web Vitals 95+ speed benchmark verified",
  },
  {
    icon: <ShoppingBag className="w-4 h-4 text-indigo-600" />,
    iconBg: "bg-indigo-500/10 border-indigo-500/20 text-indigo-600",
    title: "CMS & E-Commerce",
    subtitle: "Tailored Shopify, Webflow & headless platforms",
  },
  {
    icon: <Users className="w-4 h-4 text-blue-600" />,
    iconBg: "bg-blue-500/10 border-blue-500/20 text-blue-600",
    title: "Dedicated Dev Squad",
    subtitle: "Real-time timezone overlap with zero lock-in",
  },
];

export function WebDesignHero() {
  return (
    <section className="relative overflow-hidden py-8 sm:py-12 lg:py-14 bg-[#F6F4EE]">
      {/* Subtle Luxury Ambient Gradient (Zero Cartoon Blobs) */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-gradient-to-b from-[#FFB020]/10 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column (7 cols): Editorial Typography, Pillar Grid, CTAs, Trust Proof */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6 text-left">
            {/* 1. Refined Agency Kicker */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white border border-[#E2DBD0] shadow-2xs">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-[11px] sm:text-xs font-bold text-[#060B22] uppercase tracking-wider">
                Bespoke Web Design &amp; Full-Stack Engineering
              </span>
              <span className="text-slate-300 hidden sm:inline">|</span>
              <span className="text-[10px] sm:text-[11px] font-semibold text-slate-500 hidden sm:inline">
                Live Global Delivery
              </span>
            </div>

            {/* 2. Authority Headline with Rich Molten Gold Highlight */}
            <div className="space-y-3">
              <h1 className="font-display font-black text-3xl sm:text-5xl lg:text-[44px] xl:text-[48px] text-[#060B22] tracking-tight leading-[1.12]">
                The Right Design &amp; Development Talent for{" "}
                <span className="relative inline-block">
                  <span className="relative z-10 bg-gradient-to-r from-[#B87A00] via-[#D97706] to-[#FFB020] bg-clip-text text-transparent">
                    Your Industry &amp; Website
                  </span>
                  <span className="absolute bottom-1.5 left-0 right-0 h-3 bg-[#FFB020]/25 -rotate-1 rounded-sm -z-0" />
                </span>
              </h1>

              {/* Subheading (Clear, Confident Value Proposition) */}
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal max-w-xl">
                We bring together senior UI/UX designers and technical architects to build high-performing digital flagships tailored to your industry, audience, and revenue goals — turning online traffic into paying clients.
              </p>
            </div>

            {/* 3. Four Architecture Pillars (Crisp 2x2, Zero Ellipsis Truncation) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 pt-1">
              {ARCHITECTURE_PILLARS.map((pillar, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 p-3 rounded-2xl bg-white border border-[#E2DBD0] hover:border-[#FFB020] hover:shadow-xs transition-all duration-200 group text-left"
                >
                  <div
                    className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 border transition-transform duration-200 group-hover:scale-105 ${pillar.iconBg}`}
                  >
                    {pillar.icon}
                  </div>
                  <div className="min-w-0">
                    <span className="font-bold text-xs sm:text-[13px] text-[#060B22] block truncate">
                      {pillar.title}
                    </span>
                    <span className="text-[10px] sm:text-[11px] text-slate-500 block truncate">
                      {pillar.subtitle}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* 4. Decisive CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a
                href="#lead-form"
                className="btn-luxury-gold btn-shimmer py-3.5 px-6 rounded-xl text-xs sm:text-sm font-black uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all cursor-pointer group"
              >
                <span>Get a Free Website Consultation</span>
                <ArrowRight className="w-4 h-4 text-[#060B22] group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#engagement-models"
                className="btn-luxury-navy py-3.5 px-5 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 shadow-sm border border-slate-700 hover:border-[#FFB020] transition-colors cursor-pointer"
              >
                <span>Explore Engagement Models</span>
              </a>
            </div>

            {/* 5. Clean Trust & Social Proof Row */}
            <div className="pt-4 border-t border-[#E2DBD0] flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-slate-600">
              <div className="flex items-center gap-1.5">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-3.5 h-3.5 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>
                <span className="font-bold text-[#060B22]">4.9 / 5.0</span>
                <span className="text-[11px] text-slate-500 font-normal">
                  (120+ Global Clients)
                </span>
              </div>
              <span className="text-slate-300 hidden sm:inline">•</span>
              <div className="flex items-center gap-1.5 font-semibold text-slate-700">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>100% Code Ownership</span>
              </div>
              <span className="text-slate-300 hidden sm:inline">•</span>
              <div className="flex items-center gap-1.5 font-semibold text-slate-700">
                <Clock className="w-3.5 h-3.5 text-[#B87A00]" />
                <span>24h Scope Turnaround</span>
              </div>
            </div>
          </div>

          {/* Right Column (5 cols): High-Impact Consultation Card Frame */}
          <div className="lg:col-span-5 relative">
            {/* Subtle Diffused Glow */}
            <div className="absolute -inset-1.5 bg-gradient-to-br from-[#FFB020]/20 via-transparent to-slate-900/10 rounded-3xl blur-xl opacity-70 pointer-events-none" />

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

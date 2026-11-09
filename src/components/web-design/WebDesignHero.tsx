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
    <section className="relative overflow-hidden w-full min-h-[calc(100svh-4.5rem)] lg:min-h-[calc(100vh-4.5rem)] flex flex-col justify-center py-2 sm:py-4 lg:py-4 bg-[#F6F4EE] border-b border-[#E2DBD0]">
      {/* Subtle Animated Background Gradients for Depth */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#FFB020]/10 rounded-full blur-3xl pointer-events-none animate-pulse duration-1000" />
      <div className="absolute bottom-10 right-1/3 w-80 h-80 bg-[#060B22]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full my-auto">
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
              <h1 className="font-display font-black text-2xl sm:text-3xl lg:text-[32px] xl:text-[36px] text-[#060B22] tracking-tight leading-[1.15]">
                Professional Web Design and Development Services for{" "}
                <span className="bg-gradient-to-r from-[#060B22] via-[#B87A00] to-[#E68A00] bg-clip-text text-transparent">
                  Growing Businesses.
                </span>
              </h1>

              {/* Subheading: Accurate & Clear Agency Messaging */}
              <div className="space-y-1.5 text-xs sm:text-[13px] text-slate-700 leading-relaxed font-normal max-w-xl">
                <p>
                  If you are searching for web design and development services to build or upgrade your business website, Hire Desi Marketer offers web design and development services that blend simple design ideas, up-to-date development tools and user-friendly experiences to make websites that fit your business goals.
                </p>
                <p>
                  From custom website design and website redesign services to ecommerce website development and CMS development, our team offers scalable and user-friendly website solutions. Whether you need a website or want to hire experienced web developers in India, we help turn your requirements into a good digital experience.
                </p>
              </div>
            </div>

            {/* 3. Four Architecture Pillars with Interactive Micro-States */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5 pt-0.5">
              {ARCHITECTURE_PILLARS.map((pillar) => {
                const isSelected = activeMetric === pillar.id;

                return (
                  <div
                    key={pillar.id}
                    onClick={() => setActiveMetric(pillar.id)}
                    className={cn(
                      "flex items-center justify-between gap-2.5 p-2 sm:p-2.5 rounded-xl border transition-all duration-200 text-left cursor-pointer group select-none",
                      isSelected
                        ? "bg-[#060B22] text-white border-[#FFB020] shadow-sm ring-2 ring-[#FFB020]/20"
                        : "bg-white text-[#060B22] border-[#E2DBD0] hover:border-[#FFB020]/60 hover:shadow-2xs"
                    )}
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div
                        className={cn(
                          "w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center shrink-0 transition-colors duration-200",
                          isSelected
                            ? "bg-white/10 text-[#FFB020] border border-white/15"
                            : "bg-[#060B22] text-[#FFB020] border border-[#FFB020]/30 group-hover:bg-[#FFB020] group-hover:text-[#060B22]"
                        )}
                      >
                        {pillar.icon}
                      </div>
                      <div className="min-w-0">
                        <span
                          className={cn(
                            "font-bold text-[11px] sm:text-xs block truncate",
                            isSelected ? "text-white" : "text-[#060B22]"
                          )}
                        >
                          {pillar.title}
                        </span>
                        <span
                          className={cn(
                            "text-[9.5px] sm:text-[10px] block truncate",
                            isSelected ? "text-slate-300" : "text-slate-500"
                          )}
                        >
                          {pillar.subtitle}
                        </span>
                      </div>
                    </div>

                    <span
                      className={cn(
                        "text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full shrink-0 border",
                        isSelected
                          ? "bg-[#FFB020] text-[#060B22] border-[#FFB020]"
                          : "bg-slate-50 text-slate-600 border-slate-200 group-hover:border-[#FFB020]/40"
                      )}
                    >
                      {pillar.metric}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* 4. Prominent Primary & Secondary CTAs */}
            <div className="pt-1 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5">
              <a
                href="#lead-form"
                className="btn-luxury-gold btn-shimmer py-2.5 px-5 rounded-xl text-xs font-black uppercase tracking-wider flex items-center justify-center gap-2 shadow-md hover:shadow-[0_0_25px_rgba(255,176,32,0.35)] transition-all cursor-pointer"
              >
                <span>Get a Free Consultation &amp; Estimate</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>

              <a
                href="#services"
                className="btn-luxury-navy py-2.5 px-4 rounded-xl text-xs font-bold flex items-center justify-center gap-2 shadow-2xs border border-slate-700 hover:border-[#FFB020] transition-colors cursor-pointer"
              >
                <span>Explore Website Solutions</span>
              </a>

              <a
                href="#engagement-models"
                className="py-2.5 px-3.5 rounded-xl text-xs font-bold text-slate-700 hover:text-[#060B22] bg-white border border-[#E2DBD0] hover:border-[#FFB020] flex items-center justify-center gap-1.5 shadow-2xs transition-all cursor-pointer"
              >
                <span>Engagement Models</span>
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

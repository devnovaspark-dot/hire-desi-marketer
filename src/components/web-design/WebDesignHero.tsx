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
  badge: string;
}

const ARCHITECTURE_PILLARS: ArchitecturePillar[] = [
  {
    id: "bespoke",
    icon: <Palette className="w-4 h-4 text-[#FFB020]" />,
    title: "Bespoke UI/UX & Code",
    subtitle: "Custom Figma wireframes to clean semantic code",
    badge: "100% Tailored",
  },
  {
    id: "speed",
    icon: <Zap className="w-4 h-4 text-[#FFB020]" />,
    title: "Sub-Second Performance",
    subtitle: "Core Web Vitals 95+ speed benchmark guaranteed",
    badge: "< 0.8s LCP",
  },
  {
    id: "commerce",
    icon: <ShoppingBag className="w-4 h-4 text-[#FFB020]" />,
    title: "CMS & Modern Commerce",
    subtitle: "Shopify Plus, Webflow & custom WordPress",
    badge: "Headless & Native",
  },
  {
    id: "squad",
    icon: <Users className="w-4 h-4 text-[#FFB020]" />,
    title: "Dedicated Dev Squad",
    subtitle: "Direct timezone overlap with fixed sprint delivery",
    badge: "Real-Time Sync",
  },
];

export function WebDesignHero() {
  const [activePillar, setActivePillar] = useState<string>("speed");

  return (
    <section className="relative overflow-hidden w-full min-h-auto lg:min-h-[calc(100vh-4.5rem)] flex flex-col justify-center py-6 sm:py-8 lg:py-6 bg-[#F6F4EE] bg-[radial-gradient(#E2DBD0_1px,transparent_1px)] [background-size:24px_24px] border-b border-[#E2DBD0]">
      {/* Luxury Ambient Lighting Glows */}
      <div className="absolute top-10 left-8 sm:left-20 w-80 sm:w-[480px] h-80 sm:h-[480px] bg-[#FFB020]/15 rounded-full blur-[100px] pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-10 right-10 sm:right-32 w-72 sm:w-[400px] h-72 sm:h-[400px] bg-[#060B22]/8 rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 xl:gap-10 items-center">
          {/* Left Column (7 cols): Editorial Typography, Storytelling & Visual Craft */}
          <div className="lg:col-span-7 space-y-3.5 sm:space-y-4 text-left">
            {/* 1. Prestige Agency Live Overlap Kicker */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md border border-[#E2DBD0] shadow-2xs">
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
                Professional Web Design and Development Services for{" "}
                <span className="bg-gradient-to-r from-[#B87A00] via-[#FFB020] to-[#E68A00] bg-clip-text text-transparent">
                  Growing Businesses.
                </span>
              </h1>

              {/* Subheading: Authentic & Approved Agency Messaging */}
              <div className="space-y-1.5 text-xs sm:text-[13px] text-slate-700 leading-relaxed font-normal max-w-xl">
                <p>
                  If you are searching for web design and development services to build or upgrade your business website, Hire Desi Marketer offers web design and development services that blend simple design ideas, up-to-date development tools and user-friendly experiences to make websites that fit your business goals.
                </p>
                <p>
                  From custom website design and website redesign services to ecommerce website development and CMS development, our team offers scalable and user-friendly website solutions. Whether you need a website or want to hire experienced web developers in India, we help turn your requirements into a good digital experience.
                </p>
              </div>
            </div>

            {/* 3. Four Architecture Pillars with Clean Tactile Card Styling */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5 pt-0.5">
              {ARCHITECTURE_PILLARS.map((pillar) => {
                const isSelected = activePillar === pillar.id;

                return (
                  <div
                    key={pillar.id}
                    onClick={() => setActivePillar(pillar.id)}
                    className={cn(
                      "flex items-center justify-between gap-2.5 p-2.5 rounded-xl border transition-all duration-200 text-left cursor-pointer select-none group shadow-2xs",
                      isSelected
                        ? "bg-[#060B22] text-white border-[#FFB020] shadow-sm ring-2 ring-[#FFB020]/20"
                        : "bg-white text-[#060B22] border-[#E2DBD0] hover:border-[#FFB020]/60 hover:shadow-xs"
                    )}
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div
                        className={cn(
                          "w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-colors duration-200",
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
                      {pillar.badge}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* 4. Strategic Non-Conflicting CTAs (No Duplicate Consultation Buttons!) */}
            <div className="pt-1 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5">
              <a
                href="#services"
                className="btn-luxury-navy py-2.5 px-5 rounded-xl text-xs font-bold flex items-center justify-center gap-2 shadow-sm border border-slate-700 hover:border-[#FFB020] transition-colors cursor-pointer text-center"
              >
                <span>Explore Full-Spectrum Solutions</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#FFB020]" />
              </a>

              <a
                href="#engagement-models"
                className="py-2.5 px-4 rounded-xl text-xs font-bold text-slate-700 hover:text-[#060B22] bg-white border border-[#E2DBD0] hover:border-[#FFB020] flex items-center justify-center gap-1.5 shadow-2xs transition-all cursor-pointer text-center"
              >
                <span>View Engagement Models</span>
              </a>

              <div className="hidden xl:flex items-center gap-1.5 text-[11px] font-bold text-slate-500 pl-1">
                <span>Or submit your scope on the right</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#B87A00] animate-pulse" />
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

          {/* Right Column (5 cols): High-Impact Agency Consultation Terminal */}
          <div className="lg:col-span-5 relative mt-1 lg:mt-0">
            {/* Elegant Agency Terminal Header Indicator */}
            <div className="shadow-[0_12px_40px_-8px_rgba(6,11,34,0.12)] rounded-2xl sm:rounded-3xl overflow-hidden border border-[#E2DBD0] bg-white relative">
              {/* Terminal Top Dispatch Bar */}
              <div className="bg-[#060B22] text-white px-3.5 sm:px-4 py-2 border-b border-white/10 flex items-center justify-between text-[10px] sm:text-[11px]">
                <div className="flex items-center gap-2 font-bold text-slate-200">
                  <span className="flex h-2 w-2 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                  </span>
                  <span>Senior Web Architecture Squad Online</span>
                </div>
                <span className="text-[9.5px] font-mono text-[#FFB020] bg-white/10 px-2 py-0.5 rounded-full border border-white/10 hidden sm:inline">
                  24h Scope Delivery
                </span>
              </div>

              <WebDesignLeadForm
                formId="lead-form"
                sourceTag="Web Design Landing Page - Hero Form"
                title="Get a Free Website Consultation"
                subtitle="Share requirements & our technical architects will prepare an actionable roadmap."
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

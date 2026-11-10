"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Layers,
  Code2,
  FileCheck,
  Rocket,
  Wrench,
  Search,
  PenTool,
  Pause,
  Play,
  Clock,
  ShieldCheck,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface ProcessPhase {
  step: number;
  number: string;
  title: string;
  tag: string;
  duration: string;
  headline: string;
  description: string;
  deliverables: string[];
  visualMetric: string;
}

const PHASES: ProcessPhase[] = [
  {
    step: 1,
    number: "01",
    title: "Discovery & Scope",
    tag: "Foundation & Architecture",
    duration: "1–2 Days",
    headline: "Aligning Business Goals, User Journeys & Technical Requirements",
    description:
      "We unpack your commercial objectives, map competitor benchmarks, and produce a detailed sitemap wireflow and fixed milestone scope.",
    deliverables: [
      "Technical requirements specification",
      "Sitemap hierarchy & user conversion paths",
      "Fixed milestone timeline & sprint plan",
    ],
    visualMetric: "100% Scope Certainty",
  },
  {
    step: 2,
    number: "02",
    title: "Planning & Strategy",
    tag: "Blueprint & Tech Selection",
    duration: "2–3 Days",
    headline: "Architecting Frameworks, Schemas & SEO Preservation Safeguards",
    description:
      "We select optimal stacks (Next.js, Shopify, or Custom CMS), draft data schemas, and map comprehensive 301 redirect tables to protect search rankings.",
    deliverables: [
      "Technology stack & hosting blueprint",
      "301 SEO URL redirect safeguard map",
      "Content strategy & conversion funnel wireframe",
    ],
    visualMetric: "Zero SEO Loss Guaranteed",
  },
  {
    step: 3,
    number: "03",
    title: "UI/UX Design",
    tag: "Figma Prototypes & Systems",
    duration: "4–6 Days",
    headline: "Crafting Pixel-Perfect Interactive Prototypes in Figma",
    description:
      "Our senior designers build custom design systems, color tokens, and clickable desktop/mobile Figma prototypes for stakeholder sign-off.",
    deliverables: [
      "Full Figma design system & typography tokens",
      "Interactive clickable mobile & desktop prototypes",
      "Accessibility & WCAG contrast verification",
    ],
    visualMetric: "Figma Clickable Prototype",
  },
  {
    step: 4,
    number: "04",
    title: "Development",
    tag: "Clean Code Engineering",
    duration: "1–2 Weeks",
    headline: "Building with Clean Next.js 16, React 19 & Semantic Code",
    description:
      "Our developers engineer modular, component-driven frontends connected to secure APIs and CMS backends with continuous staging review links.",
    deliverables: [
      "Live password-protected staging URL",
      "Clean semantic HTML5 & Next.js 16 components",
      "API, CRM, and payment gateway integrations",
    ],
    visualMetric: "Live Daily Staging URLs",
  },
  {
    step: 5,
    number: "05",
    title: "QA & Verification",
    tag: "Cross-Device Testing",
    duration: "3–4 Days",
    headline: "Rigorous Speed Audits, Security Hardening & Device QA",
    description:
      "We test across real devices, modern browsers, form notification pipelines, and guarantee 95+ Core Web Vitals speed scores.",
    deliverables: [
      "Cross-browser testing (Chrome, Safari, iOS, Android)",
      "Core Web Vitals 95+ audit & remediation",
      "SSL, CSP headers & security penetration checks",
    ],
    visualMetric: "95+ Core Web Vitals Audit",
  },
  {
    step: 6,
    number: "06",
    title: "Deployment & Launch",
    tag: "Flawless Go-Live",
    duration: "1 Day",
    headline: "Zero-Downtime Production Deployment & Analytics Verification",
    description:
      "We manage DNS propagation, install Google Tag Manager & GA4 conversion tracking, and submit live sitemaps to Google Search Console.",
    deliverables: [
      "Zero-downtime production server switchover",
      "Google Tag Manager & GA4 event verification",
      "Google Search Console sitemap submission",
    ],
    visualMetric: "Zero-Downtime Deployment",
  },
  {
    step: 7,
    number: "07",
    title: "Ongoing Partnership",
    tag: "Long-Term Growth",
    duration: "Ongoing",
    headline: "30-Day Post-Launch Warranty, Security Patches & Scaling",
    description:
      "We protect your investment with a 30-day post-launch bug-fix warranty, continuous core updates, and dedicated on-demand developer support.",
    deliverables: [
      "30-day post-launch warranty & bug fixes",
      "Proactive security updates & cloud backups",
      "Dedicated Slack/Teams communication channel",
    ],
    visualMetric: "30-Day Warranty Included",
  },
];

export function WebDesignProcessStream() {
  const [activeStepIdx, setActiveStepIdx] = useState<number>(2);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [progressPercent, setProgressPercent] = useState<number>(0);

  const activePhase = PHASES[activeStepIdx];

  // Auto-advance process phases with pause on hover
  useEffect(() => {
    if (isPaused) return;

    const intervalStep = 60;
    const totalDuration = 5000;
    const increment = (intervalStep / totalDuration) * 100;

    const timer = setInterval(() => {
      setProgressPercent((prev) => {
        if (prev >= 100) {
          setActiveStepIdx((current) =>
            current < PHASES.length - 1 ? current + 1 : 0
          );
          return 0;
        }
        return prev + increment;
      });
    }, intervalStep);

    return () => clearInterval(timer);
  }, [isPaused, activeStepIdx]);

  const handleSelectPhase = (idx: number) => {
    setActiveStepIdx(idx);
    setProgressPercent(0);
  };

  return (
    <div
      className="space-y-6 sm:space-y-8 max-w-7xl mx-auto text-left"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* 1. Large Horizontal Interactive Timeline Track */}
      <div className="relative pb-3">
        {/* Background Track Line */}
        <div className="absolute top-5 left-4 right-4 h-1 bg-[#E2DBD0] rounded-full hidden lg:block" />

        {/* Moving Glowing Progress Indicator */}
        <div
          className="absolute top-5 left-4 h-1 bg-gradient-to-r from-[#060B22] via-[#FFB020] to-[#E68A00] rounded-full transition-all duration-300 hidden lg:block"
          style={{
            width: `${(activeStepIdx / (PHASES.length - 1)) * 96}%`,
          }}
        />

        {/* Phase Buttons */}
        <div className="flex items-center justify-start lg:justify-between gap-2 overflow-x-auto pb-2 no-scrollbar relative z-10">
          {PHASES.map((phase, idx) => {
            const isSelected = idx === activeStepIdx;
            const isPast = idx < activeStepIdx;

            return (
              <button
                key={phase.step}
                type="button"
                onClick={() => handleSelectPhase(idx)}
                className={cn(
                  "flex items-center gap-2 px-3.5 py-2 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer select-none shrink-0 border",
                  isSelected
                    ? "bg-[#060B22] text-[#FFB020] border-[#FFB020] shadow-sm ring-2 ring-[#FFB020]/25 scale-102 font-black"
                    : isPast
                    ? "bg-[#FAF8F5] text-slate-700 border-slate-300"
                    : "bg-white text-slate-500 border-[#E2DBD0] hover:border-slate-400"
                )}
              >
                <span className="font-mono text-[10px] text-[#FFB020]">{phase.number}</span>
                <span>{phase.title}</span>
                {isSelected && (
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* 2. Immersive Visual Journey Stage (Card-Free Canvas) */}
      <div className="rounded-2xl sm:rounded-3xl bg-white border border-[#E2DBD0] shadow-sm overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
          {/* Left Column (7 cols): Large Visual Milestone Canvas */}
          <div className="lg:col-span-7 p-5 sm:p-7 lg:p-8 bg-[#FAF8F5] border-b lg:border-b-0 lg:border-r border-[#E2DBD0] flex flex-col justify-between space-y-5">
            <div className="space-y-3">
              <div className="flex items-center justify-between gap-2">
                <span className="text-[10px] font-black uppercase tracking-wider text-[#B87A00] bg-[#FFB020]/15 px-2.5 py-0.5 rounded-full border border-[#FFB020]/30">
                  {activePhase.tag}
                </span>

                <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-slate-500">
                  <Clock className="w-3.5 h-3.5 text-[#B87A00]" />
                  <span>Timeline: {activePhase.duration}</span>
                </div>
              </div>

              <div className="space-y-1">
                <div className="font-mono text-xs font-black text-slate-400">
                  Sprint Phase {activePhase.number} of 07
                </div>
                <h3 className="font-display font-black text-xl sm:text-2xl text-[#0B1B3A] tracking-tight leading-snug">
                  {activePhase.headline}
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                {activePhase.description}
              </p>
            </div>

            {/* Visual Progress Bar Strip */}
            <div className="p-3.5 rounded-2xl bg-white border border-[#E2DBD0] flex items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span className="font-bold text-[#060B22]">{activePhase.visualMetric}</span>
              </div>
              <span className="text-[10px] font-mono text-slate-400">
                Loom Video Demos Included
              </span>
            </div>
          </div>

          {/* Right Column (5 cols): Milestone Deliverables & Direct CTA */}
          <div className="lg:col-span-5 p-5 sm:p-7 lg:p-8 flex flex-col justify-between space-y-5">
            <div className="space-y-3">
              <div className="text-[10px] font-black uppercase tracking-wider text-slate-700">
                Phase Deliverables &amp; Artifacts:
              </div>

              <div className="space-y-2 text-xs text-slate-700">
                {activePhase.deliverables.map((item, i) => (
                  <div key={i} className="flex items-start gap-2.5 p-2 rounded-xl bg-[#FAF8F5] border border-[#E2DBD0]/60">
                    <CheckCircle2 className="w-4 h-4 text-[#FFB020] shrink-0 mt-0.5" />
                    <span className="font-medium text-[11.5px] leading-snug">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Direct Action Button */}
            <div className="pt-3 border-t border-slate-100">
              <Link
                href="/get-a-quote"
                className="btn-luxury-gold btn-shimmer w-full py-3 px-5 rounded-xl text-xs font-black uppercase tracking-wider flex items-center justify-center gap-2 shadow-xs cursor-pointer text-center"
              >
                <span>Request Project Timeline &amp; Scope</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

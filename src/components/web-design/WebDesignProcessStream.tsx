"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import {
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Clock,
  ShieldCheck,
  Search,
  Layers,
  PenTool,
  Code2,
  Rocket,
  Lock,
  Terminal,
  Activity,
  Zap,
  ChevronLeft,
  ChevronRight,
  MessageSquare,
  FileCheck,
} from "lucide-react";
import { cn } from "@/lib/utils";
import StarBorder from "@/components/ui/StarBorder";
import RotatingCards, {
  RotatingCardsHandle,
  RotatingCardItem,
} from "@/components/ui/RotatingCards";

interface ProcessPhase {
  step: number;
  number: string;
  title: string;
  shortTag: string;
  tag: string;
  duration: string;
  icon: React.ComponentType<{ className?: string }>;
  gradient: string;
  accentColor: string;
  headline: string;
  summary: string;
  deliverables: string[];
  slaMetric: string;
  renderArtifact: () => React.ReactNode;
}

const PHASES: ProcessPhase[] = [
  {
    step: 1,
    number: "01",
    title: "Discovery & Scope",
    shortTag: "Discovery",
    tag: "Sprint 01 · Foundation Spec",
    duration: "1–2 Days",
    icon: Search,
    gradient: "from-amber-500/30 via-[#081232] to-[#060B22]",
    accentColor: "#FFB020",
    headline: "Commercial Objective Mapping & Sitemap Architecture",
    summary:
      "We align on your revenue targets, map the complete page hierarchy, and lock in milestone deliverables with zero ambiguity or scope creep.",
    deliverables: [
      "Comprehensive Sitemap & Wireflow Spec",
      "Fixed Milestones & Sprints Timeline",
      "Tech Stack & Cloud Hosting Approval",
    ],
    slaMetric: "100% Scope Certainty SLA",
    renderArtifact: () => (
      <div className="space-y-3 font-mono text-xs">
        <div className="flex items-center justify-between pb-2 border-b border-white/10 text-[11px] text-slate-400">
          <span>SITEMAP ARCHITECTURE SPECIFICATION</span>
          <span className="text-emerald-400 font-bold flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            ● SCOPE LOCKED
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-1">
          <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-left space-y-1.5 hover:border-[#FFB020]/40 transition-colors">
            <div className="text-[10px] text-[#FFB020] font-bold">01 · Root Engine</div>
            <div className="text-white font-bold text-xs">/ (Homepage)</div>
            <div className="text-[10px] text-slate-400">Hero + Proof + Dual CTAs</div>
            <span className="inline-block text-[9px] px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-bold">Approved</span>
          </div>

          <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-left space-y-1.5 hover:border-[#FFB020]/40 transition-colors">
            <div className="text-[10px] text-[#FFB020] font-bold">02 · Solutions Hub</div>
            <div className="text-white font-bold text-xs">/services/*</div>
            <div className="text-[10px] text-slate-400">6 Bespoke Service Silos</div>
            <span className="inline-block text-[9px] px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-bold">Approved</span>
          </div>

          <div className="p-3 rounded-xl bg-[#FFB020]/10 border border-[#FFB020]/40 text-left space-y-1.5 shadow-inner">
            <div className="text-[10px] text-[#FFB020] font-bold">03 · Lead Funnel</div>
            <div className="text-white font-bold text-xs">/get-a-quote</div>
            <div className="text-[10px] text-emerald-300">1-Tap Conversion API</div>
            <span className="inline-block text-[9px] px-1.5 py-0.5 rounded bg-[#FFB020]/20 text-[#FFB020] font-bold">Locked Spec</span>
          </div>
        </div>

        <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-between text-[11px]">
          <span className="text-slate-300">Milestone Roadmap: 7 Sprints Scheduled</span>
          <span className="text-[#FFB020] font-bold">Signed Spec Deed ✓</span>
        </div>
      </div>
    ),
  },
  {
    step: 2,
    number: "02",
    title: "Planning & Strategy",
    shortTag: "Strategy",
    tag: "Sprint 02 · Blueprint & SEO Map",
    duration: "2–3 Days",
    icon: Layers,
    gradient: "from-sky-500/30 via-[#081232] to-[#060B22]",
    accentColor: "#38BDF8",
    headline: "Framework Blueprint & 1:1 SEO Safeguard Mapping",
    summary:
      "We select the optimal tech stack, map structured data schemas, and configure 1:1 301 redirects so your Google keyword rankings never drop.",
    deliverables: [
      "Next.js / Shopify / CMS Architecture Plan",
      "Strict 1:1 SEO 301 Redirect Safeguard Map",
      "Schema.org Structured Data Blueprint",
    ],
    slaMetric: "Zero SEO Drop Guaranteed",
    renderArtifact: () => (
      <div className="space-y-3 font-mono text-xs">
        <div className="flex items-center justify-between pb-2 border-b border-white/10 text-[11px] text-slate-400">
          <span>SEO 301 REDIRECT SAFEGUARD CONSOLE</span>
          <span className="text-emerald-400 font-bold flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            ● RANKINGS PROTECTED
          </span>
        </div>

        <div className="space-y-2 text-left text-[11px]">
          <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
            <span className="text-slate-400 truncate">old-site.com/services/*</span>
            <span className="text-emerald-400 font-bold">➔ /services [301 Permanent]</span>
          </div>
          <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
            <span className="text-slate-400 truncate">old-site.com/contact-us</span>
            <span className="text-emerald-400 font-bold">➔ /get-a-quote [301 Permanent]</span>
          </div>
        </div>

        <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-between text-[11px]">
          <span className="text-slate-300">Google Domain Authority Retained:</span>
          <span className="text-emerald-400 font-bold">100% Equity Safe</span>
        </div>
      </div>
    ),
  },
  {
    step: 3,
    number: "03",
    title: "UI/UX Design",
    shortTag: "Design",
    tag: "Sprint 03 · Figma Prototypes",
    duration: "4–6 Days",
    icon: PenTool,
    gradient: "from-purple-500/30 via-[#081232] to-[#060B22]",
    accentColor: "#A855F7",
    headline: "Pixel-Perfect Figma Prototypes & Design Tokens",
    summary:
      "Senior designers craft bespoke wireframes and clickable desktop & mobile prototypes tailored to your brand, with revisions until you are 100% satisfied.",
    deliverables: [
      "Custom Figma Design System & Typography Kit",
      "Interactive Clickable Desktop & Mobile Flows",
      "WCAG 2.1 AA Accessibility Signoff",
    ],
    slaMetric: "Clickable Figma Prototype Signoff",
    renderArtifact: () => (
      <div className="space-y-3 font-mono text-xs">
        <div className="flex items-center justify-between pb-2 border-b border-white/10 text-[11px] text-slate-400">
          <span>FIGMA PRODUCTION DESIGN SYSTEM</span>
          <span className="text-[#FFB020] font-bold">● 100% BESPOKE</span>
        </div>

        <div className="grid grid-cols-3 gap-2.5">
          <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-left space-y-1">
            <div className="w-6 h-6 rounded-lg bg-[#060B22] border border-white/30 shadow-xs" />
            <div className="text-[10px] text-white font-bold">#060B22</div>
            <div className="text-[9px] text-slate-400">Midnight Navy</div>
          </div>

          <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-left space-y-1">
            <div className="w-6 h-6 rounded-lg bg-[#FFB020] border border-white/30 shadow-xs" />
            <div className="text-[10px] text-white font-bold">#FFB020</div>
            <div className="text-[9px] text-slate-400">Signature Gold</div>
          </div>

          <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-left space-y-1">
            <div className="w-6 h-6 rounded-lg bg-[#FAF8F5] border border-white/30 shadow-xs" />
            <div className="text-[10px] text-white font-bold">#FAF8F5</div>
            <div className="text-[9px] text-slate-400">Ivory Studio</div>
          </div>
        </div>

        <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-between text-[11px]">
          <span className="text-slate-300">Responsive Viewports Tested:</span>
          <span className="text-emerald-400 font-bold">Desktop + Tablet + Mobile ✓</span>
        </div>
      </div>
    ),
  },
  {
    step: 4,
    number: "04",
    title: "Development",
    shortTag: "Engineering",
    tag: "Sprint 04 · Next.js & APIs",
    duration: "1–2 Weeks",
    icon: Code2,
    gradient: "from-blue-600/30 via-[#081232] to-[#060B22]",
    accentColor: "#3B82F6",
    headline: "Modular Full-Stack Next.js 16 Engineering",
    summary:
      "Clean, maintainable components built with Next.js 16, headless CMS integration, third-party API webhooks, and live staging preview builds.",
    deliverables: [
      "Live Passworded Staging URL",
      "Next.js 16 Server Components Architecture",
      "Automated API, Payment & CRM Webhooks",
    ],
    slaMetric: "Daily Live Staging Builds",
    renderArtifact: () => (
      <div className="space-y-3 font-mono text-xs">
        <div className="flex items-center justify-between pb-2 border-b border-white/10 text-[11px] text-slate-400">
          <span>LIVE STAGING ENVIRONMENT &amp; GIT STREAM</span>
          <span className="text-emerald-400 font-bold flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            ● BUILD PASSING
          </span>
        </div>

        <div className="p-3 rounded-xl bg-black/60 border border-white/10 text-left space-y-1.5 text-[11px]">
          <div className="text-slate-400 flex items-center gap-1.5">
            <Terminal className="w-3.5 h-3.5 text-emerald-400" />
            <span>▲ Next.js 16.4.1 (Turbopack) build --production</span>
          </div>
          <div className="text-emerald-400 font-bold">✓ Prerendered 16/16 routes in 1.8s</div>
          <div className="text-slate-400 text-[10px]">branch: main (Day-One Client GitHub Access)</div>
        </div>

        <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-between text-[11px]">
          <span className="text-slate-300">Live Preview Link:</span>
          <span className="text-[#FFB020] font-bold flex items-center gap-1">
            <Lock className="w-3 h-3 text-[#FFB020]" />
            sprint-04.hdm.staging
          </span>
        </div>
      </div>
    ),
  },
  {
    step: 5,
    number: "05",
    title: "QA & Verification",
    shortTag: "QA Testing",
    tag: "Sprint 05 · Speed & Vitals",
    duration: "3–4 Days",
    icon: Activity,
    gradient: "from-emerald-500/30 via-[#081232] to-[#060B22]",
    accentColor: "#10B981",
    headline: "Speed Hardening & Google Core Web Vitals Audit",
    summary:
      "Rigorous cross-device testing, speed remediation for green 95+ Core Web Vitals, zero layout shifts, and form notification delivery verification.",
    deliverables: [
      "Google Core Web Vitals 95+ Score Audit",
      "Cross-Browser (Safari, Chrome, iOS) QA Pass",
      "SSL & Security Penetration Validation",
    ],
    slaMetric: "95+ Core Web Vitals SLA",
    renderArtifact: () => (
      <div className="space-y-3 font-mono text-xs">
        <div className="flex items-center justify-between pb-2 border-b border-white/10 text-[11px] text-slate-400">
          <span>GOOGLE PAGESPEED AUDIT BENCHMARK</span>
          <span className="text-emerald-400 font-bold">● GRADE A+ VERIFIED</span>
        </div>

        <div className="grid grid-cols-4 gap-2 text-center">
          <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 space-y-0.5">
            <div className="text-emerald-400 font-black text-base">99</div>
            <div className="text-[9px] text-slate-300 uppercase tracking-wider">Speed</div>
          </div>
          <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 space-y-0.5">
            <div className="text-emerald-400 font-black text-base">100</div>
            <div className="text-[9px] text-slate-300 uppercase tracking-wider">Access.</div>
          </div>
          <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 space-y-0.5">
            <div className="text-emerald-400 font-black text-base">100</div>
            <div className="text-[9px] text-slate-300 uppercase tracking-wider">Best Prac.</div>
          </div>
          <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 space-y-0.5">
            <div className="text-emerald-400 font-black text-base">100</div>
            <div className="text-[9px] text-slate-300 uppercase tracking-wider">SEO</div>
          </div>
        </div>

        <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-between text-[11px]">
          <span className="text-slate-300">Largest Contentful Paint:</span>
          <span className="text-emerald-400 font-bold">&lt; 0.58s Initial Paint ✓</span>
        </div>
      </div>
    ),
  },
  {
    step: 6,
    number: "06",
    title: "Deployment & Launch",
    shortTag: "Go-Live",
    tag: "Sprint 06 · Production Launch",
    duration: "1 Day",
    icon: Rocket,
    gradient: "from-rose-500/30 via-[#081232] to-[#060B22]",
    accentColor: "#F43F5E",
    headline: "Zero-Downtime Server Cutover & Analytics Validation",
    summary:
      "Global edge DNS propagation, Google Tag Manager container setup, GA4 conversion event verification, and live Google Search Console sitemap indexing.",
    deliverables: [
      "Zero-Downtime Cloudflare DNS Cutover",
      "Google Tag Manager & GA4 Event Tracking",
      "Google Search Console Sitemap Indexing",
    ],
    slaMetric: "Zero-Downtime Deployment SLA",
    renderArtifact: () => (
      <div className="space-y-3 font-mono text-xs">
        <div className="flex items-center justify-between pb-2 border-b border-white/10 text-[11px] text-slate-400">
          <span>EDGE DNS CUTOVER &amp; ANALYTICS STREAM</span>
          <span className="text-emerald-400 font-bold flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            ● 100% LIVE
          </span>
        </div>

        <div className="space-y-2 text-left text-[11px]">
          <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
            <span className="text-slate-300">Global DNS Cutover:</span>
            <span className="text-emerald-400 font-bold">Zero Downtime (0.00s)</span>
          </div>
          <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
            <span className="text-slate-300">GTM Container:</span>
            <span className="text-[#FFB020] font-bold">GTM-5RS9F324 Verified ✓</span>
          </div>
        </div>

        <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-between text-[11px]">
          <span className="text-slate-300">Production SSL Encryption:</span>
          <span className="text-emerald-400 font-bold">TLS 1.3 Active</span>
        </div>
      </div>
    ),
  },
  {
    step: 7,
    number: "07",
    title: "Warranty & SLA",
    shortTag: "Support",
    tag: "Sprint 07 · Ongoing SLA",
    duration: "30 Days+",
    icon: MessageSquare,
    gradient: "from-amber-600/30 via-[#081232] to-[#060B22]",
    accentColor: "#F59E0B",
    headline: "30-Day Full Warranty & Dedicated Architect SLA",
    summary:
      "30-day post-launch bug warranty, scheduled cloud backups, security patches, and direct developer communication in your private Slack/Teams channel.",
    deliverables: [
      "30-Day Full Bug-Fix Guarantee",
      "Direct Client Slack Channel (< 15m SLA)",
      "Daily Cloud Backups & Security Patches",
    ],
    slaMetric: "30-Day Warranty Included",
    renderArtifact: () => (
      <div className="space-y-3 font-mono text-xs">
        <div className="flex items-center justify-between pb-2 border-b border-white/10 text-[11px] text-slate-400">
          <span>VIP CLIENT SLACK CHANNEL &amp; WARRANTY DEED</span>
          <span className="text-emerald-400 font-bold flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            ● ACTIVE CARE
          </span>
        </div>

        <div className="space-y-2 text-left text-[11px]">
          <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
            <span className="text-slate-300">Private Channel:</span>
            <span className="text-[#FFB020] font-bold">#hdm-client-direct</span>
          </div>
          <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
            <span className="text-slate-300">Emergency SLA Response:</span>
            <span className="text-emerald-400 font-bold">&lt; 15 Minutes</span>
          </div>
        </div>

        <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-between text-[11px]">
          <span className="text-slate-300">Code Repository Access:</span>
          <span className="text-white font-bold">100% Client IP Owned ✓</span>
        </div>
      </div>
    ),
  },
];

export function WebDesignProcessStream() {
  const [activeStepIdx, setActiveStepIdx] = useState<number>(0);
  const rotatingCardsRef = useRef<RotatingCardsHandle>(null);

  const activePhase = PHASES[activeStepIdx] || PHASES[0];
  const IconComponent = activePhase.icon;

  // Format 7 cards for RotatingCards 3D Ring
  const ROTATING_CARD_ITEMS: RotatingCardItem[] = PHASES.map((phase, idx) => ({
    id: phase.step,
    number: phase.number,
    title: phase.title,
    subtitle: phase.headline,
    badge: phase.duration,
    tag: phase.slaMetric,
    content: (
      <div
        className={cn(
          "w-full h-full p-6 sm:p-7 rounded-3xl bg-gradient-to-b from-[#0B1536] via-[#081232] to-[#040818] border-2 shadow-2xl flex flex-col justify-between text-left select-none relative overflow-hidden transition-all duration-300",
          idx === activeStepIdx
            ? "border-[#FFB020] ring-2 ring-[#FFB020]/60 shadow-[0_25px_60px_-10px_rgba(255,176,32,0.35)] scale-102"
            : "border-[#FFB020]/30 hover:border-[#FFB020]/60 shadow-[0_20px_45px_-12px_rgba(6,11,34,0.45)]"
        )}
      >
        {/* Top Metallic Bevel Edge */}
        <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#FFB020]/60 to-transparent pointer-events-none" />

        {/* Subtle ambient corner light */}
        <div className="absolute -top-10 -right-10 w-28 h-28 bg-[#FFB020]/15 rounded-full blur-xl pointer-events-none" />

        {/* Top: Sprint Number & Duration Badge */}
        <div className="flex items-center justify-between z-10">
          <span className="font-mono text-3xl sm:text-4xl font-black text-[#FFB020] tracking-tight">
            {phase.number}
          </span>
          <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-full bg-white/10 text-white border border-white/20 backdrop-blur-sm shadow-xs">
            {phase.duration}
          </span>
        </div>

        {/* Center: Phase Icon, Title & Tag */}
        <div className="z-10 space-y-2">
          <div className="w-10 h-10 rounded-xl bg-white/10 border border-[#FFB020]/30 flex items-center justify-center text-[#FFB020] shadow-sm">
            <phase.icon className="w-5 h-5" />
          </div>
          <div className="font-display font-black text-lg sm:text-xl text-white tracking-tight leading-snug">
            {phase.title}
          </div>
          <div className="text-[11px] text-slate-300 line-clamp-2 font-normal leading-relaxed">
            {phase.summary}
          </div>
        </div>

        {/* Bottom: SLA Metric Bar */}
        <div className="z-10 pt-3 border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-slate-300">
          <span className="truncate text-emerald-400 font-bold flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            {phase.slaMetric}
          </span>
          <ArrowRight className="w-3.5 h-3.5 text-[#FFB020] shrink-0" />
        </div>
      </div>
    ),
  }));

  const handleCardChange = (idx: number) => {
    setActiveStepIdx(idx);
  };

  const handleStepJump = (idx: number) => {
    setActiveStepIdx(idx);
    rotatingCardsRef.current?.goTo(idx);
  };

  return (
    <div className="space-y-8 max-w-7xl mx-auto select-none">
      {/* ==================================================================== */}
      {/* 1. TOP SPRINT QUICK-PILL TABS                                       */}
      {/* ==================================================================== */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        {PHASES.map((phase, idx) => {
          const isSelected = idx === activeStepIdx;
          return (
            <button
              key={phase.step}
              type="button"
              onClick={() => handleStepJump(idx)}
              className={cn(
                "px-3.5 sm:px-4 py-2 rounded-full text-xs font-bold transition-all duration-300 cursor-pointer select-none inline-flex items-center gap-2",
                isSelected
                  ? "bg-[#060B22] text-[#FFB020] border border-[#FFB020] shadow-md ring-2 ring-[#FFB020]/25 font-black scale-105"
                  : "bg-white text-slate-600 border border-[#E2DBD0] hover:border-slate-400 hover:text-[#0B1B3A]"
              )}
            >
              <span className="font-mono text-[10px] opacity-70">
                {phase.number}
              </span>
              <span>{phase.shortTag}</span>
              {isSelected && (
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              )}
            </button>
          );
        })}
      </div>

      {/* ==================================================================== */}
      {/* 2. THE 3D ROTATING CARDS THEATER (CLEAN, NO USELESS SURROUNDING TEXT) */}
      {/* ==================================================================== */}
      <div className="relative overflow-visible text-center py-1">
        {/* Sleek Floating Prev / Next Controls on Right */}
        <div className="flex items-center justify-end gap-2 max-w-5xl mx-auto px-4 mb-2">
          <button
            type="button"
            onClick={() => rotatingCardsRef.current?.prev()}
            className="p-2 rounded-full bg-white hover:bg-slate-50 border border-[#E2DBD0] text-slate-700 hover:text-[#060B22] hover:border-slate-400 transition-colors cursor-pointer shadow-xs inline-flex items-center justify-center"
            aria-label="Previous Sprint"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={() => rotatingCardsRef.current?.next()}
            className="p-2 rounded-full bg-white hover:bg-slate-50 border border-[#E2DBD0] text-slate-700 hover:text-[#060B22] hover:border-slate-400 transition-colors cursor-pointer shadow-xs inline-flex items-center justify-center"
            aria-label="Next Sprint"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* 3D Rotating Cards Ring Floating Directly on Canvas */}
        <div className="relative w-full overflow-visible py-2">
          <RotatingCards
            ref={rotatingCardsRef}
            cards={ROTATING_CARD_ITEMS}
            radius={380}
            cardWidth={270}
            cardHeight={350}
            tilt={13}
            autoRotate={true}
            autoRotateSpeed={0.1}
            pauseOnHover={true}
            selectedIndex={activeStepIdx}
            onCardChange={handleCardChange}
            onCardClick={handleStepJump}
          />
        </div>
      </div>

      {/* ==================================================================== */}
      {/* 3. ACTIVE SPRINT DEEP-DIVE STAGE (DELIVERABLES & VERIFIED ARTIFACT)  */}
      {/* ==================================================================== */}
      <div className="rounded-3xl bg-white border border-[#E2DBD0] shadow-xl p-6 sm:p-8 lg:p-10 relative overflow-hidden text-left">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column (6 cols): Sprint Breakdown & Verified Checklist */}
          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-xs font-mono font-black uppercase tracking-wider text-[#060B22] bg-[#FFB020] px-3 py-1 rounded-full shadow-xs">
                {activePhase.tag}
              </span>

              <span className="text-xs font-mono font-bold text-slate-700 bg-[#FAF8F5] px-3 py-1 rounded-full border border-[#E2DBD0]">
                Duration: {activePhase.duration}
              </span>
            </div>

            <div className="space-y-1">
              <h3 className="font-display font-black text-2xl sm:text-3xl text-[#0B1B3A] tracking-tight leading-snug">
                {activePhase.headline}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal pt-1">
                {activePhase.summary}
              </p>
            </div>

            {/* Verified Sprint Deliverables */}
            <div className="pt-2 space-y-2.5">
              <div className="text-xs font-black uppercase tracking-wider text-slate-700">
                Verified Sprint Deliverables:
              </div>
              <div className="space-y-2">
                {activePhase.deliverables.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-800">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span className="font-medium text-[13px] leading-snug">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* SLA Guarantee Strip */}
            <div className="pt-2">
              <div className="p-3.5 rounded-2xl bg-[#FAF8F5] border border-[#E2DBD0] flex items-center justify-between text-xs text-slate-700">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span className="font-semibold">{activePhase.slaMetric}</span>
                </div>
                <span className="text-[11px] font-mono text-emerald-600 font-bold">
                  Guaranteed Milestone
                </span>
              </div>
            </div>
          </div>

          {/* Right Column (6 cols): Live Engineering Artifact & CTA */}
          <div className="lg:col-span-6 space-y-5 lg:pl-6 lg:border-l lg:border-slate-200">
            {/* Live Interactive Artifact Preview */}
            <div className="rounded-2xl bg-[#060B22] p-5 border border-white/10 text-white shadow-lg">
              {activePhase.renderArtifact()}
            </div>

            {/* Direct Technical Scoping Action */}
            <div className="space-y-2">
              <StarBorder
                as={Link}
                href="/get-a-quote"
                className="w-full py-3.5 px-6 rounded-xl text-xs sm:text-sm font-black uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg cursor-pointer text-center group"
                radius={12}
                color="#FFB020"
                trailColor="#38BDF8"
                backgroundColor="#060B22"
                textColor="#FFFFFF"
                borderColor="rgba(255, 176, 32, 0.4)"
                sparkle={true}
                glow={0.8}
              >
                <span>Book 15-Min Technical Scope Session</span>
                <ArrowRight className="w-4 h-4 text-[#FFB020] group-hover:translate-x-1 transition-transform" />
              </StarBorder>

              <div className="text-center text-[11px] text-slate-500">
                Fixed-cost milestone contract • Guaranteed launch date • Zero surprise costs
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

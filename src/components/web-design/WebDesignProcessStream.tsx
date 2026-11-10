"use client";

import React, { useState, useEffect, useRef } from "react";
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
  Shield,
  RefreshCw,
} from "lucide-react";
import { cn } from "@/lib/utils";
import StarBorder from "@/components/ui/StarBorder";

interface ProcessPhase {
  step: number;
  number: string;
  title: string;
  shortTag: string;
  tag: string;
  duration: string;
  icon: React.ComponentType<{ className?: string }>;
  accentColor: string;
  glowRgba: string;
  headline: string;
  summary: string;
  deliverables: string[];
  slaMetric: string;
  position: { x: number; y: number }; // Percentage % across canvas
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
    accentColor: "#FFB020",
    glowRgba: "rgba(255, 176, 32, 0.35)",
    position: { x: 16, y: 18 },
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
            <span className="inline-block text-[9px] px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-bold">
              Approved
            </span>
          </div>

          <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-left space-y-1.5 hover:border-[#FFB020]/40 transition-colors">
            <div className="text-[10px] text-[#FFB020] font-bold">02 · Solutions Hub</div>
            <div className="text-white font-bold text-xs">/services/*</div>
            <div className="text-[10px] text-slate-400">6 Bespoke Service Silos</div>
            <span className="inline-block text-[9px] px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-bold">
              Approved
            </span>
          </div>

          <div className="p-3 rounded-xl bg-[#FFB020]/10 border border-[#FFB020]/40 text-left space-y-1.5 shadow-inner">
            <div className="text-[10px] text-[#FFB020] font-bold">03 · Lead Funnel</div>
            <div className="text-white font-bold text-xs">/get-a-quote</div>
            <div className="text-[10px] text-emerald-300">1-Tap Conversion API</div>
            <span className="inline-block text-[9px] px-1.5 py-0.5 rounded bg-[#FFB020]/20 text-[#FFB020] font-bold">
              Locked Spec
            </span>
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
    accentColor: "#0284C7",
    glowRgba: "rgba(2, 132, 199, 0.35)",
    position: { x: 50, y: 12 },
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
    accentColor: "#8B5CF6",
    glowRgba: "rgba(139, 92, 246, 0.35)",
    position: { x: 84, y: 18 },
    headline: "Pixel-Perfect Figma Prototypes & Design Tokens",
    summary:
      "Senior designers craft bespoke wireframes and clickable desktop & mobile prototypes tailored to your brand, with revisions until you are 100% satisfied.",
    deliverables: [
      "Custom Figma Design System & Typography Kit",
      "Interactive Clickable Desktop & Mobile Flows",
      "WCAG 2.1 AA Accessibility Signoff",
    ],
    slaMetric: "Clickable Figma Signoff",
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
    accentColor: "#10B981",
    glowRgba: "rgba(16, 185, 129, 0.35)",
    position: { x: 88, y: 56 },
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
    accentColor: "#06B6D4",
    glowRgba: "rgba(6, 182, 212, 0.35)",
    position: { x: 74, y: 84 },
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
    accentColor: "#F43F5E",
    glowRgba: "rgba(244, 63, 94, 0.35)",
    position: { x: 26, y: 84 },
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
    shortTag: "Warranty SLA",
    tag: "Sprint 07 · Ongoing SLA",
    duration: "30 Days+",
    icon: MessageSquare,
    accentColor: "#D97706",
    glowRgba: "rgba(217, 119, 6, 0.35)",
    position: { x: 12, y: 56 },
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
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const pauseTimerRef = useRef<NodeJS.Timeout | null>(null);
  const flowContainerRef = useRef<HTMLDivElement>(null);
  const [containerSize, setContainerSize] = useState<{ width: number; height: number }>({
    width: 1000,
    height: 640,
  });

  const activePhase = PHASES[activeStepIdx] || PHASES[0];

  // Dynamic dimension tracking for precise SVG curved line connections
  useEffect(() => {
    const updateSize = () => {
      if (!flowContainerRef.current) return;
      const rect = flowContainerRef.current.getBoundingClientRect();
      setContainerSize({
        width: rect.width || 1000,
        height: rect.height || 640,
      });
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  // Auto-cycle through the 7 sprints smoothly
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActiveStepIdx((prev) => (prev + 1) % PHASES.length);
    }, 4600);

    return () => clearInterval(interval);
  }, [isPaused]);

  const handleSelectSprint = (index: number) => {
    setActiveStepIdx(index);
    setIsPaused(true);

    if (pauseTimerRef.current) clearTimeout(pauseTimerRef.current);
    pauseTimerRef.current = setTimeout(() => {
      setIsPaused(false);
    }, 12000);
  };

  const centerX = containerSize.width / 2;
  const centerY = containerSize.height / 2;

  // Build the continuous perimeter circuit path linking 01 -> 02 -> 03 -> 04 -> 05 -> 06 -> 07 -> 01
  const perimeterPoints = PHASES.map((p) => ({
    x: (p.position.x / 100) * containerSize.width,
    y: (p.position.y / 100) * containerSize.height,
  }));

  const perimeterPathD = perimeterPoints.reduce((acc, pt, idx) => {
    if (idx === 0) return `M ${pt.x} ${pt.y}`;
    const prev = perimeterPoints[idx - 1];
    const midX = (prev.x + pt.x) / 2;
    const midY = (prev.y + pt.y) / 2;
    return `${acc} Q ${prev.x} ${prev.y}, ${midX} ${midY} T ${pt.x} ${pt.y}`;
  }, "") + " Z";

  return (
    <div className="space-y-6 sm:space-y-8 max-w-7xl mx-auto select-none">
      {/* ==================================================================== */}
      {/* 1. TOP SPRINT QUICK-JUMP TABS (ACCESSIBLE ACROSS ALL SCREENS)         */}
      {/* ==================================================================== */}
      <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 px-2">
        {PHASES.map((phase, idx) => {
          const isSelected = idx === activeStepIdx;
          return (
            <button
              key={phase.step}
              type="button"
              onClick={() => handleSelectSprint(idx)}
              className={cn(
                "px-3 sm:px-4 py-2 rounded-full text-xs font-bold transition-all duration-300 cursor-pointer select-none inline-flex items-center gap-1.5 sm:gap-2",
                isSelected
                  ? "bg-[#060B22] text-[#FFB020] border border-[#FFB020] shadow-md ring-2 ring-[#FFB020]/25 font-black scale-105"
                  : "bg-white text-slate-600 border border-[#E2DBD0] hover:border-slate-400 hover:text-[#0B1B3A]"
              )}
            >
              <span className="font-mono text-[10px] opacity-70">{phase.number}</span>
              <span>{phase.shortTag}</span>
              {isSelected && (
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              )}
            </button>
          );
        })}
      </div>

      {/* ==================================================================== */}
      {/* 2. THE 7-SPRINT AGILE CENTER FLOW THEATER (DESKTOP & TABLET VIEW)    */}
      {/* ==================================================================== */}
      <div
        ref={flowContainerRef}
        className="relative hidden md:flex items-center justify-center w-full min-h-[580px] lg:min-h-[640px] overflow-visible py-4 select-none"
      >
        {/* ================================================================== */}
        {/* DYNAMIC SVG CONNECTING CIRCUIT WITH GLOWING TRAVELING PULSES       */}
        {/* ================================================================== */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none overflow-visible"
          viewBox={`0 0 ${containerSize.width} ${containerSize.height}`}
          fill="none"
        >
          <defs>
            <filter id="agile-hub-glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="5" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Sequential Perimeter Agile Lifecycle Track */}
          <path
            d={perimeterPathD}
            stroke="rgba(6, 11, 34, 0.08)"
            strokeWidth="1.5"
            strokeDasharray="6 6"
            fill="none"
          />

          {/* Perimeter continuous traveling momentum photon */}
          <circle r="3.5" fill="#FFB020" filter="url(#agile-hub-glow)">
            <animateMotion path={perimeterPathD} dur="12s" repeatCount="indefinite" />
          </circle>

          {/* 7 Hub-to-Sprint Radial Energy Beziers */}
          {PHASES.map((phase, idx) => {
            const targetX = (phase.position.x / 100) * containerSize.width;
            const targetY = (phase.position.y / 100) * containerSize.height;
            const isActive = idx === activeStepIdx;
            const lineColor = isActive ? phase.accentColor : "rgba(6, 11, 34, 0.14)";

            const dx = targetX - centerX;
            const dy = targetY - centerY;
            const cp1X = centerX + dx * 0.45;
            const cp1Y = centerY + dy * 0.15;
            const cp2X = centerX + dx * 0.55;
            const cp2Y = targetY;

            const pathD = `M ${centerX} ${centerY} C ${cp1X} ${cp1Y}, ${cp2X} ${cp2Y}, ${targetX} ${targetY}`;

            return (
              <g key={phase.step}>
                {/* Base Line */}
                <path
                  d={pathD}
                  stroke={lineColor}
                  strokeWidth={isActive ? 2.8 : 1.5}
                  strokeDasharray={isActive ? "none" : "4 4"}
                  strokeOpacity={isActive ? 0.95 : 0.6}
                  strokeLinecap="round"
                  className="transition-all duration-300"
                />

                {/* Glowing underlay rail on active sprint */}
                {isActive && (
                  <path
                    d={pathD}
                    stroke={phase.accentColor}
                    strokeWidth={6}
                    strokeOpacity={0.25}
                    filter="url(#agile-hub-glow)"
                  />
                )}

                {/* Primary Outward Traveling Photon */}
                <circle
                  r={isActive ? 4.5 : 3}
                  fill={phase.accentColor}
                  filter="url(#agile-hub-glow)"
                >
                  <animateMotion
                    path={pathD}
                    dur={`${2.2 + (idx % 3) * 0.3}s`}
                    repeatCount="indefinite"
                  />
                </circle>

                {/* Secondary Staggered Pulse */}
                <circle
                  r={isActive ? 3 : 2}
                  fill={phase.accentColor}
                  opacity={0.6}
                >
                  <animateMotion
                    path={pathD}
                    dur={`${2.2 + (idx % 3) * 0.3}s`}
                    begin={`${1.1 + (idx % 3) * 0.15}s`}
                    repeatCount="indefinite"
                  />
                </circle>
              </g>
            );
          })}
        </svg>

        {/* ================================================================== */}
        {/* CENTRAL SPRINT REACTOR HUB (DISCIPLINED AGILE CORE)                */}
        {/* ================================================================== */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
          <div className="relative flex items-center justify-center">
            {/* Outer Breathing Energy Rings */}
            <div className="absolute w-48 h-48 rounded-full border border-[#FFB020]/25 animate-ping opacity-25 pointer-events-none" />
            <div className="absolute w-40 h-40 rounded-full border border-dashed border-[#FFB020]/40 animate-spin opacity-40 pointer-events-none" style={{ animationDuration: "25s" }} />
            <div className="absolute w-34 h-34 rounded-full border-2 border-[#FFB020]/30 animate-pulse pointer-events-none" />

            {/* Central Hub Core Card */}
            <div className="relative w-32 h-32 sm:w-36 sm:h-36 rounded-3xl bg-gradient-to-br from-[#060B22] via-[#081232] to-[#040818] border-2 border-[#FFB020] shadow-[0_15px_45px_rgba(255,176,32,0.38)] flex flex-col items-center justify-center p-3 text-center z-10 select-none">
              <span className="text-[9px] font-mono font-black uppercase tracking-wider text-[#FFB020] bg-white/10 px-2 py-0.5 rounded-full border border-[#FFB020]/40 mb-1 shadow-xs">
                HDM AGILE CORE
              </span>

              <div className="w-8 h-8 rounded-full bg-white/10 border border-[#FFB020]/40 flex items-center justify-center text-[#FFB020] my-1 shadow-inner">
                <Sparkles className="w-4 h-4 text-[#FFB020]" />
              </div>

              <div className="font-display font-black text-xs sm:text-sm text-white tracking-tight leading-tight">
                Sprint {activePhase.number} Active
              </div>

              <div className="text-[10px] text-emerald-400 font-mono mt-0.5 font-bold flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>100% On-Time SLA</span>
              </div>
            </div>
          </div>
        </div>

        {/* ================================================================== */}
        {/* 7 RADIAL SPRINT SATELLITE NODES                                    */}
        {/* ================================================================== */}
        {PHASES.map((phase, idx) => {
          const isActive = idx === activeStepIdx;
          const Icon = phase.icon;

          return (
            <div
              key={phase.step}
              onClick={() => handleSelectSprint(idx)}
              onMouseEnter={() => handleSelectSprint(idx)}
              className={cn(
                "absolute cursor-pointer -translate-x-1/2 -translate-y-1/2 transition-all duration-300 z-20 outline-none",
                isActive ? "z-30 scale-105 -translate-y-2" : "hover:scale-102 hover:z-25"
              )}
              style={{
                left: `${phase.position.x}%`,
                top: `${phase.position.y}%`,
              }}
            >
              <div
                className={cn(
                  "p-3 sm:p-3.5 rounded-2xl border transition-all duration-300 w-[190px] lg:w-[215px] text-left select-none relative overflow-hidden bg-white/95 backdrop-blur-md",
                  isActive
                    ? "border-[#FFB020] shadow-xl"
                    : "border-[#E2DBD0] hover:border-slate-400 shadow-md"
                )}
                style={
                  isActive
                    ? {
                        boxShadow: `0 12px 30px ${phase.glowRgba}, 0 2px 8px rgba(0,0,0,0.06)`,
                        borderColor: phase.accentColor,
                      }
                    : undefined
                }
              >
                {/* Top Active Accent Line */}
                {isActive && (
                  <div
                    className="absolute top-0 inset-x-0 h-1 transition-all duration-300"
                    style={{ backgroundColor: phase.accentColor }}
                  />
                )}

                {/* Top Header: Sprint Number & Duration */}
                <div className="flex items-center justify-between mb-1.5">
                  <span
                    className="text-[10px] font-mono font-black uppercase tracking-wider px-2 py-0.5 rounded-md text-white"
                    style={{ backgroundColor: phase.accentColor }}
                  >
                    Sprint {phase.number}
                  </span>
                  <span className="text-[10px] font-mono font-bold text-slate-600 bg-[#FAF8F5] px-2 py-0.5 rounded border border-[#E2DBD0]">
                    {phase.duration}
                  </span>
                </div>

                {/* Middle: Icon & Title */}
                <div className="flex items-center gap-2 mb-1">
                  <div
                    className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0 border"
                    style={{
                      backgroundColor: `${phase.accentColor}15`,
                      borderColor: `${phase.accentColor}40`,
                      color: phase.accentColor,
                    }}
                  >
                    <Icon className="w-3.5 h-3.5" />
                  </div>
                  <div
                    className={cn(
                      "font-display font-bold text-xs sm:text-sm tracking-tight truncate",
                      isActive ? "text-[#060B22] font-black" : "text-slate-800"
                    )}
                  >
                    {phase.title}
                  </div>
                </div>

                {/* Bottom: Milestone SLA */}
                <div className="pt-1 border-t border-slate-100 flex items-center justify-between text-[10px] font-mono">
                  <span className="text-emerald-700 font-bold truncate">
                    {phase.slaMetric}
                  </span>
                  <ArrowRight
                    className="w-3 h-3 text-slate-400 transition-transform group-hover:translate-x-0.5"
                    style={isActive ? { color: phase.accentColor } : undefined}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* ==================================================================== */}
      {/* 2B. MOBILE TOUCH-FRIENDLY INTERACTIVE SPRINT CARD (UNDER 768px)      */}
      {/* ==================================================================== */}
      <div className="md:hidden block px-2">
        <div className="p-5 rounded-3xl bg-white border border-[#E2DBD0] shadow-lg relative overflow-hidden">
          <div
            className="absolute top-0 inset-x-0 h-1.5"
            style={{ backgroundColor: activePhase.accentColor }}
          />

          <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-3">
            <span
              className="text-xs font-mono font-black uppercase px-2.5 py-1 rounded-md text-white"
              style={{ backgroundColor: activePhase.accentColor }}
            >
              Sprint {activePhase.number}
            </span>
            <span className="text-xs font-mono font-bold text-slate-700 bg-[#FAF8F5] px-2.5 py-1 rounded-full border border-[#E2DBD0]">
              Duration: {activePhase.duration}
            </span>
          </div>

          <div className="flex items-center gap-3 mb-2">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center border shrink-0"
              style={{
                backgroundColor: `${activePhase.accentColor}15`,
                borderColor: `${activePhase.accentColor}40`,
                color: activePhase.accentColor,
              }}
            >
              <activePhase.icon className="w-5 h-5" />
            </div>
            <div>
              <div className="font-display font-black text-base text-[#0B1B3A]">
                {activePhase.title}
              </div>
              <div className="text-xs text-emerald-700 font-mono font-bold">
                {activePhase.slaMetric}
              </div>
            </div>
          </div>

          <p className="text-xs text-slate-600 leading-relaxed font-normal pt-1">
            {activePhase.summary}
          </p>

          {/* Prev / Next mobile steppers */}
          <div className="flex items-center justify-between pt-4 mt-3 border-t border-slate-100">
            <button
              type="button"
              onClick={() =>
                handleSelectSprint((activeStepIdx - 1 + PHASES.length) % PHASES.length)
              }
              className="p-2 rounded-xl bg-[#FAF8F5] border border-[#E2DBD0] text-slate-700 hover:text-[#060B22] text-xs font-bold inline-flex items-center gap-1.5"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Prev Sprint</span>
            </button>

            <span className="text-xs font-mono font-bold text-slate-500">
              {activeStepIdx + 1} of {PHASES.length}
            </span>

            <button
              type="button"
              onClick={() =>
                handleSelectSprint((activeStepIdx + 1) % PHASES.length)
              }
              className="p-2 rounded-xl bg-[#060B22] text-[#FFB020] border border-[#FFB020] text-xs font-bold inline-flex items-center gap-1.5"
            >
              <span>Next Sprint</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* ==================================================================== */}
      {/* 3. ACTIVE SPRINT DEEP-DIVE STAGE (DELIVERABLES & LIVE ARTIFACT)       */}
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
              <div className="text-xs font-black uppercase tracking-wider text-slate-700 flex items-center gap-2">
                <Shield className="w-4 h-4 text-emerald-600" />
                <span>Verified Sprint Deliverables:</span>
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
                <span>Discuss Sprint {activePhase.number} Timeline</span>
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

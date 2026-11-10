"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  Palette,
  Sparkles,
  Code2,
  Zap,
  ShieldCheck,
  RefreshCw,
  ShoppingBag,
  CreditCard,
  Layout,
  Layers,
  Database,
  Lock,
  Gauge,
  Cpu,
  FileCheck,
  Globe,
  Sliders,
  Server,
  ArrowRight,
  CheckCircle2,
  LucideIcon,
  ChevronRight,
} from "lucide-react";
import { cn } from "@/lib/utils";
import StarBorder from "@/components/ui/StarBorder";

interface SourceChip {
  icon: LucideIcon | React.ComponentType<{ className?: string }>;
  label: string;
}

interface ServiceArchitecture {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  badge: string;
  actionPill: {
    icon: LucideIcon | React.ComponentType<{ className?: string }>;
    label: string;
  };
  sources: SourceChip[];
  statusLabel: string;
  statusMetric: string;
  accentColor: string;
  pulseColors: [string, string, string];
  headline: string;
  description: string;
  deliverables: string[];
  ctaText: string;
}

const ARCHITECTURE_SERVICES: ServiceArchitecture[] = [
  {
    id: "custom-design",
    number: "01",
    title: "Custom Website Design & Engineering",
    subtitle: "Handcrafted Figma to Semantic Next.js 16",
    badge: "Figma to Next.js 16",
    actionPill: { icon: Code2, label: "Handcrafted Production Code" },
    sources: [
      { icon: Palette, label: "Figma Tokens" },
      { icon: Sparkles, label: "Custom UI" },
      { icon: Code2, label: "React 19" },
      { icon: Zap, label: "Next.js 16" },
    ],
    statusLabel: "Compiling Design Tokens to Semantic Next.js 16",
    statusMetric: "100% Custom UI",
    accentColor: "#FFB020",
    pulseColors: ["#FFB020", "#38BDF8", "#10B981"],
    headline: "Bespoke Digital Experiences Built Exclusively for Your Market Positioning",
    description:
      "Every single pixel is designed from scratch in Figma to reflect your brand's unique market authority, then compiled into clean, semantic Next.js 16 code with zero generic theme bloat or template lock-in.",
    deliverables: [
      "Bespoke Figma UI/UX prototype & complete interactive design system",
      "Semantic Next.js 16 / React 19 pixel-perfect engineering",
      "Sub-second speed SLA (< 0.8s LCP) & 100/100 Core Web Vitals",
    ],
    ctaText: "Discuss Custom Website Scope",
  },
  {
    id: "redesign",
    number: "02",
    title: "Website Redesign & Modernization",
    subtitle: "Zero SEO Loss & Conversion Rate Modernization",
    badge: "Modernization + CRO",
    actionPill: { icon: ShieldCheck, label: "301 Authority Safeguard" },
    sources: [
      { icon: RefreshCw, label: "Legacy Audit" },
      { icon: FileCheck, label: "301 Map" },
      { icon: ShieldCheck, label: "Rank Shield" },
      { icon: Zap, label: "Sub-Second" },
    ],
    statusLabel: "Safeguarding URL Authority & Organic Rank Equity",
    statusMetric: "Zero SEO Loss",
    accentColor: "#38BDF8",
    pulseColors: ["#38BDF8", "#10B981", "#FFB020"],
    headline: "Modernize Legacy Websites While Protecting Established Google Rankings",
    description:
      "Transform outdated, clunky websites into high-converting digital platforms while meticulously safeguarding Google keyword rankings, backlink equity, and established domain authority.",
    deliverables: [
      "Comprehensive 1-to-1 301 redirect mapping for zero search ranking dip",
      "Modern, high-converting UX aligned with current brand positioning",
      "30-day post-launch warranty with dedicated traffic monitoring",
    ],
    ctaText: "Discuss Website Redesign Scope",
  },
  {
    id: "ecommerce",
    number: "03",
    title: "High-Velocity E-Commerce Storefronts",
    subtitle: "Shopify Plus & Headless Checkout Speed",
    badge: "Shopify Plus & Headless",
    actionPill: { icon: ShoppingBag, label: "1-Tap Optimized Checkout" },
    sources: [
      { icon: ShoppingBag, label: "Shopify 2.0" },
      { icon: CreditCard, label: "1-Tap Pay" },
      { icon: Sliders, label: "Micro-Cart" },
      { icon: Globe, label: "Multi-Curr" },
    ],
    statusLabel: "Optimizing Average Order Value & Edge Checkout Speed",
    statusMetric: "4.6% Avg Conv.",
    accentColor: "#10B981",
    pulseColors: ["#10B981", "#FFB020", "#38BDF8"],
    headline: "Lightning-Fast Storefronts Optimized for Maximum Average Order Value",
    description:
      "Custom Shopify Plus and headless storefronts engineered for maximum conversion rates, instant slide-out micro-carts with free-shipping bars, and seamless multi-currency checkouts.",
    deliverables: [
      "Sub-second edge product catalog & collection filtering",
      "Instant slide-out cart with dynamic free-shipping threshold bar",
      "1-Tap Apple Pay, Shop Pay, and multi-currency payment gateways",
    ],
    ctaText: "Discuss E-Commerce Scope",
  },
  {
    id: "cms-webflow",
    number: "04",
    title: "Client-Editable CMS & Webflow Platforms",
    subtitle: "Visual Drag-and-Drop Publishing Autonomy",
    badge: "Zero-Code Autonomy",
    actionPill: { icon: Layout, label: "1-Click Publishing Hub" },
    sources: [
      { icon: Layout, label: "Webflow" },
      { icon: Database, label: "Headless CMS" },
      { icon: Sliders, label: "Schemas" },
      { icon: Sparkles, label: "Visual Edit" },
    ],
    statusLabel: "Marketing Team Publishing Autonomy & Content Velocity",
    statusMetric: "Zero Dev Dependency",
    accentColor: "#A855F7",
    pulseColors: ["#A855F7", "#FFB020", "#38BDF8"],
    headline: "Empower Your Marketing Team with Zero Developer Dependencies",
    description:
      "Empower your marketing and growth team with drag-and-drop publishing autonomy on Webflow, WordPress, or modern Headless CMS with structured schemas.",
    deliverables: [
      "Custom visual block editor tailored to approved brand guidelines",
      "Zero code required for creating landing pages, blogs, and case studies",
      "Recorded Loom training library for non-technical content editors",
    ],
    ctaText: "Discuss CMS & Webflow Scope",
  },
  {
    id: "web-apps",
    number: "05",
    title: "Full-Stack Web Applications & Portals",
    subtitle: "Next.js 16, Supabase & Cloud API Systems",
    badge: "App-Like SPA",
    actionPill: { icon: Layers, label: "Secure Client Portal" },
    sources: [
      { icon: Lock, label: "RBAC & MFA" },
      { icon: Database, label: "Supabase" },
      { icon: Server, label: "REST / APIs" },
      { icon: Cpu, label: "Cloud Edge" },
    ],
    statusLabel: "Securing Client Portal Sessions & DB Webhooks",
    statusMetric: "Sub-24h Scoping",
    accentColor: "#F59E0B",
    pulseColors: ["#F59E0B", "#10B981", "#38BDF8"],
    headline: "High-Performance Cloud Portals & Data-Driven Internal Platforms",
    description:
      "Complex client portals, SaaS dashboards, and database-driven internal platforms engineered with Next.js 16, Supabase, and real-time REST/GraphQL APIs.",
    deliverables: [
      "Role-based access control (RBAC), multi-factor auth, and secure sessions",
      "Real-time PostgreSQL database querying with automated backups",
      "Interactive dashboards, billing integrations, and client reporting",
    ],
    ctaText: "Discuss Web App Scope",
  },
  {
    id: "speed-vitals",
    number: "06",
    title: "Speed Tuning & Core Web Vitals Optimization",
    subtitle: "Google Top 1% Lighthouse Architecture",
    badge: "< 0.8s LCP Benchmark",
    actionPill: { icon: Gauge, label: "100/100 Google Core Vitals" },
    sources: [
      { icon: Gauge, label: "LCP < 0.8s" },
      { icon: Zap, label: "INP 12ms" },
      { icon: Sparkles, label: "0.00 CLS" },
      { icon: Server, label: "Edge CDN" },
    ],
    statusLabel: "Google Lighthouse Certified Speed Architecture",
    statusMetric: "Top 1% Global Speed",
    accentColor: "#EC4899",
    pulseColors: ["#EC4899", "#10B981", "#FFB020"],
    headline: "Sub-Second Load Times Certified by Google Search Algorithms",
    description:
      "Remediate slow WordPress and legacy websites to pass Google Core Web Vitals with flying colors—boosting SEO rank authority and lowering paid ad bounce rates.",
    deliverables: [
      "Sub-second LCP (< 0.8s) via next-gen image compression & server caching",
      "Zero layout shift (CLS: 0.00) and instant interaction (INP: < 50ms)",
      "Verified Google Lighthouse audit pass with before/after speed scorecards",
    ],
    ctaText: "Discuss Speed Optimization Scope",
  },
];

export default function BentoGrid() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [progress, setProgress] = useState<number>(75);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [activeChip, setActiveChip] = useState<number>(0);
  const pauseTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const active = ARCHITECTURE_SERVICES[activeIndex] || ARCHITECTURE_SERVICES[0];
  const ActionIcon = active.actionPill.icon;

  // Auto-cycle through the 6 architecture solutions unless the user interacts
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % ARCHITECTURE_SERVICES.length);
      setProgress(55);
    }, 4500);

    return () => clearInterval(interval);
  }, [isPaused]);

  // Micro progress animation for the active solution
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => (prev >= 95 ? 60 : prev + 7));
      setActiveChip((prev) => (prev + 1) % active.sources.length);
    }, 2000);

    return () => clearInterval(timer);
  }, [active.sources.length]);

  const handleSelectService = (index: number) => {
    setActiveIndex(index);
    setProgress(72);
    setIsPaused(true);

    if (pauseTimeoutRef.current) {
      clearTimeout(pauseTimeoutRef.current);
    }
    // Resume auto-cycle after 10 seconds of inactivity
    pauseTimeoutRef.current = setTimeout(() => {
      setIsPaused(false);
    }, 10000);
  };

  return (
    <div className="w-full select-none">
      {/* ==================================================================== */}
      {/* THE MASTER BENTO: ALL 6 ARCHITECTURES IN ONE COHESIVE SYSTEM        */}
      {/* ==================================================================== */}
      <div className="rounded-3xl border border-[#FFB020]/25 bg-gradient-to-b from-[#060B22] to-[#081232] shadow-2xl p-5 sm:p-7 lg:p-9 relative overflow-hidden">
        {/* Background ambient dot grid pattern */}
        <div
          className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:22px_22px] pointer-events-none"
          aria-hidden="true"
        />

        {/* Subtle ambient lighting flares */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#FFB020]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Master Bento Top Telemetry Strip */}
        <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 pb-5 mb-6 border-b border-white/10 text-xs">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#FFB020]">
              Unified Digital Architecture Engine
            </span>
            <span className="text-white/20 hidden sm:inline">•</span>
            <span className="text-slate-400 font-mono text-[11px] hidden sm:inline">
              6 Core Engineering Solutions
            </span>
          </div>

          <div className="flex items-center gap-3 font-mono text-[11px] text-slate-300">
            <span className="hidden md:inline text-slate-400">Standard:</span>
            <span className="px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-emerald-400">
              100/100 Core Vitals
            </span>
            <span className="px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-[#FFB020]">
              &lt; 0.8s LCP SLA
            </span>
          </div>
        </div>

        {/* Master Bento Two-Column Layout (Interactive Selector + Bento 1 Engine) */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          {/* ================================================================ */}
          {/* LEFT COLUMN (5 COLS): INTERACTIVE ARCHITECTURE SELECTOR          */}
          {/* ================================================================ */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-2">
            <div className="space-y-1.5">
              <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400 pb-1">
                Select Architecture Solution:
              </div>

              {ARCHITECTURE_SERVICES.map((service, index) => {
                const isSelected = index === activeIndex;

                return (
                  <button
                    key={service.id}
                    type="button"
                    onClick={() => handleSelectService(index)}
                    className={cn(
                      "w-full text-left p-3.5 sm:p-4 rounded-2xl transition-all duration-300 cursor-pointer flex items-center justify-between group relative overflow-hidden",
                      isSelected
                        ? "bg-white/10 border border-[#FFB020]/50 shadow-lg text-white"
                        : "bg-white/5 hover:bg-white/[0.08] border border-white/5 text-slate-300 hover:text-white"
                    )}
                  >
                    {/* Active gold left indicator bar */}
                    {isSelected && (
                      <div className="absolute left-0 inset-y-0 w-1 bg-[#FFB020] rounded-r" />
                    )}

                    <div className="flex items-center gap-3 pl-1">
                      <span
                        className={cn(
                          "font-mono text-xs font-black px-2 py-0.5 rounded-md",
                          isSelected
                            ? "bg-[#FFB020] text-[#060B22]"
                            : "bg-white/10 text-slate-400 group-hover:text-white"
                        )}
                      >
                        {service.number}
                      </span>

                      <div>
                        <div className="font-display font-bold text-xs sm:text-sm tracking-tight text-white group-hover:text-[#FFB020] transition-colors">
                          {service.title}
                        </div>
                        <div className="text-[11px] text-slate-400 font-normal truncate max-w-[210px] sm:max-w-[280px]">
                          {service.subtitle}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 shrink-0 pl-2">
                      <span
                        className={cn(
                          "text-[9.5px] font-mono px-2 py-0.5 rounded-md hidden sm:inline-block",
                          isSelected
                            ? "text-[#FFB020] bg-[#FFB020]/10 border border-[#FFB020]/30"
                            : "text-slate-400 bg-white/5"
                        )}
                      >
                        {service.badge}
                      </span>
                      <ChevronRight
                        className={cn(
                          "w-4 h-4 transition-transform",
                          isSelected
                            ? "text-[#FFB020] translate-x-0.5"
                            : "text-slate-500 group-hover:text-slate-300"
                        )}
                      />
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Quick Auto-Cycle Cue */}
            <div className="pt-2 flex items-center justify-between text-[10.5px] font-mono text-slate-400 border-t border-white/10">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>Auto-cycling 6 solutions</span>
              </span>
              <span>Click any to inspect</span>
            </div>
          </div>

          {/* ================================================================ */}
          {/* RIGHT COLUMN (7 COLS): THE SIGNATURE BENTO 1 INTERACTIVE ENGINE   */}
          {/* ================================================================ */}
          <div className="lg:col-span-7 flex flex-col justify-between rounded-2xl bg-[#040817]/80 border border-white/10 p-5 sm:p-7 relative overflow-hidden backdrop-blur-sm">
            {/* Top Engine Header Strip */}
            <div className="flex items-center justify-between mb-3 text-xs">
              <span className="text-[10.5px] font-mono font-bold uppercase tracking-wider text-[#FFB020] bg-white/5 border border-[#FFB020]/30 px-3 py-1 rounded-md">
                {active.badge}
              </span>
              <span className="text-[10.5px] font-mono text-slate-400">
                Solution {active.number} of 06
              </span>
            </div>

            {/* -------------------------------------------------------------- */}
            {/* THE ICONIC BENTO 1 INTEGRATION NETWORK VISUALIZATION            */}
            {/* -------------------------------------------------------------- */}
            <div className="w-full pt-1">
              {/* 4 Source Chips */}
              <div className="grid grid-cols-4 gap-2 px-1 sm:px-4">
                {active.sources.map((src, idx) => {
                  const Icon = src.icon;
                  const isPulsing = idx === activeChip;

                  return (
                    <div
                      key={idx}
                      className="flex flex-col items-center gap-1.5 group/chip"
                    >
                      <div
                        className={cn(
                          "relative w-11 h-11 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center transition-all duration-300 border",
                          isPulsing
                            ? "bg-[#060B22] border-[#FFB020] text-[#FFB020] shadow-[0_0_18px_rgba(255,176,32,0.4)] scale-105"
                            : "bg-[#060B22]/90 border-white/10 text-slate-300"
                        )}
                      >
                        <Icon className="w-5 h-5" />
                        {isPulsing && (
                          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-[#FFB020] animate-ping" />
                        )}
                      </div>
                      <span className="text-[10px] font-mono text-slate-300 truncate max-w-full text-center">
                        {src.label}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Dynamic SVG Converging Circuits */}
              <div className="relative w-full h-16 sm:h-20 my-2">
                <svg
                  className="w-full h-full overflow-visible"
                  viewBox="0 0 400 68"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <defs>
                    <linearGradient id={`bento-grad-${active.id}`} x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="rgba(255, 255, 255, 0.15)" />
                      <stop offset="100%" stopColor={active.accentColor} stopOpacity="0.5" />
                    </linearGradient>
                  </defs>

                  {/* 4 Converging circuit lines */}
                  <path
                    d="M 50 4 C 50 36, 180 40, 200 64"
                    stroke={`url(#bento-grad-${active.id})`}
                    strokeWidth="1.5"
                  />
                  <path
                    d="M 150 4 C 150 36, 190 40, 200 64"
                    stroke={`url(#bento-grad-${active.id})`}
                    strokeWidth="1.5"
                  />
                  <path
                    d="M 250 4 C 250 36, 210 40, 200 64"
                    stroke={`url(#bento-grad-${active.id})`}
                    strokeWidth="1.5"
                  />
                  <path
                    d="M 350 4 C 350 36, 220 40, 200 64"
                    stroke={`url(#bento-grad-${active.id})`}
                    strokeWidth="1.5"
                  />

                  {/* Traveling signal pulses */}
                  <circle r="3" fill={active.pulseColors[0]}>
                    <animateMotion
                      path="M 50 4 C 50 36, 180 40, 200 64"
                      dur="2.4s"
                      repeatCount="indefinite"
                    />
                  </circle>
                  <circle r="3" fill={active.pulseColors[1]}>
                    <animateMotion
                      path="M 350 4 C 350 36, 220 40, 200 64"
                      dur="2.8s"
                      repeatCount="indefinite"
                    />
                  </circle>
                  <circle r="3" fill={active.pulseColors[2]}>
                    <animateMotion
                      path="M 150 4 C 150 36, 190 40, 200 64"
                      dur="2.1s"
                      repeatCount="indefinite"
                    />
                  </circle>
                  <circle r="3" fill={active.pulseColors[0]}>
                    <animateMotion
                      path="M 250 4 C 250 36, 210 40, 200 64"
                      dur="2.5s"
                      repeatCount="indefinite"
                    />
                  </circle>
                </svg>
              </div>

              {/* Central Processing Action Button */}
              <div className="flex justify-center -mt-1 mb-4">
                <div className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 rounded-full bg-white text-[#060B22] font-black text-xs shadow-xl shadow-black/40 hover:scale-105 transition-transform cursor-pointer">
                  <ActionIcon className="w-4 h-4 text-[#060B22]" />
                  <span>{active.actionPill.label}</span>
                </div>
              </div>

              {/* Live Real-Time Telemetry Bar */}
              <div className="p-3 sm:p-3.5 rounded-2xl bg-[#060B22] border border-white/10 space-y-2">
                <div className="flex items-center justify-between text-xs font-medium">
                  <div className="flex items-center gap-2 text-white">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                    </span>
                    <span className="text-[11.5px] truncate max-w-[190px] sm:max-w-none">
                      {active.statusLabel}
                    </span>
                  </div>
                  <span className="text-emerald-400 font-mono text-[11px] font-bold shrink-0">
                    {active.statusMetric}
                  </span>
                </div>

                {/* Progress bar */}
                <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-white rounded-full transition-all duration-700 ease-out"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>
            </div>

            {/* -------------------------------------------------------------- */}
            {/* EDITORIAL VALUE PROPOSITION & VERIFIED DELIVERABLES            */}
            {/* -------------------------------------------------------------- */}
            <div className="pt-5 mt-4 border-t border-white/10 space-y-3.5">
              <div>
                <h3 className="text-lg sm:text-xl font-bold font-display text-white tracking-tight leading-snug">
                  {active.headline}
                </h3>
                <p className="mt-1.5 text-xs sm:text-[13px] text-slate-300 leading-relaxed font-normal">
                  {active.description}
                </p>
              </div>

              {/* 3 Verified Deliverables with Gold Checkmarks */}
              <div className="space-y-1.5 pt-1">
                {active.deliverables.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-slate-200">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#FFB020] shrink-0 mt-0.5" />
                    <span className="leading-snug">{item}</span>
                  </div>
                ))}
              </div>

              {/* Direct Action Quote Button with StarBorder */}
              <div className="pt-2">
                <StarBorder
                  as={Link}
                  href="/get-a-quote"
                  className="w-full sm:w-auto py-3 px-6 rounded-xl text-xs font-black uppercase tracking-wider inline-flex items-center justify-center gap-2 shadow-lg cursor-pointer text-center group"
                  radius={12}
                  color="#FFB020"
                  trailColor="#38BDF8"
                  backgroundColor="#060B22"
                  textColor="#FFFFFF"
                  borderColor="rgba(255, 176, 32, 0.5)"
                  sparkle={true}
                  glow={0.8}
                >
                  <span>{active.ctaText}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#FFB020] group-hover:translate-x-1 transition-transform" />
                </StarBorder>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

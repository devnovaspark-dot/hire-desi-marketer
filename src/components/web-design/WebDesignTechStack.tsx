"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Sparkles,
  Zap,
  Globe,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Activity,
  Layers,
  Cpu,
  Server,
  Gauge,
  TrendingUp,
  BarChart3,
  Smartphone,
  Lock,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface TechArchitectureItem {
  id: string;
  name: string;
  badge: string;
  category: "modern" | "commerce" | "cms";
  headline: string;
  businessImpact: string;
  speedScore: number;
  lcpSpeed: string;
  traditionalSpeed: string;
  architectureTier: string;
  stackPairings: string[];
  keyAdvantages: string[];
  pipelineSteps: {
    label: string;
    detail: string;
    badge: string;
  }[];
}

const TECH_CATALOG: TechArchitectureItem[] = [
  {
    id: "nextjs",
    name: "Next.js 16",
    badge: "Full-Stack React Framework",
    category: "modern",
    headline: "Sub-Second Edge Rendering & Core Web Vitals Dominance",
    businessImpact:
      "Partial pre-rendering and global edge caching deliver near-instant initial paints that Google algorithms reward with top organic keyword rankings.",
    speedScore: 99,
    lcpSpeed: "0.58s",
    traditionalSpeed: "3.4s",
    architectureTier: "Enterprise Server Components",
    stackPairings: ["React 19", "Tailwind CSS", "TypeScript", "Vercel Edge"],
    keyAdvantages: [
      "Sub-second initial paint across both mobile and desktop",
      "Automated WebP / AVIF image compression pipeline",
      "Dynamic OpenGraph & automated Schema.org structured data",
      "Zero render-blocking scripts with edge streaming",
    ],
    pipelineSteps: [
      { label: "Edge DNS", detail: "Global Anycast routing (< 15ms)", badge: "Cloudflare" },
      { label: "Render Engine", detail: "Next.js 16 Partial Pre-rendering", badge: "Turbopack" },
      { label: "Data Layer", detail: "Edge cached server components", badge: "Zero DB Wait" },
      { label: "Client Output", detail: "Instant paint with zero layout shift", badge: "100/100 Vitals" },
    ],
  },
  {
    id: "react",
    name: "React 19",
    badge: "Interactive UI Engine",
    category: "modern",
    headline: "Fluid 60fps Micro-Interactions with Zero Full-Page Reloads",
    businessImpact:
      "React 19 powers buttery-smooth client states, multi-step qualification funnels, and app-like transitions that dramatically increase user engagement and session time.",
    speedScore: 99,
    lcpSpeed: "0.62s",
    traditionalSpeed: "2.8s",
    architectureTier: "Concurrent React Architecture",
    stackPairings: ["Next.js 16", "Framer Motion", "Radix UI", "TanStack"],
    keyAdvantages: [
      "Fluid state updates and instant optimistic UI feedback",
      "Component-level code splitting and lazy asset loading",
      "Concurrent transitions for zero interface freezes on mobile",
      "Modular design tokens with complete brand consistency",
    ],
    pipelineSteps: [
      { label: "State Engine", detail: "Optimistic actions with zero lag", badge: "React 19" },
      { label: "Hydration", detail: "Selective streaming hydration", badge: "Async" },
      { label: "Interaction", detail: "60 FPS hardware accelerated motion", badge: "Fluid UI" },
      { label: "Conversion", detail: "Multi-step interactive form funnels", badge: "+42% Leads" },
    ],
  },
  {
    id: "tailwind",
    name: "Tailwind CSS v4",
    badge: "Utility Design Engine",
    category: "modern",
    headline: "Ultra-Lightweight CSS with Zero Unused Stylesheet Bloat",
    businessImpact:
      "Eliminate bulky legacy CSS frameworks. Tailwind compiles into a tiny production stylesheet for instant browser rendering and strict visual system fidelity.",
    speedScore: 100,
    lcpSpeed: "0.45s",
    traditionalSpeed: "2.9s",
    architectureTier: "Zero-Runtime Compiled CSS",
    stackPairings: ["PostCSS", "Design Tokens", "CSS Variables", "Autoprefixer"],
    keyAdvantages: [
      "Tiny production bundle (< 15KB total CSS downloaded)",
      "Fluid responsive breakpoints from mobile viewports to 4K",
      "Hardware-accelerated CSS 3D transforms and keyframes",
      "Zero CSS specificity wars or accidental layout breaks",
    ],
    pipelineSteps: [
      { label: "Token System", detail: "Strict brand color & type tokens", badge: "Figma Sync" },
      { label: "Compiler", detail: "Tailwind v4 high-speed Rust engine", badge: "JIT Build" },
      { label: "Minification", detail: "Only in-use classes shipped to user", badge: "< 15KB Total" },
      { label: "Browser Paint", detail: "Instant render with zero stylesheet block", badge: "Instant Paint" },
    ],
  },
  {
    id: "shopify",
    name: "Shopify Plus",
    badge: "Enterprise Commerce Platform",
    category: "commerce",
    headline: "High-Volume E-Commerce Architecture & 1-Tap Checkout",
    businessImpact:
      "Engineered for high-growth direct-to-consumer and B2B brands requiring 99.99% uptime, native multi-currency, and conversion-optimized mobile checkout.",
    speedScore: 96,
    lcpSpeed: "0.95s",
    traditionalSpeed: "4.2s",
    architectureTier: "Headless / Liquid High-Speed",
    stackPairings: ["Shopify Storefront API", "Klaviyo", "Stripe", "Meta CAPI"],
    keyAdvantages: [
      "Shopify Shop Pay 1-tap checkout conversion lift (+35%)",
      "Custom section architecture editable by non-technical teams",
      "Seamless ERP, inventory, and warehouse integrations",
      "Global multi-currency, localized taxation, and payment gateways",
    ],
    pipelineSteps: [
      { label: "Catalog Layer", detail: "Optimized Shopify Storefront API", badge: "GraphQL" },
      { label: "Checkout Hub", detail: "Native Shop Pay & 1-tap payment", badge: "+35% Lift" },
      { label: "Data Telemetry", detail: "Server-side Meta CAPI & Google Ads", badge: "100% Signal" },
      { label: "Infrastructure", detail: "Black Friday scale with 99.99% uptime", badge: "Global Edge" },
    ],
  },
  {
    id: "wordpress",
    name: "WordPress Enterprise",
    badge: "Modern CMS Architecture",
    category: "cms",
    headline: "Custom Block Architecture with Zero Bulky Theme Bloat",
    businessImpact:
      "We replace slow third-party builders (Elementor/Divi) with clean custom Gutenberg blocks, Redis caching, and edge CDN delivery for complete marketing independence.",
    speedScore: 95,
    lcpSpeed: "0.85s",
    traditionalSpeed: "4.8s",
    architectureTier: "Custom Gutenberg / Headless",
    stackPairings: ["Advanced Custom Fields", "Redis Object Cache", "Cloudflare APO", "PHP 8.3"],
    keyAdvantages: [
      "Zero bloated plugin dependencies or vulnerability risks",
      "Intuitive block editor tailored strictly to your brand guidelines",
      "Redis object caching and server-side edge HTML delivery",
      "Automated daily offsite backups and bilateral enterprise security",
    ],
    pipelineSteps: [
      { label: "Custom Core", detail: "Custom Gutenberg architecture (no Elementor)", badge: "Clean PHP" },
      { label: "Caching Layer", detail: "Server-side Redis object cache", badge: "< 50ms TTFB" },
      { label: "Security", detail: "Enterprise hardening & Cloudflare WAF", badge: "Zero Hack Risk" },
      { label: "Marketing CMS", detail: "Easy drag-and-drop page creation", badge: "100% Autonomy" },
    ],
  },
  {
    id: "webflow",
    name: "Webflow",
    badge: "Visual Growth Platform",
    category: "cms",
    headline: "Rapid Marketing Agility with Clean Production-Ready Code",
    businessImpact:
      "Bespoke Webflow development built on semantic Client-First class structures, dynamic CMS collections, and automated webhook workflows for fast-moving teams.",
    speedScore: 98,
    lcpSpeed: "0.72s",
    traditionalSpeed: "3.2s",
    architectureTier: "Client-First Semantic System",
    stackPairings: ["Finsweet Attributes", "Relume System", "Zapier / Make", "AWS CloudFront"],
    keyAdvantages: [
      "Strict semantic HTML5 structure with zero messy layout code",
      "Client Editor Mode: Marketing teams update copy without breaking UI",
      "Custom JavaScript interaction bridges and filter systems",
      "Zero hosting maintenance or database vulnerability management",
    ],
    pipelineSteps: [
      { label: "Semantic Base", detail: "Client-First class naming standard", badge: "Clean CSS" },
      { label: "Dynamic CMS", detail: "Scalable multi-reference collections", badge: "Auto-Populate" },
      { label: "Automation", detail: "Instant Webhooks to CRM & Slack", badge: "Zapier/Make" },
      { label: "Global Edge", detail: "AWS CloudFront distribution worldwide", badge: "Fast Global" },
    ],
  },
];

export function WebDesignTechStack() {
  const [activeTechId, setActiveTechId] = useState<string>("nextjs");

  const activeTech =
    TECH_CATALOG.find((t) => t.id === activeTechId) || TECH_CATALOG[0];

  return (
    <div className="space-y-8 max-w-7xl mx-auto text-left">
      {/* ============================================================== */}
      {/* 1. CLEAN TECHNOLOGY SELECTOR TABS                              */}
      {/* ============================================================== */}
      <div className="flex items-center justify-start lg:justify-center gap-2 overflow-x-auto pb-2 no-scrollbar">
        {TECH_CATALOG.map((tech) => {
          const isSelected = tech.id === activeTech.id;

          return (
            <button
              key={tech.id}
              type="button"
              onClick={() => setActiveTechId(tech.id)}
              className={cn(
                "px-4 sm:px-5 py-2.5 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer select-none inline-flex items-center gap-2.5 shrink-0 border",
                isSelected
                  ? "bg-[#060B22] text-[#FFB020] border-[#FFB020] shadow-md ring-2 ring-[#FFB020]/25 scale-102"
                  : "bg-white text-slate-700 border-[#E2DBD0] hover:border-slate-400 hover:bg-[#FAF8F5]"
              )}
            >
              <span>{tech.name}</span>
              <span
                className={cn(
                  "w-1.5 h-1.5 rounded-full",
                  isSelected ? "bg-emerald-400 animate-pulse" : "bg-slate-300"
                )}
              />
            </button>
          );
        })}
      </div>

      {/* ============================================================== */}
      {/* 2. ARCHITECTURE & PERFORMANCE SHOWCASE STUDIO (ZERO FAKE CODE)  */}
      {/* ============================================================== */}
      <div className="rounded-3xl bg-white border border-[#E2DBD0] shadow-xl overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
          {/* ========================================================== */}
          {/* LEFT COLUMN: Strategic Business Value & Stack Features (6) */}
          {/* ========================================================== */}
          <div className="lg:col-span-6 p-6 sm:p-8 lg:p-10 flex flex-col justify-between space-y-6 border-b lg:border-b-0 lg:border-r border-[#E2DBD0]">
            <div className="space-y-4">
              <div className="flex items-center justify-between gap-3">
                <span className="text-[10px] sm:text-xs font-black uppercase tracking-wider text-[#B87A00] bg-[#FFB020]/15 px-3 py-1 rounded-full border border-[#FFB020]/30 font-mono">
                  {activeTech.badge}
                </span>

                <span className="text-xs font-mono font-bold text-slate-500">
                  {activeTech.architectureTier}
                </span>
              </div>

              <h3 className="font-display font-black text-2xl sm:text-3xl text-[#0B1B3A] tracking-tight leading-tight">
                {activeTech.headline}
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                {activeTech.businessImpact}
              </p>

              {/* Stack Ecosystem Pills */}
              <div className="pt-2">
                <div className="text-[10.5px] font-black uppercase tracking-wider text-slate-500 mb-2">
                  Integrated Engineering Ecosystem:
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {activeTech.stackPairings.map((tool, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-lg bg-[#FAF8F5] border border-[#E2DBD0] text-xs font-semibold text-[#0B1B3A]"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* Verified Production Inclusions */}
              <div className="pt-3 border-t border-slate-100 space-y-2">
                <div className="text-[10.5px] font-black uppercase tracking-wider text-slate-500">
                  Architectural Deliverables:
                </div>

                <div className="space-y-2 text-xs text-slate-700">
                  {activeTech.keyAdvantages.map((adv, i) => (
                    <div key={i} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#FFB020] shrink-0 mt-0.5" />
                      <span className="font-medium text-xs leading-snug">{adv}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Direct Tech Quote Action */}
            <div className="pt-4 border-t border-slate-100">
              <Link
                href="/get-a-quote"
                className="btn-luxury-navy w-full py-3 px-5 rounded-xl text-xs font-black uppercase tracking-wider flex items-center justify-center gap-2 shadow-sm cursor-pointer text-center group"
              >
                <span>Hire Dedicated {activeTech.name} Developers</span>
                <ArrowRight className="w-4 h-4 text-[#FFB020] group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* ========================================================== */}
          {/* RIGHT COLUMN: Visual Architecture Pipeline & Benchmarks (6)*/}
          {/* ========================================================== */}
          <div className="lg:col-span-6 p-6 sm:p-8 lg:p-10 bg-gradient-to-br from-[#060B22] to-[#0B1B3A] text-white flex flex-col justify-between space-y-6 relative overflow-hidden">
            {/* Ambient Background Glow */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#FFB020]/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />

            {/* Top Performance Header */}
            <div className="flex items-center justify-between pb-4 border-b border-white/10 relative z-10">
              <div className="flex items-center gap-2 text-xs font-mono text-slate-300">
                <Activity className="w-4 h-4 text-[#FFB020]" />
                <span className="font-bold uppercase tracking-wider">
                  Verified Performance Benchmark
                </span>
              </div>

              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 font-mono text-[11px] font-bold">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>100/100 AUDIT</span>
              </div>
            </div>

            {/* Speed Gauge & Comparison Matrix */}
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center relative z-10">
              {/* Circular Speed Rating Indicator (5 cols) */}
              <div className="sm:col-span-5 p-4 rounded-2xl bg-white/[0.04] border border-white/10 flex flex-col items-center justify-center text-center space-y-1">
                <div className="relative w-24 h-24 flex items-center justify-center">
                  <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                    <path
                      className="text-white/10"
                      strokeWidth="3"
                      stroke="currentColor"
                      fill="none"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    <path
                      className="text-emerald-400 transition-all duration-1000 ease-out"
                      strokeDasharray={`${activeTech.speedScore}, 100`}
                      strokeWidth="3"
                      strokeLinecap="round"
                      stroke="currentColor"
                      fill="none"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="font-display font-black text-2xl text-white">
                      {activeTech.speedScore}
                    </span>
                    <span className="text-[9px] uppercase tracking-wider text-slate-400 font-bold">
                      Grade A+
                    </span>
                  </div>
                </div>

                <div className="text-xs font-bold text-slate-200">
                  Lighthouse Score
                </div>
                <div className="text-[10px] text-emerald-400 font-mono">
                  Google Verified
                </div>
              </div>

              {/* Speed Benchmark Comparison Bars (7 cols) */}
              <div className="sm:col-span-7 space-y-3">
                <div className="p-3 rounded-xl bg-white/[0.04] border border-emerald-500/30 space-y-1.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-white flex items-center gap-1.5">
                      <Zap className="w-3.5 h-3.5 text-emerald-400" />
                      <span>HDM Architecture Paint</span>
                    </span>
                    <span className="font-mono font-bold text-emerald-400 text-sm">
                      {activeTech.lcpSpeed}
                    </span>
                  </div>
                  <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                    <div className="bg-gradient-to-r from-emerald-500 to-[#FFB020] h-full w-[95%] rounded-full" />
                  </div>
                  <div className="text-[10px] text-slate-400">
                    Sub-second LCP benchmark eliminates commercial bounce rates.
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 space-y-1.5 opacity-70">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-400">Standard Bloated Build</span>
                    <span className="font-mono text-slate-400 text-xs">
                      {activeTech.traditionalSpeed}
                    </span>
                  </div>
                  <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-rose-500/70 h-full w-[35%] rounded-full" />
                  </div>
                </div>
              </div>
            </div>

            {/* Architecture Pipeline Flow Diagram (Zero Code — Pure Visual Architecture) */}
            <div className="space-y-2.5 relative z-10">
              <div className="text-[10.5px] font-mono font-bold uppercase tracking-wider text-[#FFB020] flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5" />
                <span>Production Architecture Flow</span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {activeTech.pipelineSteps.map((step, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-white/[0.04] border border-white/10 hover:border-[#FFB020]/40 transition-colors space-y-1 relative"
                  >
                    <div className="text-[9px] font-mono font-bold text-slate-400 uppercase tracking-wider">
                      Stage 0{idx + 1}
                    </div>
                    <div className="font-bold text-xs text-white leading-tight">
                      {step.label}
                    </div>
                    <div className="text-[10.5px] text-slate-300 leading-snug">
                      {step.detail}
                    </div>
                    <div className="pt-1">
                      <span className="text-[9px] font-mono font-bold text-[#FFB020] bg-[#FFB020]/15 px-1.5 py-0.5 rounded border border-[#FFB020]/30 inline-block">
                        {step.badge}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Enterprise Trust Guarantee */}
            <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-300 relative z-10">
              <span className="flex items-center gap-1.5 text-[#FFB020] font-semibold">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Zero Platform Lock-In · 100% Client Code Ownership</span>
              </span>
              <span className="text-slate-400 font-mono text-[10px]">
                Senior Staff Only
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

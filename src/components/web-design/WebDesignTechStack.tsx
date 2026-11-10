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

// Authentic Official Framework & CMS Brand Logos
function NextJsIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 180 180" fill="none">
      <circle cx="90" cy="90" r="90" fill="#000" />
      <path
        d="M149.508 157.438L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.138 149.508 157.438Z"
        fill="url(#next-diag)"
      />
      <path d="M115 54H127V126H115V54Z" fill="url(#next-vert)" />
      <defs>
        <linearGradient id="next-diag" x1="109.5" y1="116.5" x2="144.5" y2="160.5" gradientUnits="userSpaceOnUse">
          <stop stopColor="#fff" />
          <stop offset="1" stopColor="#fff" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="next-vert" x1="121" y1="54" x2="120.799" y2="106.875" gradientUnits="userSpaceOnUse">
          <stop stopColor="#fff" />
          <stop offset="1" stopColor="#fff" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function ReactIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none">
      <ellipse cx="50" cy="50" rx="42" ry="16" stroke="#00D8FF" strokeWidth="4" />
      <ellipse cx="50" cy="50" rx="42" ry="16" stroke="#00D8FF" strokeWidth="4" transform="rotate(60 50 50)" />
      <ellipse cx="50" cy="50" rx="42" ry="16" stroke="#00D8FF" strokeWidth="4" transform="rotate(120 50 50)" />
      <circle cx="50" cy="50" r="7" fill="#00D8FF" />
    </svg>
  );
}

function TailwindIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path
        d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.335 6.182 14.974 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.335 13.382 8.974 12 6.001 12z"
        fill="#38BDF8"
      />
    </svg>
  );
}

function ShopifyIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path
        d="M20.25 6.75l-2.25-1.5-1.5.75-2.25-3.75L12 3l-1.5-.75L8.25 6 6.75 5.25 4.5 6.75 3 21h18l-.75-14.25z"
        fill="#95BF47"
      />
      <path
        d="M14.25 10.5c-.75-.75-1.5-.75-2.25-.75s-1.5 0-2.25.75c-.75.75-.75 1.5-.75 2.25 0 2.25 3.75 3 3.75 4.5s-.75 1.5-1.5 1.5-1.5-.75-1.5-1.5h-1.5c0 1.5 1.5 2.25 3 2.25s3-.75 3-2.25c0-2.25-3.75-3-3.75-4.5s.75-1.5 1.5-1.5 1.5.75 1.5 1.5h1.5c0-1.5-.75-2.25-1.5-2.25z"
        fill="#fff"
      />
    </svg>
  );
}

function WordPressIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" fill="#21759B" />
      <path
        d="M3.75 12c0 3.75 2.5 6.75 6 7.75l-4.5-12.5C4.25 8.75 3.75 10.25 3.75 12zm13.75 5.5l-3.25-9.5c.75-.05 1.25-.1 1.25-.1.5-.05.45-.75-.05-.75 0 0-1.5.15-2.5.15-1 0-2.5-.15-2.5-.15-.5 0-.55.7.05.75 0 0 .5.05 1.05.1l1.55 4.25-2.25 6.75c1-.25 2-.5 3.15-.5.5 0 1 .05 1.5.15zm-4.75-14.25c-4.75 0-8.5 3.75-8.5 8.5 0 1.25.25 2.25.75 3.25L9.5 5.25c0-.5-.05-1-.25-1.25-.25-.25-.75-.25-1.25-.25v-.5c1 .05 2 .05 3.25.05 1.25 0 2.25 0 3.25-.05v.5c-.5 0-1 0-1.25.25-.2.25-.25.75-.25 1.25l-.25 1.5 3 8.75c1.25-1.75 2-4 2-6.25 0-4.75-3.75-8.5-8.5-8.5z"
        fill="#fff"
      />
    </svg>
  );
}

function SupabaseIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path
        d="M12.5 2L3 13.5h7.5L8.5 22 20 10.5h-7.5L12.5 2z"
        fill="url(#supa-grad)"
      />
      <defs>
        <linearGradient id="supa-grad" x1="3" y1="2" x2="20" y2="22" gradientUnits="userSpaceOnUse">
          <stop stopColor="#3ECF8E" />
          <stop offset="1" stopColor="#249361" />
        </linearGradient>
      </defs>
    </svg>
  );
}

interface TechArchitectureItem {
  id: string;
  name: string;
  badge: string;
  category: "modern" | "commerce" | "cms";
  icon: React.ReactNode;
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
    badge: "Edge React Engine",
    category: "modern",
    icon: <NextJsIcon className="w-6 h-6 shrink-0" />,
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
    badge: "Concurrent UI Engine",
    category: "modern",
    icon: <ReactIcon className="w-6 h-6 shrink-0" />,
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
    name: "Tailwind CSS",
    badge: "Zero-Bloat Styling",
    category: "modern",
    icon: <TailwindIcon className="w-6 h-6 shrink-0" />,
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
    badge: "Headless E-Com",
    category: "commerce",
    icon: <ShopifyIcon className="w-6 h-6 shrink-0" />,
    headline: "High-AOV Headless Commerce with Global Checkouts",
    businessImpact:
      "We build customized Shopify Liquid 2.0 themes and headless Storefront APIs that combine sub-second browsing with Shopify's battle-tested 1-tap checkout.",
    speedScore: 97,
    lcpSpeed: "0.78s",
    traditionalSpeed: "4.2s",
    architectureTier: "Headless Storefront API",
    stackPairings: ["Liquid 2.0", "Storefront API", "Klaviyo", "Recharge"],
    keyAdvantages: [
      "Instant slide-out cart drawer with dynamic free shipping bar",
      "Multi-currency conversion with localized payment routing",
      "Automated webhooks syncing to ERP, inventory, and fulfillment",
      "Zero app code bloat slowing mobile collection browsing",
    ],
    pipelineSteps: [
      { label: "Storefront", detail: "Next.js / Headless Edge storefront", badge: "Sub-Second" },
      { label: "Product Cache", detail: "Real-time edge inventory lookup", badge: "Fast Sync" },
      { label: "Checkout", detail: "Shop Pay 1-tap global checkout", badge: "Max Conv." },
      { label: "Post-Purchase", detail: "ERP webhook automated sync", badge: "Real-Time" },
    ],
  },
  {
    id: "wordpress",
    name: "WordPress CMS",
    badge: "Client-Editable Hub",
    category: "cms",
    icon: <WordPressIcon className="w-6 h-6 shrink-0" />,
    headline: "Custom Gutenberg Block Architecture with Zero Theme Bloat",
    businessImpact:
      "Empower your marketing team to edit and publish pages without breaking layouts. We build lean, bespoke WordPress themes with zero slow page-builder bloat.",
    speedScore: 96,
    lcpSpeed: "0.85s",
    traditionalSpeed: "4.8s",
    architectureTier: "Bespoke Clean Theme Engine",
    stackPairings: ["Custom Gutenberg", "ACF Pro", "WPGraphQL", "Redis Cache"],
    keyAdvantages: [
      "Custom visual block library matching approved Figma designs",
      "Zero dependency on slow, insecure third-party plugins",
      "Automated Redis object caching and server-level SSL",
      "Seamless REST API and GraphQL endpoints for headless growth",
    ],
    pipelineSteps: [
      { label: "Editor UI", detail: "Custom Gutenberg block suite", badge: "ACF Pro" },
      { label: "Cache Layer", detail: "Redis in-memory query accelerator", badge: "0.02s DB" },
      { label: "Asset CDN", detail: "Cloudflare image and script CDN", badge: "Global" },
      { label: "Admin Access", detail: "Granular client publishing roles", badge: "Locked Down" },
    ],
  },
  {
    id: "supabase",
    name: "Supabase & SQL",
    badge: "Postgres Cloud Backend",
    category: "modern",
    icon: <SupabaseIcon className="w-6 h-6 shrink-0" />,
    headline: "Enterprise Postgres Database with Row-Level Security",
    businessImpact:
      "Scalable user authentication, real-time database subscriptions, and automated backups for web portals, SaaS platforms, and enterprise data apps.",
    speedScore: 99,
    lcpSpeed: "0.52s",
    traditionalSpeed: "3.1s",
    architectureTier: "Serverless PostgreSQL",
    stackPairings: ["PostgreSQL", "Prisma", "JWT Auth", "Cloud Functions"],
    keyAdvantages: [
      "Bank-grade Row-Level Security (RLS) policies",
      "Instant real-time data sync for customer dashboards",
      "Automated point-in-time database backups & failover",
      "Scales from 10 users to 10M+ without server management",
    ],
    pipelineSteps: [
      { label: "Auth Layer", detail: "Secure JWT & OAuth user sessions", badge: "Zero-Trust" },
      { label: "Postgres DB", detail: "Optimized relational data queries", badge: "ACID Safe" },
      { label: "Edge Functions", detail: "Serverless business logic execution", badge: "< 20ms" },
      { label: "Client Sync", detail: "Real-time websocket telemetry stream", badge: "Live Sync" },
    ],
  },
];

export function WebDesignTechStack() {
  const [activeTechId, setActiveTechId] = useState<string>("nextjs");

  const activeTech =
    TECH_CATALOG.find((t) => t.id === activeTechId) || TECH_CATALOG[0];

  return (
    <div className="space-y-6 sm:space-y-8 max-w-7xl mx-auto text-left select-none">
      {/* ============================================================== */}
      {/* 1. CLEAN INTERACTIVE TECH CARDS GRID WITH REAL BRAND ICONS     */}
      {/* ============================================================== */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 sm:gap-3.5">
        {TECH_CATALOG.map((tech) => {
          const isSelected = tech.id === activeTech.id;

          return (
            <button
              key={tech.id}
              type="button"
              onClick={() => setActiveTechId(tech.id)}
              className={cn(
                "p-3 sm:p-4 rounded-2xl border transition-all duration-300 cursor-pointer text-left relative overflow-hidden group flex flex-col justify-between gap-3",
                isSelected
                  ? "bg-[#060B22] text-white border-[#FFB020] shadow-md ring-2 ring-[#FFB020]/25 scale-102"
                  : "bg-white text-slate-700 border-[#E2DBD0] hover:border-slate-400 hover:bg-[#FAF8F5] hover:-translate-y-0.5"
              )}
            >
              {/* Top Accent Indicator */}
              {isSelected && (
                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#FFB020] to-transparent" />
              )}

              {/* Icon & Version Header */}
              <div className="flex items-center justify-between w-full">
                <div
                  className={cn(
                    "w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center p-1.5 transition-transform group-hover:scale-105 border",
                    isSelected
                      ? "bg-white/10 border-white/15 shadow-sm"
                      : "bg-[#FAF8F5] border-[#E2DBD0]"
                  )}
                >
                  {tech.icon}
                </div>

                <span
                  className={cn(
                    "text-[9px] font-mono font-bold px-1.5 py-0.5 rounded border",
                    isSelected
                      ? "bg-[#FFB020]/20 text-[#FFB020] border-[#FFB020]/30"
                      : "bg-[#FAF8F5] text-slate-500 border-[#E2DBD0]"
                  )}
                >
                  {tech.speedScore}/100
                </span>
              </div>

              {/* Title & Role */}
              <div>
                <h4
                  className={cn(
                    "font-display font-black text-xs sm:text-sm tracking-tight truncate transition-colors",
                    isSelected ? "text-white" : "text-[#0B1B3A] group-hover:text-[#B87A00]"
                  )}
                >
                  {tech.name}
                </h4>
                <div
                  className={cn(
                    "text-[10px] truncate font-medium transition-colors mt-0.5",
                    isSelected ? "text-slate-300" : "text-slate-500"
                  )}
                >
                  {tech.badge}
                </div>
              </div>

              {/* Live Metric Badge */}
              <div
                className={cn(
                  "text-[9.5px] font-mono font-bold flex items-center justify-between pt-1 border-t transition-colors",
                  isSelected
                    ? "border-white/10 text-emerald-400"
                    : "border-slate-100 text-slate-400 group-hover:text-slate-600"
                )}
              >
                <span>LCP: {tech.lcpSpeed}</span>
                {isSelected && (
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                )}
              </div>
            </button>
          );
        })}
      </div>

      {/* ============================================================== */}
      {/* 2. ARCHITECTURE & PERFORMANCE SHOWCASE STUDIO (ANIMATED PIPELINE)*/}
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
                    <span className="text-[9px] font-mono text-emerald-400 font-bold uppercase">
                      Grade A+
                    </span>
                  </div>
                </div>

                <div className="text-[11px] font-mono font-bold text-slate-300 pt-1">
                  Google PageSpeed Score
                </div>
              </div>

              {/* Side-by-Side LCP Speed Benchmarks (7 cols) */}
              <div className="sm:col-span-7 space-y-2.5">
                <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                  <div>
                    <div className="text-[10px] font-mono uppercase text-[#FFB020] font-bold">
                      HDM {activeTech.name} Build
                    </div>
                    <div className="text-xs text-slate-300">Sub-second initial paint</div>
                  </div>
                  <div className="font-display font-black text-xl text-emerald-400">
                    {activeTech.lcpSpeed}
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between opacity-70">
                  <div>
                    <div className="text-[10px] font-mono uppercase text-rose-400 font-bold">
                      Traditional Template
                    </div>
                    <div className="text-xs text-slate-400">Bloated legacy theme</div>
                  </div>
                  <div className="font-display font-black text-xl text-rose-400">
                    {activeTech.traditionalSpeed}
                  </div>
                </div>
              </div>
            </div>

            {/* 4-Step Animated Visual Architecture Pipeline */}
            <div className="space-y-3 relative z-10 pt-2">
              <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                <span>Production Architecture Flow:</span>
                <span className="text-emerald-400 font-bold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Edge Validated
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {activeTech.pipelineSteps.map((step, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-white/5 border border-white/10 flex flex-col justify-between space-y-1 hover:border-[#FFB020]/40 transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[9px] text-[#FFB020] font-bold">
                        0{idx + 1}
                      </span>
                      <span className="text-[9px] font-mono px-1.5 py-0.2 rounded bg-white/10 text-slate-300">
                        {step.badge}
                      </span>
                    </div>

                    <div className="font-display font-black text-xs text-white truncate">
                      {step.label}
                    </div>

                    <div className="text-[10px] text-slate-300 leading-snug line-clamp-2">
                      {step.detail}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Security & Intellectual Property Guarantee */}
            <div className="p-3.5 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-between text-xs text-slate-300 relative z-10">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-[11px]">
                  Zero proprietary vendor lock-in. 100% clean, documented, client-owned repository code.
                </span>
              </div>
              <span className="text-[#FFB020] font-mono font-bold text-[10px] shrink-0">
                100% Client Repo
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

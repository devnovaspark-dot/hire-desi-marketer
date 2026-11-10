"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Zap, ArrowRight, CheckCircle2, ShieldCheck, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import StarBorder from "@/components/ui/StarBorder";

// ====================================================================
// REAL AUTHENTIC BRAND & TECHNOLOGY SVG ICONS (HIGH QUALITY)
// ====================================================================

// 1. Official Figma Brand Icon
function RealFigmaIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 38 57" fill="none">
      <path
        d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38C23.2533 38 19 33.7467 19 28.5Z"
        fill="#1ABCFE"
      />
      <path
        d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z"
        fill="#0ACF83"
      />
      <path
        d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.25329 33.7467 0 28.5 0H19Z"
        fill="#FF7262"
      />
      <path
        d="M0 9.5C0 14.7467 4.25329 19 9.5 19H19V0H9.5C4.25329 0 0 4.25329 0 9.5Z"
        fill="#F24E1E"
      />
      <path
        d="M0 28.5C0 33.7467 4.25329 38 9.5 38H19V19H9.5C4.25329 19 0 23.2533 0 28.5Z"
        fill="#A259FF"
      />
    </svg>
  );
}

// 2. Official Next.js & React Modern Stack Icon
function RealNextJsIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 180 180" fill="none">
      <circle cx="90" cy="90" r="90" fill="#060B22" />
      <path
        d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.166 149.508 157.52Z"
        fill="url(#real-next-grad-vert)"
      />
      <rect x="115" y="54" width="12" height="72" fill="url(#real-next-grad-vert)" />
      <defs>
        <linearGradient id="real-next-grad-vert" x1="109" y1="116.5" x2="144.5" y2="160.5" gradientUnits="userSpaceOnUse">
          <stop stopColor="white" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}

// 3. Official Shopify Plus E-Commerce Icon
function RealShopifyIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 109 123" fill="none">
      <path
        d="M94.6 28.9c-.3-1.9-1.9-3.2-3.7-3.1l-10.2.8c-2.3-7-6.5-13-13.2-16.3-5.2-2.5-10.7-2.8-15.4-.8-4.6 2-7.9 5.7-9.5 10.5L32.6 23c-1.8.1-3.2 1.7-3.4 3.5L20.3 95.6c-.2 2.1 1.4 3.9 3.5 4.1.2 0 .4 0 .6 0l57.8-4.5c2.1-.2 3.7-2 3.6-4.1L94.6 28.9z"
        fill="#95BF47"
      />
      <path
        d="M67.5 26.6l-10 .8c-.1-4.1-1.4-8.2-4.1-11.2-1.9-2.1-4.4-3.5-7.4-4 3.7-3 8.9-3.3 13.2-1.2 4.9 2.4 7.8 7.9 8.3 15.6z"
        fill="#5E8E3E"
      />
      <path
        d="M57.6 43.7c-1.3-.7-2.9-1-4.7-1-3.6 0-6.5 1.6-6.5 4.2 0 2.4 2.3 3.7 5.3 5 4.4 1.9 9.2 4.4 9.2 9.7 0 6.3-5.1 10.5-12.1 10.5-4.7 0-8.3-1.3-10.6-3l1.7-5.6c2.1 1.6 5 2.6 8.2 2.6 3.5 0 5.8-1.7 5.8-4.2 0-2.4-2.4-3.8-5.8-5.2-4.2-1.8-8.8-4.2-8.8-9.5 0-6.2 5.1-10.3 11.8-10.3 4.1 0 7.5 1 9.4 2.2l-2.9 6.6z"
        fill="#FFFFFF"
      />
    </svg>
  );
}

// 4. Official Webflow CMS & Visual Engineering Icon
function RealWebflowIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path
        d="M17.818 5.76c-1.393 0-2.585.83-3.097 2.028-.432-1.198-1.573-2.028-2.91-2.028-1.728 0-3.13 1.402-3.13 3.13v.135c-.004.053-.004.106-.004.16 0 1.205.696 2.247 1.706 2.766L7.29 17.585c-.078.188-.027.406.126.54.153.133.376.155.553.053l4.337-2.502v-3.722c0-.658.534-1.192 1.192-1.192.658 0 1.192.534 1.192 1.192v2.791l3.128-1.806V8.89c0-1.728-1.402-3.13-3.13-3.13h2.13z"
        fill="#146EF5"
      />
    </svg>
  );
}

// 5. Official Supabase Cloud Database & Auth Icon
function RealSupabaseIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path
        d="M13.4 2.1c-.6-.7-1.7-.3-1.7.7v8.5H3.1c-.8 0-1.3.8-.8 1.5l8.5 11.2c.6.8 1.8.4 1.8-.6v-8.5h8.6c.8 0 1.3-.8.8-1.5L13.4 2.1z"
        fill="url(#real-supa-grad-vert)"
      />
      <defs>
        <linearGradient id="real-supa-grad-vert" x1="3" y1="2" x2="21" y2="22" gradientUnits="userSpaceOnUse">
          <stop stopColor="#3ECF8E" />
          <stop offset="1" stopColor="#1E8E5A" />
        </linearGradient>
      </defs>
    </svg>
  );
}

// 6. Official Google Core Web Vitals & Lighthouse Speed Icon
function RealVitalsIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path
        d="M12 2C6.48 2 2 6.48 2 12c0 3.03 1.35 5.75 3.5 7.61V16c0-.55.45-1 1-1h1.1c.32-.82.8-1.55 1.4-2.16V10c0-.55.45-1 1-1h6c.55 0 1 .45 1 1v2.84c.6.61 1.08 1.34 1.4 2.16H18.5c.55 0 1 .45 1 1v3.61C20.65 17.75 22 15.03 22 12c0-5.52-4.48-10-10-10z"
        fill="#FF5E00"
      />
      <path d="M12 7l1.5 3.5L17 12l-3.5 1.5L12 17l-1.5-3.5L7 12l3.5-1.5L12 7z" fill="#00C49F" />
    </svg>
  );
}

// ====================================================================
// 6 ARCHITECTURE NODES DATA MODEL
// ====================================================================
interface ArchitectureNode {
  id: string;
  number: string;
  name: string;
  tag: string;
  badge: string;
  icon: React.ComponentType<{ className?: string }>;
  statusLabel: string;
  statusMetric: string;
  headline: string;
  description: string;
  deliverables: string[];
}

const ARCHITECTURE_NODES: ArchitectureNode[] = [
  {
    id: "figma",
    number: "01",
    name: "Custom Website Design & Engineering",
    tag: "Figma to Next.js 16",
    badge: "100% Custom UI",
    icon: RealFigmaIcon,
    statusLabel: "Compiling Design Tokens to Semantic Next.js 16",
    statusMetric: "100% Bespoke Tokens",
    headline: "Bespoke Digital Experiences Engineered from Clean Figma Tokens",
    description:
      "Every single pixel is designed from scratch in Figma to reflect your brand's authority, then compiled into semantic Next.js 16 code with zero generic theme bloat.",
    deliverables: [
      "Bespoke Figma UI/UX prototype & complete interactive design system",
      "Strict auto-layout token variables (spacing, typography, color themes)",
      "Zero generic template bloat or inherited technical debt",
    ],
  },
  {
    id: "nextjs",
    number: "02",
    name: "Website Redesign & Modernization",
    tag: "Next.js 16 & React 19",
    badge: "< 0.8s LCP SLA",
    icon: RealNextJsIcon,
    statusLabel: "Deploying Sub-Second Edge Server-Side Rendering",
    statusMetric: "< 0.8s LCP Benchmark",
    headline: "Sub-Second Edge Performance with React 19 Concurrent Rendering",
    description:
      "Engineered for instantaneous route transitions, fluid micro-interactions, and Google Lighthouse 100/100 Core Web Vitals across every global user session.",
    deliverables: [
      "Next.js 16 App Router with React 19 concurrent edge rendering",
      "Sub-second Largest Contentful Paint (< 0.8s LCP benchmark)",
      "Google Lighthouse Grade A+ 100/100 Core Web Vitals certified",
    ],
  },
  {
    id: "commerce",
    number: "03",
    name: "High-Velocity E-Commerce Storefronts",
    tag: "Shopify Plus & Headless",
    badge: "4.6% Avg Conv.",
    icon: RealShopifyIcon,
    statusLabel: "Optimizing Average Order Value & 1-Tap Checkout",
    statusMetric: "+42% Checkout Velocity",
    headline: "High-Velocity Storefronts Built for Maximum Average Order Value",
    description:
      "Custom Shopify Plus and headless storefronts with instant slide-out micro-carts, free-shipping threshold bars, and seamless multi-currency checkouts.",
    deliverables: [
      "Custom Shopify Plus theme or headless storefront architecture",
      "Instant slide-out micro-cart with dynamic free-shipping progress bar",
      "1-Tap native express checkout (Shop Pay, Apple Pay, Google Pay)",
    ],
  },
  {
    id: "cms",
    number: "04",
    name: "Client-Editable CMS & Webflow Platforms",
    tag: "Zero-Code Autonomy",
    badge: "Marketing Freedom",
    icon: RealWebflowIcon,
    statusLabel: "Empowering Marketing Team Publishing Autonomy",
    statusMetric: "Zero Dev Dependency",
    headline: "Empower Your Marketing Team with Zero Developer Dependencies",
    description:
      "Intuitive drag-and-drop publishing on Webflow, WordPress, or modern Headless CMS with structured schemas tailored strictly to approved brand guidelines.",
    deliverables: [
      "Intuitive visual block editor strictly tailored to approved brand guidelines",
      "Zero code required for creating landing pages, blogs, and case studies",
      "Recorded Loom video training library for your marketing staff",
    ],
  },
  {
    id: "cloud",
    number: "05",
    name: "Full-Stack Web Applications & Portals",
    tag: "Supabase & Cloud APIs",
    badge: "RBAC & MFA",
    icon: RealSupabaseIcon,
    statusLabel: "Securing Client Portal Sessions & DB Webhooks",
    statusMetric: "Enterprise RBAC",
    headline: "Secure Client Portals & Scalable Cloud API Integrations",
    description:
      "Role-based access control, multi-factor authentication, and PostgreSQL database connections for enterprise client portals and internal platforms.",
    deliverables: [
      "Role-based access control (RBAC) with row-level database security",
      "High-availability PostgreSQL database with real-time webhooks",
      "Enterprise OAuth single sign-on, MFA, and automated audit logs",
    ],
  },
  {
    id: "vitals",
    number: "06",
    name: "Speed Tuning & Core Web Vitals Optimization",
    tag: "Google Top 1% Lighthouse",
    badge: "Google Top 1%",
    icon: RealVitalsIcon,
    statusLabel: "Google Lighthouse Certified Speed & 301 Protection",
    statusMetric: "100/100 Core Vitals",
    headline: "Google Lighthouse Certified Speed & 301 SEO Authority Protection",
    description:
      "Protect established search keyword rankings during website modernizations while passing Google Core Web Vitals with flying colors.",
    deliverables: [
      "Rigorous 1:1 301 redirect mapping preventing any 404 traffic loss",
      "Automated JSON-LD rich snippet schemas for Google search results",
      "Zero render-blocking scripts & automated WebP/AVIF image pipeline",
    ],
  },
];

export default function BentoGrid() {
  const [activeIndex, setActiveIndex] = useState<number>(1);
  const [progress, setProgress] = useState<number>(85);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const pauseTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const active = ARCHITECTURE_NODES[activeIndex] || ARCHITECTURE_NODES[0];

  // Auto-cycle through the 6 architecture nodes unless the user interacts
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % ARCHITECTURE_NODES.length);
      setProgress(60);
    }, 4600);

    return () => clearInterval(interval);
  }, [isPaused]);

  // Micro progress animation for telemetry
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => (prev >= 96 ? 70 : prev + 5));
    }, 1600);

    return () => clearInterval(timer);
  }, [activeIndex]);

  const handleSelectNode = (index: number) => {
    setActiveIndex(index);
    setProgress(85);
    setIsPaused(true);

    if (pauseTimeoutRef.current) {
      clearTimeout(pauseTimeoutRef.current);
    }
    pauseTimeoutRef.current = setTimeout(() => {
      setIsPaused(false);
    }, 14000);
  };

  return (
    <div className="w-full select-none text-left">
      {/* 2-Column Vertical Layout: Left Vertical Selectors, Right Architecture Theater */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start max-w-6xl mx-auto px-2 sm:px-4">
        {/* ==================================================================== */}
        {/* LEFT COLUMN: VERTICAL LIST OF 6 ARCHITECTURE NODES                   */}
        {/* ==================================================================== */}
        <div className="lg:col-span-5 space-y-2.5">
          <div className="flex items-center justify-between px-2 pb-1 text-xs font-mono font-bold text-slate-500 uppercase tracking-wider">
            <span>Select Architecture Solution:</span>
            <span className="text-emerald-700 font-bold">Solution 0{activeIndex + 1} of 06</span>
          </div>

          <div className="space-y-2.5">
            {ARCHITECTURE_NODES.map((node, idx) => {
              const Icon = node.icon;
              const isActive = idx === activeIndex;

              return (
                <button
                  key={node.id}
                  type="button"
                  onClick={() => handleSelectNode(idx)}
                  className={cn(
                    "w-full text-left p-3.5 sm:p-4 rounded-2xl transition-all duration-300 flex items-center justify-between border cursor-pointer group relative outline-none",
                    isActive
                      ? "bg-[#060B22] text-white border-[#FFB020] shadow-xl shadow-slate-900/10 scale-[1.01]"
                      : "bg-white text-slate-700 border-[#E2DBD0] hover:border-slate-400 hover:bg-slate-50/70 hover:shadow-sm"
                  )}
                >
                  {/* Subtle active left indicator bar */}
                  {isActive && (
                    <div className="absolute left-0 top-3 bottom-3 w-1.5 bg-[#FFB020] rounded-r-full" />
                  )}

                  <div className="flex items-center gap-3.5 min-w-0 pr-2">
                    {/* Real Authentic Brand Icon Container */}
                    <div
                      className={cn(
                        "w-11 h-11 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center shrink-0 border transition-all duration-300",
                        isActive
                          ? "bg-white/10 border-white/20 shadow-inner"
                          : "bg-[#FAF8F5] border-[#E2DBD0] group-hover:bg-white group-hover:scale-105"
                      )}
                    >
                      <Icon className="w-6 h-6 sm:w-6.5 sm:h-6.5" />
                    </div>

                    <div className="min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span
                          className={cn(
                            "text-[10px] font-mono font-black tracking-wider uppercase",
                            isActive ? "text-[#FFB020]" : "text-slate-400"
                          )}
                        >
                          {node.number}
                        </span>

                        <span
                          className={cn(
                            "text-[10px] font-mono px-2 py-0.5 rounded-full border transition-colors",
                            isActive
                              ? "bg-white/10 border-white/20 text-slate-300"
                              : "bg-slate-100 border-slate-200 text-slate-600"
                          )}
                        >
                          {node.tag}
                        </span>
                      </div>

                      <div
                        className={cn(
                          "font-display font-black text-xs sm:text-sm tracking-tight truncate mt-1 transition-colors",
                          isActive ? "text-white" : "text-[#060B22] group-hover:text-black"
                        )}
                      >
                        {node.name}
                      </div>
                    </div>
                  </div>

                  <ChevronRight
                    className={cn(
                      "w-4 h-4 shrink-0 transition-transform duration-300",
                      isActive
                        ? "text-[#FFB020] translate-x-1"
                        : "text-slate-400 group-hover:translate-x-0.5 group-hover:text-slate-700"
                    )}
                  />
                </button>
              );
            })}
          </div>
        </div>

        {/* ==================================================================== */}
        {/* RIGHT COLUMN: ACTIVE SOLUTION ARCHITECTURE ENGINE & DELIVERABLES     */}
        {/* ==================================================================== */}
        <div className="lg:col-span-7">
          <div className="bg-white rounded-3xl border border-[#E2DBD0] p-6 sm:p-8 shadow-xl shadow-slate-200/50 relative overflow-hidden text-left space-y-6">
            {/* Top Status & Central Hub Capsule */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-[#E2DBD0]/70">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#060B22] text-white font-display font-black text-xs border border-[#FFB020]/40 shadow-xs">
                <Zap className="w-3.5 h-3.5 text-[#FFB020] fill-[#FFB020] animate-pulse" />
                <span>Compiled Production Architecture</span>
              </div>

              <div className="flex items-center gap-2 text-xs font-mono">
                <span className="text-slate-500 font-medium">Standard:</span>
                <span className="px-2.5 py-0.5 rounded-md bg-emerald-50 text-emerald-800 font-bold border border-emerald-200">
                  {active.badge}
                </span>
              </div>
            </div>

            {/* Monochromatic Refined Telemetry Bar (Zero Flashy Rainbow Color) */}
            <div className="space-y-2 bg-[#FAF8F5] p-3.5 sm:p-4 rounded-2xl border border-[#E2DBD0]">
              <div className="flex items-center justify-between text-xs font-mono">
                <div className="flex items-center gap-2 text-slate-700">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600" />
                  </span>
                  <span className="truncate max-w-[240px] sm:max-w-none text-left font-medium">
                    {active.statusLabel}
                  </span>
                </div>
                <span className="text-emerald-800 font-bold shrink-0">
                  {active.statusMetric}
                </span>
              </div>

              {/* Clean Single-Palette Progress Bar (Refined Gold on Slate Track) */}
              <div className="h-2 w-full bg-slate-200 rounded-full overflow-hidden p-0.5">
                <div
                  className="h-full bg-gradient-to-r from-[#FFB020] to-[#E59A10] rounded-full transition-all duration-700 ease-out"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

            {/* Deep-Dive Solution Headline & Narrative */}
            <div className="space-y-2">
              <div className="text-[11px] font-mono font-black uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                <span>Blueprint 0{activeIndex + 1}</span>
                <span>//</span>
                <span className="text-[#060B22]">{active.tag}</span>
              </div>

              <h3 className="font-display font-black text-xl sm:text-2xl lg:text-3xl text-[#0B1B3A] tracking-tight leading-snug">
                {active.headline}
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                {active.description}
              </p>
            </div>

            {/* 3 Verified Architecture Deliverables */}
            <div className="pt-2 space-y-2.5 border-t border-slate-100">
              <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Verified Architecture Deliverables:</span>
              </div>
              <div className="space-y-2">
                {active.deliverables.map((item, dIdx) => (
                  <div key={dIdx} className="flex items-start gap-2.5 text-xs text-slate-800">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="font-medium text-[13px] leading-snug">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Primary Action Button (StarBorder to /get-a-quote with ZERO Numerical Pricing) */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-slate-100">
              <StarBorder
                as={Link}
                href="/get-a-quote"
                className="w-full sm:w-auto py-3 px-6 rounded-xl text-xs font-black uppercase tracking-wider inline-flex items-center justify-center gap-2 shadow-lg cursor-pointer text-center group"
                radius={12}
                color="#FFB020"
                trailColor="#FFB020"
                backgroundColor="#060B22"
                textColor="#FFFFFF"
                borderColor="rgba(255, 176, 32, 0.5)"
                sparkle={true}
                glow={0.8}
              >
                <span>Discuss {active.name.split(" ")[0]} Scope</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#FFB020] group-hover:translate-x-1 transition-transform" />
              </StarBorder>

              <span className="text-[11px] font-mono text-slate-500 text-center sm:text-right">
                Zero Lock-In • Day-One GitHub Commit Access
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Palette,
  RefreshCw,
  ShoppingBag,
  Layout,
  Zap,
  Code2,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Lock,
  ChevronRight,
  Activity,
  Check,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface ShowcaseService {
  id: string;
  number: string;
  title: string;
  shortTag: string;
  subtag: string;
  categoryBadge: string;
  image: string;
  stagingUrl: string;
  tagline: string;
  description: string;
  metricBadge: string;
  speedScore: string;
  deliverables: string[];
}

const SHOWCASE_SERVICES: ShowcaseService[] = [
  {
    id: "custom-design",
    number: "01",
    title: "Custom Website Design & Engineering",
    shortTag: "Bespoke Websites",
    subtag: "Handcrafted Figma to Next.js 16",
    categoryBadge: "100% Bespoke Architecture",
    image: "/images/services-ui-design-showcase.jpg",
    stagingUrl: "bespoke-design.hdm.preview",
    tagline: "Handcrafted Figma wireframes engineered into scalable Next.js 16 code",
    description:
      "Every pixel designed exclusively for your brand's market positioning. Clean semantic HTML5, fluid responsive breakpoints, and sub-second edge rendering with zero bloated templates.",
    metricBadge: "Figma to Code",
    speedScore: "100/100 Core Web Vitals",
    deliverables: [
      "Custom responsive Figma design system",
      "Sub-second Core Web Vitals speed (< 0.8s LCP)",
      "Automated Schema.org structured SEO metadata",
    ],
  },
  {
    id: "website-redesign",
    number: "02",
    title: "Website Redesign & Modernization",
    shortTag: "Website Redesign",
    subtag: "Zero SEO Ranking Loss Guarantee",
    categoryBadge: "Modernization + CRO",
    image: "/images/case-study-aesthetic.webp",
    stagingUrl: "modernization.hdm.preview",
    tagline: "Transform outdated websites while strictly safeguarding existing SEO equity",
    description:
      "Modernize legacy platforms into high-converting digital assets while meticulously preserving your Google keyword rankings, backlink equity, and search domain authority.",
    metricBadge: "301 SEO Protected",
    speedScore: "+180% Avg. Conversion Lift",
    deliverables: [
      "Full UI/UX audit & conversion friction analysis",
      "Strict 1:1 SEO URL redirect safeguard mapping",
      "Frictionless mobile lead-capture funnels",
    ],
  },
  {
    id: "ecommerce-development",
    number: "03",
    title: "High-Velocity E-Commerce Storefronts",
    shortTag: "E-Commerce Stores",
    subtag: "Shopify Plus & Headless Checkouts",
    categoryBadge: "Shopify Plus & Headless",
    image: "/images/case-study-cafe.webp",
    stagingUrl: "storefront-checkout.hdm.preview",
    tagline: "Lightning-fast stores built for maximum average order value & 1-tap checkout",
    description:
      "Fast online storefronts optimized for high average order value (AOV), instant slide-out micro-carts, global multi-currency checkouts, and automated ERP webhook syncing.",
    metricBadge: "1-Tap Checkout",
    speedScore: "4.6% Avg. Checkout Conv.",
    deliverables: [
      "Custom Shopify 2.0 or headless commerce architecture",
      "Instant slide-out micro-cart with free-shipping triggers",
      "Automated inventory, ERP, and CRM webhook sync",
    ],
  },
  {
    id: "cms-development",
    number: "04",
    title: "Client-Editable CMS & Webflow Platforms",
    shortTag: "Headless & CMS",
    subtag: "Empower Marketing Autonomy",
    categoryBadge: "Zero Dev Dependency",
    image: "/images/blog-hero-bg.webp",
    stagingUrl: "marketing-cms.hdm.preview",
    tagline: "Empower your marketing team to publish without touching code",
    description:
      "Empower your marketing team to launch landing pages, edit copy, and publish campaigns effortlessly without touching code or waiting on external developers.",
    metricBadge: "Zero Code Needed",
    speedScore: "< 1-Hour Campaign Deploy",
    deliverables: [
      "Intuitive drag-and-drop visual block editor",
      "Zero bloated third-party plugin dependencies",
      "Built-in OpenGraph previews and dynamic sitemaps",
    ],
  },
  {
    id: "custom-web-app",
    number: "05",
    title: "Full-Stack Web Applications & Portals",
    shortTag: "Web Apps & Portals",
    subtag: "Next.js, Supabase & Cloud APIs",
    categoryBadge: "Next.js & Cloud Architecture",
    image: "/images/hero-devices-mockup.jpg",
    stagingUrl: "cloud-portal.hdm.preview",
    tagline: "Interactive client portals, SaaS dashboards & full-stack web applications",
    description:
      "Customer portals, SaaS dashboards, and high-velocity web applications built with Next.js, Node.js, and secure database integrations that scale seamlessly.",
    metricBadge: "App-Like SPA",
    speedScore: "60fps Fluid Micro-UI",
    deliverables: [
      "Interactive customer dashboards & client portals",
      "Secure user authentication (JWT / OAuth / Supabase / Auth0)",
      "Real-time notifications, reporting & CRM pipelines",
    ],
  },
  {
    id: "speed-optimization",
    number: "06",
    title: "Speed Tuning & Core Web Vitals Optimization",
    shortTag: "Speed Optimization",
    subtag: "Google Top 1% Performance",
    categoryBadge: "Google Top 1% Speed",
    image: "/images/web-dev-hero-bg.jpg",
    stagingUrl: "speed-audit.hdm.preview",
    tagline: "Remediate slow load times and eliminate layout shifts for green 95+ scores",
    description:
      "Remediate slow load times, eliminate layout shifts, and compress asset pipelines to achieve green 95+ Core Web Vitals on mobile and desktop viewports.",
    metricBadge: "< 0.8s LCP SLA",
    speedScore: "100/100 Google Vitals",
    deliverables: [
      "Elimination of render-blocking JavaScript scripts",
      "Automated modern AVIF & WebP image pipeline",
      "Zero layout shifts (CLS 0.00 guaranteed)",
    ],
  },
];

export function WebDesignServicesGrid() {
  const [selectedServiceId, setSelectedServiceId] = useState<string>("custom-design");
  const [mousePos, setMousePos] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const stageRef = useRef<HTMLDivElement>(null);

  const activeService =
    SHOWCASE_SERVICES.find((s) => s.id === selectedServiceId) ||
    SHOWCASE_SERVICES[0];

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!stageRef.current) return;
    const rect = stageRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  return (
    <div className="space-y-6 sm:space-y-8 max-w-7xl mx-auto text-left select-none">
      {/* ==================================================================== */}
      {/* 1. MASTER-DETAIL ARCHITECTURAL STUDIO SHOWCASE                       */}
      {/* ==================================================================== */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
        {/* ================================================================ */}
        {/* LEFT COLUMN (5 cols): Clean, Uniform, Attractive Solution Cards  */}
        {/* ================================================================ */}
        <div className="lg:col-span-5 space-y-2.5">
          <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-500 px-1 pb-1 flex items-center justify-between">
            <span>Select Architecture Solution:</span>
            <span className="text-[#B87A00]">6 Solutions</span>
          </div>

          <div className="space-y-2">
            {SHOWCASE_SERVICES.map((service) => {
              const isSelected = service.id === activeService.id;

              return (
                <button
                  key={service.id}
                  type="button"
                  onClick={() => setSelectedServiceId(service.id)}
                  className={cn(
                    "w-full p-3.5 sm:p-4 rounded-2xl border transition-all duration-200 cursor-pointer text-left relative overflow-hidden group flex items-center justify-between gap-3",
                    isSelected
                      ? "bg-[#060B22] text-white border-[#FFB020] shadow-md ring-1 ring-[#FFB020]/30 scale-[1.01]"
                      : "bg-white text-slate-700 border-[#E2DBD0] hover:border-slate-400 hover:bg-[#FAF8F5]"
                  )}
                >
                  {/* Left Active Accent Pill */}
                  {isSelected && (
                    <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#FFB020]" />
                  )}

                  <div className="flex items-center gap-3 min-w-0">
                    <span
                      className={cn(
                        "w-8 h-8 rounded-xl font-mono text-xs font-black flex items-center justify-center shrink-0 transition-colors",
                        isSelected
                          ? "bg-[#FFB020] text-[#060B22]"
                          : "bg-[#FAF8F5] text-slate-500 border border-[#E2DBD0] group-hover:text-[#0B1B3A]"
                      )}
                    >
                      {service.number}
                    </span>

                    <div className="min-w-0">
                      <h4
                        className={cn(
                          "font-display font-black text-sm sm:text-[14.5px] tracking-tight truncate transition-colors",
                          isSelected
                            ? "text-white"
                            : "text-[#0B1B3A] group-hover:text-[#B87A00]"
                        )}
                      >
                        {service.title}
                      </h4>
                      <div
                        className={cn(
                          "text-[11px] truncate mt-0.5 font-medium transition-colors",
                          isSelected ? "text-slate-300" : "text-slate-500"
                        )}
                      >
                        {service.subtag}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <span
                      className={cn(
                        "text-[10px] font-mono font-bold px-2 py-0.5 rounded-full border hidden sm:inline-block",
                        isSelected
                          ? "bg-[#FFB020]/20 text-[#FFB020] border-[#FFB020]/30"
                          : "bg-[#FAF8F5] text-slate-500 border-[#E2DBD0]"
                      )}
                    >
                      {service.metricBadge}
                    </span>

                    <ChevronRight
                      className={cn(
                        "w-4 h-4 transition-transform",
                        isSelected
                          ? "text-[#FFB020] translate-x-0.5"
                          : "text-slate-400 group-hover:translate-x-0.5"
                      )}
                    />
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* ================================================================ */}
        {/* RIGHT COLUMN (7 cols): Massive 3D Panoramic Browser Stage        */}
        {/* ================================================================ */}
        <div
          ref={stageRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="lg:col-span-7 lg:sticky lg:top-24 space-y-4"
          style={{
            perspective: "1400px",
          }}
        >
          {/* Top Status Indicators */}
          <div className="flex items-center justify-between px-1 text-xs">
            <div className="flex items-center gap-2">
              <span className="text-[10.5px] font-mono font-black uppercase tracking-wider text-[#B87A00] bg-[#FFB020]/15 px-3 py-0.5 rounded-full border border-[#FFB020]/30">
                {activeService.categoryBadge}
              </span>
              <span className="font-bold text-[#0B1B3A] hidden sm:inline">
                {activeService.shortTag}
              </span>
            </div>

            <div className="flex items-center gap-1.5 text-[11px] font-mono text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
              <Activity className="w-3 h-3 text-emerald-500 animate-pulse" />
              <span>{activeService.speedScore}</span>
            </div>
          </div>

          {/* Panoramic 3D Browser Viewport (STRICT ZERO TEXT OVERLAY ON IMAGE) */}
          <div
            className="rounded-3xl bg-[#060B22] border border-[#060B22]/20 shadow-[0_24px_60px_-15px_rgba(6,11,34,0.3)] overflow-hidden transition-transform duration-300 ease-out"
            style={{
              transform: `rotateY(${mousePos.x * 4}deg) rotateX(${-mousePos.y * 4}deg)`,
              transformStyle: "preserve-3d",
            }}
          >
            {/* Mac Browser Header Bar */}
            <div className="h-9 bg-[#060B22] px-4 flex items-center justify-between border-b border-white/10">
              <div className="flex items-center gap-2 shrink-0">
                <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
              </div>

              {/* Minimalist Staging URL Pill */}
              <div className="flex items-center gap-1.5 px-3.5 py-0.5 rounded-md bg-white/10 border border-white/15 text-[10.5px] text-slate-200 font-mono max-w-[280px] truncate">
                <Lock className="w-2.5 h-2.5 text-emerald-400 shrink-0" />
                <span className="truncate">{activeService.stagingUrl}</span>
              </div>

              <span className="text-[9.5px] font-mono font-bold text-[#FFB020] uppercase tracking-wider hidden sm:block">
                Production Live
              </span>
            </div>

            {/* Pristine Website Screenshot (100% Visual Craft — ZERO TEXT OVERLAYS) */}
            <div className="relative aspect-[16/10] sm:aspect-[16/9.5] w-full bg-slate-950 overflow-hidden">
              <Image
                src={activeService.image}
                alt={`${activeService.title} preview`}
                fill
                className="object-cover object-top transition-transform duration-700 ease-out hover:scale-101"
                sizes="(max-width: 1024px) 100vw, 750px"
                priority
              />
            </div>
          </div>

          {/* Clean Architectural Deliverables Strip (Below the Stage) */}
          <div className="p-5 sm:p-6 rounded-2xl bg-white border border-[#E2DBD0] shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1.5 min-w-0">
              <div className="font-display font-black text-sm sm:text-base text-[#0B1B3A]">
                {activeService.title} Deliverables
              </div>
              <div className="flex flex-wrap gap-x-3 gap-y-1 text-xs text-slate-600">
                {activeService.deliverables.map((d, i) => (
                  <span key={i} className="flex items-center gap-1">
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>{d}</span>
                  </span>
                ))}
              </div>
            </div>

            <Link
              href="/get-a-quote"
              className="btn-luxury-gold btn-shimmer py-3 px-5 rounded-xl text-xs font-black uppercase tracking-wider flex items-center justify-center gap-2 shrink-0 shadow-sm cursor-pointer whitespace-nowrap group"
            >
              <span>Discuss Solution</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

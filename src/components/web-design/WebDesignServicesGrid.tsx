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
  ExternalLink,
  Activity,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface ShowcaseService {
  id: string;
  number: string;
  title: string;
  shortTag: string;
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
    categoryBadge: "100% Bespoke Architecture",
    image: "/images/services-ui-design-showcase.jpg",
    stagingUrl: "bespoke-design.hdm.preview",
    tagline: "Handcrafted Figma wireframes engineered into scalable Next.js 16 code",
    description:
      "Every pixel designed exclusively for your brand's market positioning. Clean semantic HTML5, fluid responsive breakpoints, and sub-second edge rendering with zero bloated templates.",
    metricBadge: "Figma to Semantic Code",
    speedScore: "100/100 Core Web Vitals",
    deliverables: [
      "Custom Figma UI/UX with responsive design system",
      "Pixel-perfect responsive frontend & edge rendering",
      "Sub-second Core Web Vitals speed (< 0.8s LCP)",
      "Automated Schema.org structured SEO metadata",
    ],
  },
  {
    id: "website-redesign",
    number: "02",
    title: "Website Redesign & Modernization",
    shortTag: "Website Redesign",
    categoryBadge: "Modernization + CRO",
    image: "/images/case-study-aesthetic.webp",
    stagingUrl: "modernization.hdm.preview",
    tagline: "Transform outdated websites while strictly safeguarding existing SEO equity",
    description:
      "Modernize legacy platforms into high-converting digital assets while meticulously preserving your Google keyword rankings, backlink equity, and search domain authority.",
    metricBadge: "301 SEO Rank Protected",
    speedScore: "+180% Avg. Conversion Lift",
    deliverables: [
      "Comprehensive UI/UX audit & conversion friction analysis",
      "Modern brand aesthetic revamp & typography system",
      "Strict preservation of existing SEO rankings & 301 redirect map",
      "Frictionless lead-capture funnels and mobile navigation",
    ],
  },
  {
    id: "ecommerce-development",
    number: "03",
    title: "High-Velocity E-Commerce Storefronts",
    shortTag: "E-Commerce Stores",
    categoryBadge: "Shopify Plus & Headless",
    image: "/images/case-study-cafe.webp",
    stagingUrl: "storefront-checkout.hdm.preview",
    tagline: "Lightning-fast stores built for maximum average order value & 1-tap checkout",
    description:
      "Fast online storefronts optimized for high average order value (AOV), instant slide-out micro-carts, global multi-currency checkouts, and automated ERP webhook syncing.",
    metricBadge: "Sub-Second Micro-Cart",
    speedScore: "4.6% Avg. Checkout Conv.",
    deliverables: [
      "Custom Shopify 2.0 or headless commerce architecture",
      "Slide-out drawer cart with progressive free-shipping triggers",
      "1-tap Apple Pay, Shop Pay, Stripe, and global multi-currency",
      "Automated inventory, ERP, and CRM webhook synchronization",
    ],
  },
  {
    id: "cms-development",
    number: "04",
    title: "Client-Editable CMS & Webflow Platforms",
    shortTag: "Headless & CMS",
    categoryBadge: "Empower Marketing Teams",
    image: "/images/blog-hero-bg.webp",
    stagingUrl: "marketing-cms.hdm.preview",
    tagline: "Empower your marketing team to publish without touching code",
    description:
      "Empower your marketing team to launch landing pages, edit copy, and publish campaigns effortlessly without touching code or waiting on external developers.",
    metricBadge: "Zero Developer Dependency",
    speedScore: "< 1-Hour Campaign Deploy",
    deliverables: [
      "Custom visual block editor customized exclusively for your team",
      "Zero bloated third-party page builders for maximum edge speed",
      "Built-in metadata generation, OpenGraph previews & sitemaps",
      "Role-based publishing permissions and automated cloud backups",
    ],
  },
  {
    id: "custom-web-app",
    number: "05",
    title: "Full-Stack Web Applications & Portals",
    shortTag: "Web Apps & Portals",
    categoryBadge: "Next.js & Cloud Architecture",
    image: "/images/hero-devices-mockup.jpg",
    stagingUrl: "cloud-portal.hdm.preview",
    tagline: "Interactive client portals, SaaS dashboards & full-stack web applications",
    description:
      "Customer portals, SaaS dashboards, and high-velocity web applications built with Next.js, Node.js, and secure database integrations that scale seamlessly.",
    metricBadge: "App-Like SPA Velocity",
    speedScore: "60fps Fluid Micro-UI",
    deliverables: [
      "Interactive customer dashboards and client portals",
      "Secure user authentication (JWT / OAuth / Supabase / Auth0)",
      "Custom REST and GraphQL API development",
      "Real-time notifications, reporting, and CRM data syncing",
    ],
  },
  {
    id: "speed-optimization",
    number: "06",
    title: "Speed Tuning & Core Web Vitals Optimization",
    shortTag: "Speed Optimization",
    categoryBadge: "Google Top 1% Speed",
    image: "/images/web-dev-hero-bg.jpg",
    stagingUrl: "speed-audit.hdm.preview",
    tagline: "Remediate slow load times and eliminate layout shifts for green 95+ scores",
    description:
      "Remediate slow load times, eliminate layout shifts, and compress asset pipelines to achieve green 95+ Core Web Vitals on mobile and desktop viewports.",
    metricBadge: "< 0.8s LCP Verified",
    speedScore: "100/100 Google Vitals",
    deliverables: [
      "Elimination of render-blocking JavaScript and bulky plugins",
      "Automated image conversion into modern WebP & AVIF formats",
      "Server-side caching and global edge CDN optimization",
      "Zero Cumulative Layout Shift (CLS 0.00) guaranteed",
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
    <div className="space-y-6 sm:space-y-8 max-w-7xl mx-auto text-left">
      {/* ==================================================================== */}
      {/* 1. MASTER-DETAIL ARCHITECTURAL STUDIO SHOWCASE                       */}
      {/* ==================================================================== */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
        {/* ================================================================ */}
        {/* LEFT COLUMN (5 cols): Interactive Architectural Capability Index  */}
        {/* ================================================================ */}
        <div className="lg:col-span-5 space-y-2.5">
          <div className="text-[11px] font-black uppercase tracking-wider text-slate-500 px-2 pb-1 flex items-center justify-between">
            <span>Select Delivery Capability:</span>
            <span className="font-mono text-[#B87A00]">6 Solutions</span>
          </div>

          <div className="space-y-2">
            {SHOWCASE_SERVICES.map((service) => {
              const isSelected = service.id === activeService.id;

              return (
                <div
                  key={service.id}
                  onClick={() => setSelectedServiceId(service.id)}
                  className={cn(
                    "p-3.5 sm:p-4 rounded-2xl border transition-all duration-300 cursor-pointer select-none text-left relative overflow-hidden group",
                    isSelected
                      ? "bg-[#060B22] text-white border-[#FFB020] shadow-md ring-2 ring-[#FFB020]/25 scale-[1.01]"
                      : "bg-white text-slate-700 border-[#E2DBD0] hover:border-slate-400 hover:bg-[#FAF8F5]"
                  )}
                >
                  {/* Left Active Accent Bar */}
                  {isSelected && (
                    <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#FFB020]" />
                  )}

                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2.5 min-w-0">
                      <span
                        className={cn(
                          "font-mono text-xs font-black px-2 py-0.5 rounded-md shrink-0",
                          isSelected
                            ? "bg-[#FFB020] text-[#060B22]"
                            : "bg-slate-100 text-slate-500 group-hover:text-[#0B1B3A]"
                        )}
                      >
                        {service.number}
                      </span>

                      <h4
                        className={cn(
                          "font-display font-black text-sm sm:text-base tracking-tight truncate",
                          isSelected
                            ? "text-white"
                            : "text-[#0B1B3A] group-hover:text-[#B87A00]"
                        )}
                      >
                        {service.title}
                      </h4>
                    </div>

                    <ChevronRight
                      className={cn(
                        "w-4 h-4 shrink-0 transition-transform",
                        isSelected
                          ? "text-[#FFB020] translate-x-1"
                          : "text-slate-400 group-hover:translate-x-0.5"
                      )}
                    />
                  </div>

                  {/* Expanded Active Specs (Reveals smoothly when active) */}
                  {isSelected && (
                    <div className="mt-3 pt-3 border-t border-white/10 space-y-2.5 animate-in fade-in duration-200">
                      <p className="text-xs text-slate-300 leading-relaxed font-normal">
                        {service.description}
                      </p>

                      {/* 2 Micro Deliverables */}
                      <div className="space-y-1 text-[11px] text-slate-300">
                        {service.deliverables.slice(0, 2).map((del, i) => (
                          <div key={i} className="flex items-center gap-1.5">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#FFB020] shrink-0" />
                            <span className="truncate">{del}</span>
                          </div>
                        ))}
                      </div>

                      {/* Direct CTA Button */}
                      <div className="pt-1 flex items-center justify-between">
                        <span className="text-[10px] font-mono font-bold text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/30">
                          {service.speedScore}
                        </span>

                        <Link
                          href="/get-a-quote"
                          className="text-[11px] font-black text-[#FFB020] hover:text-white inline-flex items-center gap-1 transition-colors"
                        >
                          <span>Discuss Scope</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
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
          className="lg:col-span-7 sticky top-24 space-y-3"
          style={{
            perspective: "1200px",
          }}
        >
          {/* Top Visual Meta Bar */}
          <div className="flex items-center justify-between px-1 text-xs">
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-black uppercase tracking-wider text-[#B87A00] bg-[#FFB020]/15 px-2.5 py-0.5 rounded-full border border-[#FFB020]/30">
                {activeService.categoryBadge}
              </span>
              <span className="font-bold text-[#0B1B3A] hidden sm:inline">
                {activeService.shortTag}
              </span>
            </div>

            <div className="flex items-center gap-1.5 text-[11px] font-mono text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
              <Activity className="w-3 h-3 text-emerald-500 animate-pulse" />
              <span>{activeService.metricBadge}</span>
            </div>
          </div>

          {/* Panoramic 3D Browser Viewport (STRICT ZERO TEXT OVERLAY ON IMAGE) */}
          <div
            className="rounded-2xl sm:rounded-3xl bg-[#060B22] border border-[#060B22]/20 shadow-[0_24px_60px_-15px_rgba(6,11,34,0.25)] overflow-hidden transition-transform duration-300 ease-out"
            style={{
              transform: `rotateY(${mousePos.x * 5}deg) rotateX(${-mousePos.y * 5}deg)`,
              transformStyle: "preserve-3d",
            }}
          >
            {/* Mac Browser Header Bar */}
            <div className="h-8 bg-[#060B22] px-3.5 flex items-center justify-between border-b border-white/10">
              <div className="flex items-center gap-1.5 shrink-0">
                <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
              </div>

              {/* Minimalist Staging URL Pill */}
              <div className="flex items-center gap-1.5 px-3 py-0.5 rounded-md bg-white/10 border border-white/15 text-[10px] text-slate-200 font-mono max-w-[260px] truncate">
                <Lock className="w-2.5 h-2.5 text-emerald-400 shrink-0" />
                <span className="truncate">{activeService.stagingUrl}</span>
              </div>

              <span className="text-[9px] font-bold text-[#FFB020] uppercase tracking-wider hidden sm:block">
                Production Standard
              </span>
            </div>

            {/* Pristine Website Screenshot (100% Visual — ZERO TEXT OVERLAYS) */}
            <div className="relative aspect-[16/10] sm:aspect-[16/9.5] w-full bg-slate-950 overflow-hidden">
              <Image
                src={activeService.image}
                alt={`${activeService.title} preview`}
                fill
                className="object-cover object-top transition-transform duration-700 ease-out hover:scale-102"
                sizes="(max-width: 1024px) 100vw, 750px"
                priority
              />
            </div>

            {/* Browser Bottom Action Strip */}
            <div className="p-3 bg-[#0B1536] border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-left">
              <div className="min-w-0">
                <div className="text-xs font-bold text-white truncate">
                  {activeService.title}
                </div>
                <div className="text-[11px] text-slate-300 truncate">
                  {activeService.tagline}
                </div>
              </div>

              <Link
                href="/get-a-quote"
                className="btn-luxury-gold py-2 px-4 rounded-xl text-xs font-black uppercase tracking-wider flex items-center gap-1.5 shrink-0 shadow-sm cursor-pointer whitespace-nowrap"
              >
                <span>Request {activeService.shortTag} Quote</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

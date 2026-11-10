"use client";

import React, { useState } from "react";
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
} from "lucide-react";
import { cn } from "@/lib/utils";

interface ShowcaseService {
  id: string;
  number: string;
  title: string;
  categoryBadge: string;
  shortTag: string;
  image: string;
  stagingUrl: string;
  description: string;
  metricBadge: string;
  deliverables: string[];
}

const SHOWCASE_SERVICES: ShowcaseService[] = [
  {
    id: "custom-design",
    number: "01",
    title: "Custom Website Design & Engineering",
    categoryBadge: "100% Bespoke Architecture",
    shortTag: "Bespoke Websites",
    image: "/images/services-ui-design-showcase.jpg",
    stagingUrl: "bespoke-design.hdm.preview",
    description:
      "Bespoke websites designed from scratch in Figma to reflect your brand's unique market authority, then coded into clean semantic Next.js 16 and React 19.",
    metricBadge: "Figma to Semantic Code",
    deliverables: [
      "Custom UI/UX designed in Figma with design tokens",
      "Pixel-perfect responsive coding across all device viewports",
      "Sub-second Core Web Vitals speed benchmark (< 0.8s LCP)",
      "Schema.org structured data & automated search indexing",
    ],
  },
  {
    id: "website-redesign",
    number: "02",
    title: "Website Redesign & Modernization",
    categoryBadge: "Modernization + CRO",
    shortTag: "Website Redesign",
    image: "/images/case-study-aesthetic.webp",
    stagingUrl: "modernization.hdm.preview",
    description:
      "Transform outdated websites into modern, high-converting digital assets while meticulously preserving your existing SEO rankings and search authority.",
    metricBadge: "301 SEO Rank Protected",
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
    categoryBadge: "Shopify Plus & Headless",
    shortTag: "E-Commerce Stores",
    image: "/images/case-study-cafe.webp",
    stagingUrl: "storefront-checkout.hdm.preview",
    description:
      "Fast online storefronts optimized for high average order value (AOV), instant slide-out micro-carts, and frictionless 1-tap mobile checkout.",
    metricBadge: "Sub-Second Micro-Cart",
    deliverables: [
      "Custom Shopify 2.0, WooCommerce, or Headless commerce build",
      "Slide-out drawer cart with progressive free-shipping triggers",
      "1-tap Apple Pay, Shop Pay, Stripe, and global multi-currency",
      "Automated inventory, ERP, and CRM webhook synchronization",
    ],
  },
  {
    id: "cms-development",
    number: "04",
    title: "Client-Editable CMS & Webflow Platforms",
    categoryBadge: "Empower Marketing Teams",
    shortTag: "Headless & CMS",
    image: "/images/blog-hero-bg.webp",
    stagingUrl: "marketing-cms.hdm.preview",
    description:
      "Empower your marketing team to publish landing pages, edit copy, and launch campaigns without touching a line of code or depending on developers.",
    metricBadge: "Zero Developer Dependency",
    deliverables: [
      "Clean visual block editor customized exclusively for your team",
      "Zero bloated third-party page builders for maximum edge speed",
      "Built-in metadata generation, OpenGraph previews & sitemaps",
      "Role-based publishing permissions and automated cloud backups",
    ],
  },
  {
    id: "custom-web-app",
    number: "05",
    title: "Full-Stack Web Applications & Portals",
    categoryBadge: "Next.js & Cloud Architecture",
    shortTag: "Web Apps & Portals",
    image: "/images/hero-devices-mockup.jpg",
    stagingUrl: "cloud-portal.hdm.preview",
    description:
      "Customer portals, SaaS dashboards, and web applications built with Next.js, Node.js, and secure database integrations that scale seamlessly.",
    metricBadge: "App-Like SPA Speed",
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
    categoryBadge: "Google Top 1% Speed",
    shortTag: "Speed Optimization",
    image: "/images/web-dev-hero-bg.jpg",
    stagingUrl: "speed-audit.hdm.preview",
    description:
      "Remediate slow load times, eliminate layout shifts, and compress asset pipelines to achieve green 95+ Core Web Vitals on mobile and desktop.",
    metricBadge: "< 0.8s LCP Verified",
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

  const activeService =
    SHOWCASE_SERVICES.find((s) => s.id === selectedServiceId) ||
    SHOWCASE_SERVICES[0];

  return (
    <div className="space-y-6 sm:space-y-8">
      {/* Editorial Horizontal Service Navigation Bar */}
      <div className="flex items-center justify-center gap-1.5 sm:gap-2.5 overflow-x-auto pb-1 no-scrollbar">
        {SHOWCASE_SERVICES.map((srv) => {
          const isSelected = srv.id === activeService.id;

          return (
            <button
              key={srv.id}
              type="button"
              onClick={() => setSelectedServiceId(srv.id)}
              className={cn(
                "px-3.5 sm:px-4 py-2 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer select-none inline-flex items-center gap-2 shrink-0 border",
                isSelected
                  ? "bg-[#060B22] text-[#FFB020] border-[#FFB020] shadow-sm ring-2 ring-[#FFB020]/20 scale-102"
                  : "bg-white text-slate-700 border-[#E2DBD0] hover:border-slate-400"
              )}
            >
              <span className="font-mono text-[10px] text-[#FFB020]">{srv.number}</span>
              <span>{srv.shortTag}</span>
              {isSelected && (
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shrink-0" />
              )}
            </button>
          );
        })}
      </div>

      {/* Asymmetric Studio Canvas (Breaks Repetitive Card Grids) */}
      <div className="rounded-2xl sm:rounded-3xl bg-white border border-[#E2DBD0] shadow-sm overflow-hidden text-left max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
          {/* Left / Top (7 cols): Large Panoramic Browser Frame (STRICT ZERO TEXT OVERLAY) */}
          <div className="lg:col-span-7 p-4 sm:p-6 lg:p-7 bg-[#FAF8F5] border-b lg:border-b-0 lg:border-r border-[#E2DBD0] flex flex-col justify-center">
            <div className="rounded-xl overflow-hidden border border-[#060B22]/15 shadow-md bg-white">
              {/* Realistic Browser Header Bar */}
              <div className="h-8 bg-[#060B22] px-3.5 flex items-center justify-between border-b border-white/10">
                <div className="flex items-center gap-1.5 shrink-0">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
                </div>

                <div className="flex items-center gap-1.5 px-3 py-0.5 rounded-md bg-white/10 border border-white/15 text-[10px] text-slate-200 font-mono max-w-[240px] sm:max-w-[300px] truncate">
                  <Lock className="w-2.5 h-2.5 text-emerald-400 shrink-0" />
                  <span className="truncate">{activeService.stagingUrl}</span>
                </div>

                <span className="text-[9.5px] font-bold text-[#FFB020] uppercase tracking-wider hidden sm:block">
                  Verified Standard
                </span>
              </div>

              {/* Pristine Authentic Website Screenshot (ZERO HTML TEXT OVERLAY) */}
              <div className="relative aspect-[16/10] sm:aspect-[16/9.5] w-full bg-slate-950 overflow-hidden">
                <Image
                  src={activeService.image}
                  alt={`${activeService.title} preview`}
                  fill
                  className="object-cover object-top transition-transform duration-700 ease-out hover:scale-102"
                  sizes="(max-width: 1024px) 100vw, 700px"
                  priority
                />
              </div>

              {/* Clean Bottom Frame Strip */}
              <div className="px-3.5 py-2 bg-[#060B22] border-t border-white/10 flex items-center justify-between text-[11px] text-slate-300">
                <span className="font-bold text-white truncate">{activeService.title}</span>
                <span className="text-[10px] text-emerald-400 font-mono font-bold shrink-0">
                  {activeService.metricBadge}
                </span>
              </div>
            </div>
          </div>

          {/* Right / Bottom (5 cols): Editorial Specifications & Direct CTA */}
          <div className="lg:col-span-5 p-5 sm:p-7 flex flex-col justify-between space-y-5 text-left">
            <div className="space-y-3">
              <div className="flex items-center justify-between gap-2">
                <span className="text-[10px] font-black uppercase tracking-wider text-[#B87A00] bg-[#FFB020]/15 px-2.5 py-0.5 rounded-full border border-[#FFB020]/30">
                  {activeService.categoryBadge}
                </span>

                <span className="font-mono text-xs font-black text-slate-400">
                  Service {activeService.number} / 06
                </span>
              </div>

              <h3 className="font-display font-black text-xl sm:text-2xl text-[#0B1B3A] tracking-tight leading-snug">
                {activeService.title}
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                {activeService.description}
              </p>
            </div>

            {/* Included Deliverables */}
            <div className="pt-2 border-t border-slate-100 space-y-2">
              <div className="text-[10px] font-black uppercase tracking-wider text-slate-700">
                Key Technical Deliverables:
              </div>

              <div className="space-y-1.5 text-xs text-slate-700">
                {activeService.deliverables.map((item, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#FFB020] shrink-0 mt-0.5" />
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
                <span>Discuss {activeService.shortTag} Scope</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
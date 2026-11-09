"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Code2,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  Zap,
  Globe,
  ShieldCheck,
  TrendingUp,
  Cpu,
  Layers,
  Check,
  ChevronRight,
} from "lucide-react";
import { MODERN_TECH, CMS_PLATFORMS, WebTechItem } from "@/data/web-design-services";
import { cn } from "@/lib/utils";

interface TechBenefitSpec {
  name: string;
  categoryLabel: string;
  headline: string;
  businessValue: string;
  speedBadge: string;
  seoBadge: string;
  scaleBadge: string;
  capabilities: string[];
}

const TECH_BENEFITS: Record<string, TechBenefitSpec> = {
  "React.js": {
    name: "React.js",
    categoryLabel: "Interactive Frontend Engine",
    headline: "Dynamic, App-Like Web Experiences That Keep Users Engaged",
    businessValue:
      "React allows us to build fast, interactive user interfaces with reusable design components. Visitors experience smooth, app-like transitions without full page reloads, significantly increasing time-on-site and user conversions.",
    speedBadge: "Instant UI Updates",
    seoBadge: "SEO Hydrated",
    scaleBadge: "Enterprise Ready",
    capabilities: [
      "Modular design systems customized for your brand",
      "Instant response with zero page flicker",
      "Seamless integration with third-party APIs and CRM tools",
      "Smooth micro-interactions and animated user flows",
    ],
  },
  "Next.js": {
    name: "Next.js",
    categoryLabel: "High-Performance Web Framework",
    headline: "Lightning-Fast Loading Speeds & Superior Google Search Rankings",
    businessValue:
      "Next.js combines server-side rendering and edge caching to deliver near-instant load times. Google rewards this speed with higher organic search rankings, lowering your customer acquisition costs.",
    speedBadge: "< 1.0s Load Time",
    seoBadge: "100/100 Core Web Vitals",
    scaleBadge: "Global Edge CDN",
    capabilities: [
      "Sub-second page speeds on both mobile and desktop",
      "Automated image compression into modern WebP/AVIF formats",
      "Built-in search engine optimization and metadata generation",
      "Enterprise security with server-side API safeguards",
    ],
  },
  "Node.js": {
    name: "Node.js",
    categoryLabel: "High-Velocity Backend Runtime",
    headline: "Scalable Real-Time Processing for Modern Web Applications",
    businessValue:
      "Node.js powers fast, lightweight backends capable of handling thousands of concurrent users simultaneously without slowing down, perfect for customer portals and high-traffic stores.",
    speedBadge: "Sub-20ms API Response",
    seoBadge: "High-Concurrency",
    scaleBadge: "Zero Downtime",
    capabilities: [
      "Real-time notifications, chat, and data syncing",
      "Custom REST and GraphQL API development",
      "Automated lead routing and CRM background sync",
      "Cost-effective server resource utilization",
    ],
  },
  "Laravel": {
    name: "Laravel",
    categoryLabel: "Enterprise PHP Framework",
    headline: "Secure, Structured & Reliable Architecture for Custom Solutions",
    businessValue:
      "Laravel provides enterprise-grade structure with built-in authentication, security encryption, and automated database handling, ensuring your business logic is robust and easily maintainable.",
    speedBadge: "High Execution Speed",
    seoBadge: "Enterprise Security",
    scaleBadge: "Clean Modularity",
    capabilities: [
      "Built-in bank-grade security protocols against vulnerabilities",
      "Custom customer dashboards, portals, and billing systems",
      "Automated email notifications and PDF invoice generators",
      "Seamless database migrations and reliable backups",
    ],
  },
  "PHP": {
    name: "PHP",
    categoryLabel: "Core Web Language",
    headline: "Battle-Tested Reliability Powering Over 75% of the Web",
    businessValue:
      "Modern PHP 8+ delivers exceptional processing speed and deep compatibility across global web hosting environments, keeping hosting costs low and development turnaround rapid.",
    speedBadge: "3x Faster Than Legacy",
    seoBadge: "Universal Hosting",
    scaleBadge: "Cost-Effective",
    capabilities: [
      "Direct compatibility with all standard web servers",
      "Custom plugins, themes, and portal enhancements",
      "Secure payment gateway and transactional email integration",
      "Rapid turnaround for feature requests and bug fixes",
    ],
  },
  "HTML5, CSS3 & JS": {
    name: "HTML5, CSS3 & JS",
    categoryLabel: "Modern Web Standards",
    headline: "Pure Semantic Foundations with Zero Unnecessary Code Bloat",
    businessValue:
      "Clean, semantic web standards ensure your website renders flawlessly on every browser, smartphone, and tablet while maximizing accessibility for all prospective clients.",
    speedBadge: "Pure Performance",
    seoBadge: "100% Mobile Parity",
    scaleBadge: "Universal Standards",
    capabilities: [
      "W3C and WCAG accessible markup standards",
      "Fluid responsive scaling from mobile screens to 4K displays",
      "Zero reliance on heavy external runtime libraries",
      "Cross-browser parity tested on Chrome, Safari, and Edge",
    ],
  },
  "Tailwind CSS": {
    name: "Tailwind CSS",
    categoryLabel: "Modern Styling System",
    headline: "Tailored Brand Aesthetics with Ultra-Lightweight File Sizes",
    businessValue:
      "Tailwind eliminates bulky legacy CSS stylesheets, compiling only the exact styles your website needs. The result is a bespoke visual identity that loads in the blink of an eye.",
    speedBadge: "< 15KB Total Stylesheet",
    seoBadge: "Zero Render-Blocking",
    scaleBadge: "Pixel-Perfect",
    capabilities: [
      "100% custom visual styling matching your exact brand guidelines",
      "Consistent typography, spacing, and color palettes",
      "Instantaneous mobile layout responsiveness",
      "Clean code architecture with zero styling conflicts",
    ],
  },
  "Python / Django": {
    name: "Python / Django",
    categoryLabel: "Data & AI Web Solutions",
    headline: "High-Security Web Portals and AI-Powered Digital Tools",
    businessValue:
      "Ideal for businesses that require intelligent calculators, AI chatbots, data analytics dashboards, or secure customer portals with complex data operations.",
    speedBadge: "Optimized Algorithms",
    seoBadge: "High-Grade Encryption",
    scaleBadge: "AI & Data Ready",
    capabilities: [
      "AI engine integration (OpenAI, Gemini, custom LLMs)",
      "Automated reporting, data export, and business analytics",
      "Strict data privacy and GDPR/HIPAA compliance tooling",
      "Intuitive administrative backoffice for internal teams",
    ],
  },
  "WordPress": {
    name: "WordPress",
    categoryLabel: "Leading Global CMS",
    headline: "Effortless Content Management Without Touching a Line of Code",
    businessValue:
      "We build clean, custom WordPress sites that give your marketing team full freedom to create pages, publish articles, and update content without depending on developers.",
    speedBadge: "< 1.2s Page Load",
    seoBadge: "#1 For Content SEO",
    scaleBadge: "Easy In-House Control",
    capabilities: [
      "Custom visual block editor designed exclusively for your team",
      "Zero bloated third-party page builders for maximum speed",
      "Top-tier SEO setup with Yoast or Rank Math integration",
      "Hardened security firewalls and daily cloud backups",
    ],
  },
  "Shopify": {
    name: "Shopify",
    categoryLabel: "E-Commerce Authority",
    headline: "High-Converting Online Stores Engineered to Maximize Sales",
    businessValue:
      "Shopify powers frictionless shopping experiences with high-converting checkouts, global multi-currency payment processing, and seamless inventory management.",
    speedBadge: "99.99% Store Uptime",
    seoBadge: "1-Click Checkout",
    scaleBadge: "Scale to 8-Figures",
    capabilities: [
      "Custom Shopify 2.0 theme design matching your brand",
      "Integrated Stripe, PayPal, Apple Pay, and local payment methods",
      "Automated inventory tracking and shipping notification sync",
      "Upsell and cart recovery flows to maximize average order value",
    ],
  },
  "WooCommerce": {
    name: "WooCommerce",
    categoryLabel: "Open-Source E-Commerce",
    headline: "Full Ownership of Your Online Store with Zero Platform Fees",
    businessValue:
      "WooCommerce provides complete freedom over your store, customer data, and checkout flow without paying monthly platform commissions on your sales.",
    speedBadge: "Custom Optimized DB",
    seoBadge: "100% Data Ownership",
    scaleBadge: "Zero Platform Fees",
    capabilities: [
      "Complete code ownership and zero recurring sales commissions",
      "Custom product bundles, recurring subscriptions, and B2B pricing",
      "Frictionless 1-page checkout to eliminate abandoned carts",
      "Direct integration with leading shipping carriers and ERPs",
    ],
  },
  "Webflow": {
    name: "Webflow",
    categoryLabel: "Visual Development Platform",
    headline: "Award-Winning Agency Polish with Built-In Enterprise Hosting",
    businessValue:
      "Webflow bridges the gap between high-end design and clean code, providing stunning fluid animations and reliable enterprise hosting on AWS and Fastly.",
    speedBadge: "Global AWS Edge CDN",
    seoBadge: "Visual Content Editor",
    scaleBadge: "Agency-Tier Polish",
    capabilities: [
      "Smooth micro-interactions and scroll-triggered animations",
      "Intuitive on-page visual editor for your marketing team",
      "Zero plugin maintenance or server update hassles",
      "Built-in SSL and enterprise DDoS protection",
    ],
  },
  "Wix Studio": {
    name: "Wix Studio",
    categoryLabel: "Agile Business Platform",
    headline: "Fast-to-Market Responsive Websites for Service Businesses",
    businessValue:
      "Wix Studio allows us to deliver high-quality, responsive business websites rapidly with built-in appointment scheduling, CRM tools, and lead management.",
    speedBadge: "Multi-Cloud CDN",
    seoBadge: "Built-In Lead CRM",
    scaleBadge: "Rapid Deployment",
    capabilities: [
      "Fast turnaround from concept to live deployment",
      "Built-in online booking, appointments, and contact management",
      "Automated invoice generation and payment collection",
      "Responsive layout scaling across all smartphone devices",
    ],
  },
  "Squarespace": {
    name: "Squarespace",
    categoryLabel: "Brand & Portfolio CMS",
    headline: "Refined Aesthetics for Boutiques, Consultancies & Creatives",
    businessValue:
      "Squarespace provides pristine editorial layouts ideal for luxury brands, architecture firms, and consulting practices that require clean visual elegance with zero maintenance.",
    speedBadge: "Managed Cloud",
    seoBadge: "Clean Aesthetics",
    scaleBadge: "Zero Maintenance",
    capabilities: [
      "Curated editorial typography and full-width imagery",
      "Integrated appointment booking and newsletter campaigns",
      "Zero server patching or plugin vulnerabilities",
      "Mobile-optimized presentation for portfolio showcases",
    ],
  },
  "Drupal": {
    name: "Drupal",
    categoryLabel: "Complex Enterprise CMS",
    headline: "Advanced Governance & Multilingual Support for Large Orgs",
    businessValue:
      "Drupal is engineered for large institutions, healthcare networks, and enterprises that demand strict role-based access control, multiple languages, and deep data security.",
    speedBadge: "Enterprise Caching",
    seoBadge: "Strict Governance",
    scaleBadge: "Multi-Department",
    capabilities: [
      "Granular editorial permissions and publishing approval workflows",
      "Multilingual translation support out of the box",
      "Enterprise security compliance and automated audit logging",
      "Scalable content architecture for thousands of pages",
    ],
  },
  "Magento / Adobe": {
    name: "Magento / Adobe",
    categoryLabel: "High-Catalog E-Commerce",
    headline: "Heavy-Duty Commerce Architecture for High-SKU B2B & Wholesale",
    businessValue:
      "Engineered for high-volume retailers and wholesale distributors managing 50,000+ products across multiple warehouses, currencies, and custom pricing tiers.",
    speedBadge: "Sub-50ms Search",
    seoBadge: "Multi-Warehouse B2B",
    scaleBadge: "High-SKU Catalogs",
    capabilities: [
      "Multi-storefront management from a single unified backoffice",
      "Customer group wholesale pricing and credit limits",
      "Multi-warehouse inventory routing and tracking sync",
      "Enterprise ERP and accounting software integration",
    ],
  },
};

export function WebDesignTechStack() {
  const [activeCategory, setActiveCategory] = useState<"all" | "modern" | "cms">("all");
  const [selectedTech, setSelectedTech] = useState<string>("Next.js");

  const items: WebTechItem[] =
    activeCategory === "all"
      ? [...MODERN_TECH, ...CMS_PLATFORMS]
      : activeCategory === "modern"
      ? MODERN_TECH
      : CMS_PLATFORMS;

  const currentInfo =
    TECH_BENEFITS[selectedTech] || TECH_BENEFITS["Next.js"];

  const currentTechItem =
    items.find((t) => t.name === selectedTech) ||
    MODERN_TECH.find((t) => t.name === selectedTech) ||
    CMS_PLATFORMS.find((t) => t.name === selectedTech);

  return (
    <div className="space-y-6 sm:space-y-8">
      {/* 1. Category Switcher Pills */}
      <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2.5">
        <button
          suppressHydrationWarning
          type="button"
          onClick={() => {
            setActiveCategory("all");
            setSelectedTech("Next.js");
          }}
          className={cn(
            "px-3 sm:px-5 py-1.5 sm:py-2.5 rounded-full text-[11px] sm:text-xs font-bold transition-all duration-200 cursor-pointer select-none",
            activeCategory === "all"
              ? "bg-[#060B22] text-[#FFB020] border border-[#FFB020]/40 shadow-sm"
              : "bg-white text-slate-700 border border-[#E2DBD0] hover:border-slate-400 hover:text-[#0B1B3A]"
          )}
        >
          <span className="sm:hidden">All (16)</span>
          <span className="hidden sm:inline">All 16 Web Technologies</span>
        </button>
        <button
          suppressHydrationWarning
          type="button"
          onClick={() => {
            setActiveCategory("modern");
            setSelectedTech("Next.js");
          }}
          className={cn(
            "px-3 sm:px-5 py-1.5 sm:py-2.5 rounded-full text-[11px] sm:text-xs font-bold transition-all duration-200 cursor-pointer select-none",
            activeCategory === "modern"
              ? "bg-[#060B22] text-[#FFB020] border border-[#FFB020]/40 shadow-sm"
              : "bg-white text-slate-700 border border-[#E2DBD0] hover:border-slate-400 hover:text-[#0B1B3A]"
          )}
        >
          <span className="sm:hidden">Modern ({MODERN_TECH.length})</span>
          <span className="hidden sm:inline">Modern Frameworks ({MODERN_TECH.length})</span>
        </button>
        <button
          suppressHydrationWarning
          type="button"
          onClick={() => {
            setActiveCategory("cms");
            setSelectedTech("WordPress");
          }}
          className={cn(
            "px-3 sm:px-5 py-1.5 sm:py-2.5 rounded-full text-[11px] sm:text-xs font-bold transition-all duration-200 cursor-pointer select-none",
            activeCategory === "cms"
              ? "bg-[#060B22] text-[#FFB020] border border-[#FFB020]/40 shadow-sm"
              : "bg-white text-slate-700 border border-[#E2DBD0] hover:border-slate-400 hover:text-[#0B1B3A]"
          )}
        >
          <span>CMS &amp; E-commerce ({CMS_PLATFORMS.length})</span>
        </button>
      </div>

      {/* 2. Interactive Ecosystem Showcase (Unified Zero-Shift Studio) */}
      <div className="bg-white rounded-2xl sm:rounded-3xl border border-[#E2DBD0] shadow-sm p-3.5 sm:p-8 lg:p-10 relative overflow-hidden">
        {/* Mobile-Only Horizontal Swipeable Technology Ribbon */}
        <div className="lg:hidden space-y-2 mb-4">
          <div className="flex items-center justify-between text-xs text-slate-600 px-0.5">
            <span className="font-bold text-[#0B1B3A] flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#FFB020]" />
              <span>Select Platform:</span>
            </span>
            <span className="text-[10px] font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full border border-slate-200">
              Swipe horizontally →
            </span>
          </div>

          <div className="flex items-center gap-2 overflow-x-auto pb-2 pt-0.5 no-scrollbar scroll-smooth -mx-1 px-1">
            {items.map((tech) => {
              const isSelected = tech.name === selectedTech;
              return (
                <button
                  suppressHydrationWarning
                  key={tech.name}
                  type="button"
                  onClick={() => setSelectedTech(tech.name)}
                  className={cn(
                    "shrink-0 inline-flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer select-none border shadow-2xs",
                    isSelected
                      ? "bg-[#060B22] text-[#FFB020] border-[#FFB020] shadow-sm ring-2 ring-[#FFB020]/25 scale-102"
                      : "bg-white text-slate-700 border-[#E2DBD0] hover:border-[#FFB020]/60 hover:text-[#0B1B3A]"
                  )}
                >
                  <div
                    className={cn(
                      "w-6 h-6 rounded-lg flex items-center justify-center p-1 shrink-0 transition-colors bg-white border",
                      isSelected
                        ? "border-[#FFB020] shadow-xs"
                        : "border-slate-200"
                    )}
                  >
                    {tech.icon ? (
                      <Image
                        src={tech.icon}
                        alt={tech.name}
                        width={16}
                        height={16}
                        className="object-contain"
                      />
                    ) : (
                      <Code2 className="w-3.5 h-3.5 text-slate-700" />
                    )}
                  </div>
                  <span>{tech.name}</span>
                  {isSelected && (
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          {/* Left Column (5 cols): Desktop Vertical Rail (Hidden on mobile) */}
          <div className="hidden lg:flex lg:flex-col lg:col-span-5 space-y-3 h-full">
            <div className="flex items-center justify-between pb-2 border-b border-slate-100 shrink-0">
              <span className="text-xs font-black uppercase tracking-wider text-slate-500">
                Select Platform to Inspect
              </span>
              <span className="text-[11px] font-bold text-[#B87A00] bg-[#FFB020]/15 px-2.5 py-0.5 rounded-full border border-[#FFB020]/25">
                Click Any Tech
              </span>
            </div>

            {/* Desktop Clean Vertical List Items with Reserved Scrollbar */}
            <div className="flex flex-col gap-2 max-h-[520px] overflow-y-auto pr-2 custom-scrollbar [scrollbar-gutter:stable]">
              {items.map((tech) => {
                const isSelected = tech.name === selectedTech;
                return (
                  <button
                    suppressHydrationWarning
                    key={tech.name}
                    type="button"
                    onClick={() => setSelectedTech(tech.name)}
                    className={cn(
                      "w-full text-left p-3 rounded-2xl transition-all duration-200 flex items-center justify-between cursor-pointer border",
                      isSelected
                        ? "bg-[#060B22] text-white border-[#060B22] shadow-sm"
                        : "bg-slate-50/80 text-slate-700 border-slate-200/70 hover:bg-white hover:border-[#FFB020]/50 hover:text-[#0B1B3A]"
                    )}
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div
                        className={cn(
                          "w-9 h-9 rounded-xl flex items-center justify-center p-1.5 shrink-0 transition-colors bg-white border",
                          isSelected
                            ? "border-[#FFB020] shadow-xs"
                            : "border-slate-200"
                        )}
                      >
                        {tech.icon ? (
                          <Image
                            src={tech.icon}
                            alt={tech.name}
                            width={20}
                            height={20}
                            className="object-contain"
                          />
                        ) : (
                          <Code2 className="w-4 h-4 text-slate-700" />
                        )}
                      </div>

                      <div className="min-w-0">
                        <div className="font-bold text-sm tracking-tight flex items-center gap-1.5 truncate">
                          <span className="truncate">{tech.name}</span>
                          {isSelected && (
                            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                          )}
                        </div>
                        <div
                          className={cn(
                            "text-[10px] font-medium truncate",
                            isSelected ? "text-slate-300" : "text-slate-500"
                          )}
                        >
                          {tech.tag}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 shrink-0">
                      <ChevronRight
                        className={cn(
                          "w-4 h-4 transition-transform duration-200",
                          isSelected
                            ? "text-[#FFB020] translate-x-0.5"
                            : "text-slate-400"
                        )}
                      />
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column (7 cols): Stable Zero-Shift Business Capability Spotlight */}
          <div className="lg:col-span-7 bg-[#FAF8F5] rounded-xl sm:rounded-2xl p-4 sm:p-7 border border-[#E2DBD0] flex flex-col justify-between space-y-4 sm:space-y-6 min-h-auto lg:min-h-[580px] lg:h-full">
            <div key={selectedTech} className="animate-content-fade space-y-4 sm:space-y-5 flex-1 flex flex-col">
              {/* Header: Tech Name & Category with Stable Height and Platform Icon */}
              <div className="space-y-2 border-b border-[#E2DBD0] pb-3 sm:pb-4">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#FFB020]/20 text-[#B87A00] text-[10px] font-black uppercase tracking-wider border border-[#FFB020]/30">
                  <Sparkles className="w-3 h-3 text-[#FFB020]" />
                  <span>{currentInfo.categoryLabel}</span>
                </div>

                <div className="flex items-center gap-2.5 sm:gap-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white border border-[#E2DBD0] flex items-center justify-center p-2 shrink-0 shadow-xs">
                    {currentTechItem?.icon ? (
                      <Image
                        src={currentTechItem.icon}
                        alt={currentInfo.name}
                        width={28}
                        height={28}
                        className="object-contain"
                      />
                    ) : (
                      <Code2 className="w-6 h-6 text-slate-700" />
                    )}
                  </div>
                  <h3 className="font-display font-black text-2xl sm:text-3xl text-[#0B1B3A] tracking-tight leading-tight">
                    {currentInfo.name}
                  </h3>
                </div>

                <div className="min-h-auto lg:min-h-[2.5rem] flex items-center pt-0.5">
                  <p className="text-xs sm:text-sm font-bold text-slate-700 leading-snug">
                    {currentInfo.headline}
                  </p>
                </div>
              </div>

              {/* 3 Clear Business Benefit Badges with Fixed Heights (3-cols on mobile & desktop) */}
              <div className="grid grid-cols-3 gap-1.5 sm:gap-2.5">
                <div className="p-2 sm:p-3 rounded-xl bg-white border border-[#E2DBD0] min-h-[56px] sm:min-h-[64px] flex flex-col justify-between text-center sm:text-left">
                  <div className="text-[9px] sm:text-[10px] uppercase font-black text-slate-400 tracking-wider truncate">
                    Speed
                  </div>
                  <div className="text-[11px] sm:text-xs font-black text-[#0B1B3A] flex items-center justify-center sm:justify-start gap-1 truncate">
                    <Zap className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#FFB020] shrink-0" />
                    <span className="truncate">{currentInfo.speedBadge}</span>
                  </div>
                </div>

                <div className="p-2 sm:p-3 rounded-xl bg-white border border-[#E2DBD0] min-h-[56px] sm:min-h-[64px] flex flex-col justify-between text-center sm:text-left">
                  <div className="text-[9px] sm:text-[10px] uppercase font-black text-slate-400 tracking-wider truncate">
                    Search &amp; SEO
                  </div>
                  <div className="text-[11px] sm:text-xs font-black text-[#0B1B3A] flex items-center justify-center sm:justify-start gap-1 truncate">
                    <Globe className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-blue-500 shrink-0" />
                    <span className="truncate">{currentInfo.seoBadge}</span>
                  </div>
                </div>

                <div className="p-2 sm:p-3 rounded-xl bg-white border border-[#E2DBD0] min-h-[56px] sm:min-h-[64px] flex flex-col justify-between text-center sm:text-left">
                  <div className="text-[9px] sm:text-[10px] uppercase font-black text-slate-400 tracking-wider truncate">
                    Scale
                  </div>
                  <div className="text-[11px] sm:text-xs font-black text-[#0B1B3A] flex items-center justify-center sm:justify-start gap-1 truncate">
                    <ShieldCheck className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-emerald-600 shrink-0" />
                    <span className="truncate">{currentInfo.scaleBadge}</span>
                  </div>
                </div>
              </div>

              {/* Business Value Paragraph */}
              <div className="text-xs sm:text-sm text-slate-600 leading-relaxed bg-white p-3.5 sm:p-4 rounded-xl border border-[#E2DBD0] min-h-auto lg:min-h-[88px] flex items-start">
                <p>{currentInfo.businessValue}</p>
              </div>

              {/* Verified Capabilities Checklist */}
              <div className="space-y-2 pt-1 flex-1">
                <div className="text-xs font-black uppercase tracking-wider text-slate-700">
                  What Our Developers Deliver with {currentInfo.name}:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {currentInfo.capabilities.map((cap, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-2 text-slate-700 leading-snug p-2 sm:p-2.5 rounded-lg bg-white border border-[#E2DBD0]/60 min-h-auto sm:min-h-[46px]"
                    >
                      <Check className="w-3.5 h-3.5 text-[#FFB020] shrink-0 mt-0.5" />
                      <span className="line-clamp-2">{cap}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Direct Action Link - Pinned to baseline */}
            <div className="pt-3.5 sm:pt-4 border-t border-[#E2DBD0] flex flex-col sm:flex-row items-center justify-between gap-3 mt-auto">
              <span className="text-xs text-slate-500 text-center sm:text-left">
                Ready to build or upgrade using {currentInfo.name}?
              </span>
              <a
                href="/get-a-quote"
                className="btn-luxury-navy px-5 sm:px-6 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider inline-flex items-center justify-center gap-1.5 shadow-sm cursor-pointer shrink-0 w-full sm:w-auto"
              >
                <span>Hire {currentInfo.name} Developers</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#FFB020]" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Continuous Infinite Animated Tech Flow (Marquee) - All 16 Platforms Stable Track */}
      <div className="relative w-full max-w-full overflow-hidden py-3 sm:py-3.5 border-y border-[#E2DBD0] bg-white/60 rounded-2xl">
        <div className="flex items-center gap-4 sm:gap-8 animate-marquee whitespace-nowrap">
          {[...MODERN_TECH, ...CMS_PLATFORMS, ...MODERN_TECH, ...CMS_PLATFORMS].map((tech, idx) => (
            <button
              suppressHydrationWarning
              key={`${tech.name}-${idx}`}
              type="button"
              onClick={() => {
                const isModern = MODERN_TECH.some((m) => m.name === tech.name);
                setActiveCategory(isModern ? "modern" : "cms");
                setSelectedTech(tech.name);
              }}
              className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1.5 rounded-full bg-white border border-[#E2DBD0] text-slate-700 hover:text-[#060B22] hover:border-[#FFB020] transition-all duration-200 cursor-pointer shadow-2xs group shrink-0"
            >
              {tech.icon ? (
                <Image
                  src={tech.icon}
                  alt={tech.name}
                  width={14}
                  height={14}
                  className="object-contain shrink-0"
                />
              ) : (
                <span className="w-1.5 h-1.5 rounded-full bg-[#FFB020] group-hover:scale-125 transition-transform" />
              )}
              <span className="text-[11px] sm:text-xs font-bold">{tech.name}</span>
              <span className="text-[9px] sm:text-[10px] text-slate-400">({tech.tag})</span>
            </button>
          ))}
        </div>
      </div>

      {/* 4. Supporting Message Banner */}
      <div className="p-6 sm:p-8 rounded-3xl skeuo-card-dark text-white border border-white/10 shadow-xl relative overflow-hidden">
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-slate-200 text-xs font-black uppercase tracking-wider border border-white/10">
              <Sparkles className="w-3.5 h-3.5 text-[#FFB020]" />
              <span>Seamless Migration &amp; Upgrades</span>
            </div>
            <h3 className="font-display font-black text-xl sm:text-2xl text-white tracking-tight">
              Already have a website? No problem.
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              We can work with your existing technology stack to redesign, upgrade,
              customize, and enhance your website without necessarily rebuilding
              everything from scratch. We preserve existing SEO rankings, backlink
              equity, and user data while modernizing your frontend.
            </p>
          </div>

          <a
            href="/get-a-quote"
            className="btn-luxury-gold btn-shimmer px-6 py-3 rounded-xl text-xs font-black uppercase tracking-wider inline-flex items-center gap-2 shrink-0 shadow-lg cursor-pointer"
          >
            <span>Audit My Existing Website</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
}

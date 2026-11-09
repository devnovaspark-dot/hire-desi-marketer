"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Palette,
  RefreshCw,
  ShoppingBag,
  Layout,
  ShieldCheck,
  Zap,
  Code2,
  Sparkles,
  Check,
  ArrowRight,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { WEB_SERVICES, WebServiceItem } from "@/data/web-design-services";
import { cn } from "@/lib/utils";

const serviceIcons: Record<string, React.ReactNode> = {
  palette: <Palette className="w-4 h-4" />,
  refresh: <RefreshCw className="w-4 h-4" />,
  "shopping-bag": <ShoppingBag className="w-4 h-4" />,
  layout: <Layout className="w-4 h-4" />,
  shield: <ShieldCheck className="w-4 h-4" />,
  zap: <Zap className="w-4 h-4" />,
  code: <Code2 className="w-4 h-4" />,
  sparkles: <Sparkles className="w-4 h-4" />,
};

const SERVICE_VISUAL_CONFIG: Record<
  string,
  { image: string; badge: string; metric: string }
> = {
  "custom-design": {
    image: "/images/services-ui-design-showcase.jpg",
    badge: "100% Bespoke Figma",
    metric: "Figma to Semantic Code",
  },
  "website-redesign": {
    image: "/images/case-study-aesthetic.webp",
    badge: "Modernization + CRO",
    metric: "301 SEO Protected",
  },
  "ecommerce-development": {
    image: "/images/case-study-cafe.webp",
    badge: "Shopify Plus & Stripe",
    metric: "Sub-Second Micro-Cart",
  },
  "cms-development": {
    image: "/images/blog-hero-bg.webp",
    badge: "WordPress & Webflow",
    metric: "Client-Editable CMS",
  },
  "maintenance-enhancement": {
    image: "/images/journal-desk-hero.webp",
    badge: "24/7 SLA & Monitoring",
    metric: "99.9% Uptime SLA",
  },
  "speed-optimization": {
    image: "/images/web-dev-hero-bg.jpg",
    badge: "Core Web Vitals 99+",
    metric: "< 0.8s LCP Verified",
  },
  "custom-web-app": {
    image: "/images/case-study-roofing.webp",
    badge: "Next.js & React Engine",
    metric: "App-Like SPA Speed",
  },
  "uiux-conversion": {
    image: "/images/hero-devices-mockup.jpg",
    badge: "Conversion Science",
    metric: "+2.4x Avg. Lead Lift",
  },
};

export function WebDesignServicesGrid() {
  const [showAll, setShowAll] = useState<boolean>(false);

  const primaryServices = WEB_SERVICES.slice(0, 4);
  const secondaryServices = WEB_SERVICES.slice(4);

  const flagship = primaryServices[0]; // Custom Website Design & Development
  const card2 = primaryServices[1]; // Website Redesign
  const card3 = primaryServices[2]; // E-Commerce
  const card4 = primaryServices[3]; // CMS

  return (
    <div className="space-y-6 sm:space-y-8">
      {/* Asymmetrical Bento Architecture Grid (Breaks the Repetitive 4-Card Pattern) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-3.5 sm:gap-6 items-stretch">
        {/* 1. Flagship Feature Bento Card (Spans 7 cols on Desktop) */}
        <div className="lg:col-span-7 rounded-2xl sm:rounded-3xl bg-white border border-[#E2DBD0] hover:border-[#FFB020] shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group overflow-hidden text-left relative">
          <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#FFB020]/0 to-transparent group-hover:via-[#FFB020] transition-all duration-300 z-30" />

          {/* High-Resolution Flagship Image Preview */}
          <div className="relative aspect-[16/9] sm:aspect-[21/10] bg-slate-900 overflow-hidden border-b border-[#E2DBD0]">
            <Image
              src={SERVICE_VISUAL_CONFIG[flagship.id]?.image || "/images/services-ui-design-showcase.jpg"}
              alt={flagship.title}
              fill
              className="object-cover object-top group-hover:scale-103 transition-transform duration-700 ease-out"
              sizes="(max-width: 1024px) 100vw, 700px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent pointer-events-none" />

            {/* Corner Badges */}
            <div className="absolute bottom-2.5 left-3 right-3 sm:bottom-3 sm:left-4 sm:right-4 flex items-center justify-between z-10 pointer-events-none">
              <span className="px-2.5 py-1 rounded-full bg-[#060B22]/90 backdrop-blur-md border border-white/20 text-[#FFB020] text-[9px] sm:text-[10px] font-black uppercase tracking-wider shadow-sm flex items-center gap-1.5">
                <Sparkles className="w-3 h-3 text-[#FFB020]" />
                <span>Flagship Engineering · {SERVICE_VISUAL_CONFIG[flagship.id]?.badge}</span>
              </span>
              <span className="px-2 py-0.5 rounded-full bg-emerald-500/25 border border-emerald-500/40 text-emerald-300 text-[9px] font-bold">
                {SERVICE_VISUAL_CONFIG[flagship.id]?.metric}
              </span>
            </div>
          </div>

          {/* Flagship Content Body */}
          <div className="p-4 sm:p-6 space-y-3 sm:space-y-4">
            <div className="space-y-1.5">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-[#060B22] text-[#FFB020] flex items-center justify-center shrink-0 shadow-xs">
                  {serviceIcons[flagship.icon]}
                </div>
                <span className="text-[10px] sm:text-xs font-black uppercase tracking-wider text-[#B87A00]">
                  Core Specialty · Tailored Architecture
                </span>
              </div>

              <h3 className="font-display font-black text-lg sm:text-2xl text-[#0B1B3A] tracking-tight group-hover:text-[#B87A00] transition-colors">
                {flagship.title}
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-2xl font-normal">
                {flagship.description}
              </p>
            </div>

            {/* Deliverables Checklist Grid */}
            <div className="pt-2 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-2 gap-1.5 sm:gap-2 text-xs">
              {flagship.deliverables.slice(0, 4).map((d, i) => (
                <div key={i} className="flex items-center gap-2 text-slate-700">
                  <Check className="w-3.5 h-3.5 text-[#FFB020] shrink-0" />
                  <span className="text-[11px] sm:text-xs font-medium truncate">{d}</span>
                </div>
              ))}
            </div>

            {/* Direct Action Link */}
            <div className="pt-2 flex items-center justify-between">
              <span className="text-[11px] text-slate-500 font-medium hidden sm:inline">
                Tailored from bespoke Figma prototypes to live production
              </span>
              <a
                href="/get-a-quote"
                className="btn-luxury-navy py-2 px-4 rounded-xl text-xs font-black uppercase tracking-wider inline-flex items-center gap-1.5 shadow-xs cursor-pointer ml-auto"
              >
                <span>Discuss Custom Build</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#FFB020]" />
              </a>
            </div>
          </div>
        </div>

        {/* 2. Compact Bento Card 2: Website Redesign (Spans 5 cols on Desktop) */}
        <div className="lg:col-span-5 rounded-2xl sm:rounded-3xl bg-white border border-[#E2DBD0] hover:border-[#FFB020] shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group overflow-hidden text-left relative">
          <div className="relative aspect-[16/9] sm:aspect-[16/10] bg-slate-900 overflow-hidden border-b border-[#E2DBD0]">
            <Image
              src={SERVICE_VISUAL_CONFIG[card2.id]?.image || "/images/case-study-aesthetic.webp"}
              alt={card2.title}
              fill
              className="object-cover object-top group-hover:scale-103 transition-transform duration-700 ease-out"
              sizes="(max-width: 1024px) 100vw, 500px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

            <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between z-10 pointer-events-none">
              <span className="px-2 py-0.5 rounded-full bg-[#060B22]/90 backdrop-blur-md border border-white/20 text-[#FFB020] text-[9px] font-bold">
                {SERVICE_VISUAL_CONFIG[card2.id]?.badge}
              </span>
              <span className="px-2 py-0.5 rounded-full bg-white/20 backdrop-blur-md text-[9px] font-bold text-white">
                02
              </span>
            </div>
          </div>

          <div className="p-4 sm:p-5 space-y-3 flex-1 flex flex-col justify-between">
            <div className="space-y-1.5">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-md bg-[#060B22] text-[#FFB020] flex items-center justify-center shrink-0">
                  {serviceIcons[card2.icon]}
                </div>
                <span className="text-[10px] font-black uppercase tracking-wider text-slate-500">
                  Modernization &amp; CRO
                </span>
              </div>
              <h3 className="font-display font-black text-base sm:text-lg text-[#0B1B3A] tracking-tight group-hover:text-[#B87A00] transition-colors leading-snug">
                {card2.title}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                {card2.description}
              </p>
            </div>

            <div className="pt-2 border-t border-slate-100 space-y-1 text-xs">
              {card2.deliverables.slice(0, 2).map((d, i) => (
                <div key={i} className="flex items-center gap-1.5 text-slate-700">
                  <Check className="w-3 h-3 text-[#FFB020] shrink-0" />
                  <span className="text-[11px] truncate">{d}</span>
                </div>
              ))}
            </div>

            <a
              href="/get-a-quote"
              className="text-xs font-bold text-slate-700 hover:text-[#B87A00] inline-flex items-center gap-1 transition-colors pt-1 cursor-pointer"
            >
              <span>Explore Redesign Audit</span>
              <ArrowRight className="w-3 h-3 text-[#FFB020]" />
            </a>
          </div>
        </div>

        {/* 3. Lower Left Bento Card 3: E-Commerce (Spans 6 cols on Desktop) */}
        <div className="lg:col-span-6 rounded-2xl sm:rounded-3xl bg-white border border-[#E2DBD0] hover:border-[#FFB020] shadow-sm hover:shadow-md transition-all duration-300 flex flex-col sm:flex-row justify-between group overflow-hidden text-left relative">
          <div className="relative aspect-[16/10] sm:aspect-square sm:w-5/12 bg-slate-900 overflow-hidden shrink-0 border-b sm:border-b-0 sm:border-r border-[#E2DBD0]">
            <Image
              src={SERVICE_VISUAL_CONFIG[card3.id]?.image || "/images/case-study-cafe.webp"}
              alt={card3.title}
              fill
              className="object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
              sizes="(max-width: 640px) 100vw, 300px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />
            <span className="absolute bottom-2 left-2 px-2 py-0.5 rounded-full bg-[#060B22]/90 backdrop-blur-md border border-white/20 text-[#FFB020] text-[9px] font-bold">
              Shopify Plus &amp; Headless
            </span>
          </div>

          <div className="p-4 sm:p-5 sm:w-7/12 space-y-2.5 flex flex-col justify-between">
            <div className="space-y-1.5">
              <div className="flex items-center gap-1.5">
                <div className="w-6 h-6 rounded-md bg-[#060B22] text-[#FFB020] flex items-center justify-center shrink-0">
                  {serviceIcons[card3.icon]}
                </div>
                <span className="text-[10px] font-black uppercase tracking-wider text-slate-500">
                  High-Velocity Commerce
                </span>
              </div>
              <h3 className="font-display font-black text-sm sm:text-base text-[#0B1B3A] tracking-tight group-hover:text-[#B87A00] transition-colors leading-snug">
                {card3.title}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal line-clamp-2">
                {card3.description}
              </p>
            </div>

            <ul className="space-y-1 text-xs pt-1 border-t border-slate-100">
              {card3.deliverables.slice(0, 2).map((d, i) => (
                <li key={i} className="flex items-center gap-1.5 text-slate-700 text-[11px] truncate">
                  <Check className="w-3 h-3 text-[#FFB020] shrink-0" />
                  <span className="truncate">{d}</span>
                </li>
              ))}
            </ul>

            <a
              href="/get-a-quote"
              className="text-xs font-bold text-slate-700 hover:text-[#B87A00] inline-flex items-center gap-1 transition-colors cursor-pointer"
            >
              <span>Build Storefront</span>
              <ArrowRight className="w-3 h-3 text-[#FFB020]" />
            </a>
          </div>
        </div>

        {/* 4. Lower Right Bento Card 4: CMS Development (Spans 6 cols on Desktop) */}
        <div className="lg:col-span-6 rounded-2xl sm:rounded-3xl bg-white border border-[#E2DBD0] hover:border-[#FFB020] shadow-sm hover:shadow-md transition-all duration-300 flex flex-col sm:flex-row justify-between group overflow-hidden text-left relative">
          <div className="relative aspect-[16/10] sm:aspect-square sm:w-5/12 bg-slate-900 overflow-hidden shrink-0 border-b sm:border-b-0 sm:border-r border-[#E2DBD0]">
            <Image
              src={SERVICE_VISUAL_CONFIG[card4.id]?.image || "/images/blog-hero-bg.webp"}
              alt={card4.title}
              fill
              className="object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
              sizes="(max-width: 640px) 100vw, 300px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />
            <span className="absolute bottom-2 left-2 px-2 py-0.5 rounded-full bg-[#060B22]/90 backdrop-blur-md border border-white/20 text-[#FFB020] text-[9px] font-bold">
              WordPress &amp; Webflow
            </span>
          </div>

          <div className="p-4 sm:p-5 sm:w-7/12 space-y-2.5 flex flex-col justify-between">
            <div className="space-y-1.5">
              <div className="flex items-center gap-1.5">
                <div className="w-6 h-6 rounded-md bg-[#060B22] text-[#FFB020] flex items-center justify-center shrink-0">
                  {serviceIcons[card4.icon]}
                </div>
                <span className="text-[10px] font-black uppercase tracking-wider text-slate-500">
                  Modern CMS Architecture
                </span>
              </div>
              <h3 className="font-display font-black text-sm sm:text-base text-[#0B1B3A] tracking-tight group-hover:text-[#B87A00] transition-colors leading-snug">
                {card4.title}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal line-clamp-2">
                {card4.description}
              </p>
            </div>

            <ul className="space-y-1 text-xs pt-1 border-t border-slate-100">
              {card4.deliverables.slice(0, 2).map((d, i) => (
                <li key={i} className="flex items-center gap-1.5 text-slate-700 text-[11px] truncate">
                  <Check className="w-3 h-3 text-[#FFB020] shrink-0" />
                  <span className="truncate">{d}</span>
                </li>
              ))}
            </ul>

            <a
              href="/get-a-quote"
              className="text-xs font-bold text-slate-700 hover:text-[#B87A00] inline-flex items-center gap-1 transition-colors cursor-pointer"
            >
              <span>Explore CMS Solutions</span>
              <ArrowRight className="w-3 h-3 text-[#FFB020]" />
            </a>
          </div>
        </div>
      </div>

      {/* Expandable Drawer for Remaining Specialized Services (Speed, Custom Web Apps, Maintenance, CRO) */}
      {showAll && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 pt-2 animate-content-fade">
          {secondaryServices.map((svc) => (
            <div
              key={svc.id}
              className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#E2DBD0] hover:border-[#FFB020] transition-all text-left space-y-2.5"
            >
              <div className="flex items-center justify-between">
                <div className="w-7 h-7 rounded-lg bg-[#060B22] text-[#FFB020] flex items-center justify-center">
                  {serviceIcons[svc.icon]}
                </div>
                <span className="text-[9px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                  {SERVICE_VISUAL_CONFIG[svc.id]?.metric || "Available"}
                </span>
              </div>
              <h4 className="font-display font-black text-sm text-[#0B1B3A]">
                {svc.title}
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed line-clamp-2">
                {svc.description}
              </p>
            </div>
          ))}
        </div>
      )}

      {/* Toggle Button */}
      <div className="text-center pt-1">
        <button
          type="button"
          onClick={() => setShowAll(!showAll)}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white hover:bg-slate-50 border border-[#E2DBD0] hover:border-[#FFB020] text-xs font-bold text-slate-700 transition-all shadow-2xs cursor-pointer"
        >
          <span>{showAll ? "Show Less Services" : "Explore All 8 Specialized Web Solutions"}</span>
          {showAll ? <ChevronUp className="w-3.5 h-3.5 text-[#B87A00]" /> : <ChevronDown className="w-3.5 h-3.5 text-[#B87A00]" />}
        </button>
      </div>
    </div>
  );
}

"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Building,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  ShieldCheck,
  Check,
  Stethoscope,
  ShoppingBag,
  Cpu,
  Home,
  GraduationCap,
  Briefcase,
} from "lucide-react";
import { WEB_INDUSTRIES, WebIndustryItem } from "@/data/web-design-services";
import { cn } from "@/lib/utils";

const INDUSTRY_META: Record<
  string,
  {
    image: string;
    tag: string;
    metric: string;
    icon: React.ReactNode;
    headline: string;
    focusScope: string;
  }
> = {
  healthcare: {
    image: "/images/case-study-dental.webp",
    tag: "HIPAA Compliant",
    metric: "140+ Patient Calls/Mo",
    icon: <Stethoscope className="w-4 h-4 text-[#FFB020]" />,
    headline: "Patient-First Portals, Telehealth & Frictionless Booking",
    focusScope: "Built for medical clinics, private practices, and telehealth startups requiring strict compliance and intuitive patient scheduling.",
  },
  ecommerce: {
    image: "/images/case-study-cafe.webp",
    tag: "Shopify Plus / DTC",
    metric: "4.6% Avg. Checkout Conv.",
    icon: <ShoppingBag className="w-4 h-4 text-[#FFB020]" />,
    headline: "High-Velocity Headless & Native E-Commerce Storefronts",
    focusScope: "Sub-second catalog browsing, sticky cart previews, multi-currency checkout, and ERP inventory integration.",
  },
  saas: {
    image: "/images/hero-devices-mockup.jpg",
    tag: "High-Converting Landers",
    metric: "Sub-Second Edge Speeds",
    icon: <Cpu className="w-4 h-4 text-[#FFB020]" />,
    headline: "Next-Gen Developer Marketing Sites & Product Showcases",
    focusScope: "Interactive feature tours, documentation hubs, self-service onboarding, and high-converting signup funnels.",
  },
  realestate: {
    image: "/images/journal-desk-hero.webp",
    tag: "MLS / IDX Integration",
    metric: "Instant Property Sync",
    icon: <Home className="w-4 h-4 text-[#FFB020]" />,
    headline: "Luxury Brokerage & Commercial Property Portals",
    focusScope: "Automated MLS/IDX property syncing, interactive neighborhood maps, and high-ticket investor inquiry routing.",
  },
  education: {
    image: "/images/blog-hero-bg.webp",
    tag: "LMS & Video Streaming",
    metric: "Gated Student Portals",
    icon: <GraduationCap className="w-4 h-4 text-[#FFB020]" />,
    headline: "E-Learning Academies & Institutional Websites",
    focusScope: "Gated student course areas, curriculum directories, video streaming architectures, and frictionless enrollment funnels.",
  },
  "professional-services": {
    image: "/images/services-ui-design-showcase.jpg",
    tag: "Authority Positioning",
    metric: "+180% Qualified RFPs",
    icon: <Briefcase className="w-4 h-4 text-[#FFB020]" />,
    headline: "Corporate Advisory & High-Ticket B2B Service Portals",
    focusScope: "Executive thought leadership publishing, credentials showcase, case study libraries, and RFP capture pipelines.",
  },
};

export function WebDesignIndustriesGrid() {
  const [selectedIndustryId, setSelectedIndustryId] = useState<string>("healthcare");

  const activeInd =
    WEB_INDUSTRIES.find((i) => i.id === selectedIndustryId) ||
    WEB_INDUSTRIES[0];

  const activeMeta = INDUSTRY_META[activeInd.id] || INDUSTRY_META.healthcare;

  return (
    <div className="space-y-6 sm:space-y-8">
      {/* 1. Touch-Friendly Interactive Sector Switcher Ribbon */}
      <div className="flex items-center justify-center gap-1.5 sm:gap-2.5 overflow-x-auto pb-1 no-scrollbar">
        {WEB_INDUSTRIES.slice(0, 6).map((ind) => {
          const isSelected = ind.id === activeInd.id;
          const meta = INDUSTRY_META[ind.id] || INDUSTRY_META.healthcare;

          return (
            <button
              key={ind.id}
              type="button"
              onClick={() => setSelectedIndustryId(ind.id)}
              className={cn(
                "px-3 sm:px-4 py-2 sm:py-2.5 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer select-none inline-flex items-center gap-2 shrink-0 border",
                isSelected
                  ? "bg-[#060B22] text-[#FFB020] border-[#FFB020] shadow-sm ring-2 ring-[#FFB020]/20"
                  : "bg-white text-slate-700 border-[#E2DBD0] hover:border-slate-400"
              )}
            >
              <span>{meta.icon}</span>
              <span>{ind.name}</span>
              {isSelected && (
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shrink-0" />
              )}
            </button>
          );
        })}
      </div>

      {/* 2. Immersive Sector Spotlight Showcase (Asymmetrical Split Composition) */}
      <div className="rounded-2xl sm:rounded-3xl bg-white border border-[#E2DBD0] shadow-sm overflow-hidden text-left">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
          {/* Left / Top (7 cols): High-Resolution Sector Mockup Showcase */}
          <div className="lg:col-span-7 relative aspect-[16/10] sm:aspect-[16/9] lg:aspect-auto bg-slate-950 overflow-hidden border-b lg:border-b-0 lg:border-r border-[#E2DBD0] min-h-[260px] sm:min-h-[360px] group">
            <Image
              src={activeMeta.image}
              alt={`${activeInd.name} website preview`}
              fill
              className="object-cover object-top group-hover:scale-103 transition-transform duration-700 ease-out"
              sizes="(max-width: 1024px) 100vw, 700px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent pointer-events-none" />

            {/* Corner Badges */}
            <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 flex items-center justify-between z-10 pointer-events-none">
              <span className="px-2.5 py-1 rounded-full bg-[#060B22]/90 backdrop-blur-md border border-white/20 text-[#FFB020] text-[9px] sm:text-[10px] font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-sm">
                <Sparkles className="w-3 h-3 text-[#FFB020]" />
                <span>{activeMeta.tag}</span>
              </span>

              <span className="px-2.5 py-1 rounded-full bg-emerald-500/25 backdrop-blur-md border border-emerald-500/40 text-emerald-300 text-[10px] font-bold">
                {activeMeta.metric}
              </span>
            </div>
          </div>

          {/* Right (5 cols): Sector Specifics, Deliverables & Blueprint CTA */}
          <div className="lg:col-span-5 p-5 sm:p-7 flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-[#060B22] text-[#FFB020] flex items-center justify-center shrink-0">
                  {activeMeta.icon}
                </div>
                <span className="text-[10px] sm:text-xs font-black uppercase tracking-wider text-[#B87A00]">
                  Industry Blueprint · {activeInd.name}
                </span>
              </div>

              <h3 className="font-display font-black text-lg sm:text-xl text-[#0B1B3A] tracking-tight leading-snug">
                {activeMeta.headline}
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                {activeMeta.focusScope}
              </p>
            </div>

            {/* Included Industry Deliverables */}
            <div className="pt-3 border-t border-slate-100 space-y-2">
              <div className="text-[10px] font-black uppercase tracking-wider text-slate-700">
                Key Sector Capabilities Included:
              </div>
              <ul className="space-y-1.5 text-xs text-slate-700">
                {activeInd.popularSolutions.map((sol, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#FFB020] shrink-0" />
                    <span className="font-medium text-[11px] sm:text-xs">{sol}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Blueprint CTA Button */}
            <div className="pt-3 border-t border-slate-100 mt-auto">
              <a
                href="/get-a-quote"
                className="btn-luxury-navy w-full py-2.5 px-4 rounded-xl text-xs font-black uppercase tracking-wider flex items-center justify-center gap-2 shadow-xs cursor-pointer"
              >
                <span>Discuss {activeInd.name} Website Blueprint</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#FFB020]" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

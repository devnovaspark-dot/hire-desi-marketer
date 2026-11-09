"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Building,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import { WEB_INDUSTRIES, WebIndustryItem } from "@/data/web-design-services";
import { cn } from "@/lib/utils";

const INDUSTRY_IMAGES: Record<
  string,
  { image: string; tag: string; metric: string }
> = {
  healthcare: {
    image: "/images/case-study-dental.webp",
    tag: "HIPAA Compliant",
    metric: "140+ Patient Calls/Mo",
  },
  realestate: {
    image: "/images/journal-desk-hero.webp",
    tag: "MLS / IDX Integration",
    metric: "Instant Property Sync",
  },
  ecommerce: {
    image: "/images/case-study-cafe.webp",
    tag: "Shopify Plus / DTC",
    metric: "4.6% Avg. Checkout Conv.",
  },
  education: {
    image: "/images/blog-hero-bg.webp",
    tag: "LMS & Video Streaming",
    metric: "Gated Student Portals",
  },
  finance: {
    image: "/images/1200_1000px.webp",
    tag: "Bank-Grade Security",
    metric: "Encrypted Lead Routing",
  },
  travel: {
    image: "/images/case-study-aesthetic.webp",
    tag: "Direct Booking Engine",
    metric: "Zero Booking Commission",
  },
  "professional-services": {
    image: "/images/services-ui-design-showcase.jpg",
    tag: "Authority Positioning",
    metric: "+180% Qualified RFPs",
  },
  saas: {
    image: "/images/hero-devices-mockup.jpg",
    tag: "High-Converting Landers",
    metric: "Sub-Second Edge Speeds",
  },
  manufacturing: {
    image: "/images/case-study-roofing.webp",
    tag: "B2B Spec Catalogs",
    metric: "Bulk RFQ Generator",
  },
  automotive: {
    image: "/images/web-dev-hero-bg.jpg",
    tag: "Live Fleet & Stock",
    metric: "Instant Schedule Booking",
  },
  homeservices: {
    image: "/images/case-study-roofing.webp",
    tag: "Instant Quote Estimator",
    metric: "85+ Commercial Quotes",
  },
  legal: {
    image: "/images/journal-desk-hero.webp",
    tag: "Case Intake Portals",
    metric: "24/7 Lead Verification",
  },
};

export function WebDesignIndustriesGrid() {
  const [showAll, setShowAll] = useState<boolean>(false);

  const displayedIndustries = showAll
    ? WEB_INDUSTRIES
    : WEB_INDUSTRIES.slice(0, 6);

  return (
    <div className="space-y-6 sm:space-y-8">
      {/* Industries Grid with Rich Sector Website Thumbnails (Compact 2-col on mobile) */}
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-6">
        {displayedIndustries.map((ind, idx) => {
          const visual = INDUSTRY_IMAGES[ind.id] || {
            image: "/images/case-study-aesthetic.webp",
            tag: "Custom Architecture",
            metric: "Tailored Growth Model",
          };

          return (
            <div
              key={ind.id}
              className="rounded-2xl sm:rounded-3xl bg-white border border-[#E2DBD0] hover:border-[#FFB020] shadow-[0_4px_18px_-4px_rgba(6,11,34,0.05)] hover:shadow-[0_16px_36px_-6px_rgba(255,176,32,0.15)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group overflow-hidden"
            >
              <div>
                {/* Clean Edge-to-Edge Sector Preview */}
                <div className="relative aspect-[16/10] bg-slate-900 overflow-hidden border-b border-[#E2DBD0]">
                  <Image
                    src={visual.image}
                    alt={`${ind.name} website design example`}
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 360px"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

                  {/* Floating Sector Tag & Metric */}
                  <div className="absolute bottom-1.5 left-1.5 right-1.5 sm:bottom-2 sm:left-2.5 sm:right-2.5 flex items-center justify-between pointer-events-none z-10 gap-1">
                    <span className="px-1.5 py-0.5 rounded-full bg-[#060B22]/90 backdrop-blur-md border border-white/20 text-white text-[8px] sm:text-[9px] font-bold truncate">
                      {visual.tag}
                    </span>
                    <span className="px-1.5 py-0.5 rounded-full bg-emerald-500/25 backdrop-blur-md border border-emerald-500/40 text-emerald-300 text-[8px] sm:text-[9px] font-bold truncate">
                      {visual.metric}
                    </span>
                  </div>
                </div>

                {/* Details */}
                <div className="p-3 sm:p-6 space-y-2.5 sm:space-y-4 text-left">
                  <div>
                    <h3 className="font-display font-black text-xs sm:text-lg text-[#0B1B3A] group-hover:text-[#B87A00] transition-colors leading-snug line-clamp-1">
                      {ind.name}
                    </h3>
                    <p className="hidden sm:block text-xs text-slate-600 leading-relaxed mt-1.5 line-clamp-2">
                      {ind.description}
                    </p>
                  </div>

                  <div className="pt-2 sm:pt-3 border-t border-[#E2DBD0] space-y-1 sm:space-y-1.5">
                    <div className="text-[9px] sm:text-[10px] font-black text-slate-700 uppercase tracking-wider">
                      Popular Deliverables:
                    </div>
                    {ind.popularSolutions.slice(0, 2).map((sol, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-1.5 text-[10px] sm:text-[11px] text-slate-700 font-medium truncate"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#FFB020] shrink-0" />
                        <span className="truncate">{sol}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-3 pt-0 sm:p-6 sm:pt-0">
                <a
                  href="#lead-form"
                  className="w-full py-1.5 sm:py-2.5 px-2.5 sm:px-4 rounded-lg sm:rounded-xl bg-slate-50 hover:bg-[#060B22] text-slate-800 hover:text-white border border-[#E2DBD0] hover:border-[#060B22] text-[10px] sm:text-xs font-bold inline-flex items-center justify-between transition-all cursor-pointer group/btn"
                >
                  <span className="truncate">Blueprint Scope</span>
                  <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#FFB020] group-hover/btn:translate-x-1 transition-transform shrink-0" />
                </a>
              </div>
            </div>
          );
        })}
      </div>

      {/* View More / View Less Toggle */}
      <div className="flex items-center justify-center pt-2">
        <button
          suppressHydrationWarning
          type="button"
          onClick={() => setShowAll(!showAll)}
          className="btn-luxury-navy px-8 py-3.5 rounded-full text-xs font-black uppercase tracking-wider inline-flex items-center gap-2.5 shadow-md hover:shadow-lg transition-all cursor-pointer group"
        >
          <span>
            {showAll
              ? "View Less Industries"
              : `View All ${WEB_INDUSTRIES.length} Industries We Serve`}
          </span>
          {showAll ? (
            <ChevronUp className="w-4 h-4 text-[#FFB020] group-hover:-translate-y-0.5 transition-transform" />
          ) : (
            <ChevronDown className="w-4 h-4 text-[#FFB020] group-hover:translate-y-0.5 transition-transform" />
          )}
        </button>
      </div>
    </div>
  );
}

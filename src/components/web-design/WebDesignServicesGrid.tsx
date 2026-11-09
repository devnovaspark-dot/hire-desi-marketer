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
  { image: string; badge: string; urlLabel: string }
> = {
  "custom-design": {
    image: "/images/services-ui-design-showcase.jpg",
    badge: "100% Bespoke Figma",
    urlLabel: "figma.com/design-system",
  },
  "website-redesign": {
    image: "/images/case-study-aesthetic.webp",
    badge: "Modernization + CRO",
    urlLabel: "dermaluxe.com.au/new",
  },
  "ecommerce-development": {
    image: "/images/case-study-cafe.webp",
    badge: "Shopify Plus & Stripe",
    urlLabel: "ververoastery.ca/store",
  },
  "cms-development": {
    image: "/images/blog-hero-bg.webp",
    badge: "WordPress & Webflow",
    urlLabel: "client.com/wp-admin",
  },
  "maintenance-enhancement": {
    image: "/images/journal-desk-hero.webp",
    badge: "24/7 SLA & Monitoring",
    urlLabel: "uptime.status/monitor",
  },
  "speed-optimization": {
    image: "/images/web-dev-hero-bg.jpg",
    badge: "Core Web Vitals 99+",
    urlLabel: "pagespeed.web.dev/audit",
  },
  "custom-web-app": {
    image: "/images/case-study-roofing.webp",
    badge: "Next.js & React Engine",
    urlLabel: "portal.roofquote.app",
  },
  "uiux-conversion": {
    image: "/images/hero-devices-mockup.jpg",
    badge: "Conversion Science",
    urlLabel: "conversion.cro/tested",
  },
};

export function WebDesignServicesGrid() {
  const [showAll, setShowAll] = useState<boolean>(false);

  const displayedServices = showAll ? WEB_SERVICES : WEB_SERVICES.slice(0, 4);

  return (
    <div className="space-y-6 sm:space-y-8">
      {/* Visual, Elevated Services Grid with Real Browser Window Mockups (2 cards side-by-side on mobile) */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-6 items-stretch">
        {displayedServices.map((service, idx) => {
          const visual = SERVICE_VISUAL_CONFIG[service.id] || {
            image: service.bgImage || "/images/case-study-aesthetic.webp",
            badge: "Verified Delivery",
            urlLabel: "hiredesimarketer.com",
          };

          return (
            <div
              key={service.id}
              className="rounded-2xl sm:rounded-3xl bg-white border border-[#E2DBD0] hover:border-[#FFB020] shadow-[0_4px_20px_-4px_rgba(6,11,34,0.05)] hover:shadow-[0_16px_36px_-6px_rgba(255,176,32,0.16)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group overflow-hidden"
            >
              <div>
                {/* Clean Edge-to-Edge Website Architecture Preview */}
                <div className="relative aspect-[16/10] bg-slate-900 overflow-hidden border-b border-[#E2DBD0]">
                  {/* Screenshot Mockup Image with Smooth Scale on Hover */}
                  <Image
                    src={visual.image}
                    alt={`${service.title} visual illustration`}
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 300px"
                  />

                  {/* Vignette Gradient for Readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

                  {/* Floating Highlight Badge */}
                  <div className="absolute bottom-1.5 left-1.5 right-1.5 sm:bottom-2 sm:left-2 sm:right-2 flex items-center justify-between pointer-events-none z-10">
                    <span className="px-1.5 sm:px-2 py-0.5 rounded-full bg-[#060B22]/90 backdrop-blur-md border border-white/20 text-[#FFB020] text-[8px] sm:text-[9px] font-bold tracking-wider shadow-sm flex items-center gap-1 truncate max-w-[90%]">
                      <Sparkles className="w-2 h-2 sm:w-2.5 sm:h-2.5 text-[#FFB020] shrink-0" />
                      <span className="truncate">{visual.badge}</span>
                    </span>

                    <span className="px-1.5 py-0.5 rounded-full bg-white/20 backdrop-blur-md text-[8px] sm:text-[9px] font-black text-white shrink-0">
                      0{WEB_SERVICES.indexOf(service) + 1}
                    </span>
                  </div>
                </div>

                {/* Card Body Details */}
                <div className="p-3 sm:p-6 space-y-2.5 sm:space-y-4 text-left">
                  {/* Icon & Title */}
                  <div className="space-y-1.5 sm:space-y-2">
                    <div className="flex items-center gap-1.5 sm:gap-2">
                      <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-md sm:rounded-lg bg-[#060B22] text-[#FFB020] flex items-center justify-center shrink-0 shadow-xs group-hover:bg-[#FFB020] group-hover:text-[#060B22] transition-colors">
                        {serviceIcons[service.icon] || <Code2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />}
                      </div>
                      <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-wider text-slate-400 truncate">
                        {service.kicker.split("·")[1]?.trim() || "Web Solution"}
                      </span>
                    </div>

                    <h3 className="font-display font-black text-xs sm:text-base text-[#0B1B3A] leading-snug group-hover:text-[#B87A00] transition-colors line-clamp-2 min-h-[2rem] sm:min-h-[2.5rem]">
                      {service.title}
                    </h3>

                    <p className="hidden sm:block text-xs text-slate-600 leading-relaxed line-clamp-3">
                      {service.description}
                    </p>
                  </div>

                  {/* Key Deliverables Bullet List */}
                  <div className="pt-2 sm:pt-3 border-t border-slate-100 space-y-1.5 sm:space-y-2">
                    <div className="text-[9px] sm:text-[10px] font-black text-slate-700 uppercase tracking-wider">
                      Included Scope:
                    </div>
                    <ul className="space-y-1 sm:space-y-1.5 text-[10px] sm:text-xs text-slate-600">
                      {service.deliverables.slice(0, 2).map((d, i) => (
                        <li key={i} className="flex items-start gap-1 sm:gap-2">
                          <Check className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#FFB020] mt-0.5 shrink-0" />
                          <span className="leading-snug text-[10px] sm:text-[11px] line-clamp-1">{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Card Footer Action */}
              <div className="p-3 pt-0 sm:p-5 sm:pt-0">
                <a
                  href="#lead-form"
                  className="w-full py-1.5 sm:py-2.5 px-2.5 sm:px-4 rounded-lg sm:rounded-xl bg-slate-50 hover:bg-[#060B22] text-slate-800 hover:text-white border border-[#E2DBD0] hover:border-[#060B22] text-[10px] sm:text-xs font-bold inline-flex items-center justify-between transition-all cursor-pointer group/btn"
                >
                  <span className="truncate">Explore Scope</span>
                  <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#FFB020] group-hover/btn:translate-x-1 transition-transform shrink-0" />
                </a>
              </div>
            </div>
          );
        })}
      </div>

      {/* View More / View Less Toggle Button */}
      <div className="flex items-center justify-center pt-2">
        <button
          type="button"
          onClick={() => setShowAll(!showAll)}
          className="btn-luxury-navy px-8 py-3.5 rounded-full text-xs font-black uppercase tracking-wider inline-flex items-center gap-2.5 shadow-md hover:shadow-lg transition-all cursor-pointer group"
        >
          <span>
            {showAll
              ? "View Less Website Solutions"
              : `View All ${WEB_SERVICES.length} Website Solutions`}
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

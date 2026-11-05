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
  palette: <Palette className="w-5 h-5" />,
  refresh: <RefreshCw className="w-5 h-5" />,
  "shopping-bag": <ShoppingBag className="w-5 h-5" />,
  layout: <Layout className="w-5 h-5" />,
  shield: <ShieldCheck className="w-5 h-5" />,
  zap: <Zap className="w-5 h-5" />,
  code: <Code2 className="w-5 h-5" />,
  sparkles: <Sparkles className="w-5 h-5" />,
};

export function WebDesignServicesGrid() {
  const [showAll, setShowAll] = useState<boolean>(false);

  const displayedServices = showAll ? WEB_SERVICES : WEB_SERVICES.slice(0, 4);

  return (
    <div className="space-y-10">
      {/* Clean, Simple, Attractive Services Grid (No Dark Blue Boxes, No Heavy Clutter) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {displayedServices.map((service, idx) => (
          <div
            key={service.id}
            className="rounded-3xl p-6 sm:p-7 bg-white border border-[#E2DBD0] hover:border-[#FFB020]/70 shadow-[0_4px_18px_-4px_rgba(6,11,34,0.04)] hover:shadow-[0_14px_30px_-6px_rgba(6,11,34,0.09)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
          >
            {/* Relevant Background Mockup Image with Luxury Overlay */}
            {service.bgImage && (
              <div className="absolute inset-0 z-0 overflow-hidden rounded-3xl pointer-events-none">
                <Image
                  src={service.bgImage}
                  alt={service.title}
                  fill
                  className="object-cover object-top opacity-10 group-hover:opacity-20 group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/94 to-white/75 group-hover:from-white/92 group-hover:via-white/85 group-hover:to-white/60 transition-colors duration-300" />
              </div>
            )}

            {/* Top Subtle Hover Accent */}
            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-transparent to-transparent group-hover:via-[#FFB020] transition-all duration-300 z-10" />

            <div className="space-y-4 relative z-10">
              {/* Header Icon & Solution Number */}
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-[#060B22] text-[#FFB020] flex items-center justify-center shadow-xs group-hover:scale-105 group-hover:bg-[#FFB020] group-hover:text-[#060B22] transition-all duration-300">
                  {serviceIcons[service.icon] || <Code2 className="w-5 h-5" />}
                </div>
                <span className="text-[11px] font-bold text-slate-400 group-hover:text-[#B87A00] transition-colors">
                  0{WEB_SERVICES.indexOf(service) + 1}
                </span>
              </div>

              {/* Title & Description */}
              <div className="space-y-2">
                <h3 className="font-display font-black text-lg text-[#0B1B3A] leading-snug group-hover:text-[#B87A00] transition-colors">
                  {service.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Key Deliverables Bullet List */}
              <div className="pt-2 border-t border-slate-100 space-y-2">
                <div className="text-[11px] font-bold text-slate-700 uppercase tracking-wider text-[10px]">
                  What You Get:
                </div>
                <ul className="space-y-1.5 text-xs text-slate-600">
                  {service.deliverables.slice(0, 3).map((d, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-[#FFB020] mt-0.5 shrink-0" />
                      <span className="leading-snug">{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Clean Bottom Action */}
            <div className="pt-4 border-t border-slate-100 mt-5 relative z-10">
              <a
                href="#lead-form"
                className="text-xs font-bold text-[#0B1B3A] group-hover:text-[#B87A00] inline-flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <span>Discuss This Solution</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1 text-[#FFB020]" />
              </a>
            </div>
          </div>
        ))}
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

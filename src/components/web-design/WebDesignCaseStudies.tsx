"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  ExternalLink,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  MapPin,
  TrendingUp,
  X,
  Lock,
  Layers,
  Zap,
  Globe,
  ShieldCheck,
} from "lucide-react";
import { WEB_CASE_STUDIES, WebCaseStudy } from "@/data/web-design-services";
import { cn } from "@/lib/utils";

const CATEGORY_TABS = [
  { id: "all", label: "All References" },
  { id: "business", label: "Healthcare" },
  { id: "ecommerce", label: "E-Commerce" },
  { id: "webapp", label: "SaaS / Technology" },
  { id: "redesign", label: "Corporate Services" },
];

export function WebDesignCaseStudies() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedStudy, setSelectedStudy] = useState<WebCaseStudy | null>(null);

  const filteredStudies =
    activeCategory === "all"
      ? WEB_CASE_STUDIES
      : WEB_CASE_STUDIES.filter((cs) => cs.category === activeCategory);

  return (
    <div className="space-y-6 sm:space-y-8">
      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2.5">
        {CATEGORY_TABS.map((tab) => (
          <button
            suppressHydrationWarning
            key={tab.id}
            type="button"
            onClick={() => setActiveCategory(tab.id)}
            className={cn(
              "px-3.5 sm:px-5 py-1.5 sm:py-2.5 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer select-none",
              activeCategory === tab.id
                ? "bg-[#060B22] text-[#FFB020] border border-[#FFB020]/40 shadow-sm"
                : "bg-white text-slate-700 border border-[#E2DBD0] hover:border-slate-400 hover:text-[#0B1B3A]"
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Grid of Elevated, Compact Website References (Tighter, Modern Sizing) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 items-stretch">
        {filteredStudies.map((study) => (
          <div
            key={study.id}
            className="rounded-2xl sm:rounded-2xl bg-white border border-[#E2DBD0] overflow-hidden hover:border-[#FFB020] shadow-[0_4px_18px_-4px_rgba(6,11,34,0.05)] hover:shadow-[0_14px_30px_-6px_rgba(255,176,32,0.12)] transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between group relative text-left"
          >
            {/* Top Subtle Hover Accent Bar */}
            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-transparent to-transparent group-hover:via-[#FFB020] transition-all duration-300 z-30" />

            <div>
              {/* Compact Browser Window Presentation Header */}
              <div className="relative h-40 sm:h-48 lg:h-52 bg-slate-950 overflow-hidden border-b border-[#E2DBD0]">
                {/* Realistic Safari / Chrome Browser Window Header */}
                <div className="absolute top-0 inset-x-0 h-6 sm:h-7 bg-[#060B22]/95 backdrop-blur-md z-20 flex items-center justify-between px-2.5 sm:px-3 text-[10px] text-slate-300 border-b border-white/10">
                  <div className="flex items-center gap-1.5 shrink-0">
                    <span className="w-2 h-2 rounded-full bg-rose-500/80" />
                    <span className="w-2 h-2 rounded-full bg-amber-500/80" />
                    <span className="w-2 h-2 rounded-full bg-emerald-500/80" />
                  </div>

                  {/* Simulated URL Bar with Real Domain */}
                  <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/10 border border-white/10 text-[9px] font-mono text-slate-300 max-w-[170px] sm:max-w-[240px] truncate">
                    <Lock className="w-2.5 h-2.5 text-emerald-400 shrink-0" />
                    <span className="truncate">
                      {study.liveUrl ? study.liveUrl.replace(/^https?:\/\//, "") : `${study.clientName.toLowerCase().replace(/[^a-z0-9]/g, "")}.com`}
                    </span>
                  </div>

                  <span className="text-[8px] sm:text-[9px] font-bold text-[#FFB020] uppercase tracking-wider bg-white/10 px-1.5 py-0.5 rounded border border-white/10 shrink-0">
                    {study.referenceType || "Live Reference"}
                  </span>
                </div>

                {/* Website Preview Image */}
                <Image
                  src={study.image}
                  alt={study.imageAlt}
                  fill
                  className="object-cover object-top pt-6 sm:pt-7 group-hover:scale-102 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 550px"
                />

                {/* Contrast Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-transparent pointer-events-none" />

                {/* Floating Industry Badge (Bottom Left) */}
                <div className="absolute bottom-2.5 left-2.5 sm:bottom-3 sm:left-3 flex flex-wrap items-center gap-1.5 z-20 text-[9px] sm:text-[10px]">
                  <span className="px-2 py-0.5 rounded-md bg-[#060B22]/90 backdrop-blur-md text-[#FFB020] font-bold border border-white/15 shadow-sm">
                    {study.industry}
                  </span>
                  <span className="px-2 py-0.5 rounded-md bg-black/80 backdrop-blur-md text-white font-medium border border-white/15 shadow-sm">
                    {study.projectType}
                  </span>
                </div>
              </div>

              {/* Content Body - Compact Padding & Typography */}
              <div className="p-3.5 sm:p-5 space-y-2.5 sm:space-y-3">
                <div className="space-y-1">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-wider text-[#B87A00] bg-[#FFB020]/15 px-2 py-0.5 rounded-full border border-[#FFB020]/25">
                      {study.categoryLabel}
                    </span>
                    <span className="text-[9px] sm:text-[10px] text-slate-500 font-medium">
                      Design Inspiration
                    </span>
                  </div>

                  <h3 className="font-display font-black text-lg sm:text-xl text-[#0B1B3A] tracking-tight group-hover:text-[#B87A00] transition-colors leading-snug">
                    {study.clientName}
                  </h3>

                  <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed line-clamp-2">
                    {study.solution}
                  </p>
                </div>

                {/* Tech Pills (Compact) */}
                <div className="flex flex-wrap gap-1 sm:gap-1.5">
                  {study.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 text-[9px] sm:text-[10px] font-semibold border border-slate-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* 3 Benchmark Metrics Badges - Slim Ribbon */}
                <div className="grid grid-cols-3 gap-1 sm:gap-1.5 p-2 rounded-xl bg-gradient-to-r from-[#060B22] via-[#0B1433] to-[#060B22] text-white text-center border border-[#FFB020]/20 shadow-xs">
                  {study.metrics.map((m, i) => (
                    <div key={i} className="space-y-0.5 min-w-0">
                      <div className="font-display font-black text-[11px] sm:text-xs text-[#FFB020] truncate">
                        {m.value}
                      </div>
                      <div className="text-[7.5px] sm:text-[8px] text-slate-300 font-semibold uppercase tracking-wider truncate">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Actions - Slim Compact Buttons */}
            <div className="p-3.5 sm:p-5 pt-0 border-t border-slate-100 mt-1">
              <div className="pt-2.5 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2">
                {study.liveUrl && (
                  <a
                    href={study.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-luxury-navy py-2 px-3.5 rounded-lg sm:rounded-xl text-[11px] sm:text-xs font-black uppercase tracking-wider inline-flex items-center justify-center gap-1.5 shadow-sm transition-all cursor-pointer group/btn"
                  >
                    <span>Check Live Website</span>
                    <ExternalLink className="w-3 h-3 text-[#FFB020] group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </a>
                )}

                <a
                  href="#lead-form"
                  className="py-2 px-3.5 rounded-lg sm:rounded-xl text-[11px] sm:text-xs font-bold text-slate-700 hover:text-[#0B1B3A] bg-slate-100 hover:bg-slate-200 border border-slate-200 inline-flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                >
                  <span>Discuss Your Project</span>
                  <ArrowRight className="w-3 h-3 text-[#FFB020]" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ExternalLink, ArrowRight } from "lucide-react";
import { WEB_CASE_STUDIES, WebCaseStudy } from "@/data/web-design-services";
import { cn } from "@/lib/utils";

const CATEGORY_TABS = [
  { id: "all", label: "All References" },
  { id: "business", label: "Healthcare" },
  { id: "ecommerce", label: "E-Commerce" },
  { id: "webapp", label: "SaaS / Tech" },
  { id: "redesign", label: "Corporate Services" },
];

export function WebDesignCaseStudies() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

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

      {/* Grid of Elevated Website Reference Cards with Authentic Screenshot Images */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-7 items-stretch">
        {filteredStudies.map((study) => (
          <div
            key={study.id}
            className="rounded-2xl sm:rounded-3xl bg-white border border-[#E2DBD0] overflow-hidden hover:border-[#FFB020] shadow-[0_4px_20px_-4px_rgba(6,11,34,0.06)] hover:shadow-[0_20px_40px_-8px_rgba(255,176,32,0.16)] transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group relative text-left"
          >
            {/* Top Subtle Gold Accent Bar */}
            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#FFB020]/0 to-transparent group-hover:via-[#FFB020] transition-all duration-300 z-30" />

            <div>
              {/* Clean Website Preview Image (Zero Fake Browser Bar Clutter) */}
              <div className="relative aspect-[16/10] sm:aspect-[16/9.5] w-full bg-slate-100 overflow-hidden border-b border-[#E2DBD0]">
                <Image
                  src={study.image}
                  alt={study.imageAlt}
                  fill
                  className="object-cover object-top group-hover:scale-103 transition-transform duration-700 ease-out"
                  sizes="(max-width: 768px) 100vw, 600px"
                />
              </div>

              {/* Card Body with Editorial Hierarchy */}
              <div className="p-4 sm:p-6 space-y-3.5">
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[9.5px] sm:text-[10px] font-black uppercase tracking-wider text-[#B87A00] bg-[#FFB020]/15 px-2.5 py-0.5 rounded-full border border-[#FFB020]/25">
                      {study.categoryLabel}
                    </span>
                    <span className="text-[10px] text-emerald-700 font-bold flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      <span>{study.referenceType || "Design Benchmark"}</span>
                    </span>
                  </div>

                  <div className="flex items-center justify-between pt-0.5">
                    <h3 className="font-display font-black text-xl sm:text-2xl text-[#0B1B3A] tracking-tight group-hover:text-[#B87A00] transition-colors">
                      {study.clientName}
                    </h3>
                    <span className="text-xs font-mono text-slate-400 hidden sm:inline">
                      {study.liveUrl ? study.liveUrl.replace(/^https?:\/\//, "").replace(/\/$/, "") : ""}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {study.solution}
                  </p>
                </div>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-1 sm:gap-1.5">
                  {study.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 sm:px-2.5 py-0.5 rounded-md bg-slate-100 text-slate-700 text-[10px] font-semibold border border-slate-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Clean Light Stat Badges (Lightweight, No Heavy Black Block) */}
                <div className="grid grid-cols-3 gap-1.5 p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-center">
                  {study.metrics.map((m, i) => (
                    <div
                      key={i}
                      className={cn(
                        "space-y-0.5 min-w-0",
                        i !== 2 ? "border-r border-slate-200 pr-1" : ""
                      )}
                    >
                      <div className="font-display font-black text-xs sm:text-sm text-[#0B1B3A] truncate">
                        {m.value}
                      </div>
                      <div className="text-[8px] sm:text-[9px] text-slate-500 font-semibold uppercase tracking-wider truncate">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Actions: Clear Button & Clean Scope Link */}
            <div className="p-4 sm:p-6 pt-0 border-t border-slate-100 mt-1">
              <div className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5">
                {study.liveUrl ? (
                  <a
                    href={study.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-luxury-navy py-2.5 px-4 rounded-xl text-xs font-black uppercase tracking-wider inline-flex items-center justify-center gap-1.5 shadow-sm transition-all cursor-pointer group/btn"
                  >
                    <span>Check Live Website</span>
                    <ExternalLink className="w-3.5 h-3.5 text-[#FFB020] group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </a>
                ) : (
                  <span />
                )}

                <a
                  href="#lead-form"
                  className="text-xs font-bold text-slate-700 hover:text-[#B87A00] inline-flex items-center justify-center gap-1 transition-colors cursor-pointer py-1"
                >
                  <span>Discuss Similar Scope</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#FFB020]" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

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

  const scrollToLeadForm = (e: React.MouseEvent) => {
    e.preventDefault();
    const target =
      document.getElementById("lead-form") ||
      document.getElementById("final-cta");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
      window.history.pushState(null, "", "#lead-form");
    } else {
      window.location.href = "#lead-form";
    }
  };

  return (
    <div className="space-y-5 sm:space-y-6">
      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2">
        {CATEGORY_TABS.map((tab) => (
          <button
            suppressHydrationWarning
            key={tab.id}
            type="button"
            onClick={() => setActiveCategory(tab.id)}
            className={cn(
              "px-3.5 sm:px-4 py-1.5 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer select-none",
              activeCategory === tab.id
                ? "bg-[#060B22] text-[#FFB020] border border-[#FFB020]/40 shadow-xs"
                : "bg-white text-slate-700 border border-[#E2DBD0] hover:border-slate-400 hover:text-[#0B1B3A]"
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Grid of Compact, Refined Website Reference Cards (4 Columns on Desktop) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 items-stretch">
        {filteredStudies.map((study) => (
          <div
            key={study.id}
            className="rounded-2xl bg-white border border-[#E2DBD0] overflow-hidden hover:border-[#FFB020] shadow-[0_4px_16px_-4px_rgba(6,11,34,0.06)] hover:shadow-[0_16px_32px_-8px_rgba(255,176,32,0.18)] transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between group relative text-left"
          >
            {/* Top Subtle Gold Accent Bar on Hover */}
            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-transparent to-transparent group-hover:via-[#FFB020] transition-all duration-300 z-30" />

            <div>
              {/* Clean Screenshot Area — ZERO TEXT OVERLAY */}
              <div className="relative aspect-[16/10] w-full bg-slate-100 overflow-hidden border-b border-[#E2DBD0]">
                <Image
                  src={study.image}
                  alt={study.imageAlt}
                  fill
                  className="object-cover object-top group-hover:scale-104 transition-transform duration-500 ease-out"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 320px"
                />
              </div>

              {/* Card Body with Balanced Proportions */}
              <div className="p-3.5 sm:p-4 space-y-2.5">
                <div className="space-y-1">
                  <div className="flex items-center justify-between gap-1.5">
                    <span className="text-[9px] font-black uppercase tracking-wider text-[#B87A00] bg-[#FFB020]/15 px-2 py-0.5 rounded-md border border-[#FFB020]/25 truncate">
                      {study.categoryLabel}
                    </span>
                    <span className="text-[9.5px] text-emerald-700 font-bold flex items-center gap-1 shrink-0">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      <span>{study.referenceType ? study.referenceType.replace("Website Reference", "Live") : "Design"}</span>
                    </span>
                  </div>

                  <h3 className="font-display font-black text-base sm:text-lg text-[#0B1B3A] tracking-tight group-hover:text-[#B87A00] transition-colors truncate pt-0.5">
                    {study.clientName}
                  </h3>

                  <p className="text-[11.5px] text-slate-600 leading-snug font-normal line-clamp-2">
                    {study.solution}
                  </p>
                </div>

                {/* Tech Stack Pills (Top 3) */}
                <div className="flex flex-wrap gap-1">
                  {study.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 text-[9.5px] font-semibold border border-slate-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Micro Metric Badges (2 Highlights) */}
                <div className="grid grid-cols-2 gap-1.5 p-2 rounded-xl bg-slate-50 border border-slate-200 text-center">
                  {study.metrics.slice(0, 2).map((m, i) => (
                    <div
                      key={i}
                      className={cn(
                        "space-y-0.5 min-w-0",
                        i === 0 ? "border-r border-slate-200 pr-1" : ""
                      )}
                    >
                      <div className="font-display font-black text-[11px] text-[#0B1B3A] truncate">
                        {m.value}
                      </div>
                      <div className="text-[8px] text-slate-500 font-semibold uppercase tracking-wider truncate">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Actions: Live Website Link & Scope CTA */}
            <div className="p-3.5 sm:p-4 pt-0 border-t border-slate-100 mt-2">
              <div className="pt-2.5 flex items-center justify-between gap-2">
                {study.liveUrl ? (
                  <a
                    href={study.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] font-bold text-slate-600 hover:text-[#060B22] inline-flex items-center gap-1 transition-colors"
                  >
                    <span>Live Site</span>
                    <ExternalLink className="w-3 h-3 text-[#FFB020]" />
                  </a>
                ) : (
                  <span />
                )}

                <a
                  href="/get-a-quote"
                  className="px-2.5 py-1 rounded-lg bg-[#060B22] text-[#FFB020] text-[10.5px] font-bold inline-flex items-center gap-1 hover:bg-[#B87A00] hover:text-white transition-all shadow-2xs"
                >
                  <span>Build Like This</span>
                  <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

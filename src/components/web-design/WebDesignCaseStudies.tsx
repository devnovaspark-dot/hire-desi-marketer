"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, ArrowRight, Sparkles, CheckCircle2, Lock, Activity } from "lucide-react";
import { WEB_CASE_STUDIES, WebCaseStudy } from "@/data/web-design-services";
import { cn } from "@/lib/utils";

export function WebDesignCaseStudies() {
  const [activeStudyId, setActiveStudyId] = useState<string>("saas-reference");

  const activeStudy =
    WEB_CASE_STUDIES.find((cs) => cs.id === activeStudyId) ||
    WEB_CASE_STUDIES[0];

  return (
    <div className="space-y-6 sm:space-y-8 max-w-6xl mx-auto text-left">
      {/* 1. Interactive Curated Exhibition Selector Strip */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-3">
        {WEB_CASE_STUDIES.map((study, idx) => {
          const isSelected = study.id === activeStudy.id;

          return (
            <button
              key={study.id}
              type="button"
              onClick={() => setActiveStudyId(study.id)}
              className={cn(
                "p-3 rounded-2xl border text-left transition-all duration-200 cursor-pointer select-none flex flex-col justify-between space-y-2 group relative overflow-hidden",
                isSelected
                  ? "bg-[#060B22] text-white border-[#FFB020] shadow-md ring-1 ring-[#FFB020]/30 scale-[1.02]"
                  : "bg-white text-slate-700 border-[#E2DBD0] hover:border-slate-400 hover:bg-[#FAF8F5]"
              )}
            >
              {/* Progress Bar / Active Indicator */}
              {isSelected && (
                <div className="absolute top-0 inset-x-0 h-1 bg-[#FFB020]" />
              )}

              <div className="flex items-center justify-between gap-1 w-full">
                <span
                  className={cn(
                    "font-mono text-[10px] font-black px-2 py-0.5 rounded-md",
                    isSelected
                      ? "text-[#FFB020] bg-white/10"
                      : "text-slate-400 bg-slate-100"
                  )}
                >
                  0{idx + 1}
                </span>

                <span
                  className={cn(
                    "text-[9px] font-bold uppercase tracking-wider truncate",
                    isSelected ? "text-emerald-400" : "text-slate-500"
                  )}
                >
                  {study.referenceType ? study.referenceType.replace("Website Reference", "Live") : "Design"}
                </span>
              </div>

              <div>
                <div
                  className={cn(
                    "font-display font-black text-sm sm:text-base tracking-tight truncate",
                    isSelected ? "text-white" : "text-[#0B1B3A] group-hover:text-[#B87A00]"
                  )}
                >
                  {study.clientName}
                </div>
                <div
                  className={cn(
                    "text-[10.5px] truncate mt-0.5",
                    isSelected ? "text-slate-300" : "text-slate-500"
                  )}
                >
                  {study.categoryLabel}
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* 2. Flagship Exhibition Spotlight Canvas (Breaks Repetitive Card Grids) */}
      <div className="rounded-2xl sm:rounded-3xl bg-white border border-[#E2DBD0] shadow-md overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
          {/* Left Column (7 cols): Full-Bleed Realistic Browser Viewport (STRICT ZERO TEXT OVERLAY) */}
          <div className="lg:col-span-7 p-4 sm:p-6 bg-[#FAF8F5] border-b lg:border-b-0 lg:border-r border-[#E2DBD0] flex flex-col justify-center">
            <div className="rounded-xl overflow-hidden border border-[#060B22]/15 shadow-md bg-white">
              {/* Browser Header Bar */}
              <div className="h-8 bg-[#060B22] px-3.5 flex items-center justify-between border-b border-white/10">
                <div className="flex items-center gap-1.5 shrink-0">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
                </div>

                <div className="flex items-center gap-1.5 px-3 py-0.5 rounded-md bg-white/10 border border-white/15 text-[10px] text-slate-200 font-mono max-w-[240px] sm:max-w-[300px] truncate">
                  <Lock className="w-2.5 h-2.5 text-emerald-400 shrink-0" />
                  <span className="truncate">{activeStudy.liveUrl?.replace("https://www.", "") || "live.hdm.preview"}</span>
                </div>

                <span className="text-[9px] text-[#FFB020] font-bold uppercase tracking-wider hidden sm:block">
                  Verified Benchmark
                </span>
              </div>

              {/* Pristine Authentic Screenshot (ZERO TEXT OVERLAY) */}
              <div className="relative aspect-[16/10] sm:aspect-[16/9.5] w-full bg-slate-950 overflow-hidden">
                <Image
                  src={activeStudy.image}
                  alt={activeStudy.imageAlt}
                  fill
                  className="object-cover object-top transition-transform duration-700 ease-out hover:scale-102"
                  sizes="(max-width: 1024px) 100vw, 700px"
                  priority
                />
              </div>

              {/* Browser Bottom Status Strip */}
              <div className="px-3.5 py-2 bg-[#060B22] border-t border-white/10 flex items-center justify-between text-[11px] text-slate-300">
                <span className="font-bold text-white truncate">{activeStudy.clientName}</span>
                <div className="flex items-center gap-1.5 text-emerald-400 font-mono text-[10px] font-bold">
                  <Activity className="w-3 h-3 animate-pulse" />
                  <span>Production Live</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column (5 cols): Architectural Specs & Direct Conversion */}
          <div className="lg:col-span-5 p-5 sm:p-7 flex flex-col justify-between space-y-5">
            <div className="space-y-3.5">
              <div className="flex items-center justify-between gap-2">
                <span className="text-[10px] font-black uppercase tracking-wider text-[#B87A00] bg-[#FFB020]/15 px-2.5 py-0.5 rounded-full border border-[#FFB020]/30">
                  {activeStudy.categoryLabel}
                </span>

                <span className="text-xs font-mono font-bold text-slate-400">
                  {activeStudy.industry}
                </span>
              </div>

              <div>
                <h3 className="font-display font-black text-xl sm:text-2xl text-[#0B1B3A] tracking-tight leading-snug">
                  {activeStudy.projectType}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mt-2">
                  {activeStudy.solution}
                </p>
              </div>

              {/* Verified Metrics Grid */}
              <div className="grid grid-cols-3 gap-2 p-2.5 rounded-2xl bg-slate-50 border border-slate-200 text-center">
                {activeStudy.metrics.map((m, i) => (
                  <div
                    key={i}
                    className={cn(
                      "space-y-0.5 min-w-0",
                      i < 2 ? "border-r border-slate-200 pr-1" : ""
                    )}
                  >
                    <div className="font-display font-black text-xs sm:text-sm text-[#0B1B3A] truncate">
                      {m.value}
                    </div>
                    <div className="text-[8.5px] text-slate-500 font-semibold uppercase tracking-wider truncate">
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Technologies Included */}
              <div className="pt-2 border-t border-slate-100 space-y-1.5">
                <div className="text-[10px] font-black uppercase tracking-wider text-slate-500">
                  Architectural Stack:
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {activeStudy.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 text-[10.5px] font-semibold border border-slate-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Actions: Visit Live Site & Build Similar CTA */}
            <div className="pt-3 border-t border-slate-100 space-y-2">
              <Link
                href="/get-a-quote"
                className="btn-luxury-gold btn-shimmer w-full py-3 px-4 rounded-xl text-xs font-black uppercase tracking-wider flex items-center justify-center gap-2 shadow-xs cursor-pointer text-center"
              >
                <span>Engineer Similar Website</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>

              {activeStudy.liveUrl && (
                <a
                  href={activeStudy.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2 px-3 rounded-xl text-[11px] font-bold text-slate-600 hover:text-[#060B22] hover:bg-slate-50 flex items-center justify-center gap-1.5 transition-colors border border-transparent hover:border-slate-200"
                >
                  <span>Visit Verified Live Website</span>
                  <ExternalLink className="w-3 h-3 text-[#B87A00]" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

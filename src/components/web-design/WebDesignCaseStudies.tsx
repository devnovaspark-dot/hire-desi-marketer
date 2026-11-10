"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ExternalLink,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Lock,
  Activity,
  Globe,
  Layers,
  Zap,
} from "lucide-react";
import { WEB_CASE_STUDIES, WebCaseStudy } from "@/data/web-design-services";
import { cn } from "@/lib/utils";

export function WebDesignCaseStudies() {
  const [activeStudyId, setActiveStudyId] = useState<string>("saas-reference");
  const [mousePos, setMousePos] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const stageRef = useRef<HTMLDivElement>(null);

  const activeStudy =
    WEB_CASE_STUDIES.find((cs) => cs.id === activeStudyId) ||
    WEB_CASE_STUDIES[0];

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!stageRef.current) return;
    const rect = stageRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  return (
    <div className="space-y-6 sm:space-y-8 max-w-6xl mx-auto select-none">
      {/* ==================================================================== */}
      {/* 1. MINIMALIST CENTERED BENCHMARK SELECTOR                            */}
      {/* ==================================================================== */}
      <div className="flex items-center justify-center">
        <div className="flex items-center gap-1.5 p-1.5 bg-white rounded-2xl border border-[#E2DBD0] shadow-sm max-w-full overflow-x-auto no-scrollbar">
          {WEB_CASE_STUDIES.map((study) => {
            const isSelected = study.id === activeStudy.id;

            return (
              <button
                key={study.id}
                type="button"
                onClick={() => setActiveStudyId(study.id)}
                className={cn(
                  "px-3.5 sm:px-5 py-2 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer whitespace-nowrap flex items-center gap-2",
                  isSelected
                    ? "bg-[#060B22] text-[#FFB020] shadow-md scale-102"
                    : "text-slate-600 hover:text-[#060B22] hover:bg-slate-100"
                )}
              >
                <span>{study.clientName}</span>
                <span
                  className={cn(
                    "text-[10px] font-mono px-2 py-0.5 rounded-full border hidden md:inline-block",
                    isSelected
                      ? "bg-white/10 text-slate-300 border-white/15"
                      : "bg-[#FAF8F5] text-slate-500 border-[#E2DBD0]"
                  )}
                >
                  {study.categoryLabel}
                </span>
                {isSelected && (
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* ==================================================================== */}
      {/* 2. HEROIC EXPANSIVE BROWSER SHOWCASE (75% VISUAL CRAFT)              */}
      {/* ==================================================================== */}
      <div
        ref={stageRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="w-full relative transition-transform duration-300 ease-out"
        style={{
          perspective: "1400px",
        }}
      >
        <div
          className="rounded-3xl bg-[#060B22] border border-[#060B22]/20 shadow-[0_25px_60px_-15px_rgba(6,11,34,0.3)] overflow-hidden transition-transform duration-500 ease-out"
          style={{
            transform: `rotateY(${mousePos.x * 4}deg) rotateX(${-mousePos.y * 4}deg)`,
            transformStyle: "preserve-3d",
          }}
        >
          {/* Sleek macOS Browser Chrome */}
          <div className="h-10 bg-[#060B22] px-4 sm:px-5 flex items-center justify-between border-b border-white/10">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
              <span className="text-[11px] font-mono text-slate-400 ml-2 hidden sm:inline">
                {activeStudy.categoryLabel}
              </span>
            </div>

            {/* Centered Minimalist URL Pill */}
            <div className="flex items-center gap-1.5 px-3.5 py-1 rounded-md bg-white/10 border border-white/15 text-[11px] text-slate-200 font-mono">
              <Lock className="w-3 h-3 text-emerald-400 shrink-0" />
              <span>{activeStudy.liveUrl?.replace("https://www.", "") || "live.hdm.preview"}</span>
            </div>

            <div className="flex items-center gap-1.5 text-emerald-400 font-mono text-[10.5px] font-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="hidden sm:inline">VERIFIED BENCHMARK</span>
            </div>
          </div>

          {/* Pristine High-Resolution Website Preview (STRICT ZERO TEXT OVERLAYS) */}
          <div className="relative aspect-[16/10] sm:aspect-[16/9.5] w-full bg-slate-950 overflow-hidden">
            <Image
              src={activeStudy.image}
              alt={activeStudy.imageAlt}
              fill
              className="object-cover object-top transition-transform duration-700 ease-out hover:scale-101"
              sizes="(max-width: 1200px) 100vw, 1150px"
              priority
            />
          </div>
        </div>
      </div>

      {/* ==================================================================== */}
      {/* 3. CLEAN EDITORIAL SPECIFICATIONS BAR (NO CLUMSY REPETITIVE BOXES)  */}
      {/* ==================================================================== */}
      <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#E2DBD0] shadow-md">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          {/* Col 1: Platform Overview & Value (5 cols) */}
          <div className="lg:col-span-5 space-y-2 text-left">
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-mono font-black uppercase tracking-wider text-[#B87A00] bg-[#FFB020]/15 px-2.5 py-0.5 rounded-full border border-[#FFB020]/30">
                {activeStudy.categoryLabel}
              </span>
              <span className="text-xs font-mono font-bold text-slate-500">
                {activeStudy.industry}
              </span>
            </div>

            <h3 className="font-display font-black text-xl sm:text-2xl text-[#0B1B3A] tracking-tight">
              {activeStudy.clientName} · {activeStudy.projectType}
            </h3>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
              {activeStudy.solution}
            </p>
          </div>

          {/* Col 2: Architectural Metrics & Tech Tags (4 cols) */}
          <div className="lg:col-span-4 space-y-3 text-left border-y lg:border-y-0 lg:border-x border-slate-100 py-4 lg:py-0 lg:px-6">
            <div className="text-[10.5px] font-mono font-bold uppercase tracking-wider text-slate-500">
              Verified Production Standards:
            </div>

            <div className="grid grid-cols-3 gap-2 text-center">
              {activeStudy.metrics.map((m, i) => (
                <div key={i} className="p-2.5 rounded-xl bg-[#FAF8F5] border border-[#E2DBD0]/70 space-y-0.5">
                  <div className="font-display font-black text-xs sm:text-sm text-[#0B1B3A]">
                    {m.value}
                  </div>
                  <div className="text-[9px] font-mono text-slate-500 uppercase tracking-wider truncate">
                    {m.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-1.5 pt-1">
              {activeStudy.technologies.slice(0, 4).map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 text-[10px] font-semibold"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Col 3: Direct Conversion Actions (3 cols) */}
          <div className="lg:col-span-3 space-y-2.5 flex flex-col justify-center">
            <Link
              href="/get-a-quote"
              className="btn-luxury-gold btn-shimmer w-full py-3.5 px-4 rounded-xl text-xs font-black uppercase tracking-wider flex items-center justify-center gap-2 shadow-sm cursor-pointer text-center group"
            >
              <span>Engineer Similar Site</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>

            {activeStudy.liveUrl && (
              <a
                href={activeStudy.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-3 rounded-xl text-xs font-bold text-slate-600 hover:text-[#060B22] hover:bg-[#FAF8F5] flex items-center justify-center gap-1.5 transition-colors border border-[#E2DBD0]"
              >
                <span>Visit Live Platform</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#B87A00]" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

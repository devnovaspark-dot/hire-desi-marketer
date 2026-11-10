"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Lock,
  Zap,
  Globe,
  ChevronRight,
  ExternalLink,
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
    <div className="w-full max-w-7xl mx-auto select-none">
      {/* ==================================================================== */}
      {/* BALANCED MASTER-DETAIL DESIGN CRAFT STUDIO                           */}
      {/* Proportional, compact, fits in viewport without giant overwhelming cards */}
      {/* ==================================================================== */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
        {/* ================================================================ */}
        {/* LEFT COLUMN (5 cols): Compact, Sleek Benchmark Selector Cards    */}
        {/* ================================================================ */}
        <div className="lg:col-span-5 space-y-3">
          <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-500 px-1 flex items-center justify-between">
            <span>Select Industry Benchmark:</span>
            <span className="text-[#B87A00] font-black">4 References</span>
          </div>

          {/* 4 Clean, Uniform Benchmark Selector Cards */}
          <div className="space-y-2">
            {WEB_CASE_STUDIES.map((study, idx) => {
              const isSelected = study.id === activeStudy.id;
              const formattedNumber = String(idx + 1).padStart(2, "0");

              return (
                <button
                  key={study.id}
                  type="button"
                  onClick={() => setActiveStudyId(study.id)}
                  className={cn(
                    "w-full p-3 sm:p-3.5 rounded-2xl border transition-all duration-200 cursor-pointer text-left relative overflow-hidden group flex items-center justify-between gap-3",
                    isSelected
                      ? "bg-[#060B22] text-white border-[#FFB020] shadow-md ring-1 ring-[#FFB020]/30 scale-[1.01]"
                      : "bg-white text-slate-700 border-[#E2DBD0] hover:border-slate-400 hover:bg-[#FAF8F5]"
                  )}
                >
                  {/* Left Active Accent Pill */}
                  {isSelected && (
                    <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#FFB020]" />
                  )}

                  <div className="flex items-center gap-3 min-w-0">
                    <span
                      className={cn(
                        "w-7 h-7 sm:w-8 sm:h-8 rounded-xl font-mono text-xs font-black flex items-center justify-center shrink-0 transition-colors",
                        isSelected
                          ? "bg-[#FFB020] text-[#060B22]"
                          : "bg-[#FAF8F5] text-slate-500 border border-[#E2DBD0] group-hover:text-[#0B1B3A]"
                      )}
                    >
                      {formattedNumber}
                    </span>

                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <h4
                          className={cn(
                            "font-display font-black text-sm tracking-tight truncate transition-colors",
                            isSelected
                              ? "text-white"
                              : "text-[#0B1B3A] group-hover:text-[#B87A00]"
                          )}
                        >
                          {study.clientName}
                        </h4>
                        {isSelected && (
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                        )}
                      </div>
                      <div
                        className={cn(
                          "text-[11px] truncate font-medium transition-colors",
                          isSelected ? "text-slate-300" : "text-slate-500"
                        )}
                      >
                        {study.categoryLabel}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <span
                      className={cn(
                        "text-[10px] font-mono font-bold px-2 py-0.5 rounded-full border hidden sm:inline-block",
                        isSelected
                          ? "bg-[#FFB020]/20 text-[#FFB020] border-[#FFB020]/30"
                          : "bg-[#FAF8F5] text-slate-500 border-[#E2DBD0]"
                      )}
                    >
                      {study.metrics[0]?.value || "Verified"}
                    </span>

                    <ChevronRight
                      className={cn(
                        "w-4 h-4 transition-transform",
                        isSelected
                          ? "text-[#FFB020] translate-x-0.5"
                          : "text-slate-400 group-hover:translate-x-0.5"
                      )}
                    />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Benchmark Specification Card */}
          <div className="p-4 rounded-2xl bg-white border border-[#E2DBD0] shadow-xs space-y-3">
            <div className="flex items-center justify-between text-xs border-b border-slate-100 pb-2">
              <span className="font-mono font-bold text-[#B87A00] uppercase text-[10.5px]">
                {activeStudy.categoryLabel}
              </span>
              <span className="text-slate-500 font-mono text-[10px]">
                {activeStudy.industry}
              </span>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed font-normal">
              {activeStudy.solution}
            </p>

            {/* 3 Compact Verified Metrics */}
            <div className="grid grid-cols-3 gap-1.5 pt-1">
              {activeStudy.metrics.map((m, i) => (
                <div
                  key={i}
                  className="p-2 rounded-xl bg-[#FAF8F5] border border-[#E2DBD0]/70 text-center space-y-0.5"
                >
                  <div className="font-display font-black text-xs text-[#0B1B3A] truncate">
                    {m.value}
                  </div>
                  <div className="text-[9px] font-mono text-slate-500 uppercase tracking-wider truncate">
                    {m.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Direct Consultation Action */}
            <Link
              href="/get-a-quote"
              className="btn-luxury-gold btn-shimmer w-full py-2.5 px-4 rounded-xl text-xs font-black uppercase tracking-wider flex items-center justify-center gap-2 shadow-xs cursor-pointer text-center group"
            >
              <span>Schedule Scoping Session</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* ================================================================ */}
        {/* RIGHT COLUMN (7 cols): Proportional 3D macOS Browser Showcase    */}
        {/* Perfectly sized (~360px height) — NOT a giant overwhelming card! */}
        {/* ================================================================ */}
        <div
          ref={stageRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="lg:col-span-7 relative"
          style={{
            perspective: "1200px",
          }}
        >
          {/* 3D Tilted Perspective Browser Showcase */}
          <div
            className="rounded-2xl bg-[#060B22] border border-[#060B22]/20 shadow-[0_20px_50px_-15px_rgba(6,11,34,0.3)] overflow-hidden transition-transform duration-500 ease-out"
            style={{
              transform: `rotateY(${mousePos.x * 5}deg) rotateX(${-mousePos.y * 5}deg)`,
              transformStyle: "preserve-3d",
            }}
          >
            {/* Sleek Minimalist macOS Chrome Bar */}
            <div className="h-9 bg-[#060B22] px-3.5 sm:px-4 flex items-center justify-between border-b border-white/10">
              <div className="flex items-center gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
                <span className="text-[10.5px] font-mono text-slate-400 ml-2 hidden sm:inline">
                  {activeStudy.clientName}
                </span>
              </div>

              {/* Centered Minimalist URL Pill */}
              <div className="flex items-center gap-1.5 px-3 py-0.5 rounded-md bg-white/10 border border-white/15 text-[10.5px] text-slate-200 font-mono">
                <Lock className="w-3 h-3 text-emerald-400 shrink-0" />
                <span>{activeStudy.liveUrl?.replace("https://www.", "") || "live.hdm.preview"}</span>
              </div>

              <div className="flex items-center gap-1.5 text-emerald-400 font-mono text-[10px] font-bold">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="hidden sm:inline">VERIFIED</span>
              </div>
            </div>

            {/* Proportional High-Resolution Website Preview (STRICT ZERO TEXT OVERLAYS) */}
            <div className="relative aspect-[16/10.5] w-full bg-slate-950 overflow-hidden">
              <Image
                src={activeStudy.image}
                alt={activeStudy.imageAlt}
                fill
                className="object-cover object-top transition-transform duration-700 ease-out hover:scale-102"
                sizes="(max-width: 1024px) 100vw, 700px"
                priority
              />
            </div>
          </div>

          {/* Floating Subtle Satellite Chips */}
          <div
            className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 p-2.5 rounded-xl bg-white/95 backdrop-blur-md border border-[#E2DBD0] shadow-lg flex items-center gap-2 text-xs z-20"
            style={{
              transform: "translateZ(20px)",
            }}
          >
            <div className="w-6 h-6 rounded-lg bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center shrink-0">
              <Zap className="w-3.5 h-3.5 text-emerald-600" />
            </div>
            <div>
              <div className="font-display font-black text-[11px] text-[#060B22]">
                Sub-Second Initial Paint
              </div>
              <div className="text-[9.5px] text-slate-500 font-mono">
                Core Web Vitals Verified
              </div>
            </div>
          </div>

          <div
            className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 p-2.5 rounded-xl bg-[#060B22]/95 backdrop-blur-md border border-white/15 shadow-lg flex items-center gap-2 text-xs text-white z-20"
            style={{
              transform: "translateZ(20px)",
            }}
          >
            <div className="w-6 h-6 rounded-lg bg-[#FFB020]/20 border border-[#FFB020]/40 flex items-center justify-center shrink-0">
              <Sparkles className="w-3.5 h-3.5 text-[#FFB020]" />
            </div>
            <div>
              <div className="font-display font-black text-[11px] text-white">
                Fluid Micro-UI Craft
              </div>
              <div className="text-[9.5px] text-[#FFB020] font-mono">
                60 FPS Edge Delivery
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

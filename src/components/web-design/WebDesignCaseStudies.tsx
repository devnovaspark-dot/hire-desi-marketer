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
  Shield,
  Activity,
  Layers,
} from "lucide-react";
import { WEB_CASE_STUDIES, WebCaseStudy } from "@/data/web-design-services";
import { cn } from "@/lib/utils";
import StarBorder from "@/components/ui/StarBorder";

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
      {/* COMPACT & ELEVATED MASTER-DETAIL DESIGN CRAFT STUDIO                 */}
      {/* Balanced 12-column studio, contained to ~460px height                */}
      {/* ==================================================================== */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-7 items-start">
        {/* ================================================================ */}
        {/* LEFT COLUMN (5 cols): 4 Refined Benchmark Cards & Active Console */}
        {/* ================================================================ */}
        <div className="lg:col-span-5 space-y-2.5 text-left">
          <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-500 px-1 flex items-center justify-between">
            <span>Verified Digital Benchmarks:</span>
            <span className="text-[#B87A00] font-black">4 Sectors</span>
          </div>

          {/* 4 Sleek, Uniform Benchmark Cards */}
          <div className="space-y-1.5">
            {WEB_CASE_STUDIES.map((study, idx) => {
              const isSelected = study.id === activeStudy.id;
              const formattedNumber = String(idx + 1).padStart(2, "0");

              return (
                <button
                  key={study.id}
                  type="button"
                  onClick={() => setActiveStudyId(study.id)}
                  className={cn(
                    "w-full px-3.5 py-2.5 sm:py-3 rounded-2xl border transition-all duration-300 cursor-pointer text-left relative overflow-hidden group flex items-center justify-between gap-3",
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
                        "w-7 h-7 rounded-xl font-mono text-xs font-black flex items-center justify-center shrink-0 transition-colors",
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
                          "text-[10.5px] truncate font-medium transition-colors",
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
                        "text-[9.5px] font-mono font-bold px-2 py-0.5 rounded-full border hidden sm:inline-block",
                        isSelected
                          ? "bg-[#FFB020]/20 text-[#FFB020] border-[#FFB020]/30"
                          : "bg-[#FAF8F5] text-slate-500 border-[#E2DBD0]"
                      )}
                    >
                      {study.metrics[0]?.value || "Standard"}
                    </span>

                    <ChevronRight
                      className={cn(
                        "w-3.5 h-3.5 transition-transform",
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

          {/* Active Benchmark Luxury Console */}
          <div className="p-4 rounded-2xl bg-gradient-to-br from-[#060B22] to-[#0A1434] text-white border border-white/10 shadow-lg space-y-3 relative overflow-hidden">
            <div className="flex items-center justify-between text-xs border-b border-white/10 pb-2">
              <span className="font-mono font-bold text-[#FFB020] uppercase text-[10px] flex items-center gap-1.5">
                <Sparkles className="w-3 h-3 text-[#FFB020]" />
                <span>{activeStudy.categoryLabel}</span>
              </span>
              <span className="text-slate-400 font-mono text-[9.5px]">
                {activeStudy.industry}
              </span>
            </div>

            <p className="text-[11.5px] text-slate-300 leading-relaxed font-normal line-clamp-2">
              {activeStudy.solution}
            </p>

            {/* 3 Compact Verified Metrics */}
            <div className="grid grid-cols-3 gap-1.5 pt-0.5">
              {activeStudy.metrics.map((m, i) => (
                <div
                  key={i}
                  className="p-2 rounded-xl bg-white/5 border border-white/10 text-center space-y-0.5"
                >
                  <div className="font-display font-black text-xs text-white truncate">
                    {m.value}
                  </div>
                  <div className="text-[8.5px] font-mono text-slate-400 uppercase tracking-wider truncate">
                    {m.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Direct Consultation Action */}
            <StarBorder
              as={Link}
              href="/get-a-quote"
              className="w-full py-2.5 px-4 rounded-xl text-xs font-black uppercase tracking-wider flex items-center justify-center gap-2 shadow-xs cursor-pointer text-center group"
              radius={12}
              color="#FFF8E7"
              trailColor="#FFB020"
              backgroundColor="#FFB020"
              textColor="#060B22"
              borderColor="rgba(255, 176, 32, 0.6)"
              sparkle={true}
              glow={0.8}
            >
              <span>Schedule Scoping Session</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </StarBorder>
          </div>
        </div>

        {/* ================================================================ */}
        {/* RIGHT COLUMN (7 cols): Sleek 3D macOS Studio Browser Showcase    */}
        {/* Compact, authentic, zero clumsy floating text overlays           */}
        {/* ================================================================ */}
        <div
          ref={stageRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="lg:col-span-7 relative"
          style={{
            perspective: "1400px",
          }}
        >
          {/* 3D Tilted Perspective Browser Showcase */}
          <div
            className="rounded-2xl bg-[#060B22] border border-[#060B22]/30 shadow-[0_20px_50px_-15px_rgba(6,11,34,0.35)] overflow-hidden transition-transform duration-500 ease-out"
            style={{
              transform: `rotateY(${mousePos.x * 4}deg) rotateX(${-mousePos.y * 4}deg)`,
              transformStyle: "preserve-3d",
            }}
          >
            {/* Sleek Minimalist macOS Chrome Bar */}
            <div className="h-9 bg-[#060B22] px-3.5 sm:px-4 flex items-center justify-between border-b border-white/10">
              <div className="flex items-center gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
                <span className="text-[10px] font-mono text-slate-400 ml-2 hidden sm:inline">
                  {activeStudy.clientName}
                </span>
              </div>

              {/* Centered Minimalist URL Pill */}
              <div className="flex items-center gap-1.5 px-3 py-0.5 rounded-md bg-white/10 border border-white/15 text-[10px] text-slate-200 font-mono">
                <Lock className="w-3 h-3 text-emerald-400 shrink-0" />
                <span>{activeStudy.liveUrl?.replace("https://www.", "") || "live.hdm.preview"}</span>
              </div>

              <div className="flex items-center gap-1.5 text-emerald-400 font-mono text-[9.5px] font-bold">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="hidden sm:inline">VERIFIED BENCHMARK</span>
              </div>
            </div>

            {/* High-Resolution Website Preview (STRICT ZERO OVERLAYS) */}
            <div className="relative aspect-[16/10.5] w-full bg-slate-950 overflow-hidden">
              <Image
                src={activeStudy.image}
                alt={activeStudy.imageAlt}
                fill
                className="object-cover object-top transition-transform duration-700 ease-out hover:scale-101"
                sizes="(max-width: 1024px) 100vw, 700px"
                priority
              />
            </div>
          </div>

          {/* Sleek Architectural Telemetry Strip (Integrated below browser) */}
          <div className="mt-2.5 p-2.5 px-4 rounded-xl bg-white border border-[#E2DBD0] shadow-2xs flex flex-wrap items-center justify-between gap-2 text-xs">
            <div className="flex items-center gap-2 font-mono text-[10.5px] text-slate-600">
              <span className="font-bold text-[#0B1B3A]">{activeStudy.clientName}</span>
              <span>·</span>
              <span className="text-emerald-700 font-semibold flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Sub-Second Edge Verified
              </span>
            </div>

            <div className="flex items-center gap-1.5">
              {activeStudy.technologies.slice(0, 3).map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-0.5 rounded bg-[#FAF8F5] border border-[#E2DBD0] text-[9.5px] font-semibold text-slate-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

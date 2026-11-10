"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Users,
  Zap,
  Lock,
  Clock,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Award,
  Check,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface ArchitecturalPillar {
  id: string;
  number: string;
  roman: string;
  shortLabel: string;
  title: string;
  subtitle: string;
  description: string;
  metric: string;
  badge: string;
  icon: React.ReactNode;
  specs: {
    label: string;
    value: string;
  }[];
}

const PILLARS: ArchitecturalPillar[] = [
  {
    id: "senior-architects",
    number: "01",
    roman: "I",
    shortLabel: "Senior Squad",
    title: "Direct Senior Architect Access",
    subtitle: "Zero Junior Handoffs",
    description:
      "Direct collaboration with principal full-stack engineers and senior UI/UX directors. No junior intern middlemen or disconnected account reps.",
    metric: "100% Senior Squad",
    badge: "Principal Staff",
    icon: <Users className="w-5 h-5 text-[#FFB020]" />,
    specs: [
      { label: "Squad Level", value: "Principal & Staff Only" },
      { label: "Middlemen", value: "Zero Account Managers" },
      { label: "Direct SLA", value: "< 15 Mins Client Slack" },
    ],
  },
  {
    id: "subsecond-speed",
    number: "02",
    roman: "II",
    shortLabel: "Sub-Second Speed",
    title: "Sub-Second Speed & Vitals",
    subtitle: "< 0.8s LCP Benchmark",
    description:
      "Modern full-stack architecture (Next.js 16, React 19, Tailwind, Headless CMS) engineered for sub-second initial paint and zero bounce rate.",
    metric: "< 0.8s Initial Paint",
    badge: "100/100 Vitals",
    icon: <Zap className="w-5 h-5 text-[#FFB020]" />,
    specs: [
      { label: "LCP Benchmark", value: "< 0.58s Initial Paint" },
      { label: "PageSpeed Score", value: "100 / 100 Grade A+" },
      { label: "Layout Shift", value: "0.00 CLS Flawless" },
    ],
  },
  {
    id: "code-ownership",
    number: "03",
    roman: "III",
    shortLabel: "100% IP & Repo",
    title: "100% Code & IP Ownership",
    subtitle: "Day-One Repository Access",
    description:
      "You own 100% of all source code, Figma design systems, and digital assets from Day 1. Committed directly to your private GitHub or GitLab.",
    metric: "100% Client Repo",
    badge: "Zero Lock-In",
    icon: <Lock className="w-5 h-5 text-[#FFB020]" />,
    specs: [
      { label: "Repository", value: "Private Client GitHub" },
      { label: "Legal Protection", value: "Bilateral NDA Deed" },
      { label: "Platform Lock-In", value: "0% Clean Open Code" },
    ],
  },
  {
    id: "agile-delivery",
    number: "04",
    roman: "IV",
    shortLabel: "Agile Telemetry",
    title: "Transparent Agile Delivery",
    subtitle: "Daily Demos & Staging",
    description:
      "Zero black-box periods. Regular recorded Loom walkthroughs, live passworded staging builds, and bi-weekly milestone sign-offs guarantee delivery.",
    metric: "Daily Loom Demos",
    badge: "Zero Dark Periods",
    icon: <Clock className="w-5 h-5 text-[#FFB020]" />,
    specs: [
      { label: "Demo Rhythm", value: "Daily Loom Walkthroughs" },
      { label: "Staging Access", value: "Live Passworded URL" },
      { label: "Milestone SLA", value: "100% On-Time Sprints" },
    ],
  },
];

export function WebDesignWhyChooseUs() {
  const [activeIdx, setActiveIdx] = useState<number>(0);
  const activePillar = PILLARS[activeIdx];

  return (
    <div className="w-full text-white select-none">
      {/* ==================================================================== */}
      {/* 1. COMPACT CENTERED SECTION HEADER (FITS IN SINGLE WINDOW)           */}
      {/* ==================================================================== */}
      <div className="text-center max-w-3xl mx-auto space-y-2 pb-4">
        <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-white/10 text-[#FFB020] text-[11px] font-black uppercase tracking-wider border border-[#FFB020]/30 shadow-xs">
          <Sparkles className="w-3 h-3 text-[#FFB020]" />
          <span>The 4 Architectural Pillars of Hire Desi Marketer</span>
        </div>

        <h3 className="font-display font-black text-xl sm:text-2xl lg:text-3xl text-white tracking-tight leading-tight">
          Engineered Foundations That Guarantee Commercial Success.
        </h3>

        <p className="text-xs sm:text-sm text-slate-300 font-normal max-w-xl mx-auto leading-relaxed">
          Four unshakeable engineering columns supporting your conversion rate, intellectual property, and launch velocity.
        </p>
      </div>

      {/* ==================================================================== */}
      {/* 2. REAL ARCHITECTURAL COLONNADE — 4 REAL PILLARS STANDING SIDE-BY-SIDE */}
      {/* Classical entablature, sculpted capitals, fluted shafts, plinths     */}
      {/* ==================================================================== */}
      <div className="relative pt-2 pb-3">
        {/* Continuous Upper Architectural Cornice Beam across all 4 pillars */}
        <div className="hidden sm:block absolute top-2 inset-x-4 h-2 bg-gradient-to-r from-transparent via-[#FFB020]/30 to-transparent border-t border-b border-white/15 rounded-full pointer-events-none" />

        {/* 4 Architectural Columns Colonnade */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-5 items-end">
          {PILLARS.map((pillar, idx) => {
            const isSelected = idx === activeIdx;

            return (
              <div
                key={pillar.id}
                role="button"
                tabIndex={0}
                onClick={() => setActiveIdx(idx)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setActiveIdx(idx);
                  }
                }}
                className={cn(
                  "group relative cursor-pointer outline-none transition-all duration-300 flex flex-col items-center",
                  isSelected ? "-translate-y-2" : "hover:-translate-y-1 opacity-85 hover:opacity-100"
                )}
              >
                {/* Active Column Aura Halo */}
                {isSelected && (
                  <div className="absolute -inset-2 bg-gradient-to-b from-[#FFB020]/25 via-[#FFB020]/10 to-transparent rounded-3xl blur-lg pointer-events-none -z-10" />
                )}

                {/* ======================================================== */}
                {/* A. COLUMN CAPITAL (THE TOP CROWN OF THE PILLAR)          */}
                {/* ======================================================== */}
                <div
                  className={cn(
                    "w-full transition-all duration-300 relative rounded-t-2xl px-3 pt-3 pb-2 flex flex-col items-center border",
                    isSelected
                      ? "bg-gradient-to-b from-[#1C284E] to-[#121B38] border-[#FFB020] shadow-[0_-5px_15px_rgba(255,176,32,0.25)]"
                      : "bg-gradient-to-b from-[#101730] to-[#0A1024] border-white/15 group-hover:border-white/30"
                  )}
                >
                  {/* Stepped Abacus Molding Top Line */}
                  <div
                    className={cn(
                      "w-full h-1 rounded-full mb-2 transition-colors",
                      isSelected ? "bg-[#FFB020]" : "bg-white/20 group-hover:bg-white/40"
                    )}
                  />

                  {/* Golden Capital Medallion / Icon Badge */}
                  <div className="relative">
                    <div
                      className={cn(
                        "w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 shadow-md border",
                        isSelected
                          ? "bg-[#FFB020] text-[#060B22] border-[#FFB020] scale-105"
                          : "bg-white/5 text-[#FFB020] border-white/10 group-hover:bg-white/10"
                      )}
                    >
                      {React.cloneElement(pillar.icon as React.ReactElement<{ className?: string }>, {
                        className: cn(
                          "w-5 h-5 transition-colors",
                          isSelected ? "text-[#060B22]" : "text-[#FFB020]"
                        ),
                      })}
                    </div>

                    {/* Capital Status Beacon */}
                    <span
                      className={cn(
                        "absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full border border-[#060B22]",
                        isSelected ? "bg-emerald-400 animate-pulse" : "bg-slate-500"
                      )}
                    />
                  </div>

                  {/* Roman Numeral Capital Marker */}
                  <div className="mt-1.5 flex items-center gap-1 font-mono text-[10px] font-black uppercase tracking-widest text-[#FFB020]">
                    <span>PILLAR</span>
                    <span>·</span>
                    <span>{pillar.roman}</span>
                  </div>
                </div>

                {/* ======================================================== */}
                {/* B. THE FLUTED COLUMN SHAFT (REAL ARCHITECTURAL BODY)    */}
                {/* Cylindrical gradient + 5 vertical fluted carved grooves */}
                {/* ======================================================== */}
                <div
                  className={cn(
                    "w-full h-64 sm:h-72 relative transition-all duration-300 border-x flex flex-col justify-between py-4 px-3 overflow-hidden",
                    isSelected
                      ? "bg-gradient-to-r from-[#0C1530] via-[#1A264D] via-[#243566] via-[#1A264D] to-[#0A122B] border-[#FFB020]/60 shadow-lg"
                      : "bg-gradient-to-r from-[#080E24] via-[#121A36] via-[#172244] via-[#121A36] to-[#060B1E] border-white/10 group-hover:border-white/20"
                  )}
                >
                  {/* --- 5 REAL ARCHITECTURAL FLUTES (VERTICAL CARVED GROOVES) --- */}
                  <div className="absolute inset-y-0 inset-x-2 flex justify-between pointer-events-none -z-0">
                    {[0, 1, 2, 3, 4].map((fluteIdx) => {
                      const isCenterFlute = fluteIdx === 2;
                      return (
                        <div
                          key={fluteIdx}
                          className={cn(
                            "w-2.5 sm:w-3.5 h-full relative transition-colors duration-300 shadow-[inset_0_2px_6px_rgba(0,0,0,0.6)] border-l border-black/60 border-r border-white/10",
                            isSelected
                              ? isCenterFlute
                                ? "bg-gradient-to-b from-[#FFB020]/20 via-[#FFB020]/40 to-[#FFB020]/15"
                                : "bg-black/40"
                              : "bg-black/30 group-hover:bg-black/40"
                          )}
                        >
                          {/* Center flute active energy beam */}
                          {isSelected && isCenterFlute && (
                            <div className="absolute inset-0 bg-[#FFB020]/30 animate-pulse blur-[1px]" />
                          )}
                        </div>
                      );
                    })}
                  </div>

                  {/* Specular Column Cylinder Center Lighting Highlight */}
                  <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-8 bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none" />

                  {/* Pillar Inscribed Content Layer */}
                  <div className="relative z-10 text-center space-y-1">
                    <span
                      className={cn(
                        "inline-block px-2 py-0.5 rounded-full text-[9px] font-mono font-bold uppercase tracking-wider border transition-colors",
                        isSelected
                          ? "bg-[#FFB020]/25 text-[#FFB020] border-[#FFB020]/40"
                          : "bg-white/5 text-slate-400 border-white/10"
                      )}
                    >
                      {pillar.badge}
                    </span>

                    <h4 className="font-display font-black text-xs sm:text-sm text-white leading-tight px-1">
                      {pillar.title}
                    </h4>
                  </div>

                  {/* Central Carved Pillar Medallion */}
                  <div className="relative z-10 my-auto py-2 text-center">
                    <div
                      className={cn(
                        "inline-block p-2 rounded-xl backdrop-blur-md border transition-all duration-300 max-w-full",
                        isSelected
                          ? "bg-[#060B22]/90 border-[#FFB020]/60 shadow-md"
                          : "bg-black/40 border-white/10"
                      )}
                    >
                      <div className="font-mono text-[9px] uppercase tracking-wider text-slate-400">
                        Pillar Metric:
                      </div>
                      <div
                        className={cn(
                          "font-display font-black text-[11px] sm:text-xs truncate transition-colors",
                          isSelected ? "text-[#FFB020]" : "text-white"
                        )}
                      >
                        {pillar.metric}
                      </div>
                    </div>
                  </div>

                  {/* Pillar Subtitle & Trigger */}
                  <div className="relative z-10 text-center space-y-1">
                    <p className="text-[10px] text-slate-400 font-medium line-clamp-1">
                      {pillar.subtitle}
                    </p>
                    <div
                      className={cn(
                        "text-[9.5px] font-mono font-bold flex items-center justify-center gap-1 transition-colors",
                        isSelected ? "text-[#FFB020]" : "text-slate-500 group-hover:text-slate-300"
                      )}
                    >
                      <span>{isSelected ? "Active Pillar ✓" : "Inspect Pillar →"}</span>
                    </div>
                  </div>
                </div>

                {/* ======================================================== */}
                {/* C. COLUMN BASE & PEDESTAL (THE PLINTH FOUNDATION)        */}
                {/* Stepped classical pedestal with bronze Roman numeral     */}
                {/* ======================================================== */}
                <div
                  className={cn(
                    "w-full transition-all duration-300 relative rounded-b-2xl p-2.5 flex flex-col items-center border",
                    isSelected
                      ? "bg-gradient-to-b from-[#121B38] to-[#0A1024] border-[#FFB020] shadow-[0_8px_20px_rgba(255,176,32,0.2)]"
                      : "bg-gradient-to-b from-[#0A1024] to-[#060A18] border-white/15 group-hover:border-white/30"
                  )}
                >
                  {/* Torus Molding Highlight Line */}
                  <div
                    className={cn(
                      "w-3/4 h-1 rounded-full mb-1.5 transition-colors",
                      isSelected ? "bg-[#FFB020]" : "bg-white/20"
                    )}
                  />

                  {/* Foundation Base Plaque */}
                  <div className="flex items-center justify-between w-full px-1 text-[10px] font-mono">
                    <span className="font-bold text-slate-400">FOUNDATION</span>
                    <span
                      className={cn(
                        "font-black px-1.5 py-0.2 rounded border transition-colors",
                        isSelected
                          ? "bg-[#FFB020] text-[#060B22] border-[#FFB020]"
                          : "bg-white/5 text-slate-300 border-white/10"
                      )}
                    >
                      {pillar.number}
                    </span>
                  </div>
                </div>

                {/* Floor Reflection Spotlight Pool beneath each column */}
                <div
                  className={cn(
                    "w-3/4 h-3 rounded-full blur-sm transition-all duration-300 mt-1 pointer-events-none",
                    isSelected
                      ? "bg-[#FFB020]/40 scale-x-110"
                      : "bg-black/60 group-hover:bg-white/10"
                  )}
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* ==================================================================== */}
      {/* 3. COMPACT ARCHITECTURAL TELEMETRY CONSOLE (FITS IN SINGLE WINDOW)   */}
      {/* 1-row sleek status strip with specs, active guarantee & Quote CTA   */}
      {/* ==================================================================== */}
      <div className="mt-3 p-3.5 sm:p-4 rounded-2xl bg-white/[0.04] border border-white/12 backdrop-blur-md shadow-xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 sm:gap-4 items-center">
          {/* Active Pillar Overview (4 cols) */}
          <div className="lg:col-span-4 text-left space-y-1 min-w-0">
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-mono font-black uppercase tracking-wider text-[#FFB020] bg-[#FFB020]/20 px-2.5 py-0.5 rounded-full border border-[#FFB020]/30">
                Pillar {activePillar.number} · {activePillar.badge}
              </span>
              <span className="text-[11px] font-mono font-bold text-emerald-400 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>Verified SLA</span>
              </span>
            </div>

            <div className="font-display font-black text-sm sm:text-base text-white tracking-tight truncate">
              {activePillar.title}
            </div>

            <p className="text-[11px] text-slate-300 leading-snug line-clamp-1 font-normal">
              {activePillar.description}
            </p>
          </div>

          {/* 3 Architectural Specifications (5 cols) */}
          <div className="lg:col-span-5 grid grid-cols-3 gap-1.5 sm:gap-2">
            {activePillar.specs.map((spec, i) => (
              <div
                key={i}
                className="p-2 sm:p-2.5 rounded-xl bg-white/5 border border-white/10 text-center space-y-0.5"
              >
                <div className="text-[9px] font-mono uppercase tracking-wider text-slate-400 truncate">
                  {spec.label}
                </div>
                <div className="font-bold text-[10.5px] sm:text-[11px] text-white truncate">
                  {spec.value}
                </div>
              </div>
            ))}
          </div>

          {/* Instant Scoping Action (3 cols) */}
          <div className="lg:col-span-3 flex items-center justify-end">
            <Link
              href="/get-a-quote"
              className="btn-luxury-gold btn-shimmer w-full py-2.5 px-4 rounded-xl text-xs font-black uppercase tracking-wider flex items-center justify-center gap-2 shadow-md cursor-pointer text-center group"
            >
              <span>Schedule Scoping</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

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
  ShieldCheck,
  Award,
} from "lucide-react";
import { cn } from "@/lib/utils";
import StarBorder from "@/components/ui/StarBorder";

// Classical Pythagorean Harmonic Chimes for the 4 Pillars
function playPillarChime(freq: number) {
  if (typeof window === "undefined") return;
  try {
    const AudioContextClass =
      window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!AudioContextClass) return;

    const ctx = new AudioContextClass();
    if (ctx.state === "suspended") {
      ctx.resume().catch(() => {});
    }

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = "sine";
    const now = ctx.currentTime;
    osc.frequency.setValueAtTime(freq, now);
    osc.frequency.exponentialRampToValueAtTime(freq * 1.5, now + 0.1);

    gain.gain.setValueAtTime(0.08, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.18);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + 0.18);
  } catch {
    // Graceful fallback
  }
}

/* ========================================================================== */
/* REAL CLASSICAL MARBLE ARCHITECTURAL PILLAR SVG (PROPORTIONAL DORIC COLUMN) */
/* Single-Window Viewport Calibrated: Capital + Shaft + Base + Ground Shadow  */
/* ========================================================================== */

function ClassicalMarblePillar({
  isActive,
  roman,
  number,
}: {
  isActive: boolean;
  roman: string;
  number: string;
}) {
  return (
    <div className="relative w-full max-w-[140px] sm:max-w-[165px] mx-auto flex flex-col items-center">
      {/* Divine Radiant Spotlight Beam from Above on Active Pillar */}
      {isActive && (
        <div
          className="absolute -top-12 inset-x-0 h-44 rounded-t-full pointer-events-none transition-opacity duration-500 animate-pulse"
          style={{
            background:
              "radial-gradient(ellipse at 50% 0%, rgba(255, 176, 32, 0.35) 0%, rgba(255, 176, 32, 0.08) 50%, transparent 75%)",
          }}
        />
      )}

      <svg
        viewBox="0 0 160 236"
        className={cn(
          "w-full h-auto transition-all duration-500 ease-out",
          isActive
            ? "-translate-y-3 filter drop-shadow-[0_16px_26px_rgba(255,176,32,0.38)]"
            : "hover:-translate-y-2 opacity-90 hover:opacity-100 filter drop-shadow-[0_8px_16px_rgba(6,11,34,0.08)]"
        )}
      >
        <defs>
          {/* Classical White Marble Cylindrical Lighting (Left-to-Right Depth) */}
          <linearGradient id={`marbleCylinder-${number}`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#DFD9D0" />
            <stop offset="18%" stopColor="#FAF7F2" />
            <stop offset="48%" stopColor="#FFFFFF" />
            <stop offset="76%" stopColor="#ECE5DB" />
            <stop offset="100%" stopColor="#C8C0B3" />
          </linearGradient>

          {/* Active Golden Illuminated Marble */}
          <linearGradient id={`goldMarble-${number}`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#E6D7B8" />
            <stop offset="22%" stopColor="#FFFDF7" />
            <stop offset="52%" stopColor="#FFF8E7" />
            <stop offset="80%" stopColor="#F5E4BE" />
            <stop offset="100%" stopColor="#D4BC8C" />
          </linearGradient>

          {/* Flute Groove Shadow */}
          <linearGradient id={`fluteShadow-${number}`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#B3AAA0" />
            <stop offset="50%" stopColor="#FFFFFF" />
            <stop offset="100%" stopColor="#C8C0B3" />
          </linearGradient>
        </defs>

        {/* --- FLOOR CONTACT DROP SHADOWS --- */}
        <ellipse cx="80" cy="228" rx="64" ry="7" fill="rgba(6,11,34,0.12)" />
        <ellipse cx="80" cy="226" rx="44" ry="4" fill="rgba(6,11,34,0.22)" />

        {/* --- 1. CAPITAL (TOP ABACUS PLATFORM & FLARED ECHINUS) --- */}
        {/* Top Abacus Slab */}
        <path
          d="M 14 10 L 146 10 L 142 16 L 18 16 Z"
          fill={isActive ? `url(#goldMarble-${number})` : `url(#marbleCylinder-${number})`}
          stroke={isActive ? "#FFB020" : "#C8C0B3"}
          strokeWidth="0.75"
        />
        <rect
          x="18"
          y="16"
          width="124"
          height="5.5"
          rx="1"
          fill={isActive ? "#F8ECCF" : "#EBE5DB"}
          stroke={isActive ? "#FFB020" : "#C8C0B3"}
          strokeWidth="0.75"
        />

        {/* Flared Curved Echinus (Bell Molding) */}
        <path
          d="M 20 21.5 Q 32 34 48 37.5 L 112 37.5 Q 128 34 140 21.5 Z"
          fill={isActive ? `url(#goldMarble-${number})` : `url(#marbleCylinder-${number})`}
          stroke={isActive ? "#FFB020" : "#C8C0B3"}
          strokeWidth="0.75"
        />

        {/* Necking Astragal Rings */}
        <rect
          x="46"
          y="37.5"
          width="68"
          height="3.5"
          rx="1.5"
          fill={isActive ? "#FFB020" : "#D9D2C7"}
          stroke={isActive ? "#B87A00" : "#B8B2A6"}
          strokeWidth="0.6"
        />
        <rect
          x="49"
          y="41"
          width="62"
          height="3"
          rx="1"
          fill={isActive ? "#F0E1BE" : "#E2DCD3"}
        />

        {/* --- 2. COLUMN SHAFT (FLUTED CYLINDRICAL STONE BODY) --- */}
        <path
          d="M 49 44 L 111 44 L 114 172 L 46 172 Z"
          fill={isActive ? `url(#goldMarble-${number})` : `url(#marbleCylinder-${number})`}
          stroke={isActive ? "#FFB020" : "#C8C0B3"}
          strokeWidth="0.75"
        />

        {/* 6 Carved Classical Marble Flutes with Specular Lighting */}
        {/* Flute 1 */}
        <path d="M 52 46 Q 54 52 54 58 L 52 165 Q 52 169 50 171" fill="none" stroke="#B8B2A6" strokeWidth="2.2" strokeLinecap="round" />
        <path d="M 53 46 Q 55 52 55 58 L 53 165 Q 53 169 51 171" fill="none" stroke="#FFFFFF" strokeWidth="0.9" strokeLinecap="round" />

        {/* Flute 2 */}
        <path d="M 62 45 Q 64 51 64 58 L 63 166 Q 63 170 61 172" fill="none" stroke="#B8B2A6" strokeWidth="2.6" strokeLinecap="round" />
        <path d="M 63.5 45 Q 65.5 51 65.5 58 L 64.5 166 Q 64.5 170 62.5 172" fill="none" stroke="#FFFFFF" strokeWidth="1" strokeLinecap="round" />

        {/* Flute 3 (Center-Left) */}
        <path d="M 73 44.5 Q 74.5 50.5 74.5 58 L 74 167 Q 74 171 72.5 173" fill="none" stroke={isActive ? "#D9A030" : "#B8B2A6"} strokeWidth="2.8" strokeLinecap="round" />
        <path d="M 74.5 44.5 Q 76 50.5 76 58 L 75.5 167 Q 75.5 171 74 173" fill="none" stroke="#FFFFFF" strokeWidth="1.2" strokeLinecap="round" />

        {/* Flute 4 (Center-Right) */}
        <path d="M 85 44.5 Q 86.5 50.5 86.5 58 L 86 167 Q 86 171 84.5 173" fill="none" stroke={isActive ? "#D9A030" : "#B8B2A6"} strokeWidth="2.8" strokeLinecap="round" />
        <path d="M 86.5 44.5 Q 88 50.5 88 58 L 87.5 167 Q 87.5 171 86 173" fill="none" stroke="#FFFFFF" strokeWidth="1.2" strokeLinecap="round" />

        {/* Flute 5 */}
        <path d="M 97 45 Q 98.5 51 98.5 58 L 98 166 Q 98 170 96.5 172" fill="none" stroke="#A8A095" strokeWidth="2.6" strokeLinecap="round" />
        <path d="M 98.5 45 Q 100 51 100 58 L 99.5 166 Q 99.5 170 98 172" fill="none" stroke="#FFFFFF" strokeWidth="1" strokeLinecap="round" />

        {/* Flute 6 */}
        <path d="M 107 46 Q 108 52 108 58 L 109 165 Q 109 169 108 171" fill="none" stroke="#9E968A" strokeWidth="2.2" strokeLinecap="round" />
        <path d="M 108 46 Q 109 52 109 58 L 110 165 Q 110 169 109 171" fill="none" stroke="#FFFFFF" strokeWidth="0.8" strokeLinecap="round" />

        {/* Specular Center Highlight Reflection */}
        <line x1="78" y1="47" x2="80" y2="169" stroke="#FFFFFF" strokeWidth="2.5" strokeOpacity={isActive ? "0.9" : "0.55"} strokeLinecap="round" />

        {/* --- 3. BASE (MOLDED TORUS & STEPPED MARBLE PLINTH) --- */}
        <rect
          x="45"
          y="172"
          width="70"
          height="3.5"
          rx="1"
          fill={isActive ? "#F0E1BE" : "#E2DCD3"}
          stroke={isActive ? "#FFB020" : "#C8C0B3"}
          strokeWidth="0.5"
        />

        {/* Upper Torus Ring */}
        <path
          d="M 40 175.5 Q 38 182 46 186 L 114 186 Q 122 182 120 175.5 Z"
          fill={isActive ? `url(#goldMarble-${number})` : `url(#marbleCylinder-${number})`}
          stroke={isActive ? "#FFB020" : "#C8C0B3"}
          strokeWidth="0.75"
        />

        {/* Scotia (Recessed Hollow Ring) */}
        <rect
          x="44"
          y="186"
          width="72"
          height="4.5"
          rx="1"
          fill={isActive ? "#D4BC8C" : "#C8C0B3"}
        />

        {/* Lower Torus Ring */}
        <path
          d="M 34 190.5 Q 30 198 42 201 L 118 201 Q 130 198 126 190.5 Z"
          fill={isActive ? `url(#goldMarble-${number})` : `url(#marbleCylinder-${number})`}
          stroke={isActive ? "#FFB020" : "#C8C0B3"}
          strokeWidth="0.75"
        />

        {/* Plinth Block Step 1 */}
        <rect
          x="26"
          y="201"
          width="108"
          height="8.5"
          rx="1.5"
          fill={isActive ? "#F4E7CB" : "#E8E2D8"}
          stroke={isActive ? "#FFB020" : "#C8C0B3"}
          strokeWidth="0.75"
        />

        {/* Plinth Block Step 2 (Base Foundation) */}
        <rect
          x="18"
          y="209.5"
          width="124"
          height="12"
          rx="2"
          fill={isActive ? "#E8D5B0" : "#DDD7CC"}
          stroke={isActive ? "#B87A00" : "#B8B2A6"}
          strokeWidth="0.75"
        />

        {/* Foundation Roman Numeral Plaque */}
        <g transform="translate(63, 203)">
          <rect
            x="0"
            y="0"
            width="34"
            height="14"
            rx="2.5"
            fill={isActive ? "#060B22" : "#FAF8F5"}
            stroke={isActive ? "#FFB020" : "#C8C0B3"}
            strokeWidth="1"
          />
          <text
            x="17"
            y="10.5"
            textAnchor="middle"
            fill={isActive ? "#FFB020" : "#0B1B3A"}
            fontSize="9"
            fontWeight="900"
            fontFamily="monospace"
          >
            {roman}
          </text>
        </g>
      </svg>
    </div>
  );
}

interface ArchitecturalPillar {
  id: string;
  number: string;
  roman: string;
  title: string;
  subtitle: string;
  description: string;
  metric: string;
  badge: string;
  icon: React.ReactNode;
  themeGradient: string;
  freq: number;
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
    title: "Senior Architect Access",
    subtitle: "Zero Junior Handoffs",
    description:
      "Direct collaboration with principal full-stack engineers and senior UI/UX directors. No junior intern middlemen or disconnected account reps.",
    metric: "100% Senior Squad",
    badge: "Principal Staff",
    icon: <Users className="w-5 h-5 text-[#FFB020]" />,
    themeGradient: "from-[#060B22] via-[#0B1B3A] to-[#1E3A70]",
    freq: 432,
    specs: [
      { label: "Squad Level", value: "Principal & Staff Only" },
      { label: "Middlemen", value: "Zero Account Reps" },
      { label: "Direct SLA", value: "< 15 Mins Client Slack" },
    ],
  },
  {
    id: "subsecond-speed",
    number: "02",
    roman: "II",
    title: "Sub-Second Speed & Vitals",
    subtitle: "< 0.8s LCP Benchmark",
    description:
      "Modern full-stack architecture (Next.js 16, React 19, Tailwind) engineered for sub-second initial paint and zero bounce rate.",
    metric: "< 0.58s Initial Paint",
    badge: "100/100 Vitals",
    icon: <Zap className="w-5 h-5 text-[#FFB020]" />,
    themeGradient: "from-[#060B22] via-[#0A2540] to-[#0284C7]",
    freq: 486,
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
    title: "100% Code & IP Ownership",
    subtitle: "Day-One Repository Access",
    description:
      "You own 100% of all source code, Figma design systems, and digital assets from Day 1. Committed directly to your private GitHub or GitLab.",
    metric: "100% Client Repo",
    badge: "Zero Lock-In",
    icon: <Lock className="w-5 h-5 text-[#FFB020]" />,
    themeGradient: "from-[#060B22] via-[#102A18] to-[#16A34A]",
    freq: 540,
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
    title: "Transparent Agile Delivery",
    subtitle: "Daily Demos & Staging",
    description:
      "Zero black-box periods. Regular recorded Loom walkthroughs, live passworded staging builds, and bi-weekly milestone sign-offs guarantee delivery.",
    metric: "Daily Loom Demos",
    badge: "Zero Dark Periods",
    icon: <Clock className="w-5 h-5 text-[#FFB020]" />,
    themeGradient: "from-[#060B22] via-[#2A1800] to-[#D97706]",
    freq: 576,
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

  const handlePillarSelect = (idx: number) => {
    setActiveIdx(idx);
    const p = PILLARS[idx];
    if (p) playPillarChime(p.freq);
  };

  return (
    <div className="w-full text-slate-800 select-none">
      {/* ==================================================================== */}
      {/* 1. CENTERED SECTION HEADER (COMPACT & COMMANDING)                    */}
      {/* ==================================================================== */}
      <div className="text-center max-w-3xl mx-auto space-y-2 pb-2 sm:pb-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#060B22] text-[#FFB020] text-xs font-black uppercase tracking-wider border border-[#FFB020]/30 shadow-xs">
          <Sparkles className="w-3.5 h-3.5 text-[#FFB020]" />
          <span>The 4 Architectural Pillars of Hire Desi Marketer</span>
        </div>

        <h2 className="font-display font-black text-2xl sm:text-3xl lg:text-[34px] text-[#0B1B3A] tracking-tight leading-tight">
          Engineered Foundations That Guarantee Commercial Success.
        </h2>

        <p className="text-xs sm:text-sm text-slate-600 font-normal max-w-xl mx-auto leading-relaxed">
          Four unshakeable classical engineering columns supporting your conversion rate, intellectual property, and launch velocity.
        </p>
      </div>

      {/* ==================================================================== */}
      {/* 2. REAL MARBLE ARCHITECTURAL COLUMNS (CLEAN, NO CLUNKY LABELS)       */}
      {/* 4 Standing Pillars side by side with Floating Icons on the Capitals  */}
      {/* ==================================================================== */}
      <div className="relative pt-2 pb-1">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 items-end">
          {PILLARS.map((pillar, idx) => {
            const isSelected = idx === activeIdx;

            return (
              <div
                key={pillar.id}
                role="button"
                tabIndex={0}
                onClick={() => handlePillarSelect(idx)}
                onMouseEnter={() => {
                  if (idx !== activeIdx) {
                    playPillarChime(pillar.freq);
                  }
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    handlePillarSelect(idx);
                  }
                }}
                className={cn(
                  "group relative cursor-pointer outline-none transition-all duration-400 flex flex-col items-center text-center",
                  isSelected
                    ? "-translate-y-4 scale-105 z-20"
                    : "hover:-translate-y-2 opacity-85 hover:opacity-100 z-10"
                )}
              >
                {/* --- 3D FLOATING TROPHY EMBLEM & TITLE --- */}
                <div className="space-y-1 mb-2 w-full px-1 flex flex-col items-center">
                  {/* Vibrant 3D Circular Medallion */}
                  <div
                    className={cn(
                      "w-11 h-11 sm:w-13 sm:h-13 rounded-2xl flex items-center justify-center transition-all duration-300 shadow-md border",
                      isSelected
                        ? "bg-gradient-to-tr " +
                            pillar.themeGradient +
                            " text-white border-[#FFB020] shadow-[0_8px_25px_rgba(255,176,32,0.45)] scale-115 ring-2 ring-[#FFB020]/50"
                        : "bg-white text-slate-700 border-[#E2DBD0] group-hover:border-[#FFB020]/60 group-hover:scale-108 group-hover:shadow-md"
                    )}
                  >
                    {pillar.icon}
                  </div>

                  {/* Title directly above the capital */}
                  <h4 className="font-display font-black text-xs sm:text-[13px] text-[#0B1B3A] tracking-tight leading-snug line-clamp-1 flex items-center justify-center pt-0.5">
                    {pillar.title}
                  </h4>

                  {/* Status chip */}
                  <span
                    className={cn(
                      "inline-block px-2.5 py-0.5 rounded-full text-[9px] sm:text-[9.5px] font-mono font-bold uppercase tracking-wider border transition-colors",
                      isSelected
                        ? "bg-[#FFB020] text-[#060B22] border-[#FFB020] font-black shadow-xs"
                        : "bg-white text-slate-600 border-[#E2DBD0] group-hover:border-slate-400"
                    )}
                  >
                    {pillar.metric}
                  </span>
                </div>

                {/* --- REAL CLASSICAL MARBLE COLUMN SVG --- */}
                <ClassicalMarblePillar
                  isActive={isSelected}
                  roman={pillar.roman}
                  number={pillar.number}
                />

                {/* Minimalist Glowing Pedestal Indicator Dot (Zero Clunky Text) */}
                <div className="mt-2.5 flex items-center justify-center h-4">
                  {isSelected ? (
                    <div className="w-2.5 h-2.5 rounded-full bg-[#FFB020] shadow-[0_0_14px_#FFB020] animate-pulse ring-4 ring-[#FFB020]/25" />
                  ) : (
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-[#FFB020]/60 transition-colors" />
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ==================================================================== */}
      {/* 3. COMPACT SPECIFICATION CONSOLE (FITS IN SINGLE WINDOW)             */}
      {/* ==================================================================== */}
      <div className="mt-2.5 p-3.5 sm:p-4 rounded-2xl bg-white border border-[#E2DBD0] shadow-md text-left">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 items-center">
          {/* Active Pillar Overview (4 cols) */}
          <div className="lg:col-span-4 space-y-1 min-w-0">
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-mono font-black uppercase tracking-wider text-[#B87A00] bg-[#FFB020]/20 px-2.5 py-0.5 rounded-full border border-[#FFB020]/30">
                Pillar {activePillar.number} · {activePillar.badge}
              </span>
              <span className="text-[10.5px] font-mono font-bold text-emerald-700 flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>Verified Standard</span>
              </span>
            </div>

            <div className="font-display font-black text-sm sm:text-base text-[#0B1B3A] tracking-tight truncate">
              {activePillar.title}
            </div>

            <p className="text-[11px] text-slate-600 leading-snug line-clamp-1 font-normal">
              {activePillar.description}
            </p>
          </div>

          {/* 3 Key Architecture SLA Specs (5 cols) */}
          <div className="lg:col-span-5 grid grid-cols-3 gap-2">
            {activePillar.specs.map((spec, i) => (
              <div
                key={i}
                className="p-2 sm:p-2.5 rounded-xl bg-[#FAF8F5] border border-[#E2DBD0] text-center space-y-0.5"
              >
                <div className="text-[9px] font-mono uppercase tracking-wider text-slate-500 truncate">
                  {spec.label}
                </div>
                <div className="font-bold text-[10.5px] sm:text-[11px] text-[#0B1B3A] truncate">
                  {spec.value}
                </div>
              </div>
            ))}
          </div>

          {/* Direct CTA Action (3 cols) */}
          <div className="lg:col-span-3 flex items-center justify-end">
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
              <span>Schedule Scoping</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </StarBorder>
          </div>
        </div>
      </div>
    </div>
  );
}

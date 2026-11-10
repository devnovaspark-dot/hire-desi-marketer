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

/* ========================================================================== */
/* REAL CLASSICAL MARBLE ARCHITECTURAL PILLAR SVG (DORIC / IONIC REAL COLUMN) */
/* Flared Capital + Fluted Cylindrical Shaft + Tiered Base & Contact Shadow   */
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
    <div className="relative w-full max-w-[150px] sm:max-w-[170px] mx-auto flex flex-col items-center">
      <svg
        viewBox="0 0 160 370"
        className={cn(
          "w-full h-auto drop-shadow-xl transition-all duration-500 ease-out",
          isActive
            ? "-translate-y-2 filter drop-shadow-[0_16px_25px_rgba(255,176,32,0.3)]"
            : "hover:-translate-y-1 opacity-90 hover:opacity-100"
        )}
      >
        <defs>
          {/* Real Marble Cylindrical Shading (Left-to-Right Curved Lighting) */}
          <linearGradient id={`marbleCylinder-${number}`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#DFD9D0" />
            <stop offset="20%" stopColor="#FAF7F2" />
            <stop offset="50%" stopColor="#FFFFFF" />
            <stop offset="78%" stopColor="#ECE5DB" />
            <stop offset="100%" stopColor="#C8C0B3" />
          </linearGradient>

          {/* Active Golden Illuminated Marble */}
          <linearGradient id={`goldMarble-${number}`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#E6D7B8" />
            <stop offset="25%" stopColor="#FFFDF7" />
            <stop offset="55%" stopColor="#FFF8E7" />
            <stop offset="80%" stopColor="#F5E4BE" />
            <stop offset="100%" stopColor="#D4BC8C" />
          </linearGradient>

          {/* Deep Flute Groove Inset Shadow */}
          <linearGradient id={`fluteGrad-${number}`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#B3AAA0" />
            <stop offset="40%" stopColor="#D9D2C7" />
            <stop offset="70%" stopColor="#FFFFFF" />
            <stop offset="100%" stopColor="#EDE7DF" />
          </linearGradient>
        </defs>

        {/* --- FLOOR CONTACT DROP SHADOWS --- */}
        <ellipse cx="80" cy="358" rx="66" ry="10" fill="rgba(6,11,34,0.14)" />
        <ellipse cx="80" cy="356" rx="48" ry="6" fill="rgba(6,11,34,0.22)" />

        {/* --- 1. CAPITAL (TOP PLATFORM & FLARED MOLDINGS) --- */}
        {/* Flat Top Abacus Lintel */}
        <path
          d="M 12 18 L 148 18 L 144 26 L 16 26 Z"
          fill={isActive ? `url(#goldMarble-${number})` : `url(#marbleCylinder-${number})`}
          stroke={isActive ? "#FFB020" : "#C8C0B3"}
          strokeWidth="0.75"
        />
        <rect
          x="16"
          y="26"
          width="128"
          height="8"
          rx="1"
          fill={isActive ? "#F8ECCF" : "#EBE5DB"}
          stroke={isActive ? "#FFB020" : "#C8C0B3"}
          strokeWidth="0.75"
        />

        {/* Classical Flared Curved Echinus (Bell Flair) */}
        <path
          d="M 18 34 Q 30 52 46 56 L 114 56 Q 130 52 142 34 Z"
          fill={isActive ? `url(#goldMarble-${number})` : `url(#marbleCylinder-${number})`}
          stroke={isActive ? "#FFB020" : "#C8C0B3"}
          strokeWidth="0.75"
        />

        {/* Capital Necking Rings (Astragal) */}
        <rect
          x="44"
          y="56"
          width="72"
          height="5"
          rx="2.5"
          fill={isActive ? "#FFB020" : "#D9D2C7"}
          stroke={isActive ? "#B87A00" : "#B8B2A6"}
          strokeWidth="0.75"
        />
        <rect
          x="48"
          y="61"
          width="64"
          height="4"
          rx="1"
          fill={isActive ? "#F0E1BE" : "#E2DCD3"}
        />

        {/* --- 2. COLUMN SHAFT (FLUTED CYLINDRICAL STONE BODY) --- */}
        <path
          d="M 48 65 L 112 65 L 116 290 L 44 290 Z"
          fill={isActive ? `url(#goldMarble-${number})` : `url(#marbleCylinder-${number})`}
          stroke={isActive ? "#FFB020" : "#C8C0B3"}
          strokeWidth="0.75"
        />

        {/* 6 Realistic Vertical Carved Marble Flutes */}
        {/* Flute 1 */}
        <path d="M 52 68 Q 54 74 54 80 L 52 280 Q 52 286 50 288" fill="none" stroke="#B8B2A6" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M 53 68 Q 55 74 55 80 L 53 280 Q 53 286 51 288" fill="none" stroke="#FFFFFF" strokeWidth="1" strokeLinecap="round" />

        {/* Flute 2 */}
        <path d="M 62 67 Q 64 73 64 80 L 63 281 Q 63 287 61 289" fill="none" stroke="#B8B2A6" strokeWidth="3" strokeLinecap="round" />
        <path d="M 63.5 67 Q 65.5 73 65.5 80 L 64.5 281 Q 64.5 287 62.5 289" fill="none" stroke="#FFFFFF" strokeWidth="1.2" strokeLinecap="round" />

        {/* Flute 3 (Center-Left) */}
        <path d="M 73 66 Q 74.5 72 74.5 80 L 74 282 Q 74 288 72.5 290" fill="none" stroke={isActive ? "#D9A030" : "#B8B2A6"} strokeWidth="3.2" strokeLinecap="round" />
        <path d="M 74.5 66 Q 76 72 76 80 L 75.5 282 Q 75.5 288 74 290" fill="none" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" />

        {/* Flute 4 (Center-Right) */}
        <path d="M 85 66 Q 86.5 72 86.5 80 L 86 282 Q 86 288 84.5 290" fill="none" stroke={isActive ? "#D9A030" : "#B8B2A6"} strokeWidth="3.2" strokeLinecap="round" />
        <path d="M 86.5 66 Q 88 72 88 80 L 87.5 282 Q 87.5 288 86 290" fill="none" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" />

        {/* Flute 5 */}
        <path d="M 97 67 Q 98.5 73 98.5 80 L 98 281 Q 98 287 96.5 289" fill="none" stroke="#A8A095" strokeWidth="3" strokeLinecap="round" />
        <path d="M 98.5 67 Q 100 73 100 80 L 99.5 281 Q 99.5 287 98 289" fill="none" stroke="#FFFFFF" strokeWidth="1" strokeLinecap="round" />

        {/* Flute 6 */}
        <path d="M 107 68 Q 108 74 108 80 L 109 280 Q 109 286 108 288" fill="none" stroke="#9E968A" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M 108 68 Q 109 74 109 80 L 110 280 Q 110 286 109 288" fill="none" stroke="#FFFFFF" strokeWidth="0.8" strokeLinecap="round" />

        {/* Specular Center Highlight Reflection */}
        <line x1="78" y1="70" x2="80" y2="285" stroke="#FFFFFF" strokeWidth="3" strokeOpacity={isActive ? "0.9" : "0.55"} strokeLinecap="round" />

        {/* --- 3. BASE (MOLDED TORUS & STEPPED MARBLE PLINTH) --- */}
        <rect
          x="43"
          y="290"
          width="74"
          height="5"
          rx="1.5"
          fill={isActive ? "#F0E1BE" : "#E2DCD3"}
          stroke={isActive ? "#FFB020" : "#C8C0B3"}
          strokeWidth="0.5"
        />

        {/* Upper Torus Ring */}
        <path
          d="M 38 295 Q 36 303 44 309 L 116 309 Q 124 303 122 295 Z"
          fill={isActive ? `url(#goldMarble-${number})` : `url(#marbleCylinder-${number})`}
          stroke={isActive ? "#FFB020" : "#C8C0B3"}
          strokeWidth="0.75"
        />

        {/* Scotia (Recessed Hollow Ring) */}
        <rect
          x="42"
          y="309"
          width="76"
          height="7"
          rx="1"
          fill={isActive ? "#D4BC8C" : "#C8C0B3"}
        />

        {/* Lower Torus Ring */}
        <path
          d="M 32 316 Q 28 327 40 332 L 120 332 Q 132 327 128 316 Z"
          fill={isActive ? `url(#goldMarble-${number})` : `url(#marbleCylinder-${number})`}
          stroke={isActive ? "#FFB020" : "#C8C0B3"}
          strokeWidth="0.75"
        />

        {/* Plinth Block Step 1 */}
        <rect
          x="24"
          y="332"
          width="112"
          height="12"
          rx="1.5"
          fill={isActive ? "#F4E7CB" : "#E8E2D8"}
          stroke={isActive ? "#FFB020" : "#C8C0B3"}
          strokeWidth="0.75"
        />

        {/* Plinth Block Step 2 (Base Foundation) */}
        <rect
          x="16"
          y="344"
          width="128"
          height="12"
          rx="2"
          fill={isActive ? "#E8D5B0" : "#DDD7CC"}
          stroke={isActive ? "#B87A00" : "#B8B2A6"}
          strokeWidth="0.75"
        />

        {/* Foundation Roman Numeral Plaque */}
        <g transform="translate(62, 334)">
          <rect
            x="0"
            y="0"
            width="36"
            height="18"
            rx="3"
            fill={isActive ? "#060B22" : "#FAF8F5"}
            stroke={isActive ? "#FFB020" : "#C8C0B3"}
            strokeWidth="1.2"
          />
          <text
            x="18"
            y="13"
            textAnchor="middle"
            fill={isActive ? "#FFB020" : "#0B1B3A"}
            fontSize="10"
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
    title: "Sub-Second Speed & Vitals",
    subtitle: "< 0.8s LCP Benchmark",
    description:
      "Modern full-stack architecture (Next.js 16, React 19, Tailwind, Headless CMS) engineered for sub-second initial paint and zero bounce rate.",
    metric: "< 0.58s Initial Paint",
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
    <div className="w-full text-slate-800 select-none">
      {/* ==================================================================== */}
      {/* 1. CENTERED SECTION HEADER (MATCHING REFERENCE COMPOSITION)          */}
      {/* ==================================================================== */}
      <div className="text-center max-w-3xl mx-auto space-y-2.5 pb-4">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#060B22] text-[#FFB020] text-xs font-black uppercase tracking-wider border border-[#FFB020]/30 shadow-xs">
          <Sparkles className="w-3.5 h-3.5 text-[#FFB020]" />
          <span>The 4 Architectural Pillars of Hire Desi Marketer</span>
        </div>

        <h2 className="font-display font-black text-2xl sm:text-3xl lg:text-4xl text-[#0B1B3A] tracking-tight leading-tight">
          Engineered Foundations That Guarantee Commercial Success.
        </h2>

        <p className="text-xs sm:text-sm text-slate-600 font-normal max-w-xl mx-auto leading-relaxed">
          Four unshakeable classical engineering columns supporting your conversion rate, intellectual property, and launch velocity.
        </p>
      </div>

      {/* ==================================================================== */}
      {/* 2. REAL MARBLE ARCHITECTURAL COLUMNS (MATCHING REFERENCE IMAGE)     */}
      {/* 4 Standing Pillars side by side with Floating Icons on the Capitals  */}
      {/* ==================================================================== */}
      <div className="relative pt-2 pb-2">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 items-end">
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
                  "group relative cursor-pointer outline-none transition-all duration-300 flex flex-col items-center text-center",
                  isSelected
                    ? "-translate-y-2 scale-102"
                    : "hover:-translate-y-1 opacity-90 hover:opacity-100"
                )}
              >
                {/* --- FLOATING METRIC & EMBLEM ABOVE THE CAPITAL (LIKE REFERENCE) --- */}
                <div className="space-y-1.5 mb-2 w-full px-2 flex flex-col items-center">
                  {/* Floating Circular Icon Medallion */}
                  <div
                    className={cn(
                      "w-11 h-11 sm:w-12 sm:h-12 rounded-2xl flex items-center justify-center transition-all duration-300 shadow-md border",
                      isSelected
                        ? "bg-[#060B22] text-[#FFB020] border-[#FFB020] shadow-[0_5px_15px_rgba(255,176,32,0.3)] scale-105"
                        : "bg-white text-slate-700 border-[#E2DBD0] group-hover:border-[#FFB020]/50"
                    )}
                  >
                    {pillar.icon}
                  </div>

                  {/* Title & Badge on Top of Capital */}
                  <h4 className="font-display font-black text-xs sm:text-[13.5px] text-[#0B1B3A] tracking-tight leading-snug line-clamp-2 min-h-[34px] flex items-center justify-center">
                    {pillar.title}
                  </h4>

                  <span
                    className={cn(
                      "inline-block px-2 py-0.5 rounded-full text-[9.5px] font-mono font-bold uppercase tracking-wider border transition-colors",
                      isSelected
                        ? "bg-[#FFB020] text-[#060B22] border-[#FFB020] font-black"
                        : "bg-white text-slate-600 border-[#E2DBD0]"
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

                {/* Bottom Active Status Flag */}
                <div className="mt-1 text-center">
                  <span
                    className={cn(
                      "text-[10px] font-mono font-bold transition-colors",
                      isSelected ? "text-[#B87A00]" : "text-slate-400 group-hover:text-slate-600"
                    )}
                  >
                    {isSelected ? "Active Pillar ✓" : "Click to Inspect →"}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ==================================================================== */}
      {/* 3. COMPACT SPECIFICATION CONSOLE (FITS IN SINGLE WINDOW)             */}
      {/* ==================================================================== */}
      <div className="mt-3 p-3.5 sm:p-4 rounded-2xl bg-white border border-[#E2DBD0] shadow-md text-left">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 sm:gap-4 items-center">
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

          {/* 3 Architectural Specifications (5 cols) */}
          <div className="lg:col-span-5 grid grid-cols-3 gap-1.5 sm:gap-2">
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

          {/* Instant Scoping Action (3 cols) */}
          <div className="lg:col-span-3 flex items-center justify-end">
            <Link
              href="/get-a-quote"
              className="btn-luxury-gold btn-shimmer w-full py-2.5 px-4 rounded-xl text-xs font-black uppercase tracking-wider flex items-center justify-center gap-2 shadow-xs cursor-pointer text-center group"
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

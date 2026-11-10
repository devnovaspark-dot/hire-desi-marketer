"use client";

import React, { useState } from "react";
import { TrendingUp, Activity, Zap } from "lucide-react";

export interface Bento2Props {
  title?: string;
  description?: string;
  kpi?: string;
  kpiSubtext?: string;
  className?: string;
}

export default function Bento2({
  title = "Sub-Second Telemetry",
  description = "Continuous Core Web Vitals telemetry tracking LCP, INP, and CLS across every production user session.",
  kpi = "+148%",
  kpiSubtext = "Conversion lift across Next.js 16 platforms",
  className = "",
}: Bento2Props) {
  const [hoverIndex, setHoverIndex] = useState<number | null>(4);

  const dataPoints = [
    { x: 20, y: 70, label: "0.95s", score: "92" },
    { x: 80, y: 62, label: "0.84s", score: "95" },
    { x: 140, y: 48, label: "0.76s", score: "97" },
    { x: 200, y: 35, label: "0.71s", score: "99" },
    { x: 260, y: 18, label: "0.68s", score: "100" },
    { x: 310, y: 12, label: "0.62s", score: "100" },
  ];

  const activePoint = hoverIndex !== null ? dataPoints[hoverIndex] : dataPoints[4];

  return (
    <div
      className={`relative overflow-hidden rounded-3xl border border-white/10 bg-[#081232] p-6 flex flex-col justify-between h-full min-h-[380px] group transition-all duration-300 hover:border-[#FFB020]/40 shadow-xl select-none ${className}`}
    >
      {/* Background dot grid pattern */}
      <div
        className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:18px_18px] pointer-events-none"
        aria-hidden="true"
      />

      {/* Top telemetry metric & chart */}
      <div className="relative z-10 w-full space-y-3">
        <div className="flex items-center justify-between">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[10px] font-mono font-bold uppercase tracking-wider">
            <TrendingUp className="w-3 h-3" />
            <span>Lighthouse Certified</span>
          </div>
          <span className="text-[11px] font-mono text-slate-400">Live SLA Monitor</span>
        </div>

        {/* Big KPI */}
        <div>
          <div className="flex items-baseline gap-2">
            <span className="font-display font-black text-3xl sm:text-4xl text-white tracking-tight">
              {kpi}
            </span>
            <span className="text-xs font-mono font-bold text-emerald-400 flex items-center">
              <Zap className="w-3.5 h-3.5 fill-emerald-400 mr-0.5" />
              Peak Vitals
            </span>
          </div>
          <p className="text-xs text-slate-400 font-medium mt-0.5">{kpiSubtext}</p>
        </div>

        {/* Interactive SVG Chart */}
        <div className="relative w-full h-28 pt-2">
          <svg
            className="w-full h-full overflow-visible"
            viewBox="0 0 330 90"
            fill="none"
          >
            <defs>
              <linearGradient id="bento2-area-grad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="rgba(16, 185, 129, 0.35)" />
                <stop offset="100%" stopColor="rgba(16, 185, 129, 0.0)" />
              </linearGradient>
              <linearGradient id="bento2-line-grad" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#38BDF8" />
                <stop offset="60%" stopColor="#10B981" />
                <stop offset="100%" stopColor="#FFB020" />
              </linearGradient>
            </defs>

            {/* Horizontal guide grids */}
            <line x1="0" y1="25" x2="330" y2="25" stroke="rgba(255,255,255,0.06)" strokeDasharray="3 3" />
            <line x1="0" y1="55" x2="330" y2="55" stroke="rgba(255,255,255,0.06)" strokeDasharray="3 3" />
            <line x1="0" y1="85" x2="330" y2="85" stroke="rgba(255,255,255,0.06)" />

            {/* Gradient fill area */}
            <path
              d="M 20 70 C 80 62, 140 48, 200 35 C 240 25, 270 15, 310 12 L 310 85 L 20 85 Z"
              fill="url(#bento2-area-grad)"
            />

            {/* Glowing line curve */}
            <path
              d="M 20 70 C 80 62, 140 48, 200 35 C 240 25, 270 15, 310 12"
              stroke="url(#bento2-line-grad)"
              strokeWidth="2.5"
              strokeLinecap="round"
            />

            {/* Interactive hover points */}
            {dataPoints.map((pt, i) => (
              <g
                key={i}
                className="cursor-pointer"
                onMouseEnter={() => setHoverIndex(i)}
              >
                <circle
                  cx={pt.x}
                  cy={pt.y}
                  r="7"
                  fill="transparent"
                />
                <circle
                  cx={pt.x}
                  cy={pt.y}
                  r={hoverIndex === i ? "4.5" : "2.5"}
                  fill={hoverIndex === i ? "#FFB020" : "#ffffff"}
                  stroke="#060B22"
                  strokeWidth="1.5"
                  className="transition-all duration-200"
                />
              </g>
            ))}
          </svg>

          {/* Active tooltip pill */}
          <div
            className="absolute -top-1 pointer-events-none transition-all duration-200 transform -translate-x-1/2"
            style={{ left: `${(activePoint.x / 330) * 100}%` }}
          >
            <div className="px-2 py-0.5 rounded-md bg-[#060B22] border border-[#FFB020]/60 text-[10px] font-mono text-white shadow-lg flex items-center gap-1.5 whitespace-nowrap">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>{activePoint.label}</span>
              <span className="text-[#FFB020]">({activePoint.score}/100)</span>
            </div>
          </div>
        </div>

        {/* 3 Telemetry metric pills */}
        <div className="grid grid-cols-3 gap-2 pt-1 text-center font-mono">
          <div className="p-1.5 rounded-xl bg-[#060B22]/80 border border-white/5">
            <div className="text-[9px] uppercase tracking-wider text-slate-400">LCP Speed</div>
            <div className="text-xs font-bold text-emerald-400">&lt; 0.68s</div>
          </div>
          <div className="p-1.5 rounded-xl bg-[#060B22]/80 border border-white/5">
            <div className="text-[9px] uppercase tracking-wider text-slate-400">FID / INP</div>
            <div className="text-xs font-bold text-white">12ms</div>
          </div>
          <div className="p-1.5 rounded-xl bg-[#060B22]/80 border border-white/5">
            <div className="text-[9px] uppercase tracking-wider text-slate-400">CLS Jitter</div>
            <div className="text-xs font-bold text-emerald-400">0.00</div>
          </div>
        </div>
      </div>

      {/* Bottom text block */}
      <div className="relative z-10 pt-4 mt-auto">
        <h3 className="text-xl sm:text-2xl font-bold font-display text-white tracking-tight">
          {title}
        </h3>
        <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
          {description}
        </p>
      </div>
    </div>
  );
}

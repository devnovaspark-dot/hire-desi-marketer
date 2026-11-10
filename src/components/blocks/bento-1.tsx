"use client";

import React, { useState, useEffect } from "react";
import {
  Palette,
  Code2,
  Sparkles,
  ShieldCheck,
  ShoppingBag,
  Layout,
  Layers,
  Zap,
  RefreshCw,
  LucideIcon,
} from "lucide-react";

export interface SourceChip {
  icon: LucideIcon | React.ComponentType<{ className?: string }>;
  label: string;
}

export interface Bento1Props {
  title?: string;
  description?: string;
  badge?: string;
  actionPill?: {
    icon: LucideIcon | React.ComponentType<{ className?: string }>;
    label: string;
  };
  sources?: SourceChip[];
  statusLabel?: string;
  statusMetric?: string;
  accentColor?: string;
  pulseColors?: [string, string, string];
  initialProgress?: number;
  className?: string;
}

export default function Bento1({
  title = "Custom Website Design & Engineering",
  description = "Every pixel designed exclusively in Figma for your brand's market positioning, compiled into semantic Next.js 16 with zero generic theme bloat.",
  badge = "Figma to Next.js",
  actionPill = { icon: Code2, label: "Handcrafted Code" },
  sources = [
    { icon: Palette, label: "Figma" },
    { icon: Sparkles, label: "Tokens" },
    { icon: Code2, label: "React 19" },
    { icon: Zap, label: "Next.js 16" },
  ],
  statusLabel = "Compiling Design Tokens",
  statusMetric = "100% Custom UI",
  accentColor = "#FFB020",
  pulseColors = ["#FFB020", "#38BDF8", "#10B981"],
  initialProgress = 72,
  className = "",
}: Bento1Props) {
  const [progress, setProgress] = useState(initialProgress);
  const [activeSource, setActiveSource] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => (prev >= 95 ? 45 : prev + 10));
      setActiveSource((prev) => (prev + 1) % sources.length);
    }, 2500);
    return () => clearInterval(timer);
  }, [sources.length]);

  const ActionIcon = actionPill.icon;

  return (
    <div
      className={`relative overflow-hidden rounded-3xl border border-white/10 bg-[#081232] p-5 sm:p-6 flex flex-col justify-between h-full min-h-[400px] group transition-all duration-300 hover:border-[#FFB020]/45 shadow-xl select-none ${className}`}
    >
      {/* Background dot grid pattern */}
      <div
        className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.07)_1px,transparent_1px)] [background-size:18px_18px] pointer-events-none"
        aria-hidden="true"
      />

      {/* Top Header Badge */}
      <div className="relative z-10 flex items-center justify-between mb-2">
        <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#FFB020] bg-white/5 border border-white/10 px-2.5 py-0.5 rounded-md">
          {badge}
        </span>
        <span className="text-[10px] font-mono text-slate-400">
          HDM Enterprise
        </span>
      </div>

      {/* Top integration network visualization (Bento 1 style) */}
      <div className="relative z-10 w-full pt-1">
        {/* Source chips */}
        <div className="flex justify-between items-center px-2 sm:px-4">
          {sources.map((src, index) => {
            const Icon = src.icon;
            const isPulsing = index === activeSource;
            return (
              <div
                key={index}
                className="flex flex-col items-center gap-1 group/chip"
              >
                <div
                  className={`relative w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${
                    isPulsing
                      ? "bg-[#060B22] border-[#FFB020] text-[#FFB020] shadow-[0_0_15px_rgba(255,176,32,0.35)] scale-105"
                      : "bg-[#060B22]/80 border-white/10 text-slate-300 hover:text-white hover:border-white/20"
                  } border`}
                >
                  <Icon className="w-4 h-4" />
                  {isPulsing && (
                    <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-[#FFB020] animate-ping" />
                  )}
                </div>
                <span className="text-[9.5px] font-mono text-slate-400 group-hover/chip:text-slate-200 truncate max-w-[58px] text-center">
                  {src.label}
                </span>
              </div>
            );
          })}
        </div>

        {/* SVG converging connection curves */}
        <div className="relative w-full h-14 my-1">
          <svg
            className="w-full h-full overflow-visible"
            viewBox="0 0 320 56"
            fill="none"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id={`line-grad-${title.replace(/\s+/g, "-")}`} x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="rgba(255, 255, 255, 0.12)" />
                <stop offset="100%" stopColor={accentColor} stopOpacity="0.4" />
              </linearGradient>
            </defs>

            {/* 4 connecting paths converging to central node */}
            <path
              d="M 38 4 C 38 28, 145 32, 160 52"
              stroke={`url(#line-grad-${title.replace(/\s+/g, "-")})`}
              strokeWidth="1.5"
            />
            <path
              d="M 118 4 C 118 28, 150 32, 160 52"
              stroke={`url(#line-grad-${title.replace(/\s+/g, "-")})`}
              strokeWidth="1.5"
            />
            <path
              d="M 202 4 C 202 28, 170 32, 160 52"
              stroke={`url(#line-grad-${title.replace(/\s+/g, "-")})`}
              strokeWidth="1.5"
            />
            <path
              d="M 282 4 C 282 28, 175 32, 160 52"
              stroke={`url(#line-grad-${title.replace(/\s+/g, "-")})`}
              strokeWidth="1.5"
            />

            {/* Traveling signal pulses */}
            <circle r="2.5" fill={pulseColors[0]}>
              <animateMotion
                path="M 38 4 C 38 28, 145 32, 160 52"
                dur="2.4s"
                repeatCount="indefinite"
              />
            </circle>
            <circle r="2.5" fill={pulseColors[1]}>
              <animateMotion
                path="M 282 4 C 282 28, 175 32, 160 52"
                dur="2.8s"
                repeatCount="indefinite"
              />
            </circle>
            <circle r="2.5" fill={pulseColors[2]}>
              <animateMotion
                path="M 118 4 C 118 28, 150 32, 160 52"
                dur="2.2s"
                repeatCount="indefinite"
              />
            </circle>
          </svg>
        </div>

        {/* Central Action Button Pill */}
        <div className="flex justify-center -mt-1 mb-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white text-[#060B22] font-semibold text-xs shadow-lg shadow-black/30 hover:scale-105 transition-transform cursor-pointer">
            <ActionIcon className="w-3.5 h-3.5 text-[#060B22]" />
            <span>{actionPill.label}</span>
          </div>
        </div>

        {/* Live sync card */}
        <div className="p-3 rounded-2xl bg-[#060B22]/90 border border-white/10 backdrop-blur-sm space-y-2">
          <div className="flex items-center justify-between text-xs font-medium">
            <div className="flex items-center gap-2 text-white">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-[11.5px] truncate max-w-[170px] sm:max-w-none">
                {statusLabel}
              </span>
            </div>
            <span className="text-slate-400 font-mono text-[11px] shrink-0">
              {statusMetric}
            </span>
          </div>

          {/* Progress bar */}
          <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
            <div
              className="h-full bg-white rounded-full transition-all duration-700 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>

      {/* Bottom text block */}
      <div className="relative z-10 pt-5 mt-auto">
        <h3 className="text-lg sm:text-xl font-bold font-display text-white tracking-tight leading-snug">
          {title}
        </h3>
        <p className="mt-2 text-xs sm:text-[13px] text-slate-300 leading-relaxed font-normal">
          {description}
        </p>
      </div>
    </div>
  );
}

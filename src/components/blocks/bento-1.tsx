"use client";

import React, { useState, useEffect } from "react";
import { MessageSquare, Database, Cloud, BarChart3, Plug } from "lucide-react";

export interface Bento1Props {
  title?: string;
  description?: string;
  sourcesCount?: number;
  recordsCount?: string;
  className?: string;
}

export default function Bento1({
  title = "Connect anything",
  description = "Plug in the tools you already use and keep every record in sync without writing glue code.",
  sourcesCount = 4,
  recordsCount = "12,480 records",
  className = "",
}: Bento1Props) {
  const [progress, setProgress] = useState(65);
  const [activeSource, setActiveSource] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => (prev >= 95 ? 40 : prev + 12));
      setActiveSource((prev) => (prev + 1) % 4);
    }, 2400);
    return () => clearInterval(timer);
  }, []);

  const sources = [
    { icon: MessageSquare, label: "Chat & CRM" },
    { icon: Database, label: "Database" },
    { icon: Cloud, label: "Cloud APIs" },
    { icon: BarChart3, label: "Analytics" },
  ];

  return (
    <div
      className={`relative overflow-hidden rounded-3xl border border-white/10 bg-[#081232] p-6 flex flex-col justify-between h-full min-h-[380px] group transition-all duration-300 hover:border-[#FFB020]/40 shadow-xl select-none ${className}`}
    >
      {/* Background dot grid pattern */}
      <div
        className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:18px_18px] pointer-events-none"
        aria-hidden="true"
      />

      {/* Top integration network visualization */}
      <div className="relative z-10 w-full pt-1">
        {/* Source chips */}
        <div className="flex justify-between items-center px-4">
          {sources.map((src, index) => {
            const Icon = src.icon;
            const isPulsing = index === activeSource;
            return (
              <div
                key={index}
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
            );
          })}
        </div>

        {/* SVG converging connection curves */}
        <div className="relative w-full h-16 my-1">
          <svg
            className="w-full h-full overflow-visible"
            viewBox="0 0 320 64"
            fill="none"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="bento1-line-grad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="rgba(255, 255, 255, 0.12)" />
                <stop offset="100%" stopColor="rgba(255, 176, 32, 0.4)" />
              </linearGradient>
            </defs>

            {/* 4 connecting paths converging to central Connect node */}
            <path
              d="M 38 4 C 38 32, 145 36, 160 60"
              stroke="url(#bento1-line-grad)"
              strokeWidth="1.5"
            />
            <path
              d="M 118 4 C 118 32, 150 36, 160 60"
              stroke="url(#bento1-line-grad)"
              strokeWidth="1.5"
            />
            <path
              d="M 202 4 C 202 32, 170 36, 160 60"
              stroke="url(#bento1-line-grad)"
              strokeWidth="1.5"
            />
            <path
              d="M 282 4 C 282 32, 175 36, 160 60"
              stroke="url(#bento1-line-grad)"
              strokeWidth="1.5"
            />

            {/* Traveling signal pulses */}
            <circle r="2.5" fill="#FFB020">
              <animateMotion
                path="M 38 4 C 38 32, 145 36, 160 60"
                dur="2.4s"
                repeatCount="indefinite"
              />
            </circle>
            <circle r="2.5" fill="#38BDF8">
              <animateMotion
                path="M 282 4 C 282 32, 175 36, 160 60"
                dur="2.8s"
                repeatCount="indefinite"
              />
            </circle>
            <circle r="2.5" fill="#10B981">
              <animateMotion
                path="M 118 4 C 118 32, 150 36, 160 60"
                dur="2.2s"
                repeatCount="indefinite"
              />
            </circle>
          </svg>
        </div>

        {/* Central Connect Button Pill */}
        <div className="flex justify-center -mt-1 mb-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white text-[#060B22] font-semibold text-xs shadow-lg shadow-black/30 hover:scale-105 transition-transform cursor-pointer">
            <Plug className="w-3.5 h-3.5" />
            <span>Connect</span>
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
              <span>Syncing {sourcesCount} sources</span>
            </div>
            <span className="text-slate-400 font-mono text-[11px]">
              {recordsCount}
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

"use client";

import React, { useState } from "react";
import { GitBranch, Shield, Globe, Layers, Cpu, Sparkles } from "lucide-react";

export interface Bento3Props {
  title?: string;
  description?: string;
  className?: string;
}

export default function Bento3({
  title = "Global Engineering Orbit",
  description = "Timezone-aligned senior engineering squads committing directly into your client repositories with zero overhead.",
  className = "",
}: Bento3Props) {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <div
      className={`relative overflow-hidden rounded-3xl border border-white/10 bg-[#081232] p-6 flex flex-col justify-between h-full min-h-[380px] group transition-all duration-300 hover:border-[#FFB020]/40 shadow-xl select-none ${className}`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background dot grid pattern */}
      <div
        className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:18px_18px] pointer-events-none"
        aria-hidden="true"
      />

      {/* Top Orbital Ecosystem Visualization */}
      <div className="relative z-10 w-full flex items-center justify-center py-2 h-44 overflow-hidden">
        {/* Orbital concentric rings */}
        <div className="relative w-44 h-44 flex items-center justify-center">
          {/* Outer ring */}
          <div className="absolute inset-0 rounded-full border border-dashed border-white/15" />

          {/* Inner ring */}
          <div className="absolute inset-6 rounded-full border border-white/20" />

          {/* Core pulsing hub */}
          <div className="relative z-20 w-12 h-12 rounded-2xl bg-gradient-to-br from-[#FFB020] to-[#E68A00] p-0.5 shadow-[0_0_25px_rgba(255,176,32,0.4)]">
            <div className="w-full h-full rounded-[14px] bg-[#060B22] flex items-center justify-center">
              <Cpu className="w-5 h-5 text-[#FFB020] animate-pulse" />
            </div>
          </div>

          {/* Outer rotating ring layer */}
          <div
            className={`absolute inset-0 rounded-full ${
              isPaused ? "" : "animate-[spin_24s_linear_infinite]"
            }`}
          >
            {/* Satellite 1: Git */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-xl bg-[#060B22] border border-white/20 flex items-center justify-center text-slate-200 shadow-md">
              <GitBranch className="w-3.5 h-3.5 text-emerald-400" />
            </div>

            {/* Satellite 2: Security */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-8 h-8 rounded-xl bg-[#060B22] border border-white/20 flex items-center justify-center text-slate-200 shadow-md">
              <Shield className="w-3.5 h-3.5 text-blue-400" />
            </div>

            {/* Satellite 3: Globe */}
            <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-xl bg-[#060B22] border border-white/20 flex items-center justify-center text-slate-200 shadow-md">
              <Globe className="w-3.5 h-3.5 text-[#FFB020]" />
            </div>

            {/* Satellite 4: Layers */}
            <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-xl bg-[#060B22] border border-white/20 flex items-center justify-center text-slate-200 shadow-md">
              <Layers className="w-3.5 h-3.5 text-purple-400" />
            </div>
          </div>

          {/* Inner counter-rotating ring layer */}
          <div
            className={`absolute inset-6 rounded-full ${
              isPaused ? "" : "animate-[spin_16s_linear_infinite_reverse]"
            }`}
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#FFB020] shadow-[0_0_8px_#FFB020]" />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]" />
          </div>
        </div>

        {/* Floating status tag */}
        <div className="absolute bottom-1 right-2 inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#060B22]/90 border border-white/10 text-[10px] font-mono text-emerald-400 shadow-md">
          <Sparkles className="w-2.5 h-2.5 text-[#FFB020]" />
          <span>Real-Time Sync</span>
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


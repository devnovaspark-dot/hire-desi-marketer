"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Zap,
  Star,
  ShieldCheck,
  Clock,
  Lock,
  Layers,
  Code2,
  CheckCircle2,
  Cpu,
  GitBranch,
} from "lucide-react";
import { cn } from "@/lib/utils";
import GhostFibers from "@/components/ui/GhostFibers";
import StarBorder from "@/components/ui/StarBorder";

type ConsoleTab = "vitals" | "design" | "stack" | "ownership";

export function WebDesignHero() {
  const [activeTab, setActiveTab] = useState<ConsoleTab>("vitals");

  return (
    <section className="relative overflow-hidden w-full py-12 sm:py-16 lg:py-20 bg-[#060B22] text-white border-b border-[#FFB020]/20 select-none">
      {/* ================================================================ */}
      {/* 1. GHOST FIBERS 3D WEBGL2 BACKGROUND ANIMATION                   */}
      {/* ================================================================ */}
      <GhostFibers
        glowColor="#FFB020"
        lineColor="#FFE082"
        secondaryColor="#E68A00"
        speed={0.4}
        scale={1.05}
        rotation={16}
        rollSpeed={0.12}
        layers={3}
        threads={80}
        density={1.1}
        thickness={1.1}
        flow={0.35}
        particles={0.8}
        sparkle={0.8}
        glow={1.15}
        brightness={1.05}
        vignette={0.3}
        grain={0.05}
        mouseInteraction={true}
        hoverEffect="focus"
        mouseStrength={1}
        pulseOnClick={true}
        className="absolute inset-0 w-full h-full opacity-90"
      />

      {/* Subtle Ambient Radial Lighting Behind Fibers */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[850px] h-[380px] bg-[#FFB020]/8 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-sky-500/5 rounded-full blur-[120px] pointer-events-none" />

      {/* ================================================================ */}
      {/* 2. HERO CONTENT LAYER (ABOVE CANVAS WITH POINTER INTERACTION)    */}
      {/* ================================================================ */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6 sm:space-y-8">
        {/* Grand Editorial Masthead */}
        <div className="space-y-4 max-w-4xl mx-auto">
          {/* Live Agency Status Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-[#FFB020]/30 shadow-2xs">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="text-[10.5px] sm:text-[11px] font-black text-[#FFB020] uppercase tracking-wider">
              Enterprise Web Engineering &amp; Bespoke UI/UX
            </span>
            <span className="text-white/20 hidden sm:inline">|</span>
            <span className="text-[10.5px] font-semibold text-slate-300 hidden sm:inline">
              Serving USA · Canada · UK · Australia
            </span>
          </div>

          {/* Grand Authoritative Headline */}
          <h1 className="font-display font-black text-3xl sm:text-5xl lg:text-[56px] text-white tracking-tight leading-[1.08]">
            Your Website Should Do More Than Look Good.{" "}
            <span className="bg-gradient-to-r from-[#FFB020] via-[#FFE082] to-[#E68A00] bg-clip-text text-transparent block sm:inline">
              It Should Grow Your Business.
            </span>
          </h1>

          {/* Editorial Subtitle */}
          <div className="space-y-1 max-w-2xl mx-auto pt-1">
            <p className="font-bold text-slate-200 text-sm sm:text-base">
              Professional Web Design and Development Services for Growing Businesses
            </p>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-normal">
              We design and engineer bespoke, high-converting digital platforms that blend Figma-grade design systems with sub-second Next.js full-stack development—turning casual visitors into qualified enterprise revenue.
            </p>
          </div>

          {/* Dual Conversion Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <StarBorder
              as={Link}
              href="/get-a-quote"
              className="py-3.5 px-8 rounded-xl text-xs sm:text-sm font-black uppercase tracking-wider inline-flex items-center justify-center gap-2 shadow-lg cursor-pointer text-center group"
              radius={12}
              color="#FFF8E7"
              trailColor="#FFB020"
              backgroundColor="#FFB020"
              textColor="#060B22"
              borderColor="rgba(255, 176, 32, 0.6)"
              sparkle={true}
              glow={0.85}
            >
              <span>LET&apos;S BUILD YOUR WEBSITE</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </StarBorder>

            <StarBorder
              as="a"
              href="#services"
              className="py-3.5 px-7 rounded-xl text-xs sm:text-sm font-black uppercase tracking-wider inline-flex items-center justify-center gap-2 shadow-xs cursor-pointer text-center group"
              radius={12}
              color="#FFB020"
              trailColor="#38BDF8"
              backgroundColor="rgba(255, 255, 255, 0.08)"
              textColor="#FFFFFF"
              borderColor="rgba(255, 255, 255, 0.2)"
              sparkle={false}
              glow={0.5}
            >
              <span>Explore Solutions ↓</span>
            </StarBorder>
          </div>

          {/* Verified Trust Strip */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-slate-300">
            <div className="flex items-center gap-1.5">
              <div className="flex text-[#FFB020]">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-3.5 h-3.5 fill-[#FFB020] text-[#FFB020]"
                  />
                ))}
              </div>
              <span className="font-bold text-white">4.9 / 5.0</span>
              <span className="text-[10.5px] text-slate-400 font-normal">
                (120+ Brands Delivered)
              </span>
            </div>
            <span className="text-white/20 hidden sm:inline">•</span>
            <div className="flex items-center gap-1.5 font-semibold text-slate-200">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>100% Code &amp; IP Ownership</span>
            </div>
            <span className="text-white/20 hidden sm:inline">•</span>
            <div className="flex items-center gap-1.5 font-semibold text-slate-200">
              <Clock className="w-3.5 h-3.5 text-[#FFB020]" />
              <span>&lt; 24h Turnaround</span>
            </div>
            <span className="text-white/20 hidden sm:inline">•</span>
            <div className="flex items-center gap-1.5 font-semibold text-slate-200">
              <Zap className="w-3.5 h-3.5 text-emerald-400" />
              <span>&lt; 0.8s LCP SLA</span>
            </div>
          </div>
        </div>

        {/* ================================================================ */}
        {/* 3. INTERACTIVE DIGITAL ENGINEERING STUDIO CONSOLE (ZERO IMAGES!)  */}
        {/* ================================================================ */}
        <div className="pt-2 max-w-5xl mx-auto space-y-3">
          {/* Interactive Feature Switcher Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {[
              { id: "vitals", label: "⚡ Sub-Second Speed & Vitals", kicker: "< 0.8s LCP Benchmark" },
              { id: "design", label: "🎨 Bespoke Figma Tokens", kicker: "100% Custom UI/UX" },
              { id: "stack", label: "🚀 Next.js 16 Full-Stack", kicker: "Zero Theme Bloat" },
              { id: "ownership", label: "🛡️ 100% Code & IP Ownership", kicker: "Day-One Repo Access" },
            ].map((tab) => {
              const isSelected = activeTab === tab.id;

              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id as ConsoleTab)}
                  className={cn(
                    "px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer flex items-center gap-1.5 select-none",
                    isSelected
                      ? "bg-gradient-to-r from-[#FFB020] to-[#E68A00] text-[#060B22] font-black shadow-lg shadow-[#FFB020]/20 scale-102"
                      : "bg-white/10 text-slate-300 border border-white/15 hover:border-white/30 hover:text-white"
                  )}
                >
                  <span>{tab.label}</span>
                  <span
                    className={cn(
                      "text-[10px] font-mono px-1.5 py-0.2 rounded-md hidden md:inline-block",
                      isSelected
                        ? "bg-[#060B22]/20 text-[#060B22]"
                        : "bg-white/10 text-slate-400"
                    )}
                  >
                    {tab.kicker}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Architectural Studio Stage (Mac-Style Terminal & Visual Telemetry) */}
          <div className="relative rounded-2xl sm:rounded-3xl bg-[#081232]/90 backdrop-blur-xl border border-[#FFB020]/30 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.6)] overflow-hidden text-left">
            {/* Minimalist macOS Browser Top Bar */}
            <div className="h-10 bg-[#060B22]/95 px-4 flex items-center justify-between border-b border-white/10">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
              </div>

              {/* Centered Minimalist Staging URL */}
              <div className="flex items-center gap-1.5 px-3 sm:px-4 py-1 rounded-md bg-white/10 border border-white/15 text-[10.5px] sm:text-xs text-slate-200 font-mono">
                <Lock className="w-3 h-3 text-emerald-400 shrink-0" />
                <span>https://engineering.hiredesimarketer.com/live-architecture</span>
              </div>

              {/* Right Performance Telemetry Badge */}
              <div className="flex items-center gap-2 text-[10.5px] font-mono text-emerald-400 font-bold">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="hidden sm:inline">60 FPS · Edge Validated</span>
              </div>
            </div>

            {/* TAB CONTENT: 100% CODE-DRIVEN, ZERO STATIC IMAGES */}
            <div className="p-5 sm:p-7 min-h-[320px] sm:min-h-[340px] flex flex-col justify-between">
              {/* TAB 1: SUB-SECOND CORE WEB VITALS BENCHMARK */}
              {activeTab === "vitals" && (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                  {/* Left Column: Real-time PageSpeed Gauge */}
                  <div className="lg:col-span-5 bg-white/5 border border-white/10 rounded-2xl p-5 flex flex-col items-center justify-center text-center space-y-3">
                    <div className="relative w-28 h-28 flex items-center justify-center">
                      <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                        <circle
                          cx="50"
                          cy="50"
                          r="42"
                          stroke="rgba(255,255,255,0.1)"
                          strokeWidth="8"
                          fill="none"
                        />
                        <circle
                          cx="50"
                          cy="50"
                          r="42"
                          stroke="#10B981"
                          strokeWidth="8"
                          strokeDasharray="264"
                          strokeDashoffset="10"
                          strokeLinecap="round"
                          fill="none"
                          className="transition-all duration-1000"
                        />
                      </svg>
                      <div className="absolute flex flex-col items-center">
                        <span className="text-3xl font-display font-black text-white">99</span>
                        <span className="text-[10px] font-mono text-emerald-400 font-bold uppercase">Grade A+</span>
                      </div>
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white">Core Web Vitals Audit Pass</div>
                      <p className="text-xs text-slate-400 mt-0.5">Google Lighthouse Certified Architecture</p>
                    </div>
                  </div>

                  {/* Right Column: Key Speed Benchmarks */}
                  <div className="lg:col-span-7 space-y-4">
                    <div className="grid grid-cols-3 gap-3">
                      <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                        <div className="text-[10px] font-mono text-slate-400 uppercase">LCP Speed</div>
                        <div className="text-lg font-black text-[#FFB020] mt-0.5">&lt; 0.68s</div>
                        <div className="text-[10px] text-emerald-400 font-semibold">Sub-Second Paint</div>
                      </div>
                      <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                        <div className="text-[10px] font-mono text-slate-400 uppercase">INP / FID</div>
                        <div className="text-lg font-black text-emerald-400 mt-0.5">12ms</div>
                        <div className="text-[10px] text-slate-400 font-semibold">Instant Input</div>
                      </div>
                      <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                        <div className="text-[10px] font-mono text-slate-400 uppercase">CLS Shift</div>
                        <div className="text-lg font-black text-white mt-0.5">0.00</div>
                        <div className="text-[10px] text-emerald-400 font-semibold">Zero Jitter</div>
                      </div>
                    </div>

                    {/* Speed Comparison Bars */}
                    <div className="space-y-2 p-3.5 rounded-xl bg-black/40 border border-white/10 text-xs">
                      <div className="flex items-center justify-between text-[11px]">
                        <span className="text-white font-bold flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-emerald-400" />
                          HDM Bespoke Next.js Engine
                        </span>
                        <span className="text-emerald-400 font-mono font-bold">0.68s (100/100)</span>
                      </div>
                      <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden">
                        <div className="w-[18%] h-full bg-gradient-to-r from-emerald-500 to-[#FFB020] rounded-full" />
                      </div>

                      <div className="flex items-center justify-between text-[11px] pt-1">
                        <span className="text-slate-400 font-medium">Traditional Generic CMS Theme</span>
                        <span className="text-amber-400 font-mono">4.85s (42/100)</span>
                      </div>
                      <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden">
                        <div className="w-[85%] h-full bg-amber-500/70 rounded-full" />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 2: BESPOKE FIGMA DESIGN SYSTEM */}
              {activeTab === "design" && (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                  <div className="lg:col-span-6 space-y-3">
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#FFB020]/20 text-[#FFB020] text-[10.5px] font-mono font-bold uppercase tracking-wider border border-[#FFB020]/30">
                      <Layers className="w-3 h-3 text-[#FFB020]" />
                      Atomic Figma Design Tokens
                    </div>
                    <h3 className="font-display font-black text-xl sm:text-2xl text-white tracking-tight">
                      Crafted Specifically for Your Brand Identity
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                      Zero pre-made marketplace templates. We construct custom design libraries with fluid 12-column responsive layouts, interactive prototype states, and accessible WCAG 2.1 AA contrast.
                    </p>
                    <div className="grid grid-cols-2 gap-2 pt-1 text-xs">
                      <div className="flex items-center gap-1.5 text-slate-200">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#FFB020] shrink-0" />
                        <span>Interactive Prototype Handover</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-slate-200">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#FFB020] shrink-0" />
                        <span>48+ Reusable UI Components</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-slate-200">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#FFB020] shrink-0" />
                        <span>WCAG 2.1 AA Compliant</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-slate-200">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#FFB020] shrink-0" />
                        <span>Figma-to-Code Sync</span>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Visual Design Token Palette */}
                  <div className="lg:col-span-6 bg-white/5 border border-white/10 rounded-2xl p-5 space-y-3">
                    <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider font-bold">
                      Live Token Architecture Preview:
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      <div className="p-2.5 rounded-xl bg-[#060B22] border border-white/15 text-center">
                        <div className="w-5 h-5 rounded-md bg-[#060B22] border border-white/30 mx-auto mb-1.5" />
                        <div className="text-[10px] font-mono text-white font-bold">#060B22</div>
                        <div className="text-[9px] text-slate-400">Midnight</div>
                      </div>
                      <div className="p-2.5 rounded-xl bg-white/10 border border-white/15 text-center">
                        <div className="w-5 h-5 rounded-md bg-[#FFB020] mx-auto mb-1.5 shadow-xs" />
                        <div className="text-[10px] font-mono text-white font-bold">#FFB020</div>
                        <div className="text-[9px] text-[#FFB020]">Signature Gold</div>
                      </div>
                      <div className="p-2.5 rounded-xl bg-white/10 border border-white/15 text-center">
                        <div className="w-5 h-5 rounded-md bg-[#38BDF8] mx-auto mb-1.5" />
                        <div className="text-[10px] font-mono text-white font-bold">#38BDF8</div>
                        <div className="text-[9px] text-sky-300">Edge Cyan</div>
                      </div>
                      <div className="p-2.5 rounded-xl bg-white/10 border border-white/15 text-center">
                        <div className="w-5 h-5 rounded-md bg-[#FAF8F5] mx-auto mb-1.5" />
                        <div className="text-[10px] font-mono text-white font-bold">#FAF8F5</div>
                        <div className="text-[9px] text-slate-300">Ivory Canvas</div>
                      </div>
                    </div>
                    <div className="p-3 rounded-xl bg-black/40 border border-white/10 text-xs font-mono text-slate-300 space-y-1">
                      <div className="text-[#FFB020]">// Figma Variables &amp; Tailwind Config</div>
                      <div className="text-slate-400 font-mono text-[11px] truncate">
                        const theme = &#123; radius: &apos;16px&apos;, typography: &apos;Satoshi + Inter&apos;, vitals: &apos;&lt;0.8s&apos; &#125;;
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 3: MODERN FULL-STACK STACK */}
              {activeTab === "stack" && (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                  <div className="lg:col-span-6 space-y-3">
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-sky-500/20 text-sky-400 text-[10.5px] font-mono font-bold uppercase tracking-wider border border-sky-500/30">
                      <Cpu className="w-3 h-3 text-sky-400" />
                      Zero Technical Debt
                    </div>
                    <h3 className="font-display font-black text-xl sm:text-2xl text-white tracking-tight">
                      Enterprise Frameworks &amp; Edge Streaming
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                      We engineer with Next.js 16, React 19, and Tailwind CSS. Zero slow plugin bloat or insecure page builders—delivering blistering page loads that maximize Google SEO rankings.
                    </p>
                    <div className="grid grid-cols-2 gap-2 pt-1 text-xs">
                      <div className="flex items-center gap-1.5 text-slate-200">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>React 19 Server Components</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-slate-200">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>Zero Runtime CSS Bloat</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-slate-200">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>Edge Global CDN Caching</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-slate-200">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>Shopify Plus / Headless APIs</span>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Stack Architecture Cards */}
                  <div className="lg:col-span-6 grid grid-cols-2 gap-2.5">
                    <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 space-y-1">
                      <div className="text-xs font-bold text-white flex items-center gap-1.5">
                        <span className="text-[#FFB020]">⚡</span> Next.js 16 App Router
                      </div>
                      <p className="text-[11px] text-slate-400">Turbopack, streaming SSR, sub-second paints</p>
                    </div>
                    <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 space-y-1">
                      <div className="text-xs font-bold text-white flex items-center gap-1.5">
                        <span className="text-sky-400">🎨</span> Tailwind CSS Engine
                      </div>
                      <p className="text-[11px] text-slate-400">Atomic utility-first styling with zero runtime delay</p>
                    </div>
                    <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 space-y-1">
                      <div className="text-xs font-bold text-white flex items-center gap-1.5">
                        <span className="text-emerald-400">🛍️</span> Shopify Plus / CMS
                      </div>
                      <p className="text-[11px] text-slate-400">Custom headless liquid storefronts &amp; Gutenberg</p>
                    </div>
                    <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 space-y-1">
                      <div className="text-xs font-bold text-white flex items-center gap-1.5">
                        <span className="text-indigo-400">🛡️</span> Cloudflare Edge
                      </div>
                      <p className="text-[11px] text-slate-400">Enterprise DDoS safeguard &amp; instant asset CDN</p>
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 4: 100% CODE & IP OWNERSHIP */}
              {activeTab === "ownership" && (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                  <div className="lg:col-span-6 space-y-3">
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-500/20 text-emerald-400 text-[10.5px] font-mono font-bold uppercase tracking-wider border border-emerald-500/30">
                      <GitBranch className="w-3 h-3 text-emerald-400" />
                      Day-One Client Ownership
                    </div>
                    <h3 className="font-display font-black text-xl sm:text-2xl text-white tracking-tight">
                      100% Repository &amp; Intellectual Property Handover
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                      Zero proprietary vendor lock-in. You receive full administrative rights, source repository access on GitHub/GitLab, and complete environment documentation upon kickoff.
                    </p>
                    <div className="grid grid-cols-2 gap-2 pt-1 text-xs">
                      <div className="flex items-center gap-1.5 text-slate-200">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>Direct GitHub / GitLab Commits</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-slate-200">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>Zero Proprietary Code Lock-In</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-slate-200">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>Full Admin &amp; DNS Control</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-slate-200">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>Loom Video Walkthroughs</span>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Git Commit Terminal Stream */}
                  <div className="lg:col-span-6 bg-black/40 border border-white/10 rounded-2xl p-4 font-mono text-xs space-y-2">
                    <div className="flex items-center justify-between pb-2 border-b border-white/10 text-[11px] text-slate-400">
                      <span className="flex items-center gap-1.5 text-emerald-400 font-bold">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        git stream: main (client repo)
                      </span>
                      <span>Verified Commit History</span>
                    </div>
                    <div className="space-y-1.5 text-[11px]">
                      <div className="text-slate-300 flex items-center gap-2">
                        <span className="text-[#FFB020]">commit c4e912a</span>
                        <span className="text-slate-400 truncate">feat(vitals): speed tuned to 0.68s LCP</span>
                      </div>
                      <div className="text-slate-300 flex items-center gap-2">
                        <span className="text-[#FFB020]">commit b817da3</span>
                        <span className="text-slate-400 truncate">feat(figma): sync responsive design tokens</span>
                      </div>
                      <div className="text-slate-300 flex items-center gap-2">
                        <span className="text-[#FFB020]">commit a190f84</span>
                        <span className="text-slate-400 truncate">chore(audit): automated 100/100 Lighthouse pass</span>
                      </div>
                      <div className="text-slate-300 flex items-center gap-2">
                        <span className="text-emerald-400">origin/main</span>
                        <span className="text-slate-400 truncate">100% owned &amp; deployed to client infrastructure</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Integrated Architectural Telemetry Console Footer */}
              <div className="pt-4 mt-4 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-slate-300">
                  <div className="flex items-center gap-1.5 text-white font-bold">
                    <span className="text-[#FFB020] font-mono">01</span>
                    <span>Live Architecture Standard</span>
                  </div>
                  <span className="text-white/20 hidden sm:inline">|</span>
                  <span className="text-slate-400 font-mono text-[11px]">
                    Next.js 16 + Figma Design Tokens
                  </span>
                  <span className="text-white/20 hidden sm:inline">|</span>
                  <span className="text-emerald-400 font-mono font-bold text-[11px] flex items-center gap-1">
                    <Zap className="w-3 h-3 text-emerald-400" />
                    <span>&lt; 0.8s LCP SLA</span>
                  </span>
                </div>

                <StarBorder
                  as={Link}
                  href="/get-a-quote"
                  className="py-2 px-4 rounded-lg text-[11px] font-bold uppercase tracking-wider flex items-center gap-1 shrink-0 self-end sm:self-auto group"
                  radius={8}
                  color="#FFF8E7"
                  trailColor="#FFB020"
                  backgroundColor="rgba(255, 176, 32, 0.15)"
                  textColor="#FFB020"
                  borderColor="rgba(255, 176, 32, 0.4)"
                  sparkle={true}
                  glow={0.7}
                >
                  <span>Discuss Your Project Scope</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </StarBorder>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

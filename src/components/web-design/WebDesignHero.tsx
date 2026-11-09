"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Palette,
  Zap,
  ShoppingBag,
  Users,
  Star,
  ShieldCheck,
  Clock,
  Activity,
  Laptop,
  Smartphone,
  Sparkles,
  Layers,
  Code2,
  CheckCircle2,
  Gauge,
  Monitor,
} from "lucide-react";
import { cn } from "@/lib/utils";

export function WebDesignHero() {
  const [activeTab, setActiveTab] = useState<"architecture" | "performance" | "responsive">("architecture");
  const [activeComponent, setActiveComponent] = useState<number>(0);
  const [autoProgress, setAutoProgress] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);

  // Smooth auto-cycle between interactive studio tabs with hover pause
  useEffect(() => {
    if (isPaused) return;

    const intervalMs = 60;
    const durationMs = 6000;
    const step = (intervalMs / durationMs) * 100;

    const timer = setInterval(() => {
      setAutoProgress((prev) => {
        if (prev >= 100) {
          setActiveTab((curr) => {
            if (curr === "architecture") return "performance";
            if (curr === "performance") return "responsive";
            return "architecture";
          });
          return 0;
        }
        return prev + step;
      });
    }, intervalMs);

    return () => clearInterval(timer);
  }, [isPaused, activeTab]);

  const handleSelectTab = (tab: "architecture" | "performance" | "responsive") => {
    setActiveTab(tab);
    setAutoProgress(0);
  };

  return (
    <section className="relative overflow-hidden w-full min-h-auto lg:min-h-[calc(100vh-4.5rem)] flex flex-col justify-center py-4 sm:py-6 lg:py-5 bg-[#F6F4EE] bg-[radial-gradient(#E2DBD0_1px,transparent_1px)] [background-size:24px_24px] border-b border-[#E2DBD0]">
      {/* Luxury Diffuse Ambient Glows */}
      <div className="absolute top-8 left-6 sm:left-24 w-72 sm:w-[520px] h-72 sm:h-[520px] bg-[#FFB020]/15 rounded-full blur-[110px] pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-8 right-6 sm:right-32 w-64 sm:w-[460px] h-64 sm:h-[460px] bg-[#060B22]/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 xl:gap-10 items-center">
          {/* ================================================================ */}
          {/* LEFT COLUMN (6 cols): Clear, Uncluttered Authority & Conversion  */}
          {/* ================================================================ */}
          <div className="lg:col-span-6 space-y-3.5 sm:space-y-4 text-left">
            {/* 1. Live Overlap Status Kicker */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md border border-[#E2DBD0] shadow-2xs">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-[10px] sm:text-[10.5px] font-bold text-[#060B22] uppercase tracking-wider">
                Enterprise Web Engineering &amp; Bespoke UI/UX
              </span>
              <span className="text-slate-300 hidden sm:inline">|</span>
              <span className="text-[9.5px] sm:text-[10px] font-semibold text-slate-500 hidden sm:inline">
                Open for Q2/Q3 Projects
              </span>
            </div>

            {/* 2. Authority Headline & Concise Approved Copy */}
            <div className="space-y-2">
              <h1 className="font-display font-black text-2xl sm:text-3xl lg:text-[36px] xl:text-[40px] text-[#060B22] tracking-tight leading-[1.14]">
                Your Website Should Do More Than Look Good.{" "}
                <span className="bg-gradient-to-r from-[#B87A00] via-[#FFB020] to-[#E68A00] bg-clip-text text-transparent">
                  It Should Grow Your Business.
                </span>
              </h1>

              <div className="space-y-1.5 text-xs sm:text-[13px] text-slate-700 leading-relaxed font-normal max-w-xl">
                <p className="font-bold text-slate-900 text-[12.5px] sm:text-[13px]">
                  Professional Web Design and Development Services for Growing Businesses
                </p>
                <p>
                  If you are searching for web design and development services to build or upgrade your business website, Hire Desi Marketer offers web design and development services that blend simple design ideas, up-to-date development tools and user-friendly experiences to make websites that fit your business goals.
                </p>
                <p className="text-slate-600 text-[11.5px] sm:text-xs">
                  From custom website design and website redesign services to ecommerce website development and CMS development, our team offers scalable and user-friendly website solutions. Whether you need a website or want to hire experienced web developers in India, we help turn your requirements into a good digital experience.
                </p>
              </div>
            </div>

            {/* 3. Compact 4-Pillar Feature Ribbon */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-0.5">
              <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-white/95 border border-[#E2DBD0] text-[11px] font-bold text-[#060B22] shadow-2xs hover:border-[#FFB020] transition-colors">
                <Palette className="w-3.5 h-3.5 text-[#B87A00] shrink-0" />
                <span className="truncate">Bespoke UI/UX</span>
              </div>
              <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-white/95 border border-[#E2DBD0] text-[11px] font-bold text-[#060B22] shadow-2xs hover:border-[#FFB020] transition-colors">
                <Zap className="w-3.5 h-3.5 text-[#B87A00] shrink-0" />
                <span className="truncate">99+ Speed</span>
              </div>
              <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-white/95 border border-[#E2DBD0] text-[11px] font-bold text-[#060B22] shadow-2xs hover:border-[#FFB020] transition-colors">
                <ShoppingBag className="w-3.5 h-3.5 text-[#B87A00] shrink-0" />
                <span className="truncate">CMS &amp; E-Com</span>
              </div>
              <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-white/95 border border-[#E2DBD0] text-[11px] font-bold text-[#060B22] shadow-2xs hover:border-[#FFB020] transition-colors">
                <Users className="w-3.5 h-3.5 text-[#B87A00] shrink-0" />
                <span className="truncate">Dedicated Devs</span>
              </div>
            </div>

            {/* 4. Action CTAs — All Navigate to Dedicated Dual-Pane Quote Page */}
            <div className="pt-0.5 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5">
              <Link
                href="/get-a-quote"
                className="btn-luxury-gold btn-shimmer py-3 px-6 rounded-xl text-xs font-black uppercase tracking-wider flex items-center justify-center gap-2 shadow-md hover:shadow-[0_0_25px_rgba(255,176,32,0.4)] transition-all cursor-pointer text-center group"
              >
                <span>Let's Build Your Website</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <a
                href="#work"
                className="btn-luxury-navy py-3 px-5 rounded-xl text-xs font-bold flex items-center justify-center gap-2 shadow-2xs border border-slate-700 hover:border-[#FFB020] transition-colors cursor-pointer text-center"
              >
                <span>Explore Our Work</span>
              </a>
            </div>

            {/* 5. Scoping Pledge */}
            <div className="flex items-center gap-2 text-xs text-slate-600">
              <Zap className="w-3.5 h-3.5 text-[#B87A00] shrink-0" />
              <span>
                Need a tailored proposal &amp; roadmap within 24 hours?{" "}
                <Link
                  href="/get-a-quote"
                  className="font-bold text-[#060B22] hover:text-[#B87A00] underline underline-offset-2 transition-colors cursor-pointer"
                >
                  Request a Free Consultation →
                </Link>
              </span>
            </div>

            {/* 6. Social Proof Strip */}
            <div className="pt-2 border-t border-[#E2DBD0] flex flex-wrap items-center gap-3 sm:gap-4 text-[11px] text-slate-600">
              <div className="flex items-center gap-1.5">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-3 h-3 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>
                <span className="font-bold text-[#060B22]">4.9 / 5.0</span>
                <span className="text-[10px] text-slate-500 font-normal">
                  (120+ Brands Delivered)
                </span>
              </div>
              <span className="text-slate-300 hidden sm:inline">•</span>
              <div className="flex items-center gap-1.5 font-semibold text-slate-700">
                <ShieldCheck className="w-3 h-3 text-emerald-600" />
                <span>100% Code Ownership</span>
              </div>
              <span className="text-slate-300 hidden sm:inline">•</span>
              <div className="flex items-center gap-1.5 font-semibold text-slate-700">
                <Clock className="w-3 h-3 text-[#B87A00]" />
                <span>&lt; 24h Turnaround</span>
              </div>
            </div>
          </div>

          {/* ================================================================ */}
          {/* RIGHT COLUMN (6 cols): Bespoke Interactive Canvas (ZERO Text on Img)*/}
          {/* ================================================================ */}
          <div
            className="lg:col-span-6 relative mt-4 lg:mt-0 space-y-2.5"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Interactive Mode Switcher Header */}
            <div className="flex items-center justify-between gap-1.5">
              <div className="flex items-center gap-1 bg-white/90 backdrop-blur-md p-1 rounded-xl border border-[#E2DBD0] shadow-2xs overflow-x-auto no-scrollbar">
                <button
                  type="button"
                  onClick={() => handleSelectTab("architecture")}
                  className={cn(
                    "relative px-2.5 sm:px-3 py-1 rounded-lg text-[10px] sm:text-[11px] font-bold transition-all duration-200 cursor-pointer select-none shrink-0 overflow-hidden flex items-center gap-1.5",
                    activeTab === "architecture"
                      ? "bg-[#060B22] text-[#FFB020] shadow-xs"
                      : "text-slate-600 hover:text-[#060B22] hover:bg-slate-100"
                  )}
                >
                  {activeTab === "architecture" && !isPaused && (
                    <span
                      className="absolute bottom-0 left-0 h-[2px] bg-[#FFB020] transition-all duration-75"
                      style={{ width: `${autoProgress}%` }}
                    />
                  )}
                  <Layers className="w-3 h-3" />
                  <span>UI Architecture</span>
                </button>

                <button
                  type="button"
                  onClick={() => handleSelectTab("performance")}
                  className={cn(
                    "relative px-2.5 sm:px-3 py-1 rounded-lg text-[10px] sm:text-[11px] font-bold transition-all duration-200 cursor-pointer select-none shrink-0 overflow-hidden flex items-center gap-1.5",
                    activeTab === "performance"
                      ? "bg-[#060B22] text-[#FFB020] shadow-xs"
                      : "text-slate-600 hover:text-[#060B22] hover:bg-slate-100"
                  )}
                >
                  {activeTab === "performance" && !isPaused && (
                    <span
                      className="absolute bottom-0 left-0 h-[2px] bg-[#FFB020] transition-all duration-75"
                      style={{ width: `${autoProgress}%` }}
                    />
                  )}
                  <Gauge className="w-3 h-3" />
                  <span>100/100 Speed</span>
                </button>

                <button
                  type="button"
                  onClick={() => handleSelectTab("responsive")}
                  className={cn(
                    "relative px-2.5 sm:px-3 py-1 rounded-lg text-[10px] sm:text-[11px] font-bold transition-all duration-200 cursor-pointer select-none shrink-0 overflow-hidden flex items-center gap-1.5",
                    activeTab === "responsive"
                      ? "bg-[#060B22] text-[#FFB020] shadow-xs"
                      : "text-slate-600 hover:text-[#060B22] hover:bg-slate-100"
                  )}
                >
                  {activeTab === "responsive" && !isPaused && (
                    <span
                      className="absolute bottom-0 left-0 h-[2px] bg-[#FFB020] transition-all duration-75"
                      style={{ width: `${autoProgress}%` }}
                    />
                  )}
                  <Smartphone className="w-3 h-3" />
                  <span>Responsive Grid</span>
                </button>
              </div>

              {/* Viewport Dimension Pill */}
              <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-white/90 backdrop-blur-md border border-[#E2DBD0] text-[10px] font-mono font-bold text-slate-500 shadow-2xs shrink-0">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>60fps Ready</span>
              </div>
            </div>

            {/* Central Interactive Studio Canvas — ZERO TEXT OVERLAYS / ZERO SENTENCES IN IMAGES */}
            <div className="relative rounded-2xl sm:rounded-3xl bg-[#060B22] border border-[#E2DBD0] shadow-[0_24px_50px_-12px_rgba(6,11,34,0.18)] overflow-hidden transition-all duration-500">
              {/* Studio Window Chrome */}
              <div className="h-8 bg-[#040817] px-3.5 flex items-center justify-between border-b border-white/10 text-white z-20">
                <div className="flex items-center gap-1.5 shrink-0">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                </div>
                <div className="px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-[9px] font-mono text-slate-300">
                  hd-engine://architecture.v16
                </div>
                <div className="flex items-center gap-1 text-[9px] font-mono text-[#FFB020]">
                  <span>LIVE</span>
                </div>
              </div>

              {/* Dynamic Viewport Stage */}
              <div className="relative aspect-[16/10] sm:aspect-[16/9.6] w-full p-3 sm:p-5 flex flex-col justify-between overflow-hidden bg-gradient-to-br from-[#060B22] via-[#0B1536] to-[#040817]">
                {/* Mode 1: Interactive UI Architecture */}
                {activeTab === "architecture" && (
                  <div className="h-full flex flex-col justify-between space-y-3 animate-content-fade">
                    {/* Simulated Clean Navigation Bar Wireframe */}
                    <div className="h-7 rounded-xl bg-white/5 border border-white/10 px-3 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-md bg-[#FFB020] flex items-center justify-center font-black text-[9px] text-[#060B22]">
                          H
                        </div>
                        <div className="h-2 w-16 bg-white/20 rounded-full" />
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-10 bg-white/15 rounded-full" />
                        <div className="h-2 w-10 bg-white/15 rounded-full" />
                        <div className="h-4 w-14 bg-[#FFB020] rounded-md" />
                      </div>
                    </div>

                    {/* Clean Hero Layout Abstract Wireframe */}
                    <div className="flex-1 rounded-2xl bg-gradient-to-r from-white/[0.07] to-white/[0.02] border border-white/10 p-3.5 flex flex-col justify-between relative overflow-hidden group/canvas">
                      <div className="space-y-1.5 max-w-[200px] sm:max-w-[260px]">
                        <div className="h-2.5 w-32 bg-[#FFB020]/80 rounded-full" />
                        <div className="h-4 w-44 bg-white/90 rounded-md" />
                        <div className="h-2 w-36 bg-white/30 rounded-full" />
                      </div>

                      {/* 3 Interactive Component Cards (Click or hover to highlight) */}
                      <div className="grid grid-cols-3 gap-2 pt-2">
                        {[
                          { icon: <Zap className="w-3.5 h-3.5 text-[#FFB020]" />, metric: "< 0.8s", tag: "Speed" },
                          { icon: <ShoppingBag className="w-3.5 h-3.5 text-emerald-400" />, metric: "99.9%", tag: "Uptime" },
                          { icon: <Code2 className="w-3.5 h-3.5 text-cyan-400" />, metric: "Next.js", tag: "Stack" },
                        ].map((card, idx) => (
                          <div
                            key={idx}
                            onMouseEnter={() => setActiveComponent(idx)}
                            className={cn(
                              "p-2 rounded-xl transition-all duration-200 cursor-pointer text-left border",
                              activeComponent === idx
                                ? "bg-white/15 border-[#FFB020] shadow-md -translate-y-0.5"
                                : "bg-white/5 border-white/10 hover:border-white/30"
                            )}
                          >
                            <div className="mb-1">{card.icon}</div>
                            <div className="text-[11px] font-black font-mono text-white leading-none">
                              {card.metric}
                            </div>
                            <div className="text-[8.5px] uppercase tracking-wider text-slate-400 font-bold mt-0.5">
                              {card.tag}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Mode 2: Live Performance Benchmark (100/100 Core Web Vitals) */}
                {activeTab === "performance" && (
                  <div className="h-full flex flex-col justify-between space-y-3 animate-content-fade">
                    <div className="grid grid-cols-3 gap-2.5 h-full items-center">
                      {/* Metric 1: 100/100 Gauge */}
                      <div className="p-3 rounded-2xl bg-white/5 border border-white/10 flex flex-col items-center justify-center text-center h-full">
                        <div className="relative w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center mb-1">
                          <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                            <path
                              className="text-white/10"
                              strokeWidth="3.5"
                              stroke="currentColor"
                              fill="none"
                              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                            />
                            <path
                              className="text-emerald-400"
                              strokeDasharray="100, 100"
                              strokeWidth="3.5"
                              strokeLinecap="round"
                              stroke="currentColor"
                              fill="none"
                              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                            />
                          </svg>
                          <span className="absolute font-mono font-black text-base sm:text-lg text-white">
                            100
                          </span>
                        </div>
                        <span className="text-[10px] font-mono font-bold text-emerald-400 uppercase tracking-wider">
                          Core Web Vitals
                        </span>
                      </div>

                      {/* Metric 2: LCP Load Time */}
                      <div className="p-3 rounded-2xl bg-white/5 border border-white/10 flex flex-col items-center justify-center text-center h-full">
                        <Zap className="w-6 h-6 text-[#FFB020] mb-2 animate-bounce" />
                        <div className="text-xl sm:text-2xl font-mono font-black text-white leading-none">
                          0.58s
                        </div>
                        <span className="text-[10px] font-mono font-bold text-slate-300 uppercase tracking-wider mt-1">
                          LCP Benchmark
                        </span>
                      </div>

                      {/* Metric 3: Layout Shift */}
                      <div className="p-3 rounded-2xl bg-white/5 border border-white/10 flex flex-col items-center justify-center text-center h-full">
                        <CheckCircle2 className="w-6 h-6 text-cyan-400 mb-2" />
                        <div className="text-xl sm:text-2xl font-mono font-black text-white leading-none">
                          0.00
                        </div>
                        <span className="text-[10px] font-mono font-bold text-slate-300 uppercase tracking-wider mt-1">
                          Zero CLS Shift
                        </span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Mode 3: Responsive Multi-Viewport Matrix */}
                {activeTab === "responsive" && (
                  <div className="h-full flex items-center justify-center gap-3 animate-content-fade">
                    {/* Desktop Viewport Mini-Canvas */}
                    <div className="flex-1 rounded-xl bg-white/10 border border-white/15 p-2 h-4/5 flex flex-col justify-between">
                      <div className="h-3 bg-white/15 rounded flex items-center px-1 gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-rose-400" />
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      </div>
                      <div className="space-y-1 my-auto">
                        <div className="h-2 w-12 bg-[#FFB020] rounded" />
                        <div className="h-2 w-20 bg-white/40 rounded" />
                      </div>
                      <div className="grid grid-cols-3 gap-1">
                        <div className="h-6 bg-white/10 rounded" />
                        <div className="h-6 bg-white/10 rounded" />
                        <div className="h-6 bg-white/10 rounded" />
                      </div>
                    </div>

                    {/* Smartphone Viewport Mini-Canvas */}
                    <div className="w-20 sm:w-24 rounded-2xl bg-slate-950 border-2 border-slate-700 p-1.5 h-full flex flex-col justify-between shadow-xl">
                      <div className="w-5 h-1 bg-white/30 rounded-full mx-auto" />
                      <div className="space-y-1.5 my-auto">
                        <div className="h-2 w-10 bg-[#FFB020] rounded mx-auto" />
                        <div className="h-1.5 w-14 bg-white/40 rounded mx-auto" />
                        <div className="h-10 w-full bg-white/10 rounded" />
                      </div>
                      <div className="w-6 h-0.5 bg-white/20 rounded-full mx-auto" />
                    </div>
                  </div>
                )}
              </div>

              {/* Dedicated Showcase Footer Bar */}
              <div className="p-3 sm:p-3.5 bg-white border-t border-[#E2DBD0] flex items-center justify-between gap-2 text-left">
                <div className="min-w-0 space-y-0.5">
                  <div className="flex items-center gap-1.5">
                    <span className="text-[9px] uppercase font-bold tracking-wider text-[#B87A00] bg-[#FFB020]/15 px-2 py-0.5 rounded-md border border-[#FFB020]/30">
                      Engineering Live Studio
                    </span>
                    <span className="text-xs font-bold text-[#060B22]">
                      Next.js 16 + React 19
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-600 font-medium truncate max-w-xs sm:max-w-md">
                    Sub-second edge caching &amp; fluid responsive viewports
                  </p>
                </div>

                <div className="flex items-center gap-1.5 shrink-0">
                  <div className="flex items-center gap-1.5 bg-[#060B22] text-white px-2.5 py-1 rounded-lg border border-slate-800">
                    <Activity className="w-3 h-3 text-emerald-400 animate-pulse" />
                    <span className="text-[10px] font-mono font-bold text-emerald-300">
                      100/100 Core Web Vitals
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

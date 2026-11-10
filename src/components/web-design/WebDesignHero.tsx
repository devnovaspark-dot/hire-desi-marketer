"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
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
  Lock,
  Activity,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import { cn } from "@/lib/utils";

export function WebDesignHero() {
  // Mouse coordinates for 3D perspective tilt
  const [mousePos, setMousePos] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  return (
    <section className="relative overflow-hidden w-full min-h-auto lg:min-h-[calc(100vh-4.5rem)] flex flex-col justify-center py-8 sm:py-12 lg:py-14 bg-[#F6F4EE] bg-[radial-gradient(#E2DBD0_1px,transparent_1px)] [background-size:24px_24px] border-b border-[#E2DBD0] select-none">
      {/* Luxury Diffuse Ambient Glows */}
      <div className="absolute top-10 left-6 sm:left-24 w-72 sm:w-[560px] h-72 sm:h-[560px] bg-[#FFB020]/15 rounded-full blur-[120px] pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-10 right-6 sm:right-32 w-64 sm:w-[500px] h-64 sm:h-[500px] bg-[#060B22]/10 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-14 items-center">
          {/* ================================================================ */}
          {/* LEFT: Clean Editorial Typography & Direct Conversion             */}
          {/* ================================================================ */}
          <div className="lg:col-span-6 space-y-6 text-left">
            {/* Live Agency Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-[#E2DBD0] shadow-2xs">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-[10.5px] sm:text-[11px] font-black text-[#060B22] uppercase tracking-wider">
                Enterprise Web Engineering &amp; Bespoke UI/UX
              </span>
              <span className="text-slate-300 hidden sm:inline">|</span>
              <span className="text-[10px] font-semibold text-slate-500 hidden sm:inline">
                Open for Q2/Q3 Projects
              </span>
            </div>

            {/* Editorial Headline */}
            <div className="space-y-3">
              <h1 className="font-display font-black text-3xl sm:text-5xl lg:text-[44px] xl:text-[50px] text-[#060B22] tracking-tight leading-[1.08]">
                Your Website Should Do More Than Look Good.{" "}
                <span className="bg-gradient-to-r from-[#B87A00] via-[#FFB020] to-[#E68A00] bg-clip-text text-transparent block sm:inline">
                  It Should Grow Your Business.
                </span>
              </h1>

              <div className="space-y-2 text-xs sm:text-sm text-slate-700 leading-relaxed font-normal max-w-xl">
                <p className="font-bold text-[#060B22] text-sm sm:text-base">
                  Professional Web Design and Development Services for Growing Businesses
                </p>
                <p className="text-slate-600 text-xs sm:text-[13.5px]">
                  We design and develop high-converting digital experiences that blend bespoke design with modern full-stack development to turn your website into a powerful business asset.
                </p>
              </div>
            </div>

            {/* 4 Feature Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1">
              <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/95 border border-[#E2DBD0] text-[11px] font-bold text-[#060B22] shadow-2xs">
                <Palette className="w-3.5 h-3.5 text-[#B87A00] shrink-0" />
                <span className="truncate">Bespoke UI/UX</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/95 border border-[#E2DBD0] text-[11px] font-bold text-[#060B22] shadow-2xs">
                <Zap className="w-3.5 h-3.5 text-[#B87A00] shrink-0" />
                <span className="truncate">99+ Speed</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/95 border border-[#E2DBD0] text-[11px] font-bold text-[#060B22] shadow-2xs">
                <ShoppingBag className="w-3.5 h-3.5 text-[#B87A00] shrink-0" />
                <span className="truncate">CMS &amp; E-Com</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/95 border border-[#E2DBD0] text-[11px] font-bold text-[#060B22] shadow-2xs">
                <Users className="w-3.5 h-3.5 text-[#B87A00] shrink-0" />
                <span className="truncate">Dedicated Devs</span>
              </div>
            </div>

            {/* Direct Conversion Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <Link
                href="/get-a-quote"
                className="btn-luxury-gold btn-shimmer py-3.5 px-7 rounded-xl text-xs font-black uppercase tracking-wider inline-flex items-center justify-center gap-2 shadow-lg cursor-pointer text-center group"
              >
                <span>LET&apos;S BUILD YOUR WEBSITE</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <a
                href="#services"
                className="btn-luxury-navy py-3.5 px-6 rounded-xl text-xs font-black uppercase tracking-wider inline-flex items-center justify-center gap-2 shadow-xs cursor-pointer text-center"
              >
                <span>Explore Our Work</span>
              </a>
            </div>

            {/* Verified Trust Strip */}
            <div className="pt-2 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-slate-600">
              <div className="flex items-center gap-1.5">
                <div className="flex items-center text-[#FFB020]">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-3.5 h-3.5 fill-[#FFB020] text-[#FFB020]"
                    />
                  ))}
                </div>
                <span className="font-bold text-[#060B22]">4.9 / 5.0</span>
                <span className="text-[10.5px] text-slate-500 font-normal">
                  (120+ Brands Delivered)
                </span>
              </div>
              <span className="text-slate-300 hidden sm:inline">•</span>
              <div className="flex items-center gap-1.5 font-semibold text-slate-700">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>100% Code Ownership</span>
              </div>
              <span className="text-slate-300 hidden sm:inline">•</span>
              <div className="flex items-center gap-1.5 font-semibold text-slate-700">
                <Clock className="w-3.5 h-3.5 text-[#B87A00]" />
                <span>&lt; 24h Turnaround</span>
              </div>
            </div>
          </div>

          {/* ================================================================ */}
          {/* RIGHT: PURE VISUAL 3D BROWSER STAGE — ZERO TEXT ABOVE THE IMAGE   */}
          {/* ================================================================ */}
          <div
            ref={containerRef}
            className="lg:col-span-6 relative mt-4 lg:mt-0"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              perspective: "1600px",
            }}
          >
            {/* 3D Tilted Perspective Browser Showcase (NO TEXT ABOVE) */}
            <div
              className="relative transition-transform duration-500 ease-out"
              style={{
                transform: `rotateY(${mousePos.x * 6}deg) rotateX(${-mousePos.y * 6}deg)`,
                transformStyle: "preserve-3d",
              }}
            >
              {/* Outer Glow Halo */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-[#FFB020]/25 via-transparent to-cyan-500/20 blur-xl pointer-events-none" />

              <div className="w-full relative rounded-2xl bg-[#060B22] border border-[#060B22]/30 shadow-[0_30px_70px_-15px_rgba(6,11,34,0.35)] overflow-hidden">
                {/* Sleek Minimalist Mac Header Bar */}
                <div className="h-9 bg-[#060B22] px-4 flex items-center justify-between border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
                  </div>

                  {/* Centered Minimalist URL Pill */}
                  <div className="flex items-center gap-1.5 px-3.5 py-1 rounded-md bg-white/10 border border-white/15 text-[10.5px] text-slate-200 font-mono">
                    <Lock className="w-3 h-3 text-emerald-400 shrink-0" />
                    <span>hdm.design-engine.live</span>
                  </div>

                  <div className="flex items-center gap-1 text-[10px] font-mono text-emerald-400 font-bold">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="hidden sm:inline">60 FPS</span>
                  </div>
                </div>

                {/* High-Resolution Interactive Website Preview (STRICT ZERO TEXT OVERLAYS) */}
                <div className="relative aspect-[16/10.5] sm:aspect-[16/10] w-full bg-slate-950 overflow-hidden">
                  <Image
                    src="/images/ref-linear.jpg"
                    alt="Bespoke high-converting digital platform UI interface"
                    fill
                    className="object-cover object-top transition-transform duration-700 ease-out hover:scale-102"
                    sizes="(max-width: 1024px) 100vw, 750px"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

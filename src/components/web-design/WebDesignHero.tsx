"use client";

import React, { useState, useEffect, useRef } from "react";
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
} from "lucide-react";
import { cn } from "@/lib/utils";

interface WebsitePreviewState {
  id: string;
  name: string;
  desktopImage: string;
  url: string;
}

const PREVIEW_DATA: WebsitePreviewState[] = [
  {
    id: "saas",
    name: "Linear",
    desktopImage: "/images/ref-linear.jpg",
    url: "linear.app",
  },
  {
    id: "ecommerce",
    name: "Allbirds",
    desktopImage: "/images/ref-allbirds.jpg",
    url: "allbirds.com",
  },
  {
    id: "healthcare",
    name: "One Medical",
    desktopImage: "/images/ref-onemedical.jpg",
    url: "onemedical.com",
  },
  {
    id: "corporate",
    name: "McKinsey",
    desktopImage: "/images/ref-mckinsey.jpg",
    url: "mckinsey.com",
  },
];

export function WebDesignHero() {
  const [activePreviewId, setActivePreviewId] = useState<string>("saas");
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [cycleProgress, setCycleProgress] = useState<number>(0);

  // Mouse coordinates for subtle 3D perspective tilt
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
    setIsPaused(false);
  };

  // Auto-cycle through live showcases with pause on hover
  useEffect(() => {
    if (isPaused) return;

    const intervalMs = 60;
    const durationMs = 5500;
    const step = (intervalMs / durationMs) * 100;

    const timer = setInterval(() => {
      setCycleProgress((prev) => {
        if (prev >= 100) {
          setActivePreviewId((currentId) => {
            const currentIndex = PREVIEW_DATA.findIndex((p) => p.id === currentId);
            const nextIndex = (currentIndex + 1) % PREVIEW_DATA.length;
            return PREVIEW_DATA[nextIndex].id;
          });
          return 0;
        }
        return prev + step;
      });
    }, intervalMs);

    return () => clearInterval(timer);
  }, [isPaused, activePreviewId]);

  const handleSelectTab = (id: string) => {
    setActivePreviewId(id);
    setCycleProgress(0);
  };

  const currentPreview =
    PREVIEW_DATA.find((p) => p.id === activePreviewId) || PREVIEW_DATA[0];

  return (
    <section className="relative overflow-hidden w-full min-h-auto lg:min-h-[calc(100vh-4.5rem)] flex flex-col justify-center py-8 sm:py-12 lg:py-10 bg-[#F6F4EE] bg-[radial-gradient(#E2DBD0_1px,transparent_1px)] [background-size:24px_24px] border-b border-[#E2DBD0]">
      {/* Luxury Diffuse Ambient Glows */}
      <div className="absolute top-10 left-6 sm:left-24 w-72 sm:w-[560px] h-72 sm:h-[560px] bg-[#FFB020]/15 rounded-full blur-[120px] pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-10 right-6 sm:right-32 w-64 sm:w-[500px] h-64 sm:h-[500px] bg-[#060B22]/10 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-center">
          {/* ================================================================ */}
          {/* LEFT: Clean Editorial Typography & Direct Conversion             */}
          {/* ================================================================ */}
          <div className="lg:col-span-6 space-y-5 text-left">
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
              <h1 className="font-display font-black text-3xl sm:text-5xl lg:text-[42px] xl:text-[48px] text-[#060B22] tracking-tight leading-[1.1]">
                Your Website Should Do More Than Look Good.{" "}
                <span className="bg-gradient-to-r from-[#B87A00] via-[#FFB020] to-[#E68A00] bg-clip-text text-transparent block sm:inline">
                  It Should Grow Your Business.
                </span>
              </h1>

              <div className="space-y-1.5 text-xs sm:text-sm text-slate-700 leading-relaxed font-normal max-w-xl">
                <p className="font-bold text-[#060B22] text-sm sm:text-base">
                  Professional Web Design and Development Services for Growing Businesses
                </p>
                <p className="text-slate-600 text-xs sm:text-[13px]">
                  We design and develop high-converting digital experiences that blend bespoke design with modern full-stack development to turn your website into a powerful business asset.
                </p>
              </div>
            </div>

            {/* 4 Feature Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1">
              <div className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white/95 border border-[#E2DBD0] text-[11px] font-bold text-[#060B22] shadow-2xs">
                <Palette className="w-3.5 h-3.5 text-[#B87A00] shrink-0" />
                <span className="truncate">Bespoke UI/UX</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white/95 border border-[#E2DBD0] text-[11px] font-bold text-[#060B22] shadow-2xs">
                <Zap className="w-3.5 h-3.5 text-[#B87A00] shrink-0" />
                <span className="truncate">99+ Speed</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white/95 border border-[#E2DBD0] text-[11px] font-bold text-[#060B22] shadow-2xs">
                <ShoppingBag className="w-3.5 h-3.5 text-[#B87A00] shrink-0" />
                <span className="truncate">CMS &amp; E-Com</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white/95 border border-[#E2DBD0] text-[11px] font-bold text-[#060B22] shadow-2xs">
                <Users className="w-3.5 h-3.5 text-[#B87A00] shrink-0" />
                <span className="truncate">Dedicated Devs</span>
              </div>
            </div>

            {/* Action CTAs */}
            <div className="pt-1 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <Link
                href="/get-a-quote"
                className="btn-luxury-gold btn-shimmer py-3.5 px-6 rounded-xl text-xs font-black uppercase tracking-wider flex items-center justify-center gap-2 shadow-md hover:shadow-[0_0_25px_rgba(255,176,32,0.4)] transition-all cursor-pointer text-center group"
              >
                <span>Let's Build Your Website</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <a
                href="#services"
                className="btn-luxury-navy py-3.5 px-5 rounded-xl text-xs font-bold flex items-center justify-center gap-2 shadow-2xs border border-slate-700 hover:border-[#FFB020] transition-colors cursor-pointer text-center"
              >
                <span>Explore Our Work</span>
              </a>
            </div>

            {/* Social Proof Strip */}
            <div className="pt-2 border-t border-[#E2DBD0] flex flex-wrap items-center gap-3 sm:gap-4 text-[11px] text-slate-600">
              <div className="flex items-center gap-1.5">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-3.5 h-3.5 fill-amber-400 text-amber-400"
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
          {/* RIGHT: Pure Visual Luxury — Clean, Uncluttered 3D Browser Stage  */}
          {/* ================================================================ */}
          <div
            ref={containerRef}
            className="lg:col-span-6 relative mt-4 lg:mt-0 space-y-2.5"
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={handleMouseLeave}
            style={{
              perspective: "1400px",
            }}
          >
            {/* Minimalist Top Switcher: Just the 4 Clean Brand Pills */}
            <div className="flex items-center justify-end">
              <div className="flex items-center gap-1 bg-white/90 backdrop-blur-md p-1 rounded-xl border border-[#E2DBD0] shadow-2xs">
                {PREVIEW_DATA.map((p) => {
                  const isSelected = p.id === activePreviewId;
                  return (
                    <button
                      key={p.id}
                      type="button"
                      onClick={() => handleSelectTab(p.id)}
                      className={cn(
                        "relative px-3 py-1.5 rounded-lg text-[11px] font-bold transition-all duration-200 cursor-pointer select-none overflow-hidden",
                        isSelected
                          ? "bg-[#060B22] text-[#FFB020] shadow-xs"
                          : "text-slate-600 hover:text-[#060B22] hover:bg-slate-100"
                      )}
                    >
                      {/* Active Tab Progress Indicator */}
                      {isSelected && !isPaused && (
                        <span
                          className="absolute bottom-0 left-0 h-[2px] bg-[#FFB020] transition-all duration-75"
                          style={{ width: `${cycleProgress}%` }}
                        />
                      )}
                      <span>{p.name}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Central 3D Browser Window (Clean Finish — ZERO Text Attached Below) */}
            <div
              className="relative transition-transform duration-300 ease-out"
              style={{
                transform: `rotateY(${mousePos.x * 6}deg) rotateX(${-mousePos.y * 6}deg)`,
                transformStyle: "preserve-3d",
              }}
            >
              <div className="w-full relative rounded-2xl bg-[#060B22] border border-[#060B22]/20 shadow-[0_25px_60px_-15px_rgba(6,11,34,0.25)] overflow-hidden">
                {/* Sleek Minimalist Mac Header Bar */}
                <div className="h-8 bg-[#060B22] px-3.5 flex items-center justify-between border-b border-white/10">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
                  </div>

                  {/* Centered Minimalist URL Pill */}
                  <div className="flex items-center gap-1 px-3 py-0.5 rounded-md bg-white/10 border border-white/15 text-[10px] text-slate-200 font-mono">
                    <Lock className="w-2.5 h-2.5 text-emerald-400 shrink-0" />
                    <span>{currentPreview.url}</span>
                  </div>

                  <div className="w-10" />
                </div>

                {/* Expansive High-Res Website Screenshot (100% Visual Craft — ZERO Text Overlays) */}
                <div className="relative aspect-[16/10.5] sm:aspect-[16/10] w-full bg-slate-950 overflow-hidden">
                  <Image
                    src={currentPreview.desktopImage}
                    alt={`${currentPreview.name} authentic website preview`}
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

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
  Activity,
  Laptop,
  Smartphone,
  Sparkles,
  Lock,
  ExternalLink,
  Layers,
  Code2,
  CheckCircle2,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface WebsitePreviewState {
  id: string;
  name: string;
  shortTag: string;
  category: string;
  desktopImage: string;
  mobileImage: string;
  url: string;
  tagline: string;
  metric: string;
  techBadge: string;
}

const PREVIEW_DATA: WebsitePreviewState[] = [
  {
    id: "healthcare",
    name: "One Medical",
    shortTag: "Healthcare",
    category: "Healthcare & Life Sciences",
    desktopImage: "/images/ref-onemedical.jpg",
    mobileImage: "/images/ref-onemedical.jpg",
    url: "onemedical.com/patient-portal",
    tagline: "Frictionless 1-tap mobile booking & HIPAA-grade patient UX",
    metric: "100/100 Core Web Vitals",
    techBadge: "React 19 + Next.js",
  },
  {
    id: "ecommerce",
    name: "Allbirds",
    shortTag: "E-Commerce",
    category: "High-Growth DTC Commerce",
    desktopImage: "/images/ref-allbirds.jpg",
    mobileImage: "/images/ref-allbirds.jpg",
    url: "allbirds.com/storefront",
    tagline: "Headless Shopify Plus with instant slide-out micro-cart",
    metric: "4.6% Avg. Checkout Conv.",
    techBadge: "Shopify Plus & Stripe",
  },
  {
    id: "saas",
    name: "Linear",
    shortTag: "Modern SaaS",
    category: "Modern Enterprise Web App",
    desktopImage: "/images/ref-linear.jpg",
    mobileImage: "/images/ref-linear.jpg",
    url: "linear.app/craft",
    tagline: "Sub-second developer workflow & keyboard-first cloud architecture",
    metric: "< 0.8s LCP Benchmark",
    techBadge: "Next.js 16 + Tailwind",
  },
  {
    id: "corporate",
    name: "McKinsey",
    shortTag: "Global Advisory",
    category: "Global Enterprise Advisory",
    desktopImage: "/images/ref-mckinsey.jpg",
    mobileImage: "/images/ref-mckinsey.jpg",
    url: "mckinsey.com/insights",
    tagline: "Authoritative editorial portal & executive lead routing",
    metric: "Global CDN Scale",
    techBadge: "Enterprise Headless CMS",
  },
];

export function WebDesignHero() {
  const [activePreviewId, setActivePreviewId] = useState<string>("saas");
  const [activeDevice, setActiveDevice] = useState<"desktop" | "mobile">("desktop");
  const [viewMode, setViewMode] = useState<"showcase" | "architecture">("showcase");
  const [activeArchTab, setActiveArchTab] = useState<"ui" | "speed" | "grid">("ui");
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

  // Auto-cycle between website showcases with pause on hover
  useEffect(() => {
    if (isPaused || viewMode !== "showcase") return;

    const intervalMs = 60;
    const durationMs = 5000;
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
  }, [isPaused, activePreviewId, viewMode]);

  const handleSelectTab = (id: string) => {
    setActivePreviewId(id);
    setViewMode("showcase");
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
          {/* LEFT COLUMN (6 cols): Bold Editorial Statement & Direct Conversion */}
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

            {/* Editorial Headline with Intentional Line Breaks */}
            <div className="space-y-3">
              <h1 className="font-display font-black text-3xl sm:text-5xl lg:text-[44px] xl:text-[50px] text-[#060B22] tracking-tight leading-[1.1]">
                Your Website Should Do More Than Look Good.{" "}
                <span className="bg-gradient-to-r from-[#B87A00] via-[#FFB020] to-[#E68A00] bg-clip-text text-transparent block sm:inline">
                  It Should Grow Your Business.
                </span>
              </h1>

              <div className="space-y-2 text-xs sm:text-sm text-slate-700 leading-relaxed font-normal max-w-xl">
                <p className="font-bold text-[#060B22] text-sm sm:text-base">
                  Professional Web Design and Development Services for Growing Businesses
                </p>
                <p className="text-slate-600 text-xs sm:text-[13px]">
                  If you are searching for web design and development services to build or upgrade your business website, Hire Desi Marketer offers web design and development services that blend simple design ideas, up-to-date development tools and user-friendly experiences to make websites that fit your business goals.
                </p>
                <p className="text-slate-600 text-xs sm:text-[13px]">
                  From custom website design and website redesign services to ecommerce website development and CMS development, our team offers scalable and user-friendly website solutions. Whether you need a website or want to hire experienced web developers in India, we help turn your requirements into a good digital experience.
                </p>
              </div>
            </div>

            {/* 4 Feature Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1">
              <div className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white/95 border border-[#E2DBD0] text-[11px] font-bold text-[#060B22] shadow-2xs hover:border-[#FFB020] transition-colors">
                <Palette className="w-3.5 h-3.5 text-[#B87A00] shrink-0" />
                <span className="truncate">Bespoke UI/UX</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white/95 border border-[#E2DBD0] text-[11px] font-bold text-[#060B22] shadow-2xs hover:border-[#FFB020] transition-colors">
                <Zap className="w-3.5 h-3.5 text-[#B87A00] shrink-0" />
                <span className="truncate">99+ Speed</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white/95 border border-[#E2DBD0] text-[11px] font-bold text-[#060B22] shadow-2xs hover:border-[#FFB020] transition-colors">
                <ShoppingBag className="w-3.5 h-3.5 text-[#B87A00] shrink-0" />
                <span className="truncate">CMS &amp; E-Com</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white/95 border border-[#E2DBD0] text-[11px] font-bold text-[#060B22] shadow-2xs hover:border-[#FFB020] transition-colors">
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

            {/* Scoping Promise */}
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
          {/* RIGHT COLUMN (6 cols): 3D Interactive Stage (Unobstructed View)   */}
          {/* ================================================================ */}
          <div
            ref={containerRef}
            className="lg:col-span-6 relative mt-6 lg:mt-0 space-y-3"
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={handleMouseLeave}
            style={{
              perspective: "1400px",
            }}
          >
            {/* Interactive Selector Header: Tabs & Mode / Viewport Toggle */}
            <div className="flex flex-wrap items-center justify-between gap-1.5">
              {/* Brand Showcase Tabs */}
              <div className="flex items-center gap-1 bg-white/95 backdrop-blur-md p-1 rounded-xl border border-[#E2DBD0] shadow-2xs overflow-x-auto no-scrollbar">
                {PREVIEW_DATA.map((p) => {
                  const isSelected = viewMode === "showcase" && p.id === activePreviewId;
                  return (
                    <button
                      key={p.id}
                      type="button"
                      onClick={() => handleSelectTab(p.id)}
                      className={cn(
                        "relative px-3 py-1.5 rounded-lg text-[10.5px] sm:text-[11px] font-bold transition-all duration-200 cursor-pointer select-none shrink-0 overflow-hidden",
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

                {/* Architecture Mode Toggle */}
                <button
                  type="button"
                  onClick={() => setViewMode("architecture")}
                  className={cn(
                    "px-3 py-1.5 rounded-lg text-[10.5px] sm:text-[11px] font-bold transition-all duration-200 cursor-pointer select-none shrink-0 flex items-center gap-1 border-l border-slate-200 ml-1 pl-2.5",
                    viewMode === "architecture"
                      ? "bg-[#FFB020] text-[#060B22] shadow-xs"
                      : "text-[#B87A00] hover:text-[#060B22] hover:bg-[#FFB020]/10"
                  )}
                >
                  <Sparkles className="w-3 h-3" />
                  <span>UI Architecture</span>
                </button>
              </div>

              {/* Viewport Switcher */}
              <div className="flex items-center gap-1 bg-white/95 backdrop-blur-md border border-[#E2DBD0] p-1 rounded-xl text-slate-500 text-[10px] shrink-0 shadow-2xs">
                <button
                  type="button"
                  onClick={() => setActiveDevice("desktop")}
                  className={cn(
                    "px-2.5 py-1 rounded-lg font-bold transition-all flex items-center gap-1.5 cursor-pointer",
                    activeDevice === "desktop"
                      ? "bg-[#060B22] text-white shadow-xs"
                      : "hover:text-[#060B22]"
                  )}
                  title="Inspect Desktop Viewport"
                >
                  <Laptop className="w-3.5 h-3.5" />
                  <span>1440px</span>
                </button>
                <button
                  type="button"
                  onClick={() => setActiveDevice("mobile")}
                  className={cn(
                    "px-2.5 py-1 rounded-lg font-bold transition-all flex items-center gap-1.5 cursor-pointer",
                    activeDevice === "mobile"
                      ? "bg-[#060B22] text-[#FFB020] ring-1 ring-[#FFB020]/40 shadow-xs"
                      : "hover:text-[#060B22]"
                  )}
                  title="Inspect Mobile Viewport"
                >
                  <Smartphone className="w-3.5 h-3.5" />
                  <span>390px</span>
                </button>
              </div>
            </div>

            {/* Central 3D Stage with Layered Depth & Pointer Parallax */}
            <div
              className="relative transition-transform duration-300 ease-out flex justify-center"
              style={{
                transform: `rotateY(${mousePos.x * 6}deg) rotateX(${-mousePos.y * 6}deg)`,
                transformStyle: "preserve-3d",
              }}
            >
              {/* ============================================================== */}
              {/* VIEW 1: LIVE BRAND SHOWCASE MODE (DESKTOP OR MOBILE)           */}
              {/* ============================================================== */}
              {viewMode === "showcase" && (
                <>
                  {activeDevice === "desktop" ? (
                    /* Panoramic Desktop Browser Frame (Completely Clean & Unobstructed) */
                    <div
                      className="w-full relative rounded-2xl bg-white border border-[#E2DBD0] shadow-[0_24px_60px_-15px_rgba(6,11,34,0.2)] overflow-hidden"
                      style={{ transform: "translateZ(0px)" }}
                    >
                      {/* Browser Top Bar with Staging URL */}
                      <div className="h-8.5 bg-[#060B22] px-3.5 flex items-center justify-between border-b border-white/10">
                        <div className="flex items-center gap-1.5 shrink-0">
                          <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
                          <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                          <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
                        </div>

                        <div className="flex items-center gap-1.5 px-3 py-0.5 rounded-md bg-white/10 border border-white/15 text-[10px] text-slate-200 font-mono max-w-[260px] sm:max-w-[320px] truncate">
                          <Lock className="w-2.5 h-2.5 text-emerald-400 shrink-0" />
                          <span className="truncate">{currentPreview.url}</span>
                        </div>

                        <span className="text-[9.5px] font-bold text-[#FFB020] uppercase tracking-wider hidden sm:block">
                          Live Production
                        </span>
                      </div>

                      {/* Desktop Viewport Screenshot — Completely Unhindered, Zero Text Overlay */}
                      <div className="relative aspect-[16/10] sm:aspect-[16/9.5] w-full bg-slate-950 overflow-hidden">
                        <Image
                          src={currentPreview.desktopImage}
                          alt={`${currentPreview.name} authentic desktop website showcase`}
                          fill
                          className="object-cover object-top transition-transform duration-700 ease-out hover:scale-102"
                          sizes="(max-width: 1024px) 100vw, 680px"
                          priority
                        />
                      </div>

                      {/* Showcase Footer Bar (Underneath Image, Never Covering It) */}
                      <div className="p-3 bg-white border-t border-[#E2DBD0] flex items-center justify-between gap-2 text-left">
                        <div className="min-w-0 space-y-0.5">
                          <div className="flex items-center gap-1.5">
                            <span className="text-[9px] uppercase font-bold tracking-wider text-[#B87A00] bg-[#FFB020]/15 px-2 py-0.5 rounded-md border border-[#FFB020]/30">
                              {currentPreview.category}
                            </span>
                            <span className="text-xs font-bold text-[#060B22]">
                              {currentPreview.name}
                            </span>
                          </div>
                          <p className="text-[11px] text-slate-600 font-medium truncate max-w-xs sm:max-w-md">
                            {currentPreview.tagline}
                          </p>
                        </div>

                        <div className="flex items-center gap-1.5 shrink-0">
                          <div className="flex items-center gap-1.5 bg-[#060B22] text-white px-2.5 py-1 rounded-lg border border-slate-800">
                            <Activity className="w-3 h-3 text-emerald-400 animate-pulse" />
                            <span className="text-[10px] font-mono font-bold text-emerald-300">
                              {currentPreview.metric}
                            </span>
                          </div>
                          <span className="hidden sm:inline-block text-[10px] font-mono font-semibold text-slate-500 bg-slate-100 px-2 py-1 rounded-lg border border-slate-200">
                            {currentPreview.techBadge}
                          </span>
                        </div>
                      </div>
                    </div>
                  ) : (
                    /* Centered Elegant Mobile Device Frame */
                    <div
                      className="w-72 sm:w-80 aspect-[9/18.5] rounded-[2.5rem] bg-slate-950 border-[6px] border-slate-800 shadow-[0_25px_60px_-10px_rgba(0,0,0,0.6)] overflow-hidden relative"
                      style={{ transform: "translateZ(20px)" }}
                    >
                      {/* Phone Speaker Notch */}
                      <div className="absolute top-2 left-1/2 -translate-x-1/2 w-20 h-4 bg-black rounded-full z-30 flex items-center justify-center">
                        <div className="w-2.5 h-2.5 rounded-full bg-slate-900 ring-1 ring-slate-800" />
                      </div>

                      {/* Mobile Viewport Screenshot (Clean — Zero Text Overlay) */}
                      <div className="relative w-full h-full bg-slate-900 pt-7">
                        <Image
                          src={currentPreview.mobileImage}
                          alt={`${currentPreview.name} mobile responsive preview`}
                          fill
                          className="object-cover object-top"
                          sizes="340px"
                          priority
                        />
                      </div>

                      {/* Bottom Micro Dock */}
                      <div className="absolute bottom-2 inset-x-4 bg-slate-900/90 backdrop-blur-md p-2 rounded-xl border border-white/10 text-center text-[10px] text-white font-bold flex items-center justify-between">
                        <span className="text-[#FFB020]">{currentPreview.name} Mobile</span>
                        <span className="text-emerald-400 font-mono text-[9px]">{currentPreview.metric}</span>
                      </div>
                    </div>
                  )}
                </>
              )}

              {/* ============================================================== */}
              {/* VIEW 2: INTERACTIVE UI ARCHITECTURE STUDIO (AS SEEN IN MOCKUP) */}
              {/* ============================================================== */}
              {viewMode === "architecture" && (
                <div
                  className="w-full relative rounded-2xl bg-[#060B22] border border-white/15 shadow-[0_24px_60px_-15px_rgba(6,11,34,0.3)] overflow-hidden text-left"
                  style={{ transform: "translateZ(0px)" }}
                >
                  {/* Browser Bar */}
                  <div className="h-8.5 bg-[#0B1536] px-3.5 flex items-center justify-between border-b border-white/10">
                    <div className="flex items-center gap-1.5 shrink-0">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
                      <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                      <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
                    </div>

                    <div className="flex items-center gap-1.5 px-3 py-0.5 rounded-md bg-white/10 border border-white/15 text-[10px] text-slate-200 font-mono max-w-[280px] truncate">
                      <Lock className="w-2.5 h-2.5 text-emerald-400 shrink-0" />
                      <span className="text-slate-300 font-mono">hd-engine://architecture.v16</span>
                    </div>

                    <span className="flex items-center gap-1 text-[9px] text-emerald-400 font-bold uppercase tracking-wider">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span>Live</span>
                    </span>
                  </div>

                  {/* Architecture Sub-Tabs */}
                  <div className="p-3 bg-white/5 border-b border-white/10 flex items-center justify-between gap-2 overflow-x-auto no-scrollbar">
                    <div className="flex items-center gap-1.5">
                      <button
                        type="button"
                        onClick={() => setActiveArchTab("ui")}
                        className={cn(
                          "px-2.5 py-1 rounded-md text-[10px] font-bold transition-colors cursor-pointer",
                          activeArchTab === "ui"
                            ? "bg-[#FFB020] text-[#060B22]"
                            : "text-slate-300 hover:text-white bg-white/5"
                        )}
                      >
                        UI Architecture
                      </button>
                      <button
                        type="button"
                        onClick={() => setActiveArchTab("speed")}
                        className={cn(
                          "px-2.5 py-1 rounded-md text-[10px] font-bold transition-colors cursor-pointer",
                          activeArchTab === "speed"
                            ? "bg-[#FFB020] text-[#060B22]"
                            : "text-slate-300 hover:text-white bg-white/5"
                        )}
                      >
                        100/100 Speed
                      </button>
                      <button
                        type="button"
                        onClick={() => setActiveArchTab("grid")}
                        className={cn(
                          "px-2.5 py-1 rounded-md text-[10px] font-bold transition-colors cursor-pointer",
                          activeArchTab === "grid"
                            ? "bg-[#FFB020] text-[#060B22]"
                            : "text-slate-300 hover:text-white bg-white/5"
                        )}
                      >
                        Responsive Grid
                      </button>
                    </div>

                    <span className="text-[10px] font-mono text-emerald-400 shrink-0">
                      60fps Ready
                    </span>
                  </div>

                  {/* Visual Blueprint Canvas */}
                  <div className="p-5 sm:p-6 space-y-4 min-h-[260px] flex flex-col justify-between">
                    {/* Simulated Wireframe / UI Header */}
                    <div className="flex items-center justify-between border-b border-white/10 pb-3">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-md bg-[#FFB020] flex items-center justify-center font-bold text-[10px] text-[#060B22]">
                          H
                        </div>
                        <div className="w-24 h-2.5 bg-white/20 rounded-full" />
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-12 h-2 bg-white/15 rounded-full" />
                        <div className="w-12 h-2 bg-white/15 rounded-full" />
                        <div className="w-16 h-5 rounded-md bg-[#FFB020]/80" />
                      </div>
                    </div>

                    {/* Dynamic Tab Body */}
                    {activeArchTab === "ui" && (
                      <div className="space-y-3 py-2">
                        <div className="w-3/4 h-4 bg-[#FFB020]/90 rounded-md" />
                        <div className="w-1/2 h-3 bg-white/30 rounded-md" />
                        <div className="grid grid-cols-3 gap-2.5 pt-3">
                          <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 space-y-1">
                            <Zap className="w-3.5 h-3.5 text-[#FFB020]" />
                            <div className="text-[11px] font-bold text-white">&lt; 0.8s</div>
                            <div className="text-[9px] text-slate-400">LCP SPEED</div>
                          </div>
                          <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 space-y-1">
                            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                            <div className="text-[11px] font-bold text-white">99.9%</div>
                            <div className="text-[9px] text-slate-400">UPTIME</div>
                          </div>
                          <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 space-y-1">
                            <Code2 className="w-3.5 h-3.5 text-blue-400" />
                            <div className="text-[11px] font-bold text-white">Next.js</div>
                            <div className="text-[9px] text-slate-400">REACT 19</div>
                          </div>
                        </div>
                      </div>
                    )}

                    {activeArchTab === "speed" && (
                      <div className="space-y-2.5 py-2">
                        <div className="flex items-center justify-between text-xs text-white">
                          <span>Largest Contentful Paint (LCP)</span>
                          <span className="text-emerald-400 font-mono font-bold">0.68s (Top 1%)</span>
                        </div>
                        <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                          <div className="bg-emerald-400 h-full w-[95%]" />
                        </div>

                        <div className="flex items-center justify-between text-xs text-white pt-1">
                          <span>Cumulative Layout Shift (CLS)</span>
                          <span className="text-emerald-400 font-mono font-bold">0.00 (Zero Shift)</span>
                        </div>
                        <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                          <div className="bg-emerald-400 h-full w-[100%]" />
                        </div>

                        <div className="flex items-center justify-between text-xs text-white pt-1">
                          <span>First Input Delay / Interaction (INP)</span>
                          <span className="text-emerald-400 font-mono font-bold">24ms (Instant)</span>
                        </div>
                        <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                          <div className="bg-emerald-400 h-full w-[98%]" />
                        </div>
                      </div>
                    )}

                    {activeArchTab === "grid" && (
                      <div className="grid grid-cols-4 gap-2 py-3 text-center">
                        <div className="p-2 rounded-lg bg-white/5 border border-white/10 text-[10px] text-slate-300">
                          Mobile 390px
                        </div>
                        <div className="p-2 rounded-lg bg-white/5 border border-white/10 text-[10px] text-slate-300">
                          Tablet 768px
                        </div>
                        <div className="p-2 rounded-lg bg-white/5 border border-white/10 text-[10px] text-slate-300">
                          Laptop 1024px
                        </div>
                        <div className="p-2 rounded-lg bg-white/5 border border-[#FFB020]/40 text-[10px] text-[#FFB020] font-bold">
                          Ultra 1440px+
                        </div>
                      </div>
                    )}

                    {/* Bottom Status Strip */}
                    <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-300">
                      <div className="flex items-center gap-1.5">
                        <span className="text-[10px] uppercase font-bold tracking-wider text-[#FFB020] bg-white/10 px-2 py-0.5 rounded">
                          ENGINEERING LIVE STUDIO
                        </span>
                        <span className="text-slate-400 text-[10px] hidden sm:inline">
                          Next.js 16 + React 19
                        </span>
                      </div>
                      <span className="text-[10px] font-mono font-bold text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-500/30">
                        100/100 Core Web Vitals
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

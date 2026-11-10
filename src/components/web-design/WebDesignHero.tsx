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
} from "lucide-react";
import { cn } from "@/lib/utils";

interface WebsitePreviewState {
  id: string;
  name: string;
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
    name: "Linear Craft",
    category: "Modern Enterprise Web App",
    desktopImage: "/images/ref-linear.jpg",
    mobileImage: "/images/ref-linear.jpg",
    url: "linear.app/craft",
    tagline: "High-velocity keyboard workflow & responsive cloud architecture",
    metric: "< 0.8s LCP Benchmark",
    techBadge: "Next.js 16 + Tailwind",
  },
  {
    id: "corporate",
    name: "McKinsey",
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
  const [activePreviewId, setActivePreviewId] = useState<string>("healthcare");
  const [activeDevice, setActiveDevice] = useState<"desktop" | "mobile">("desktop");
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [cycleProgress, setCycleProgress] = useState<number>(0);

  // Parallax tilt coordinates
  const [mousePos, setMousePos] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  // Handle smooth 3D tilt on pointer movement
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

  // Smooth auto-cycle between website showcases with pause on hover
  useEffect(() => {
    if (isPaused) return;

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
  }, [isPaused, activePreviewId]);

  const handleSelectTab = (id: string) => {
    setActivePreviewId(id);
    setCycleProgress(0);
  };

  const currentPreview =
    PREVIEW_DATA.find((p) => p.id === activePreviewId) || PREVIEW_DATA[0];

  return (
    <section className="relative overflow-hidden w-full min-h-auto lg:min-h-[calc(100vh-4.5rem)] flex flex-col justify-center py-6 sm:py-8 lg:py-6 bg-[#F6F4EE] bg-[radial-gradient(#E2DBD0_1px,transparent_1px)] [background-size:24px_24px] border-b border-[#E2DBD0]">
      {/* Luxury Diffuse Ambient Glows */}
      <div className="absolute top-8 left-6 sm:left-24 w-72 sm:w-[520px] h-72 sm:h-[520px] bg-[#FFB020]/15 rounded-full blur-[110px] pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-8 right-6 sm:right-32 w-64 sm:w-[460px] h-64 sm:h-[460px] bg-[#060B22]/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 xl:gap-10 items-center">
          {/* ================================================================ */}
          {/* LEFT COLUMN (6 cols): Editorial Typography & Direct Conversion    */}
          {/* ================================================================ */}
          <div className="lg:col-span-6 space-y-4 text-left">
            {/* Live Status Pill */}
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

            {/* Editorial Headline with Intentional Line Breaks */}
            <div className="space-y-2.5">
              <h1 className="font-display font-black text-3xl sm:text-4xl lg:text-[42px] xl:text-[46px] text-[#060B22] tracking-tight leading-[1.12]">
                Your Website Should Do More Than Look Good.{" "}
                <span className="bg-gradient-to-r from-[#B87A00] via-[#FFB020] to-[#E68A00] bg-clip-text text-transparent block sm:inline">
                  It Should Grow Your Business.
                </span>
              </h1>

              <div className="space-y-2 text-xs sm:text-[13.5px] text-slate-700 leading-relaxed font-normal max-w-xl">
                <p className="font-bold text-[#060B22] text-sm sm:text-base">
                  We design and develop exceptional digital experiences that turn your brand into a powerful business asset.
                </p>
                <p className="text-slate-600 text-xs sm:text-[13px]">
                  From custom website design and website redesign services to e-commerce storefronts and headless CMS architecture, our engineers deliver sub-second performance, high conversion rates, and pixel-perfect responsiveness.
                </p>
              </div>
            </div>

            {/* 4 Feature Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1">
              <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-white/95 border border-[#E2DBD0] text-[11px] font-bold text-[#060B22] shadow-2xs hover:border-[#FFB020] transition-colors">
                <Palette className="w-3.5 h-3.5 text-[#B87A00] shrink-0" />
                <span className="truncate">Bespoke UI/UX</span>
              </div>
              <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-white/95 border border-[#E2DBD0] text-[11px] font-bold text-[#060B22] shadow-2xs hover:border-[#FFB020] transition-colors">
                <Zap className="w-3.5 h-3.5 text-[#B87A00] shrink-0" />
                <span className="truncate">Sub-Second LCP</span>
              </div>
              <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-white/95 border border-[#E2DBD0] text-[11px] font-bold text-[#060B22] shadow-2xs hover:border-[#FFB020] transition-colors">
                <ShoppingBag className="w-3.5 h-3.5 text-[#B87A00] shrink-0" />
                <span className="truncate">Headless &amp; CMS</span>
              </div>
              <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-white/95 border border-[#E2DBD0] text-[11px] font-bold text-[#060B22] shadow-2xs hover:border-[#FFB020] transition-colors">
                <Users className="w-3.5 h-3.5 text-[#B87A00] shrink-0" />
                <span className="truncate">Dedicated Devs</span>
              </div>
            </div>

            {/* Action CTAs */}
            <div className="pt-1 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5">
              <Link
                href="/get-a-quote"
                className="btn-luxury-gold btn-shimmer py-3.5 px-6 rounded-xl text-xs font-black uppercase tracking-wider flex items-center justify-center gap-2 shadow-md hover:shadow-[0_0_25px_rgba(255,176,32,0.4)] transition-all cursor-pointer text-center group"
              >
                <span>Let's Build Your Website</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <a
                href="#work"
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
          {/* RIGHT COLUMN (6 cols): Realistic Interactive Website Showcase     */}
          {/* Layered Desktop Window + Overlapping Floating Mobile Device      */}
          {/* ================================================================ */}
          <div
            ref={containerRef}
            className="lg:col-span-6 relative mt-4 lg:mt-0 space-y-3"
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={handleMouseLeave}
            style={{
              perspective: "1200px",
            }}
          >
            {/* Interactive Selector Header: Tabs & Viewport Toggle */}
            <div className="flex items-center justify-between gap-1.5">
              <div className="flex items-center gap-1 bg-white/90 backdrop-blur-md p-1 rounded-xl border border-[#E2DBD0] shadow-2xs overflow-x-auto no-scrollbar">
                {PREVIEW_DATA.map((p) => {
                  const isSelected = p.id === activePreviewId;
                  return (
                    <button
                      key={p.id}
                      type="button"
                      onClick={() => handleSelectTab(p.id)}
                      className={cn(
                        "relative px-2.5 sm:px-3 py-1 rounded-lg text-[10px] sm:text-[11px] font-bold transition-all duration-200 cursor-pointer select-none shrink-0 overflow-hidden",
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

              {/* Viewport Switcher */}
              <div className="flex items-center gap-1 bg-white/90 backdrop-blur-md border border-[#E2DBD0] p-1 rounded-xl text-slate-500 text-[10px] shrink-0 shadow-2xs">
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
                  <span className="hidden sm:inline">Desktop</span>
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
                  <span className="hidden sm:inline">Mobile</span>
                </button>
              </div>
            </div>

            {/* Central Showcase Stage with Layered 3D Depth & Pointer Tilt */}
            <div
              className="relative transition-transform duration-300 ease-out"
              style={{
                transform: `rotateY(${mousePos.x * 6}deg) rotateX(${-mousePos.y * 6}deg)`,
              }}
            >
              {/* Primary Desktop Browser Frame (Clean Screenshot — ZERO Text Overlaid) */}
              <div className="relative rounded-2xl bg-white border border-[#E2DBD0] shadow-[0_20px_50px_-12px_rgba(6,11,34,0.18)] overflow-hidden">
                {/* Browser Top Bar with Realistic Staging URL */}
                <div className="h-8 bg-[#060B22] px-3.5 flex items-center justify-between border-b border-white/10">
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

                {/* Desktop Viewport Screenshot — Completely Unhindered */}
                <div className="relative aspect-[16/10] sm:aspect-[16/9.5] w-full bg-slate-950 overflow-hidden">
                  <Image
                    src={currentPreview.desktopImage}
                    alt={`${currentPreview.name} authentic desktop website showcase`}
                    fill
                    className="object-cover object-top transition-transform duration-700 ease-out hover:scale-102"
                    sizes="(max-width: 1024px) 100vw, 650px"
                    priority
                  />
                </div>

                {/* Dedicated Showcase Footer Bar (Underneath the Image, Never Over It) */}
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
                  </div>
                </div>
              </div>

              {/* Layered Floating Mobile Device Mockup (Overlaps in Foreground with Dynamic Parallax) */}
              <div
                className={cn(
                  "absolute -bottom-4 -right-3 sm:-bottom-5 sm:-right-4 w-28 sm:w-36 aspect-[9/18] rounded-[1.75rem] bg-slate-950 border-[4px] border-slate-800 shadow-[0_20px_35px_-8px_rgba(0,0,0,0.5)] overflow-hidden z-20 transition-all duration-500 hidden md:block",
                  activeDevice === "mobile"
                    ? "scale-115 ring-2 ring-[#FFB020] translate-y-[-10px]"
                    : "hover:scale-105"
                )}
                style={{
                  transform: `translate(${mousePos.x * -12}px, ${mousePos.y * -12}px)`,
                }}
              >
                {/* Phone Speaker Notch */}
                <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-10 h-2 bg-black rounded-full z-30" />

                {/* Mobile Viewport Screenshot (Clean — Zero Text Overlay) */}
                <div className="relative w-full h-full bg-slate-900">
                  <Image
                    src={currentPreview.mobileImage}
                    alt={`${currentPreview.name} mobile responsive preview`}
                    fill
                    className="object-cover object-top"
                    sizes="160px"
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
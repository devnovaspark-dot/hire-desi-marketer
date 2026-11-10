"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Sparkles,
  Zap,
  Star,
  ShieldCheck,
  Clock,
  Lock,
  Activity,
  Layers,
  ChevronRight,
  ExternalLink,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface HeroShowcaseItem {
  id: string;
  label: string;
  sector: string;
  image: string;
  url: string;
  tech: string;
  speed: string;
  metric: string;
}

const HERO_SHOWCASES: HeroShowcaseItem[] = [
  {
    id: "aether",
    label: "✦ Multi-Device Studio",
    sector: "Luxury Digital Agency",
    image: "/images/hero-devices-mockup.jpg",
    url: "aether-agency.hdm.live",
    tech: "Next.js 16 + Figma Design Tokens",
    speed: "< 0.52s Edge Paint",
    metric: "+240% Engagement Lift",
  },
  {
    id: "linear",
    label: "⚡ SaaS Platform",
    sector: "High-Growth Software",
    image: "/images/ref-linear.jpg",
    url: "linear-engine.hdm.live",
    tech: "React 19 + TypeScript Full-Stack",
    speed: "100/100 Core Web Vitals",
    metric: "4.8% Product Signup Rate",
  },
  {
    id: "dermaluxe",
    label: "🌿 Aesthetic Clinic",
    sector: "Medical & Healthcare",
    image: "/images/case-study-aesthetic.webp",
    url: "dermaluxe.hdm.live",
    tech: "Headless Next.js + 1-Tap Booking",
    speed: "99/100 Mobile Speed",
    metric: "+215% Direct Inquiries",
  },
  {
    id: "velocity",
    label: "🛍️ DTC Storefront",
    sector: "High-Velocity E-Commerce",
    image: "/images/case-study-cafe.webp",
    url: "velocity-store.hdm.live",
    tech: "Shopify Plus + Instant Slide-Cart",
    speed: "< 0.7s Micro-Checkout",
    metric: "4.6% Avg. Conversion",
  },
];

export function WebDesignHero() {
  const [activeShowcaseId, setActiveShowcaseId] = useState<string>("aether");
  const [mousePos, setMousePos] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const stageRef = useRef<HTMLDivElement>(null);

  const activeShowcase =
    HERO_SHOWCASES.find((s) => s.id === activeShowcaseId) || HERO_SHOWCASES[0];

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!stageRef.current) return;
    const rect = stageRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  return (
    <section className="relative overflow-hidden w-full py-10 sm:py-14 lg:py-16 bg-[#F6F4EE] bg-[radial-gradient(#E2DBD0_1px,transparent_1px)] [background-size:24px_24px] border-b border-[#E2DBD0] select-none">
      {/* Luxury Diffuse Ambient Glows */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[720px] sm:w-[900px] h-[360px] bg-[#FFB020]/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-72 sm:w-[500px] h-72 sm:h-[500px] bg-[#060B22]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6 sm:space-y-8">
        {/* ================================================================ */}
        {/* 1. CENTERED GRAND EDITORIAL MASTHEAD                              */}
        {/* ================================================================ */}
        <div className="space-y-4 max-w-4xl mx-auto">
          {/* Live Agency Status Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-[#E2DBD0] shadow-2xs">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="text-[10.5px] sm:text-[11px] font-black text-[#060B22] uppercase tracking-wider">
              Enterprise Web Engineering &amp; Bespoke UI/UX
            </span>
            <span className="text-slate-300 hidden sm:inline">|</span>
            <span className="text-[10.5px] font-semibold text-slate-500 hidden sm:inline">
              Serving USA · Canada · UK · Australia
            </span>
          </div>

          {/* Grand Authoritative Headline */}
          <h1 className="font-display font-black text-3xl sm:text-5xl lg:text-[54px] text-[#060B22] tracking-tight leading-[1.08]">
            Your Website Should Do More Than Look Good.{" "}
            <span className="bg-gradient-to-r from-[#B87A00] via-[#FFB020] to-[#E68A00] bg-clip-text text-transparent block sm:inline">
              It Should Grow Your Business.
            </span>
          </h1>

          {/* Editorial Subtitle */}
          <div className="space-y-1.5 max-w-2xl mx-auto pt-1">
            <p className="font-bold text-[#060B22] text-sm sm:text-base">
              Professional Web Design and Development Services for Growing Businesses
            </p>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
              We design and develop high-converting digital platforms that blend bespoke Figma design with modern full-stack development to turn your website into a powerful commercial growth asset.
            </p>
          </div>

          {/* Dual Conversion Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <Link
              href="/get-a-quote"
              className="btn-luxury-gold btn-shimmer py-3.5 px-8 rounded-xl text-xs sm:text-sm font-black uppercase tracking-wider inline-flex items-center justify-center gap-2 shadow-lg cursor-pointer text-center group"
            >
              <span>LET&apos;S BUILD YOUR WEBSITE</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            <a
              href="#services"
              className="btn-luxury-navy py-3.5 px-7 rounded-xl text-xs sm:text-sm font-black uppercase tracking-wider inline-flex items-center justify-center gap-2 shadow-xs cursor-pointer text-center"
            >
              <span>Explore Solutions ↓</span>
            </a>
          </div>

          {/* Verified Trust Strip */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-slate-600">
            <div className="flex items-center gap-1.5">
              <div className="flex text-[#FFB020]">
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
            <span className="text-slate-300 hidden sm:inline">•</span>
            <div className="flex items-center gap-1.5 font-semibold text-slate-700">
              <Zap className="w-3.5 h-3.5 text-[#FFB020]" />
              <span>&lt; 0.8s LCP SLA</span>
            </div>
          </div>
        </div>

        {/* ================================================================ */}
        {/* 2. PANORAMIC 3D MULTI-DEVICE DIGITAL PRODUCT STAGE               */}
        {/* ================================================================ */}
        <div className="pt-3 space-y-4">
          {/* Interactive Project Switcher Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {HERO_SHOWCASES.map((showcase) => {
              const isSelected = showcase.id === activeShowcase.id;

              return (
                <button
                  key={showcase.id}
                  type="button"
                  onClick={() => setActiveShowcaseId(showcase.id)}
                  className={cn(
                    "px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer flex items-center gap-1.5 select-none",
                    isSelected
                      ? "bg-[#060B22] text-[#FFB020] border border-[#FFB020]/50 shadow-md ring-1 ring-[#FFB020]/30 scale-102"
                      : "bg-white/95 text-slate-600 border border-[#E2DBD0] hover:border-slate-400 hover:text-[#0B1B3A]"
                  )}
                >
                  <span>{showcase.label}</span>
                  <span
                    className={cn(
                      "text-[10px] font-mono px-1.5 py-0.2 rounded-full hidden sm:inline-block",
                      isSelected
                        ? "bg-[#FFB020]/20 text-[#FFB020]"
                        : "bg-slate-100 text-slate-500"
                    )}
                  >
                    {showcase.sector}
                  </span>
                </button>
              );
            })}
          </div>

          {/* 3D Tilted Panoramic Stage (ZERO TEXT OVERLAYS ON IMAGE) */}
          <div
            ref={stageRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative max-w-5xl mx-auto"
            style={{
              perspective: "1600px",
            }}
          >
            {/* Ambient Backlight Halo */}
            <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-[#FFB020]/25 via-transparent to-cyan-500/20 blur-2xl pointer-events-none" />

            <div
              className="relative rounded-2xl sm:rounded-3xl bg-[#060B22] border border-[#060B22]/30 shadow-[0_30px_70px_-15px_rgba(6,11,34,0.35)] overflow-hidden transition-transform duration-500 ease-out text-left"
              style={{
                transform: `rotateY(${mousePos.x * 5}deg) rotateX(${-mousePos.y * 5}deg)`,
                transformStyle: "preserve-3d",
              }}
            >
              {/* Minimalist macOS Browser Top Bar */}
              <div className="h-9 sm:h-10 bg-[#060B22] px-4 flex items-center justify-between border-b border-white/10">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
                </div>

                {/* Centered Minimalist Staging URL */}
                <div className="flex items-center gap-1.5 px-3 sm:px-4 py-1 rounded-md bg-white/10 border border-white/15 text-[10.5px] sm:text-xs text-slate-200 font-mono">
                  <Lock className="w-3 h-3 text-emerald-400 shrink-0" />
                  <span>https://{activeShowcase.url}</span>
                </div>

                {/* Right Performance Telemetry */}
                <div className="flex items-center gap-2 text-[10.5px] font-mono text-emerald-400 font-bold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="hidden sm:inline">60 FPS · 100/100 Core Web Vitals</span>
                </div>
              </div>

              {/* High-Resolution Website Preview (STRICT ZERO TEXT OVERLAYS) */}
              <div className="relative aspect-[16/9.5] sm:aspect-[16/9] w-full bg-slate-950 overflow-hidden">
                <Image
                  src={activeShowcase.image}
                  alt={`${activeShowcase.sector} bespoke production platform preview`}
                  fill
                  className="object-cover object-top transition-all duration-700 ease-out hover:scale-101"
                  sizes="(max-width: 1200px) 100vw, 1100px"
                  priority
                />
              </div>

              {/* Integrated Architectural Telemetry Console (Below the Screen) */}
              <div className="p-3.5 sm:p-4 bg-[#081232] border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-slate-300">
                  <div className="flex items-center gap-1.5 text-white font-bold">
                    <span className="text-[#FFB020] font-mono">01</span>
                    <span>{activeShowcase.sector}</span>
                  </div>
                  <span className="text-white/20 hidden sm:inline">|</span>
                  <span className="text-slate-400 font-mono text-[11px]">
                    {activeShowcase.tech}
                  </span>
                  <span className="text-white/20 hidden sm:inline">|</span>
                  <span className="text-emerald-400 font-mono font-bold text-[11px] flex items-center gap-1">
                    <Zap className="w-3 h-3 text-emerald-400" />
                    <span>{activeShowcase.speed}</span>
                  </span>
                  <span className="text-white/20 hidden sm:inline">|</span>
                  <span className="text-[#FFB020] font-mono font-bold text-[11px]">
                    {activeShowcase.metric}
                  </span>
                </div>

                <Link
                  href="/get-a-quote"
                  className="text-[#FFB020] hover:text-white transition-colors font-bold text-[11px] uppercase tracking-wider flex items-center gap-1 shrink-0 self-end sm:self-auto group"
                >
                  <span>Schedule Scoping</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

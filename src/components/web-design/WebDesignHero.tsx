"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
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
  CheckCircle2,
  ExternalLink,
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
    id: "saas",
    name: "Linear",
    category: "Next-Gen SaaS & Product",
    desktopImage: "/images/ref-linear.jpg",
    mobileImage: "/images/ref-linear.jpg",
    url: "linear.app",
    tagline: "Sub-second developer workflow & keyboard-first navigation",
    metric: "100/100 Core Web Vitals",
    techBadge: "Next.js 16 + React 19",
  },
  {
    id: "ecommerce",
    name: "Allbirds",
    category: "High-Growth DTC Commerce",
    desktopImage: "/images/ref-allbirds.jpg",
    mobileImage: "/images/ref-allbirds.jpg",
    url: "allbirds.com",
    tagline: "Headless Shopify Plus with instant slide-out micro-cart",
    metric: "4.6% Avg. Checkout Conv.",
    techBadge: "Shopify Plus & Stripe",
  },
  {
    id: "healthcare",
    name: "One Medical",
    category: "Telehealth & Clinic Portal",
    desktopImage: "/images/ref-onemedical.jpg",
    mobileImage: "/images/ref-onemedical.jpg",
    url: "onemedical.com",
    tagline: "Frictionless 1-tap mobile booking & HIPAA-grade patient UX",
    metric: "< 0.8s LCP Load Time",
    techBadge: "Custom UI/UX & React",
  },
  {
    id: "corporate",
    name: "McKinsey",
    category: "Global Enterprise Advisory",
    desktopImage: "/images/ref-mckinsey.jpg",
    mobileImage: "/images/ref-mckinsey.jpg",
    url: "mckinsey.com",
    tagline: "Authoritative editorial portal & executive lead routing",
    metric: "Multi-Language CDN",
    techBadge: "Enterprise Headless CMS",
  },
];

interface ArchitecturePillar {
  id: string;
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  badge: string;
}

const ARCHITECTURE_PILLARS: ArchitecturePillar[] = [
  {
    id: "bespoke",
    icon: <Palette className="w-4 h-4 text-[#B87A00]" />,
    title: "Bespoke UI/UX & Code",
    subtitle: "Custom Figma wireframes to clean semantic code",
    badge: "100% Tailored",
  },
  {
    id: "speed",
    icon: <Zap className="w-4 h-4 text-[#B87A00]" />,
    title: "Sub-Second Performance",
    subtitle: "Core Web Vitals 95+ speed benchmark guaranteed",
    badge: "< 0.8s LCP",
  },
  {
    id: "commerce",
    icon: <ShoppingBag className="w-4 h-4 text-[#B87A00]" />,
    title: "CMS & Modern Commerce",
    subtitle: "Shopify Plus, Webflow & custom WordPress",
    badge: "Headless & Native",
  },
  {
    id: "squad",
    icon: <Users className="w-4 h-4 text-[#B87A00]" />,
    title: "Dedicated Dev Squad",
    subtitle: "Direct timezone overlap with fixed sprint delivery",
    badge: "Real-Time Sync",
  },
];

export function WebDesignHero() {
  const [activePreviewId, setActivePreviewId] = useState<string>("saas");
  const [activeDevice, setActiveDevice] = useState<"desktop" | "mobile">("desktop");
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [cycleProgress, setCycleProgress] = useState<number>(0);

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
    <section className="relative overflow-hidden w-full min-h-auto lg:min-h-[calc(100vh-4.5rem)] flex flex-col justify-center py-6 sm:py-10 lg:py-8 bg-[#F6F4EE] bg-[radial-gradient(#E2DBD0_1px,transparent_1px)] [background-size:24px_24px] border-b border-[#E2DBD0]">
      {/* Luxury Diffuse Ambient Glows */}
      <div className="absolute top-8 left-6 sm:left-24 w-72 sm:w-[520px] h-72 sm:h-[520px] bg-[#FFB020]/15 rounded-full blur-[110px] pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-8 right-6 sm:right-32 w-64 sm:w-[460px] h-64 sm:h-[460px] bg-[#060B22]/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 xl:gap-12 items-center">
          {/* ================================================================ */}
          {/* LEFT COLUMN (6 cols): Editorial Authority, Value & Engagement    */}
          {/* ================================================================ */}
          <div className="lg:col-span-6 space-y-4 sm:space-y-4.5 text-left">
            {/* 1. Prestige Agency Live Overlap Kicker */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md border border-[#E2DBD0] shadow-2xs">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-[10px] sm:text-[11px] font-bold text-[#060B22] uppercase tracking-wider">
                Enterprise Web Engineering &amp; Bespoke UI/UX
              </span>
              <span className="text-slate-300 hidden sm:inline">|</span>
              <span className="text-[9.5px] sm:text-[10.5px] font-semibold text-slate-500 hidden sm:inline">
                Open for Q2/Q3 Projects
              </span>
            </div>

            {/* 2. Authority Headline & Approved Copy */}
            <div className="space-y-2 sm:space-y-2.5">
              <h1 className="font-display font-black text-3xl sm:text-4xl lg:text-[38px] xl:text-[43px] text-[#060B22] tracking-tight leading-[1.12]">
                Your Website Should Do More Than Look Good.{" "}
                <span className="bg-gradient-to-r from-[#B87A00] via-[#FFB020] to-[#E68A00] bg-clip-text text-transparent">
                  It Should Grow Your Business.
                </span>
              </h1>

              {/* Subheading: Professional Web Design and Development Services for Growing Businesses */}
              <div className="space-y-2 text-xs sm:text-[12.5px] text-slate-700 leading-relaxed font-normal max-w-xl">
                <p className="font-bold text-slate-900 text-xs sm:text-[13px] tracking-tight">
                  Professional Web Design and Development Services for Growing Businesses
                </p>
                <p>
                  If you are searching for web design and development services to build or upgrade your business website, Hire Desi Marketer offers web design and development services that blend simple design ideas, up-to-date development tools and user-friendly experiences to make websites that fit your business goals.
                </p>
                <p>
                  From custom website design and website redesign services to ecommerce website development and CMS development, our team offers scalable and user-friendly website solutions. Whether you need a website or want to hire experienced web developers in India, we help turn your requirements into a good digital experience.
                </p>
              </div>
            </div>

            {/* 3. Four Interactive Architecture Chips (Tactile Micro-Interactions) */}
            <div className="grid grid-cols-2 gap-2 sm:gap-2.5 pt-0.5">
              {ARCHITECTURE_PILLARS.map((pillar) => (
                <div
                  key={pillar.id}
                  className="p-2 sm:p-2.5 rounded-xl bg-white/90 backdrop-blur-xs border border-[#E2DBD0] hover:border-[#FFB020] hover:bg-white transition-all duration-200 group/pill shadow-2xs"
                >
                  <div className="flex items-center justify-between gap-1 mb-0.5">
                    <div className="flex items-center gap-1.5 min-w-0">
                      <span className="p-1 rounded-md bg-[#FFB020]/15 shrink-0 group-hover/pill:bg-[#FFB020] transition-colors">
                        {pillar.icon}
                      </span>
                      <span className="text-[11px] font-bold text-[#060B22] truncate">
                        {pillar.title}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-[10px] text-slate-500 font-medium pl-6">
                    <span className="truncate">{pillar.subtitle}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* 4. Primary & Secondary Action Flow */}
            <div className="pt-1 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a
                href="#final-cta"
                className="btn-luxury-gold btn-shimmer py-3 px-6 rounded-xl text-xs font-black uppercase tracking-wider flex items-center justify-center gap-2 shadow-md hover:shadow-[0_0_25px_rgba(255,176,32,0.4)] transition-all cursor-pointer text-center group"
              >
                <span>Let's Build Your Website</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="#services"
                className="btn-luxury-navy py-3 px-5 rounded-xl text-xs font-bold flex items-center justify-center gap-2 shadow-2xs border border-slate-700 hover:border-[#FFB020] transition-colors cursor-pointer text-center"
              >
                <span>Explore Our Work</span>
              </a>
            </div>

            {/* 5. Instant Scoping Prompt */}
            <div className="flex items-center gap-2 text-xs text-slate-600">
              <Zap className="w-3.5 h-3.5 text-[#B87A00] shrink-0" />
              <span>
                Need a tailored proposal &amp; roadmap within 24 hours?{" "}
                <a
                  href="#final-cta"
                  className="font-bold text-[#060B22] hover:text-[#B87A00] underline underline-offset-2 transition-colors cursor-pointer"
                >
                  Request a Free Consultation →
                </a>
              </span>
            </div>

            {/* 6. Clean Trust & Verified Deliverables Strip */}
            <div className="pt-2.5 border-t border-[#E2DBD0] flex flex-wrap items-center gap-3 sm:gap-5 text-[11px] text-slate-600">
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
                <span>&lt; 24h Scoping Turnaround</span>
              </div>
            </div>
          </div>

          {/* ================================================================ */}
          {/* RIGHT COLUMN (6 cols): Pristine Digital Showcase (Zero Text on Img)*/}
          {/* ================================================================ */}
          <div
            className="lg:col-span-6 relative mt-4 lg:mt-0"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Interactive Selector Header: Tabs & Viewport Toggle */}
            <div className="flex items-center justify-between gap-1.5 mb-2.5 pb-0.5 overflow-x-auto no-scrollbar">
              <div className="flex items-center gap-1 bg-white/80 backdrop-blur-md p-1 rounded-xl border border-[#E2DBD0] shadow-2xs">
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
                      {/* Active Tab Progress Indicator (shows cycle countdown) */}
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

              {/* Viewport Switcher (Desktop 1440px vs Mobile 390px) */}
              <div className="hidden sm:flex items-center gap-1 bg-white/90 backdrop-blur-md border border-[#E2DBD0] p-1 rounded-xl text-slate-500 text-[10px] shrink-0 shadow-2xs">
                <button
                  type="button"
                  onClick={() => setActiveDevice("desktop")}
                  className={cn(
                    "px-2 py-0.5 rounded-lg font-bold transition-all flex items-center gap-1 cursor-pointer",
                    activeDevice === "desktop"
                      ? "bg-[#060B22] text-white"
                      : "hover:text-[#060B22]"
                  )}
                  title="Inspect Desktop Viewport (1440px)"
                >
                  <Laptop className="w-3 h-3" />
                  <span>1440px</span>
                </button>
                <button
                  type="button"
                  onClick={() => setActiveDevice("mobile")}
                  className={cn(
                    "px-2 py-0.5 rounded-lg font-bold transition-all flex items-center gap-1 cursor-pointer",
                    activeDevice === "mobile"
                      ? "bg-[#060B22] text-[#FFB020] ring-1 ring-[#FFB020]/40"
                      : "hover:text-[#060B22]"
                  )}
                  title="Inspect Mobile Viewport (390px)"
                >
                  <Smartphone className="w-3 h-3" />
                  <span>390px</span>
                </button>
              </div>
            </div>

            {/* Central Layered Showcase Canvas */}
            <div
              className={cn(
                "relative rounded-2xl sm:rounded-3xl bg-white border border-[#E2DBD0] shadow-[0_24px_60px_-15px_rgba(6,11,34,0.18)] overflow-hidden transition-all duration-500 group",
                activeDevice === "desktop" ? "scale-100" : "sm:scale-[0.98]"
              )}
            >
              {/* Pure Website Screenshot Display — 100% UNINTERRUPTED & PRISTINE (ZERO TEXT OVERLAYS) */}
              <div className="relative aspect-[16/10] sm:aspect-[16/9.5] w-full bg-slate-950 overflow-hidden">
                <Image
                  src={currentPreview.desktopImage}
                  alt={`${currentPreview.name} authentic website design showcase`}
                  fill
                  className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-102"
                  sizes="(max-width: 1024px) 100vw, 650px"
                  priority
                />
              </div>

              {/* Dedicated Showcase Footer Bar (Cleanly UNDERNEATH the Image, Never Covering It) */}
              <div className="p-3.5 sm:p-4 bg-white border-t border-[#E2DBD0] flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 text-left">
                <div className="min-w-0 space-y-0.5">
                  <div className="flex items-center gap-2">
                    <span className="text-[9.5px] uppercase font-bold tracking-wider text-[#B87A00] bg-[#FFB020]/15 px-2 py-0.5 rounded-md border border-[#FFB020]/30">
                      {currentPreview.category}
                    </span>
                    <span className="text-xs font-bold text-[#060B22]">
                      {currentPreview.name}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-600 font-medium truncate max-w-sm sm:max-w-md">
                    {currentPreview.tagline}
                  </p>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <div className="flex items-center gap-1.5 bg-[#060B22] text-white px-2.5 py-1 rounded-lg border border-slate-800">
                    <Activity className="w-3 h-3 text-emerald-400 animate-pulse" />
                    <span className="text-[10px] font-mono font-bold text-emerald-300">
                      {currentPreview.metric}
                    </span>
                  </div>
                  <span className="hidden sm:inline-block px-2 py-1 rounded-lg bg-slate-100 text-slate-700 text-[10px] font-bold border border-slate-200">
                    {currentPreview.techBadge}
                  </span>
                </div>
              </div>
            </div>

            {/* Layered 3D Smartphone Device Mockup (Clean Mobile Preview — ZERO TEXT OVERLAY) */}
            <div
              onClick={() =>
                setActiveDevice((prev) => (prev === "mobile" ? "desktop" : "mobile"))
              }
              className={cn(
                "hidden sm:block absolute -bottom-6 -right-3 sm:-right-5 w-32 sm:w-44 aspect-[9/18] rounded-[2.2rem] bg-slate-950 border-[5px] border-slate-900 shadow-[0_25px_50px_-10px_rgba(0,0,0,0.5)] overflow-hidden z-30 transition-all duration-500 ease-out cursor-pointer group/phone",
                activeDevice === "mobile"
                  ? "ring-4 ring-[#FFB020] scale-110 -translate-y-3 shadow-[0_30px_60px_-10px_rgba(255,176,32,0.35)]"
                  : "hover:-translate-y-2 hover:scale-105 hover:ring-2 hover:ring-[#FFB020]/60"
              )}
              title="Click to toggle mobile responsive view"
            >
              {/* Dynamic Island Speaker Notch */}
              <div className="absolute top-2 left-1/2 -translate-x-1/2 w-12 h-3 bg-black rounded-full z-40 border border-slate-800/50" />

              {/* Pure Mobile Screenshot (Zero Text Overlay on Phone Screen) */}
              <div className="relative w-full h-full bg-slate-900">
                <Image
                  src={currentPreview.mobileImage}
                  alt={`${currentPreview.name} mobile responsive design showcase`}
                  fill
                  className="object-cover object-top transition-transform duration-500 group-hover/phone:scale-103"
                  sizes="180px"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

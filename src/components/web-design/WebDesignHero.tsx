"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Sparkles,
  ArrowRight,
  Palette,
  Zap,
  ShoppingBag,
  Users,
  Star,
  ShieldCheck,
  Clock,
  CheckCircle2,
  Activity,
  Code2,
  Check,
  Laptop,
  Smartphone,
  ExternalLink,
  Layers,
  ChevronRight,
  MousePointer2,
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
    name: "Linear · Next-Gen SaaS",
    category: "High-Growth Software",
    desktopImage: "/images/ref-linear.jpg",
    mobileImage: "/images/ref-linear.jpg",
    url: "linear.app/craft",
    tagline: "Sub-second developer tools & keyboard-first navigation",
    metric: "100/100 Core Web Vitals",
    techBadge: "Next.js 16 + React 19",
  },
  {
    id: "ecommerce",
    name: "Allbirds · DTC Retail",
    category: "High-Velocity Commerce",
    desktopImage: "/images/ref-allbirds.jpg",
    mobileImage: "/images/ref-allbirds.jpg",
    url: "allbirds.com/store",
    tagline: "Headless Shopify Plus with instant slide-out micro-cart",
    metric: "4.6% Avg. Checkout Conv.",
    techBadge: "Shopify Plus & Stripe",
  },
  {
    id: "healthcare",
    name: "One Medical · Digital Health",
    category: "Telehealth & Clinic",
    desktopImage: "/images/ref-onemedical.jpg",
    mobileImage: "/images/ref-onemedical.jpg",
    url: "onemedical.com/care",
    tagline: "Frictionless 1-tap mobile booking & HIPAA-grade portal",
    metric: "< 0.8s LCP Load Time",
    techBadge: "Custom UI/UX & React",
  },
  {
    id: "corporate",
    name: "McKinsey · Global Advisory",
    category: "Enterprise Consulting",
    desktopImage: "/images/ref-mckinsey.jpg",
    mobileImage: "/images/ref-mckinsey.jpg",
    url: "mckinsey.com/insights",
    tagline: "Authoritative editorial portal & executive lead routing",
    metric: "Multi-Language CDN",
    techBadge: "Enterprise Headless CMS",
  },
];

export function WebDesignHero() {
  const [activePreviewId, setActivePreviewId] = useState<string>("saas");
  const [activeDevice, setActiveDevice] = useState<"desktop" | "mobile">("desktop");

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
          {/* LEFT COLUMN (6 cols): Editorial Messaging, Authority & Actions  */}
          {/* ================================================================ */}
          <div className="lg:col-span-6 space-y-4 sm:space-y-5 text-left">
            {/* 1. Prestige Agency Live Overlap Kicker */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md border border-[#E2DBD0] shadow-2xs">
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

            {/* 2. Authority Headline: "Your Website Should Do More Than Look Good..." */}
            <div className="space-y-2.5">
              <h1 className="font-display font-black text-3xl sm:text-4xl lg:text-[40px] xl:text-[44px] text-[#060B22] tracking-tight leading-[1.12]">
                Your Website Should Do More Than Look Good.{" "}
                <span className="bg-gradient-to-r from-[#B87A00] via-[#FFB020] to-[#E68A00] bg-clip-text text-transparent">
                  It Should Grow Your Business.
                </span>
              </h1>

              {/* Subheading: Professional Web Design and Development Services for Growing Businesses */}
              <div className="space-y-2 text-xs sm:text-[13px] text-slate-700 leading-relaxed font-normal max-w-xl">
                <p className="font-semibold text-slate-800">
                  Professional Web Design and Development Services for Growing Businesses.
                </p>
                <p>
                  If you are searching for web design and development services to build or upgrade your business website, Hire Desi Marketer offers web design and development services that blend simple design ideas, up-to-date development tools and user-friendly experiences to make websites that fit your business goals.
                </p>
                <p>
                  From custom website design and website redesign services to ecommerce website development and CMS development, our team offers scalable and user-friendly website solutions. Whether you need a website or want to hire experienced web developers in India, we help turn your requirements into a good digital experience.
                </p>
              </div>
            </div>

            {/* 3. Primary & Secondary CTAs (Clear, Non-Conflicting Hierarchy) */}
            <div className="pt-1 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a
                href="#final-cta"
                className="btn-luxury-gold btn-shimmer py-3 px-6 rounded-xl text-xs font-black uppercase tracking-wider flex items-center justify-center gap-2 shadow-md hover:shadow-[0_0_25px_rgba(255,176,32,0.4)] transition-all cursor-pointer text-center"
              >
                <span>Let's Build Your Website</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#services"
                className="btn-luxury-navy py-3 px-5 rounded-xl text-xs font-bold flex items-center justify-center gap-2 shadow-2xs border border-slate-700 hover:border-[#FFB020] transition-colors cursor-pointer text-center"
              >
                <span>Explore Our Work</span>
              </a>
            </div>

            {/* 4. Instant Fixed Scoping Prompt */}
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

            {/* 5. Clean Trust & Verified Deliverables Row */}
            <div className="pt-3 border-t border-[#E2DBD0] flex flex-wrap items-center gap-3 sm:gap-5 text-[11px] text-slate-600">
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
          {/* RIGHT COLUMN (6 cols): Realistic Interactive Website Showcase    */}
          {/* ================================================================ */}
          <div className="lg:col-span-6 relative mt-4 lg:mt-0">
            {/* Interactive Category Selector Tabs */}
            <div className="flex items-center justify-between gap-1 mb-2.5 pb-1 overflow-x-auto no-scrollbar">
              <div className="flex items-center gap-1">
                {PREVIEW_DATA.map((p) => {
                  const isSelected = p.id === activePreviewId;
                  return (
                    <button
                      key={p.id}
                      type="button"
                      onClick={() => setActivePreviewId(p.id)}
                      className={cn(
                        "px-2.5 sm:px-3 py-1 rounded-lg text-[10px] sm:text-[11px] font-bold transition-all duration-200 cursor-pointer select-none border shrink-0",
                        isSelected
                          ? "bg-[#060B22] text-[#FFB020] border-[#FFB020] shadow-xs"
                          : "bg-white/80 text-slate-600 border-[#E2DBD0] hover:border-slate-400 hover:text-[#060B22]"
                      )}
                    >
                      {p.name.split("·")[0].trim()}
                    </button>
                  );
                })}
              </div>

              {/* Viewport Switcher (Desktop vs Mobile Mockup Focus) */}
              <div className="hidden sm:flex items-center gap-1 bg-white border border-[#E2DBD0] p-0.5 rounded-lg text-slate-500 text-[10px] shrink-0">
                <button
                  type="button"
                  onClick={() => setActiveDevice("desktop")}
                  className={cn(
                    "px-2 py-0.5 rounded-md font-bold transition-all flex items-center gap-1 cursor-pointer",
                    activeDevice === "desktop"
                      ? "bg-[#060B22] text-white"
                      : "hover:text-[#060B22]"
                  )}
                  title="Inspect Desktop Architecture"
                >
                  <Laptop className="w-3 h-3" />
                  <span>1440px</span>
                </button>
                <button
                  type="button"
                  onClick={() => setActiveDevice("mobile")}
                  className={cn(
                    "px-2 py-0.5 rounded-md font-bold transition-all flex items-center gap-1 cursor-pointer",
                    activeDevice === "mobile"
                      ? "bg-[#060B22] text-white"
                      : "hover:text-[#060B22]"
                  )}
                  title="Inspect Mobile Responsive Flow"
                >
                  <Smartphone className="w-3 h-3" />
                  <span>390px</span>
                </button>
              </div>
            </div>

            {/* Central Layered Showcase Canvas (Clean Studio Presentation - No Fake Browser Header) */}
            <div className="relative rounded-2xl sm:rounded-3xl bg-white border border-[#E2DBD0] shadow-[0_20px_50px_-12px_rgba(6,11,34,0.14)] overflow-hidden transition-all duration-300 group">
              {/* Realistic Website Screenshot Area */}
              <div className="relative aspect-[16/10] sm:aspect-[16/9.5] w-full bg-slate-950 overflow-hidden">
                <Image
                  src={currentPreview.desktopImage}
                  alt={`${currentPreview.name} live preview`}
                  fill
                  className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-103"
                  sizes="(max-width: 1024px) 100vw, 650px"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

                {/* Interactive Floating Design Inspector Tag */}
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-[#060B22]/90 backdrop-blur-md border border-white/20 text-[#FFB020] text-[9.5px] font-mono font-bold flex items-center gap-1.5 shadow-md pointer-events-none z-10 animate-float-subtle">
                  <Code2 className="w-3 h-3 text-[#FFB020]" />
                  <span>&lt;Hero.Architecture performance="99+" /&gt;</span>
                </div>

                {/* Bottom Bar inside Browser: Live Metrics & Tech Stack */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between z-10 pointer-events-none gap-2">
                  <div className="bg-[#060B22]/90 backdrop-blur-md border border-white/15 px-3 py-1 rounded-xl text-left">
                    <div className="text-[9px] uppercase tracking-wider text-slate-400 font-bold">
                      {currentPreview.category}
                    </div>
                    <div className="text-xs font-bold text-white truncate max-w-[220px]">
                      {currentPreview.name}
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 bg-[#060B22]/90 backdrop-blur-md border border-white/15 px-2.5 py-1 rounded-xl text-right">
                    <Activity className="w-3 h-3 text-emerald-400 animate-pulse" />
                    <span className="text-[10px] font-black text-emerald-300">
                      {currentPreview.metric}
                    </span>
                  </div>
                </div>
              </div>

              {/* Showcase Footer with Micro-Capabilities */}
              <div className="p-3 sm:p-3.5 bg-white border-t border-[#E2DBD0] flex items-center justify-between text-left text-xs">
                <div className="min-w-0 pr-2">
                  <span className="text-[10px] uppercase font-bold text-[#B87A00] block">
                    Architecture Highlights:
                  </span>
                  <span className="text-slate-600 text-[11px] font-medium block truncate">
                    {currentPreview.tagline}
                  </span>
                </div>
                <span className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 text-[10px] font-bold border border-slate-200 shrink-0">
                  {currentPreview.techBadge}
                </span>
              </div>
            </div>

            {/* Floating Mobile Device Preview (Layered Depth & 3D Parallax Touch) */}
            <div
              className={cn(
                "hidden sm:block absolute -bottom-5 -right-3 sm:-right-5 w-32 sm:w-40 aspect-[9/18] rounded-[2rem] bg-slate-950 border-4 border-slate-800 shadow-2xl overflow-hidden z-20 transition-all duration-300 hover:scale-105",
                activeDevice === "mobile"
                  ? "ring-4 ring-[#FFB020] scale-105"
                  : "hover:ring-2 hover:ring-[#FFB020]/40"
              )}
            >
              {/* Dynamic Island / Mobile Notch */}
              <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-12 h-2.5 bg-black rounded-full z-30" />

              <div className="relative w-full h-full bg-slate-900">
                <Image
                  src={currentPreview.mobileImage}
                  alt={`${currentPreview.name} mobile responsive preview`}
                  fill
                  className="object-cover object-top"
                  sizes="160px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

                <div className="absolute bottom-2 left-1.5 right-1.5 bg-black/85 backdrop-blur-md p-1 rounded-lg text-center text-[7.5px] font-bold text-white">
                  100% Mobile Fluid
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

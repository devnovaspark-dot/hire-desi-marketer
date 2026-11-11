"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  Sparkles,
  ArrowRight,
  AlertTriangle,
  Zap,
  ShieldCheck,
  TrendingDown,
  TrendingUp,
  Clock,
  Gauge,
  CheckCircle2,
  XCircle,
} from "lucide-react";
import { cn } from "@/lib/utils";
import StarBorder from "@/components/ui/StarBorder";

type EngineMode = "leaky" | "hdm";

// ====================================================================
// AUTHENTIC HIGH-RESOLUTION BRAND ICONS (SHARP, TACTILE, RECOGNIZABLE)
// ====================================================================

function RealGoogleAdsIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <defs>
        <filter id="gads-shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="1" stdDeviation="1" floodColor="#000" floodOpacity="0.15" />
        </filter>
      </defs>
      <path
        d="M4.05 14.53l6.09-10.55c.67-1.16 2.15-1.56 3.31-.89l3.41 1.97c1.16.67 1.56 2.15.89 3.31L11.66 18.92c-.67 1.16-2.15 1.56-3.31.89L4.94 17.84c-1.16-.67-1.56-2.15-.89-3.31z"
        fill="#FBBC04"
        filter="url(#gads-shadow)"
      />
      <path
        d="M19.95 14.53l-6.09-10.55c-.67-1.16-2.15-1.56-3.31-.89l-3.41 1.97c-1.16.67-1.56 2.15-.89 3.31l6.09 10.55c.67 1.16 2.15 1.56 3.31.89l3.41-1.97c1.16-.67 1.56-2.15.89-3.31z"
        fill="#4285F4"
        filter="url(#gads-shadow)"
      />
      <circle cx="7.7" cy="16.5" r="3.2" fill="#34A853" filter="url(#gads-shadow)" />
    </svg>
  );
}

function RealMetaIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <defs>
        <linearGradient id="meta-grad-real" x1="2" y1="12" x2="22" y2="12" gradientUnits="userSpaceOnUse">
          <stop stopColor="#0064E0" />
          <stop offset="0.45" stopColor="#0082FB" />
          <stop offset="0.85" stopColor="#00A2FF" />
          <stop offset="1" stopColor="#00C7FF" />
        </linearGradient>
      </defs>
      <path
        d="M16.995 3c-2.457 0-4.07 1.488-4.995 2.871C11.075 4.488 9.462 3 7.005 3 3.633 3 1 5.922 1 9.94c0 4.673 3.978 8.653 10.428 11.06.37.139.774.139 1.144 0C19.022 18.593 23 14.613 23 9.94 23 5.922 20.367 3 16.995 3zm-9.99 12.35c-2.185 0-3.957-1.772-3.957-3.957 0-2.185 1.772-3.957 3.957-3.957 1.93 0 3.308 1.42 4.148 2.766-.99 1.587-2.316 5.148-4.148 5.148zm9.99 0c-1.832 0-3.158-3.561-4.148-5.148.84-1.346 2.218-2.766 4.148-2.766 2.185 0 3.957 1.772 3.957 3.957 0 2.185-1.772 3.957-3.957 3.957z"
        fill="url(#meta-grad-real)"
      />
    </svg>
  );
}

function RealGoogleSearchIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24">
      <path
        fill="#4285F4"
        d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"
      />
      <path
        fill="#34A853"
        d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.27 21.36 7.33 24 12 24z"
      />
      <path
        fill="#FBBC04"
        d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.99 0 12s.45 3.82 1.25 5.42l4.03-3.15z"
      />
      <path
        fill="#EA4335"
        d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.27 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
      />
    </svg>
  );
}

function RealBrandShieldIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <defs>
        <linearGradient id="brand-gold-glow" x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFE082" />
          <stop offset="0.5" stopColor="#FFB020" />
          <stop offset="1" stopColor="#B37400" />
        </linearGradient>
      </defs>
      <path
        d="M12 2L3 6.5v6.2c0 5.6 3.8 10.8 9 12.3 5.2-1.5 9-6.7 9-12.3V6.5L12 2z"
        fill="url(#brand-gold-glow)"
        stroke="#FFFFFF"
        strokeWidth="1.2"
      />
      <path
        d="M12 6.5l1.6 3.3 3.6.5-2.6 2.5.6 3.6-3.2-1.7-3.2 1.7.6-3.6-2.6-2.5 3.6-.5L12 6.5z"
        fill="#060B22"
      />
    </svg>
  );
}

// ====================================================================
// DATA SPECIFICATIONS FOR CONVERGING ARCHITECTURE CIRCUIT
// ====================================================================

interface ChannelData {
  id: string;
  name: string;
  shortName: string;
  tag: string;
  icon: (props: { className?: string }) => React.ReactElement;
  leakyBadge: string;
  hdmBadge: string;
  leakySummary: string;
  hdmSummary: string;
  speed: { label: string; leakyValue: string; hdmValue: string; leakyNote: string; hdmNote: string };
  quality: { label: string; leakyValue: string; hdmValue: string; leakyNote: string; hdmNote: string };
  roas: { label: string; leakyValue: string; hdmValue: string; leakyNote: string; hdmNote: string };
}

const CHANNELS: ChannelData[] = [
  {
    id: "google-ads",
    name: "Google Ads",
    shortName: "Google",
    tag: "Paid Search Intent",
    icon: RealGoogleAdsIcon,
    leakyBadge: "72% Bounce",
    hdmBadge: "10/10 Score",
    leakySummary: "Generic slow templates cause 72% bounce before the headline finishes loading, wasting top-dollar CPC bids.",
    hdmSummary: "Exact keyword-to-headline alignment with sub-second page paint turns expensive search clicks into booked consultations.",
    speed: {
      label: "Initial Paint Speed",
      leakyValue: "3.6s",
      hdmValue: "0.58s",
      leakyNote: "Slow template lag ✗",
      hdmNote: "Sub-second edge paint ✓",
    },
    quality: {
      label: "Google Quality Score",
      leakyValue: "3 / 10",
      hdmValue: "10 / 10",
      leakyNote: "High CPC bid penalty ✗",
      hdmNote: "Lowest CPC / Top rank ✓",
    },
    roas: {
      label: "Return on Ad Spend",
      leakyValue: "0.8x",
      hdmValue: "4.8x",
      leakyNote: "Capital leak on bounce ✗",
      hdmNote: "High-impact ROAS ✓",
    },
  },
  {
    id: "meta-ads",
    name: "Meta & Social",
    shortName: "Meta",
    tag: "Mobile Feed Scrollers",
    icon: RealMetaIcon,
    leakyBadge: "81% Drop",
    hdmBadge: "1-Tap Buy",
    leakySummary: "Mobile friction and sluggish page weight cause 81% of social scrollers to abandon before discovering your offer.",
    hdmSummary: "Thumb-first mobile flow and instant 1-tap checkout capture high-intent social buyers seamlessly at 60 FPS.",
    speed: {
      label: "Mobile Paint Speed",
      leakyValue: "3.9s",
      hdmValue: "0.62s",
      leakyNote: "Severe mobile lag ✗",
      hdmNote: "Fluid 60 FPS mobile UI ✓",
    },
    quality: {
      label: "Mobile Conversion",
      leakyValue: "0.9%",
      hdmValue: "4.6%",
      leakyNote: "Cart abandon penalty ✗",
      hdmNote: "+380% conversion lift ✓",
    },
    roas: {
      label: "Return on Ad Spend",
      leakyValue: "0.6x",
      hdmValue: "5.4x",
      leakyNote: "Negative social return ✗",
      hdmNote: "Compounding returns ✓",
    },
  },
  {
    id: "seo",
    name: "Technical SEO",
    shortName: "SEO",
    tag: "Organic Search Authority",
    icon: RealGoogleSearchIcon,
    leakyBadge: "CLS Penalty",
    hdmBadge: "Top 3 Rank",
    leakySummary: "Failing Core Web Vitals and layout shifts trigger algorithmic rank demotions, drying up organic search traffic.",
    hdmSummary: "Clean semantic HTML5, zero CLS, and automated Schema.org structured data get rewarded with top Google rankings.",
    speed: {
      label: "Core Web Vitals",
      leakyValue: "Failing",
      hdmValue: "100/100",
      leakyNote: "Fails Google audit ✗",
      hdmNote: "Google top 1% benchmark ✓",
    },
    quality: {
      label: "Organic Search Rank",
      leakyValue: "#18-35",
      hdmValue: "Top 3",
      leakyNote: "Suppressed keyword rank ✗",
      hdmNote: "High search authority ✓",
    },
    roas: {
      label: "Organic Pipeline",
      leakyValue: "Stagnant",
      hdmValue: "3.8x Lift",
      leakyNote: "Zero compounding growth ✗",
      hdmNote: "Free compounding leads ✓",
    },
  },
  {
    id: "brand",
    name: "Brand & Direct",
    shortName: "Direct",
    tag: "Executive Authority",
    icon: RealBrandShieldIcon,
    leakyBadge: "Zero Win",
    hdmBadge: "Enterprise",
    leakySummary: "Executive referrals land on dated, generic templates with no clear commercial path, losing high-value contracts.",
    hdmSummary: "Bespoke executive-grade design, interactive scoping modules, and direct senior calendar routing secure major accounts.",
    speed: {
      label: "Executive Perception",
      leakyValue: "Generic",
      hdmValue: "Elite Tier",
      leakyNote: "Template look & feel ✗",
      hdmNote: "Bespoke digital craft ✓",
    },
    quality: {
      label: "Intake Completion",
      leakyValue: "12%",
      hdmValue: "48%",
      leakyNote: "Friction-heavy intake ✗",
      hdmNote: "Direct 1-tap intake ✓",
    },
    roas: {
      label: "Enterprise Pipeline",
      leakyValue: "Low Win-Rate",
      hdmValue: "High-Value",
      leakyNote: "Weak brand credibility ✗",
      hdmNote: "Premium pricing power ✓",
    },
  },
];

export function MarketingWebsiteSynergy() {
  // 1. Default to "leaky" as requested: "keep by default on the leaky"
  const [mode, setMode] = useState<EngineMode>("leaky");
  const [activeChannelId, setActiveChannelId] = useState<string>("google-ads");
  const [hasUserInteracted, setHasUserInteracted] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // 2. Auto-slide: Starts on Leaky, and ONLY starts counting down once the visitor scrolls it into view!
  useEffect(() => {
    if (hasUserInteracted) return;

    const el = sectionRef.current;
    if (!el) return;

    let slideTimer: ReturnType<typeof setTimeout> | null = null;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasUserInteracted) {
            // Once the user sees the leaky card in view, wait 2.5s then smoothly slide to HDM!
            if (!slideTimer) {
              slideTimer = setTimeout(() => {
                setMode("hdm");
              }, 2500);
            }
          }
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
      if (slideTimer) clearTimeout(slideTimer);
    };
  }, [hasUserInteracted]);

  const handleModeChange = (newMode: EngineMode) => {
    setHasUserInteracted(true);
    setMode(newMode);
  };

  const handleChannelChange = (chId: string) => {
    setHasUserInteracted(true);
    setActiveChannelId(chId);
  };

  const activeChannel =
    CHANNELS.find((c) => c.id === activeChannelId) || CHANNELS[0];
  const isHdm = mode === "hdm";

  // Coordinates for the 4 converging circuit paths (ViewBox: 0 0 600 90)
  const satelliteXCoords = [75, 225, 375, 525];
  const hubCenterX = 300;
  const hubCenterY = 88;

  return (
    <section
      ref={sectionRef}
      id="marketing-foundation"
      className="py-12 sm:py-16 lg:py-20 bg-[#FAF8F5] border-y border-[#E2DBD0] select-none scroll-mt-24 relative overflow-hidden text-left"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-7 sm:space-y-9 text-center">
        {/* ============================================================ */}
        {/* 1. SECTION HEADER                                            */}
        {/* ============================================================ */}
        <div className="space-y-3 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#060B22] text-[#FFB020] text-xs font-black uppercase tracking-wider border border-[#FFB020]/30 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#FFB020]" />
            <span>Conversion Architecture · Marketing &amp; Website Synergy</span>
          </div>

          <h2 className="font-display font-black text-2xl sm:text-3xl lg:text-4xl text-[#0B1B3A] tracking-tight leading-tight">
            A Great Advertising Campaign Cannot Fix a Leaky Website.
          </h2>

          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal max-w-2xl mx-auto">
            Your ad spend is only as profitable as the website it sends visitors to. Slide between a typical leaky website and an engineered conversion engine.
          </p>
        </div>

        {/* ============================================================ */}
        {/* 2. DUAL-MODE CONTROLLER WITH ANIMATED "VS" BADGE              */}
        {/* ============================================================ */}
        <div className="flex flex-col items-center gap-2 max-w-3xl mx-auto">
          <div className="inline-flex items-center p-1.5 bg-white rounded-2xl border border-[#E2DBD0] shadow-sm">
            <button
              type="button"
              onClick={() => handleModeChange("leaky")}
              className={cn(
                "py-2 px-3 sm:px-5 rounded-xl text-xs font-bold transition-all duration-500 cursor-pointer flex items-center gap-1.5 sm:gap-2 border",
                !isHdm
                  ? "bg-rose-950 text-rose-300 border-rose-500/40 shadow-sm font-black"
                  : "bg-transparent text-slate-600 hover:text-slate-900 hover:bg-slate-50 border-transparent"
              )}
            >
              <AlertTriangle className={cn("w-3.5 h-3.5 sm:w-4 sm:h-4", !isHdm ? "text-rose-400" : "text-slate-400")} />
              <span>Typical Leaky Website</span>
            </button>

            {/* Animated VS Badge */}
            <div className="relative mx-1 sm:mx-2 shrink-0 flex items-center justify-center select-none" aria-label="Versus">
              <span className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-rose-500 via-amber-400 to-[#FFB020] opacity-75 blur-[2px] animate-pulse" />
              <span className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-rose-500 via-amber-400 to-[#FFB020] opacity-50 animate-[spin_5s_linear_infinite]" />
              <div className="relative w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#060B22] border border-amber-300/40 flex items-center justify-center shadow-xs">
                <span className="text-[9px] sm:text-[10px] font-black font-mono tracking-tight bg-gradient-to-r from-rose-300 via-amber-200 to-[#FFB020] bg-clip-text text-transparent">
                  VS
                </span>
              </div>
            </div>

            <button
              type="button"
              onClick={() => handleModeChange("hdm")}
              className={cn(
                "py-2 px-3 sm:px-5 rounded-xl text-xs font-bold transition-all duration-500 cursor-pointer flex items-center gap-1.5 sm:gap-2 border",
                isHdm
                  ? "bg-[#060B22] text-[#FFB020] border-[#FFB020]/60 shadow-sm font-black"
                  : "bg-transparent text-slate-600 hover:text-slate-900 hover:bg-slate-50 border-transparent"
              )}
            >
              <Zap className={cn("w-3.5 h-3.5 sm:w-4 sm:h-4", isHdm ? "text-[#FFB020] fill-[#FFB020]" : "text-slate-400")} />
              <span>HDM Revenue Engine</span>
            </button>
          </div>

          {/* Slide Indicator Dots */}
          <div className="flex items-center justify-center gap-2 pt-1" aria-hidden="true">
            <button
              type="button"
              onClick={() => handleModeChange("leaky")}
              className={cn(
                "h-1.5 rounded-full transition-all duration-500 cursor-pointer",
                !isHdm ? "w-6 bg-rose-500" : "w-1.5 bg-slate-300 hover:bg-slate-400"
              )}
              title="Slide 1: Typical Leaky Website"
            />
            <button
              type="button"
              onClick={() => handleModeChange("hdm")}
              className={cn(
                "h-1.5 rounded-full transition-all duration-500 cursor-pointer",
                isHdm ? "w-6 bg-[#FFB020]" : "w-1.5 bg-slate-300 hover:bg-slate-400"
              )}
              title="Slide 2: HDM Revenue Engine"
            />
          </div>
        </div>

        {/* ============================================================ */}
        {/* 3. HORIZONTAL SLIDING CARD VIEWPORT (SLIDES FROM LEAKY TO HDM)*/}
        {/* ============================================================ */}
        <div className="overflow-hidden w-full rounded-2xl sm:rounded-3xl border border-[#E2DBD0] shadow-xl shadow-slate-200/50 bg-white">
          <div
            className="flex w-[200%] transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
            style={{
              transform: mode === "leaky" ? "translateX(0%)" : "translateX(-50%)",
            }}
          >
            {/* ============================================================ */}
            {/* SLIDE 1: TYPICAL LEAKY WEBSITE CARD                          */}
            {/* ============================================================ */}
            <div className="w-1/2 p-4 sm:p-7 lg:p-8 space-y-4 sm:space-y-6 shrink-0 text-left">
              {/* Top Engine State Bar */}
              <div className="flex items-center justify-between pb-3 border-b border-[#E2DBD0]">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] sm:text-[11px] font-mono font-black uppercase tracking-wider px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full bg-rose-950 text-rose-300 border border-rose-500/30 shadow-xs">
                    Typical Template Leak
                  </span>
                  <span className="text-[11px] sm:text-xs font-mono font-bold text-slate-500 hidden sm:inline">
                    Channel: {activeChannel.name} ({activeChannel.tag})
                  </span>
                </div>

                <span className="text-[9.5px] sm:text-[11px] font-mono font-bold px-2.5 py-0.5 rounded-full border bg-rose-50 text-rose-700 border-rose-200">
                  72% BUDGET LEAK
                </span>
              </div>

              {/* Inner Circuit Board (Leaky Crimson Tracks) */}
              <div className="rounded-xl sm:rounded-2xl border p-2.5 sm:p-5 lg:p-6 relative overflow-hidden bg-[#FFF5F5] border-rose-200">
                {/* 4 Satellite Channel Cards */}
                <div className="grid grid-cols-4 gap-1.5 sm:gap-3 text-center relative z-10">
                  {CHANNELS.map((ch) => {
                    const IconComp = ch.icon;
                    const isSelected = ch.id === activeChannelId;

                    return (
                      <button
                        key={ch.id}
                        type="button"
                        onClick={() => handleChannelChange(ch.id)}
                        className={cn(
                          "flex flex-col items-center gap-1 sm:gap-2 p-1.5 sm:p-3 rounded-xl border transition-all duration-300 cursor-pointer text-center group",
                          isSelected
                            ? "bg-white border-rose-500 shadow-md ring-2 ring-rose-500/30 scale-[1.02]"
                            : "bg-white/80 border-[#E2DBD0] hover:bg-white hover:border-slate-400 shadow-xs"
                        )}
                      >
                        <div className="w-7 h-7 sm:w-11 sm:h-11 rounded-lg sm:rounded-xl flex items-center justify-center border transition-transform group-hover:scale-105 shrink-0 shadow-2xs bg-rose-50/60 border-rose-200">
                          <IconComp className="w-4 h-4 sm:w-6 sm:h-6" />
                        </div>
                        <div className="w-full min-w-0">
                          <div className="text-[9px] sm:text-xs font-display font-black text-[#0B1B3A] tracking-tight truncate">
                            <span className="sm:hidden">{ch.shortName}</span>
                            <span className="hidden sm:inline">{ch.name}</span>
                          </div>
                          <div className="text-[8px] sm:text-[9.5px] font-mono text-slate-500 truncate hidden sm:block">
                            {ch.tag}
                          </div>
                        </div>
                        <span className="text-[7px] sm:text-[9px] font-mono font-bold px-1 sm:px-1.5 py-0.5 rounded-md border truncate max-w-full bg-rose-100 text-rose-800 border-rose-300">
                          {ch.leakyBadge}
                        </span>
                      </button>
                    );
                  })}
                </div>

                {/* Curved Leaky Circuit Lines (SVG) */}
                <div className="relative w-full h-11 sm:h-20 my-0.5 sm:my-1 pointer-events-none">
                  <svg
                    className="w-full h-full overflow-visible"
                    viewBox="0 0 600 90"
                    fill="none"
                    preserveAspectRatio="none"
                  >
                    <defs>
                      <filter id="circuit-rose-glow-slide1" x="-50%" y="-50%" width="200%" height="200%">
                        <feGaussianBlur stdDeviation="3.5" result="blur" />
                        <feMerge>
                          <feMergeNode in="blur" />
                          <feMergeNode in="SourceGraphic" />
                        </feMerge>
                      </filter>
                      <linearGradient id="circuit-base-wire-slide1" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#E8D5D8" />
                        <stop offset="100%" stopColor="#D8BAC0" />
                      </linearGradient>
                      <linearGradient id="circuit-leaky-stream-slide1" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#E8D5D8" stopOpacity="0.3" />
                        <stop offset="50%" stopColor="#F43F5E" stopOpacity="0.85" />
                        <stop offset="100%" stopColor="#E11D48" stopOpacity="1" />
                      </linearGradient>
                    </defs>

                    {satelliteXCoords.map((x, sIdx) => {
                      const isChActive = CHANNELS[sIdx]?.id === activeChannelId;
                      const pathD = `M ${x} 0 C ${x} 45, ${hubCenterX + (x - hubCenterX) * 0.15} 60, ${hubCenterX} ${hubCenterY}`;

                      return (
                        <g key={sIdx}>
                          <path
                            d={pathD}
                            stroke="url(#circuit-base-wire-slide1)"
                            strokeWidth={isChActive ? "2.2" : "1.8"}
                            strokeLinecap="round"
                          />
                          <path
                            d={pathD}
                            stroke="url(#circuit-leaky-stream-slide1)"
                            strokeWidth={isChActive ? "3" : "2"}
                            strokeLinecap="round"
                            opacity={isChActive ? "1" : "0.75"}
                          />
                          <circle
                            r={isChActive ? "4.5" : "3.5"}
                            fill="#F43F5E"
                            filter="url(#circuit-rose-glow-slide1)"
                          >
                            <animateMotion
                              path={pathD}
                              dur={`${2.0 + sIdx * 0.3}s`}
                              repeatCount="indefinite"
                            />
                          </circle>
                          <circle r="2" fill="#FFFFFF">
                            <animateMotion
                              path={pathD}
                              dur={`${2.0 + sIdx * 0.3}s`}
                              repeatCount="indefinite"
                            />
                          </circle>
                        </g>
                      );
                    })}
                  </svg>
                </div>

                {/* Central Leaky Hub */}
                <div className="flex justify-center relative z-10 -mt-1 sm:-mt-2">
                  <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3.5 py-1.5 sm:px-6 sm:py-2.5 rounded-full font-display font-black text-[11px] sm:text-sm shadow-xl border-2 transition-all duration-300 bg-gradient-to-r from-rose-950 via-[#2A0B13] to-rose-950 text-rose-100 border-rose-500 shadow-[0_0_25px_rgba(244,63,94,0.35)]">
                    <AlertTriangle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-rose-400 animate-pulse" />
                    <span>Leaky Template Funnel (72% Dropoff)</span>
                  </div>
                </div>

                {/* Leaky Telemetry Bar */}
                <div className="mt-2.5 sm:mt-5 space-y-1.5 sm:space-y-2 pt-2 sm:pt-3.5 border-t border-rose-200/70">
                  <div className="flex items-center justify-between text-[10px] sm:text-xs font-mono">
                    <div className="flex items-center gap-1.5 sm:gap-2 text-slate-700 min-w-0">
                      <span className="relative inline-flex rounded-full h-2 w-2 shrink-0 bg-rose-500" />
                      <span className="truncate text-left font-bold text-slate-800">
                        <span className="sm:hidden">Friction: {activeChannel.shortName}</span>
                        <span className="hidden sm:inline">
                          Friction: {activeChannel.name} • 3.6s Template Freeze
                        </span>
                      </span>
                    </div>
                    <span className="font-extrabold shrink-0 ml-1.5 text-rose-700">
                      72% Leaked
                    </span>
                  </div>
                  <div className="h-1.5 sm:h-2 w-full bg-slate-200 rounded-full overflow-hidden p-0.5 border border-slate-300/60">
                    <div
                      className="h-full bg-gradient-to-r from-rose-600 to-red-600 rounded-full shadow-[0_0_10px_rgba(244,63,94,0.6)]"
                      style={{ width: "28%" }}
                    />
                  </div>
                </div>
              </div>

              {/* Leaky Summary Banner */}
              <div className="p-2.5 sm:p-3 rounded-xl border text-xs sm:text-sm font-medium flex items-center gap-2 sm:gap-2.5 bg-rose-50/70 border-rose-200/80 text-rose-950 min-h-[46px]">
                <XCircle className="w-4 h-4 text-rose-600 shrink-0" />
                <p className="leading-snug">{activeChannel.leakySummary}</p>
              </div>

              {/* 3 Leaky Metric Dials */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3.5">
                <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl border space-y-1 relative overflow-hidden min-h-[86px] sm:min-h-[92px] bg-rose-50/50 border-rose-200 shadow-xs">
                  <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-wider text-slate-500">
                    <span>{activeChannel.speed.label}</span>
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                  </div>
                  <div className="font-display font-black text-2xl sm:text-3xl text-rose-600">
                    {activeChannel.speed.leakyValue}
                  </div>
                  <div className="text-[11px] text-slate-500 font-medium truncate">
                    {activeChannel.speed.leakyNote}
                  </div>
                </div>

                <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl border space-y-1 relative overflow-hidden min-h-[86px] sm:min-h-[92px] bg-rose-50/50 border-rose-200 shadow-xs">
                  <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-wider text-slate-500">
                    <span>{activeChannel.quality.label}</span>
                    <Gauge className="w-3.5 h-3.5 text-slate-400" />
                  </div>
                  <div className="font-display font-black text-2xl sm:text-3xl text-rose-600">
                    {activeChannel.quality.leakyValue}
                  </div>
                  <div className="text-[11px] text-slate-500 font-medium truncate">
                    {activeChannel.quality.leakyNote}
                  </div>
                </div>

                <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl border space-y-1 relative overflow-hidden min-h-[86px] sm:min-h-[92px] bg-rose-50/50 border-rose-200 shadow-xs">
                  <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-wider text-slate-500">
                    <span>{activeChannel.roas.label}</span>
                    <TrendingDown className="w-3.5 h-3.5 text-rose-500" />
                  </div>
                  <div className="font-display font-black text-2xl sm:text-3xl text-rose-600">
                    {activeChannel.roas.leakyValue}
                  </div>
                  <div className="text-[11px] text-slate-500 font-medium truncate">
                    {activeChannel.roas.leakyNote}
                  </div>
                </div>
              </div>

              {/* Bottom Audit Action Bar */}
              <div className="pt-3 sm:pt-4 border-t border-[#E2DBD0] flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="flex items-center gap-2 text-xs text-slate-600 text-left">
                  <ShieldCheck className="w-4 h-4 text-rose-600 shrink-0" />
                  <span>
                    Stop leaking ad budget. Our lead architects will audit your website conversion funnel.
                  </span>
                </div>

                <StarBorder
                  as={Link}
                  href="/get-a-quote"
                  className="w-full sm:w-auto py-2.5 sm:py-3 px-5 sm:px-6 rounded-xl text-xs font-black uppercase tracking-wider inline-flex items-center justify-center gap-2 shrink-0 cursor-pointer shadow-lg group"
                  radius={12}
                  color="#FFF8E7"
                  trailColor="#FFB020"
                  backgroundColor="#FFB020"
                  textColor="#060B22"
                  borderColor="rgba(255, 176, 32, 0.5)"
                  sparkle={true}
                  glow={0.8}
                >
                  <span>AUDIT YOUR WEBSITE FUNNEL</span>
                  <ArrowRight className="w-4 h-4 text-[#060B22] group-hover:translate-x-1 transition-transform" />
                </StarBorder>
              </div>
            </div>

            {/* ============================================================ */}
            {/* SLIDE 2: HDM CONVERSION REVENUE ENGINE CARD                  */}
            {/* ============================================================ */}
            <div className="w-1/2 p-4 sm:p-7 lg:p-8 space-y-4 sm:space-y-6 shrink-0 text-left">
              {/* Top Engine State Bar */}
              <div className="flex items-center justify-between pb-3 border-b border-[#E2DBD0]">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] sm:text-[11px] font-mono font-black uppercase tracking-wider px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full bg-[#060B22] text-[#FFB020] border border-[#FFB020]/30 shadow-xs">
                    HDM Engine Active
                  </span>
                  <span className="text-[11px] sm:text-xs font-mono font-bold text-slate-500 hidden sm:inline">
                    Channel: {activeChannel.name} ({activeChannel.tag})
                  </span>
                </div>

                <span className="text-[9.5px] sm:text-[11px] font-mono font-bold px-2.5 py-0.5 rounded-full border bg-teal-50 text-teal-700 border-teal-200">
                  96% EFFICIENCY
                </span>
              </div>

              {/* Inner Circuit Board (Radiant Gold & Teal Converging Tracks) */}
              <div className="rounded-xl sm:rounded-2xl border p-2.5 sm:p-5 lg:p-6 relative overflow-hidden bg-[#FAF8F5] border-[#E2DBD0]">
                {/* 4 Satellite Channel Cards */}
                <div className="grid grid-cols-4 gap-1.5 sm:gap-3 text-center relative z-10">
                  {CHANNELS.map((ch) => {
                    const IconComp = ch.icon;
                    const isSelected = ch.id === activeChannelId;

                    return (
                      <button
                        key={ch.id}
                        type="button"
                        onClick={() => handleChannelChange(ch.id)}
                        className={cn(
                          "flex flex-col items-center gap-1 sm:gap-2 p-1.5 sm:p-3 rounded-xl border transition-all duration-300 cursor-pointer text-center group",
                          isSelected
                            ? "bg-white border-[#FFB020] shadow-md ring-2 ring-[#FFB020]/30 scale-[1.02]"
                            : "bg-white/80 border-[#E2DBD0] hover:bg-white hover:border-slate-400 shadow-xs"
                        )}
                      >
                        <div className="w-7 h-7 sm:w-11 sm:h-11 rounded-lg sm:rounded-xl flex items-center justify-center border transition-transform group-hover:scale-105 shrink-0 shadow-2xs bg-[#FAF8F5] border-[#E2DBD0]">
                          <IconComp className="w-4 h-4 sm:w-6 sm:h-6" />
                        </div>
                        <div className="w-full min-w-0">
                          <div className="text-[9px] sm:text-xs font-display font-black text-[#0B1B3A] tracking-tight truncate">
                            <span className="sm:hidden">{ch.shortName}</span>
                            <span className="hidden sm:inline">{ch.name}</span>
                          </div>
                          <div className="text-[8px] sm:text-[9.5px] font-mono text-slate-500 truncate hidden sm:block">
                            {ch.tag}
                          </div>
                        </div>
                        <span className="text-[7px] sm:text-[9px] font-mono font-bold px-1 sm:px-1.5 py-0.5 rounded-md border truncate max-w-full bg-teal-100 text-teal-800 border-teal-300">
                          {ch.hdmBadge}
                        </span>
                      </button>
                    );
                  })}
                </div>

                {/* Curved Gold & Teal Circuit Lines (SVG) */}
                <div className="relative w-full h-11 sm:h-20 my-0.5 sm:my-1 pointer-events-none">
                  <svg
                    className="w-full h-full overflow-visible"
                    viewBox="0 0 600 90"
                    fill="none"
                    preserveAspectRatio="none"
                  >
                    <defs>
                      <filter id="circuit-gold-glow-slide2" x="-50%" y="-50%" width="200%" height="200%">
                        <feGaussianBlur stdDeviation="3.5" result="blur" />
                        <feMerge>
                          <feMergeNode in="blur" />
                          <feMergeNode in="SourceGraphic" />
                        </feMerge>
                      </filter>
                      <linearGradient id="circuit-base-wire-slide2" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#DDD5C9" />
                        <stop offset="100%" stopColor="#C5BDB1" />
                      </linearGradient>
                      <linearGradient id="circuit-hdm-stream-slide2" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#DDD5C9" stopOpacity="0.3" />
                        <stop offset="45%" stopColor="#2DD4BF" stopOpacity="0.85" />
                        <stop offset="100%" stopColor="#FFB020" stopOpacity="1" />
                      </linearGradient>
                    </defs>

                    {satelliteXCoords.map((x, sIdx) => {
                      const isChActive = CHANNELS[sIdx]?.id === activeChannelId;
                      const pathD = `M ${x} 0 C ${x} 45, ${hubCenterX + (x - hubCenterX) * 0.15} 60, ${hubCenterX} ${hubCenterY}`;

                      return (
                        <g key={sIdx}>
                          <path
                            d={pathD}
                            stroke="url(#circuit-base-wire-slide2)"
                            strokeWidth={isChActive ? "2.2" : "1.8"}
                            strokeLinecap="round"
                          />
                          <path
                            d={pathD}
                            stroke="url(#circuit-hdm-stream-slide2)"
                            strokeWidth={isChActive ? "3" : "2"}
                            strokeLinecap="round"
                            opacity={isChActive ? "1" : "0.75"}
                          />
                          <circle
                            r={isChActive ? "4.5" : "3.5"}
                            fill="#FFB020"
                            filter="url(#circuit-gold-glow-slide2)"
                          >
                            <animateMotion
                              path={pathD}
                              dur={`${2.0 + sIdx * 0.3}s`}
                              repeatCount="indefinite"
                            />
                          </circle>
                          <circle r="2" fill="#FFFFFF">
                            <animateMotion
                              path={pathD}
                              dur={`${2.0 + sIdx * 0.3}s`}
                              repeatCount="indefinite"
                            />
                          </circle>
                        </g>
                      );
                    })}
                  </svg>
                </div>

                {/* Central HDM Compiled Hub */}
                <div className="flex justify-center relative z-10 -mt-1 sm:-mt-2">
                  <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3.5 py-1.5 sm:px-6 sm:py-2.5 rounded-full font-display font-black text-[11px] sm:text-sm shadow-xl border-2 transition-all duration-300 bg-gradient-to-r from-[#060B22] via-[#0B1638] to-[#060B22] text-white border-[#FFB020] shadow-[0_0_25px_rgba(255,176,32,0.35)]">
                    <Zap className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#FFB020] fill-[#FFB020] animate-pulse" />
                    <span>Compiled Conversion Engine</span>
                  </div>
                </div>

                {/* HDM Telemetry Bar */}
                <div className="mt-2.5 sm:mt-5 space-y-1.5 sm:space-y-2 pt-2 sm:pt-3.5 border-t border-[#E2DBD0]">
                  <div className="flex items-center justify-between text-[10px] sm:text-xs font-mono">
                    <div className="flex items-center gap-1.5 sm:gap-2 text-slate-700 min-w-0">
                      <span className="relative inline-flex rounded-full h-2 w-2 shrink-0 bg-teal-500" />
                      <span className="truncate text-left font-bold text-slate-800">
                        <span className="sm:hidden">Stream: {activeChannel.shortName}</span>
                        <span className="hidden sm:inline">
                          Routing: {activeChannel.name} • Sub-Second Edge Delivery
                        </span>
                      </span>
                    </div>
                    <span className="font-extrabold shrink-0 ml-1.5 text-teal-700">
                      96% Retained
                    </span>
                  </div>
                  <div className="h-1.5 sm:h-2 w-full bg-slate-200 rounded-full overflow-hidden p-0.5 border border-slate-300/60">
                    <div
                      className="h-full bg-gradient-to-r from-teal-400 via-emerald-400 to-[#FFB020] rounded-full shadow-[0_0_10px_rgba(45,212,191,0.6)]"
                      style={{ width: "96%" }}
                    />
                  </div>
                </div>
              </div>

              {/* HDM Summary Banner */}
              <div className="p-2.5 sm:p-3 rounded-xl border text-xs sm:text-sm font-medium flex items-center gap-2 sm:gap-2.5 bg-teal-50/70 border-teal-200/80 text-teal-950 min-h-[46px]">
                <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                <p className="leading-snug">{activeChannel.hdmSummary}</p>
              </div>

              {/* 3 HDM Metric Dials */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3.5">
                <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl border space-y-1 relative overflow-hidden min-h-[86px] sm:min-h-[92px] bg-white border-[#E2DBD0] shadow-xs">
                  <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-wider text-slate-500">
                    <span>{activeChannel.speed.label}</span>
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                  </div>
                  <div className="font-display font-black text-2xl sm:text-3xl text-teal-600">
                    {activeChannel.speed.hdmValue}
                  </div>
                  <div className="text-[11px] text-slate-500 font-medium truncate">
                    {activeChannel.speed.hdmNote}
                  </div>
                </div>

                <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl border space-y-1 relative overflow-hidden min-h-[86px] sm:min-h-[92px] bg-white border-[#E2DBD0] shadow-xs">
                  <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-wider text-slate-500">
                    <span>{activeChannel.quality.label}</span>
                    <Gauge className="w-3.5 h-3.5 text-slate-400" />
                  </div>
                  <div className="font-display font-black text-2xl sm:text-3xl text-[#060B22]">
                    {activeChannel.quality.hdmValue}
                  </div>
                  <div className="text-[11px] text-slate-500 font-medium truncate">
                    {activeChannel.quality.hdmNote}
                  </div>
                </div>

                <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl border space-y-1 relative overflow-hidden min-h-[86px] sm:min-h-[92px] bg-white border-[#E2DBD0] shadow-xs">
                  <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-wider text-slate-500">
                    <span>{activeChannel.roas.label}</span>
                    <TrendingUp className="w-3.5 h-3.5 text-teal-600" />
                  </div>
                  <div className="font-display font-black text-2xl sm:text-3xl text-teal-600">
                    {activeChannel.roas.hdmValue}
                  </div>
                  <div className="text-[11px] text-slate-500 font-medium truncate">
                    {activeChannel.roas.hdmNote}
                  </div>
                </div>
              </div>

              {/* Bottom Audit Action Bar */}
              <div className="pt-3 sm:pt-4 border-t border-[#E2DBD0] flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="flex items-center gap-2 text-xs text-slate-600 text-left">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>
                    Stop leaking ad budget. Our lead architects will audit your website conversion funnel.
                  </span>
                </div>

                <StarBorder
                  as={Link}
                  href="/get-a-quote"
                  className="w-full sm:w-auto py-2.5 sm:py-3 px-5 sm:px-6 rounded-xl text-xs font-black uppercase tracking-wider inline-flex items-center justify-center gap-2 shrink-0 cursor-pointer shadow-lg group"
                  radius={12}
                  color="#FFF8E7"
                  trailColor="#FFB020"
                  backgroundColor="#FFB020"
                  textColor="#060B22"
                  borderColor="rgba(255, 176, 32, 0.5)"
                  sparkle={true}
                  glow={0.8}
                >
                  <span>AUDIT YOUR WEBSITE FUNNEL</span>
                  <ArrowRight className="w-4 h-4 text-[#060B22] group-hover:translate-x-1 transition-transform" />
                </StarBorder>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

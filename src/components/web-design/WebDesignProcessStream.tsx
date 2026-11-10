"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  Sparkles,
  Clock,
  ShieldCheck,
  RotateCw,
  Search,
  Layers,
  PenTool,
  Code2,
  FileCheck,
  Rocket,
  Wrench,
  Video,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface ProcessPhase {
  step: number;
  number: string;
  title: string;
  shortTag: string;
  tag: string;
  duration: string;
  summary: string;
  deliverables: string[];
  visualMetric: string;
  icon: React.ReactNode;
}

const PHASES: ProcessPhase[] = [
  {
    step: 1,
    number: "01",
    title: "Discovery & Scope",
    shortTag: "Discovery",
    tag: "Goals & Scope",
    duration: "1–2 Days",
    summary: "Commercial objective mapping, competitor benchmarks, sitemap architecture, and fixed milestone scope.",
    deliverables: ["Technical scope spec", "Sitemap hierarchy", "Sprint timeline plan"],
    visualMetric: "100% Scope Certainty",
    icon: <Search className="w-5 h-5 text-[#FFB020]" />,
  },
  {
    step: 2,
    number: "02",
    title: "Planning & Strategy",
    shortTag: "Strategy",
    tag: "Tech & SEO Map",
    duration: "2–3 Days",
    summary: "Framework blueprint selection (Next.js / Shopify / CMS), schema models, and 301 redirect protection.",
    deliverables: ["Stack & hosting blueprint", "301 SEO redirect map", "Conversion funnel map"],
    visualMetric: "Zero SEO Loss Guaranteed",
    icon: <Layers className="w-5 h-5 text-[#FFB020]" />,
  },
  {
    step: 3,
    number: "03",
    title: "UI/UX Design",
    shortTag: "Design",
    tag: "Figma Prototypes",
    duration: "4–6 Days",
    summary: "High-fidelity Figma prototypes, custom typography design tokens, and clickable desktop & mobile flows.",
    deliverables: ["Figma design system", "Clickable prototypes", "WCAG accessibility pass"],
    visualMetric: "Clickable Figma Prototype",
    icon: <PenTool className="w-5 h-5 text-[#FFB020]" />,
  },
  {
    step: 4,
    number: "04",
    title: "Development",
    shortTag: "Engineering",
    tag: "Next.js & APIs",
    duration: "1–2 Weeks",
    summary: "Clean component architecture, headless CMS hookup, third-party API integration, and passworded staging builds.",
    deliverables: ["Private staging URL", "Next.js 16 components", "API & CRM webhooks"],
    visualMetric: "Daily Live Staging Builds",
    icon: <Code2 className="w-5 h-5 text-[#FFB020]" />,
  },
  {
    step: 5,
    number: "05",
    title: "QA & Verification",
    shortTag: "QA Testing",
    tag: "Speed & Security",
    duration: "3–4 Days",
    summary: "Cross-device verification, Core Web Vitals 95+ speed tuning, and form notification delivery audits.",
    deliverables: ["Cross-browser QA pass", "95+ Vitals speed audit", "SSL & security hardening"],
    visualMetric: "95+ Core Web Vitals Audit",
    icon: <FileCheck className="w-5 h-5 text-[#FFB020]" />,
  },
  {
    step: 6,
    number: "06",
    title: "Deployment & Launch",
    shortTag: "Go-Live",
    tag: "Zero Downtime",
    duration: "1 Day",
    summary: "Zero-downtime server propagation, Google Tag Manager & GA4 analytics configuration, and live sitemap indexation.",
    deliverables: ["Zero-downtime cutover", "GTM & GA4 event audit", "Google Search indexing"],
    visualMetric: "Zero-Downtime Deployment",
    icon: <Rocket className="w-5 h-5 text-[#FFB020]" />,
  },
  {
    step: 7,
    number: "07",
    title: "Warranty & SLA",
    shortTag: "Support",
    tag: "Long-Term Care",
    duration: "30 Days+",
    summary: "30-day post-launch warranty, scheduled cloud backups, security patches, and direct developer communication.",
    deliverables: ["30-day bug warranty", "Cloud backups & patches", "Dedicated Slack channel"],
    visualMetric: "30-Day Warranty Included",
    icon: <Wrench className="w-5 h-5 text-[#FFB020]" />,
  },
];

export function WebDesignProcessStream() {
  const [activeStepIdx, setActiveStepIdx] = useState<number>(0);
  const [isAutoSpin, setIsAutoSpin] = useState<boolean>(true);
  const [isInView, setIsInView] = useState<boolean>(false);
  const [mousePos, setMousePos] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  // Drag & Touch states
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [dragStartX, setDragStartX] = useState<number>(0);

  const sectionRef = useRef<HTMLDivElement>(null);
  const totalPhases = PHASES.length;
  const anglePerPhase = 360 / totalPhases; // ~51.43 deg

  // 1. Detect when section is in viewport
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // 2. TRUE ONE-BY-ONE SCROLL ADVANCER:
  // When scrolling down over this section, advance phase-by-phase!
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    let lastScrollTime = 0;
    const cooldownMs = 380; // Smooth debounce between phase advances

    const onWheel = (e: WheelEvent) => {
      // Only capture if mouse is over this component
      if (Math.abs(e.deltaY) < 18) return;

      const now = Date.now();
      if (now - lastScrollTime < cooldownMs) {
        // Prevent jarring page jumps during phase transition cooldown
        if (
          (e.deltaY > 0 && activeStepIdx < totalPhases - 1) ||
          (e.deltaY < 0 && activeStepIdx > 0)
        ) {
          e.preventDefault();
        }
        return;
      }

      if (e.deltaY > 0) {
        // Scrolling DOWN
        if (activeStepIdx < totalPhases - 1) {
          e.preventDefault();
          lastScrollTime = now;
          setActiveStepIdx((prev) => prev + 1);
        }
        // At last phase (Phase 7), normal page scroll down is allowed naturally!
      } else {
        // Scrolling UP
        if (activeStepIdx > 0) {
          e.preventDefault();
          lastScrollTime = now;
          setActiveStepIdx((prev) => prev - 1);
        }
        // At first phase (Phase 1), normal page scroll up is allowed naturally!
      }
    };

    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, [activeStepIdx, totalPhases]);

  // 3. Gentle Auto-rotation when idle in view
  useEffect(() => {
    if (!isAutoSpin || isDragging || !isInView) return;

    const interval = setInterval(() => {
      setActiveStepIdx((prev) => (prev + 1) % totalPhases);
    }, 4200);

    return () => clearInterval(interval);
  }, [isAutoSpin, isDragging, isInView, totalPhases]);

  // Mouse drag & touch swipe handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setDragStartX(e.clientX);
  };

  const handleMouseUp = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const diff = e.clientX - dragStartX;
    if (Math.abs(diff) > 35) {
      if (diff > 0) {
        setActiveStepIdx((prev) => (prev > 0 ? prev - 1 : totalPhases - 1));
      } else {
        setActiveStepIdx((prev) => (prev + 1) % totalPhases);
      }
    }
    setIsDragging(false);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setDragStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!isDragging) return;
    const diff = e.changedTouches[0].clientX - dragStartX;
    if (Math.abs(diff) > 30) {
      if (diff > 0) {
        setActiveStepIdx((prev) => (prev > 0 ? prev - 1 : totalPhases - 1));
      } else {
        setActiveStepIdx((prev) => (prev + 1) % totalPhases);
      }
    }
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
    setIsDragging(false);
  };

  const activePhase = PHASES[activeStepIdx];

  return (
    <div
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="space-y-4 sm:space-y-5 max-w-6xl mx-auto select-none text-center"
    >
      {/* ==================================================================== */}
      {/* 1. INTERACTIVE 7-STATION TIMELINE SCRUBBER (CLICKABLE & COMPACT)    */}
      {/* ==================================================================== */}
      <div className="flex flex-col items-center justify-center space-y-2">
        {/* Discrete Phase Step Stations */}
        <div className="flex items-center justify-center gap-1 sm:gap-1.5 p-1.5 bg-white rounded-2xl border border-[#E2DBD0] shadow-sm max-w-full overflow-x-auto no-scrollbar">
          {PHASES.map((p, idx) => {
            const isSelected = idx === activeStepIdx;
            return (
              <button
                key={p.step}
                type="button"
                onClick={() => setActiveStepIdx(idx)}
                className={cn(
                  "px-2.5 sm:px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer whitespace-nowrap flex items-center gap-1.5",
                  isSelected
                    ? "bg-[#060B22] text-[#FFB020] shadow-sm scale-102"
                    : "text-slate-600 hover:text-[#060B22] hover:bg-slate-100"
                )}
              >
                <span className="font-mono text-[10px] text-[#FFB020] font-black">{p.number}</span>
                <span className="hidden sm:inline text-[11px]">{p.shortTag}</span>
                {isSelected && (
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                )}
              </button>
            );
          })}
        </div>

        {/* Phase Navigation Prompt with Step Indicators */}
        <div className="flex items-center justify-center gap-3 text-xs text-slate-500 font-mono">
          <button
            type="button"
            onClick={() => setActiveStepIdx((prev) => (prev > 0 ? prev - 1 : totalPhases - 1))}
            className="hover:text-[#060B22] p-1 transition-colors cursor-pointer"
            title="Previous Sprint"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
          </button>

          <span className="font-bold text-[#060B22]">
            Sprint Phase {activePhase.number} of 07 · {activePhase.title}
          </span>

          <button
            type="button"
            onClick={() => setActiveStepIdx((prev) => (prev + 1) % totalPhases)}
            className="hover:text-[#060B22] p-1 transition-colors cursor-pointer"
            title="Next Sprint"
          >
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          <span className="text-slate-300 hidden sm:inline">•</span>

          <button
            type="button"
            onClick={() => setIsAutoSpin(!isAutoSpin)}
            className="hidden sm:flex items-center gap-1 hover:text-[#060B22] transition-colors cursor-pointer text-[11px]"
          >
            <RotateCw className={cn("w-3 h-3", isAutoSpin ? "animate-spin text-[#B87A00]" : "")} />
            <span>{isAutoSpin ? "Auto: Active" : "Auto: Paused"}</span>
          </button>
        </div>
      </div>

      {/* ==================================================================== */}
      {/* 2. REAL 3D CYLINDRICAL SPRINT THEATER (TRUE 3D DEPTH & ROTATION)     */}
      {/* ==================================================================== */}
      <div
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        className="relative w-full h-[290px] sm:h-[320px] flex items-center justify-center overflow-hidden rounded-3xl bg-gradient-to-b from-[#060B22] via-[#091538] to-[#060B22] border border-white/10 shadow-2xl"
        style={{
          perspective: "1400px",
          cursor: isDragging ? "grabbing" : "grab",
        }}
      >
        {/* Ambient Stage Lights & Floor Reflection */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,176,32,0.18)_0%,transparent_70%)] pointer-events-none" />
        <div className="absolute bottom-0 w-[500px] h-20 bg-[#FFB020]/20 rounded-full blur-[80px] pointer-events-none" />

        {/* 3D Circular Orbit Runway */}
        <div
          className="absolute w-[680px] h-[340px] rounded-full border-2 border-dashed border-[#FFB020]/20 pointer-events-none"
          style={{
            transform: "rotateX(72deg) translateZ(-40px)",
          }}
        />

        {/* 3D Revolving Cylinder Pivot */}
        <div
          className="relative w-[270px] sm:w-[310px] h-[190px] sm:h-[205px] transition-transform duration-700 ease-out"
          style={{
            transformStyle: "preserve-3d",
            transform: `rotateY(${-activeStepIdx * anglePerPhase + mousePos.x * 8}deg) rotateX(${mousePos.y * -5}deg)`,
          }}
        >
          {PHASES.map((phase, idx) => {
            const phaseAngle = idx * anglePerPhase;
            const isCurrent = idx === activeStepIdx;

            return (
              <div
                key={phase.step}
                onClick={() => setActiveStepIdx(idx)}
                className={cn(
                  "absolute inset-0 rounded-2xl p-4 sm:p-5 flex flex-col justify-between transition-all duration-500 cursor-pointer border select-none",
                  isCurrent
                    ? "bg-gradient-to-b from-[#11204C] to-[#060B22] text-white border-2 border-[#FFB020] shadow-[0_0_35px_rgba(255,176,32,0.35)] ring-2 ring-[#FFB020]/30 z-30 scale-102"
                    : "bg-[#060B22]/85 text-slate-300 border-white/10 hover:border-white/25 opacity-45 hover:opacity-75 z-10 scale-95"
                )}
                style={{
                  transform: `rotateY(${phaseAngle}deg) translateZ(300px)`,
                  backfaceVisibility: "hidden",
                }}
              >
                {/* Card Top: Number & Duration */}
                <div className="flex items-center justify-between">
                  <span
                    className={cn(
                      "font-mono font-black text-xs px-2.5 py-0.5 rounded-lg border",
                      isCurrent
                        ? "bg-[#FFB020] text-[#060B22] border-[#FFB020]"
                        : "bg-white/10 text-slate-400 border-white/10"
                    )}
                  >
                    Phase {phase.number}
                  </span>

                  <span className="text-[11px] font-mono text-slate-400">
                    {phase.duration}
                  </span>
                </div>

                {/* Card Center: Icon & Title */}
                <div className="space-y-1 text-left my-auto">
                  <div className="flex items-center gap-2">
                    <div className="p-1.5 rounded-lg bg-white/10 shrink-0">
                      {phase.icon}
                    </div>
                    <h4 className="font-display font-black text-sm sm:text-base text-white tracking-tight">
                      {phase.title}
                    </h4>
                  </div>
                  <div className="text-[11px] text-[#FFB020] font-mono font-bold">
                    {phase.tag}
                  </div>
                </div>

                {/* Card Bottom: Metric */}
                <div className="pt-2 border-t border-white/10 flex items-center justify-between text-xs">
                  <span className="text-emerald-400 font-mono font-bold flex items-center gap-1.5 text-[10.5px]">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>{phase.visualMetric}</span>
                  </span>
                  <span className="text-[#FFB020] font-bold text-[10.5px]">
                    {isCurrent ? "Active ✓" : "Inspect →"}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Dynamic Scroll Interaction Prompt */}
        <div className="absolute bottom-2.5 inset-x-0 flex items-center justify-center gap-1.5 text-[10.5px] font-mono text-slate-400 pointer-events-none">
          <RotateCw className="w-3 h-3 text-[#FFB020]" />
          <span>Scroll down on this section to advance phases one-by-one</span>
        </div>
      </div>

      {/* ==================================================================== */}
      {/* 3. ULTRA-CLEAN COMPACT TELEMETRY HUD (MINIMAL TEXT, MAXIMUM IMPACT)  */}
      {/* ==================================================================== */}
      <div className="p-3.5 sm:p-4 rounded-2xl bg-white border border-[#E2DBD0] shadow-md text-left">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 sm:gap-4 items-center">
          {/* Phase Essence Summary (5 cols) */}
          <div className="lg:col-span-5 space-y-1 min-w-0">
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-mono font-black uppercase tracking-wider text-[#B87A00] bg-[#FFB020]/15 px-2.5 py-0.5 rounded-full border border-[#FFB020]/30">
                Phase {activePhase.number} · {activePhase.duration}
              </span>
              <span className="text-[10.5px] font-mono text-emerald-700 font-bold flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                <span>{activePhase.visualMetric}</span>
              </span>
            </div>

            <div className="font-display font-black text-sm sm:text-base text-[#0B1B3A] tracking-tight truncate">
              {activePhase.title}
            </div>

            <p className="text-[11px] text-slate-600 leading-snug font-normal line-clamp-1">
              {activePhase.summary}
            </p>
          </div>

          {/* 3 Micro Deliverables (4 cols) */}
          <div className="lg:col-span-4 flex flex-wrap gap-1.5 items-center">
            {activePhase.deliverables.map((item, i) => (
              <span
                key={i}
                className="px-2.5 py-1 rounded-lg bg-[#FAF8F5] border border-[#E2DBD0] text-[10.5px] font-semibold text-[#0B1B3A] flex items-center gap-1.5 truncate"
              >
                <CheckCircle2 className="w-3 h-3 text-[#FFB020] shrink-0" />
                <span className="truncate">{item}</span>
              </span>
            ))}
          </div>

          {/* Direct CTA (3 cols) */}
          <div className="lg:col-span-3 flex items-center justify-end">
            <Link
              href="/get-a-quote"
              className="btn-luxury-gold btn-shimmer w-full py-2.5 px-4 rounded-xl text-xs font-black uppercase tracking-wider flex items-center justify-center gap-2 shadow-xs cursor-pointer text-center group"
            >
              <span>Request Sprint Scope</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

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
  Play,
  Pause,
  RotateCw,
  Search,
  Layers,
  PenTool,
  Code2,
  FileCheck,
  Rocket,
  Wrench,
  Zap,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface ProcessPhase {
  step: number;
  number: string;
  title: string;
  shortTag: string;
  tag: string;
  duration: string;
  headline: string;
  description: string;
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
    tag: "Foundation & Architecture",
    duration: "1–2 Days",
    headline: "Aligning Business Goals, User Journeys & Technical Requirements",
    description:
      "We unpack your commercial objectives, map competitor benchmarks, and produce a detailed sitemap wireflow and fixed milestone scope.",
    deliverables: [
      "Technical requirements specification",
      "Sitemap hierarchy & user conversion paths",
      "Fixed milestone timeline & sprint plan",
    ],
    visualMetric: "100% Scope Certainty",
    icon: <Search className="w-5 h-5 text-[#FFB020]" />,
  },
  {
    step: 2,
    number: "02",
    title: "Planning & Strategy",
    shortTag: "Strategy",
    tag: "Blueprint & Tech Selection",
    duration: "2–3 Days",
    headline: "Architecting Frameworks, Schemas & SEO Preservation Safeguards",
    description:
      "We select optimal stacks (Next.js, Shopify, or Custom CMS), draft data schemas, and map comprehensive 301 redirect tables to protect search rankings.",
    deliverables: [
      "Technology stack & hosting blueprint",
      "301 SEO URL redirect safeguard map",
      "Content strategy & conversion funnel wireframe",
    ],
    visualMetric: "Zero SEO Loss Guaranteed",
    icon: <Layers className="w-5 h-5 text-[#FFB020]" />,
  },
  {
    step: 3,
    number: "03",
    title: "UI/UX Design",
    shortTag: "UI/UX Design",
    tag: "Figma Prototypes & Systems",
    duration: "4–6 Days",
    headline: "Crafting Pixel-Perfect Interactive Prototypes in Figma",
    description:
      "Our senior designers build custom design systems, color tokens, and clickable desktop/mobile Figma prototypes for stakeholder sign-off.",
    deliverables: [
      "Full Figma design system & typography tokens",
      "Interactive clickable mobile & desktop prototypes",
      "Accessibility & WCAG contrast verification",
    ],
    visualMetric: "Figma Clickable Prototype",
    icon: <PenTool className="w-5 h-5 text-[#FFB020]" />,
  },
  {
    step: 4,
    number: "04",
    title: "Development",
    shortTag: "Engineering",
    tag: "Clean Code Engineering",
    duration: "1–2 Weeks",
    headline: "Building with Clean Next.js 16, React 19 & Semantic Code",
    description:
      "Our developers engineer modular, component-driven frontends connected to secure APIs and CMS backends with continuous staging review links.",
    deliverables: [
      "Live password-protected staging URL",
      "Clean semantic HTML5 & Next.js 16 components",
      "API, CRM, and payment gateway integrations",
    ],
    visualMetric: "Live Daily Staging URLs",
    icon: <Code2 className="w-5 h-5 text-[#FFB020]" />,
  },
  {
    step: 5,
    number: "05",
    title: "QA & Verification",
    shortTag: "QA Testing",
    tag: "Cross-Device Testing",
    duration: "3–4 Days",
    headline: "Rigorous Speed Audits, Security Hardening & Device QA",
    description:
      "We test across real devices, modern browsers, form notification pipelines, and guarantee 95+ Core Web Vitals speed scores.",
    deliverables: [
      "Cross-browser testing (Chrome, Safari, iOS, Android)",
      "Core Web Vitals 95+ audit & remediation",
      "SSL, CSP headers & security penetration checks",
    ],
    visualMetric: "95+ Core Web Vitals Audit",
    icon: <FileCheck className="w-5 h-5 text-[#FFB020]" />,
  },
  {
    step: 6,
    number: "06",
    title: "Deployment & Launch",
    shortTag: "Go-Live",
    tag: "Flawless Go-Live",
    duration: "1 Day",
    headline: "Zero-Downtime Production Deployment & Analytics Verification",
    description:
      "We manage DNS propagation, install Google Tag Manager & GA4 conversion tracking, and submit live sitemaps to Google Search Console.",
    deliverables: [
      "Zero-downtime production server switchover",
      "Google Tag Manager & GA4 event verification",
      "Google Search Console sitemap submission",
    ],
    visualMetric: "Zero-Downtime Deployment",
    icon: <Rocket className="w-5 h-5 text-[#FFB020]" />,
  },
  {
    step: 7,
    number: "07",
    title: "Ongoing Partnership",
    shortTag: "Growth & SLA",
    tag: "Long-Term Growth",
    duration: "Ongoing",
    headline: "30-Day Post-Launch Warranty, Security Patches & Scaling",
    description:
      "We protect your investment with a 30-day post-launch bug-fix warranty, continuous core updates, and dedicated on-demand developer support.",
    deliverables: [
      "30-day post-launch warranty & bug fixes",
      "Proactive security updates & cloud backups",
      "Dedicated Slack/Teams communication channel",
    ],
    visualMetric: "30-Day Warranty Included",
    icon: <Wrench className="w-5 h-5 text-[#FFB020]" />,
  },
];

export function WebDesignProcessStream() {
  const [activeStepIdx, setActiveStepIdx] = useState<number>(2); // Default to UI/UX Design
  const [isAutoSpin, setIsAutoSpin] = useState<boolean>(true);
  const [mousePos, setMousePos] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  // Touch & Drag state for 3D swiping
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [dragStartX, setDragStartX] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const totalPhases = PHASES.length;
  const anglePerPhase = 360 / totalPhases; // ~51.43 deg

  // 3D Cylinder radius (in pixels)
  const cylinderRadius = 310;

  // Auto-spin interval
  useEffect(() => {
    if (!isAutoSpin || isDragging) return;

    const interval = setInterval(() => {
      setActiveStepIdx((prev) => (prev + 1) % totalPhases);
    }, 4500);

    return () => clearInterval(interval);
  }, [isAutoSpin, isDragging, totalPhases]);

  // Parallax tilt on mouse move
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
    setIsDragging(false);
  };

  // Drag controls
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setDragStartX(e.clientX);
  };

  const handleMouseUp = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const diff = e.clientX - dragStartX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        // Dragged right -> previous phase
        setActiveStepIdx((prev) => (prev > 0 ? prev - 1 : totalPhases - 1));
      } else {
        // Dragged left -> next phase
        setActiveStepIdx((prev) => (prev + 1) % totalPhases);
      }
    }
    setIsDragging(false);
  };

  // Touch controls for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setDragStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!isDragging) return;
    const diff = e.changedTouches[0].clientX - dragStartX;
    if (Math.abs(diff) > 35) {
      if (diff > 0) {
        setActiveStepIdx((prev) => (prev > 0 ? prev - 1 : totalPhases - 1));
      } else {
        setActiveStepIdx((prev) => (prev + 1) % totalPhases);
      }
    }
    setIsDragging(false);
  };

  const handleNext = () => {
    setActiveStepIdx((prev) => (prev + 1) % totalPhases);
  };

  const handlePrev = () => {
    setActiveStepIdx((prev) => (prev > 0 ? prev - 1 : totalPhases - 1));
  };

  const activePhase = PHASES[activeStepIdx];

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="space-y-8 sm:space-y-10 max-w-7xl mx-auto text-left select-none"
    >
      {/* ==================================================================== */}
      {/* 1. TOP CONTROLS: 3D Rounding Status, Auto-Spin & Dial Buttons         */}
      {/* ==================================================================== */}
      <div className="flex flex-wrap items-center justify-between gap-3 px-2">
        {/* Phase Pills Strip */}
        <div className="flex items-center gap-1.5 p-1 bg-white/90 backdrop-blur-md rounded-2xl border border-[#E2DBD0] shadow-2xs overflow-x-auto no-scrollbar">
          {PHASES.map((p, idx) => {
            const isSelected = idx === activeStepIdx;
            return (
              <button
                key={p.step}
                type="button"
                onClick={() => setActiveStepIdx(idx)}
                className={cn(
                  "px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5",
                  isSelected
                    ? "bg-[#060B22] text-[#FFB020] shadow-xs scale-102"
                    : "text-slate-600 hover:text-[#060B22] hover:bg-slate-100"
                )}
              >
                <span className="font-mono text-[10px] text-[#FFB020]">{p.number}</span>
                <span>{p.shortTag}</span>
                {isSelected && (
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                )}
              </button>
            );
          })}
        </div>

        {/* 3D Orbit Controls */}
        <div className="flex items-center gap-2">
          {/* Auto-Spin Toggle */}
          <button
            type="button"
            onClick={() => setIsAutoSpin(!isAutoSpin)}
            className={cn(
              "px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 border cursor-pointer",
              isAutoSpin
                ? "bg-[#060B22] text-[#FFB020] border-[#FFB020]/40 shadow-xs"
                : "bg-white text-slate-700 border-[#E2DBD0] hover:border-slate-400"
            )}
            title="Toggle 3D auto rotation"
          >
            <RotateCw className={cn("w-3.5 h-3.5", isAutoSpin ? "animate-spin" : "")} />
            <span className="hidden sm:inline">3D Orbit:</span>
            <span>{isAutoSpin ? "Active" : "Paused"}</span>
          </button>

          {/* Prev / Next Rotation Arrows */}
          <div className="flex items-center gap-1 bg-white p-1 rounded-xl border border-[#E2DBD0] shadow-2xs">
            <button
              type="button"
              onClick={handlePrev}
              className="p-1.5 rounded-lg hover:bg-slate-100 text-slate-700 hover:text-[#060B22] transition-colors cursor-pointer"
              title="Rotate Left"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <span className="text-[11px] font-mono font-bold text-slate-400 px-1">
              {activeStepIdx + 1}/{totalPhases}
            </span>
            <button
              type="button"
              onClick={handleNext}
              className="p-1.5 rounded-lg hover:bg-slate-100 text-slate-700 hover:text-[#060B22] transition-colors cursor-pointer"
              title="Rotate Right"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* ==================================================================== */}
      {/* 2. THE 3D ROUNDING CYLINDER STAGE (3D ROTATING ORBITAL CAROUSEL)     */}
      {/* ==================================================================== */}
      <div
        className="relative w-full h-[320px] sm:h-[350px] lg:h-[370px] flex items-center justify-center overflow-hidden rounded-3xl bg-gradient-to-b from-[#060B22] via-[#091438] to-[#060B22] border border-white/10 shadow-2xl"
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        style={{
          perspective: "1400px",
          cursor: isDragging ? "grabbing" : "grab",
        }}
      >
        {/* Ambient 3D Depth Lighting & Orbital Rings */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,176,32,0.18)_0%,transparent_70%)] pointer-events-none" />
        <div className="absolute -bottom-20 w-[550px] sm:w-[700px] h-32 bg-[#FFB020]/20 rounded-full blur-[80px] pointer-events-none" />

        {/* 3D Elliptical Orbit Ring Graphic on Floor */}
        <div
          className="absolute w-[680px] h-[340px] rounded-full border-2 border-dashed border-[#FFB020]/25 pointer-events-none"
          style={{
            transform: "rotateX(72deg) translateZ(-60px)",
          }}
        />

        {/* Center 3D Revolving Cylinder Container */}
        <div
          className="relative w-[280px] sm:w-[320px] h-[210px] sm:h-[220px] transition-transform duration-700 ease-out"
          style={{
            transformStyle: "preserve-3d",
            transform: `rotateY(${-activeStepIdx * anglePerPhase + mousePos.x * 12}deg) rotateX(${mousePos.y * -8}deg)`,
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
                  "absolute inset-0 rounded-2xl p-4 sm:p-5 flex flex-col justify-between transition-all duration-500 cursor-pointer border backdrop-blur-md select-none",
                  isCurrent
                    ? "bg-gradient-to-b from-[#0E1A3D] to-[#060B22] text-white border-2 border-[#FFB020] shadow-[0_0_35px_rgba(255,176,32,0.35)] ring-2 ring-[#FFB020]/30"
                    : "bg-[#060B22]/85 text-slate-300 border-white/10 hover:border-white/30 hover:bg-[#060B22]/95 opacity-55 hover:opacity-85"
                )}
                style={{
                  transform: `rotateY(${phaseAngle}deg) translateZ(${cylinderRadius}px)`,
                  backfaceVisibility: "hidden",
                }}
              >
                {/* Card Top: Number & Duration Badge */}
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <div
                      className={cn(
                        "w-7 h-7 rounded-lg flex items-center justify-center font-bold text-xs",
                        isCurrent
                          ? "bg-[#FFB020] text-[#060B22]"
                          : "bg-white/10 text-slate-300"
                      )}
                    >
                      {phase.number}
                    </div>
                    <span className="text-[10px] font-mono text-slate-400">
                      Phase {phase.number}
                    </span>
                  </div>

                  <span
                    className={cn(
                      "text-[9.5px] font-bold px-2 py-0.5 rounded-full border",
                      isCurrent
                        ? "text-[#FFB020] bg-[#FFB020]/15 border-[#FFB020]/30"
                        : "text-slate-400 bg-white/5 border-white/10"
                    )}
                  >
                    {phase.duration}
                  </span>
                </div>

                {/* Card Center: Icon & Title */}
                <div className="space-y-1.5 my-auto">
                  <div className="flex items-center gap-2">
                    <span className="p-1.5 rounded-lg bg-white/10">{phase.icon}</span>
                    <h4 className="font-display font-black text-sm sm:text-base text-white tracking-tight">
                      {phase.title}
                    </h4>
                  </div>
                  <p className="text-[11px] text-slate-300 line-clamp-2 leading-relaxed">
                    {phase.tag}
                  </p>
                </div>

                {/* Card Bottom: Visual Metric & Status */}
                <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[10px]">
                  <span className="text-emerald-400 font-mono font-bold flex items-center gap-1 truncate">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>{phase.visualMetric}</span>
                  </span>
                  <span className="text-[#FFB020] font-bold">Inspect →</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Swipe / Drag Hint Overlay */}
        <div className="absolute bottom-3 inset-x-0 flex items-center justify-center gap-2 text-[10.5px] font-mono text-slate-400 pointer-events-none">
          <RotateCw className="w-3 h-3 text-[#FFB020]" />
          <span>Drag or Swipe Horizontally to Spin 3D Rounding Orbit</span>
        </div>
      </div>

      {/* ==================================================================== */}
      {/* 3. ACTIVE PHASE DETAILS CANVAS: Visual Milestone Specs & Direct CTA */}
      {/* ==================================================================== */}
      <div className="rounded-2xl sm:rounded-3xl bg-white border border-[#E2DBD0] shadow-sm overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
          {/* Left Column (7 cols): Milestone Specifications */}
          <div className="lg:col-span-7 p-5 sm:p-7 lg:p-8 bg-[#FAF8F5] border-b lg:border-b-0 lg:border-r border-[#E2DBD0] flex flex-col justify-between space-y-5">
            <div className="space-y-3">
              <div className="flex items-center justify-between gap-2">
                <span className="text-[10px] font-black uppercase tracking-wider text-[#B87A00] bg-[#FFB020]/15 px-2.5 py-0.5 rounded-full border border-[#FFB020]/30">
                  {activePhase.tag}
                </span>

                <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-slate-500">
                  <Clock className="w-3.5 h-3.5 text-[#B87A00]" />
                  <span>Sprint Duration: {activePhase.duration}</span>
                </div>
              </div>

              <div className="space-y-1">
                <div className="font-mono text-xs font-black text-slate-400">
                  Milestone Sprint Phase {activePhase.number} of 07
                </div>
                <h3 className="font-display font-black text-xl sm:text-2xl text-[#0B1B3A] tracking-tight leading-snug">
                  {activePhase.headline}
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                {activePhase.description}
              </p>
            </div>

            {/* Visual Assurance Badge */}
            <div className="p-3.5 rounded-2xl bg-white border border-[#E2DBD0] flex items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span className="font-bold text-[#060B22]">{activePhase.visualMetric}</span>
              </div>
              <span className="text-[10.5px] font-mono text-slate-400">
                Loom Video Demos Included
              </span>
            </div>
          </div>

          {/* Right Column (5 cols): Concrete Deliverables & Direct Action */}
          <div className="lg:col-span-5 p-5 sm:p-7 lg:p-8 flex flex-col justify-between space-y-5">
            <div className="space-y-3">
              <div className="text-[10px] font-black uppercase tracking-wider text-slate-700">
                Milestone Deliverables &amp; Artifacts:
              </div>

              <div className="space-y-2 text-xs text-slate-700">
                {activePhase.deliverables.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-2.5 p-2 rounded-xl bg-[#FAF8F5] border border-[#E2DBD0]/60"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#FFB020] shrink-0 mt-0.5" />
                    <span className="font-medium text-[11.5px] leading-snug">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Direct Action Button */}
            <div className="pt-3 border-t border-slate-100">
              <Link
                href="/get-a-quote"
                className="btn-luxury-gold btn-shimmer w-full py-3.5 px-5 rounded-xl text-xs font-black uppercase tracking-wider flex items-center justify-center gap-2 shadow-xs cursor-pointer text-center"
              >
                <span>Request Project Timeline &amp; Scope</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

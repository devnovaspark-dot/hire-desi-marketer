"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  ShieldCheck,
  CheckCircle2,
  Users,
  Clock,
  Sparkles,
  Zap,
  Lock,
  ArrowRight,
  ArrowLeft,
  Award,
  GitBranch,
  Terminal,
  Activity,
  PlayCircle,
  RotateCw,
  Check,
  Video,
  Layers,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { WebDesignTeamShowcase } from "./WebDesignTeamShowcase";

interface ArchitecturalPillar {
  id: string;
  number: string;
  title: string;
  shortLabel: string;
  tagline: string;
  description: string;
  metric: string;
  badge: string;
  capitalSubtitle: string;
  icon: React.ReactNode;
  specs: {
    label: string;
    value: string;
  }[];
}

const PILLARS: ArchitecturalPillar[] = [
  {
    id: "senior-architects",
    number: "01",
    shortLabel: "Senior Squad",
    title: "Direct Access to Senior Architects",
    tagline: "Zero Junior Handoffs · Direct Engineer Communication",
    description:
      "You collaborate directly with principal full-stack engineers and UI/UX designers who understand commercial growth. No junior intern middlemen, no disconnected account managers.",
    metric: "100% Senior Squad",
    badge: "Principal Staff",
    capitalSubtitle: "Staff Engineering & Design",
    icon: <Users className="w-6 h-6 text-[#FFB020]" />,
    specs: [
      { label: "Squad Level", value: "Principal & Staff Only" },
      { label: "Middlemen", value: "Zero Account Managers" },
      { label: "SLA Reply", value: "< 15 Mins Direct Slack" },
    ],
  },
  {
    id: "subsecond-speed",
    number: "02",
    shortLabel: "Sub-Second Speed",
    title: "Sub-Second Performance & Speed",
    tagline: "< 0.8s LCP Benchmark · 95+ Core Web Vitals",
    description:
      "We engineer with modern stacks (Next.js 16, React 19, Tailwind, Headless CMS) to guarantee sub-second initial paint and eliminate the bounce rates caused by bloated legacy templates.",
    metric: "< 0.8s Speed",
    badge: "100/100 Vitals",
    capitalSubtitle: "Core Web Vitals Engine",
    icon: <Zap className="w-6 h-6 text-[#FFB020]" />,
    specs: [
      { label: "LCP Speed", value: "< 0.58s Initial Paint" },
      { label: "Lighthouse", value: "100 / 100 Grade A+" },
      { label: "Layout Shift", value: "0.00 CLS Flawless" },
    ],
  },
  {
    id: "code-ownership",
    number: "03",
    shortLabel: "100% IP & Repo",
    title: "100% Code & IP Ownership",
    tagline: "Day-One Repository Access · Zero Platform Lock-In",
    description:
      "You own 100% of the code, designs, and digital assets from Day 1. We commit clean, documented code directly to your private GitHub or GitLab repository under strict bilateral NDA protection.",
    metric: "100% Your IP",
    badge: "Day-One Access",
    capitalSubtitle: "Intellectual Property Vault",
    icon: <Lock className="w-6 h-6 text-[#FFB020]" />,
    specs: [
      { label: "Repository", value: "Private Client GitHub" },
      { label: "NDA Hash", value: "SHA-256 Legal Deed" },
      { label: "Vendor Lock-In", value: "0% Clean Open Code" },
    ],
  },
  {
    id: "agile-delivery",
    number: "04",
    shortLabel: "Agile Telemetry",
    title: "Transparent Agile Delivery & Daily Demos",
    tagline: "Daily Loom Updates · Fixed Milestone Predictability",
    description:
      "Experience zero dark periods. We deliver regular recorded video walkthroughs, shared staging URLs, and bi-weekly milestone demos so your project launches on time, every single sprint.",
    metric: "< 24h Scoping",
    badge: "Zero Dark Periods",
    capitalSubtitle: "Sprint Visibility & Staging",
    icon: <Clock className="w-6 h-6 text-[#FFB020]" />,
    specs: [
      { label: "Video Demos", value: "Daily Loom Walkthroughs" },
      { label: "Staging Access", value: "Live Passworded URL" },
      { label: "Milestones", value: "100% Guaranteed Launch" },
    ],
  },
];

export function WebDesignWhyChooseUs() {
  const [activePillarIdx, setActivePillarIdx] = useState<number>(0);
  const [isAutoRotate, setIsAutoRotate] = useState<boolean>(true);
  const [isInView, setIsInView] = useState<boolean>(false);
  const [mousePos, setMousePos] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  // Touch and drag states
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [dragStartX, setDragStartX] = useState<number>(0);

  const containerRef = useRef<HTMLDivElement>(null);
  const totalPillars = PILLARS.length; // 4 pillars
  const anglePerPillar = 360 / totalPillars; // 90 degrees each
  const orbitRadius = 290; // 3D cylinder depth radius

  // Intersection observer: starts auto-spin when section is scrolled into view
  useEffect(() => {
    const el = containerRef.current;
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

  // Auto-rotation loop
  useEffect(() => {
    if (!isAutoRotate || isDragging || !isInView) return;

    const interval = setInterval(() => {
      setActivePillarIdx((prev) => (prev + 1) % totalPillars);
    }, 4200);

    return () => clearInterval(interval);
  }, [isAutoRotate, isDragging, isInView, totalPillars]);

  // Wheel scroll interaction
  const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    if (Math.abs(e.deltaY) > 25) {
      if (e.deltaY > 0) {
        setActivePillarIdx((prev) => (prev + 1) % totalPillars);
      } else {
        setActivePillarIdx((prev) => (prev > 0 ? prev - 1 : totalPillars - 1));
      }
    }
  };

  // Parallax tilt on mouse movement
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
    if (Math.abs(diff) > 35) {
      if (diff > 0) {
        setActivePillarIdx((prev) => (prev > 0 ? prev - 1 : totalPillars - 1));
      } else {
        setActivePillarIdx((prev) => (prev + 1) % totalPillars);
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
    if (Math.abs(diff) > 30) {
      if (diff > 0) {
        setActivePillarIdx((prev) => (prev > 0 ? prev - 1 : totalPillars - 1));
      } else {
        setActivePillarIdx((prev) => (prev + 1) % totalPillars);
      }
    }
    setIsDragging(false);
  };

  const activePillar = PILLARS[activePillarIdx];

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="space-y-8 sm:space-y-10 max-w-7xl mx-auto text-left select-none"
    >
      {/* 1. Authentic In-House Campus & Leadership Team Showcase */}
      <WebDesignTeamShowcase />

      {/* ============================================================== */}
      {/* 2. REAL 3D ROTATING ARCHITECTURAL PILLARS THEATER               */}
      {/* ============================================================== */}
      <div className="rounded-3xl bg-gradient-to-b from-[#060B22] via-[#081232] to-[#060B22] border border-white/10 shadow-2xl p-6 sm:p-8 lg:p-10 text-white relative overflow-hidden">
        {/* Ambient Stage Glows */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#FFB020]/15 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 pb-6 border-b border-white/10 relative z-10">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/10 text-[#FFB020] text-xs font-black uppercase tracking-wider border border-[#FFB020]/30 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#FFB020]" />
            <span>The 4 Architectural Pillars of Hire Desi Marketer</span>
          </div>

          <h3 className="font-display font-black text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight leading-tight">
            Engineered Foundations That Guarantee Commercial Success.
          </h3>

          <p className="text-xs sm:text-base text-slate-300 leading-relaxed font-normal max-w-2xl mx-auto">
            Eliminate traditional agency bureaucracy. Our four foundational engineering pillars protect your timeline, code ownership, and conversion speed.
          </p>
        </div>

        {/* Centered Pillar Navigation Tabs */}
        <div className="flex flex-col items-center justify-center space-y-3 pt-6 relative z-10">
          <div className="flex items-center justify-center gap-2 p-1.5 bg-white/10 backdrop-blur-md rounded-2xl border border-white/15 max-w-full overflow-x-auto no-scrollbar">
            {PILLARS.map((p, idx) => {
              const isSelected = idx === activePillarIdx;
              return (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => setActivePillarIdx(idx)}
                  className={cn(
                    "px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer whitespace-nowrap flex items-center gap-2 border",
                    isSelected
                      ? "bg-[#FFB020] text-[#060B22] border-[#FFB020] shadow-md font-black scale-102"
                      : "bg-white/5 text-slate-300 border-transparent hover:bg-white/10 hover:text-white"
                  )}
                >
                  <span className="font-mono text-[11px] opacity-80">Pillar {p.number}</span>
                  <span>{p.shortLabel}</span>
                  {isSelected && (
                    <span className="w-1.5 h-1.5 rounded-full bg-[#060B22] animate-pulse" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Orbit Controls & Auto-Rotate Toggle */}
          <div className="flex items-center justify-center gap-3 text-xs">
            <button
              type="button"
              onClick={() => setIsAutoRotate(!isAutoRotate)}
              className={cn(
                "px-3 py-1 rounded-full font-mono text-[11px] font-bold flex items-center gap-1.5 border transition-colors cursor-pointer",
                isAutoRotate
                  ? "bg-[#FFB020]/20 text-[#FFB020] border-[#FFB020]/40"
                  : "bg-white/5 text-slate-400 border-white/10 hover:border-white/20"
              )}
            >
              <RotateCw className={cn("w-3 h-3", isAutoRotate ? "animate-spin" : "")} />
              <span>3D Orbit: {isAutoRotate ? "Active" : "Paused"}</span>
            </button>

            <span className="text-white/20">•</span>

            <div className="flex items-center gap-1 bg-white/5 px-2 py-0.5 rounded-full border border-white/10">
              <button
                type="button"
                onClick={() => setActivePillarIdx((prev) => (prev > 0 ? prev - 1 : totalPillars - 1))}
                className="p-1 text-slate-400 hover:text-white transition-colors cursor-pointer"
                title="Rotate Left"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
              </button>
              <span className="font-mono font-bold text-[11px] text-[#FFB020] px-1.5">
                0{activePillarIdx + 1} / 04
              </span>
              <button
                type="button"
                onClick={() => setActivePillarIdx((prev) => (prev + 1) % totalPillars)}
                className="p-1 text-slate-400 hover:text-white transition-colors cursor-pointer"
                title="Rotate Right"
              >
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* ============================================================== */}
        {/* 3. PHYSICAL 3D PILLAR ORBITAL CAROUSEL STAGE                   */}
        {/* ============================================================== */}
        <div
          onWheel={handleWheel}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          className="relative w-full h-[380px] sm:h-[420px] lg:h-[450px] flex items-center justify-center overflow-hidden my-4"
          style={{
            perspective: "1500px",
            cursor: isDragging ? "grabbing" : "grab",
          }}
        >
          {/* Reflective Ground Pedestal & Orbit Rings */}
          <div
            className="absolute w-[680px] h-[340px] rounded-full border-2 border-dashed border-[#FFB020]/30 pointer-events-none"
            style={{
              transform: "rotateX(75deg) translateZ(-80px)",
            }}
          />
          <div
            className="absolute w-[440px] h-[220px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(255,176,32,0.25)_0%,transparent_70%)] pointer-events-none"
            style={{
              transform: "rotateX(75deg) translateZ(-85px)",
            }}
          />

          {/* 3D Rotating Monolith Cylinder */}
          <div
            className="relative w-[280px] sm:w-[320px] h-[310px] sm:h-[340px] transition-transform duration-700 ease-out"
            style={{
              transformStyle: "preserve-3d",
              transform: `rotateY(${-activePillarIdx * anglePerPillar + mousePos.x * 12}deg) rotateX(${mousePos.y * -8}deg)`,
            }}
          >
            {PILLARS.map((p, idx) => {
              const pillarAngle = idx * anglePerPillar; // 0, 90, 180, 270 deg
              const isFront = idx === activePillarIdx;

              return (
                <div
                  key={p.id}
                  onClick={() => setActivePillarIdx(idx)}
                  className={cn(
                    "absolute inset-0 rounded-3xl transition-all duration-500 cursor-pointer select-none flex flex-col justify-between overflow-hidden",
                    isFront
                      ? "border-2 border-[#FFB020] shadow-[0_0_50px_rgba(255,176,32,0.45)] ring-2 ring-[#FFB020]/40 z-30 opacity-100"
                      : "border border-white/10 opacity-40 hover:opacity-75 z-10"
                  )}
                  style={{
                    transform: `rotateY(${pillarAngle}deg) translateZ(${orbitRadius}px)`,
                    backfaceVisibility: "hidden",
                    background: isFront
                      ? "linear-gradient(180deg, #12214E 0%, #060B22 100%)"
                      : "linear-gradient(180deg, #0A1435 0%, #040818 100%)",
                  }}
                >
                  {/* ======================================================== */}
                  {/* ARCHITECTURAL PILLAR TOP CAPITAL (CROWN)                 */}
                  {/* ======================================================== */}
                  <div className="p-4 sm:p-5 border-b border-white/10 bg-white/5 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div
                        className={cn(
                          "w-8 h-8 rounded-xl font-mono font-black text-xs flex items-center justify-center transition-colors shadow-inner",
                          isFront ? "bg-[#FFB020] text-[#060B22]" : "bg-white/10 text-slate-300"
                        )}
                      >
                        {p.number}
                      </div>
                      <div>
                        <div className="font-mono text-[9px] uppercase tracking-widest text-[#FFB020] font-bold">
                          PILLAR {p.number}
                        </div>
                        <div className="text-[10px] text-slate-300 font-medium">
                          {p.capitalSubtitle}
                        </div>
                      </div>
                    </div>

                    <span
                      className={cn(
                        "text-[9.5px] font-mono font-bold px-2 py-0.5 rounded-full border",
                        isFront
                          ? "bg-[#FFB020]/20 text-[#FFB020] border-[#FFB020]/40"
                          : "bg-white/5 text-slate-400 border-white/10"
                      )}
                    >
                      {p.metric}
                    </span>
                  </div>

                  {/* ======================================================== */}
                  {/* ARCHITECTURAL PILLAR SHAFT (FLUTED COLUMN WITH GLOW)     */}
                  {/* ======================================================== */}
                  <div className="p-5 flex-1 flex flex-col justify-center space-y-3 relative">
                    {/* Fluted Vertical Light Columns */}
                    <div className="absolute inset-y-2 left-6 w-px bg-gradient-to-b from-transparent via-[#FFB020]/30 to-transparent pointer-events-none" />
                    <div className="absolute inset-y-2 right-6 w-px bg-gradient-to-b from-transparent via-[#FFB020]/30 to-transparent pointer-events-none" />

                    {/* Central 3D Glowing Emblem */}
                    <div className="flex items-center justify-center">
                      <div
                        className={cn(
                          "w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500",
                          isFront
                            ? "bg-gradient-to-tr from-[#FFB020] to-[#FFE082] text-[#060B22] shadow-[0_0_30px_rgba(255,176,32,0.6)] scale-110"
                            : "bg-white/10 text-slate-400"
                        )}
                      >
                        {p.icon}
                      </div>
                    </div>

                    {/* Pillar Title */}
                    <div className="text-center space-y-1">
                      <h4 className="font-display font-black text-lg sm:text-xl text-white tracking-tight leading-snug">
                        {p.title}
                      </h4>
                      <p className="text-[11px] text-slate-300 line-clamp-2 leading-relaxed">
                        {p.tagline}
                      </p>
                    </div>
                  </div>

                  {/* ======================================================== */}
                  {/* ARCHITECTURAL PILLAR PEDESTAL BASE (FOUNDATION)          */}
                  {/* ======================================================== */}
                  <div className="p-4 border-t border-white/10 bg-black/30 flex items-center justify-between text-xs">
                    <span className="text-emerald-400 font-mono font-bold flex items-center gap-1.5 text-[11px]">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span>{p.badge}</span>
                    </span>
                    <span className="text-[#FFB020] font-bold text-[11px] group-hover:translate-x-0.5 transition-transform">
                      {isFront ? "Active Pillar ✓" : "Inspect →"}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Interactive Navigation Hint */}
          <div className="absolute bottom-2 inset-x-0 flex items-center justify-center gap-2 text-[10.5px] font-mono text-slate-400 pointer-events-none">
            <RotateCw className="w-3 h-3 text-[#FFB020]" />
            <span>Drag horizontally or scroll wheel to rotate 3D architectural pillars</span>
          </div>
        </div>

        {/* ============================================================== */}
        {/* 4. ACTIVE PILLAR ARCHITECTURAL SPECIFICATION CONSOLE           */}
        {/* ============================================================== */}
        <div className="mt-6 pt-6 border-t border-white/10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center relative z-10">
          {/* Left: Pillar Overview (7 cols) */}
          <div className="lg:col-span-7 space-y-3">
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-mono font-black uppercase tracking-wider text-[#FFB020] bg-[#FFB020]/15 px-3 py-1 rounded-full border border-[#FFB020]/30">
                Pillar {activePillar.number} · {activePillar.badge}
              </span>
              <span className="text-xs font-mono font-bold text-slate-400">
                {activePillar.metric}
              </span>
            </div>

            <h4 className="font-display font-black text-xl sm:text-2xl text-white tracking-tight">
              {activePillar.title}
            </h4>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
              {activePillar.description}
            </p>

            {/* Pillar Specs Badges */}
            <div className="grid grid-cols-3 gap-2 pt-2">
              {activePillar.specs.map((spec, i) => (
                <div key={i} className="p-3 rounded-2xl bg-white/5 border border-white/10 text-center space-y-0.5">
                  <div className="text-[9.5px] font-mono uppercase tracking-wider text-slate-400">
                    {spec.label}
                  </div>
                  <div className="font-bold text-xs text-white truncate">
                    {spec.value}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Guarantee & Action (5 cols) */}
          <div className="lg:col-span-5 p-5 sm:p-6 rounded-2xl bg-white/[0.04] border border-white/10 space-y-4 flex flex-col justify-between">
            <div className="space-y-2">
              <div className="text-xs font-black uppercase tracking-wider text-[#FFB020] flex items-center gap-1.5">
                <Award className="w-4 h-4 text-[#FFB020]" />
                <span>Enterprise Scoping Guarantee</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Receive a detailed technical roadmap, sprint breakdown, and fixed scope proposal within 24 hours from our senior architects.
              </p>
            </div>

            <Link
              href="/get-a-quote"
              className="btn-luxury-gold btn-shimmer w-full py-3.5 px-5 rounded-xl text-xs font-black uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg cursor-pointer text-center group"
            >
              <span>Schedule Scoping Session</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Lock,
  Zap,
  Globe,
  ExternalLink,
  Shield,
  Activity,
  Layers,
  Laptop,
  Cpu,
  ShoppingBag,
  Stethoscope,
  Briefcase,
} from "lucide-react";
import { WEB_CASE_STUDIES, WebCaseStudy } from "@/data/web-design-services";
import { cn } from "@/lib/utils";
import StarBorder from "@/components/ui/StarBorder";
import CenterFlow, { CenterFlowNode } from "@/components/ui/CenterFlow";

export function WebDesignCaseStudies() {
  const [activeStudyId, setActiveStudyId] = useState<string>("saas-reference");
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const pauseTimerRef = useRef<NodeJS.Timeout | null>(null);

  const activeStudy =
    WEB_CASE_STUDIES.find((cs) => cs.id === activeStudyId) ||
    WEB_CASE_STUDIES[0];

  // Configure 4 outer satellite nodes connecting to the central HDM Craft Core
  const BENCHMARK_NODES: CenterFlowNode[] = [
    {
      id: "saas-reference",
      title: "Linear App",
      subtitle: "High-growth SaaS & DevTools",
      badge: "SaaS & Cloud",
      metric: "100/100 Vitals",
      color: "#38BDF8",
      position: { x: 20, y: 22 },
      icon: <Cpu className="w-4 h-4 text-[#38BDF8]" />,
      data: WEB_CASE_STUDIES.find((c) => c.id === "saas-reference"),
    },
    {
      id: "ecommerce-reference",
      title: "Allbirds Storefront",
      subtitle: "Headless DTC & Instant Checkout",
      badge: "E-Commerce",
      metric: "1-Tap Checkout",
      color: "#10B981",
      position: { x: 80, y: 22 },
      icon: <ShoppingBag className="w-4 h-4 text-[#10B981]" />,
      data: WEB_CASE_STUDIES.find((c) => c.id === "ecommerce-reference"),
    },
    {
      id: "healthcare-reference",
      title: "One Medical Care",
      subtitle: "HIPAA-Ready Patient Portal",
      badge: "Healthcare",
      metric: "+140% Bookings",
      color: "#FFB020",
      position: { x: 20, y: 78 },
      icon: <Stethoscope className="w-4 h-4 text-[#FFB020]" />,
      data: WEB_CASE_STUDIES.find((c) => c.id === "healthcare-reference"),
    },
    {
      id: "corporate-reference",
      title: "McKinsey & Company",
      subtitle: "Editorial Corporate Authority",
      badge: "B2B Advisory",
      metric: "Executive RFPs",
      color: "#A855F7",
      position: { x: 80, y: 78 },
      icon: <Briefcase className="w-4 h-4 text-[#A855F7]" />,
      data: WEB_CASE_STUDIES.find((c) => c.id === "corporate-reference"),
    },
  ];

  // Auto-cycle between the 4 benchmarks unless the user interacts
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActiveStudyId((prev) => {
        const idx = BENCHMARK_NODES.findIndex((n) => n.id === prev);
        const nextIdx = (idx + 1) % BENCHMARK_NODES.length;
        return BENCHMARK_NODES[nextIdx].id;
      });
    }, 4500);

    return () => clearInterval(interval);
  }, [isPaused, BENCHMARK_NODES]);

  const handleNodeSelect = (node: CenterFlowNode) => {
    setActiveStudyId(node.id);
    setIsPaused(true);

    if (pauseTimerRef.current) clearTimeout(pauseTimerRef.current);
    // Resume cycle after 10 seconds of inactivity
    pauseTimerRef.current = setTimeout(() => {
      setIsPaused(false);
    }, 10000);
  };

  return (
    <div className="w-full max-w-7xl mx-auto space-y-6 sm:space-y-8 select-none text-left">
      {/* ==================================================================== */}
      {/* 1. CENTER FLOW COMPONENT STAGE (HUB WITH OUTWARD FLOWING PULSES)     */}
      {/* ==================================================================== */}
      <div className="rounded-3xl bg-gradient-to-b from-[#060B22] to-[#081232] border border-[#FFB020]/25 shadow-2xl p-4 sm:p-6 lg:p-8 relative overflow-hidden">
        {/* Background ambient dot grid */}
        <div
          className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none"
          aria-hidden="true"
        />

        {/* Ambient lighting glows */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[#FFB020]/10 rounded-full blur-3xl pointer-events-none" />

        {/* Top Stage Telemetry Bar */}
        <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 pb-3 mb-2 border-b border-white/10 text-xs text-slate-300">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-mono text-[11px] uppercase tracking-wider text-[#FFB020] font-bold">
              Center Flow Architectural Hub
            </span>
            <span className="text-white/20 hidden sm:inline">•</span>
            <span className="text-slate-400 font-mono text-[11px] hidden sm:inline">
              Pulses flowing out to verified digital benchmarks
            </span>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
            <span>Click any node to inspect benchmark</span>
          </div>
        </div>

        {/* The Center Flow Engine */}
        <CenterFlow
          hub={{
            badge: "HDM CORE",
            icon: <Sparkles className="w-6 h-6 text-[#FFB020]" />,
            title: "Craft Engine",
            subtitle: "Verified Benchmarks",
          }}
          nodes={BENCHMARK_NODES}
          activeNodeId={activeStudyId}
          onNodeClick={handleNodeSelect}
          pulseColor="#FFB020"
          lineColor="rgba(255, 255, 255, 0.16)"
          pulseDuration={2.4}
          className="my-2 min-h-[460px] sm:min-h-[500px]"
        />

        {/* Live Active Benchmark Strip */}
        <div className="relative z-10 pt-3 border-t border-white/10 flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-slate-300">
          <div className="flex items-center gap-2">
            <span className="text-slate-400">Inspecting Node:</span>
            <span className="text-white font-bold">{activeStudy.clientName}</span>
            <span className="text-[#FFB020]">•</span>
            <span className="text-emerald-400">{activeStudy.categoryLabel}</span>
          </div>
          <span className="text-slate-400 text-[11px]">
            Auto-cycling 4 nodes • Click any satellite to inspect
          </span>
        </div>
      </div>

      {/* ==================================================================== */}
      {/* 2. ACTIVE BENCHMARK DEEP-DIVE STAGE (SPECIFICATIONS & PROOF)         */}
      {/* ==================================================================== */}
      <div className="rounded-3xl bg-white border border-[#E2DBD0] shadow-xl p-6 sm:p-8 lg:p-10 relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column (6 cols): Reference Overview, Solution & Scorecard */}
          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-xs font-mono font-black uppercase tracking-wider text-[#060B22] bg-[#FFB020] px-3 py-1 rounded-full shadow-xs">
                {activeStudy.categoryLabel}
              </span>

              <span className="text-xs font-mono font-bold text-slate-700 bg-[#FAF8F5] px-3 py-1 rounded-full border border-[#E2DBD0]">
                {activeStudy.industry}
              </span>
            </div>

            <div className="space-y-1.5">
              <h3 className="font-display font-black text-2xl sm:text-3xl text-[#0B1B3A] tracking-tight leading-snug">
                {activeStudy.projectType}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                {activeStudy.solution}
              </p>
            </div>

            {/* 3 Verified Metric Scorecards */}
            <div className="grid grid-cols-3 gap-2.5 pt-1">
              {activeStudy.metrics.map((m, i) => (
                <div
                  key={i}
                  className="p-3 rounded-2xl bg-[#FAF8F5] border border-[#E2DBD0] text-center space-y-0.5"
                >
                  <div className="font-display font-black text-sm text-[#0B1B3A] truncate">
                    {m.value}
                  </div>
                  <div className="text-[10px] font-mono text-slate-500 uppercase tracking-wider truncate">
                    {m.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Technologies Applied */}
            <div className="pt-2 space-y-1.5">
              <div className="text-xs font-black uppercase tracking-wider text-slate-600">
                Core Architecture Stack:
              </div>
              <div className="flex flex-wrap gap-1.5">
                {activeStudy.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-lg bg-[#FAF8F5] border border-[#E2DBD0] text-xs font-semibold text-slate-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Direct Consultation Action with StarBorder */}
            <div className="pt-3">
              <StarBorder
                as={Link}
                href="/get-a-quote"
                className="w-full sm:w-auto py-3.5 px-6 rounded-xl text-xs sm:text-sm font-black uppercase tracking-wider inline-flex items-center justify-center gap-2 shadow-lg cursor-pointer text-center group"
                radius={12}
                color="#FFB020"
                trailColor="#38BDF8"
                backgroundColor="#060B22"
                textColor="#FFFFFF"
                borderColor="rgba(255, 176, 32, 0.4)"
                sparkle={true}
                glow={0.8}
              >
                <span>Engineer a Platform Like {activeStudy.clientName}</span>
                <ArrowRight className="w-4 h-4 text-[#FFB020] group-hover:translate-x-1 transition-transform" />
              </StarBorder>
            </div>
          </div>

          {/* Right Column (6 cols): Tilted macOS Browser Preview of Benchmark */}
          <div className="lg:col-span-6 relative">
            <div className="rounded-2xl bg-[#060B22] border border-[#060B22]/30 shadow-2xl overflow-hidden">
              {/* Minimalist macOS Browser Top Chrome Bar */}
              <div className="h-9 bg-[#060B22] px-3.5 sm:px-4 flex items-center justify-between border-b border-white/10">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
                  <span className="text-[10px] font-mono text-slate-400 ml-2 hidden sm:inline">
                    {activeStudy.clientName}
                  </span>
                </div>

                <div className="flex items-center gap-1.5 px-3 py-0.5 rounded-md bg-white/10 border border-white/15 text-[10px] text-slate-200 font-mono">
                  <Lock className="w-3 h-3 text-emerald-400 shrink-0" />
                  <span>{activeStudy.liveUrl?.replace("https://www.", "") || "live.hdm.preview"}</span>
                </div>

                <div className="flex items-center gap-1.5 text-emerald-400 font-mono text-[9.5px] font-bold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="hidden sm:inline">VERIFIED CRAFT</span>
                </div>
              </div>

              {/* High-Resolution Screenshot Image */}
              <div className="relative aspect-[16/10.5] w-full bg-slate-950 overflow-hidden">
                <Image
                  src={activeStudy.image}
                  alt={activeStudy.imageAlt}
                  fill
                  className="object-cover object-top transition-transform duration-700 ease-out hover:scale-102"
                  sizes="(max-width: 1024px) 100vw, 650px"
                  priority
                />
              </div>
            </div>

            {/* Bottom Verification Banner */}
            <div className="mt-3 p-3 rounded-xl bg-[#FAF8F5] border border-[#E2DBD0] flex items-center justify-between text-xs text-slate-700">
              <span className="font-semibold text-slate-800 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Verified Production Benchmark</span>
              </span>
              <a
                href={activeStudy.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-[#060B22] hover:text-[#FFB020] inline-flex items-center gap-1 transition-colors"
              >
                <span>Visit Live Reference</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ShieldCheck,
  CheckCircle2,
  Users,
  Clock,
  Sparkles,
  Zap,
  Code2,
  Lock,
  ArrowRight,
  Award,
  GitBranch,
  Terminal,
  Activity,
  PlayCircle,
  Cpu,
  Check,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { WebDesignTeamShowcase } from "./WebDesignTeamShowcase";

interface EngineeringPillar {
  id: string;
  number: string;
  title: string;
  shortLabel: string;
  tagline: string;
  description: string;
  metric: string;
  badge: string;
  icon: React.ReactNode;
}

const PILLARS: EngineeringPillar[] = [
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
    icon: <Users className="w-4 h-4 text-[#FFB020]" />,
  },
  {
    id: "subsecond-speed",
    number: "02",
    shortLabel: "Sub-Second Speed",
    title: "Sub-Second Performance & Speed",
    tagline: "< 0.8s LCP Benchmark · 95+ Core Web Vitals",
    description:
      "We engineer with modern stacks (Next.js 16, React 19, Tailwind, Headless CMS) to guarantee sub-second initial paint and completely eliminate the bounce rates caused by bloated legacy templates.",
    metric: "< 0.8s Speed",
    badge: "100/100 Vitals",
    icon: <Zap className="w-4 h-4 text-[#FFB020]" />,
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
    icon: <Lock className="w-4 h-4 text-[#FFB020]" />,
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
    icon: <Clock className="w-4 h-4 text-[#FFB020]" />,
  },
];

export function WebDesignWhyChooseUs() {
  const [activePillarId, setActivePillarId] = useState<string>("senior-architects");

  const activePillar =
    PILLARS.find((p) => p.id === activePillarId) || PILLARS[0];

  return (
    <div className="space-y-10 sm:space-y-12 max-w-7xl mx-auto text-left">
      {/* 1. Authentic In-House Campus & Leadership Team Showcase */}
      <WebDesignTeamShowcase />

      {/* ============================================================== */}
      {/* 2. CARD-FREE ASYMMETRIC ENGINEERING STANDARD CONSOLE            */}
      {/* ============================================================== */}
      <div className="rounded-3xl bg-[#060B22] border border-white/10 shadow-2xl overflow-hidden p-6 sm:p-8 lg:p-10 text-white relative">
        {/* Subtle Ambient Studio Glows */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#FFB020]/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-80 h-80 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-8 border-b border-white/10 relative z-10">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-[#FFB020] text-xs font-black uppercase tracking-wider border border-[#FFB020]/30 shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#FFB020]" />
              <span>05 · Engineering &amp; Client Standards</span>
            </div>
            <h3 className="font-display font-black text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight leading-tight">
              Why High-Growth Brands Partner With Hire Desi Marketer.
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 max-w-md leading-relaxed">
            Eliminate traditional agency bureaucracy. We deploy senior full-stack architects directly to your product roadmap with strict SLAs and day-one code ownership.
          </p>
        </div>

        {/* Interactive Split-Screen Architecture Studio */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8 items-stretch relative z-10">
          {/* ========================================================== */}
          {/* LEFT COLUMN: Vertical Standard Selector Index (5 cols)     */}
          {/* ========================================================== */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-3">
            <div className="space-y-2.5">
              {PILLARS.map((pillar) => {
                const isActive = pillar.id === activePillarId;
                return (
                  <button
                    key={pillar.id}
                    type="button"
                    onClick={() => setActivePillarId(pillar.id)}
                    className={cn(
                      "w-full text-left p-4 sm:p-5 rounded-2xl transition-all duration-300 cursor-pointer border select-none group relative overflow-hidden",
                      isActive
                        ? "bg-white/10 border-[#FFB020] shadow-lg ring-1 ring-[#FFB020]/30"
                        : "bg-white/[0.03] border-white/10 hover:bg-white/[0.06] hover:border-white/20"
                    )}
                  >
                    {/* Active Left Accent Bar */}
                    {isActive && (
                      <span className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-[#FFB020] to-[#E68A00]" />
                    )}

                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-2.5">
                        <span
                          className={cn(
                            "w-7 h-7 rounded-lg text-xs font-black font-mono flex items-center justify-center transition-colors",
                            isActive
                              ? "bg-[#FFB020] text-[#060B22]"
                              : "bg-white/10 text-slate-400 group-hover:text-white"
                          )}
                        >
                          {pillar.number}
                        </span>
                        <h4
                          className={cn(
                            "font-display font-black text-sm sm:text-base transition-colors",
                            isActive
                              ? "text-white"
                              : "text-slate-300 group-hover:text-white"
                          )}
                        >
                          {pillar.title}
                        </h4>
                      </div>

                      <span
                        className={cn(
                          "text-[10px] font-mono font-bold px-2 py-0.5 rounded-full shrink-0 border",
                          isActive
                            ? "bg-[#FFB020]/20 text-[#FFB020] border-[#FFB020]/40"
                            : "bg-white/5 text-slate-400 border-white/10"
                        )}
                      >
                        {pillar.metric}
                      </span>
                    </div>

                    <div
                      className={cn(
                        "mt-2 text-xs leading-relaxed transition-colors",
                        isActive ? "text-slate-200" : "text-slate-400 group-hover:text-slate-300"
                      )}
                    >
                      {pillar.description}
                    </div>

                    <div className="mt-3 flex items-center justify-between text-[11px] font-semibold pt-2.5 border-t border-white/10">
                      <span className="text-[#FFB020]">{pillar.tagline}</span>
                      <span className="text-slate-400 flex items-center gap-1 group-hover:text-white transition-colors">
                        <span>Inspect SLA</span>
                        <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Direct Contact Pill */}
            <div className="p-3.5 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-between text-xs text-slate-300">
              <span className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Strict Bilateral NDA &amp; IP Protection</span>
              </span>
              <span className="font-bold text-[#FFB020]">Standard in All Engagements</span>
            </div>
          </div>

          {/* ========================================================== */}
          {/* RIGHT COLUMN: Live Engineering Telemetry HUD (7 cols)      */}
          {/* ========================================================== */}
          <div className="lg:col-span-7 flex flex-col justify-between rounded-2xl bg-slate-950/80 border border-white/15 p-5 sm:p-7 backdrop-blur-md relative overflow-hidden">
            {/* Top Mac Window Control Bar */}
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
                <span className="text-xs font-mono text-slate-400 ml-2">
                  hdm-telemetry / {activePillar.id}.live
                </span>
              </div>

              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[11px] font-mono text-emerald-400 uppercase tracking-wider font-bold">
                  SLA VERIFIED
                </span>
              </div>
            </div>

            {/* Dynamic Telemetry View Based on Active Pillar */}
            <div className="py-6 flex-1 flex flex-col justify-center">
              {/* VIEW 01: Direct Access to Senior Architects */}
              {activePillar.id === "senior-architects" && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-[#FFB020] font-mono font-bold flex items-center gap-1.5">
                      <Terminal className="w-4 h-4" />
                      <span>DIRECT ARCHITECT COMMUNICATION CHANNEL</span>
                    </span>
                    <span className="text-slate-400 text-[11px]">Average Response: &lt; 15 mins</span>
                  </div>

                  {/* Slack / Discord Architecture Thread Simulation */}
                  <div className="space-y-3 bg-[#060B22] p-4 rounded-xl border border-white/10 text-xs">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-[#FFB020] text-[#060B22] font-black text-xs flex items-center justify-center shrink-0">
                        PS
                      </div>
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-white">Pranjal Sharma</span>
                          <span className="text-[10px] text-[#FFB020] bg-[#FFB020]/15 px-2 py-0.2 rounded-full border border-[#FFB020]/30">
                            Chief Operating Officer &amp; Principal Architect
                          </span>
                        </div>
                        <p className="text-slate-300 leading-relaxed">
                          &ldquo;We reviewed your Figma flow and restructured the checkout query into a single edge cache call. Reduced roundtrip latency by 320ms. Code is committed directly to your repo branch.&rdquo;
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 pl-11 pt-1 text-[11px] text-emerald-400 font-mono">
                      <Check className="w-3.5 h-3.5" />
                      <span>Direct Loom video walkthrough attached · Pull request #142 ready for review</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-3 pt-2">
                    <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-center">
                      <div className="font-display font-black text-xl text-[#FFB020]">0</div>
                      <div className="text-[10.5px] text-slate-400 mt-0.5">Junior Middlemen</div>
                    </div>
                    <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-center">
                      <div className="font-display font-black text-xl text-emerald-400">100%</div>
                      <div className="text-[10.5px] text-slate-400 mt-0.5">Senior Squad Staff</div>
                    </div>
                    <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-center">
                      <div className="font-display font-black text-xl text-cyan-400">&lt; 15m</div>
                      <div className="text-[10.5px] text-slate-400 mt-0.5">Average SLA Reply</div>
                    </div>
                  </div>
                </div>
              )}

              {/* VIEW 02: Sub-Second Speed */}
              {activePillar.id === "subsecond-speed" && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-[#FFB020] font-mono font-bold flex items-center gap-1.5">
                      <Activity className="w-4 h-4" />
                      <span>GOOGLE LIGHTHOUSE &amp; CORE WEB VITALS RADAR</span>
                    </span>
                    <span className="text-emerald-400 text-[11px] font-bold">100 / 100 PERFORMANCE</span>
                  </div>

                  {/* 4 Dials of Core Web Vitals */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    <div className="p-3.5 rounded-xl bg-[#060B22] border border-emerald-500/30 text-center space-y-1">
                      <div className="text-[10px] uppercase tracking-wider text-slate-400 font-bold">Lighthouse</div>
                      <div className="font-display font-black text-2xl text-emerald-400">100</div>
                      <div className="text-[10px] text-emerald-300/80">Grade A+</div>
                    </div>
                    <div className="p-3.5 rounded-xl bg-[#060B22] border border-emerald-500/30 text-center space-y-1">
                      <div className="text-[10px] uppercase tracking-wider text-slate-400 font-bold">LCP Speed</div>
                      <div className="font-display font-black text-2xl text-emerald-400">0.58s</div>
                      <div className="text-[10px] text-emerald-300/80">&lt; 0.8s SLA Target</div>
                    </div>
                    <div className="p-3.5 rounded-xl bg-[#060B22] border border-emerald-500/30 text-center space-y-1">
                      <div className="text-[10px] uppercase tracking-wider text-slate-400 font-bold">Layout Shift</div>
                      <div className="font-display font-black text-2xl text-emerald-400">0.00</div>
                      <div className="text-[10px] text-emerald-300/80">Zero CLS</div>
                    </div>
                    <div className="p-3.5 rounded-xl bg-[#060B22] border border-emerald-500/30 text-center space-y-1">
                      <div className="text-[10px] uppercase tracking-wider text-slate-400 font-bold">Input Delay</div>
                      <div className="font-display font-black text-2xl text-emerald-400">12ms</div>
                      <div className="text-[10px] text-emerald-300/80">Instant INP</div>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 text-xs text-slate-300 space-y-1">
                    <div className="font-bold text-white flex items-center gap-1.5">
                      <Zap className="w-3.5 h-3.5 text-[#FFB020]" />
                      <span>Next.js 16 Turbo Compilation + Global Edge CDN</span>
                    </div>
                    <p className="text-[11.5px] text-slate-400 leading-relaxed">
                      Zero render-blocking scripts, automated AVIF/WebP image compression, and edge caching deliver instant page switches that keep bounce rates below 25%.
                    </p>
                  </div>
                </div>
              )}

              {/* VIEW 03: 100% Code & IP Ownership */}
              {activePillar.id === "code-ownership" && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-[#FFB020] font-mono font-bold flex items-center gap-1.5">
                      <GitBranch className="w-4 h-4" />
                      <span>ENTERPRISE REPOSITORY DEPLOYMENT</span>
                    </span>
                    <span className="text-emerald-400 text-[11px] font-bold">PRIVATE &amp; CLIENT-OWNED</span>
                  </div>

                  {/* Terminal Git Commits Feed */}
                  <div className="bg-[#060B22] p-4 rounded-xl border border-white/10 space-y-2 font-mono text-xs">
                    <div className="flex items-center justify-between text-[11px] text-slate-400 pb-2 border-b border-white/10">
                      <span>repo: github.com/your-org/production-web</span>
                      <span className="text-emerald-400">Branch: main (protected)</span>
                    </div>
                    <div className="space-y-1.5 text-[11.5px]">
                      <div className="text-slate-300">
                        <span className="text-emerald-400 font-bold">commit 8a9f201</span>: Legal IP Assignment deed committed with SHA-256 hash
                      </div>
                      <div className="text-slate-300">
                        <span className="text-[#FFB020] font-bold">commit 4c7b19e</span>: Clean Next.js 16 architecture with zero vendor lock-in
                      </div>
                      <div className="text-slate-400 text-[11px]">
                        Author: Hire Desi Marketer &lt;lead-architect@hiredesimarketer.com&gt;
                      </div>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 text-xs text-slate-300 flex items-start gap-3">
                    <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold text-white">Full Commercial &amp; Copyright Transfer</div>
                      <p className="text-[11px] text-slate-400 mt-0.5 leading-relaxed">
                        Every single line of code, Figma artboard, and digital asset belongs 100% to you. No ongoing license fees, no platform holdbacks, no hostage situations.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* VIEW 04: Transparent Agile Delivery & Daily Demos */}
              {activePillar.id === "agile-delivery" && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-[#FFB020] font-mono font-bold flex items-center gap-1.5">
                      <PlayCircle className="w-4 h-4" />
                      <span>DAILY SPRINT DEMOS &amp; STAGING PIPELINE</span>
                    </span>
                    <span className="text-cyan-400 text-[11px] font-bold">BI-WEEKLY RELEASES</span>
                  </div>

                  {/* Interactive Loom Video Mockup */}
                  <div className="bg-[#060B22] p-4 rounded-xl border border-white/10 flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#B87A00] to-[#FFB020] flex items-center justify-center shrink-0 shadow-lg cursor-pointer hover:scale-105 transition-transform">
                      <PlayCircle className="w-8 h-8 text-[#060B22]" />
                    </div>
                    <div className="space-y-1 min-w-0">
                      <div className="text-[10px] font-mono text-[#FFB020] uppercase tracking-wider font-bold">
                        Sprint 03 Daily Walkthrough (3m 42s)
                      </div>
                      <div className="font-bold text-white text-sm truncate">
                        UI Polish &amp; Checkout Funnel Integration Demo
                      </div>
                      <div className="text-[11px] text-slate-400">
                        Recorded daily by your dedicated Lead Engineer
                      </div>
                    </div>
                  </div>

                  {/* Live Staging Branch Status */}
                  <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                      <span className="font-mono text-slate-200">staging.yourbrand.hdm.dev</span>
                    </div>
                    <span className="text-emerald-400 font-bold font-mono text-[11px]">200 OK · Active</span>
                  </div>
                </div>
              )}
            </div>

            {/* Bottom SLA Guarantee Footer */}
            <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-300">
              <span className="flex items-center gap-1.5 text-[#FFB020] font-bold">
                <Award className="w-4 h-4" />
                <span>Enterprise SLA Guarantee</span>
              </span>
              <span className="text-[11px] text-slate-400">
                100% Salaried Full-Time In-House Engineers
              </span>
            </div>
          </div>
        </div>

        {/* Bottom CTA Bar */}
        <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 relative z-10">
          <div className="text-xs text-slate-300 text-center sm:text-left">
            Ready to experience disciplined engineering with zero friction?
          </div>
          <Link
            href="/get-a-quote"
            className="btn-luxury-gold btn-shimmer py-3 px-6 rounded-xl text-xs font-black uppercase tracking-wider inline-flex items-center gap-2 shrink-0 cursor-pointer shadow-lg"
          >
            <span>Request Your Scoping Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}

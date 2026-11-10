"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  Sparkles,
  Clock,
  ShieldCheck,
  Search,
  Layers,
  PenTool,
  Code2,
  Rocket,
  Lock,
  Check,
  Terminal,
  Globe,
  Activity,
  Zap,
  LayoutGrid,
  Monitor,
  Smartphone,
  Tablet,
  ChevronRight,
  MessageSquare,
} from "lucide-react";
import { cn } from "@/lib/utils";
import StarBorder from "@/components/ui/StarBorder";

interface ProcessPhase {
  step: number;
  number: string;
  title: string;
  shortTag: string;
  tag: string;
  duration: string;
  icon: React.ComponentType<{ className?: string }>;
  headline: string;
  summary: string;
  deliverables: string[];
  slaMetric: string;
  renderArtifact: () => React.ReactNode;
}

export function WebDesignProcessStream() {
  const [activeStepIdx, setActiveStepIdx] = useState<number>(0);
  const [viewMode, setViewMode] = useState<"stage" | "grid">("stage");

  const PHASES: ProcessPhase[] = [
    {
      step: 1,
      number: "01",
      title: "Discovery & Scope",
      shortTag: "Discovery",
      tag: "Foundation & Spec",
      duration: "1–2 Days",
      icon: Search,
      headline: "Commercial Objective Mapping & Sitemap Architecture",
      summary:
        "We align on your revenue targets, map the complete page hierarchy, and lock in milestone deliverables with zero ambiguity or scope creep.",
      deliverables: [
        "Comprehensive Sitemap & Wireflow Spec",
        "Fixed Milestones & Sprints Timeline",
        "Tech Stack & Cloud Hosting Approval",
      ],
      slaMetric: "100% Scope Certainty SLA",
      renderArtifact: () => (
        <div className="space-y-3 font-mono text-xs">
          <div className="flex items-center justify-between pb-2 border-b border-white/10 text-[11px] text-slate-400">
            <span>SITEMAP ARCHITECTURE SPECIFICATION</span>
            <span className="text-emerald-400 font-bold flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              ● SCOPE LOCKED
            </span>
          </div>

          {/* Visual Architecture Sitemap Nodes */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-1">
            <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-left space-y-1.5 hover:border-[#FFB020]/40 transition-colors">
              <div className="text-[10px] text-[#FFB020] font-bold">01 · Root Engine</div>
              <div className="text-white font-bold text-xs">/ (Homepage)</div>
              <div className="text-[10px] text-slate-400">Hero + Proof + Dual CTAs</div>
              <span className="inline-block text-[9px] px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-bold">Approved</span>
            </div>

            <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-left space-y-1.5 hover:border-[#FFB020]/40 transition-colors">
              <div className="text-[10px] text-[#FFB020] font-bold">02 · Solutions Hub</div>
              <div className="text-white font-bold text-xs">/services/*</div>
              <div className="text-[10px] text-slate-400">6 Bespoke Service Silos</div>
              <span className="inline-block text-[9px] px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-bold">Approved</span>
            </div>

            <div className="p-3 rounded-xl bg-[#FFB020]/10 border border-[#FFB020]/40 text-left space-y-1.5 shadow-inner">
              <div className="text-[10px] text-[#FFB020] font-bold">03 · Lead Funnel</div>
              <div className="text-white font-bold text-xs">/get-a-quote</div>
              <div className="text-[10px] text-emerald-300">1-Tap Conversion API</div>
              <span className="inline-block text-[9px] px-1.5 py-0.5 rounded bg-[#FFB020]/20 text-[#FFB020] font-bold">Locked Spec</span>
            </div>
          </div>

          <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-between text-[11px]">
            <span className="text-slate-300">Milestone Roadmap: 7 Sprints Scheduled</span>
            <span className="text-[#FFB020] font-bold">Signed Spec Deed ✓</span>
          </div>
        </div>
      ),
    },
    {
      step: 2,
      number: "02",
      title: "Planning & Strategy",
      shortTag: "Strategy",
      tag: "Blueprint & SEO Map",
      duration: "2–3 Days",
      icon: Layers,
      headline: "Framework Blueprint & 1:1 SEO Safeguard Mapping",
      summary:
        "We select the optimal tech stack, map structured data schemas, and configure 1:1 301 redirects so your Google keyword rankings never drop.",
      deliverables: [
        "Next.js / Shopify / CMS Architecture Plan",
        "Strict 1:1 SEO 301 Redirect Safeguard Map",
        "Schema.org Structured Data Blueprint",
      ],
      slaMetric: "Zero SEO Drop Guaranteed",
      renderArtifact: () => (
        <div className="space-y-3 font-mono text-xs">
          <div className="flex items-center justify-between pb-2 border-b border-white/10 text-[11px] text-slate-400">
            <span>SEO 301 REDIRECT SAFEGUARD CONSOLE</span>
            <span className="text-emerald-400 font-bold flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              ● RANKINGS PROTECTED
            </span>
          </div>

          <div className="space-y-2 text-left text-[11px]">
            <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
              <span className="text-slate-400 truncate">old-site.com/services/*</span>
              <span className="text-emerald-400 font-bold">➔ /services [301 Permanent]</span>
            </div>
            <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
              <span className="text-slate-400 truncate">old-site.com/contact-us</span>
              <span className="text-emerald-400 font-bold">➔ /get-a-quote [301 Permanent]</span>
            </div>
          </div>

          <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-between text-[11px]">
            <span className="text-slate-300">Google Domain Authority Retained:</span>
            <span className="text-emerald-400 font-bold">100% Equity Safe</span>
          </div>
        </div>
      ),
    },
    {
      step: 3,
      number: "03",
      title: "UI/UX Design",
      shortTag: "Design",
      tag: "Figma Prototypes",
      duration: "4–6 Days",
      icon: PenTool,
      headline: "Pixel-Perfect Figma Prototypes & Design Tokens",
      summary:
        "Senior designers craft bespoke wireframes and clickable desktop & mobile prototypes tailored to your brand, with revisions until you are 100% satisfied.",
      deliverables: [
        "Custom Figma Design System & Typography Kit",
        "Interactive Clickable Desktop & Mobile Flows",
        "WCAG 2.1 AA Accessibility Signoff",
      ],
      slaMetric: "Clickable Figma Prototype Signoff",
      renderArtifact: () => (
        <div className="space-y-3 font-mono text-xs">
          <div className="flex items-center justify-between pb-2 border-b border-white/10 text-[11px] text-slate-400">
            <span>FIGMA PRODUCTION DESIGN SYSTEM</span>
            <span className="text-[#FFB020] font-bold">● 100% BESPOKE</span>
          </div>

          {/* Design Token Swatches */}
          <div className="grid grid-cols-3 gap-2.5">
            <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-left space-y-1">
              <div className="w-6 h-6 rounded-lg bg-[#060B22] border border-white/30 shadow-xs" />
              <div className="text-[10px] text-white font-bold">#060B22</div>
              <div className="text-[9px] text-slate-400">Midnight Navy</div>
            </div>

            <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-left space-y-1">
              <div className="w-6 h-6 rounded-lg bg-[#FFB020] border border-white/30 shadow-xs" />
              <div className="text-[10px] text-white font-bold">#FFB020</div>
              <div className="text-[9px] text-slate-400">Signature Gold</div>
            </div>

            <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-left space-y-1">
              <div className="w-6 h-6 rounded-lg bg-[#FAF8F5] border border-white/30 shadow-xs" />
              <div className="text-[10px] text-white font-bold">#FAF8F5</div>
              <div className="text-[9px] text-slate-400">Ivory Studio</div>
            </div>
          </div>

          <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-between text-[11px]">
            <span className="text-slate-300">Responsive Viewports Tested:</span>
            <span className="text-emerald-400 font-bold">Desktop + Tablet + Mobile ✓</span>
          </div>
        </div>
      ),
    },
    {
      step: 4,
      number: "04",
      title: "Development",
      shortTag: "Engineering",
      tag: "Next.js & APIs",
      duration: "1–2 Weeks",
      icon: Code2,
      headline: "Modular Full-Stack Next.js 16 Engineering",
      summary:
        "Clean, maintainable components built with Next.js 16, headless CMS integration, third-party API webhooks, and live staging preview builds.",
      deliverables: [
        "Live Passworded Staging URL",
        "Next.js 16 Server Components Architecture",
        "Automated API, Payment & CRM Webhooks",
      ],
      slaMetric: "Daily Live Staging Builds",
      renderArtifact: () => (
        <div className="space-y-3 font-mono text-xs">
          <div className="flex items-center justify-between pb-2 border-b border-white/10 text-[11px] text-slate-400">
            <span>LIVE STAGING ENVIRONMENT &amp; GIT STREAM</span>
            <span className="text-emerald-400 font-bold flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              ● BUILD PASSING
            </span>
          </div>

          <div className="p-3 rounded-xl bg-black/60 border border-white/10 text-left space-y-1.5 text-[11px]">
            <div className="text-slate-400 flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5 text-emerald-400" />
              <span>▲ Next.js 16.4.1 (Turbopack) build --production</span>
            </div>
            <div className="text-emerald-400 font-bold">✓ Prerendered 16/16 routes in 1.8s</div>
            <div className="text-slate-400 text-[10px]">branch: main (Day-One Client GitHub Access)</div>
          </div>

          <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-between text-[11px]">
            <span className="text-slate-300">Live Preview Link:</span>
            <span className="text-[#FFB020] font-bold flex items-center gap-1">
              <Lock className="w-3 h-3 text-[#FFB020]" />
              sprint-04.hdm.staging
            </span>
          </div>
        </div>
      ),
    },
    {
      step: 5,
      number: "05",
      title: "QA & Verification",
      shortTag: "QA Testing",
      tag: "Speed & Security",
      duration: "3–4 Days",
      icon: Activity,
      headline: "Speed Hardening & Google Core Web Vitals Audit",
      summary:
        "Rigorous cross-device testing, speed remediation for green 95+ Core Web Vitals, zero layout shifts, and form notification delivery verification.",
      deliverables: [
        "Google Core Web Vitals 95+ Score Audit",
        "Cross-Browser (Safari, Chrome, iOS) QA Pass",
        "SSL & Security Penetration Validation",
      ],
      slaMetric: "95+ Core Web Vitals SLA",
      renderArtifact: () => (
        <div className="space-y-3 font-mono text-xs">
          <div className="flex items-center justify-between pb-2 border-b border-white/10 text-[11px] text-slate-400">
            <span>GOOGLE PAGESPEED AUDIT BENCHMARK</span>
            <span className="text-emerald-400 font-bold">● GRADE A+ VERIFIED</span>
          </div>

          {/* 4 Score Badges */}
          <div className="grid grid-cols-4 gap-2 text-center">
            <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 space-y-0.5">
              <div className="text-emerald-400 font-black text-base">99</div>
              <div className="text-[9px] text-slate-300 uppercase tracking-wider">Speed</div>
            </div>
            <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 space-y-0.5">
              <div className="text-emerald-400 font-black text-base">100</div>
              <div className="text-[9px] text-slate-300 uppercase tracking-wider">Access.</div>
            </div>
            <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 space-y-0.5">
              <div className="text-emerald-400 font-black text-base">100</div>
              <div className="text-[9px] text-slate-300 uppercase tracking-wider">Best Prac.</div>
            </div>
            <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 space-y-0.5">
              <div className="text-emerald-400 font-black text-base">100</div>
              <div className="text-[9px] text-slate-300 uppercase tracking-wider">SEO</div>
            </div>
          </div>

          <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-between text-[11px]">
            <span className="text-slate-300">Largest Contentful Paint:</span>
            <span className="text-emerald-400 font-bold">&lt; 0.58s Initial Paint ✓</span>
          </div>
        </div>
      ),
    },
    {
      step: 6,
      number: "06",
      title: "Deployment & Launch",
      shortTag: "Go-Live",
      tag: "Zero Downtime",
      duration: "1 Day",
      icon: Rocket,
      headline: "Zero-Downtime Server Cutover & Analytics Validation",
      summary:
        "Global edge DNS propagation, Google Tag Manager container setup, GA4 conversion event verification, and live Google Search Console sitemap indexing.",
      deliverables: [
        "Zero-Downtime Cloudflare DNS Cutover",
        "Google Tag Manager & GA4 Event Tracking",
        "Google Search Console Sitemap Indexing",
      ],
      slaMetric: "Zero-Downtime Deployment SLA",
      renderArtifact: () => (
        <div className="space-y-3 font-mono text-xs">
          <div className="flex items-center justify-between pb-2 border-b border-white/10 text-[11px] text-slate-400">
            <span>EDGE DNS CUTOVER &amp; ANALYTICS STREAM</span>
            <span className="text-emerald-400 font-bold flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              ● 100% LIVE
            </span>
          </div>

          <div className="space-y-2 text-left text-[11px]">
            <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
              <span className="text-slate-300">Global DNS Cutover:</span>
              <span className="text-emerald-400 font-bold">Zero Downtime (0.00s)</span>
            </div>
            <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
              <span className="text-slate-300">GTM Container:</span>
              <span className="text-[#FFB020] font-bold">GTM-5RS9F324 Verified ✓</span>
            </div>
          </div>

          <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-between text-[11px]">
            <span className="text-slate-300">Production SSL Encryption:</span>
            <span className="text-emerald-400 font-bold">TLS 1.3 Active</span>
          </div>
        </div>
      ),
    },
    {
      step: 7,
      number: "07",
      title: "Warranty & SLA",
      shortTag: "Support",
      tag: "Long-Term Care",
      duration: "30 Days+",
      icon: MessageSquare,
      headline: "30-Day Full Warranty & Dedicated Architect SLA",
      summary:
        "30-day post-launch bug warranty, scheduled cloud backups, security patches, and direct developer communication in your private Slack/Teams channel.",
      deliverables: [
        "30-Day Full Bug-Fix Guarantee",
        "Direct Client Slack Channel (< 15m SLA)",
        "Daily Cloud Backups & Security Patches",
      ],
      slaMetric: "30-Day Warranty Included",
      renderArtifact: () => (
        <div className="space-y-3 font-mono text-xs">
          <div className="flex items-center justify-between pb-2 border-b border-white/10 text-[11px] text-slate-400">
            <span>VIP CLIENT SLACK CHANNEL &amp; WARRANTY DEED</span>
            <span className="text-emerald-400 font-bold flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              ● ACTIVE CARE
            </span>
          </div>

          <div className="space-y-2 text-left text-[11px]">
            <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
              <span className="text-slate-300">Private Channel:</span>
              <span className="text-[#FFB020] font-bold">#hdm-client-direct</span>
            </div>
            <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
              <span className="text-slate-300">Direct SLA Response:</span>
              <span className="text-emerald-400 font-bold">&lt; 15 Mins Architect SLA</span>
            </div>
          </div>

          <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-between text-[11px]">
            <span className="text-slate-300">Post-Launch Warranty:</span>
            <span className="text-emerald-400 font-bold">30 Days 100% Covered ✓</span>
          </div>
        </div>
      ),
    },
  ];

  const totalPhases = PHASES.length;
  const activePhase = PHASES[activeStepIdx];

  return (
    <div className="space-y-6 max-w-6xl mx-auto select-none text-left">
      {/* ==================================================================== */}
      {/* TOP CONTROLS: 7-STATION PIPELINE + VIEW MODE TOGGLE                  */}
      {/* ==================================================================== */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pb-2">
        {/* Sprint Counter & Badge */}
        <div className="flex items-center gap-2 text-xs font-mono">
          <span className="px-2.5 py-1 rounded-lg bg-[#060B22] text-[#FFB020] font-bold border border-[#FFB020]/30 shadow-xs">
            Sprint {activePhase.number} of 07
          </span>
          <span className="text-slate-600 font-semibold hidden sm:inline">
            {activePhase.title} · {activePhase.duration}
          </span>
        </div>

        {/* View Mode Toggle: Interactive Walkthrough vs. All 7 Sprints Grid */}
        <div className="flex items-center gap-1 p-1 bg-white rounded-xl border border-[#E2DBD0] shadow-xs">
          <button
            type="button"
            onClick={() => setViewMode("stage")}
            className={cn(
              "px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5",
              viewMode === "stage"
                ? "bg-[#060B22] text-[#FFB020] shadow-sm font-black"
                : "text-slate-600 hover:text-[#060B22]"
            )}
          >
            <Sparkles className="w-3.5 h-3.5 text-[#FFB020]" />
            <span>Interactive Stage</span>
          </button>

          <button
            type="button"
            onClick={() => setViewMode("grid")}
            className={cn(
              "px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5",
              viewMode === "grid"
                ? "bg-[#060B22] text-[#FFB020] shadow-sm font-black"
                : "text-slate-600 hover:text-[#060B22]"
            )}
          >
            <LayoutGrid className="w-3.5 h-3.5 text-[#FFB020]" />
            <span>All 7 Sprints Grid</span>
          </button>
        </div>
      </div>

      {/* ==================================================================== */}
      {/* 7-STATION PIPELINE STEPPER BAR (CONNECTING TRACK)                    */}
      {/* ==================================================================== */}
      <div className="relative p-2 sm:p-2.5 bg-white rounded-2xl border border-[#E2DBD0] shadow-sm overflow-hidden">
        {/* Subtle Horizontal Progression Track */}
        <div className="hidden lg:block absolute top-1/2 left-6 right-6 h-0.5 bg-slate-100 -translate-y-1/2 z-0" />
        <div
          className="hidden lg:block absolute top-1/2 left-6 h-0.5 bg-gradient-to-r from-[#FFB020] to-[#E68A00] -translate-y-1/2 z-0 transition-all duration-500"
          style={{ width: `${(activeStepIdx / (totalPhases - 1)) * 92}%` }}
        />

        <div className="grid grid-cols-7 gap-1 sm:gap-2 relative z-10 overflow-x-auto no-scrollbar">
          {PHASES.map((p, idx) => {
            const isSelected = idx === activeStepIdx;
            const isPast = idx < activeStepIdx;
            const Icon = p.icon;

            return (
              <button
                key={p.step}
                type="button"
                onClick={() => {
                  setActiveStepIdx(idx);
                  setViewMode("stage");
                }}
                className={cn(
                  "p-2 sm:p-2.5 rounded-xl text-center transition-all duration-200 cursor-pointer flex flex-col items-center gap-1 min-w-[70px]",
                  isSelected
                    ? "bg-[#060B22] text-white shadow-md ring-2 ring-[#FFB020]/60 scale-102"
                    : isPast
                    ? "bg-slate-50 text-slate-700 hover:bg-slate-100 hover:text-[#060B22]"
                    : "bg-transparent text-slate-500 hover:bg-slate-50 hover:text-slate-800"
                )}
              >
                <div
                  className={cn(
                    "w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center transition-all",
                    isSelected
                      ? "bg-[#FFB020] text-[#060B22] shadow-sm font-black"
                      : isPast
                      ? "bg-emerald-100 text-emerald-800"
                      : "bg-slate-100 text-slate-600"
                  )}
                >
                  {isPast ? (
                    <Check className="w-4 h-4 stroke-[2.5]" />
                  ) : (
                    <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  )}
                </div>

                <span
                  className={cn(
                    "text-[10px] sm:text-[11px] font-bold block truncate max-w-full",
                    isSelected ? "text-[#FFB020]" : ""
                  )}
                >
                  {p.shortTag}
                </span>

                <span
                  className={cn(
                    "text-[9px] font-mono hidden md:block",
                    isSelected ? "text-slate-300" : "text-slate-400"
                  )}
                >
                  {p.duration}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* ==================================================================== */}
      {/* MODE 1: INTERACTIVE SPRINT STAGE (DEEP DIVE COCKPIT)                 */}
      {/* ==================================================================== */}
      {viewMode === "stage" && (
        <div className="rounded-3xl bg-gradient-to-br from-[#060B22] via-[#091538] to-[#060B22] border border-white/10 shadow-2xl p-6 sm:p-8 lg:p-10 text-white relative overflow-hidden transition-all duration-300">
          {/* Ambient Warm Golden Backlight */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#FFB020]/15 rounded-full blur-[110px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-sky-500/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center relative z-10">
            {/* ============================================================== */}
            {/* LEFT: SPRINT SCOPE, DELIVERABLES & CTA (5 cols)                */}
            {/* ============================================================== */}
            <div className="lg:col-span-5 space-y-4">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono font-black uppercase tracking-wider text-[#060B22] bg-[#FFB020] px-3 py-1 rounded-full shadow-xs">
                  Sprint {activePhase.number} · {activePhase.tag}
                </span>
                <span className="text-xs font-mono font-bold text-slate-300 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-[#FFB020]" />
                  <span>{activePhase.duration}</span>
                </span>
              </div>

              <h3 className="font-display font-black text-xl sm:text-2xl lg:text-3xl text-white tracking-tight leading-snug">
                {activePhase.headline}
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                {activePhase.summary}
              </p>

              {/* Verified Deliverables List */}
              <div className="space-y-2 pt-2 border-t border-white/10 text-xs text-slate-200">
                <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#FFB020]">
                  Verified Deliverables &amp; Outcomes:
                </div>
                {activePhase.deliverables.map((item, i) => (
                  <div key={i} className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span className="leading-snug">{item}</span>
                  </div>
                ))}
              </div>

              {/* Action Buttons & Navigation */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <StarBorder
                  as={Link}
                  href="/get-a-quote"
                  className="py-3 px-6 rounded-xl text-xs font-black uppercase tracking-wider inline-flex items-center gap-2 shadow-md cursor-pointer group"
                  radius={12}
                  color="#FFF8E7"
                  trailColor="#FFB020"
                  backgroundColor="#FFB020"
                  textColor="#060B22"
                  borderColor="rgba(255, 176, 32, 0.5)"
                  sparkle={true}
                  glow={0.8}
                >
                  <span>Schedule Sprint {activePhase.number}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </StarBorder>

                {/* Prev / Next Sprint Arrows */}
                <div className="flex items-center gap-1.5 text-xs font-mono">
                  <button
                    type="button"
                    onClick={() =>
                      setActiveStepIdx((prev) => (prev > 0 ? prev - 1 : totalPhases - 1))
                    }
                    className="p-2 rounded-xl bg-white/10 hover:bg-white/15 text-white transition-colors cursor-pointer border border-white/10"
                    aria-label="Previous sprint"
                  >
                    <ArrowLeft className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveStepIdx((prev) => (prev + 1) % totalPhases)}
                    className="p-2 rounded-xl bg-white/10 hover:bg-white/15 text-white transition-colors cursor-pointer border border-white/10"
                    aria-label="Next sprint"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* ============================================================== */}
            {/* RIGHT: REALISTIC SPRINT ARTIFACT CONSOLE (7 cols)              */}
            {/* ============================================================== */}
            <div className="lg:col-span-7">
              <div className="rounded-2xl bg-black/60 border border-white/15 shadow-2xl overflow-hidden backdrop-blur-md">
                {/* macOS Style Window Bar */}
                <div className="h-9 bg-white/5 px-3.5 flex items-center justify-between border-b border-white/10">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
                  </div>

                  <div className="flex items-center gap-1.5 text-[10.5px] font-mono text-slate-300">
                    <Lock className="w-2.5 h-2.5 text-emerald-400 shrink-0" />
                    <span>delivery.hiredesimarketer.com / sprint-{activePhase.number}</span>
                  </div>

                  <span className="text-[9px] font-mono font-bold text-emerald-400 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    LIVE ARTIFACT
                  </span>
                </div>

                {/* Render Dynamic Realistic Artifact */}
                <div className="p-5 sm:p-6 transition-all duration-300 ease-out">
                  {activePhase.renderArtifact()}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Telemetry Strip */}
          <div className="mt-6 pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-slate-400">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Full Client Visibility · Daily Loom Video Walkthroughs</span>
            </div>

            <div className="text-emerald-400 font-bold flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>{activePhase.slaMetric}</span>
            </div>
          </div>
        </div>
      )}

      {/* ==================================================================== */}
      {/* MODE 2: ALL 7 SPRINTS ARCHITECTURAL GRID (SEE EVERYTHING AT ONCE)   */}
      {/* ==================================================================== */}
      {viewMode === "grid" && (
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {PHASES.map((p, idx) => {
              const Icon = p.icon;
              const isSelected = idx === activeStepIdx;

              return (
                <div
                  key={p.step}
                  onClick={() => {
                    setActiveStepIdx(idx);
                    setViewMode("stage");
                  }}
                  className={cn(
                    "p-5 rounded-2xl bg-white border transition-all duration-200 cursor-pointer text-left space-y-3 relative overflow-hidden group",
                    isSelected
                      ? "border-[#FFB020] shadow-md ring-2 ring-[#FFB020]/30"
                      : "border-[#E2DBD0] hover:border-slate-400 hover:shadow-sm"
                  )}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-[#060B22] text-[#FFB020] flex items-center justify-center font-bold text-xs font-mono">
                        {p.number}
                      </div>
                      <span className="font-display font-black text-sm text-[#0B1B3A]">
                        {p.title}
                      </span>
                    </div>

                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-slate-100 text-slate-700 font-bold">
                      {p.duration}
                    </span>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-2">
                    {p.summary}
                  </p>

                  <div className="space-y-1.5 pt-2 border-t border-slate-100 text-[11px] text-slate-700">
                    {p.deliverables.slice(0, 2).map((d, i) => (
                      <div key={i} className="flex items-center gap-2 truncate">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span className="truncate">{d}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-2 flex items-center justify-between text-xs font-bold text-[#B87A00] group-hover:text-[#060B22] transition-colors">
                    <span>Inspect Deliverables</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              );
            })}
          </div>

          <div className="p-4 rounded-2xl bg-[#060B22] text-white flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
            <span className="text-slate-300">
              Need a custom sprint cadence or expedited 10-day emergency turnaround?
            </span>
            <StarBorder
              as={Link}
              href="/get-a-quote"
              className="py-2 px-4 rounded-xl text-xs font-bold uppercase tracking-wider shrink-0"
              radius={10}
              color="#FFF8E7"
              trailColor="#FFB020"
              backgroundColor="#FFB020"
              textColor="#060B22"
              borderColor="rgba(255, 176, 32, 0.5)"
              sparkle={true}
              glow={0.8}
            >
              <span>Discuss Custom Timeline</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </StarBorder>
          </div>
        </div>
      )}
    </div>
  );
}

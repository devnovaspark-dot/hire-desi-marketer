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
  Lock,
  Activity,
  Check,
  Terminal,
  Globe,
  Smartphone,
  ExternalLink,
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
  summary: string;
  deliverables: string[];
  slaMetric: string;
  renderArtifact: () => React.ReactNode;
}

export function WebDesignProcessStream() {
  const [activeStepIdx, setActiveStepIdx] = useState<number>(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  const PHASES: ProcessPhase[] = [
    {
      step: 1,
      number: "01",
      title: "Discovery & Scope",
      shortTag: "Discovery",
      tag: "Foundation & Spec",
      duration: "1–2 Days",
      headline: "Commercial Objective Mapping & Sitemap Architecture",
      summary:
        "We align on your business targets, map the complete page hierarchy, and lock in milestone scopes with zero ambiguity.",
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
            <span className="text-emerald-400 font-bold">● SCOPE LOCKED</span>
          </div>

          {/* Visual Architecture Sitemap Nodes */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-1">
            <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-left space-y-1">
              <div className="text-[10px] text-[#FFB020] font-bold">01 · Root Engine</div>
              <div className="text-white font-bold text-xs">/ (Homepage)</div>
              <div className="text-[10px] text-slate-400">Hero + Proof + CTA</div>
            </div>

            <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-left space-y-1">
              <div className="text-[10px] text-[#FFB020] font-bold">02 · Solutions Hub</div>
              <div className="text-white font-bold text-xs">/services/*</div>
              <div className="text-[10px] text-slate-400">6 Bespoke Capabilities</div>
            </div>

            <div className="p-2.5 rounded-xl bg-white/5 border border-[#FFB020]/40 text-left space-y-1 bg-[#FFB020]/5">
              <div className="text-[10px] text-[#FFB020] font-bold">03 · Lead Funnel</div>
              <div className="text-white font-bold text-xs">/get-a-quote</div>
              <div className="text-[10px] text-emerald-400">1-Tap Conversion API</div>
            </div>
          </div>

          <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-between text-[11px]">
            <span className="text-slate-300">Milestone Roadmap: 7 Sprints Locked</span>
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
            <span className="text-emerald-400 font-bold">● RANKINGS PROTECTED</span>
          </div>

          <div className="space-y-1.5 text-left text-[11px]">
            <div className="p-2 rounded-lg bg-white/5 border border-white/10 flex items-center justify-between">
              <span className="text-slate-400 truncate">old-site.com/services/*</span>
              <span className="text-emerald-400 font-bold">➔ /services [301 Locked]</span>
            </div>
            <div className="p-2 rounded-lg bg-white/5 border border-white/10 flex items-center justify-between">
              <span className="text-slate-400 truncate">old-site.com/contact-us</span>
              <span className="text-emerald-400 font-bold">➔ /get-a-quote [301 Locked]</span>
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
          <div className="grid grid-cols-3 gap-2">
            <div className="p-2 rounded-lg bg-white/5 border border-white/10 text-left space-y-1">
              <div className="w-5 h-5 rounded-md bg-[#060B22] border border-white/20" />
              <div className="text-[10px] text-white font-bold">#060B22</div>
              <div className="text-[9px] text-slate-400">Deep Navy</div>
            </div>

            <div className="p-2 rounded-lg bg-white/5 border border-white/10 text-left space-y-1">
              <div className="w-5 h-5 rounded-md bg-[#FFB020] border border-white/20" />
              <div className="text-[10px] text-white font-bold">#FFB020</div>
              <div className="text-[9px] text-slate-400">Signature Gold</div>
            </div>

            <div className="p-2 rounded-lg bg-white/5 border border-white/10 text-left space-y-1">
              <div className="w-5 h-5 rounded-md bg-[#FAF8F5] border border-white/20" />
              <div className="text-[10px] text-white font-bold">#FAF8F5</div>
              <div className="text-[9px] text-slate-400">Ivory Studio</div>
            </div>
          </div>

          <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-between text-[11px]">
            <span className="text-slate-300">Responsive Viewports:</span>
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
            <span className="text-emerald-400 font-bold">● BUILD PASSING</span>
          </div>

          <div className="p-2.5 rounded-xl bg-black/50 border border-white/10 text-left space-y-1 text-[11px]">
            <div className="text-slate-400 flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5 text-emerald-400" />
              <span>▲ Next.js 16.4.1 (Turbopack) build --production</span>
            </div>
            <div className="text-emerald-400">✓ Prerendered 16/16 routes in 1.8s</div>
            <div className="text-slate-400">branch: main (Day-One Client GitHub Access)</div>
          </div>

          <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-between text-[11px]">
            <span className="text-slate-300">Staging URL:</span>
            <span className="text-[#FFB020] font-bold">sprint-04.hdm.staging 🔒</span>
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
            <span className="text-emerald-400 font-bold">● GRADE A+</span>
          </div>

          {/* 4 Score Badges */}
          <div className="grid grid-cols-4 gap-1.5 text-center">
            <div className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/30">
              <div className="text-emerald-400 font-black text-sm">99</div>
              <div className="text-[9px] text-slate-300">Speed</div>
            </div>
            <div className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/30">
              <div className="text-emerald-400 font-black text-sm">100</div>
              <div className="text-[9px] text-slate-300">Access.</div>
            </div>
            <div className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/30">
              <div className="text-emerald-400 font-black text-sm">100</div>
              <div className="text-[9px] text-slate-300">Best Prac.</div>
            </div>
            <div className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/30">
              <div className="text-emerald-400 font-black text-sm">100</div>
              <div className="text-[9px] text-slate-300">SEO</div>
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
            <span className="text-emerald-400 font-bold">● 100% LIVE</span>
          </div>

          <div className="space-y-1.5 text-left text-[11px]">
            <div className="p-2 rounded-lg bg-white/5 border border-white/10 flex items-center justify-between">
              <span className="text-slate-300">Global DNS Cutover:</span>
              <span className="text-emerald-400 font-bold">Zero Downtime (0.00s)</span>
            </div>
            <div className="p-2 rounded-lg bg-white/5 border border-white/10 flex items-center justify-between">
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
            <span className="text-emerald-400 font-bold">● ACTIVE CARE</span>
          </div>

          <div className="space-y-1.5 text-left text-[11px]">
            <div className="p-2 rounded-lg bg-white/5 border border-white/10 flex items-center justify-between">
              <span className="text-slate-300">Private Channel:</span>
              <span className="text-[#FFB020] font-bold">#hdm-client-direct</span>
            </div>
            <div className="p-2 rounded-lg bg-white/5 border border-white/10 flex items-center justify-between">
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

  // Smooth wheel scroll step advancement
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    let lastScrollTime = 0;
    const cooldownMs = 380;

    const onWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaY) < 18) return;

      const now = Date.now();
      if (now - lastScrollTime < cooldownMs) {
        if (
          (e.deltaY > 0 && activeStepIdx < totalPhases - 1) ||
          (e.deltaY < 0 && activeStepIdx > 0)
        ) {
          e.preventDefault();
        }
        return;
      }

      if (e.deltaY > 0) {
        if (activeStepIdx < totalPhases - 1) {
          e.preventDefault();
          lastScrollTime = now;
          setActiveStepIdx((prev) => prev + 1);
        }
      } else {
        if (activeStepIdx > 0) {
          e.preventDefault();
          lastScrollTime = now;
          setActiveStepIdx((prev) => prev - 1);
        }
      }
    };

    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, [activeStepIdx, totalPhases]);

  const activePhase = PHASES[activeStepIdx];

  return (
    <div
      ref={sectionRef}
      className="space-y-4 sm:space-y-5 max-w-6xl mx-auto select-none text-left"
    >
      {/* ==================================================================== */}
      {/* 1. INTERACTIVE 7-STATION SCRUBBER (CLICKABLE & CONNECTED)            */}
      {/* ==================================================================== */}
      <div className="flex flex-col items-center justify-center space-y-2.5">
        <div className="flex items-center justify-center gap-1 sm:gap-1.5 p-1.5 bg-white rounded-2xl border border-[#E2DBD0] shadow-sm max-w-full overflow-x-auto no-scrollbar">
          {PHASES.map((p, idx) => {
            const isSelected = idx === activeStepIdx;
            return (
              <button
                key={p.step}
                type="button"
                onClick={() => setActiveStepIdx(idx)}
                className={cn(
                  "px-2.5 sm:px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all duration-300 cursor-pointer whitespace-nowrap flex items-center gap-1.5",
                  isSelected
                    ? "bg-[#060B22] text-[#FFB020] shadow-md ring-1 ring-[#FFB020]/40 scale-102"
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

        {/* Phase Stepper Bar */}
        <div className="flex items-center justify-between w-full max-w-2xl px-2 text-xs font-mono text-slate-500">
          <button
            type="button"
            onClick={() => setActiveStepIdx((prev) => (prev > 0 ? prev - 1 : totalPhases - 1))}
            className="hover:text-[#060B22] p-1 transition-colors cursor-pointer flex items-center gap-1"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Prev Sprint</span>
          </button>

          <span className="font-bold text-[#060B22]">
            Sprint {activePhase.number} of 07 · {activePhase.title}
          </span>

          <button
            type="button"
            onClick={() => setActiveStepIdx((prev) => (prev + 1) % totalPhases)}
            className="hover:text-[#060B22] p-1 transition-colors cursor-pointer flex items-center gap-1"
          >
            <span className="hidden sm:inline">Next Sprint</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* ==================================================================== */}
      {/* 2. REALISTIC DIGITAL SPRINT COCKPIT (SMOOTH, ELEVATED & REAL)        */}
      {/* ==================================================================== */}
      <div className="rounded-3xl bg-gradient-to-br from-[#060B22] via-[#091538] to-[#060B22] border border-white/10 shadow-2xl p-6 sm:p-8 text-white relative overflow-hidden">
        {/* Ambient Warm Golden Backlight */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#FFB020]/15 rounded-full blur-[110px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center relative z-10">
          {/* ================================================================ */}
          {/* LEFT: SPRINT SPECIFICATION & VERIFIED DELIVERABLES (5 cols)      */}
          {/* ================================================================ */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-mono font-black uppercase tracking-wider text-[#060B22] bg-[#FFB020] px-2.5 py-0.5 rounded-full shadow-xs">
                Sprint {activePhase.number}
              </span>
              <span className="text-xs font-mono font-bold text-slate-300">
                Turnaround: {activePhase.duration}
              </span>
            </div>

            <h3 className="font-display font-black text-xl sm:text-2xl text-white tracking-tight leading-snug">
              {activePhase.headline}
            </h3>

            <p className="text-xs sm:text-[13px] text-slate-300 leading-relaxed font-normal">
              {activePhase.summary}
            </p>

            {/* Verified Deliverables List */}
            <div className="space-y-2 pt-2 border-t border-white/10 text-xs text-slate-200">
              <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#FFB020]">
                Verified Deliverables:
              </div>
              {activePhase.deliverables.map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span className="leading-snug">{item}</span>
                </div>
              ))}
            </div>

            {/* Direct Scope Action */}
            <div className="pt-2">
              <Link
                href="/get-a-quote"
                className="btn-luxury-gold btn-shimmer py-2.5 px-4 rounded-xl text-xs font-black uppercase tracking-wider inline-flex items-center gap-2 shadow-md cursor-pointer group"
              >
                <span>Schedule This Sprint</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* ================================================================ */}
          {/* RIGHT: AUTHENTIC REALISTIC SPRINT ARTIFACT CONSOLE (7 cols)      */}
          {/* ================================================================ */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-black/60 border border-white/15 shadow-xl overflow-hidden backdrop-blur-md">
              {/* macOS Header Bar */}
              <div className="h-8 bg-white/5 px-3 flex items-center justify-between border-b border-white/10">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
                </div>

                <div className="flex items-center gap-1.5 text-[10.5px] font-mono text-slate-300">
                  <Lock className="w-2.5 h-2.5 text-emerald-400 shrink-0" />
                  <span>hdm-agile-delivery.live / phase-{activePhase.number}</span>
                </div>

                <span className="text-[9px] font-mono font-bold text-emerald-400">
                  VERIFIED ARTIFACT
                </span>
              </div>

              {/* Realistic Dynamic Artifact Content */}
              <div className="p-4 sm:p-5 transition-all duration-300 ease-out">
                {activePhase.renderArtifact()}
              </div>
            </div>
          </div>
        </div>

        {/* Dynamic Scroll Advance Prompt */}
        <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-slate-400">
          <div className="flex items-center gap-2">
            <RotateCw className="w-3.5 h-3.5 text-[#FFB020]" />
            <span>Scroll mouse wheel over section to step through 7 sprints</span>
          </div>

          <div className="text-emerald-400 font-bold flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>{activePhase.slaMetric}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

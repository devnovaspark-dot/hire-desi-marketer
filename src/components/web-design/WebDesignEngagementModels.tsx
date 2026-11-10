"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Clock,
  Users,
  Briefcase,
  ShieldCheck,
  Zap,
  Activity,
  Calendar,
  Lock,
  GitBranch,
  Sliders,
  Check,
} from "lucide-react";
import { cn } from "@/lib/utils";

/* ========================================================================== */
/* 3D ISOMETRIC ICON COMPONENTS (PURE CSS + SVG LAYERS WITH 3D DEPTH)         */
/* ========================================================================== */

// 1. 3D Isometric Milestone Vault (Fixed-Cost)
function MilestoneVault3DIcon({ isActive }: { isActive: boolean }) {
  return (
    <div className="relative w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center">
      {/* Ambient Pulsing Glow behind 3D Icon */}
      <div
        className={cn(
          "absolute inset-0 rounded-full blur-xl transition-all duration-500",
          isActive ? "bg-[#FFB020]/35 scale-110" : "bg-white/10 scale-90"
        )}
      />

      <svg
        viewBox="0 0 100 100"
        className={cn(
          "w-full h-full transition-transform duration-500 ease-out drop-shadow-xl",
          isActive ? "scale-105 -translate-y-1" : "opacity-80 hover:scale-100"
        )}
      >
        <defs>
          <linearGradient id="vaultTop" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFE082" />
            <stop offset="100%" stopColor="#FFB020" />
          </linearGradient>
          <linearGradient id="vaultLeft" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#D98200" />
            <stop offset="100%" stopColor="#8C4E00" />
          </linearGradient>
          <linearGradient id="vaultRight" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFB020" />
            <stop offset="100%" stopColor="#B36B00" />
          </linearGradient>
          <filter id="goldGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Floating 3D Base Shadow */}
        <ellipse cx="50" cy="85" rx="32" ry="12" fill="rgba(6,11,34,0.35)" />

        {/* 3D Isometric Cube / Vault */}
        {/* Top Face */}
        <polygon points="50,18 82,34 50,50 18,34" fill="url(#vaultTop)" />
        {/* Left Face */}
        <polygon points="18,34 50,50 50,82 18,66" fill="url(#vaultLeft)" />
        {/* Right Face */}
        <polygon points="50,50 82,34 82,66 50,82" fill="url(#vaultRight)" />

        {/* Inner Engraved Shield Line on Right Face */}
        <line x1="50" y1="50" x2="50" y2="82" stroke="#FFE082" strokeWidth="1.5" strokeOpacity="0.6" />

        {/* Glowing Milestone Core Symbol (Center) */}
        <circle cx="50" cy="34" r="5" fill="#FFFFFF" filter="url(#goldGlow)" />
        <circle cx="50" cy="34" r="2.5" fill="#060B22" />

        {/* Floating Orbital Milestone Ring */}
        <ellipse
          cx="50"
          cy="48"
          rx="38"
          ry="15"
          fill="none"
          stroke="#FFB020"
          strokeWidth="1.5"
          strokeDasharray="4 3"
          className={cn("transition-all", isActive ? "animate-spin-slow opacity-90" : "opacity-40")}
          style={{ transformOrigin: "50px 48px" }}
        />
      </svg>
    </div>
  );
}

// 2. 3D Isometric Dedicated Squad Pod (Monthly Dedicated Squad)
function DedicatedSquad3DIcon({ isActive }: { isActive: boolean }) {
  return (
    <div className="relative w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center">
      <div
        className={cn(
          "absolute inset-0 rounded-full blur-xl transition-all duration-500",
          isActive ? "bg-cyan-400/30 scale-110" : "bg-white/10 scale-90"
        )}
      />

      <svg
        viewBox="0 0 100 100"
        className={cn(
          "w-full h-full transition-transform duration-500 ease-out drop-shadow-xl",
          isActive ? "scale-105 -translate-y-1" : "opacity-80 hover:scale-100"
        )}
      >
        <defs>
          <linearGradient id="podTop" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#7DD3FC" />
            <stop offset="100%" stopColor="#0284C7" />
          </linearGradient>
          <linearGradient id="podLeft" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#0369A1" />
            <stop offset="100%" stopColor="#0C4A6E" />
          </linearGradient>
          <linearGradient id="podRight" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#38BDF8" />
            <stop offset="100%" stopColor="#0284C7" />
          </linearGradient>
        </defs>

        {/* Base Shadow */}
        <ellipse cx="50" cy="85" rx="34" ry="12" fill="rgba(6,11,34,0.35)" />

        {/* 3D Isometric Tower Base */}
        <polygon points="50,26 80,40 50,54 20,40" fill="url(#podTop)" />
        <polygon points="20,40 50,54 50,82 20,68" fill="url(#podLeft)" />
        <polygon points="50,54 80,40 80,68 50,82" fill="url(#podRight)" />

        {/* Floating Engineer Avatar Orbs */}
        {/* Left Orb (Principal Dev) */}
        <circle cx="32" cy="28" r="8" fill="#0284C7" stroke="#BAE6FD" strokeWidth="2" />
        <circle cx="32" cy="28" r="4" fill="#38BDF8" />

        {/* Right Orb (Lead UI/UX) */}
        <circle cx="68" cy="28" r="8" fill="#FFB020" stroke="#FEF08A" strokeWidth="2" />
        <circle cx="68" cy="28" r="4" fill="#FDE047" />

        {/* Connecting Data Beam */}
        <path
          d="M 32 28 Q 50 16 68 28"
          fill="none"
          stroke="#38BDF8"
          strokeWidth="2"
          strokeDasharray="2 2"
          className={cn(isActive ? "animate-pulse" : "")}
        />

        {/* Floating Active Pulse Beacon */}
        <circle cx="50" cy="20" r="3" fill="#34D399" className="animate-ping" />
        <circle cx="50" cy="20" r="3" fill="#34D399" />
      </svg>
    </div>
  );
}

// 3. 3D Isometric Chrono Turbine (Hourly Retainer)
function ChronoTurbine3DIcon({ isActive }: { isActive: boolean }) {
  return (
    <div className="relative w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center">
      <div
        className={cn(
          "absolute inset-0 rounded-full blur-xl transition-all duration-500",
          isActive ? "bg-emerald-400/30 scale-110" : "bg-white/10 scale-90"
        )}
      />

      <svg
        viewBox="0 0 100 100"
        className={cn(
          "w-full h-full transition-transform duration-500 ease-out drop-shadow-xl",
          isActive ? "scale-105 -translate-y-1" : "opacity-80 hover:scale-100"
        )}
      >
        <defs>
          <linearGradient id="turbineTop" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#86EFAC" />
            <stop offset="100%" stopColor="#10B981" />
          </linearGradient>
          <linearGradient id="turbineLeft" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#047857" />
            <stop offset="100%" stopColor="#064E3B" />
          </linearGradient>
          <linearGradient id="turbineRight" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#34D399" />
            <stop offset="100%" stopColor="#059669" />
          </linearGradient>
        </defs>

        {/* Shadow */}
        <ellipse cx="50" cy="85" rx="32" ry="12" fill="rgba(6,11,34,0.35)" />

        {/* 3D Isometric Cylinder / Rotor */}
        <polygon points="50,22 82,36 50,50 18,36" fill="url(#turbineTop)" />
        <polygon points="18,36 50,50 50,78 18,64" fill="url(#turbineLeft)" />
        <polygon points="50,50 82,36 82,64 50,78" fill="url(#turbineRight)" />

        {/* Isometric Clock Hands / Dial */}
        <line x1="50" y1="36" x2="66" y2="30" stroke="#064E3B" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="50" y1="36" x2="42" y2="24" stroke="#064E3B" strokeWidth="2" strokeLinecap="round" />
        <circle cx="50" cy="36" r="3" fill="#FFFFFF" />

        {/* Rotating Speed Velocity Ring */}
        <circle
          cx="50"
          cy="36"
          r="24"
          fill="none"
          stroke="#34D399"
          strokeWidth="1.5"
          strokeDasharray="6 4"
          className={cn("transition-all", isActive ? "animate-spin-slow opacity-90" : "opacity-40")}
          style={{ transformOrigin: "50px 36px" }}
        />
      </svg>
    </div>
  );
}

/* ========================================================================== */
/* ENGAGEMENT MODEL CONFIGURATION DATA                                        */
/* ========================================================================== */

interface ScopePreset {
  id: string;
  name: string;
  timeline: string;
  squadMakeup: string;
  cadence: string;
  deliverables: string[];
}

interface EngagementModelItem {
  id: string;
  name: string;
  badge: string;
  kicker: string;
  tagline: string;
  render3DIcon: (isActive: boolean) => React.ReactNode;
  accentColor: string;
  metricBadge: string;
  scopePresets: ScopePreset[];
  ctaText: string;
}

const MODELS: EngagementModelItem[] = [
  {
    id: "fixed-cost",
    name: "Fixed-Cost Project",
    badge: "Scope & Timeline Certainty",
    kicker: "Milestone-Based Delivery",
    tagline:
      "Defined scope, fixed milestones, guaranteed launch date, and zero surprise costs. Best for complete builds with clear deliverables.",
    render3DIcon: (isActive) => <MilestoneVault3DIcon isActive={isActive} />,
    accentColor: "#FFB020",
    metricBadge: "100% Milestone Predictability",
    ctaText: "Discuss Fixed-Cost Scope",
    scopePresets: [
      {
        id: "custom-site",
        name: "Custom Website Build",
        timeline: "3–4 Weeks",
        squadMakeup: "Lead UI/UX Designer + Senior Full-Stack Engineer + QA Lead",
        cadence: "Bi-weekly milestone demonstrations and staging releases",
        deliverables: [
          "Bespoke Figma design system & interactive prototypes",
          "Next.js 16 / React 19 pixel-perfect frontend coding",
          "Core Web Vitals speed optimization (< 0.8s LCP benchmark)",
          "Complete SEO foundation with 301 redirect protection",
          "30-day post-launch warranty & staff training",
        ],
      },
      {
        id: "redesign",
        name: "Enterprise Modernization",
        timeline: "4–6 Weeks",
        squadMakeup: "Brand Architect + 2 Full-Stack Engineers + SEO Specialist",
        cadence: "Weekly sprint demos, staging access, and Loom video updates",
        deliverables: [
          "Complete UI/UX audit & user conversion friction analysis",
          "Modern brand aesthetic revamp with responsive token system",
          "Zero SEO ranking loss guarantee with 1:1 URL redirect map",
          "Headless CMS integration (Sanity, WordPress, or Shopify)",
          "Bi-weekly stakeholder walkthroughs & handover training",
        ],
      },
      {
        id: "ecommerce",
        name: "Headless E-Commerce Store",
        timeline: "5–7 Weeks",
        squadMakeup: "E-Com Architect + Full-Stack Engineer + Payment Integrator",
        cadence: "Continuous staging deploys with bi-weekly milestone sign-offs",
        deliverables: [
          "Custom Shopify Plus or WooCommerce headless storefront",
          "Frictionless 1-tap checkout & multi-currency payment setup",
          "Inventory, ERP, and CRM automated data pipeline sync",
          "Server-side Meta CAPI & Google Ads conversion tracking",
          "Speed tuning for high-volume Black Friday traffic resilience",
        ],
      },
    ],
  },
  {
    id: "monthly-dedicated",
    name: "Monthly Dedicated Squad",
    badge: "Continuous Velocity",
    kicker: "Dedicated Full-Time Engineers",
    tagline:
      "Dedicated senior web developers working exclusively on your product roadmap. Full-time focus with zero administrative overhead.",
    render3DIcon: (isActive) => <DedicatedSquad3DIcon isActive={isActive} />,
    accentColor: "#38BDF8",
    metricBadge: "160 Hours / Month per Engineer",
    ctaText: "Hire Dedicated Web Developers",
    scopePresets: [
      {
        id: "single-dev",
        name: "1 Senior Full-Stack Dev",
        timeline: "Monthly Retainer",
        squadMakeup: "1 Dedicated Senior React / Next.js Engineer (160h/mo)",
        cadence: "Daily async Slack/Teams updates, daily Git commits, weekly 1:1 review",
        deliverables: [
          "160 hours/month of dedicated senior engineering",
          "Direct collaboration in your private Slack/Discord & GitLab",
          "Rapid feature development, API integrations & bug fixes",
          "Daily pull requests committed directly to your repository",
          "Timezone-aligned overlap with daily standup availability",
        ],
      },
      {
        id: "pod-squad",
        name: "Dev + UI/UX Designer Pod",
        timeline: "Monthly Retainer",
        squadMakeup: "1 Senior Full-Stack Dev + 1 Senior UI/UX Product Designer",
        cadence: "Continuous sprint backlog execution with weekly milestone demos",
        deliverables: [
          "Simultaneous design iterations and production engineering",
          "Design system token creation and maintenance in Figma",
          "Continuous A/B test layout variations & landing page launches",
          "Speed monitoring and Core Web Vitals maintenance",
          "Complete flexibility to adjust priority tasks every sprint",
        ],
      },
      {
        id: "full-pod",
        name: "Full Product Squad (3+)",
        timeline: "Monthly Retainer",
        squadMakeup: "2 Senior Full-Stack Engineers + 1 UI/UX Designer + 1 QA Lead",
        cadence: "Daily CI/CD deployments and bi-weekly sprint velocity demos",
        deliverables: [
          "Enterprise scale engineering capacity for fast-moving platforms",
          "Full end-to-end coverage: research, UI/UX, dev, testing, and ops",
          "Complex database architectures, API gateways, and microservices",
          "Automated regression testing & security penetration audits",
          "Zero long-term lock-in: adjust or pause squad size with 30-day notice",
        ],
      },
    ],
  },
  {
    id: "hourly",
    name: "Flexible Hourly Retainer",
    badge: "On-Demand Agility",
    kicker: "Pay-As-You-Go Enhancements",
    tagline:
      "On-demand development support for rapid iterations, speed tuning, emergency bug fixes, and third-party integrations with zero monthly lock-in.",
    render3DIcon: (isActive) => <ChronoTurbine3DIcon isActive={isActive} />,
    accentColor: "#34D399",
    metricBadge: "< 24h Turnaround SLA",
    ctaText: "Request On-Demand Dev Support",
    scopePresets: [
      {
        id: "speed-tuning",
        name: "Speed & Vitals Tuning",
        timeline: "1–3 Days",
        squadMakeup: "Core Web Vitals & Frontend Performance Specialist",
        cadence: "Immediate ticket dispatch with before/after audit reports",
        deliverables: [
          "Elimination of render-blocking JavaScript & unused CSS",
          "Automated AVIF/WebP image compression pipeline setup",
          "LCP benchmark tuning to < 0.8s on mobile & desktop",
          "Lighthouse score lift to 90–100/100 verified on Google PageSpeed",
          "Detailed technical remediation summary report",
        ],
      },
      {
        id: "cro-landers",
        name: "CRO & Campaign Landers",
        timeline: "2–4 Days",
        squadMakeup: "Conversion Rate Optimization Designer + Frontend Dev",
        cadence: "Rapid sprint turnarounds tied to your active ad campaign launches",
        deliverables: [
          "High-converting landing page coding from Figma or brief",
          "Integration with Google Ads, Meta CAPI & marketing CRMs",
          "Interactive multi-step form qualification funnels",
          "A/B test variant setup on Vercel, Optimizely, or Google Optimize",
          "Mobile-first responsive optimization across all viewports",
        ],
      },
      {
        id: "emergency-sla",
        name: "Emergency SLA & Bug Fixes",
        timeline: "Same-Day / 24h",
        squadMakeup: "On-Call Senior Full-Stack Trouble-Shooter",
        cadence: "Priority triage within 2–4 hours of ticket submission",
        deliverables: [
          "Immediate resolution of broken layouts, form failures, or SSL errors",
          "E-commerce checkout bug patches and payment gateway fixes",
          "Server configuration, DNS recovery, and CDN cache purges",
          "Itemized work log with transparent hour tracking",
          "Zero ongoing retainer minimums or monthly commitments",
        ],
      },
    ],
  },
];

export function WebDesignEngagementModels() {
  const [activeModelId, setActiveModelId] = useState<string>("fixed-cost");
  const [activePresetIdx, setActivePresetIdx] = useState<number>(0);

  const activeModel =
    MODELS.find((m) => m.id === activeModelId) || MODELS[0];

  const currentPreset =
    activeModel.scopePresets[activePresetIdx] || activeModel.scopePresets[0];

  const handleSelectModel = (id: string) => {
    setActiveModelId(id);
    setActivePresetIdx(0); // Reset preset index when switching models
  };

  return (
    <div className="space-y-8 sm:space-y-10 max-w-7xl mx-auto text-left select-none">
      {/* ============================================================== */}
      {/* 1. TOP INTERACTIVE 3D MODEL CARDS (3D PERSPECTIVE SELECTOR)    */}
      {/* ============================================================== */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
        {MODELS.map((model) => {
          const isSelected = model.id === activeModelId;

          return (
            <div
              key={model.id}
              onClick={() => handleSelectModel(model.id)}
              className={cn(
                "group relative p-5 sm:p-6 rounded-3xl transition-all duration-300 cursor-pointer border flex flex-col justify-between overflow-hidden",
                isSelected
                  ? "bg-[#060B22] text-white border-2 border-[#FFB020] shadow-[0_15px_40px_rgba(6,11,34,0.3)] ring-2 ring-[#FFB020]/30 -translate-y-1.5"
                  : "bg-white text-[#0B1B3A] border-[#E2DBD0] hover:border-[#FFB020]/60 hover:shadow-md hover:-translate-y-0.5"
              )}
            >
              {/* Subtle Ambient Hover Glow */}
              <div
                className={cn(
                  "absolute -top-10 -right-10 w-32 h-32 rounded-full blur-2xl transition-opacity duration-500 pointer-events-none",
                  isSelected ? "opacity-30 bg-[#FFB020]" : "opacity-0 group-hover:opacity-15 bg-[#FFB020]"
                )}
              />

              <div className="space-y-4">
                {/* 3D Icon & Top Badge */}
                <div className="flex items-start justify-between gap-3">
                  {model.render3DIcon(isSelected)}

                  <span
                    className={cn(
                      "text-[10px] font-mono font-bold px-2.5 py-1 rounded-full border transition-colors shrink-0",
                      isSelected
                        ? "bg-[#FFB020]/20 text-[#FFB020] border-[#FFB020]/40"
                        : "bg-[#FAF8F5] text-slate-500 border-[#E2DBD0]"
                    )}
                  >
                    {model.badge}
                  </span>
                </div>

                {/* Title & Tagline */}
                <div>
                  <div
                    className={cn(
                      "text-[11px] font-mono font-bold uppercase tracking-wider transition-colors",
                      isSelected ? "text-[#FFB020]" : "text-[#B87A00]"
                    )}
                  >
                    {model.kicker}
                  </div>
                  <h3
                    className={cn(
                      "font-display font-black text-xl sm:text-2xl mt-0.5 tracking-tight transition-colors",
                      isSelected ? "text-white" : "text-[#0B1B3A]"
                    )}
                  >
                    {model.name}
                  </h3>
                </div>

                <p
                  className={cn(
                    "text-xs leading-relaxed transition-colors",
                    isSelected ? "text-slate-300" : "text-slate-600"
                  )}
                >
                  {model.tagline}
                </p>
              </div>

              {/* Card Footer: Live Indicator */}
              <div
                className={cn(
                  "mt-5 pt-3 border-t flex items-center justify-between text-xs transition-colors",
                  isSelected ? "border-white/10 text-slate-300" : "border-slate-100 text-slate-500"
                )}
              >
                <span className="font-semibold flex items-center gap-1.5">
                  <span
                    className={cn(
                      "w-2 h-2 rounded-full",
                      isSelected ? "bg-emerald-400 animate-pulse" : "bg-slate-300"
                    )}
                  />
                  <span>{model.metricBadge}</span>
                </span>
                <span
                  className={cn(
                    "font-bold text-[11px] transition-transform group-hover:translate-x-1",
                    isSelected ? "text-[#FFB020]" : "text-[#0B1B3A]"
                  )}
                >
                  {isSelected ? "Active Studio ✓" : "Configure →"}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* ============================================================== */}
      {/* 2. DYNAMIC WORKFLOW & DELIVERABLES STUDIO (ZERO PRICING)       */}
      {/* ============================================================== */}
      <div className="rounded-3xl bg-white border border-[#E2DBD0] shadow-xl overflow-hidden">
        {/* Preset Selector Bar */}
        <div className="bg-[#FAF8F5] border-b border-[#E2DBD0] px-5 sm:px-8 py-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <Sliders className="w-4 h-4 text-[#B87A00]" />
            <span className="text-xs font-mono font-bold text-[#0B1B3A] uppercase tracking-wider">
              {activeModel.name} Configuration Scopes:
            </span>
          </div>

          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar">
            {activeModel.scopePresets.map((preset, idx) => {
              const isPresetActive = idx === activePresetIdx;
              return (
                <button
                  key={preset.id}
                  type="button"
                  onClick={() => setActivePresetIdx(idx)}
                  className={cn(
                    "px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap border",
                    isPresetActive
                      ? "bg-[#060B22] text-[#FFB020] border-[#FFB020] shadow-xs"
                      : "bg-white text-slate-600 border-[#E2DBD0] hover:border-slate-400"
                  )}
                >
                  <span>{preset.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 2-Column Interactive Canvas */}
        <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
          {/* ========================================================== */}
          {/* LEFT COLUMN: Scope Architecture & Cadence (6 cols)         */}
          {/* ========================================================== */}
          <div className="lg:col-span-6 p-6 sm:p-8 lg:p-9 flex flex-col justify-between space-y-6 border-b lg:border-b-0 lg:border-r border-[#E2DBD0]">
            <div className="space-y-4">
              <div className="flex items-center justify-between gap-2">
                <span className="text-[10.5px] font-mono font-black uppercase tracking-wider text-[#B87A00] bg-[#FFB020]/15 px-3 py-0.5 rounded-full border border-[#FFB020]/30">
                  {currentPreset.name}
                </span>

                <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-slate-600 bg-[#FAF8F5] px-2.5 py-0.5 rounded-full border border-[#E2DBD0]">
                  <Calendar className="w-3.5 h-3.5 text-[#B87A00]" />
                  <span>Timeline: {currentPreset.timeline}</span>
                </div>
              </div>

              <div>
                <h4 className="font-display font-black text-2xl sm:text-3xl text-[#0B1B3A] tracking-tight leading-snug">
                  Tailored For: {currentPreset.name}
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                  Transparent collaboration structure managed by salaried full-time senior engineers. Zero junior handoffs.
                </p>
              </div>

              {/* Delivery Specs Table */}
              <div className="space-y-2 pt-2 border-t border-slate-100 text-xs">
                <div className="p-3 rounded-2xl bg-[#FAF8F5] border border-[#E2DBD0]/60 space-y-0.5">
                  <div className="text-[10px] font-mono uppercase tracking-wider text-slate-500 font-bold">
                    Dedicated Squad Composition
                  </div>
                  <div className="font-bold text-[#0B1B3A] text-xs sm:text-[13px]">
                    {currentPreset.squadMakeup}
                  </div>
                </div>

                <div className="p-3 rounded-2xl bg-[#FAF8F5] border border-[#E2DBD0]/60 space-y-0.5">
                  <div className="text-[10px] font-mono uppercase tracking-wider text-slate-500 font-bold">
                    Delivery Cadence &amp; Demonstrations
                  </div>
                  <div className="font-semibold text-slate-700 text-xs sm:text-[13px]">
                    {currentPreset.cadence}
                  </div>
                </div>
              </div>

              {/* Assurance Badges */}
              <div className="grid grid-cols-2 gap-2 pt-1 text-xs">
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-[#E2DBD0] text-slate-700">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span className="text-[11.5px] font-medium">100% Code &amp; IP Ownership</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-[#E2DBD0] text-slate-700">
                  <Lock className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span className="text-[11.5px] font-medium">Bilateral NDA Protection</span>
                </div>
              </div>
            </div>

            {/* Direct Action */}
            <div className="pt-4 border-t border-slate-100">
              <Link
                href="/get-a-quote"
                className="btn-luxury-navy w-full py-3.5 px-5 rounded-xl text-xs font-black uppercase tracking-wider flex items-center justify-center gap-2 shadow-sm cursor-pointer text-center group"
              >
                <span>{activeModel.ctaText}</span>
                <ArrowRight className="w-4 h-4 text-[#FFB020] group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* ========================================================== */}
          {/* RIGHT COLUMN: Holographic Scope Artifacts & Roadmap (6 cols)*/}
          {/* ========================================================== */}
          <div className="lg:col-span-6 p-6 sm:p-8 lg:p-9 bg-gradient-to-br from-[#060B22] to-[#0A163B] text-white flex flex-col justify-between space-y-6 relative overflow-hidden">
            {/* Ambient Lighting */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#FFB020]/15 rounded-full blur-[100px] pointer-events-none" />

            {/* Telemetry Header */}
            <div className="flex items-center justify-between pb-3 border-b border-white/10 relative z-10">
              <div className="flex items-center gap-2 text-xs font-mono text-slate-300">
                <Activity className="w-4 h-4 text-[#FFB020]" />
                <span className="font-bold uppercase tracking-wider">
                  Scope Deliverables &amp; Artifacts
                </span>
              </div>

              <span className="font-mono text-[10px] text-emerald-400 font-bold bg-emerald-500/20 px-2.5 py-0.5 rounded-full border border-emerald-500/30">
                VERIFIED STANDARD
              </span>
            </div>

            {/* Deliverables Checklist with Animated Cards */}
            <div className="space-y-2.5 relative z-10 my-auto">
              {currentPreset.deliverables.map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 p-3.5 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-[#FFB020]/40 hover:bg-white/[0.07] transition-all duration-200"
                >
                  <div className="w-5 h-5 rounded-full bg-[#FFB020]/20 border border-[#FFB020]/40 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-[#FFB020]" />
                  </div>
                  <span className="font-medium text-xs sm:text-[13px] text-slate-200 leading-snug">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* Bottom 4-Phase Delivery Matrix Strip */}
            <div className="pt-3 border-t border-white/10 relative z-10 space-y-2">
              <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">
                End-To-End Delivery Guarantee:
              </div>
              <div className="grid grid-cols-4 gap-2 text-center text-[10.5px]">
                <div className="p-2 rounded-xl bg-white/5 border border-white/10">
                  <div className="font-mono text-[#FFB020] font-bold">01 Scoping</div>
                  <div className="text-slate-400 text-[9.5px]">Fixed Roadmap</div>
                </div>
                <div className="p-2 rounded-xl bg-white/5 border border-white/10">
                  <div className="font-mono text-cyan-400 font-bold">02 Sprints</div>
                  <div className="text-slate-400 text-[9.5px]">Daily Demos</div>
                </div>
                <div className="p-2 rounded-xl bg-white/5 border border-white/10">
                  <div className="font-mono text-emerald-400 font-bold">03 QA Gate</div>
                  <div className="text-slate-400 text-[9.5px]">100/100 Vitals</div>
                </div>
                <div className="p-2 rounded-xl bg-white/5 border border-white/10">
                  <div className="font-mono text-[#FFB020] font-bold">04 Handover</div>
                  <div className="text-slate-400 text-[9.5px]">100% Your IP</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

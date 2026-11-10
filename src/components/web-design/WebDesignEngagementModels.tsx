"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Clock,
  Users,
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
    <div className="relative w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center">
      <div
        className={cn(
          "absolute inset-0 rounded-full blur-xl transition-all duration-500",
          isActive ? "bg-[#FFB020]/35 scale-110" : "bg-[#FFB020]/15 scale-90"
        )}
      />

      <svg
        viewBox="0 0 100 100"
        className={cn(
          "w-full h-full transition-transform duration-500 ease-out drop-shadow-xl",
          isActive ? "scale-105 -translate-y-0.5" : "opacity-85 hover:scale-100"
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

        <ellipse cx="50" cy="85" rx="32" ry="12" fill="rgba(6,11,34,0.3)" />

        {/* 3D Isometric Cube / Vault */}
        <polygon points="50,18 82,34 50,50 18,34" fill="url(#vaultTop)" />
        <polygon points="18,34 50,50 50,82 18,66" fill="url(#vaultLeft)" />
        <polygon points="50,50 82,34 82,66 50,82" fill="url(#vaultRight)" />
        <line x1="50" y1="50" x2="50" y2="82" stroke="#FFE082" strokeWidth="1.5" strokeOpacity="0.6" />

        <circle cx="50" cy="34" r="5" fill="#FFFFFF" filter="url(#goldGlow)" />
        <circle cx="50" cy="34" r="2.5" fill="#060B22" />

        <ellipse
          cx="50"
          cy="48"
          rx="36"
          ry="14"
          fill="none"
          stroke="#FFB020"
          strokeWidth="1.5"
          strokeDasharray="4 3"
          className="animate-spin-slow opacity-75"
          style={{ transformOrigin: "50px 48px" }}
        />
      </svg>
    </div>
  );
}

// 2. 3D Isometric Dev Pod Tower (Monthly Dedicated)
function DedicatedSquad3DIcon({ isActive }: { isActive: boolean }) {
  return (
    <div className="relative w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center">
      <div
        className={cn(
          "absolute inset-0 rounded-full blur-xl transition-all duration-500",
          isActive ? "bg-cyan-500/35 scale-110" : "bg-cyan-500/15 scale-90"
        )}
      />

      <svg
        viewBox="0 0 100 100"
        className={cn(
          "w-full h-full transition-transform duration-500 ease-out drop-shadow-xl",
          isActive ? "scale-105 -translate-y-0.5" : "opacity-85 hover:scale-100"
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

        <ellipse cx="50" cy="85" rx="32" ry="12" fill="rgba(6,11,34,0.3)" />

        {/* Tier 1 (Base Cube) */}
        <polygon points="50,38 80,52 50,66 20,52" fill="url(#podTop)" />
        <polygon points="20,52 50,66 50,86 20,72" fill="url(#podLeft)" />
        <polygon points="50,66 80,52 80,72 50,86" fill="url(#podRight)" />

        {/* Tier 2 (Upper Floating Core) */}
        <polygon points="50,14 74,26 50,38 26,26" fill="#BAE6FD" />
        <polygon points="26,26 50,38 50,54 26,42" fill="#0284C7" />
        <polygon points="50,38 74,26 74,42 50,54" fill="#38BDF8" />

        {/* Git Branch Terminal Icon */}
        <circle cx="50" cy="26" r="3.5" fill="#060B22" />
        <line x1="50" y1="26" x2="62" y2="20" stroke="#060B22" strokeWidth="1.5" />
        <circle cx="62" cy="20" r="2.5" fill="#060B22" />

        {/* Orbit Signal Nodes */}
        <ellipse
          cx="50"
          cy="48"
          rx="38"
          ry="15"
          fill="none"
          stroke="#38BDF8"
          strokeWidth="1.5"
          strokeDasharray="5 3"
          className="animate-spin-slow opacity-80"
          style={{ transformOrigin: "50px 48px" }}
        />
      </svg>
    </div>
  );
}

// 3. 3D Isometric Chrono-Turbine (Hourly On-Demand)
function ChronoTurbine3DIcon({ isActive }: { isActive: boolean }) {
  return (
    <div className="relative w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center">
      <div
        className={cn(
          "absolute inset-0 rounded-full blur-xl transition-all duration-500",
          isActive ? "bg-emerald-500/35 scale-110" : "bg-emerald-500/15 scale-90"
        )}
      />

      <svg
        viewBox="0 0 100 100"
        className={cn(
          "w-full h-full transition-transform duration-500 ease-out drop-shadow-xl",
          isActive ? "scale-105 -translate-y-0.5" : "opacity-85 hover:scale-100"
        )}
      >
        <defs>
          <linearGradient id="turbineTop" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#6EE7B7" />
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

        <ellipse cx="50" cy="85" rx="32" ry="12" fill="rgba(6,11,34,0.3)" />

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
          className="animate-spin-slow opacity-80"
          style={{ transformOrigin: "50px 36px" }}
        />
      </svg>
    </div>
  );
}

interface CollaborationModel {
  id: string;
  name: string;
  badge: string;
  isPopular?: boolean;
  kicker: string;
  tagline: string;
  renderIcon: (isActive: boolean) => React.ReactNode;
  deliverables: string[];
  squadMakeup: string;
  sla: string;
  ctaText: string;
}

const COLLAB_MODELS: CollaborationModel[] = [
  {
    id: "fixed-cost",
    name: "Fixed-Cost Project",
    badge: "Fixed Scope & Timeline",
    kicker: "Milestone-Based Delivery",
    tagline: "Defined scope, fixed milestones, guaranteed launch date, and zero surprise platform fees.",
    renderIcon: (isActive) => <MilestoneVault3DIcon isActive={isActive} />,
    deliverables: [
      "Bespoke Figma prototype & interactive design system",
      "Next.js 16 / React 19 pixel-perfect engineering",
      "Core Web Vitals speed tuning (< 0.8s LCP benchmark)",
      "30-day post-launch warranty & 301 SEO protection",
    ],
    squadMakeup: "Lead UI Designer + Senior Full-Stack Dev + QA Lead",
    sla: "100% Guaranteed Launch Date",
    ctaText: "Discuss Fixed-Cost Scope",
  },
  {
    id: "monthly-dedicated",
    name: "Monthly Dedicated Squad",
    badge: "Continuous Velocity",
    isPopular: true,
    kicker: "Full-Time Senior Engineers",
    tagline: "Dedicated senior developers working exclusively on your product roadmap with zero overhead.",
    renderIcon: (isActive) => <DedicatedSquad3DIcon isActive={isActive} />,
    deliverables: [
      "160 hours/month dedicated engineering per developer",
      "Direct client repository commit access (GitHub/GitLab)",
      "Daily standups in your private Slack/Discord channel",
      "Rapid feature development, API hooks & weekly demos",
    ],
    squadMakeup: "Senior React / Next.js Developer (160h/mo)",
    sla: "Timezone-Aligned Business Overlap",
    ctaText: "Hire Dedicated Developers",
  },
  {
    id: "hourly",
    name: "Hourly On-Demand Support",
    badge: "Pay-As-You-Need",
    kicker: "Flexible Technical Agility",
    tagline: "On-demand design and development support for feature sprints, speed tuning, and ad-hoc upgrades.",
    renderIcon: (isActive) => <ChronoTurbine3DIcon isActive={isActive} />,
    deliverables: [
      "Pay strictly for verified engineering hours worked",
      "Core Web Vitals remediation & speed optimization",
      "Zero long-term retainers or minimum commitments",
      "Detailed timesheet tracking & transparent commits",
    ],
    squadMakeup: "On-Demand Senior Full-Stack Specialists",
    sla: "< 24h Scoping & Kickoff",
    ctaText: "Book On-Demand Dev Hours",
  },
];

export function WebDesignEngagementModels() {
  const [hoveredModelId, setHoveredModelId] = useState<string>("monthly-dedicated");

  return (
    <div className="w-full max-w-7xl mx-auto select-none text-left">
      {/* ==================================================================== */}
      {/* 3 UNIFIED COLLABORATION FRAMEWORK CARDS (SINGLE-WINDOW VIEWPORT FIT) */}
      {/* ==================================================================== */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-5 items-stretch">
        {COLLAB_MODELS.map((model) => {
          const isSelected = model.id === hoveredModelId;

          return (
            <div
              key={model.id}
              onMouseEnter={() => setHoveredModelId(model.id)}
              className={cn(
                "rounded-3xl p-5 sm:p-6 transition-all duration-300 flex flex-col justify-between relative overflow-hidden group border",
                model.isPopular
                  ? isSelected
                    ? "bg-gradient-to-b from-[#060B22] via-[#091538] to-[#060B22] text-white border-[#FFB020] shadow-xl ring-2 ring-[#FFB020]/30 lg:-translate-y-1.5"
                    : "bg-[#060B22] text-white border-[#FFB020]/60 shadow-lg lg:-translate-y-1"
                  : isSelected
                  ? "bg-white text-slate-800 border-[#FFB020] shadow-xl ring-2 ring-[#FFB020]/25 lg:-translate-y-1"
                  : "bg-white text-slate-700 border-[#E2DBD0] hover:border-slate-400 hover:shadow-md"
              )}
            >
              {/* Popular Model Top Badge */}
              {model.isPopular && (
                <div className="absolute top-0 right-0">
                  <div className="bg-[#FFB020] text-[#060B22] text-[10px] font-mono font-black uppercase tracking-wider py-1 px-4 rounded-bl-xl shadow-xs">
                    ★ Most Selected
                  </div>
                </div>
              )}

              <div className="space-y-4">
                {/* Header: 3D Isometric Icon & Badge */}
                <div className="flex items-center justify-between gap-3">
                  <div className="shrink-0">{model.renderIcon(isSelected)}</div>

                  <span
                    className={cn(
                      "text-[10px] font-mono font-bold px-2.5 py-1 rounded-full border",
                      model.isPopular
                        ? "bg-[#FFB020]/20 text-[#FFB020] border-[#FFB020]/40"
                        : "bg-[#FAF8F5] text-slate-600 border-[#E2DBD0]"
                    )}
                  >
                    {model.badge}
                  </span>
                </div>

                {/* Model Title & Tagline */}
                <div>
                  <div
                    className={cn(
                      "text-[10.5px] font-mono font-bold uppercase tracking-wider",
                      model.isPopular ? "text-[#FFB020]" : "text-[#B87A00]"
                    )}
                  >
                    {model.kicker}
                  </div>
                  <h3
                    className={cn(
                      "font-display font-black text-lg sm:text-xl tracking-tight mt-0.5",
                      model.isPopular ? "text-white" : "text-[#0B1B3A]"
                    )}
                  >
                    {model.name}
                  </h3>
                  <p
                    className={cn(
                      "text-xs leading-relaxed mt-1 font-normal line-clamp-2",
                      model.isPopular ? "text-slate-300" : "text-slate-600"
                    )}
                  >
                    {model.tagline}
                  </p>
                </div>

                {/* 4 Concrete Deliverables */}
                <div className="space-y-2 pt-2 border-t border-slate-100/15">
                  <div
                    className={cn(
                      "text-[10px] font-mono font-bold uppercase tracking-wider",
                      model.isPopular ? "text-slate-400" : "text-slate-500"
                    )}
                  >
                    Verified Deliverables:
                  </div>

                  <div className="space-y-1.5 text-xs">
                    {model.deliverables.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <CheckCircle2
                          className={cn(
                            "w-3.5 h-3.5 shrink-0 mt-0.5",
                            model.isPopular ? "text-[#FFB020]" : "text-emerald-600"
                          )}
                        />
                        <span
                          className={cn(
                            "text-[11px] leading-snug font-medium",
                            model.isPopular ? "text-slate-200" : "text-slate-700"
                          )}
                        >
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Squad Composition Box */}
                <div
                  className={cn(
                    "p-2.5 rounded-xl border text-[11px] space-y-0.5",
                    model.isPopular
                      ? "bg-white/5 border-white/10 text-slate-300"
                      : "bg-[#FAF8F5] border-[#E2DBD0] text-slate-600"
                  )}
                >
                  <div className="font-mono text-[9px] uppercase tracking-wider text-slate-400 font-bold">
                    Squad Structure:
                  </div>
                  <div
                    className={cn(
                      "font-bold truncate text-[11px]",
                      model.isPopular ? "text-white" : "text-[#0B1B3A]"
                    )}
                  >
                    {model.squadMakeup}
                  </div>
                </div>
              </div>

              {/* Card Footer: SLA & Direct Action */}
              <div className="pt-4 border-t border-slate-100/15 space-y-3 mt-4">
                <div className="flex items-center justify-between text-[11px] font-mono">
                  <span className="flex items-center gap-1.5 text-emerald-400 font-bold">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>{model.sla}</span>
                  </span>
                  <span
                    className={cn(
                      "font-bold text-[10.5px]",
                      model.isPopular ? "text-[#FFB020]" : "text-[#B87A00]"
                    )}
                  >
                    Zero Lock-In
                  </span>
                </div>

                <Link
                  href="/get-a-quote"
                  className={cn(
                    "w-full py-2.5 px-4 rounded-xl text-xs font-black uppercase tracking-wider flex items-center justify-center gap-2 shadow-xs cursor-pointer text-center group transition-all",
                    model.isPopular
                      ? "btn-luxury-gold btn-shimmer"
                      : "btn-luxury-navy"
                  )}
                >
                  <span>{model.ctaText}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

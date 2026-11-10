"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  Users,
  ShieldCheck,
  Zap,
  Sparkles,
} from "lucide-react";
import { cn } from "@/lib/utils";
import PixelCard from "@/components/ui/PixelCard";
import StarBorder from "@/components/ui/StarBorder";

/* ========================================================================== */
/* 3D ISOMETRIC ICON COMPONENTS (PURE CSS + SVG LAYERS)                       */
/* ========================================================================== */

// 1. 3D Isometric Milestone Vault (Fixed-Cost)
function MilestoneVault3DIcon({ isActive }: { isActive: boolean }) {
  return (
    <div className="relative w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center">
      <div
        className={cn(
          "absolute inset-0 rounded-xl blur-lg transition-all duration-500",
          isActive ? "bg-[#FFB020]/30 scale-110" : "bg-[#FFB020]/15 scale-90"
        )}
      />
      <svg
        viewBox="0 0 100 100"
        className={cn(
          "w-full h-full transition-transform duration-500 ease-out drop-shadow-md",
          isActive ? "scale-105 -translate-y-0.5" : "opacity-90"
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
        </defs>

        <ellipse cx="50" cy="85" rx="30" ry="10" fill="rgba(6,11,34,0.4)" />
        <polygon points="50,18 82,34 50,50 18,34" fill="url(#vaultTop)" />
        <polygon points="18,34 50,50 50,82 18,66" fill="url(#vaultLeft)" />
        <polygon points="50,50 82,34 82,66 50,82" fill="url(#vaultRight)" />
        <line x1="50" y1="50" x2="50" y2="82" stroke="#FFE082" strokeWidth="1.5" strokeOpacity="0.6" />
        <circle cx="50" cy="34" r="4.5" fill="#FFFFFF" />
        <circle cx="50" cy="34" r="2" fill="#060B22" />
      </svg>
    </div>
  );
}

// 2. 3D Isometric Dev Pod Tower (Monthly Dedicated)
function DedicatedSquad3DIcon({ isActive }: { isActive: boolean }) {
  return (
    <div className="relative w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center">
      <div
        className={cn(
          "absolute inset-0 rounded-xl blur-lg transition-all duration-500",
          isActive ? "bg-cyan-500/35 scale-110" : "bg-cyan-500/15 scale-90"
        )}
      />
      <svg
        viewBox="0 0 100 100"
        className={cn(
          "w-full h-full transition-transform duration-500 ease-out drop-shadow-md",
          isActive ? "scale-105 -translate-y-0.5" : "opacity-90"
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

        <ellipse cx="50" cy="85" rx="30" ry="10" fill="rgba(6,11,34,0.4)" />
        <polygon points="50,38 80,52 50,66 20,52" fill="url(#podTop)" />
        <polygon points="20,52 50,66 50,86 20,72" fill="url(#podLeft)" />
        <polygon points="50,66 80,52 80,72 50,86" fill="url(#podRight)" />

        <polygon points="50,14 74,26 50,38 26,26" fill="#BAE6FD" />
        <polygon points="26,26 50,38 50,54 26,42" fill="#0284C7" />
        <polygon points="50,38 74,26 74,42 50,54" fill="#38BDF8" />

        <circle cx="50" cy="26" r="3.5" fill="#060B22" />
        <line x1="50" y1="26" x2="62" y2="20" stroke="#060B22" strokeWidth="1.5" />
        <circle cx="62" cy="20" r="2.5" fill="#060B22" />
      </svg>
    </div>
  );
}

// 3. 3D Isometric Chrono-Turbine (Hourly On-Demand)
function ChronoTurbine3DIcon({ isActive }: { isActive: boolean }) {
  return (
    <div className="relative w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center">
      <div
        className={cn(
          "absolute inset-0 rounded-xl blur-lg transition-all duration-500",
          isActive ? "bg-emerald-500/35 scale-110" : "bg-emerald-500/15 scale-90"
        )}
      />
      <svg
        viewBox="0 0 100 100"
        className={cn(
          "w-full h-full transition-transform duration-500 ease-out drop-shadow-md",
          isActive ? "scale-105 -translate-y-0.5" : "opacity-90"
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

        <ellipse cx="50" cy="85" rx="30" ry="10" fill="rgba(6,11,34,0.4)" />
        <polygon points="50,22 82,36 50,50 18,36" fill="url(#turbineTop)" />
        <polygon points="18,36 50,50 50,78 18,64" fill="url(#turbineLeft)" />
        <polygon points="50,50 82,36 82,64 50,78" fill="url(#turbineRight)" />

        <line x1="50" y1="36" x2="66" y2="30" stroke="#064E3B" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="50" y1="36" x2="42" y2="24" stroke="#064E3B" strokeWidth="2" strokeLinecap="round" />
        <circle cx="50" cy="36" r="3" fill="#FFFFFF" />
      </svg>
    </div>
  );
}

interface CollaborationModel {
  id: string;
  name: string;
  badge: string;
  isPopular?: boolean;
  pixelVariant: "gold" | "navy" | "default";
  kicker: string;
  valueHighlight: string;
  valueSubtext: string;
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
    badge: "Milestone-Based",
    pixelVariant: "default",
    kicker: "Scope Certainty",
    valueHighlight: "Fixed-Milestone",
    valueSubtext: "Guaranteed launch date • Zero surprise costs",
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
    pixelVariant: "gold",
    kicker: "Full-Time Senior Engineers",
    valueHighlight: "Dedicated Squad",
    valueSubtext: "160 hrs/month • Full-time senior engineering",
    tagline: "Dedicated senior developers working exclusively on your product roadmap with zero overhead.",
    renderIcon: (isActive) => <DedicatedSquad3DIcon isActive={isActive} />,
    deliverables: [
      "160 hours/month dedicated engineering per developer",
      "Direct client repository commit access (GitHub/GitLab)",
      "Daily standups in your private Slack/Discord channel",
      "Rapid feature delivery, API hooks & weekly Loom demos",
    ],
    squadMakeup: "Senior React / Next.js Developer (160h/mo)",
    sla: "Timezone-Aligned Overlap",
    ctaText: "Hire Dedicated Developers",
  },
  {
    id: "hourly",
    name: "Hourly On-Demand Support",
    badge: "Pay-As-You-Need",
    pixelVariant: "navy",
    kicker: "Flexible Technical Agility",
    valueHighlight: "On-Demand Agility",
    valueSubtext: "Pay as you need • Sub-24h sprint kickoff",
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
  const [activeModelId, setActiveModelId] = useState<string>("monthly-dedicated");

  return (
    <div className="w-full max-w-7xl mx-auto select-none text-left">
      {/* ==================================================================== */}
      {/* 3 PIXELCARD COLLABORATION FRAMEWORK CARDS (SINGLE-WINDOW VIEWPORT)  */}
      {/* ==================================================================== */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-6 items-stretch">
        {COLLAB_MODELS.map((model) => {
          const isSelected = model.id === activeModelId;

          return (
            <div
              key={model.id}
              onMouseEnter={() => setActiveModelId(model.id)}
              className="h-full flex"
            >
              <PixelCard
                variant={model.pixelVariant}
                pixelSize={2.5}
                gap={6}
                speed={model.isPopular ? 30 : 25}
                spotlight={model.isPopular ? 0.75 : 0.55}
                glow={model.isPopular ? 0.75 : 0.5}
                radius={24}
                className={cn(
                  "p-5 sm:p-6 transition-all duration-300 relative group flex flex-col justify-between",
                  model.isPopular
                    ? "ring-1 ring-[#FFB020]/40 shadow-xl shadow-[#FFB020]/10 lg:-translate-y-1"
                    : "hover:ring-1 hover:ring-white/20"
                )}
              >
                {/* Popular Model Top Badge */}
                {model.isPopular && (
                  <div className="absolute top-0 right-0 z-10">
                    <div className="bg-gradient-to-r from-[#FFB020] to-[#E68A00] text-[#060B22] text-[10px] font-mono font-black uppercase tracking-wider py-1 px-3.5 rounded-bl-xl shadow-xs flex items-center gap-1">
                      <Sparkles className="w-3 h-3 fill-[#060B22]" />
                      <span>Popular</span>
                    </div>
                  </div>
                )}

                <div className="space-y-4">
                  {/* Top Row: Icon + Plan Name */}
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="shrink-0 p-1 rounded-xl bg-white/5 border border-white/10">
                        {model.renderIcon(isSelected)}
                      </div>
                      <div>
                        <div
                          className={cn(
                            "text-[10px] font-mono font-bold uppercase tracking-wider",
                            model.isPopular ? "text-[#FFB020]" : "text-slate-400"
                          )}
                        >
                          {model.kicker}
                        </div>
                        <h3 className="font-display font-black text-lg sm:text-xl text-white tracking-tight leading-tight">
                          {model.name}
                        </h3>
                      </div>
                    </div>

                    {!model.isPopular && (
                      <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-md bg-white/5 text-slate-300 border border-white/10 shrink-0">
                        {model.badge}
                      </span>
                    )}
                  </div>

                  {/* Clean Scope Certainty Highlight Block (ZERO PRICING) */}
                  <div className="pt-2 pb-1 border-b border-white/10">
                    <div
                      className={cn(
                        "font-display font-black text-2xl tracking-tight",
                        model.isPopular ? "text-[#FFB020]" : "text-white"
                      )}
                    >
                      {model.valueHighlight}
                    </div>
                    <div className="text-xs text-slate-400 font-medium mt-0.5">
                      {model.valueSubtext}
                    </div>
                  </div>

                  {/* Concise Tagline */}
                  <p className="text-xs text-slate-300 leading-relaxed font-normal line-clamp-2">
                    {model.tagline}
                  </p>

                  {/* 4 Concrete Deliverables Checklist */}
                  <div className="space-y-2 pt-1">
                    <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400">
                      Verified Deliverables:
                    </div>

                    <div className="space-y-2 text-xs">
                      {model.deliverables.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <CheckCircle2
                            className={cn(
                              "w-3.5 h-3.5 shrink-0 mt-0.5",
                              model.isPopular ? "text-[#FFB020]" : "text-emerald-400"
                            )}
                          />
                          <span className="text-[11.5px] leading-snug font-medium text-slate-200">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Squad Structure Box */}
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-[11px] space-y-0.5">
                    <div className="font-mono text-[9px] uppercase tracking-wider text-slate-400 font-bold">
                      Squad Structure:
                    </div>
                    <div className="font-bold truncate text-[11px] text-white">
                      {model.squadMakeup}
                    </div>
                  </div>
                </div>

                {/* Card Footer: SLA & Direct Action Button */}
                <div className="pt-4 border-t border-white/10 space-y-3 mt-4">
                  <div className="flex items-center justify-between text-[11px] font-mono">
                    <span className="flex items-center gap-1.5 text-emerald-400 font-bold">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span>{model.sla}</span>
                    </span>
                    <span
                      className={cn(
                        "font-bold text-[10.5px]",
                        model.isPopular ? "text-[#FFB020]" : "text-slate-400"
                      )}
                    >
                      Zero Lock-In
                    </span>
                  </div>

                  <StarBorder
                    as={Link}
                    href="/get-a-quote"
                    className="w-full py-2.5 px-4 rounded-xl text-xs font-black uppercase tracking-wider flex items-center justify-center gap-2 shadow-xs cursor-pointer text-center group transition-all"
                    radius={12}
                    color={model.isPopular ? "#FFF8E7" : "#FFB020"}
                    trailColor={model.isPopular ? "#FFB020" : "#38BDF8"}
                    backgroundColor={
                      model.isPopular ? "#FFB020" : "rgba(255, 255, 255, 0.08)"
                    }
                    textColor={model.isPopular ? "#060B22" : "#FFFFFF"}
                    borderColor={
                      model.isPopular
                        ? "rgba(255, 176, 32, 0.6)"
                        : "rgba(255, 255, 255, 0.2)"
                    }
                    sparkle={true}
                    glow={model.isPopular ? 0.85 : 0.6}
                  >
                    <span>{model.ctaText}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </StarBorder>
                </div>
              </PixelCard>
            </div>
          );
        })}
      </div>
    </div>
  );
}

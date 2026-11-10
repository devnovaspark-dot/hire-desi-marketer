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
} from "lucide-react";
import { cn } from "@/lib/utils";

interface EngagementModelItem {
  id: string;
  name: string;
  badge: string;
  kicker: string;
  icon: React.ReactNode;
  tagline: string;
  isPopular?: boolean;
  bestFor: string;
  scopeStructure: string;
  developerSquad: string;
  deliveryCadence: string;
  keyDeliverables: string[];
  ctaText: string;
}

const ENGAGEMENT_MODELS: EngagementModelItem[] = [
  {
    id: "fixed-cost",
    name: "Fixed-Cost Project",
    badge: "Scope & Timeline Certainty",
    kicker: "Milestone-Based Delivery",
    icon: <Briefcase className="w-4 h-4 text-[#FFB020]" />,
    tagline: "Defined scope, fixed milestones, guaranteed launch date, and zero surprise costs.",
    isPopular: true,
    bestFor: "Complete custom websites, redesigns, and headless e-commerce builds.",
    scopeStructure: "Detailed discovery roadmap with fixed milestone approvals.",
    developerSquad: "Full project squad: UI/UX Designer, Lead Developer & QA Architect.",
    deliveryCadence: "Bi-weekly milestone demonstrations and production staging reviews.",
    keyDeliverables: [
      "Custom Figma UI/UX prototypes & responsive layout system",
      "Pixel-perfect frontend & secure backend integration",
      "Core Web Vitals speed optimization (< 0.8s LCP benchmark)",
      "Pre-launch SEO audit, 301 redirect map & Schema setup",
      "30-day post-launch warranty & handover training",
    ],
    ctaText: "Discuss Fixed-Cost Scope",
  },
  {
    id: "monthly-dedicated",
    name: "Monthly Dedicated Squad",
    badge: "Continuous Development Velocity",
    kicker: "Dedicated Full-Time Developers",
    icon: <Users className="w-4 h-4 text-[#FFB020]" />,
    tagline: "Dedicated senior web developers working exclusively on your product roadmap.",
    isPopular: false,
    bestFor: "Scaling SaaS platforms, active e-commerce brands, and agency overflow.",
    scopeStructure: "Dynamic sprint backlog prioritized by your product team.",
    developerSquad: "Dedicated senior full-stack engineer aligned to your timezone.",
    deliveryCadence: "Daily async Slack & Loom updates with weekly sprint reviews.",
    keyDeliverables: [
      "160 hours/month of dedicated senior development per engineer",
      "Direct communication via private Slack/Teams & Git pull requests",
      "Rapid feature development, integrations, and continuous deployments",
      "Flexible task prioritization with zero long-term lock-in",
      "Full IP & code ownership committed directly to your repository",
    ],
    ctaText: "Hire Dedicated Web Developers",
  },
  {
    id: "hourly",
    name: "Flexible Hourly Retainer",
    badge: "On-Demand Agility",
    kicker: "Pay-As-You-Go Enhancements",
    icon: <Clock className="w-4 h-4 text-[#FFB020]" />,
    tagline: "On-demand development support for quick iterations, speed audits, and bug fixes.",
    isPopular: false,
    bestFor: "Existing websites needing speed tuning, CRO enhancements, or ad-hoc support.",
    scopeStructure: "Itemized task tickets with estimated hour approximations.",
    developerSquad: "Specialized senior developer assigned to your specific task requirements.",
    deliveryCadence: "Rapid turnaround within 24–48 hours for emergency tickets.",
    keyDeliverables: [
      "Transparent time tracking with detailed work logs",
      "Speed optimization & Core Web Vitals remediation",
      "Landing page creation & conversion rate layout testing",
      "Third-party API, CRM, or analytics tracking integrations",
      "Zero monthly retainer minimums or cancellation fees",
    ],
    ctaText: "Request Hourly Dev Support",
  },
];

export function WebDesignEngagementModels() {
  const [activeModelId, setActiveModelId] = useState<string>("fixed-cost");

  const activeModel =
    ENGAGEMENT_MODELS.find((m) => m.id === activeModelId) || ENGAGEMENT_MODELS[0];

  return (
    <div className="space-y-6 sm:space-y-8 max-w-7xl mx-auto text-left">
      {/* 1. Model Selector Ribbon */}
      <div className="flex items-center justify-start lg:justify-center gap-1.5 sm:gap-2 overflow-x-auto pb-1 no-scrollbar">
        {ENGAGEMENT_MODELS.map((model) => {
          const isSelected = model.id === activeModel.id;

          return (
            <button
              key={model.id}
              type="button"
              onClick={() => setActiveModelId(model.id)}
              className={cn(
                "px-4 py-2 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer select-none inline-flex items-center gap-2 shrink-0 border",
                isSelected
                  ? "bg-[#060B22] text-[#FFB020] border-[#FFB020] shadow-sm ring-2 ring-[#FFB020]/20 scale-102 font-black"
                  : "bg-white text-slate-700 border-[#E2DBD0] hover:border-slate-400"
              )}
            >
              <span>{model.icon}</span>
              <span>{model.name}</span>
              {isSelected && (
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shrink-0" />
              )}
            </button>
          );
        })}
      </div>

      {/* 2. Premium Editorial Comparison Studio (Card-Free Unified Canvas) */}
      <div className="rounded-2xl sm:rounded-3xl bg-white border border-[#E2DBD0] shadow-sm overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
          {/* Left Column (6 cols): Scope Architecture & Cadence */}
          <div className="lg:col-span-6 p-5 sm:p-7 lg:p-8 bg-[#FAF8F5] border-b lg:border-b-0 lg:border-r border-[#E2DBD0] flex flex-col justify-between space-y-5">
            <div className="space-y-3">
              <div className="flex items-center justify-between gap-2">
                <span className="text-[10px] font-black uppercase tracking-wider text-[#B87A00] bg-[#FFB020]/15 px-2.5 py-0.5 rounded-full border border-[#FFB020]/30">
                  {activeModel.badge}
                </span>

                <span className="text-xs font-mono font-bold text-slate-400">
                  {activeModel.kicker}
                </span>
              </div>

              <h3 className="font-display font-black text-xl sm:text-2xl text-[#0B1B3A] tracking-tight leading-snug">
                {activeModel.name}
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                {activeModel.tagline}
              </p>

              {/* Delivery Specs Table */}
              <div className="pt-2 border-t border-[#E2DBD0] space-y-2 text-xs">
                <div className="flex items-start justify-between gap-3 p-2.5 rounded-xl bg-white border border-[#E2DBD0]/60">
                  <span className="font-bold text-[#0B1B3A] shrink-0">Best Suited For:</span>
                  <span className="text-slate-600 text-right">{activeModel.bestFor}</span>
                </div>
                <div className="flex items-start justify-between gap-3 p-2.5 rounded-xl bg-white border border-[#E2DBD0]/60">
                  <span className="font-bold text-[#0B1B3A] shrink-0">Squad Composition:</span>
                  <span className="text-slate-600 text-right">{activeModel.developerSquad}</span>
                </div>
                <div className="flex items-start justify-between gap-3 p-2.5 rounded-xl bg-white border border-[#E2DBD0]/60">
                  <span className="font-bold text-[#0B1B3A] shrink-0">Sprint Cadence:</span>
                  <span className="text-slate-600 text-right">{activeModel.deliveryCadence}</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs text-slate-500 pt-1">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Zero hidden platform fees. 100% intellectual property ownership.</span>
            </div>
          </div>

          {/* Right Column (6 cols): Key Deliverables & Direct Action */}
          <div className="lg:col-span-6 p-5 sm:p-7 lg:p-8 flex flex-col justify-between space-y-5">
            <div className="space-y-3">
              <div className="text-[10px] font-black uppercase tracking-wider text-slate-700">
                Included Collaboration Inclusions:
              </div>

              <div className="space-y-2 text-xs text-slate-700">
                {activeModel.keyDeliverables.map((item, i) => (
                  <div key={i} className="flex items-start gap-2.5 p-2 rounded-xl bg-[#FAF8F5] border border-[#E2DBD0]/60">
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
                <span>{activeModel.ctaText}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

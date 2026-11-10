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
    badge: "Most Popular · 100% Scope Certainty",
    kicker: "Milestone-Based Delivery",
    icon: <Briefcase className="w-5 h-5 text-[#FFB020]" />,
    tagline: "Defined scope, fixed milestones, guaranteed launch date, and zero surprise costs.",
    isPopular: true,
    bestFor: "Complete custom websites, comprehensive redesigns, and e-commerce platform builds.",
    scopeStructure: "Detailed discovery roadmap with fixed milestone sign-offs.",
    developerSquad: "Full project squad: UI/UX Designer, Lead Developer, QA Engineer & Project Manager.",
    deliveryCadence: "Bi-weekly milestone demonstrations and production staging reviews.",
    keyDeliverables: [
      "Custom Figma UI/UX prototypes & responsive layout system",
      "Pixel-perfect responsive frontend & secure backend integration",
      "Core Web Vitals speed optimization (< 0.8s LCP benchmark)",
      "Pre-launch SEO audit, 301 redirect map & Schema setup",
      "30-day post-launch warranty & comprehensive handover training",
    ],
    ctaText: "Get Fixed-Cost Scope & Quote",
  },
  {
    id: "monthly-dedicated",
    name: "Monthly Dedicated Squad",
    badge: "Maximum Velocity",
    kicker: "Dedicated Full-Time Developers",
    icon: <Users className="w-5 h-5 text-[#FFB020]" />,
    tagline: "Dedicated senior web developers working exclusively on your product roadmap.",
    isPopular: false,
    bestFor: "Scaling SaaS platforms, active e-commerce brands, and agencies needing dependable dev bandwidth.",
    scopeStructure: "Dynamic sprint backlog prioritized by your internal product team.",
    developerSquad: "Dedicated full-stack engineer (or squad) aligned to your timezone.",
    deliveryCadence: "Daily async Slack & Loom updates with weekly sprint planning.",
    keyDeliverables: [
      "160 hours/month of dedicated senior development per developer",
      "Direct communication via private Slack/Teams & GitHub pull requests",
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
    icon: <Clock className="w-5 h-5 text-[#FFB020]" />,
    tagline: "On-demand development support for quick iterations, speed audits, and bug fixes.",
    isPopular: false,
    bestFor: "Existing websites needing speed tuning, CRO enhancements, or ad-hoc technical support.",
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
  const [activeTabId, setActiveTabId] = useState<string>("fixed-cost");

  return (
    <div className="space-y-6 sm:space-y-8">
      {/* 1. Mobile Segmented Tab Switcher */}
      <div className="flex lg:hidden items-center justify-center gap-1.5 p-1 bg-slate-100 rounded-2xl max-w-md mx-auto">
        {ENGAGEMENT_MODELS.map((model) => (
          <button
            key={model.id}
            type="button"
            onClick={() => setActiveTabId(model.id)}
            className={cn(
              "flex-1 py-2 px-2.5 rounded-xl text-xs font-bold transition-all text-center cursor-pointer",
              activeTabId === model.id
                ? "bg-[#060B22] text-[#FFB020] shadow-xs"
                : "text-slate-600 hover:text-[#0B1B3A]"
            )}
          >
            {model.name}
          </button>
        ))}
      </div>

      {/* 2. Unified Collaborative Comparison Studio (Asymmetrical Desktop & Responsive Mobile) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-6 items-stretch">
        {ENGAGEMENT_MODELS.map((model) => {
          const isSelectedOnMobile = activeTabId === model.id;

          return (
            <div
              key={model.id}
              className={cn(
                "rounded-2xl sm:rounded-3xl p-5 sm:p-7 flex flex-col justify-between transition-all duration-300 relative text-left group",
                model.isPopular
                  ? "skeuo-card-dark text-white border-2 border-[#FFB020] shadow-xl ring-4 ring-[#FFB020]/15 lg:scale-102 z-10"
                  : "bg-white text-[#0B1B3A] border border-[#E2DBD0] hover:border-[#FFB020]/60 shadow-sm hover:shadow-md",
                // Mobile visibility toggle
                "lg:flex",
                isSelectedOnMobile ? "flex" : "hidden lg:flex"
              )}
            >
              {/* Header: Badge & Icon */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span
                    className={cn(
                      "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider",
                      model.isPopular
                        ? "bg-[#FFB020] text-[#060B22] shadow-xs"
                        : "bg-slate-100 text-slate-700 border border-slate-200"
                    )}
                  >
                    <Sparkles className="w-3 h-3" />
                    <span>{model.badge}</span>
                  </span>

                  <div
                    className={cn(
                      "w-9 h-9 rounded-xl flex items-center justify-center shrink-0",
                      model.isPopular
                        ? "bg-white/10 text-[#FFB020] border border-white/15"
                        : "bg-[#060B22]/5 text-[#0B1B3A] border border-[#E2DBD0]"
                    )}
                  >
                    {model.icon}
                  </div>
                </div>

                <div>
                  <div
                    className={cn(
                      "text-[10.5px] font-black uppercase tracking-wider",
                      model.isPopular ? "text-[#FFB020]" : "text-[#B87A00]"
                    )}
                  >
                    {model.kicker}
                  </div>
                  <h3
                    className={cn(
                      "font-display font-black text-xl sm:text-2xl tracking-tight leading-snug mt-0.5",
                      model.isPopular ? "text-white" : "text-[#0B1B3A]"
                    )}
                  >
                    {model.name}
                  </h3>
                </div>

                <p
                  className={cn(
                    "text-xs leading-relaxed font-normal",
                    model.isPopular ? "text-slate-300" : "text-slate-600"
                  )}
                >
                  {model.tagline}
                </p>

                {/* Best For Callout */}
                <div
                  className={cn(
                    "p-3 rounded-xl text-xs space-y-0.5",
                    model.isPopular
                      ? "bg-white/10 border border-white/10 text-white"
                      : "bg-[#FAF8F5] border border-[#E2DBD0] text-slate-800"
                  )}
                >
                  <div className="text-[9.5px] font-black uppercase tracking-wider text-[#B87A00]">
                    Best Suited For:
                  </div>
                  <div className="text-[11px] leading-snug font-medium">
                    {model.bestFor}
                  </div>
                </div>
              </div>

              {/* Specifications Matrix */}
              <div className="py-4 space-y-2.5 border-t border-b my-4 border-slate-200/20 text-xs">
                <div className="flex items-center justify-between gap-2">
                  <span className={model.isPopular ? "text-slate-400" : "text-slate-500"}>
                    Scope Certainty:
                  </span>
                  <span className="font-bold text-right text-[11px]">
                    {model.id === "fixed-cost" ? "100% Fixed & Milestone Guaranteed" : model.id === "monthly-dedicated" ? "Dynamic Backlog Sprint" : "Itemized Task Queue"}
                  </span>
                </div>

                <div className="flex items-center justify-between gap-2">
                  <span className={model.isPopular ? "text-slate-400" : "text-slate-500"}>
                    Developer Squad:
                  </span>
                  <span className="font-bold text-right text-[11px]">
                    {model.id === "fixed-cost" ? "Full Dedicated Squad" : model.id === "monthly-dedicated" ? "100% Exclusive Dev" : "Senior Specialist"}
                  </span>
                </div>

                <div className="flex items-center justify-between gap-2">
                  <span className={model.isPopular ? "text-slate-400" : "text-slate-500"}>
                    IP &amp; Code Ownership:
                  </span>
                  <span className="font-bold text-right text-[11px] text-emerald-400 flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>100% Yours (Day 1)</span>
                  </span>
                </div>
              </div>

              {/* Deliverables Checklist */}
              <div className="space-y-2 flex-1">
                <div
                  className={cn(
                    "text-[10px] font-black uppercase tracking-wider",
                    model.isPopular ? "text-[#FFB020]" : "text-slate-600"
                  )}
                >
                  Key Deliverables &amp; Inclusions:
                </div>
                <ul className="space-y-1.5 text-xs">
                  {model.keyDeliverables.map((item, i) => (
                    <li
                      key={i}
                      className={cn(
                        "flex items-start gap-2 leading-snug text-[11px]",
                        model.isPopular ? "text-slate-200" : "text-slate-700"
                      )}
                    >
                      <CheckCircle2
                        className={cn(
                          "w-3.5 h-3.5 shrink-0 mt-0.5",
                          model.isPopular ? "text-[#FFB020]" : "text-[#B87A00]"
                        )}
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Direct Call to Action */}
              <div className="pt-5 mt-auto">
                <Link
                  href="/get-a-quote"
                  className={cn(
                    "w-full py-3 px-5 rounded-xl text-xs font-black uppercase tracking-wider flex items-center justify-center gap-2 shadow-xs transition-all cursor-pointer text-center",
                    model.isPopular
                      ? "btn-luxury-gold btn-shimmer"
                      : "btn-luxury-navy"
                  )}
                >
                  <span>{model.ctaText}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
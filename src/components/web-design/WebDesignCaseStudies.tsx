"use client";

import React, { useState } from "react";
import {
  ExternalLink,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Lock,
  Search,
  Calendar,
  ShoppingBag,
  Layers,
  Zap,
  TrendingUp,
  FileText,
  Star,
  Activity,
  Cpu,
  BarChart3,
} from "lucide-react";
import { WEB_CASE_STUDIES, WebCaseStudy } from "@/data/web-design-services";
import { cn } from "@/lib/utils";

const CATEGORY_TABS = [
  { id: "all", label: "All References" },
  { id: "business", label: "Healthcare" },
  { id: "ecommerce", label: "E-Commerce" },
  { id: "webapp", label: "SaaS / Tech" },
  { id: "redesign", label: "Corporate Services" },
];

// High-Fidelity Custom UI Previews for Each Benchmark Website
function OneMedicalPreview() {
  return (
    <div className="w-full h-full bg-[#FAFBF9] text-[#0B1B3A] p-3 sm:p-4 flex flex-col justify-between select-none font-sans text-left">
      {/* Top Nav Mockup */}
      <div className="flex items-center justify-between border-b border-emerald-900/10 pb-2">
        <div className="flex items-center gap-1.5">
          <div className="w-4 h-4 rounded bg-emerald-700 flex items-center justify-center text-white text-[9px] font-black">
            +
          </div>
          <span className="font-display font-black text-xs tracking-tight text-emerald-950">
            one medical
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[9px] text-slate-500 hidden sm:inline">24/7 Virtual Care</span>
          <span className="px-2 py-0.5 rounded-full bg-emerald-800 text-white text-[9px] font-bold">
            Book Visit
          </span>
        </div>
      </div>

      {/* Hero Content Mockup */}
      <div className="space-y-1 sm:space-y-1.5 py-1">
        <span className="inline-flex items-center gap-1 text-[8px] font-bold text-emerald-800 bg-emerald-100/70 px-1.5 py-0.5 rounded">
          <Activity className="w-2.5 h-2.5 text-emerald-600" />
          <span>Same-Day Appointments · In-Person &amp; Virtual</span>
        </span>
        <h4 className="font-display font-black text-xs sm:text-sm text-slate-900 leading-tight">
          Healthcare designed around your real life.
        </h4>
        <p className="text-[9px] text-slate-600 line-clamp-1">
          Primary care doctors, drop-in labs, and on-demand video visits in &lt; 5 mins.
        </p>
      </div>

      {/* Mini Provider Card */}
      <div className="bg-white rounded-lg p-2 border border-emerald-900/10 shadow-2xs flex items-center justify-between gap-2">
        <div className="flex items-center gap-2 min-w-0">
          <div className="w-7 h-7 rounded-full bg-emerald-100 text-emerald-800 font-bold text-[10px] flex items-center justify-center shrink-0 border border-emerald-200">
            Dr
          </div>
          <div className="min-w-0">
            <div className="font-bold text-[10px] text-slate-900 truncate">
              Dr. Sarah Chen, MD
            </div>
            <div className="text-[8px] text-slate-500 truncate flex items-center gap-1">
              <span>Internal Medicine</span>
              <span>•</span>
              <span className="text-emerald-700 font-semibold">Today 2:30 PM</span>
            </div>
          </div>
        </div>
        <span className="px-2 py-1 rounded bg-emerald-50 text-emerald-800 text-[8px] font-black uppercase tracking-wider shrink-0 border border-emerald-200/60">
          1-Tap Book
        </span>
      </div>
    </div>
  );
}

function AllbirdsPreview() {
  return (
    <div className="w-full h-full bg-[#F5F2EB] text-[#212A2F] p-3 sm:p-4 flex flex-col justify-between select-none font-sans text-left">
      {/* Top Nav Mockup */}
      <div className="flex items-center justify-between border-b border-stone-300 pb-2">
        <span className="font-display font-black text-xs tracking-wider uppercase text-stone-900">
          allbirds
        </span>
        <div className="flex items-center gap-2 text-[9px] text-stone-700 font-medium">
          <span className="hidden sm:inline">Men</span>
          <span className="hidden sm:inline">Women</span>
          <span className="px-2 py-0.5 rounded-full bg-stone-900 text-white text-[8px] font-bold">
            Cart (1)
          </span>
        </div>
      </div>

      {/* Hero Banner Mockup */}
      <div className="space-y-1 py-1">
        <span className="text-[8px] font-black uppercase tracking-widest text-[#B87A00] block">
          Sustainable Footwear &amp; Apparel
        </span>
        <h4 className="font-display font-black text-xs sm:text-sm text-stone-900 leading-tight">
          Super natural materials. Effortless comfort.
        </h4>
        <p className="text-[9px] text-stone-600 line-clamp-1">
          Crafted from ZQ Merino Wool, FSC eucalyptus tree fiber, and SweetFoam®.
        </p>
      </div>

      {/* Mini Product Card */}
      <div className="bg-white rounded-lg p-2 border border-stone-200 shadow-2xs flex items-center justify-between gap-2">
        <div className="flex items-center gap-2 min-w-0">
          <div className="w-8 h-8 rounded bg-stone-100 flex items-center justify-center shrink-0 border border-stone-200">
            <span className="text-base">👟</span>
          </div>
          <div className="min-w-0">
            <div className="font-bold text-[10px] text-stone-900 truncate">
              Wool Runner 2 · Natural Black
            </div>
            <div className="text-[8px] text-stone-500 font-mono">$110 · Free 2-Day Shipping</div>
          </div>
        </div>
        <span className="px-2 py-1 rounded bg-stone-900 text-white text-[8px] font-black uppercase tracking-wider shrink-0 hover:bg-black">
          Quick Add
        </span>
      </div>
    </div>
  );
}

function LinearPreview() {
  return (
    <div className="w-full h-full bg-[#0E1015] text-[#ECEFF4] p-3 sm:p-4 flex flex-col justify-between select-none font-sans text-left relative overflow-hidden">
      {/* Background Subtle Violet Glow */}
      <div className="absolute top-0 right-0 w-40 h-40 bg-violet-600/15 rounded-full blur-2xl pointer-events-none" />

      {/* Top Bar Mockup */}
      <div className="flex items-center justify-between border-b border-white/10 pb-2 relative z-10">
        <div className="flex items-center gap-1.5">
          <div className="w-3.5 h-3.5 rounded bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center text-[8px] font-black text-white">
            ▲
          </div>
          <span className="font-bold text-xs tracking-tight text-white">Linear</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="px-1.5 py-0.5 rounded bg-white/10 text-slate-300 text-[8px] font-mono border border-white/10">
            ⌘K Search
          </span>
          <span className="w-2 h-2 rounded-full bg-emerald-400" />
        </div>
      </div>

      {/* Software Telemetry Mockup */}
      <div className="space-y-1 py-1 relative z-10">
        <span className="text-[8px] font-mono text-violet-400 uppercase tracking-widest block">
          Cycle 42 · 88% Velocity
        </span>
        <h4 className="font-display font-black text-xs sm:text-sm text-white leading-tight">
          Purpose-built tool for modern product teams.
        </h4>
        <p className="text-[9px] text-slate-400 line-clamp-1">
          Streamlined issue tracking, sprint cycles, and automated Git workflows.
        </p>
      </div>

      {/* Mini Active Task Card */}
      <div className="bg-white/5 rounded-lg p-2 border border-white/10 backdrop-blur-md shadow-2xs flex items-center justify-between gap-2 relative z-10">
        <div className="flex items-center gap-2 min-w-0">
          <span className="w-2 h-2 rounded-full bg-amber-400 shrink-0" />
          <div className="min-w-0">
            <div className="font-mono text-[9px] text-slate-200 truncate">
              ENG-342: WebGL shader optimization
            </div>
            <div className="text-[8px] text-slate-500">In Progress · Assigned to Core UI</div>
          </div>
        </div>
        <span className="px-1.5 py-0.5 rounded bg-violet-500/20 text-violet-300 text-[8px] font-mono border border-violet-500/30 shrink-0">
          Sub-50ms
        </span>
      </div>
    </div>
  );
}

function McKinseyPreview() {
  return (
    <div className="w-full h-full bg-[#051C2C] text-white p-3 sm:p-4 flex flex-col justify-between select-none text-left relative overflow-hidden">
      {/* Top Nav Mockup */}
      <div className="flex items-center justify-between border-b border-white/15 pb-2">
        <span className="font-serif font-bold text-xs tracking-tight text-white">
          McKinsey &amp; Company
        </span>
        <div className="flex items-center gap-2 text-[8px] text-slate-300 font-sans uppercase tracking-widest">
          <span className="hidden sm:inline">Insights</span>
          <span className="px-2 py-0.5 rounded bg-white/15 text-white font-bold">
            Executive Report
          </span>
        </div>
      </div>

      {/* Editorial Header Mockup */}
      <div className="space-y-1 py-1">
        <span className="text-[8px] font-mono uppercase tracking-widest text-[#FFB020] block">
          Featured Global Briefing · 2026
        </span>
        <h4 className="font-serif font-black text-xs sm:text-sm text-white leading-tight">
          Leading Through Volatility: The AI Enterprise Agenda
        </h4>
        <p className="text-[9px] text-slate-300 line-clamp-1 font-sans">
          How market-leading executives turn digital investments into measurable enterprise ROI.
        </p>
      </div>

      {/* Mini Chart Callout */}
      <div className="bg-white/10 rounded-lg p-2 border border-white/15 shadow-2xs flex items-center justify-between gap-2 font-sans">
        <div className="flex items-center gap-2 min-w-0">
          <div className="w-6 h-6 rounded bg-[#FFB020]/20 flex items-center justify-center shrink-0 border border-[#FFB020]/30 text-[#FFB020]">
            <BarChart3 className="w-3.5 h-3.5" />
          </div>
          <div className="min-w-0">
            <div className="font-bold text-[9px] text-white truncate">
              Global CEO Research Database
            </div>
            <div className="text-[8px] text-slate-300">+42% Productivity Multiplier</div>
          </div>
        </div>
        <span className="px-2 py-1 rounded bg-white text-[#051C2C] text-[8px] font-black uppercase tracking-wider shrink-0">
          Read Brief
        </span>
      </div>
    </div>
  );
}

export function WebDesignCaseStudies() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filteredStudies =
    activeCategory === "all"
      ? WEB_CASE_STUDIES
      : WEB_CASE_STUDIES.filter((cs) => cs.category === activeCategory);

  const renderPreview = (id: string) => {
    switch (id) {
      case "healthcare-reference":
        return <OneMedicalPreview />;
      case "ecommerce-reference":
        return <AllbirdsPreview />;
      case "saas-reference":
        return <LinearPreview />;
      case "corporate-reference":
        return <McKinseyPreview />;
      default:
        return <OneMedicalPreview />;
    }
  };

  return (
    <div className="space-y-6 sm:space-y-8">
      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2.5">
        {CATEGORY_TABS.map((tab) => (
          <button
            suppressHydrationWarning
            key={tab.id}
            type="button"
            onClick={() => setActiveCategory(tab.id)}
            className={cn(
              "px-3.5 sm:px-5 py-1.5 sm:py-2.5 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer select-none",
              activeCategory === tab.id
                ? "bg-[#060B22] text-[#FFB020] border border-[#FFB020]/40 shadow-sm"
                : "bg-white text-slate-700 border border-[#E2DBD0] hover:border-slate-400 hover:text-[#0B1B3A]"
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Grid of Elevated, Editorial Website References */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 items-stretch">
        {filteredStudies.map((study) => (
          <div
            key={study.id}
            className="rounded-2xl bg-white border border-[#E2DBD0] overflow-hidden hover:border-[#FFB020] shadow-[0_4px_18px_-4px_rgba(6,11,34,0.05)] hover:shadow-[0_16px_36px_-6px_rgba(255,176,32,0.14)] transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between group relative text-left"
          >
            {/* Top Subtle Hover Accent Bar */}
            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-transparent to-transparent group-hover:via-[#FFB020] transition-all duration-300 z-30" />

            <div>
              {/* Realistic Browser Window Header */}
              <div className="h-44 sm:h-48 lg:h-52 bg-slate-900 border-b border-[#E2DBD0] flex flex-col relative overflow-hidden">
                {/* Safari / Chrome Browser Top Control Bar */}
                <div className="h-7 bg-[#060B22] border-b border-white/10 px-3 flex items-center justify-between shrink-0 z-20">
                  <div className="flex items-center gap-1.5 shrink-0">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  </div>

                  {/* Clean Simulated URL Bar */}
                  <div className="flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-white/10 border border-white/10 text-[9.5px] font-mono text-slate-300 max-w-[180px] sm:max-w-[240px] truncate">
                    <Lock className="w-2.5 h-2.5 text-emerald-400 shrink-0" />
                    <span className="truncate">
                      {study.liveUrl ? study.liveUrl.replace(/^https?:\/\//, "") : "website.com"}
                    </span>
                  </div>

                  {study.liveUrl && (
                    <a
                      href={study.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-[#FFB020] transition-colors p-0.5"
                      title="Open live website in new tab"
                    >
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>

                {/* Live Custom Interactive UI Mockup */}
                <div className="flex-1 overflow-hidden relative">
                  {renderPreview(study.id)}
                </div>
              </div>

              {/* Card Body with Clean Typography & Warm Styling */}
              <div className="p-4 sm:p-5 space-y-3">
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[9.5px] sm:text-[10px] font-black uppercase tracking-wider text-[#B87A00] bg-[#FFB020]/15 px-2.5 py-0.5 rounded-full border border-[#FFB020]/25">
                      {study.categoryLabel}
                    </span>
                    <span className="text-[10px] text-emerald-700 font-bold flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      <span>{study.referenceType || "Design Inspiration"}</span>
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <h3 className="font-display font-black text-xl text-[#0B1B3A] tracking-tight group-hover:text-[#B87A00] transition-colors">
                      {study.clientName}
                    </h3>
                    <span className="text-xs font-mono text-slate-400">
                      {study.liveUrl ? study.liveUrl.replace(/^https?:\/\//, "").replace(/\/$/, "") : ""}
                    </span>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-2 font-normal">
                    {study.requirements}
                  </p>
                </div>

                {/* Tech Stack Badges */}
                <div className="flex flex-wrap gap-1 sm:gap-1.5">
                  {study.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 text-[10px] font-semibold border border-slate-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Light Refined Stats Ribbon (Warm Light Glass, NOT a heavy black block) */}
                <div className="grid grid-cols-3 gap-1.5 p-2 rounded-xl bg-slate-50/90 border border-slate-200 text-center">
                  {study.metrics.map((m, i) => (
                    <div
                      key={i}
                      className={cn(
                        "space-y-0.5 min-w-0",
                        i !== 2 ? "border-r border-slate-200/80 pr-1" : ""
                      )}
                    >
                      <div className="font-display font-black text-[11px] sm:text-xs text-[#0B1B3A] truncate">
                        {m.value}
                      </div>
                      <div className="text-[8px] text-slate-500 font-semibold uppercase tracking-wider truncate">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Actions: Clear Button & Clean Scope Link */}
            <div className="p-4 sm:p-5 pt-0 border-t border-slate-100 mt-1">
              <div className="pt-2.5 flex items-center justify-between gap-2.5">
                {study.liveUrl ? (
                  <a
                    href={study.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-luxury-navy py-2 px-3.5 rounded-xl text-xs font-black uppercase tracking-wider inline-flex items-center gap-1.5 shadow-sm transition-all cursor-pointer group/btn"
                  >
                    <span>Check Live Website</span>
                    <ExternalLink className="w-3.5 h-3.5 text-[#FFB020] group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </a>
                ) : (
                  <span />
                )}

                <a
                  href="#lead-form"
                  className="text-xs font-bold text-slate-700 hover:text-[#B87A00] inline-flex items-center gap-1 transition-colors cursor-pointer"
                >
                  <span>Discuss Similar Scope</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#FFB020]" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

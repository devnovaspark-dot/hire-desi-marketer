"use client";

import React, { useState } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { DEDICATED_TEAM_TIERS, ROLE_COMPARISON_MATRIX } from "@/data/pricing";
import {
  Check,
  ArrowRight,
  Star,
  Users,
  ShieldCheck,
  Clock,
  Sparkles,
  Kanban,
  Search,
  Zap,
  Megaphone,
  PenTool,
  Palette,
  Code2,
  ChevronDown,
  ChevronUp,
  Eye,
  Sliders,
  DollarSign,
  Briefcase,
  Layers,
} from "lucide-react";
import { cn } from "@/lib/utils";

// 3D Metadata for Comparison Roles
const ROLE_METADATA: Record<
  string,
  {
    icon: React.ElementType;
    colorGrad: string;
    shadowColor: string;
    category: string;
    tools: string[];
    deliverable: string;
    hoursEst: string;
  }
> = {
  "Marketing / Project Manager": {
    icon: Kanban,
    colorGrad: "from-[#4F46E5] via-[#4338CA] to-[#1E1B4B]",
    shadowColor: "rgba(79,70,229,0.35)",
    category: "Governance & Strategy",
    tools: ["Slack", "Asana", "Notion", "TimeDoctor"],
    deliverable: "Daily Slack standups, sprint board planning, weekly roadmap sync & client executive reviews.",
    hoursEst: "40 hrs/wk sprint governance",
  },
  "SEO Specialist": {
    icon: Search,
    colorGrad: "from-[#10B981] via-[#059669] to-[#064E3B]",
    shadowColor: "rgba(16,185,129,0.35)",
    category: "Organic Search & AEO",
    tools: ["Ahrefs", "SEMrush", "Screaming Frog", "GSC"],
    deliverable: "Technical site health audits, on-page keyword gaps, Google Search Console & schema markup.",
    hoursEst: "40 hrs/wk organic growth",
  },
  "Performance Marketer": {
    icon: Zap,
    colorGrad: "from-[#F59E0B] via-[#D97706] to-[#78350F]",
    shadowColor: "rgba(245,158,11,0.35)",
    category: "Paid Acquisition",
    tools: ["Meta CAPI", "Google Ads", "GA4", "TikTok Ads"],
    deliverable: "Campaign bid architecture, creative angle split testing, server-side tracking & daily ROAS scaling.",
    hoursEst: "40 hrs/wk ad optimization",
  },
  "Social Media Marketer": {
    icon: Megaphone,
    colorGrad: "from-[#F43F5E] via-[#E11D48] to-[#881337]",
    shadowColor: "rgba(244,63,94,0.35)",
    category: "Audience & Community",
    tools: ["Buffer", "Canva", "CapCut", "Meta Suite"],
    deliverable: "30-day visual social calendars, multi-platform publishing, short-form Reels & active community engagement.",
    hoursEst: "40 hrs/wk social distribution",
  },
  "Content Writer": {
    icon: PenTool,
    colorGrad: "from-[#14B8A6] via-[#0D9488] to-[#134E4A]",
    shadowColor: "rgba(20,184,166,0.35)",
    category: "Conversion Copywriting",
    tools: ["Grammarly Pro", "SurferSEO", "Google Docs"],
    deliverable: "High-intent organic blog posts, conversion landing page copy, email sequences & video ad scripts.",
    hoursEst: "40 hrs/wk native copy",
  },
  "Graphic Designer & Video Editor": {
    icon: Palette,
    colorGrad: "from-[#8B5CF6] via-[#7C3AED] to-[#4C1D95]",
    shadowColor: "rgba(139,92,246,0.35)",
    category: "Motion & Creatives",
    tools: ["Figma", "After Effects", "Photoshop", "Premiere"],
    deliverable: "High-CTR feed ads, vertical short-form Reels/Shorts, YouTube video covers & marketing collateral.",
    hoursEst: "40 hrs/wk creative production",
  },
  "Full-Stack Web Developer": {
    icon: Code2,
    colorGrad: "from-[#3B82F6] via-[#2563EB] to-[#0F172A]",
    shadowColor: "rgba(59,130,246,0.35)",
    category: "Engineering & Speed",
    tools: ["Next.js", "WordPress", "Webflow", "Vercel"],
    deliverable: "Custom high-speed landing pages (95+ score), Core Web Vitals optimization, CRM API hooks & bug fixes.",
    hoursEst: "40 hrs/wk dev engineering",
  },
};

export function DedicatedTeams() {
  const [selectedSquad, setSelectedSquad] = useState<3 | 5 | 7>(5);
  const [showAllDetails, setShowAllDetails] = useState(false);
  const [expandedRow, setExpandedRow] = useState<string | null>(null);
  const [mobileComparisonMode, setMobileComparisonMode] = useState<"cards" | "table">("cards");

  const squadSummaries = {
    3: {
      title: "Starter Squad (3 Members)",
      size: 3,
      monthlyEst: "$2,400/mo",
      usAgencyEst: "$12,000/mo",
      savings: "80%",
      monthlyHours: "480 hrs/mo",
      cadence: "Daily campaign optimization & weekly sprint review",
      bestFor: "Local businesses, early-stage brands, solo founders needing continuous traction.",
    },
    5: {
      title: "Growth Squad (5 Members)",
      size: 5,
      monthlyEst: "$3,999/mo",
      usAgencyEst: "$22,000/mo",
      savings: "82%",
      monthlyHours: "800 hrs/mo",
      cadence: "Daily 9:00 AM Slack standup + dedicated PM orchestration",
      bestFor: "Growing e-commerce, high-velocity SaaS, multi-location clinics ready to scale.",
    },
    7: {
      title: "Full-Stack Department (7 Members)",
      size: 7,
      monthlyEst: "$5,499/mo",
      usAgencyEst: "$35,000/mo",
      savings: "84%",
      monthlyHours: "1,120 hrs/mo",
      cadence: "Continuous cross-functional sprints across dev, design, and media",
      bestFor: "Established brands and agencies requiring an entire plug-and-play marketing wing.",
    },
  };

  const activeSummary = squadSummaries[selectedSquad];

  const toggleRow = (roleName: string) => {
    if (expandedRow === roleName) {
      setExpandedRow(null);
    } else {
      setExpandedRow(roleName);
    }
  };

  return (
    <>
      {/* 4. Dedicated Teams: 3 Squad Tiers (Fits in 1 Window) */}
      <section id="teams" className="py-6 lg:py-8 bg-[#F5F2EB] border-t border-[#DED7CA] scroll-mt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-5">
          {/* Section Heading */}
          <SectionHeading
            kicker="Model 03 · Dedicated Squads"
            title={
              <>
                Your own marketing wing,{" "}
                <span className="text-[#9A5B00]">staffed in 7 days.</span>
              </>
            }
            subtitle="No freelancers. No shared accounts. 100% full-time specialists working exclusively on your brand under strict Western SLAs."
            align="center"
          />
          {/* 3 High-Contrast Tactile Squad Cards — Compact on Mobile */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-3.5 sm:gap-5 items-stretch">
            {DEDICATED_TEAM_TIERS.map((tier) => {
              const isHighlight = tier.highlight;
              const isSelected = selectedSquad === tier.size;

              return (
                <div
                  key={tier.name}
                  onClick={() => setSelectedSquad(tier.size as 3 | 5 | 7)}
                  className={`rounded-2xl sm:rounded-3xl p-3.5 sm:p-5 flex flex-col justify-between relative transition-colors duration-200 cursor-pointer border-2 ${
                    isSelected
                      ? "bg-[#0A122A] text-white shadow-[0_20px_50px_rgba(10,18,42,0.35)] border-[#FFB020] z-10"
                      : "bg-white text-[#0B1B3A] shadow-sm border-[#D8D0C0] hover:border-[#0B1B3A]"
                  }`}
                >
                  {/* Popular Badge */}
                  {isHighlight && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="btn-luxury-gold btn-shimmer px-3 py-0.5 rounded-full text-[9px] sm:text-[10px] font-black uppercase tracking-wider shadow-md flex items-center gap-1 whitespace-nowrap">
                        <Star className="w-3 h-3 fill-[#060B22]" />
                        Most Popular Squad
                      </span>
                    </div>
                  )}

                  <div className="flex flex-col gap-2 sm:gap-3">
                    {/* Card Header */}
                    <div className="flex items-center justify-between pb-2 border-b border-black/10 dark:border-white/15">
                      <div>
                        <span
                          className={`text-[10px] sm:text-xs font-black uppercase tracking-wider flex items-center gap-1.5 ${
                            isSelected ? "text-[#FFB020]" : "text-[#7B5B14]"
                          }`}
                        >
                          <Users className="w-3.5 h-3.5" />
                          Team of {tier.size} Specialists
                        </span>
                        <h3
                          className={`font-display text-lg sm:text-2xl font-black mt-0.5 tracking-tight ${
                            isSelected ? "text-white" : "text-[#0B1B3A]"
                          }`}
                        >
                          {tier.name}
                        </h3>
                      </div>
                      <span
                        className={`text-[10px] sm:text-xs font-black px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full ${
                          isSelected
                            ? "bg-[#FFB020] text-[#060B22]"
                            : "bg-[#0B1B3A] text-white"
                        }`}
                      >
                        {tier.size} Full-Time
                      </span>
                    </div>

                    <p
                      className={`text-[11px] sm:text-xs leading-snug sm:leading-relaxed line-clamp-2 sm:line-clamp-none ${
                        isSelected ? "text-slate-300" : "text-[#5A6680]"
                      }`}
                    >
                      {tier.description}
                    </p>

                    {/* Roles Included Mini List */}
                    <div className="flex flex-col gap-1 pt-1">
                      <span
                        className={`text-[9px] sm:text-[10px] font-black uppercase tracking-wider ${
                          isSelected ? "text-[#FFB020]" : "text-[#7B5B14]"
                        }`}
                      >
                        Squad Composition:
                      </span>
                      <ul className="grid grid-cols-1 gap-1 text-[11px] sm:text-xs">
                        {tier.roles.map((role, idx) => (
                          <li
                            key={idx}
                            className={`flex items-center gap-1.5 ${
                              isSelected ? "text-slate-200" : "text-[#0B1B3A]"
                            }`}
                          >
                            <Check
                              className={`w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0 ${
                                isSelected ? "text-[#FFB020]" : "text-emerald-600"
                              }`}
                            />
                            <span className="font-semibold truncate">{role.title}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Bottom Action */}
                  <div className="pt-3 sm:pt-4 mt-2 sm:mt-3 border-t border-black/10 dark:border-white/15">
                    <button
                      type="button"
                      onClick={() => {
                        setSelectedSquad(tier.size as 3 | 5 | 7);
                        const comp = document.getElementById("comparison");
                        if (comp) comp.scrollIntoView({ behavior: "smooth" });
                      }}
                      className={`w-full h-[36px] sm:h-[40px] px-3 rounded-xl text-[11px] sm:text-xs font-black uppercase tracking-wider flex items-center justify-center gap-1.5 cursor-pointer shadow-sm transition-all ${
                        isSelected
                          ? "btn-luxury-gold btn-shimmer"
                          : "btn-luxury-navy btn-shimmer"
                      }`}
                    >
                      <span>Compare Roles In Matrix</span>
                      <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4.5 Interactive Squad Comparison Matrix (Compact Single-Window Architecture) */}
      <section id="comparison" className="py-4 sm:py-6 bg-[#EFECE3] border-t border-[#DED7CA] scroll-mt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-3">
          {/* Main Skeuomorphic Comparison Console */}
          <div className="bg-gradient-to-b from-[#FFFFFF] via-[#FAF8F5] to-[#F5F2EB] rounded-2xl sm:rounded-3xl p-3 sm:p-5 shadow-[0_20px_50px_-15px_rgba(11,27,58,0.12),inset_0_2px_0_rgba(255,255,255,1)] border-2 border-[#D8D0C0] border-b-[4px] border-b-[#C4B8A2] flex flex-col gap-2.5 sm:gap-3 relative overflow-hidden">
            {/* Specular Top Rim */}
            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#FFB020] to-transparent opacity-80" />

            {/* Header & Interactive 3D Squad Hardware Selector */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 pb-2.5 border-b border-[#E2DBD0]">
              <div>
                <div className="flex items-center gap-1.5 text-[10px] font-black uppercase tracking-wider text-[#9A5B00]">
                  <Sparkles className="w-3 h-3 text-[#FFB020]" />
                  Interactive Department Inspector
                </div>
                <h3 className="font-display text-base sm:text-xl font-black text-[#0B1B3A] tracking-tight">
                  Squad Role Comparison Matrix
                </h3>
                <p className="text-[10px] sm:text-[11px] text-[#5A6680] mt-0.5">
                  Select a squad tab to inspect role allocations, tools, and sprint deliverables.
                </p>
              </div>

              {/* 3D Tactile Physical Hardware Switcher */}
              <div className="flex items-center gap-1 p-1 rounded-xl bg-[#EAE4D7] border border-[#D5CDBC] shadow-[inset_0_2px_4px_rgba(0,0,0,0.1),0_1px_0_rgba(255,255,255,0.9)] self-start sm:self-auto shrink-0">
                <button
                  type="button"
                  onClick={() => setSelectedSquad(3)}
                  className={`h-7 sm:h-8 px-2.5 sm:px-3.5 rounded-lg text-[11px] sm:text-xs font-black transition-colors cursor-pointer flex items-center justify-center gap-1 border ${
                    selectedSquad === 3
                      ? "bg-[#0B1B3A] text-white shadow-[0_3px_10px_rgba(11,27,58,0.35)] border-[#0B1B3A]"
                      : "text-[#5A6680] hover:text-[#0B1B3A] hover:bg-white/60 border-transparent"
                  }`}
                >
                  <span>Starter (3)</span>
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedSquad(5)}
                  className={`h-7 sm:h-8 px-2.5 sm:px-3.5 rounded-lg text-[11px] sm:text-xs font-black transition-colors cursor-pointer flex items-center justify-center gap-1 border ${
                    selectedSquad === 5
                      ? "btn-luxury-gold btn-shimmer text-[#060B22] shadow-[0_3px_12px_rgba(255,176,32,0.45)] border-[#FFB020]"
                      : "text-[#5A6680] hover:text-[#0B1B3A] hover:bg-white/60 border-transparent"
                  }`}
                >
                  <Star className="w-2.5 h-2.5 sm:w-3 sm:h-3 fill-[#060B22]" />
                  <span>Growth (5) ★</span>
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedSquad(7)}
                  className={`h-7 sm:h-8 px-2.5 sm:px-3.5 rounded-lg text-[11px] sm:text-xs font-black transition-colors cursor-pointer flex items-center justify-center gap-1 border ${
                    selectedSquad === 7
                      ? "bg-[#0B1B3A] text-white shadow-[0_3px_10px_rgba(11,27,58,0.35)] border-[#0B1B3A]"
                      : "text-[#5A6680] hover:text-[#0B1B3A] hover:bg-white/60 border-transparent"
                  }`}
                >
                  <span>Scale (7)</span>
                </button>
              </div>
            </div>

            {/* Dynamic Benchmark Control Console (Compact on Mobile) */}
            <div className="p-2 sm:p-2.5 rounded-xl bg-gradient-to-r from-[#FAF8F2] via-[#F4EFE6] to-[#ECE6DA] border border-[#DDD5C7] shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_2px_8px_rgba(11,27,58,0.03)] grid grid-cols-1 md:grid-cols-12 gap-2 sm:gap-3 items-center">
              {/* Active Selection Details */}
              <div className="md:col-span-4 flex flex-col justify-center min-w-0">
                <div className="flex items-center gap-2">
                  <span className="text-[9px] font-black uppercase tracking-wider text-[#9A5B00] bg-[#FFB020]/20 px-1.5 py-0.2 rounded-full border border-[#FFB020]/40 shrink-0">
                    Active Inspection
                  </span>
                  <span className="text-[10px] sm:text-[11px] text-slate-500 font-bold shrink-0">
                    {activeSummary.monthlyHours}
                  </span>
                </div>
                <div className="flex items-baseline gap-1.5 mt-0.5 min-w-0">
                  <h4 className="font-display font-black text-sm sm:text-lg text-[#0B1B3A] leading-tight truncate">
                    {activeSummary.title}
                  </h4>
                </div>
                <p className="text-[10px] text-[#5A6680] truncate leading-tight mt-0.5" title={activeSummary.cadence}>
                  {activeSummary.cadence}
                </p>
              </div>

              {/* Benchmark Pricing & Savings */}
              <div className="md:col-span-5 flex flex-col justify-center sm:border-l sm:border-[#D5CDBC] sm:pl-3 min-w-0">
                <div className="flex items-baseline gap-2">
                  <span className="font-display font-black text-lg sm:text-2xl text-[#0B1B3A] tracking-tight shrink-0">
                    {activeSummary.monthlyEst}
                  </span>
                  <span className="text-[10px] sm:text-[11px] font-bold text-slate-400 line-through shrink-0">
                    {activeSummary.usAgencyEst} US
                  </span>
                  <span className="text-[9px] sm:text-[10px] font-extrabold text-emerald-800 bg-emerald-100 border border-emerald-300 px-1.5 py-0.2 rounded-full shrink-0">
                    Saves {activeSummary.savings}
                  </span>
                </div>
                <p className="text-[10px] text-[#7B5B14] font-medium leading-tight truncate mt-0.5" title={activeSummary.bestFor}>
                  {activeSummary.bestFor}
                </p>
              </div>

              {/* Direct CTA */}
              <div className="md:col-span-3 flex justify-start md:justify-end shrink-0">
                <a
                  href="/quote"
                  className="btn-luxury-gold btn-shimmer w-full md:w-auto h-[32px] sm:h-[34px] px-3 rounded-lg text-[11px] sm:text-xs font-black uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-sm whitespace-nowrap cursor-pointer"
                >
                  <span>Select {activeSummary.size}-Person Squad</span>
                  <ArrowRight className="w-3.5 h-3.5 stroke-[3]" />
                </a>
              </div>
            </div>

            {/* Quick Inspection Controls Bar */}
            {(() => {
              const activeRoles = ROLE_COMPARISON_MATRIX.filter((row) =>
                selectedSquad === 3
                  ? row.team3 === true
                  : selectedSquad === 5
                  ? row.team5 === true
                  : row.team7 === true
              );

              return (
                <>
                  <div className="flex flex-wrap items-center justify-between gap-2 text-[11px] py-0.5">
                    <span className="font-bold text-[#5A6680] flex items-center gap-1 text-[10px] sm:text-[11px]">
                      <Sliders className="w-3 h-3 text-[#9A5B00]" />
                      <span>{activeRoles.length} Dedicated Roles Included in {selectedSquad === 3 ? "Starter (3)" : selectedSquad === 5 ? "Growth (5)" : "Scale (7)"}</span>
                    </span>

                    {/* Mobile View Toggle: Active Roles vs Full Swipe Table */}
                    <div className="flex md:hidden items-center gap-1 bg-[#EAE4D7] p-0.5 rounded-lg border border-[#D5CDBC]">
                      <button
                        type="button"
                        onClick={() => setMobileComparisonMode("cards")}
                        className={cn(
                          "px-2 py-0.5 rounded text-[10px] font-black transition-colors",
                          mobileComparisonMode === "cards"
                            ? "bg-[#0B1B3A] text-white shadow-2xs"
                            : "text-[#5A6680] hover:text-[#0B1B3A]"
                        )}
                      >
                        Roles ({activeRoles.length})
                      </button>
                      <button
                        type="button"
                        onClick={() => setMobileComparisonMode("table")}
                        className={cn(
                          "px-2 py-0.5 rounded text-[10px] font-black transition-colors",
                          mobileComparisonMode === "table"
                            ? "bg-[#0B1B3A] text-white shadow-2xs"
                            : "text-[#5A6680] hover:text-[#0B1B3A]"
                        )}
                      >
                        Table (Swipe ⇄)
                      </button>
                    </div>

                    <button
                      type="button"
                      onClick={() => setShowAllDetails(!showAllDetails)}
                      className="text-[10px] sm:text-[11px] font-black text-[#9A5B00] hover:text-[#0B1B3A] flex items-center gap-1 cursor-pointer transition-colors bg-white px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-lg border border-[#DDD5C7] shadow-2xs"
                    >
                      <Eye className="w-3 h-3 text-[#FFB020]" />
                      <span>{showAllDetails ? "Collapse Specs" : "Expand All Specs"}</span>
                    </button>
                  </div>

                  {/* MOBILE ONLY: Exact Number of Role Cards Matching Header */}
                  <div className={cn("md:hidden", mobileComparisonMode === "cards" ? "block" : "hidden")}>
                    <div className={cn(
                      "grid gap-2",
                      activeRoles.length === 3 ? "grid-cols-1 sm:grid-cols-3" : "grid-cols-2"
                    )}>
                      {activeRoles.map((row) => {
                        const meta = ROLE_METADATA[row.role] || {
                          icon: Briefcase,
                          colorGrad: "from-[#4B5563] via-[#374151] to-[#1F2937]",
                          shadowColor: "rgba(0,0,0,0.2)",
                          category: "Core Discipline",
                          tools: ["Standard Industry Suite"],
                          deliverable: "Continuous campaign execution and sprint deliverables.",
                          hoursEst: "Dedicated hours",
                        };
                        const RoleIcon = meta.icon;
                        const isRowExpanded = showAllDetails || expandedRow === row.role;

                        return (
                          <div
                            key={row.role}
                            onClick={() => toggleRow(row.role)}
                            className="p-2.5 rounded-xl border-2 transition-all flex flex-col justify-between gap-2 shadow-2xs cursor-pointer bg-white border-[#DDD5C7] hover:border-[#FFB020]"
                          >
                            <div className="flex flex-col gap-1.5">
                              <div className="flex items-center justify-between">
                                <div
                                  style={{
                                    boxShadow: `0 3px 6px ${meta.shadowColor}, inset 0 1px 1px rgba(255,255,255,0.7)`,
                                  }}
                                  className={cn(
                                    "w-7 h-7 rounded-lg bg-gradient-to-b p-0.5 flex items-center justify-center shrink-0 border border-white/30 text-white",
                                    meta.colorGrad
                                  )}
                                >
                                  <RoleIcon className="w-3.5 h-3.5 text-white" />
                                </div>

                                <span className="px-1.5 py-0.2 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-300 text-[9px] font-black flex items-center gap-0.5 shadow-2xs">
                                  <Check className="w-2.5 h-2.5 stroke-[3]" />
                                  <span>Full-Time</span>
                                </span>
                              </div>

                              <div>
                                <span className="text-[8px] font-black uppercase tracking-wider text-[#9A5B00] block truncate">
                                  {meta.category}
                                </span>
                                <h5 className="font-display font-black text-xs text-[#0B1B3A] leading-tight line-clamp-2">
                                  {row.role}
                                </h5>
                              </div>

                              <p className="text-[10px] text-[#5A6680] leading-snug line-clamp-2">
                                {row.description}
                              </p>
                            </div>

                            {/* Expandable Technical Specs for Mobile */}
                            {isRowExpanded && (
                              <div className="pt-1.5 mt-1 border-t border-[#E8E2D5] flex flex-col gap-1 animate-in fade-in duration-150 text-[9px]">
                                <span className="font-black text-[#9A5B00] uppercase tracking-wider">
                                  Tools:
                                </span>
                                <div className="flex flex-wrap gap-1">
                                  {meta.tools.map((t) => (
                                    <span
                                      key={t}
                                      className="px-1 py-0.2 rounded bg-[#FAF8F4] border border-[#DDD5C7] font-bold text-[#0B1B3A]"
                                    >
                                      {t}
                                    </span>
                                  ))}
                                </div>
                                <span className="font-bold text-emerald-800 bg-emerald-50 px-1 py-0.5 rounded border border-emerald-200 mt-0.5 truncate">
                                  {meta.hoursEst}
                                </span>
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </>
              );
            })()}

            {/* DESKTOP (or Mobile Table Mode): Full Table Matrix */}
            <div className={cn(
              "overflow-x-auto rounded-xl border-2 border-[#DDD5C7] shadow-xs bg-white",
              mobileComparisonMode === "table" ? "block" : "hidden md:block"
            )}>
              <table className="w-full text-left border-collapse text-xs min-w-[500px] md:min-w-0 md:table-fixed">
                <thead>
                  <tr className="bg-[#FAF8F5] border-b-2 border-[#E2DBD0] text-[10px] font-black uppercase text-[#5A6680]">
                    <th className="py-2 px-3 w-[43%]">Role &amp; Specialized Responsibility</th>

                    {/* Starter (3) Header */}
                    <th
                      onClick={() => setSelectedSquad(3)}
                      className={cn(
                        "py-2 px-2 text-center cursor-pointer transition-colors w-[19%] border-x-2",
                        selectedSquad === 3
                          ? "bg-[#0B1B3A] text-white shadow-inner border-x-[#0B1B3A]"
                          : "border-x-transparent hover:bg-[#F2ECE1] text-[#0B1B3A]"
                      )}
                    >
                      <div className="flex flex-col items-center justify-center min-h-[42px]">
                        <span className="font-black text-xs">Starter (3)</span>
                        <span className={cn("text-[9px] font-bold", selectedSquad === 3 ? "text-emerald-300" : "text-[#7B5B14]")}>
                          $2,400/mo
                        </span>
                      </div>
                    </th>

                    {/* Growth (5) ★ Header */}
                    <th
                      onClick={() => setSelectedSquad(5)}
                      className={cn(
                        "py-2 px-2 text-center cursor-pointer transition-colors w-[19%] border-x-2",
                        selectedSquad === 5
                          ? "bg-gradient-to-b from-[#FFF2CC] via-[#FFE299] to-[#FFD566] text-[#060B22] border-x-[#FFB020] shadow-[inset_0_2px_4px_rgba(255,255,255,0.9),0_2px_8px_rgba(255,176,32,0.3)]"
                          : "border-x-transparent hover:bg-[#F2ECE1] text-[#0B1B3A]"
                      )}
                    >
                      <div className="flex flex-col items-center justify-center min-h-[42px]">
                        <div className="flex items-center gap-1 font-black text-xs text-[#060B22]">
                          <Star className="w-3 h-3 fill-[#060B22]" />
                          <span>Growth (5)</span>
                        </div>
                        <span className="text-[9px] font-extrabold text-[#7A4500]">
                          $3,999/mo · Star
                        </span>
                      </div>
                    </th>

                    {/* Scale (7) Header */}
                    <th
                      onClick={() => setSelectedSquad(7)}
                      className={cn(
                        "py-2 px-2 text-center cursor-pointer transition-colors w-[19%] border-x-2",
                        selectedSquad === 7
                          ? "bg-[#0B1B3A] text-white shadow-inner border-x-[#0B1B3A]"
                          : "border-x-transparent hover:bg-[#F2ECE1] text-[#0B1B3A]"
                      )}
                    >
                      <div className="flex flex-col items-center justify-center min-h-[42px]">
                        <span className="font-black text-xs">Scale (7)</span>
                        <span className={cn("text-[9px] font-bold", selectedSquad === 7 ? "text-emerald-300" : "text-[#7B5B14]")}>
                          $5,499/mo
                        </span>
                      </div>
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-[#EFEBE3]">
                  {ROLE_COMPARISON_MATRIX.map((row) => {
                    const meta = ROLE_METADATA[row.role] || {
                      icon: Briefcase,
                      colorGrad: "from-[#4B5563] via-[#374151] to-[#1F2937]",
                      shadowColor: "rgba(0,0,0,0.2)",
                      category: "Core Discipline",
                      tools: ["Standard Industry Suite"],
                      deliverable: "Continuous campaign execution and sprint deliverables.",
                      hoursEst: "Dedicated hours",
                    };
                    const RoleIcon = meta.icon;
                    const isRowExpanded = showAllDetails || expandedRow === row.role;

                    return (
                      <React.Fragment key={row.role}>
                        <tr
                          onClick={() => toggleRow(row.role)}
                          className="hover:bg-[#FAF8F5] transition-colors cursor-pointer group"
                        >
                          {/* Role Name + 3D Embossed Icon Capsule */}
                          <td className="py-1.5 sm:py-2 px-3 w-[43%]">
                            <div className="flex items-center gap-2.5">
                              {/* 3D Skeuomorphic Embossed Capsule */}
                              <div
                                style={{
                                  boxShadow: `0 3px 6px ${meta.shadowColor}, inset 0 1px 1px rgba(255,255,255,0.7), inset 0 -1px 2px rgba(0,0,0,0.4)`,
                                }}
                                className={cn(
                                  "w-7 h-7 rounded-lg bg-gradient-to-b p-0.5 flex items-center justify-center shrink-0 border border-white/30 text-white transition-transform group-hover:scale-105",
                                  meta.colorGrad
                                )}
                              >
                                <RoleIcon className="w-3.5 h-3.5 text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)]" />
                              </div>

                              {/* Title, Category & Description */}
                              <div className="flex flex-col min-w-0 flex-1">
                                <div className="flex items-center gap-1.5 flex-wrap">
                                  <span className="font-display font-black text-xs sm:text-[13px] text-[#0B1B3A] group-hover:text-[#9A5B00] transition-colors truncate">
                                    {row.role}
                                  </span>
                                  <span className="text-[8px] font-black uppercase tracking-wider text-[#9A5B00] bg-[#FFB020]/15 px-1 py-0.2 rounded border border-[#FFB020]/30 shrink-0">
                                    {meta.category}
                                  </span>
                                </div>
                                <span className="text-[10px] text-[#5A6680] leading-tight truncate block">
                                  {row.description}
                                </span>
                              </div>
                            </div>
                          </td>

                          {/* Column 1: Starter (3) */}
                          <td
                            className={cn(
                              "py-1.5 sm:py-2 px-2 text-center transition-colors border-x-2",
                              selectedSquad === 3 ? "bg-[#0B1B3A]/5 border-x-[#0B1B3A]" : "border-x-transparent"
                            )}
                          >
                            {row.team3 === true ? (
                              <div className="w-6 h-6 rounded-full bg-gradient-to-b from-[#34D399] via-[#059669] to-[#047857] border border-[#A7F3D0] shadow-[0_2px_5px_rgba(5,150,105,0.4),inset_0_1px_1px_rgba(255,255,255,0.8),inset_0_-1px_2px rgba(0,0,0,0.3)] flex items-center justify-center text-white mx-auto">
                                <Check className="w-3.5 h-3.5 stroke-[3]" />
                              </div>
                            ) : (
                              <span className="inline-block px-2 py-0.5 rounded-full bg-[#EAE5D9] border border-[#D5CDBC] text-[9px] font-black uppercase text-[#6B788E] shadow-[inset_0_1px_2px_rgba(0,0,0,0.06),0_1px_0_rgba(255,255,255,0.8)]">
                                Add-on
                              </span>
                            )}
                          </td>

                          {/* Column 2: Growth (5) ★ (Star Active Highlight) */}
                          <td
                            className={cn(
                              "py-1.5 sm:py-2 px-2 text-center transition-colors border-x-2",
                              selectedSquad === 5
                                ? "bg-gradient-to-b from-[#FFFDF7] via-[#FFF9EC] to-[#FFF4DE] border-x-[#FFB020] shadow-2xs"
                                : "border-x-transparent bg-[#FFB020]/5"
                            )}
                          >
                            {row.team5 === true ? (
                              <div className="w-6 h-6 rounded-full bg-gradient-to-b from-[#34D399] via-[#059669] to-[#047857] border border-[#A7F3D0] shadow-[0_2px_5px_rgba(5,150,105,0.4),inset_0_1px_1px_rgba(255,255,255,0.8),inset_0_-1px_2px rgba(0,0,0,0.3)] flex items-center justify-center text-white mx-auto">
                                <Check className="w-3.5 h-3.5 stroke-[3]" />
                              </div>
                            ) : (
                              <span className="inline-block px-2 py-0.5 rounded-full bg-[#EAE5D9] border border-[#D5CDBC] text-[9px] font-black uppercase text-[#6B788E] shadow-[inset_0_1px_2px_rgba(0,0,0,0.06),0_1px_0_rgba(255,255,255,0.8)]">
                                Add-on
                              </span>
                            )}
                          </td>

                          {/* Column 3: Scale (7) */}
                          <td
                            className={cn(
                              "py-1.5 sm:py-2 px-2 text-center transition-colors border-x-2",
                              selectedSquad === 7 ? "bg-[#0B1B3A]/5 border-x-[#0B1B3A]" : "border-x-transparent"
                            )}
                          >
                            {row.team7 === true ? (
                              <div className="w-6 h-6 rounded-full bg-gradient-to-b from-[#34D399] via-[#059669] to-[#047857] border border-[#A7F3D0] shadow-[0_2px_5px_rgba(5,150,105,0.4),inset_0_1px_1px_rgba(255,255,255,0.8),inset_0_-1px_2px rgba(0,0,0,0.3)] flex items-center justify-center text-white mx-auto">
                                <Check className="w-3.5 h-3.5 stroke-[3]" />
                              </div>
                            ) : (
                              <span className="inline-block px-2 py-0.5 rounded-full bg-[#EAE5D9] border border-[#D5CDBC] text-[9px] font-black uppercase text-[#6B788E] shadow-[inset_0_1px_2px_rgba(0,0,0,0.06),0_1px_0_rgba(255,255,255,0.8)]">
                                Add-on
                              </span>
                            )}
                          </td>
                        </tr>

                        {/* Interactive Expandable Drawer for Tools & Deliverables */}
                        {isRowExpanded && (
                          <tr className="bg-[#FAF8F2] border-b border-[#E8E2D5]">
                            <td colSpan={4} className="py-2 px-3 sm:px-4">
                              <div className="p-2 sm:p-2.5 rounded-lg bg-white border border-[#DDD5C7] shadow-2xs grid grid-cols-1 md:grid-cols-12 gap-2 text-xs">
                                <div className="md:col-span-5 flex flex-col gap-0.5">
                                  <span className="text-[9px] font-black uppercase tracking-wider text-[#9A5B00]">
                                    Verified Professional Tools:
                                  </span>
                                  <div className="flex flex-wrap gap-1 mt-0.5">
                                    {meta.tools.map((t) => (
                                      <span
                                        key={t}
                                        className="px-1.5 py-0.2 rounded bg-[#F4EFE6] border border-[#D5CDBC] text-[9px] font-extrabold text-[#0B1B3A]"
                                      >
                                        {t}
                                      </span>
                                    ))}
                                  </div>
                                </div>
                                <div className="md:col-span-7 flex flex-col gap-0.5 border-t md:border-t-0 md:border-l md:border-[#E8E2D5] pt-1.5 md:pt-0 md:pl-3">
                                  <div className="flex items-center justify-between">
                                    <span className="text-[9px] font-black uppercase tracking-wider text-[#0B1B3A]">
                                      Weekly Delivery Cadence:
                                    </span>
                                    <span className="text-[9px] font-bold text-emerald-700 bg-emerald-50 px-1.5 py-0.2 rounded border border-emerald-200">
                                      {meta.hoursEst}
                                    </span>
                                  </div>
                                  <p className="text-[10px] text-[#5A6680] leading-relaxed mt-0.5">
                                    {meta.deliverable}
                                  </p>
                                </div>
                              </div>
                            </td>
                          </tr>
                        )}
                      </React.Fragment>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {/* Bottom Institutional Assurance Banner */}
            <div className="p-2 sm:p-2.5 rounded-xl bg-[#F4EFE6] border border-[#DDD5C7] flex flex-wrap items-center justify-between gap-2 text-[10px] sm:text-[11px] text-[#0B1B3A]">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span className="font-bold">Zero Gig Subcontracting · 100% In-House Campus Staff</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#9A5B00] shrink-0" />
                <span className="font-bold">US, UK &amp; AU Shift Handover Guaranteed</span>
              </div>
              <a
                href="/quote"
                className="font-black text-[#9A5B00] hover:text-[#0B1B3A] underline flex items-center gap-1 cursor-pointer"
              >
                <span>Request Custom Role Combination</span>
                <ArrowRight className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

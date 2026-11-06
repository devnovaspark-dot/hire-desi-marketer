"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  ExternalLink,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  MapPin,
  TrendingUp,
  X,
  Lock,
  RotateCw,
  Zap,
  Smartphone,
  Laptop,
} from "lucide-react";
import { WEB_CASE_STUDIES, WebCaseStudy } from "@/data/web-design-services";
import { cn } from "@/lib/utils";

const CATEGORY_TABS = [
  { id: "all", label: "All Projects" },
  { id: "business", label: "Business Websites" },
  { id: "ecommerce", label: "E-Commerce" },
  { id: "redesign", label: "Corporate Redesign" },
  { id: "webapp", label: "Web Applications" },
];

export function WebDesignCaseStudies() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedStudy, setSelectedStudy] = useState<WebCaseStudy | null>(null);

  const filteredStudies =
    activeCategory === "all"
      ? WEB_CASE_STUDIES
      : WEB_CASE_STUDIES.filter((cs) => cs.category === activeCategory);

  return (
    <div className="space-y-6 sm:space-y-8">
      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        {CATEGORY_TABS.map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => setActiveCategory(tab.id)}
            className={cn(
              "px-4 py-2 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer select-none",
              activeCategory === tab.id
                ? "bg-[#060B22] text-[#FFB020] border border-[#FFB020]/40 shadow-sm"
                : "bg-white text-slate-600 border border-[#E2DBD0] hover:border-slate-400 hover:text-[#0B1B3A]"
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Grid of Elevated, Dual-Device Responsive Case Studies */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {filteredStudies.map((study) => (
          <div
            key={study.id}
            className="rounded-3xl bg-white border border-[#E2DBD0] overflow-hidden hover:border-[#FFB020] shadow-[0_4px_24px_-4px_rgba(6,11,34,0.05)] hover:shadow-[0_20px_40px_-8px_rgba(255,176,32,0.15)] transition-all duration-300 hover:-translate-y-1.5 flex flex-col group relative"
          >
            {/* Top Subtle Hover Accent Bar */}
            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-transparent to-transparent group-hover:via-[#FFB020] transition-all duration-300 z-30" />

            {/* Premium Dual-Device Presentation Frame (Desktop + Overlapping Mobile Frame) */}
            <div className="relative aspect-[16/10] bg-slate-950 overflow-hidden border-b border-[#E2DBD0]">
              {/* Realistic Safari / Chrome Browser Window Header */}
              <div className="absolute top-0 inset-x-0 h-6 sm:h-7 bg-[#060B22]/95 backdrop-blur-md z-20 flex items-center justify-between px-2 sm:px-3 text-[9px] sm:text-[10px] text-slate-300 border-b border-white/10">
                <div className="flex items-center gap-1 sm:gap-1.5 shrink-0">
                  <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-rose-500/80" />
                  <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-amber-500/80" />
                  <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-emerald-500/80" />
                </div>

                {/* Simulated URL Bar */}
                <div className="hidden xs:flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3 py-0.5 rounded-full bg-white/10 border border-white/10 text-[8px] sm:text-[9px] font-mono text-slate-300 max-w-[140px] sm:max-w-[240px] truncate">
                  <Lock className="w-2 h-2 sm:w-2.5 sm:h-2.5 text-emerald-400 shrink-0" />
                  <span className="truncate">
                    https://{study.clientName.toLowerCase().replace(/[^a-z0-9]/g, "")}.com
                  </span>
                </div>

                <div className="flex items-center gap-1 sm:gap-1.5 text-[8px] sm:text-[9px] text-[#FFB020] font-bold shrink-0">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Live Outcome</span>
                </div>
              </div>

              {/* Case Study Screenshot Image (Desktop View) */}
              <Image
                src={study.image}
                alt={study.imageAlt}
                fill
                className="object-cover object-top pt-7 group-hover:scale-103 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 600px"
              />

              {/* Gradient overlay for contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

              {/* Floating Overlapping Smartphone Mockup in Bottom Right (Proof of Mobile-First) */}
              <div className="absolute bottom-2.5 right-3 w-20 sm:w-24 aspect-[9/18] rounded-xl bg-slate-900 border-2 border-white/30 shadow-2xl overflow-hidden z-20 transform translate-y-1 group-hover:translate-y-0 transition-transform duration-300 pointer-events-none hidden sm:block">
                {/* Simulated phone dynamic island */}
                <div className="absolute top-1 inset-x-0 flex justify-center z-30">
                  <span className="w-6 h-1 rounded-full bg-black/80" />
                </div>
                {/* Mobile cropped screenshot */}
                <Image
                  src={study.image}
                  alt={`${study.clientName} mobile responsive preview`}
                  fill
                  className="object-cover object-top"
                  sizes="100px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-1 inset-x-0 text-center">
                  <span className="text-[7px] font-bold text-[#FFB020] uppercase tracking-wider bg-black/70 px-1.5 py-0.2 rounded-full border border-white/20">
                    Mobile
                  </span>
                </div>
              </div>

              {/* Floating Location & Metrics Badges (Bottom Left) */}
              <div className="absolute bottom-3 left-3 flex flex-wrap items-center gap-2 z-20 text-[10px]">
                <span className="px-2.5 py-1 rounded-lg bg-[#060B22]/90 backdrop-blur-md text-[#FFB020] font-bold border border-white/15 shadow-sm flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-[#FFB020]" />
                  <span>{study.location}</span>
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-black/80 backdrop-blur-md text-white font-medium border border-white/15 shadow-sm">
                  {study.industry}
                </span>
              </div>
            </div>

            {/* Content Body */}
            <div className="p-4 sm:p-7 flex-1 flex flex-col justify-between space-y-3.5 sm:space-y-4">
              <div className="space-y-2 sm:space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-black uppercase tracking-wider text-[#B87A00] bg-[#FFB020]/15 px-2.5 py-0.5 rounded-full border border-[#FFB020]/25">
                    {study.categoryLabel}
                  </span>
                  <span className="text-xs font-bold text-slate-400">
                    {study.projectType}
                  </span>
                </div>

                <div>
                  <h3 className="font-display font-black text-lg sm:text-xl text-[#0B1B3A] tracking-tight group-hover:text-[#B87A00] transition-colors leading-snug">
                    {study.clientName}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed mt-1 line-clamp-2">
                    {study.finalOutcome}
                  </p>
                </div>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1 sm:gap-1.5 pt-0.5 sm:pt-1">
                  {study.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 sm:px-2.5 py-0.5 rounded-md bg-slate-100 text-slate-700 text-[9px] sm:text-[10px] font-bold border border-slate-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Verified Metrics Ribbon with Gold Highlight */}
              <div className="space-y-2.5 sm:space-y-3 pt-2.5 sm:pt-3 border-t border-slate-100">
                <div className="grid grid-cols-3 gap-1 sm:gap-2 p-2 sm:p-3 rounded-xl sm:rounded-2xl bg-gradient-to-r from-[#060B22] via-[#0B1433] to-[#060B22] text-white text-center border border-[#FFB020]/20 shadow-xs">
                  {study.metrics.map((m, i) => (
                    <div key={i} className="space-y-0.5">
                      <div className="font-display font-black text-xs sm:text-sm text-[#FFB020]">
                        {m.value}
                      </div>
                      <div className="text-[8px] sm:text-[9px] text-slate-300 font-semibold uppercase tracking-wider truncate">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Bottom Actions */}
                <div className="flex items-center justify-between pt-1">
                  <a
                    href="#lead-form"
                    className="text-xs font-bold text-[#0B1B3A] group-hover:text-[#B87A00] inline-flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <span>Discuss Similar Project</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#FFB020] transition-transform group-hover:translate-x-1" />
                  </a>

                  <button
                    type="button"
                    onClick={() => setSelectedStudy(study)}
                    className="text-[11px] font-bold text-slate-600 hover:text-[#0B1B3A] underline underline-offset-4 cursor-pointer"
                  >
                    View Project Scope
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Interactive Modal Breakdown */}
      {selectedStudy && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-[#E2DBD0] shadow-2xl relative text-left">
            {/* Modal Header */}
            <div className="sticky top-0 bg-white/95 backdrop-blur-md p-6 border-b border-slate-100 flex items-center justify-between z-10">
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-[#B87A00] bg-[#FFB020]/15 px-2.5 py-0.5 rounded-full border border-[#FFB020]/25">
                  {selectedStudy.categoryLabel}
                </span>
                <h3 className="font-display font-black text-2xl text-[#0B1B3A] tracking-tight mt-1">
                  {selectedStudy.clientName}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedStudy(null)}
                className="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-600 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 space-y-6">
              {/* Visual Showcase */}
              <div className="relative aspect-[16/9] rounded-2xl overflow-hidden border border-[#E2DBD0]">
                <Image
                  src={selectedStudy.image}
                  alt={selectedStudy.imageAlt}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Metrics Ribbon */}
              <div className="grid grid-cols-3 gap-3 p-4 rounded-2xl bg-[#060B22] text-white text-center">
                {selectedStudy.metrics.map((m, i) => (
                  <div key={i}>
                    <div className="font-display font-black text-xl text-[#FFB020]">
                      {m.value}
                    </div>
                    <div className="text-[10px] text-slate-300 font-semibold uppercase tracking-wider">
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Requirement, Challenge & Solution */}
              <div className="space-y-4 text-xs leading-relaxed text-slate-700">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                  <strong className="text-slate-900 block text-xs">
                    Client Requirement &amp; Scope:
                  </strong>
                  <p>{selectedStudy.requirements}</p>
                </div>

                <div className="p-4 rounded-xl bg-rose-50/50 border border-rose-200/60 space-y-1">
                  <strong className="text-rose-950 block text-xs">
                    Key Challenges Overcome:
                  </strong>
                  <p className="text-rose-900/90">{selectedStudy.challenges}</p>
                </div>

                <div className="p-4 rounded-xl bg-emerald-50/50 border border-emerald-200/60 space-y-1">
                  <strong className="text-emerald-950 block text-xs">
                    Engineering Solution Delivered:
                  </strong>
                  <p className="text-emerald-900/90">{selectedStudy.solution}</p>
                </div>
              </div>

              {/* Tech Stack List */}
              <div className="space-y-2">
                <div className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                  Technologies Utilized:
                </div>
                <div className="flex flex-wrap gap-2">
                  {selectedStudy.technologies.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-lg bg-slate-100 text-slate-800 text-xs font-semibold border border-slate-200"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-6 bg-slate-50 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
              <span className="text-xs text-slate-500 font-medium">
                Want similar verified results for your business?
              </span>
              <a
                href="#lead-form"
                onClick={() => setSelectedStudy(null)}
                className="btn-luxury-gold px-6 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider shadow-md inline-flex items-center gap-1.5"
              >
                <span>Request Custom Scope</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

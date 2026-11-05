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
    <div className="space-y-10">
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

      {/* Grid of Compact, Aesthetic Case Studies */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {filteredStudies.map((study) => (
          <div
            key={study.id}
            className="rounded-3xl bg-white border border-[#E2DBD0] overflow-hidden hover:border-[#FFB020]/60 shadow-[0_4px_18px_-4px_rgba(6,11,34,0.04)] hover:shadow-[0_14px_30px_-6px_rgba(6,11,34,0.09)] transition-all duration-300 hover:-translate-y-1 flex flex-col group"
          >
            {/* Compact Browser Mockup Frame */}
            <div className="relative aspect-[16/9] bg-slate-900 overflow-hidden">
              {/* Browser Window Header Bar */}
              <div className="absolute top-0 inset-x-0 h-6 bg-black/60 backdrop-blur-md z-20 flex items-center justify-between px-3 text-[10px] text-slate-300 border-b border-white/10">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-rose-500/80" />
                  <span className="w-2 h-2 rounded-full bg-amber-500/80" />
                  <span className="w-2 h-2 rounded-full bg-emerald-500/80" />
                </div>
                <span className="font-mono text-[9px] text-slate-400 truncate max-w-[200px]">
                  {study.clientName.toLowerCase().replace(/[^a-z0-9]/g, "")}.com
                </span>
                <span className="text-[9px] text-[#FFB020] font-semibold">
                  {study.industry}
                </span>
              </div>

              {/* Case Study Image */}
              <Image
                src={study.image}
                alt={study.imageAlt}
                fill
                className="object-cover pt-6 group-hover:scale-102 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 600px"
              />

              {/* Badges on Image */}
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between z-20 text-[10px]">
                <span className="px-2.5 py-1 rounded-lg bg-[#060B22]/90 backdrop-blur-md text-[#FFB020] font-bold border border-white/10 shadow-sm flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-[#FFB020]" />
                  <span>{study.location}</span>
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-black/80 backdrop-blur-md text-white font-medium border border-white/10">
                  {study.projectType}
                </span>
              </div>
            </div>

            {/* Compact Content Body */}
            <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
              <div className="space-y-2.5">
                <div>
                  <h3 className="font-display font-black text-lg sm:text-xl text-[#0B1B3A] tracking-tight group-hover:text-[#B87A00] transition-colors">
                    {study.clientName}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed mt-1 line-clamp-2">
                    {study.finalOutcome}
                  </p>
                </div>

                {/* Compact Tech Badges */}
                <div className="flex flex-wrap gap-1.5 pt-0.5">
                  {study.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded-md bg-slate-50 text-slate-600 text-[10px] font-bold border border-slate-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Compact Metrics Strip */}
              <div className="space-y-3 pt-2 border-t border-slate-100">
                <div className="grid grid-cols-3 gap-2 p-2.5 rounded-xl bg-[#060B22] text-white text-center">
                  {study.metrics.map((m, i) => (
                    <div key={i} className="space-y-0.5">
                      <div className="font-display font-black text-xs sm:text-sm text-[#FFB020]">
                        {m.value}
                      </div>
                      <div className="text-[9px] text-slate-400 font-semibold uppercase tracking-wider truncate">
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
                    <span>Discuss Similar Scope</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#FFB020]" />
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

      {/* Case Study Full Details Modal */}
      {selectedStudy && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 space-y-5 border border-[#E2DBD0] shadow-2xl relative max-h-[90vh] overflow-y-auto">
            <button
              type="button"
              onClick={() => setSelectedStudy(null)}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center cursor-pointer transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="space-y-1 pr-8">
              <span className="text-[10px] font-black uppercase tracking-wider text-[#B87A00]">
                {selectedStudy.categoryLabel} · {selectedStudy.location}
              </span>
              <h3 className="font-display font-black text-2xl text-[#0B1B3A]">
                {selectedStudy.clientName}
              </h3>
              <p className="text-xs font-bold text-slate-500">
                {selectedStudy.projectType}
              </p>
            </div>

            <div className="space-y-3 text-xs sm:text-sm text-slate-700 leading-relaxed">
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <span className="font-bold text-[#0B1B3A]">Project Challenge: </span>
                {selectedStudy.challenges}
              </div>
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <span className="font-bold text-[#0B1B3A]">Our Solution: </span>
                {selectedStudy.solution}
              </div>
              <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900">
                <span className="font-bold">Final Outcome: </span>
                {selectedStudy.finalOutcome}
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2 p-3 rounded-2xl bg-[#060B22] text-white text-center">
              {selectedStudy.metrics.map((m, i) => (
                <div key={i} className="space-y-0.5">
                  <div className="font-display font-black text-base text-[#FFB020]">
                    {m.value}
                  </div>
                  <div className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider">
                    {m.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-2 flex justify-end">
              <a
                href="#lead-form"
                onClick={() => setSelectedStudy(null)}
                className="btn-luxury-gold btn-shimmer px-6 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider inline-flex items-center gap-1.5 shadow-md"
              >
                <span>Discuss Your Website Scope</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

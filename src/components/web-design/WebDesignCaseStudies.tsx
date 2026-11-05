"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  ExternalLink,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Layers,
  Code,
  TrendingUp,
  MapPin,
  Clock,
  Briefcase,
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
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5">
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

      {/* Grid of Case Studies */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
        {filteredStudies.map((study) => (
          <div
            key={study.id}
            className="rounded-3xl bg-white border border-[#E2DBD0] overflow-hidden skeuo-card-light transition-all duration-300 hover:-translate-y-1 hover:shadow-xl flex flex-col"
          >
            {/* Visual Header / Mockup Preview */}
            <div className="relative aspect-[16/10] bg-slate-100 overflow-hidden border-b border-[#E2DBD0]">
              <Image
                src={study.image}
                alt={study.imageAlt}
                fill
                className="object-cover group-hover:scale-103 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 600px"
              />
              <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-full bg-[#060B22]/90 backdrop-blur-md text-[#FFB020] text-[10px] font-black uppercase tracking-wider border border-[#FFB020]/30 shadow-sm">
                  {study.categoryLabel}
                </span>
              </div>
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs backdrop-blur-md bg-black/60 px-3.5 py-1.5 rounded-xl border border-white/10">
                <span className="flex items-center gap-1.5 font-bold">
                  <MapPin className="w-3.5 h-3.5 text-[#FFB020]" />
                  <span>{study.location}</span>
                </span>
                <span className="font-semibold text-slate-300">
                  {study.industry}
                </span>
              </div>
            </div>

            {/* Content Body */}
            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div>
                  <h3 className="font-display font-black text-xl sm:text-2xl text-[#0B1B3A] tracking-tight">
                    {study.clientName}
                  </h3>
                  <p className="text-xs font-semibold text-[#B87A00] mt-0.5">
                    {study.projectType}
                  </p>
                </div>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5">
                  {study.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-0.5 rounded-md bg-slate-100 text-slate-700 text-[11px] font-bold border border-slate-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Challenge & Solution Summary */}
                <div className="space-y-2.5 text-xs sm:text-[13px] leading-relaxed text-slate-600 border-t border-slate-100 pt-3">
                  <div>
                    <strong className="text-slate-800">Challenge: </strong>
                    <span>{study.challenges}</span>
                  </div>
                  <div>
                    <strong className="text-slate-800">Solution: </strong>
                    <span>{study.solution}</span>
                  </div>
                </div>
              </div>

              {/* Verified Metrics Bar & Trigger */}
              <div className="space-y-4 pt-2 border-t border-slate-100">
                <div className="grid grid-cols-3 gap-2 p-3 rounded-2xl bg-[#060B22] text-white text-center">
                  {study.metrics.map((m, i) => (
                    <div key={i} className="space-y-0.5">
                      <div className="font-display font-black text-sm sm:text-base text-[#FFB020]">
                        {m.value}
                      </div>
                      <div className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <a
                    href="#lead-form"
                    className="text-xs font-bold text-[#0B1B3A] hover:text-[#B87A00] inline-flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <span>Request Similar Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                  <button
                    type="button"
                    onClick={() => setSelectedStudy(study)}
                    className="px-3.5 py-1.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-colors cursor-pointer"
                  >
                    View Full Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Case Study Details Modal */}
      {selectedStudy && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-md animate-in fade-in duration-200"
        >
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 border border-[#E2DBD0] shadow-2xl space-y-6 relative">
            <button
              onClick={() => setSelectedStudy(null)}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center font-bold text-sm transition-colors cursor-pointer"
            >
              ✕
            </button>

            <div className="space-y-2">
              <span className="px-3 py-1 rounded-full bg-[#060B22] text-[#FFB020] text-[10px] font-black uppercase tracking-wider">
                {selectedStudy.categoryLabel}
              </span>
              <h3 className="font-display font-black text-2xl text-[#0B1B3A]">
                {selectedStudy.clientName}
              </h3>
              <p className="text-xs text-slate-500 font-semibold">
                {selectedStudy.industry} · {selectedStudy.location}
              </p>
            </div>

            <div className="relative aspect-[16/9] rounded-2xl overflow-hidden border border-[#E2DBD0]">
              <Image
                src={selectedStudy.image}
                alt={selectedStudy.imageAlt}
                fill
                className="object-cover"
              />
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
              <div>
                <h4 className="font-bold text-[#0B1B3A] mb-1">Project Requirements</h4>
                <p>{selectedStudy.requirements}</p>
              </div>

              <div>
                <h4 className="font-bold text-[#0B1B3A] mb-1">Core Challenge</h4>
                <p>{selectedStudy.challenges}</p>
              </div>

              <div>
                <h4 className="font-bold text-[#0B1B3A] mb-1">Our Solution</h4>
                <p>{selectedStudy.solution}</p>
              </div>

              <div>
                <h4 className="font-bold text-[#0B1B3A] mb-1">Final Outcome &amp; Measured Growth</h4>
                <p>{selectedStudy.finalOutcome}</p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-[#060B22] text-white flex flex-wrap items-center justify-between gap-4">
              <div>
                <div className="text-xs text-slate-400">Ready to build something like this?</div>
                <div className="font-bold text-sm text-white">Get your custom scope and roadmap</div>
              </div>
              <a
                href="#lead-form"
                onClick={() => setSelectedStudy(null)}
                className="btn-luxury-gold btn-shimmer px-4 py-2 rounded-xl text-xs font-black uppercase tracking-wider inline-flex items-center gap-1.5 shadow-md cursor-pointer"
              >
                <span>Get Free Consultation</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}


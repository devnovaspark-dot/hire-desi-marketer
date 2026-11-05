"use client";

import React, { useState } from "react";
import {
  Building,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import { WEB_INDUSTRIES, WebIndustryItem } from "@/data/web-design-services";
import { cn } from "@/lib/utils";

export function WebDesignIndustriesGrid() {
  const [showAll, setShowAll] = useState<boolean>(false);

  const displayedIndustries = showAll
    ? WEB_INDUSTRIES
    : WEB_INDUSTRIES.slice(0, 6);

  return (
    <div className="space-y-10">
      {/* Industries Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayedIndustries.map((ind, idx) => (
          <div
            key={ind.id}
            className="p-6 rounded-3xl bg-gradient-to-b from-white via-white to-[#FAF8F5] border border-[#E2DBD0] hover:border-[#FFB020]/60 shadow-[0_4px_18px_-4px_rgba(6,11,34,0.05)] hover:shadow-[0_12px_28px_-6px_rgba(6,11,34,0.1)] hover:-translate-y-1 transition-all duration-300 space-y-4 flex flex-col justify-between group relative overflow-hidden"
          >
            {/* Ambient Corner Glow on Hover */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#FFB020]/5 rounded-bl-full pointer-events-none group-hover:bg-[#FFB020]/15 transition-colors duration-300" />

            <div className="space-y-3 relative z-10">
              <div className="flex items-center justify-between">
                <span className="w-9 h-9 rounded-xl bg-[#060B22] text-[#FFB020] flex items-center justify-center font-black text-xs shadow-xs group-hover:scale-105 group-hover:bg-[#FFB020] group-hover:text-[#060B22] transition-all duration-300">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <span className="text-[10px] font-black uppercase tracking-wider text-slate-500 bg-slate-100 px-2.5 py-0.5 rounded-full border border-slate-200">
                  Sector Experience
                </span>
              </div>

              <div>
                <h3 className="font-display font-black text-lg text-[#0B1B3A] group-hover:text-[#B87A00] transition-colors">
                  {ind.name}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mt-1.5">
                  {ind.description}
                </p>
              </div>

              <div className="pt-3 border-t border-[#E2DBD0] space-y-1.5">
                <div className="text-[11px] font-bold text-slate-700">
                  Popular Deliverables:
                </div>
                {ind.popularSolutions.map((sol, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 text-[11px] text-slate-700 font-medium"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FFB020] shrink-0" />
                    <span>{sol}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-3 border-t border-[#E2DBD0] relative z-10">
              <a
                href="#lead-form"
                className="text-xs font-bold text-[#0B1B3A] group-hover:text-[#B87A00] inline-flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <span>Request {ind.name} Blueprint</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* View More / View Less Toggle */}
      <div className="flex items-center justify-center pt-2">
        <button
          type="button"
          onClick={() => setShowAll(!showAll)}
          className="btn-luxury-navy px-8 py-3.5 rounded-full text-xs font-black uppercase tracking-wider inline-flex items-center gap-2.5 shadow-md hover:shadow-lg transition-all cursor-pointer group"
        >
          <span>
            {showAll
              ? "View Less Industries"
              : `View All ${WEB_INDUSTRIES.length} Industries We Serve`}
          </span>
          {showAll ? (
            <ChevronUp className="w-4 h-4 text-[#FFB020] group-hover:-translate-y-0.5 transition-transform" />
          ) : (
            <ChevronDown className="w-4 h-4 text-[#FFB020] group-hover:translate-y-0.5 transition-transform" />
          )}
        </button>
      </div>
    </div>
  );
}

"use client";

import React, { useState } from "react";
import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SERVICE_CATEGORIES } from "@/data/services";
import { Check, ChevronDown, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

export function Services() {
  const [expandedCards, setExpandedCards] = useState<Record<string, boolean>>({});

  const toggleCard = (id: string) => {
    setExpandedCards((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section id="stack" className="py-10 lg:py-14 bg-[#040716] text-white relative overflow-hidden scroll-mt-28">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 -right-40 w-96 h-96 bg-[#FFB020]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-6 sm:gap-8 relative z-10">
        {/* Section Heading */}
        <SectionHeading
          kicker="Expertise &amp; 2026 Tech Stack"
          title={
            <>
              Every channel.{" "}
              <span className="text-[#FFB020]">The tools that matter now.</span>
            </>
          }
          subtitle="Our Indian marketing specialists are certified and experienced across the complete modern growth stack."
          theme="dark"
          align="center"
        />

        {/* 6 Core Service Pillars Grid — Perfectly Aligned Compact Cards with Equal Heights */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-6 items-stretch">
          {SERVICE_CATEGORIES.map((category) => {
            const isExpanded = !!expandedCards[category.id];

            return (
              <div
                key={category.id}
                role="button"
                tabIndex={0}
                aria-expanded={isExpanded}
                onClick={() => toggleCard(category.id)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    toggleCard(category.id);
                  }
                }}
                className={cn(
                  "skeuo-card-dark rounded-2xl sm:rounded-3xl p-4 sm:p-6 h-full flex flex-col justify-between border transition-all duration-300 relative group cursor-pointer text-left select-none",
                  isExpanded
                    ? "border-[#FFB020]/60 shadow-[0_16px_36px_rgba(255,176,32,0.12)] bg-[#070D22]"
                    : "border-white/10 hover:border-[#FFB020]/40 hover:shadow-[0_12px_28px_rgba(0,0,0,0.5)]"
                )}
              >
                <div className="flex flex-col gap-3 sm:gap-3.5 flex-1">
                  {/* Title & Subtitle — Standardized Min-Height for Flawless Row Alignment */}
                  <div className="min-h-[44px] sm:min-h-[52px] flex flex-col justify-end">
                    <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-widest text-[#FFB020] block mb-0.5">
                      {category.subtitle}
                    </span>
                    <h3 className="font-display text-sm sm:text-lg font-black text-white leading-tight">
                      {category.title}
                    </h3>
                  </div>

                  {/* Description — Standardized Height so Tool Strips Align Exactly */}
                  <p className="text-[11px] sm:text-xs text-slate-300 leading-snug min-h-[42px] sm:min-h-[48px] line-clamp-3">
                    {category.description}
                  </p>

                  {/* Tool Icons Strip — Kept visible by default, aligned at bottom of upper block */}
                  <div className="flex flex-col gap-1.5 pt-2.5 border-t border-white/10 mt-auto">
                    <span className="text-[8px] sm:text-[10px] font-black uppercase tracking-wider text-slate-400">
                      Tools Deployed:
                    </span>
                    <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 min-h-[34px] sm:min-h-[40px]">
                      {category.tools.map((tool) => (
                        <div
                          key={tool.name}
                          title={tool.name}
                          onClick={(e) => e.stopPropagation()}
                          className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-white/[0.09] hover:bg-white/[0.18] border border-white/15 hover:border-[#FFB020]/80 shadow-[0_2px_6px_rgba(0,0,0,0.3),inset_0_1px_1px_rgba(255,255,255,0.15)] flex items-center justify-center p-1.5 hover:scale-110 transition-all cursor-pointer relative group/tool shrink-0"
                        >
                          <Image
                            src={tool.icon}
                            alt={tool.name}
                            width={20}
                            height={20}
                            className="w-5 h-5 object-contain drop-shadow-xs"
                          />
                          <div className="absolute -bottom-7 left-1/2 -translate-x-1/2 bg-[#040716] border border-white/20 text-white text-[9px] font-bold px-1.5 py-0.5 rounded opacity-0 group-hover/tool:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-20 shadow-xl">
                            {tool.name}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Expandable Deliverables Section — Hidden by default, expands on click */}
                  <div
                    className={cn(
                      "grid transition-all duration-300 ease-in-out",
                      isExpanded
                        ? "grid-rows-[1fr] opacity-100 pt-2.5 border-t border-white/10"
                        : "grid-rows-[0fr] opacity-0 overflow-hidden"
                    )}
                  >
                    <div className="overflow-hidden">
                      <span className="text-[8px] sm:text-[10px] font-black uppercase tracking-wider text-slate-400 block mb-1.5">
                        Deliverables:
                      </span>
                      <ul className="flex flex-col gap-1.5 text-[10px] sm:text-xs text-slate-200">
                        {category.deliverables.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-1.5">
                            <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                            <span className="leading-tight">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* View More / Deliverables Action Strip — Perfectly Pinned Baseline */}
                <div className="pt-2.5 mt-3 border-t border-white/10 flex items-center justify-between text-[#FFB020] text-[10px] sm:text-xs font-bold group-hover:text-amber-300 transition-colors">
                  <span className="flex items-center gap-1.5">
                    <span>{isExpanded ? "Hide Details" : "View More"}</span>
                    <span className="text-[9px] px-1.5 py-0.2 rounded-full bg-white/10 text-slate-300 font-mono">
                      {category.deliverables.length} Deliverables
                    </span>
                  </span>
                  <div
                    className={cn(
                      "w-6 h-6 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 group-hover:border-[#FFB020]/50 group-hover:text-[#FFB020] transition-all shrink-0",
                      isExpanded && "bg-[#FFB020]/20 text-[#FFB020] border-[#FFB020]/40"
                    )}
                  >
                    <ChevronDown
                      className={cn(
                        "w-3.5 h-3.5 transition-transform duration-300",
                        isExpanded && "rotate-180"
                      )}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

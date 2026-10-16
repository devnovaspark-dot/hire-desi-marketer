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

  const expandAll = () => {
    const allExpanded = SERVICE_CATEGORIES.every((c) => expandedCards[c.id]);
    if (allExpanded) {
      setExpandedCards({});
    } else {
      const next: Record<string, boolean> = {};
      SERVICE_CATEGORIES.forEach((c) => {
        next[c.id] = true;
      });
      setExpandedCards(next);
    }
  };

  const areAllExpanded = SERVICE_CATEGORIES.length > 0 && SERVICE_CATEGORIES.every((c) => expandedCards[c.id]);

  return (
    <section id="stack" className="py-10 lg:py-14 bg-[#040716] text-white relative overflow-hidden scroll-mt-28">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 -right-40 w-96 h-96 bg-[#FFB020]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-6 sm:gap-8 relative z-10">
        {/* Section Heading with Expand All Quick Action */}
        <div className="flex flex-col items-center gap-3">
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

          {/* Quick toggle bar */}
          <button
            type="button"
            onClick={expandAll}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white text-[11px] sm:text-xs font-bold transition-all cursor-pointer shadow-2xs"
          >
            <Sparkles className="w-3 h-3 text-[#FFB020]" />
            <span>{areAllExpanded ? "Collapse All Cards" : "Expand All Deliverables"}</span>
          </button>
        </div>

        {/* 6 Core Service Pillars Grid — Compact Cards with Click-to-Expand Deliverables */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-6 items-start">
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
                  "skeuo-card-dark rounded-2xl sm:rounded-3xl p-3 sm:p-5 flex flex-col justify-between border transition-all duration-300 relative group cursor-pointer text-left select-none",
                  isExpanded
                    ? "border-[#FFB020]/60 shadow-[0_16px_36px_rgba(255,176,32,0.12)] bg-[#070D22]"
                    : "border-white/10 hover:border-[#FFB020]/40 hover:shadow-[0_12px_28px_rgba(0,0,0,0.5)]"
                )}
              >
                <div className="flex flex-col gap-2.5 sm:gap-3.5">
                  {/* Title & Subtitle */}
                  <div>
                    <span className="text-[8px] sm:text-[10px] font-black uppercase tracking-widest text-[#FFB020] block mb-0.5 sm:mb-1">
                      {category.subtitle}
                    </span>
                    <h3 className="font-display text-xs sm:text-lg font-black text-white leading-tight">
                      {category.title}
                    </h3>
                  </div>

                  <p className="text-[10px] sm:text-xs text-slate-300 leading-snug line-clamp-2 sm:line-clamp-none">
                    {category.description}
                  </p>

                  {/* Tool Icons Strip — Kept visible by default */}
                  <div className="flex flex-col gap-1.5 pt-2 border-t border-white/10">
                    <span className="text-[8px] sm:text-[10px] font-black uppercase tracking-wider text-slate-400">
                      Tools Deployed:
                    </span>
                    <div className="flex flex-wrap items-center gap-1 sm:gap-1.5">
                      {category.tools.map((tool) => (
                        <div
                          key={tool.name}
                          title={tool.name}
                          onClick={(e) => e.stopPropagation()}
                          className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg sm:rounded-xl bg-white/5 border border-white/10 flex items-center justify-center p-1 sm:p-1.5 hover:border-[#FFB020]/60 hover:scale-110 transition-all cursor-pointer relative group/tool"
                        >
                          <Image
                            src={tool.icon}
                            alt={tool.name}
                            width={14}
                            height={14}
                            className="w-3.5 h-3.5 sm:w-4 sm:h-4 object-contain"
                          />
                          <div className="absolute -bottom-7 left-1/2 -translate-x-1/2 bg-[#040716] border border-white/20 text-white text-[9px] font-bold px-1.5 py-0.2 rounded opacity-0 group-hover/tool:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-20 shadow-xl">
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
                        ? "grid-rows-[1fr] opacity-100 pt-2 sm:pt-2.5 border-t border-white/10"
                        : "grid-rows-[0fr] opacity-0 overflow-hidden"
                    )}
                  >
                    <div className="overflow-hidden">
                      <span className="text-[8px] sm:text-[10px] font-black uppercase tracking-wider text-slate-400 block mb-1.5">
                        Deliverables:
                      </span>
                      <ul className="flex flex-col gap-1.5 text-[9px] sm:text-xs text-slate-200">
                        {category.deliverables.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-1.5">
                            <Check className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                            <span className="leading-tight">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* View More / Deliverables Action Strip */}
                <div className="pt-2 sm:pt-2.5 mt-2.5 sm:mt-3 border-t border-white/10 flex items-center justify-between text-[#FFB020] text-[9px] sm:text-xs font-bold group-hover:text-amber-300 transition-colors">
                  <span className="flex items-center gap-1 sm:gap-1.5">
                    <span>{isExpanded ? "Hide Details" : "View More"}</span>
                    <span className="text-[8px] sm:text-[9px] px-1.5 py-0.2 rounded-full bg-white/10 text-slate-300 font-mono">
                      {category.deliverables.length} Deliverables
                    </span>
                  </span>
                  <div
                    className={cn(
                      "w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 group-hover:border-[#FFB020]/50 group-hover:text-[#FFB020] transition-all shrink-0",
                      isExpanded && "bg-[#FFB020]/20 text-[#FFB020] border-[#FFB020]/40"
                    )}
                  >
                    <ChevronDown
                      className={cn(
                        "w-3 h-3 sm:w-3.5 sm:h-3.5 transition-transform duration-300",
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

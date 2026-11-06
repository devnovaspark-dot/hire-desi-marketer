"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle, Plus, Minus, ArrowRight } from "lucide-react";
import { WebFaqItem } from "@/data/web-design-services";
import { cn } from "@/lib/utils";

interface WebDesignFaqAccordionProps {
  faqs: WebFaqItem[];
  title?: string;
  subtitle?: string;
}

export function WebDesignFaqAccordion({
  faqs,
  title = "Frequently Asked Questions",
  subtitle = "Everything you need to know about our web design, development, pricing, and execution models.",
}: WebDesignFaqAccordionProps) {
  // All FAQs closed by default as requested by user
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <div className="space-y-6 sm:space-y-8 max-w-4xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFB020]/20 text-[#B87A00] text-xs font-black uppercase tracking-wider border border-[#FFB020]/30 shadow-xs">
          <HelpCircle className="w-3.5 h-3.5 text-[#FFB020]" />
          <span>Clear &amp; Transparent Answers</span>
        </div>
        <h2 className="font-display font-black text-2xl sm:text-3xl lg:text-4xl text-[#0B1B3A] tracking-tight">
          {title}
        </h2>
        {subtitle && (
          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>

      {/* Modern Individual Accordion Cards (Elevated Luxury Style) */}
      <div className="space-y-3.5">
        {faqs.map((faq, idx) => {
          const isOpen = openIdx === idx;
          return (
            <div
              key={idx}
              className={cn(
                "rounded-2xl transition-all duration-300 overflow-hidden border",
                isOpen
                  ? "bg-white border-[#FFB020] shadow-md ring-2 ring-[#FFB020]/20"
                  : "bg-white/90 border-[#E2DBD0] hover:border-[#FFB020]/50 hover:bg-white shadow-2xs hover:shadow-xs"
              )}
            >
              <button
                type="button"
                onClick={() => toggle(idx)}
                className="w-full p-3.5 sm:p-6 flex items-center justify-between gap-3 sm:gap-4 text-left font-display font-bold text-xs sm:text-base lg:text-lg text-[#0B1B3A] hover:text-[#B87A00] transition-colors cursor-pointer select-none group"
                aria-expanded={isOpen}
              >
                <div className="flex items-center gap-2.5 sm:gap-3.5 min-w-0">
                  <span
                    className={cn(
                      "w-6 h-6 sm:w-7 sm:h-7 rounded-lg text-[10px] sm:text-xs font-black flex items-center justify-center transition-colors shrink-0",
                      isOpen
                        ? "bg-[#060B22] text-[#FFB020]"
                        : "bg-slate-100 text-slate-500 group-hover:bg-[#FFB020]/15 group-hover:text-[#B87A00]"
                    )}
                  >
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <span className="leading-snug">{faq.question}</span>
                </div>

                <span
                  className={cn(
                    "w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center shrink-0 border transition-all duration-300",
                    isOpen
                      ? "bg-[#060B22] text-[#FFB020] border-[#060B22] rotate-180 shadow-xs"
                      : "bg-slate-50 text-slate-500 border-[#E2DBD0] group-hover:bg-[#FFB020]/20 group-hover:text-[#060B22] group-hover:border-[#FFB020]/40"
                  )}
                >
                  <ChevronDown className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-300" />
                </span>
              </button>

              {isOpen && (
                <div className="px-3.5 sm:px-6 pb-4 sm:pb-6 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 animate-fadeIn">
                  <div className="bg-[#FAF8F5] rounded-xl p-3 sm:p-5 border border-[#E2DBD0]/60 text-slate-700 leading-relaxed text-xs sm:text-sm">
                    {faq.answer}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Helpful Bottom Prompt */}
      <div className="text-center pt-2">
        <p className="text-xs text-slate-500">
          Have a question that isn&apos;t answered here?{" "}
          <a
            href="#lead-form"
            className="font-bold text-[#0B1B3A] hover:text-[#B87A00] underline underline-offset-4 transition-colors"
          >
            Ask our lead architects directly &rarr;
          </a>
        </p>
      </div>
    </div>
  );
}

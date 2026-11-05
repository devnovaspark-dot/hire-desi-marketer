"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
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
  const [openIdx, setOpenIdx] = useState<number | null>(0); // First FAQ opened by default for immediate preview

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <div className="space-y-8">
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

      <div className="max-w-4xl mx-auto divide-y divide-[#E2DBD0] bg-white rounded-3xl p-6 sm:p-10 border border-[#E2DBD0] shadow-sm">
        {faqs.map((faq, idx) => {
          const isOpen = openIdx === idx;
          return (
            <div key={idx} className="py-4 sm:py-5 first:pt-0 last:pb-0">
              <button
                type="button"
                onClick={() => toggle(idx)}
                className="w-full flex items-center justify-between gap-4 text-left font-display font-bold text-base sm:text-lg text-[#0B1B3A] hover:text-[#B87A00] transition-colors cursor-pointer select-none group"
              >
                <span className="leading-snug">{faq.question}</span>
                <span
                  className={cn(
                    "w-8 h-8 rounded-full flex items-center justify-center shrink-0 border transition-all duration-200",
                    isOpen
                      ? "bg-[#060B22] text-[#FFB020] border-[#060B22] rotate-180 shadow-sm"
                      : "bg-slate-50 text-slate-500 border-[#E2DBD0] group-hover:bg-slate-100"
                  )}
                >
                  <ChevronDown className="w-4 h-4" />
                </span>
              </button>
              {isOpen && (
                <div className="mt-3.5 text-slate-600 text-xs sm:text-sm leading-relaxed pr-6 animate-in fade-in duration-200">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}


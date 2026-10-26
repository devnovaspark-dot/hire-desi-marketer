"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { FaqItem } from "@/types/blog";
import { cn } from "@/lib/utils";

interface ArticleFaqAccordionProps {
  faqs: FaqItem[];
  title?: string;
  subtitle?: string;
}

export function ArticleFaqAccordion({
  faqs,
  title = "Frequently Asked Questions",
  subtitle = "Quick answers to help you evaluate and execute this growth strategy.",
}: ArticleFaqAccordionProps) {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  if (!faqs || faqs.length === 0) return null;

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <div className="my-10 p-6 sm:p-8 rounded-3xl bg-white border border-[#E2DBD0] shadow-sm space-y-6">
      <div className="space-y-1">
        <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#B87A00]">
          <HelpCircle className="w-4 h-4 text-[#FFB020]" />
          <span>Frequently Asked Questions</span>
        </div>
        <h3 className="font-display font-black text-2xl sm:text-3xl text-[#0B1B3A] tracking-tight">
          {title}
        </h3>
        {subtitle && <p className="text-slate-600 text-xs sm:text-sm">{subtitle}</p>}
      </div>

      <div className="divide-y divide-slate-200">
        {faqs.map((faq, idx) => {
          const isOpen = openIdx === idx;
          return (
            <div key={idx} className="py-4">
              <button
                type="button"
                onClick={() => toggle(idx)}
                className="w-full flex items-center justify-between gap-4 text-left font-display font-bold text-base sm:text-lg text-[#0B1B3A] hover:text-[#B87A00] transition-colors cursor-pointer select-none"
              >
                <span>{faq.question}</span>
                <span
                  className={cn(
                    "w-7 h-7 rounded-full flex items-center justify-center shrink-0 border transition-transform duration-200",
                    isOpen
                      ? "bg-[#060B22] text-[#FFB020] border-[#060B22] rotate-180"
                      : "bg-slate-100 text-slate-500 border-slate-200"
                  )}
                >
                  <ChevronDown className="w-4 h-4" />
                </span>
              </button>
              {isOpen && (
                <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed pr-6 animate-fadeIn">
                  {faq.answer}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

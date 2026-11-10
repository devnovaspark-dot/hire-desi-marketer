"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ChevronDown,
  HelpCircle,
  Sparkles,
  ArrowRight,
  MessageSquare,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";
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
  // All FAQs closed by default
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <div className="max-w-7xl mx-auto text-left">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* ============================================================ */}
        {/* LEFT COLUMN: Sticky Editorial Headline & Architecture Concierge */}
        {/* ============================================================ */}
        <div className="lg:col-span-5 lg:sticky lg:top-24 space-y-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#060B22] text-[#FFB020] text-xs font-black uppercase tracking-wider border border-[#FFB020]/30 shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#FFB020]" />
              <span>08 · Clear &amp; Transparent Answers</span>
            </div>

            <h2 className="font-display font-black text-2xl sm:text-3xl lg:text-4xl text-[#0B1B3A] tracking-tight leading-tight">
              {title}
            </h2>

            {subtitle && (
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
                {subtitle}
              </p>
            )}
          </div>

          {/* Concierge Consultation Card */}
          <div className="p-6 rounded-2xl bg-gradient-to-br from-[#060B22] to-[#0B1B3A] text-white border border-[#060B22]/30 shadow-xl space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#FFB020]">
              <MessageSquare className="w-4 h-4 text-[#FFB020]" />
              <span>HAVE AN UNANSWERED QUESTION?</span>
            </div>

            <p className="text-xs sm:text-[13px] text-slate-300 leading-relaxed">
              Every project has unique technical nuances. Discuss your tech stack, third-party integrations, or scoping requirements directly with our Principal Architects.
            </p>

            <div className="space-y-2 pt-2 border-t border-white/10 text-[11px] text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Zero junior sales reps · Direct engineer call</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>NDA signed prior to confidential scoping</span>
              </div>
            </div>

            <Link
              href="/get-a-quote"
              className="btn-luxury-gold btn-shimmer w-full py-3 px-4 rounded-xl text-xs font-black uppercase tracking-wider inline-flex items-center justify-center gap-2 cursor-pointer shadow-md"
            >
              <span>Ask Our Lead Architects</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* ============================================================ */}
        {/* RIGHT COLUMN: Clean Editorial Accordion (Card-Free Style)    */}
        {/* ============================================================ */}
        <div className="lg:col-span-7 divide-y divide-[#E2DBD0] border-y border-[#E2DBD0]">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className={cn(
                  "transition-colors duration-200",
                  isOpen ? "bg-white/80" : "hover:bg-white/40"
                )}
              >
                <button
                  suppressHydrationWarning
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full py-5 px-3 sm:px-4 flex items-start justify-between gap-4 text-left cursor-pointer select-none group"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-start gap-3.5 min-w-0">
                    <span
                      className={cn(
                        "font-mono text-xs font-bold pt-0.5 transition-colors shrink-0",
                        isOpen ? "text-[#B87A00]" : "text-slate-400 group-hover:text-[#0B1B3A]"
                      )}
                    >
                      {String(idx + 1).padStart(2, "0")}
                    </span>

                    <span
                      className={cn(
                        "font-display font-black text-sm sm:text-base lg:text-lg transition-colors leading-snug",
                        isOpen ? "text-[#B87A00]" : "text-[#0B1B3A] group-hover:text-[#B87A00]"
                      )}
                    >
                      {faq.question}
                    </span>
                  </div>

                  <span
                    className={cn(
                      "w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center shrink-0 border transition-all duration-300 mt-0.5",
                      isOpen
                        ? "bg-[#060B22] text-[#FFB020] border-[#060B22] rotate-180 shadow-xs"
                        : "bg-white text-slate-500 border-[#E2DBD0] group-hover:bg-[#FFB020]/15 group-hover:text-[#060B22] group-hover:border-[#FFB020]/40"
                    )}
                  >
                    <ChevronDown className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-300" />
                  </span>
                </button>

                {isOpen && (
                  <div className="px-3 sm:px-4 pb-6 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-l-2 border-[#FFB020] ml-3 sm:ml-4 mb-4 bg-white/60 p-4 rounded-r-xl">
                    <div className="text-slate-700 leading-relaxed">
                      {faq.answer}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

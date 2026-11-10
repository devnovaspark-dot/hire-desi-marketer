"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ChevronDown,
  Sparkles,
  ArrowRight,
  MessageSquare,
  CheckCircle2,
  HelpCircle,
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
    <div className="max-w-7xl mx-auto text-left select-none">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* ============================================================ */}
        {/* LEFT COLUMN: Sticky Editorial Headline & Architecture Concierge */}
        {/* ============================================================ */}
        <div className="lg:col-span-5 lg:sticky lg:top-24 space-y-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#060B22] text-[#FFB020] text-xs font-black uppercase tracking-wider border border-[#FFB020]/30 shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#FFB020]" />
              <span>Clear &amp; Transparent Answers</span>
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
          <div className="p-6 rounded-3xl bg-gradient-to-br from-[#060B22] to-[#0A163B] text-white border border-white/10 shadow-xl space-y-4 relative overflow-hidden">
            {/* Ambient Corner Glow */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-[#FFB020]/15 rounded-full blur-2xl pointer-events-none" />

            <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#FFB020] relative z-10">
              <MessageSquare className="w-4 h-4 text-[#FFB020]" />
              <span>HAVE AN UNANSWERED QUESTION?</span>
            </div>

            <p className="text-xs sm:text-[13px] text-slate-300 leading-relaxed relative z-10">
              Every project has unique technical nuances. Discuss your tech stack, third-party integrations, or scoping requirements directly with our Principal Architects.
            </p>

            <div className="space-y-2 pt-2 border-t border-white/10 text-[11.5px] text-slate-300 relative z-10">
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
              className="btn-luxury-gold btn-shimmer w-full py-3.5 px-4 rounded-xl text-xs font-black uppercase tracking-wider inline-flex items-center justify-center gap-2 cursor-pointer shadow-lg relative z-10 group"
            >
              <span>Ask Our Lead Architects</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* ============================================================ */}
        {/* RIGHT COLUMN: Smooth Animated Accordion (Single Clean Number)*/}
        {/* ============================================================ */}
        <div className="lg:col-span-7 space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            // Clean question text defensively removing any legacy leading "1. ", "2. ", etc.
            const cleanQuestion = faq.question.replace(/^\d+\.\s*/, "");
            const formattedNumber = String(idx + 1).padStart(2, "0");

            return (
              <div
                key={idx}
                className={cn(
                  "rounded-2xl transition-all duration-300 border overflow-hidden",
                  isOpen
                    ? "bg-white border-[#FFB020] shadow-md ring-1 ring-[#FFB020]/30"
                    : "bg-white/80 border-[#E2DBD0] hover:border-slate-400 hover:bg-white shadow-2xs"
                )}
              >
                {/* Accordion Header / Trigger Button */}
                <button
                  suppressHydrationWarning
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full p-4 sm:p-5 flex items-start justify-between gap-4 text-left cursor-pointer select-none group"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-start gap-3.5 min-w-0">
                    {/* Single, Sleek Numbering Badge (NO DOUBLE NUMBERS) */}
                    <span
                      className={cn(
                        "w-7 h-7 sm:w-8 sm:h-8 rounded-xl font-mono text-xs font-black flex items-center justify-center transition-all duration-300 shrink-0 mt-0.5",
                        isOpen
                          ? "bg-[#060B22] text-[#FFB020] shadow-sm scale-105"
                          : "bg-[#FAF8F5] text-slate-500 border border-[#E2DBD0] group-hover:bg-[#FFB020]/15 group-hover:text-[#B87A00] group-hover:border-[#FFB020]/30"
                      )}
                    >
                      {formattedNumber}
                    </span>

                    {/* Question Headline (Clean, Single Numbering Only) */}
                    <span
                      className={cn(
                        "font-display font-black text-sm sm:text-base lg:text-lg transition-colors leading-snug pt-0.5",
                        isOpen ? "text-[#060B22]" : "text-[#0B1B3A] group-hover:text-[#B87A00]"
                      )}
                    >
                      {cleanQuestion}
                    </span>
                  </div>

                  {/* Smooth Rotating Chevron Icon */}
                  <span
                    className={cn(
                      "w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center shrink-0 border transition-all duration-300 mt-0.5",
                      isOpen
                        ? "bg-[#060B22] text-[#FFB020] border-[#060B22] rotate-180 shadow-xs"
                        : "bg-[#FAF8F5] text-slate-500 border-[#E2DBD0] group-hover:bg-[#FFB020]/15 group-hover:text-[#060B22] group-hover:border-[#FFB020]/40"
                    )}
                  >
                    <ChevronDown className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-300" />
                  </span>
                </button>

                {/* ======================================================== */}
                {/* BUTTERY-SMOOTH OPENING & CLOSING ANIMATION CONTAINER    */}
                {/* Hardware-accelerated CSS Grid transition without snapping */}
                {/* ======================================================== */}
                <div
                  className={cn(
                    "grid transition-all duration-300 ease-in-out",
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  )}
                >
                  <div className="overflow-hidden">
                    <div className="px-4 sm:px-5 pb-5 pt-0">
                      <div className="p-4 sm:p-5 rounded-xl bg-[#FAF8F5] border-l-3 border-l-[#FFB020] border border-[#E2DBD0]/60 text-slate-700 leading-relaxed text-xs sm:text-sm space-y-2">
                        <p>{faq.answer}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

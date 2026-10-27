"use client";

import React, { useState } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FAQS } from "@/data/faq";
import { Plus, Minus, MessageSquare, ArrowRight, Sparkles, HelpCircle, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";

export function FAQ() {
  // Closed by default so questions are never open automatically
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-8 lg:py-12 bg-[#F5F2EB] relative border-t border-[#DED7CA]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-6">
        <SectionHeading
          kicker="Got Questions?"
          title={
            <>
              Frequently Asked{" "}
              <span className="text-[#9A5B00]">Questions</span>
            </>
          }
          subtitle="Learn about our billing models, packages, delivery times, dedicated marketing teams, and work across international time zones."
          align="center"
        />

        {/* 3D Skeuomorphic Tactile Accordion Deck */}
        <div className="flex flex-col gap-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            const qNum = String(idx + 1).padStart(2, "0");

            return (
              <div
                key={faq.question}
                className={cn(
                  "rounded-2xl overflow-hidden transition-[border-color,box-shadow,background-color] duration-200 relative border-2 border-b-[4px]",
                  isOpen
                    ? "bg-gradient-to-b from-[#FFFFFF] via-[#FFFDF9] to-[#FAF6ED] border-[#FFB020] border-b-[#C47900] shadow-[0_12px_28px_rgba(255,176,32,0.18),inset_0_2px_0_rgba(255,255,255,1)]"
                    : "bg-gradient-to-b from-[#FFFFFF] via-[#FAF9F5] to-[#F3EFE7] border-[#DDD6C8] border-b-[#C4B9A4] shadow-[0_4px_12px_rgba(11,27,58,0.05),inset_0_1px_0_rgba(255,255,255,1)] hover:border-[#B8AE9C]"
                )}
              >
                <button
                  type="button"
                  id={`faq-btn-${idx}`}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${idx}`}
                  onClick={() => toggle(idx)}
                  className="w-full flex items-center justify-between p-4 sm:p-5 text-left gap-4 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFB020]"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    {/* Physical Skeuomorphic Q Number Badge */}
                    <span
                      className={cn(
                        "font-display font-black text-xs px-2.5 py-1 rounded-lg shrink-0 border",
                        isOpen
                          ? "bg-[#0B1B3A] text-[#FFB020] border-[#0B1B3A] shadow-xs"
                          : "skeuo-recessed-light text-[#7B5B14] border-[#D5CEBF]"
                      )}
                    >
                      Q{qNum}
                    </span>
                    <span className="font-display font-black text-base sm:text-lg text-[#0B1B3A] leading-snug">
                      {faq.question}
                    </span>
                  </div>

                  {/* 3D Tactile Toggle Knob (Fixed Dimensions, Zero Shift) */}
                  <div
                    className={cn(
                      "w-8 h-8 rounded-full flex items-center justify-center shrink-0 border border-b-2 transition-colors duration-150",
                      isOpen
                        ? "btn-luxury-gold text-[#060B22] shadow-md border-[#FFD166] border-b-[#A86300]"
                        : "bg-gradient-to-b from-white to-[#EAE4D7] text-[#0B1B3A] border-[#D5CEBF] border-b-[#B8AE9C] shadow-xs hover:border-[#0B1B3A]"
                    )}
                  >
                    {isOpen ? (
                      <Minus className="w-4 h-4 stroke-[3]" />
                    ) : (
                      <Plus className="w-4 h-4 stroke-[3]" />
                    )}
                  </div>
                </button>

                {/* Recessed Answer Well with zero-shift grid expansion */}
                <div
                  id={`faq-answer-${idx}`}
                  role="region"
                  aria-labelledby={`faq-btn-${idx}`}
                  className={cn(
                    "grid transition-[grid-template-rows,opacity] duration-300 ease-out",
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0 pointer-events-none"
                  )}
                >
                  <div className="overflow-hidden">
                    <div className="px-4 sm:px-5 pb-4 sm:pb-5">
                      <div className="bg-[#F5F2EB] rounded-xl p-3.5 sm:p-4 border border-[#DDD5C7] shadow-[inset_0_2px_4px_rgba(11,27,58,0.06)] text-xs sm:text-sm text-[#334155] leading-relaxed">
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Skeuomorphic Direct Founder Support Console */}
        <div className="bg-gradient-to-b from-[#FFFFFF] via-[#FAF9F5] to-[#F2EDE2] rounded-3xl p-5 sm:p-6 border border-[#DDD6C8] border-b-[4px] border-b-[#C4B9A4] shadow-[0_12px_28px_rgba(11,27,58,0.08)] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-b from-[#FFE4A0] to-[#FFB020] text-[#060B22] flex items-center justify-center shrink-0 font-bold shadow-md border border-[#FFEAB5]">
              <MessageSquare className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2 justify-center sm:justify-start">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-[10px] font-black uppercase tracking-wider text-emerald-800">
                  Direct Access to Leadership
                </span>
              </div>
              <h4 className="font-display font-black text-base sm:text-lg text-[#0B1B3A]">
                Need Answers Beyond the FAQs?
              </h4>
              <p className="text-xs text-[#5A6680] mt-0.5">
                Connect directly with our Bhubaneswar founders via Slack or email for clear, first-hand answers.
              </p>
            </div>
          </div>
          <a
            href="/quote"
            className="btn-luxury-navy btn-shimmer px-5 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider inline-flex items-center gap-1.5 shrink-0 cursor-pointer shadow-md"
          >
            <span>Ask Us Directly</span>
            <ArrowRight className="w-3.5 h-3.5 stroke-[3]" />
          </a>
        </div>
      </div>
    </section>
  );
}

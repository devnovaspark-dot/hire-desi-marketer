"use client";

import React, { useState } from "react";
import {
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  Sparkles,
  ShieldCheck,
  Clock,
  Layers,
  Code2,
  FileCheck,
  Rocket,
  Wrench,
  Search,
  PenTool,
} from "lucide-react";
import { PROCESS_STEPS, WebProcessStep } from "@/data/web-design-services";
import { cn } from "@/lib/utils";

const STEP_ICONS = [
  <Search key={1} className="w-5 h-5" />,
  <Layers key={2} className="w-5 h-5" />,
  <PenTool key={3} className="w-5 h-5" />,
  <Code2 key={4} className="w-5 h-5" />,
  <FileCheck key={5} className="w-5 h-5" />,
  <Rocket key={6} className="w-5 h-5" />,
  <Wrench key={7} className="w-5 h-5" />,
];

export function WebDesignProcessStream() {
  const [activeStepIdx, setActiveStepIdx] = useState<number>(0);

  const activeStep = PROCESS_STEPS[activeStepIdx];

  const handlePrev = () => {
    setActiveStepIdx((prev) => (prev > 0 ? prev - 1 : PROCESS_STEPS.length - 1));
  };

  const handleNext = () => {
    setActiveStepIdx((prev) => (prev < PROCESS_STEPS.length - 1 ? prev + 1 : 0));
  };

  return (
    <div className="space-y-8 max-w-5xl mx-auto">
      {/* 1. Interactive Step Progress Ribbon (Desktop) */}
      <div className="hidden lg:block relative pb-4">
        {/* Background Track Line */}
        <div className="absolute top-6 left-6 right-6 h-1 bg-[#E2DBD0] rounded-full z-0" />
        
        {/* Active Progress Fill */}
        <div
          className="absolute top-6 left-6 h-1 bg-gradient-to-r from-[#060B22] via-[#FFB020] to-[#E68A00] rounded-full z-0 transition-all duration-500 ease-out"
          style={{
            width: `${(activeStepIdx / (PROCESS_STEPS.length - 1)) * 92}%`,
          }}
        />

        <div className="relative z-10 flex items-center justify-between">
          {PROCESS_STEPS.map((step, idx) => {
            const isActive = activeStepIdx === idx;
            const isCompleted = activeStepIdx > idx;

            return (
              <button
                key={step.step}
                type="button"
                onClick={() => setActiveStepIdx(idx)}
                className="group flex flex-col items-center focus:outline-none cursor-pointer"
              >
                <div
                  className={cn(
                    "w-12 h-12 rounded-2xl flex items-center justify-center font-black text-sm transition-all duration-300 select-none shadow-md",
                    isActive
                      ? "bg-[#060B22] text-[#FFB020] scale-110 ring-4 ring-[#FFB020]/30 border-2 border-[#FFB020]"
                      : isCompleted
                      ? "bg-emerald-500 text-white border-2 border-emerald-400"
                      : "bg-white text-slate-500 border border-[#E2DBD0] group-hover:border-slate-400 group-hover:text-[#0B1B3A]"
                  )}
                >
                  {isCompleted ? (
                    <CheckCircle2 className="w-5 h-5 text-white" />
                  ) : (
                    <span>0{step.step}</span>
                  )}
                </div>

                <div className="mt-2 text-center max-w-[100px]">
                  <span
                    className={cn(
                      "block text-[11px] font-bold transition-colors leading-tight",
                      isActive
                        ? "text-[#0B1B3A]"
                        : "text-slate-500 group-hover:text-slate-800"
                    )}
                  >
                    {step.title.replace(/^Step \d+:\s*/, "").split("&")[0].trim()}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* 2. Mobile Step Selector Pill Bar */}
      <div className="lg:hidden flex items-center justify-between overflow-x-auto gap-2 pb-2 scrollbar-none">
        {PROCESS_STEPS.map((step, idx) => {
          const isActive = activeStepIdx === idx;
          return (
            <button
              key={step.step}
              type="button"
              onClick={() => setActiveStepIdx(idx)}
              className={cn(
                "px-3 py-1.5 rounded-full text-xs font-bold whitespace-nowrap shrink-0 transition-all cursor-pointer",
                isActive
                  ? "bg-[#060B22] text-[#FFB020] border border-[#FFB020]/40 shadow-sm"
                  : "bg-white text-slate-600 border border-[#E2DBD0]"
              )}
            >
              Phase 0{step.step}
            </button>
          );
        })}
      </div>

      {/* 3. Active Step Command Center (Card-Free Fluid Architecture) */}
      <div className="rounded-3xl bg-white border border-[#E2DBD0] shadow-xl overflow-hidden relative">
        {/* Top Accent Status Bar */}
        <div className="h-1.5 w-full bg-gradient-to-r from-[#060B22] via-[#FFB020] to-[#E68A00]" />

        <div className="p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Details (7 cols) */}
          <div className="lg:col-span-7 space-y-5 text-left">
            <div className="flex flex-wrap items-center gap-2">
              <span className="w-9 h-9 rounded-xl bg-[#060B22] text-[#FFB020] font-black text-sm flex items-center justify-center shadow-xs">
                {STEP_ICONS[activeStepIdx] || `0${activeStep.step}`}
              </span>
              <span className="text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full bg-[#FFB020]/20 text-[#B87A00] border border-[#FFB020]/30">
                Phase 0{activeStep.step} · {activeStep.tag}
              </span>
            </div>

            <div>
              <h3 className="font-display font-black text-2xl sm:text-3xl text-[#0B1B3A] tracking-tight">
                {activeStep.title}
              </h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed mt-2.5">
                {activeStep.description}
              </p>
            </div>

            {/* Stepper Navigation Buttons */}
            <div className="pt-2 flex items-center gap-3">
              <button
                type="button"
                onClick={handlePrev}
                className="px-4 py-2 rounded-xl border border-[#E2DBD0] hover:border-slate-400 bg-slate-50 hover:bg-slate-100 text-slate-700 text-xs font-bold transition-colors inline-flex items-center gap-1.5 cursor-pointer"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Previous Phase</span>
              </button>

              <button
                type="button"
                onClick={handleNext}
                className="btn-luxury-navy px-5 py-2 rounded-xl text-xs font-black uppercase tracking-wider inline-flex items-center gap-1.5 shadow-sm cursor-pointer"
              >
                <span>
                  Next Phase (0{activeStepIdx < 6 ? activeStepIdx + 2 : 1})
                </span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Right Verified Deliverables Panel (5 cols) */}
          <div className="lg:col-span-5 rounded-2xl bg-[#060B22] text-white p-6 sm:p-7 space-y-4 shadow-xl border border-white/10">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#FFB020]" />
                <span className="text-xs font-black uppercase tracking-wider text-[#FFB020]">
                  Verified Deliverables
                </span>
              </div>
              <span className="text-[10px] text-slate-400 font-semibold">
                Milestone 0{activeStep.step}
              </span>
            </div>

            <ul className="space-y-3">
              {activeStep.deliverables.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2.5 text-xs text-slate-200 leading-snug"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-400">
              <span>Client Review &amp; Signoff</span>
              <span className="text-emerald-400 font-bold">100% Required</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";

import React, { useState } from "react";
import { cn, formatCurrency } from "@/lib/utils";
import { ArrowRight, Check, Clock, Sliders, ShieldCheck } from "lucide-react";

export function CostCalculator() {
  const [hoursPerDay, setHoursPerDay] = useState(6);
  const workingDays = 22;
  const ratePerHour = 8;

  const monthlyHours = hoursPerDay * workingDays;
  const monthlyCost = monthlyHours * ratePerHour;

  const presets = [
    { label: "2h Adhoc", hours: 2 },
    { label: "4h Half-Day", hours: 4 },
    { label: "6h Growth", hours: 6 },
    { label: "8h Full-Time", hours: 8 },
    { label: "10h Sprint", hours: 10 },
  ];

  const coveredTasks = [
    "Set up Google and Meta advertising and pacing bids.",
    "Run technical SEO audits, boost site speed, and build local citations.",
    "Plan social media posts and monitor community response.",
    "Design and tune high-converting landing pages.",
  ];

  // Dynamic progress percentage for smooth butter track fill
  const progressPercent = ((hoursPerDay - 1) / 9) * 100;

  return (
    <div
      className="skeuo-card-dark specular-shine rounded-2xl sm:rounded-3xl p-4 sm:p-8 lg:p-9 relative overflow-hidden border border-white/15 shadow-2xl"
    >
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-8 lg:gap-10 items-stretch">
        {/* Left Side: Hardware Slider Console */}
        <div className="lg:col-span-7 flex flex-col justify-between h-full gap-3.5 sm:gap-5 text-left">
          <div className="flex items-center gap-2 sm:gap-2.5 flex-wrap">
            <span className="btn-luxury-gold px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-[11px] font-black uppercase tracking-wider inline-flex items-center gap-1.5 shadow-sm">
              <Sliders className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
              <span>Interactive Calculator</span>
            </span>
            <span className="text-[11px] sm:text-xs text-slate-300 font-semibold">
              Model 01 · Flat $8/Hour Rate
            </span>
          </div>

          <div>
            <h3 className="font-display text-xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
              Customize Your Daily Sprint Hours
            </h3>
            <p className="text-[11px] sm:text-sm text-slate-300 mt-1 leading-snug sm:leading-relaxed">
              Adjust the slider or choose a preset to see how your dedicated specialist’s hours can fit your needs.
            </p>
          </div>

          {/* Buttery Smooth Slider Bay */}
          <div className="skeuo-recessed-dark p-3.5 sm:p-5 rounded-xl sm:rounded-2xl flex flex-col gap-3 sm:gap-4 border border-black/60 shadow-inner">
            <div className="flex items-center justify-between pb-2 border-b border-white/5">
              <label
                htmlFor="hours-slider"
                className="text-[11px] sm:text-sm font-bold uppercase tracking-wider text-slate-200 flex items-center gap-1.5 sm:gap-2 whitespace-nowrap"
              >
                <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#FFB020] shrink-0" />
                <span>Specialist Bandwidth</span>
              </label>

              {/* Digital Nixie Readout - Fixed dimensions to prevent layout jitter */}
              <div className="flex items-baseline justify-center min-w-[85px] sm:min-w-[115px] gap-1 sm:gap-1.5 bg-[#030612] px-3 sm:px-4 py-1 sm:py-1.5 rounded-lg sm:rounded-xl border border-amber-500/40 shadow-[0_0_15px_rgba(255,176,32,0.15)]">
                <span className="font-display font-black text-2xl sm:text-4xl text-[#FFB020] tracking-tight tabular-nums">
                  {hoursPerDay}
                </span>
                <span className="text-[10px] sm:text-xs text-[#FFC74D] font-bold uppercase whitespace-nowrap">
                  hrs / day
                </span>
              </div>
            </div>

            {/* Range Slider with Dynamic Buttery Fill */}
            <div className="py-1 sm:py-2 flex flex-col gap-2">
              <input
                id="hours-slider"
                type="range"
                min="1"
                max="10"
                step="1"
                value={hoursPerDay}
                onChange={(e) => setHoursPerDay(parseInt(e.target.value, 10))}
                aria-label="Hours per day"
                style={{
                  background: `linear-gradient(to right, #FFB020 0%, #FFB020 ${progressPercent}%, rgba(255, 255, 255, 0.12) ${progressPercent}%, rgba(255, 255, 255, 0.12) 100%)`,
                }}
                className="w-full h-2.5 sm:h-3 rounded-full cursor-ew-resize appearance-none outline-none transition-all duration-150"
              />

              {/* Quick Tap Presets - Locked height and zero layout shift */}
              <div className="grid grid-cols-5 gap-1 sm:gap-1.5 pt-1">
                {presets.map((preset) => {
                  const isSelected = hoursPerDay === preset.hours;
                  return (
                    <button
                      key={preset.hours}
                      type="button"
                      onClick={() => setHoursPerDay(preset.hours)}
                      className={cn(
                        "h-7 sm:h-8.5 px-0.5 sm:px-1 rounded-lg text-[9px] sm:text-[11px] font-bold text-center cursor-pointer transition-colors flex items-center justify-center select-none box-border",
                        isSelected
                          ? "bg-gradient-to-b from-[#FFE28A] via-[#FFB020] to-[#E68A00] text-[#060B22] font-black border border-[#FFD166] shadow-[0_2px_8px_rgba(255,176,32,0.4)]"
                          : "bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10 hover:text-white"
                      )}
                    >
                      <span className="truncate">{preset.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Clean Assumptions Bar */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-[11px] sm:text-xs text-slate-300">
            <span className="inline-flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full bg-white/5 border border-white/10">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-emerald-400 animate-pulse" />
              22 business days/month
            </span>
            <span className="inline-flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full bg-white/5 border border-white/10">
              <ShieldCheck className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-emerald-400" />
              Billed purely on verified time logs
            </span>
          </div>
        </div>

        {/* Right Side: Calculated Output Box */}
        <div className="lg:col-span-5 skeuo-recessed-dark p-4 sm:p-6 rounded-xl sm:rounded-2xl flex flex-col justify-between h-full gap-3.5 sm:gap-4 border border-white/10 relative text-left">
          <div className="flex items-center justify-between pb-2.5 sm:pb-3 border-b border-white/10">
            <span className="text-[11px] sm:text-xs font-black uppercase tracking-wider text-slate-300 whitespace-nowrap">
              Estimated Monthly Total
            </span>
            <span className="btn-luxury-gold px-2 sm:px-2.5 py-0.5 rounded-full text-[9px] sm:text-[10px] font-black uppercase tracking-wider text-[#060B22] whitespace-nowrap">
              $8/hr Flat
            </span>
          </div>

          <div className="grid grid-cols-2 gap-2.5 sm:gap-3.5 items-center">
            <div className="bg-[#030612] p-2.5 sm:p-3 rounded-lg sm:rounded-xl border border-white/10">
              <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-slate-400 block whitespace-nowrap">
                Total Bandwidth
              </span>
              <div className="font-display text-xl sm:text-3xl font-black text-white mt-0.5 tabular-nums">
                {monthlyHours}{" "}
                <span className="text-[10px] sm:text-xs font-normal text-slate-400">hrs/mo</span>
              </div>
            </div>

            <div className="bg-[#030612] p-2.5 sm:p-3 rounded-lg sm:rounded-xl border border-[#FFB020]/40 shadow-[0_0_15px_rgba(255,176,32,0.15)]">
              <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-[#FFC74D] block whitespace-nowrap">
                Estimated Spend
              </span>
              <div className="font-display text-xl sm:text-3xl font-black text-[#FFB020] mt-0.5 tabular-nums">
                {formatCurrency(monthlyCost)}
              </div>
            </div>
          </div>

          {/* Included Task Deck */}
          <div className="p-2.5 sm:p-3 rounded-lg sm:rounded-xl bg-white/5 border border-white/5 flex flex-col gap-1.5 sm:gap-2">
            <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-slate-300 block truncate">
              What Your Specialist Can Accomplish in {hoursPerDay} Hours a Day:
            </span>
            <ul className="grid grid-cols-1 gap-1 sm:gap-1.5 text-[11px] sm:text-xs text-slate-200">
              {coveredTasks.map((task) => (
                <li key={task} className="flex items-start gap-1.5 sm:gap-2">
                  <Check className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="leading-tight text-[10px] sm:text-xs">{task}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Physical 3D Button - Fixed height and non-wrapping */}
          <a
            href="/quote"
            className="btn-luxury-gold btn-shimmer h-[44px] sm:h-[48px] px-3 rounded-xl text-center text-xs sm:text-sm font-black uppercase tracking-wider flex items-center justify-center gap-2 group cursor-pointer shadow-lg whitespace-nowrap"
          >
            <span className="tabular-nums">Lock in {hoursPerDay} Hours/Day at $8/hr</span>
            <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform shrink-0" />
          </a>

          <p className="text-[10px] text-slate-400 text-center leading-normal">
            *No monthly minimum hours. Invoiced weekly with verified screenshots and time tracking.
          </p>
        </div>
      </div>
    </div>
  );
}

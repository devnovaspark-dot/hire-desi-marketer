"use client";

import React, { useState } from "react";
import { formatCurrency } from "@/lib/utils";
import { ArrowRight, Check, Clock, Sliders, ShieldCheck, Zap } from "lucide-react";

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
    "Google & Meta ad campaign builds & bid pacing",
    "Technical SEO audits, speed fixes & local citations",
    "Daily social media scheduling & community response",
    "High-converting landing page creation & updates",
  ];

  // Dynamic progress percentage for smooth butter track fill
  const progressPercent = ((hoursPerDay - 1) / 9) * 100;

  return (
    <div
      id="calculator"
      className="skeuo-card-dark specular-shine rounded-3xl p-6 sm:p-8 lg:p-9 relative overflow-hidden border border-white/15 shadow-2xl"
    >
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
        {/* Left Side: Hardware Slider Console */}
        <div className="lg:col-span-7 flex flex-col gap-5 text-left">
          <div className="flex items-center gap-2.5">
            <span className="btn-luxury-gold px-3 py-1 rounded-full text-[11px] font-black uppercase tracking-wider inline-flex items-center gap-1.5 shadow-sm">
              <Sliders className="w-3.5 h-3.5" />
              <span>Interactive Calculator</span>
            </span>
            <span className="text-xs text-slate-300 font-semibold">
              Model 01 · Flat $8/Hour Rate
            </span>
          </div>

          <div>
            <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
              Adjust your daily sprint hours
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 leading-relaxed">
              Drag the buttery slider or pick a preset below to instantly simulate your dedicated specialist allocation.
            </p>
          </div>

          {/* Buttery Smooth Slider Bay */}
          <div className="skeuo-recessed-dark p-5 rounded-2xl flex flex-col gap-4 border border-black/60 shadow-inner">
            <div className="flex items-center justify-between pb-2 border-b border-white/5">
              <label
                htmlFor="hours-slider"
                className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-200 flex items-center gap-2"
              >
                <Clock className="w-4 h-4 text-[#FFB020]" />
                <span>Specialist Bandwidth</span>
              </label>

              {/* Digital Nixie Readout */}
              <div className="flex items-baseline gap-1.5 bg-[#030612] px-4 py-1.5 rounded-xl border border-amber-500/40 shadow-[0_0_15px_rgba(255,176,32,0.15)]">
                <span className="font-display font-black text-3xl sm:text-4xl text-[#FFB020] tracking-tight">
                  {hoursPerDay}
                </span>
                <span className="text-xs text-[#FFC74D] font-bold uppercase">
                  hrs / day
                </span>
              </div>
            </div>

            {/* Range Slider with Dynamic Buttery Fill */}
            <div className="py-2 flex flex-col gap-2">
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
                className="w-full h-3 rounded-full cursor-ew-resize appearance-none outline-none transition-all duration-150"
              />

              {/* Quick Tap Presets for Butter Navigation */}
              <div className="grid grid-cols-5 gap-1.5 pt-1">
                {presets.map((preset) => (
                  <button
                    key={preset.hours}
                    type="button"
                    onClick={() => setHoursPerDay(preset.hours)}
                    className={`py-1.5 px-1 rounded-lg text-[10px] sm:text-[11px] font-bold transition-all text-center cursor-pointer ${
                      hoursPerDay === preset.hours
                        ? "btn-luxury-gold text-[#060B22] shadow-md scale-105"
                        : "bg-white/5 hover:bg-white/10 text-slate-300 border border-white/5"
                    }`}
                  >
                    {preset.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Clean Assumptions Bar */}
          <div className="flex flex-wrap items-center gap-3 text-xs text-slate-300">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              22 business days/month
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              Billed purely on verified time logs
            </span>
          </div>
        </div>

        {/* Right Side: Calculated Output Box */}
        <div className="lg:col-span-5 skeuo-recessed-dark p-6 rounded-2xl flex flex-col gap-4 border border-white/10 relative text-left">
          <div className="flex items-center justify-between pb-3 border-b border-white/10">
            <span className="text-xs font-black uppercase tracking-wider text-slate-300">
              Estimated Monthly Total
            </span>
            <span className="btn-luxury-gold px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider text-[#060B22]">
              $8/hr Flat
            </span>
          </div>

          <div className="grid grid-cols-2 gap-3.5 items-center">
            <div className="bg-[#030612] p-3 rounded-xl border border-white/10">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                Total Bandwidth
              </span>
              <div className="font-display text-2xl sm:text-3xl font-black text-white mt-0.5">
                {monthlyHours}{" "}
                <span className="text-xs font-normal text-slate-400">hrs/mo</span>
              </div>
            </div>

            <div className="bg-[#030612] p-3 rounded-xl border border-[#FFB020]/40 shadow-[0_0_15px_rgba(255,176,32,0.15)]">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#FFC74D] block">
                Estimated Spend
              </span>
              <div className="font-display text-2xl sm:text-3xl font-black text-[#FFB020] mt-0.5">
                {formatCurrency(monthlyCost)}
              </div>
            </div>
          </div>

          {/* Included Task Deck */}
          <div className="p-3 rounded-xl bg-white/5 border border-white/5 flex flex-col gap-2">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-300">
              What gets accomplished in {hoursPerDay} hrs/day:
            </span>
            <ul className="flex flex-col gap-1.5 text-xs text-slate-200">
              {coveredTasks.map((task) => (
                <li key={task} className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="leading-tight text-[11px] sm:text-xs">{task}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Physical 3D Button */}
          <a
            href="#quote"
            className="btn-luxury-gold btn-shimmer py-3.5 rounded-xl text-center text-xs sm:text-sm font-black uppercase tracking-wider flex items-center justify-center gap-2 group cursor-pointer shadow-lg"
          >
            <span>Lock in {hoursPerDay} Hours/Day at $8/hr</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>

          <p className="text-[10px] text-slate-400 text-center leading-normal">
            *No monthly minimum hours. Invoiced weekly with verified screenshots and time tracking.
          </p>
        </div>
      </div>
    </div>
  );
}

"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  CheckCircle2,
  Users,
  Clock,
  Sparkles,
  Zap,
  Code2,
  Lock,
  ArrowRight,
  Award,
} from "lucide-react";
import { WebDesignTeamShowcase } from "./WebDesignTeamShowcase";

const CAPABILITY_PILLARS = [
  {
    number: "01",
    title: "Direct Access to Senior Architects",
    tagline: "Zero Junior Handoffs · Direct Engineer Communication",
    description:
      "You collaborate directly with principal full-stack engineers and UI/UX designers who understand your commercial goals. No junior intern middlemen or disconnected account managers.",
    metric: "100% Senior Squad",
    icon: <Users className="w-4 h-4 text-[#FFB020]" />,
  },
  {
    number: "02",
    title: "Sub-Second Performance & Speed",
    tagline: "< 0.8s LCP Benchmark · 95+ Core Web Vitals",
    description:
      "We build with modern frameworks (Next.js, React, Tailwind, Headless CMS) to guarantee sub-second initial paint and eliminate the bounce rates caused by bloated templates.",
    metric: "< 0.8s Speed",
    icon: <Zap className="w-4 h-4 text-[#FFB020]" />,
  },
  {
    number: "03",
    title: "100% Code & IP Ownership",
    tagline: "Day-One Repository Access · Zero Platform Lock-In",
    description:
      "You own 100% of the code, designs, and assets from Day 1. We commit clean, documented code directly to your GitHub or GitLab repository with strict bilateral NDA compliance.",
    metric: "100% Your IP",
    icon: <Lock className="w-4 h-4 text-[#FFB020]" />,
  },
  {
    number: "04",
    title: "Transparent Agile Delivery & Daily Demos",
    tagline: "Daily Loom Updates · Fixed Milestone Predictability",
    description:
      "Experience zero dark periods. We deliver regular Loom video walkthroughs, shared staging URLs, and bi-weekly milestone demos so your project launches on time, every time.",
    metric: "< 24h Scoping",
    icon: <Clock className="w-4 h-4 text-[#FFB020]" />,
  },
];

export function WebDesignWhyChooseUs() {
  return (
    <div className="space-y-8 sm:space-y-10 max-w-7xl mx-auto text-left">
      {/* 1. Authentic In-House Campus & Leadership Team Showcase */}
      <WebDesignTeamShowcase />

      {/* 2. Asymmetric 4-Pillar Editorial Storytelling Matrix (Avoids generic 4-col card grid) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        {CAPABILITY_PILLARS.map((pillar) => (
          <div
            key={pillar.number}
            className="p-5 sm:p-7 rounded-2xl sm:rounded-3xl bg-white border border-[#E2DBD0] hover:border-[#FFB020] transition-all duration-300 shadow-xs hover:shadow-md flex flex-col justify-between space-y-4 group relative overflow-hidden"
          >
            {/* Top Hover Gradient Line */}
            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-transparent to-transparent group-hover:via-[#FFB020] transition-all duration-300" />

            <div className="space-y-2.5">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-black text-[#B87A00] bg-[#FFB020]/15 px-2.5 py-0.5 rounded-full border border-[#FFB020]/25">
                  Pillar {pillar.number}
                </span>

                <span className="text-[10px] font-bold text-slate-500 bg-[#FAF8F5] px-2.5 py-0.5 rounded-full border border-[#E2DBD0]">
                  {pillar.metric}
                </span>
              </div>

              <div>
                <h3 className="font-display font-black text-lg sm:text-xl text-[#0B1B3A] tracking-tight group-hover:text-[#B87A00] transition-colors">
                  {pillar.title}
                </h3>
                <div className="text-[11px] font-bold text-[#B87A00] mt-0.5">
                  {pillar.tagline}
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                {pillar.description}
              </p>
            </div>

            <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
              <span className="text-[11px] font-semibold text-[#0B1B3A] flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>Verified Client Standard</span>
              </span>
              <span className="text-[10px] text-slate-400">Strict SLA</span>
            </div>
          </div>
        ))}
      </div>

      {/* 3. Verified Assurance Strip */}
      <div className="p-4 sm:p-5 rounded-2xl bg-[#060B22] text-white flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        <div className="space-y-1">
          <div className="text-xs font-black uppercase tracking-wider text-[#FFB020] flex items-center justify-center sm:justify-start gap-1.5">
            <Award className="w-3.5 h-3.5 text-[#FFB020]" />
            <span>Enterprise Scoping Guarantee</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-200">
            Receive a detailed technical roadmap, sprint breakdown, and fixed quotation within 24 hours.
          </p>
        </div>

        <Link
          href="/get-a-quote"
          className="btn-luxury-gold py-2.5 px-5 rounded-xl text-xs font-black uppercase tracking-wider inline-flex items-center gap-2 shrink-0 cursor-pointer shadow-xs"
        >
          <span>Schedule Scoping Session</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}

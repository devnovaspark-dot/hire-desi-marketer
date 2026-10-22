"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Modal } from "@/components/ui/Modal";
import { AnimatedGlobeHero } from "./AnimatedGlobeHero";
import {
  ArrowRight,
  Play,
  TrendingUp,
  MessageSquare,
} from "lucide-react";

export function Hero() {
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  return (
    <section className="relative overflow-hidden bg-[#040716] text-white pt-20 sm:pt-24 lg:pt-26 pb-12 sm:pb-16 lg:pb-20">
      {/* Dynamic Animated World Globe & Flight Telemetry Background */}
      <AnimatedGlobeHero />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
          {/* Left Column: Core Messaging & High-Conversion Action */}
          <div className="lg:col-span-6 flex flex-col gap-4 sm:gap-6 text-left">
            {/* Single Elegant Unified Badge */}
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-[11px] sm:text-xs text-slate-200 w-fit shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-semibold text-white">100% In-House in India</span>
              <span className="text-slate-400">·</span>
              <span className="text-[#FFB020] font-bold">From $8/hr</span>
              <span className="text-slate-400">·</span>
              <span className="text-slate-300">Western Shifts</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-display text-3xl sm:text-5xl md:text-5xl xl:text-6xl font-black tracking-tight leading-[1.1] sm:leading-[1.08] text-white drop-shadow-[0_4px_20px_rgba(0,0,0,0.9)]">
              World-Class Marketing Talent.{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD166] via-[#FFB020] to-[#FF8A00] block sm:inline">
                Starting at $8/Hour
              </span>
            </h1>

            {/* Concise Supporting Copy */}
            <p className="text-sm sm:text-base lg:text-lg text-slate-300 max-w-xl font-normal leading-relaxed">
              Need a marketing team that works on your schedule? Build a dedicated team of SEO specialists, content creators, paid media experts, and developers aligned with your business needs.
            </p>

            {/* Clear Primary & Secondary Actions - Sleek & Refined */}
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 pt-1">
              <a
                href="#quote"
                className="btn-luxury-gold btn-shimmer px-4 py-2.5 sm:px-6 sm:py-3 rounded-xl text-xs sm:text-sm font-black uppercase tracking-wider inline-flex items-center gap-2 shadow-lg cursor-pointer group"
              >
                <span>Build My Marketing Team</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform stroke-[2.5]" />
              </a>

              <a
                href="#video-showcase"
                className="btn-luxury-navy btn-shimmer px-3.5 py-2.5 sm:px-5 sm:py-3 rounded-xl text-xs sm:text-sm font-bold inline-flex items-center gap-2 shadow-md cursor-pointer group"
              >
                <div className="w-4 h-4 rounded-full bg-[#FFB020] text-[#060B22] flex items-center justify-center shadow-xs group-hover:scale-110 transition-transform">
                  <Play className="w-2 h-2 fill-[#060B22] ml-0.5" />
                </div>
                <span>Watch Team Walkthrough (43s)</span>
              </a>
            </div>

            {/* 3 Clean Uncluttered Stats */}
            <div className="grid grid-cols-3 gap-3 sm:gap-6 pt-4 sm:pt-5 border-t border-white/10 max-w-md">
              <div>
                <div className="font-display text-xl sm:text-2xl font-black text-[#FFB020]">$8/hr</div>
                <div className="text-[10px] sm:text-xs text-slate-400 mt-0.5">Pay-As-You-Go</div>
              </div>
              <div className="border-l border-white/10 pl-3 sm:pl-5">
                <div className="font-display text-xl sm:text-2xl font-black text-white">$999/mo</div>
                <div className="text-[10px] sm:text-xs text-slate-400 mt-0.5">Growth Bundle</div>
              </div>
              <div className="border-l border-white/10 pl-3 sm:pl-5">
                <div className="font-display text-xl sm:text-2xl font-black text-[#FFB020]">3 · 5 · 7</div>
                <div className="text-[10px] sm:text-xs text-slate-400 mt-0.5">Dedicated Squads</div>
              </div>
            </div>
          </div>

          {/* Right Column: Balanced & Compact to fit above the fold */}
          <div className="lg:col-span-6 relative mt-2 lg:mt-0 w-full flex justify-center lg:justify-end">
            <div className="relative w-full max-w-lg">
              {/* Luminous Ambient Backlight */}
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-[#FFB020]/20 via-blue-600/15 to-emerald-500/10 blur-2xl opacity-70 pointer-events-none" />

              {/* Translucent Frosted Glass Chassis */}
              <div className="relative rounded-2xl sm:rounded-3xl bg-[#060B24]/50 backdrop-blur-2xl border border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.6),inset_0_1px_2px_rgba(255,255,255,0.25)] p-3 sm:p-4.5 flex flex-col gap-2.5 sm:gap-3 text-white overflow-hidden hover:border-[#FFB020]/40 transition-colors">
                {/* Top Specular Rim */}
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent" />

                {/* Header: Title + Live Status + 4.6x ROAS Pill */}
                <div className="flex items-center justify-between pb-2 border-b border-white/10">
                  <div className="flex flex-col">
                    <div className="flex items-center gap-1.5 sm:gap-2">
                      <span className="font-display font-black text-sm sm:text-base lg:text-lg text-white">
                        Growth Command Console
                      </span>
                      <span className="flex items-center gap-1 px-1.5 py-0.2 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-[9px] sm:text-[10px] font-extrabold uppercase">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        Live
                      </span>
                    </div>
                    <span className="text-[10px] sm:text-[11px] text-slate-300 font-medium">
                      Bhubaneswar Desk Active · Western Overlap
                    </span>
                  </div>

                  {/* 10x ROAS Badge */}
                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg sm:rounded-xl bg-[#FFB020]/15 border border-[#FFB020]/40 text-[#FFB020] shadow-sm">
                    <TrendingUp className="w-3.5 h-3.5 text-[#FFB020] shrink-0" />
                    <div className="flex flex-col items-start leading-none">
                      <span className="font-display font-black text-xs sm:text-base">10x</span>
                      <span className="text-[8px] sm:text-[9px] font-extrabold text-slate-300 uppercase tracking-wider">ROAS</span>
                    </div>
                  </div>
                </div>

                {/* High-Resolution Team Showcase (1200x1000) */}
                <div className="relative w-full aspect-[6/5] rounded-xl sm:rounded-2xl overflow-hidden border border-white/15 bg-slate-950/60 shadow-[0_12px_35px_rgba(0,0,0,0.5)] group">
                  <Image
                    src="/images/1200_1000px.png"
                    alt="Hire Desi Marketer Dedicated In-House Team at Bhubaneswar Headquarters"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 520px"
                    className="object-cover object-center group-hover:scale-[1.02] transition-transform duration-500"
                  />

                  {/* Subtle vignette on bottom for contrast */}
                  <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#060B24]/90 via-[#060B24]/40 to-transparent pointer-events-none" />

                  {/* Floating Console Badges over Image */}
                  <div className="absolute bottom-2 sm:bottom-2.5 inset-x-2 sm:inset-x-2.5 flex items-center justify-between gap-2 pointer-events-none">
                    <div className="flex items-center gap-1.5 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-lg bg-[#060B24]/85 backdrop-blur-md border border-white/20 text-white text-[9px] sm:text-[10px] font-semibold shadow-lg">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span>100% In-House Squad · Bhubaneswar HQ</span>
                    </div>

                    <div className="flex items-center gap-1.5 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-lg bg-emerald-500/20 backdrop-blur-md border border-emerald-500/40 text-emerald-300 text-[9px] sm:text-[10px] font-bold shadow-lg">
                      <MessageSquare className="w-3 h-3 text-emerald-400" />
                      <span className="hidden sm:inline">Direct Slack Active</span>
                      <span className="sm:hidden">Slack Active</span>
                    </div>
                  </div>
                </div>

                {/* 3-Tile Trust Scale (Developers, Countries, Clients) */}
                <div className="grid grid-cols-3 gap-1 sm:gap-2 p-1.5 sm:p-2 rounded-xl bg-white/[0.04] border border-white/10 backdrop-blur-md">
                  <div className="flex flex-col">
                    <span className="text-[8px] sm:text-[9px] font-bold uppercase tracking-wider text-slate-400">Scale</span>
                    <span className="font-display font-black text-xs sm:text-sm md:text-base text-white mt-0.5">240+</span>
                    <span className="text-[8px] sm:text-[9px] font-bold text-emerald-400 flex items-center gap-1 mt-0.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" />
                      In-House Developers
                    </span>
                  </div>
                  <div className="flex flex-col border-l border-white/10 pl-2 sm:pl-2.5">
                    <span className="text-[8px] sm:text-[9px] font-bold uppercase tracking-wider text-slate-400">Presence</span>
                    <span className="font-display font-black text-xs sm:text-sm md:text-base text-[#FFB020] mt-0.5">8+</span>
                    <span className="text-[8px] sm:text-[9px] font-bold text-[#FFB020] mt-0.5">Countries</span>
                  </div>
                  <div className="flex flex-col border-l border-white/10 pl-2 sm:pl-2.5">
                    <span className="text-[8px] sm:text-[9px] font-bold uppercase tracking-wider text-slate-400">Track Record</span>
                    <span className="font-display font-black text-xs sm:text-sm md:text-base text-white mt-0.5">40+</span>
                    <span className="text-[8px] sm:text-[9px] font-bold text-emerald-400 mt-0.5">Clients</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      <Modal
        isOpen={videoModalOpen}
        onClose={() => setVideoModalOpen(false)}
        title="Why US Brands Hire a Desi Marketer"
      >
        <div className="flex flex-col gap-6">
          <div className="relative aspect-video w-full rounded-2xl overflow-hidden border border-white/20 bg-black">
            <video
              controls
              playsInline
              preload="metadata"
              poster="/images/team-video-poster.jpg"
              className="w-full h-full object-cover"
            >
              <source src="/team-walkthrough.mp4?v=3" type="video/mp4" />
              <source src="/Video.mp4?v=3" type="video/mp4" />
              Your browser does not support HTML5 video.
            </video>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 border-t border-white/10 text-xs">
            <div className="flex flex-col p-3 rounded-xl bg-white/5 border border-white/10">
              <span className="font-bold text-[#FFB020]">100% In-House</span>
              <span className="text-slate-300">Stationed at our Bhubaneswar headquarters</span>
            </div>
            <div className="flex flex-col p-3 rounded-xl bg-white/5 border border-white/10">
              <span className="font-bold text-[#FFB020]">Dedicated Shifts</span>
              <span className="text-slate-300">Overlapping hours with your working day</span>
            </div>
            <div className="flex flex-col p-3 rounded-xl bg-white/5 border border-white/10">
              <span className="font-bold text-[#FFB020]">Direct Communication</span>
              <span className="text-slate-300">Live on Slack &amp; scheduled Zoom check-ins</span>
            </div>
          </div>
        </div>
      </Modal>
    </section>
  );
}

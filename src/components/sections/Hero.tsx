"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Modal } from "@/components/ui/Modal";
import { AnimatedGlobeHero } from "./AnimatedGlobeHero";
import {
  ArrowRight,
  Play,
  TrendingUp,
  Sparkles,
  MessageSquare,
  CheckCircle2,
} from "lucide-react";

export function Hero() {
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  return (
    <section className="relative overflow-hidden bg-[#040716] text-white pt-20 sm:pt-28 lg:pt-32 pb-14 sm:pb-24 lg:pb-28">
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
              Build your team with skilled marketers, SEO experts, paid media specialists, content creators, and developers who work your exact business hours, wherever you operate.
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

          {/* Right Column: Kept Down on Mobile, Made Smaller/Compact */}
          <div className="lg:col-span-6 relative mt-2 lg:mt-0 w-full">
            <div className="relative mx-auto w-full">
              {/* Luminous Ambient Backlight */}
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-[#FFB020]/20 via-blue-600/15 to-emerald-500/10 blur-2xl opacity-70 pointer-events-none" />

              {/* Translucent Frosted Glass Chassis — Compact on Mobile */}
              <div className="relative rounded-2xl sm:rounded-3xl bg-[#060B24]/50 backdrop-blur-2xl border border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.6),inset_0_1px_2px_rgba(255,255,255,0.25)] p-3.5 sm:p-7 flex flex-col gap-3 sm:gap-4 text-white overflow-hidden hover:border-[#FFB020]/40 transition-colors">
                {/* Top Specular Rim */}
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent" />

                {/* Header: Title + Live Status + 4.6x ROAS Pill */}
                <div className="flex items-center justify-between pb-2.5 sm:pb-3.5 border-b border-white/10">
                  <div className="flex flex-col">
                    <div className="flex items-center gap-1.5 sm:gap-2">
                      <span className="font-display font-black text-sm sm:text-xl text-white">
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

                  {/* 4.6x ROAS Badge */}
                  <div className="flex items-center gap-1.5 sm:gap-2 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-lg sm:rounded-xl bg-[#FFB020]/15 border border-[#FFB020]/40 text-[#FFB020] shadow-sm">
                    <TrendingUp className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#FFB020] shrink-0" />
                    <div className="flex flex-col items-start leading-none">
                      <span className="font-display font-black text-sm sm:text-lg">4.6x</span>
                      <span className="text-[8px] sm:text-[9px] font-extrabold text-slate-300 uppercase tracking-wider">ROAS</span>
                    </div>
                  </div>
                </div>

                {/* Live 3-Tile KPI Bar (Spend, Revenue, CPA) — Compact */}
                <div className="grid grid-cols-3 gap-1.5 sm:gap-2.5 p-2 sm:p-3 rounded-xl sm:rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-md">
                  <div className="flex flex-col">
                    <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-slate-400">Monthly Spend</span>
                    <span className="font-display font-black text-xs sm:text-base text-white mt-0.5">$14,280</span>
                    <span className="text-[9px] sm:text-[10px] font-bold text-emerald-400 flex items-center gap-1 mt-0.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" />
                      On Target
                    </span>
                  </div>
                  <div className="flex flex-col border-l border-white/10 pl-2 sm:pl-3">
                    <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-slate-400">Attributed Rev</span>
                    <span className="font-display font-black text-xs sm:text-base text-[#FFB020] mt-0.5">$65,688</span>
                    <span className="text-[9px] sm:text-[10px] font-bold text-[#FFB020] mt-0.5">+342% YoY</span>
                  </div>
                  <div className="flex flex-col border-l border-white/10 pl-2 sm:pl-3">
                    <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-slate-400">Blended CPA</span>
                    <span className="font-display font-black text-xs sm:text-base text-white mt-0.5">$18.40</span>
                    <span className="text-[9px] sm:text-[10px] font-bold text-emerald-400 mt-0.5">-28% vs US</span>
                  </div>
                </div>

                {/* Recessed Dynamic Telemetry Graph — Compact */}
                <div className="p-2.5 sm:p-3.5 rounded-xl sm:rounded-2xl bg-black/40 border border-white/10 backdrop-blur-md flex flex-col gap-2 sm:gap-2.5 relative">
                  <div className="flex items-center justify-between text-[11px] sm:text-xs text-slate-300">
                    <div className="flex items-center gap-2.5 sm:gap-4">
                      <span className="flex items-center gap-1 font-bold text-[10px] sm:text-xs">
                        <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#FFB020]" />
                        Attributed Leads
                      </span>
                      <span className="flex items-center gap-1 font-bold text-[10px] sm:text-xs">
                        <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#3B82F6]" />
                        Qualified Traffic
                      </span>
                    </div>
                    <span className="text-[10px] sm:text-[11px] text-emerald-400 font-bold flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      Sync Active
                    </span>
                  </div>

                  {/* Compact SVG Wave */}
                  <div className="relative h-14 sm:h-22 w-full overflow-hidden">
                    <svg className="w-full h-full" viewBox="0 0 500 100" preserveAspectRatio="none">
                      <defs>
                        <linearGradient id="heroGoldCurve" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#FFB020" stopOpacity="0.45" />
                          <stop offset="100%" stopColor="#FFB020" stopOpacity="0.0" />
                        </linearGradient>
                        <linearGradient id="heroBlueCurve" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.25" />
                          <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.0" />
                        </linearGradient>
                      </defs>
                      <path d="M0,88 Q75,82 150,65 T300,42 T420,20 L500,8 L500,100 L0,100 Z" fill="url(#heroGoldCurve)" />
                      <path d="M0,92 Q85,86 170,72 T320,54 T430,32 L500,20 L500,100 L0,100 Z" fill="url(#heroBlueCurve)" />
                      <path d="M0,88 Q75,82 150,65 T300,42 T420,20 L500,8" fill="none" stroke="#FFB020" strokeWidth="2.5" strokeLinecap="round" />
                      <path d="M0,92 Q85,86 170,72 T320,54 T430,32 L500,20" fill="none" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" opacity="0.85" />
                      <circle cx="500" cy="8" r="4" fill="#FFE28A" />
                      <circle cx="500" cy="8" r="8" fill="#FFB020" opacity="0.3" className="animate-ping" />
                    </svg>
                  </div>

                  {/* Channel Badges */}
                  <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 pt-1 border-t border-white/5">
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-white/10 text-[10px] sm:text-[11px] font-bold text-slate-200">
                      <svg viewBox="0 0 24 24" className="w-3 h-3 fill-[#4285F4]"><path d="M3.9998 22.9291C1.7908 22.9291 0 21.1383 0 18.9293s1.7908-3.9998 3.9998-3.9998 3.9998 1.7908 3.9998 3.9998-1.7908 3.9998-3.9998 3.9998zm19.4643-6.0004L15.4632 3.072C14.3586 1.1587 11.9121.5028 9.9988 1.6074S7.4295 5.1585 8.5341 7.0718l8.0009 13.8567c1.1046 1.9133 3.5511 2.5679 5.4644 1.4646 1.9134-1.1046 2.568-3.5511 1.4647-5.4644zM7.5137 4.8438L1.5645 15.1484A4.5 4.5 0 0 1 4 14.4297c2.5597-.0075 4.6248 2.1585 4.4941 4.7148l3.2168-5.5723-3.6094-6.25c-.4499-.7793-.6322-1.6394-.5878-2.4784z"/></svg>
                      Google PMax
                    </span>
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-white/10 text-[10px] sm:text-[11px] font-bold text-slate-200">
                      <svg viewBox="0 0 24 24" className="w-3 h-3 fill-[#0467DF]"><path d="M6.915 4.03c-1.968 0-3.683 1.28-4.871 3.113C.704 9.208 0 11.883 0 14.449c0 .706.07 1.369.21 1.973a6.624 6.624 0 0 0 .265.86 5.297 5.297 0 0 0 .371.761c.696 1.159 1.818 1.927 3.593 1.927 1.497 0 2.633-.671 3.965-2.444.76-1.012 1.144-1.626 2.663-4.32l.756-1.339.186-.325c.061.1.121.196.183.3l2.152 3.595c.724 1.21 1.665 2.556 2.47 3.314 1.046.987 1.992 1.22 3.06 1.22 1.075 0 1.876-.355 2.455-.843a3.743 3.743 0 0 0 .81-.973c.542-.939.861-2.127.861-3.745 0-2.72-.681-5.357-2.084-7.45-1.282-1.912-2.957-2.93-4.716-2.93-1.047 0-2.088.467-3.053 1.308-.652.57-1.257 1.29-1.82 2.05-.69-.875-1.335-1.547-1.958-2.056-1.182-.966-2.315-1.303-3.454-1.303z"/></svg>
                      Meta Ads
                    </span>
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-white/10 text-[10px] sm:text-[11px] font-bold text-slate-200">
                      <svg viewBox="0 0 24 24" className="w-3 h-3 fill-[#E37400]"><path d="M22.84 2.9982v17.9987c.0086 1.6473-1.3197 2.9897-2.967 2.9984a2.9808 2.9808 0 01-.3677-.0208c-1.528-.226-2.6477-1.5558-2.6105-3.1V3.1204c-.0369-1.5458 1.0856-2.8762 2.6157-3.1 1.6361-.1915 3.1178.9796 3.3093 2.6158.014.1201.0208.241.0202.3619zM4.1326 18.0548c-1.6417 0-2.9726 1.331-2.9726 2.9726C1.16 22.6691 2.4909 24 4.1326 24s2.9726-1.3309 2.9726-2.9726-1.331-2.9726-2.9726-2.9726zm7.8728-9.0098c-.0171 0-.0342 0-.0513.0003-1.6495.0904-2.9293 1.474-2.891 3.1256v7.9846c0 2.167.9535 3.4825 2.3505 3.763 1.6118.3266 3.1832-.7152 3.5098-2.327.04-.1974.06-.3983.0593-.5998v-8.9585c.003-1.6474-1.33-2.9852-2.9773-2.9882z"/></svg>
                      GA4 CAPI
                    </span>
                  </div>
                </div>

                {/* Today's Live Deliverables Feed — Compact */}
                <div className="flex flex-col gap-1.5 p-2.5 sm:p-3.5 rounded-xl sm:rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-md text-[11px] sm:text-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-wider text-[#FFB020] flex items-center gap-1.5">
                      <Sparkles className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-[#FFB020]" />
                      Live Execution Feed
                    </span>
                    <span className="text-[9px] sm:text-[10px] text-slate-400">Verified</span>
                  </div>
                  <div className="flex items-center justify-between text-slate-200">
                    <div className="flex items-center gap-1.5 truncate">
                      <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
                      <span className="font-medium truncate text-[11px] sm:text-xs">Meta Advantage+ Catalog & creative split live</span>
                    </div>
                    <span className="text-[9px] sm:text-[10px] text-slate-400 shrink-0 ml-1">12m</span>
                  </div>
                  <div className="flex items-center justify-between text-slate-200">
                    <div className="flex items-center gap-1.5 truncate">
                      <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
                      <span className="font-medium truncate text-[11px] sm:text-xs">Google Search negative keyword mining scrub</span>
                    </div>
                    <span className="text-[9px] sm:text-[10px] text-slate-400 shrink-0 ml-1">45m</span>
                  </div>
                </div>

                {/* Bottom Pod Strip: Avatars + Live Slack Status */}
                <div className="flex items-center justify-between text-[11px] sm:text-xs pt-1 border-t border-white/10">
                  <div className="flex items-center gap-2">
                    <div className="flex -space-x-1.5 shrink-0">
                      <div className="relative w-6 h-6 sm:w-7 sm:h-7 rounded-full border border-white/30 overflow-hidden bg-slate-800">
                        <Image src="/images/team-sankarsan.jpg" alt="Team" fill className="object-cover" />
                      </div>
                      <div className="relative w-6 h-6 sm:w-7 sm:h-7 rounded-full border border-white/30 overflow-hidden bg-slate-800">
                        <Image src="/images/team-pranjal.jpg" alt="Team" fill className="object-cover" />
                      </div>
                      <div className="relative w-6 h-6 sm:w-7 sm:h-7 rounded-full border border-white/30 overflow-hidden bg-slate-800">
                        <Image src="/images/team-bikram.jpg" alt="Team" fill className="object-cover" />
                      </div>
                    </div>
                    <div className="flex flex-col leading-tight">
                      <span className="text-[10px] sm:text-[11px] font-bold text-white">Your Dedicated Squad</span>
                      <span className="text-[9px] sm:text-[10px] text-slate-400">Western Sync</span>
                    </div>
                  </div>

                  <span className="flex items-center gap-1 sm:gap-1.5 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-[10px] sm:text-[11px] font-bold shadow-xs">
                    <MessageSquare className="w-3 h-3 text-emerald-400" />
                    <span>Direct Slack Active</span>
                  </span>
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
              <source src="/Video.mp4" type="video/mp4" />
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

"use client";

import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  Zap,
  Star,
  ShieldCheck,
  Clock,
} from "lucide-react";
import GhostFibers from "@/components/ui/GhostFibers";
import StarBorder from "@/components/ui/StarBorder";

export function WebDesignHero() {
  return (
    <section className="relative overflow-hidden w-full pt-28 sm:pt-36 lg:pt-40 pb-16 sm:pb-20 lg:pb-24 bg-[#060B22] text-white border-b border-[#FFB020]/20 select-none">
      {/* ================================================================ */}
      {/* 1. GHOST FIBERS 3D WEBGL2 BACKGROUND ANIMATION                   */}
      {/* ================================================================ */}
      <GhostFibers
        glowColor="#FFB020"
        lineColor="#FFE082"
        secondaryColor="#E68A00"
        speed={0.4}
        scale={1.05}
        rotation={16}
        rollSpeed={0.12}
        layers={3}
        threads={80}
        density={1.1}
        thickness={1.1}
        flow={0.35}
        particles={0.8}
        sparkle={0.8}
        glow={1.15}
        brightness={1.05}
        vignette={0.3}
        grain={0.05}
        mouseInteraction={true}
        hoverEffect="focus"
        mouseStrength={1}
        pulseOnClick={true}
        className="absolute inset-0 w-full h-full opacity-90 pointer-events-none md:pointer-events-auto"
      />

      {/* Subtle Ambient Radial Lighting Behind Fibers */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[850px] h-[380px] bg-[#FFB020]/8 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-sky-500/5 rounded-full blur-[120px] pointer-events-none" />

      {/* ================================================================ */}
      {/* 2. HERO CONTENT LAYER (ABOVE CANVAS WITH POINTER INTERACTION)    */}
      {/* ================================================================ */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6 sm:space-y-8">
        {/* Grand Editorial Masthead */}
        <div className="space-y-4 max-w-4xl mx-auto">
          {/* Live Agency Status Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-[#FFB020]/30 shadow-2xs">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="text-[10.5px] sm:text-[11px] font-black text-[#FFB020] uppercase tracking-wider">
              Enterprise Web Engineering &amp; Bespoke UI/UX
            </span>
            <span className="text-white/20 hidden sm:inline">|</span>
            <span className="text-[10.5px] font-semibold text-slate-300 hidden sm:inline">
              Serving USA · Canada · UK · Australia
            </span>
          </div>

          {/* Grand Authoritative Headline */}
          <h1 className="font-display font-black text-3xl sm:text-5xl lg:text-[56px] text-white tracking-tight leading-[1.08]">
            Your Website Should Do More Than Look Good.{" "}
            <span className="bg-gradient-to-r from-[#FFB020] via-[#FFE082] to-[#E68A00] bg-clip-text text-transparent block sm:inline">
              It Should Grow Your Business.
            </span>
          </h1>

          {/* Editorial Subtitle */}
          <div className="space-y-1 max-w-2xl mx-auto pt-1">
            <p className="font-bold text-slate-200 text-sm sm:text-base">
              Professional Web Design and Development Services for Growing Businesses
            </p>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-normal">
              We design and engineer bespoke, high-converting digital platforms that blend Figma-grade design systems with sub-second Next.js full-stack development—turning casual visitors into qualified enterprise revenue.
            </p>
          </div>

          {/* Dual Conversion Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2 w-full max-w-md sm:max-w-none mx-auto">
            <StarBorder
              as={Link}
              href="/get-a-quote"
              className="w-full sm:w-auto py-3.5 px-8 rounded-xl text-xs sm:text-sm font-black uppercase tracking-wider inline-flex items-center justify-center gap-2 shadow-lg cursor-pointer text-center group"
              radius={12}
              color="#FFF8E7"
              trailColor="#FFB020"
              backgroundColor="#FFB020"
              textColor="#060B22"
              borderColor="rgba(255, 176, 32, 0.6)"
              sparkle={true}
              glow={0.85}
            >
              <span>LET&apos;S BUILD YOUR WEBSITE</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </StarBorder>

            <StarBorder
              as="a"
              href="#services"
              className="w-full sm:w-auto py-3.5 px-7 rounded-xl text-xs sm:text-sm font-black uppercase tracking-wider inline-flex items-center justify-center gap-2 shadow-xs cursor-pointer text-center group"
              radius={12}
              color="#FFB020"
              trailColor="#38BDF8"
              backgroundColor="rgba(255, 255, 255, 0.08)"
              textColor="#FFFFFF"
              borderColor="rgba(255, 255, 255, 0.2)"
              sparkle={false}
              glow={0.5}
            >
              <span>Explore Solutions ↓</span>
            </StarBorder>
          </div>

          {/* Verified Trust Strip */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-slate-300">
            <div className="flex items-center gap-1.5">
              <div className="flex text-[#FFB020]">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-3.5 h-3.5 fill-[#FFB020] text-[#FFB020]"
                  />
                ))}
              </div>
              <span className="font-bold text-white">4.9 / 5.0</span>
              <span className="text-[10.5px] text-slate-400 font-normal">
                (120+ Brands Delivered)
              </span>
            </div>
            <span className="text-white/20 hidden sm:inline">•</span>
            <div className="flex items-center gap-1.5 font-semibold text-slate-200">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>100% Code &amp; IP Ownership</span>
            </div>
            <span className="text-white/20 hidden sm:inline">•</span>
            <div className="flex items-center gap-1.5 font-semibold text-slate-200">
              <Clock className="w-3.5 h-3.5 text-[#FFB020]" />
              <span>&lt; 24h Turnaround</span>
            </div>
            <span className="text-white/20 hidden sm:inline">•</span>
            <div className="flex items-center gap-1.5 font-semibold text-slate-200">
              <Zap className="w-3.5 h-3.5 text-emerald-400" />
              <span>&lt; 0.8s LCP SLA</span>
            </div>
          </div>

          {/* Architectural Capabilities Ribbon (Clean Inline Badges - Zero Card) */}
          <div className="pt-5 flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs">
            <span className="px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-slate-300 font-medium flex items-center gap-1.5 hover:border-[#FFB020]/40 transition-colors">
              <span className="text-[#FFB020]">⚡</span>
              <span>Sub-Second Next.js 16</span>
              <span className="text-[10px] font-mono text-emerald-400 font-bold">&lt; 0.8s LCP</span>
            </span>
            <span className="px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-slate-300 font-medium flex items-center gap-1.5 hover:border-[#FFB020]/40 transition-colors">
              <span className="text-[#FFB020]">🎨</span>
              <span>Figma Design Tokens</span>
              <span className="text-[10px] font-mono text-slate-400">100% Custom UI/UX</span>
            </span>
            <span className="px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-slate-300 font-medium flex items-center gap-1.5 hover:border-[#FFB020]/40 transition-colors">
              <span className="text-[#FFB020]">🛡️</span>
              <span>100% Code &amp; IP Ownership</span>
              <span className="text-[10px] font-mono text-emerald-400 font-bold">Client Repo</span>
            </span>
            <span className="px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-slate-300 font-medium flex items-center gap-1.5 hover:border-[#FFB020]/40 transition-colors">
              <span className="text-[#FFB020]">🚀</span>
              <span>Headless CMS &amp; E-Com</span>
              <span className="text-[10px] font-mono text-slate-400">Shopify / WP / Webflow</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

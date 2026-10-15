import React from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Check, Sparkles, ArrowRight, Crown, Clock, Users, ShieldCheck } from "lucide-react";

export function EngagementModels() {
  const bundleInclusions = [
    { title: "SEO Technical & On-Page Fixes", detail: "Schema, Core Web Vitals & GBP ranking" },
    { title: "Google + Meta Ads Scaling", detail: "Weekly bid pruning, copy & audience testing" },
    { title: "Social Media Graphics (12/mo)", detail: "Multi-slide carousels & brand assets" },
    { title: "Ad Creatives & Video Reels (12/mo)", detail: "8 static ads + 4 vertical short videos" },
    { title: "4 High-Intent SEO Articles", detail: "1,500+ word keyword authority blogs" },
    { title: "Live Looker Studio Dashboard", detail: "Attribution tracking + monthly video review" },
  ];

  return (
    <section id="pricing" className="py-6 lg:py-8 bg-[#F4F1EA] relative scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-5">
        {/* Compact Section Heading (Fits in 1 window) */}
        <SectionHeading
          kicker="Engagement Models"
          title={
            <>
              Transparent pricing.{" "}
              <span className="text-[#9A5B00]">Zero contracts.</span>
            </>
          }
          subtitle="Choose between pay-as-you-go hourly sprints, our all-in $999 growth bundle, or a dedicated marketing department."
          align="center"
        />

        {/* 3 High-Density Model Cards (Fits in one window!) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 items-stretch">
          {/* Model 01: Hourly Support */}
          <div className="skeuo-card-light specular-shine rounded-3xl p-5 flex flex-col justify-between relative group border border-[#D5CEBF] shadow-sm">
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between pb-2 border-b border-[#E8E3D8]">
                <span className="text-xs font-black uppercase tracking-wider text-[#5A6680] flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#FFB020]" />
                  Model 01 · Hourly
                </span>
                <span className="skeuo-recessed-light px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider text-[#0B1B3A]">
                  Pay-As-You-Go
                </span>
              </div>

              <div>
                <h3 className="font-display text-xl sm:text-2xl font-black text-[#0B1B3A]">
                  Hire by the Hour
                </h3>
                <p className="text-xs text-[#5A6680] mt-0.5 leading-relaxed">
                  On-demand execution for ad builds, SEO audits, creative edits, or landing page sprints.
                </p>
              </div>

              {/* Price Well */}
              <div className="skeuo-recessed-light py-2 px-3.5 rounded-2xl flex items-baseline justify-between border border-[#D5CEBF]">
                <div className="flex items-baseline gap-1">
                  <span className="font-display text-3xl font-black text-[#0B1B3A]">
                    $8
                  </span>
                  <span className="text-xs font-extrabold text-[#5A6680]">/ hour</span>
                </div>
                <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100/90 px-2 py-0.5 rounded-full border border-emerald-300">
                  Zero Minimum
                </span>
              </div>

              {/* Structured Task Deck */}
              <div className="flex flex-col gap-1.5">
                <span className="text-[10px] font-black uppercase tracking-wider text-[#0B1B3A]">
                  Included Capabilities:
                </span>
                <ul className="flex flex-col gap-1.5 text-xs text-[#0B1B3A]">
                  <li className="flex items-center gap-2 p-1.5 rounded-xl bg-white border border-[#E8E3D8]">
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span className="truncate">Google &amp; Meta ad builds, bid pruning &amp; copy</span>
                  </li>
                  <li className="flex items-center gap-2 p-1.5 rounded-xl bg-white border border-[#E8E3D8]">
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span className="truncate">Technical SEO audits, speed fixes &amp; schema</span>
                  </li>
                  <li className="flex items-center gap-2 p-1.5 rounded-xl bg-white border border-[#E8E3D8]">
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span className="truncate">Social carousels, Reel video cuts &amp; graphics</span>
                  </li>
                  <li className="flex items-center gap-2 p-1.5 rounded-xl bg-white border border-[#E8E3D8]">
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span className="truncate">Landing page CRO tweaks &amp; HTML/React updates</span>
                  </li>
                </ul>
              </div>

              {/* Operational SLA Badges */}
              <div className="p-2.5 rounded-xl bg-[#ECE7DC] border border-[#D5CEBF] flex items-center justify-between text-[10px] text-[#5A6680]">
                <span className="font-bold text-[#0B1B3A]">TimeDoctor Verified</span>
                <span>·</span>
                <span className="font-semibold text-[#0B1B3A]">Direct Slack Channel</span>
                <span>·</span>
                <span className="text-emerald-700 font-bold">Scale Anytime</span>
              </div>
            </div>

            <div className="pt-3">
              <a
                href="#calculator"
                className="btn-luxury-navy btn-shimmer w-full py-2.5 px-3 rounded-xl text-xs font-black uppercase tracking-wider flex items-center justify-center gap-1.5 group cursor-pointer shadow-md"
              >
                <span>Calculate Sprint Hours</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Model 02: Fixed Monthly ($999 Growth Bundle) - STAR CARD */}
          <div className="skeuo-card-gold specular-shine rounded-3xl p-5 flex flex-col justify-between relative z-20 border-2 border-[#FFB020] shadow-[0_20px_50px_rgba(10,18,42,0.35)]">
            <div className="flex flex-col gap-3">
              {/* Prominent top badge bar */}
              <div className="flex items-center justify-between gap-2 pb-2 border-b border-white/10">
                <span className="btn-luxury-gold btn-shimmer px-3 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider shadow-md flex items-center gap-1 whitespace-nowrap">
                  <Crown className="w-3 h-3 fill-[#060B22]" />
                  Most Popular Turnkey Plan
                </span>
                <span className="skeuo-badge-gold px-2 py-0.5 rounded-full text-[9px] font-black uppercase">
                  All-In-One
                </span>
              </div>

              <div>
                <span className="text-[10px] font-black uppercase tracking-widest text-[#FFB020] flex items-center gap-1 mb-0.5">
                  <Sparkles className="w-3 h-3 text-[#FFB020]" />
                  Model 02 · Turnkey Engine
                </span>
                <h3 className="font-display text-xl sm:text-2xl font-black text-white">
                  The Growth Bundle
                </h3>
                <p className="text-xs text-slate-300 mt-0.5 leading-relaxed">
                  Your full marketing engine: rankings, search &amp; social ads, content creation &amp; vertical Reels.
                </p>
              </div>

              {/* Price Well */}
              <div className="skeuo-recessed-dark py-2 px-3.5 rounded-2xl flex items-baseline justify-between border border-amber-500/30">
                <div className="flex items-baseline gap-1">
                  <span className="font-display text-3xl font-black text-[#FFB020]">
                    $999
                  </span>
                  <span className="text-xs font-bold text-slate-300">/ month</span>
                </div>
                <span className="text-[10px] font-bold text-amber-300 bg-amber-500/10 px-2 py-0.5 rounded-full border border-amber-500/30">
                  Fixed Fee · No surprises
                </span>
              </div>

              {/* 6 Inclusions Compact Deck */}
              <div className="grid grid-cols-1 gap-1.5">
                {bundleInclusions.map((item) => (
                  <div
                    key={item.title}
                    className="flex items-center gap-2 p-1.5 rounded-xl bg-white/[0.05] border border-white/5 text-xs"
                  >
                    <div className="w-3.5 h-3.5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                      <Check className="w-2.5 h-2.5" />
                    </div>
                    <span className="text-white font-bold text-[11px] truncate">{item.title}</span>
                  </div>
                ))}
              </div>

              <div className="text-[10px] text-slate-300 skeuo-recessed-dark py-1.5 px-2 rounded-xl text-center">
                🛡️ Cancel anytime · No long-term lock-in · Starts in 48h
              </div>
            </div>

            <div className="pt-3">
              <a
                href="#start"
                className="btn-luxury-gold btn-shimmer w-full py-2.5 px-3 rounded-xl text-xs font-black uppercase tracking-wider flex items-center justify-center gap-1.5 group cursor-pointer shadow-lg"
              >
                <span>Claim $999 Growth Bundle</span>
                <ArrowRight className="w-3.5 h-3.5 stroke-[3] group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Model 03: Dedicated Department (3/5/7) */}
          <div className="skeuo-card-light specular-shine rounded-3xl p-5 flex flex-col justify-between relative group border border-[#D5CEBF] shadow-sm">
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between pb-2 border-b border-[#E8E3D8]">
                <span className="text-xs font-black uppercase tracking-wider text-[#5A6680] flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-[#FFB020]" />
                  Model 03 · Dedicated Teams
                </span>
                <span className="skeuo-recessed-light px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider text-[#0B1B3A]">
                  3 · 5 · 7 Squads
                </span>
              </div>

              <div>
                <h3 className="font-display text-xl sm:text-2xl font-black text-[#0B1B3A]">
                  Your Marketing Dept.
                </h3>
                <p className="text-xs text-[#5A6680] mt-0.5 leading-relaxed">
                  Full-time dedicated specialists operating exclusively on your brand. Assembled and launched in 7 days.
                </p>
              </div>

              {/* Price Well */}
              <div className="skeuo-recessed-light py-2 px-3.5 rounded-2xl flex items-baseline justify-between border border-[#D5CEBF]">
                <div className="flex items-baseline gap-1">
                  <span className="font-display text-2xl font-black text-[#0B1B3A]">
                    From $2,400
                  </span>
                  <span className="text-xs font-extrabold text-[#5A6680]">/ month</span>
                </div>
                <span className="text-[10px] font-bold text-amber-800 bg-amber-100/90 px-2 py-0.5 rounded-full border border-amber-300">
                  Custom Squad
                </span>
              </div>

              {/* Structured Squad Composition Breakdown */}
              <div className="flex flex-col gap-1.5">
                <span className="text-[10px] font-black uppercase tracking-wider text-[#0B1B3A]">
                  Squad Setup &amp; Governance:
                </span>
                <ul className="flex flex-col gap-1.5 text-xs text-[#0B1B3A]">
                  <li className="flex items-center gap-2 p-1.5 rounded-xl bg-white border border-[#E8E3D8]">
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span className="truncate">Choose 3, 5, or 7 full-time specialists</span>
                  </li>
                  <li className="flex items-center gap-2 p-1.5 rounded-xl bg-white border border-[#E8E3D8]">
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span className="truncate">Dedicated Project Manager as single contact</span>
                  </li>
                  <li className="flex items-center gap-2 p-1.5 rounded-xl bg-white border border-[#E8E3D8]">
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span className="truncate">Direct daily standups in your Slack / Teams</span>
                  </li>
                  <li className="flex items-center gap-2 p-1.5 rounded-xl bg-white border border-[#E8E3D8]">
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span className="truncate">Design studio, video editors &amp; developers</span>
                  </li>
                </ul>
              </div>

              {/* Operational SLA Badges */}
              <div className="p-2.5 rounded-xl bg-[#ECE7DC] border border-[#D5CEBF] flex items-center justify-between text-[10px] text-[#5A6680]">
                <span className="font-bold text-[#0B1B3A]">4h Daily Western Overlap</span>
                <span>·</span>
                <span className="font-semibold text-[#0B1B3A]">100% In-House</span>
                <span>·</span>
                <span className="text-emerald-700 font-bold">Deploy in 7 Days</span>
              </div>
            </div>

            <div className="pt-3">
              <a
                href="#teams"
                className="btn-luxury-navy btn-shimmer w-full py-2.5 px-3 rounded-xl text-xs font-black uppercase tracking-wider flex items-center justify-center gap-1.5 group cursor-pointer shadow-md"
              >
                <span>Compare Squads (3/5/7)</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

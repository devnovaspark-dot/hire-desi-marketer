"use client";

import React from "react";
import Image from "next/image";
import {
  ShieldCheck,
  CheckCircle2,
  Users,
  Clock,
  Sparkles,
  Building2,
  MapPin,
  Lock,
  Globe2,
  PhoneCall,
  Award,
} from "lucide-react";

export function WebDesignTeamShowcase() {
  return (
    <div className="space-y-4 sm:space-y-6">
      {/* Signature Agency Campus & Developer Squad Showcase Banner */}
      <div className="rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#060B22] via-[#0B1536] to-[#060B22] text-white p-3.5 sm:p-8 lg:p-12 border border-white/15 shadow-2xl relative overflow-hidden">
        {/* Ambient Glows */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#FFB020]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-12 items-center relative z-10">
          {/* Left Column (6 cols): Real Campus & Team Photo */}
          <div className="lg:col-span-6 space-y-3 sm:space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-white text-[10px] font-black uppercase tracking-wider border border-white/15 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Verified In-House Engineering Center</span>
            </div>

            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/20 shadow-2xl group">
              <Image
                src="/images/1200_1000px.webp"
                alt="Hire Desi Marketer Web Engineering Headquarters in Bhubaneswar, India"
                fill
                className="object-cover group-hover:scale-103 transition-transform duration-500"
                sizes="(max-width: 1024px) 100vw, 540px"
              />

              {/* Bottom vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#060B22]/90 via-[#060B22]/30 to-transparent pointer-events-none" />

              {/* Floating Pill over photo */}
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[10px] pointer-events-none">
                <span className="px-3 py-1 rounded-lg bg-[#060B22]/90 backdrop-blur-md border border-white/20 text-white font-bold flex items-center gap-1.5 shadow-lg">
                  <MapPin className="w-3.5 h-3.5 text-[#FFB020]" />
                  <span>Bhubaneswar HQ · Odisha, India</span>
                </span>
                <span className="px-3 py-1 rounded-lg bg-emerald-500/20 backdrop-blur-md border border-emerald-500/40 text-emerald-300 font-bold">
                  240+ In-House Specialists
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed">
              Every website is built, tested, and maintained by our salaried, full-time engineering employees under strict supervision. <strong className="text-white">Zero anonymous freelancer outsourcing.</strong>
            </p>
          </div>

          {/* Right Column (6 cols): Leadership Behind Your Success & Live Timezones */}
          <div className="lg:col-span-6 space-y-4 sm:space-y-6 text-left">
            <div>
              <span className="text-[10.5px] sm:text-xs font-black uppercase tracking-wider text-[#FFB020]">
                Engineering Leadership
              </span>
              <h3 className="font-display font-black text-lg sm:text-2xl lg:text-3xl text-white tracking-tight mt-0.5 sm:mt-1">
                Senior Architects Guiding Your Project From Discovery to Launch
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-1.5 sm:mt-2 leading-relaxed">
                You work directly with proven technical directors and project managers who speak fluent English, adhere to Western timelines, and guarantee milestone precision.
              </p>
            </div>

            {/* 3 Leadership Profiles Grid (3 side-by-side on mobile) */}
            <div className="grid grid-cols-3 gap-1.5 sm:gap-3">
              <div className="p-2 sm:p-3.5 rounded-xl sm:rounded-2xl bg-white/5 border border-white/10 flex flex-col items-center text-center space-y-1.5 sm:space-y-2 hover:border-[#FFB020]/40 transition-colors">
                <div className="relative w-11 h-11 sm:w-14 sm:h-14 rounded-full overflow-hidden border-2 border-[#FFB020]/50 shadow-md">
                  <Image
                    src="/images/team-sankarsan.webp"
                    alt="Sankarsan Nayak - Founder & CEO"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-display font-black text-[11px] sm:text-xs text-white leading-tight">
                    Sankarsan Nayak
                  </h4>
                  <span className="text-[9px] sm:text-[10px] text-[#FFB020] font-bold block truncate">
                    Founder &amp; CEO
                  </span>
                  <span className="text-[9px] text-slate-400 hidden sm:block mt-0.5">
                    Technical Strategy
                  </span>
                </div>
              </div>

              <div className="p-2 sm:p-3.5 rounded-xl sm:rounded-2xl bg-white/5 border border-white/10 flex flex-col items-center text-center space-y-1.5 sm:space-y-2 hover:border-[#FFB020]/40 transition-colors">
                <div className="relative w-11 h-11 sm:w-14 sm:h-14 rounded-full overflow-hidden border-2 border-[#FFB020]/50 shadow-md">
                  <Image
                    src="/images/team-pranjal.webp"
                    alt="Pranjal Sharma - Chief Operating Officer"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-display font-black text-[11px] sm:text-xs text-white leading-tight">
                    Pranjal Sharma
                  </h4>
                  <span className="text-[9px] sm:text-[10px] text-[#FFB020] font-bold block truncate">
                    COO
                  </span>
                  <span className="text-[9px] text-slate-400 hidden sm:block mt-0.5">
                    Client Delivery &amp; SLA
                  </span>
                </div>
              </div>

              <div className="p-2 sm:p-3.5 rounded-xl sm:rounded-2xl bg-white/5 border border-white/10 flex flex-col items-center text-center space-y-1.5 sm:space-y-2 hover:border-[#FFB020]/40 transition-colors">
                <div className="relative w-11 h-11 sm:w-14 sm:h-14 rounded-full overflow-hidden border-2 border-[#FFB020]/50 shadow-md">
                  <Image
                    src="/images/team-bikram.webp"
                    alt="Bikram Keshari Sahu - Operations Executive"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-display font-black text-[11px] sm:text-xs text-white leading-tight">
                    Bikram K. Sahu
                  </h4>
                  <span className="text-[9px] sm:text-[10px] text-[#FFB020] font-bold block truncate">
                    Ops Executive
                  </span>
                  <span className="text-[9px] text-slate-400 hidden sm:block mt-0.5">
                    QA &amp; Deployments
                  </span>
                </div>
              </div>
            </div>

            {/* Live Western Shifts & Trust Assurances */}
            <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-white/[0.04] border border-white/10 space-y-2 sm:space-y-3">
              <div className="flex items-center justify-between text-[11px] text-slate-300 border-b border-white/10 pb-2">
                <span className="font-bold text-white flex items-center gap-1.5">
                  <Globe2 className="w-3.5 h-3.5 text-[#FFB020]" />
                  <span>Timezone Overlap Guarantee</span>
                </span>
                <span className="text-emerald-400 font-extrabold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Live Sync
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-[10px]">
                <div className="p-2 rounded-lg bg-black/30 border border-white/5">
                  <span className="text-slate-400 block">🇺🇸 New York (EST)</span>
                  <span className="font-mono text-white font-bold">4–6h Overlap</span>
                </div>
                <div className="p-2 rounded-lg bg-black/30 border border-white/5">
                  <span className="text-slate-400 block">🇬🇧 London (GMT)</span>
                  <span className="font-mono text-white font-bold">5–7h Overlap</span>
                </div>
                <div className="p-2 rounded-lg bg-black/30 border border-white/5">
                  <span className="text-slate-400 block">🇦🇺 Sydney (AEST)</span>
                  <span className="font-mono text-white font-bold">6–8h Overlap</span>
                </div>
                <div className="p-2 rounded-lg bg-black/30 border border-white/5">
                  <span className="text-slate-400 block">🇨🇦 Toronto (EST)</span>
                  <span className="font-mono text-white font-bold">4–6h Overlap</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


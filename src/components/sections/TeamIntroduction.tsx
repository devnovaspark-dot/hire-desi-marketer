"use client";

import React from "react";
import Image from "next/image";
import {
  Sparkles,
  UserCheck,
  Building2,
  Lock,
  Clock,
  ArrowRight,
} from "lucide-react";

interface ExecutiveMember {
  name: string;
  role: string;
  badge: string;
  experience: string;
  image: string;
  bio: string;
  slaPill: string;
  tags: string[];
  ctaLabel: string;
  ctaHref: string;
}

const EXECUTIVE_LEADERSHIP: ExecutiveMember[] = [
  {
    name: "Shankarsan Nayak",
    role: "Founder & CEO",
    badge: "Executive Leadership",
    experience: "10+ Yrs Growth Strategy",
    image: "/images/team-sankarsan.png",
    bio: "Pioneering high-accountability Indian digital marketing teams for Western brands. Retains direct oversight of every client contract with a strict 100% delivery SLA guarantee.",
    slaPill: "Direct CEO Escalation Line",
    tags: ["Growth Strategy", "Retainer Backing", "Client Advisory"],
    ctaLabel: "Schedule Founder Call",
    ctaHref: "/quote",
  },
  {
    name: "Pranjal Sharma",
    role: "Founding Member & COO",
    badge: "Operations Desk",
    experience: "8+ Yrs Operations",
    image: "/images/team-pranjal.png",
    bio: "Overseeing day-to-day campaign governance, team training, client escalation resolution, and cross-border operational synchronization across US, UK & Australian time zones.",
    slaPill: "Daily Sprint Governance",
    tags: ["Operations", "Cross-Border Pacing", "15-Min Response"],
    ctaLabel: "Sync With Operations",
    ctaHref: "/quote",
  },
  {
    name: "Bikram Keshari Sahu",
    role: "Operations Executive",
    badge: "Execution Desk",
    experience: "6+ Yrs Technical Ops",
    image: "/images/team-bikram.png",
    bio: "Ensuring smooth tooling setups, daily sprint pacing, task completion audits, and team shift adherence with zero gig-economy or freelance outsourcing.",
    slaPill: "Daily Quality & Shift Audits",
    tags: ["Tooling & CRM", "Sprint Audits", "Shift Adherence"],
    ctaLabel: "Inquire Sprint Setup",
    ctaHref: "/quote",
  },
];

export function TeamIntroduction() {

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const targetId = href.replace("#", "");
      const el = document.getElementById(targetId);
      if (el) {
        const headerOffset = 95;
        const pos = el.getBoundingClientRect().top + window.pageYOffset - headerOffset;
        window.scrollTo({ top: pos, behavior: "smooth" });
        window.history.pushState(null, "", href);
      }
    }
  };

  return (
    <section id="about" className="py-6 sm:py-8 bg-[#F5F2EB] border-t border-[#DED7CA] scroll-mt-28">
      <div id="people" />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-3.5 sm:gap-4">
        
        {/* Section Heading - Compact & High-Impact */}
        <div className="text-center max-w-2xl mx-auto flex flex-col items-center gap-1 sm:gap-1.5">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EAE4D7] border border-[#D5CDBC] text-[#8C5300] text-[11px] font-black uppercase tracking-wider shadow-2xs">
            <Sparkles className="w-3 h-3 text-[#FFB020]" />
            <span>The Team Behind Your Growth</span>
          </div>

          <h2 className="font-display text-xl sm:text-2xl lg:text-3xl font-black text-[#0B1B3A] tracking-tight leading-tight">
            Seasoned Experts and{" "}
            <span className="text-[#9A5B00]">Dedicated Marketing Teams</span>
          </h2>

          <p className="text-xs sm:text-[13px] text-[#5A6680] leading-relaxed">
            Get a dedicated in-house marketing team backed by experienced leadership, seamless coordination, and business-aligned working hours.
          </p>
        </div>

        {/* Executive Leadership Dossier Cards — Compact Single-Window Fit */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-4 lg:gap-5 items-stretch">
          {EXECUTIVE_LEADERSHIP.map((member) => (
            <div
              key={member.name}
              className="bg-white rounded-2xl p-2.5 sm:p-3 md:p-3.5 flex flex-col justify-between gap-2.5 sm:gap-3 shadow-[0_10px_25px_rgba(11,27,58,0.06)] border border-[#D8D0C0] border-b-[3px] border-b-[#C9BFAC] hover:border-[#0B1B3A] hover:shadow-[0_16px_36px_rgba(11,27,58,0.12)] transition-all duration-300 group max-w-[265px] sm:max-w-[310px] md:max-w-none mx-auto w-full"
            >
              {/* Executive Portrait Frame - Exact 9/10 Native Aspect Ratio (100% Full Head, Chin, Neck & Collar Visibility) */}
              <div className="relative w-full aspect-[9/10] rounded-xl overflow-hidden bg-[#F2EDE4] border border-[#DDD5C7] shadow-2xs">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  unoptimized
                  priority
                  className="object-cover object-center group-hover:scale-102 transition-transform duration-500"
                />

                {/* Subtle Floating Live Desk Badge */}
                <div className="absolute top-1.5 right-1.5 sm:top-2 sm:right-2 z-10">
                  <span className="px-1.5 sm:px-2 py-0.5 rounded-full bg-emerald-950/90 backdrop-blur-md border border-emerald-400/30 text-emerald-300 text-[8px] sm:text-[9px] font-bold flex items-center gap-1 shadow-xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Live Desk
                  </span>
                </div>
              </div>

              {/* Bio & Details Cleanly Below The Image - Compact Typography */}
              <div className="flex flex-col gap-1.5 sm:gap-2 flex-1 justify-between">
                {/* Identity Header */}
                <div className="flex flex-col gap-0.5">
                  <div className="flex items-start justify-between gap-1.5">
                    <div>
                      <h3 className="font-display font-black text-sm sm:text-base md:text-lg text-[#0B1B3A] tracking-tight leading-tight">
                        {member.name}
                      </h3>
                      <span className="text-[10px] sm:text-xs font-bold text-[#9A5B00] block">
                        {member.role}
                      </span>
                    </div>
                    <span className="px-1.5 sm:px-2 py-0.5 rounded-md bg-[#EAE4D7] border border-[#D5CDBC] text-[#8C5300] text-[8px] sm:text-[9px] font-black uppercase tracking-wider shrink-0">
                      {member.badge}
                    </span>
                  </div>

                  <div className="flex items-center gap-1 text-[9px] sm:text-[10px] text-[#5A6680] font-semibold mt-0.5">
                    <Clock className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-[#9A5B00]" />
                    <span>{member.experience}</span>
                  </div>
                </div>

                {/* Bio Description (Concise 2 lines) */}
                <p className="text-[10px] sm:text-[11px] text-[#4A5568] leading-relaxed line-clamp-2">
                  {member.bio}
                </p>

                {/* Tag Pills */}
                <div className="flex flex-wrap gap-1">
                  {member.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-1.5 py-0.5 rounded-md bg-[#F4EFE6] border border-[#DDD5C7] text-[8px] sm:text-[9px] font-bold text-[#0B1B3A]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Direct SLA Guarantee Strip */}
                <div className="pt-1.5 border-t border-[#EAE4D8] flex items-center justify-between text-[9px] sm:text-[10px]">
                  <span className="flex items-center gap-1 font-bold text-[#8C5300] truncate">
                    <UserCheck className="w-3 h-3 text-[#FFB020] shrink-0" />
                    <span className="truncate">{member.slaPill}</span>
                  </span>
                  <span className="text-emerald-700 font-extrabold text-[8px] sm:text-[9px] shrink-0 ml-1">Daily SLA</span>
                </div>

                <a
                  href={member.ctaHref}
                  onClick={(e) => handleAnchorClick(e, member.ctaHref)}
                  className="btn-luxury-navy btn-shimmer w-full h-[30px] sm:h-[34px] px-2.5 rounded-lg text-[10px] sm:text-[11px] font-black uppercase tracking-wider flex items-center justify-center gap-1.5 cursor-pointer shadow-xs group-hover:border-white/30"
                >
                  <span>{member.ctaLabel}</span>
                  <ArrowRight className="w-3 h-3 stroke-[2.5] group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

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
    name: "Sankarsan Nayak",
    role: "Founder & CEO",
    badge: "Executive Leadership",
    experience: "10+ Yrs Growth Strategy",
    image: "/images/team-sankarsan.jpg",
    bio: "Pioneering high-accountability Indian digital marketing teams for Western brands. Retains direct oversight of every client contract with a strict 100% delivery SLA guarantee.",
    slaPill: "Direct CEO Escalation Line",
    tags: ["Growth Strategy", "Retainer Backing", "Client Advisory"],
    ctaLabel: "Schedule Founder Call",
    ctaHref: "#quote",
  },
  {
    name: "Pranjal Sharma",
    role: "Founding Member & COO",
    badge: "Operations Desk",
    experience: "8+ Yrs Operations",
    image: "/images/team-pranjal.jpg",
    bio: "Overseeing day-to-day campaign governance, team training, client escalation resolution, and cross-border operational synchronization across US, UK & Australian time zones.",
    slaPill: "Daily Sprint Governance",
    tags: ["Operations", "Cross-Border Pacing", "15-Min Response"],
    ctaLabel: "Sync With Operations",
    ctaHref: "#quote",
  },
  {
    name: "Bikram Keshari Sahu",
    role: "Operations Executive",
    badge: "Execution Desk",
    experience: "6+ Yrs Technical Ops",
    image: "/images/team-bikram.jpg",
    bio: "Ensuring smooth tooling setups, daily sprint pacing, task completion audits, and team shift adherence with zero gig-economy or freelance outsourcing.",
    slaPill: "Daily Quality & Shift Audits",
    tags: ["Tooling & CRM", "Sprint Audits", "Shift Adherence"],
    ctaLabel: "Inquire Sprint Setup",
    ctaHref: "#quote",
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
    <section id="people" className="py-12 lg:py-16 bg-[#F5F2EB] border-t border-[#DED7CA] scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-10">
        
        {/* Section Heading with Headroom & Verified Authority */}
        <div className="text-center max-w-3xl mx-auto flex flex-col items-center gap-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAE4D7] border border-[#D5CDBC] text-[#8C5300] text-xs font-black uppercase tracking-wider shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-[#FFB020]" />
            <span>The Team Behind Your Growth</span>
          </div>

          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-black text-[#0B1B3A] tracking-tight leading-tight">
            Led by veteran operators.{" "}
            <span className="text-[#9A5B00]">Staffed by in-house specialists.</span>
          </h2>

          <p className="text-sm sm:text-base text-[#5A6680] leading-relaxed">
            Zero gig-economy freelancers. Zero sub-contracting. Our team operates directly from our physical headquarters campus in Bhubaneswar, India with guaranteed Western shift synchronization.
          </p>

          {/* Institutional Trust Badges */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 pt-1 text-xs text-[#0B1B3A]">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#DDD5C7] font-bold shadow-2xs">
              <Building2 className="w-3.5 h-3.5 text-[#9A5B00]" />
              100% In-House Campus (Unit 3)
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#DDD5C7] font-bold shadow-2xs">
              <Lock className="w-3.5 h-3.5 text-emerald-700" />
              Strict Client Mutual NDAs
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#DDD5C7] font-bold shadow-2xs">
              <Clock className="w-3.5 h-3.5 text-blue-700" />
              Direct Western Shift Overlap
            </span>
          </div>
        </div>

        {/* Executive Leadership Dossier Cards — Compact on Mobile */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 items-stretch">
          {EXECUTIVE_LEADERSHIP.map((member) => (
            <div
              key={member.name}
              className="bg-white rounded-2xl sm:rounded-3xl p-3.5 sm:p-6 flex flex-col justify-between gap-3.5 sm:gap-5 shadow-[0_12px_30px_rgba(11,27,58,0.08)] border-2 border-[#D8D0C0] border-b-[3.5px] sm:border-b-[4px] border-b-[#C9BFAC] hover:border-[#0B1B3A] hover:shadow-[0_24px_48px_rgba(11,27,58,0.14)] transition-all duration-300 group"
            >
              {/* Executive Portrait Frame - Studio Framed with Headroom */}
              <div className="relative w-full h-44 sm:h-64 rounded-xl sm:rounded-2xl overflow-hidden bg-[#0A122A] shadow-md border border-black/10">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />

                {/* Top Status Indicators */}
                <div className="absolute top-2.5 inset-x-2.5 sm:top-3 sm:inset-x-3 flex items-center justify-between gap-2 z-10">
                  <span className="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full bg-[#060B22]/90 backdrop-blur-md border border-[#FFB020]/40 text-[#FFB020] text-[9px] sm:text-[10px] font-black uppercase tracking-wider shadow-sm">
                    {member.badge}
                  </span>
                  <span className="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full bg-emerald-950/90 backdrop-blur-md border border-emerald-400/30 text-emerald-300 text-[9px] sm:text-[10px] font-bold flex items-center gap-1.5 shadow-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Live Desk
                  </span>
                </div>

                {/* Bottom Scrim with Name, Title & Experience */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#040817] via-[#040817]/85 to-transparent p-3 sm:p-4 pt-10 sm:pt-12 flex flex-col justify-end pointer-events-none">
                  <div className="flex items-center justify-between">
                    <h3 className="font-display font-black text-lg sm:text-2xl text-white tracking-tight leading-tight">
                      {member.name}
                    </h3>
                  </div>
                  <div className="flex items-center justify-between text-[11px] sm:text-xs mt-0.5">
                    <span className="font-bold text-[#FFB020]">{member.role}</span>
                    <span className="text-[10px] sm:text-[11px] text-slate-300 font-semibold">{member.experience}</span>
                  </div>
                </div>
              </div>

              {/* Bio & Direct Accountability Framework */}
              <div className="flex flex-col gap-2.5 sm:gap-3.5 flex-1 justify-between">
                <p className="text-[11px] sm:text-[13px] text-[#4A5568] leading-relaxed">
                  {member.bio}
                </p>

                {/* Tag Pills */}
                <div className="flex flex-wrap gap-1">
                  {member.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded-md bg-[#F4EFE6] border border-[#DDD5C7] text-[9px] sm:text-[10px] font-bold text-[#0B1B3A]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Direct SLA Guarantee Strip */}
                <div className="pt-2 sm:pt-3 border-t border-[#EAE4D8] flex items-center justify-between text-[11px] sm:text-xs">
                  <span className="flex items-center gap-1.5 font-bold text-[#8C5300] truncate">
                    <UserCheck className="w-3.5 h-3.5 text-[#FFB020] shrink-0" />
                    <span className="truncate">{member.slaPill}</span>
                  </span>
                  <span className="text-emerald-700 font-extrabold text-[10px] sm:text-[11px] shrink-0 ml-1">Daily SLA</span>
                </div>

                <a
                  href={member.ctaHref}
                  onClick={(e) => handleAnchorClick(e, member.ctaHref)}
                  className="btn-luxury-navy btn-shimmer w-full h-[36px] sm:h-[38px] px-3 rounded-xl text-xs font-black uppercase tracking-wider flex items-center justify-center gap-1.5 cursor-pointer shadow-sm group-hover:border-white/30"
                >
                  <span>{member.ctaLabel}</span>
                  <ArrowRight className="w-3.5 h-3.5 stroke-[2.5] group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

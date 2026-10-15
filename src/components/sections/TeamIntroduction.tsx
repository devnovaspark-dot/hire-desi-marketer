"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  UserCheck,
  Building2,
  Lock,
  Clock,
  ArrowRight,
  Layers,
  Headphones,
  Search,
  Zap,
  Megaphone,
  PenTool,
  Palette,
  Terminal,
  Cpu,
  Wifi,
  Globe2,
  Shield,
  Check,
} from "lucide-react";
import { cn } from "@/lib/utils";

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

const INSTITUTIONAL_DEPARTMENTS = [
  {
    id: "success",
    title: "Client Success Desk",
    category: "Operations & Governance",
    icon: Headphones,
    colorGrad: "from-[#2563EB] via-[#1D4ED8] to-[#0F172A]",
    shadowColor: "rgba(37,99,235,0.35)",
    roles: "Dedicated Account Managers · Agile Scrum Masters · Escalation Hotline",
    sla: "15-Min Response SLA during active client shift",
    tools: ["Slack Connect", "Asana", "Notion", "TimeDoctor"],
    campusPresence: "Floor 2 · Leadership Wing",
  },
  {
    id: "seo",
    title: "SEO & Search Engine Team",
    category: "Search & Visibility",
    icon: Search,
    colorGrad: "from-[#059669] via-[#047857] to-[#064E3B]",
    shadowColor: "rgba(5,150,105,0.35)",
    roles: "Technical SEO Leads · Local Map Pack Experts · Outreach & Citation Leads",
    sla: "Weekly SERP position audits & schema validation",
    tools: ["Ahrefs", "SEMrush", "Screaming Frog", "Google Search Console"],
    campusPresence: "Floor 2 · Search Wing",
  },
  {
    id: "performance",
    title: "Performance Media Desk",
    category: "Paid Acquisition",
    icon: Zap,
    colorGrad: "from-[#D97706] via-[#B45309] to-[#78350F]",
    shadowColor: "rgba(217,119,6,0.35)",
    roles: "PPC Strategists · Meta & Google Ads Media Buyers · CAPI Tracking Engineers",
    sla: "Daily ROAS pacing & weekly creative angle testing",
    tools: ["Meta Ads Manager", "Google Ads", "GA4", "Server CAPI"],
    campusPresence: "Floor 3 · Media Bay",
  },
  {
    id: "social",
    title: "Social & Community",
    category: "Distribution & Engagement",
    icon: Megaphone,
    colorGrad: "from-[#E11D48] via-[#BE123C] to-[#881337]",
    shadowColor: "rgba(225,29,72,0.35)",
    roles: "Short-Form Creators · Community Managers · Trend & Culture Analysts",
    sla: "Active shift distribution & 1-hour comment response",
    tools: ["Buffer", "Canva Pro", "CapCut", "Meta Business Suite"],
    campusPresence: "Floor 3 · Content Studio",
  },
  {
    id: "content",
    title: "Content & Editorial",
    category: "Native Copywriting",
    icon: PenTool,
    colorGrad: "from-[#0D9488] via-[#0F766E] to-[#134E4A]",
    shadowColor: "rgba(13,148,136,0.35)",
    roles: "Conversion Copywriters · Technical Researchers · Native Proofing Editors",
    sla: "Two-stage editorial QA & 100% plagiarism verification",
    tools: ["Grammarly Pro", "SurferSEO", "Google Docs", "Airtable"],
    campusPresence: "Floor 2 · Editorial Desk",
  },
  {
    id: "creative",
    title: "Creative & Motion Studio",
    category: "Visual & Motion Design",
    icon: Palette,
    colorGrad: "from-[#7C3AED] via-[#6D28D9] to-[#4C1D95]",
    shadowColor: "rgba(124,58,237,0.35)",
    roles: "Brand Designers · 3D Illustrators · Vertical Short-Form Video Editors",
    sla: "48-Hour rapid creative delivery & high-CTR testing",
    tools: ["Figma", "After Effects", "Photoshop", "Premiere Pro"],
    campusPresence: "Floor 3 · Studio 1",
  },
  {
    id: "engineering",
    title: "Web & Technical Engineering",
    category: "Engineering & Speed",
    icon: Terminal,
    colorGrad: "from-[#1E293B] via-[#0F172A] to-[#020617]",
    shadowColor: "rgba(30,41,59,0.35)",
    roles: "Full-Stack Next.js/WordPress Devs · QA Testers · PageSpeed Specialists",
    sla: "95+ Mobile Google PageSpeed & Git-audited sprints",
    tools: ["Next.js", "WordPress", "Webflow", "Vercel", "GitHub"],
    campusPresence: "Floor 2 · Tech Hub",
  },
];

export function TeamIntroduction() {
  const [selectedDeptId, setSelectedDeptId] = useState<string | null>(null);

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

                {/* Sleek Action Button */}
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

        {/* Specialized In-House Institutional Organization - High-Impact 3D Deck */}
        <div className="bg-gradient-to-b from-[#FFFFFF] via-[#FAF8F5] to-[#F5F2EB] rounded-2xl sm:rounded-3xl p-4 sm:p-8 lg:p-9 shadow-[0_25px_60px_-15px_rgba(11,27,58,0.12),inset_0_2px_0_rgba(255,255,255,1)] border-2 border-[#D8D0C0] border-b-[4px] sm:border-b-[5px] border-b-[#C4B8A2] flex flex-col gap-4 sm:gap-6 relative overflow-hidden">
          {/* Specular Top Rim */}
          <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#FFB020] to-transparent opacity-80" />

          {/* Section Subheader */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3 sm:gap-4 pb-3 sm:pb-5 border-b border-[#E2DBD0]">
            <div>
              <div className="flex items-center gap-1.5 text-[10px] sm:text-xs font-black uppercase tracking-wider text-[#9A5B00] mb-0.5">
                <Layers className="w-3.5 h-3.5 text-[#FFB020]" />
                Institutional Architecture &amp; Governance
              </div>
              <h3 className="font-display text-xl sm:text-3xl font-black text-[#0B1B3A] tracking-tight">
                In-House Department Organization
              </h3>
              <p className="text-xs sm:text-sm text-[#5A6680] mt-0.5 sm:mt-1 max-w-2xl">
                Every client account is assigned dedicated full-time talent operating from our physical campus under senior leadership governance with zero freelance intermediaries.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-2 self-start lg:self-auto">
              <span className="px-3 py-1 rounded-full bg-[#0B1B3A] text-white text-[11px] sm:text-xs font-extrabold flex items-center gap-1.5 shadow-sm">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Zero Gig Subcontracting</span>
              </span>
              <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-300 text-[11px] sm:text-xs font-black flex items-center gap-1.5 shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>100% In-House Campus</span>
              </span>
            </div>
          </div>

          {/* 7 Specialized Departments Grid — 2 Horizontally on Mobile */}
          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2.5 sm:gap-4">
            {INSTITUTIONAL_DEPARTMENTS.map((dept) => {
              const DeptIcon = dept.icon;
              const isSelected = selectedDeptId === dept.id;

              return (
                <div
                  key={dept.id}
                  onClick={() => setSelectedDeptId(isSelected ? null : dept.id)}
                  className={cn(
                    "p-2.5 sm:p-4 rounded-xl sm:rounded-2xl bg-white border-2 transition-all duration-300 flex flex-col justify-between gap-2.5 sm:gap-3.5 shadow-sm cursor-pointer group",
                    isSelected
                      ? "border-[#FFB020] shadow-[0_8px_24px_rgba(255,176,32,0.18)] scale-[1.02] bg-gradient-to-b from-[#FFFDF7] to-white"
                      : "border-[#DCD5C6] hover:border-[#0B1B3A] hover:shadow-md"
                  )}
                >
                  <div className="flex flex-col gap-1.5 sm:gap-2.5">
                    {/* Top Row: 3D Embossed Socket + Campus Badge */}
                    <div className="flex items-center justify-between">
                      {/* 3D Skeuomorphic Socket */}
                      <div
                        style={{
                          boxShadow: `0 4px 10px ${dept.shadowColor}, inset 0 1px 1px rgba(255,255,255,0.7), inset 0 -1px 2px rgba(0,0,0,0.4)`,
                        }}
                        className={cn(
                          "w-7 h-7 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-gradient-to-b p-0.5 flex items-center justify-center shrink-0 border border-white/30 text-white transition-transform group-hover:scale-105",
                          dept.colorGrad
                        )}
                      >
                        <DeptIcon className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]" />
                      </div>

                      <span className="text-[8px] sm:text-[9px] font-black uppercase tracking-wider text-[#7B5B14] bg-[#F7F4EE] px-1.5 sm:px-2 py-0.5 rounded-full border border-[#DDD5C7] truncate">
                        {dept.campusPresence.split("·")[0].trim()}
                      </span>
                    </div>

                    {/* Department Title & Discipline Category */}
                    <div>
                      <span className="text-[9px] sm:text-[10px] font-extrabold uppercase tracking-wider text-[#9A5B00] block">
                        {dept.category}
                      </span>
                      <h4 className="font-display font-black text-xs sm:text-base text-[#0B1B3A] group-hover:text-[#9A5B00] transition-colors leading-tight">
                        {dept.title}
                      </h4>
                    </div>

                    {/* Roles Breakdown */}
                    <p className="text-[10px] sm:text-[11px] text-[#5A6680] leading-snug line-clamp-2 sm:line-clamp-none">
                      {dept.roles}
                    </p>

                    {/* Key Tooling Pills */}
                    <div className="flex flex-wrap gap-1 pt-0.5">
                      {dept.tools.slice(0, 3).map((tool) => (
                        <span
                          key={tool}
                          className="px-1.5 py-0.2 rounded bg-[#FAF8F4] border border-[#DDD5C7] text-[8px] sm:text-[9px] font-extrabold text-[#0B1B3A]"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Bottom SLA Pill */}
                  <div className="pt-1.5 sm:pt-2.5 border-t border-[#ECE5D9] flex items-center justify-between text-[9px] sm:text-[10px]">
                    <span className="text-[#8C5300] font-bold truncate max-w-[110px] sm:max-w-[170px]">
                      {dept.sla}
                    </span>
                    <span className="text-emerald-700 font-black shrink-0 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      Active
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* 4 Physical Campus Security & Governance Certification Docks — 2 Horizontally on Mobile */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-3.5 pt-2">
            <div className="p-2.5 sm:p-3.5 rounded-xl sm:rounded-2xl bg-white border border-[#DDD5C7] shadow-xs flex items-start gap-2 sm:gap-3">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg sm:rounded-xl bg-[#0B1B3A] text-[#FFB020] flex items-center justify-center shrink-0 shadow-xs">
                <Lock className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </div>
              <div className="flex flex-col min-w-0">
                <strong className="text-[11px] sm:text-xs font-black text-[#0B1B3A] leading-tight truncate">Biometric Access</strong>
                <span className="text-[10px] sm:text-[11px] text-[#5A6680] leading-tight mt-0.5 line-clamp-2">
                  Fingerprint doors. Zero outside visitors.
                </span>
              </div>
            </div>

            <div className="p-2.5 sm:p-3.5 rounded-xl sm:rounded-2xl bg-white border border-[#DDD5C7] shadow-xs flex items-start gap-2 sm:gap-3">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg sm:rounded-xl bg-emerald-800 text-white flex items-center justify-center shrink-0 shadow-xs">
                <Wifi className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </div>
              <div className="flex flex-col min-w-0">
                <strong className="text-[11px] sm:text-xs font-black text-[#0B1B3A] leading-tight truncate">Dual 1 Gbps Fiber</strong>
                <span className="text-[10px] sm:text-[11px] text-[#5A6680] leading-tight mt-0.5 line-clamp-2">
                  Redundant leased lines + generator.
                </span>
              </div>
            </div>

            <div className="p-2.5 sm:p-3.5 rounded-xl sm:rounded-2xl bg-white border border-[#DDD5C7] shadow-xs flex items-start gap-2 sm:gap-3">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg sm:rounded-xl bg-[#0B1B3A] text-white flex items-center justify-center shrink-0 shadow-xs">
                <Shield className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#FFB020]" />
              </div>
              <div className="flex flex-col min-w-0">
                <strong className="text-[11px] sm:text-xs font-black text-[#0B1B3A] leading-tight truncate">Cleanroom Isolation</strong>
                <span className="text-[10px] sm:text-[11px] text-[#5A6680] leading-tight mt-0.5 line-clamp-2">
                  Air-gapped client VPC logins &amp; NDAs.
                </span>
              </div>
            </div>

            <div className="p-2.5 sm:p-3.5 rounded-xl sm:rounded-2xl bg-white border border-[#DDD5C7] shadow-xs flex items-start gap-2 sm:gap-3">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg sm:rounded-xl bg-blue-900 text-white flex items-center justify-center shrink-0 shadow-xs">
                <Globe2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-300" />
              </div>
              <div className="flex flex-col min-w-0">
                <strong className="text-[11px] sm:text-xs font-black text-[#0B1B3A] leading-tight truncate">Western Shifts</strong>
                <span className="text-[10px] sm:text-[11px] text-[#5A6680] leading-tight mt-0.5 line-clamp-2">
                  Live desk overlap across US, UK &amp; AU.
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

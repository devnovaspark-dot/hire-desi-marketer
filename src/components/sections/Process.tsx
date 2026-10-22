"use client";

import React from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  ArrowRight,
  FileSearch,
  Users,
  MessageSquareCode,
  LineChart,
  Sparkles,
  Check,
  Clock,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { cn } from "@/lib/utils";

export function Process() {
  const steps = [
    {
      number: "01",
      icon: FileSearch,
      title: "24-Hour Growth Audit and Strategy",
      subtitle: "Tailored 90-Day Roadmap",
      description:
        "Share your business goals, existing marketing tools, and challenges. Receive a tailored 90-day growth roadmap, competitor gap analysis, and channel recommendations within 24 hours.",
      slaBadge: "< 24h Turnaround",
      deliverable: "90-day roadmap and competitor analysis",
      highlights: ["Free consultation with no obligation", "Mutual non-disclosure agreement"],
    },
    {
      number: "02",
      icon: Users,
      title: "Choose Your Engagement Model",
      subtitle: "Flexible Marketing Support for Your Needs",
      description:
        "Opt for pay-as-you-go hourly support, an all-in-one growth package, or a team of 3, 5, or 7 in-house marketers.",
      slaBadge: "Flexible Terms",
      deliverable: "Defined team roles, deliverables, and project scope",
      highlights: ["Flexible hourly support", "Integrated growth package"],
    },
    {
      number: "03",
      icon: MessageSquareCode,
      title: "Start Collaborating on Day One",
      subtitle: "Seamless Team Integration",
      description:
        "Meet your dedicated team, connect through Slack or Microsoft Teams, share your brand guidelines, and kick off your first sprint with clear goals and priorities.",
      slaBadge: "Day 1 Active",
      deliverable: "Dedicated communication channel and kickoff meeting",
      highlights: ["Working-hour alignment", "Direct collaboration with specialists"],
    },
    {
      number: "04",
      icon: LineChart,
      title: "Track Weekly Progress and Performance",
      subtitle: "Consistent Delivery and Measurable Growth",
      description:
        "Monitor campaign performance, search rankings, conversions, and ROAS through your reporting dashboard. Review weekly progress, identify opportunities, and refine marketing strategies using performance data.",
      slaBadge: "Weekly Reviews",
      deliverable: "Performance dashboard and weekly review call",
      highlights: ["Campaign performance tracking", "Weekly optimisation and reporting"],
    },
  ];

  return (
    <section id="process" className="py-12 lg:py-16 bg-[#F4F1EA] border-y border-[#DED7CA] scroll-mt-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-8">
        {/* Section Heading */}
        <SectionHeading
          kicker="How We Work"
          title={
            <>
              A Clear Path from{" "}
              <span className="text-[#9A5B00]">Planning to Execution</span>
            </>
          }
          subtitle="Start with a straightforward process, transparent expectations, and weekly deliverables designed around your business goals."
          align="center"
        />

        {/* 4-Step High-Tech Skeuomorphic Pipeline Grid — 2 Horizontally on Mobile */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-5 items-stretch relative">
          {steps.map((step, idx) => {
            const StepIcon = step.icon;
            return (
              <div
                key={step.number}
                className="bg-gradient-to-b from-[#FFFFFF] via-[#FAF8F5] to-[#F5F2EB] rounded-2xl sm:rounded-3xl p-3 sm:p-6 shadow-[0_12px_30px_-10px_rgba(11,27,58,0.1),inset_0_2px_0_rgba(255,255,255,1)] border-2 border-[#D8D0C0] border-b-[3.5px] sm:border-b-[4px] border-b-[#C4B8A2] relative flex flex-col justify-between gap-2.5 sm:gap-4 group hover:-translate-y-1 transition-all duration-300"
              >
                {/* Specular Top Rim */}
                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#FFB020] to-transparent opacity-80" />

                {/* Top Step Pill & 3D Tactile Icon */}
                <div className="flex flex-col gap-2 sm:gap-3.5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 sm:gap-1.5 flex-wrap">
                      <span className="font-display font-black text-[10px] sm:text-xs uppercase tracking-wider text-[#9A5B00] bg-[#FFB020]/20 px-1.5 sm:px-2 py-0.5 rounded-full border border-[#FFB020]/40">
                        {step.number}
                      </span>
                      <span className="text-[9px] sm:text-[10px] font-extrabold text-emerald-800 bg-emerald-100 border border-emerald-300 px-1.5 sm:px-2 py-0.2 sm:py-0.5 rounded-full truncate">
                        {step.slaBadge}
                      </span>
                    </div>

                    {/* 3D Tactile Gold Icon Capsule */}
                    <div className="w-8 h-8 sm:w-11 sm:h-11 rounded-xl sm:rounded-2xl bg-gradient-to-b from-[#FFF2CC] via-[#FFE299] to-[#FFD566] border border-[#FFB020] shadow-[0_3px_8px_rgba(255,176,32,0.35),inset_0_1.5px_0_rgba(255,255,255,0.9)] flex items-center justify-center text-[#060B22] group-hover:scale-105 transition-transform shrink-0">
                      <StepIcon className="w-4 h-4 sm:w-5 sm:h-5 text-[#060B22] stroke-[2.2]" />
                    </div>
                  </div>

                  {/* Title & Description */}
                  <div className="flex flex-col gap-0.5 sm:gap-1 text-left">
                    <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-wider text-[#9A5B00]">
                      {step.subtitle}
                    </span>
                    <h3 className="font-display text-xs sm:text-lg font-black text-[#0B1B3A] tracking-tight group-hover:text-[#9A5B00] transition-colors leading-snug">
                      {step.title}
                    </h3>
                    <p className="text-[10px] sm:text-xs text-[#5A6680] leading-snug sm:leading-relaxed mt-0.5 line-clamp-3 sm:line-clamp-none">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Tangible Delivered Output Well */}
                <div className="flex flex-col gap-1.5 sm:gap-2 pt-1.5 sm:pt-2 border-t border-[#E8E1D3]">
                  <div className="p-1.5 sm:p-2.5 rounded-lg sm:rounded-xl bg-[#FAF8F5] border border-[#DDD5C7] shadow-2xs flex flex-col gap-0.5 text-left">
                    <span className="text-[8px] sm:text-[9px] font-black uppercase tracking-wider text-[#9A5B00] flex items-center gap-1">
                      <Sparkles className="w-2 h-2 sm:w-2.5 sm:h-2.5 text-[#FFB020]" />
                      <span>Milestone:</span>
                    </span>
                    <span className="text-[10px] sm:text-xs font-black text-[#0B1B3A] leading-tight truncate">
                      {step.deliverable}
                    </span>
                  </div>

                  {/* Key Highlights */}
                  <div className="flex flex-col gap-0.5 sm:gap-1 text-left">
                    {step.highlights.slice(0, 2).map((h, i) => (
                      <div key={i} className="flex items-center gap-1 text-[9px] sm:text-[11px] text-[#5A6680] font-bold">
                        <div className="w-3 h-3 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
                          <Check className="w-2 h-2 stroke-[3]" />
                        </div>
                        <span className="truncate">{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Desktop Step Flow Arrow */}
                {idx < steps.length - 1 && (
                  <div className="hidden lg:flex absolute -right-3.5 top-1/2 -translate-y-1/2 z-20 w-7 h-7 rounded-full bg-white border border-[#DDD5C7] shadow-sm items-center justify-center text-[#9A5B00]">
                    <ArrowRight className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Operational Assurance Strip & Direct CTA */}
        <div className="p-4 sm:p-5 rounded-3xl bg-gradient-to-r from-[#FAF8F2] via-[#F4EFE6] to-[#ECE6DA] border-2 border-[#DDD5C7] shadow-sm flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs text-[#0B1B3A]">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span className="font-bold">Zero Setup Fees</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#9A5B00] shrink-0" />
              <span className="font-bold">Cancel or Scale Anytime</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-[#FFB020] shrink-0" />
              <span className="font-bold">100% In-House Campus Staff</span>
            </div>
            <div className="flex items-center gap-2">
              <MessageSquareCode className="w-4 h-4 text-[#0B1B3A] shrink-0" />
              <span className="font-bold">Direct Slack Bridge</span>
            </div>
          </div>

          <a
            href="#quote"
            className="btn-luxury-gold btn-shimmer h-[44px] px-6 rounded-xl text-xs font-black uppercase tracking-wider inline-flex items-center justify-center gap-2 cursor-pointer shadow-md whitespace-nowrap self-start lg:self-auto"
          >
            <span>Get Your Free 24-Hour Growth Plan</span>
            <ArrowRight className="w-4 h-4 stroke-[2.5]" />
          </a>
        </div>
      </div>
    </section>
  );
}

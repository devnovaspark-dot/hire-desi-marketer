import React from "react";
import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SERVICE_CATEGORIES } from "@/data/services";
import { Check, Sparkles } from "lucide-react";

export function Services() {
  return (
    <section id="stack" className="py-10 lg:py-14 bg-[#040716] text-white relative overflow-hidden scroll-mt-28">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 -right-40 w-96 h-96 bg-[#FFB020]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-8 relative z-10">
        {/* Section Heading */}
        <SectionHeading
          kicker="Expertise &amp; 2026 Tech Stack"
          title={
            <>
              Every channel.{" "}
              <span className="text-[#FFB020]">The tools that matter now.</span>
            </>
          }
          subtitle="Our Indian marketing specialists are certified and experienced across the complete modern growth stack."
          theme="dark"
          align="center"
        />

        {/* 6 Core Service Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {SERVICE_CATEGORIES.map((category) => (
            <div
              key={category.id}
              className="skeuo-card-dark rounded-3xl p-6 flex flex-col justify-between border border-white/10 hover:border-[#FFB020]/40 transition-all relative group"
            >
              <div className="flex flex-col gap-4">
                {/* Title & Subtitle */}
                <div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-[#FFB020] block mb-1">
                    {category.subtitle}
                  </span>
                  <h3 className="font-display text-xl sm:text-2xl font-black text-white">
                    {category.title}
                  </h3>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {category.description}
                </p>

                {/* Tool Icons Strip */}
                <div className="flex flex-col gap-2 pt-2 border-t border-white/10">
                  <span className="text-[10px] font-black uppercase tracking-wider text-slate-400">
                    Tools We Deploy Daily:
                  </span>
                  <div className="flex flex-wrap items-center gap-2">
                    {category.tools.map((tool) => (
                      <div
                        key={tool.name}
                        title={tool.name}
                        className="w-8 h-8 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center p-1.5 hover:border-[#FFB020]/60 hover:scale-110 transition-all cursor-pointer relative group/tool"
                      >
                        <Image
                          src={tool.icon}
                          alt={tool.name}
                          width={16}
                          height={16}
                          className="w-4 h-4 object-contain"
                        />
                        <div className="absolute -bottom-7 left-1/2 -translate-x-1/2 bg-[#040716] border border-white/20 text-white text-[10px] font-bold px-2 py-0.5 rounded opacity-0 group-hover/tool:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-20 shadow-xl">
                          {tool.name}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Deliverables */}
                <div className="flex flex-col gap-1.5 pt-2 border-t border-white/10">
                  <span className="text-[10px] font-black uppercase tracking-wider text-slate-400">
                    Core Deliverables:
                  </span>
                  <ul className="flex flex-col gap-1.5 text-xs text-slate-300">
                    {category.deliverables.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span className="leading-tight text-[11px] sm:text-xs">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Code2,
  Layers,
  Sparkles,
  CheckCircle2,
  Laptop,
  Cpu,
  ArrowRight,
  Database,
  Globe,
} from "lucide-react";
import { MODERN_TECH, CMS_PLATFORMS, WebTechItem } from "@/data/web-design-services";
import { cn } from "@/lib/utils";

export function WebDesignTechStack() {
  const [activeTab, setActiveTab] = useState<"all" | "modern" | "cms">("all");

  const items: WebTechItem[] =
    activeTab === "all"
      ? [...MODERN_TECH, ...CMS_PLATFORMS]
      : activeTab === "modern"
      ? MODERN_TECH
      : CMS_PLATFORMS;

  return (
    <div className="space-y-10">
      {/* Tab Switcher */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
        <button
          type="button"
          onClick={() => setActiveTab("all")}
          className={cn(
            "px-5 py-2.5 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer select-none",
            activeTab === "all"
              ? "bg-[#060B22] text-[#FFB020] border border-[#FFB020]/40 shadow-sm"
              : "bg-white text-slate-600 border border-[#E2DBD0] hover:border-slate-400 hover:text-[#0B1B3A]"
          )}
        >
          All Stacks ({MODERN_TECH.length + CMS_PLATFORMS.length})
        </button>
        <button
          type="button"
          onClick={() => setActiveTab("modern")}
          className={cn(
            "px-5 py-2.5 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer select-none",
            activeTab === "modern"
              ? "bg-[#060B22] text-[#FFB020] border border-[#FFB020]/40 shadow-sm"
              : "bg-white text-slate-600 border border-[#E2DBD0] hover:border-slate-400 hover:text-[#0B1B3A]"
          )}
        >
          Modern Development Technologies ({MODERN_TECH.length})
        </button>
        <button
          type="button"
          onClick={() => setActiveTab("cms")}
          className={cn(
            "px-5 py-2.5 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer select-none",
            activeTab === "cms"
              ? "bg-[#060B22] text-[#FFB020] border border-[#FFB020]/40 shadow-sm"
              : "bg-white text-slate-600 border border-[#E2DBD0] hover:border-slate-400 hover:text-[#0B1B3A]"
          )}
        >
          CMS &amp; E-commerce Platforms ({CMS_PLATFORMS.length})
        </button>
      </div>

      {/* Grid of Technologies */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
        {items.map((tech) => (
          <div
            key={tech.name}
            className="p-5 rounded-2xl bg-white border border-[#E2DBD0] skeuo-card-light space-y-3 transition-all duration-200 hover:-translate-y-1 hover:border-slate-400 hover:shadow-md flex flex-col justify-between"
          >
            <div className="space-y-2.5">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center p-2 shrink-0">
                  {tech.icon ? (
                    <Image
                      src={tech.icon}
                      alt={tech.name}
                      width={24}
                      height={24}
                      className="object-contain"
                    />
                  ) : (
                    <Code2 className="w-5 h-5 text-[#B87A00]" />
                  )}
                </div>
                <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 border border-slate-200">
                  {tech.tag}
                </span>
              </div>

              <div>
                <h4 className="font-display font-black text-base text-[#0B1B3A]">
                  {tech.name}
                </h4>
                <p className="text-xs text-slate-500 leading-relaxed mt-1">
                  {tech.description}
                </p>
              </div>
            </div>

            <div className="pt-2 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-bold text-[#B87A00]">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Full Engineering Support</span>
            </div>
          </div>
        ))}
      </div>

      {/* Supporting Message Card (Exact Requirement from Prompt) */}
      <div className="p-6 sm:p-8 rounded-3xl skeuo-card-dark text-white border border-white/10 shadow-xl relative overflow-hidden">
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-slate-200 text-xs font-black uppercase tracking-wider border border-white/10">
              <Sparkles className="w-3.5 h-3.5 text-[#FFB020]" />
              <span>Seamless Migration &amp; Upgrades</span>
            </div>
            <h3 className="font-display font-black text-xl sm:text-2xl text-white tracking-tight">
              Already have a website? No problem.
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              We can work with your existing technology stack to redesign, upgrade,
              customize, and enhance your website without necessarily rebuilding
              everything from scratch. We preserve existing SEO rankings, backlink
              equity, and user data while modernizing your frontend.
            </p>
          </div>

          <a
            href="#lead-form"
            className="btn-luxury-gold btn-shimmer px-6 py-3 rounded-xl text-xs font-black uppercase tracking-wider inline-flex items-center gap-2 shrink-0 shadow-lg cursor-pointer"
          >
            <span>Audit My Existing Website</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
}

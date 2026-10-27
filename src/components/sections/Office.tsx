"use client";

import React, { useState } from "react";
import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  MapPin,
  Phone,
  MessageSquare,
  Mail,
  ExternalLink,
  Video,
  Wifi,
  ShieldCheck,
  Sparkles,
  Clock,
  Globe2,
  Cpu,
  Radio,
  Building2,
} from "lucide-react";
import { cn } from "@/lib/utils";

export function Office() {
  const [activeTab, setActiveTab] = useState<"specs" | "sync" | "contact">("specs");

  return (
    <section id="contact" className="py-12 lg:py-16 bg-[#FAF8F5] relative border-t border-[#DED7CA] scroll-mt-28">
      <div id="office" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-8">
        <SectionHeading
          kicker="Our Physical Office"
          title={
            <>
              A Dedicated Marketing Team{" "}
              <span className="text-[#9A5B00]">Under One Roof</span>
            </>
          }
          subtitle="Our in-house experts in Bhubaneswar collaborate closely to ensure smooth workflows, consistent delivery, and time-zone alignment for global clients."
          align="center"
        />

        {/* Unified Command Center Grid - Tight & Balanced Gap */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-5 items-stretch">
          
          {/* Left: Edge-to-Edge High-Tech Headquarters World Map Display */}
          <div className="lg:col-span-7 rounded-2xl sm:rounded-3xl overflow-hidden bg-[#050816] relative min-h-[280px] sm:min-h-[360px] lg:min-h-[490px] flex items-center justify-center shadow-[0_25px_60px_rgba(7,13,31,0.5)] border-2 border-white/15 group">
            {/* World Map Canvas with Safe-Zone Padding */}
            <div className="relative w-full h-[280px] sm:h-[360px] lg:h-full lg:min-h-[490px] p-2 sm:p-3">
              <Image
                src="/images/office-world-map.svg"
                alt="Interactive World Map displaying global client connectivity to Hire Desi Marketer campus headquarters in Bhubaneswar, Odisha"
                fill
                priority
                className="object-contain object-center filter drop-shadow-[0_12px_30px_rgba(0,0,0,0.8)]"
              />
            </div>
          </div>

          {/* Right: Office Console with Zero-Shift Tabs Container */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-7 flex flex-col justify-between gap-3.5 sm:gap-4 h-full shadow-[0_16px_40px_rgba(11,27,58,0.08)] border-2 border-[#D8D0C0] border-b-[4px] border-b-[#C9BFAC]">
              
              {/* Header Info */}
              <div className="flex flex-col gap-0.5 sm:gap-1">
                <div className="flex items-center gap-1.5 text-[11px] sm:text-xs font-black uppercase tracking-wider text-[#9A5B00]">
                  <Sparkles className="w-3.5 h-3.5 text-[#FFB020]" />
                  <span>Physical Infrastructure • Global Delivery</span>
                </div>
                <h3 className="font-display font-black text-xl sm:text-2xl text-[#0B1B3A] tracking-tight">
                  India Headquarters
                </h3>
                <p className="text-[11px] sm:text-xs text-[#5A6680] leading-snug">
                  Our central campus where international campaigns are planned, engineered, and executed daily with zero freelance outsourcing.
                </p>
              </div>

              {/* Physical Address Well */}
              <div className="p-3 sm:p-3.5 rounded-xl sm:rounded-2xl bg-[#F7F4EE] border border-[#DDD5C7] flex items-start gap-2.5 sm:gap-3 text-xs sm:text-sm text-[#0B1B3A] shadow-2xs">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg sm:rounded-xl bg-[#0B1B3A] text-[#FFB020] flex items-center justify-center shrink-0 shadow-2xs mt-0.5">
                  <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#FFB020]" />
                </div>
                <div className="flex flex-col">
                  <strong className="font-black text-[#0B1B3A] text-xs sm:text-sm">Mallick Complex, Unit 3</strong>
                  <span className="text-[#5A6680] text-[11px] sm:text-xs">
                    Kharvela Nagar, Bhubaneswar, Odisha 751001, India
                  </span>
                </div>
              </div>

              {/* 3D Tactile Hardware Tabs Switcher */}
              <div className="flex rounded-xl bg-[#EAE4D7] p-1 border border-[#D5CDBC] shadow-[inset_0_2px_4px_rgba(0,0,0,0.08)]">
                <button
                  type="button"
                  onClick={() => setActiveTab("specs")}
                  className={cn(
                    "flex-1 py-1.5 rounded-lg text-xs font-black transition-colors cursor-pointer text-center",
                    activeTab === "specs"
                      ? "bg-[#0B1B3A] text-white shadow-sm"
                      : "text-[#5A6680] hover:text-[#0B1B3A] hover:bg-white/60"
                  )}
                >
                  Campus Specs
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab("sync")}
                  className={cn(
                    "flex-1 py-1.5 rounded-lg text-xs font-black transition-colors cursor-pointer text-center",
                    activeTab === "sync"
                      ? "bg-[#0B1B3A] text-white shadow-sm"
                      : "text-[#5A6680] hover:text-[#0B1B3A] hover:bg-white/60"
                  )}
                >
                  Shift Sync
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab("contact")}
                  className={cn(
                    "flex-1 py-1.5 rounded-lg text-xs font-black transition-colors cursor-pointer text-center",
                    activeTab === "contact"
                      ? "bg-[#0B1B3A] text-white shadow-sm"
                      : "text-[#5A6680] hover:text-[#0B1B3A] hover:bg-white/60"
                  )}
                >
                  Contact Desk
                </button>
              </div>

              {/* LOCKED-HEIGHT TAB CONTENT CONTAINER: 188px (Zero Layout Shift Guarantee) */}
              <div className="h-[188px] flex flex-col justify-between">
                
                {/* 1. Campus Specs: EXACTLY 3 Items */}
                {activeTab === "specs" && (
                  <div className="flex flex-col justify-between h-full animate-in fade-in duration-150 gap-2">
                    <div className="flex items-center gap-3 p-2.5 rounded-xl bg-[#FAF8F5] border border-[#E8E2D5] h-[54px]">
                      <div className="w-8 h-8 rounded-lg bg-[#0B1B3A] text-[#FFB020] flex items-center justify-center shrink-0">
                        <Wifi className="w-4 h-4" />
                      </div>
                      <div className="flex flex-col">
                        <strong className="text-xs text-[#0B1B3A] leading-tight">Dedicated 1 Gbps Leased Fiber</strong>
                        <span className="text-[#5A6680] text-[11px] leading-tight">Dual redundant failover lines + generator backup</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 p-2.5 rounded-xl bg-[#FAF8F5] border border-[#E8E2D5] h-[54px]">
                      <div className="w-8 h-8 rounded-lg bg-emerald-800 text-white flex items-center justify-center shrink-0">
                        <ShieldCheck className="w-4 h-4" />
                      </div>
                      <div className="flex flex-col">
                        <strong className="text-xs text-[#0B1B3A] leading-tight">Biometric &amp; NDA Secured Floor</strong>
                        <span className="text-[#5A6680] text-[11px] leading-tight">Strict physical access control and client isolation</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 p-2.5 rounded-xl bg-[#FAF8F5] border border-[#E8E2D5] h-[54px]">
                      <div className="w-8 h-8 rounded-lg bg-[#0B1B3A] text-blue-300 flex items-center justify-center shrink-0">
                        <Cpu className="w-4 h-4" />
                      </div>
                      <div className="flex flex-col">
                        <strong className="text-xs text-[#0B1B3A] leading-tight">Dedicated Client VPC Workstations</strong>
                        <span className="text-[#5A6680] text-[11px] leading-tight">Zero outside USB access, enterprise security</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* 2. Shift Sync: EXACTLY 3 Items */}
                {activeTab === "sync" && (
                  <div className="flex flex-col justify-between h-full animate-in fade-in duration-150 gap-2">
                    <div className="p-2.5 rounded-xl bg-[#FAF8F5] border border-[#E8E2D5] flex items-center justify-between h-[54px]">
                      <div className="flex flex-col">
                        <span className="text-xs font-black text-[#0B1B3A] leading-tight">US Eastern (ET) Overlap</span>
                        <span className="text-[11px] text-[#5A6680] leading-tight">9:00 AM - 1:00 PM ET live Slack standby</span>
                      </div>
                      <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-black shrink-0">
                        4h Live
                      </span>
                    </div>

                    <div className="p-2.5 rounded-xl bg-[#FAF8F5] border border-[#E8E2D5] flex items-center justify-between h-[54px]">
                      <div className="flex flex-col">
                        <span className="text-xs font-black text-[#0B1B3A] leading-tight">UK &amp; Europe (GMT) Overlap</span>
                        <span className="text-[11px] text-[#5A6680] leading-tight">Full working afternoon sync coverage</span>
                      </div>
                      <span className="px-2 py-0.5 rounded-full bg-blue-100 text-blue-800 text-[10px] font-black shrink-0">
                        5h Live
                      </span>
                    </div>

                    <div className="p-2.5 rounded-xl bg-[#FAF8F5] border border-[#E8E2D5] flex items-center justify-between h-[54px]">
                      <div className="flex flex-col">
                        <span className="text-xs font-black text-[#0B1B3A] leading-tight">Australia &amp; APAC Standby</span>
                        <span className="text-[11px] text-[#5A6680] leading-tight">Morning standup handover &amp; sprint pacing</span>
                      </div>
                      <span className="px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 text-[10px] font-black shrink-0">
                        3h Live
                      </span>
                    </div>
                  </div>
                )}

                {/* 3. Contact Desk: EXACTLY 3 Items */}
                {activeTab === "contact" && (
                  <div className="flex flex-col justify-between h-full animate-in fade-in duration-150 gap-2">
                    <div className="flex items-center gap-3 p-2.5 rounded-xl bg-[#FAF8F5] border border-[#E8E2D5] h-[54px]">
                      <div className="w-8 h-8 rounded-lg bg-[#0B1B3A] text-white flex items-center justify-center shrink-0">
                        <Phone className="w-4 h-4 text-[#FFB020]" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[10px] font-bold text-[#5A6680] uppercase">Direct Call Desk</span>
                        <a href="tel:+918280788689" className="text-xs font-black text-[#0B1B3A] hover:underline">
                          +91 8280788689
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 p-2.5 rounded-xl bg-[#FAF8F5] border border-[#E8E2D5] h-[54px]">
                      <div className="w-8 h-8 rounded-lg bg-emerald-600 text-white flex items-center justify-center shrink-0">
                        <MessageSquare className="w-4 h-4 text-white" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[10px] font-bold text-[#5A6680] uppercase">WhatsApp Dispatch Desk</span>
                        <a
                          href="https://wa.me/918280788689?text=Hi%20Hire%20Desi%20Marketer,%20I'd%20like%20to%20hire%20a%20marketing%20specialist."
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs font-black text-[#0B1B3A] hover:underline"
                        >
                          +91 8280788689
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 p-2.5 rounded-xl bg-[#FAF8F5] border border-[#E8E2D5] h-[54px]">
                      <div className="w-8 h-8 rounded-lg bg-[#0B1B3A] text-[#FFB020] flex items-center justify-center shrink-0">
                        <Mail className="w-4 h-4 text-[#FFB020]" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[10px] font-bold text-[#5A6680] uppercase">Leadership Email Desk</span>
                        <a href="mailto:hello@hiredesimarketer.com" className="text-xs font-bold text-[#0B1B3A] hover:underline">
                          hello@hiredesimarketer.com
                        </a>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Action Buttons - Sleek, Tactile & Flush */}
              <div className="grid grid-cols-2 gap-2 sm:gap-3 pt-1">
                <a
                  href="https://maps.google.com/?q=Mallick+Complex+Kharvela+Nagar+Bhubaneswar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-luxury-navy btn-shimmer h-[38px] sm:h-[42px] rounded-xl text-[11px] sm:text-xs font-black uppercase tracking-wide flex items-center justify-center gap-1.5 cursor-pointer shadow-sm"
                >
                  <span>Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5 stroke-[2.5]" />
                </a>

                <a
                  href="/get-a-quote"
                  className="btn-luxury-gold btn-shimmer h-[38px] sm:h-[42px] rounded-xl text-[11px] sm:text-xs font-black uppercase tracking-wide flex items-center justify-center gap-1.5 cursor-pointer shadow-md"
                >
                  <span>Book HQ Video Call</span>
                  <Video className="w-3.5 h-3.5 stroke-[2.5]" />
                </a>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

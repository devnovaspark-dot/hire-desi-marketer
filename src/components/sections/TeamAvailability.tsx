"use client";

import React, { useState, useEffect } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CLIENT_TIMEZONES, getTimezoneStatus } from "@/lib/timezones";
import { Clock, Globe, MessageSquare, CheckCircle, Sunrise, Zap, Compass, Radio } from "lucide-react";
import { cn } from "@/lib/utils";

export function TeamAvailability() {
  const [mounted, setMounted] = useState(false);
  const [timeState, setTimeState] = useState<Record<string, { timeStr: string; isOnline: boolean; statusText: string }>>({});

  useEffect(() => {
    setMounted(true);
    const updateTimes = () => {
      const newState: Record<string, { timeStr: string; isOnline: boolean; statusText: string }> = {};
      CLIENT_TIMEZONES.forEach((tz) => {
        const status = getTimezoneStatus(tz.timezone, tz.isHq);
        newState[tz.id] = {
          timeStr: status.timeStr,
          isOnline: status.isOnline,
          statusText: status.statusText,
        };
      });
      setTimeState(newState);
    };

    updateTimes();
    const interval = setInterval(updateTimes, 10000);
    return () => clearInterval(interval);
  }, []);

  const timelineSteps = [
    {
      time: "9:00 AM",
      icon: <Sunrise className="w-4 h-4 text-[#FFB020]" />,
      title: "Morning Stand-Up",
      description: "Brief alignment in Slack or Zoom. Daily sprint priorities confirmed with your team.",
    },
    {
      time: "All Day",
      icon: <MessageSquare className="w-4 h-4 text-[#FFB020]" />,
      title: "Live on Slack & Direct Calls",
      description: "Direct real-time communication with assigned specialists. No 24-hour delayed tickets.",
    },
    {
      time: "Before 6:00 PM",
      icon: <CheckCircle className="w-4 h-4 text-emerald-400" />,
      title: "Daily Work Delivered",
      description: "Ad creatives, bid updates, and copy delivered before your business day closes.",
    },
  ];

  return (
    <section className="py-10 lg:py-14 bg-[#040716] text-white relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-[#FFB020]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-8 relative z-10">
        {/* Section Heading */}
        <SectionHeading
          kicker="Mission Control · Time Zones"
          title={
            <>
              Your time zone.{" "}
              <span className="text-[#FFB020]">Your working hours.</span>
            </>
          }
          subtitle="Our operations desk synchronizes shift schedules to your region — ensuring live daily communication throughout your working day."
          theme="dark"
          align="center"
        />

        {/* Aerospace Mission Control Clock Console */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {CLIENT_TIMEZONES.map((loc) => {
            const data = timeState[loc.id] || {
              timeStr: mounted ? "--:--" : "12:00 PM",
              isOnline: true,
              statusText: "Shift Active",
            };

            return (
              <div
                key={loc.id}
                className={cn(
                  "rounded-3xl p-5 flex flex-col justify-between relative transition-all group",
                  loc.isHq
                    ? "skeuo-card-gold specular-shine shadow-[0_20px_50px_rgba(255,176,32,0.18)]"
                    : "skeuo-card-dark specular-shine shadow-xl border border-white/10"
                )}
              >
                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-300">
                      {loc.region}
                    </span>
                    {loc.isHq ? (
                      <span className="skeuo-badge-gold px-2 py-0.5 rounded-full text-[9px] font-black uppercase tracking-wider">
                        HQ HUB
                      </span>
                    ) : (
                      <Radio className="w-3.5 h-3.5 text-slate-400 group-hover:text-emerald-400 transition-colors" />
                    )}
                  </div>

                  <h3 className="font-display font-black text-lg text-white">
                    {loc.city}
                  </h3>
                  <span className="text-xs text-slate-300 font-medium">{loc.country}</span>
                </div>

                {/* Digital LCD Time Display */}
                <div className="pt-4 mt-4 border-t border-white/10 flex flex-col gap-2.5">
                  <div className="skeuo-recessed-dark p-3 rounded-xl flex items-center justify-center border border-black/80">
                    <span className="font-display text-2xl font-black text-[#FFB020] tracking-tight drop-shadow-[0_0_10px_rgba(255,176,32,0.3)]">
                      {mounted ? data.timeStr : "--:-- --"}
                    </span>
                  </div>

                  <div className="flex items-center justify-between px-1 text-xs">
                    <span className="flex items-center gap-2">
                      <span
                        className={cn(
                          "w-2 h-2 rounded-full",
                          data.isOnline ? "bg-emerald-400 animate-pulse" : "bg-amber-400"
                        )}
                      />
                      <span
                        className={
                          data.isOnline ? "text-emerald-400 font-bold" : "text-amber-400 font-bold"
                        }
                      >
                        {mounted ? data.statusText : "Active shift"}
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Operational Rhythm Deck */}
        <div className="skeuo-card-dark specular-shine rounded-3xl p-6 sm:p-8 lg:p-10 border border-white/15 shadow-2xl">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-white/10">
            <div>
              <span className="text-xs font-black uppercase tracking-widest text-[#FFB020]">
                Daily Collaboration Protocol
              </span>
              <h3 className="font-display text-2xl font-black text-white mt-1">
                How Work Gets Done Same-Day
              </h3>
            </div>
            <span className="skeuo-button-navy px-4 py-2 rounded-full text-xs font-bold flex items-center gap-2 w-fit">
              <Zap className="w-3.5 h-3.5 text-[#FFB020]" />
              <span>Slack Connect + Google Meet + ClickUp</span>
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
            {timelineSteps.map((step, idx) => (
              <div
                key={idx}
                className="skeuo-recessed-dark p-5 sm:p-6 rounded-2xl flex flex-col gap-3 border border-white/10 hover:border-[#FFB020]/40 transition-all"
              >
                <div className="flex items-center justify-between">
                  <span className="font-display font-black text-base text-[#FFB020]">
                    {step.time}
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
                    {step.icon}
                  </div>
                </div>
                <h4 className="font-display font-bold text-lg text-white">
                  {step.title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

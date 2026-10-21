"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  ArrowUp,
  Mail,
  MapPin,
  Phone,
  MessageSquare,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Copy,
  Check,
  Clock,
  Globe,
  ExternalLink,
  Zap,
} from "lucide-react";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { cn } from "@/lib/utils";

function WhatsAppIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.652-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

type TimezoneKey = "IST" | "EST" | "PST" | "GMT";

interface TimezoneConfig {
  label: string;
  city: string;
  timeZone: string;
  shiftName: string;
  shiftStatus: string;
  coverage: string;
}

const TIMEZONES: Record<TimezoneKey, TimezoneConfig> = {
  IST: {
    label: "IST (HQ)",
    city: "Bhubaneswar",
    timeZone: "Asia/Kolkata",
    shiftName: "Main Office & Execution",
    shiftStatus: "Day Core Shift Active",
    coverage: "100% Staff On-Premises",
  },
  EST: {
    label: "EST (US East)",
    city: "New York",
    timeZone: "America/New_York",
    shiftName: "North America Live Sync",
    shiftStatus: "Live Client Comms Active",
    coverage: "9 AM - 6 PM EST Realtime",
  },
  PST: {
    label: "PST (US West)",
    city: "San Francisco",
    timeZone: "America/Los_Angeles",
    shiftName: "Pacific Coast Shift",
    shiftStatus: "Afternoon Handoff Active",
    coverage: "Full West Coast Coverage",
  },
  GMT: {
    label: "GMT (UK / EU)",
    city: "London",
    timeZone: "Europe/London",
    shiftName: "Europe & Middle East",
    shiftStatus: "EMEA Overlap Active",
    coverage: "Direct Slack / Teams Sync",
  },
};

export function Footer() {
  const [selectedTz, setSelectedTz] = useState<TimezoneKey>("IST");
  const [currentTime, setCurrentTime] = useState<string>("");
  const [currentDate, setCurrentDate] = useState<string>("");
  const [mounted, setMounted] = useState(false);

  // Quick Plan Form
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // Copy feedback states
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  useEffect(() => {
    setMounted(true);

    const updateClock = () => {
      const config = TIMEZONES[selectedTz];
      try {
        const now = new Date();
        const timeStr = new Intl.DateTimeFormat("en-US", {
          timeZone: config.timeZone,
          hour: "numeric",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
        }).format(now);

        const dateStr = new Intl.DateTimeFormat("en-US", {
          timeZone: config.timeZone,
          weekday: "short",
          month: "short",
          day: "numeric",
        }).format(now);

        setCurrentTime(timeStr);
        setCurrentDate(dateStr);
      } catch {
        setCurrentTime("Active");
      }
    };

    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, [selectedTz]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleQuickSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setEmail("");
      }, 5000);
    }
  };

  const copyToClipboard = (text: string, type: "email" | "phone") => {
    if (navigator?.clipboard) {
      navigator.clipboard.writeText(text);
      if (type === "email") {
        setCopiedEmail(true);
        setTimeout(() => setCopiedEmail(false), 2500);
      } else {
        setCopiedPhone(true);
        setTimeout(() => setCopiedPhone(false), 2500);
      }
    }
  };

  const handleSmoothNav = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const targetId = href.replace("#", "");
      const element = document.getElementById(targetId);
      if (element) {
        const headerOffset = 75;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }
  };

  const activeConfig = TIMEZONES[selectedTz];

  return (
    <footer className="bg-[#030712] text-white border-t border-white/10 pt-10 pb-8 relative overflow-hidden select-none">
      {/* Specular top rim */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#FFB020]/60 to-transparent" />

      {/* Animated ambient mesh lighting - clearly visible through translucent cards */}
      <div
        className="absolute -top-20 left-1/4 w-[550px] h-[320px] bg-gradient-to-r from-[#FFB020]/25 via-blue-600/25 to-purple-600/20 rounded-full blur-[100px] pointer-events-none animate-pulse"
        style={{ animationDuration: "5s" }}
      />
      <div
        className="absolute top-10 right-1/4 w-[480px] h-[280px] bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-[#FFB020]/20 rounded-full blur-[90px] pointer-events-none animate-pulse"
        style={{ animationDuration: "7s", animationDelay: "1.5s" }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none opacity-40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col gap-7">
        
        {/* ============================================================== */}
        {/* SIMPLE, SLEEK & TRANSLUCENT 24-HOUR GROWTH PLAN CARD           */}
        {/* ============================================================== */}
        <div className="p-6 sm:p-7 rounded-3xl bg-white/[0.04] backdrop-blur-2xl border border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.2)] hover:border-[#FFB020]/40 transition-colors flex flex-col lg:flex-row lg:items-center justify-between gap-6 relative overflow-hidden group">
          {/* Subtle top rim glow inside card */}
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />

          <div className="flex flex-col gap-1.5 max-w-xl">
            <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#FFB020]">
              <Sparkles className="w-3.5 h-3.5 animate-pulse" />
              <span>Get a Tailored 90-Day Strategy</span>
            </div>
            <h3 className="font-display font-black text-xl sm:text-2xl text-white">
              Ready to deploy your dedicated India marketing department?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Receive a custom channel strategy, scope proposal, and talent roster within 24 hours. Zero obligation.
            </p>
          </div>

          <form onSubmit={handleQuickSubmit} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 w-full lg:w-auto">
            <div className="relative w-full sm:w-72">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your work email..."
                className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/20 text-white placeholder-slate-400 text-xs focus:outline-none focus:border-[#FFB020] focus:ring-1 focus:ring-[#FFB020] shadow-inner backdrop-blur-md transition-colors"
              />
            </div>
            <button
              type="submit"
              className="btn-luxury-gold btn-shimmer w-full sm:w-auto px-5 py-3 rounded-xl text-xs font-black uppercase tracking-wider text-[#060B22] flex items-center justify-center gap-2 cursor-pointer shadow-lg whitespace-nowrap active:scale-95 transition-transform"
            >
              <span>{submitted ? "Plan Requested!" : "Get My Free Plan"}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </form>
        </div>

        {/* ============================================================== */}
        {/* INTERACTIVE OPERATIONAL DESK & TIMEZONE CONSOLE                */}
        {/* ============================================================== */}
        <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.03] backdrop-blur-xl border border-white/10 shadow-lg flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex flex-col sm:flex-row sm:items-center gap-3">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-black uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block" />
              <span>Operational Desk</span>
            </div>

            {/* Timezone Switcher Buttons */}
            <div className="flex items-center gap-1.5 p-1 rounded-xl bg-black/40 border border-white/10">
              {(Object.keys(TIMEZONES) as TimezoneKey[]).map((tz) => (
                <button
                  key={tz}
                  type="button"
                  onClick={() => setSelectedTz(tz)}
                  className={cn(
                    "px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer",
                    selectedTz === tz
                      ? "bg-[#0B1430] text-[#FFB020] border border-[#FFB020]/40 shadow-inner font-black"
                      : "text-slate-400 hover:text-white"
                  )}
                >
                  {tz}
                </button>
              ))}
            </div>
          </div>

          {/* Active Timezone Details */}
          <div className="flex flex-wrap items-center gap-4 text-xs">
            <div className="flex items-center gap-1.5 text-slate-300">
              <Globe className="w-3.5 h-3.5 text-[#FFB020]" />
              <span className="font-bold text-white">{activeConfig.city}</span>
              <span className="text-slate-400">({activeConfig.shiftName})</span>
            </div>

            <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-slate-200">
              <Clock className="w-3.5 h-3.5 text-emerald-400" />
              <span className="font-mono font-bold text-emerald-300">
                {mounted ? currentTime : "Syncing..."}
              </span>
              {mounted && currentDate && (
                <span className="text-slate-400 hidden sm:inline">· {currentDate}</span>
              )}
            </div>

            <div className="text-[11px] text-[#FFB020] font-medium hidden lg:inline">
              ⚡ {activeConfig.coverage}
            </div>
          </div>
        </div>

        {/* ============================================================== */}
        {/* MAIN NAVIGATION & CONTACT GRID                                */}
        {/* ============================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-6 border-b border-white/10">
          
          {/* Brand Info & Core Badges */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <Link href="/" className="flex items-center group">
              <BrandLogo size="lg" />
            </Link>

            <p className="text-xs sm:text-sm text-slate-400 max-w-sm leading-relaxed">
              Vetted, accountable digital marketing specialists, media buyers, SEO leads, and creators in India working your business hours. Zero freelancing chaos, zero agency markup.
            </p>

            <div className="flex flex-wrap items-center gap-2 pt-1">
              <span className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-[11px] font-bold text-slate-300 flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>100% NDA Protected</span>
              </span>
              <span className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-[11px] font-bold text-slate-300 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Zero Lock-in</span>
              </span>
              <span className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-[11px] font-bold text-slate-300 flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5 text-[#FFB020]" />
                <span>48h Fast Onboarding</span>
              </span>
            </div>
          </div>

          {/* Column 2: Engagement Models */}
          <div className="flex flex-col gap-3">
            <h4 className="text-xs font-black uppercase tracking-widest text-[#FFB020]">
              Engagement Models
            </h4>
            <ul className="flex flex-col gap-2.5 text-xs sm:text-sm text-slate-300">
              <li>
                <a
                  href="#calculator"
                  onClick={(e) => handleSmoothNav(e, "#calculator")}
                  className="hover:text-white transition-colors flex items-center gap-1.5 group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-600 group-hover:bg-[#FFB020] transition-colors" />
                  <span>Hourly Talent ($8/hr flat)</span>
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  onClick={(e) => handleSmoothNav(e, "#pricing")}
                  className="hover:text-white transition-colors flex items-center gap-1.5 group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-600 group-hover:bg-[#FFB020] transition-colors" />
                  <span>Growth Bundle ($999/mo)</span>
                </a>
              </li>
              <li>
                <a
                  href="#teams"
                  onClick={(e) => handleSmoothNav(e, "#teams")}
                  className="hover:text-white transition-colors flex items-center gap-1.5 group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-600 group-hover:bg-[#FFB020] transition-colors" />
                  <span>Dedicated Squads (3, 5, 7)</span>
                </a>
              </li>
              <li>
                <a
                  href="#work"
                  onClick={(e) => handleSmoothNav(e, "#work")}
                  className="hover:text-white transition-colors flex items-center gap-1.5 group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-600 group-hover:bg-[#FFB020] transition-colors" />
                  <span>Client Case Studies & Proof</span>
                </a>
              </li>
              <li>
                <a
                  href="#quote"
                  onClick={(e) => handleSmoothNav(e, "#quote")}
                  className="hover:text-white transition-colors flex items-center gap-1.5 group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-600 group-hover:bg-[#FFB020] transition-colors" />
                  <span>Custom Squad Builder</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: 2026 Core Pillars */}
          <div className="flex flex-col gap-3">
            <h4 className="text-xs font-black uppercase tracking-widest text-[#FFB020]">
              Marketing Pillars
            </h4>
            <ul className="flex flex-col gap-2.5 text-xs sm:text-sm text-slate-300">
              <li>
                <a
                  href="#stack"
                  onClick={(e) => handleSmoothNav(e, "#stack")}
                  className="hover:text-white transition-colors flex items-center gap-1.5 group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-600 group-hover:bg-[#FFB020] transition-colors" />
                  <span>Paid Media &amp; Ads</span>
                </a>
              </li>
              <li>
                <a
                  href="#stack"
                  onClick={(e) => handleSmoothNav(e, "#stack")}
                  className="hover:text-white transition-colors flex items-center gap-1.5 group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-600 group-hover:bg-[#FFB020] transition-colors" />
                  <span>SEO &amp; Google Map-Pack</span>
                </a>
              </li>
              <li>
                <a
                  href="#stack"
                  onClick={(e) => handleSmoothNav(e, "#stack")}
                  className="hover:text-white transition-colors flex items-center gap-1.5 group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-600 group-hover:bg-[#FFB020] transition-colors" />
                  <span>Short-Form Video &amp; Reels</span>
                </a>
              </li>
              <li>
                <a
                  href="#stack"
                  onClick={(e) => handleSmoothNav(e, "#stack")}
                  className="hover:text-white transition-colors flex items-center gap-1.5 group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-600 group-hover:bg-[#FFB020] transition-colors" />
                  <span>Conversion Landing Pages</span>
                </a>
              </li>
              <li>
                <a
                  href="#stack"
                  onClick={(e) => handleSmoothNav(e, "#stack")}
                  className="hover:text-white transition-colors flex items-center gap-1.5 group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-600 group-hover:bg-[#FFB020] transition-colors" />
                  <span>Marketing Automation &amp; CRM</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: India Headquarters & Interactive Direct Contact */}
          <div className="flex flex-col gap-3">
            <h4 className="text-xs font-black uppercase tracking-widest text-[#FFB020]">
              Headquarters &amp; Direct
            </h4>
            
            <div className="flex flex-col gap-3 text-xs text-slate-300">
              <a
                href="#office"
                onClick={(e) => handleSmoothNav(e, "#office")}
                className="flex items-start gap-2 hover:text-white transition-colors group cursor-pointer"
              >
                <MapPin className="w-4 h-4 text-[#FFB020] shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                <span className="leading-snug">
                  Mallick Complex, Unit 3, Kharvela Nagar, Bhubaneswar, Odisha 751001, India
                </span>
              </a>

              {/* Interactive Email Copy Button */}
              <div className="flex items-center justify-between p-2 rounded-xl bg-white/5 border border-white/10 hover:border-[#FFB020]/40 transition-colors">
                <a
                  href="mailto:hello@hiredesimarketer.com"
                  className="flex items-center gap-2 text-slate-200 hover:text-white truncate"
                >
                  <Mail className="w-3.5 h-3.5 text-[#FFB020] shrink-0" />
                  <span className="truncate">hello@hiredesimarketer.com</span>
                </a>
                <button
                  type="button"
                  onClick={() => copyToClipboard("hello@hiredesimarketer.com", "email")}
                  title="Copy email to clipboard"
                  className="p-1 rounded-md text-slate-400 hover:text-[#FFB020] hover:bg-white/10 transition-colors cursor-pointer shrink-0 ml-1"
                >
                  {copiedEmail ? (
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>

              {/* Direct Call / WhatsApp Card (Matching Screenshot with Real WhatsApp Icon) */}
              <div className="flex items-center justify-between p-2.5 rounded-xl bg-[#060D20] border border-amber-500/40 hover:border-[#FFB020] shadow-[0_4px_16px_rgba(0,0,0,0.5)] transition-all group">
                <a
                  href="https://wa.me/918280788689?text=Hi%20Hire%20Desi%20Marketer,%20I'd%20like%20to%20hire%20a%20marketing%20specialist."
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Call or WhatsApp us directly"
                  className="flex items-center gap-3 text-white flex-1 min-w-0"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#25D366]/15 border border-[#25D366]/40 text-[#25D366] flex items-center justify-center shrink-0 group-hover:scale-105 group-hover:bg-[#25D366]/25 transition-all shadow-[0_0_12px_rgba(37,211,102,0.25)]">
                    <WhatsAppIcon className="w-5 h-5 fill-current" />
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="text-[10px] font-black uppercase tracking-wider text-slate-400">
                      DIRECT CALL
                    </span>
                    <span className="text-sm font-black text-white tracking-tight">
                      +91 8280788689
                    </span>
                  </div>
                </a>

                <div className="flex items-center gap-1 shrink-0 ml-1">
                  <a
                    href="tel:+918280788689"
                    title="Direct Phone Call"
                    className="p-1.5 rounded-lg text-slate-400 hover:text-emerald-400 hover:bg-white/10 transition-colors cursor-pointer"
                  >
                    <Phone className="w-3.5 h-3.5" />
                  </a>

                  <button
                    type="button"
                    onClick={() => copyToClipboard("+918280788689", "phone")}
                    title="Copy phone number to clipboard"
                    className="p-1.5 rounded-lg text-slate-400 hover:text-[#FFB020] hover:bg-white/10 transition-colors cursor-pointer"
                  >
                    {copiedPhone ? (
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>
              </div>

              {/* Instant WhatsApp Quick Connect */}
              <a
                href="https://wa.me/918280788689?text=Hi%20Hire%20Desi%20Marketer,%20I'd%20like%20to%20hire%20a%20marketing%20specialist."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2 rounded-xl bg-[#25D366]/10 border border-[#25D366]/30 text-[#25D366] hover:bg-[#25D366]/20 transition-all font-bold cursor-pointer group"
              >
                <div className="flex items-center gap-2">
                  <WhatsAppIcon className="w-4 h-4 fill-current" />
                  <span>Instant WhatsApp Chat</span>
                </div>
                <ExternalLink className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        {/* ============================================================== */}
        {/* BOTTOM BAR & 3D TACTILE BACK-TO-TOP BUTTON                     */}
        {/* ============================================================== */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 pt-1">
          <p className="text-center sm:text-left">
            © 2026 Hire Desi Marketer. All rights reserved. Zero lock-in contracts · Transparent weekly billing · Odisha HQ.
          </p>

          <div className="flex items-center gap-6">
            <a
              href="#quote"
              onClick={(e) => handleSmoothNav(e, "#quote")}
              className="hover:text-white transition-colors"
            >
              Request a Free Plan
            </a>
            <button
              onClick={scrollToTop}
              className="px-4 py-2 rounded-full bg-[#070D1F] border border-white/20 text-white text-xs font-bold inline-flex items-center gap-2 cursor-pointer transition-all hover:bg-white/10 hover:border-[#FFB020]/50 shadow-[0_4px_10px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.15)] active:translate-y-0.5 active:shadow-inner"
              aria-label="Back to top"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5 text-[#FFB020]" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}

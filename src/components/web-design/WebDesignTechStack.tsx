"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Sparkles,
  Zap,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Activity,
  Layers,
  Cpu,
  Server,
  Lock,
  ExternalLink,
  Code2,
} from "lucide-react";
import { cn } from "@/lib/utils";

// Authentic Official Framework & CMS Brand Logos
function NextJsIcon({ className = "w-7 h-7" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 180 180" fill="none">
      <circle cx="90" cy="90" r="90" fill="#000" />
      <path
        d="M149.508 157.438L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.138 149.508 157.438Z"
        fill="url(#next-diag)"
      />
      <path d="M115 54H127V126H115V54Z" fill="url(#next-vert)" />
      <defs>
        <linearGradient id="next-diag" x1="109.5" y1="116.5" x2="144.5" y2="160.5" gradientUnits="userSpaceOnUse">
          <stop stopColor="#fff" />
          <stop offset="1" stopColor="#fff" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="next-vert" x1="121" y1="54" x2="120.799" y2="106.875" gradientUnits="userSpaceOnUse">
          <stop stopColor="#fff" />
          <stop offset="1" stopColor="#fff" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function ReactIcon({ className = "w-7 h-7" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none">
      <ellipse cx="50" cy="50" rx="42" ry="16" stroke="#00D8FF" strokeWidth="4" />
      <ellipse cx="50" cy="50" rx="42" ry="16" stroke="#00D8FF" strokeWidth="4" transform="rotate(60 50 50)" />
      <ellipse cx="50" cy="50" rx="42" ry="16" stroke="#00D8FF" strokeWidth="4" transform="rotate(120 50 50)" />
      <circle cx="50" cy="50" r="7" fill="#00D8FF" />
    </svg>
  );
}

function TailwindIcon({ className = "w-7 h-7" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path
        d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.335 6.182 14.974 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.335 13.382 8.974 12 6.001 12z"
        fill="#38BDF8"
      />
    </svg>
  );
}

function ShopifyIcon({ className = "w-7 h-7" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path
        d="M20.25 6.75l-2.25-1.5-1.5.75-2.25-3.75L12 3l-1.5-.75L8.25 6 6.75 5.25 4.5 6.75 3 21h18l-.75-14.25z"
        fill="#95BF47"
      />
      <path
        d="M14.25 10.5c-.75-.75-1.5-.75-2.25-.75s-1.5 0-2.25.75c-.75.75-.75 1.5-.75 2.25 0 2.25 3.75 3 3.75 4.5s-.75 1.5-1.5 1.5-1.5-.75-1.5-1.5h-1.5c0 1.5 1.5 2.25 3 2.25s3-.75 3-2.25c0-2.25-3.75-3-3.75-4.5s.75-1.5 1.5-1.5 1.5.75 1.5 1.5h1.5c0-1.5-.75-2.25-1.5-2.25z"
        fill="#fff"
      />
    </svg>
  );
}

function WordPressIcon({ className = "w-7 h-7" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" fill="#21759B" />
      <path
        d="M3.75 12c0 3.75 2.5 6.75 6 7.75l-4.5-12.5C4.25 8.75 3.75 10.25 3.75 12zm13.75 5.5l-3.25-9.5c.75-.05 1.25-.1 1.25-.1.5-.05.45-.75-.05-.75 0 0-1.5.15-2.5.15-1 0-2.5-.15-2.5-.15-.5 0-.55.7.05.75 0 0 .5.05 1.05.1l1.55 4.25-2.25 6.75c1-.25 2-.5 3.15-.5.5 0 1 .05 1.5.15zm-4.75-14.25c-4.75 0-8.5 3.75-8.5 8.5 0 1.25.25 2.25.75 3.25L9.5 5.25c0-.5-.05-1-.25-1.25-.25-.25-.75-.25-1.25-.25v-.5c1 .05 2 .05 3.25.05 1.25 0 2.25 0 3.25-.05v.5c-.5 0-1 0-1.25.25-.2.25-.25.75-.25 1.25l-.25 1.5 3 8.75c1.25-1.75 2-4 2-6.25 0-4.75-3.75-8.5-8.5-8.5z"
        fill="#fff"
      />
    </svg>
  );
}

function SupabaseIcon({ className = "w-7 h-7" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path
        d="M12.5 2L3 13.5h7.5L8.5 22 20 10.5h-7.5L12.5 2z"
        fill="url(#supa-grad)"
      />
      <defs>
        <linearGradient id="supa-grad" x1="3" y1="2" x2="20" y2="22" gradientUnits="userSpaceOnUse">
          <stop stopColor="#3ECF8E" />
          <stop offset="1" stopColor="#249361" />
        </linearGradient>
      </defs>
    </svg>
  );
}

interface PlatformItem {
  id: string;
  name: string;
  category: "all" | "frameworks" | "cms";
  icon: React.ReactNode;
  badge: string;
  subtitle: string;
  businessBenefit: string;
  pills: string[];
  slaMetric: string;
  slaLabel: string;
}

const PLATFORMS: PlatformItem[] = [
  {
    id: "nextjs",
    name: "Next.js 16",
    category: "frameworks",
    icon: <NextJsIcon />,
    badge: "100/100 Core Web Vitals",
    subtitle: "Edge Speed & Global SEO",
    businessBenefit:
      "Sub-second edge rendering that Google search algorithms reward with higher organic rankings and zero bounce rates.",
    pills: ["< 0.58s Initial Paint", "Edge Server Components", "Automated SEO Schema"],
    slaMetric: "0.58s",
    slaLabel: "LCP Speed Benchmark",
  },
  {
    id: "react",
    name: "React 19",
    category: "frameworks",
    icon: <ReactIcon />,
    badge: "60 FPS Fluid UI",
    subtitle: "Concurrent Dynamic Interfaces",
    businessBenefit:
      "Buttery-smooth client transitions, interactive multi-step qualification funnels, and app-like experiences without page reloads.",
    pills: ["Zero Page Freezes", "Interactive Lead Funnels", "Instant Optimistic UI"],
    slaMetric: "60 FPS",
    slaLabel: "Hardware Render SLA",
  },
  {
    id: "tailwind",
    name: "Tailwind CSS",
    category: "frameworks",
    icon: <TailwindIcon />,
    badge: "Zero-Bloat Styling",
    subtitle: "Pixel-Perfect Design Fidelity",
    businessBenefit:
      "Ultra-lightweight compiled stylesheets that load in milliseconds with strict adherence to approved Figma design tokens.",
    pills: ["< 15KB Tiny Bundle", "100% Mobile Responsive", "Zero Styling Bloat"],
    slaMetric: "0.45s",
    slaLabel: "Browser Paint Time",
  },
  {
    id: "shopify",
    name: "Shopify Plus",
    category: "cms",
    icon: <ShopifyIcon />,
    badge: "Headless Commerce",
    subtitle: "High-AOV Digital Storefronts",
    businessBenefit:
      "Lightning-fast online stores optimized for maximum average order value, 1-tap checkout, and instant slide-out micro-carts.",
    pills: ["1-Tap Shop Pay", "Instant Slide-Out Cart", "Automated ERP Webhooks"],
    slaMetric: "4.6%",
    slaLabel: "Avg. Checkout Conversion",
  },
  {
    id: "wordpress",
    name: "WordPress CMS",
    category: "cms",
    icon: <WordPressIcon />,
    badge: "Client-Editable Hub",
    subtitle: "Bespoke Gutenberg Theme Engine",
    businessBenefit:
      "Custom visual block editor built so your marketing team can publish and edit pages effortlessly without breaking layouts.",
    pills: ["Zero Page-Builder Bloat", "Visual Drag-and-Drop", "100% Client Code Ownership"],
    slaMetric: "0.85s",
    slaLabel: "Sub-Second Initial Paint",
  },
  {
    id: "supabase",
    name: "Supabase & Cloud APIs",
    category: "frameworks",
    icon: <SupabaseIcon />,
    badge: "Realtime Cloud",
    subtitle: "Scalable Data & API Webhooks",
    businessBenefit:
      "Secure cloud databases, instant user authentication, and seamless webhook syncing directly to your CRM and marketing tools.",
    pills: ["Bank-Grade Security", "Instant API Webhooks", "Zero-Wait Query Sync"],
    slaMetric: "99.99%",
    slaLabel: "High-Availability Uptime",
  },
];

export function WebDesignTechStack() {
  const [activeFilter, setActiveFilter] = useState<"all" | "frameworks" | "cms">("all");

  const filteredPlatforms =
    activeFilter === "all"
      ? PLATFORMS
      : PLATFORMS.filter((p) => p.category === activeFilter);

  return (
    <div className="w-full max-w-7xl mx-auto space-y-6 sm:space-y-8 select-none text-left">
      {/* ==================================================================== */}
      {/* 1. FILTER TABS: Clean, Minimalist, User-Friendly                     */}
      {/* ==================================================================== */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        <button
          type="button"
          onClick={() => setActiveFilter("all")}
          className={cn(
            "px-4 py-2 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer",
            activeFilter === "all"
              ? "bg-[#060B22] text-[#FFB020] border border-[#FFB020]/40 shadow-sm"
              : "bg-white text-slate-600 border border-[#E2DBD0] hover:border-slate-400 hover:text-[#0B1B3A]"
          )}
        >
          All Technologies (6)
        </button>

        <button
          type="button"
          onClick={() => setActiveFilter("frameworks")}
          className={cn(
            "px-4 py-2 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer",
            activeFilter === "frameworks"
              ? "bg-[#060B22] text-[#FFB020] border border-[#FFB020]/40 shadow-sm"
              : "bg-white text-slate-600 border border-[#E2DBD0] hover:border-slate-400 hover:text-[#0B1B3A]"
          )}
        >
          Modern Edge Frameworks (4)
        </button>

        <button
          type="button"
          onClick={() => setActiveFilter("cms")}
          className={cn(
            "px-4 py-2 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer",
            activeFilter === "cms"
              ? "bg-[#060B22] text-[#FFB020] border border-[#FFB020]/40 shadow-sm"
              : "bg-white text-slate-600 border border-[#E2DBD0] hover:border-slate-400 hover:text-[#0B1B3A]"
          )}
        >
          CMS &amp; E-Commerce Platforms (2)
        </button>
      </div>

      {/* ==================================================================== */}
      {/* 2. THE 6 PLATFORMS GRID: Clean, Visual, Balanced, Attractive Cards   */}
      {/* ==================================================================== */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
        {filteredPlatforms.map((platform) => (
          <div
            key={platform.id}
            className="rounded-3xl p-6 sm:p-7 bg-white border border-[#E2DBD0] hover:border-[#FFB020] hover:shadow-xl transition-all duration-300 group relative overflow-hidden flex flex-col justify-between"
          >
            {/* Top Amber Hover Accent Line */}
            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#FFB020] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <div className="space-y-4">
              {/* Header: Official Brand Logo & Live SLA Badge */}
              <div className="flex items-center justify-between gap-3">
                <div className="w-12 h-12 rounded-2xl bg-[#FAF8F5] border border-[#E2DBD0] flex items-center justify-center p-2 group-hover:scale-105 group-hover:border-[#FFB020]/50 transition-all duration-300 shadow-2xs">
                  {platform.icon}
                </div>

                <span className="text-[10.5px] font-mono font-bold px-3 py-1 rounded-full bg-[#FAF8F5] text-[#0B1B3A] border border-[#E2DBD0] group-hover:border-[#FFB020]/40 group-hover:text-[#B87A00] transition-colors flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span>{platform.badge}</span>
                </span>
              </div>

              {/* Title & Subtitle */}
              <div>
                <h3 className="font-display font-black text-xl text-[#0B1B3A] tracking-tight group-hover:text-[#B87A00] transition-colors">
                  {platform.name}
                </h3>
                <div className="text-xs font-semibold text-slate-500 mt-0.5">
                  {platform.subtitle}
                </div>
              </div>

              {/* Clear, Concise Business Value (Zero Developer Jargon) */}
              <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal">
                {platform.businessBenefit}
              </p>

              {/* 3 Quick Value Pills */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {platform.pills.map((pill, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded-lg bg-[#FAF8F5] border border-[#E2DBD0] text-[11px] font-semibold text-slate-700"
                  >
                    {pill}
                  </span>
                ))}
              </div>
            </div>

            {/* Bottom Row: SLA Benchmark & Direct Scope Link */}
            <div className="pt-5 mt-5 border-t border-slate-100 flex items-center justify-between text-xs">
              <div>
                <div className="font-display font-black text-base text-[#0B1B3A]">
                  {platform.slaMetric}
                </div>
                <div className="text-[10px] font-mono text-slate-400">
                  {platform.slaLabel}
                </div>
              </div>

              <Link
                href="/get-a-quote"
                className="btn-luxury-gold btn-shimmer py-2 px-3.5 rounded-xl text-[11px] font-black uppercase tracking-wider inline-flex items-center gap-1.5 shadow-2xs group/btn"
              >
                <span>Hire Devs</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* ==================================================================== */}
      {/* 3. ENTERPRISE ENGINEERING GUARANTEE STRIP (CLEAN 1-ROW SUMMARY)      */}
      {/* ==================================================================== */}
      <div className="p-4 sm:p-5 rounded-2xl bg-white border border-[#E2DBD0] shadow-sm flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-700">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-xl bg-[#060B22] text-[#FFB020] flex items-center justify-center shrink-0">
            <ShieldCheck className="w-4 h-4 text-[#FFB020]" />
          </div>
          <span className="font-semibold text-slate-800">
            100% Client-Owned Source Code • Zero Proprietary Lock-In • Timezone-Aligned Senior Developers (US, UK, CA, AU)
          </span>
        </div>

        <Link
          href="/get-a-quote"
          className="text-[#B87A00] hover:text-[#0B1B3A] transition-colors font-bold text-xs uppercase tracking-wider flex items-center gap-1 shrink-0 whitespace-nowrap"
        >
          <span>Schedule Tech Alignment Call</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}

"use client";

import React, { useState } from "react";
import {
  Layers,
  Palette,
  ShoppingBag,
  RefreshCw,
  Layout,
  Zap,
  ArrowRight,
  Sparkles,
} from "lucide-react";

export interface Bento7Props {
  title?: string;
  description?: string;
  badge?: string;
  serviceId?: string;
  className?: string;
}

// 6 Specialized Architectural Presets for the 6 grid instances
const BENTO7_PRESETS = [
  {
    badge: "Figma to Next.js",
    title: "Bespoke Design Systems",
    description: "Handcrafted Figma design tokens compiled into pixel-perfect Next.js 16 components with zero generic theme bloat.",
    icon: Palette,
    accent: "#FFB020",
    cards: [
      { tag: "Design Tokens", val: "Tailwind v4", col: "border-[#FFB020]/30" },
      { tag: "Components", val: "Radix UI", col: "border-sky-500/30" },
      { tag: "Prototypes", val: "Interactive", col: "border-purple-500/30" },
    ],
  },
  {
    badge: "Modernization + CRO",
    title: "SEO-Protected Redesign",
    description: "Modernize legacy platforms into high-converting digital assets while strictly safeguarding Google keyword rankings and 301 URLs.",
    icon: RefreshCw,
    accent: "#38BDF8",
    cards: [
      { tag: "URL Safeguard", val: "301 Redirects", col: "border-emerald-500/30" },
      { tag: "Conversion Lift", val: "+180% Avg", col: "border-sky-500/30" },
      { tag: "Friction Audit", val: "Zero Loss", col: "border-[#FFB020]/30" },
    ],
  },
  {
    badge: "Shopify Plus & Headless",
    title: "High-Velocity Commerce",
    description: "Sub-second storefronts engineered for high average order value (AOV), instant slide-out micro-carts, and 1-tap checkout.",
    icon: ShoppingBag,
    accent: "#10B981",
    cards: [
      { tag: "Checkout Speed", val: "1-Tap Buy", col: "border-emerald-500/30" },
      { tag: "Architecture", val: "Headless API", col: "border-[#FFB020]/30" },
      { tag: "Integrations", val: "ERP & CRM", col: "border-blue-500/30" },
    ],
  },
  {
    badge: "Zero Code Needed",
    title: "Client-Editable CMS",
    description: "Empower your marketing and content team with drag-and-drop autonomy on Webflow, WordPress, or modern Headless CMS.",
    icon: Layout,
    accent: "#A855F7",
    cards: [
      { tag: "Marketing Speed", val: "Self-Serve", col: "border-purple-500/30" },
      { tag: "Platforms", val: "Webflow / WP", col: "border-[#FFB020]/30" },
      { tag: "Permissions", val: "Role-Based", col: "border-sky-500/30" },
    ],
  },
  {
    badge: "App-Like SPA",
    title: "Full-Stack Web Portals",
    description: "Complex client portals, SaaS dashboards, and database-driven internal tools powered by Next.js, Supabase, and edge APIs.",
    icon: Layers,
    accent: "#F59E0B",
    cards: [
      { tag: "State Management", val: "Sub-Second", col: "border-[#FFB020]/30" },
      { tag: "Security", val: "RBAC & MFA", col: "border-blue-500/30" },
      { tag: "Data APIs", val: "REST / GraphQL", col: "border-emerald-500/30" },
    ],
  },
  {
    badge: "< 0.8s LCP Benchmark",
    title: "Core Web Vitals Speed",
    description: "Google Lighthouse top 1% performance tuning. Image optimization, edge caching, and zero render-blocking JavaScript.",
    icon: Zap,
    accent: "#EC4899",
    cards: [
      { tag: "LCP Benchmark", val: "< 0.8s Speed", col: "border-pink-500/30" },
      { tag: "Score Goal", val: "100/100 Audit", col: "border-[#FFB020]/30" },
      { tag: "Edge CDN", val: "Global 300+", col: "border-sky-500/30" },
    ],
  },
];

let globalPresetIndex = 0;

export default function Bento7({
  title,
  description,
  badge,
  className = "",
}: Bento7Props) {
  const [isHovered, setIsHovered] = useState(false);

  // Auto-distribute presets across instances if no custom props are passed
  const [preset] = useState(() => {
    const p = BENTO7_PRESETS[globalPresetIndex % BENTO7_PRESETS.length];
    globalPresetIndex++;
    return p;
  });

  const finalTitle = title || preset.title;
  const finalDescription = description || preset.description;
  const finalBadge = badge || preset.badge;
  const Icon = preset.icon;

  return (
    <div
      className={`relative overflow-hidden rounded-3xl border border-white/10 bg-[#081232] p-6 flex flex-col justify-between h-full min-h-[380px] group transition-all duration-300 hover:border-[#FFB020]/40 shadow-xl select-none ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background dot grid pattern */}
      <div
        className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:18px_18px] pointer-events-none"
        aria-hidden="true"
      />

      {/* Top Section: Badge & Fanning Cards Stack */}
      <div className="relative z-10 w-full space-y-4">
        <div className="flex items-center justify-between">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-white/5 border border-white/10 text-[10px] font-mono text-[#FFB020] uppercase tracking-wider">
            <Sparkles className="w-2.5 h-2.5" />
            <span>{finalBadge}</span>
          </div>
          <div className="w-8 h-8 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 group-hover:text-[#FFB020] transition-colors">
            <Icon className="w-4 h-4" />
          </div>
        </div>

        {/* Fanning Card Stack */}
        <div className="relative h-28 w-full flex items-center justify-center pt-2">
          {preset.cards.map((card, i) => {
            // Dynamic fanning rotation angles
            const baseRotations = [-6, 0, 6];
            const hoveredRotations = [-14, 0, 14];
            const hoveredTranslationsX = [-32, 0, 32];
            const hoveredTranslationsY = [-4, -8, -4];

            const rotation = isHovered ? hoveredRotations[i] : baseRotations[i];
            const tx = isHovered ? hoveredTranslationsX[i] : 0;
            const ty = isHovered ? hoveredTranslationsY[i] : 0;

            return (
              <div
                key={i}
                className={`absolute w-36 h-20 rounded-xl bg-[#060B22] border ${card.col} p-2.5 shadow-xl transition-all duration-300 flex flex-col justify-between`}
                style={{
                  transform: `translate(${tx}px, ${ty}px) rotate(${rotation}deg)`,
                  zIndex: i === 1 ? 2 : 1,
                }}
              >
                <div className="flex items-center justify-between text-[9px] font-mono text-slate-400">
                  <span>{card.tag}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FFB020]" />
                </div>
                <div className="text-xs font-bold text-white font-mono">
                  {card.val}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom text block */}
      <div className="relative z-10 pt-4 mt-auto">
        <div className="flex items-center justify-between">
          <h3 className="text-xl sm:text-2xl font-bold font-display text-white tracking-tight">
            {finalTitle}
          </h3>
          <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#FFB020] group-hover:translate-x-1 transition-all" />
        </div>
        <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
          {finalDescription}
        </p>
      </div>
    </div>
  );
}

"use client";

import React, { useState, useEffect } from "react";
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
import StarBorder from "@/components/ui/StarBorder";
import BounceCards, { BounceCardItem } from "@/components/ui/BounceCards";

// ====================================================================
// BESPOKE 3D-RENDERED STACK & PLATFORM ICONS WITH DEPTH & SPECULAR GLOSS
// ====================================================================

function ThreeDNextJsIcon({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none">
      <defs>
        <radialGradient id="next3d-sphere" cx="35%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#2A2F45" />
          <stop offset="50%" stopColor="#101524" />
          <stop offset="100%" stopColor="#050811" />
        </radialGradient>
        <linearGradient id="next3d-rim" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.7" />
          <stop offset="50%" stopColor="#FFB020" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#000000" stopOpacity="0.8" />
        </linearGradient>
        <linearGradient id="next3d-diag" x1="30" y1="25" x2="75" y2="80" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="70%" stopColor="#FFB020" />
          <stop offset="100%" stopColor="#FFB020" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="next3d-vert" x1="62" y1="28" x2="62" y2="72" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#8E99B3" />
        </linearGradient>
        <filter id="next3d-shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="4" stdDeviation="4" floodColor="#000000" floodOpacity="0.6" />
        </filter>
      </defs>
      <circle cx="50" cy="50" r="44" fill="url(#next3d-sphere)" stroke="url(#next3d-rim)" strokeWidth="2.5" filter="url(#next3d-shadow)" />
      <ellipse cx="38" cy="24" rx="14" ry="6" fill="#FFFFFF" fillOpacity="0.25" transform="rotate(-20 38 24)" />
      <path d="M32 28H40V72H32V28Z" fill="url(#next3d-vert)" filter="url(#next3d-shadow)" />
      <path d="M74.2 70.8L38.4 28H32V32.4L69.8 74.8C71.4 73.6 72.8 72.2 74.2 70.8Z" fill="url(#next3d-diag)" />
      <path d="M60 28H68V72H60V28Z" fill="url(#next3d-vert)" opacity="0.9" />
    </svg>
  );
}

function ThreeDReactIcon({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none">
      <defs>
        <radialGradient id="react3d-core" cx="35%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#E0FAFF" />
          <stop offset="40%" stopColor="#00D8FF" />
          <stop offset="100%" stopColor="#005B73" />
        </radialGradient>
        <linearGradient id="react3d-ring1" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="50%" stopColor="#00D8FF" />
          <stop offset="100%" stopColor="#004D66" />
        </linearGradient>
        <filter id="react3d-glow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="2.5" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>
      <circle cx="50" cy="50" r="38" fill="#00D8FF" fillOpacity="0.12" />
      <g strokeWidth="3.2" strokeLinecap="round" filter="url(#react3d-glow)">
        <ellipse cx="50" cy="50" rx="42" ry="16" stroke="url(#react3d-ring1)" />
        <ellipse cx="50" cy="50" rx="42" ry="16" stroke="url(#react3d-ring1)" transform="rotate(60 50 50)" />
        <ellipse cx="50" cy="50" rx="42" ry="16" stroke="url(#react3d-ring1)" transform="rotate(120 50 50)" />
      </g>
      <circle cx="50" cy="50" r="9.5" fill="url(#react3d-core)" filter="url(#react3d-glow)" />
      <circle cx="47" cy="47" r="2.8" fill="#FFFFFF" fillOpacity="0.85" />
    </svg>
  );
}

function ThreeDTailwindIcon({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none">
      <defs>
        <linearGradient id="tw3d-wave1" x1="15" y1="20" x2="85" y2="55" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#7DD3FC" />
          <stop offset="50%" stopColor="#38BDF8" />
          <stop offset="100%" stopColor="#0284C7" />
        </linearGradient>
        <linearGradient id="tw3d-wave2" x1="15" y1="50" x2="85" y2="85" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#38BDF8" />
          <stop offset="50%" stopColor="#0EA5E9" />
          <stop offset="100%" stopColor="#0369A1" />
        </linearGradient>
        <filter id="tw3d-shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="4" stdDeviation="4" floodColor="#0284C7" floodOpacity="0.45" />
        </filter>
      </defs>
      <path
        d="M32 34C38 23 48 20 58 24C60 25 62 27 64 29C68 33 71 36 78 36C87 36 91 30 93 25C91 36 84 43 74 43C68 43 65 39 61 35C57 31 53 28 47 28C38 28 34 35 32 34Z"
        fill="url(#tw3d-wave1)"
        filter="url(#tw3d-shadow)"
      />
      <path
        d="M36 30C42 22 50 21 58 24C62 26 64 29 67 32"
        stroke="#FFFFFF"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeOpacity="0.7"
      />
      <path
        d="M17 56C23 45 33 42 43 46C45 47 47 49 49 51C53 55 56 58 63 58C72 58 76 52 78 47C76 58 69 65 59 65C53 65 50 61 46 57C42 53 38 50 32 50C23 50 19 57 17 56Z"
        fill="url(#tw3d-wave2)"
        filter="url(#tw3d-shadow)"
      />
      <path
        d="M21 52C27 44 35 43 43 46C47 48 49 51 52 54"
        stroke="#FFFFFF"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeOpacity="0.7"
      />
    </svg>
  );
}

function ThreeDShopifyIcon({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none">
      <defs>
        <linearGradient id="shop3d-bag" x1="20" y1="25" x2="80" y2="90" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#A3E635" />
          <stop offset="40%" stopColor="#95BF47" />
          <stop offset="100%" stopColor="#5E8E3E" />
        </linearGradient>
        <linearGradient id="shop3d-shadow" x1="50" y1="30" x2="50" y2="90" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#4D7C28" stopOpacity="0" />
          <stop offset="100%" stopColor="#1E3A0F" stopOpacity="0.6" />
        </linearGradient>
        <linearGradient id="shop3d-handle" x1="40" y1="10" x2="60" y2="35" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FDE047" />
          <stop offset="100%" stopColor="#CA8A04" />
        </linearGradient>
        <filter id="shop3d-drop" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="5" stdDeviation="5" floodColor="#3F6212" floodOpacity="0.4" />
        </filter>
      </defs>
      <path
        d="M38 32V22C38 15.37 43.37 10 50 10C56.63 10 62 15.37 62 22V32"
        stroke="url(#shop3d-handle)"
        strokeWidth="3.8"
        strokeLinecap="round"
      />
      <path
        d="M26 30L34 26L74 24L78 30L84 82C84 85.3 81.3 88 78 88H26C22.7 88 20 85.3 20 82L26 30Z"
        fill="url(#shop3d-bag)"
        filter="url(#shop3d-drop)"
      />
      <path
        d="M26 30L34 26L74 24L78 30L84 82C84 85.3 81.3 88 78 88H26C22.7 88 20 85.3 20 82L26 30Z"
        fill="url(#shop3d-shadow)"
      />
      <path d="M34 26L52 33L74 24" stroke="#FFFFFF" strokeWidth="1.5" strokeOpacity="0.6" />
      <path
        d="M57 46C56 44 54 43 51 43C47 43 45 45 45 48C45 52 55 53 55 60C55 65 50 67 46 67C41 67 38 64 37 60L41 58C42 61 44 63 47 63C49 63 51 62 51 59C51 54 41 54 41 47C41 43 45 39 51 39C55 39 58 41 59 44L57 46Z"
        fill="#FFFFFF"
      />
    </svg>
  );
}

function ThreeDWordPressIcon({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none">
      <defs>
        <radialGradient id="wp3d-sphere" cx="35%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#4FA6D1" />
          <stop offset="45%" stopColor="#21759B" />
          <stop offset="100%" stopColor="#0B374C" />
        </radialGradient>
        <linearGradient id="wp3d-rim" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#BAE6FD" />
          <stop offset="100%" stopColor="#075985" />
        </linearGradient>
        <filter id="wp3d-shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="5" stdDeviation="5" floodColor="#082F49" floodOpacity="0.4" />
        </filter>
      </defs>
      <circle cx="50" cy="50" r="42" fill="url(#wp3d-sphere)" stroke="url(#wp3d-rim)" strokeWidth="2.5" filter="url(#wp3d-shadow)" />
      <path d="M26 34C32 24 44 20 58 22" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.55" />
      <path
        d="M22 50C22 61 28 70 37 75L27 47C24 47 22 48 22 50ZM69 49C69 44 67 40 64 40C60 40 57 44 57 47C57 49 58 52 59 55L68 76C74 70 78 61 78 50C78 49 78 49 78 48C72 49 69 49 69 49ZM50 20C38 20 27 28 22 39C24 39 27 39 30 39C34 39 39 38 39 38C41 38 41 40 39 40C39 40 37 41 35 41L45 71L51 53L47 41C45 41 43 40 43 40C41 40 41 38 43 38C43 38 48 39 52 39C56 39 61 38 61 38C63 38 63 40 61 40C61 40 59 41 57 41L67 71L75 46C76 43 76 41 74 41C72 41 70 40 70 40C68 40 68 38 70 38C70 38 75 39 78 39C72 28 62 20 50 20Z"
        fill="#FFFFFF"
      />
    </svg>
  );
}

function ThreeDSupabaseIcon({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none">
      <defs>
        <linearGradient id="supa3d-facet1" x1="20" y1="10" x2="70" y2="90" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#6EE7B7" />
          <stop offset="50%" stopColor="#3ECF8E" />
          <stop offset="100%" stopColor="#059669" />
        </linearGradient>
        <linearGradient id="supa3d-facet2" x1="40" y1="30" x2="80" y2="80" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#10B981" />
          <stop offset="100%" stopColor="#064E3B" />
        </linearGradient>
        <filter id="supa3d-shadow" x="-30%" y="-30%" width="160%" height="160%">
          <feDropShadow dx="0" dy="5" stdDeviation="5" floodColor="#065F46" floodOpacity="0.45" />
          <feGaussianBlur stdDeviation="2" result="glow" />
          <feComposite in="SourceGraphic" in2="glow" operator="over" />
        </filter>
      </defs>
      <g filter="url(#supa3d-shadow)">
        <path d="M52 12L20 54H48L42 88L76 46H48L52 12Z" fill="url(#supa3d-facet1)" />
        <path d="M52 12L48 46H76L42 88L45 54H20L52 12Z" fill="url(#supa3d-facet2)" opacity="0.55" />
        <path d="M52 12L48 46L42 88" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.8" />
      </g>
    </svg>
  );
}

interface PlatformItem {
  id: string;
  name: string;
  category: "all" | "frameworks" | "cms";
  icon3d: React.ReactNode;
  badge: string;
  subtitle: string;
  businessBenefit: string;
  pills: string[];
  slaMetric: string;
  slaLabel: string;
  cardGradient: string;
  borderColor: string;
  glowColor: string;
  accentText: string;
  metricBadgeColor: string;
}

const PLATFORMS: PlatformItem[] = [
  {
    id: "nextjs",
    name: "Next.js 16",
    category: "frameworks",
    icon3d: <ThreeDNextJsIcon />,
    badge: "100/100 Core Web Vitals",
    subtitle: "Edge Speed & Global SEO",
    businessBenefit:
      "Sub-second edge rendering that Google search algorithms reward with higher organic rankings and zero bounce rates.",
    pills: ["< 0.58s Initial Paint", "Edge Server Components", "Automated SEO Schema"],
    slaMetric: "0.58s",
    slaLabel: "LCP Speed Benchmark",
    cardGradient: "bg-gradient-to-br from-[#0c1326] via-[#121c38] to-[#070b16]",
    borderColor: "border-[#FFB020]/40 hover:border-[#FFB020]",
    glowColor: "shadow-[0_16px_36px_rgba(255,176,32,0.22)]",
    accentText: "text-[#FFB020]",
    metricBadgeColor: "bg-emerald-500/15 text-emerald-300 border-emerald-500/30",
  },
  {
    id: "react",
    name: "React 19",
    category: "frameworks",
    icon3d: <ThreeDReactIcon />,
    badge: "60 FPS Fluid UI",
    subtitle: "Concurrent Dynamic Interfaces",
    businessBenefit:
      "Buttery-smooth client transitions, interactive multi-step qualification funnels, and app-like experiences without page reloads.",
    pills: ["Zero Page Freezes", "Interactive Lead Funnels", "Instant Optimistic UI"],
    slaMetric: "60 FPS",
    slaLabel: "Hardware Render SLA",
    cardGradient: "bg-gradient-to-br from-[#051e33] via-[#092e4c] to-[#031422]",
    borderColor: "border-[#00D8FF]/40 hover:border-[#00D8FF]",
    glowColor: "shadow-[0_16px_36px_rgba(0,216,255,0.25)]",
    accentText: "text-[#00D8FF]",
    metricBadgeColor: "bg-cyan-500/15 text-[#00D8FF] border-cyan-500/30",
  },
  {
    id: "tailwind",
    name: "Tailwind CSS",
    category: "frameworks",
    icon3d: <ThreeDTailwindIcon />,
    badge: "Zero-Bloat Styling",
    subtitle: "Pixel-Perfect Design Fidelity",
    businessBenefit:
      "Ultra-lightweight compiled stylesheets that load in milliseconds with strict adherence to approved Figma design tokens.",
    pills: ["< 15KB Tiny Bundle", "100% Mobile Responsive", "Zero Styling Bloat"],
    slaMetric: "0.45s",
    slaLabel: "Browser Paint Time",
    cardGradient: "bg-gradient-to-br from-[#082942] via-[#0d3c61] to-[#051929]",
    borderColor: "border-[#38BDF8]/40 hover:border-[#38BDF8]",
    glowColor: "shadow-[0_16px_36px_rgba(56,189,248,0.25)]",
    accentText: "text-[#38BDF8]",
    metricBadgeColor: "bg-sky-500/15 text-[#38BDF8] border-sky-500/30",
  },
  {
    id: "shopify",
    name: "Shopify Plus",
    category: "cms",
    icon3d: <ThreeDShopifyIcon />,
    badge: "Headless Commerce",
    subtitle: "High-AOV Digital Storefronts",
    businessBenefit:
      "Lightning-fast online stores optimized for maximum average order value, 1-tap checkout, and instant slide-out micro-carts.",
    pills: ["1-Tap Shop Pay", "Instant Slide-Out Cart", "Automated ERP Webhooks"],
    slaMetric: "4.6%",
    slaLabel: "Avg. Checkout Conversion",
    cardGradient: "bg-gradient-to-br from-[#0a2c1d] via-[#10472e] to-[#051a11]",
    borderColor: "border-[#10B981]/40 hover:border-[#10B981]",
    glowColor: "shadow-[0_16px_36px_rgba(16,185,129,0.25)]",
    accentText: "text-emerald-400",
    metricBadgeColor: "bg-emerald-500/15 text-emerald-300 border-emerald-500/30",
  },
  {
    id: "wordpress",
    name: "WordPress CMS",
    category: "cms",
    icon3d: <ThreeDWordPressIcon />,
    badge: "Client-Editable Hub",
    subtitle: "Bespoke Gutenberg Theme Engine",
    businessBenefit:
      "Custom visual block editor built so your marketing team can publish and edit pages effortlessly without breaking layouts.",
    pills: ["Zero Page-Builder Bloat", "Visual Drag-and-Drop", "100% Client Code Ownership"],
    slaMetric: "0.85s",
    slaLabel: "Sub-Second Initial Paint",
    cardGradient: "bg-gradient-to-br from-[#0c2344] via-[#143663] to-[#07162b]",
    borderColor: "border-[#38BDF8]/40 hover:border-[#38BDF8]",
    glowColor: "shadow-[0_16px_36px_rgba(33,117,155,0.28)]",
    accentText: "text-sky-300",
    metricBadgeColor: "bg-blue-500/15 text-sky-300 border-blue-500/30",
  },
  {
    id: "supabase",
    name: "Supabase & Cloud APIs",
    category: "frameworks",
    icon3d: <ThreeDSupabaseIcon />,
    badge: "Realtime Cloud",
    subtitle: "Scalable Data & API Webhooks",
    businessBenefit:
      "Secure cloud databases, instant user authentication, and seamless webhook syncing directly to your CRM and marketing tools.",
    pills: ["Bank-Grade Security", "Instant API Webhooks", "Zero-Wait Query Sync"],
    slaMetric: "99.99%",
    slaLabel: "High-Availability Uptime",
    cardGradient: "bg-gradient-to-br from-[#062b20] via-[#0e4533] to-[#041a13]",
    borderColor: "border-[#3ECF8E]/40 hover:border-[#3ECF8E]",
    glowColor: "shadow-[0_16px_36px_rgba(62,207,142,0.28)]",
    accentText: "text-[#3ECF8E]",
    metricBadgeColor: "bg-emerald-500/15 text-[#3ECF8E] border-emerald-500/30",
  },
];

export function WebDesignTechStack() {
  const [selectedPlatformId, setSelectedPlatformId] = useState<string>("nextjs");
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const activePlatform =
    PLATFORMS.find((p) => p.id === selectedPlatformId) || PLATFORMS[0];

  // Prepare custom 3D Bounce / Shuffle Cards with rich tactile styling
  const SHUFFLE_CARDS: BounceCardItem[] = PLATFORMS.map((platform) => {
    const isSelected = platform.id === selectedPlatformId;

    return {
      title: platform.name,
      alt: platform.name,
      content: (
        <div
          className={cn(
            "w-full h-full p-3.5 sm:p-6 flex flex-col justify-between text-white rounded-[22px] sm:rounded-[28px] border-2 relative overflow-hidden select-none cursor-pointer transition-all duration-300 shadow-xl sm:shadow-2xl",
            platform.cardGradient,
            platform.borderColor,
            platform.glowColor
          )}
        >
          {/* Top Metallic Bevel Glare */}
          <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-white/40 to-transparent pointer-events-none" />

          {/* Subtle ambient light flare */}
          <div className="absolute -top-8 -right-8 w-28 h-28 bg-white/10 rounded-full blur-xl pointer-events-none" />

          {/* Top Row: 3D Official Stack Icon & SLA Metric Pill */}
          <div className="flex items-center justify-between z-10">
            <div className="p-1 sm:p-1.5 rounded-xl sm:rounded-2xl bg-white/10 border border-white/15 backdrop-blur-sm shadow-inner flex items-center justify-center scale-85 sm:scale-100 origin-left">
              {platform.icon3d}
            </div>
            <span
              className={cn(
                "text-[10px] sm:text-xs font-mono font-black px-2 py-0.5 sm:px-3 sm:py-1 rounded-full border shadow-xs",
                platform.metricBadgeColor
              )}
            >
              {platform.slaMetric}
            </span>
          </div>

          {/* Center: Title & Subtitle */}
          <div className="z-10 my-auto text-left pt-1 sm:pt-2 space-y-0.5">
            <div className="font-display font-black text-base sm:text-2xl text-white tracking-tight leading-tight">
              {platform.name}
            </div>
            <div
              className={cn(
                "text-[10.5px] sm:text-sm font-semibold truncate",
                platform.accentText
              )}
            >
              {platform.subtitle}
            </div>
          </div>

          {/* Bottom: Core Architectural Badge */}
          <div className="z-10 pt-2 sm:pt-3 border-t border-white/15 flex items-center justify-between text-[10px] sm:text-xs font-mono text-slate-100">
            <span className="truncate font-medium">{platform.badge}</span>
            <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#FFB020] shrink-0" />
          </div>
        </div>
      ),
    };
  });

  return (
    <div className="w-full max-w-7xl mx-auto space-y-5 sm:space-y-8 select-none text-left">
      {/* ==================================================================== */}
      {/* 1. SEAMLESS BIGGER SHUFFLE CARDS (IDENTICAL ON MOBILE & DESKTOP)     */}
      {/* ==================================================================== */}
      <div className="w-full text-center relative py-1 sm:py-2 overflow-visible">
        {/* Floating Shuffle Cards Viewport */}
        <div className="w-full h-[300px] sm:h-[420px] flex items-center justify-center overflow-visible py-1 sm:py-2">
          <BounceCards
            images={SHUFFLE_CARDS}
            containerWidth="100%"
            containerHeight={isMobile ? 300 : 410}
            cardSize={isMobile ? 180 : 270}
            spread={isMobile ? 26 : 135}
            rotation={7}
            arc={isMobile ? 12 : 22}
            bounciness={0.65}
            pushDistance={isMobile ? 65 : 180}
            hoverScale={1.1}
            borderWidth={0}
            borderColor="transparent"
            radius={isMobile ? 22 : 28}
            onCardClick={(index) => {
              const selected = PLATFORMS[index];
              if (selected) {
                setSelectedPlatformId(selected.id);
              }
            }}
          />
        </div>
      </div>

      {/* ==================================================================== */}
      {/* 2. UNBOXED ACTIVE FRAMEWORK SPOTLIGHT & TECH CONSULTATION CTA        */}
      {/* (NO REDUNDANT 6-CARD GRID, NO TABS, JUST CLEAN DIRECT VALUE)         */}
      {/* ==================================================================== */}
      <div className="p-4 sm:p-6 lg:p-8 rounded-2xl sm:rounded-3xl bg-white border border-[#E2DBD0] shadow-sm flex flex-col lg:flex-row items-center justify-between gap-4 sm:gap-6 text-left">
        {/* Left: Active Stack Value Proposition */}
        <div className="space-y-2 sm:space-y-2.5 max-w-3xl">
          <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap">
            <span className="text-[11px] sm:text-xs font-mono font-black uppercase tracking-wider text-[#060B22] bg-[#FFB020] px-2.5 sm:px-3 py-1 rounded-full shadow-xs">
              {activePlatform.name} Architecture
            </span>
            <span className="text-[11px] sm:text-xs font-mono font-bold text-emerald-700 bg-emerald-50 px-2 sm:px-2.5 py-1 rounded-full border border-emerald-200">
              Benchmark SLA: {activePlatform.slaMetric}
            </span>
            <span className="text-[11px] sm:text-xs font-mono text-slate-400">
              {activePlatform.slaLabel}
            </span>
          </div>

          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
            {activePlatform.businessBenefit}
          </p>

          <div className="flex flex-wrap gap-1.5 pt-1">
            {activePlatform.pills.map((pill, idx) => (
              <span
                key={idx}
                className="px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-lg bg-[#FAF8F5] border border-[#E2DBD0] text-[11px] sm:text-xs font-semibold text-slate-700"
              >
                {pill}
              </span>
            ))}
          </div>
        </div>

        {/* Right: Direct CTA to Hire Devs / Alignment Session */}
        <div className="shrink-0 w-full lg:w-auto pt-1 lg:pt-0">
          <StarBorder
            as={Link}
            href="/get-a-quote"
            className="w-full lg:w-auto py-3 sm:py-3.5 px-5 sm:px-6 rounded-xl text-xs sm:text-sm font-black uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg cursor-pointer text-center group whitespace-nowrap"
            radius={12}
            color="#FFB020"
            trailColor="#38BDF8"
            backgroundColor="#060B22"
            textColor="#FFFFFF"
            borderColor="rgba(255, 176, 32, 0.4)"
            sparkle={true}
            glow={0.8}
          >
            <span>Hire Senior {activePlatform.name} Devs</span>
            <ArrowRight className="w-4 h-4 text-[#FFB020] group-hover:translate-x-1 transition-transform" />
          </StarBorder>
        </div>
      </div>
    </div>
  );
}

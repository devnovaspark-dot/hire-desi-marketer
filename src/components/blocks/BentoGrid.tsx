"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Shield, Sparkles, Layers, Cpu } from "lucide-react";
import { cn } from "@/lib/utils";
import StarBorder from "@/components/ui/StarBorder";

// ====================================================================
// 6 BESPOKE 3D COLORFUL ICONS WITH SPECULAR GLOSS & REAL DEPTH
// ====================================================================

// 1. 3D Colorful Figma / UI Layers Icon
function ThreeDDesignIcon({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none">
      <defs>
        <radialGradient id="fig3d-red" cx="35%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#FFA692" />
          <stop offset="50%" stopColor="#F24E1E" />
          <stop offset="100%" stopColor="#B32B00" />
        </radialGradient>
        <radialGradient id="fig3d-orange" cx="35%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#FFC1B0" />
          <stop offset="50%" stopColor="#FF7262" />
          <stop offset="100%" stopColor="#C83B2B" />
        </radialGradient>
        <radialGradient id="fig3d-purple" cx="35%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#E2C7FF" />
          <stop offset="50%" stopColor="#A259FF" />
          <stop offset="100%" stopColor="#6C1EDB" />
        </radialGradient>
        <radialGradient id="fig3d-blue" cx="35%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#A5E7FF" />
          <stop offset="50%" stopColor="#1ABCFE" />
          <stop offset="100%" stopColor="#0284C7" />
        </radialGradient>
        <radialGradient id="fig3d-green" cx="35%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#8DFBD3" />
          <stop offset="50%" stopColor="#0ACF83" />
          <stop offset="100%" stopColor="#047857" />
        </radialGradient>
        <filter id="fig3d-shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="4" stdDeviation="4" floodColor="#000000" floodOpacity="0.25" />
        </filter>
      </defs>
      <g filter="url(#fig3d-shadow)">
        <rect x="22" y="14" width="28" height="24" rx="12" fill="url(#fig3d-red)" />
        <circle cx="64" cy="26" r="12" fill="url(#fig3d-orange)" />
        <rect x="22" y="38" width="28" height="24" rx="12" fill="url(#fig3d-purple)" />
        <circle cx="64" cy="50" r="12" fill="url(#fig3d-blue)" />
        <path d="M34 62C40.6 62 46 67.4 46 74C46 80.6 40.6 86 34 86C27.4 86 22 80.6 22 74H34V62Z" fill="url(#fig3d-green)" />
        <ellipse cx="30" cy="22" rx="4" ry="2" fill="#FFFFFF" fillOpacity="0.6" />
        <ellipse cx="68" cy="22" rx="3" ry="1.5" fill="#FFFFFF" fillOpacity="0.6" />
        <ellipse cx="30" cy="46" rx="4" ry="2" fill="#FFFFFF" fillOpacity="0.6" />
        <ellipse cx="68" cy="46" rx="3" ry="1.5" fill="#FFFFFF" fillOpacity="0.6" />
      </g>
    </svg>
  );
}

// 2. 3D React Atom & Next.js Orbit Icon
function ThreeDFullStackIcon({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none">
      <defs>
        <radialGradient id="react3d-ball" cx="35%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="35%" stopColor="#00D8FF" />
          <stop offset="100%" stopColor="#005274" />
        </radialGradient>
        <linearGradient id="react3d-orbit1" x1="10" y1="20" x2="90" y2="80">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="45%" stopColor="#00D8FF" />
          <stop offset="100%" stopColor="#0284C7" />
        </linearGradient>
        <filter id="react3d-glow" x="-30%" y="-30%" width="160%" height="160%">
          <feDropShadow dx="0" dy="3" stdDeviation="4" floodColor="#00D8FF" floodOpacity="0.4" />
        </filter>
      </defs>
      <circle cx="50" cy="50" r="38" fill="#00D8FF" fillOpacity="0.08" />
      <g strokeWidth="3.2" strokeLinecap="round" filter="url(#react3d-glow)">
        <ellipse cx="50" cy="50" rx="42" ry="15" stroke="url(#react3d-orbit1)" />
        <ellipse cx="50" cy="50" rx="42" ry="15" stroke="url(#react3d-orbit1)" transform="rotate(60 50 50)" />
        <ellipse cx="50" cy="50" rx="42" ry="15" stroke="url(#react3d-orbit1)" transform="rotate(120 50 50)" />
      </g>
      <circle cx="50" cy="50" r="10" fill="url(#react3d-ball)" filter="url(#react3d-glow)" />
      <ellipse cx="47" cy="46" rx="3" ry="1.8" fill="#FFFFFF" fillOpacity="0.85" />
    </svg>
  );
}

// 3. 3D Vibrant Emerald E-Commerce Bag & Gold Coin Icon
function ThreeDCommerceIcon({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none">
      <defs>
        <linearGradient id="com3d-bag" x1="20" y1="20" x2="80" y2="88">
          <stop offset="0%" stopColor="#34D399" />
          <stop offset="40%" stopColor="#10B981" />
          <stop offset="100%" stopColor="#065F46" />
        </linearGradient>
        <linearGradient id="com3d-gold" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FFF3B0" />
          <stop offset="50%" stopColor="#FFB020" />
          <stop offset="100%" stopColor="#B45309" />
        </linearGradient>
        <filter id="com3d-shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="5" stdDeviation="4" floodColor="#047857" floodOpacity="0.35" />
        </filter>
      </defs>
      <g filter="url(#com3d-shadow)">
        <path d="M38 34V24C38 17.4 43.4 12 50 12C56.6 12 62 17.4 62 24V34" stroke="url(#com3d-gold)" strokeWidth="4.5" strokeLinecap="round" />
        <path d="M25 32H75L71 86C71 89.3 68.3 92 65 92H35C31.7 92 29 89.3 29 86L25 32Z" fill="url(#com3d-bag)" />
        <path d="M29 36L32 84" stroke="#FFFFFF" strokeWidth="2" strokeOpacity="0.35" strokeLinecap="round" />
        <circle cx="50" cy="58" r="14" fill="url(#com3d-gold)" />
        <circle cx="50" cy="58" r="11" fill="none" stroke="#FFFFFF" strokeWidth="1.5" strokeOpacity="0.6" />
        {/* Luxury Star Emblem on Coin */}
        <polygon points="50,51 52.5,56 58,56.5 53.8,60.2 55.2,65.5 50,62.5 44.8,65.5 46.2,60.2 42,56.5 47.5,56" fill="#060B22" />
      </g>
    </svg>
  );
}

// 4. 3D Royal Purple Modular CMS Blocks Icon
function ThreeDCmsIcon({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none">
      <defs>
        <linearGradient id="cms3d-top" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#E9D5FF" />
          <stop offset="60%" stopColor="#C084FC" />
          <stop offset="100%" stopColor="#9333EA" />
        </linearGradient>
        <linearGradient id="cms3d-left" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#9333EA" />
          <stop offset="100%" stopColor="#581C87" />
        </linearGradient>
        <linearGradient id="cms3d-right" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#A855F7" />
          <stop offset="100%" stopColor="#6B21A8" />
        </linearGradient>
        <filter id="cms3d-shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="5" stdDeviation="4" floodColor="#7E22CE" floodOpacity="0.35" />
        </filter>
      </defs>
      <g filter="url(#cms3d-shadow)">
        <polygon points="50,14 78,30 50,46 22,30" fill="url(#cms3d-top)" />
        <polygon points="22,30 50,46 50,78 22,62" fill="url(#cms3d-left)" />
        <polygon points="50,46 78,30 78,62 50,78" fill="url(#cms3d-right)" />
        <line x1="50" y1="14" x2="50" y2="46" stroke="#FFFFFF" strokeWidth="1.8" strokeOpacity="0.5" />
        <polygon points="50,22 56,30 50,38 44,30" fill="#FFB020" />
        <circle cx="50" cy="30" r="3" fill="#FFFFFF" />
      </g>
    </svg>
  );
}

// 5. 3D Golden Database & Cloud Portal Discs Icon
function ThreeDCloudIcon({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none">
      <defs>
        <linearGradient id="cld3d-top" x1="20" y1="15" x2="80" y2="40">
          <stop offset="0%" stopColor="#FDE68A" />
          <stop offset="50%" stopColor="#F59E0B" />
          <stop offset="100%" stopColor="#B45309" />
        </linearGradient>
        <linearGradient id="cld3d-side" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#F59E0B" />
          <stop offset="100%" stopColor="#78350F" />
        </linearGradient>
        <filter id="cld3d-shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="5" stdDeviation="4" floodColor="#B45309" floodOpacity="0.35" />
        </filter>
      </defs>
      <g filter="url(#cld3d-shadow)">
        <path d="M22 62C22 70.8 34.5 78 50 78C65.5 78 78 70.8 78 62V72C78 80.8 65.5 88 50 88C34.5 88 22 80.8 22 72V62Z" fill="url(#cld3d-side)" />
        <ellipse cx="50" cy="62" rx="28" ry="8" fill="url(#cld3d-top)" />
        <path d="M22 42C22 50.8 34.5 58 50 58C65.5 58 78 50.8 78 42V52C78 60.8 65.5 68 50 68C34.5 68 22 60.8 22 52V42Z" fill="url(#cld3d-side)" />
        <ellipse cx="50" cy="42" rx="28" ry="8" fill="url(#cld3d-top)" />
        <path d="M22 22C22 30.8 34.5 38 50 38C65.5 38 78 30.8 78 22V32C78 40.8 65.5 48 50 48C34.5 48 22 40.8 22 32V22Z" fill="url(#cld3d-side)" />
        <ellipse cx="50" cy="22" rx="28" ry="8" fill="url(#cld3d-top)" />
        <ellipse cx="50" cy="20" rx="22" ry="5" fill="#FFFFFF" fillOpacity="0.4" />
        <circle cx="34" cy="30" r="2.2" fill="#10B981" />
        <circle cx="34" cy="50" r="2.2" fill="#10B981" />
        <circle cx="34" cy="70" r="2.2" fill="#10B981" />
      </g>
    </svg>
  );
}

// 6. 3D Neon Magenta & Hot Cyan Speedometer Gauge Icon
function ThreeDVitalsIcon({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none">
      <defs>
        <linearGradient id="vit3d-arc" x1="15" y1="50" x2="85" y2="50">
          <stop offset="0%" stopColor="#38BDF8" />
          <stop offset="50%" stopColor="#F43F5E" />
          <stop offset="100%" stopColor="#EC4899" />
        </linearGradient>
        <linearGradient id="vit3d-needle" x1="50" y1="52" x2="78" y2="30">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#FFB020" />
        </linearGradient>
        <filter id="vit3d-shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="4" stdDeviation="5" floodColor="#EC4899" floodOpacity="0.35" />
        </filter>
      </defs>
      <g filter="url(#vit3d-shadow)">
        <path d="M20 68A36 36 0 1 1 80 68" stroke="#E2E8F0" strokeWidth="8" strokeLinecap="round" />
        <path d="M20 68A36 36 0 1 1 80 68" stroke="url(#vit3d-arc)" strokeWidth="8" strokeDasharray="180" strokeDashoffset="25" strokeLinecap="round" />
        <circle cx="50" cy="56" r="10" fill="#060B22" stroke="#FFB020" strokeWidth="2.5" />
        <circle cx="50" cy="56" r="4" fill="#FFFFFF" />
        <path d="M50 56L75 28" stroke="url(#vit3d-needle)" strokeWidth="4.5" strokeLinecap="round" />
        <circle cx="76" cy="27" r="7" fill="#10B981" />
        <circle cx="76" cy="27" r="3" fill="#FFFFFF" />
      </g>
    </svg>
  );
}

// ====================================================================
// ARCHITECTURE SOLUTION DEFINITIONS
// ====================================================================

interface PipelineStep {
  step: string;
  title: string;
  detail: string;
}

interface ArchitectureSolution {
  id: string;
  number: string;
  name: string;
  tag: string;
  icon: React.ComponentType<{ className?: string }>;
  accentColor: string;
  glowRgba: string;
  badge: string;
  headline: string;
  description: string;
  deliverables: string[];
  specs: {
    label: string;
    value: string;
  }[];
  techStack: string[];
  pipeline: PipelineStep[];
}

const ARCHITECTURE_SOLUTIONS: ArchitectureSolution[] = [
  {
    id: "figma",
    number: "01",
    name: "Custom UI/UX",
    tag: "Figma Tokens",
    icon: ThreeDDesignIcon,
    accentColor: "#F24E1E",
    glowRgba: "rgba(242, 78, 30, 0.25)",
    badge: "Figma-First Architecture",
    headline: "Bespoke Digital Experiences Engineered from Clean Figma Tokens",
    description:
      "Every single pixel is designed from scratch in Figma to reflect your brand's authority, then compiled directly into semantic Next.js 16 components with zero generic theme bloat.",
    deliverables: [
      "Bespoke Figma design system & responsive mobile/desktop prototypes",
      "Strict auto-layout token variables (spacing, typography, color themes)",
      "Interactive component states & micro-interaction design specs",
    ],
    specs: [
      { label: "Visual Fidelity", value: "100% Pixel-Perfect" },
      { label: "Responsiveness", value: "Fluid Breakpoints" },
      { label: "Design Ownership", value: "Full Figma File Access" },
    ],
    techStack: ["Figma Tokens", "Tailwind CSS", "Radix UI", "Motion"],
    pipeline: [
      { step: "01", title: "Figma Tokens", detail: "Color & typography primitives" },
      { step: "02", title: "Interactive UI", detail: "Fluid prototype validation" },
      { step: "03", title: "Component Library", detail: "Accessible Tailwind system" },
      { step: "04", title: "Semantic Code", detail: "Zero-bloat React components" },
    ],
  },
  {
    id: "nextjs",
    number: "02",
    name: "Modern Full-Stack",
    tag: "Next.js 16 & React 19",
    icon: ThreeDFullStackIcon,
    accentColor: "#00D8FF",
    glowRgba: "rgba(0, 216, 255, 0.25)",
    badge: "Concurrent Edge Speed",
    headline: "Sub-Second Edge Performance with React 19 Concurrent Rendering",
    description:
      "Engineered for instantaneous route transitions, fluid micro-interactions, and Google Lighthouse 100/100 Core Web Vitals across every global user session.",
    deliverables: [
      "Next.js 16 App Router with zero unnecessary client JavaScript",
      "Automated edge server-side rendering (SSR) & dynamic image optimization",
      "Google Lighthouse Grade A+ Core Web Vitals certified delivery",
    ],
    specs: [
      { label: "LCP Benchmark", value: "< 0.8s Initial Paint" },
      { label: "Core Web Vitals", value: "100 / 100 Grade A+" },
      { label: "Edge Engine", value: "React 19 Concurrent" },
    ],
    techStack: ["Next.js 16", "React 19", "TypeScript", "Vercel Edge"],
    pipeline: [
      { step: "01", title: "Server Components", detail: "Zero client JS overhead" },
      { step: "02", title: "Edge Deployment", detail: "Global CDN edge caching" },
      { step: "03", title: "Concurrent UI", detail: "Sub-second transitions" },
      { step: "04", title: "100/100 Vitals", detail: "Google Grade A+ guaranteed" },
    ],
  },
  {
    id: "commerce",
    number: "03",
    name: "Modern E-Commerce",
    tag: "Shopify Plus & Headless",
    icon: ThreeDCommerceIcon,
    accentColor: "#10B981",
    glowRgba: "rgba(16, 185, 129, 0.25)",
    badge: "High-AOV Storefront",
    headline: "High-Velocity Storefronts Built for Maximum Average Order Value",
    description:
      "Custom Shopify Plus and headless storefronts with instant slide-out micro-carts, dynamic free-shipping progress bars, and frictionless multi-currency 1-tap checkout.",
    deliverables: [
      "Custom Shopify theme or headless storefront architecture",
      "Instant slide-out cart drawer with dynamic upsells & cross-sells",
      "Global CDN caching optimized for sub-second product page loads",
    ],
    specs: [
      { label: "Avg Conversion", value: "4.6% High-Converting" },
      { label: "Checkout Engine", value: "1-Tap Express Native" },
      { label: "Cart Velocity", value: "< 100ms Micro-Drawer" },
    ],
    techStack: ["Shopify Plus", "Storefront API", "Liquid / Headless", "Shop Pay"],
    pipeline: [
      { step: "01", title: "Catalog Schema", detail: "Structured variant models" },
      { step: "02", title: "Instant Cart", detail: "Slide-out AOV boosters" },
      { step: "03", title: "1-Tap Checkout", detail: "Shop Pay & Apple Pay" },
      { step: "04", title: "Revenue Scale", detail: "High-velocity storefront" },
    ],
  },
  {
    id: "cms",
    number: "04",
    name: "Client CMS Autonomy",
    tag: "Webflow & Headless",
    icon: ThreeDCmsIcon,
    accentColor: "#A855F7",
    glowRgba: "rgba(168, 85, 247, 0.25)",
    badge: "Zero-Code Autonomy",
    headline: "Empower Your Marketing Team with Zero Developer Dependencies",
    description:
      "Intuitive drag-and-drop publishing on Webflow, WordPress, or modern Headless CMS with structured schemas tailored strictly to approved brand guidelines.",
    deliverables: [
      "Custom visual block editor strictly tailored to approved brand guidelines",
      "Zero code required for publishing landing pages, blogs, and case studies",
      "Recorded Loom video training library for your marketing staff",
    ],
    specs: [
      { label: "Publishing Speed", value: "Instant 1-Click Deploy" },
      { label: "Dev Dependency", value: "Zero (100% Autonomy)" },
      { label: "Platform Fit", value: "Webflow / Headless CMS" },
    ],
    techStack: ["Webflow CMS", "Sanity.io", "WordPress Block API", "ISR Caching"],
    pipeline: [
      { step: "01", title: "Schema Design", detail: "Structured content models" },
      { step: "02", title: "Visual Editor", detail: "Drag-and-drop autonomy" },
      { step: "03", title: "Brand Rules", detail: "Locked style guardrails" },
      { step: "04", title: "1-Click Live", detail: "Zero dev support needed" },
    ],
  },
  {
    id: "cloud",
    number: "05",
    name: "Cloud Portals & APIs",
    tag: "Supabase & REST/Auth",
    icon: ThreeDCloudIcon,
    accentColor: "#F59E0B",
    glowRgba: "rgba(245, 158, 11, 0.25)",
    badge: "Enterprise Security",
    headline: "Secure Client Portals & Scalable Cloud API Integrations",
    description:
      "Role-based access control, multi-factor authentication, and PostgreSQL database connections for enterprise client portals and internal platforms.",
    deliverables: [
      "Role-based access control (RBAC) with row-level database security",
      "Automated database backup pipelines & structured audit logging",
      "Real-time webhook integrations for payment and CRM workflows",
    ],
    specs: [
      { label: "Security Level", value: "Enterprise RBAC & MFA" },
      { label: "Database Engine", value: "PostgreSQL High-Avail." },
      { label: "API Latency", value: "< 120ms Global Response" },
    ],
    techStack: ["Supabase", "PostgreSQL", "REST APIs", "OAuth & MFA"],
    pipeline: [
      { step: "01", title: "Auth & MFA", detail: "Role-based access control" },
      { step: "02", title: "PostgreSQL DB", detail: "Row-level security rules" },
      { step: "03", title: "Webhooks", detail: "Real-time payment sync" },
      { step: "04", title: "Client Portal", detail: "High-speed dashboard" },
    ],
  },
  {
    id: "vitals",
    number: "06",
    name: "Speed & SEO Shield",
    tag: "100/100 Core Vitals",
    icon: ThreeDVitalsIcon,
    accentColor: "#EC4899",
    glowRgba: "rgba(236, 72, 153, 0.25)",
    badge: "100/100 Lighthouse Shield",
    headline: "Google Lighthouse Certified Speed & 301 SEO Authority Protection",
    description:
      "Protect established search keyword rankings during website modernizations while passing Google Core Web Vitals with flying colors.",
    deliverables: [
      "Rigorous 1:1 301 redirect map preventing any 404 search traffic loss",
      "Automated JSON-LD rich snippet schemas for Google search results",
      "Zero render-blocking scripts & WebP/AVIF automated image pipeline",
    ],
    specs: [
      { label: "Core Web Vitals", value: "100 / 100 Mobile & Desk" },
      { label: "SEO Migration", value: "0% Traffic Loss Guarantee" },
      { label: "Layout Shift", value: "0.00 CLS Flawless" },
    ],
    techStack: ["Google Vitals", "JSON-LD Schema", "301 Engine", "AVIF Optimizer"],
    pipeline: [
      { step: "01", title: "Redirect Map", detail: "1:1 ranking preservation" },
      { step: "02", title: "JSON-LD Schema", detail: "Rich SERP structured data" },
      { step: "03", title: "Zero Blocking", detail: "Critical CSS inlining" },
      { step: "04", title: "Google Top 1%", detail: "100/100 Lighthouse score" },
    ],
  },
];

export default function BentoGrid() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const pauseTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const active = ARCHITECTURE_SOLUTIONS[activeIndex] || ARCHITECTURE_SOLUTIONS[0];

  // Auto-cycle through the 6 solutions smoothly
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % ARCHITECTURE_SOLUTIONS.length);
    }, 4500);

    return () => clearInterval(interval);
  }, [isPaused]);

  const handleSelectSolution = (index: number) => {
    setActiveIndex(index);
    setIsPaused(true);

    if (pauseTimeoutRef.current) {
      clearTimeout(pauseTimeoutRef.current);
    }
    pauseTimeoutRef.current = setTimeout(() => {
      setIsPaused(false);
    }, 12000);
  };

  return (
    <div className="w-full select-none text-slate-800">
      {/* ==================================================================== */}
      {/* 1. TOP DOCK: 6 TACTILE 3D SOLUTION NODES                            */}
      {/* ==================================================================== */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 max-w-6xl mx-auto px-2">
        {ARCHITECTURE_SOLUTIONS.map((sol, idx) => {
          const Icon = sol.icon;
          const isActive = idx === activeIndex;

          return (
            <button
              key={sol.id}
              type="button"
              onClick={() => handleSelectSolution(idx)}
              onMouseEnter={() => handleSelectSolution(idx)}
              className={cn(
                "group relative flex flex-col items-center text-center p-3.5 sm:p-4 rounded-2xl transition-all duration-300 cursor-pointer outline-none border",
                isActive
                  ? "bg-white shadow-xl -translate-y-1.5 border-[#FFB020]"
                  : "bg-white/70 hover:bg-white hover:shadow-md hover:-translate-y-0.5 border-[#E2DBD0]"
              )}
              style={
                isActive
                  ? {
                      boxShadow: `0 12px 30px ${sol.glowRgba}, 0 2px 8px rgba(0,0,0,0.04)`,
                    }
                  : undefined
              }
            >
              {/* Active illuminated top accent bar */}
              {isActive && (
                <div
                  className="absolute top-0 inset-x-4 h-1 rounded-b-full transition-all duration-300"
                  style={{ backgroundColor: sol.accentColor }}
                />
              )}

              {/* 3D Colorful Icon Container with Specular Sheen */}
              <div
                className={cn(
                  "w-13 h-13 sm:w-15 sm:h-15 rounded-2xl flex items-center justify-center transition-all duration-300 mb-2 relative",
                  isActive
                    ? "scale-110 drop-shadow-md"
                    : "group-hover:scale-105 opacity-85 group-hover:opacity-100"
                )}
              >
                <Icon className="w-10 h-10 sm:w-11 sm:h-11 transition-transform duration-300 group-hover:rotate-3" />
              </div>

              {/* Solution Index & Name */}
              <div className="space-y-0.5 w-full">
                <div className="text-[10px] font-mono tracking-wider uppercase text-slate-600 font-bold">
                  Solution {sol.number}
                </div>
                <div
                  className={cn(
                    "text-xs font-display font-bold tracking-tight transition-colors line-clamp-1",
                    isActive ? "text-[#060B22] font-black" : "text-slate-700 group-hover:text-[#060B22]"
                  )}
                >
                  {sol.name}
                </div>
                <div className="text-[10px] font-mono text-slate-600 truncate">
                  {sol.tag}
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* ==================================================================== */}
      {/* 2. THE PRODUCTION ARCHITECTURE SHOWCASE CONSOLE                       */}
      {/* Clean, luxury glass console matching the light #FAF8F5 site design   */}
      {/* ==================================================================== */}
      <div className="mt-6 max-w-6xl mx-auto px-2">
        <div className="bg-white border border-[#E2DBD0] rounded-3xl p-6 sm:p-8 lg:p-10 shadow-[0_12px_40px_rgba(6,11,34,0.06)] relative overflow-hidden transition-all duration-500">
          {/* Subtle Ambient Accent Aura on Top-Right Corner */}
          <div
            className="absolute -top-24 -right-24 w-80 h-80 rounded-full blur-3xl pointer-events-none transition-all duration-700 opacity-20"
            style={{ backgroundColor: active.accentColor }}
          />

          {/* --- CONSOLE HEADER BAR --- */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-slate-100 relative z-10">
            <div className="flex items-center gap-2.5">
              <span
                className="w-2.5 h-2.5 rounded-full animate-ping"
                style={{ backgroundColor: active.accentColor }}
              />
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-700">
                Blueprint {active.number} // {active.name}
              </span>
            </div>

            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF8F5] border border-[#E2DBD0] text-xs font-mono font-semibold text-slate-700">
              <Sparkles className="w-3.5 h-3.5 text-[#FFB020]" />
              <span>{active.badge}</span>
            </div>
          </div>

          {/* --- INTERACTIVE 4-STEP PIPELINE STREAM --- */}
          <div className="py-6 border-b border-slate-100 relative z-10">
            <div className="text-[11px] font-mono uppercase tracking-wider text-slate-600 font-bold mb-4 flex items-center gap-2">
              <Cpu className="w-3.5 h-3.5 text-[#FFB020]" />
              <span>Compiled Production Pipeline</span>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 relative">
              {active.pipeline.map((item, pIdx) => (
                <div
                  key={pIdx}
                  className="bg-[#FAF8F5] border border-[#E2DBD0] rounded-2xl p-3.5 sm:p-4 relative transition-all duration-300 hover:bg-white hover:shadow-sm group"
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span
                      className="text-[10px] font-mono font-black px-2 py-0.5 rounded-md text-white"
                      style={{ backgroundColor: active.accentColor }}
                    >
                      STEP {item.step}
                    </span>
                    <span className="text-slate-600 text-xs font-mono group-hover:text-slate-600">→</span>
                  </div>
                  <div className="font-display font-bold text-xs sm:text-sm text-[#0B1B3A] tracking-tight">
                    {item.title}
                  </div>
                  <div className="text-[11px] text-slate-600 font-normal mt-0.5 leading-snug">
                    {item.detail}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* --- MAIN SHOWCASE BODY: EDITORIAL & SPECS --- */}
          <div className="pt-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
            {/* Left 7 Columns: Editorial Narrative & Deliverables */}
            <div className="lg:col-span-7 space-y-4 text-left">
              <h3 className="font-display font-black text-xl sm:text-2xl text-[#0B1B3A] tracking-tight leading-snug">
                {active.headline}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                {active.description}
              </p>

              {/* Verified Deliverables List */}
              <div className="pt-2 space-y-2.5">
                <div className="text-[11px] font-mono uppercase tracking-wider text-slate-600 font-bold flex items-center gap-2">
                  <Shield className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Verified Architecture Deliverables</span>
                </div>
                <div className="space-y-2">
                  {active.deliverables.map((del, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{del}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack Chips */}
              <div className="pt-2 flex flex-wrap items-center gap-1.5">
                <span className="text-[11px] font-mono text-slate-600 mr-1 font-semibold">Stack:</span>
                {active.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-lg bg-[#FAF8F5] border border-[#E2DBD0] text-[11px] font-mono font-medium text-slate-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Right 5 Columns: Telemetry Benchmark Panel & CTA */}
            <div className="lg:col-span-5 flex flex-col justify-between h-full bg-[#FAF8F5] border border-[#E2DBD0] rounded-2xl p-5 sm:p-6 space-y-5">
              <div className="space-y-3">
                <div className="text-[11px] font-mono uppercase tracking-wider text-slate-600 font-bold flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-[#FFB020]" />
                  <span>Production SLA Benchmarks</span>
                </div>

                <div className="space-y-2.5">
                  {active.specs.map((sp, sIdx) => (
                    <div
                      key={sIdx}
                      className="flex items-center justify-between p-2.5 rounded-xl bg-white border border-[#E2DBD0]"
                    >
                      <span className="text-xs text-slate-600 font-normal">{sp.label}</span>
                      <span className="text-xs font-mono font-bold text-[#0B1B3A]">{sp.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Primary Call to Action */}
              <div className="pt-2">
                <StarBorder
                  as={Link}
                  href="/get-a-quote"
                  className="w-full py-3.5 px-6 rounded-xl text-xs font-black uppercase tracking-wider inline-flex items-center justify-center gap-2 shadow-lg cursor-pointer text-center group"
                  radius={12}
                  color="#FFB020"
                  trailColor="#38BDF8"
                  backgroundColor="#060B22"
                  textColor="#FFFFFF"
                  borderColor="rgba(255, 176, 32, 0.5)"
                  sparkle={true}
                  glow={0.8}
                >
                  <span>Discuss {active.name} Scope</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#FFB020] group-hover:translate-x-1 transition-transform" />
                </StarBorder>
                <p className="text-[10px] font-mono text-slate-600 text-center mt-2">
                  Zero Lock-In • Day-One GitHub Commit Access
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

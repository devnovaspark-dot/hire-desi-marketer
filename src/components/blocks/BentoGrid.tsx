"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  Zap,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  ChevronRight,
  Layout,
  Layers,
  Code2,
  Cpu,
  ShoppingBag,
  CreditCard,
  Database,
  Lock,
  Gauge,
  Shield,
  FileCode,
  Sparkles,
} from "lucide-react";
import { cn } from "@/lib/utils";
import StarBorder from "@/components/ui/StarBorder";

// ====================================================================
// SKEUOMORPHIC METALLIC FASTENERS (PRECISION CORNER HARDWARE)
// ====================================================================
function MetallicScrew({ className = "w-3.5 h-3.5" }: { className?: string }) {
  return (
    <div
      className={cn(
        "rounded-full bg-gradient-to-br from-[#FAF8F5] via-[#D5CEBF] to-[#999080] p-[1.5px] shadow-[inset_0_1px_1px_rgba(255,255,255,0.9),0_1px_2px_rgba(0,0,0,0.18)] flex items-center justify-center select-none pointer-events-none",
        className
      )}
    >
      <div className="w-full h-full rounded-full bg-gradient-to-tl from-[#B3AA99] to-[#EAE6DE] flex items-center justify-center shadow-inner">
        <div className="w-[60%] h-[1.5px] bg-[#6E6657] rounded-full rotate-45 shadow-[0_0.5px_0_rgba(255,255,255,0.6)]" />
      </div>
    </div>
  );
}

// ====================================================================
// 6 BESPOKE SKEUOMORPHIC METALLIC ICONS (COHESIVE EXECUTIVE GOLD & OBSIDIAN)
// NO CRAZY RAINBOW COLORS – COHESIVE, LUXURIOUS, 3D TACTILE CRAFTSMANSHIP
// ====================================================================

// 01: Custom Website Design & Engineering (Figma Tokens & Design Systems)
function BespokeUiIcon({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 36 36" fill="none">
      <defs>
        <linearGradient id="gold-bevel-1" x1="0" y1="0" x2="36" y2="36" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFF2B2" />
          <stop offset="45%" stopColor="#FFB020" />
          <stop offset="100%" stopColor="#A86600" />
        </linearGradient>
        <radialGradient id="gold-core-1" cx="50%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#FFF9E6" />
          <stop offset="60%" stopColor="#FFB020" />
          <stop offset="100%" stopColor="#8A5200" />
        </radialGradient>
      </defs>
      {/* Outer tactile bezel ring */}
      <circle cx="18" cy="18" r="16" fill="#060B22" stroke="url(#gold-bevel-1)" strokeWidth="1.6" />
      <circle cx="18" cy="18" r="13.5" stroke="rgba(255,176,32,0.25)" strokeWidth="0.8" strokeDasharray="2 2" />
      {/* Precision Vector Pen & Token Diamond */}
      <path d="M18 7L26 15L18 23L10 15L18 7Z" fill="url(#gold-core-1)" stroke="#FFF2B2" strokeWidth="0.8" />
      <circle cx="18" cy="15" r="2.5" fill="#060B22" stroke="#FFF2B2" strokeWidth="0.9" />
      <path d="M18 23V29M14.5 29H21.5" stroke="url(#gold-bevel-1)" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

// 02: Website Redesign & Modernization (Next.js 16 & React 19 Concurrent Rendering)
function FullStackCoreIcon({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 36 36" fill="none">
      <defs>
        <linearGradient id="gold-bevel-2" x1="0" y1="0" x2="36" y2="36" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFF2B2" />
          <stop offset="50%" stopColor="#FFB020" />
          <stop offset="100%" stopColor="#A86600" />
        </linearGradient>
      </defs>
      <circle cx="18" cy="18" r="16" fill="#060B22" stroke="url(#gold-bevel-2)" strokeWidth="1.6" />
      {/* Dual Intersecting Orbital Atomic Rings */}
      <ellipse cx="18" cy="18" rx="12" ry="4.8" transform="rotate(-30 18 18)" stroke="url(#gold-bevel-2)" strokeWidth="1.4" opacity="0.95" />
      <ellipse cx="18" cy="18" rx="12" ry="4.8" transform="rotate(30 18 18)" stroke="url(#gold-bevel-2)" strokeWidth="1.4" opacity="0.95" />
      {/* High-Energy Solid Central Reactor Hub */}
      <circle cx="18" cy="18" r="3.6" fill="#FFF2B2" />
      <circle cx="18" cy="18" r="1.6" fill="#060B22" />
      {/* Orbital Energy Photons */}
      <circle cx="28" cy="12" r="1.2" fill="#FFB020" />
      <circle cx="8" cy="24" r="1.2" fill="#FFB020" />
    </svg>
  );
}

// 03: High-Velocity E-Commerce Storefronts (Shopify Plus & Headless)
function EcommerceVelocityIcon({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 36 36" fill="none">
      <defs>
        <linearGradient id="gold-bevel-3" x1="0" y1="0" x2="36" y2="36" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFF2B2" />
          <stop offset="50%" stopColor="#FFB020" />
          <stop offset="100%" stopColor="#A86600" />
        </linearGradient>
      </defs>
      <circle cx="18" cy="18" r="16" fill="#060B22" stroke="url(#gold-bevel-3)" strokeWidth="1.6" />
      {/* Luxury Shopping Bag Geometry with Bevel */}
      <path
        d="M11 13L13.5 8.5H22.5L25 13L26.5 27.5C26.5 28.3 25.8 29 25 29H11C10.2 29 9.5 28.3 9.5 27.5L11 13Z"
        fill="rgba(255,176,32,0.12)"
        stroke="url(#gold-bevel-3)"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      {/* Handle arch */}
      <path d="M14.5 11V8C14.5 6 16 4.5 18 4.5C20 4.5 21.5 6 21.5 8V11" stroke="url(#gold-bevel-3)" strokeWidth="1.5" strokeLinecap="round" />
      {/* 1-Tap Express Lightning Bolt */}
      <path d="M18.5 14.5L15 20H18L17.5 25L21.5 19.5H18.5L18.5 14.5Z" fill="#FFF2B2" />
    </svg>
  );
}

// 04: Client-Editable CMS & Webflow Platforms (Zero-Code Autonomy)
function CmsAutonomyIcon({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 36 36" fill="none">
      <defs>
        <linearGradient id="gold-bevel-4" x1="0" y1="0" x2="36" y2="36" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFF2B2" />
          <stop offset="50%" stopColor="#FFB020" />
          <stop offset="100%" stopColor="#A86600" />
        </linearGradient>
      </defs>
      <circle cx="18" cy="18" r="16" fill="#060B22" stroke="url(#gold-bevel-4)" strokeWidth="1.6" />
      {/* Interlocking 3D Modular Layout Plates */}
      <rect x="9" y="9" width="7.5" height="7.5" rx="2" fill="#FFF2B2" stroke="url(#gold-bevel-4)" strokeWidth="1" />
      <rect x="19.5" y="9" width="7.5" height="7.5" rx="2" fill="rgba(255,176,32,0.3)" stroke="url(#gold-bevel-4)" strokeWidth="1" />
      <rect x="9" y="19.5" width="18" height="7.5" rx="2" fill="rgba(255,176,32,0.18)" stroke="url(#gold-bevel-4)" strokeWidth="1" />
      {/* Publishing indicator node */}
      <circle cx="23.2" cy="12.7" r="1.3" fill="#FFFFFF" />
      <line x1="12" y1="23.2" x2="24" y2="23.2" stroke="#FFB020" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

// 05: Full-Stack Web Applications & Portals (Supabase & Cloud APIs)
function CloudPortalIcon({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 36 36" fill="none">
      <defs>
        <linearGradient id="gold-bevel-5" x1="0" y1="0" x2="36" y2="36" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFF2B2" />
          <stop offset="50%" stopColor="#FFB020" />
          <stop offset="100%" stopColor="#A86600" />
        </linearGradient>
      </defs>
      <circle cx="18" cy="18" r="16" fill="#060B22" stroke="url(#gold-bevel-5)" strokeWidth="1.6" />
      {/* 3-Tier Cylindrical Database Vault */}
      <ellipse cx="18" cy="11" rx="8" ry="3" fill="rgba(255,176,32,0.35)" stroke="url(#gold-bevel-5)" strokeWidth="1.3" />
      <path d="M10 11V18C10 19.7 13.6 21 18 21C22.4 21 26 19.7 26 18V11" stroke="url(#gold-bevel-5)" strokeWidth="1.3" />
      <path d="M10 18V25C10 26.7 13.6 28 18 28C22.4 28 26 26.7 26 25V18" stroke="url(#gold-bevel-5)" strokeWidth="1.3" />
      {/* Telemetry diodes */}
      <circle cx="22" cy="25" r="1.2" fill="#FFF2B2" />
      <circle cx="18.5" cy="25" r="1.2" fill="#FFB020" />
    </svg>
  );
}

// 06: Speed Tuning & Core Web Vitals Optimization (Google Top 1% Lighthouse)
function SpeedShieldIcon({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 36 36" fill="none">
      <defs>
        <linearGradient id="gold-bevel-6" x1="0" y1="0" x2="36" y2="36" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFF2B2" />
          <stop offset="50%" stopColor="#FFB020" />
          <stop offset="100%" stopColor="#A86600" />
        </linearGradient>
      </defs>
      <circle cx="18" cy="18" r="16" fill="#060B22" stroke="url(#gold-bevel-6)" strokeWidth="1.6" />
      {/* Precision Chronometer Arc */}
      <path
        d="M9.5 23C8.5 20.8 8.2 18.2 8.7 15.6C9.4 13 11 10.7 13.1 9.3C15.2 7.8 17.8 7.3 20.4 7.8C23 8.4 25.3 10 26.7 12.1C28.2 14.2 28.7 16.8 28.2 19.4C27.6 22 26 24.3 23.9 25.7"
        stroke="url(#gold-bevel-6)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeDasharray="2 2.5"
      />
      {/* High-Speed Needle Pointing to 100/100 Benchmark */}
      <path d="M18 18L24.5 11.5" stroke="#FFF2B2" strokeWidth="2.2" strokeLinecap="round" />
      <circle cx="18" cy="18" r="3" fill="#FFB020" stroke="#060B22" strokeWidth="1.2" />
      {/* 100% Emerald Grade Indicator */}
      <circle cx="24.5" cy="11.5" r="1.6" fill="#10B981" />
    </svg>
  );
}

// ====================================================================
// ARCHITECTURE NODES DATA WITH 4 SATELLITE NODES FOR CONVERGING CIRCUIT
// ====================================================================
interface SatelliteNode {
  label: string;
  sublabel: string;
  icon: React.ComponentType<{ className?: string }>;
}

interface ArchitectureNode {
  id: string;
  number: string;
  name: string;
  tag: string;
  badge: string;
  icon: React.ComponentType<{ className?: string }>;
  hubLabel: string;
  satellites: [SatelliteNode, SatelliteNode, SatelliteNode, SatelliteNode];
  statusLabel: string;
  statusMetric: string;
  headline: string;
  description: string;
  deliverables: string[];
}

const ARCHITECTURE_NODES: ArchitectureNode[] = [
  {
    id: "figma",
    number: "01",
    name: "Custom Website Design & Engineering",
    tag: "Figma to Next.js 16",
    badge: "100% Custom UI",
    icon: BespokeUiIcon,
    hubLabel: "Compiled Design Token Engine",
    satellites: [
      { label: "Figma Tokens", sublabel: "Strict Auto-Layout", icon: Layout },
      { label: "Design System", sublabel: "Modular Components", icon: Layers },
      { label: "Semantic Schemas", sublabel: "Zero CSS Bloat", icon: FileCode },
      { label: "Micro-Interactions", sublabel: "60 FPS Fluid UI", icon: Sparkles },
    ],
    statusLabel: "Compiling Design Tokens to Semantic Next.js 16",
    statusMetric: "100% Bespoke Tokens",
    headline: "Bespoke Digital Experiences Engineered from Clean Figma Tokens",
    description:
      "Every single pixel is designed from scratch in Figma to reflect your brand's authority, then compiled into semantic Next.js 16 code with zero generic theme bloat.",
    deliverables: [
      "Bespoke Figma UI/UX prototype & complete interactive design system",
      "Strict auto-layout token variables (spacing, typography, color themes)",
      "Zero generic template bloat or inherited technical debt",
    ],
  },
  {
    id: "nextjs",
    number: "02",
    name: "Website Redesign & Modernization",
    tag: "Next.js 16 & React 19",
    badge: "< 0.8s LCP SLA",
    icon: FullStackCoreIcon,
    hubLabel: "Sub-Second Edge Rendering Engine",
    satellites: [
      { label: "Next.js 16 App", sublabel: "Turbopack Bundler", icon: Code2 },
      { label: "React 19 Core", sublabel: "Server Components", icon: Cpu },
      { label: "Edge Caching", sublabel: "Global CDN Delivery", icon: Zap },
      { label: "100/100 Vitals", sublabel: "< 0.8s LCP Benchmark", icon: Gauge },
    ],
    statusLabel: "Deploying Sub-Second Edge Server-Side Rendering",
    statusMetric: "< 0.8s LCP Benchmark",
    headline: "Sub-Second Edge Performance with React 19 Concurrent Rendering",
    description:
      "Engineered for instantaneous route transitions, fluid micro-interactions, and Google Lighthouse 100/100 Core Web Vitals across every global user session.",
    deliverables: [
      "Next.js 16 App Router with React 19 concurrent edge rendering",
      "Sub-second Largest Contentful Paint (< 0.8s LCP benchmark)",
      "Google Lighthouse Grade A+ 100/100 Core Web Vitals certified",
    ],
  },
  {
    id: "commerce",
    number: "03",
    name: "High-Velocity E-Commerce Storefronts",
    tag: "Shopify Plus & Headless",
    badge: "4.6% Avg Conv.",
    icon: EcommerceVelocityIcon,
    hubLabel: "1-Tap Express Checkout Engine",
    satellites: [
      { label: "Shopify Plus", sublabel: "Storefront GraphQL", icon: ShoppingBag },
      { label: "Slide Cart", sublabel: "Dynamic Threshold Bar", icon: CreditCard },
      { label: "1-Tap Express", sublabel: "Apple & Shop Pay", icon: Zap },
      { label: "AOV Maximize", sublabel: "+42% Checkout Velocity", icon: Gauge },
    ],
    statusLabel: "Optimizing Average Order Value & 1-Tap Checkout",
    statusMetric: "+42% Checkout Velocity",
    headline: "High-Velocity Storefronts Built for Maximum Average Order Value",
    description:
      "Custom Shopify Plus and headless storefronts with instant slide-out micro-carts, free-shipping threshold bars, and seamless multi-currency checkouts.",
    deliverables: [
      "Custom Shopify Plus theme or headless storefront architecture",
      "Instant slide-out micro-cart with dynamic free-shipping progress bar",
      "1-Tap native express checkout (Shop Pay, Apple Pay, Google Pay)",
    ],
  },
  {
    id: "cms",
    number: "04",
    name: "Client-Editable CMS & Webflow Platforms",
    tag: "Zero-Code Autonomy",
    badge: "Marketing Freedom",
    icon: CmsAutonomyIcon,
    hubLabel: "1-Click Publishing Hub",
    satellites: [
      { label: "Webflow", sublabel: "Visual Block Editor", icon: Layout },
      { label: "Headless CMS", sublabel: "Sanity / WordPress", icon: Database },
      { label: "Schemas", sublabel: "Locked Brand Guardrails", icon: Layers },
      { label: "Visual Edit", sublabel: "Zero Dev Dependency", icon: Sparkles },
    ],
    statusLabel: "Empowering Marketing Team Publishing Autonomy",
    statusMetric: "Zero Dev Dependency",
    headline: "Empower Your Marketing Team with Zero Developer Dependencies",
    description:
      "Intuitive drag-and-drop publishing on Webflow, WordPress, or modern Headless CMS with structured schemas tailored strictly to approved brand guidelines.",
    deliverables: [
      "Intuitive visual block editor strictly tailored to approved brand guidelines",
      "Zero code required for creating landing pages, blogs, and case studies",
      "Recorded Loom video training library for your marketing staff",
    ],
  },
  {
    id: "cloud",
    number: "05",
    name: "Full-Stack Web Applications & Portals",
    tag: "Supabase & Cloud APIs",
    badge: "RBAC & MFA",
    icon: CloudPortalIcon,
    hubLabel: "Enterprise API & Portal Gateway",
    satellites: [
      { label: "Supabase DB", sublabel: "PostgreSQL Engine", icon: Database },
      { label: "Auth & MFA", sublabel: "OAuth & SSO Ready", icon: Lock },
      { label: "REST Webhooks", sublabel: "Live Event Stream", icon: Zap },
      { label: "Row-Level RBAC", sublabel: "Encrypted Data Vault", icon: Shield },
    ],
    statusLabel: "Securing Client Portal Sessions & DB Webhooks",
    statusMetric: "Enterprise RBAC",
    headline: "Secure Client Portals & Scalable Cloud API Integrations",
    description:
      "Role-based access control, multi-factor authentication, and PostgreSQL database connections for enterprise client portals and internal platforms.",
    deliverables: [
      "Role-based access control (RBAC) with row-level database security",
      "High-availability PostgreSQL database with real-time webhooks",
      "Enterprise OAuth single sign-on, MFA, and automated audit logs",
    ],
  },
  {
    id: "vitals",
    number: "06",
    name: "Speed Tuning & Core Web Vitals Optimization",
    tag: "Google Top 1% Lighthouse",
    badge: "Google Top 1%",
    icon: SpeedShieldIcon,
    hubLabel: "Google Top 1% Speed Shield",
    satellites: [
      { label: "0.58s Paint", sublabel: "Sub-Second LCP", icon: Gauge },
      { label: "Zero CLS", sublabel: "No Layout Shift", icon: Layout },
      { label: "301 Shield", sublabel: "1:1 SEO Redirects", icon: Shield },
      { label: "JSON-LD", sublabel: "Google Rich Snippets", icon: FileCode },
    ],
    statusLabel: "Google Lighthouse Certified Speed & 301 Protection",
    statusMetric: "100/100 Core Vitals",
    headline: "Google Lighthouse Certified Speed & 301 SEO Authority Protection",
    description:
      "Protect established search keyword rankings during website modernizations while passing Google Core Web Vitals with flying colors.",
    deliverables: [
      "Rigorous 1:1 301 redirect mapping preventing any 404 traffic loss",
      "Automated JSON-LD rich snippet schemas for Google search results",
      "Zero render-blocking scripts & automated WebP/AVIF image pipeline",
    ],
  },
];

export default function BentoGrid() {
  const [activeIndex, setActiveIndex] = useState<number>(3); // Default to 04 Client-Editable CMS to match screenshot
  const [progress, setProgress] = useState<number>(85);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const pauseTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const active = ARCHITECTURE_NODES[activeIndex] || ARCHITECTURE_NODES[0];

  // Auto-cycle through the 6 architecture nodes unless the user interacts
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % ARCHITECTURE_NODES.length);
      setProgress(60);
    }, 5500);

    return () => clearInterval(interval);
  }, [isPaused]);

  // Micro progress animation for telemetry
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => (prev >= 96 ? 70 : prev + 5));
    }, 1600);

    return () => clearInterval(timer);
  }, [activeIndex]);

  const handleSelectNode = (index: number) => {
    setActiveIndex(index);
    setProgress(85);
    setIsPaused(true);

    if (pauseTimeoutRef.current) {
      clearTimeout(pauseTimeoutRef.current);
    }
    pauseTimeoutRef.current = setTimeout(() => {
      setIsPaused(false);
    }, 15000);
  };

  // Coordinates for the 4 satellite wires on 600px wide SVG viewBox:
  const satelliteXCoords = [75, 225, 375, 525];
  const hubCenterX = 300;
  const hubCenterY = 90;

  return (
    <div className="w-full select-none text-left">
      {/* 2-Column Vertical Architecture Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start max-w-6xl mx-auto px-2 sm:px-4">
        {/* ==================================================================== */}
        {/* LEFT COLUMN: SKEUOMORPHIC CONTROLLER (6 TACTILE SOLUTION PLATES)     */}
        {/* ==================================================================== */}
        <div className="lg:col-span-5 space-y-3">
          <div className="flex items-center justify-between px-2 pb-1 text-xs font-mono font-bold text-slate-500 uppercase tracking-wider">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#FFB020] animate-pulse" />
              <span>Select Architecture Solution:</span>
            </span>
            <span className="text-[#060B22] font-mono font-black bg-white px-2.5 py-0.5 rounded-full border border-[#DCD5C8] shadow-2xs">
              0{activeIndex + 1} / 06
            </span>
          </div>

          <div className="space-y-2.5">
            {ARCHITECTURE_NODES.map((node, idx) => {
              const Icon = node.icon;
              const isActive = idx === activeIndex;

              return (
                <button
                  key={node.id}
                  type="button"
                  onClick={() => handleSelectNode(idx)}
                  className={cn(
                    "w-full text-left p-3.5 sm:p-4 rounded-2xl transition-all duration-300 flex items-center justify-between cursor-pointer group relative outline-none",
                    isActive
                      ? "bg-gradient-to-b from-[#111C40] via-[#09112B] to-[#040816] text-white border-2 border-[#FFB020] border-t-[#FFE599] border-b-[#996200] shadow-[0_14px_32px_rgba(6,11,34,0.38),0_0_24px_rgba(255,176,32,0.25),inset_0_1px_1px_rgba(255,255,255,0.35),inset_0_-2px_4px_rgba(0,0,0,0.6)] scale-[1.01]"
                      : "bg-gradient-to-b from-[#FFFFFF] via-[#FAF9F5] to-[#F1ECE2] text-slate-700 border border-[#DCD5C8] border-t-white border-b-2 border-b-[#C9C0B0] shadow-[0_2px_4px_rgba(11,27,58,0.04),0_8px_16px_-4px_rgba(11,27,58,0.06),inset_0_1px_0_rgba(255,255,255,0.95)] hover:border-[#FFB020]/60 hover:-translate-y-0.5 hover:shadow-md"
                  )}
                >
                  {/* Skeuomorphic tactile gold status bar for active card */}
                  {isActive && (
                    <div className="absolute left-0 top-3 bottom-3 w-1.5 bg-gradient-to-b from-[#FFE599] via-[#FFB020] to-[#C47900] rounded-r-full shadow-[0_0_10px_rgba(255,176,32,0.8)]" />
                  )}

                  <div className="flex items-center gap-3.5 min-w-0 pr-2">
                    {/* Bespoke Skeuomorphic Icon Medallion */}
                    <div
                      className={cn(
                        "w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300",
                        isActive
                          ? "bg-gradient-to-b from-[#1C2C5E] to-[#0A122E] border border-[#FFB020]/50 shadow-[inset_0_1px_1px_rgba(255,255,255,0.3),0_2px_8px_rgba(0,0,0,0.5)] scale-105"
                          : "bg-gradient-to-b from-[#F5F2EA] to-[#EAE4D6] border border-[#D8D0C0] shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_1px_3px_rgba(0,0,0,0.06)] group-hover:scale-105"
                      )}
                    >
                      <Icon className="w-8 h-8 drop-shadow-sm" />
                    </div>

                    <div className="min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span
                          className={cn(
                            "text-[10px] font-mono font-black tracking-wider uppercase",
                            isActive ? "text-[#FFB020]" : "text-slate-400"
                          )}
                        >
                          {node.number}
                        </span>

                        <span
                          className={cn(
                            "text-[10px] font-mono px-2 py-0.5 rounded-full border transition-colors",
                            isActive
                              ? "bg-white/10 border-white/20 text-[#FFE599] shadow-[inset_0_1px_0_rgba(255,255,255,0.2)]"
                              : "bg-[#EFEAE0] border-[#D5CEBD] text-slate-600 shadow-[inset_0_1px_0_rgba(255,255,255,0.6)]"
                          )}
                        >
                          {node.tag}
                        </span>
                      </div>

                      <div
                        className={cn(
                          "font-display font-black text-xs sm:text-sm tracking-tight truncate mt-1 transition-colors",
                          isActive ? "text-white" : "text-[#060B22] group-hover:text-black"
                        )}
                      >
                        {node.name}
                      </div>
                    </div>
                  </div>

                  <ChevronRight
                    className={cn(
                      "w-4 h-4 shrink-0 transition-transform duration-300",
                      isActive
                        ? "text-[#FFB020] translate-x-1"
                        : "text-slate-400 group-hover:translate-x-0.5 group-hover:text-slate-700"
                    )}
                  />
                </button>
              );
            })}
          </div>
        </div>

        {/* ==================================================================== */}
        {/* RIGHT COLUMN: SKEUOMORPHIC MASTER ARCHITECTURE CONSOLE & CIRCUIT     */}
        {/* ==================================================================== */}
        <div className="lg:col-span-7">
          <div className="bg-gradient-to-b from-[#FFFFFF] via-[#FAF8F5] to-[#F1EDE2] rounded-3xl border border-[#DCD5C8] border-t-white border-b-[3px] border-b-[#C2B7A5] p-6 sm:p-8 shadow-[0_20px_50px_-10px_rgba(11,27,58,0.12),0_4px_12px_rgba(11,27,58,0.06),inset_0_1px_0_rgba(255,255,255,1)] relative overflow-hidden text-left space-y-6">
            {/* 4 Machined Metallic Fasteners (Skeuomorphic Screws in 4 Corners) */}
            <MetallicScrew className="absolute top-3.5 left-3.5" />
            <MetallicScrew className="absolute top-3.5 right-3.5" />
            <MetallicScrew className="absolute bottom-3.5 left-3.5" />
            <MetallicScrew className="absolute bottom-3.5 right-3.5" />

            {/* Top State Badge & Solution Counter */}
            <div className="flex items-center justify-between pb-3 border-b border-[#DCD5C8]">
              <div className="flex items-center gap-2">
                <span className="text-[10.5px] font-mono font-black uppercase tracking-wider px-3 py-1 rounded-full bg-gradient-to-b from-[#FFEAB5] to-[#FFD680] text-[#7A4500] border border-[#FFC95C] border-b-2 border-b-[#E6A117] shadow-[0_2px_4px_rgba(255,176,32,0.2),inset_0_1px_0_rgba(255,255,255,0.9)]">
                  {active.tag}
                </span>
                <span className="text-[10.5px] font-mono font-bold text-slate-500 hidden sm:inline">
                  Architecture Console v2.4
                </span>
              </div>
              <span className="text-xs font-mono font-bold text-slate-600 bg-white/80 px-2.5 py-1 rounded-full border border-[#DCD5C8] shadow-2xs">
                Solution 0{activeIndex + 1} of 06
              </span>
            </div>

            {/* ================================================================ */}
            {/* SUNKEN CIRCUIT CHAMBER: SKEUOMORPHIC RECESSED OBSIDIAN BAY        */}
            {/* ================================================================ */}
            <div className="bg-gradient-to-b from-[#030612] via-[#070E28] to-[#040817] rounded-2xl border border-black/80 border-t-black/90 border-b-white/10 shadow-[inset_0_4px_16px_rgba(0,0,0,0.85),inset_0_1px_3px_rgba(0,0,0,0.95),0_1px_0_rgba(255,255,255,0.7)] p-4 sm:p-5 relative overflow-hidden">
              {/* 1. 4 Skeuomorphic Surface-Mount Micro-Chips (Satellites) */}
              <div className="grid grid-cols-4 gap-2 sm:gap-2.5 text-center relative z-10">
                {active.satellites.map((sat, sIdx) => {
                  const SatIcon = sat.icon;
                  return (
                    <div
                      key={sIdx}
                      className="flex flex-col items-center gap-1.5 p-2 sm:p-2.5 rounded-xl bg-gradient-to-b from-[#142045] via-[#0D1530] to-[#070D22] border border-[#FFB020]/25 border-t-white/15 border-b-black/80 shadow-[0_4px_10px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.15)] hover:border-[#FFB020]/60 transition-all group relative"
                    >
                      {/* Micro LED diode */}
                      <span className="absolute top-1.5 right-1.5 w-1 h-1 rounded-full bg-emerald-400 shadow-[0_0_4px_rgba(52,211,153,0.8)]" />

                      <div className="w-8 h-8 rounded-lg bg-gradient-to-b from-[#1B2958] to-[#0A122E] border border-white/10 flex items-center justify-center text-[#FFB020] group-hover:scale-110 transition-transform shadow-inner">
                        <SatIcon className="w-4 h-4 text-[#FFB020]" />
                      </div>
                      <div className="text-[10px] font-display font-black text-white tracking-tight truncate w-full">
                        {sat.label}
                      </div>
                      <div className="text-[8.5px] font-mono text-slate-400 truncate w-full hidden sm:block">
                        {sat.sublabel}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* 2. Etched Circuit Board Tracks & Refined Champagne Gold Photons */}
              <div className="relative w-full h-16 sm:h-20 my-1 pointer-events-none">
                <svg
                  className="w-full h-full overflow-visible"
                  viewBox="0 0 600 90"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <defs>
                    <linearGradient id="monochrome-wire" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#0B1B3A" stopOpacity="0.4" />
                      <stop offset="60%" stopColor="#FFB020" stopOpacity="0.75" />
                      <stop offset="100%" stopColor="#FFE599" stopOpacity="1" />
                    </linearGradient>
                    <filter id="gold-photon-glow" x="-50%" y="-50%" width="200%" height="200%">
                      <feDropShadow dx="0" dy="0" stdDeviation="2.5" floodColor="#FFB020" floodOpacity="0.9" />
                    </filter>
                  </defs>

                  {satelliteXCoords.map((x, sIdx) => {
                    const pathD = `M ${x} 0 C ${x} 45, ${hubCenterX + (x - hubCenterX) * 0.15} 60, ${hubCenterX} ${hubCenterY}`;
                    return (
                      <g key={sIdx}>
                        {/* Deep Etched Copper Groove */}
                        <path
                          d={pathD}
                          stroke="rgba(0, 0, 0, 0.8)"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                        />

                        {/* Active Shimmering Circuit Track */}
                        <path
                          d={pathD}
                          stroke="url(#monochrome-wire)"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                        />

                        {/* Traveling Champagne Gold Laser Particle (60 FPS Smooth Flow) */}
                        <circle r="3.2" fill="#FFE599" filter="url(#gold-photon-glow)">
                          <animateMotion
                            path={pathD}
                            dur={`${1.8 + sIdx * 0.22}s`}
                            repeatCount="indefinite"
                          />
                        </circle>
                      </g>
                    );
                  })}
                </svg>
              </div>

              {/* 3. Central Compiled Hub Capsule (Tactile Glossy Bevel) */}
              <div className="flex justify-center relative z-10 -mt-2">
                <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-b from-[#1C2C5E] via-[#0B1538] to-[#050A1C] text-white font-display font-black text-xs shadow-[0_8px_25px_rgba(0,0,0,0.6),0_0_30px_rgba(255,176,32,0.45),inset_0_1px_2px_rgba(255,255,255,0.5)] border-2 border-[#FFB020] border-t-[#FFF3B8] border-b-[#8F5900] hover:scale-105 transition-transform cursor-pointer">
                  <Zap className="w-3.5 h-3.5 text-[#FFB020] fill-[#FFB020] animate-pulse" />
                  <span className="tracking-wide">{active.hubLabel}</span>
                </div>
              </div>

              {/* 4. Real-Time Telemetry Bar (Recessed Instrument Well) */}
              <div className="mt-4 space-y-1.5 pt-3 border-t border-white/10">
                <div className="flex items-center justify-between text-[11px] font-mono">
                  <div className="flex items-center gap-2 text-slate-300">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                    </span>
                    <span className="truncate max-w-[220px] sm:max-w-none text-left font-medium">
                      {active.statusLabel}
                    </span>
                  </div>
                  <span className="text-[#FFE599] font-mono font-bold shrink-0">
                    {active.statusMetric}
                  </span>
                </div>

                <div className="h-2 w-full bg-[#02040B] rounded-full overflow-hidden p-[1.5px] border border-white/10 shadow-[inset_0_2px_5px_rgba(0,0,0,0.9)]">
                  <div
                    className="h-full bg-gradient-to-r from-[#FFB020] via-[#FFE599] to-[#FFB020] rounded-full transition-all duration-700 ease-out shadow-[0_0_10px_rgba(255,176,32,0.7)]"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>
            </div>

            {/* Deep-Dive Solution Headline & Narrative */}
            <div className="space-y-2">
              <div className="text-[11px] font-mono font-black uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                <span>Blueprint 0{activeIndex + 1}</span>
                <span>//</span>
                <span className="text-[#060B22] font-black">{active.tag}</span>
              </div>

              <h3 className="font-display font-black text-xl sm:text-2xl lg:text-3xl text-[#0B1B3A] tracking-tight leading-snug">
                {active.headline}
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                {active.description}
              </p>
            </div>

            {/* 3 Verified Architecture Deliverables with Skeuomorphic Check Badges */}
            <div className="pt-2 space-y-2.5 border-t border-[#DCD5C8]">
              <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-600 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Verified Architecture Deliverables:</span>
              </div>
              <div className="space-y-2">
                {active.deliverables.map((item, dIdx) => (
                  <div key={dIdx} className="flex items-start gap-2.5 text-xs text-slate-800">
                    <div className="w-4 h-4 rounded-full bg-gradient-to-b from-emerald-100 to-emerald-200 border border-emerald-400 flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700" />
                    </div>
                    <span className="font-medium text-[13px] leading-snug text-slate-800">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Primary Action Button (StarBorder to /get-a-quote with ZERO Numerical Pricing) */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-[#DCD5C8]">
              <StarBorder
                as={Link}
                href="/get-a-quote"
                className="w-full sm:w-auto py-3 px-6 rounded-xl text-xs font-black uppercase tracking-wider inline-flex items-center justify-center gap-2 shadow-lg cursor-pointer text-center group"
                radius={12}
                color="#FFB020"
                trailColor="#FFB020"
                backgroundColor="#060B22"
                textColor="#FFFFFF"
                borderColor="rgba(255, 176, 32, 0.5)"
                sparkle={true}
                glow={0.8}
              >
                <span>Discuss {active.name.split(" ")[0]} Scope</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#FFB020] group-hover:translate-x-1 transition-transform" />
              </StarBorder>

              <span className="text-[11px] font-mono text-slate-500 text-center sm:text-right">
                Zero Lock-In • Day-One GitHub Commit Access
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

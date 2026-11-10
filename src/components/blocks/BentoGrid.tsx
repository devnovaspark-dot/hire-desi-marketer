"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  Palette,
  Sparkles,
  Code2,
  Zap,
  ShoppingBag,
  Layout,
  Database,
  Gauge,
  ArrowRight,
  LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";
import StarBorder from "@/components/ui/StarBorder";

interface ArchitectureNode {
  id: string;
  number: string;
  name: string;
  tag: string;
  icon: LucideIcon;
  accentColor: string;
  statusLabel: string;
  statusMetric: string;
  headline: string;
  description: string;
}

const ARCHITECTURE_NODES: ArchitectureNode[] = [
  {
    id: "figma",
    number: "01",
    name: "Custom UI/UX",
    tag: "Figma Tokens",
    icon: Palette,
    accentColor: "#FFB020",
    statusLabel: "Compiling Design Tokens to Semantic Next.js 16",
    statusMetric: "100% Custom UI",
    headline: "Bespoke Digital Experiences Engineered from Clean Figma Tokens",
    description:
      "Every single pixel is designed from scratch in Figma to reflect your brand's authority, then compiled into semantic Next.js 16 code with zero generic theme bloat.",
  },
  {
    id: "nextjs",
    number: "02",
    name: "Modern Full-Stack",
    tag: "Next.js 16 & React 19",
    icon: Code2,
    accentColor: "#38BDF8",
    statusLabel: "Deploying Sub-Second Edge Server-Side Rendering",
    statusMetric: "< 0.8s LCP SLA",
    headline: "Sub-Second Edge Performance with React 19 Concurrent Rendering",
    description:
      "Engineered for instantaneous route transitions, fluid micro-interactions, and Google Lighthouse 100/100 Core Web Vitals across every global user session.",
  },
  {
    id: "commerce",
    number: "03",
    name: "Modern E-Commerce",
    tag: "Shopify Plus & Headless",
    icon: ShoppingBag,
    accentColor: "#10B981",
    statusLabel: "Optimizing Average Order Value & 1-Tap Checkout",
    statusMetric: "4.6% Avg Conv.",
    headline: "High-Velocity Storefronts Built for Maximum Average Order Value",
    description:
      "Custom Shopify Plus and headless storefronts with instant slide-out micro-carts, free-shipping threshold bars, and seamless multi-currency checkouts.",
  },
  {
    id: "cms",
    number: "04",
    name: "Client CMS Autonomy",
    tag: "Webflow & Headless",
    icon: Layout,
    accentColor: "#A855F7",
    statusLabel: "Empowering Marketing Team Publishing Autonomy",
    statusMetric: "Zero Dev Dependency",
    headline: "Empower Your Marketing Team with Zero Developer Dependencies",
    description:
      "Intuitive drag-and-drop publishing on Webflow, WordPress, or modern Headless CMS with structured schemas tailored strictly to approved brand guidelines.",
  },
  {
    id: "cloud",
    number: "05",
    name: "Cloud Portals & APIs",
    tag: "Supabase & REST/Auth",
    icon: Database,
    accentColor: "#F59E0B",
    statusLabel: "Securing Client Portal Sessions & DB Webhooks",
    statusMetric: "RBAC & MFA Secured",
    headline: "Secure Client Portals & Scalable Cloud API Integrations",
    description:
      "Role-based access control, multi-factor authentication, and PostgreSQL database connections for enterprise client portals and internal platforms.",
  },
  {
    id: "vitals",
    number: "06",
    name: "Speed & SEO Shield",
    tag: "100/100 Core Vitals",
    icon: Gauge,
    accentColor: "#EC4899",
    statusLabel: "Google Lighthouse Certified Speed & 301 Protection",
    statusMetric: "Google Top 1%",
    headline: "Google Lighthouse Certified Speed & 301 SEO Authority Protection",
    description:
      "Protect established search keyword rankings during website modernizations while passing Google Core Web Vitals with flying colors.",
  },
];

export default function BentoGrid() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [progress, setProgress] = useState<number>(75);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const pauseTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const active = ARCHITECTURE_NODES[activeIndex] || ARCHITECTURE_NODES[0];

  // Auto-cycle through the 6 architecture nodes unless the user interacts
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % ARCHITECTURE_NODES.length);
      setProgress(55);
    }, 4000);

    return () => clearInterval(interval);
  }, [isPaused]);

  // Micro progress animation for telemetry
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => (prev >= 95 ? 65 : prev + 6));
    }, 1800);

    return () => clearInterval(timer);
  }, [activeIndex]);

  const handleSelectNode = (index: number) => {
    setActiveIndex(index);
    setProgress(78);
    setIsPaused(true);

    if (pauseTimeoutRef.current) {
      clearTimeout(pauseTimeoutRef.current);
    }
    pauseTimeoutRef.current = setTimeout(() => {
      setIsPaused(false);
    }, 10000);
  };

  // Node X coordinates on 1000px wide SVG viewBox:
  // 6 nodes spaced at: 83, 250, 416, 583, 750, 916
  const nodeXCoords = [83, 250, 416, 583, 750, 916];
  const hubX = 500;
  const hubY = 140;

  return (
    <div className="w-full select-none text-center">
      {/* ==================================================================== */}
      {/* 1. TOP ROW: 6 STREAMLINED FLOATING ARCHITECTURE NODES (NO CARDS)     */}
      {/* ==================================================================== */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 max-w-5xl mx-auto px-2">
        {ARCHITECTURE_NODES.map((node, idx) => {
          const Icon = node.icon;
          const isActive = idx === activeIndex;

          return (
            <button
              key={node.id}
              type="button"
              onClick={() => handleSelectNode(idx)}
              onMouseEnter={() => handleSelectNode(idx)}
              className={cn(
                "flex flex-col items-center gap-2 p-2.5 sm:p-3 rounded-2xl transition-all duration-300 cursor-pointer group text-center relative",
                isActive
                  ? "bg-white/10 scale-105"
                  : "hover:bg-white/5 opacity-80 hover:opacity-100"
              )}
            >
              <div
                className={cn(
                  "w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center transition-all duration-300 relative border",
                  isActive
                    ? "bg-[#060B22] border-[#FFB020] text-[#FFB020] shadow-[0_0_22px_rgba(255,176,32,0.45)] scale-105"
                    : "bg-[#060B22]/80 border-white/10 text-slate-400 group-hover:border-white/25 group-hover:text-white"
                )}
              >
                <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                {isActive && (
                  <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-[#FFB020] animate-ping" />
                )}
              </div>

              <div className="space-y-0.5">
                <div
                  className={cn(
                    "text-xs font-display font-bold tracking-tight transition-colors",
                    isActive ? "text-white" : "text-slate-300 group-hover:text-white"
                  )}
                >
                  {node.name}
                </div>
                <div className="text-[10px] font-mono text-slate-400">
                  {node.tag}
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* ==================================================================== */}
      {/* 2. THE SIGNATURE FLOWING SVG CIRCUIT WITH GLOWING TRAVELING PULSES   */}
      {/* ==================================================================== */}
      <div className="relative w-full max-w-5xl mx-auto h-28 sm:h-36 -my-1 sm:-my-2">
        <svg
          className="w-full h-full overflow-visible"
          viewBox="0 0 1000 140"
          fill="none"
          preserveAspectRatio="none"
        >
          <defs>
            <filter id="bento-glow" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>

            {ARCHITECTURE_NODES.map((node) => (
              <linearGradient
                key={node.id}
                id={`wire-grad-${node.id}`}
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop offset="0%" stopColor="rgba(255, 255, 255, 0.15)" />
                <stop offset="80%" stopColor={node.accentColor} stopOpacity="0.6" />
                <stop offset="100%" stopColor={node.accentColor} stopOpacity="0.9" />
              </linearGradient>
            ))}
          </defs>

          {/* 6 Curved Converging Circuit Paths */}
          {nodeXCoords.map((x, idx) => {
            const node = ARCHITECTURE_NODES[idx];
            const isActive = idx === activeIndex;
            const pathD = `M ${x} 0 C ${x} 70, ${hubX + (x - hubX) * 0.15} 90, ${hubX} ${hubY}`;

            return (
              <g key={node.id}>
                {/* Background base wire */}
                <path
                  d={pathD}
                  stroke={
                    isActive
                      ? `url(#wire-grad-${node.id})`
                      : "rgba(255, 255, 255, 0.12)"
                  }
                  strokeWidth={isActive ? "2.5" : "1.2"}
                  strokeLinecap="round"
                  className="transition-all duration-300"
                />

                {/* Traveling photon pulses */}
                <circle
                  r={isActive ? "4" : "2.5"}
                  fill={isActive ? node.accentColor : "#FFB020"}
                  filter="url(#bento-glow)"
                >
                  <animateMotion
                    path={pathD}
                    dur={`${2.0 + (idx % 3) * 0.4}s`}
                    repeatCount="indefinite"
                  />
                </circle>
              </g>
            );
          })}
        </svg>
      </div>

      {/* ==================================================================== */}
      {/* 3. CENTRAL PROCESSING HUB (FLOATING CAPSULE PILL)                     */}
      {/* ==================================================================== */}
      <div className="flex justify-center relative z-10 mb-4 sm:mb-5">
        <div className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 rounded-full bg-white text-[#060B22] font-display font-black text-xs sm:text-sm shadow-[0_0_35px_rgba(255,176,32,0.4)] border border-[#FFB020]/50 hover:scale-105 transition-transform cursor-pointer">
          <Zap className="w-4 h-4 text-[#FFB020] fill-[#FFB020]" />
          <span>Compiled Production Architecture</span>
        </div>
      </div>

      {/* ==================================================================== */}
      {/* 4. REAL-TIME TELEMETRY STATUS BAR (BENTO 1 SIGNATURE STYLE)          */}
      {/* ==================================================================== */}
      <div className="max-w-xl mx-auto w-full px-4 space-y-2">
        <div className="flex items-center justify-between text-xs font-mono">
          <div className="flex items-center gap-2 text-slate-300">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="truncate max-w-[260px] sm:max-w-none text-left">
              {active.statusLabel}
            </span>
          </div>
          <span className="text-emerald-400 font-bold shrink-0">
            {active.statusMetric}
          </span>
        </div>

        {/* Minimal Progress Bar */}
        <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-[#FFB020] via-white to-[#FFB020] rounded-full transition-all duration-700 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* ==================================================================== */}
      {/* 5. MINIMAL EDITORIAL SUMMARY & DIRECT ACTION CTA (NO CARDS)          */}
      {/* ==================================================================== */}
      <div className="pt-5 sm:pt-6 text-center space-y-3 max-w-2xl mx-auto px-4">
        <h3 className="font-display font-black text-lg sm:text-xl text-white tracking-tight leading-snug">
          {active.headline}
        </h3>
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal max-w-xl mx-auto">
          {active.description}
        </p>

        <div className="pt-2">
          <StarBorder
            as={Link}
            href="/get-a-quote"
            className="py-3 px-6 rounded-xl text-xs font-black uppercase tracking-wider inline-flex items-center justify-center gap-2 shadow-lg cursor-pointer text-center group"
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
        </div>
      </div>
    </div>
  );
}

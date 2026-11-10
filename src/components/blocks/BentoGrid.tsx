"use client";

import React from "react";
import Bento1, { Bento1Props } from "@/components/blocks/bento-1";
import {
  Palette,
  Sparkles,
  Code2,
  Zap,
  ShieldCheck,
  RefreshCw,
  ShoppingBag,
  CreditCard,
  Layout,
  Layers,
  Database,
  Lock,
  Gauge,
  Cpu,
  FileCheck,
  Globe,
  Sliders,
  Server,
} from "lucide-react";

const ARCHITECTURE_SERVICES: Bento1Props[] = [
  {
    title: "Custom Website Design & Engineering",
    description:
      "Every pixel designed exclusively in Figma for your brand's market positioning, compiled into semantic Next.js 16 with zero generic theme bloat.",
    badge: "Figma to Next.js",
    actionPill: { icon: Code2, label: "Handcrafted Code" },
    sources: [
      { icon: Palette, label: "Figma" },
      { icon: Sparkles, label: "Tokens" },
      { icon: Code2, label: "React 19" },
      { icon: Zap, label: "Next.js 16" },
    ],
    statusLabel: "Compiling Design Tokens",
    statusMetric: "100% Custom UI",
    accentColor: "#FFB020",
    pulseColors: ["#FFB020", "#38BDF8", "#10B981"],
    initialProgress: 76,
  },
  {
    title: "Website Redesign & Modernization",
    description:
      "Modernize legacy platforms into high-converting digital assets while meticulously safeguarding Google keyword rankings, backlink equity, and domain authority.",
    badge: "Modernization + CRO",
    actionPill: { icon: ShieldCheck, label: "301 SEO Safeguard" },
    sources: [
      { icon: RefreshCw, label: "Legacy Audit" },
      { icon: FileCheck, label: "301 Map" },
      { icon: ShieldCheck, label: "Rank Shield" },
      { icon: Zap, label: "Edge Speed" },
    ],
    statusLabel: "Safeguarding URL Authority",
    statusMetric: "Zero SEO Loss",
    accentColor: "#38BDF8",
    pulseColors: ["#38BDF8", "#10B981", "#FFB020"],
    initialProgress: 92,
  },
  {
    title: "High-Velocity E-Commerce Storefronts",
    description:
      "Fast online storefronts optimized for high average order value (AOV), instant slide-out micro-carts with free-shipping bars, and global multi-currency checkouts.",
    badge: "Shopify Plus & Headless",
    actionPill: { icon: ShoppingBag, label: "1-Tap Checkout" },
    sources: [
      { icon: ShoppingBag, label: "Shopify 2.0" },
      { icon: CreditCard, label: "1-Tap Pay" },
      { icon: Sliders, label: "Cart Upsell" },
      { icon: Globe, label: "Multi-Curr" },
    ],
    statusLabel: "Optimizing AOV & Checkout Speed",
    statusMetric: "4.6% Avg Conv.",
    accentColor: "#10B981",
    pulseColors: ["#10B981", "#FFB020", "#38BDF8"],
    initialProgress: 84,
  },
  {
    title: "Client-Editable CMS & Webflow Platforms",
    description:
      "Empower your marketing and growth team with drag-and-drop publishing autonomy on Webflow, WordPress, or modern Headless CMS with structured schemas.",
    badge: "Zero-Code Autonomy",
    actionPill: { icon: Layout, label: "1-Click Publish" },
    sources: [
      { icon: Layout, label: "Webflow" },
      { icon: Database, label: "Headless CMS" },
      { icon: Sliders, label: "Schemas" },
      { icon: Sparkles, label: "Visual Edit" },
    ],
    statusLabel: "Marketing Team Autonomy",
    statusMetric: "1-Click Deploy",
    accentColor: "#A855F7",
    pulseColors: ["#A855F7", "#FFB020", "#38BDF8"],
    initialProgress: 68,
  },
  {
    title: "Full-Stack Web Applications & Portals",
    description:
      "Complex client portals, SaaS dashboards, and database-driven internal platforms engineered with Next.js 16, Supabase, and real-time REST/GraphQL APIs.",
    badge: "App-Like SPA",
    actionPill: { icon: Layers, label: "Enterprise Portal" },
    sources: [
      { icon: Lock, label: "RBAC & MFA" },
      { icon: Database, label: "Supabase" },
      { icon: Server, label: "REST / GraphQL" },
      { icon: Cpu, label: "Cloud Edge" },
    ],
    statusLabel: "Securing Client Portal Sessions",
    statusMetric: "Sub-24h Scoping",
    accentColor: "#F59E0B",
    pulseColors: ["#F59E0B", "#10B981", "#38BDF8"],
    initialProgress: 88,
  },
  {
    title: "Speed Tuning & Core Web Vitals Optimization",
    description:
      "Remediate slow WordPress and legacy websites to pass Google Core Web Vitals with flying colors—boosting SEO rank authority and lowering paid ad bounce rates.",
    badge: "< 0.8s LCP Benchmark",
    actionPill: { icon: Gauge, label: "100/100 Core Vitals" },
    sources: [
      { icon: Gauge, label: "LCP < 0.8s" },
      { icon: Zap, label: "INP 12ms" },
      { icon: Sparkles, label: "0.00 CLS" },
      { icon: Server, label: "Edge CDN" },
    ],
    statusLabel: "Google Lighthouse Certified",
    statusMetric: "Top 1% Speed",
    accentColor: "#EC4899",
    pulseColors: ["#EC4899", "#10B981", "#FFB020"],
    initialProgress: 98,
  },
];

export default function BentoGrid() {
  return (
    <div className="w-full">
      <div className="max-w-[1400px] mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 items-stretch">
          {ARCHITECTURE_SERVICES.map((service, index) => (
            <div key={index} className="h-full">
              <Bento1 {...service} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

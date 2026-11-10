"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Code2,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  Zap,
  Globe,
  ShieldCheck,
  Terminal,
  Copy,
  Check,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface TechShowcaseItem {
  id: string;
  name: string;
  category: "modern" | "cms";
  tag: string;
  icon: string;
  headline: string;
  businessValue: string;
  speedBadge: string;
  seoBadge: string;
  scaleBadge: string;
  codeSnippet: {
    filename: string;
    language: string;
    lines: string[];
  };
  capabilities: string[];
}

const TECH_CATALOG: TechShowcaseItem[] = [
  {
    id: "nextjs",
    name: "Next.js 16",
    category: "modern",
    tag: "Full-Stack React Framework",
    icon: "/icons/nextjs.svg",
    headline: "Sub-Second Edge Rendering & Core Web Vitals Dominance",
    businessValue:
      "Next.js 16 partial pre-rendering and edge caching deliver near-instant initial paints that Google rewards with top organic rankings.",
    speedBadge: "< 0.65s LCP Speed",
    seoBadge: "100/100 Core Web Vitals",
    scaleBadge: "Global Edge CDN",
    codeSnippet: {
      filename: "src/app/services/page.tsx",
      language: "typescript",
      lines: [
        "// Next.js 16 Server Component with Edge Caching",
        "export const runtime = 'edge';",
        "export const revalidate = 3600; // 1-hour ISR",
        "",
        "export async function generateMetadata(): Promise<Metadata> {",
        "  return { title: 'High-Converting Web Architecture | HDM' };",
        "}",
        "",
        "export default async function Page() {",
        "  const data = await getVerifiedArchitecture();",
        "  return <EngineeredExperience data={data} speedScore={100} />;",
        "}",
      ],
    },
    capabilities: [
      "Sub-second page speeds across mobile and desktop viewports",
      "Automated WebP and AVIF image format optimization",
      "Automated Schema.org structured JSON-LD metadata",
      "Zero render-blocking scripts with partial pre-rendering",
    ],
  },
  {
    id: "react",
    name: "React 19",
    category: "modern",
    tag: "Interactive UI Engine",
    icon: "/icons/react.svg",
    headline: "Fluid 60fps Micro-Interactions with Zero Page Flickering",
    businessValue:
      "React 19 powers buttery-smooth client states, interactive multi-step funnels, and app-like transitions that dramatically increase on-page engagement.",
    speedBadge: "Zero Full Page Reloads",
    seoBadge: "SEO Hydrated",
    scaleBadge: "Modular Design Tokens",
    codeSnippet: {
      filename: "components/InteractiveFunnel.tsx",
      language: "typescript",
      lines: [
        "'use client';",
        "import { useActionState, useOptimistic } from 'react';",
        "",
        "export function LeadConversionEngine({ channelId }: Props) {",
        "  const [state, submitAction, isPending] = useActionState(submitScope);",
        "  const [optimisticStatus, setStatus] = useOptimistic('idle');",
        "",
        "  return <InteractiveQuoteWorkflow onSubmit={submitAction} isPending={isPending} />;",
        "}",
      ],
    },
    capabilities: [
      "Fluid state updates and optimistic UI responses",
      "Concurrent React architecture for instant touch responses",
      "Component-level code splitting and lazy asset loading",
      "Modular design system tokens with clean reusability",
    ],
  },
  {
    id: "tailwind",
    name: "Tailwind CSS v4",
    category: "modern",
    tag: "Utility-First Design System",
    icon: "/icons/tailwind.svg",
    headline: "Ultra-Lightweight CSS with Zero Unused Stylesheets",
    businessValue:
      "Eliminate bulky legacy CSS files. Tailwind compiles into a tiny production stylesheet for instant browser rendering and perfect visual consistency.",
    speedBadge: "< 12KB Total CSS",
    seoBadge: "Zero CSS Blocking",
    scaleBadge: "Design Tokens",
    codeSnippet: {
      filename: "src/app/theme.css",
      language: "css",
      lines: [
        "@theme {",
        "  --color-brand-navy: #060B22;",
        "  --color-brand-gold: #FFB020;",
        "  --font-display: 'Bricolage Grotesque', sans-serif;",
        "  --breakpoint-3xl: 1920px;",
        "}",
        "",
        ".btn-conversion {",
        "  @apply bg-brand-gold text-brand-navy font-black rounded-xl shadow-lg;",
        "}",
      ],
    },
    capabilities: [
      "Zero bloated CSS files loaded into client browsers",
      "Fluid responsive breakpoints from mobile to 4K displays",
      "Strict brand color tokens and typography consistency",
      "Hardware-accelerated CSS 3D transforms and keyframes",
    ],
  },
  {
    id: "shopify",
    name: "Shopify Plus",
    category: "cms",
    tag: "Enterprise Commerce Platform",
    icon: "/icons/shopify.svg",
    headline: "Scalable Storefronts with Sub-Second Checkout Velocity",
    businessValue:
      "Enterprise Shopify Plus builds handling millions in GMV with instant slide-out carts, 1-tap Shop Pay / Apple Pay, and automated ERP/CRM syncing.",
    speedBadge: "1-Tap Checkout",
    seoBadge: "E-Com Rich Snippets",
    scaleBadge: "Unlimited Traffic Spikes",
    codeSnippet: {
      filename: "sections/slide-out-cart.liquid",
      language: "liquid",
      lines: [
        "{% comment %} HDM High-Converting Slide Drawer Cart {% endcomment %}",
        "<div class=\"cart-drawer\" data-shipping-threshold=\"100\">",
        "  {% render 'free-shipping-progress', cart: cart %}",
        "  {% render 'cart-items', items: cart.items %}",
        "  <button type=\"submit\" name=\"checkout\" class=\"btn-apple-pay\">",
        "    Instant 1-Tap Checkout",
        "  </button>",
        "</div>",
      ],
    },
    capabilities: [
      "Custom Liquid 2.0 themes and headless Storefront API builds",
      "Slide-out drawer cart with automatic free-shipping tier meter",
      "Omnichannel inventory, QuickBooks, and ERP webhook sync",
      "International multi-currency and localized taxation setup",
    ],
  },
  {
    id: "wordpress",
    name: "Custom WordPress",
    category: "cms",
    tag: "Headless & Gutenberg Architecture",
    icon: "/icons/wordpress.svg",
    headline: "Enterprise Content Governance with Zero Page Builder Bloat",
    businessValue:
      "Custom Gutenberg block themes designed exclusively for marketing autonomy. Zero heavy Elementor or Divi bloat to keep load times under one second.",
    speedBadge: "< 0.8s LCP Speed",
    seoBadge: "Yoast / RankMath API",
    scaleBadge: "Redis Object Cache",
    codeSnippet: {
      filename: "functions.php",
      language: "php",
      lines: [
        "// HDM Custom Enterprise WordPress Architecture",
        "add_action('after_setup_theme', function() {",
        "    add_theme_support('align-wide');",
        "    add_theme_support('responsive-embeds');",
        "    add_theme_support('editor-styles');",
        "});",
        "",
        "// Disable unnecessary scripts & bloat",
        "remove_action('wp_head', 'wp_generator');",
      ],
    },
    capabilities: [
      "Custom Gutenberg blocks tailored to your exact brand styles",
      "Strict security hardening and automated daily off-site backups",
      "Server-side Redis object caching and Cloudflare edge CDN",
      "Complete editorial independence for content and marketing teams",
    ],
  },
  {
    id: "webflow",
    name: "Webflow",
    category: "cms",
    tag: "Visual Development Platform",
    icon: "/icons/webflow.svg",
    headline: "Rapid Marketing Launch Speed with Custom Code Integrations",
    businessValue:
      "Bespoke Webflow websites with custom JavaScript integrations, dynamic CMS collections, and client-friendly visual editing for rapid marketing agility.",
    speedBadge: "Global AWS Cloudfront",
    seoBadge: "Built-In OpenGraph",
    scaleBadge: "Zero Hosting Hassle",
    codeSnippet: {
      filename: "webflow-custom.js",
      language: "javascript",
      lines: [
        "// HDM Webflow Custom Interaction Bridge",
        "document.addEventListener('DOMContentLoaded', () => {",
        "  const forms = document.querySelectorAll('[data-hdm-form]');",
        "  forms.forEach(form => {",
        "    form.addEventListener('submit', handleConversionTracking);",
        "  });",
        "});",
      ],
    },
    capabilities: [
      "Clean semantic CSS class architecture via Client-First framework",
      "Custom dynamic CMS collection templates and search filters",
      "Third-party API webhook integrations with Zapier and Make",
      "Intuitive client editor mode with zero risk of breaking layouts",
    ],
  },
];

export function WebDesignTechStack() {
  const [activeTechId, setActiveTechId] = useState<string>("nextjs");
  const [copied, setCopied] = useState<boolean>(false);

  const activeTech =
    TECH_CATALOG.find((t) => t.id === activeTechId) || TECH_CATALOG[0];

  const handleCopyCode = () => {
    navigator.clipboard.writeText(activeTech.codeSnippet.lines.join("\n"));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-6 sm:space-y-8 max-w-7xl mx-auto text-left">
      {/* 1. Technology Selector Ribbon */}
      <div className="flex items-center justify-start lg:justify-center gap-1.5 sm:gap-2 overflow-x-auto pb-1 no-scrollbar">
        {TECH_CATALOG.map((tech) => {
          const isSelected = tech.id === activeTech.id;

          return (
            <button
              key={tech.id}
              type="button"
              onClick={() => setActiveTechId(tech.id)}
              className={cn(
                "px-3.5 sm:px-4 py-2 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer select-none inline-flex items-center gap-2 shrink-0 border",
                isSelected
                  ? "bg-[#060B22] text-[#FFB020] border-[#FFB020] shadow-sm ring-2 ring-[#FFB020]/20 scale-102"
                  : "bg-white text-slate-700 border-[#E2DBD0] hover:border-slate-400"
              )}
            >
              <span>{tech.name}</span>
              {isSelected && (
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shrink-0" />
              )}
            </button>
          );
        })}
      </div>

      {/* 2. Central Technology Studio Environment (Card-Free Split Canvas) */}
      <div className="rounded-2xl sm:rounded-3xl bg-white border border-[#E2DBD0] shadow-sm overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
          {/* Left Column (6 cols): Architecture Specs & Metrics */}
          <div className="lg:col-span-6 p-5 sm:p-7 lg:p-8 flex flex-col justify-between space-y-5 border-b lg:border-b-0 lg:border-r border-[#E2DBD0]">
            <div className="space-y-3">
              <div className="flex items-center justify-between gap-2">
                <span className="text-[10px] font-black uppercase tracking-wider text-[#B87A00] bg-[#FFB020]/15 px-2.5 py-0.5 rounded-full border border-[#FFB020]/30">
                  {activeTech.tag}
                </span>

                <span className="text-xs font-mono font-bold text-slate-400">
                  {activeTech.name}
                </span>
              </div>

              <h3 className="font-display font-black text-xl sm:text-2xl text-[#0B1B3A] tracking-tight leading-snug">
                {activeTech.headline}
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                {activeTech.businessValue}
              </p>

              {/* Verified Metrics Badges */}
              <div className="grid grid-cols-3 gap-2 pt-2">
                <div className="p-2.5 rounded-xl bg-[#FAF8F5] border border-[#E2DBD0] text-center space-y-0.5">
                  <div className="text-[10px] font-mono font-bold text-slate-500 uppercase">Speed</div>
                  <div className="text-[11px] font-bold text-[#0B1B3A] truncate">{activeTech.speedBadge}</div>
                </div>
                <div className="p-2.5 rounded-xl bg-[#FAF8F5] border border-[#E2DBD0] text-center space-y-0.5">
                  <div className="text-[10px] font-mono font-bold text-slate-500 uppercase">SEO Vitals</div>
                  <div className="text-[11px] font-bold text-emerald-700 truncate">{activeTech.seoBadge}</div>
                </div>
                <div className="p-2.5 rounded-xl bg-[#FAF8F5] border border-[#E2DBD0] text-center space-y-0.5">
                  <div className="text-[10px] font-mono font-bold text-slate-500 uppercase">Scale</div>
                  <div className="text-[11px] font-bold text-blue-700 truncate">{activeTech.scaleBadge}</div>
                </div>
              </div>
            </div>

            {/* Deliverables Checklist */}
            <div className="pt-2 border-t border-slate-100 space-y-2">
              <div className="text-[10px] font-black uppercase tracking-wider text-slate-700">
                Architectural Inclusions:
              </div>

              <div className="space-y-1.5 text-xs text-slate-700">
                {activeTech.capabilities.map((cap, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#FFB020] shrink-0 mt-0.5" />
                    <span className="font-medium text-[11.5px] leading-snug">{cap}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Direct Action Button */}
            <div className="pt-3 border-t border-slate-100">
              <Link
                href="/get-a-quote"
                className="btn-luxury-navy w-full py-2.5 px-4 rounded-xl text-xs font-black uppercase tracking-wider flex items-center justify-center gap-2 shadow-xs cursor-pointer text-center"
              >
                <span>Hire {activeTech.name} Developers</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#FFB020]" />
              </Link>
            </div>
          </div>

          {/* Right Column (6 cols): Live Code & Architecture Terminal Window */}
          <div className="lg:col-span-6 p-4 sm:p-6 lg:p-7 bg-[#060B22] text-white flex flex-col justify-between space-y-4">
            {/* Terminal Header Bar */}
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
                </div>
                <span className="text-[11px] font-mono text-slate-400 pl-2">
                  {activeTech.codeSnippet.filename}
                </span>
              </div>

              <button
                type="button"
                onClick={handleCopyCode}
                className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-white/10 hover:bg-white/20 text-slate-300 text-[10px] font-mono transition-colors cursor-pointer"
                title="Copy snippet"
              >
                {copied ? (
                  <>
                    <Check className="w-3 h-3 text-emerald-400" />
                    <span className="text-emerald-400">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3 h-3" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>

            {/* Code Body */}
            <div className="p-3 sm:p-4 rounded-xl bg-black/40 border border-white/10 font-mono text-xs text-slate-200 overflow-x-auto custom-scrollbar flex-1 flex flex-col justify-center leading-relaxed">
              <pre className="text-[11px] sm:text-xs">
                <code>
                  {activeTech.codeSnippet.lines.map((line, idx) => (
                    <div key={idx} className="table-row">
                      <span className="table-cell pr-3 text-slate-600 select-none text-right w-6">
                        {idx + 1}
                      </span>
                      <span className="table-cell">
                        {line.startsWith("//") ? (
                          <span className="text-slate-500 italic">{line}</span>
                        ) : line.includes("export") || line.includes("import") || line.includes("function") ? (
                          <span className="text-[#FFB020]">{line}</span>
                        ) : (
                          <span>{line}</span>
                        )}
                      </span>
                    </div>
                  ))}
                </code>
              </pre>
            </div>

            {/* Engineering Standard Footer */}
            <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-400">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Strict Linting &amp; TypeScript Checks Passed</span>
              </span>
              <span className="font-mono text-[10px] text-[#FFB020]">HDM Enterprise Engine</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

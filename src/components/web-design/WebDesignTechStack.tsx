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
  Cpu,
  Layers,
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
    headline: "Sub-Second Edge Rendering & Superior Search Engine Authority",
    businessValue:
      "Next.js 16 combines server-side streaming, partial pre-rendering, and global edge caching to deliver near-instant load times. Google rewards this speed with higher organic rankings and lower acquisition costs.",
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
      "Sub-second page speeds on mobile and desktop viewports",
      "Automated image conversion into modern WebP & AVIF formats",
      "Automated Schema.org JSON-LD structured metadata generation",
      "Zero render-blocking scripts with partial pre-rendering",
    ],
  },
  {
    id: "react",
    name: "React 19",
    category: "modern",
    tag: "Interactive UI Engine",
    icon: "/icons/react.svg",
    headline: "Fluid, 60fps Interactive Components with Zero Page Flicker",
    businessValue:
      "React 19 powers dynamic micro-interactions, seamless multi-step lead funnels, and app-like transitions without page refreshes, keeping visitors engaged and dramatically increasing conversion rates.",
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
        "  return (",
        "    <FrictionlessStage onSubmit={submitAction} isFluid={true} />",
        "  );",
        "}",
      ],
    },
    capabilities: [
      "Modular Figma-to-React design systems customized for your brand",
      "Instant response times with zero layout shift (CLS 0.00)",
      "Seamless integration with third-party APIs, CRMs, and analytics",
      "Smooth micro-interactions and scroll-triggered storytelling",
    ],
  },
  {
    id: "tailwind",
    name: "Tailwind CSS v4",
    category: "modern",
    tag: "Modern Styling System",
    icon: "/icons/tailwind.svg",
    headline: "Ultra-Lightweight CSS Architecture & Flawless Responsive Breakpoints",
    businessValue:
      "Tailwind eliminates bloated legacy stylesheets by compiling only the exact utility styles your website uses. The result is a bespoke visual identity that loads in the blink of an eye.",
    speedBadge: "< 12KB Stylesheet",
    seoBadge: "Zero Render-Blocking",
    scaleBadge: "100% Mobile Parity",
    codeSnippet: {
      filename: "styles/theme.css",
      language: "css",
      lines: [
        "@theme {",
        "  --color-brand-navy: #060B22;",
        "  --color-brand-gold: #FFB020;",
        "  --font-display: 'Bricolage Grotesque', sans-serif;",
        "  --shadow-luxury: 0 24px 60px -15px rgba(6, 11, 34, 0.2);",
        "}",
        "",
        "@utility fluid-type {",
        "  font-size: clamp(1.25rem, 2vw + 1rem, 2.5rem);",
        "}",
      ],
    },
    capabilities: [
      "100% custom visual styling matching your exact brand guidelines",
      "Consistent typography hierarchy, fluid spacing, and color tokens",
      "Instantaneous mobile layout responsiveness across all device sizes",
      "Clean CSS architecture with zero style pollution or legacy conflicts",
    ],
  },
  {
    id: "shopify",
    name: "Shopify Plus",
    category: "cms",
    tag: "E-Commerce Authority",
    icon: "/icons/shopify.svg",
    headline: "High-Velocity Headless & Native Storefronts Built for High AOV",
    businessValue:
      "Shopify Plus powers frictionless commerce experiences with high-converting 1-page checkouts, global multi-currency payment processing, and automated inventory sync across warehouses.",
    speedBadge: "99.99% Store Uptime",
    seoBadge: "1-Click Checkout",
    scaleBadge: "Scale to 8-Figures",
    codeSnippet: {
      filename: "lib/shopify-client.ts",
      language: "typescript",
      lines: [
        "// Shopify Storefront API with Headless Micro-Cart",
        "export async function createInstantCart(lines: CartLine[]) {",
        "  const cart = await shopifyFetch({",
        "    query: CREATE_CART_MUTATION,",
        "    variables: { lines, freeShippingThreshold: 75 },",
        "  });",
        "  return { cart, instantCheckoutUrl: cart.checkoutUrl };",
        "}",
      ],
    },
    capabilities: [
      "Custom Shopify 2.0 theme design matching your brand aesthetic",
      "Integrated Apple Pay, Shop Pay, Stripe, and global multi-currency",
      "Automated inventory tracking and shipping notification sync",
      "Slide-out drawer cart with progressive free-shipping incentives",
    ],
  },
  {
    id: "wordpress",
    name: "Custom WordPress",
    category: "cms",
    tag: "Flexible Content CMS",
    icon: "/icons/wordpress.svg",
    headline: "Empower Your Marketing Team to Publish Without Code",
    businessValue:
      "We build clean, custom block-based WordPress websites that give your marketing team full freedom to create pages, publish articles, and update content without depending on developers.",
    speedBadge: "< 1.0s Edge Cached",
    seoBadge: "Rank Math / Yoast SEO",
    scaleBadge: "Client-Editable",
    codeSnippet: {
      filename: "functions.php",
      language: "php",
      lines: [
        "<?php",
        "// Zero-bloat custom block theme registration",
        "add_action('init', function () {",
        "    register_block_type(__DIR__ . '/blocks/hero-showcase');",
        "    register_block_type(__DIR__ . '/blocks/conversion-hub');",
        "    add_theme_support('custom-spacing');",
        "    add_theme_support('align-wide');",
        "});",
      ],
    },
    capabilities: [
      "Custom visual block editor designed exclusively for your team",
      "Zero bloated third-party page builders for maximum performance",
      "Top-tier technical SEO setup with clean canonical structure",
      "Hardened security firewalls and daily cloud backups",
    ],
  },
  {
    id: "webflow",
    name: "Webflow",
    category: "cms",
    tag: "Visual Development Platform",
    icon: "/icons/webflow.svg",
    headline: "Award-Winning Agency Polish with Built-In Enterprise Hosting",
    businessValue:
      "Webflow bridges the gap between high-end design and clean code, providing stunning fluid animations, scroll-triggered visual storytelling, and reliable enterprise hosting on AWS and Fastly.",
    speedBadge: "AWS & Fastly Edge CDN",
    seoBadge: "Visual Content Editor",
    scaleBadge: "Agency-Tier Polish",
    codeSnippet: {
      filename: "webflow/interactions.js",
      language: "javascript",
      lines: [
        "// Custom Webflow Engine Micro-Interactions",
        "Webflow.push(function () {",
        "  initSmoothScroll({ lerp: 0.08 });",
        "  bindPerspectiveTilt('.browser-stage');",
        "  trackConversionSignals({ gtmId: 'GTM-5RS9F324' });",
        "});",
      ],
    },
    capabilities: [
      "Smooth micro-interactions and scroll-triggered animations",
      "Intuitive on-page visual editor for your marketing team",
      "Zero plugin maintenance or server update hassles",
      "Built-in SSL and enterprise DDoS protection",
    ],
  },
  {
    id: "laravel",
    name: "Laravel 11",
    category: "modern",
    tag: "Enterprise Backend Architecture",
    icon: "/icons/laravel.svg",
    headline: "Secure, Structured & Reliable Architecture for Custom Solutions",
    businessValue:
      "Laravel provides enterprise-grade structure with built-in authentication, encryption, and automated database handling, ensuring your business logic is robust, secure, and easily maintainable.",
    speedBadge: "Sub-25ms Execution",
    seoBadge: "Enterprise Security",
    scaleBadge: "Clean Modularity",
    codeSnippet: {
      filename: "app/Services/ProjectScopingService.php",
      language: "php",
      lines: [
        "namespace App\\Services;",
        "",
        "class ProjectScopingService {",
        "    public function generateRoadmap(ClientRequest $request): ScopeReport {",
        "        return ScopeReport::createFromRequirements($request->validated());",
        "    }",
        "}",
      ],
    },
    capabilities: [
      "Built-in bank-grade security protocols against vulnerabilities",
      "Custom customer dashboards, portals, and billing systems",
      "Automated email notifications and PDF invoice generators",
      "Seamless database migrations and reliable backups",
    ],
  },
  {
    id: "nodejs",
    name: "Node.js & APIs",
    category: "modern",
    tag: "High-Concurrency Runtime",
    icon: "/icons/nodejs.svg",
    headline: "High-Velocity Serverless APIs & Real-Time Data Pipelines",
    businessValue:
      "Node.js powers fast, lightweight backends capable of handling thousands of concurrent users simultaneously without slowing down, perfect for customer portals and high-traffic integrations.",
    speedBadge: "Sub-20ms API Response",
    seoBadge: "Serverless Runtime",
    scaleBadge: "Zero Downtime",
    codeSnippet: {
      filename: "api/routes/quote.ts",
      language: "typescript",
      lines: [
        "import { NextResponse } from 'next/server';",
        "",
        "export async function POST(req: Request) {",
        "  const { client, scope } = await req.json();",
        "  await dispatchToSeniorArchitect(client, scope);",
        "  return NextResponse.json({ success: true, sla: '< 24h' });",
        "}",
      ],
    },
    capabilities: [
      "Real-time notifications, chat, and data syncing",
      "Custom REST and GraphQL API development",
      "Automated lead routing and CRM background sync",
      "Cost-effective server resource utilization",
    ],
  },
];

export function WebDesignTechStack() {
  const [selectedTechId, setSelectedTechId] = useState<string>("nextjs");
  const [copied, setCopied] = useState<boolean>(false);

  const activeTech =
    TECH_CATALOG.find((t) => t.id === selectedTechId) || TECH_CATALOG[0];

  const handleCopyCode = () => {
    const text = activeTech.codeSnippet.lines.join("\n");
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-6 sm:space-y-8">
      {/* 1. Distinctive Horizontal Technology Selector Ribbon */}
      <div className="flex items-center justify-center gap-1.5 sm:gap-2.5 overflow-x-auto pb-1 no-scrollbar">
        {TECH_CATALOG.map((tech) => {
          const isSelected = tech.id === activeTech.id;

          return (
            <button
              key={tech.id}
              type="button"
              onClick={() => setSelectedTechId(tech.id)}
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

      {/* 2. Interactive Engineering Workbench Studio */}
      <div className="rounded-2xl sm:rounded-3xl bg-white border border-[#E2DBD0] shadow-sm overflow-hidden text-left max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
          {/* Left Column (6 cols): Specifications & Business Advantage */}
          <div className="lg:col-span-6 p-5 sm:p-7 flex flex-col justify-between space-y-5 border-b lg:border-b-0 lg:border-r border-[#E2DBD0]">
            <div className="space-y-3.5">
              <div className="flex items-center justify-between gap-2">
                <span className="text-[10px] font-black uppercase tracking-wider text-[#B87A00] bg-[#FFB020]/15 px-2.5 py-0.5 rounded-full border border-[#FFB020]/30">
                  {activeTech.tag}
                </span>

                <span className="font-mono text-xs font-bold text-slate-400">
                  Core Framework
                </span>
              </div>

              <h3 className="font-display font-black text-2xl sm:text-3xl text-[#0B1B3A] tracking-tight leading-snug">
                {activeTech.headline}
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                {activeTech.businessValue}
              </p>

              {/* 3 Clear Telemetry Badges */}
              <div className="grid grid-cols-3 gap-2 pt-1">
                <div className="p-2 sm:p-2.5 rounded-xl bg-[#FAF8F5] border border-[#E2DBD0] text-center sm:text-left">
                  <div className="text-[9px] uppercase font-black text-slate-400">Speed Benchmark</div>
                  <div className="text-[11px] font-black text-[#0B1B3A] truncate mt-0.5 flex items-center justify-center sm:justify-start gap-1">
                    <Zap className="w-3 h-3 text-[#FFB020]" />
                    <span className="truncate">{activeTech.speedBadge}</span>
                  </div>
                </div>

                <div className="p-2 sm:p-2.5 rounded-xl bg-[#FAF8F5] border border-[#E2DBD0] text-center sm:text-left">
                  <div className="text-[9px] uppercase font-black text-slate-400">Search &amp; SEO</div>
                  <div className="text-[11px] font-black text-[#0B1B3A] truncate mt-0.5 flex items-center justify-center sm:justify-start gap-1">
                    <Globe className="w-3 h-3 text-blue-500" />
                    <span className="truncate">{activeTech.seoBadge}</span>
                  </div>
                </div>

                <div className="p-2 sm:p-2.5 rounded-xl bg-[#FAF8F5] border border-[#E2DBD0] text-center sm:text-left">
                  <div className="text-[9px] uppercase font-black text-slate-400">Scale Architecture</div>
                  <div className="text-[11px] font-black text-[#0B1B3A] truncate mt-0.5 flex items-center justify-center sm:justify-start gap-1">
                    <ShieldCheck className="w-3 h-3 text-emerald-600" />
                    <span className="truncate">{activeTech.scaleBadge}</span>
                  </div>
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
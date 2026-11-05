"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Code2,
  Layers,
  Sparkles,
  CheckCircle2,
  Laptop,
  Cpu,
  ArrowRight,
  Database,
  Globe,
  Terminal,
  Zap,
  ShieldCheck,
  Server,
  Workflow,
  ExternalLink,
  ChevronRight,
} from "lucide-react";
import { MODERN_TECH, CMS_PLATFORMS, WebTechItem } from "@/data/web-design-services";
import { cn } from "@/lib/utils";

interface TechArchitectureSpec {
  techName: string;
  category: string;
  tag: string;
  architectureTier: string;
  speedRating: string;
  seoScore: string;
  idealFor: string;
  highlights: string[];
  codePreview: string;
}

const TECH_SPECS: Record<string, TechArchitectureSpec> = {
  "React.js": {
    techName: "React.js 19",
    category: "Modern Frontend",
    tag: "Component Architecture",
    architectureTier: "High-Performance SPA / Micro-Frontend",
    speedRating: "99 / 100",
    seoScore: "Client + SSR Hydrated",
    idealFor: "SaaS dashboards, dynamic client portals, and interactive web tools",
    highlights: [
      "Modular design tokens & atomic component library",
      "TanStack Query for server-state caching & zero flicker",
      "Micro-animations via Framer Motion & Tailwind CSS",
      "Virtual DOM optimization with memoized component trees",
    ],
    codePreview: `// Enterprise React Component Pattern
import { useQuery } from '@tanstack/react-query';
import { motion } from 'framer-motion';

export function DashboardMetrics({ tenantId }: { tenantId: string }) {
  const { data, isLoading } = useQuery(['metrics', tenantId], fetchLiveStats);
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="grid grid-cols-4 gap-4">
      {data?.map(metric => <MetricCard key={metric.id} {...metric} />)}
    </motion.div>
  );
}`,
  },
  "Next.js": {
    techName: "Next.js 15 (App Router)",
    category: "Full-Stack Framework",
    tag: "Server Components & Edge",
    architectureTier: "Zero-Bundle React Server Components (RSC)",
    speedRating: "100 / 100 Core Web Vitals",
    seoScore: "Peak Server-Rendered & Static HTML",
    idealFor: "High-traffic marketing sites, media platforms, and SEO-first web apps",
    highlights: [
      "Streaming SSR with Suspense boundaries for instantaneous FCP",
      "Edge Middleware for geo-routing & dynamic personalization",
      "Automated Next/Image WebP/AVIF generation on edge nodes",
      "Built-in metadata API generating dynamic OpenGraph tags",
    ],
    codePreview: `// Next.js Server Component with Streaming Suspense
import { Suspense } from 'react';
import { ProductCatalog } from '@/components/products';

export default async function StorePage({ searchParams }) {
  const query = await searchParams;
  return (
    <main className="max-w-7xl mx-auto px-6 py-12">
      <Suspense fallback={<CatalogSkeleton count={8} />}>
        <ProductCatalog filter={query.category} />
      </Suspense>
    </main>
  );
}`,
  },
  "Node.js": {
    techName: "Node.js & Express / Fastify",
    category: "Backend Runtime",
    tag: "Event-Driven APIs",
    architectureTier: "Asynchronous Microservices",
    speedRating: "Sub-15ms API latency",
    seoScore: "API Gateway & Server Layer",
    idealFor: "Realtime messaging, custom REST / GraphQL APIs, and webhook processing",
    highlights: [
      "Non-blocking I/O capable of handling 50k+ concurrent requests",
      "Strict TypeScript typing across requests, responses & DB schemas",
      "Secure JWT auth, rate limiting & Redis session stores",
      "Automated automated worker queues via BullMQ / Redis",
    ],
    codePreview: `// High-Throughput Node.js Microservice Route
import { FastifyInstance } from 'fastify';
import { z } from 'zod';

export async function leadWebhookRoutes(fastify: FastifyInstance) {
  fastify.post('/api/v1/leads/ingest', {
    schema: { body: leadSchemaZod },
    handler: async (request, reply) => {
      await leadQueue.add('dispatch-crm', request.body);
      return reply.code(202).send({ status: 'enqueued' });
    }
  });
}`,
  },
  "Laravel": {
    techName: "Laravel 11 & Livewire / Inertia",
    category: "Full-Stack PHP",
    tag: "Enterprise ORM & Security",
    architectureTier: "Batteries-Included Robust Architecture",
    speedRating: "Optimized OPcache & Octane Ready",
    seoScore: "Native Server-Rendered Blade / SSR",
    idealFor: "Complex web portals, CRM systems, subscription billing & multi-tenant SaaS",
    highlights: [
      "Eloquent ORM with clean relational querying & migrations",
      "Built-in CSRF, SQL injection & XSS sanitization safeguards",
      "Robust Job Queues & scheduled cron task workers",
      "Inertia.js bridge allowing React frontends with Laravel power",
    ],
    codePreview: `// Modern Laravel 11 Controller & Inertia Bridge
namespace App\\Http\\Controllers;
use App\\Models\\Project;
use Inertia\\Inertia;

class ProjectController extends Controller {
  public function index() {
    return Inertia::render('Projects/Index', [
      'projects' => Project::with('client')->paginate(12),
      'metrics' => Project::getAggregateGrowth()
    ]);
  }
}`,
  },
  "PHP": {
    techName: "Modern PHP 8.3+",
    category: "Core Backend",
    tag: "Type-Safe Backend",
    architectureTier: "JIT-Compiled Enterprise Engines",
    speedRating: "3x faster than legacy PHP 7.x",
    seoScore: "Full Server Delivery",
    idealFor: "Custom legacy modernizations, enterprise WordPress engines, and REST backends",
    highlights: [
      "Strict typing, union types, attributes & match expressions",
      "Direct integration with Apache, Nginx, LiteSpeed, and Docker",
      "Native Composer dependency management & PSR standards",
      "Enterprise database connection pools for MySQL & Postgres",
    ],
    codePreview: `// Modern PHP 8.3 Strict Typed Service
declare(strict_types=1);

namespace App\\Services;

readonly class PaymentProcessor {
  public function __construct(private StripeClient $stripe) {}

  public function charge(User $user, int $amountCents): TransactionResult {
    return $this->stripe->charges->create([
      'amount' => $amountCents,
      'currency' => 'usd',
      'customer' => $user->stripe_id
    ]);
  }
}`,
  },
  "HTML5, CSS3 & JS": {
    techName: "Semantic Modern Web Standards",
    category: "Frontend Core",
    tag: "Zero-Bloat Foundation",
    architectureTier: "Framework-Agnostic Raw Speed",
    speedRating: "100 / 100 Lighthouse Benchmark",
    seoScore: "Highest Possible Semantic Discoverability",
    idealFor: "Ultra-fast marketing pages, lightweight landing pages, and standalone widgets",
    highlights: [
      "Accessible WCAG 2.1 AA compliant semantic tags",
      "Modern CSS container queries, CSS subgrid & custom properties",
      "Vanilla ESNext modules with tree-shaking and zero runtime bloat",
      "Native lazy-loading for images, iframes & video assets",
    ],
    codePreview: `<!-- Clean Semantic SEO-Compliant Architecture -->
<article class="service-card" data-tier="enterprise">
  <header>
    <span class="badge" aria-label="Tier">Enterprise Grade</span>
    <h2>Custom Web Application Architecture</h2>
  </header>
  <p>Engineered for sub-second load times & 99.9% uptime SLA.</p>
</article>`,
  },
  "Tailwind CSS": {
    techName: "Tailwind CSS v3 & v4",
    category: "Utility-First Styling",
    tag: "Design System Tokens",
    architectureTier: "JIT Purged Single-Pass CSS",
    speedRating: "< 12KB Gzipped Total CSS",
    seoScore: "Zero Render-Blocking Overhead",
    idealFor: "Custom bespoke brand systems, design consistency & rapid feature shipping",
    highlights: [
      "Just-In-Time compiler generating only used class utilities",
      "Consistent responsive breakpoints across phone, tablet & 4K",
      "Dark mode & custom brand theme color variable integration",
      "Zero CSS class naming conflicts across large teams",
    ],
    codePreview: `@tailwind base;
@tailwind components;
@tailwind utilities;

@layer components {
  .btn-luxury-gold {
    @apply relative overflow-hidden bg-gradient-to-r from-[#FFB020] to-[#E68A00] 
           text-[#060B22] font-black tracking-wider transition-all duration-300;
  }
}`,
  },
  "Python / Django": {
    techName: "Python 3.12 & Django / FastAPI",
    category: "Data & AI Backend",
    tag: "High-Security Web Framework",
    architectureTier: "Asynchronous ASGI & AI-Ready",
    speedRating: "Micro-second execution with FastAPI",
    seoScore: "Server Template & Headless API",
    idealFor: "AI-integrated apps, machine learning portals, fintech & analytics engines",
    highlights: [
      "Built-in Django Admin, security protection & user auth",
      "FastAPI integration for high-speed OpenAPI compliant APIs",
      "Direct hook into OpenAI, Anthropic, Gemini & PyTorch pipelines",
      "PostgreSQL JSONB optimization & asynchronous Celery tasks",
    ],
    codePreview: `# Python FastAPI with Async AI Service Hook
from fastapi import FastAPI, BackgroundTasks
from pydantic import BaseModel

app = FastAPI(title="HDM Smart Lead Pipeline")

@app.post("/analyze-intent")
async def analyze_project_scope(payload: ProjectBrief):
    insights = await ai_engine.extract_tech_recommendation(payload.text)
    return {"status": "analyzed", "recommended_stack": insights}
`,
  },
  "WordPress": {
    techName: "WordPress & Headless WP",
    category: "Enterprise CMS",
    tag: "ACF Pro & Custom Blocks",
    architectureTier: "Custom Theme / Headless REST & GraphQL",
    speedRating: "Under 1.2s Full Page Load",
    seoScore: "World-Class Rank Math & Yoast Sync",
    idealFor: "Content-driven business websites, multi-author blogs & corporate portals",
    highlights: [
      "100% custom Gutenberg blocks with zero heavy page builder bloat",
      "ACF (Advanced Custom Fields) Pro custom data modeling",
      "WPGraphQL for headless frontend connections with Next.js",
      "Hardened security, automatic cloud backups & CDN caching",
    ],
    codePreview: `// Custom WordPress ACF Block Registration
add_action('acf/init', function() {
  acf_register_block_type([
    'name'            => 'case-study-hero',
    'title'           => __('Case Study Hero'),
    'description'     => __('High-conversion client outcome hero block'),
    'render_template' => 'template-parts/blocks/case-study.php',
    'category'        => 'formatting',
    'supports'        => ['align' => false, 'jsx' => true]
  ]);
});`,
  },
  "Shopify": {
    techName: "Shopify Plus & Liquid / Hydrogen",
    category: "E-Commerce Leader",
    tag: "Custom Liquid & Headless",
    architectureTier: "High-Conversion Checkout Architecture",
    speedRating: "99.99% Black Friday / Cyber Monday Uptime",
    seoScore: "Native E-Commerce Schema & Breadcrumbs",
    idealFor: "DTC brands, high-SKU product stores, and global cross-border e-commerce",
    highlights: [
      "Custom Shopify 2.0 section-based Liquid themes",
      "Shopify Functions for custom discount & shipping rules",
      "Checkout Extensibility for high-converting 1-click upsells",
      "Hydrogen / Oxygen headless storefront deployments",
    ],
    codePreview: `{% comment %} Shopify 2.0 Dynamic Modular Section {% endcomment %}
<div class="hdm-product-grid" data-section-id="{{ section.id }}">
  {% for product in section.settings.featured_collection.products limit: 4 %}
    {% render 'product-card', product: product, show_rating: true %}
  {% endfor %}
</div>`,
  },
  "WooCommerce": {
    techName: "WooCommerce & Custom Extensions",
    category: "Open E-Commerce",
    tag: "Zero-Commission Commerce",
    architectureTier: "Self-Hosted Custom Store Engine",
    speedRating: "Custom HPOS (High-Performance Order Storage)",
    seoScore: "Granular WooCommerce SEO Control",
    idealFor: "Stores requiring custom subscription logic, wholesale B2B pricing & zero platform fees",
    highlights: [
      "Custom checkout flow eliminating unnecessary form steps",
      "Stripe, PayPal, Klarna & Afterpay custom integrations",
      "High-Performance Order Storage (HPOS) database tuning",
      "B2B wholesale pricing tables & tiered discounts",
    ],
    codePreview: `// WooCommerce HPOS Custom Checkout Optimization
add_filter('woocommerce_checkout_fields', function($fields) {
  // Strip extraneous fields to boost checkout conversion by 28%
  unset($fields['billing']['billing_company']);
  unset($fields['order']['order_comments']);
  return $fields;
});`,
  },
  "Webflow": {
    techName: "Webflow Enterprise",
    category: "Visual CMS & Animations",
    tag: "High-End Agency Polish",
    architectureTier: "Visual Development + Client-First CMS",
    speedRating: "AWS & Fastly Global Edge CDN",
    seoScore: "Native Visual On-Page SEO Tools",
    idealFor: "B2B SaaS, venture-backed startups, design agencies & marketing leaders",
    highlights: [
      "Client-First style system for maintainable class naming",
      "Custom GSAP micro-animations & smooth scroll interactions",
      "CMS collections for dynamic blogs, case studies & team listings",
      "Clean semantic code export or live Webflow Cloud hosting",
    ],
    codePreview: `// Webflow Custom GSAP Interaction Hook
window.Webflow ||= [];
window.Webflow.push(function () {
  gsap.from(".hero-headline", {
    y: 30,
    opacity: 0,
    duration: 1.1,
    ease: "power3.out"
  });
});`,
  },
  "Wix Studio": {
    techName: "Wix Studio & Velo Code",
    category: "Agile Builder",
    tag: "Rapid Prototyping",
    architectureTier: "Visual CSS Grid + Full-Stack Velo",
    speedRating: "Fastly Multi-Cloud CDN",
    seoScore: "Google-Verified Structured Data Tools",
    idealFor: "Fast turnaround local business websites, booking platforms & event hubs",
    highlights: [
      "Fluid responsive proportional scaling layout engine",
      "Velo by Wix for custom JavaScript backend logic",
      "Integrated scheduling, event registration & CRM tools",
      "Rapid turnaround without sacrificing modern aesthetics",
    ],
    codePreview: `// Wix Velo Custom Booking Confirmation
import wixBookings from 'wix-bookings';

export function confirmConsultationButton_click(event) {
  wixBookings.checkoutBooking(bookingInfo)
    .then((result) => console.log('Booking confirmed', result.status));
}`,
  },
  "Squarespace": {
    techName: "Squarespace 7.1 & Fluid Engine",
    category: "Portfolio & Brand",
    tag: "Aesthetic Layouts",
    architectureTier: "Editorial Design Foundation",
    speedRating: "Global CDN Caching",
    seoScore: "Clean Canonical & SSL Setup",
    idealFor: "Creative directors, boutique agencies, architects, and luxury consultants",
    highlights: [
      "Custom CSS styling injected via developer mode",
      "Clean editorial grid layouts with fluid mobile responsiveness",
      "Integrated podcast, newsletter, and digital product feeds",
      "Zero server maintenance or plugin update overhead",
    ],
    codePreview: `/* Custom Squarespace Brand Polish */
.header-nav-item a {
  letter-spacing: 0.12em;
  font-weight: 700;
  transition: color 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}`,
  },
  "Drupal": {
    techName: "Drupal 10 Enterprise",
    category: "Complex CMS",
    tag: "Government & Enterprise",
    architectureTier: "Decoupled / Multi-Site Governance",
    speedRating: "Varnish Cache & Redis Tuning",
    seoScore: "Comprehensive Taxonomy & Metatag",
    idealFor: "Higher education, healthcare networks, enterprise intranet & government portals",
    highlights: [
      "Granular role-based access control (RBAC) permissions",
      "Multilingual translation workflow out of the box",
      "Decoupled headless delivery with JSON:API and GraphQL",
      "Enterprise security compliance and audit logging",
    ],
    codePreview: `# Drupal 10 Services Definition
services:
  custom_enterprise.analytics:
    class: Drupal\\custom_enterprise\\AnalyticsManager
    arguments: ['@database', '@current_user']`,
  },
  "Magento / Adobe": {
    techName: "Magento 2 / Adobe Commerce",
    category: "Enterprise E-Commerce",
    tag: "High-SKU Multi-Warehouse",
    architectureTier: "Decoupled PWA Studio & Microservices",
    speedRating: "Elasticsearch / OpenSearch Scaled",
    seoScore: "Multi-Storefront Schema Infrastructure",
    idealFor: "B2B wholesale distributors, 50k+ SKU catalogs & multi-currency global operations",
    highlights: [
      "Custom B2B pricing matrices and customer group catalogs",
      "Multi-source inventory across global distribution warehouses",
      "OpenSearch product indexing delivering sub-50ms search results",
      "Robust ERP & SAP integrations via GraphQL and REST",
    ],
    codePreview: `// Magento 2 Dependency Injection
namespace HDM\\Commerce\\Plugin;

class OrderOptimizationPlugin {
  public function afterPlaceOrder($subject, $result) {
    // Sync ERP multi-warehouse tracking synchronously
    return $result;
  }
}`,
  },
};

export function WebDesignTechStack() {
  const [activeCategory, setActiveCategory] = useState<"all" | "modern" | "cms">("all");
  const [selectedTechName, setSelectedTechName] = useState<string>("Next.js");

  const items: WebTechItem[] =
    activeCategory === "all"
      ? [...MODERN_TECH, ...CMS_PLATFORMS]
      : activeCategory === "modern"
      ? MODERN_TECH
      : CMS_PLATFORMS;

  const currentSpec =
    TECH_SPECS[selectedTechName] || TECH_SPECS["Next.js"];

  return (
    <div className="space-y-10">
      {/* 1. Category Switcher Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
        <button
          type="button"
          onClick={() => {
            setActiveCategory("all");
            setSelectedTechName("Next.js");
          }}
          className={cn(
            "px-5 py-2.5 rounded-full text-xs font-bold transition-all duration-300 cursor-pointer select-none",
            activeCategory === "all"
              ? "bg-[#060B22] text-[#FFB020] border border-[#FFB020]/50 shadow-md ring-2 ring-[#FFB020]/20 scale-102"
              : "bg-white text-slate-700 border border-[#E2DBD0] hover:border-slate-400 hover:text-[#0B1B3A]"
          )}
        >
          All 16 Ecosystem Technologies
        </button>
        <button
          type="button"
          onClick={() => {
            setActiveCategory("modern");
            setSelectedTechName("Next.js");
          }}
          className={cn(
            "px-5 py-2.5 rounded-full text-xs font-bold transition-all duration-300 cursor-pointer select-none",
            activeCategory === "modern"
              ? "bg-[#060B22] text-[#FFB020] border border-[#FFB020]/50 shadow-md ring-2 ring-[#FFB020]/20 scale-102"
              : "bg-white text-slate-700 border border-[#E2DBD0] hover:border-slate-400 hover:text-[#0B1B3A]"
          )}
        >
          Modern Development Frameworks ({MODERN_TECH.length})
        </button>
        <button
          type="button"
          onClick={() => {
            setActiveCategory("cms");
            setSelectedTechName("WordPress");
          }}
          className={cn(
            "px-5 py-2.5 rounded-full text-xs font-bold transition-all duration-300 cursor-pointer select-none",
            activeCategory === "cms"
              ? "bg-[#060B22] text-[#FFB020] border border-[#FFB020]/50 shadow-md ring-2 ring-[#FFB020]/20 scale-102"
              : "bg-white text-slate-700 border border-[#E2DBD0] hover:border-slate-400 hover:text-[#0B1B3A]"
          )}
        >
          CMS &amp; E-commerce Platforms ({CMS_PLATFORMS.length})
        </button>
      </div>

      {/* 2. Interactive Architecture & Ecosystem Studio (NO CARDS - Dynamic Two-Column Console) */}
      <div className="bg-[#060B22] text-white rounded-3xl border border-white/15 shadow-2xl p-6 sm:p-8 lg:p-10 relative overflow-hidden">
        {/* Subtle Ambient Glows */}
        <div className="absolute -top-32 -right-32 w-80 h-80 bg-[#FFB020]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
          {/* Left Column (5 cols): Interactive Stack Navigator */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-white/10">
              <div className="flex items-center gap-2">
                <Terminal className="w-4 h-4 text-[#FFB020]" />
                <span className="text-xs font-black uppercase tracking-wider text-slate-300">
                  Select Technology Stack
                </span>
              </div>
              <span className="text-[11px] font-bold text-[#FFB020] bg-white/5 px-2.5 py-0.5 rounded-full border border-white/10">
                Click to Inspect
              </span>
            </div>

            {/* Scrollable / Stackable Interactive Tech Selector Stream */}
            <div className="space-y-1.5 max-h-[460px] overflow-y-auto pr-2 custom-scrollbar">
              {items.map((tech) => {
                const isSelected = tech.name === selectedTechName;
                return (
                  <button
                    key={tech.name}
                    type="button"
                    onClick={() => setSelectedTechName(tech.name)}
                    className={cn(
                      "w-full text-left p-3 rounded-2xl transition-all duration-200 flex items-center justify-between group cursor-pointer border",
                      isSelected
                        ? "bg-white/15 border-[#FFB020] text-white shadow-lg translate-x-1"
                        : "bg-white/5 border-white/5 text-slate-300 hover:bg-white/10 hover:text-white hover:border-white/20"
                    )}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={cn(
                          "w-8 h-8 rounded-xl flex items-center justify-center p-1.5 transition-colors",
                          isSelected
                            ? "bg-[#FFB020] text-[#060B22]"
                            : "bg-white/10 text-slate-300 group-hover:text-white"
                        )}
                      >
                        {tech.icon ? (
                          <Image
                            src={tech.icon}
                            alt={tech.name}
                            width={18}
                            height={18}
                            className="object-contain"
                          />
                        ) : (
                          <Code2 className="w-4 h-4" />
                        )}
                      </div>

                      <div>
                        <div className="font-bold text-sm tracking-tight flex items-center gap-2">
                          <span>{tech.name}</span>
                          {isSelected && (
                            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                          )}
                        </div>
                        <div className="text-[10px] text-slate-400 font-medium">
                          {tech.tag}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-1">
                      <span
                        className={cn(
                          "text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md",
                          isSelected
                            ? "bg-[#FFB020]/20 text-[#FFB020] border border-[#FFB020]/30"
                            : "bg-white/5 text-slate-400"
                        )}
                      >
                        {tech.category === "modern" ? "Custom Code" : "CMS Engine"}
                      </span>
                      <ChevronRight
                        className={cn(
                          "w-4 h-4 transition-transform duration-200",
                          isSelected ? "text-[#FFB020] translate-x-0.5" : "text-slate-500"
                        )}
                      />
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column (7 cols): Live macOS Glassmorphic Inspector Console */}
          <div className="lg:col-span-7 bg-[#0B1433]/90 rounded-2xl border border-white/15 overflow-hidden shadow-xl backdrop-blur-md flex flex-col">
            {/* macOS Window Title Bar */}
            <div className="px-4 py-3 bg-[#060B22] border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                <span className="ml-2 text-xs font-mono text-slate-400 font-medium truncate">
                  stack-inspector / {selectedTechName.toLowerCase().replace(/[^a-z0-9]/g, "-")}.config
                </span>
              </div>
              <div className="flex items-center gap-2 text-[10px] font-mono text-slate-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>Verified Production Ready</span>
              </div>
            </div>

            {/* Inspector Body */}
            <div className="p-5 sm:p-6 space-y-6 flex-1 flex flex-col justify-between">
              <div className="space-y-4">
                {/* Tech Title & Metrics Ribbon */}
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <div className="text-[10px] font-black uppercase tracking-wider text-[#FFB020]">
                      {currentSpec.category} · {currentSpec.tag}
                    </div>
                    <h3 className="font-display font-black text-2xl text-white">
                      {currentSpec.techName}
                    </h3>
                  </div>

                  <div className="flex items-center gap-2 text-xs font-bold">
                    <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 flex items-center gap-1.5">
                      <Zap className="w-3.5 h-3.5 text-emerald-400" />
                      <span>{currentSpec.speedRating}</span>
                    </span>
                    <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30 flex items-center gap-1.5">
                      <Globe className="w-3.5 h-3.5 text-blue-400" />
                      <span>{currentSpec.seoScore}</span>
                    </span>
                  </div>
                </div>

                {/* Architecture Tier & Ideal For */}
                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 text-xs space-y-1">
                  <div className="text-slate-400">
                    <span className="font-bold text-slate-200">Architecture Tier: </span>
                    {currentSpec.architectureTier}
                  </div>
                  <div className="text-slate-400">
                    <span className="font-bold text-[#FFB020]">Best Suited For: </span>
                    {currentSpec.idealFor}
                  </div>
                </div>

                {/* Key Engineering Highlights */}
                <div className="space-y-2">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-300">
                    Engineering Standards &amp; Capabilities:
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    {currentSpec.highlights.map((h, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-2 text-slate-300 leading-snug p-2 rounded-lg bg-white/5"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#FFB020] shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Live Code / Configuration Preview */}
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between text-[11px] font-mono text-slate-400">
                    <span>Architecture Snippet</span>
                    <span className="text-slate-500">production-clean</span>
                  </div>
                  <pre className="p-3.5 rounded-xl bg-[#040818] border border-white/10 text-[11px] font-mono text-slate-200 overflow-x-auto leading-relaxed max-h-[140px] custom-scrollbar">
                    <code>{currentSpec.codePreview}</code>
                  </pre>
                </div>
              </div>

              {/* Bottom Direct CTA */}
              <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
                <span className="text-xs text-slate-400 text-center sm:text-left">
                  Need {selectedTechName} specialists for your project?
                </span>
                <a
                  href="#lead-form"
                  className="btn-luxury-gold btn-shimmer px-5 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider inline-flex items-center gap-1.5 shadow-md cursor-pointer shrink-0"
                >
                  <span>Build with {selectedTechName}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Continuous Infinite Animative Tech Stream (Ticker / Marquee) */}
      <div className="relative overflow-hidden py-4 border-y border-[#E2DBD0] bg-white/60 rounded-2xl">
        <div className="flex items-center gap-8 animate-marquee whitespace-nowrap">
          {[...items, ...items].map((tech, idx) => (
            <button
              key={`${tech.name}-${idx}`}
              type="button"
              onClick={() => setSelectedTechName(tech.name)}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white border border-[#E2DBD0] text-slate-700 hover:text-[#060B22] hover:border-[#FFB020] transition-all duration-200 cursor-pointer shadow-2xs group"
            >
              <span className="w-2 h-2 rounded-full bg-[#FFB020] group-hover:scale-125 transition-transform" />
              <span className="text-xs font-bold">{tech.name}</span>
              <span className="text-[10px] text-slate-400 font-medium">({tech.tag})</span>
            </button>
          ))}
        </div>
      </div>

      {/* 4. Supporting Message Banner (Exact Requirement) */}
      <div className="p-6 sm:p-8 rounded-3xl skeuo-card-dark text-white border border-white/10 shadow-xl relative overflow-hidden">
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-slate-200 text-xs font-black uppercase tracking-wider border border-white/10">
              <Sparkles className="w-3.5 h-3.5 text-[#FFB020]" />
              <span>Seamless Migration &amp; Upgrades</span>
            </div>
            <h3 className="font-display font-black text-xl sm:text-2xl text-white tracking-tight">
              Already have a website? No problem.
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              We can work with your existing technology stack to redesign, upgrade,
              customize, and enhance your website without necessarily rebuilding
              everything from scratch. We preserve existing SEO rankings, backlink
              equity, and user data while modernizing your frontend.
            </p>
          </div>

          <a
            href="#lead-form"
            className="btn-luxury-gold btn-shimmer px-6 py-3 rounded-xl text-xs font-black uppercase tracking-wider inline-flex items-center gap-2 shrink-0 shadow-lg cursor-pointer"
          >
            <span>Audit My Existing Website</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
}

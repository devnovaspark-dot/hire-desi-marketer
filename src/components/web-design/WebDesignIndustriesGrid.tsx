"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Building,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  ShieldCheck,
  Stethoscope,
  ShoppingBag,
  Cpu,
  Home,
  GraduationCap,
  Briefcase,
  Layers,
  Lock,
  Globe,
  ExternalLink,
  Zap,
  TrendingUp,
  Activity,
  Check,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface SectorData {
  id: string;
  name: string;
  shortLabel: string;
  icon: React.ReactNode;
  previewImage: string;
  previewUrl: string;
  previewTitle: string;
  categoryTag: string;
  benchmarkMetric: string;
  benchmarkLabel: string;
  headline: string;
  executiveSummary: string;
  coreFrictionSolved: string;
  uxJourneySteps: {
    step: string;
    label: string;
  }[];
  technicalStandards: {
    title: string;
    description: string;
  }[];
  popularFeatures: string[];
}

const SECTORS: SectorData[] = [
  {
    id: "healthcare",
    name: "Healthcare & Medical Clinics",
    shortLabel: "Healthcare",
    icon: <Stethoscope className="w-4 h-4 text-[#FFB020]" />,
    previewImage: "/images/ref-onemedical.jpg",
    previewUrl: "https://onemedical.hdm.preview/patient-portal",
    previewTitle: "One Medical · Patient-First Clinical Portal",
    categoryTag: "HIPAA Compliant & Accessible",
    benchmarkMetric: "+140%",
    benchmarkLabel: "Online Patient Bookings",
    headline: "Patient-First Portals, Telehealth & Frictionless Appointment Booking",
    executiveSummary:
      "Medical practices lose prospective patients when scheduling is confusing or mobile navigation is rigid. We engineer clean, HIPAA-compliant patient portals with instant doctor selection, automated SMS confirmations, and sub-second load times.",
    coreFrictionSolved:
      "Eliminates 3-day phone booking delays with real-time slot selection and encrypted digital intake forms.",
    uxJourneySteps: [
      { step: "01", label: "Symptom & Specialty Filter" },
      { step: "02", label: "Doctor Bio & Verified Credentials" },
      { step: "03", label: "Real-Time Telehealth / Clinic Slot" },
      { step: "04", label: "HIPAA-Encrypted Digital Intake" },
    ],
    technicalStandards: [
      {
        title: "HIPAA-Ready Security Architecture",
        description: "Zero patient health information leakage; end-to-end encrypted SSL form submissions.",
      },
      {
        title: "WCAG 2.1 AA Accessibility Compliant",
        description: "High-contrast text, keyboard-navigable menus, and full screen-reader parity.",
      },
      {
        title: "PMS & EHR Integration Ready",
        description: "Seamless synchronization with Cerner, Epic, AthenaHealth, or custom calendar APIs.",
      },
      {
        title: "Sub-Second Mobile Emergency Speed",
        description: "Critical care details and clinic phone numbers load in under 600ms on 4G networks.",
      },
    ],
    popularFeatures: [
      "1-Click Doctor Appointment Booking",
      "Interactive Provider Directory",
      "Insurance Acceptance Calculator",
      "Patient Review & Trust Showcase",
    ],
  },
  {
    id: "ecommerce",
    name: "E-Commerce & High-Velocity DTC",
    shortLabel: "E-Commerce",
    icon: <ShoppingBag className="w-4 h-4 text-[#FFB020]" />,
    previewImage: "/images/ref-allbirds.jpg",
    previewUrl: "https://allbirds.hdm.preview/sustainable-footwear",
    previewTitle: "Allbirds · High-Velocity Headless DTC Storefront",
    categoryTag: "Shopify Plus & Headless",
    benchmarkMetric: "4.6%",
    benchmarkLabel: "Average Checkout Conversion",
    headline: "High-Speed Headless & Native Storefronts Built for Maximum AOV",
    executiveSummary:
      "Every 100ms of checkout lag costs 1% in lost sales. We design custom Shopify Plus, WooCommerce, and Headless storefronts featuring sub-second product pages, slide-out micro-carts with free shipping thresholds, and 1-tap Apple Pay.",
    coreFrictionSolved:
      "Replaces clunky multi-step checkouts with instant slide-carts, sticky add-to-bag triggers, and dynamic bundle discounts.",
    uxJourneySteps: [
      { step: "01", label: "Sub-Second Instant Search" },
      { step: "02", label: "Dynamic Color / Size Variant Picker" },
      { step: "03", label: "Slide-Cart with Free Shipping Goal" },
      { step: "04", label: "1-Tap Apple Pay / Shop Pay Checkout" },
    ],
    technicalStandards: [
      {
        title: "Sub-Second Edge Catalog Speed",
        description: "Static product rendering with edge caching guarantees instant page navigation.",
      },
      {
        title: "Slide-Out Drawer Cart with Smart Upsells",
        description: "Progressive free-shipping progress bar and recommended product cross-sells.",
      },
      {
        title: "Multi-Currency & Global Tax Auto-Sync",
        description: "Localized checkout in 130+ currencies with automated duty and VAT calculation.",
      },
      {
        title: "ERP & Omnichannel Inventory Sync",
        description: "Automated webhook inventory sync preventing out-of-stock ordering.",
      },
    ],
    popularFeatures: [
      "1-Page Frictionless Checkout",
      "Dynamic Bundle & Tiered Discounts",
      "Customer Account & Re-Order Portal",
      "Subscription Recharge Integration",
    ],
  },
  {
    id: "saas",
    name: "IT, SaaS & Cloud Platforms",
    shortLabel: "SaaS & Cloud",
    icon: <Cpu className="w-4 h-4 text-[#FFB020]" />,
    previewImage: "/images/ref-linear.jpg",
    previewUrl: "https://linear.hdm.preview/issue-tracking-v2",
    previewTitle: "Linear · Next-Gen Product Marketing & Dark Mode UI",
    categoryTag: "Modern Full-Stack & Developer UI",
    benchmarkMetric: "3.8x",
    benchmarkLabel: "Free-to-Paid Activation Lift",
    headline: "Modern Product Marketing Sites & Developer Documentation Hubs",
    executiveSummary:
      "Technical decision-makers judge your software by the quality of your website. We craft dark-mode-native product websites with interactive UI feature tours, live code snippets, transparent pricing tier calculators, and friction-free sign-up funnels.",
    coreFrictionSolved:
      "Transforms complex technical architectures into crisp, skimmable interactive demonstrations that convert engineers and CTOs.",
    uxJourneySteps: [
      { step: "01", label: "Interactive Product Feature Tour" },
      { step: "02", label: "Live Code / API Playground" },
      { step: "03", label: "Usage Tier / Seat Calculator" },
      { step: "04", label: "60-Second Self-Serve Onboarding" },
    ],
    technicalStandards: [
      {
        title: "Next-Gen Component Architecture",
        description: "Built on Next.js 16 and React 19 for seamless 60fps animations and instant interactions.",
      },
      {
        title: "Interactive Pricing & Seat Calculators",
        description: "Dynamic billing sliders showing exact monthly savings for annual tier commitments.",
      },
      {
        title: "Self-Hosted Documentation Hub",
        description: "MDX-powered technical guides with live copy-paste code blocks and instant search.",
      },
      {
        title: "Enterprise SOC-2 Compliance Positioning",
        description: "Dedicated security whitepaper downloads and enterprise RFP intake flows.",
      },
    ],
    popularFeatures: [
      "Interactive Product Demo Showcase",
      "Self-Serve Stripe / LemonSqueezy Billing",
      "Automated Changelog & Release Feed",
      "Enterprise Contact & Security Hub",
    ],
  },
  {
    id: "realestate",
    name: "Real Estate & Luxury Property",
    shortLabel: "Real Estate",
    icon: <Home className="w-4 h-4 text-[#FFB020]" />,
    previewImage: "/images/journal-desk-hero.webp",
    previewUrl: "https://luxuryestates.hdm.preview/portfolio",
    previewTitle: "Apex Luxury Real Estate · Architectural Property Showcase",
    categoryTag: "MLS / IDX Integration",
    benchmarkMetric: "3.2x",
    benchmarkLabel: "Qualified Buyer Inquiries",
    headline: "Luxury Brokerage Portals & Commercial Property Showcase Hubs",
    executiveSummary:
      "High-net-worth real estate buyers expect architectural visual elegance. We design responsive property portals featuring automated MLS/IDX synchronization, interactive neighborhood map discovery, virtual 3D tour embeds, and VIP viewing schedulers.",
    coreFrictionSolved:
      "Eliminates outdated listings with real-time MLS sync and captures high-ticket buyers through friction-free viewing requests.",
    uxJourneySteps: [
      { step: "01", label: "Interactive Map & Neighborhood Search" },
      { step: "02", label: "Ultra-HD Gallery & 3D Virtual Tour" },
      { step: "03", label: "Property Spec & Floor Plan Download" },
      { step: "04", label: "VIP Private Viewing Concierge" },
    ],
    technicalStandards: [
      {
        title: "Automated MLS / IDX Feed Synchronization",
        description: "Real-time listing sync via RETS / RESO Web API updating prices and statuses hourly.",
      },
      {
        title: "Interactive Mapbox GL & Polygon Search",
        description: "Custom map markers, neighborhood school ratings, and walk-score integrations.",
      },
      {
        title: "Matterport & 3D Virtual Tour Embeds",
        description: "Lightweight lazy-loaded spatial tour embeds that preserve sub-second mobile speed.",
      },
      {
        title: "Lead Routing to Specific Agents",
        description: "Automated CRM lead dispatch to listing agents via SMS and email alerts.",
      },
    ],
    popularFeatures: [
      "Automated MLS / IDX Property Sync",
      "Mortgage & Property Tax Calculator",
      "Interactive Floor Plan Viewer",
      "Agent Roster & Direct Scheduling",
    ],
  },
  {
    id: "professional-services",
    name: "Professional Services & B2B Advisory",
    shortLabel: "Professional Services",
    icon: <Briefcase className="w-4 h-4 text-[#FFB020]" />,
    previewImage: "/images/ref-mckinsey.jpg",
    previewUrl: "https://advisory.hdm.preview/management-consulting",
    previewTitle: "McKinsey Style · Global Advisory & Leadership Architecture",
    categoryTag: "Executive Authority Positioning",
    benchmarkMetric: "+180%",
    benchmarkLabel: "High-Value RFP Submissions",
    headline: "Corporate Authority Websites & High-Ticket B2B Lead Engines",
    executiveSummary:
      "When enterprise executives research a partner firm, your website must project undisputed credibility. We design editorial, award-winning corporate presences that showcase proprietary methodologies, client case studies, and seamless consultation booking.",
    coreFrictionSolved:
      "Transforms vague service descriptions into authoritative case studies that justify premium advisory retainers.",
    uxJourneySteps: [
      { step: "01", label: "Executive Thought Leadership Editorial" },
      { step: "02", label: "Quantified Case Study Proof Points" },
      { step: "03", label: "Proprietary Methodology Blueprint" },
      { step: "04", label: "Direct Partner Consultation Scheduling" },
    ],
    technicalStandards: [
      {
        title: "Executive Editorial Typography & Spacing",
        description: "Refined editorial layout that conveys prestige, clarity, and institutional trust.",
      },
      {
        title: "Gated Whitepapers & Research Downloads",
        description: "Automated lead-capture workflows integrated with HubSpot, Salesforce, and Marketo.",
      },
      {
        title: "Interactive Case Study ROI Sliders",
        description: "Engaging data visualizations proving tangible business transformation.",
      },
      {
        title: "Direct Calendar & CRM Synchronization",
        description: "Frictionless meeting booking embedded directly into high-intent service pages.",
      },
    ],
    popularFeatures: [
      "Executive Credentials Showcase",
      "Gated Industry Research Reports",
      "Direct Partner Calendar Sync",
      "Formal RFP Intake Workflow",
    ],
  },
  {
    id: "education",
    name: "Education, Academies & E-Learning",
    shortLabel: "Education",
    icon: <GraduationCap className="w-4 h-4 text-[#FFB020]" />,
    previewImage: "/images/blog-hero-bg.webp",
    previewUrl: "https://academy.hdm.preview/masterclass",
    previewTitle: "Apex Academy · Modern Learning & Student Onboarding",
    categoryTag: "LMS & Video Streaming Architecture",
    benchmarkMetric: "68%",
    benchmarkLabel: "Course Completion & Retention",
    headline: "E-Learning Academies, Course Portals & Institutional Websites",
    executiveSummary:
      "Online education requires both inspiring marketing to drive enrollments and a distraction-free student portal. We architect seamless LMS websites with interactive course directories, video streaming CDNs, student community hubs, and secure payments.",
    coreFrictionSolved:
      "Replaces confusing course catalogs with interactive syllabi, sample lesson previews, and 1-click enrollment.",
    uxJourneySteps: [
      { step: "01", label: "Interactive Course & Syllabus Browser" },
      { step: "02", label: "Free Lesson / Trailer Video Preview" },
      { step: "03", label: "Verified Student Outcomes & Reviews" },
      { step: "04", label: "1-Click Frictionless Enrollment" },
    ],
    technicalStandards: [
      {
        title: "Gated Member & Student Portal",
        description: "Secure JWT user authentication with role-based access for students and instructors.",
      },
      {
        title: "Video Streaming CDN Integration",
        description: "Buffer-free global video delivery via Cloudflare Stream, Vimeo OTT, or AWS CloudFront.",
      },
      {
        title: "Interactive Curriculum & Quiz Engine",
        description: "Clean syllabus navigation with progress tracking and downloadable resource vaults.",
      },
      {
        title: "Flexible Tiered & Installment Billing",
        description: "Support for one-time course fees, monthly memberships, and multi-currency checkouts.",
      },
    ],
    popularFeatures: [
      "Interactive Syllabus Viewer",
      "Student Dashboard & Progress Bar",
      "Automated Certificate Generation",
      "Live Q&A Webinar Integration",
    ],
  },
];

export function WebDesignIndustriesGrid() {
  const [selectedSectorId, setSelectedSectorId] = useState<string>("healthcare");

  const activeSector =
    SECTORS.find((s) => s.id === selectedSectorId) || SECTORS[0];

  return (
    <div className="space-y-8 sm:space-y-10">
      {/* 1. Touch-Friendly Interactive Sector Switcher Ribbon */}
      <div className="flex items-center justify-center gap-1.5 sm:gap-2.5 overflow-x-auto pb-1 no-scrollbar">
        {SECTORS.map((sector) => {
          const isSelected = sector.id === activeSector.id;

          return (
            <button
              key={sector.id}
              type="button"
              onClick={() => setSelectedSectorId(sector.id)}
              className={cn(
                "px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer select-none inline-flex items-center gap-2 shrink-0 border",
                isSelected
                  ? "bg-[#060B22] text-[#FFB020] border-[#FFB020] shadow-sm ring-2 ring-[#FFB020]/20"
                  : "bg-white text-slate-700 border-[#E2DBD0] hover:border-slate-400"
              )}
            >
              <span>{sector.icon}</span>
              <span>{sector.shortLabel}</span>
              {isSelected && (
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shrink-0" />
              )}
            </button>
          );
        })}
      </div>

      {/* 2. Interactive Sector Architecture Studio Canvas */}
      <div className="rounded-2xl sm:rounded-3xl bg-white border border-[#E2DBD0] shadow-sm overflow-hidden text-left">
        {/* Studio Top Bar */}
        <div className="px-5 py-3.5 bg-[#060B22] text-white border-b border-white/10 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2.5 min-w-0">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
            <span className="text-xs font-black uppercase tracking-wider text-[#FFB020] truncate">
              Sector Blueprint Studio · {activeSector.name}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-[10px] font-bold text-slate-300 bg-white/10 px-2.5 py-1 rounded-full border border-white/15">
              {activeSector.categoryTag}
            </span>
            <span className="text-[10px] font-black text-emerald-400 bg-emerald-950/60 px-2.5 py-1 rounded-full border border-emerald-500/30 flex items-center gap-1">
              <Activity className="w-3 h-3 text-emerald-400" />
              <span>{activeSector.benchmarkMetric} {activeSector.benchmarkLabel}</span>
            </span>
          </div>
        </div>

        {/* Studio Body: Asymmetric 2-Column Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
          {/* Left Column (7 cols): Pristine Website Showcase in Browser Chrome (Zero Overlaid Text) */}
          <div className="lg:col-span-7 p-4 sm:p-6 lg:p-7 border-b lg:border-b-0 lg:border-r border-[#E2DBD0] bg-[#FAF8F5] flex flex-col justify-between space-y-5">
            {/* Realistic Browser Window Frame */}
            <div className="rounded-xl overflow-hidden border border-[#060B22]/15 shadow-md bg-white">
              {/* Browser Chrome Header */}
              <div className="h-9 bg-[#060B22] px-3.5 flex items-center justify-between border-b border-white/10">
                {/* Mac-style Window Controls */}
                <div className="flex items-center gap-1.5 shrink-0">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
                </div>

                {/* Staging URL Bar */}
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/10 border border-white/15 text-[10px] text-slate-200 font-mono max-w-[280px] sm:max-w-[340px] truncate">
                  <Lock className="w-2.5 h-2.5 text-emerald-400 shrink-0" />
                  <span className="truncate">{activeSector.previewUrl}</span>
                </div>

                <div className="text-[10px] font-bold text-[#FFB020] uppercase tracking-wider shrink-0 hidden sm:block">
                  Production Preview
                </div>
              </div>

              {/* Pristine Authentic Screenshot (STRICT RULE: ZERO TEXT OVERLAYS) */}
              <div className="relative aspect-[16/10] sm:aspect-[16/9.5] w-full bg-slate-950 overflow-hidden">
                <Image
                  src={activeSector.previewImage}
                  alt={activeSector.previewTitle}
                  fill
                  className="object-cover object-top transition-transform duration-700 ease-out hover:scale-102"
                  sizes="(max-width: 1024px) 100vw, 720px"
                  priority
                />
              </div>

              {/* Bottom Browser Bar showing reference name */}
              <div className="px-3.5 py-2 bg-[#060B22] border-t border-white/10 flex items-center justify-between text-[11px] text-slate-300">
                <span className="font-bold text-white truncate">{activeSector.previewTitle}</span>
                <span className="text-[10px] text-[#FFB020] font-bold uppercase tracking-wider shrink-0">
                  100% Fluid Responsive
                </span>
              </div>
            </div>

            {/* Custom Sector UX Journey Architecture Walkthrough */}
            <div className="space-y-2 pt-1">
              <div className="flex items-center justify-between text-[10px] font-black uppercase tracking-wider text-slate-500">
                <span>Engineered Sector Customer Journey:</span>
                <span className="text-[#B87A00]">4-Stage Frictionless Flow</span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {activeSector.uxJourneySteps.map((step, i) => (
                  <div
                    key={i}
                    className="p-2.5 rounded-xl bg-white border border-[#E2DBD0] space-y-1 shadow-2xs text-left"
                  >
                    <div className="text-[10px] font-mono font-black text-[#B87A00]">
                      Step {step.step}
                    </div>
                    <div className="text-[11px] font-bold text-[#0B1B3A] leading-snug">
                      {step.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column (5 cols): Sector Standards, Deliverables & Call to Action */}
          <div className="lg:col-span-5 p-5 sm:p-7 flex flex-col justify-between space-y-5 text-left">
            {/* Header & Problem Solving Narrative */}
            <div className="space-y-3">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#060B22] text-[#FFB020] text-[10px] font-black uppercase tracking-wider">
                {activeSector.icon}
                <span>Tailored Industry Architecture</span>
              </div>

              <h3 className="font-display font-black text-xl sm:text-2xl text-[#0B1B3A] tracking-tight leading-snug">
                {activeSector.headline}
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                {activeSector.executiveSummary}
              </p>

              {/* Core Friction Solved Card */}
              <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/25 space-y-1">
                <div className="text-[10px] font-black uppercase tracking-wider text-[#B87A00] flex items-center gap-1">
                  <Zap className="w-3 h-3 text-[#B87A00]" />
                  <span>Sector Friction Point Solved:</span>
                </div>
                <p className="text-[11px] text-slate-700 leading-snug">
                  {activeSector.coreFrictionSolved}
                </p>
              </div>
            </div>

            {/* 4 Crucial Sector Technical Standards */}
            <div className="space-y-2 pt-2 border-t border-slate-100">
              <div className="text-[10px] font-black uppercase tracking-wider text-slate-700">
                Core Technical &amp; Compliance Standards Included:
              </div>

              <div className="space-y-2">
                {activeSector.technicalStandards.map((std, i) => (
                  <div
                    key={i}
                    className="p-2.5 rounded-xl bg-[#FAF8F5] border border-[#E2DBD0] space-y-0.5 text-left"
                  >
                    <div className="flex items-center gap-1.5 font-bold text-[#0B1B3A] text-xs">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#B87A00] shrink-0" />
                      <span>{std.title}</span>
                    </div>
                    <p className="text-[10.5px] text-slate-500 leading-snug pl-5">
                      {std.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Included High-Value Deliverables */}
            <div className="space-y-1.5 pt-2 border-t border-slate-100">
              <div className="text-[10px] font-black uppercase tracking-wider text-slate-700">
                Key Sector Deliverables:
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-slate-700">
                {activeSector.popularFeatures.map((feat, i) => (
                  <div key={i} className="flex items-center gap-1.5 text-[11px]">
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span className="font-medium text-slate-800 truncate">{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Sector Specific Call to Action */}
            <div className="pt-3 border-t border-slate-100">
              <Link
                href="/get-a-quote"
                className="btn-luxury-gold btn-shimmer w-full py-3 px-5 rounded-xl text-xs font-black uppercase tracking-wider flex items-center justify-center gap-2 shadow-sm text-center cursor-pointer"
              >
                <span>Request {activeSector.shortLabel} Website Blueprint</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Global Sector Quick-Discovery Matrix (6 Cards) */}
      <div className="space-y-3">
        <div className="flex items-center justify-between text-left">
          <div className="text-xs font-black uppercase tracking-wider text-slate-700">
            Explore All 6 Specialized Domain Blueprints:
          </div>
          <span className="text-[11px] text-slate-500 font-bold hidden sm:inline">
            Click any sector to inspect its dedicated UX architecture
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5">
          {SECTORS.map((s) => {
            const isCurrent = s.id === activeSector.id;
            return (
              <button
                key={s.id}
                type="button"
                onClick={() => setSelectedSectorId(s.id)}
                className={cn(
                  "p-3 rounded-xl border text-left transition-all duration-200 cursor-pointer flex flex-col justify-between space-y-2 group",
                  isCurrent
                    ? "bg-[#060B22] text-white border-[#FFB020] shadow-sm ring-2 ring-[#FFB020]/20"
                    : "bg-white text-slate-800 border-[#E2DBD0] hover:border-slate-400 hover:bg-[#FAF8F5]"
                )}
              >
                <div className="flex items-center justify-between">
                  <div
                    className={cn(
                      "w-7 h-7 rounded-lg flex items-center justify-center",
                      isCurrent ? "bg-white/10 text-[#FFB020]" : "bg-[#060B22]/5 text-[#0B1B3A]"
                    )}
                  >
                    {s.icon}
                  </div>
                  {isCurrent && (
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  )}
                </div>

                <div>
                  <div
                    className={cn(
                      "text-xs font-bold truncate",
                      isCurrent ? "text-white" : "text-[#0B1B3A]"
                    )}
                  >
                    {s.shortLabel}
                  </div>
                  <div
                    className={cn(
                      "text-[10px] truncate",
                      isCurrent ? "text-slate-300" : "text-slate-500"
                    )}
                  >
                    {s.categoryTag}
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
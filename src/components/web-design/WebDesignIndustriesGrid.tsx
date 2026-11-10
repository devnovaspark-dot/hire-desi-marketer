"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Lock,
  Stethoscope,
  ShoppingBag,
  Cpu,
  Home,
  Briefcase,
  GraduationCap,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface SectorItem {
  id: string;
  shortLabel: string;
  name: string;
  icon: React.ReactNode;
  previewImage: string;
  previewUrl: string;
  categoryTag: string;
  metric: string;
  headline: string;
  description: string;
  keyFeatures: string[];
}

const SECTORS: SectorItem[] = [
  {
    id: "healthcare",
    shortLabel: "Healthcare",
    name: "Healthcare & Medical",
    icon: <Stethoscope className="w-3.5 h-3.5 text-[#FFB020]" />,
    previewImage: "/images/ref-onemedical.jpg",
    previewUrl: "onemedical.com/patient-portal",
    categoryTag: "HIPAA-Ready & Accessible",
    metric: "+140% Online Bookings",
    headline: "Patient-First Portals & Frictionless Scheduling",
    description:
      "HIPAA-compliant clinic websites and patient portals featuring real-time doctor scheduling, encrypted intake forms, and sub-second mobile speed.",
    keyFeatures: [
      "Real-Time Doctor Scheduling",
      "HIPAA-Encrypted Intake Forms",
      "EHR & Calendar API Sync",
    ],
  },
  {
    id: "ecommerce",
    shortLabel: "E-Commerce",
    name: "E-Commerce & DTC",
    icon: <ShoppingBag className="w-3.5 h-3.5 text-[#FFB020]" />,
    previewImage: "/images/ref-allbirds.jpg",
    previewUrl: "allbirds.com/storefront",
    categoryTag: "Shopify Plus & Headless",
    metric: "4.6% Avg. Checkout Conv.",
    headline: "High-Speed Storefronts Built for Maximum AOV",
    description:
      "Custom Shopify Plus and headless storefronts with sub-second catalog browsing, slide-out carts with free shipping bars, and 1-tap checkout.",
    keyFeatures: [
      "Sub-Second Edge Product Pages",
      "Slide-Out Cart with Upsells",
      "1-Tap Apple Pay / Shop Pay",
    ],
  },
  {
    id: "saas",
    shortLabel: "SaaS & Cloud",
    name: "IT, SaaS & Cloud",
    icon: <Cpu className="w-3.5 h-3.5 text-[#FFB020]" />,
    previewImage: "/images/ref-linear.jpg",
    previewUrl: "linear.app/craft",
    categoryTag: "Modern Developer UI",
    metric: "3.8x Free-to-Paid Lift",
    headline: "Product Marketing Sites & Developer Hubs",
    description:
      "Dark-mode-native product websites with interactive UI feature tours, live code snippets, interactive pricing sliders, and 60-second sign-up flows.",
    keyFeatures: [
      "Interactive Product Demos",
      "Dynamic Pricing Sliders",
      "Fast 60s Onboarding Funnels",
    ],
  },
  {
    id: "realestate",
    shortLabel: "Real Estate",
    name: "Real Estate & Property",
    icon: <Home className="w-3.5 h-3.5 text-[#FFB020]" />,
    previewImage: "/images/journal-desk-hero.webp",
    previewUrl: "luxuryestates.hdm.preview/listings",
    categoryTag: "MLS / IDX Integration",
    metric: "3.2x Buyer Inquiries",
    headline: "Luxury Brokerage & Commercial Portals",
    description:
      "High-end property portals featuring automated MLS/IDX synchronization, interactive neighborhood map discovery, virtual 3D tour embeds, and private viewing schedulers.",
    keyFeatures: [
      "Automated MLS / IDX Sync",
      "Interactive Map Search",
      "VIP Viewing Concierge",
    ],
  },
  {
    id: "professional-services",
    shortLabel: "B2B Advisory",
    name: "Professional Services",
    icon: <Briefcase className="w-3.5 h-3.5 text-[#FFB020]" />,
    previewImage: "/images/ref-mckinsey.jpg",
    previewUrl: "mckinsey.com/insights",
    categoryTag: "Executive Authority",
    metric: "+180% Qualified RFPs",
    headline: "Corporate Authority & High-Ticket Lead Engines",
    description:
      "Editorial corporate presences that convey prestige, showcase proprietary methodologies and case study metrics, and route high-ticket enterprise inquiries.",
    keyFeatures: [
      "Executive Case Study Portfolios",
      "Gated Research & RFP Capture",
      "Direct Partner Calendar Sync",
    ],
  },
  {
    id: "education",
    shortLabel: "Education",
    name: "Education & Academies",
    icon: <GraduationCap className="w-3.5 h-3.5 text-[#FFB020]" />,
    previewImage: "/images/blog-hero-bg.webp",
    previewUrl: "academy.hdm.preview/courses",
    categoryTag: "LMS & Video Streaming",
    metric: "68% Course Completion",
    headline: "E-Learning Academies & Course Portals",
    description:
      "Interactive LMS platforms featuring structured curriculum directories, video streaming CDN integrations, student dashboards, and frictionless enrollment funnels.",
    keyFeatures: [
      "Interactive Syllabus Viewer",
      "Buffer-Free Video Streaming CDN",
      "1-Click Student Enrollment",
    ],
  },
];

export function WebDesignIndustriesGrid() {
  const [selectedSectorId, setSelectedSectorId] = useState<string>("healthcare");

  const activeSector =
    SECTORS.find((s) => s.id === selectedSectorId) || SECTORS[0];

  return (
    <div className="space-y-5 max-w-4xl mx-auto text-left">
      {/* 1. Compact Sector Switcher Ribbon */}
      <div className="flex items-center justify-center gap-1.5 sm:gap-2 overflow-x-auto pb-1 no-scrollbar">
        {SECTORS.map((sector) => {
          const isSelected = sector.id === activeSector.id;

          return (
            <button
              key={sector.id}
              type="button"
              onClick={() => setSelectedSectorId(sector.id)}
              className={cn(
                "px-3 sm:px-4 py-1.5 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer select-none inline-flex items-center gap-1.5 shrink-0 border",
                isSelected
                  ? "bg-[#060B22] text-[#FFB020] border-[#FFB020] shadow-xs ring-1 ring-[#FFB020]/30"
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

      {/* 2. Compact, Minimalist Showcase Card */}
      <div className="rounded-2xl bg-white border border-[#E2DBD0] shadow-xs overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-0 items-stretch">
          {/* Left Column (6 cols): Compact Browser Frame (STRICT ZERO TEXT OVERLAY) */}
          <div className="md:col-span-6 p-4 sm:p-5 bg-[#FAF8F5] border-b md:border-b-0 md:border-r border-[#E2DBD0] flex flex-col justify-center">
            <div className="rounded-xl overflow-hidden border border-[#060B22]/15 shadow-sm bg-white">
              {/* Browser Header Bar */}
              <div className="h-7 bg-[#060B22] px-3 flex items-center justify-between border-b border-white/10">
                <div className="flex items-center gap-1.5 shrink-0">
                  <div className="w-2 h-2 rounded-full bg-[#FF5F56]" />
                  <div className="w-2 h-2 rounded-full bg-[#FFBD2E]" />
                  <div className="w-2 h-2 rounded-full bg-[#27C93F]" />
                </div>

                <div className="flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-white/10 border border-white/15 text-[9.5px] text-slate-200 font-mono truncate max-w-[190px]">
                  <Lock className="w-2 h-2 text-emerald-400 shrink-0" />
                  <span className="truncate">{activeSector.previewUrl}</span>
                </div>

                <span className="text-[8.5px] text-[#FFB020] font-bold uppercase tracking-wider">
                  Live
                </span>
              </div>

              {/* Pristine Authentic Screenshot (NO OVERLAY TEXT) */}
              <div className="relative aspect-[16/10] w-full bg-slate-950 overflow-hidden">
                <Image
                  src={activeSector.previewImage}
                  alt={`${activeSector.name} website preview`}
                  fill
                  className="object-cover object-top transition-transform duration-500 ease-out hover:scale-102"
                  sizes="(max-width: 768px) 100vw, 450px"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Right Column (6 cols): Clean, Compact Specs & CTA */}
          <div className="md:col-span-6 p-4 sm:p-5 flex flex-col justify-between space-y-3">
            <div className="space-y-2.5">
              {/* Badges: Tag & Metric */}
              <div className="flex items-center justify-between gap-2">
                <span className="text-[9.5px] font-black uppercase tracking-wider text-[#B87A00] bg-[#FFB020]/15 px-2 py-0.5 rounded-full border border-[#FFB020]/30">
                  {activeSector.categoryTag}
                </span>

                <span className="text-[9.5px] font-black text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                  {activeSector.metric}
                </span>
              </div>

              {/* Heading & Clean Description */}
              <div>
                <h3 className="font-display font-bold text-base sm:text-lg text-[#0B1B3A] tracking-tight leading-snug">
                  {activeSector.headline}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-normal mt-1">
                  {activeSector.description}
                </p>
              </div>

              {/* 3 Key Deliverables */}
              <div className="pt-2 border-t border-slate-100 space-y-1">
                <div className="text-[9.5px] font-black uppercase tracking-wider text-slate-500">
                  Included Capabilities:
                </div>
                <div className="space-y-1 text-xs">
                  {activeSector.keyFeatures.map((feat, i) => (
                    <div key={i} className="flex items-center gap-1.5 text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#B87A00] shrink-0" />
                      <span className="font-medium text-[11px] sm:text-xs">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Direct Minimalist Action Button */}
            <div className="pt-2 border-t border-slate-100">
              <Link
                href="/get-a-quote"
                className="btn-luxury-navy w-full py-2.5 px-4 rounded-xl text-xs font-black uppercase tracking-wider flex items-center justify-center gap-2 shadow-2xs cursor-pointer text-center"
              >
                <span>Request {activeSector.shortLabel} Blueprint</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#FFB020]" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

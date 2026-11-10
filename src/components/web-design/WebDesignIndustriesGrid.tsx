"use client";

import React, { useState, useRef } from "react";
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
  ShieldCheck,
  ChevronDown,
  Plane,
  Factory,
  ChevronLeft,
  ChevronRight,
  Layers,
} from "lucide-react";
import { cn } from "@/lib/utils";
import StarBorder from "@/components/ui/StarBorder";
import FlexCarousel, {
  FlexCarouselHandle,
  CarouselItem,
} from "@/components/ui/FlexCarousel";

interface SectorItem {
  id: string;
  shortLabel: string;
  name: string;
  icon: React.ReactNode;
  previewImage: string;
  previewUrl: string;
  categoryTag: string;
  metric: string;
  complianceSla: string;
  headline: string;
  description: string;
  keyFeatures: string[];
  moreFeatures?: string[];
}

const SECTORS: SectorItem[] = [
  {
    id: "healthcare",
    shortLabel: "Healthcare",
    name: "Healthcare & Medical",
    icon: <Stethoscope className="w-4 h-4 text-[#FFB020]" />,
    previewImage: "/images/ref-onemedical.jpg",
    previewUrl: "onemedical.com/patient-portal",
    categoryTag: "HIPAA-Ready & Accessible",
    metric: "+140% Online Bookings",
    complianceSla: "HIPAA & ADA WCAG 2.1 Compliant",
    headline: "Patient-First Portals & Frictionless Scheduling",
    description:
      "HIPAA-compliant clinic websites and patient portals featuring real-time doctor scheduling, encrypted intake forms, and sub-second mobile speed.",
    keyFeatures: [
      "Real-Time Doctor Scheduling Engine",
      "HIPAA-Encrypted Patient Intake Forms",
      "EHR & Google Calendar Two-Way Sync",
    ],
    moreFeatures: [
      "Automated SMS Appointment Reminders",
      "Telehealth Virtual Waiting Room Embed",
      "Insurance Eligibility Pre-Check Funnel",
    ],
  },
  {
    id: "ecommerce",
    shortLabel: "E-Commerce",
    name: "E-Commerce & DTC",
    icon: <ShoppingBag className="w-4 h-4 text-[#FFB020]" />,
    previewImage: "/images/ref-allbirds.jpg",
    previewUrl: "allbirds.com/storefront",
    categoryTag: "Shopify Plus & Headless",
    metric: "4.6% Avg. Checkout Conv.",
    complianceSla: "PCI-DSS Level 1 & SOC-2",
    headline: "High-Speed Storefronts Built for Maximum AOV",
    description:
      "Custom Shopify Plus and headless storefronts with sub-second catalog browsing, slide-out carts with free shipping bars, and 1-tap checkout.",
    keyFeatures: [
      "Sub-Second Edge Product Catalog Pages",
      "Instant Slide-Out Micro-Cart with Upsells",
      "1-Tap Apple Pay, Shop Pay & Stripe Checkout",
    ],
    moreFeatures: [
      "Dynamic Multi-Currency Geolocation",
      "Automated ERP & Inventory Webhook Sync",
      "Klaviyo Abandoned Cart API Triggers",
    ],
  },
  {
    id: "saas",
    shortLabel: "SaaS & Cloud",
    name: "IT, SaaS & Cloud",
    icon: <Cpu className="w-4 h-4 text-[#FFB020]" />,
    previewImage: "/images/ref-linear.jpg",
    previewUrl: "linear.app/craft",
    categoryTag: "Modern Developer UI",
    metric: "3.8x Free-to-Paid Lift",
    complianceSla: "SOC-2 Type II & GDPR Ready",
    headline: "Product Marketing Sites & Developer Hubs",
    description:
      "Dark-mode-native product websites with interactive UI feature tours, live code snippets, interactive pricing sliders, and 60-second sign-up flows.",
    keyFeatures: [
      "Interactive Product Demo Walkthroughs",
      "Dynamic Tiered Pricing Calculators",
      "Fast 60s Developer Onboarding Funnels",
    ],
    moreFeatures: [
      "Automated GitHub & Figma Asset Sync",
      "Self-Serve Team Seat Expansion Flows",
      "Interactive API Documentation Playground",
    ],
  },
  {
    id: "realestate",
    shortLabel: "Real Estate",
    name: "Real Estate & Property",
    icon: <Home className="w-4 h-4 text-[#FFB020]" />,
    previewImage: "/images/journal-desk-hero.webp",
    previewUrl: "luxuryestates.hdm.preview/listings",
    categoryTag: "MLS / IDX Integration",
    metric: "3.2x Buyer Inquiries",
    complianceSla: "RETS / RESO Web API Certified",
    headline: "Luxury Brokerage & Commercial Portals",
    description:
      "High-end property portals featuring automated MLS/IDX synchronization, interactive neighborhood map discovery, virtual 3D tour embeds, and private viewing schedulers.",
    keyFeatures: [
      "Automated RETS/RESO MLS/IDX Sync",
      "Interactive Neighborhood Map Search",
      "VIP Private Viewing Concierge Scheduler",
    ],
    moreFeatures: [
      "Interactive Mortgage & Tax Calculators",
      "Virtual 3D Matterport Walkthrough Embeds",
      "Automated Buyer Lead Scoring to CRM",
    ],
  },
  {
    id: "professional-services",
    shortLabel: "B2B Advisory",
    name: "Professional Services",
    icon: <Briefcase className="w-4 h-4 text-[#FFB020]" />,
    previewImage: "/images/ref-mckinsey.jpg",
    previewUrl: "mckinsey.com/insights",
    categoryTag: "Executive Authority",
    metric: "+180% Qualified RFPs",
    complianceSla: "Enterprise NDA & Bilateral Security",
    headline: "Corporate Authority & High-Ticket Lead Engines",
    description:
      "Editorial corporate presences that convey prestige, showcase proprietary methodologies and case study metrics, and route high-ticket enterprise inquiries.",
    keyFeatures: [
      "Executive Case Study & Methodology Hub",
      "Gated Industry Research & RFP Capture",
      "Direct Senior Partner Calendar Integration",
    ],
    moreFeatures: [
      "Whitepaper PDF Lead Generation Gating",
      "Interactive ROI Assessment Calculators",
      "Account-Based Marketing (ABM) Landers",
    ],
  },
  {
    id: "education",
    shortLabel: "Education",
    name: "Education & Academies",
    icon: <GraduationCap className="w-4 h-4 text-[#FFB020]" />,
    previewImage: "/images/blog-hero-bg.webp",
    previewUrl: "academy.hdm.preview/courses",
    categoryTag: "LMS & Video Streaming",
    metric: "68% Course Completion",
    complianceSla: "FERPA & COPPA Educational Compliance",
    headline: "E-Learning Academies & Course Portals",
    description:
      "Interactive LMS platforms featuring structured curriculum directories, video streaming CDN integrations, student dashboards, and frictionless enrollment funnels.",
    keyFeatures: [
      "Interactive Syllabus & Course Directory",
      "Buffer-Free Video Streaming CDN Player",
      "1-Click Student Enrollment & Payment",
    ],
    moreFeatures: [
      "Student Progress Tracking & Quizzes",
      "Automated PDF Certificate Generation",
      "Cohort Community & Discussion Forum",
    ],
  },
  {
    id: "fintech",
    shortLabel: "Finance & Wealth",
    name: "FinTech & Wealth Advisory",
    icon: <ShieldCheck className="w-4 h-4 text-[#FFB020]" />,
    previewImage: "/images/1200_1000px.webp",
    previewUrl: "wealthadvisors.hdm.preview",
    categoryTag: "Bank-Grade Encryption",
    metric: "99.99% Audit Score",
    complianceSla: "FINRA / SEC Regulatory Compliant",
    headline: "Trust-Centric Wealth & Advisory Platforms",
    description:
      "Ultra-secure, regulatory-compliant web portals for asset managers, accounting practices, and fintech startups requiring institutional trust.",
    keyFeatures: [
      "Bank-Grade 256-bit Encrypted Client Portals",
      "Interactive Retirement & Tax Calculators",
      "FINRA/SEC Compliant Archival Logging",
    ],
    moreFeatures: [
      "Secure Document Vault with E-Sign",
      "Biometric Two-Factor Authentication",
      "Real-Time Portfolio Value Telemetry",
    ],
  },
  {
    id: "hospitality",
    shortLabel: "Travel & Hospitality",
    name: "Boutique Hotels & Travel",
    icon: <Plane className="w-4 h-4 text-[#FFB020]" />,
    previewImage: "/images/case-study-cafe.webp",
    previewUrl: "luxurytravel.hdm.preview",
    categoryTag: "Direct Booking Engine",
    metric: "+220% Direct Bookings",
    complianceSla: "OTA Direct Sync & Zero Commission",
    headline: "Visual Travel Portals & Direct Booking Engines",
    description:
      "Visual storytelling websites for boutique hotels, resorts, and tour operators with integrated reservation calendars that bypass expensive OTA commissions.",
    keyFeatures: [
      "Direct Commission-Free Reservation Engine",
      "Dynamic Seasonal Pricing & Add-on Upsells",
      "Multi-Language & Multi-Currency Switcher",
    ],
    moreFeatures: [
      "Instagram Live Story Integration",
      "Interactive Local Itinerary Guide",
      "1-Tap WhatsApp Concierge Routing",
    ],
  },
  {
    id: "manufacturing",
    shortLabel: "Industrial",
    name: "Manufacturing & Industrial",
    icon: <Factory className="w-4 h-4 text-[#FFB020]" />,
    previewImage: "/images/case-study-roofing.webp",
    previewUrl: "industrial-corp.hdm.preview",
    categoryTag: "B2B RFQ & Spec Catalogs",
    metric: "+165% Wholesale RFQs",
    complianceSla: "ISO 9001 Specification Compliant",
    headline: "B2B Product Catalogs & Bulk RFQ Engines",
    description:
      "Enterprise industrial websites featuring searchable technical spec sheets, CAD file downloads, multi-location distributor locators, and bulk quote builders.",
    keyFeatures: [
      "Searchable Technical Spec & CAD Downloads",
      "Custom Bulk RFQ (Request for Quote) Builder",
      "Global Distributor & Dealer Locator Map",
    ],
    moreFeatures: [
      "ERP Inventory Availability Lookups",
      "Automated Wholesale Tier Pricing",
      "Customer Portal for Re-Order Tracking",
    ],
  },
];

const CAROUSEL_ITEMS: CarouselItem[] = SECTORS.map((s) => ({
  src: s.previewImage,
  alt: `${s.name} specialized domain blueprint`,
  title: s.name,
  subtitle: s.categoryTag,
  id: s.id,
}));

export function WebDesignIndustriesGrid() {
  const [selectedSectorId, setSelectedSectorId] = useState<string>("healthcare");
  const [showAllSectors, setShowAllSectors] = useState<boolean>(false);
  const [showMoreSpecs, setShowMoreSpecs] = useState<boolean>(false);
  const carouselRef = useRef<FlexCarouselHandle>(null);

  const activeSector =
    SECTORS.find((s) => s.id === selectedSectorId) || SECTORS[0];

  const displayedSectors = showAllSectors ? SECTORS : SECTORS.slice(0, 5);

  const handleSectorSelect = (sectorId: string) => {
    setSelectedSectorId(sectorId);
    const index = SECTORS.findIndex((s) => s.id === sectorId);
    if (index !== -1) {
      carouselRef.current?.goTo(index);
    }
  };

  return (
    <div className="space-y-6 sm:space-y-8 max-w-7xl mx-auto text-left select-none">
      {/* ==================================================================== */}
      {/* 1. SECTOR SELECTOR RIBBON WITH "VIEW MORE / LESS" EXPAND BUTTON      */}
      {/* ==================================================================== */}
      <div className="space-y-3">
        <div className="flex flex-wrap items-center justify-center gap-2 transition-all duration-500">
          {displayedSectors.map((sector) => {
            const isSelected = sector.id === activeSector.id;

            return (
              <button
                key={sector.id}
                type="button"
                onClick={() => handleSectorSelect(sector.id)}
                className={cn(
                  "px-3.5 sm:px-4 py-2 rounded-full text-xs font-bold transition-all duration-300 cursor-pointer select-none inline-flex items-center gap-2 border",
                  isSelected
                    ? "bg-[#060B22] text-[#FFB020] border-[#FFB020] shadow-md ring-2 ring-[#FFB020]/25 scale-102"
                    : "bg-[#081232]/80 text-slate-300 border-white/10 hover:border-white/30 hover:bg-[#060B22]"
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

        {/* View More / View Less Toggle Button */}
        <div className="flex items-center justify-center pt-1">
          <button
            type="button"
            onClick={() => setShowAllSectors(!showAllSectors)}
            className="px-4 py-1.5 rounded-full bg-[#081232] border border-white/10 hover:border-[#FFB020] text-xs font-bold text-slate-300 hover:text-white inline-flex items-center gap-1.5 shadow-xs transition-all duration-300 cursor-pointer group"
          >
            <span>
              {showAllSectors
                ? "View Fewer Sectors"
                : `View More Sectors (${SECTORS.length - 5} More)`}
            </span>
            <ChevronDown
              className={cn(
                "w-3.5 h-3.5 text-[#FFB020] transition-transform duration-300",
                showAllSectors && "rotate-180"
              )}
            />
          </button>
        </div>
      </div>

      {/* ==================================================================== */}
      {/* 2. FLEX CAROUSEL SHOWCASE THEATER (LIQUID GLASS WEBGL2 SHADER)       */}
      {/* ==================================================================== */}
      <div className="rounded-3xl bg-gradient-to-b from-[#060B22] to-[#081232] border border-[#FFB020]/25 shadow-2xl overflow-hidden relative">
        {/* macOS Minimalist Browser Header Bar with Navigation Controls */}
        <div className="h-10 bg-[#040817] px-4 flex items-center justify-between border-b border-white/10">
          <div className="flex items-center gap-2 shrink-0">
            <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />

            <div className="hidden sm:flex items-center gap-1 ml-3 border-l border-white/10 pl-3">
              <button
                type="button"
                onClick={() => carouselRef.current?.prev()}
                className="w-6 h-6 rounded-md bg-white/5 hover:bg-white/15 flex items-center justify-center text-slate-300 hover:text-white transition-colors cursor-pointer"
                aria-label="Previous blueprint"
              >
                <ChevronLeft className="w-3.5 h-3.5" />
              </button>
              <button
                type="button"
                onClick={() => carouselRef.current?.next()}
                className="w-6 h-6 rounded-md bg-white/5 hover:bg-white/15 flex items-center justify-center text-slate-300 hover:text-white transition-colors cursor-pointer"
                aria-label="Next blueprint"
              >
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          <div className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/5 border border-white/10 text-[10.5px] text-slate-300 font-mono max-w-[280px] sm:max-w-[360px] truncate">
            <Lock className="w-2.5 h-2.5 text-emerald-400 shrink-0" />
            <span className="truncate">https://{activeSector.previewUrl}</span>
          </div>

          <div className="flex items-center gap-2 text-[10px] font-mono text-emerald-400 font-bold shrink-0">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="hidden sm:inline">Liquid Glass 60 FPS</span>
          </div>
        </div>

        {/* Liquid WebGL2 Flex Carousel Viewport */}
        <div className="h-[360px] sm:h-[420px] lg:h-[460px] w-full relative bg-[#060B22]">
          <FlexCarousel
            ref={carouselRef}
            items={CAROUSEL_ITEMS}
            preset="liquid"
            cardHeight={0.62}
            gap={16}
            radius={18}
            bend={0.34}
            reach={0.36}
            dispersion={0.45}
            liquid={0.12}
            squeeze={0.2}
            captions={true}
            focusOnClick={true}
            onChange={(index) => {
              if (SECTORS[index]) {
                setSelectedSectorId(SECTORS[index].id);
              }
            }}
            className="w-full h-full"
          />
        </div>

        {/* ==================================================================== */}
        {/* 3. ACTIVE DOMAIN SPECIFICATIONS & EXPANDABLE BLUEPRINT INCLUSIONS    */}
        {/* ==================================================================== */}
        <div className="p-5 sm:p-7 lg:p-8 bg-[#081232]/95 border-t border-white/10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Left Column (7 cols): Architecture Overview & SLA */}
            <div className="lg:col-span-7 space-y-3.5">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-[10px] font-black uppercase tracking-wider text-[#060B22] bg-[#FFB020] px-2.5 py-0.5 rounded-full font-mono shadow-xs">
                  {activeSector.categoryTag}
                </span>

                <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
                  {activeSector.metric}
                </span>
              </div>

              <h3 className="font-display font-black text-xl sm:text-2xl lg:text-3xl text-white tracking-tight leading-snug">
                {activeSector.headline}
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                {activeSector.description}
              </p>

              {/* Regulatory Compliance SLA Badge */}
              <div className="p-3 rounded-xl bg-[#060B22] border border-white/10 flex items-center gap-2.5 text-xs text-slate-200 font-semibold shadow-inner">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{activeSector.complianceSla}</span>
              </div>
            </div>

            {/* Right Column (5 cols): Capabilities Checklist & Action CTA */}
            <div className="lg:col-span-5 space-y-4 lg:border-l lg:border-white/10 lg:pl-6">
              <div className="space-y-2.5">
                <div className="flex items-center justify-between text-[11px] font-black uppercase tracking-wider text-slate-300">
                  <span>Industry-Specific Capabilities:</span>
                  <span className="text-[#FFB020] font-mono">
                    {showMoreSpecs ? "6 Inclusions" : "3 Inclusions"}
                  </span>
                </div>

                <div className="space-y-2 text-xs text-slate-200">
                  {activeSector.keyFeatures.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#FFB020] shrink-0 mt-0.5" />
                      <span className="font-medium text-[12px] leading-snug text-slate-200">
                        {feat}
                      </span>
                    </div>
                  ))}

                  {/* Additional Features Shown when "View More Specs" is Active */}
                  {showMoreSpecs &&
                    activeSector.moreFeatures &&
                    activeSector.moreFeatures.map((feat, i) => (
                      <div
                        key={`more-${i}`}
                        className="flex items-start gap-2 animate-in fade-in slide-in-from-top-1 duration-200"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span className="font-medium text-[12px] leading-snug text-slate-100">
                          {feat}
                        </span>
                      </div>
                    ))}
                </div>

                {/* View More / View Less Deliverables Toggle Button */}
                {activeSector.moreFeatures && (
                  <button
                    type="button"
                    onClick={() => setShowMoreSpecs(!showMoreSpecs)}
                    className="pt-1 text-[11.5px] font-bold text-[#FFB020] hover:text-white transition-colors cursor-pointer inline-flex items-center gap-1.5 group"
                  >
                    <span>
                      {showMoreSpecs
                        ? "View Fewer Deliverables ↑"
                        : "View More Deliverables (+3 More) ↓"}
                    </span>
                  </button>
                )}
              </div>

              {/* Direct Action Button with StarBorder */}
              <div className="pt-2">
                <StarBorder
                  as={Link}
                  href="/get-a-quote"
                  className="w-full py-3.5 px-5 rounded-xl text-xs font-black uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg cursor-pointer text-center group"
                  radius={12}
                  color="#FFB020"
                  trailColor="#38BDF8"
                  backgroundColor="#060B22"
                  textColor="#FFFFFF"
                  borderColor="rgba(255, 176, 32, 0.4)"
                  sparkle={true}
                  glow={0.8}
                >
                  <span>Request {activeSector.shortLabel} Blueprint</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#FFB020] group-hover:translate-x-1 transition-transform" />
                </StarBorder>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

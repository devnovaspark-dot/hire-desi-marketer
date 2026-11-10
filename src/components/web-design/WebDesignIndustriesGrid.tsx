"use client";

import React, { useState, useRef } from "react";
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
  ShieldCheck,
  ChevronDown,
  Building2,
  Plane,
  Factory,
  Check,
  Activity,
  Layers,
} from "lucide-react";
import { cn } from "@/lib/utils";
import StarBorder from "@/components/ui/StarBorder";

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

export function WebDesignIndustriesGrid() {
  const [selectedSectorId, setSelectedSectorId] = useState<string>("healthcare");
  const [showAllSectors, setShowAllSectors] = useState<boolean>(false);
  const [showMoreSpecs, setShowMoreSpecs] = useState<boolean>(false);
  const [mousePos, setMousePos] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const stageRef = useRef<HTMLDivElement>(null);

  const activeSector =
    SECTORS.find((s) => s.id === selectedSectorId) || SECTORS[0];

  // Show top 4 sectors initially; show all 9 when toggled
  const displayedSectors = showAllSectors ? SECTORS : SECTORS.slice(0, 4);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!stageRef.current) return;
    const rect = stageRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
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
                onClick={() => setSelectedSectorId(sector.id)}
                className={cn(
                  "px-3.5 sm:px-4 py-2 rounded-full text-xs font-bold transition-all duration-300 cursor-pointer select-none inline-flex items-center gap-2 border",
                  isSelected
                    ? "bg-[#060B22] text-[#FFB020] border-[#FFB020] shadow-md ring-2 ring-[#FFB020]/25 scale-102"
                    : "bg-white text-slate-700 border-[#E2DBD0] hover:border-slate-400 hover:bg-[#FAF8F5]"
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
            className="px-4 py-1.5 rounded-full bg-white border border-[#E2DBD0] hover:border-[#FFB020] text-xs font-bold text-slate-700 hover:text-[#0B1B3A] inline-flex items-center gap-1.5 shadow-2xs transition-all duration-300 cursor-pointer group"
          >
            <span>
              {showAllSectors
                ? "View Fewer Sectors"
                : `View More Sectors (${SECTORS.length - 4} More)`}
            </span>
            <ChevronDown
              className={cn(
                "w-3.5 h-3.5 text-[#B87A00] transition-transform duration-300",
                showAllSectors && "rotate-180"
              )}
            />
          </button>
        </div>
      </div>

      {/* ==================================================================== */}
      {/* 2. FULL-WIDTH PANORAMIC VISUAL SHOWCASE STUDIO                       */}
      {/* ==================================================================== */}
      <div className="rounded-2xl sm:rounded-3xl bg-white border border-[#E2DBD0] shadow-md overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
          {/* Visual Showcase (7 cols): Large Realistic 3D Browser Viewport */}
          <div
            ref={stageRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="lg:col-span-7 p-4 sm:p-6 lg:p-8 bg-[#FAF8F5] border-b lg:border-b-0 lg:border-r border-[#E2DBD0] flex flex-col justify-center"
            style={{
              perspective: "1400px",
            }}
          >
            <div
              className="rounded-2xl overflow-hidden border border-[#060B22]/20 shadow-xl bg-white transition-transform duration-500 ease-out"
              style={{
                transform: `rotateY(${mousePos.x * 4}deg) rotateX(${-mousePos.y * 4}deg)`,
                transformStyle: "preserve-3d",
              }}
            >
              {/* macOS Minimalist Browser Header Bar */}
              <div className="h-8 bg-[#060B22] px-3.5 flex items-center justify-between border-b border-white/10">
                <div className="flex items-center gap-1.5 shrink-0">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
                </div>

                <div className="flex items-center gap-1.5 px-3 py-0.5 rounded-md bg-white/10 border border-white/15 text-[10px] text-slate-200 font-mono max-w-[240px] sm:max-w-[300px] truncate">
                  <Lock className="w-2.5 h-2.5 text-emerald-400 shrink-0" />
                  <span className="truncate">https://{activeSector.previewUrl}</span>
                </div>

                <div className="flex items-center gap-1 text-[9.5px] font-mono text-emerald-400 font-bold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="hidden sm:inline">60 FPS</span>
                </div>
              </div>

              {/* Pristine Authentic Screenshot (STRICT ZERO TEXT OVERLAY) */}
              <div className="relative aspect-[16/10] sm:aspect-[16/9.5] w-full bg-slate-950 overflow-hidden">
                <Image
                  src={activeSector.previewImage}
                  alt={`${activeSector.name} bespoke digital blueprint preview`}
                  fill
                  className="object-cover object-top transition-transform duration-700 ease-out hover:scale-101"
                  sizes="(max-width: 1024px) 100vw, 750px"
                  priority
                />
              </div>

              {/* Bottom Frame Telemetry Strip */}
              <div className="px-4 py-2.5 bg-[#060B22] border-t border-white/10 flex items-center justify-between text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#FFB020]" />
                  <span className="font-bold text-white truncate">{activeSector.name}</span>
                </div>
                <span className="text-[10.5px] text-emerald-400 font-mono font-bold shrink-0">
                  {activeSector.metric}
                </span>
              </div>
            </div>
          </div>

          {/* Right Column (5 cols): Domain Specifications & Expandable Inclusions */}
          <div className="lg:col-span-5 p-5 sm:p-7 lg:p-8 flex flex-col justify-between space-y-5">
            <div className="space-y-3.5">
              <div className="flex items-center justify-between gap-2">
                <span className="text-[10px] font-black uppercase tracking-wider text-[#B87A00] bg-[#FFB020]/15 px-2.5 py-0.5 rounded-full border border-[#FFB020]/30 font-mono">
                  {activeSector.categoryTag}
                </span>

                <span className="text-xs font-mono font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                  {activeSector.metric}
                </span>
              </div>

              <h3 className="font-display font-black text-xl sm:text-2xl text-[#0B1B3A] tracking-tight leading-snug">
                {activeSector.headline}
              </h3>

              <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal">
                {activeSector.description}
              </p>

              {/* Regulatory Compliance SLA Badge */}
              <div className="p-2.5 rounded-xl bg-[#FAF8F5] border border-[#E2DBD0] flex items-center gap-2 text-[11px] text-slate-700 font-semibold">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>{activeSector.complianceSla}</span>
              </div>
            </div>

            {/* Included Capabilities List */}
            <div className="pt-2 border-t border-slate-100 space-y-2">
              <div className="flex items-center justify-between text-[10.5px] font-black uppercase tracking-wider text-slate-700">
                <span>Industry-Specific Capabilities:</span>
                <span className="text-[#B87A00] font-mono">
                  {showMoreSpecs ? "6 Inclusions" : "3 Inclusions"}
                </span>
              </div>

              <div className="space-y-1.5 text-xs text-slate-700">
                {activeSector.keyFeatures.map((feat, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#FFB020] shrink-0 mt-0.5" />
                    <span className="font-medium text-[11.5px] leading-snug">{feat}</span>
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
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="font-medium text-[11.5px] leading-snug text-slate-800">
                        {feat}
                      </span>
                    </div>
                  ))}
              </div>

              {/* View More / View Less Deliverables Toggle */}
              {activeSector.moreFeatures && (
                <button
                  type="button"
                  onClick={() => setShowMoreSpecs(!showMoreSpecs)}
                  className="pt-1 text-[11px] font-bold text-[#B87A00] hover:text-[#0B1B3A] transition-colors cursor-pointer inline-flex items-center gap-1"
                >
                  <span>
                    {showMoreSpecs
                      ? "View Fewer Deliverables ↑"
                      : "View More Deliverables (+3 More) ↓"}
                  </span>
                </button>
              )}
            </div>

            {/* Direct Action Button */}
            <div className="pt-2 border-t border-slate-100">
              <StarBorder
                as={Link}
                href="/get-a-quote"
                className="w-full py-3.5 px-5 rounded-xl text-xs font-black uppercase tracking-wider flex items-center justify-center gap-2 shadow-sm cursor-pointer text-center group"
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
  );
}

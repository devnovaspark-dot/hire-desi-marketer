import React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { VideoShowcase } from "@/components/sections/VideoShowcase";
import { QuickQuoteHeroBanner } from "@/components/sections/QuickQuoteHeroBanner";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { EngagementModels } from "@/components/sections/EngagementModels";
import { CostCalculator } from "@/components/sections/CostCalculator";
import { DedicatedTeams } from "@/components/sections/DedicatedTeams";
import { Services } from "@/components/sections/Services";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { TeamAvailability } from "@/components/sections/TeamAvailability";
import { Process } from "@/components/sections/Process";
import { TeamIntroduction } from "@/components/sections/TeamIntroduction";
import { Office } from "@/components/sections/Office";
import { QuoteForm } from "@/components/sections/QuoteForm";
import { FAQ } from "@/components/sections/FAQ";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#F6F4EE]">
      {/* Sticky Navigation Header */}
      <Header />

      <main id="main-content" className="flex-1">
        {/* 1. Signature Hero Section */}
        <Hero />

        {/* 1.5 Floating Quick Quote Banner (Matching Reference Image 1) */}
        <QuickQuoteHeroBanner />

        {/* 2. Trust & Credibility Strip (Matching Reference Image 1) */}
        <TrustStrip />

        {/* 2.5 Video Tour / In-House Campus Showcase (Fits in Single Window) */}
        <VideoShowcase />

        {/* The Team Behind Your Growth */}
        <TeamIntroduction />

        {/* 3. Engagement Models (Fits in 1 window) */}
        <EngagementModels />

        {/* 3.5 Interactive Hourly Cost Calculator (Standalone 1 window) */}
        <section id="calculator" className="py-6 lg:py-8 bg-[#F5F2EB] border-t border-[#DED7CA] scroll-mt-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <CostCalculator />
          </div>
        </section>

        {/* 4. Dedicated Teams & Comparison Matrix */}
        <DedicatedTeams />

        {/* 5. Services & 2026 Tech Stack */}
        <Services />

        {/* 6. Case Studies & Portfolio */}
        <CaseStudies />

        {/* 7. Live International Time Zones & Availability */}
        <TeamAvailability />

        {/* 8. Process — How We Work */}
        <Process />

        {/* 10. Physical Office in India */}
        <Office />

        {/* 11. Quote Request & Conversion Section */}
        <QuoteForm />

        {/* 12. FAQ Accordion */}
        <FAQ />
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}

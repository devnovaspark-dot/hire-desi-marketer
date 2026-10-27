import React from "react";
import { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { QuoteFormPageClient } from "@/components/sections/QuoteFormPageClient";

export const metadata: Metadata = {
  title: "Get a Quote | Request Your Free Marketing Plan | Hire Desi Marketer",
  description:
    "Tell us about your brand and growth goals. We will prepare an in-depth audit, a 90-day execution roadmap, and a transparent quote tailored to your budget.",
  alternates: {
    canonical: "https://www.hiredesimarketer.com/get-a-quote",
  },
  openGraph: {
    title: "Get a Quote | Request Your Free Marketing Plan | Hire Desi Marketer",
    description:
      "Tell us about your brand and growth goals. We will prepare an in-depth audit, a 90-day execution roadmap, and a transparent quote tailored to your budget.",
    url: "https://www.hiredesimarketer.com/get-a-quote",
    images: ["/images/1200_1000px.webp"],
  },
};

export default function GetAQuotePage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#FAF8F5] text-[#0B1B3A] selection:bg-[#FFB020] selection:text-[#060B22]">
      {/* Sticky Global Navigation Header */}
      <Header />

      {/* Main Form Page Stage */}
      <main className="flex-1 pt-24 sm:pt-28 lg:pt-32 pb-14 sm:pb-18 lg:pb-20">
        <QuoteFormPageClient />
      </main>

      {/* Global Comprehensive Footer */}
      <Footer />
    </div>
  );
}

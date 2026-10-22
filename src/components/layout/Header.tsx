"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowRight, Sparkles, Shield, Clock } from "lucide-react";
import { cn } from "@/lib/utils";
import { BrandLogo } from "@/components/ui/BrandLogo";

const NAV_LINKS = [
  { label: "Pricing", href: "#pricing" },
  { label: "Squads", href: "#teams" },
  { label: "Tech Stack", href: "#stack" },
  { label: "Case Studies", href: "#work" },
  { label: "Bhubaneswar HQ", href: "#office" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState<string>("#pricing");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Automatic scroll spy for active section highlight
      const sectionIds = NAV_LINKS.map((l) => l.href.replace("#", ""));
      const scrollPos = window.scrollY + 140;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const sec = document.getElementById(sectionIds[i]);
        if (sec) {
          const top = sec.offsetTop;
          if (scrollPos >= top) {
            setActiveNav(`#${sectionIds[i]}`);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle escape key to close mobile menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileMenuOpen(false);
    };

    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [mobileMenuOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      setActiveNav(href);
      const targetId = href.replace("#", "");
      const element = document.getElementById(targetId);
      if (element) {
        const headerOffset = 85;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
        window.history.replaceState(null, "", href);
      }
    }
  };

  return (
    <>
      {/* Floating Island Navigation Container */}
      <header className="fixed top-3 sm:top-5 inset-x-0 z-50 px-3 sm:px-6 pointer-events-none flex justify-center">
        <div
          className={cn(
            "pointer-events-auto w-full max-w-6xl rounded-full transition-[background-color,box-shadow,border-color] duration-200 flex items-center justify-between",
            "bg-[#060B22]/95 backdrop-blur-2xl border border-white/20 py-1.5 sm:py-2 px-3 sm:px-6",
            isScrolled
              ? "shadow-[0_25px_60px_rgba(0,0,0,0.85),inset_0_1px_1px_rgba(255,255,255,0.25)] border-white/30"
              : "shadow-[0_20px_45px_rgba(0,0,0,0.65),inset_0_1px_1px_rgba(255,255,255,0.2)]"
          )}
        >
          {/* Authentic Real HDM Logo */}
          <Link
            href="/"
            className="flex items-center group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFB020] rounded-full p-1"
            aria-label="Hire Desi Marketer Home"
          >
            <BrandLogo size="md" />
          </Link>

          {/* Center Navigation Links - Zero Layout Shift with Uniform Font Weight */}
          <nav
            aria-label="Main Navigation"
            className="hidden md:flex items-center gap-1 sm:gap-2"
          >
            {NAV_LINKS.map((link) => {
              const isActive = activeNav === link.href;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={cn(
                    "px-3.5 py-1.5 text-xs lg:text-[13px] font-extrabold rounded-full transition-all duration-150 cursor-pointer select-none",
                    "focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFB020]",
                    isActive
                      ? "bg-[#030614] text-[#FFB020] border border-[#FFB020]/50 shadow-[inset_0_2px_6px_rgba(0,0,0,0.95),inset_0_-1px_1px_rgba(255,255,255,0.08)]"
                      : "text-slate-300 hover:text-white hover:bg-white/5 border border-transparent active:bg-[#030614] active:text-[#FFB020] active:shadow-[inset_0_2px_5px_rgba(0,0,0,0.95)]"
                  )}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Desktop Right Action */}
          <div className="hidden md:flex items-center gap-3">
            {/* Shimmering 3D Luxury CTA Button - Sleek & Refined */}
            <a
              href="#quote"
              onClick={(e) => handleNavClick(e, "#quote")}
              className="btn-luxury-gold btn-shimmer px-4 py-2 rounded-full text-[11px] font-black uppercase tracking-wider inline-flex items-center gap-1.5 group cursor-pointer shadow-md"
            >
              <span>Get a Free Quote</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform stroke-[2.5]" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? "Close main menu" : "Open main menu"}
            className="md:hidden p-2 text-white hover:text-[#FFB020] rounded-full hover:bg-white/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFB020]"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6 text-white" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 md:hidden bg-[#040716]/98 backdrop-blur-2xl flex flex-col justify-between p-6 animate-in fade-in duration-200"
        >
          <div className="flex items-center justify-between pb-6 border-b border-white/10">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center"
            >
              <BrandLogo size="md" />
            </Link>
            <button
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
              className="p-2 rounded-xl text-slate-300 hover:text-white hover:bg-white/10"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <nav className="flex flex-col gap-3 py-6">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  setMobileMenuOpen(false);
                  handleNavClick(e, link.href);
                }}
                className="text-xl font-display font-bold text-white hover:text-[#FFB020] transition-colors py-2.5 flex items-center justify-between border-b border-white/5"
              >
                <span>{link.label}</span>
                <ArrowRight className="w-5 h-5 text-slate-400" />
              </a>
            ))}
          </nav>

          <div className="flex flex-col gap-4 pt-4 border-t border-white/10">
            <div className="flex items-center gap-2 text-xs text-slate-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Bhubaneswar HQ Online · Dedicated Western Shifts</span>
            </div>
            <a
              href="#quote"
              onClick={(e) => {
                setMobileMenuOpen(false);
                handleNavClick(e, "#quote");
              }}
              className="btn-luxury-gold btn-shimmer py-3 px-4 rounded-xl text-center text-xs font-black uppercase tracking-wider flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4" />
              <span>Get Free 90-Day Plan &amp; Quote</span>
            </a>
          </div>
        </div>
      )}
    </>
  );
}

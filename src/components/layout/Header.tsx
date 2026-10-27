"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight, Sparkles, Shield, Clock } from "lucide-react";
import { cn } from "@/lib/utils";
import { BrandLogo } from "@/components/ui/BrandLogo";

const NAV_LINKS = [
  { label: "About Us", href: "#about" },
  { label: "Squads", href: "#teams" },
  { label: "Tech Stack", href: "#stack" },
  { label: "Case Studies", href: "#work" },
  { label: "Blog", href: "/blog" },
  { label: "Contact Us", href: "#contact" },
];

const SPY_SECTIONS: { id: string; href: string }[] = [
  { id: "about", href: "#about" },
  { id: "teams", href: "#teams" },
  { id: "stack", href: "#stack" },
  { id: "work", href: "#work" },
  { id: "contact", href: "#contact" },
];

export function Header() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState<string>(isHomePage ? "#about" : "/blog");

  const isClickScrollingRef = useRef(false);
  const scrollTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Sync activeNav with URL hash on initial load
  useEffect(() => {
    if (typeof window !== "undefined" && isHomePage && window.location.hash) {
      const hash = window.location.hash;
      const validHashes = SPY_SECTIONS.map((s) => s.href);
      if (validHashes.includes(hash)) {
        setActiveNav(hash);
      }
    }
  }, [isHomePage]);

  useEffect(() => {
    if (!isHomePage) {
      if (pathname.startsWith("/blog")) {
        setActiveNav("/blog");
      }
      return;
    }

    const handleManualScrollStart = () => {
      // If user manually touches screen or scrolls with wheel, release click lock
      isClickScrollingRef.current = false;
      if (scrollTimerRef.current) clearTimeout(scrollTimerRef.current);
    };

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Prevent scroll-spy from jumping/bouncing through intermediate tabs while smooth scrolling to clicked tab
      if (isClickScrollingRef.current) {
        return;
      }

      // 1. If at bottom of page, always highlight Contact Us
      const isNearBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 120;
      if (isNearBottom) {
        setActiveNav("#contact");
        return;
      }

      // 2. If near top of page (Hero / Intro), highlight "#about"
      if (window.scrollY < 350) {
        setActiveNav("#about");
        return;
      }

      // 3. Continuous threshold detection (zero blind spots between sections)
      // Inspect line at 200px from top of viewport (directly under floating header)
      const scrollOffset = window.scrollY + 200;

      let matchedNav = "#about";
      for (const { id, href } of SPY_SECTIONS) {
        const el = document.getElementById(id);
        if (el) {
          const elTop = el.getBoundingClientRect().top + window.scrollY;
          if (scrollOffset >= elTop) {
            matchedNav = href;
          }
        }
      }

      setActiveNav(matchedNav);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("wheel", handleManualScrollStart, { passive: true });
    window.addEventListener("touchstart", handleManualScrollStart, { passive: true });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("wheel", handleManualScrollStart);
      window.removeEventListener("touchstart", handleManualScrollStart);
      if (scrollTimerRef.current) clearTimeout(scrollTimerRef.current);
    };
  }, [isHomePage, pathname]);

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
      if (!isHomePage) {
        // Allow normal navigation back to home page with hash
        return;
      }
      e.preventDefault();
      
      // 1. Instantly set the clicked tab as active
      setActiveNav(href);
      isClickScrollingRef.current = true;

      // 2. Lock scroll-spy during smooth scroll (up to 1200ms for full-page traversal)
      if (scrollTimerRef.current) {
        clearTimeout(scrollTimerRef.current);
      }
      scrollTimerRef.current = setTimeout(() => {
        isClickScrollingRef.current = false;
      }, 1200);

      // 3. Smooth scroll to target section with floating header clearance
      const targetId = href.replace("#", "");
      const element = document.getElementById(targetId);
      if (element) {
        const headerOffset = 85;
        const elementPosition = element.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = Math.max(0, elementPosition - headerOffset);

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
              const isAnchor = link.href.startsWith("#");
              const targetHref = isAnchor && !isHomePage ? `/${link.href}` : link.href;
              const isActive = isAnchor
                ? isHomePage && activeNav === link.href
                : pathname === link.href || pathname.startsWith(`${link.href}/`);

              return (
                <Link
                  key={link.label}
                  href={targetHref}
                  onClick={(e) => isAnchor ? handleNavClick(e as unknown as React.MouseEvent<HTMLAnchorElement>, link.href) : undefined}
                  className={cn(
                    "px-3.5 py-1.5 text-xs lg:text-[13px] font-extrabold rounded-full transition-all duration-150 cursor-pointer select-none",
                    "focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFB020]",
                    isActive
                      ? "bg-[#030614] text-[#FFB020] border border-[#FFB020]/50 shadow-[inset_0_2px_6px_rgba(0,0,0,0.95),inset_0_-1px_1px_rgba(255,255,255,0.08)]"
                      : "text-slate-300 hover:text-white hover:bg-white/5 border border-transparent active:bg-[#030614] active:text-[#FFB020] active:shadow-[inset_0_2px_5px_rgba(0,0,0,0.95)]"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Right Action */}
          <div className="hidden md:flex items-center gap-3">
            {/* Shimmering 3D Luxury CTA Button - Sleek & Refined */}
            <Link
              href="/quote"
              className="btn-luxury-gold btn-shimmer px-4 py-2 rounded-full text-[11px] font-black uppercase tracking-wider inline-flex items-center gap-1.5 group cursor-pointer shadow-md"
            >
              <span>Get a Free Quote</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform stroke-[2.5]" />
            </Link>
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
            {NAV_LINKS.map((link) => {
              const isAnchor = link.href.startsWith("#");
              const targetHref = isAnchor && !isHomePage ? `/${link.href}` : link.href;
              return (
                <Link
                  key={link.label}
                  href={targetHref}
                  onClick={(e) => {
                    setMobileMenuOpen(false);
                    if (isAnchor) handleNavClick(e as unknown as React.MouseEvent<HTMLAnchorElement>, link.href);
                  }}
                  className="text-xl font-display font-bold text-white hover:text-[#FFB020] transition-colors py-2.5 flex items-center justify-between border-b border-white/5"
                >
                  <span>{link.label}</span>
                  <ArrowRight className="w-5 h-5 text-slate-400" />
                </Link>
              );
            })}
          </nav>

          <div className="flex flex-col gap-4 pt-4 border-t border-white/10">
            <div className="flex items-center gap-2 text-xs text-slate-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Bhubaneswar HQ Online · Dedicated Western Shifts</span>
            </div>
            <Link
              href="/quote"
              onClick={() => setMobileMenuOpen(false)}
              className="btn-luxury-gold btn-shimmer py-3 px-4 rounded-xl text-center text-xs font-black uppercase tracking-wider flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4" />
              <span>Get Free 90-Day Plan &amp; Quote</span>
            </Link>
          </div>
        </div>
      )}
    </>
  );
}

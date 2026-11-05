"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  ArrowRight,
  Sparkles,
  Shield,
  Clock,
  ChevronDown,
  Code2,
  Users,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { BrandLogo } from "@/components/ui/BrandLogo";

export interface ServiceDropdownItem {
  title: string;
  href: string;
  description: string;
  badge?: string;
  icon: "code" | "users";
}

export const SERVICE_ITEMS: ServiceDropdownItem[] = [
  {
    title: "Web Design & Development",
    href: "/web-design-and-development-services",
    description: "Custom websites, redesigns, e-commerce & high-performing web apps",
    badge: "Popular",
    icon: "code",
  },
  {
    title: "Dedicated Marketing Squads",
    href: "/#teams",
    description: "Deploy pre-vetted full-time SEO, Ads & Content teams in your Slack",
    badge: "Dedicated",
    icon: "users",
  },
];

interface NavLinkItem {
  label: string;
  href: string;
  isDropdown?: boolean;
}

const NAV_LINKS: NavLinkItem[] = [
  { label: "About Us", href: "#about" },
  {
    label: "Services",
    href: "/web-design-and-development-services",
    isDropdown: true,
  },
  { label: "Tech Stack", href: "#stack" },
  { label: "Case Studies", href: "#work" },
  { label: "Blog", href: "/blog" },
  { label: "Contact Us", href: "/get-a-quote" },
];

const SPY_SECTIONS: { id: string; href: string }[] = [
  { id: "about", href: "#about" },
  { id: "teams", href: "#teams" },
  { id: "stack", href: "#stack" },
  { id: "work", href: "#work" },
];

export function Header() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(true);
  const [activeNav, setActiveNav] = useState<string>(() => {
    if (pathname.startsWith("/get-a-quote")) return "/get-a-quote";
    if (pathname.startsWith("/blog")) return "/blog";
    if (pathname.startsWith("/web-design-and-development-services"))
      return "/web-design-and-development-services";
    return "#about";
  });

  const isClickScrollingRef = useRef(false);
  const scrollTimerRef = useRef<NodeJS.Timeout | null>(null);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnterServices = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setServicesOpen(true);
  };

  const handleMouseLeaveServices = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setServicesOpen(false);
    }, 150);
  };

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
      } else if (pathname.startsWith("/get-a-quote")) {
        setActiveNav("/get-a-quote");
      } else if (pathname.startsWith("/web-design-and-development-services")) {
        setActiveNav("/web-design-and-development-services");
      }
      return;
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Programmatic click-scroll is active:
      // Keep pushing the lock forward as long as scroll events are firing.
      // It will ONLY unlock 150ms AFTER smooth scroll has completely finished moving!
      if (isClickScrollingRef.current) {
        if (scrollTimerRef.current) clearTimeout(scrollTimerRef.current);
        scrollTimerRef.current = setTimeout(() => {
          isClickScrollingRef.current = false;
        }, 150);
        return;
      }

      // 1. If near top of page (Hero / Intro area), highlight About Us
      if (window.scrollY < 300) {
        setActiveNav("#about");
        return;
      }

      // 2. Strict bounded inspection: only highlight a section if it is currently in view
      const inspectPoint = 160;
      for (const { id, href } of SPY_SECTIONS) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= inspectPoint && rect.bottom > inspectPoint) {
            setActiveNav(href);
            return;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
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
    // 1. Instantly set the clicked tab active with 0ms delay
    setActiveNav(href);

    if (href.startsWith("#")) {
      if (!isHomePage) {
        // Allow normal navigation back to home page with hash
        return;
      }
      e.preventDefault();
      
      // 2. Engage click scroll lock
      isClickScrollingRef.current = true;
      if (scrollTimerRef.current) {
        clearTimeout(scrollTimerRef.current);
      }
      scrollTimerRef.current = setTimeout(() => {
        isClickScrollingRef.current = false;
      }, 400);

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
              if (link.isDropdown) {
                const isServicesActive =
                  pathname.startsWith("/web-design-and-development-services") ||
                  (isHomePage && activeNav === "#teams");

                return (
                  <div
                    key={link.label}
                    className="relative"
                    onMouseEnter={handleMouseEnterServices}
                    onMouseLeave={handleMouseLeaveServices}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setServicesOpen(false)}
                      className={cn(
                        "px-3.5 py-1.5 text-xs lg:text-[13px] font-extrabold rounded-full transition-all duration-150 cursor-pointer select-none inline-flex items-center gap-1",
                        "focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFB020]",
                        isServicesActive
                          ? "bg-[#030614] text-[#FFB020] border border-[#FFB020]/50 shadow-[inset_0_2px_6px_rgba(0,0,0,0.95),inset_0_-1px_1px_rgba(255,255,255,0.08)]"
                          : "text-slate-300 hover:text-white hover:bg-white/5 border border-transparent active:bg-[#030614] active:text-[#FFB020] active:shadow-[inset_0_2px_5px_rgba(0,0,0,0.95)]"
                      )}
                    >
                      <span>{link.label}</span>
                      <ChevronDown
                        className={cn(
                          "w-3.5 h-3.5 transition-transform duration-200 stroke-[2.5]",
                          servicesOpen && "rotate-180"
                        )}
                      />
                    </Link>

                    {/* Desktop Floating Services Dropdown */}
                    <div
                      className={cn(
                        "absolute top-full left-1/2 -translate-x-1/2 pt-2.5 w-84 z-50 transition-all duration-200",
                        servicesOpen
                          ? "opacity-100 translate-y-0 pointer-events-auto"
                          : "opacity-0 -translate-y-2 pointer-events-none"
                      )}
                    >
                      <div className="bg-[#060B22]/98 backdrop-blur-2xl border border-white/20 rounded-2xl p-2 shadow-[0_25px_60px_rgba(0,0,0,0.9),inset_0_1px_1px_rgba(255,255,255,0.15)] space-y-1">
                        {SERVICE_ITEMS.map((item) => {
                          const isItemAnchor = item.href.startsWith("#");
                          const targetHref =
                            isItemAnchor && !isHomePage
                              ? `/${item.href}`
                              : item.href;

                          return (
                            <Link
                              key={item.title}
                              href={targetHref}
                              onClick={(e) => {
                                setServicesOpen(false);
                                if (isItemAnchor) {
                                  handleNavClick(
                                    e as unknown as React.MouseEvent<HTMLAnchorElement>,
                                    item.href
                                  );
                                }
                              }}
                              className="group flex items-start gap-3 p-2.5 rounded-xl hover:bg-white/10 transition-all text-left"
                            >
                              <div className="w-8 h-8 rounded-lg bg-[#FFB020]/15 border border-[#FFB020]/30 flex items-center justify-center shrink-0 mt-0.5 text-[#FFB020] group-hover:scale-105 group-hover:bg-[#FFB020] group-hover:text-[#060B22] transition-all">
                                {item.icon === "code" ? (
                                  <Code2 className="w-4 h-4" />
                                ) : (
                                  <Users className="w-4 h-4" />
                                )}
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-1.5">
                                  <span className="text-xs font-bold text-white group-hover:text-[#FFB020] transition-colors leading-snug">
                                    {item.title}
                                  </span>
                                  {item.badge && (
                                    <span className="text-[9px] font-black uppercase tracking-wider px-1.5 py-0.5 rounded-full bg-[#FFB020]/20 text-[#FFB020] border border-[#FFB020]/30 shrink-0">
                                      {item.badge}
                                    </span>
                                  )}
                                </div>
                                <p className="text-[11px] text-slate-400 leading-snug line-clamp-2 mt-0.5">
                                  {item.description}
                                </p>
                              </div>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                );
              }

              const isAnchor = link.href.startsWith("#");
              const targetHref = isAnchor && !isHomePage ? `/${link.href}` : link.href;
              const isActive = isAnchor
                ? isHomePage && activeNav === link.href
                : pathname === link.href || pathname.startsWith(`${link.href}/`);

              return (
                <Link
                  key={link.label}
                  href={targetHref}
                  onClick={(e) => handleNavClick(e as unknown as React.MouseEvent<HTMLAnchorElement>, link.href)}
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
              href="/get-a-quote"
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

          <nav className="flex flex-col gap-2 py-4 overflow-y-auto max-h-[60vh]">
            {NAV_LINKS.map((link) => {
              if (link.isDropdown) {
                return (
                  <div key={link.label} className="border-b border-white/5 py-1">
                    <button
                      type="button"
                      onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                      className="w-full text-xl font-display font-bold text-white hover:text-[#FFB020] transition-colors py-2 flex items-center justify-between cursor-pointer"
                    >
                      <span>{link.label}</span>
                      <ChevronDown
                        className={cn(
                          "w-5 h-5 text-slate-400 transition-transform duration-200",
                          mobileServicesOpen && "rotate-180"
                        )}
                      />
                    </button>

                    {mobileServicesOpen && (
                      <div className="pl-2 pb-2 space-y-2 animate-in fade-in duration-200">
                        {SERVICE_ITEMS.map((item) => {
                          const isItemAnchor = item.href.startsWith("#");
                          const targetHref =
                            isItemAnchor && !isHomePage
                              ? `/${item.href}`
                              : item.href;

                          return (
                            <Link
                              key={item.title}
                              href={targetHref}
                              onClick={(e) => {
                                setMobileMenuOpen(false);
                                if (isItemAnchor) {
                                  handleNavClick(
                                    e as unknown as React.MouseEvent<HTMLAnchorElement>,
                                    item.href
                                  );
                                }
                              }}
                              className="flex items-center justify-between py-2.5 px-3 rounded-xl bg-white/5 hover:bg-white/10 text-slate-200 hover:text-white transition-colors"
                            >
                              <div className="flex items-center gap-2.5">
                                <span className="text-sm font-bold">{item.title}</span>
                                {item.badge && (
                                  <span className="text-[9px] font-black uppercase tracking-wider px-1.5 py-0.5 rounded-full bg-[#FFB020]/20 text-[#FFB020] border border-[#FFB020]/30">
                                    {item.badge}
                                  </span>
                                )}
                              </div>
                              <ArrowRight className="w-4 h-4 text-slate-400" />
                            </Link>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              }

              const isAnchor = link.href.startsWith("#");
              const targetHref = isAnchor && !isHomePage ? `/${link.href}` : link.href;
              return (
                <Link
                  key={link.label}
                  href={targetHref}
                  onClick={(e) => {
                    setMobileMenuOpen(false);
                    handleNavClick(e as unknown as React.MouseEvent<HTMLAnchorElement>, link.href);
                  }}
                  className="text-xl font-display font-bold text-white hover:text-[#FFB020] transition-colors py-2 flex items-center justify-between border-b border-white/5"
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
              href="/get-a-quote"
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

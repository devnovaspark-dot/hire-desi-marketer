"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Zap, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import StarBorder from "@/components/ui/StarBorder";

// ====================================================================
// WEB AUDIO SYNTHESIZER: CRUNCHY FUTURISTIC UI BEEP / CHIME
// ====================================================================

function playUiBeep(freq: number) {
  if (typeof window === "undefined") return;
  try {
    const AudioContextClass =
      window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!AudioContextClass) return;

    const ctx = new AudioContextClass();
    if (ctx.state === "suspended") {
      ctx.resume().catch(() => {});
    }

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    // Crisp high-tech sine / triangle frequency sweep
    osc.type = "sine";
    const now = ctx.currentTime;
    osc.frequency.setValueAtTime(freq, now);
    osc.frequency.exponentialRampToValueAtTime(freq * 1.6, now + 0.09);

    gain.gain.setValueAtTime(0.09, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.12);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + 0.12);
  } catch {
    // Graceful fallback if audio policy denies autoplay
  }
}

// ====================================================================
// 6 BESPOKE 3D COLORFUL ICONS WITH SPECULAR GLOSS & REAL DEPTH
// ====================================================================

// 1. 3D Colorful Figma / UI Layers Icon
function ThreeDDesignIcon({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none">
      <defs>
        <radialGradient id="fig3d-red" cx="35%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#FFA692" />
          <stop offset="50%" stopColor="#F24E1E" />
          <stop offset="100%" stopColor="#B32B00" />
        </radialGradient>
        <radialGradient id="fig3d-orange" cx="35%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#FFC1B0" />
          <stop offset="50%" stopColor="#FF7262" />
          <stop offset="100%" stopColor="#C83B2B" />
        </radialGradient>
        <radialGradient id="fig3d-purple" cx="35%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#E2C7FF" />
          <stop offset="50%" stopColor="#A259FF" />
          <stop offset="100%" stopColor="#6C1EDB" />
        </radialGradient>
        <radialGradient id="fig3d-blue" cx="35%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#A5E7FF" />
          <stop offset="50%" stopColor="#1ABCFE" />
          <stop offset="100%" stopColor="#0284C7" />
        </radialGradient>
        <radialGradient id="fig3d-green" cx="35%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#8DFBD3" />
          <stop offset="50%" stopColor="#0ACF83" />
          <stop offset="100%" stopColor="#047857" />
        </radialGradient>
        <filter id="fig3d-shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="4" stdDeviation="4" floodColor="#000000" floodOpacity="0.3" />
        </filter>
      </defs>
      <g filter="url(#fig3d-shadow)">
        {/* Top-left capsule: Red */}
        <rect x="22" y="14" width="28" height="24" rx="12" fill="url(#fig3d-red)" />
        {/* Top-right circle: Orange */}
        <circle cx="64" cy="26" r="12" fill="url(#fig3d-orange)" />
        {/* Mid-left capsule: Purple */}
        <rect x="22" y="38" width="28" height="24" rx="12" fill="url(#fig3d-purple)" />
        {/* Mid-right circle: Blue */}
        <circle cx="64" cy="50" r="12" fill="url(#fig3d-blue)" />
        {/* Bottom-left tear: Green */}
        <path d="M34 62C40.6 62 46 67.4 46 74C46 80.6 40.6 86 34 86C27.4 86 22 80.6 22 74H34V62Z" fill="url(#fig3d-green)" />
        {/* Specular sheen dots */}
        <ellipse cx="30" cy="22" rx="4" ry="2" fill="#FFFFFF" fillOpacity="0.6" />
        <ellipse cx="68" cy="22" rx="3" ry="1.5" fill="#FFFFFF" fillOpacity="0.6" />
        <ellipse cx="30" cy="46" rx="4" ry="2" fill="#FFFFFF" fillOpacity="0.6" />
        <ellipse cx="68" cy="46" rx="3" ry="1.5" fill="#FFFFFF" fillOpacity="0.6" />
      </g>
    </svg>
  );
}

// 2. 3D React Atom & Next.js Orbit Icon
function ThreeDFullStackIcon({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none">
      <defs>
        <radialGradient id="react3d-ball" cx="35%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="35%" stopColor="#00D8FF" />
          <stop offset="100%" stopColor="#005274" />
        </radialGradient>
        <linearGradient id="react3d-orbit1" x1="10" y1="20" x2="90" y2="80">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="45%" stopColor="#00D8FF" />
          <stop offset="100%" stopColor="#0284C7" />
        </linearGradient>
        <filter id="react3d-glow" x="-30%" y="-30%" width="160%" height="160%">
          <feDropShadow dx="0" dy="3" stdDeviation="4" floodColor="#00D8FF" floodOpacity="0.45" />
        </filter>
      </defs>
      <circle cx="50" cy="50" r="38" fill="#00D8FF" fillOpacity="0.1" />
      <g strokeWidth="3.2" strokeLinecap="round" filter="url(#react3d-glow)">
        <ellipse cx="50" cy="50" rx="42" ry="15" stroke="url(#react3d-orbit1)" />
        <ellipse cx="50" cy="50" rx="42" ry="15" stroke="url(#react3d-orbit1)" transform="rotate(60 50 50)" />
        <ellipse cx="50" cy="50" rx="42" ry="15" stroke="url(#react3d-orbit1)" transform="rotate(120 50 50)" />
      </g>
      <circle cx="50" cy="50" r="10" fill="url(#react3d-ball)" filter="url(#react3d-glow)" />
      <ellipse cx="47" cy="46" rx="3" ry="1.8" fill="#FFFFFF" fillOpacity="0.85" />
    </svg>
  );
}

// 3. 3D Vibrant Emerald E-Commerce Bag & Gold Coin Icon
function ThreeDCommerceIcon({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none">
      <defs>
        <linearGradient id="com3d-bag" x1="20" y1="20" x2="80" y2="88">
          <stop offset="0%" stopColor="#34D399" />
          <stop offset="40%" stopColor="#10B981" />
          <stop offset="100%" stopColor="#065F46" />
        </linearGradient>
        <linearGradient id="com3d-gold" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FFF3B0" />
          <stop offset="50%" stopColor="#FFB020" />
          <stop offset="100%" stopColor="#B45309" />
        </linearGradient>
        <filter id="com3d-shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="5" stdDeviation="4" floodColor="#047857" floodOpacity="0.4" />
        </filter>
      </defs>
      <g filter="url(#com3d-shadow)">
        {/* 3D Golden Bag Handle */}
        <path d="M38 34V24C38 17.4 43.4 12 50 12C56.6 12 62 17.4 62 24V34" stroke="url(#com3d-gold)" strokeWidth="4.5" strokeLinecap="round" />
        {/* 3D Bag Body */}
        <path d="M25 32H75L71 86C71 89.3 68.3 92 65 92H35C31.7 92 29 89.3 29 86L25 32Z" fill="url(#com3d-bag)" />
        {/* Specular highlights on bag */}
        <path d="M29 36L32 84" stroke="#FFFFFF" strokeWidth="2" strokeOpacity="0.35" strokeLinecap="round" />
        {/* Floating 3D Gold Coin */}
        <circle cx="50" cy="58" r="14" fill="url(#com3d-gold)" />
        <circle cx="50" cy="58" r="11" fill="none" stroke="#FFFFFF" strokeWidth="1.5" strokeOpacity="0.6" />
        <text x="50" y="63" fontSize="13" fontWeight="900" fill="#060B22" textAnchor="middle" fontFamily="sans-serif">₹</text>
      </g>
    </svg>
  );
}

// 4. 3D Royal Purple Modular CMS Blocks Icon
function ThreeDCmsIcon({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none">
      <defs>
        <linearGradient id="cms3d-top" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#E9D5FF" />
          <stop offset="60%" stopColor="#C084FC" />
          <stop offset="100%" stopColor="#9333EA" />
        </linearGradient>
        <linearGradient id="cms3d-left" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#9333EA" />
          <stop offset="100%" stopColor="#581C87" />
        </linearGradient>
        <linearGradient id="cms3d-right" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#A855F7" />
          <stop offset="100%" stopColor="#6B21A8" />
        </linearGradient>
        <filter id="cms3d-shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="5" stdDeviation="4" floodColor="#7E22CE" floodOpacity="0.4" />
        </filter>
      </defs>
      <g filter="url(#cms3d-shadow)">
        {/* Isometric Cube Top Face */}
        <polygon points="50,14 78,30 50,46 22,30" fill="url(#cms3d-top)" />
        {/* Isometric Cube Left Face */}
        <polygon points="22,30 50,46 50,78 22,62" fill="url(#cms3d-left)" />
        {/* Isometric Cube Right Face */}
        <polygon points="50,46 78,30 78,62 50,78" fill="url(#cms3d-right)" />
        {/* Highlighting Edges */}
        <line x1="50" y1="14" x2="50" y2="46" stroke="#FFFFFF" strokeWidth="1.8" strokeOpacity="0.5" />
        {/* 3D Floating Magic Wand / Edit Diamond */}
        <polygon points="50,22 56,30 50,38 44,30" fill="#FFB020" />
        <circle cx="50" cy="30" r="3" fill="#FFFFFF" />
      </g>
    </svg>
  );
}

// 5. 3D Golden Database & Cloud Portal Discs Icon
function ThreeDCloudIcon({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none">
      <defs>
        <linearGradient id="cld3d-top" x1="20" y1="15" x2="80" y2="40">
          <stop offset="0%" stopColor="#FDE68A" />
          <stop offset="50%" stopColor="#F59E0B" />
          <stop offset="100%" stopColor="#B45309" />
        </linearGradient>
        <linearGradient id="cld3d-side" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#F59E0B" />
          <stop offset="100%" stopColor="#78350F" />
        </linearGradient>
        <filter id="cld3d-shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="5" stdDeviation="4" floodColor="#B45309" floodOpacity="0.4" />
        </filter>
      </defs>
      <g filter="url(#cld3d-shadow)">
        {/* Bottom Cylinder */}
        <path d="M22 62C22 70.8 34.5 78 50 78C65.5 78 78 70.8 78 62V72C78 80.8 65.5 88 50 88C34.5 88 22 80.8 22 72V62Z" fill="url(#cld3d-side)" />
        <ellipse cx="50" cy="62" rx="28" ry="8" fill="url(#cld3d-top)" />

        {/* Middle Cylinder */}
        <path d="M22 42C22 50.8 34.5 58 50 58C65.5 58 78 50.8 78 42V52C78 60.8 65.5 68 50 68C34.5 68 22 60.8 22 52V42Z" fill="url(#cld3d-side)" />
        <ellipse cx="50" cy="42" rx="28" ry="8" fill="url(#cld3d-top)" />

        {/* Top Cylinder */}
        <path d="M22 22C22 30.8 34.5 38 50 38C65.5 38 78 30.8 78 22V32C78 40.8 65.5 48 50 48C34.5 48 22 40.8 22 32V22Z" fill="url(#cld3d-side)" />
        <ellipse cx="50" cy="22" rx="28" ry="8" fill="url(#cld3d-top)" />

        {/* Specular rim */}
        <ellipse cx="50" cy="20" rx="22" ry="5" fill="#FFFFFF" fillOpacity="0.4" />
        {/* Glowing Data Status LEDs */}
        <circle cx="34" cy="30" r="2.2" fill="#10B981" />
        <circle cx="34" cy="50" r="2.2" fill="#10B981" />
        <circle cx="34" cy="70" r="2.2" fill="#10B981" />
      </g>
    </svg>
  );
}

// 6. 3D Neon Magenta & Hot Cyan Speedometer Gauge Icon
function ThreeDVitalsIcon({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none">
      <defs>
        <linearGradient id="vit3d-arc" x1="15" y1="50" x2="85" y2="50">
          <stop offset="0%" stopColor="#38BDF8" />
          <stop offset="50%" stopColor="#F43F5E" />
          <stop offset="100%" stopColor="#EC4899" />
        </linearGradient>
        <linearGradient id="vit3d-needle" x1="50" y1="52" x2="78" y2="30">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#FFB020" />
        </linearGradient>
        <filter id="vit3d-shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="4" stdDeviation="5" floodColor="#EC4899" floodOpacity="0.45" />
        </filter>
      </defs>
      <g filter="url(#vit3d-shadow)">
        {/* Speedometer Track */}
        <path d="M20 68A36 36 0 1 1 80 68" stroke="#E2E8F0" strokeWidth="8" strokeLinecap="round" />
        <path d="M20 68A36 36 0 1 1 80 68" stroke="url(#vit3d-arc)" strokeWidth="8" strokeDasharray="180" strokeDashoffset="25" strokeLinecap="round" />
        {/* Central Hub Disc */}
        <circle cx="50" cy="56" r="10" fill="#060B22" stroke="#FFB020" strokeWidth="2.5" />
        <circle cx="50" cy="56" r="4" fill="#FFFFFF" />
        {/* Needle pointing to 100% */}
        <path d="M50 56L75 28" stroke="url(#vit3d-needle)" strokeWidth="4.5" strokeLinecap="round" />
        {/* 100/100 Core Vitals Badge */}
        <circle cx="76" cy="27" r="7" fill="#10B981" />
        <circle cx="76" cy="27" r="3" fill="#FFFFFF" />
      </g>
    </svg>
  );
}

// ====================================================================
// ARCHITECTURE NODE DEFINITIONS WITH FREQUENCY FOR BEEP SYNTHESIS
// ====================================================================

interface ArchitectureNode {
  id: string;
  number: string;
  name: string;
  tag: string;
  icon: React.ComponentType<{ className?: string }>;
  accentColor: string;
  beepFreq: number; // Hz
  statusLabel: string;
  statusMetric: string;
  headline: string;
  description: string;
}

const ARCHITECTURE_NODES: ArchitectureNode[] = [
  {
    id: "figma",
    number: "01",
    name: "Custom UI/UX",
    tag: "Figma Tokens",
    icon: ThreeDDesignIcon,
    accentColor: "#F24E1E",
    beepFreq: 523.25, // C5
    statusLabel: "Compiling Design Tokens to Semantic Next.js 16",
    statusMetric: "100% Custom UI",
    headline: "Bespoke Digital Experiences Engineered from Clean Figma Tokens",
    description:
      "Every single pixel is designed from scratch in Figma to reflect your brand's authority, then compiled into semantic Next.js 16 code with zero generic theme bloat.",
  },
  {
    id: "nextjs",
    number: "02",
    name: "Modern Full-Stack",
    tag: "Next.js 16 & React 19",
    icon: ThreeDFullStackIcon,
    accentColor: "#00D8FF",
    beepFreq: 587.33, // D5
    statusLabel: "Deploying Sub-Second Edge Server-Side Rendering",
    statusMetric: "< 0.8s LCP SLA",
    headline: "Sub-Second Edge Performance with React 19 Concurrent Rendering",
    description:
      "Engineered for instantaneous route transitions, fluid micro-interactions, and Google Lighthouse 100/100 Core Web Vitals across every global user session.",
  },
  {
    id: "commerce",
    number: "03",
    name: "Modern E-Commerce",
    tag: "Shopify Plus & Headless",
    icon: ThreeDCommerceIcon,
    accentColor: "#10B981",
    beepFreq: 659.25, // E5
    statusLabel: "Optimizing Average Order Value & 1-Tap Checkout",
    statusMetric: "4.6% Avg Conv.",
    headline: "High-Velocity Storefronts Built for Maximum Average Order Value",
    description:
      "Custom Shopify Plus and headless storefronts with instant slide-out micro-carts, free-shipping threshold bars, and seamless multi-currency checkouts.",
  },
  {
    id: "cms",
    number: "04",
    name: "Client CMS Autonomy",
    tag: "Webflow & Headless",
    icon: ThreeDCmsIcon,
    accentColor: "#A855F7",
    beepFreq: 698.46, // F5
    statusLabel: "Empowering Marketing Team Publishing Autonomy",
    statusMetric: "Zero Dev Dependency",
    headline: "Empower Your Marketing Team with Zero Developer Dependencies",
    description:
      "Intuitive drag-and-drop publishing on Webflow, WordPress, or modern Headless CMS with structured schemas tailored strictly to approved brand guidelines.",
  },
  {
    id: "cloud",
    number: "05",
    name: "Cloud Portals & APIs",
    tag: "Supabase & REST/Auth",
    icon: ThreeDCloudIcon,
    accentColor: "#F59E0B",
    beepFreq: 783.99, // G5
    statusLabel: "Securing Client Portal Sessions & DB Webhooks",
    statusMetric: "RBAC & MFA Secured",
    headline: "Secure Client Portals & Scalable Cloud API Integrations",
    description:
      "Role-based access control, multi-factor authentication, and PostgreSQL database connections for enterprise client portals and internal platforms.",
  },
  {
    id: "vitals",
    number: "06",
    name: "Speed & SEO Shield",
    tag: "100/100 Core Vitals",
    icon: ThreeDVitalsIcon,
    accentColor: "#EC4899",
    beepFreq: 880.0, // A5
    statusLabel: "Google Lighthouse Certified Speed & 301 Protection",
    statusMetric: "Google Top 1%",
    headline: "Google Lighthouse Certified Speed & 301 SEO Authority Protection",
    description:
      "Protect established search keyword rankings during website modernizations while passing Google Core Web Vitals with flying colors.",
  },
];

// Particle explosion vectors for the blasting animation
const BLAST_OFFSETS = [
  { x: -32, y: -32 },
  { x: 0, y: -42 },
  { x: 32, y: -32 },
  { x: 42, y: 0 },
  { x: 32, y: 32 },
  { x: 0, y: 42 },
  { x: -32, y: 32 },
  { x: -42, y: 0 },
];

export default function BentoGrid() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [progress, setProgress] = useState<number>(75);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const pauseTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const active = ARCHITECTURE_NODES[activeIndex] || ARCHITECTURE_NODES[0];

  // Auto-cycle through the 6 architecture nodes unless the user interacts
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % ARCHITECTURE_NODES.length);
      setProgress(55);
    }, 4200);

    return () => clearInterval(interval);
  }, [isPaused]);

  // Micro progress animation for telemetry
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => (prev >= 95 ? 65 : prev + 6));
    }, 1800);

    return () => clearInterval(timer);
  }, [activeIndex]);

  const handleHoverNode = (index: number) => {
    setHoveredIndex(index);
    setActiveIndex(index);
    setProgress(80);
    setIsPaused(true);

    // Play crisp micro-interaction synthesizer chime
    const node = ARCHITECTURE_NODES[index];
    if (node) {
      playUiBeep(node.beepFreq);
    }

    if (pauseTimeoutRef.current) {
      clearTimeout(pauseTimeoutRef.current);
    }
    pauseTimeoutRef.current = setTimeout(() => {
      setIsPaused(false);
    }, 10000);
  };

  // Node X coordinates on 1000px wide SVG viewBox:
  const nodeXCoords = [83, 250, 416, 583, 750, 916];
  const hubX = 500;
  const hubY = 140;

  return (
    <div className="w-full select-none text-center">
      {/* ==================================================================== */}
      {/* 1. TOP ROW: 6 STREAMLINED 3D COLORFUL ICONS WITH BLASTING HOVER      */}
      {/* ==================================================================== */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 max-w-5xl mx-auto px-2">
        {ARCHITECTURE_NODES.map((node, idx) => {
          const Icon = node.icon;
          const isActive = idx === activeIndex;
          const isHovered = idx === hoveredIndex;

          return (
            <button
              key={node.id}
              type="button"
              onClick={() => handleHoverNode(idx)}
              onMouseEnter={() => handleHoverNode(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={cn(
                "flex flex-col items-center gap-2 p-3 sm:p-3.5 rounded-2xl transition-all duration-300 cursor-pointer group text-center relative",
                isActive
                  ? "bg-white shadow-xl scale-108 -translate-y-1"
                  : "bg-white/60 hover:bg-white hover:shadow-lg border border-[#E2DBD0]"
              )}
            >
              {/* BLASTING PARTICLES EXPLOSION ON HOVER / ACTIVE */}
              {(isHovered || isActive) && (
                <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
                  {/* Expanding Shockwave Ripple */}
                  <div
                    className="absolute w-16 h-16 rounded-full border-2 animate-ping pointer-events-none"
                    style={{ borderColor: node.accentColor, opacity: 0.35 }}
                  />

                  {/* 8 Blasting Spark Particles radiating outwards */}
                  {BLAST_OFFSETS.map((offset, pIdx) => (
                    <span
                      key={pIdx}
                      className="absolute w-2 h-2 rounded-full pointer-events-none animate-ping"
                      style={{
                        backgroundColor: node.accentColor,
                        transform: `translate(${offset.x}px, ${offset.y}px)`,
                        animationDuration: "0.85s",
                      }}
                    />
                  ))}
                </div>
              )}

              {/* 3D Colorful Icon Container with Specular Glow */}
              <div
                className={cn(
                  "w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center transition-all duration-300 relative border shadow-sm",
                  isActive
                    ? "bg-gradient-to-b from-white to-[#FAF8F5] border-[#FFB020] shadow-[0_0_25px_rgba(255,176,32,0.4)] scale-110"
                    : "bg-white border-[#E2DBD0] group-hover:scale-108 group-hover:border-slate-300 group-hover:shadow-md"
                )}
              >
                <Icon className="w-8 h-8 sm:w-9 sm:h-9 transition-transform duration-300 group-hover:rotate-6" />

                {isActive && (
                  <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-[#FFB020] animate-ping" />
                )}
              </div>

              <div className="space-y-0.5 z-10">
                <div
                  className={cn(
                    "text-xs font-display font-bold tracking-tight transition-colors",
                    isActive ? "text-[#060B22] font-black" : "text-slate-700 group-hover:text-[#060B22]"
                  )}
                >
                  {node.name}
                </div>
                <div className="text-[10px] font-mono text-slate-500">
                  {node.tag}
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* ==================================================================== */}
      {/* 2. THE SIGNATURE FLOWING SVG CIRCUIT WITH GLOWING TRAVELING PULSES   */}
      {/* ==================================================================== */}
      <div className="relative w-full max-w-5xl mx-auto h-28 sm:h-36 -my-1 sm:-my-2">
        <svg
          className="w-full h-full overflow-visible"
          viewBox="0 0 1000 140"
          fill="none"
          preserveAspectRatio="none"
        >
          <defs>
            <filter id="circuit-glow" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="3.5" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>

            {ARCHITECTURE_NODES.map((node) => (
              <linearGradient
                key={node.id}
                id={`light-wire-${node.id}`}
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop offset="0%" stopColor={node.accentColor} stopOpacity="0.4" />
                <stop offset="60%" stopColor={node.accentColor} stopOpacity="0.8" />
                <stop offset="100%" stopColor="#060B22" stopOpacity="1" />
              </linearGradient>
            ))}
          </defs>

          {/* 6 Curved Converging Circuit Paths on Light Canvas */}
          {nodeXCoords.map((x, idx) => {
            const node = ARCHITECTURE_NODES[idx];
            const isActive = idx === activeIndex;
            const pathD = `M ${x} 0 C ${x} 70, ${hubX + (x - hubX) * 0.15} 90, ${hubX} ${hubY}`;

            return (
              <g key={node.id}>
                {/* Background base wire */}
                <path
                  d={pathD}
                  stroke={
                    isActive
                      ? `url(#light-wire-${node.id})`
                      : "rgba(6, 11, 34, 0.14)"
                  }
                  strokeWidth={isActive ? "3" : "1.5"}
                  strokeDasharray={isActive ? "none" : "4 4"}
                  strokeLinecap="round"
                  className="transition-all duration-300"
                />

                {/* Traveling glowing photon pulse */}
                <circle
                  r={isActive ? "4.5" : "3"}
                  fill={isActive ? node.accentColor : "#FFB020"}
                  filter="url(#circuit-glow)"
                >
                  <animateMotion
                    path={pathD}
                    dur={`${1.9 + (idx % 3) * 0.35}s`}
                    repeatCount="indefinite"
                  />
                </circle>
              </g>
            );
          })}
        </svg>
      </div>

      {/* ==================================================================== */}
      {/* 3. CENTRAL PROCESSING HUB (FLOATING LUXURY CAPSULE PILL)             */}
      {/* ==================================================================== */}
      <div className="flex justify-center relative z-10 mb-4 sm:mb-5">
        <div className="inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full bg-[#060B22] text-white font-display font-black text-xs sm:text-sm shadow-[0_12px_35px_rgba(255,176,32,0.35)] border-2 border-[#FFB020] hover:scale-105 transition-transform cursor-pointer">
          <Zap className="w-4 h-4 text-[#FFB020] fill-[#FFB020]" />
          <span>Compiled Production Architecture</span>
        </div>
      </div>

      {/* ==================================================================== */}
      {/* 4. REAL-TIME TELEMETRY STATUS BAR (BENTO 1 SIGNATURE STYLE)          */}
      {/* ==================================================================== */}
      <div className="max-w-xl mx-auto w-full px-4 space-y-2">
        <div className="flex items-center justify-between text-xs font-mono">
          <div className="flex items-center gap-2 text-slate-700">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600" />
            </span>
            <span className="truncate max-w-[260px] sm:max-w-none text-left font-medium">
              {active.statusLabel}
            </span>
          </div>
          <span className="text-emerald-700 font-bold shrink-0">
            {active.statusMetric}
          </span>
        </div>

        {/* Minimal Progress Bar */}
        <div className="h-1.5 w-full bg-slate-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-[#FFB020] via-emerald-400 to-[#FFB020] rounded-full transition-all duration-700 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* ==================================================================== */}
      {/* 5. MINIMAL EDITORIAL SUMMARY & DIRECT ACTION CTA                     */}
      {/* ==================================================================== */}
      <div className="pt-5 sm:pt-6 text-center space-y-3 max-w-2xl mx-auto px-4">
        <h3 className="font-display font-black text-xl sm:text-2xl text-[#0B1B3A] tracking-tight leading-snug">
          {active.headline}
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal max-w-xl mx-auto">
          {active.description}
        </p>

        <div className="pt-2">
          <StarBorder
            as={Link}
            href="/get-a-quote"
            className="py-3 px-6 rounded-xl text-xs font-black uppercase tracking-wider inline-flex items-center justify-center gap-2 shadow-lg cursor-pointer text-center group"
            radius={12}
            color="#FFB020"
            trailColor="#38BDF8"
            backgroundColor="#060B22"
            textColor="#FFFFFF"
            borderColor="rgba(255, 176, 32, 0.5)"
            sparkle={true}
            glow={0.8}
          >
            <span>Discuss {active.name} Scope</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#FFB020] group-hover:translate-x-1 transition-transform" />
          </StarBorder>
        </div>
      </div>
    </div>
  );
}

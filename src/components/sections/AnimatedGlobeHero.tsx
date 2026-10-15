"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

interface FlightRoute {
  id: string;
  name: string;
  tag: string;
  path: string;
  destX: number;
  destY: number;
  duration: number; // in seconds
}

// Bhubaneswar HQ coordinates: (1306, 435)
// Routes stay below Y=190 so the top 190px (navbar zone) remains pristine, dark, and uncluttered.
const ROUTES: FlightRoute[] = [
  {
    id: "nyc",
    name: "New York",
    tag: "US East (ET)",
    path: "M1306 435 Q860 210 391 300",
    destX: 391,
    destY: 300,
    duration: 4.2,
  },
  {
    id: "toronto",
    name: "Toronto",
    tag: "Canada (ET)",
    path: "M1306 435 Q880 220 421 310",
    destX: 421,
    destY: 310,
    duration: 4.0,
  },
  {
    id: "sfo",
    name: "San Francisco",
    tag: "US West (PT)",
    path: "M1306 435 Q740 200 153 330",
    destX: 153,
    destY: 330,
    duration: 5.0,
  },
  {
    id: "london",
    name: "London",
    tag: "UK (GMT)",
    path: "M1306 435 Q1080 250 830 255",
    destX: 830,
    destY: 255,
    duration: 3.4,
  },
  {
    id: "frankfurt",
    name: "Frankfurt",
    tag: "Europe (CET)",
    path: "M1306 435 Q1110 265 905 250",
    destX: 905,
    destY: 250,
    duration: 3.5,
  },
  {
    id: "dubai",
    name: "Dubai",
    tag: "UAE (GST)",
    path: "M1306 435 Q1220 375 1137 395",
    destX: 1137,
    destY: 395,
    duration: 2.8,
  },
  {
    id: "sydney",
    name: "Sydney",
    tag: "Australia (AEST)",
    path: "M1306 435 Q1170 510 986 673",
    destX: 986,
    destY: 673,
    duration: 4.5,
  },
  {
    id: "singapore",
    name: "Singapore",
    tag: "Asia (SGT)",
    path: "M1306 435 Q1355 450 1406 520",
    destX: 1406,
    destY: 520,
    duration: 3.0,
  },
];

export function AnimatedGlobeHero() {
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });
  const [hoveredRoute, setHoveredRoute] = useState<string | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      const dx = (e.clientX - cx) / cx;
      const dy = (e.clientY - cy) / cy;
      setTilt({
        rotateX: -dy * 2.5,
        rotateY: dx * 3.5,
      });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
      {/* 1. Deep Space Midnight Base */}
      <div className="absolute inset-0 bg-[#040716]" />

      {/* 2. Top Vignette — Guarantees the area behind the navbar is deep midnight with zero glare */}
      <div className="absolute top-0 inset-x-0 h-48 bg-gradient-to-b from-[#040716] via-[#040716]/95 to-transparent z-10 pointer-events-none" />

      {/* 3. Subtle Ambient Light Orbs (Gentle, non-intrusive) */}
      <div className="absolute -top-24 right-1/4 w-[500px] h-[500px] rounded-full bg-[#1E3A8A]/15 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-1/4 w-[450px] h-[450px] rounded-full bg-[#FFB020]/10 blur-3xl pointer-events-none" />

      {/* 4. Interactive 3D Tilting Globe & Flight Arc System */}
      <div
        className="relative w-full h-full transition-transform duration-500 ease-out flex items-center justify-center"
        style={{
          transform: `perspective(1200px) rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg)`,
        }}
      >
        {/* Crisp Dotted World Map Base (Transparent SVG, subtle opacity) */}
        <div className="absolute inset-0 opacity-30 pointer-events-none">
          <Image
            src="/images/world-dots-base.svg"
            alt="World Globe Network"
            fill
            priority
            className="object-cover object-center"
          />
        </div>

        {/* Live Vector Telemetry & Animated Flight Arcs SVG */}
        <svg
          viewBox="0 0 1800 900"
          preserveAspectRatio="xMidYMid slice"
          className="absolute inset-0 w-full h-full pointer-events-auto"
        >
          <defs>
            {/* Golden Flight Arc Gradient */}
            <linearGradient id="live-arc" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#FFB020" stopOpacity="0.8" />
              <stop offset="60%" stopColor="#FFC857" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#38BDF8" stopOpacity="0.85" />
            </linearGradient>

            {/* Glowing Golden Arc Glow */}
            <filter id="glow-gold" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="2.5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            {/* Cyan Hub Glow */}
            <filter id="glow-cyan" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="2.5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            {/* Bhubaneswar HQ Core Radial Halo */}
            <radialGradient id="hq-core-halo">
              <stop offset="0%" stopColor="#FFB020" stopOpacity="0.45" />
              <stop offset="40%" stopColor="#FF8A00" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#FF8A00" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Flight Routes Layer */}
          <g id="flight-arcs">
            {ROUTES.map((route) => {
              const isHovered = hoveredRoute === route.id;
              return (
                <g key={route.id} className="cursor-pointer group">
                  {/* Subtle static guide track */}
                  <path
                    d={route.path}
                    fill="none"
                    stroke="#FFB020"
                    strokeWidth={isHovered ? 2 : 1}
                    strokeOpacity={isHovered ? 0.5 : 0.12}
                    strokeLinecap="round"
                    className="transition-all duration-300"
                  />

                  {/* Animated Golden Dash Beam streaming along the arc */}
                  <path
                    d={route.path}
                    fill="none"
                    stroke="url(#live-arc)"
                    strokeWidth={isHovered ? 2.5 : 1.6}
                    strokeLinecap="round"
                    filter="url(#glow-gold)"
                    className="animate-arc-flow"
                  />

                  {/* Traveling Photon Comet (Single smooth motion per path) */}
                  <circle r={isHovered ? 4.5 : 3} fill="#FFFFFF" filter="url(#glow-gold)">
                    <animateMotion
                      path={route.path}
                      dur={`${route.duration}s`}
                      repeatCount="indefinite"
                      rotate="auto"
                    />
                  </circle>

                  {/* Destination City Node (Clean, minimal LED marker) */}
                  <g
                    transform={`translate(${route.destX}, ${route.destY})`}
                    onMouseEnter={() => setHoveredRoute(route.id)}
                    onMouseLeave={() => setHoveredRoute(null)}
                  >
                    {/* Pulsing Outer Node Ring */}
                    <circle
                      r="8"
                      fill="none"
                      stroke="#38BDF8"
                      strokeWidth="1.2"
                      opacity="0.4"
                    >
                      <animate
                        attributeName="r"
                        values="5;12;5"
                        dur="3s"
                        repeatCount="indefinite"
                      />
                      <animate
                        attributeName="opacity"
                        values="0.6;0.1;0.6"
                        dur="3s"
                        repeatCount="indefinite"
                      />
                    </circle>

                    {/* Core LED dot */}
                    <circle r="3" fill="#38BDF8" filter="url(#glow-cyan)" />
                    <circle r="1.5" fill="#FFFFFF" />

                    {/* Tooltip ONLY on hover or for key markers to avoid text collisions */}
                    <g
                      className={`transition-all duration-200 pointer-events-none ${
                        isHovered ? "opacity-100 scale-100" : "opacity-0 scale-95"
                      }`}
                    >
                      <rect
                        x="10"
                        y="-12"
                        width={route.name.length * 7 + 22}
                        height="18"
                        rx="9"
                        fill="#060B22"
                        stroke="#FFB020"
                        strokeWidth="1"
                      />
                      <circle cx="16" cy="-3" r="2" fill="#38BDF8" />
                      <text
                        x="23"
                        y="0"
                        fill="#FFFFFF"
                        fontSize="9.5"
                        fontFamily="var(--font-heading), sans-serif"
                        fontWeight="700"
                        letterSpacing="0.04em"
                      >
                        {route.name}
                      </text>
                    </g>
                  </g>
                </g>
              );
            })}
          </g>

          {/* =========================================================================
              BHUBANESWAR INDIA HEADQUARTERS HUB BEACON (1306, 435)
             ========================================================================= */}
          <g id="bhubaneswar-hub" transform="translate(1306, 435)">
            {/* Subtle Gold Halo */}
            <circle r="130" fill="url(#hq-core-halo)" className="pointer-events-none" />

            {/* Concentric Expanding Sonar Ripple Rings */}
            <circle
              r="15"
              fill="none"
              stroke="#FFB020"
              className="animate-sonar-ring-1 pointer-events-none"
            />
            <circle
              r="15"
              fill="none"
              stroke="#FFB020"
              className="animate-sonar-ring-2 pointer-events-none"
            />

            {/* Rotating Star Radar Crosshair */}
            <circle r="22" fill="none" stroke="#FFB020" strokeWidth="1" strokeDasharray="3 3" opacity="0.5" />
            <g>
              <animateTransform
                attributeName="transform"
                type="rotate"
                from="0"
                to="360"
                dur="30s"
                repeatCount="indefinite"
              />
              <line x1="-12" y1="0" x2="12" y2="0" stroke="#FFE082" strokeWidth="1.2" />
              <line x1="0" y1="-12" x2="0" y2="12" stroke="#FFE082" strokeWidth="1.2" />
            </g>

            {/* Solid Golden Beacon Core */}
            <circle r="8" fill="#FFB020" filter="url(#glow-gold)" />
            <circle r="3.5" fill="#FFFFFF" />

            {/* Clean Bhubaneswar HQ Label (Positioned right below beacon, clean & unobtrusive) */}
            <g transform="translate(14, 8)" className="pointer-events-none">
              <rect
                x="0"
                y="0"
                width="142"
                height="22"
                rx="11"
                fill="#060B22"
                stroke="rgba(255, 176, 32, 0.4)"
                strokeWidth="1"
              />
              <circle cx="10" cy="11" r="3" fill="#10B981">
                <animate attributeName="opacity" values="1;0.4;1" dur="2s" repeatCount="indefinite" />
              </circle>
              <text
                x="18"
                y="14"
                fill="#FFB020"
                fontSize="9"
                fontFamily="var(--font-heading), sans-serif"
                fontWeight="800"
                letterSpacing="0.06em"
              >
                BHUBANESWAR HQ
              </text>
            </g>
          </g>
        </svg>
      </div>

      {/* 5. Bottom Gradient Transition into next section */}
      <div className="absolute bottom-0 inset-x-0 h-28 bg-gradient-to-t from-[#040716] to-transparent pointer-events-none" />
    </div>
  );
}

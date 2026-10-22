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

// Bhubaneswar HQ exact map dot coordinates: (1281.5, 401.5)
const ROUTES: FlightRoute[] = [
  {
    id: "nyc",
    name: "New York",
    tag: "US East (ET)",
    path: "M1281.5 401.5 Q847 180 412.5 291.5",
    destX: 412.5,
    destY: 291.5,
    duration: 4.2,
  },
  {
    id: "sfo",
    name: "San Francisco",
    tag: "US West (PT)",
    path: "M1281.5 401.5 Q726 150 170.5 302.5",
    destX: 170.5,
    destY: 302.5,
    duration: 5.0,
  },
  {
    id: "toronto",
    name: "Toronto",
    tag: "Canada (ET)",
    path: "M1281.5 401.5 Q852 170 423.5 269.5",
    destX: 423.5,
    destY: 269.5,
    duration: 4.0,
  },
  {
    id: "london",
    name: "London",
    tag: "UK (GMT)",
    path: "M1281.5 401.5 Q1061 210 841.5 247.5",
    destX: 841.5,
    destY: 247.5,
    duration: 3.4,
  },
  {
    id: "frankfurt",
    name: "Frankfurt",
    tag: "Europe (CET)",
    path: "M1281.5 401.5 Q1094 220 907.5 247.5",
    destX: 907.5,
    destY: 247.5,
    duration: 3.5,
  },
  {
    id: "dubai",
    name: "Dubai",
    tag: "UAE (GST)",
    path: "M1281.5 401.5 Q1215 360 1149.5 379.5",
    destX: 1149.5,
    destY: 379.5,
    duration: 2.8,
  },
  {
    id: "singapore",
    name: "Singapore",
    tag: "Asia (SGT)",
    path: "M1281.5 401.5 Q1342 456 1402.5 511.5",
    destX: 1402.5,
    destY: 511.5,
    duration: 3.0,
  },
  {
    id: "sydney",
    name: "Sydney",
    tag: "Australia (AEST)",
    path: "M1281.5 401.5 Q1446 539 1611.5 676.5",
    destX: 1611.5,
    destY: 676.5,
    duration: 4.5,
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
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
      {/* 1. Deep Space Midnight Base */}
      <div className="absolute inset-0 bg-[#040716]" />

      {/* 2. Top Vignette */}
      <div className="absolute top-0 inset-x-0 h-32 sm:h-48 bg-gradient-to-b from-[#040716] via-[#040716]/95 to-transparent z-10 pointer-events-none" />

      {/* 3. Subtle Ambient Light Orbs */}
      <div className="absolute -top-24 right-1/4 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] rounded-full bg-[#1E3A8A]/15 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-1/4 w-[300px] sm:w-[450px] h-[300px] sm:h-[450px] rounded-full bg-[#FFB020]/10 blur-3xl pointer-events-none" />

      {/* 4. Interactive 3D Tilting Globe & Flight Arc System */}
      <div
        className="relative w-full h-full transition-transform duration-500 ease-out flex items-center justify-center"
        style={{
          transform: `perspective(1200px) rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg)`,
        }}
      >
        {/* Live Vector Telemetry & Precise Single Dots Map SVG */}
        <svg
          viewBox="0 0 1800 900"
          preserveAspectRatio="xMidYMid slice"
          className="absolute inset-0 w-full h-full pointer-events-auto"
        >
          <defs>
            {/* Glowing Golden Arc Glow */}
            <filter id="glow-gold" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="2" result="blur" />
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
              <stop offset="0%" stopColor="#FFB020" stopOpacity="0.4" />
              <stop offset="50%" stopColor="#FF8A00" stopOpacity="0.1" />
              <stop offset="100%" stopColor="#FF8A00" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Dotted World Map Base perfectly synced in 1800x900 coordinate space */}
          <image
            href="/images/world-dots-base.svg"
            x="0"
            y="0"
            width="1800"
            height="900"
            preserveAspectRatio="xMidYMid slice"
            opacity="0.32"
          />

          {/* Subtle Network Vector Arcs (Clean, non-distracting connectivity lines) */}
          <g id="flight-arcs">
            {ROUTES.map((route) => {
              const isHovered = hoveredRoute === route.id;
              return (
                <path
                  key={`arc-${route.id}`}
                  d={route.path}
                  fill="none"
                  stroke="#FFB020"
                  strokeWidth={isHovered ? 2 : 1.2}
                  strokeOpacity={isHovered ? 0.75 : 0.22}
                  strokeLinecap="round"
                  strokeDasharray={isHovered ? "none" : "5 5"}
                  className="transition-all duration-300 pointer-events-none"
                />
              );
            })}
          </g>

          {/* Exact Destination Location Dots (One single dot per location on the exact map dot) */}
          <g id="location-dots">
            {ROUTES.map((route) => {
              const isHovered = hoveredRoute === route.id;
              return (
                <g
                  key={`dot-${route.id}`}
                  transform={`translate(${route.destX}, ${route.destY})`}
                  onMouseEnter={() => setHoveredRoute(route.id)}
                  onMouseLeave={() => setHoveredRoute(null)}
                  className="cursor-pointer group"
                >
                  {/* Subtle pulsing outer ring */}
                  <circle
                    r="7"
                    fill="none"
                    stroke="#38BDF8"
                    strokeWidth="1.2"
                    opacity="0.45"
                  >
                    <animate
                      attributeName="r"
                      values="5;11;5"
                      dur="3.2s"
                      repeatCount="indefinite"
                    />
                    <animate
                      attributeName="opacity"
                      values="0.6;0.1;0.6"
                      dur="3.2s"
                      repeatCount="indefinite"
                    />
                  </circle>

                  {/* Single Exact Location Dot */}
                  <circle r="3.5" fill="#38BDF8" filter="url(#glow-cyan)" />
                  <circle r="1.5" fill="#FFFFFF" />

                  {/* Clean city label on hover */}
                  <g
                    className={`transition-all duration-200 pointer-events-none ${
                      isHovered ? "opacity-100 scale-100" : "opacity-0 scale-95"
                    }`}
                  >
                    <rect
                      x="10"
                      y="-12"
                      width={route.name.length * 7 + 24}
                      height="20"
                      rx="10"
                      fill="#060B22"
                      stroke="#FFB020"
                      strokeWidth="1"
                    />
                    <circle cx="18" cy="-2" r="2.5" fill="#38BDF8" />
                    <text
                      x="26"
                      y="1.5"
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
              );
            })}
          </g>

          {/* =========================================================================
              BHUBANESWAR INDIA HEADQUARTERS HUB BEACON (1281.5, 401.5)
             ========================================================================= */}
          <g id="bhubaneswar-hub" transform="translate(1281.5, 401.5)">
            {/* Subtle Gold Halo */}
            <circle r="90" fill="url(#hq-core-halo)" className="pointer-events-none" />

            {/* Single Exact HQ Dot & Pulsing Beacon Ring */}
            <circle
              r="12"
              fill="none"
              stroke="#FFB020"
              strokeWidth="1.5"
              opacity="0.6"
            >
              <animate
                attributeName="r"
                values="8;20;8"
                dur="2.5s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="opacity"
                values="0.8;0.1;0.8"
                dur="2.5s"
                repeatCount="indefinite"
              />
            </circle>

            {/* Solid Golden Beacon Core */}
            <circle r="5" fill="#FFB020" filter="url(#glow-gold)" />
            <circle r="2" fill="#FFFFFF" />

            {/* Clean Bhubaneswar HQ Badge */}
            <g transform="translate(12, 6)" className="pointer-events-none">
              <rect
                x="0"
                y="0"
                width="134"
                height="20"
                rx="10"
                fill="#060B22"
                stroke="rgba(255, 176, 32, 0.5)"
                strokeWidth="1"
              />
              <circle cx="9" cy="10" r="2.5" fill="#10B981" />
              <text
                x="16"
                y="13"
                fill="#FFB020"
                fontSize="8.5"
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

"use client";

import React, { useState } from "react";
import { Sparkles } from "lucide-react";

export function BouncingGlassBall() {
  const [isSuperBounce, setIsSuperBounce] = useState(false);

  const handleClick = () => {
    setIsSuperBounce(true);
    setTimeout(() => setIsSuperBounce(false), 1000);
  };

  return (
    <div
      onClick={handleClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") handleClick();
      }}
      title="Tap for a power bounce!"
      className="relative flex flex-col items-center justify-end w-full max-w-[300px] h-[160px] sm:h-[175px] mx-auto select-none cursor-pointer group focus:outline-none"
    >
      {/* =========================================================================
          BUTTERY SMOOTH 60FPS / 120FPS GPU COMPOSITOR ANIMATIONS
          ========================================================================= */}
      <style>{`
        @keyframes ultraSmoothBounce {
          0%, 100% {
            transform: translateY(-48px) scale3d(1, 1, 1);
            animation-timing-function: cubic-bezier(0.36, 0, 0.68, 0.22);
          }
          47% {
            transform: translateY(0px) scale3d(0.97, 1.04, 1);
            animation-timing-function: cubic-bezier(0.12, 0.88, 0.24, 1);
          }
          50% {
            transform: translateY(4px) scale3d(1.15, 0.85, 1);
            animation-timing-function: cubic-bezier(0.12, 0.88, 0.24, 1);
          }
          53% {
            transform: translateY(-4px) scale3d(0.96, 1.05, 1);
            animation-timing-function: cubic-bezier(0.22, 0.78, 0.36, 1);
          }
        }

        @keyframes ultraSmoothShadow {
          0%, 100% {
            transform: scale(0.6);
            opacity: 0.22;
            filter: blur(9px);
            animation-timing-function: cubic-bezier(0.36, 0, 0.68, 0.22);
          }
          50% {
            transform: scale(1.18, 0.72);
            opacity: 0.9;
            filter: blur(2px);
            animation-timing-function: cubic-bezier(0.22, 0.78, 0.36, 1);
          }
        }

        @keyframes ultraSmoothCaustic {
          0%, 42%, 58%, 100% {
            opacity: 0;
            transform: scale(0.4);
          }
          50% {
            opacity: 0.95;
            transform: scale(1.18);
            filter: blur(1px);
          }
        }

        @keyframes ultraSmoothGlint {
          0%, 100% {
            opacity: 0.8;
            transform: scale(1) rotate(0deg);
          }
          50% {
            opacity: 1;
            transform: scale(1.25) rotate(45deg);
          }
        }

        .ultra-glass-ball {
          animation: ultraSmoothBounce 1.15s infinite;
          transform-origin: center bottom;
          will-change: transform;
        }

        .ultra-glass-ball-fast {
          animation: ultraSmoothBounce 0.85s infinite;
          transform-origin: center bottom;
          will-change: transform;
        }

        .ultra-shadow-sync {
          animation: ultraSmoothShadow 1.15s infinite;
          transform-origin: center center;
          will-change: transform, opacity, filter;
        }

        .ultra-shadow-sync-fast {
          animation: ultraSmoothShadow 0.85s infinite;
          transform-origin: center center;
          will-change: transform, opacity, filter;
        }

        .ultra-caustic-sync {
          animation: ultraSmoothCaustic 1.15s infinite;
          transform-origin: center center;
          will-change: transform, opacity;
        }

        .ultra-glint {
          animation: ultraSmoothGlint 2.5s ease-in-out infinite;
        }
      `}</style>

      {/* =========================================================================
          STAGE 1: GROUND SHADOW & OPTICAL CAUSTIC
          ========================================================================= */}
      <div className="absolute bottom-2 sm:bottom-3 inset-x-0 flex items-center justify-center pointer-events-none z-0">
        {/* Soft Ambient Floor Glow */}
        <div className="absolute w-48 sm:w-56 h-8 rounded-[50%] bg-emerald-500/15 blur-xl" />

        {/* Synchronized Physical Contact Shadow */}
        <div
          className={`w-24 sm:w-28 h-6 sm:h-7 rounded-[50%] bg-gradient-to-r from-[#020512] via-[#000206] to-[#020512] ${
            isSuperBounce ? "ultra-shadow-sync-fast" : "ultra-shadow-sync"
          }`}
        />

        {/* Optical Caustic Spot (Overhead light focused by glass onto ground) */}
        <div className="absolute w-12 sm:w-14 h-3.5 sm:h-4 rounded-[50%] bg-gradient-to-r from-emerald-300 via-white to-emerald-300 blur-[1.5px] shadow-[0_0_18px_#34D399] ultra-caustic-sync" />
      </div>

      {/* =========================================================================
          STAGE 2: THE 3D OPTICAL GLASS BALL
          ========================================================================= */}
      <div
        className={`relative mb-3 sm:mb-4 cursor-pointer group focus:outline-none z-10 ${
          isSuperBounce ? "ultra-glass-ball-fast" : "ultra-glass-ball"
        }`}
      >
        {/* Glass Sphere Body (Balanced 112px - 128px diameter) */}
        <div
          className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden transition-transform duration-200 group-hover:scale-105"
          style={{
            background:
              "radial-gradient(circle at 35% 26%, rgba(255, 255, 255, 0.52) 0%, rgba(255, 255, 255, 0.16) 26%, rgba(16, 185, 129, 0.08) 52%, rgba(6, 15, 42, 0.75) 85%, rgba(2, 5, 18, 0.98) 100%)",
            boxShadow:
              "0 18px 40px -6px rgba(16, 185, 129, 0.42), 0 28px 60px -10px rgba(2, 5, 20, 0.75), inset 0 0 26px rgba(255, 255, 255, 0.5), inset 0 0 50px rgba(52, 211, 153, 0.35), inset 0 -20px 34px rgba(16, 185, 129, 0.65), inset 0 -4px 12px rgba(255, 255, 255, 0.8), inset 0 2px 5px rgba(255, 255, 255, 0.95)",
            border: "1.5px solid rgba(255, 255, 255, 0.65)",
            backdropFilter: "blur(10px)",
          }}
        >
          {/* Internal Ambient Refraction Tint */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-emerald-600/25 via-transparent to-cyan-300/20 pointer-events-none" />

          {/* Deep Core Luminescence for Checkmark */}
          <div className="absolute inset-x-6 inset-y-6 rounded-full bg-emerald-500/30 blur-lg pointer-events-none" />

          {/* =====================================================================
              THE CORRECT SIGN (3D CHECKMARK SUSPENDED IN SOLID GLASS)
              ===================================================================== */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <svg
              className="w-14 h-14 sm:w-16 sm:h-16 filter drop-shadow-[0_3px_14px_rgba(16,185,129,0.95)]"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient
                  id="proCheckmarkGrad"
                  x1="2"
                  y1="2"
                  x2="22"
                  y2="22"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0%" stopColor="#FFFFFF" />
                  <stop offset="30%" stopColor="#A7F3D0" />
                  <stop offset="65%" stopColor="#34D399" />
                  <stop offset="100%" stopColor="#059669" />
                </linearGradient>

                <filter id="proInnerShadow" x="-20%" y="-20%" width="140%" height="140%">
                  <feDropShadow
                    dx="0"
                    dy="2.5"
                    stdDeviation="2"
                    floodColor="#022c22"
                    floodOpacity="0.85"
                  />
                  <feDropShadow
                    dx="0"
                    dy="0"
                    stdDeviation="6"
                    floodColor="#34d399"
                    floodOpacity="0.8"
                  />
                </filter>
              </defs>

              {/* Bold 3D Checkmark Body */}
              <path
                d="M5 13.2L9.5 17.5L19 7"
                stroke="url(#proCheckmarkGrad)"
                strokeWidth="3.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                filter="url(#proInnerShadow)"
              />

              {/* Specular White Ridge Line on Checkmark Spine */}
              <path
                d="M5 13.2L9.5 17.5L19 7"
                stroke="#FFFFFF"
                strokeWidth="1.1"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeOpacity="0.9"
              />
            </svg>
          </div>

          {/* =====================================================================
              GLASS SURFACE SPECULAR CRESCENT & GLINTS (IN FRONT OF CHECKMARK)
              ===================================================================== */}

          {/* Primary Curved Specular Glare (Top-Left) */}
          <div
            className="absolute top-2 left-2.5 sm:top-2.5 sm:left-3 w-18 h-9 sm:w-20 sm:h-10 rounded-[50%] pointer-events-none"
            style={{
              background:
                "linear-gradient(145deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.45) 45%, rgba(255, 255, 255, 0) 100%)",
              transform: "rotate(-32deg)",
              filter: "blur(0.4px)",
            }}
          />

          {/* Secondary Pinpoint Glint */}
          <div className="absolute top-4 left-6 sm:top-5 sm:left-7 w-2.5 h-2.5 rounded-full bg-white shadow-[0_0_10px_2px_#ffffff] pointer-events-none ultra-glint" />

          {/* 4-Point Diamond Star Sparkle */}
          <div className="absolute top-3 left-5 sm:top-4 sm:left-6 w-4 h-4 sm:w-5 sm:h-5 pointer-events-none ultra-glint opacity-95">
            <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-white">
              <path
                d="M12 0L14.2 9.8L24 12L14.2 14.2L12 24L9.8 14.2L0 12L9.8 9.8L12 0Z"
                fill="white"
              />
            </svg>
          </div>

          {/* Bottom-Right Reflected Caustic Rim Light */}
          <div
            className="absolute -bottom-1 -right-1 w-18 h-18 sm:w-20 sm:h-20 rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(circle at bottom right, rgba(52, 211, 153, 0.8) 0%, rgba(255, 255, 255, 0.4) 22%, transparent 65%)",
            }}
          />

          {/* Crisp Lower Rim Arc */}
          <div className="absolute bottom-1 inset-x-7 sm:inset-x-8 h-2.5 rounded-[50%] border-b border-white/70 blur-[0.2px] pointer-events-none" />

          {/* Subtle Diagonal Glass Refraction Wash */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-white/[0.08] to-transparent pointer-events-none" />
        </div>
      </div>
    </div>
  );
}

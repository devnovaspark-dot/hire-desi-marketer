"use client";

import React, { useRef, useState, useEffect } from "react";
import "./CenterFlow.css";
import { cn } from "@/lib/utils";

export interface CenterFlowNode {
  id: string;
  title: string;
  subtitle?: string;
  badge?: string;
  icon?: React.ReactNode;
  metric?: string;
  content?: React.ReactNode;
  color?: string;
  position?: { x: number; y: number }; // Relative percentage (0-100)
  data?: any;
}

export interface CenterFlowProps {
  hub: {
    title?: string;
    subtitle?: string;
    badge?: string;
    icon?: React.ReactNode;
    content?: React.ReactNode;
    size?: number;
  };
  nodes: CenterFlowNode[];
  activeNodeId?: string;
  onNodeClick?: (node: CenterFlowNode) => void;
  pulseColor?: string;
  lineColor?: string;
  pulseDuration?: number;
  className?: string;
  style?: React.CSSProperties;
}

// Default balanced radial positions for up to 6 nodes
const DEFAULT_NODE_POSITIONS = [
  { x: 18, y: 22 }, // Top-Left
  { x: 82, y: 22 }, // Top-Right
  { x: 18, y: 78 }, // Bottom-Left
  { x: 82, y: 78 }, // Bottom-Right
  { x: 12, y: 50 }, // Far-Left
  { x: 88, y: 50 }, // Far-Right
];

export default function CenterFlow({
  hub,
  nodes = [],
  activeNodeId,
  onNodeClick,
  pulseColor = "#FFB020",
  lineColor = "rgba(255, 255, 255, 0.16)",
  pulseDuration = 2.4,
  className = "",
  style,
}: CenterFlowProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState<{ width: number; height: number }>({
    width: 900,
    height: 520,
  });

  // Track container dimensions for precise SVG path generation
  useEffect(() => {
    const updateSize = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      setDimensions({
        width: rect.width || 900,
        height: rect.height || 520,
      });
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const centerX = dimensions.width / 2;
  const centerY = dimensions.height / 2;

  return (
    <div
      ref={containerRef}
      className={`center-flow-container ${className}`.trim()}
      style={style}
    >
      {/* ================================================================== */}
      {/* 1. DYNAMIC SVG CONNECTING LINES WITH OUTWARD TRAVELING PULSES      */}
      {/* ================================================================== */}
      <svg
        className="center-flow-svg"
        viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}
        fill="none"
      >
        <defs>
          <filter id="hub-glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {nodes.map((node, index) => {
          const pos = node.position || DEFAULT_NODE_POSITIONS[index % DEFAULT_NODE_POSITIONS.length];
          const targetX = (pos.x / 100) * dimensions.width;
          const targetY = (pos.y / 100) * dimensions.height;
          const isActive = node.id === activeNodeId;
          const activePulseColor = node.color || pulseColor;

          // Compute smooth cubic bezier path from center hub to outer node
          // dx, dy for control point curvature
          const dx = targetX - centerX;
          const dy = targetY - centerY;
          const cp1X = centerX + dx * 0.45;
          const cp1Y = centerY + dy * 0.1;
          const cp2X = centerX + dx * 0.55;
          const cp2Y = targetY;

          const pathD = `M ${centerX} ${centerY} C ${cp1X} ${cp1Y}, ${cp2X} ${cp2Y}, ${targetX} ${targetY}`;

          return (
            <g key={node.id}>
              {/* Base Line */}
              <path
                d={pathD}
                stroke={isActive ? activePulseColor : lineColor}
                strokeWidth={isActive ? 2.5 : 1.5}
                strokeDasharray={isActive ? "none" : "4 4"}
                strokeOpacity={isActive ? 0.9 : 0.6}
                className="transition-all duration-300"
              />

              {/* Glowing Line Underlay when Active */}
              {isActive && (
                <path
                  d={pathD}
                  stroke={activePulseColor}
                  strokeWidth={5}
                  strokeOpacity={0.25}
                  filter="url(#hub-glow)"
                />
              )}

              {/* Primary Outward Traveling Photon Pulse */}
              <circle r={isActive ? 4 : 3} fill={activePulseColor} className="center-flow-pulse">
                <animateMotion
                  path={pathD}
                  dur={`${pulseDuration + (index % 3) * 0.3}s`}
                  repeatCount="indefinite"
                />
              </circle>

              {/* Secondary Staggered Outward Pulse */}
              <circle
                r={isActive ? 2.5 : 2}
                fill={activePulseColor}
                opacity={0.65}
                className="center-flow-pulse"
              >
                <animateMotion
                  path={pathD}
                  dur={`${pulseDuration + (index % 3) * 0.3}s`}
                  begin={`${pulseDuration * 0.5}s`}
                  repeatCount="indefinite"
                />
              </circle>
            </g>
          );
        })}
      </svg>

      {/* ================================================================== */}
      {/* 2. CENTRAL HUB (CORE ENGINE WITH PULSING AURA)                     */}
      {/* ================================================================== */}
      <div className="center-flow-hub">
        <div className="relative flex items-center justify-center">
          {/* Floor Shadow Under Hub */}
          <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-32 h-6 rounded-[100%] bg-black/20 blur-sm pointer-events-none" />

          {/* Outer Breathing Rings */}
          <div className="absolute w-44 h-44 rounded-full border-2 border-[#FFB020]/35 animate-ping opacity-30 pointer-events-none" />
          <div className="absolute w-36 h-36 rounded-full border border-[#FFB020]/25 animate-pulse pointer-events-none" />

          {/* Central Hub Container */}
          <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-3xl bg-gradient-to-br from-[#060B22] via-[#081232] to-[#040817] border-2 border-[#FFB020] shadow-[0_12px_40px_rgba(255,176,32,0.35)] flex flex-col items-center justify-center p-3 text-center z-10 select-none">
            {hub.content ? (
              hub.content
            ) : (
              <>
                {hub.badge && (
                  <span className="text-[9px] font-mono font-bold uppercase tracking-wider text-[#FFB020] bg-white/5 px-2 py-0.5 rounded-full border border-[#FFB020]/30 mb-1 shadow-xs">
                    {hub.badge}
                  </span>
                )}
                {hub.icon && <div className="text-[#FFB020] mb-1">{hub.icon}</div>}
                <div className="font-display font-black text-xs sm:text-sm text-white tracking-tight leading-tight">
                  {hub.title || "Craft Core"}
                </div>
                {hub.subtitle && (
                  <div className="text-[9.5px] text-slate-400 font-mono mt-0.5 truncate max-w-full">
                    {hub.subtitle}
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>

      {/* ================================================================== */}
      {/* 3. CONNECTED OUTER NODES (RADIAL BENCHMARK SATELLITES)             */}
      {/* ================================================================== */}
      {nodes.map((node, index) => {
        const pos = node.position || DEFAULT_NODE_POSITIONS[index % DEFAULT_NODE_POSITIONS.length];
        const isActive = node.id === activeNodeId;

        return (
          <div
            key={node.id}
            onClick={() => onNodeClick?.(node)}
            className={cn(
              "center-flow-node cursor-pointer -translate-x-1/2 -translate-y-1/2",
              isActive && "z-30 scale-105"
            )}
            style={{
              left: `${pos.x}%`,
              top: `${pos.y}%`,
            }}
          >
            {node.content ? (
              node.content
            ) : (
              <div
                className={cn(
                  "p-3.5 sm:p-4 rounded-2xl border transition-all duration-300 w-[180px] sm:w-[220px] shadow-xl text-left select-none relative overflow-hidden",
                  isActive
                    ? "bg-[#060B22] border-[#FFB020] shadow-[0_15px_35px_rgba(255,176,32,0.3)] ring-2 ring-[#FFB020]/50 scale-105"
                    : "bg-[#081232] border-[#FFB020]/20 hover:border-[#FFB020]/50 hover:scale-102 shadow-lg"
                )}
              >
                {isActive && (
                  <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#FFB020] to-transparent pointer-events-none" />
                )}

                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[9.5px] font-mono font-bold uppercase tracking-wider text-[#FFB020]">
                    {node.badge || `Node 0${index + 1}`}
                  </span>
                  {node.metric && (
                    <span className="text-[9px] font-mono text-emerald-400 font-bold bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/20">
                      {node.metric}
                    </span>
                  )}
                </div>

                <div className="font-display font-black text-xs sm:text-sm text-white tracking-tight flex items-center gap-2">
                  {node.icon && <span>{node.icon}</span>}
                  <span className="truncate">{node.title}</span>
                </div>

                {node.subtitle && (
                  <div className="text-[10px] text-slate-300 font-normal mt-0.5 truncate">
                    {node.subtitle}
                  </div>
                )}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}


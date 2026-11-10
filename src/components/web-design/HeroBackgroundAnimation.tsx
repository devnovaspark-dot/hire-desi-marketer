"use client";

import React, { useEffect, useRef } from "react";

interface NodePoint {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
  baseAlpha: number;
}

export function HeroBackgroundAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Reduced motion check
    const prefersReducedMotion =
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false;

    let animationFrameId: number;
    let width = 0;
    let height = 0;
    let isVisible = true;

    // Mouse coordinates relative to canvas
    const mouse = {
      x: -1000,
      y: -1000,
      radius: 170,
      active: false,
    };

    // Color palette aligned with Hire Desi Marketer brand
    // Gold (#FFB020), Navy (#060B22), Sky/Cyan (#38BDF8), Warm Amber (#F59E0B)
    const colors = [
      "rgba(255, 176, 32, ", // Gold
      "rgba(56, 189, 248, ", // Sky Cyan
      "rgba(6, 11, 34, ",    // Navy
      "rgba(245, 158, 11, ", // Amber
    ];

    let nodes: NodePoint[] = [];

    const resize = () => {
      const rect = container.getBoundingClientRect();
      width = rect.width;
      height = rect.height;

      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      // Node density based on canvas area
      const nodeCount = Math.floor(Math.min(width * height / 16000, 48));

      nodes = [];
      for (let i = 0; i < nodeCount; i++) {
        const colorPrefix = colors[Math.floor(Math.random() * colors.length)];
        nodes.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.45,
          vy: (Math.random() - 0.5) * 0.45,
          radius: Math.random() * 1.8 + 1.2,
          color: colorPrefix,
          baseAlpha: Math.random() * 0.35 + 0.25,
        });
      }
    };

    const handlePointerMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      mouse.active = true;
    };

    const handlePointerLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
      mouse.active = false;
    };

    const draw = () => {
      if (!isVisible) {
        animationFrameId = requestAnimationFrame(draw);
        return;
      }

      ctx.clearRect(0, 0, width, height);

      // 1. Draw subtle interactive mouse spotlight glow
      if (mouse.active && mouse.x > 0 && mouse.y > 0) {
        const spotlightGradient = ctx.createRadialGradient(
          mouse.x,
          mouse.y,
          0,
          mouse.x,
          mouse.y,
          mouse.radius * 1.4
        );
        spotlightGradient.addColorStop(0, "rgba(255, 176, 32, 0.09)");
        spotlightGradient.addColorStop(0.5, "rgba(56, 189, 248, 0.04)");
        spotlightGradient.addColorStop(1, "rgba(255, 255, 255, 0)");

        ctx.fillStyle = spotlightGradient;
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, mouse.radius * 1.4, 0, Math.PI * 2);
        ctx.fill();
      }

      // 2. Update and draw nodes + connecting constellation lines
      const maxDistance = 120;

      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];

        if (!prefersReducedMotion) {
          node.x += node.vx;
          node.y += node.vy;

          // Bounce off boundaries gently
          if (node.x < 0 || node.x > width) node.vx *= -1;
          if (node.y < 0 || node.y > height) node.vy *= -1;
        }

        // Mouse proximity calculation
        const dxMouse = mouse.x - node.x;
        const dyMouse = mouse.y - node.y;
        const distMouse = Math.hypot(dxMouse, dyMouse);
        const isNearMouse = distMouse < mouse.radius;

        // Draw connections between nearby nodes
        for (let j = i + 1; j < nodes.length; j++) {
          const other = nodes[j];
          const dx = node.x - other.x;
          const dy = node.y - other.y;
          const dist = Math.hypot(dx, dy);

          if (dist < maxDistance) {
            const distanceAlpha = 1 - dist / maxDistance;
            let lineAlpha = distanceAlpha * 0.18;

            if (isNearMouse || Math.hypot(mouse.x - other.x, mouse.y - other.y) < mouse.radius) {
              lineAlpha = Math.min(lineAlpha * 2.5, 0.45);
            }

            ctx.strokeStyle = `rgba(217, 155, 38, ${lineAlpha})`;
            ctx.lineWidth = lineAlpha > 0.25 ? 1.2 : 0.8;
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(other.x, other.y);
            ctx.stroke();
          }
        }

        // Draw node dot
        let currentAlpha = node.baseAlpha;
        let currentRadius = node.radius;

        if (isNearMouse) {
          const proximityFactor = 1 - distMouse / mouse.radius;
          currentAlpha = Math.min(currentAlpha + proximityFactor * 0.5, 0.95);
          currentRadius += proximityFactor * 1.5;
        }

        ctx.fillStyle = `${node.color}${currentAlpha})`;
        ctx.beginPath();
        ctx.arc(node.x, node.y, currentRadius, 0, Math.PI * 2);
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    // Observers
    const resizeObserver = new ResizeObserver(() => resize());
    resizeObserver.observe(container);

    const intersectionObserver = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting;
    });
    intersectionObserver.observe(container);

    window.addEventListener("mousemove", handlePointerMove, { passive: true });
    document.addEventListener("mouseleave", handlePointerLeave);

    resize();
    draw();

    return () => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
      window.removeEventListener("mousemove", handlePointerMove);
      document.removeEventListener("mouseleave", handlePointerLeave);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 pointer-events-none overflow-hidden select-none"
      aria-hidden="true"
    >
      {/* 1. Luminous Ambient Gradient Orbs */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[720px] sm:w-[950px] h-[400px] bg-gradient-to-b from-[#FFB020]/16 via-[#FFE082]/10 to-transparent rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute top-1/3 -left-36 w-80 sm:w-[480px] h-80 sm:h-[480px] bg-[#060B22]/6 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 -right-36 w-80 sm:w-[500px] h-80 sm:h-[500px] bg-cyan-400/8 rounded-full blur-[140px] pointer-events-none" />

      {/* 2. Delicate Architectural Blueprint Dot Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#CBD5E1_1px,transparent_1px)] [background-size:28px_28px] opacity-60" />

      {/* 3. Subtle Animated Radiant Beam at the Top */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#FFB020]/40 to-transparent" />

      {/* 4. High-Performance HTML5 Canvas for Interactive Particle Constellations */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full block" />
    </div>
  );
}

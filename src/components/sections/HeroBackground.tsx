"use client";

import React, { useEffect, useRef } from "react";

export function HeroBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 800);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
      height = canvas.height = canvas.parentElement?.clientHeight || 800;
    };

    window.addEventListener("resize", handleResize);

    // Create particles
    const particleCount = Math.min(55, Math.floor((width * height) / 18000));
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      color: string;
      alpha: number;
      baseAlpha: number;
    }> = [];

    const colors = ["#FFB020", "#FFFFFF", "#60A5FA", "#38BDF8", "#F59E0B"];

    for (let i = 0; i < particleCount; i++) {
      const baseAlpha = 0.2 + Math.random() * 0.6;
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        radius: 1 + Math.random() * 2,
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: baseAlpha,
        baseAlpha,
      });
    }

    // Cursor position for interactive glow
    let mouseX = -1000;
    let mouseY = -1000;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Animation loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw subtle interactive cursor spotlight
      if (mouseX > 0 && mouseY > 0) {
        const spotGrad = ctx.createRadialGradient(mouseX, mouseY, 0, mouseX, mouseY, 280);
        spotGrad.addColorStop(0, "rgba(255, 176, 32, 0.08)");
        spotGrad.addColorStop(0.5, "rgba(59, 130, 246, 0.04)");
        spotGrad.addColorStop(1, "rgba(0, 0, 0, 0)");
        ctx.fillStyle = spotGrad;
        ctx.fillRect(0, 0, width, height);
      }

      // Update and draw particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        // Subtle mouse repulsion/attraction
        const dx = mouseX - p.x;
        const dy = mouseY - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120) {
          p.alpha = Math.min(1, p.baseAlpha + 0.4);
        } else {
          p.alpha = p.baseAlpha;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.fill();

        // Connect nearby particles
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dist2 = Math.hypot(p.x - p2.x, p.y - p2.y);
          if (dist2 < 110) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = "#FFB020";
            ctx.globalAlpha = (1 - dist2 / 110) * 0.12;
            ctx.lineWidth = 0.75;
            ctx.stroke();
          }
        }
      }

      ctx.globalAlpha = 1;
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
      {/* 1. Deep Space Atmospheric Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#040716] via-[#070D26] to-[#040716]" />

      {/* 2. Pulsing Multi-Layered Aurora Orbs */}
      <div className="absolute -top-20 -left-20 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-[#FFB020]/15 via-[#F59E0B]/5 to-transparent blur-3xl animate-aurora" />
      <div
        className="absolute top-1/4 -right-32 w-[700px] h-[700px] rounded-full bg-gradient-to-bl from-[#3B82F6]/20 via-[#1D4ED8]/10 to-transparent blur-3xl animate-aurora"
        style={{ animationDelay: "-6s", animationDuration: "22s" }}
      />
      <div
        className="absolute bottom-0 left-1/3 w-[550px] h-[550px] rounded-full bg-gradient-to-t from-[#8B5CF6]/15 via-[#6366F1]/5 to-transparent blur-3xl animate-aurora"
        style={{ animationDelay: "-11s", animationDuration: "25s" }}
      />

      {/* 3. Subtle Perspective Grid Floor */}
      <div className="absolute inset-0 hero-perspective-grid opacity-60" />

      {/* 4. Interactive Constellation Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ opacity: 0.85 }}
      />

      {/* 5. Top Specular Rim */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    </div>
  );
}

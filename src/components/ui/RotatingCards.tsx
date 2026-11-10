"use client";

import React, {
  useEffect,
  useRef,
  useState,
  useCallback,
  useImperativeHandle,
  forwardRef,
} from "react";
import "./RotatingCards.css";

export interface RotatingCardItem {
  id?: string | number;
  title?: string;
  subtitle?: string;
  number?: string;
  badge?: string;
  tag?: string;
  content?: React.ReactNode;
  backContent?: React.ReactNode;
  color?: string;
  [key: string]: any;
}

export interface RotatingCardsHandle {
  goTo: (index: number) => void;
  next: () => void;
  prev: () => void;
}

export interface RotatingCardsProps {
  cards: RotatingCardItem[];
  radius?: number;
  cardWidth?: number;
  cardHeight?: number;
  tilt?: number;
  autoRotate?: boolean;
  autoRotateSpeed?: number;
  pauseOnHover?: boolean;
  selectedIndex?: number;
  onCardChange?: (index: number) => void;
  onCardClick?: (index: number) => void;
  className?: string;
  style?: React.CSSProperties;
}

const normalizeAngle = (angle: number) => {
  return ((angle % 360) + 360) % 360;
};

const shortestAngleDiff = (from: number, to: number) => {
  const diff = (to - from) % 360;
  return ((diff + 540) % 360) - 180;
};

const RotatingCards = forwardRef<RotatingCardsHandle, RotatingCardsProps>(
  (
    {
      cards = [],
      radius = 420,
      cardWidth = 270,
      cardHeight = 360,
      tilt = 12,
      autoRotate = true,
      autoRotateSpeed = 0.1,
      pauseOnHover = true,
      selectedIndex,
      onCardChange,
      onCardClick,
      className = "",
      style,
    },
    ref
  ) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [rotationY, setRotationY] = useState<number>(0);
    const [responsiveRadius, setResponsiveRadius] = useState<number>(radius);
    const [activeIndex, setActiveIndex] = useState<number>(0);

    const rotationRef = useRef<number>(0);
    const velocityRef = useRef<number>(0);
    const isDraggingRef = useRef<boolean>(false);
    const startXRef = useRef<number>(0);
    const lastXRef = useRef<number>(0);
    const lastTimeRef = useRef<number>(0);
    const isHoveredRef = useRef<boolean>(false);
    const targetRotationRef = useRef<number | null>(null);
    const rafRef = useRef<number | null>(null);
    const lastActiveRef = useRef<number>(0);

    const total = cards.length || 1;
    const angleStep = 360 / total;

    // Handle responsive radius for various screen sizes
    useEffect(() => {
      const updateRadius = () => {
        if (!containerRef.current) return;
        const w = containerRef.current.clientWidth;
        if (w < 480) {
          setResponsiveRadius(Math.max(220, radius * 0.58));
        } else if (w < 768) {
          setResponsiveRadius(Math.max(280, radius * 0.75));
        } else if (w < 1024) {
          setResponsiveRadius(Math.max(340, radius * 0.88));
        } else {
          setResponsiveRadius(radius);
        }
      };

      updateRadius();
      window.addEventListener("resize", updateRadius);
      return () => window.removeEventListener("resize", updateRadius);
    }, [radius]);

    // Go to specific card index smoothly
    const goToIndex = useCallback(
      (index: number) => {
        const targetCardAngle = -index * angleStep;
        const currentRot = rotationRef.current;
        const diff = shortestAngleDiff(currentRot, targetCardAngle);
        targetRotationRef.current = currentRot + diff;
        velocityRef.current = 0;
      },
      [angleStep]
    );

    // Controlled index support
    useEffect(() => {
      if (typeof selectedIndex === "number" && selectedIndex !== activeIndex) {
        goToIndex(selectedIndex);
      }
    }, [selectedIndex, goToIndex, activeIndex]);

    useImperativeHandle(ref, () => ({
      goTo: (index: number) => goToIndex(index),
      next: () => {
        goToIndex((activeIndex + 1) % total);
      },
      prev: () => {
        goToIndex((activeIndex - 1 + total) % total);
      },
    }));

    // Main animation and physics loop with smooth inertia
    useEffect(() => {
      let lastFrameTime = performance.now();

      const animate = (time: number) => {
        const dt = Math.min((time - lastFrameTime) / 1000, 0.1);
        lastFrameTime = time;

        if (targetRotationRef.current !== null) {
          // Smooth spring to target
          const diff = targetRotationRef.current - rotationRef.current;
          if (Math.abs(diff) < 0.08) {
            rotationRef.current = targetRotationRef.current;
            targetRotationRef.current = null;
          } else {
            rotationRef.current += diff * Math.min(dt * 10, 0.45);
          }
        } else if (isDraggingRef.current) {
          // Controlled by pointer
        } else {
          // Inertia velocity decay
          if (Math.abs(velocityRef.current) > 0.01) {
            rotationRef.current += velocityRef.current;
            velocityRef.current *= Math.pow(0.92, dt * 60);
          } else {
            velocityRef.current = 0;
            // Auto-rotation when idle
            if (autoRotate && (!pauseOnHover || !isHoveredRef.current)) {
              rotationRef.current -= autoRotateSpeed * (dt * 60);
            }
          }
        }

        setRotationY(rotationRef.current);

        // Calculate currently frontmost card
        const normalized = normalizeAngle(-rotationRef.current);
        const currentFront = Math.round(normalized / angleStep) % total;

        if (currentFront !== lastActiveRef.current) {
          lastActiveRef.current = currentFront;
          setActiveIndex(currentFront);
          onCardChange?.(currentFront);
        }

        rafRef.current = requestAnimationFrame(animate);
      };

      rafRef.current = requestAnimationFrame(animate);

      return () => {
        if (rafRef.current) cancelAnimationFrame(rafRef.current);
      };
    }, [autoRotate, autoRotateSpeed, pauseOnHover, angleStep, total, onCardChange]);

    // Trackpad Horizontal & Mouse Wheel Smooth Scrolling
    useEffect(() => {
      const container = containerRef.current;
      if (!container) return;

      const handleNativeWheel = (e: WheelEvent) => {
        // If trackpad horizontal swipe or shift+wheel:
        if (Math.abs(e.deltaX) > Math.abs(e.deltaY) * 0.7) {
          e.preventDefault();
          const sensitivity = 0.09;
          velocityRef.current += e.deltaX * sensitivity;
          velocityRef.current = Math.max(-14, Math.min(14, velocityRef.current));
          targetRotationRef.current = null;
        } else if (isHoveredRef.current && Math.abs(e.deltaY) > 6) {
          // Responsive wheel rotation when mouse is over the cylinder
          const sensitivity = 0.04;
          velocityRef.current += e.deltaY * sensitivity;
          velocityRef.current = Math.max(-9, Math.min(9, velocityRef.current));
          targetRotationRef.current = null;
        }
      };

      container.addEventListener("wheel", handleNativeWheel, { passive: false });
      return () => container.removeEventListener("wheel", handleNativeWheel);
    }, []);

    // Pointer Drag Handlers
    const handlePointerDown = (e: React.PointerEvent) => {
      isDraggingRef.current = true;
      targetRotationRef.current = null;
      startXRef.current = e.clientX;
      lastXRef.current = e.clientX;
      lastTimeRef.current = performance.now();
      velocityRef.current = 0;

      containerRef.current?.setAttribute("data-dragging", "true");
      (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
    };

    const handlePointerMove = (e: React.PointerEvent) => {
      if (!isDraggingRef.current) return;

      const currentX = e.clientX;
      const now = performance.now();
      const deltaX = currentX - lastXRef.current;
      const dt = Math.max(now - lastTimeRef.current, 1);

      // Convert horizontal pixel drag to angular degrees
      const sensitivity = 0.4;
      rotationRef.current += deltaX * sensitivity;

      velocityRef.current = (deltaX / dt) * 16 * sensitivity;
      lastXRef.current = currentX;
      lastTimeRef.current = now;
    };

    const handlePointerUp = (e: React.PointerEvent) => {
      if (!isDraggingRef.current) return;
      isDraggingRef.current = false;
      containerRef.current?.removeAttribute("data-dragging");

      // Check if it was a quick click rather than a drag
      const totalMoved = Math.abs(e.clientX - startXRef.current);
      if (totalMoved < 6) {
        const target = (e.target as HTMLElement).closest("[data-card-index]");
        if (target) {
          const idx = Number(target.getAttribute("data-card-index"));
          if (!isNaN(idx)) {
            goToIndex(idx);
            onCardClick?.(idx);
          }
        }
      } else {
        // Clamp velocity for pleasant inertia throw
        velocityRef.current = Math.max(-14, Math.min(14, velocityRef.current));
      }

      (e.target as HTMLElement).releasePointerCapture?.(e.pointerId);
    };

    return (
      <div
        ref={containerRef}
        className={`rotating-cards-container ${className}`.trim()}
        style={{
          ...style,
          height: `${Math.max(cardHeight + 130, 480)}px`,
        }}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        onMouseEnter={() => {
          isHoveredRef.current = true;
        }}
        onMouseLeave={() => {
          isHoveredRef.current = false;
        }}
      >
        {/* Soft 3D Floor Reflection / Ground Shadow on Light Canvas */}
        <div
          className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[720px] max-w-[92%] h-24 rounded-[100%] pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(6, 11, 34, 0.18) 0%, rgba(6, 11, 34, 0.05) 45%, transparent 70%)",
          }}
        />

        <div className="rotating-cards-stage">
          <div
            className="rotating-cards-ring"
            style={{
              width: `${cardWidth}px`,
              height: `${cardHeight}px`,
              transform: `rotateX(${-tilt}deg) rotateY(${rotationY}deg)`,
            }}
          >
            {cards.map((card, idx) => {
              const cardAngle = idx * angleStep;

              // Calculate angular distance to camera for depth perception
              const currentAngle = normalizeAngle(cardAngle + rotationY);
              const angleRad = (currentAngle * Math.PI) / 180;
              const depth = Math.cos(angleRad); // 1 = front, -1 = back
              const isFront = depth > 0.15;
              const opacity = Math.max(0.45, (depth + 1) / 2 * 0.65 + 0.35);
              const scale = Math.max(0.85, 0.94 + depth * 0.12);

              return (
                <div
                  key={card.id ?? idx}
                  data-card-index={idx}
                  className="rotating-card-item cursor-pointer"
                  style={{
                    width: `${cardWidth}px`,
                    height: `${cardHeight}px`,
                    transform: `rotateY(${cardAngle}deg) translateZ(${responsiveRadius}px) scale(${scale})`,
                    opacity: opacity,
                    zIndex: Math.round((depth + 1) * 100),
                  }}
                  onClick={() => {
                    goToIndex(idx);
                    onCardClick?.(idx);
                  }}
                >
                  {/* Two-Sided 3D Card Structure */}
                  <div className="rotating-card-inner">
                    {/* Front Face: Shown when card faces the viewer */}
                    <div className="rotating-card-front">
                      {card.content}
                    </div>

                    {/* Back Face: Shown when card faces away (ZERO backwards reversed text!) */}
                    <div className="rotating-card-back">
                      {card.backContent ?? (
                        <div className="w-full h-full p-6 rounded-3xl bg-gradient-to-b from-[#0B1536] via-[#081232] to-[#04091A] border-2 border-white/10 shadow-2xl text-white flex flex-col justify-between items-center text-center select-none relative overflow-hidden">
                          {/* Ambient background lattice pattern */}
                          <div
                            className="absolute inset-0 bg-[radial-gradient(rgba(255,176,32,0.12)_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none"
                            aria-hidden="true"
                          />

                          <div className="w-full flex justify-between items-center z-10">
                            <span className="font-mono text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                              Agile Sprint {card.number ?? `0${idx + 1}`}
                            </span>
                            <span className="w-2 h-2 rounded-full bg-[#FFB020]" />
                          </div>

                          {/* Center 3D Luxury Monogram */}
                          <div className="z-10 flex flex-col items-center gap-2">
                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#FFB020]/20 to-white/5 border border-[#FFB020]/40 flex items-center justify-center shadow-[0_0_25px_rgba(255,176,32,0.25)]">
                              <span className="font-display font-black text-xl text-[#FFB020] tracking-wider">
                                HDM
                              </span>
                            </div>
                            <span className="text-[10px] font-mono tracking-widest uppercase text-slate-300 font-bold">
                              Verified Delivery
                            </span>
                          </div>

                          <div className="w-full pt-3 border-t border-white/10 flex items-center justify-between text-[9.5px] font-mono text-slate-400 z-10">
                            <span>SLA Guaranteed</span>
                            <span className="text-[#FFB020]">100% Quality</span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
);

RotatingCards.displayName = "RotatingCards";
export default RotatingCards;

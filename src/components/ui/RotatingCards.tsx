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
      cardWidth = 260,
      cardHeight = 360,
      tilt = 12,
      autoRotate = true,
      autoRotateSpeed = 0.12,
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

    // Handle responsive radius for smaller screens
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

    // Main animation and physics loop
    useEffect(() => {
      let lastFrameTime = performance.now();

      const animate = (time: number) => {
        const dt = Math.min((time - lastFrameTime) / 1000, 0.1);
        lastFrameTime = time;

        if (targetRotationRef.current !== null) {
          // Smooth spring to target
          const diff = targetRotationRef.current - rotationRef.current;
          if (Math.abs(diff) < 0.1) {
            rotationRef.current = targetRotationRef.current;
            targetRotationRef.current = null;
          } else {
            rotationRef.current += diff * Math.min(dt * 9, 0.4);
          }
        } else if (isDraggingRef.current) {
          // Controlled by pointer, no physics
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
      const sensitivity = 0.38;
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
      if (totalMoved < 5) {
        // Handle click on specific card if hit
        const target = (e.target as HTMLElement).closest("[data-card-index]");
        if (target) {
          const idx = Number(target.getAttribute("data-card-index"));
          if (!isNaN(idx)) {
            goToIndex(idx);
            onCardClick?.(idx);
          }
        }
      } else {
        // Clamp velocity for pleasant inertia
        velocityRef.current = Math.max(-12, Math.min(12, velocityRef.current));
      }

      (e.target as HTMLElement).releasePointerCapture?.(e.pointerId);
    };

    return (
      <div
        ref={containerRef}
        className={`rotating-cards-container ${className}`.trim()}
        style={{
          ...style,
          height: `${Math.max(cardHeight + 140, 480)}px`,
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
              const isFront = Math.abs(currentAngle) < angleStep * 0.75 || Math.abs(currentAngle - 360) < angleStep * 0.75;
              const angleRad = (currentAngle * Math.PI) / 180;
              const depth = Math.cos(angleRad); // 1 = front, -1 = back
              const opacity = Math.max(0.42, (depth + 1) / 2 * 0.7 + 0.3);
              const scale = Math.max(0.85, 0.92 + depth * 0.12);

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
                  {card.content ?? (
                    <div className="w-full h-full p-6 rounded-3xl bg-gradient-to-br from-[#060B22] to-[#081232] border border-[#FFB020]/30 shadow-2xl text-white flex flex-col justify-between select-none">
                      <div className="flex items-center justify-between">
                        <span className="text-3xl font-black font-display text-[#FFB020]">
                          {card.number ?? `0${idx + 1}`}
                        </span>
                        {card.badge && (
                          <span className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-white/10 text-emerald-400 border border-white/10">
                            {card.badge}
                          </span>
                        )}
                      </div>

                      <div>
                        <h4 className="text-lg font-bold font-display text-white tracking-tight">
                          {card.title}
                        </h4>
                        {card.subtitle && (
                          <p className="text-xs text-slate-300 mt-1 line-clamp-2">
                            {card.subtitle}
                          </p>
                        )}
                      </div>

                      {card.tag && (
                        <div className="text-[10.5px] font-mono text-slate-400 pt-2 border-t border-white/10">
                          {card.tag}
                        </div>
                      )}
                    </div>
                  )}
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

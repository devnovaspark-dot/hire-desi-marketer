"use client";

import React, {
  useState,
  useEffect,
  useRef,
  useMemo,
  useCallback,
  ReactNode,
  CSSProperties,
} from "react";
import { cn } from "@/lib/utils";

export interface TileRevealProps {
  images: string[];
  headline?: ReactNode;
  children?: ReactNode;
  columns?: number;
  gap?: number;
  gridWidth?: number;
  tileAspect?: number;
  tileRadius?: number;
  grayscale?: boolean;
  direction?: "top" | "bottom" | "alternate";
  stagger?: number;
  zoom?: number;
  spread?: number;
  scrollLength?: number;
  scrub?: number;
  contentGap?: number;
  backgroundColor?: string;
  onProgress?: (progress: number) => void;
  className?: string;
  style?: CSSProperties;
}

const clamp = (val: number, min: number, max: number) =>
  val < min ? min : val > max ? max : val;

const easeInOut = (t: number, power: number) =>
  t < 0.5
    ? Math.pow(2, power - 1) * Math.pow(t, power)
    : 1 - Math.pow(-2 * t + 2, power) / 2;

export default function TileReveal({
  images = [],
  headline,
  children,
  columns = 3,
  gap = 16,
  gridWidth = 840,
  tileAspect = 1.15,
  tileRadius = 14,
  grayscale = false,
  direction = "alternate",
  zoom = 1.85,
  spread = 0.45,
  scrollLength = 0.85,
  scrub = 0.08,
  contentGap = 20,
  backgroundColor = "transparent",
  onProgress,
  className,
  style,
}: TileRevealProps) {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handler = () => setReducedMotion(media.matches);
    handler();
    media.addEventListener("change", handler);
    return () => media.removeEventListener("change", handler);
  }, []);

  const sectionRef = useRef<HTMLElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const tileRefs = useRef<(HTMLDivElement | null)[]>([]);
  const headlineRef = useRef<HTMLDivElement>(null);
  const childrenRef = useRef<HTMLDivElement>(null);

  const currentProgress = useRef(0);
  const rafId = useRef(0);
  const lastFrameTime = useRef(0);
  const isLoopRunning = useRef(false);

  const viewportW = useRef(0);
  const viewportH = useRef(0);
  const gridW = useRef(0);
  const gridH = useRef(0);

  const colCount = Math.max(1, Math.round(columns));
  const imgCount = images.length;

  const layout = useMemo(() => {
    const midCol = (colCount - 1) / 2;
    const colHeights = Array.from({ length: colCount }, (_, c) =>
      Math.floor((imgCount - c + colCount - 1) / colCount)
    );
    const rows = Math.ceil(imgCount / colCount);

    const tiles = Array.from({ length: imgCount }, (_, idx) => {
      const col = idx % colCount;
      const row = Math.floor(idx / colCount);
      const isCenter = 0.001 > Math.abs(col - midCol);
      const lateral = isCenter ? 0 : Math.sign(col - midCol);
      const midRow = (rows - 1) / 2;
      const vertical = isCenter ? (row < midRow ? -1 : 1) : 0;
      return { col, row, lateral, vertical };
    });

    return {
      tiles,
      rows,
      midCol,
    };
  }, [colCount, imgCount]);

  const updateTransforms = useCallback(
    (progress: number) => {
      const grid = gridRef.current;
      if (!grid) return;

      // Zoom scales up as user scrolls from 0 to 0.85
      const zoomEase = easeInOut(clamp(progress / 0.85, 0, 1), 2.5);
      // Tiles begin splitting apart at progress 0.08
      const splitEase = easeInOut(clamp((progress - 0.08) / 0.75, 0, 1), 1.5);
      // Headline smoothly fades in and rises up
      const contentEase = easeInOut(clamp((progress - 0.1) / 0.65, 0, 1), 2);
      // Tiles fade out as they split past the screen edges
      const tileOpacity = clamp(1 - (progress - 0.15) / 0.65, 0, 1);

      const maxZoom = Math.max(zoom, 1);
      grid.style.transform = `scale(${1 + (maxZoom - 1) * zoomEase})`;

      const tileW = Math.max(
        1,
        (gridW.current - gap * (colCount - 1)) / colCount
      );
      const tileH = tileW / Math.max(tileAspect, 0.01);
      const colStep = tileW + gap;
      const rowStep = tileH + gap;
      const midRow = (layout.rows - 1) / 2;

      const lateralSpread = (distFromMid: number) =>
        Math.max(
          spread * tileW,
          viewportW.current / (2 * maxZoom) + tileW / 2 - Math.abs(distFromMid) + gap
        );
      const verticalSpread = (distFromMid: number) =>
        Math.max(
          spread * tileH,
          viewportH.current / (2 * maxZoom) + tileH / 2 - Math.abs(distFromMid) + gap
        );

      for (let i = 0; i < layout.tiles.length; i++) {
        const el = tileRefs.current[i];
        if (!el) continue;
        const tile = layout.tiles[i];

        const splitX =
          tile.lateral *
          lateralSpread((tile.col - layout.midCol) * colStep) *
          zoomEase;
        const splitY =
          tile.vertical *
          verticalSpread((tile.row - midRow) * rowStep) *
          splitEase;

        el.style.transform = `translate3d(${splitX.toFixed(2)}px, ${splitY.toFixed(2)}px, 0)`;
        el.style.visibility = tileOpacity <= 0 ? "hidden" : "visible";
        el.style.opacity = `${tileOpacity.toFixed(3)}`;
      }

      if (headlineRef.current) {
        headlineRef.current.style.opacity = `${Math.max(0.4, contentEase).toFixed(3)}`;
        headlineRef.current.style.transform = `translateY(${((1 - contentEase) * 20).toFixed(2)}px)`;
      }

      if (childrenRef.current) {
        childrenRef.current.style.opacity = `${contentEase.toFixed(3)}`;
        childrenRef.current.style.transform = `translateY(${((1 - contentEase) * 15).toFixed(2)}px)`;
      }

      onProgress?.(progress);
    },
    [layout, zoom, gap, colCount, tileAspect, spread, onProgress]
  );

  const getScrollProgress = useCallback(() => {
    const section = sectionRef.current;
    if (!section) return 0;
    const rect = section.getBoundingClientRect();
    const scrollDist = section.offsetHeight - window.innerHeight;
    if (scrollDist <= 0) return 0;
    return clamp(-rect.top / scrollDist, 0, 1);
  }, []);

  useEffect(() => {
    if (reducedMotion) return;
    const section = sectionRef.current;
    const sticky = stickyRef.current;
    const grid = gridRef.current;
    if (!section || !sticky || !grid) return;

    const win = window;
    const doc = document;

    const onFrame = (now: number) => {
      const dt = lastFrameTime.current ? (now - lastFrameTime.current) / 1000 : 0.016;
      lastFrameTime.current = now;
      const target = getScrollProgress();
      const alpha = 1 - Math.exp(-dt / Math.max(scrub, 0.001));
      const cur =
        currentProgress.current + (target - currentProgress.current) * alpha;
      currentProgress.current = cur;
      updateTransforms(cur);
      if (Math.abs(target - cur) > 0.0004) {
        rafId.current = win.requestAnimationFrame(onFrame);
      } else {
        currentProgress.current = target;
        updateTransforms(target);
        isLoopRunning.current = false;
      }
    };

    const onScroll = () => {
      if (!isLoopRunning.current) {
        isLoopRunning.current = true;
        lastFrameTime.current = 0;
        rafId.current = win.requestAnimationFrame(onFrame);
      }
    };

    const updateMeasurements = () => {
      const rect = sticky.getBoundingClientRect();
      viewportW.current = rect.width;
      viewportH.current = rect.height;
      gridW.current = grid.offsetWidth;
      gridH.current = grid.offsetHeight;
      currentProgress.current = getScrollProgress();
      updateTransforms(currentProgress.current);
    };

    updateMeasurements();
    win.addEventListener("scroll", onScroll, { passive: true });
    doc.addEventListener("scroll", onScroll, { passive: true, capture: true });
    win.addEventListener("resize", updateMeasurements);
    win.addEventListener("pageshow", updateMeasurements);

    const ro = new ResizeObserver(updateMeasurements);
    ro.observe(section);
    ro.observe(sticky);
    ro.observe(grid);

    return () => {
      win.cancelAnimationFrame(rafId.current);
      isLoopRunning.current = false;
      win.removeEventListener("scroll", onScroll);
      doc.removeEventListener("scroll", onScroll, { capture: true });
      win.removeEventListener("resize", updateMeasurements);
      win.removeEventListener("pageshow", updateMeasurements);
      ro.disconnect();
    };
  }, [getScrollProgress, updateTransforms, reducedMotion, scrub]);

  const sectionStyle: CSSProperties = useMemo(
    () => ({
      height: reducedMotion
        ? undefined
        : `${((1 + Math.max(scrollLength, 0)) * 100).toFixed(2)}svh`,
      ...style,
    }),
    [reducedMotion, scrollLength, style]
  );

  const tileStyle: CSSProperties = useMemo(
    () => ({
      aspectRatio: `${tileAspect}`,
      borderRadius: `${tileRadius}px`,
    }),
    [tileAspect, tileRadius]
  );

  const MainContent = (
    <div
      className="relative z-10 flex h-full w-full flex-col items-center justify-center text-center px-4 max-w-5xl mx-auto pt-12 sm:pt-16 pointer-events-auto"
      style={{ gap: `${contentGap}px` }}
    >
      {headline !== undefined && (
        <div
          ref={headlineRef}
          className="will-change-transform [backface-visibility:hidden] w-full transition-opacity"
        >
          {headline}
        </div>
      )}
      {children !== undefined && (
        <div
          ref={childrenRef}
          className="will-change-transform [backface-visibility:hidden] w-full"
        >
          {children}
        </div>
      )}
    </div>
  );

  if (reducedMotion) {
    return (
      <section
        ref={sectionRef}
        className={cn("relative w-full overflow-hidden", className)}
        style={{ ...sectionStyle, height: "auto", background: backgroundColor }}
      >
        {MainContent}
      </section>
    );
  }

  return (
    <section
      ref={sectionRef}
      className={cn("relative w-full", className)}
      style={sectionStyle}
    >
      <div
        ref={stickyRef}
        className="sticky top-0 w-full overflow-hidden flex items-center justify-center"
        style={{ height: "100svh", background: backgroundColor }}
      >
        {MainContent}

        <div
          className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
          style={{ width: `min(${gridWidth}px, calc(100% - ${2 * gap}px))` }}
        >
          <div
            ref={gridRef}
            className="grid will-change-transform"
            style={{
              gridTemplateColumns: `repeat(${colCount}, minmax(0, 1fr))`,
              gap: `${gap}px`,
            }}
          >
            {images.map((imgSrc, idx) => (
              <div
                key={`${imgSrc}-${idx}`}
                ref={(el) => {
                  tileRefs.current[idx] = el;
                }}
                className="w-full overflow-hidden will-change-transform [backface-visibility:hidden] shadow-2xl rounded-2xl border border-white/60 bg-slate-900 ring-1 ring-black/10"
                style={tileStyle}
              >
                <img
                  src={imgSrc}
                  alt="Architecture Benchmark Showcase"
                  draggable={false}
                  loading="lazy"
                  className={cn(
                    "h-full w-full select-none object-cover transition-transform duration-500",
                    grayscale && "grayscale"
                  )}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

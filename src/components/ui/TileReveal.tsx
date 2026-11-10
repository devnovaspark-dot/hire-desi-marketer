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
  overlap?: number;
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
  gap = 24,
  gridWidth = 720,
  tileAspect = 1,
  tileRadius = 16,
  grayscale = false,
  direction = "alternate",
  stagger = 0.06,
  overlap = 0.6,
  zoom = 2.05,
  spread = 0.4,
  scrollLength = 2.5,
  scrub = 0.08,
  contentGap = 24,
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
  const childrenH = useRef(0);

  const colCount = Math.max(1, Math.round(columns));
  const imgCount = images.length;

  const layout = useMemo(() => {
    const midCol = (colCount - 1) / 2;
    const colHeights = Array.from({ length: colCount }, (_, c) =>
      Math.floor((imgCount - c + colCount - 1) / colCount)
    );
    const maxColHeight = Math.max(0, ...colHeights);
    const zoomStart = Math.max(
      0,
      (maxColHeight > 0 ? 1 + (maxColHeight - 1) * stagger : 0) - overlap
    );
    const splitStart = zoomStart + 0.5;
    const contentStart = zoomStart + 1 - 0.32;
    const total = Math.max(zoomStart + 1, contentStart + 0.32, 0.001);

    const tiles = Array.from({ length: imgCount }, (_, idx) => {
      const col = idx % colCount;
      const row = Math.floor(idx / colCount);
      const n = colHeights[col];
      const isTop =
        direction === "top" || (direction !== "bottom" && col % 2 === 0);
      const isCenter = 0.001 > Math.abs(col - midCol);
      const lateral = isCenter ? 0 : Math.sign(col - midCol);
      const vertical = isCenter ? (row < Math.floor(n / 2) ? -1 : 1) : 0;
      const start = (isTop ? n - 1 - row : row) * stagger;
      const dir = isTop ? -1 : 1;
      return { start, dir, col, row, lateral, vertical };
    });

    return {
      tiles,
      rows: Math.ceil(imgCount / colCount),
      midCol,
      zoomStart,
      splitStart,
      contentStart,
      total,
    };
  }, [colCount, imgCount, direction, overlap, stagger]);

  const updateTransforms = useCallback(
    (progress: number) => {
      const grid = gridRef.current;
      if (!grid) return;

      const scaledProgress = progress * layout.total;
      const halfScreenH = (viewportH.current + gridH.current) / 2;
      const zoomEase = easeInOut(
        clamp(scaledProgress - layout.zoomStart, 0, 1),
        3
      );
      const splitEase = easeInOut(
        clamp((scaledProgress - layout.splitStart) / 0.5, 0, 1),
        1
      );
      const contentEase = easeInOut(
        clamp((scaledProgress - layout.contentStart) / 0.32, 0, 1),
        2
      );
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
        const flyInEase = easeInOut(clamp(scaledProgress - tile.start, 0, 1), 1);
        const flyY = tile.dir * halfScreenH * (1 - flyInEase);
        const splitX =
          tile.lateral *
          lateralSpread((tile.col - layout.midCol) * colStep) *
          zoomEase;
        const splitY =
          tile.vertical *
          verticalSpread((tile.row - midRow) * rowStep) *
          splitEase;

        el.style.transform = `translate3d(${splitX.toFixed(2)}px, ${(
          flyY + splitY
        ).toFixed(2)}px, 0)`;
        el.style.visibility = flyInEase <= 0 ? "hidden" : "visible";
      }

      const headlineEl = headlineRef.current;
      if (headlineEl) {
        const shiftY = ((childrenH.current + contentGap) / 2) * (1 - contentEase);
        headlineEl.style.transform = `translate3d(0, ${shiftY.toFixed(2)}px, 0)`;
      }

      const childrenEl = childrenRef.current;
      if (childrenEl) {
        childrenEl.style.opacity = contentEase.toFixed(3);
        childrenEl.style.transform = `translate3d(0, ${(
          (1 - contentEase) *
          12
        ).toFixed(2)}px, 0)`;
        childrenEl.style.pointerEvents = contentEase > 0.5 ? "auto" : "none";
      }

      onProgress?.(progress);
    },
    [colCount, contentGap, gap, onProgress, layout, spread, tileAspect, zoom]
  );

  const getScrollProgress = useCallback(() => {
    const section = sectionRef.current;
    const sticky = stickyRef.current;
    if (!section || !sticky) return 0;
    const rect = section.getBoundingClientRect();
    const maxScroll = rect.height - sticky.getBoundingClientRect().height;
    return maxScroll <= 0 ? 0 : clamp(-rect.top / maxScroll, 0, 1);
  }, []);

  useEffect(() => {
    if (reducedMotion) return;
    const section = sectionRef.current;
    const sticky = stickyRef.current;
    const grid = gridRef.current;
    if (!section || !sticky || !grid) return;
    const doc = section.ownerDocument;
    const win = doc.defaultView;
    if (!win) return;

    const scrubFactor = Math.max(scrub, 0);
    const onFrame = (now: number) => {
      const prev = lastFrameTime.current || now;
      const dt = Math.min(0.05, Math.max(0, (now - prev) / 1000));
      lastFrameTime.current = now;
      const target = getScrollProgress();
      const alpha =
        scrubFactor > 0 ? 1 - Math.exp(-dt / scrubFactor) : 1;
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
      childrenH.current = childrenRef.current?.offsetHeight ?? 0;
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
    if (childrenRef.current) ro.observe(childrenRef.current);

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
      className="relative z-10 flex h-full w-full flex-col items-center justify-center text-center px-4 max-w-5xl mx-auto pt-16 sm:pt-20 pointer-events-auto"
      style={{ gap: `${contentGap}px` }}
    >
      {headline !== undefined && (
        <div
          ref={headlineRef}
          className="will-change-transform [backface-visibility:hidden] w-full"
        >
          {headline}
        </div>
      )}
      {children !== undefined && (
        <div
          ref={childrenRef}
          className="will-change-transform [backface-visibility:hidden] w-full"
          style={reducedMotion ? undefined : { opacity: 0 }}
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
        style={{ ...sectionStyle, height: "100svh", background: backgroundColor }}
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
                className="w-full overflow-hidden will-change-transform [backface-visibility:hidden] shadow-2xl rounded-2xl border border-white/50 bg-slate-900 ring-1 ring-black/10"
                style={{ ...tileStyle, visibility: "hidden" }}
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

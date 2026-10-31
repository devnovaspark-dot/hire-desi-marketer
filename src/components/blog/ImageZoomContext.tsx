"use client";

import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
  useRef,
} from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  X,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  ExternalLink,
  Sparkles,
  Layers,
} from "lucide-react";

export interface ZoomImageState {
  src: string;
  alt?: string;
  caption?: string;
  badge?: string;
}

interface ImageZoomContextType {
  openZoom: (image: ZoomImageState) => void;
  closeZoom: () => void;
}

const ImageZoomContext = createContext<ImageZoomContextType | null>(null);

export function useImageZoom() {
  const context = useContext(ImageZoomContext);
  if (!context) {
    throw new Error("useImageZoom must be used within an ImageZoomProvider");
  }
  return context;
}

export function ImageZoomProvider({ children }: { children: React.ReactNode }) {
  const [activeImage, setActiveImage] = useState<ZoomImageState | null>(null);
  const [scale, setScale] = useState(1);
  const [isDragging, setIsDragging] = useState(false);
  const dragStartRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

  const openZoom = useCallback((image: ZoomImageState) => {
    setActiveImage(image);
    setScale(1);
  }, []);

  const closeZoom = useCallback(() => {
    setActiveImage(null);
    setScale(1);
  }, []);

  // Zoom controls
  const zoomIn = useCallback(() => {
    setScale((prev) => Math.min(3, Number((prev + 0.5).toFixed(1))));
  }, []);

  const zoomOut = useCallback(() => {
    setScale((prev) => Math.max(1, Number((prev - 0.5).toFixed(1))));
  }, []);

  const resetZoom = useCallback(() => {
    setScale(1);
  }, []);

  const toggleZoom = useCallback(() => {
    setScale((prev) => (prev === 1 ? 2 : 1));
  }, []);

  // Keyboard shortcut listener (ESC to close, +/- to zoom)
  useEffect(() => {
    if (!activeImage) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeZoom();
      } else if (e.key === "+" || e.key === "=") {
        zoomIn();
      } else if (e.key === "-" || e.key === "_") {
        zoomOut();
      } else if (e.key === "0") {
        resetZoom();
      }
    };

    // Lock body scroll when modal is active
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeImage, closeZoom, zoomIn, zoomOut, resetZoom]);

  return (
    <ImageZoomContext.Provider value={{ openZoom, closeZoom }}>
      {children}

      <AnimatePresence>
        {activeImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="fixed inset-0 z-[120] bg-[#020514]/95 backdrop-blur-2xl flex flex-col justify-between overflow-hidden select-none"
            onClick={(e) => {
              if (e.target === e.currentTarget && !isDragging) {
                closeZoom();
              }
            }}
          >
            {/* Top Toolbar */}
            <motion.header
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ delay: 0.05 }}
              className="w-full px-4 sm:px-6 py-4 flex items-center justify-between gap-4 z-20 border-b border-white/10 bg-[#060B24]/80 backdrop-blur-md"
            >
              {/* Left Info pill */}
              <div className="flex items-center gap-2.5 min-w-0">
                {activeImage.badge ? (
                  <span className="px-2.5 py-0.5 rounded-full bg-[#FFB020]/20 border border-[#FFB020]/40 text-[#FFB020] text-[11px] font-black uppercase tracking-wider shrink-0">
                    {activeImage.badge}
                  </span>
                ) : (
                  <span className="px-2.5 py-0.5 rounded-full bg-white/10 border border-white/15 text-slate-300 text-[11px] font-bold tracking-wider shrink-0 flex items-center gap-1.5">
                    <Sparkles className="w-3 h-3 text-[#FFB020]" />
                    <span>High-Res Zoom</span>
                  </span>
                )}
                {activeImage.alt && (
                  <span className="text-xs sm:text-sm text-slate-200 font-medium truncate max-w-xs sm:max-w-md hidden md:inline-block">
                    {activeImage.alt}
                  </span>
                )}
              </div>

              {/* Center Zoom Controls */}
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/15 backdrop-blur-md">
                <button
                  type="button"
                  onClick={zoomOut}
                  disabled={scale <= 1}
                  className="w-7 h-7 rounded-full flex items-center justify-center text-slate-300 hover:text-white hover:bg-white/15 transition-all disabled:opacity-30 disabled:pointer-events-none cursor-pointer"
                  title="Zoom Out (-)"
                  aria-label="Zoom Out"
                >
                  <ZoomOut className="w-3.5 h-3.5" />
                </button>

                <button
                  type="button"
                  onClick={resetZoom}
                  className="px-2 py-0.5 text-xs font-mono font-bold text-[#FFB020] hover:text-white transition-colors cursor-pointer"
                  title="Reset Zoom (0)"
                >
                  {Math.round(scale * 100)}%
                </button>

                <button
                  type="button"
                  onClick={zoomIn}
                  disabled={scale >= 3}
                  className="w-7 h-7 rounded-full flex items-center justify-center text-slate-300 hover:text-white hover:bg-white/15 transition-all disabled:opacity-30 disabled:pointer-events-none cursor-pointer"
                  title="Zoom In (+)"
                  aria-label="Zoom In"
                >
                  <ZoomIn className="w-3.5 h-3.5" />
                </button>

                {scale > 1 && (
                  <button
                    type="button"
                    onClick={resetZoom}
                    className="w-7 h-7 rounded-full flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/15 transition-all ml-1 cursor-pointer"
                    title="Reset to 100%"
                    aria-label="Reset zoom"
                  >
                    <RotateCcw className="w-3 h-3" />
                  </button>
                )}
              </div>

              {/* Right Action Buttons */}
              <div className="flex items-center gap-2">
                <a
                  href={activeImage.src}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-slate-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
                  title="Open original image in new tab"
                  aria-label="Open original image in new tab"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>

                <button
                  type="button"
                  onClick={closeZoom}
                  className="h-9 px-3.5 rounded-full bg-[#FFB020] hover:bg-[#FFC043] text-[#060B22] font-bold text-xs flex items-center gap-1.5 transition-all shadow-lg hover:scale-105 cursor-pointer"
                  title="Close (ESC)"
                  aria-label="Close zoom preview"
                >
                  <X className="w-4 h-4" />
                  <span className="hidden sm:inline">Close</span>
                </button>
              </div>
            </motion.header>

            {/* Main Interactive Stage */}
            <div
              className="relative flex-1 w-full h-full flex items-center justify-center p-3 sm:p-6 overflow-hidden"
              onClick={(e) => {
                if (e.target === e.currentTarget && !isDragging) {
                  closeZoom();
                }
              }}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: "spring", stiffness: 280, damping: 26 }}
                className="relative flex items-center justify-center max-w-full max-h-full"
              >
                <motion.img
                  key={activeImage.src}
                  src={activeImage.src}
                  alt={activeImage.alt || "Zoomed visual infographic"}
                  animate={{ scale }}
                  transition={{ type: "spring", stiffness: 320, damping: 30 }}
                  drag={scale > 1}
                  dragConstraints={{
                    left: -300 * (scale - 1),
                    right: 300 * (scale - 1),
                    top: -200 * (scale - 1),
                    bottom: 200 * (scale - 1),
                  }}
                  dragElastic={0.12}
                  onDragStart={(_, info) => {
                    dragStartRef.current = { x: info.point.x, y: info.point.y };
                    setIsDragging(true);
                  }}
                  onDragEnd={(_, info) => {
                    const dist = Math.hypot(
                      info.point.x - dragStartRef.current.x,
                      info.point.y - dragStartRef.current.y
                    );
                    setTimeout(() => setIsDragging(dist > 5), 50);
                  }}
                  onClick={() => {
                    if (!isDragging) {
                      toggleZoom();
                    }
                  }}
                  className={`max-w-[95vw] max-h-[80vh] w-auto h-auto rounded-2xl shadow-2xl object-contain transition-shadow select-none ${
                    scale > 1 ? "cursor-grab active:cursor-grabbing" : "cursor-zoom-in"
                  }`}
                  style={{
                    filter: "drop-shadow(0 25px 45px rgba(0, 0, 0, 0.75))",
                  }}
                />
              </motion.div>
            </div>

            {/* Bottom Caption Bar */}
            <motion.footer
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              transition={{ delay: 0.05 }}
              className="w-full px-4 sm:px-6 py-3 flex flex-col sm:flex-row items-center justify-between gap-2 z-20 border-t border-white/10 bg-[#060B24]/80 backdrop-blur-md"
            >
              <div className="flex items-center gap-2 text-xs text-slate-300 text-center sm:text-left">
                <span className="hidden sm:inline font-bold text-[#FFB020]">Tip:</span>
                <span>
                  {scale === 1
                    ? "Click the infographic to zoom 2x for fine text reading."
                    : "Drag to pan around the image. Click or press ESC to reset."}
                </span>
              </div>

              {activeImage.caption && (
                <div className="text-xs text-slate-400 italic text-center sm:text-right max-w-lg truncate">
                  {activeImage.caption}
                </div>
              )}
            </motion.footer>
          </motion.div>
        )}
      </AnimatePresence>
    </ImageZoomContext.Provider>
  );
}

/**
 * ZoomableImage: Drop-in visual container for in-article images and infographics.
 * Shows high-res image without forced cropping, hover zoom cursor, and one-click expand pill.
 */
interface ZoomableImageProps {
  src: string;
  alt?: string;
  caption?: string;
  badge?: string;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
}

export function ZoomableImage({
  src,
  alt = "",
  caption,
  badge,
  className,
  imageClassName,
}: ZoomableImageProps) {
  const { openZoom } = useImageZoom();

  return (
    <figure className={`my-10 space-y-3 ${className || ""}`}>
      <div
        role="button"
        tabIndex={0}
        onClick={() => openZoom({ src, alt, caption, badge })}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            openZoom({ src, alt, caption, badge });
          }
        }}
        className="group relative w-full rounded-2xl overflow-hidden bg-gradient-to-b from-slate-900/5 to-slate-900/10 border border-slate-200/90 shadow-md hover:shadow-2xl transition-all duration-300 cursor-zoom-in focus:outline-hidden focus:ring-2 focus:ring-[#FFB020]"
      >
        {/* Main High-Res Image: object-contain with max height ensures NO cropping on infographics! */}
        <div className="relative w-full flex items-center justify-center p-2 sm:p-4 bg-[#FAF8F5]/50">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={src}
            alt={alt}
            loading="lazy"
            decoding="async"
            className={`w-auto h-auto max-w-full max-h-[640px] rounded-xl object-contain shadow-sm group-hover:scale-[1.015] transition-transform duration-300 ease-out ${
              imageClassName || ""
            }`}
          />
        </div>

        {/* Top-Left Badge (if provided) */}
        {badge && (
          <div className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full bg-[#060B22]/90 backdrop-blur-md border border-[#FFB020]/40 text-[#FFB020] text-xs font-black uppercase tracking-wider shadow-lg">
            {badge}
          </div>
        )}

        {/* Hover Pill: Animated "Click to Zoom / Expand" badge */}
        <div className="absolute bottom-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-all duration-200 translate-y-1 group-hover:translate-y-0">
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#060B22]/90 hover:bg-[#FFB020] hover:text-[#060B22] text-[#FFB020] border border-[#FFB020]/40 text-xs font-black uppercase tracking-wider backdrop-blur-md shadow-xl transition-colors">
            <ZoomIn className="w-3.5 h-3.5" />
            <span>Click to Expand</span>
          </div>
        </div>
      </div>

      {caption && (
        <figcaption className="text-center text-xs sm:text-sm text-slate-500 font-medium">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

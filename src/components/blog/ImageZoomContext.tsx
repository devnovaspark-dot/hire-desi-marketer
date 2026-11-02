"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  useRef,
} from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";
import { cn } from "@/lib/utils";

interface ZoomImagePayload {
  src: string;
  alt?: string;
  caption?: string;
  badge?: string;
}

interface ImageZoomContextValue {
  openZoom: (payload: ZoomImagePayload) => void;
  closeZoom: () => void;
  isOpen: boolean;
  activeImage: ZoomImagePayload | null;
}

const ImageZoomContext = createContext<ImageZoomContextValue | undefined>(
  undefined
);

export function ImageZoomProvider({ children }: { children: React.ReactNode }) {
  const [activeImage, setActiveImage] = useState<ZoomImagePayload | null>(null);
  const [isZoomed2x, setIsZoomed2x] = useState(false);
  const [panOffset, setPanOffset] = useState({ x: 0, y: 0 });
  const isDraggingRef = useRef(false);
  const dragStartRef = useRef({ x: 0, y: 0 });

  const openZoom = useCallback((payload: ZoomImagePayload) => {
    setActiveImage(payload);
    setIsZoomed2x(false);
    setPanOffset({ x: 0, y: 0 });
    // Prevent background scroll
    if (typeof document !== "undefined") {
      document.body.style.overflow = "hidden";
    }
  }, []);

  const closeZoom = useCallback(() => {
    setActiveImage(null);
    setIsZoomed2x(false);
    setPanOffset({ x: 0, y: 0 });
    if (typeof document !== "undefined") {
      document.body.style.overflow = "";
    }
  }, []);

  const toggle2x = useCallback(() => {
    setIsZoomed2x((prev) => {
      if (prev) {
        setPanOffset({ x: 0, y: 0 });
      }
      return !prev;
    });
  }, []);

  // Keyboard shortcut listener (ESC to close, +/- to toggle zoom)
  useEffect(() => {
    if (!activeImage) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        closeZoom();
      } else if (e.key === "+" || e.key === "=") {
        e.preventDefault();
        setIsZoomed2x(true);
      } else if (e.key === "-" || e.key === "_") {
        e.preventDefault();
        setIsZoomed2x(false);
        setPanOffset({ x: 0, y: 0 });
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeImage, closeZoom]);

  // Global delegate: allow clicking any prose image with data-zoom or in blog-prose
  useEffect(() => {
    const handleDocumentClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      // Check if clicked element or parent is an image inside blog prose that isn't already inside zoom lightbox
      if (target.tagName === "IMG" && !target.closest("#zoom-lightbox-root")) {
        const img = target as HTMLImageElement;
        // Don't capture small icons or avatars (less than 90px)
        if (img.naturalWidth < 120 && img.naturalHeight < 120 && !img.dataset.zoom) {
          return;
        }

        const src = img.currentSrc || img.src;
        if (!src) return;

        // Skip avatar images or tiny icons
        if (img.classList.contains("rounded-full") && (img.width <= 70 || img.height <= 70)) {
          return;
        }

        e.preventDefault();
        openZoom({
          src,
          alt: img.alt || "Article illustration",
          caption: img.dataset.caption || undefined,
          badge: img.dataset.badge || undefined,
        });
      }
    };

    document.addEventListener("click", handleDocumentClick);
    return () => document.removeEventListener("click", handleDocumentClick);
  }, [openZoom]);

  // Touch and Mouse Pan dragging when zoomed 2x
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!isZoomed2x) return;
    isDraggingRef.current = true;
    dragStartRef.current = {
      x: e.clientX - panOffset.x,
      y: e.clientY - panOffset.y,
    };
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDraggingRef.current || !isZoomed2x) return;
    setPanOffset({
      x: e.clientX - dragStartRef.current.x,
      y: e.clientY - dragStartRef.current.y,
    });
  };

  const handleMouseUp = () => {
    isDraggingRef.current = false;
  };

  return (
    <ImageZoomContext.Provider
      value={{
        openZoom,
        closeZoom,
        isOpen: Boolean(activeImage),
        activeImage,
      }}
    >
      {children}

      <AnimatePresence>
        {activeImage && (
          <motion.div
            id="zoom-lightbox-root"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            className="fixed inset-0 z-[9999] bg-[#030614]/92 backdrop-blur-xl flex items-center justify-center select-none p-4 sm:p-8"
            onClick={(e) => {
              // Click on dark backdrop closes
              if (e.target === e.currentTarget && !isZoomed2x) {
                closeZoom();
              }
            }}
          >
            {/* Centered Image Container with the Close Cross positioned just right above the corner of the image */}
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{
                scale: isZoomed2x ? 1.85 : 1,
                x: panOffset.x,
                y: panOffset.y,
                opacity: 1,
              }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 280 }}
              className="relative max-h-[90vh] max-w-[92vw] flex items-center justify-center"
              onDoubleClick={toggle2x}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
            >
              {/* Close cross: positioned just right above the corner of the image */}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  closeZoom();
                }}
                title="Close"
                aria-label="Close"
                className="absolute -top-3.5 -right-3.5 sm:-top-4 sm:-right-4 z-50 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#060B22]/90 hover:bg-[#0B1B3A] text-white border border-white/30 backdrop-blur-md flex items-center justify-center shadow-[0_4px_20px_rgba(0,0,0,0.6)] transition-all hover:scale-110 cursor-pointer group"
              >
                <X className="w-5 h-5 text-white group-hover:rotate-90 transition-transform duration-200" />
              </button>

              {/* The Image */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={activeImage.src}
                alt={activeImage.alt || "Enlarged view"}
                decoding="async"
                className={cn(
                  "max-h-[88vh] max-w-[92vw] w-auto h-auto rounded-2xl object-contain shadow-[0_20px_60px_rgba(0,0,0,0.7)] transition-shadow",
                  isZoomed2x
                    ? "cursor-grab active:cursor-grabbing shadow-[0_25px_80px_rgba(0,0,0,0.95)]"
                    : "cursor-zoom-in"
                )}
                onClick={(e) => {
                  e.stopPropagation();
                  toggle2x();
                }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </ImageZoomContext.Provider>
  );
}

export function useImageZoom() {
  const ctx = useContext(ImageZoomContext);
  if (!ctx) {
    throw new Error("useImageZoom must be used within an ImageZoomProvider");
  }
  return ctx;
}

/**
 * Click-to-Zoom interactive wrapper for images.
 * Provides hover magnifying glass affordance and triggers the zoom lightbox on click.
 */
export function ZoomableImage({
  src,
  alt = "Article graphic",
  caption,
  badge,
  className,
  imageClassName,
  children,
}: {
  src: string;
  alt?: string;
  caption?: string;
  badge?: string;
  className?: string;
  imageClassName?: string;
  children?: React.ReactNode;
}) {
  const { openZoom } = useImageZoom();

  return (
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
      className={cn(
        "relative group cursor-zoom-in overflow-hidden transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#FFB020]/50",
        className
      )}
    >
      {children ? (
        children
      ) : (
        /* eslint-disable-next-line @next/next/no-img-element */
        <img
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          className={cn(
            "w-full h-auto transition-transform duration-300 group-hover:scale-[1.015]",
            imageClassName
          )}
        />
      )}

      {/* Hover Zoom pill affordance */}
      <div className="absolute bottom-3 right-3 z-10 px-2.5 py-1 rounded-full bg-black/75 backdrop-blur-md text-white text-[11px] font-bold flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow-lg pointer-events-none border border-white/20">
        <ZoomIn className="w-3 h-3 text-[#FFB020]" />
        <span>Click to Zoom</span>
      </div>
    </div>
  );
}


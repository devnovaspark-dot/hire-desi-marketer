"use client";

import React, { useState, useEffect } from "react";
import { MessageSquare, Sparkles } from "lucide-react";

function WhatsAppIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.652-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export function FloatingActions() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Show buttons after a tiny delay so initial page load remains ultra clean
    const timer = setTimeout(() => setVisible(true), 600);
    return () => clearTimeout(timer);
  }, []);

  const handleEnquire = (e: React.MouseEvent) => {
    e.preventDefault();
    const quoteElement = document.getElementById("quote");
    if (quoteElement) {
      quoteElement.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      window.location.href = "#quote";
    }
  };

  if (!visible) return null;

  return (
    <div
      aria-label="Quick Actions"
      className="fixed bottom-4 right-3 sm:bottom-6 sm:right-6 z-50 flex items-center gap-2 sm:gap-2.5 animate-in fade-in slide-in-from-bottom-4 duration-500"
    >
      {/* Floating Enquire Button */}
      <a
        href="#quote"
        onClick={handleEnquire}
        className="group relative flex items-center gap-1.5 sm:gap-2 px-3.5 py-2.5 sm:px-4.5 sm:py-3 rounded-full bg-gradient-to-r from-[#FFB020] via-[#FFC043] to-[#FF8A00] text-[#060B22] font-black text-xs sm:text-sm tracking-wide uppercase shadow-[0_8px_25px_rgba(255,176,32,0.45),inset_0_1px_1px_rgba(255,255,255,0.7)] hover:shadow-[0_12px_32px_rgba(255,176,32,0.65)] hover:scale-105 active:scale-95 transition-all duration-300 border border-[#FFE082]/60 cursor-pointer"
        title="Enquire now about hiring marketing talent"
      >
        <span className="relative flex items-center justify-center">
          <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#060B22] fill-[#060B22] group-hover:rotate-12 transition-transform" />
        </span>
        <span className="font-extrabold tracking-tight">Enquire Now</span>
      </a>

      {/* Floating WhatsApp Quick Connect Button */}
      <a
        href="https://wa.me/918280788689?text=Hi%20Hire%20Desi%20Marketer%2C%20I%20want%20to%20enquire%20about%20hiring%20a%20marketing%20specialist."
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-[#25D366] text-white shadow-[0_8px_25px_rgba(37,211,102,0.5),inset_0_1px_2px_rgba(255,255,255,0.6)] hover:shadow-[0_12px_32px_rgba(37,211,102,0.7)] hover:scale-110 active:scale-95 transition-all duration-300 border border-white/30 cursor-pointer"
        title="Chat with us instantly on WhatsApp"
        aria-label="Chat on WhatsApp"
      >
        {/* Pulsing Online Radar Halo */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366]/35 animate-ping pointer-events-none" />
        
        {/* Online Green Beacon Badge */}
        <span className="absolute top-0 right-0 w-3 h-3 rounded-full bg-emerald-400 border-2 border-[#060B22] pointer-events-none" />

        <WhatsAppIcon className="w-5 h-5 sm:w-6 sm:h-6 fill-current drop-shadow-sm group-hover:scale-110 transition-transform" />
      </a>
    </div>
  );
}

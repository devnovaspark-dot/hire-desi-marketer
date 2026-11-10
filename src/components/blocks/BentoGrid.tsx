"use client";

import React from "react";
import Bento1 from "@/components/blocks/bento-1";
import Bento2 from "@/components/blocks/bento-2";
import Bento3 from "@/components/blocks/bento-3";
import Bento7 from "@/components/blocks/bento-7";

/**
 * Bento grid composed with the React Bits Bento Builder.
 *
 * The span classes live on the wrappers, never on the tiles, so any tile can
 * be moved to any cell by editing this file alone. The grid uses dense
 * auto-flow: reorder the wrappers or change a span and the browser re-packs
 * the layout at every breakpoint.
 */
export default function BentoGrid() {
  return (
    <div className="w-full">
      <div className="max-w-[1400px] mx-auto w-full">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:auto-rows-[minmax(380px,auto)] grid-flow-dense">
          <div className="h-full">
            <Bento1 />
          </div>
          <div className="h-full">
            <Bento2 />
          </div>
          <div className="h-full">
            <Bento3 />
          </div>
          <div className="h-full">
            <Bento7 />
          </div>
          <div className="h-full">
            <Bento7 />
          </div>
          <div className="h-full">
            <Bento7 />
          </div>
          <div className="h-full">
            <Bento7 />
          </div>
          <div className="h-full">
            <Bento7 />
          </div>
          <div className="h-full">
            <Bento7 />
          </div>
        </div>
      </div>
    </div>
  );
}


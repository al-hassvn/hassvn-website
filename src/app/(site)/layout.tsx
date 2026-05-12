"use client";

import { ReactNode } from "react";
import { ReactLenis } from "lenis/react";
import { CustomCursor } from "@/components/effects/CustomCursor";
import { CursorGlow } from "@/components/effects/CursorGlow";
import { NoiseOverlay } from "@/components/effects/NoiseOverlay";
import { Navigation } from "@/components/sections/Navigation";
import { Footer } from "@/components/sections/Footer";
import { Toaster } from "@/components/ui/toaster";

export default function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.08,
        duration: 1.4,
        syncTouch: true,
        autoRaf: true,
      }}
    >
      <CustomCursor />
      <CursorGlow />
      <NoiseOverlay />
      <Navigation />
      <main>{children}</main>
      <Footer />
      <Toaster />
    </ReactLenis>
  );
}

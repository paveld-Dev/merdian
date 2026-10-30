'use client';

import React, { useEffect } from 'react';
import Lenis from 'lenis';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { Manifesto } from '@/components/sections/Manifesto';
import { Studio } from '@/components/sections/Studio';
import { Residences } from '@/components/sections/Residences';
import { FeaturedResidence } from '@/components/sections/FeaturedResidence';
import { FloorPlan } from '@/components/sections/FloorPlan';
import { Materials } from '@/components/sections/Materials';
import { Process } from '@/components/sections/Process';
import { Services } from '@/components/sections/Services';
import { Locations } from '@/components/sections/Locations';
import { Testimonial } from '@/components/sections/Testimonial';
import { Journal } from '@/components/sections/Journal';
import { ViewingCTA } from '@/components/sections/ViewingCTA';

export default function Home() {
  useEffect(() => {
    // Lenis smooth scrolling with prefers-reduced-motion safety check
    if (typeof window !== 'undefined') {
      const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (!prefersReduced) {
        const lenis = new Lenis({
          duration: 1.2,
          easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          smoothWheel: true,
        });

        let rafId: number;
        function raf(time: number) {
          lenis.raf(time);
          rafId = requestAnimationFrame(raf);
        }
        rafId = requestAnimationFrame(raf);

        return () => {
          cancelAnimationFrame(rafId);
          lenis.destroy();
        };
      }
    }
  }, []);

  return (
    <div className="relative min-h-screen bg-[var(--paper)] text-[var(--ink)] selection:bg-[var(--accent)] selection:text-white">
      {/* 00 FIXED HEADER */}
      <Header />

      <main>
        {/* 01 HERO (100svh dusk/day villa, self drawing blueprint line art, SpecCard) */}
        <Hero />

        {/* 02 MANIFESTO (paper bg, 10-col serif reveal statement, infinite marquee) */}
        <Manifesto />

        {/* 03 STUDIO (split 6/6, BeforeAfter sketch vs render slider, mono stats) */}
        <Studio />

        {/* 04 RESIDENCES (stone bg, filter chips, 5-slice vertical accordion gallery) */}
        <Residences />

        {/* 05 FEATURED RESIDENCE (graphite bg, sticky specs table, 4-story narrative) */}
        <FeaturedResidence />

        {/* 05b FLOOR PLAN EXPLORER (dark bg, inline SVG blueprint, interactive hotspots) */}
        <FloorPlan />

        {/* 06 MATERIAL LIBRARY (paper bg, 6 tactile macro tiles, hover 3D tilt) */}
        <Materials />

        {/* 07 PROCESS (ink bg, 4 connected steps, white line SVGs, mono durations) */}
        <Process />

        {/* 08 SERVICES (ink bg, 2x3 grid, hairline dividers, architectural icons) */}
        <Services />

        {/* 09 LOCATIONS (ink bg, dot-matrix world map SVG, pulsing pins, registry) */}
        <Locations />

        {/* 10 TESTIMONIAL (full bleed dusk terrace, dark gradient, serif italic quote) */}
        <Testimonial />

        {/* 11 JOURNAL (ink bg, 4:5 featured article + 2 stacked stories) */}
        <Journal />

        {/* 12 PRIVATE VIEWING CTA (full-bleed night villa, glass validation form) */}
        <ViewingCTA />
      </main>

      {/* 13 FOOTER (night bg, 4 columns, huge MERIDIAN watermark, back to top) */}
      <Footer />
    </div>
  );
}

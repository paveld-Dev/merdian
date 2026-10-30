'use client';

import React from 'react';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Marquee } from '@/components/ui/Marquee';
import { RevealText } from '@/components/ui/RevealText';

export function Manifesto() {
  return (
    <section
      id="manifesto"
      className="relative w-full bg-[var(--paper)] text-[var(--ink)] py-24 lg:py-44 overflow-hidden"
    >
      {/* Top Hairline & Section Coordinate Markers */}
      <div className="max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-20">
        <div className="flex items-center justify-between pb-8 hairline-b-light font-mono text-xs text-[#121212]/60 tracking-[0.18em] uppercase">
          <Eyebrow tone="light" category="COURSE" index="01">
            ORIGIN MANIFESTO
          </Eyebrow>
          <div className="hidden sm:flex items-center gap-4">
            <span>GRID REF 01-B</span>
            <span>·</span>
            <span>AXIS LAT 40.6305°</span>
          </div>
        </div>

        {/* 10-Col Large Serif Statement */}
        <div className="py-16 sm:py-24 lg:py-32 max-w-5xl">
          <RevealText tag="h2" className="display-l font-normal">
            We don&apos;t build houses. We compose light, stone and{' '}
            <em className="italic font-normal text-[var(--wine)]">silence</em> into places worth staying.
          </RevealText>

          <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
            <div className="md:col-span-4 font-mono text-xs uppercase tracking-[0.18em] text-[#121212]/60 font-medium">
              PHILOSOPHY OF PERMANENCE
            </div>
            <div className="md:col-span-8 space-y-6 body-l text-[#121212]/80">
              <p>
                Every site possesses an unrepeatable frequency. Before pencil touches vellum, our studio maps the acoustic contour of the wind, the sun&apos;s angle at winter solstice, and the thermal memory of local stone.
              </p>
              <p>
                The result is not architecture imposed upon the terrain, but an inevitable crystallization of the landscape itself.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Infinite Slow Marquee in Mono */}
      <div className="w-full hairline-t-light hairline-b-light bg-[var(--stone)]/40 mt-8">
        <Marquee
          text="120+ RESIDENCES · 14 COUNTRIES · 38 AWARDS · 0 COMPROMISES · CRAFTED FOR GENERATIONS"
          speed={40}
        />
      </div>
    </section>
  );
}

'use client';

import React from 'react';
import Link from 'next/link';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { BeforeAfter } from '@/components/ui/BeforeAfter';

export function Studio() {
  return (
    <section
      id="studio"
      className="relative w-full bg-[var(--paper)] text-[var(--ink)] py-24 lg:py-44"
    >
      <div className="max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center">
          {/* Left Column (6 Cols): BeforeAfter Slider with crop marks */}
          <div className="lg:col-span-6 relative">
            <div className="relative p-2 bg-[var(--stone)]/60 hairline-all-light">
              <BeforeAfter
                beforeImage="/images/studio-sketch.jpg"
                afterImage="/images/studio-render.jpg"
                beforeLabel="TECHNICAL GRAPHITE STUDY"
                afterLabel="COMPLETED PAVILION"
              />
            </div>
            {/* Architectural Drawing Dimension Annotation */}
            <div className="mt-3 flex justify-between font-mono text-[12px] text-[#121212]/50 uppercase tracking-[0.18em]">
              <span>FIG. 04.1 — SPATIAL CONVERGENCE</span>
              <span>1:50 SCALE ELEVATION</span>
            </div>
          </div>

          {/* Right Column (6 Cols): Content & Stats */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <Eyebrow tone="brass" category="COURSE" index="02" className="mb-4">
              THE STUDIO
            </Eyebrow>

            <h2 className="heading-h2 text-[#121212] mb-6">
              Redefining <em className="italic font-normal text-[var(--wine)]">quiet</em> luxury.
            </h2>

            <div className="space-y-4 body-base text-[#121212]/80 max-w-xl">
              <p>
                Founded in 2009 by Eleni Vane, MERIDIAN operates as an integrated architectural atelier and private residential master builder. We take on no more than four private commissions per calendar year to ensure absolute devotion of hand and thought.
              </p>
              <p>
                From initial geological coring through to bespoke forged bronze door hardware, every element is designed in-house and built in collaboration with regional stone masons, joiners, and acoustic engineers.
              </p>
            </div>

            {/* 3 Mono Stats */}
            <div className="grid grid-cols-3 gap-6 py-8 my-8 hairline-t-light hairline-b-light font-mono">
              <div>
                <div className="text-3xl sm:text-4xl text-[#121212] font-normal font-mono">
                  04
                </div>
                <div className="text-xs uppercase tracking-[0.18em] text-[#121212]/60 mt-1 font-mono">
                  Commissions / Year
                </div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl text-[#121212] font-normal font-mono">
                  100%
                </div>
                <div className="text-xs uppercase tracking-[0.18em] text-[#121212]/60 mt-1 font-mono">
                  Custom In-House
                </div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl text-[#121212] font-normal font-mono">
                  15+
                </div>
                <div className="text-xs uppercase tracking-[0.18em] text-[#121212]/60 mt-1 font-mono">
                  Years of Intent
                </div>
              </div>
            </div>

            {/* Editorial Link */}
            <div>
              <Link
                href="#process"
                className="editorial-link font-mono text-[12px] uppercase tracking-[0.18em] font-medium text-[#121212] hover:text-[var(--wine)]"
              >
                About the Studio →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

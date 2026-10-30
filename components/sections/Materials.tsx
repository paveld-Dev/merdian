'use client';

import React from 'react';
import Image from 'next/image';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { MATERIALS } from '@/lib/data';

export function Materials() {
  return (
    <section
      id="materials"
      className="relative w-full bg-[var(--paper)] text-[var(--ink)] py-28 sm:py-36 lg:py-48 hairline-t-light"
    >
      <div className="max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-20">
        {/* Header */}
        <div className="max-w-2xl mb-16 sm:mb-20">
          <Eyebrow tone="brass" index="05" className="mb-4">
            MATERIAL PROVENANCE
          </Eyebrow>
          <h2 className="heading-h2 text-[#121212]">
            Chosen by <em className="italic font-normal text-[var(--accent)]">hand</em>. Aged by time.
          </h2>
          <p className="body-base text-[#121212]/75 mt-4">
            We avoid synthetic finishes that decay into obsolescence. Every material we deploy is raw, geological, or organic—designed to cultivate a richer patina with each passing decade.
          </p>
        </div>

        {/* Asymmetric 6-Tile Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {MATERIALS.map((mat, index) => {
            // Slight visual staggering for asymmetric feel
            const isTall = index === 1 || index === 4;

            return (
              <div
                key={mat.id}
                className={`group relative overflow-hidden bg-[var(--stone)] p-3 hairline-all-light transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:shadow-xl ${isTall ? 'md:translate-y-4' : ''
                  }`}
              >
                {/* Image Container with Hover Scale */}
                <div className="relative aspect-square w-full overflow-hidden bg-black/10">
                  <Image
                    src={mat.image}
                    alt={`${mat.name} architectural texture`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-108"
                  />
                  {/* Subtle inner border */}
                  <div className="absolute inset-0 border border-black/10 pointer-events-none" />
                </div>

                {/* Details Footer */}
                <div className="pt-4 pb-2 px-1">
                  <div className="flex items-center justify-between font-mono text-[18px] tracking-[0.14em] text-[var(--accent)] uppercase mb-1">
                    <span>{mat.code}</span>
                    <span className="text-[#121212]/60">{mat.spec}</span>
                  </div>
                  <h3 className="font-serif text-2xl text-[#121212] font-normal mb-1">
                    {mat.name}
                  </h3>
                  <div className="font-mono text-[18px] text-[#121212]/60 uppercase tracking-wider mb-3">
                    Origin: {mat.origin}
                  </div>
                  <p className="font-sans text-[18px] text-[#121212]/80 leading-relaxed">
                    {mat.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

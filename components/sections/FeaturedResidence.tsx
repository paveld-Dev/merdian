'use client';

import React from 'react';
import Image from 'next/image';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { SpecTable } from '@/components/ui/SpecTable';
import { Button } from '@/components/ui/Button';
import { FEATURED_RESIDENCE } from '@/lib/data';

export function FeaturedResidence() {
  return (
    <section
      id="featured"
      className="relative w-full bg-[#2B2A28] text-[#F2F3F1] py-24 lg:py-44"
    >
      <div className="max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12">
          {/* Left Column: Sticky on Desktop */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 self-start space-y-8">
            <Eyebrow tone="brass" category="COURSE" index="04">
              FEATURED ARCHITECTURE
            </Eyebrow>

            <div>
              <div className="font-mono text-xs uppercase tracking-[0.16em] text-[var(--accent)] mb-2 font-medium">
                {FEATURED_RESIDENCE.location}
              </div>
              <h2 className="display-l font-normal text-white mb-4">
                {FEATURED_RESIDENCE.name}
              </h2>
              <p className="font-mono text-xs text-white/50 tracking-wider">
                {FEATURED_RESIDENCE.coordinates}
              </p>
            </div>

            <p className="body-base text-white/75 font-sans leading-relaxed">
              {FEATURED_RESIDENCE.description}
            </p>

            {/* SpecTable with hairline rows */}
            <div className="pt-4">
              <div className="font-mono text-xs uppercase tracking-[0.16em] text-[var(--accent)] mb-3 font-medium">
                MONOLITH SPECIFICATION MATRIX
              </div>
              <SpecTable rows={FEATURED_RESIDENCE.specs} tone="dark" />
            </div>

            <div className="pt-4">
              <Button variant="primary" tone="dark" href="#floorplan">
                Inspect Architectural Floor Plan
              </Button>
            </div>
          </div>

          {/* Right Column: 4 Tall Images with Numbered Captions */}
          <div className="lg:col-span-7 space-y-24 sm:space-y-32">
            {FEATURED_RESIDENCE.stories.map((story) => (
              <div key={story.number} className="relative group">
                {/* Image Container with Corner Marks */}
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-black/40 hairline-all-dark">
                  <div className="crop-corner-tl" />
                  <div className="crop-corner-tr" />
                  <div className="crop-corner-bl" />
                  <div className="crop-corner-br" />

                  <Image
                    src={story.image}
                    alt={story.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    className="object-cover transition-transform duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>

                {/* Numbered Caption */}
                <div className="mt-6 flex items-start gap-6 hairline-t-dark pt-4">
                  <span className="font-serif text-3xl sm:text-4xl text-[var(--accent)]">
                    {story.number}
                  </span>
                  <div>
                    <h3 className="font-serif text-xl sm:text-2xl text-white font-normal mb-1">
                      {story.title}
                    </h3>
                    <p className="font-sans text-sm sm:text-base text-white/80 leading-relaxed max-w-lg">
                      {story.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

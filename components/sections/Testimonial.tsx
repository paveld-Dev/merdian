'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { TESTIMONIALS } from '@/lib/data';

export function Testimonial() {
  const [index, setIndex] = useState(0);
  const current = TESTIMONIALS[index];

  const handlePrev = () => {
    setIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="relative w-full min-h-[640px] lg:h-[80vh] flex items-center bg-[#0B0D10] text-[#F3F0EA] overflow-hidden">
      {/* Full-bleed Dusk Image of Terrace */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/testimonial-terrace.jpg"
          alt="Terrace gathering at dusk overlooking sea horizon"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Dark Gradient from left for perfect typographic contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0D10] via-[#0B0D10]/85 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D10] via-transparent to-[#0B0D10]/40" />
      </div>

      <div className="relative z-10 max-w-[1440px] w-full mx-auto px-5 sm:px-10 lg:px-20 py-24 lg:py-44">
        <div className="max-w-2xl">
          <Eyebrow tone="brass" category="COURSE" index="10" className="mb-6">
            LIVED EXPERIENCE
          </Eyebrow>

          {/* Serif Italic Quote, max 18 words */}
          <div className="min-h-[160px] sm:min-h-[190px] flex items-center">
            <blockquote className="font-serif italic text-3xl sm:text-4xl lg:text-5xl font-normal leading-tight text-[var(--pearl)] transition-opacity duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]">
              &ldquo;{current.quote}&rdquo;
            </blockquote>
          </div>

          {/* Name + Residence in Mono */}
          <div className="mt-8 pt-6 hairline-t-dark flex flex-col sm:flex-row sm:items-center justify-between gap-6 font-mono">
            <div>
              <div className="text-sm sm:text-base uppercase tracking-[0.14em] text-[#F2F3F1] font-medium">
                {current.client}
              </div>
              <div className="text-xs text-[var(--accent)] tracking-wider uppercase mt-1">
                {current.residence} · {current.location} ({current.year})
              </div>
            </div>

            {/* 01/03 Pager with Circular Arrow Buttons */}
            <div className="flex items-center gap-4">
              <span className="text-xs text-white/60 tracking-wider">
                0{index + 1} / 0{TESTIMONIALS.length}
              </span>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handlePrev}
                  aria-label="Previous quote"
                  className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:border-white hover:bg-white/10 transition-colors"
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M9 3L5 7L9 11" stroke="currentColor" strokeWidth="1.25" />
                  </svg>
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  aria-label="Next quote"
                  className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:border-white hover:bg-white/10 transition-colors"
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M5 3L9 7L5 11" stroke="currentColor" strokeWidth="1.25" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

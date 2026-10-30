'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { RESIDENCES, Residence } from '@/lib/data';

type FilterCategory = 'All' | 'Coastal' | 'Desert' | 'Forest' | 'Mountain';

export function Residences() {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>('All');
  const [hoveredId, setHoveredId] = useState<string>('azure-cliff');

  const filteredResidences =
    activeFilter === 'All'
      ? RESIDENCES
      : RESIDENCES.filter((r) => r.category === activeFilter);

  return (
    <section
      id="residences"
      className="relative w-full bg-[var(--stone)] text-[var(--ink)] py-24 lg:py-44 overflow-hidden hairline-t-light"
    >
      <div className="max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-20">
        {/* Header with Eyebrow, Title and Filter Chips */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-12 hairline-b-light">
          <div>
            <Eyebrow tone="brass" category="COURSE" index="03" className="mb-4">
              COLLECTION
            </Eyebrow>
            <h2 className="heading-h2 text-[#121212]">
              Five places. <em className="italic font-normal text-[var(--wine)]">One</em> philosophy.
            </h2>
          </div>

          {/* Mono Filter Chips */}
          <div className="flex flex-wrap items-center gap-2 font-mono text-[12px] uppercase tracking-[0.18em]">
            {(['All', 'Coastal', 'Desert', 'Forest', 'Mountain'] as FilterCategory[]).map(
              (category) => {
                const isActive = activeFilter === category;
                return (
                  <button
                    key={category}
                    onClick={() => setActiveFilter(category)}
                    className={`px-4 py-2 border transition-all duration-300 cursor-pointer ${isActive
                      ? 'bg-[#121212] text-[#F2F3F1] border-[#121212]'
                      : 'bg-transparent text-[#121212]/70 border-[#121212]/20 hover:border-[#121212]/60 hover:text-[#121212]'
                      }`}
                  >
                    {category}
                  </button>
                );
              }
            )}
          </div>
        </div>

        {/* Desktop Vertical Slice Gallery: 720px tall, flex-grow transition 700ms */}
        <div className="hidden lg:flex w-full h-[720px] mt-12 gap-3">
          {filteredResidences.map((residence: Residence) => {
            const isExpanded = hoveredId === residence.id;

            return (
              <div
                key={residence.id}
                onMouseEnter={() => setHoveredId(residence.id)}
                onFocus={() => setHoveredId(residence.id)}
                tabIndex={0}
                role="region"
                aria-label={`${residence.name} preview`}
                className={`relative h-full overflow-hidden transition-[flex-grow] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] cursor-pointer group outline-none ${isExpanded ? 'flex-[6]' : 'flex-[1.2]'
                  }`}
              >
                {/* Background Image */}
                <Image
                  src={residence.image}
                  alt={residence.name}
                  fill
                  sizes="(max-width: 1440px) 60vw, 800px"
                  className="object-cover object-center transition-transform duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
                />

                {/* Ambient Dark Gradient for Contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/20" />

                {/* Thin Vertical Coordinate Label when compressed */}
                <div
                  className={`absolute top-8 left-6 font-mono text-[11px] uppercase tracking-[0.2em] text-white/60 transition-opacity duration-300 ${isExpanded ? 'opacity-0' : 'opacity-100'
                    }`}
                  style={{ writingMode: 'vertical-rl' }}
                >
                  {residence.number} · {residence.name}
                </div>

                {/* Expanded Content Overlay */}
                <div
                  className={`absolute inset-0 p-8 lg:p-12 flex flex-col justify-between transition-opacity duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${isExpanded ? 'opacity-100 pointer-events-auto delay-100' : 'opacity-0 pointer-events-none'
                    }`}
                >
                  {/* Top Metadata */}
                  <div className="flex items-center justify-between font-mono text-xs uppercase tracking-[0.16em] text-[var(--accent)]">
                    <span>{residence.number} · {residence.category} MONOLITH</span>
                    <span className="text-white/60">{residence.coordinates}</span>
                  </div>

                  {/* Bottom Information */}
                  <div className="max-w-xl">
                    <div className="font-mono text-xs uppercase tracking-[0.14em] text-white/60 mb-2">
                      {residence.location} · {residence.country}
                    </div>
                    <h3 className="font-serif text-3xl xl:text-5xl text-white font-normal mb-3">
                      {residence.name}
                    </h3>
                    <p className="font-sans text-sm sm:text-base text-white/80 mb-6 line-clamp-2 leading-relaxed">
                      {residence.tagline}
                    </p>

                    {/* Specs Row */}
                    <div className="grid grid-cols-4 gap-4 py-4 hairline-t-dark hairline-b-dark font-mono text-xs mb-6 text-white/90">
                      <div>
                        <div className="font-medium text-white text-sm">{residence.area}</div>
                        <div className="text-[10px] text-white/50 uppercase tracking-wider">Area</div>
                      </div>
                      <div>
                        <div className="font-medium text-white text-sm">{residence.bedrooms} Beds</div>
                        <div className="text-[10px] text-white/50 uppercase tracking-wider">Suites</div>
                      </div>
                      <div>
                        <div className="font-medium text-white text-sm">{residence.bathrooms} Baths</div>
                        <div className="text-[10px] text-white/50 uppercase tracking-wider">Spa</div>
                      </div>
                      <div>
                        <div className="font-medium text-[var(--accent)] text-sm">{residence.price}</div>
                        <div className="text-[10px] text-white/50 uppercase tracking-wider">Investment</div>
                      </div>
                    </div>

                    <Link
                      href="#featured"
                      className="editorial-link font-mono text-xs uppercase tracking-[0.14em] font-medium text-white hover:text-[var(--accent)]"
                    >
                      View Residence Details →
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile Horizontal Snap Carousel */}
        <div className="lg:hidden flex overflow-x-auto gap-4 mt-8 pb-6 snap-x snap-mandatory">
          {filteredResidences.map((residence) => (
            <div
              key={`mob-${residence.id}`}
              className="relative min-w-[85vw] sm:min-w-[420px] h-[520px] snap-center overflow-hidden flex-shrink-0"
            >
              <Image
                src={residence.image}
                alt={residence.name}
                fill
                sizes="85vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

              <div className="absolute inset-0 p-6 flex flex-col justify-between text-white">
                <div className="font-mono text-xs tracking-wider text-[var(--accent)] uppercase">
                  {residence.number} · {residence.category}
                </div>
                <div>
                  <div className="font-mono text-xs text-white/60 uppercase mb-1">
                    {residence.location}
                  </div>
                  <h3 className="font-serif text-2xl font-normal mb-2">{residence.name}</h3>
                  <div className="font-mono text-sm text-[var(--accent)] mb-4">{residence.price}</div>
                  <Link
                    href="#featured"
                    className="editorial-link font-mono text-xs uppercase tracking-wider text-white hover:text-[var(--accent)]"
                  >
                    View Residence →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

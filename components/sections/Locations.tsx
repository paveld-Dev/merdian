'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { LOCATIONS, LocationPin } from '@/lib/data';

export function Locations() {
  const [activePin, setActivePin] = useState<LocationPin>(LOCATIONS[0]);

  return (
    <section
      id="locations"
      className="relative w-full bg-[#121212] text-[#F2F3F1] py-24 lg:py-44 hairline-t-dark"
    >
      <div className="max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-20">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-16 hairline-b-dark">
          <div>
            <Eyebrow tone="brass" category="COURSE" index="09">
              GLOBAL PRESENCE
            </Eyebrow>
            <h2 className="heading-h2 text-white mt-3">
              Topographies of <em className="italic font-normal text-[var(--pearl)]">distinction</em>.
            </h2>
          </div>
          <div className="font-mono text-xs sm:text-[13px] text-white/60 tracking-wider">
            38 COMPLETED WORKS · 7 CLIMATIC ZONES
          </div>
        </div>

        {/* Map & Location List Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center mt-12">
          {/* Dot-matrix World Map SVG Canvas (8 Cols) */}
          <div className="lg:col-span-8 relative bg-black/50 border border-white/10 p-6 sm:p-10 aspect-[16/9] flex items-center justify-center overflow-hidden">
            <div className="crop-corner-tl" />
            <div className="crop-corner-tr" />
            <div className="crop-corner-bl" />
            <div className="crop-corner-br" />

            {/* Dot-Matrix SVG World Map */}
            <svg
              viewBox="0 0 1000 500"
              className="w-full h-full text-white/[0.12] select-none"
              fill="currentColor"
            >
              {/* Simplified Dot Matrix Continents Grid Pattern */}
              <defs>
                <pattern id="dot-grid" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
                  <circle cx="2" cy="2" r="1" fill="rgba(255,255,255,0.14)" />
                </pattern>
              </defs>
              <rect width="1000" height="500" fill="url(#dot-grid)" opacity="0.4" />

              {/* Stylized continent geometric outlines */}
              {/* North America */}
              <path
                d="M 120 100 L 280 80 L 320 180 L 240 280 L 160 220 L 100 160 Z"
                fill="none"
                stroke="rgba(255,255,255,0.18)"
                strokeDasharray="3 3"
              />
              {/* South America */}
              <path
                d="M 280 300 L 360 330 L 340 440 L 270 420 Z"
                fill="none"
                stroke="rgba(255,255,255,0.18)"
                strokeDasharray="3 3"
              />
              {/* Europe & North Africa */}
              <path
                d="M 450 110 L 580 90 L 590 220 L 460 230 Z"
                fill="none"
                stroke="rgba(255,255,255,0.18)"
                strokeDasharray="3 3"
              />
              {/* Asia & Pacific */}
              <path
                d="M 620 90 L 880 110 L 920 280 L 700 320 L 630 220 Z"
                fill="none"
                stroke="rgba(255,255,255,0.18)"
                strokeDasharray="3 3"
              />
              {/* Equator & Meridian Guidelines */}
              <line x1="0" y1="250" x2="1000" y2="250" stroke="rgba(255,255,255,0.08)" strokeDasharray="4 4" />
              <line x1="500" y1="0" x2="500" y2="500" stroke="rgba(138,149,165,0.25)" strokeDasharray="2 4" />
              <text x="506" y="22" fill="var(--accent)" fontSize="14" fontFamily="monospace" opacity="0.7">
                PRIME MERIDIAN 0°00&apos;
              </text>
            </svg>

            {/* Pins with Pulse Rings */}
            {LOCATIONS.map((loc) => {
              const isSelected = activePin.id === loc.id;
              return (
                <div
                  key={loc.id}
                  className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer z-20 group"
                  style={{ left: `${loc.x}%`, top: `${loc.y}%` }}
                  onMouseEnter={() => setActivePin(loc)}
                  onClick={() => setActivePin(loc)}
                >
                  <div className="relative flex h-7 w-7 items-center justify-center">
                    {/* Pulsing ring */}
                    <span
                      className={`absolute inline-flex h-full w-full rounded-full opacity-75 animate-ping ${
                        isSelected ? 'bg-[var(--accent)]' : 'bg-white/20'
                      }`}
                    />
                    {/* Core pin dot */}
                    <span
                      className={`relative inline-flex h-3.5 w-3.5 rounded-full transition-transform duration-300 ${
                        isSelected
                          ? 'bg-[var(--accent)] scale-125 shadow-[0_0_10px_rgba(138,149,165,1)]'
                          : 'bg-white/70 group-hover:bg-white group-hover:scale-110'
                      }`}
                    />
                  </div>

                  {/* Active Tooltip on pin */}
                  {isSelected && (
                    <div className="hidden sm:block absolute bottom-8 left-1/2 -translate-x-1/2 bg-[#0B0D10]/95 border border-[var(--accent)]/60 px-3.5 py-2 whitespace-nowrap shadow-xl z-30 pointer-events-none">
                      <div className="font-serif text-sm text-white">{loc.name}</div>
                      <div className="font-mono text-xs text-[var(--accent)] tracking-wider">
                        {loc.coordinates}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Location List (4 Cols) */}
          <div className="lg:col-span-4 space-y-3">
            <div className="font-mono text-xs uppercase tracking-[0.16em] text-[var(--accent)] mb-4 font-medium">
              ACTIVE SITES REGISTRY
            </div>

            <div className="divide-y divide-white/10 font-mono">
              {LOCATIONS.map((loc) => {
                const isActive = activePin.id === loc.id;

                return (
                  <div
                    key={loc.id}
                    onMouseEnter={() => setActivePin(loc)}
                    onClick={() => setActivePin(loc)}
                    className={`py-3.5 px-3 flex items-center justify-between cursor-pointer transition-colors duration-200 ${
                      isActive
                        ? 'bg-white/10 border-l-2 border-[var(--accent)] text-white'
                        : 'text-white/60 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <div>
                      <div className="font-serif text-lg text-current">{loc.name}</div>
                      <div className="text-xs tracking-wider text-white/50">
                        {loc.region} · {loc.coordinates}
                      </div>
                    </div>

                    <div className="text-right">
                      <span className="font-mono text-xs px-2.5 py-1 border border-white/20 text-[var(--accent)]">
                        0{loc.count} SITES
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Active Thumbnail Preview */}
            <div className="pt-4">
              <div className="relative aspect-video w-full overflow-hidden border border-white/15">
                <Image
                  src={activePin.thumbnail}
                  alt={activePin.name}
                  fill
                  sizes="350px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-3 font-mono text-xs sm:text-sm text-white">
                  <span>{activePin.name}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

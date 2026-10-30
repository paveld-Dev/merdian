'use client';

import React from 'react';
import Link from 'next/link';
import { Residence } from '@/lib/data';

interface SpecCardProps {
  residence: Residence;
  onPrev: () => void;
  onNext: () => void;
  currentIndex: number;
  total: number;
}

export function SpecCard({
  residence,
  onPrev,
  onNext,
  currentIndex,
  total,
}: SpecCardProps) {
  return (
    <div className="glass-dark p-4 sm:p-5 w-full max-w-[420px] text-[#F2F3F1] relative">
      {/* Drafting Crop Marks */}
      <div className="crop-corner-tl" />
      <div className="crop-corner-tr" />
      <div className="crop-corner-bl" />
      <div className="crop-corner-br" />

      {/* Top Bar with Number & Controls */}
      <div className="flex items-center justify-between pb-2.5 hairline-b-dark text-white/70">
        <span className="font-mono text-xs tracking-[0.14em] uppercase text-[var(--accent)] font-medium">
          {residence.number} · ARCHIVE
        </span>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onPrev}
            aria-label="Previous residence"
            className="w-7 h-7 rounded-full border border-white/20 flex items-center justify-center hover:border-white/60 hover:bg-white/10 transition-colors"
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M7.5 2.5L4 6L7.5 9.5" stroke="currentColor" strokeWidth="1.25" />
            </svg>
          </button>
          <span className="font-mono text-xs text-white/70">
            {currentIndex + 1}/{total}
          </span>
          <button
            type="button"
            onClick={onNext}
            aria-label="Next residence"
            className="w-7 h-7 rounded-full border border-white/20 flex items-center justify-center hover:border-white/60 hover:bg-white/10 transition-colors"
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M4.5 2.5L8 6L4.5 9.5" stroke="currentColor" strokeWidth="1.25" />
            </svg>
          </button>
        </div>
      </div>

      {/* Title & Location */}
      <div className="pt-3 pb-2">
        <div className="font-mono text-xs uppercase tracking-[0.12em] text-white/60 mb-0.5">
          {residence.location} · {residence.country}
        </div>
        <h3 className="font-serif text-2xl sm:text-3xl font-normal tracking-tight text-white">
          {residence.name}
        </h3>
        <p className="font-mono text-xs text-[var(--accent)] tracking-[0.08em] mt-0.5">
          {residence.coordinates}
        </p>
      </div>

      {/* Wireframe Architectural Elevation SVG */}
      <div className="my-2 py-2 px-3 bg-white/[0.03] border border-white/10 relative overflow-hidden">
        <div className="absolute top-1.5 right-2 font-mono text-[10px] text-white/40 uppercase tracking-widest">
          AXIS 1:100
        </div>
        <svg
          viewBox="0 0 320 80"
          className="w-full h-10 text-white/40"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
        >
          {/* Ground & dimension lines */}
          <line x1="10" y1="65" x2="310" y2="65" strokeDasharray="3 3" />
          <line x1="30" y1="65" x2="30" y2="20" stroke="currentColor" opacity="0.6" />
          <line x1="30" y1="20" x2="160" y2="20" stroke="currentColor" opacity="0.8" />
          <line x1="160" y1="20" x2="160" y2="35" stroke="currentColor" opacity="0.8" />
          <line x1="160" y1="35" x2="280" y2="35" stroke="currentColor" opacity="0.8" />
          <line x1="280" y1="35" x2="280" y2="65" stroke="currentColor" opacity="0.6" />
          {/* Cantilever overhang */}
          <line x1="160" y1="20" x2="220" y2="20" stroke="var(--accent)" strokeWidth="1.5" />
          <line x1="220" y1="20" x2="220" y2="35" stroke="var(--accent)" strokeWidth="1.5" />
          {/* Internal structural rhythm ticks */}
          <line x1="60" y1="35" x2="60" y2="65" opacity="0.3" />
          <line x1="90" y1="35" x2="90" y2="65" opacity="0.3" />
          <line x1="120" y1="35" x2="120" y2="65" opacity="0.3" />
          <line x1="180" y1="45" x2="180" y2="65" opacity="0.3" />
          <line x1="240" y1="45" x2="240" y2="65" opacity="0.3" />
          {/* Pool line */}
          <path d="M220 63 L280 63" stroke="var(--glow)" strokeWidth="1.5" />
        </svg>
      </div>

      {/* Primary Key Stats 2x2 Grid */}
      <div className="grid grid-cols-2 gap-x-4 gap-y-1.5 py-2.5 hairline-t-dark hairline-b-dark font-mono text-xs">
        <div className="flex items-baseline justify-between">
          <span className="uppercase tracking-wider text-white/50">Area</span>
          <span className="text-white font-medium">{residence.area}</span>
        </div>
        <div className="flex items-baseline justify-between">
          <span className="uppercase tracking-wider text-white/50">Suites</span>
          <span className="text-white font-medium">{residence.bedrooms} BR</span>
        </div>
        <div className="flex items-baseline justify-between">
          <span className="uppercase tracking-wider text-white/50">Baths</span>
          <span className="text-white font-medium">{residence.bathrooms} BA</span>
        </div>
        <div className="flex items-baseline justify-between">
          <span className="uppercase tracking-wider text-white/50">Garage</span>
          <span className="text-white font-medium">{residence.parking} PK</span>
        </div>
      </div>

      {/* Action Footer */}
      <div className="mt-3 flex items-center justify-between">
        <div className="font-mono text-sm text-[#F2F3F1] font-semibold">
          {residence.price}
        </div>
        <Link
          href="#floorplan"
          className="editorial-link font-mono text-xs uppercase tracking-[0.14em] text-[var(--accent)] hover:text-white transition-colors"
        >
          View Plan →
        </Link>
      </div>
    </div>
  );
}

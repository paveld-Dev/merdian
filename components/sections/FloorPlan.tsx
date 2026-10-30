'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { FLOOR_PLAN_HOTSPOTS, FloorPlanHotspot } from '@/lib/data';

type Level = 'Ground' | 'Upper' | 'Roof';

export function FloorPlan() {
  const [activeLevel, setActiveLevel] = useState<Level>('Ground');
  const [selectedHotspot, setSelectedHotspot] = useState<FloorPlanHotspot>(FLOOR_PLAN_HOTSPOTS[0]);

  const filteredHotspots = FLOOR_PLAN_HOTSPOTS.filter(
    (hp) => hp.level === activeLevel
  );

  return (
    <section
      id="floorplan"
      className="relative w-full bg-[#121212] text-[#F2F3F1] py-24 lg:py-44 hairline-t-dark"
    >
      <div className="max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-20">
        {/* Section Header & Tablist */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 hairline-b-dark">
          <div>
            <Eyebrow tone="brass" category="COURSE" index="05">
              SPATIAL BLUEPRINT
            </Eyebrow>
            <h2 className="heading-h2 text-white mt-3">
              Interactive Floor Plan <em className="italic font-normal text-[var(--pearl)]">Explorer</em>.
            </h2>
          </div>

          {/* Accessible Tablist */}
          <div
            role="tablist"
            aria-label="Floor plan levels"
            className="flex items-center bg-white/5 border border-white/15 p-1 self-start md:self-auto font-mono text-[12px] uppercase tracking-[0.18em]"
          >
            {(['Ground', 'Upper', 'Roof'] as Level[]).map((level) => {
              const isSelected = activeLevel === level;
              return (
                <button
                  key={level}
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => {
                    setActiveLevel(level);
                    const firstForLevel = FLOOR_PLAN_HOTSPOTS.find((h) => h.level === level);
                    if (firstForLevel) setSelectedHotspot(firstForLevel);
                  }}
                  className={`px-4 py-2 transition-colors cursor-pointer ${
                    isSelected
                      ? 'bg-[var(--accent)] text-[#121212] font-semibold'
                      : 'text-white/60 hover:text-white'
                  }`}
                >
                  {level} Level
                </button>
              );
            })}
          </div>
        </div>

        {/* Blueprint Viewer Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center mt-12">
          {/* Blueprint SVG Canvas (8 Cols) */}
          <div className="lg:col-span-8 relative bg-black/60 border border-white/15 p-6 sm:p-12 overflow-hidden aspect-[16/10]">
            {/* Technical Corner Crop Marks */}
            <div className="crop-corner-tl" />
            <div className="crop-corner-tr" />
            <div className="crop-corner-bl" />
            <div className="crop-corner-br" />

            {/* Background Drafting Grid Overlay */}
            <div
              className="absolute inset-0 opacity-15 pointer-events-none"
              style={{
                backgroundImage:
                  'radial-gradient(circle, rgba(255,255,255,0.4) 1px, transparent 1px)',
                backgroundSize: '24px 24px',
              }}
            />

            {/* Scale & Metadata Badge */}
            <div className="absolute top-4 left-6 font-mono text-[11px] text-white/50 uppercase tracking-widest">
              LEVEL: {activeLevel.toUpperCase()} · SCALE 1:100 METRIC · BEARING 142° SE
            </div>

            {/* Inline SVG Floor Plan Drawing */}
            <svg
              viewBox="0 0 800 500"
              className="w-full h-full text-white/40"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.25"
            >
              {/* Outer Boundary & Retaining Walls */}
              <rect x="80" y="60" width="640" height="380" strokeDasharray="4 4" opacity="0.3" />

              {/* Main Pavilion Concrete Walls */}
              <rect
                x="140"
                y="100"
                width="340"
                height="280"
                stroke="currentColor"
                strokeWidth="2"
                opacity="0.8"
              />
              <rect
                x="480"
                y="160"
                width="220"
                height="220"
                stroke="currentColor"
                strokeWidth="2"
                opacity="0.8"
              />

              {/* Cantilever Infinity Pool Deck */}
              <rect
                x="360"
                y="340"
                width="340"
                height="100"
                stroke="var(--accent)"
                strokeWidth="1.5"
                opacity="0.7"
              />
              <path
                d="M400 360 L680 360 L680 420 L400 420 Z"
                fill="rgba(138, 149, 165, 0.12)"
                stroke="var(--accent)"
                strokeWidth="1"
              />

              {/* Internal Spatial Partitions */}
              <line x1="280" y1="100" x2="280" y2="380" stroke="currentColor" strokeWidth="1.5" />
              <line x1="140" y1="220" x2="280" y2="220" stroke="currentColor" strokeWidth="1.5" />
              <line x1="480" y1="260" x2="700" y2="260" stroke="currentColor" strokeWidth="1.5" />

              {/* Door Swings */}
              <path d="M 280 220 A 40 40 0 0 1 320 260" strokeDasharray="2 2" />
              <path d="M 480 260 A 40 40 0 0 1 520 300" strokeDasharray="2 2" />

              {/* Dimension Guidelines */}
              <line x1="140" y1="80" x2="480" y2="80" stroke="currentColor" opacity="0.4" />
              <line x1="140" y1="75" x2="140" y2="85" stroke="currentColor" opacity="0.4" />
              <line x1="480" y1="75" x2="480" y2="85" stroke="currentColor" opacity="0.4" />
              <text x="270" y="75" fill="currentColor" fontSize="14" fontFamily="monospace" opacity="0.7">
                17,000 MM
              </text>

              {/* Room Highlight when Active */}
              {selectedHotspot && (
                <circle
                  cx={selectedHotspot.x * 8}
                  cy={selectedHotspot.y * 5}
                  r="45"
                  fill="rgba(138, 149, 165, 0.2)"
                  className="animate-pulse"
                />
              )}
            </svg>

            {/* Interactive Hotspots Overlaid */}
            {filteredHotspots.map((hp) => {
              const isSelected = selectedHotspot?.id === hp.id;
              return (
                <button
                  key={hp.id}
                  onClick={() => setSelectedHotspot(hp)}
                  aria-label={`Hotspot ${hp.number}: ${hp.name}`}
                  className="absolute -translate-x-1/2 -translate-y-1/2 group cursor-pointer focus:outline-none"
                  style={{ left: `${hp.x}%`, top: `${hp.y}%` }}
                >
                  <span className="relative flex h-10 w-10 items-center justify-center">
                    {/* Pulsing ring */}
                    <span
                      className={`absolute inline-flex h-full w-full rounded-full opacity-75 animate-ping ${
                        isSelected ? 'bg-[var(--accent)]' : 'bg-white/40'
                      }`}
                    />
                    {/* Core Button */}
                    <span
                      className={`relative inline-flex items-center justify-center rounded-full h-8 w-8 font-mono text-xs font-semibold transition-all duration-300 ${
                        isSelected
                          ? 'bg-[var(--accent)] text-[#121212] scale-110 shadow-[0_0_12px_rgba(138,149,165,0.8)]'
                          : 'bg-[#121212] text-white border border-white/40 group-hover:border-white'
                      }`}
                    >
                      {hp.number}
                    </span>
                  </span>
                </button>
              );
            })}
          </div>

          {/* Interactive Room Details Glass Card (4 Cols) */}
          <div className="lg:col-span-4">
            {selectedHotspot ? (
              <div className="glass-dark p-6 sm:p-8 relative">
                <div className="crop-corner-tl" />
                <div className="crop-corner-tr" />
                <div className="crop-corner-bl" />
                <div className="crop-corner-br" />

                <div className="flex items-center justify-between font-mono text-xs uppercase tracking-[0.16em] text-[var(--accent)] pb-3 hairline-b-dark font-medium">
                  <span>SPECIFICATION</span>
                  <span>{selectedHotspot.number} / {activeLevel.toUpperCase()}</span>
                </div>

                <div className="pt-4">
                  <h3 className="font-serif text-3xl sm:text-4xl font-normal text-white mb-1">
                    {selectedHotspot.name}
                  </h3>
                  <div className="font-mono text-xs text-white/60 tracking-wider mb-4">
                    INTERNAL FOOTPRINT · {selectedHotspot.area}
                  </div>
                </div>

                {/* Room Thumbnail */}
                <div className="relative aspect-video w-full overflow-hidden bg-black/60 my-4 border border-white/10">
                  <Image
                    src={selectedHotspot.image}
                    alt={selectedHotspot.name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 350px"
                    className="object-cover"
                  />
                </div>

                <p className="font-sans text-sm sm:text-base text-white/80 leading-relaxed pt-2">
                  {selectedHotspot.description}
                </p>

                <div className="mt-6 pt-4 hairline-t-dark flex justify-between items-center font-mono text-xs text-white/70">
                  <span>21°C OPTIMAL</span>
                  <span className="text-[var(--accent)]">PASSIVE SOLAR</span>
                </div>
              </div>
            ) : (
              <div className="glass-dark p-8 text-center font-mono text-xs text-white/50">
                Select a numbered hotspot on the blueprint to inspect room specifications.
              </div>
            )}
  
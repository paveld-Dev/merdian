'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { SpecCard } from '@/components/ui/SpecCard';
import { LineIcon } from '@/components/ui/LineIcon';
import { RESIDENCES } from '@/lib/data';

export function Hero() {
  const [mode, setMode] = useState<'dusk' | 'day'>('dusk');
  const [residenceIndex, setResidenceIndex] = useState(0);
  const [blueprintDrawn, setBlueprintDrawn] = useState(false);
  const [filmModalOpen, setFilmModalOpen] = useState(false);

  const currentResidence = RESIDENCES[residenceIndex];

  useEffect(() => {
    // Trigger SVG line drawing completion
    const timer = setTimeout(() => {
      setBlueprintDrawn(true);
    }, 1800);
    return () => clearTimeout(timer);
  }, []);

  const handlePrev = () => {
    setResidenceIndex((prev) => (prev === 0 ? RESIDENCES.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setResidenceIndex((prev) => (prev === RESIDENCES.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="relative w-full min-h-[100svh] lg:h-[100svh] min-h-[560px] flex flex-col justify-between overflow-hidden bg-[#0B0D10] text-[#F2F3F1]">
      {/* Background Images with Day/Dusk Crossfade */}
      <div className="absolute inset-0 z-0">
        {/* Dusk Image */}
        <div
          className={`absolute inset-0 transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] ${mode === 'dusk' ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
            } ${blueprintDrawn ? 'scale-100' : 'scale-[1.08]'}`}
        >
          <Image
            src={currentResidence.heroImageDusk || currentResidence.image}
            alt={`${currentResidence.name} at twilight dusk`}
            fill
            priority
            quality={90}
            className="object-cover object-center"
          />
        </div>

        {/* Day Image */}
        <div
          className={`absolute inset-0 transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] ${mode === 'day' ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
            }`}
        >
          <Image
            src={currentResidence.heroImageDay || currentResidence.image}
            alt={`${currentResidence.name} in morning architectural sunlight`}
            fill
            quality={90}
            className="object-cover object-center"
          />
        </div>

        {/* Architectural Vignette Gradients for Text Contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/30 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-black/60 pointer-events-none" />
      </div>

      {/* Blueprint SVG Line Drawing Overlay (Draws on load, then fades out) */}
      <div
        className={`absolute inset-0 z-10 pointer-events-none flex items-center justify-center transition-opacity duration-1000 ${blueprintDrawn ? 'opacity-0' : 'opacity-85'
          }`}
      >
        <svg
          viewBox="0 0 1440 900"
          className="w-full h-full text-white/50"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
        >
          {/* Outer Horizon & Elevation Lines */}
          <line
            x1="100"
            y1="550"
            x2="1340"
            y2="550"
            className="animate-draw-line"
            strokeDasharray="1300"
            strokeDashoffset="0"
          />
          <line
            x1="200"
            y1="400"
            x2="1240"
            y2="400"
            className="animate-draw-line"
            strokeDasharray="1100"
            strokeDashoffset="0"
          />
          {/* Cantilever outline */}
          <rect
            x="480"
            y="280"
            width="520"
            height="260"
            strokeDasharray="1600"
            className="animate-draw-line"
          />
          <rect
            x="640"
            y="240"
            width="320"
            height="180"
            strokeDasharray="1000"
            className="animate-draw-line"
          />
          {/* Dimension annotations */}
          <text x="500" y="270" fill="currentColor" fontSize="11" fontFamily="monospace" letterSpacing="0.2em">
            DIM 32,400MM · ELEV +88.4M
          </text>
          <text x="820" y="580" fill="currentColor" fontSize="11" fontFamily="monospace" letterSpacing="0.2em">
            TERRACE DATUM 0.00
          </text>
        </svg>
      </div>

      {/* Top Bar: DAY / DUSK Mode Switcher (Positioned Absolutely) */}
      <div className="absolute top-24 right-5 sm:right-10 lg:right-20 z-20 pointer-events-none">
        {/* DAY / DUSK Toggle */}
        <div className="pointer-events-auto flex items-center bg-black/60 backdrop-blur-md border border-white/20 p-1">
          <button
            type="button"
            onClick={() => setMode('day')}
            className={`flex items-center gap-2 px-3 py-1 font-mono text-xs tracking-[0.14em] uppercase transition-colors ${mode === 'day'
                ? 'bg-white text-black font-semibold'
                : 'text-white/60 hover:text-white'
              }`}
          >
            <LineIcon name="sun" size={14} />
            <span>DAY</span>
          </button>
          <button
            type="button"
            onClick={() => setMode('dusk')}
            className={`flex items-center gap-2 px-3 py-1 font-mono text-xs tracking-[0.14em] uppercase transition-colors ${mode === 'dusk'
                ? 'bg-[var(--accent)] text-[#121212] font-semibold'
                : 'text-white/60 hover:text-white'
              }`}
          >
            <LineIcon name="moon" size={14} />
            <span>DUSK</span>
          </button>
        </div>
      </div>

      {/* Center Main Content Grid */}
      <div className="relative z-20 max-w-[1440px] w-full mx-auto px-5 sm:px-10 lg:px-20 pt-24 sm:pt-28 pb-8 flex-1 flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          {/* Left Column: Headlines & CTA Buttons */}
          <div className="lg:col-span-7 xl:col-span-8">
            <h1 className="display-xl text-white font-normal mb-6">
              Architecture <br />
              that <em className="italic font-normal text-[var(--pearl)]">breathes</em> <br />
              with its land.
            </h1>

            <p className="body-l text-white/85 font-sans mb-8">
              We design monolithic private residences at the extreme edge of nature. Cantilevered stone, quiet water reflections, and rooms drawn with celestial intent.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Button variant="primary" tone="dark" href="#residences">
                Explore Residences
              </Button>
              <Button
                variant="ghost"
                tone="dark"
                onClick={() => setFilmModalOpen(true)}
                icon={<LineIcon name="play" size={14} className="ml-2" />}
              >
                Watch Film
              </Button>
            </div>
          </div>

          {/* Right Column: SpecCard */}
          <div className="lg:col-span-5 xl:col-span-4 flex justify-start lg:justify-end">
            <SpecCard
              residence={currentResidence}
              onPrev={handlePrev}
              onNext={handleNext}
              currentIndex={residenceIndex}
              total={RESIDENCES.length}
            />
          </div>
        </div>
      </div>

      {/* Right Edge: Vertical Animated SCROLL Label */}
      <div className="hidden md:flex absolute right-6 top-1/2 -translate-y-1/2 z-20 flex-col items-center gap-3 pointer-events-none select-none">
        <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-white/40 [writing-mode:vertical-rl]">
          SCROLL
        </span>
        <div className="w-[1px] h-12 bg-white/20 relative overflow-hidden">
          <div className="w-full h-1/2 bg-[var(--accent)] animate-scroll-indicator" />
        </div>
      </div>

      {/* Bottom Architectural Strip */}
      <div className="relative z-20 w-full hairline-t-dark bg-black/40 backdrop-blur-md">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-20 py-2.5 grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-white/10 font-mono text-xs uppercase tracking-[0.14em] text-white/80">
          <div className="flex items-center gap-3 py-0.5 justify-start sm:justify-start">
            <LineIcon name="clock" size={18} className="text-[var(--accent)]" />
            <span>Timeless Monolithic Design</span>
          </div>
          <div className="flex items-center gap-3 py-0.5 justify-start sm:justify-center">
            <LineIcon name="pin" size={18} className="text-[var(--accent)]" />
            <span>Prime Global Topographies</span>
          </div>
          <div className="flex items-center gap-3 py-0.5 justify-start sm:justify-end">
            <LineIcon name="leaf" size={18} className="text-[var(--accent)]" />
            <span>Passive Thermodynamic Living</span>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {filmModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-6">
          <div className="relative w-full max-w-4xl bg-[#121212] border border-white/20 p-6">
            <button
              onClick={() => setFilmModalOpen(false)}
              className="absolute top-4 right-4 text-white hover:text-[#B89B6A]"
              aria-label="Close Film Modal"
            >
              <LineIcon name="close" size={24} />
            </button>
            <div className="font-mono text-[11px] text-[#B89B6A] uppercase tracking-widest mb-2">
              CINEMATOGRAPHIC REEL · 4K HDR
            </div>
            <h3 className="font-serif text-2xl text-white mb-4">
              The Architecture of Stillness (Amalfi & Utah)
            </h3>
            <div className="aspect-video w-full bg-black/80 flex items-center justify-center relative overflow-hidden border border-white/10">
              <Image
                src="/images/hero-dusk.jpg"
                alt="Cinema reel preview"
                fill
                className="object-cover opacity-60"
              />
              <div className="relative z-10 flex flex-col items-center gap-3 text-center p-6">
                <div className="w-16 h-16 rounded-full border border-[var(--brass)] bg-black/60 backdrop-blur-md flex items-center justify-center text-[var(--brass)]">
                  <LineIcon name="play" size={24} className="ml-1" />
                </div>
                <span className="font-mono text-xs text-white/80 uppercase tracking-widest">
                  Sound On · 35mm Anamorphic Capture
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Custom Styles for Blueprint & Scroll Indicator */}
      <style jsx>{`
        @keyframes draw {
          from {
            stroke-dashoffset: 1600;
          }
          to {
            stroke-dashoffset: 0;
          }
        }
        .animate-draw-line {
          animation: draw 1.6s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
        @keyframes scrollSlide {
          0% {
            transform: translateY(-100%);
          }
          100% {
            transform: translateY(200%);
          }
        }
        .animate-scroll-indicator {
          animation: scrollSlide 2.4s cubic-bezier(0.22, 1, 0.36, 1) infinite;
        }
      `}</style>
    </section>
  );
}

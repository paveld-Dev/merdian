'use client';

import React, { useState, useRef, useCallback, useEffect } from 'react';
import Image from 'next/image';

interface BeforeAfterProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
  className?: string;
}

export function BeforeAfter({
  beforeImage,
  afterImage,
  beforeLabel = 'GRAPHITE CONCEPT',
  afterLabel = 'BUILT MONOLITH',
  className = '',
}: BeforeAfterProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const clamped = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(clamped);
  }, []);

  const handleTouchMove = useCallback(
    (e: TouchEvent) => {
      if (!isDragging) return;
      handleMove(e.touches[0].clientX);
    },
    [isDragging, handleMove]
  );

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!isDragging) return;
      handleMove(e.clientX);
    },
    [isDragging, handleMove]
  );

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('touchmove', handleTouchMove);
      window.addEventListener('touchend', handleMouseUp);
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, [isDragging, handleMouseMove, handleMouseUp, handleTouchMove]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      setSliderPosition((prev) => Math.max(0, prev - 3));
    } else if (e.key === 'ArrowRight') {
      setSliderPosition((prev) => Math.min(100, prev + 3));
    }
  };

  return (
    <div
      ref={containerRef}
      role="slider"
      aria-label="Before and After architectural comparison"
      aria-valuenow={Math.round(sliderPosition)}
      aria-valuemin={0}
      aria-valuemax={100}
      tabIndex={0}
      onKeyDown={handleKeyDown}
      className={`relative select-none overflow-hidden outline-none focus:ring-1 focus:ring-[var(--brass)] cursor-ew-resize aspect-[4/3] bg-[#E4DED4] ${className}`}
      onMouseDown={(e) => {
        setIsDragging(true);
        handleMove(e.clientX);
      }}
      onTouchStart={(e) => {
        setIsDragging(true);
        handleMove(e.touches[0].clientX);
      }}
    >
      {/* Corner Crop Marks */}
      <div className="crop-corner-tl z-30" />
      <div className="crop-corner-tr z-30" />
      <div className="crop-corner-bl z-30" />
      <div className="crop-corner-br z-30" />

      {/* After Image (Background: Built Render) */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        <Image
          src={afterImage}
          alt="Completed architectural monolith render"
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover"
          priority
        />
        <div className="absolute bottom-4 right-4 z-10 bg-black/70 backdrop-blur-md px-3 py-1 font-mono text-xs tracking-[0.14em] uppercase text-white/90">
          {afterLabel}
        </div>
      </div>

      {/* Before Image (Foreground: Technical Sketch clipped) */}
      <div
        className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <Image
          src={beforeImage}
          alt="Original graphite architectural sketch"
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover"
          priority
        />
        <div className="absolute bottom-4 left-4 z-10 bg-[#121212]/85 backdrop-blur-md px-3 py-1 font-mono text-xs tracking-[0.14em] uppercase text-[#F2F3F1]">
          {beforeLabel}
        </div>
      </div>

      {/* Vertical Accent Divider & Handle */}
      <div
        className="absolute top-0 bottom-0 z-20 pointer-events-none flex items-center justify-center -translate-x-1/2"
        style={{ left: `${sliderPosition}%` }}
      >
        {/* Fine vertical line */}
        <div className="w-[1.5px] h-full bg-[var(--accent)] shadow-[0_0_8px_rgba(138,149,165,0.6)]" />

        {/* Center Handle */}
        <div className="absolute w-11 h-11 rounded-full bg-[#121212] border border-[var(--accent)] flex items-center justify-center shadow-lg transition-transform duration-200 group-hover:scale-110">
          <svg
            width="16"
            height="16"
            viewBox="0 0 14 14"
            fill="none"
            className="text-[var(--accent)]"
          >
            <path
              d="M4 7L1 7M1 7L3 5M1 7L3 9M10 7L13 7M13 7L11 5M13 7L11 9"
              stroke="currentColor"
              strokeWidth="1.25"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>

      {/* Keyboard Hint Pill */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 z-10 bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full font-mono text-[11px] uppercase tracking-wider text-white/75 pointer-events-none hidden sm:block">
        ← DRAG OR ARROW KEYS →
      </div>
    </div>
  );
}

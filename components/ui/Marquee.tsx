'use client';

import React from 'react';

interface MarqueeProps {
  text?: string;
  repeat?: number;
  speed?: number; // seconds
  className?: string;
}

export function Marquee({
  text = '120+ RESIDENCES · 14 COUNTRIES · 38 AWARDS · 0 COMPROMISES · HOMES DRAWN WITH INTENT',
  repeat = 6,
  className = '',
}: MarqueeProps) {
  return (
    <div className={`w-full overflow-hidden whitespace-nowrap py-4 select-none ${className}`}>
      <div className="inline-flex animate-marquee">
        {Array.from({ length: repeat }).map((_, i) => (
          <span
            key={i}
            className="font-mono text-xs sm:text-[13px] tracking-[0.2em] uppercase text-current px-6 flex items-center"
          >
            <span>{text}</span>
            <span className="mx-6 w-2 h-2 rounded-full bg-[var(--accent)] inline-block opacity-75" />
          </span>
        ))}
      </div>
      <div className="inline-flex animate-marquee" aria-hidden="true">
        {Array.from({ length: repeat }).map((_, i) => (
          <span
            key={`dup-${i}`}
            className="font-mono text-xs sm:text-[13px] tracking-[0.2em] uppercase text-current px-6 flex items-center"
          >
            <span>{text}</span>
            <span className="mx-6 w-2 h-2 rounded-full bg-[var(--accent)] inline-block opacity-75" />
          </span>
        ))}
      </div>
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        .animate-marquee {
          animation: marquee 35s linear infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-marquee {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
}

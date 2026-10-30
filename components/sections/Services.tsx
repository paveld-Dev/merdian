'use client';

import React from 'react';
import Link from 'next/link';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { LineIcon, IconName } from '@/components/ui/LineIcon';
import { SERVICES } from '@/lib/data';

export function Services() {
  const serviceIcons: IconName[] = [
    'blueprint',
    'compass',
    'leaf',
    'levels',
    'stone',
    'crosshair',
  ];

  return (
    <section
      id="services"
      className="relative w-full bg-[#121212] text-[#F2F3F1] py-24 lg:py-44 hairline-t-dark"
    >
      <div className="max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-20">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-16 hairline-b-dark">
          <div>
            <Eyebrow tone="brass" category="COURSE" index="08" className="mb-4">
              ARCHITECTURAL PRACTICE
            </Eyebrow>
            <h2 className="heading-h2 text-white">
              Disciplines of <em className="italic font-normal text-[var(--pearl)]">pure</em> intent.
            </h2>
          </div>
          <p className="body-base text-white/60 max-w-md">
            Complete architectural authorship from initial territorial zoning to final furniture commission.
          </p>
        </div>

        {/* 2x3 Grid with hairline dividers, no cards, row hover bg white/4% + arrow slides */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 divide-y md:divide-y-0 hairline-b-dark">
          {SERVICES.map((srv, index) => {
            const icon = serviceIcons[index] || 'blueprint';
            const isRightBorder = (index + 1) % 3 !== 0;
            const isBottomBorder = index < 3;

            return (
              <Link
                key={srv.id}
                href="#cta"
                className={`group p-8 sm:p-12 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-white/[0.04] flex flex-col justify-between min-h-[320px] ${isRightBorder ? 'lg:hairline-r-dark' : ''
                  } ${isBottomBorder ? 'lg:hairline-b-dark' : ''} ${index % 2 === 0 ? 'md:hairline-r-dark lg:border-r-0' : ''
                  } md:hairline-b-dark`}
              >
                <div>
                  <div className="flex items-center justify-between text-white/40 mb-6">
                    <span className="font-mono text-xs uppercase tracking-wider text-[var(--accent)] font-medium">
                      {srv.number}
                    </span>
                    <LineIcon
                      name={icon}
                      size={20}
                      className="text-white/60 group-hover:text-[var(--accent)] transition-colors"
                    />
                  </div>

                  <h3 className="font-serif text-2xl sm:text-3xl font-normal text-white mb-3">
                    {srv.title}
                  </h3>

                  <p className="font-sans text-sm sm:text-base text-white/80 leading-relaxed mb-6">
                    {srv.description}
                  </p>
                </div>

                <div className="pt-6 hairline-t-dark flex items-center justify-between text-white/40 group-hover:text-white transition-colors">
                  <span className="font-mono text-xs uppercase tracking-wider text-white/60">
                    {srv.scope}
                  </span>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    className="transform transition-transform duration-300 group-hover:translate-x-1.5 text-[var(--accent)]"
                  >
                    <path
                      d="M3 8H13M13 8L8.5 3.5M13 8L8.5 12.5"
                      stroke="currentColor"
                      strokeWidth="1.25"
                    />
                  </svg>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

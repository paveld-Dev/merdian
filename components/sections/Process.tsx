'use client';

import React from 'react';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { LineIcon, IconName } from '@/components/ui/LineIcon';
import { PROCESS_STEPS } from '@/lib/data';

export function Process() {
  const stepIcons: IconName[] = ['compass', 'blueprint', 'caliper', 'clock'];

  return (
    <section
      id="process"
      className="relative w-full bg-[#121212] text-[#F3F0EA] py-28 sm:py-36 lg:py-48 hairline-t-dark overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-20">
        {/* Header */}
        <div className="max-w-2xl mb-20 sm:mb-28">
          <Eyebrow tone="brass" index="06" className="mb-4">
            BLUEPRINT PROTOCOL
          </Eyebrow>
          <h2 className="heading-h2 text-white">
            From first light to <em className="italic font-normal text-[var(--glow)]">eternal</em> stone.
          </h2>
          <p className="body-base text-white/70 mt-4">
            Four rigorous phases ensuring our residential architecture endures across generations without concession.
          </p>
        </div>

        {/* 4 Steps Row with Connecting Brass Line (Desktop) / Vertical Timeline (Mobile) */}
        <div className="relative">
          {/* Horizontal Connecting Brass Line on Desktop */}
          <div className="hidden lg:block absolute top-[28px] left-[5%] right-[5%] h-[1px] bg-white/20 z-0">
            <div className="h-full bg-[var(--accent)] w-full opacity-80" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 relative z-10">
            {PROCESS_STEPS.map((step, index) => {
              const icon = stepIcons[index] || 'blueprint';

              return (
                <div
                  key={step.step}
                  className="flex flex-col group relative"
                >
                  {/* Step Marker & Icon */}
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-14 h-14 rounded-full bg-[#1A1A1A] border border-[var(--accent)] flex items-center justify-center text-[var(--accent)] shadow-lg transition-transform duration-300 group-hover:scale-110">
                      <LineIcon name={icon} size={22} strokeWidth={1.5} />
                    </div>
                    <div className="lg:hidden h-[1px] flex-1 bg-white/20" />
                  </div>

                  {/* Step Number & Duration in Mono */}
                  <div className="flex items-center justify-between font-mono text-[18px] uppercase tracking-[0.14em] text-[var(--accent)] mb-2">
                    <span>PHASE {step.step}</span>
                    <span className="text-white/60">{step.duration}</span>
                  </div>

                  {/* Heading */}
                  <h3 className="font-serif text-2xl text-white font-normal mb-3">
                    {step.title}
                  </h3>

                  {/* 2-line Description */}
                  <p className="font-sans text-[18px] text-white/80 leading-relaxed mb-4">
                    {step.description}
                  </p>

                  {/* Details */}
                  <div className="pt-4 hairline-t-dark font-mono text-[18px] uppercase tracking-wider text-white/50 leading-relaxed">
                    {step.details}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

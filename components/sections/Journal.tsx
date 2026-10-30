'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { JOURNAL_ARTICLES } from '@/lib/data';

export function Journal() {
  const [featured, second, third] = JOURNAL_ARTICLES;

  return (
    <section
      id="journal"
      className="relative w-full bg-[#121212] text-[#F2F3F1] py-28 sm:py-36 lg:py-48 hairline-t-dark"
    >
      <div className="max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-20">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-16 hairline-b-dark">
          <div>
            <Eyebrow tone="brass" index="10" className="mb-4">
              EDITORIAL DISPATCH
            </Eyebrow>
            <h2 className="heading-h2 text-white">
              The Architecture <em className="italic font-normal text-[var(--glow)]">Journal</em>.
            </h2>
          </div>
          <Link
            href="#journal"
            className="editorial-link font-mono text-[18px] uppercase tracking-[0.14em] text-[var(--accent)] hover:text-white"
          >
            All Stories →
          </Link>
        </div>

        {/* Editorial Layout: 1 Large Feature (4:5) + 2 Stacked Smaller Articles */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-12 items-start">
          {/* Large Feature (7 Cols, 4:5 aspect) */}
          <div className="lg:col-span-7 group cursor-pointer">
            <div className="relative aspect-[4/5] w-full overflow-hidden bg-black/60 border border-white/10 mb-6">
              <div className="crop-corner-tl" />
              <div className="crop-corner-tr" />
              <div className="crop-corner-bl" />
              <div className="crop-corner-br" />

              <Image
                src={featured.image}
                alt={featured.title}
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-108"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            </div>

            <div className="flex items-center justify-between font-mono text-[18px] tracking-[0.14em] text-[var(--accent)] uppercase mb-2">
              <span>{featured.category}</span>
              <span className="text-white/50">{featured.readTime}</span>
            </div>

            <h3 className="font-serif text-2xl sm:text-4xl text-white font-normal mb-3 group-hover:text-[var(--glow)] transition-colors leading-tight">
              {featured.title}
            </h3>

            <p className="font-sans text-[18px] text-white/80 leading-relaxed mb-4 max-w-xl">
              {featured.excerpt}
            </p>

            <span className="editorial-link font-mono text-[18px] uppercase tracking-wider text-white">
              Read Monograph →
            </span>
          </div>

          {/* 2 Stacked Articles (5 Cols) */}
          <div className="lg:col-span-5 space-y-12">
            {[second, third].map((article) => (
              <div
                key={article.id}
                className="group cursor-pointer hairline-b-dark pb-10 last:border-b-0"
              >
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-black/60 border border-white/10 mb-4">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-108"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>

                <div className="flex items-center justify-between font-mono text-[18px] tracking-[0.14em] text-[var(--accent)] uppercase mb-2">
                  <span>{article.category}</span>
                  <span className="text-white/50">{article.readTime}</span>
                </div>

                <h3 className="font-serif text-xl sm:text-2xl text-white font-normal mb-2 group-hover:text-[var(--glow)] transition-colors leading-snug">
                  {article.title}
                </h3>

                <p className="font-sans text-[18px] text-white/80 leading-relaxed mb-3">
                  {article.excerpt}
                </p>

                <span className="editorial-link font-mono text-[18px] uppercase tracking-wider text-white">
                  Read Article →
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

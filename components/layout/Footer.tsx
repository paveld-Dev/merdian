'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { LineIcon } from '@/components/ui/LineIcon';

export function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="relative bg-[#0B0D10] text-[#F2F3F1] pt-28 pb-12 overflow-hidden hairline-t-dark">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-20 relative z-10">
        {/* Top Row: Back to Top & Category Tag */}
        <div className="flex items-center justify-between pb-16 hairline-b-dark">
          <div className="flex items-center gap-3 font-mono text-[18px] uppercase tracking-[0.14em] text-[var(--accent)]">
            <span>13 — MERIDIAN ATELIER</span>
            <span className="w-8 h-[1px] bg-[var(--accent)]/40" />
            <span className="text-white/40">GENEVA · MILAN · TOKYO</span>
          </div>
          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="group w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:border-[var(--accent)] hover:bg-white/5 transition-all duration-300 cursor-pointer"
          >
            <LineIcon
              name="arrow-up"
              size={18}
              className="text-white/70 group-hover:text-[var(--accent)] transition-colors"
            />
          </button>
        </div>

        {/* 4 Main Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 py-16 hairline-b-dark">
          {/* Column 1: Studio */}
          <div>
            <div className="font-mono text-[18px] uppercase tracking-[0.14em] text-[var(--accent)] mb-6 font-medium">
              THE ATELIER
            </div>
            <ul className="space-y-3 font-mono text-[18px] text-white/70">
              <li>
                <Link href="#studio" className="editorial-link hover:text-white">
                  Philosophy & Intent
                </Link>
              </li>
              <li>
                <Link href="#process" className="editorial-link hover:text-white">
                  The Blueprint Process
                </Link>
              </li>
              <li>
                <Link href="#materials" className="editorial-link hover:text-white">
                  Material Provenance
                </Link>
              </li>
              <li>
                <Link href="#services" className="editorial-link hover:text-white">
                  Private Commissions
                </Link>
              </li>
              <li>
                <Link href="#locations" className="editorial-link hover:text-white">
                  Global Monoliths
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Residences */}
          <div>
            <div className="font-mono text-[18px] uppercase tracking-[0.14em] text-[var(--accent)] mb-6 font-medium">
              COLLECTION
            </div>
            <ul className="space-y-3 font-mono text-[18px] text-white/70">
              <li>
                <Link href="#residences" className="editorial-link hover:text-white">
                  Azure Cliff (Amalfi)
                </Link>
              </li>
              <li>
                <Link href="#residences" className="editorial-link hover:text-white">
                  Dune House (Utah)
                </Link>
              </li>
              <li>
                <Link href="#residences" className="editorial-link hover:text-white">
                  Cedar Pavilion (Kyoto)
                </Link>
              </li>
              <li>
                <Link href="#residences" className="editorial-link hover:text-white">
                  Tidal Line (Big Sur)
                </Link>
              </li>
              <li>
                <Link href="#residences" className="editorial-link hover:text-white">
                  Basalt Retreat (Iceland)
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Inquiries */}
          <div>
            <div className="font-mono text-[18px] uppercase tracking-[0.14em] text-[var(--accent)] mb-6 font-medium">
              DIRECT INQUIRIES
            </div>
            <div className="font-mono text-[18px] text-white/70 space-y-4">
              <p>
                Confidential Desk:
                <br />
                <a
                  href="mailto:atelier@meridian-architecture.com"
                  className="editorial-link text-[#F2F3F1] mt-1"
                >
                  atelier@meridian-architecture.com
                </a>
              </p>
              <p>
                Direct Line:
                <br />
                <span className="text-white/90">+41 22 819 92 00</span>
              </p>
              <div className="pt-2 flex flex-wrap gap-4 text-[18px] uppercase tracking-wider text-[var(--accent)]">
                <a href="#instagram" className="hover:text-white transition-colors">
                  Instagram
                </a>
                <a href="#linkedin" className="hover:text-white transition-colors">
                  LinkedIn
                </a>
                <a href="#archive" className="hover:text-white transition-colors">
                  AIA Archive
                </a>
              </div>
            </div>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <div className="font-mono text-[18px] uppercase tracking-[0.14em] text-[var(--accent)] mb-6 font-medium">
              QUARTERLY MONOGRAPH
            </div>
            <p className="font-serif text-[18px] leading-relaxed text-white/80 mb-6">
              A private print & digital dispatch on spatial physics, rare stones, and completed estates.
            </p>
            {subscribed ? (
              <div className="p-3 bg-white/5 border border-[var(--accent)]/40 font-mono text-[18px] text-[var(--accent)] tracking-wider uppercase">
                ✓ Inscribed into the monograph register.
              </div>
            ) : (
              <form onSubmit={handleNewsletter} className="relative">
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-transparent border-b border-white/20 pb-3 font-mono text-[18px] text-white placeholder-white/40 focus:border-[var(--accent)] outline-none transition-colors"
                />
                <button
                  type="submit"
                  aria-label="Subscribe"
                  className="absolute right-0 bottom-3 font-mono text-[18px] uppercase tracking-wider text-[var(--accent)] hover:text-white transition-colors"
                >
                  Inscribe →
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Legal Row */}
        <div className="pt-10 pb-20 flex flex-col sm:flex-row items-center justify-between font-mono text-[18px] tracking-[0.12em] text-white/50 gap-4">
          <div>© 2026 MERIDIAN ARCHITECTURE GROUP SA. ALL RIGHTS RESERVED.</div>
          <div className="flex gap-6">
            <Link href="#privacy" className="hover:text-white/80 transition-colors">
              CONFIDENTIALITY & PRIVACY
            </Link>
            <Link href="#terms" className="hover:text-white/80 transition-colors">
              TERMS OF COMMISSION
            </Link>
            <Link href="#sitemap" className="hover:text-white/80 transition-colors">
              ARCHIVE SITEMAP
            </Link>
          </div>
        </div>
      </div>

      {/* Huge MERIDIAN wordmark spanning full width at 8% opacity, cropped by bottom edge */}
      <div className="absolute -bottom-8 left-0 right-0 pointer-events-none select-none overflow-hidden">
        <div className="font-serif text-[17vw] leading-none uppercase text-white/[0.06] tracking-[0.08em] text-center whitespace-nowrap">
          MERIDIAN
        </div>
      </div>
    </footer>
  );
}

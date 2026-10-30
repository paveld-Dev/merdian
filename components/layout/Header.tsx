'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { LineIcon } from '@/components/ui/LineIcon';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [timeStr, setTimeStr] = useState('18:42');

  // Live time updater
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      setTimeStr(`${hours}:${minutes}`);
    };
    updateTime();
    const interval = setInterval(updateTime, 1000 * 60);
    return () => clearInterval(interval);
  }, []);

  // Scroll visibility and blur threshold
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 80) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Hide on scroll down, show on scroll up
      if (currentScrollY > 150) {
        if (currentScrollY > lastScrollY + 5) {
          // Scrolling down
          setVisible(false);
        } else if (currentScrollY < lastScrollY - 5) {
          // Scrolling up
          setVisible(true);
        }
      } else {
        setVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'Residences', href: '#residences' },
    { label: 'Architecture', href: '#featured' },
    { label: 'Studio', href: '#studio' },
    { label: 'Materials', href: '#materials' },
    { label: 'Journal', href: '#journal' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${visible ? 'translate-y-0' : '-translate-y-full'
          } ${scrolled
            ? 'glass-header py-4'
            : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-6'
          }`}
      >
        <div className="max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-20 flex items-center justify-between">
          {/* Left: Brand Wordmark */}
          <Link
            href="/"
            className="flex items-baseline gap-2.5 text-white group outline-none whitespace-nowrap flex-shrink-0 mr-8 lg:mr-14"
          >
            <span className="font-serif text-2xl sm:text-[28px] tracking-[0.2em] font-normal uppercase transition-colors group-hover:text-[var(--accent)]">
              MERIDIAN
            </span>
            <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/50 hidden md:inline whitespace-nowrap">
              EST. 2009
            </span>
          </Link>

          {/* Center: Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 flex-shrink-0" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="editorial-link font-mono text-xs uppercase tracking-[0.16em] text-white/80 hover:text-white transition-colors whitespace-nowrap"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right: Coordinates, Time, Search & CTA */}
          <div className="flex items-center gap-3 sm:gap-5 flex-shrink-0">
            {/* Live Coordinates & Time */}
            <div className="hidden 2xl:flex items-center font-mono text-xs tracking-[0.14em] text-white/60 select-none whitespace-nowrap">
              <span className="text-[var(--accent)] mr-1.5 animate-pulse">●</span>
              <span>40°38&apos;N 14°36&apos;E — {timeStr}</span>
            </div>

            {/* Search Trigger */}
            <button
              type="button"
              onClick={() => setSearchOpen(true)}
              aria-label="Search meridian archive"
              className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-white/80 hover:text-white hover:border-white/50 hover:bg-white/10 transition-colors"
            >
              <LineIcon name="search" size={16} />
            </button>

            {/* Desktop Private Viewing Button */}
            <div className="hidden sm:block">
              <Button
                variant="ghost"
                tone="dark"
                href="#cta"
                className="!h-11 !px-6"
              >
                Private Viewing
              </Button>
            </div>

            {/* Mobile Hamburger Toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={mobileMenuOpen}
              className="lg:hidden w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white"
            >
              <LineIcon name={mobileMenuOpen ? 'close' : 'menu'} size={18} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Fullscreen Overlay Menu */}
      <div
        className={`fixed inset-0 z-40 bg-[#0B0D10]/98 backdrop-blur-2xl flex flex-col justify-between p-8 sm:p-12 lg:hidden transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${mobileMenuOpen
          ? 'opacity-100 pointer-events-auto translate-y-0'
          : 'opacity-0 pointer-events-none -translate-y-8'
          }`}
      >
        <div className="pt-20">
          <div className="font-mono text-xs uppercase tracking-[0.16em] text-[var(--accent)] mb-8">
            00 — INDEX
          </div>
          <nav className="flex flex-col gap-6">
            {navLinks.map((link, i) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-serif text-3xl sm:text-4xl text-white/90 hover:text-[var(--accent)] transition-colors flex items-baseline justify-between"
                style={{
                  transitionDelay: `${i * 60}ms`,
                }}
              >
                <span>{link.label}</span>
                <span className="font-mono text-xs text-white/40">0{i + 1}</span>
              </Link>
            ))}
          </nav>
        </div>

        <div className="pt-8 hairline-t-dark flex flex-col gap-6">
          <div className="font-mono text-xs tracking-wider text-white/60">
            40°38&apos;N 14°36&apos;E — {timeStr}
          </div>
          <Button
            variant="primary"
            tone="dark"
            href="#cta"
            onClick={() => setMobileMenuOpen(false)}
            className="w-full justify-center"
          >
            Request Private Viewing
          </Button>
        </div>
      </div>

      {/* Search Modal */}
      {searchOpen && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-start justify-center pt-24 px-4">
          <div className="w-full max-w-xl bg-[#121212] border border-white/15 p-6 relative">
            <button
              onClick={() => setSearchOpen(false)}
              className="absolute top-4 right-4 text-white/60 hover:text-white"
              aria-label="Close search"
            >
              <LineIcon name="close" size={20} />
            </button>
            <div className="font-mono text-xs uppercase tracking-[0.16em] text-[var(--accent)] mb-3">
              ARCHIVE DISCOVERY
            </div>
            <input
              type="text"
              placeholder="Search residences, locations, materials..."
              autoFocus
              className="w-full bg-transparent border-b border-white/20 pb-3 font-serif text-xl sm:text-2xl text-white placeholder-white/40 outline-none focus:border-[var(--accent)] transition-colors"
            />
            <div className="mt-6 flex flex-wrap gap-2">
              {['Amalfi', 'Utah Desert', 'Travertine', 'Kyoto', 'Cantilever', 'Floor Plans'].map(
                (term) => (
                  <span
                    key={term}
                    className="font-mono text-xs px-3 py-1 bg-white/5 border border-white/10 text-white/70 hover:border-[var(--accent)] hover:text-white cursor-pointer transition-colors"
                    onClick={() => setSearchOpen(false)}
                  >
                    {term}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

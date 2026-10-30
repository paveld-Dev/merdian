'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';

interface FormData {
  name: string;
  email: string;
  interest: string;
  location: string;
}

interface FormErrors {
  name?: string;
  email?: string;
}

export function ViewingCTA() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    interest: 'Acquisition of Active Residence',
    location: 'Amalfi Coast, Italy',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [referenceCode, setReferenceCode] = useState('8492');

  const validate = (): boolean => {
    const errs: FormErrors = {};
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      errs.name = 'Please provide your full title or name.';
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      errs.email = 'A valid private email address is required.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitting(true);
    setTimeout(() => {
      setReferenceCode(String(Math.floor(1000 + Math.random() * 9000)));
      setSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <section
      id="cta"
      className="relative w-full min-h-[900px] py-24 lg:py-44 flex items-center justify-center bg-[#0B0D10] text-[#F3F0EA] overflow-hidden"
    >
      {/* Full-bleed Night Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/cta-night.jpg"
          alt="Night illuminated pavilion villa nestled in nature"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/75 backdrop-blur-[2px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D10] via-black/40 to-[#0B0D10]" />
      </div>

      {/* Main Glass Form Container */}
      <div className="relative z-10 max-w-[1440px] w-full mx-auto px-5 sm:px-10 lg:px-20 flex flex-col items-center text-center">
        <div className="font-mono text-[12px] uppercase tracking-[0.18em] text-[var(--accent)] mb-4 font-medium">
          COURSE 12 — INITIATION OF COMMISSION
        </div>

        <h2 className="display-l font-normal text-white mb-6 max-w-3xl">
          Your next chapter, <em className="italic font-normal text-[var(--pearl)]">drawn</em> for you.
        </h2>

        <p className="body-base text-white/75 font-sans max-w-xl mb-12">
          Whether inquiring regarding an active residence or commissioning a bespoke ground-up estate, our founding partners review every communication with strict discretion.
        </p>

        {/* Glass Form */}
        <div className="glass-dark p-8 sm:p-14 w-full max-w-2xl text-left relative">
          <div className="crop-corner-tl" />
          <div className="crop-corner-tr" />
          <div className="crop-corner-bl" />
          <div className="crop-corner-br" />

          {submitted ? (
            <div className="py-12 text-center space-y-4">
              <div className="w-14 h-14 rounded-full border border-[var(--accent)] bg-[var(--accent)]/10 text-[var(--accent)] flex items-center justify-center mx-auto text-xl font-mono">
                ✓
              </div>
              <h3 className="font-serif text-3xl text-white font-normal">
                Communication Received
              </h3>
              <p className="font-sans text-sm sm:text-base text-white/70 max-w-md mx-auto leading-relaxed">
                A partner from our private advisory desk will contact you within 24 hours via secure transmission.
              </p>
              <div className="pt-4 font-mono text-xs sm:text-sm text-[var(--accent)] uppercase tracking-wider font-medium">
                REFERENCE PROTOCOL #MRD-{referenceCode}
              </div>
              <div className="pt-6">
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      name: '',
                      email: '',
                      interest: 'Acquisition of Active Residence',
                      location: 'Amalfi Coast, Italy',
                    });
                  }}
                  className="font-mono text-xs uppercase tracking-wider text-white/60 hover:text-white underline underline-offset-4"
                >
                  Submit Another Inquiry
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-8">
              {/* Name Input */}
              <div className="relative">
                <label
                  htmlFor="cta-name"
                  className="block font-mono text-xs uppercase tracking-[0.16em] text-[var(--accent)] mb-2 font-medium"
                >
                  Full Name / Legal Entity *
                </label>
                <input
                  id="cta-name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => {
                    setFormData({ ...formData, name: e.target.value });
                    if (errors.name) setErrors({ ...errors, name: undefined });
                  }}
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? 'cta-name-error' : undefined}
                  placeholder="e.g. Eleanor Vance"
                  className="w-full bg-transparent border-b border-white/20 pb-2.5 font-serif text-xl sm:text-2xl text-white placeholder-white/25 focus:border-[var(--accent)] outline-none transition-colors"
                />
                {errors.name && (
                  <p
                    id="cta-name-error"
                    role="alert"
                    className="mt-1 font-mono text-xs text-amber-400 tracking-wider"
                  >
                    {errors.name}
                  </p>
                )}
              </div>

              {/* Email Input */}
              <div className="relative">
                <label
                  htmlFor="cta-email"
                  className="block font-mono text-xs uppercase tracking-[0.16em] text-[var(--accent)] mb-2 font-medium"
                >
                  Private Email Address *
                </label>
                <input
                  id="cta-email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => {
                    setFormData({ ...formData, email: e.target.value });
                    if (errors.email) setErrors({ ...errors, email: undefined });
                  }}
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? 'cta-email-error' : undefined}
                  placeholder="e.g. vance@holding-group.com"
                  className="w-full bg-transparent border-b border-white/20 pb-2.5 font-serif text-xl sm:text-2xl text-white placeholder-white/25 focus:border-[var(--accent)] outline-none transition-colors"
                />
                {errors.email && (
                  <p
                    id="cta-email-error"
                    role="alert"
                    className="mt-1 font-mono text-xs text-amber-400 tracking-wider"
                  >
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Grid 2 Inputs: Interest & Location */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div>
                  <label
                    htmlFor="cta-interest"
                    className="block font-mono text-xs uppercase tracking-[0.16em] text-[var(--accent)] mb-2 font-medium"
                  >
                    Nature of Inquiry
                  </label>
                  <select
                    id="cta-interest"
                    value={formData.interest}
                    onChange={(e) =>
                      setFormData({ ...formData, interest: e.target.value })
                    }
                    className="w-full bg-[#121212] border-b border-white/20 pb-2.5 font-sans text-sm sm:text-base text-white focus:border-[var(--accent)] outline-none cursor-pointer"
                  >
                    <option value="Acquisition of Active Residence">
                      Acquisition of Active Residence
                    </option>
                    <option value="Bespoke Ground-Up Commission">
                      Bespoke Ground-Up Commission
                    </option>
                    <option value="Land Scouting & Topographical Advisory">
                      Land Scouting & Topographical Advisory
                    </option>
                    <option value="Historic Landmark Restoration">
                      Historic Landmark Restoration
                    </option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="cta-location"
                    className="block font-mono text-xs uppercase tracking-[0.16em] text-[var(--accent)] mb-2 font-medium"
                  >
                    Preferred Location / Terrain
                  </label>
                  <select
                    id="cta-location"
                    value={formData.location}
                    onChange={(e) =>
                      setFormData({ ...formData, location: e.target.value })
                    }
                    className="w-full bg-[#121212] border-b border-white/20 pb-2.5 font-sans text-sm sm:text-base text-white focus:border-[var(--accent)] outline-none cursor-pointer"
                  >
                    <option value="Amalfi Coast, Italy">Amalfi Coast, Italy</option>
                    <option value="Southern Utah, USA">Southern Utah, USA</option>
                    <option value="Kyoto Highlands, Japan">Kyoto Highlands, Japan</option>
                    <option value="Big Sur, California">Big Sur, California</option>
                    <option value="Reykjavik Bluff, Iceland">Reykjavik Bluff, Iceland</option>
                    <option value="Swiss Alps / Engadin">Swiss Alps / Engadin</option>
                    <option value="Undisclosed Private Parcel">Undisclosed Private Parcel</option>
                  </select>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <Button
                  type="submit"
                  variant="primary"
                  tone="dark"
                  disabled={submitting}
                  className="w-full justify-between"
                >
                  {submitting ? 'Transmitting Inscription...' : 'Request Private Viewing'}
                </Button>
              </div>

              {/* Confidentiality Mono Note */}
              <div className="text-center pt-2">
                <span className="font-mono text-xs tracking-[0.16em] uppercase text-white/60">
                  RESPONSE WITHIN 24 HOURS · STRICTLY CONFIDENTIAL
                </span>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

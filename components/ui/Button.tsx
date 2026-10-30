'use client';

import React from 'react';
import Link from 'next/link';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'ghost' | 'glass';
  tone?: 'light' | 'dark';
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  icon?: React.ReactNode;
  disabled?: boolean;
}

export function Button({
  children,
  variant = 'primary',
  tone = 'dark',
  href,
  onClick,
  className = '',
  type = 'button',
  icon,
  disabled = false,
}: ButtonProps) {
  const baseClasses =
    'group relative inline-flex items-center justify-between h-[56px] px-8 rounded-none font-mono text-[12px] uppercase tracking-[0.18em] font-medium transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] select-none cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed';

  let variantClasses = '';

  if (variant === 'primary') {
    // Primary: --wine fill with --pearl text
    variantClasses =
      'bg-[var(--wine)] text-[var(--pearl)] hover:brightness-115 active:brightness-90 shadow-md';
  } else if (variant === 'ghost') {
    if (tone === 'dark') {
      // Ghost: 1px --pearl/30% border with --pearl text
      variantClasses =
        'bg-transparent text-[var(--pearl)] border border-[var(--pearl)]/30 hover:border-[var(--pearl)] hover:bg-[var(--pearl)]/10 active:bg-[var(--pearl)]/15';
    } else {
      variantClasses =
        'bg-transparent text-[#121212] border border-[#121212]/30 hover:border-[#121212] hover:bg-[#121212]/5 active:bg-[#121212]/10';
    }
  } else if (variant === 'glass') {
    variantClasses =
      'bg-white/10 backdrop-blur-md text-[var(--pearl)] border border-[var(--pearl)]/30 hover:border-[var(--pearl)] hover:bg-white/20 active:bg-white/25';
  }

  const defaultArrow = (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="ml-3 transform transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1"
    >
      <path
        d="M2.5 7H11.5M11.5 7L7.5 3M11.5 7L7.5 11"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="square"
      />
    </svg>
  );

  const content = (
    <>
      <span className="relative z-10">{children}</span>
      <span className="relative z-10 flex items-center">
        {icon || defaultArrow}
      </span>
    </>
  );

  if (href) {
    return (
      <Link href={href} className={`${baseClasses} ${variantClasses} ${className}`}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variantClasses} ${className}`}
    >
      {content}
    </button>
  );
}

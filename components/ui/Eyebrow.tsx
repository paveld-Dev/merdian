import React from 'react';

interface EyebrowProps {
  children: React.ReactNode;
  tone?: 'light' | 'dark' | 'brass' | 'pearl';
  className?: string;
  index?: string;
  category?: string;
}

export function Eyebrow({
  children,
  tone = 'dark',
  className = '',
  index,
  category,
}: EyebrowProps) {
  let colorClass = 'text-white/70';
  if (tone === 'light') colorClass = 'text-[#121212]/70';
  if (tone === 'brass') colorClass = 'text-[var(--accent)]';
  if (tone === 'pearl') colorClass = 'text-[var(--pearl)]';

  const prefix = index
    ? category
      ? `${category} ${index}`
      : index.includes('—')
      ? index
      : `ATELIER ${index}`
    : category || '';

  return (
    <div
      className={`eyebrow inline-flex items-center gap-2 font-mono text-[12px] uppercase tracking-[0.18em] font-medium ${colorClass} ${className}`}
    >
      {prefix && (
        <span className="text-[var(--accent)] font-semibold tracking-wider">
          {prefix} —{' '}
        </span>
      )}
      <span>{children}</span>
    </div>
  );
}

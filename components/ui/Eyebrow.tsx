import React from 'react';

interface EyebrowProps {
  children: React.ReactNode;
  tone?: 'light' | 'dark' | 'brass';
  className?: string;
  index?: string;
}

export function Eyebrow({
  children,
  tone = 'dark',
  className = '',
  index,
}: EyebrowProps) {
  let colorClass = 'text-white/70';
  if (tone === 'light') colorClass = 'text-[#121212]/70';
  if (tone === 'brass') colorClass = 'text-[var(--accent)]';

  return (
    <div className={`eyebrow flex items-center gap-2.5 text-[11px] uppercase tracking-[0.18em] ${colorClass} ${className}`}>
      {index && (
        <>
          <span className="text-[var(--accent)] font-semibold tracking-wider">{index}</span>
          <span className="w-4 h-[1px] bg-current opacity-40 inline-block" />
        </>
      )}
      <span>{children}</span>
    </div>
  );
}

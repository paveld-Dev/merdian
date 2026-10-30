import React from 'react';

export interface SpecRow {
  label: string;
  value: string;
}

interface SpecTableProps {
  rows: SpecRow[];
  tone?: 'light' | 'dark';
  className?: string;
}

export function SpecTable({
  rows,
  tone = 'dark',
  className = '',
}: SpecTableProps) {
  const isDark = tone === 'dark';

  return (
    <div className={`w-full font-mono text-xs sm:text-[13px] ${className}`}>
      {rows.map((row, index) => (
        <div
          key={index}
          className={`flex items-baseline justify-between py-3.5 ${
            isDark ? 'hairline-b-dark text-white/80' : 'hairline-b-light text-[#121212]/80'
          }`}
        >
          <span className={`uppercase tracking-[0.14em] ${isDark ? 'text-white/50' : 'text-[#121212]/60'}`}>
            {row.label}
          </span>
          <span className={`font-medium tracking-[0.06em] text-right ${isDark ? 'text-[#F2F3F1]' : 'text-[#121212]'}`}>
            {row.value}
          </span>
        </div>
      ))}
    </div>
  );
}

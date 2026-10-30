'use client';

import React, { useEffect, useRef, useState } from 'react';

interface RevealTextProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  tag?: 'h1' | 'h2' | 'h3' | 'p' | 'div';
}

export function RevealText({
  children,
  className = '',
  delay = 0,
  tag = 'div',
}: RevealTextProps) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.15 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const Tag = tag;

  return (
    <div ref={elementRef} className="overflow-hidden">
      <Tag
        className={`transform transition-all duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
          isVisible
            ? 'translate-y-0 opacity-100'
            : 'translate-y-full opacity-0'
        } ${className}`}
        style={{
          transitionDelay: `${delay}ms`,
        }}
      >
        {children}
      </Tag>
    </div>
  );
}

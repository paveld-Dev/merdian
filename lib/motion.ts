export const EASING = {
  meridian: 'cubic-bezier(0.22, 1, 0.36, 1)',
  expoOut: 'cubic-bezier(0.16, 1, 0.3, 1)',
  smooth: 'cubic-bezier(0.25, 0.1, 0.25, 1)',
};

export const DURATIONS = {
  micro: 0.2, // 200ms
  ui: 0.4,    // 400ms
  reveal: 0.9,// 900ms
  hero: 2.4,  // 2400ms
};

export function isReducedMotion(): boolean {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

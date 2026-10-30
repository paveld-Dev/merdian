import React from 'react';

export type IconName =
  | 'compass'
  | 'blueprint'
  | 'solar'
  | 'levels'
  | 'caliper'
  | 'stone'
  | 'water'
  | 'leaf'
  | 'clock'
  | 'arrow'
  | 'arrow-right'
  | 'arrow-left'
  | 'arrow-up'
  | 'close'
  | 'menu'
  | 'search'
  | 'pin'
  | 'play'
  | 'crosshair'
  | 'sun'
  | 'moon';

interface LineIconProps {
  name: IconName;
  className?: string;
  size?: number;
  strokeWidth?: number;
}

export function LineIcon({
  name,
  className = '',
  size = 20,
  strokeWidth = 1.25,
}: LineIconProps) {
  const common = {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: strokeWidth,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    className: className,
  };

  switch (name) {
    case 'compass':
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="10" />
          <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
        </svg>
      );
    case 'blueprint':
      return (
        <svg {...common}>
          <rect x="3" y="3" width="18" height="18" />
          <line x1="3" y1="9" x2="21" y2="9" />
          <line x1="9" y1="21" x2="9" y2="9" />
          <line x1="15" y1="9" x2="15" y2="21" />
        </svg>
      );
    case 'solar':
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
        </svg>
      );
    case 'levels':
      return (
        <svg {...common}>
          <path d="M2 12s3-4 6-4 6 4 10 4 4-2 4-2" />
          <path d="M2 18s3-4 6-4 6 4 10 4 4-2 4-2" />
          <path d="M2 6s3-4 6-4 6 4 10 4 4-2 4-2" />
        </svg>
      );
    case 'caliper':
      return (
        <svg {...common}>
          <path d="M6 3v18" />
          <path d="M18 3v18" />
          <path d="M6 8h12" />
          <path d="M6 16h12" />
          <path d="M3 8h3" />
          <path d="M18 8h3" />
        </svg>
      );
    case 'stone':
      return (
        <svg {...common}>
          <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" />
          <line x1="12" y1="22" x2="12" y2="12" />
          <line x1="2" y1="8.5" x2="12" y2="12" />
          <line x1="22" y1="8.5" x2="12" y2="12" />
        </svg>
      );
    case 'water':
      return (
        <svg {...common}>
          <path d="M2 6c3 0 3 2 6 2s3-2 6-2 3 2 6 2" />
          <path d="M2 12c3 0 3 2 6 2s3-2 6-2 3 2 6 2" />
          <path d="M2 18c3 0 3 2 6 2s3-2 6-2 3 2 6 2" />
        </svg>
      );
    case 'leaf':
      return (
        <svg {...common}>
          <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
          <path d="M2 21c0-3 1.85-5.36 5.08-6" />
        </svg>
      );
    case 'clock':
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      );
    case 'arrow':
    case 'arrow-right':
      return (
        <svg {...common}>
          <line x1="5" y1="12" x2="19" y2="12" />
          <polyline points="12 5 19 12 12 19" />
        </svg>
      );
    case 'arrow-left':
      return (
        <svg {...common}>
          <line x1="19" y1="12" x2="5" y2="12" />
          <polyline points="12 19 5 12 12 5" />
        </svg>
      );
    case 'arrow-up':
      return (
        <svg {...common}>
          <line x1="12" y1="19" x2="12" y2="5" />
          <polyline points="5 12 12 5 19 12" />
        </svg>
      );
    case 'close':
      return (
        <svg {...common}>
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      );
    case 'menu':
      return (
        <svg {...common}>
          <line x1="3" y1="7" x2="21" y2="7" />
          <line x1="3" y1="17" x2="21" y2="17" />
        </svg>
      );
    case 'search':
      return (
        <svg {...common}>
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
      );
    case 'pin':
      return (
        <svg {...common}>
          <circle cx="12" cy="10" r="3" />
          <path d="M12 21s-7-6.5-7-11a7 7 0 1 1 14 0c0 4.5-7 11-7 11z" />
        </svg>
      );
    case 'play':
      return (
        <svg {...common}>
          <polygon points="7 4 19 12 7 20 7 4" />
        </svg>
      );
    case 'crosshair':
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <line x1="12" y1="2" x2="12" y2="6" />
          <line x1="12" y1="18" x2="12" y2="22" />
          <line x1="2" y1="12" x2="6" y2="12" />
          <line x1="18" y1="12" x2="22" y2="12" />
        </svg>
      );
    case 'sun':
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="5" />
          <line x1="12" y1="1" x2="12" y2="3" />
          <line x1="12" y1="21" x2="12" y2="23" />
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
          <line x1="1" y1="12" x2="3" y2="12" />
          <line x1="21" y1="12" x2="23" y2="12" />
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
        </svg>
      );
    case 'moon':
      return (
        <svg {...common}>
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      );
    default:
      return null;
  }
}

/**
 * ConnectNear brand logo — exact React copy of the favicon SVG.
 * If you update this, update the favicon route too: src/app/favicon.ico/route.ts
 */

interface ConnectNearLogoProps {
  size?: number;
  className?: string;
}

export function ConnectNearLogo({ size = 40, className = "" }: ConnectNearLogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="ConnectNear logo"
    >
      <rect width="48" height="48" rx="14" fill="url(#cn-bg)" />
      <rect x="8" y="14" width="20" height="20" rx="10" stroke="url(#cn-g1)" strokeWidth="3" fill="none" />
      <rect x="20" y="14" width="20" height="20" rx="10" stroke="url(#cn-g2)" strokeWidth="3" fill="none" />
      <circle cx="24" cy="24" r="3.5" fill="url(#cn-dot)" />
      <defs>
        <linearGradient id="cn-bg" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
          <stop stopColor="#0f1a2e" />
          <stop offset="1" stopColor="#1a0f2e" />
        </linearGradient>
        <linearGradient id="cn-g1" x1="8" y1="14" x2="28" y2="34" gradientUnits="userSpaceOnUse">
          <stop stopColor="#34D399" />
          <stop offset="1" stopColor="#06B6D4" />
        </linearGradient>
        <linearGradient id="cn-g2" x1="20" y1="14" x2="40" y2="34" gradientUnits="userSpaceOnUse">
          <stop stopColor="#06B6D4" />
          <stop offset="1" stopColor="#8B5CF6" />
        </linearGradient>
        <radialGradient id="cn-dot" cx="0.5" cy="0.5" r="0.5">
          <stop stopColor="#fff" />
          <stop offset="1" stopColor="#A5F3FC" />
        </radialGradient>
      </defs>
    </svg>
  );
}

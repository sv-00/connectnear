import { NextResponse } from "next/server";

/**
 * Dynamic SVG favicon for ConnectNear
 * Matches the ConnectNearLogo component
 */
export async function GET() {
  const svg = `<svg width="32" height="32" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="48" height="48" rx="14" fill="#111"/>
    <rect x="8" y="14" width="20" height="20" rx="10" stroke="url(#cn-g1)" stroke-width="3" fill="none"/>
    <rect x="20" y="14" width="20" height="20" rx="10" stroke="url(#cn-g2)" stroke-width="3" fill="none"/>
    <circle cx="24" cy="24" r="3.5" fill="url(#cn-dot)"/>
    <defs>
      <linearGradient id="cn-g1" x1="8" y1="14" x2="28" y2="34" gradientUnits="userSpaceOnUse">
        <stop stop-color="#34D399"/><stop offset="1" stop-color="#06B6D4"/>
      </linearGradient>
      <linearGradient id="cn-g2" x1="20" y1="14" x2="40" y2="34" gradientUnits="userSpaceOnUse">
        <stop stop-color="#06B6D4"/><stop offset="1" stop-color="#8B5CF6"/>
      </linearGradient>
      <radialGradient id="cn-dot" cx="0.5" cy="0.5" r="0.5">
        <stop stop-color="#fff"/><stop offset="1" stop-color="#A5F3FC"/>
      </radialGradient>
    </defs>
  </svg>`;

  return new NextResponse(svg, {
    headers: {
      "Content-Type": "image/svg+xml",
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
}

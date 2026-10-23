import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <svg width="180" height="180" viewBox="0 0 64 64">
        <defs>
          <linearGradient id="a" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#13294d" /><stop offset="1" stopColor="#0b1b33" /></linearGradient>
          <linearGradient id="b" x1="0" y1="1" x2="1" y2="0"><stop offset="0" stopColor="#3b82f6" /><stop offset="1" stopColor="#93c5fd" /></linearGradient>
        </defs>
        <rect width="64" height="64" fill="url(#a)" />
        <path d="M16.5 48 L30 17" stroke="#fff" strokeWidth="6.5" strokeLinecap="round" fill="none" />
        <path d="M30 17 L47.5 48" stroke="url(#b)" strokeWidth="6.5" strokeLinecap="round" fill="none" />
        <path d="M23.5 37 H39" stroke="#fff" strokeWidth="5" strokeLinecap="round" fill="none" />
        <circle cx="30" cy="17" r="3.6" fill="#93c5fd" />
      </svg>
    ),
    size,
  );
}

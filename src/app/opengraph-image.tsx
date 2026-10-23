import { ImageResponse } from "next/og";
import { business } from "@/config/business";

export const alt = `${business.name}: WordPress, Shopify and Wix developer`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", background: "#0b1b33", color: "#ffffff", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: 72 }}>
        <div style={{ display: "flex", fontSize: 36, fontWeight: 800 }}>{business.name}</div>
        <div style={{ display: "flex", flexDirection: "column", fontSize: 76, fontWeight: 800, lineHeight: 1.05, letterSpacing: -2 }}>
          <span>Websites that win customers.</span>
          <span style={{ color: "#7aa2ff" }}>WordPress · Shopify · Wix</span>
        </div>
        <div style={{ display: "flex", fontSize: 28, color: "#b6c4dd" }}>{`Based in ${business.location} · Serving clients worldwide`}</div>
      </div>
    ),
    size,
  );
}

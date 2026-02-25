"use client";

import { ReactElement } from "react";

export default function PaymentSolutionMarketplaces(): ReactElement {
  return (
    <section
      style={{
        background: "linear-gradient(160deg, #f8f9ff 0%, #fce4ec 30%, #e8eaf6 70%, #e0f7fa 100%)",
        padding: "70px 40px 0",
        fontFamily: "'Helvetica Neue', Arial, sans-serif",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Top-right teal blob */}
      <div
        style={{
          position: "absolute",
          top: "-30px",
          right: "-60px",
          width: "200px",
          height: "200px",
          borderRadius: "50%",
          background: "linear-gradient(135deg, #06b6d4, #3b82f6)",
          filter: "blur(60px)",
          opacity: 0.35,
          pointerEvents: "none",
        }}
      />

      {/* Bottom-left red/pink blob */}
      <div
        style={{
          position: "absolute",
          bottom: "40px",
          left: "-60px",
          width: "180px",
          height: "180px",
          borderRadius: "50%",
          background: "linear-gradient(135deg, #f43f5e, #ec4899)",
          filter: "blur(55px)",
          opacity: 0.3,
          pointerEvents: "none",
        }}
      />

      {/* ── TEXT BLOCK ── */}
      <div style={{ textAlign: "center", maxWidth: "640px", margin: "0 auto 40px" }}>
        <h2
          style={{
            fontSize: "clamp(26px, 3.5vw, 44px)",
            fontWeight: "700",
            color: "#1a1a1a",
            marginBottom: "18px",
            letterSpacing: "-0.4px",
            lineHeight: 1.15,
          }}
        >
          The Payment Solution for Marketplaces
        </h2>
        <p
          style={{
            fontSize: "15px",
            color: "#6b7280",
            lineHeight: 1.75,
            maxWidth: "520px",
            margin: "0 auto 32px",
          }}
        >
          Your marketplace depends on your sellers&apos; success. With Payoneer, you can
          deliver the best possible payment experience at a global scale, wherever your
          sellers are.
        </p>

        {/* CTA */}
        <button
          style={{
            background: "#111",
            color: "#fff",
            border: "none",
            borderRadius: "50px",
            padding: "16px 36px",
            fontSize: "15px",
            fontWeight: "600",
            cursor: "pointer",
            letterSpacing: "0.2px",
            transition: "background 0.2s",
          }}
          onMouseEnter={(e) =>
            ((e.target as HTMLButtonElement).style.background = "#333")
          }
          onMouseLeave={(e) =>
            ((e.target as HTMLButtonElement).style.background = "#111")
          }
        >
          Discover the product
        </button>
      </div>

      {/* ── DOT MAP + PINS ── */}
      <div
        style={{
          position: "relative",
          width: "100%",
          maxWidth: "900px",
          margin: "0 auto",
          height: "320px",
        }}
      >
        {/* Dot world map using SVG */}
        <svg
          viewBox="0 0 900 320"
          width="100%"
          height="100%"
          style={{ position: "absolute", top: 0, left: 0 }}
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <radialGradient id="mapFade" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#f43f5e" stopOpacity="0.5" />
              <stop offset="40%" stopColor="#a855f7" stopOpacity="0.3" />
              <stop offset="70%" stopColor="#3b82f6" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.1" />
            </radialGradient>
          </defs>

          {/* Generate dot grid representing a world map shape */}
          {generateDotMap().map((dot, i) => (
            <circle
              key={i}
              cx={dot.x}
              cy={dot.y}
              r={2.2}
              fill={dot.color}
              opacity={dot.opacity}
            />
          ))}
        </svg>

        {/* ── PIN 1: Avatar with rainbow ring (left) ── */}
        <div
          style={{
            position: "absolute",
            bottom: "60px",
            left: "18%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            zIndex: 10,
          }}
        >
          {/* Rainbow ring avatar */}
          <div
            style={{
              width: "64px",
              height: "64px",
              borderRadius: "50%",
              padding: "3px",
              background:
                "conic-gradient(#f43f5e, #f97316, #eab308, #22c55e, #3b82f6, #a855f7, #ec4899, #f43f5e)",
              boxShadow: "0 4px 16px rgba(0,0,0,0.15)",
            }}
          >
            <div
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "50%",
                background: "linear-gradient(135deg, #fce4ec, #e8eaf6)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
                border: "2px solid #fff",
              }}
            >
              <svg width="36" height="36" viewBox="0 0 24 24" fill="#c4b5d0">
                <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
              </svg>
            </div>
          </div>
        </div>

        {/* ── PIN 2: Avatar with payment chip (right) ── */}
        <div
          style={{
            position: "absolute",
            top: "55px",
            right: "22%",
            display: "flex",
            alignItems: "flex-start",
            gap: "8px",
            zIndex: 10,
          }}
        >
          {/* Payment bubble */}
          <div
            style={{
              background: "#fff",
              borderRadius: "50px",
              padding: "6px 12px 6px 8px",
              boxShadow: "0 4px 18px rgba(0,0,0,0.12)",
              display: "flex",
              alignItems: "center",
              gap: "6px",
              marginTop: "6px",
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round">
              <rect x="2" y="5" width="20" height="14" rx="2" />
              <line x1="2" y1="10" x2="22" y2="10" />
            </svg>
            <div>
              <div style={{ fontSize: "11px", fontWeight: "700", color: "#1a1a1a", lineHeight: 1 }}>1,200 USD</div>
              <div style={{ fontSize: "9px", color: "#9ca3af" }}>Received</div>
            </div>
          </div>

          {/* Avatar */}
          <div
            style={{
              width: "46px",
              height: "46px",
              borderRadius: "50%",
              border: "2.5px solid #fff",
              background: "linear-gradient(135deg, #e0f7fa, #e8eaf6)",
              boxShadow: "0 4px 14px rgba(0,0,0,0.12)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
            }}
          >
            <svg width="26" height="26" viewBox="0 0 24 24" fill="#90caf9">
              <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
            </svg>
          </div>
        </div>

        {/* ── eBay logo in center of map ── */}
        <div
          style={{
            position: "absolute",
            top: "48%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 10,
          }}
        >
          <span
            style={{
              fontSize: "22px",
              fontWeight: "900",
              letterSpacing: "-1px",
              lineHeight: 1,
            }}
          >
            <span style={{ color: "#e53238" }}>e</span>
            <span style={{ color: "#0064d2" }}>b</span>
            <span style={{ color: "#f5af02" }}>a</span>
            <span style={{ color: "#86b817" }}>y</span>
          </span>
        </div>
      </div>
    </section>
  );
}

// ── HELPER: Generate dot map positions ────────────────────────────
function generateDotMap(): { x: number; y: number; color: string; opacity: number }[] {
  const dots: { x: number; y: number; color: string; opacity: number }[] = [];

  // World map approximate dot regions [xStart, xEnd, yStart, yEnd, colorZone]
  const regions: [number, number, number, number, string][] = [
    // North America
    [80, 230, 60, 170, "red"],
    // South America
    [140, 230, 170, 280, "orange"],
    // Europe
    [350, 470, 50, 150, "purple"],
    // Africa
    [350, 480, 150, 270, "pink"],
    // Asia
    [470, 780, 50, 200, "blue"],
    // Australia
    [660, 780, 200, 280, "teal"],
  ];

  const colorMap: Record<string, string[]> = {
    red:    ["#f87171", "#fca5a5", "#fb923c"],
    orange: ["#fdba74", "#fb923c", "#f97316"],
    purple: ["#c4b5fd", "#a78bfa", "#8b5cf6"],
    pink:   ["#f9a8d4", "#f472b6", "#ec4899"],
    blue:   ["#93c5fd", "#60a5fa", "#3b82f6"],
    teal:   ["#5eead4", "#2dd4bf", "#14b8a6"],
  };

  const STEP = 14;

  regions.forEach(([x0, x1, y0, y1, zone]) => {
    const colors = colorMap[zone];
    for (let x = x0; x <= x1; x += STEP) {
      for (let y = y0; y <= y1; y += STEP) {
        // Jitter slightly for organic feel
        const jx = x + (Math.random() - 0.5) * 4;
        const jy = y + (Math.random() - 0.5) * 4;
        // Skip some dots randomly for sparse look
        if (Math.random() > 0.72) continue;
        const color = colors[Math.floor(Math.random() * colors.length)];
        const opacity = 0.3 + Math.random() * 0.5;
        dots.push({ x: jx, y: jy, color, opacity });
      }
    }
  });

  return dots;
}
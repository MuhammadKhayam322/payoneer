"use client";

import { ReactElement } from "react";

interface Card {
  icon: ReactElement;
  title: string;
  description: string;
}

const cards: Card[] = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#93c5fd" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
    title: "World-class compliance platform",
    description:
      "We offer the technology and expertise your marketplace needs around global payments. Our platform processes over 250,000+ applications a month, so we mastered KYC processes and understand how to offer your sellers the best experience.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#86efac" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8" />
        <path d="M12 17v4" />
        <rect x="6" y="7" width="5" height="4" rx="1" />
        <line x1="13" y1="8" x2="17" y2="8" />
        <line x1="13" y1="11" x2="16" y2="11" />
      </svg>
    ),
    title: "Unique expertise",
    description:
      "Our global compliance and risk teams know marketplaces inside out. That means we can do more than simplify global payments — Payoneer helps you grow your business across borders.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#c4b5fd" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="14" rx="2" />
        <circle cx="16" cy="16" r="5" />
        <line x1="13.5" y1="16" x2="18.5" y2="16" />
        <line x1="16" y1="13.5" x2="16" y2="18.5" />
      </svg>
    ),
    title: "Global, local",
    description:
      "All over the world, we check documents in local languages to minimize errors. As a result, you experience fewer failed payments which adds up to happier and more loyal sellers.",
  },
];

// ── Rainbow fingerprint SVG ────────────────────────────────────────
function RainbowFingerprint(): ReactElement {
  const rings = [
    { r: 88, color: "#f43f5e",  sw: 4,   dash: "18 8"  },
    { r: 76, color: "#f97316",  sw: 4,   dash: "16 7"  },
    { r: 64, color: "#eab308",  sw: 3.5, dash: "14 6"  },
    { r: 53, color: "#22c55e",  sw: 3.5, dash: "12 5"  },
    { r: 43, color: "#06b6d4",  sw: 3,   dash: "10 5"  },
    { r: 33, color: "#6366f1",  sw: 3,   dash: "9 4"   },
    { r: 24, color: "#a855f7",  sw: 2.5, dash: "8 4"   },
    { r: 16, color: "#ec4899",  sw: 2.5, dash: "6 3"   },
  ];

  return (
    <svg width="200" height="200" viewBox="0 0 200 200">
      {rings.map((ring, i) => (
        <circle
          key={i}
          cx="100"
          cy="100"
          r={ring.r}
          fill="none"
          stroke={ring.color}
          strokeWidth={ring.sw}
          strokeDasharray={ring.dash}
          strokeLinecap="round"
          style={{
            filter: `drop-shadow(0 0 6px ${ring.color}88)`,
            transformOrigin: "100px 100px",
            transform: `rotate(${i * 18}deg)`,
          }}
        />
      ))}
      {/* Center lock icon */}
      <circle cx="100" cy="100" r="12" fill="rgba(6,182,212,0.2)" stroke="#06b6d4" strokeWidth="1.5" />
      <path
        d="M96 100h8M96 103h8M97 100v-3a3 3 0 0 1 6 0v3"
        stroke="#06b6d4"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

export default function RiskFraudProtection(): ReactElement {
  return (
    <section
      style={{
        background: "radial-gradient(ellipse at 20% 50%, rgba(88,28,135,0.35) 0%, transparent 50%), radial-gradient(ellipse at 80% 50%, rgba(15,23,42,0.8) 0%, transparent 60%), linear-gradient(160deg, #050714 0%, #0a0f1e 50%, #0d1117 100%)",
        padding: "70px 60px 80px",
        fontFamily: "'Helvetica Neue', Arial, sans-serif",
        minHeight: "520px",
      }}
    >
      {/* Top: fingerprint + text */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          marginBottom: "52px",
        }}
      >
        {/* Rainbow fingerprint */}
        <div style={{ marginBottom: "28px", filter: "drop-shadow(0 0 30px rgba(168,85,247,0.3))" }}>
          <RainbowFingerprint />
        </div>

        <h2
          style={{
            fontSize: "clamp(22px, 2.8vw, 36px)",
            fontWeight: "700",
            color: "#ffffff",
            marginBottom: "16px",
            letterSpacing: "-0.3px",
          }}
        >
          Risk and fraud protection
        </h2>

        <p
          style={{
            fontSize: "14px",
            color: "rgba(255,255,255,0.5)",
            lineHeight: 1.75,
            maxWidth: "520px",
          }}
        >
          When you trust us to handle your sellers&apos; money, you deserve to know we&apos;ll
          protect it from the bad guys. We combine traditional, online, and leading
          third-party technologies to offer you the best possible protection.
        </p>
      </div>

      {/* Cards row */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "16px",
          maxWidth: "900px",
          margin: "0 auto",
        }}
      >
        {cards.map((card, i) => (
          <div
            key={i}
            style={{
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.09)",
              borderRadius: "16px",
              padding: "28px 22px",
              backdropFilter: "blur(6px)",
              transition: "border-color 0.2s, background 0.2s",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLDivElement;
              el.style.borderColor = "rgba(255,255,255,0.2)";
              el.style.background = "rgba(255,255,255,0.08)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLDivElement;
              el.style.borderColor = "rgba(255,255,255,0.09)";
              el.style.background = "rgba(255,255,255,0.05)";
            }}
          >
            {/* Icon */}
            <div
              style={{
                width: "50px",
                height: "50px",
                borderRadius: "12px",
                background: "rgba(255,255,255,0.07)",
                border: "1px solid rgba(255,255,255,0.1)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "20px",
              }}
            >
              {card.icon}
            </div>

            <h3
              style={{
                fontSize: "14px",
                fontWeight: "700",
                color: "#ffffff",
                marginBottom: "12px",
                lineHeight: 1.3,
              }}
            >
              {card.title}
            </h3>

            <p
              style={{
                fontSize: "12.5px",
                color: "rgba(255,255,255,0.45)",
                lineHeight: 1.75,
                margin: 0,
              }}
            >
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
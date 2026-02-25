"use client";

import { ReactElement } from "react";

interface Feature {
  icon: ReactElement;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#374151" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
        <polyline points="9 11 12 8 15 11" />
      </svg>
    ),
    title: "It's speedy",
    description:
      "Sending and receiving international payments can never be fast enough. That's why we are always trying to make things faster where possible.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#374151" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="4" y1="6" x2="20" y2="6" />
        <line x1="4" y1="12" x2="20" y2="12" />
        <line x1="4" y1="18" x2="20" y2="18" />
        <circle cx="9" cy="6" r="2" fill="white" />
        <circle cx="15" cy="12" r="2" fill="white" />
        <circle cx="9" cy="18" r="2" fill="white" />
      </svg>
    ),
    title: "It's simple",
    description:
      "In keeping with our mission to simplify the world of payments, we like to make every Payoneer product and service as easy to use as possible.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#374151" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
        <line x1="19.07" y1="4.93" x2="4.93" y2="19.07" />
      </svg>
    ),
    title: "It's based on trust",
    description:
      "With over 5 million customers around the world, Payoneer is the trusted go-to partner for digital commerce, everywhere.",
  },
];

// Multicolor segments for the divider line
const colorSegments = [
  "#ef4444", "#f97316", "#eab308",
  "#a855f7", "#6366f1",
  "#3b82f6", "#06b6d4",
  "#10b981", "#22c55e",
];

export default function PayoneerExperience(): ReactElement {
  return (
    <section
      style={{
        background: "#ffffff",
        padding: "70px 40px 80px",
        fontFamily: "'Helvetica Neue', Arial, sans-serif",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background decorative large circles */}
      <div
        style={{
          position: "absolute",
          top: "-80px",
          left: "-140px",
          width: "380px",
          height: "380px",
          borderRadius: "50%",
          border: "48px solid #f3f4f6",
          opacity: 0.5,
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "-80px",
          right: "-140px",
          width: "380px",
          height: "380px",
          borderRadius: "50%",
          border: "48px solid #f3f4f6",
          opacity: 0.5,
          pointerEvents: "none",
        }}
      />

      {/* Heading */}
      <h2
        style={{
          textAlign: "center",
          fontSize: "clamp(24px, 3vw, 40px)",
          fontWeight: "700",
          color: "#1a1a1a",
          marginBottom: "52px",
          letterSpacing: "-0.3px",
          position: "relative",
          zIndex: 1,
        }}
      >
        The Payoneer experience
      </h2>

      {/* Multicolor line + icon row */}
      <div
        style={{
          position: "relative",
          maxWidth: "900px",
          margin: "0 auto",
          zIndex: 1,
        }}
      >
        {/* Multicolor horizontal divider */}
        <div
          style={{
            display: "flex",
            height: "3px",
            width: "100%",
            borderRadius: "2px",
            overflow: "hidden",
          }}
        >
          {colorSegments.map((color, i) => (
            <div key={i} style={{ flex: 1, background: color }} />
          ))}
        </div>

        {/* Icons sitting on the divider — 3 evenly spaced */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            marginTop: "-22px",
            marginBottom: "24px",
          }}
        >
          {features.map((f, i) => (
            <div
              key={i}
              style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
            >
              {/* Icon circle on the line */}
              <div
                style={{
                  width: "46px",
                  height: "46px",
                  borderRadius: "50%",
                  border: "1.5px solid #d1d5db",
                  background: "#fff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  zIndex: 2,
                  position: "relative",
                }}
              >
                {f.icon}
              </div>
            </div>
          ))}
        </div>

        {/* 3-column text content */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "40px",
          }}
        >
          {features.map((f, i) => (
            <div key={i} style={{ textAlign: "center" }}>
              <h3
                style={{
                  fontSize: "15px",
                  fontWeight: "700",
                  color: "#111827",
                  marginBottom: "14px",
                }}
              >
                {f.title}
              </h3>
              <p
                style={{
                  fontSize: "14px",
                  color: "#6b7280",
                  lineHeight: 1.75,
                  margin: 0,
                }}
              >
                {f.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Button */}
      <div style={{ display: "flex", justifyContent: "center", marginTop: "52px" }}>
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
    </section>
  );
}
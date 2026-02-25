"use client";

import { ReactElement } from "react";

// ── TYPES ─────────────────────────────────────────────────────────
interface SupportOption {
  icon: ReactElement;
  title: string;
  link: string;
}

// ── DATA ──────────────────────────────────────────────────────────
const supportOptions: SupportOption[] = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4b5563" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.77a16 16 0 0 0 6 6l.94-.94a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7a2 2 0 0 1 1.72 2.02z" />
        <path d="M19 1s0 4-4 4" />
        <path d="M19 9V1" />
      </svg>
    ),
    title: "Get online support",
    link: "#",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4b5563" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2" />
        <line x1="9" y1="7" x2="15" y2="7" />
        <line x1="9" y1="11" x2="15" y2="11" />
        <line x1="9" y1="15" x2="12" y2="15" />
      </svg>
    ),
    title: "How-to videos and guides",
    link: "#",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4b5563" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "Payoneer Community",
    link: "#",
  },
];

// ── COMPONENT ─────────────────────────────────────────────────────
export default function ContactSupport(): ReactElement {
  return (
    <section
      style={{
        position: "relative",
        background: "#ffffff",
        overflow: "hidden",
        padding: "70px 40px 0",
        fontFamily: "'Helvetica Neue', Arial, sans-serif",
      }}
    >
      {/* Background decorative circles */}
      <div
        style={{
          position: "absolute",
          top: "-60px",
          left: "-120px",
          width: "380px",
          height: "380px",
          borderRadius: "50%",
          border: "40px solid #f3f4f6",
          opacity: 0.5,
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "-60px",
          right: "-120px",
          width: "380px",
          height: "380px",
          borderRadius: "50%",
          border: "40px solid #f3f4f6",
          opacity: 0.5,
          pointerEvents: "none",
        }}
      />

      {/* Heading */}
      <div
        style={{
          textAlign: "center",
          maxWidth: "620px",
          margin: "0 auto 48px",
          position: "relative",
          zIndex: 1,
        }}
      >
        <h2
          style={{
            fontSize: "clamp(24px, 3vw, 38px)",
            fontWeight: "700",
            color: "#1a1a1a",
            marginBottom: "16px",
            letterSpacing: "-0.3px",
          }}
        >
          Contact Payoneer support
        </h2>

        {/* Colored underline */}
        <div
          style={{
            width: "48px",
            height: "3px",
            background: "#ef4444",
            borderRadius: "2px",
            margin: "0 auto 20px",
          }}
        />

        <p
          style={{
            fontSize: "15px",
            color: "#6b7280",
            lineHeight: 1.7,
            maxWidth: "500px",
            margin: "0 auto",
          }}
        >
          Hopefully, you&apos;ve been able to find the answers to your questions, but
          if you haven&apos;t, please feel free to get in touch. Our customer care
          experts are available to assist you in 22+ languages.
        </p>
      </div>

      {/* Multicolor divider + icons row */}
      <div style={{ position: "relative", maxWidth: "900px", margin: "0 auto" }}>
        {/* Multicolor horizontal line */}
        <div
          style={{
            display: "flex",
            height: "3px",
            width: "100%",
            borderRadius: "2px",
            overflow: "hidden",
          }}
        >
          {[
            "#ef4444",
            "#f97316",
            "#eab308",
            "#a855f7",
            "#6366f1",
            "#3b82f6",
            "#06b6d4",
            "#10b981",
            "#22c55e",
          ].map((color, i) => (
            <div key={i} style={{ flex: 1, background: color }} />
          ))}
        </div>

        {/* Icons sitting on the line */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            position: "relative",
            marginTop: "-22px",
          }}
        >
          {supportOptions.map((opt, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
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
                  marginBottom: "18px",
                  zIndex: 2,
                  position: "relative",
                }}
              >
                {opt.icon}
              </div>

              {/* Title */}
              <p
                style={{
                  fontSize: "14px",
                  fontWeight: "700",
                  color: "#1a1a1a",
                  marginBottom: "6px",
                  textAlign: "center",
                }}
              >
                {opt.title}
              </p>

              {/* Link */}
              <a
                href={opt.link}
                style={{
                  fontSize: "13px",
                  color: "#3b82f6",
                  fontWeight: "500",
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "4px",
                  marginBottom: "40px",
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLAnchorElement).style.textDecoration = "underline")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLAnchorElement).style.textDecoration = "none")
                }
              >
                Take me there →
              </a>
            </div>
          ))}
        </div>
      </div>

   
   
    </section>
  );
}
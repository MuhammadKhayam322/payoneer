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
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#374151" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="5" width="20" height="14" rx="2" />
        <line x1="2" y1="10" x2="22" y2="10" />
        <line x1="6" y1="14" x2="10" y2="14" />
      </svg>
    ),
    title: "Mass payouts",
    description:
      "Make mass payouts to thousands of payees in multiple countries via their preferred payment methods.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#374151" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
        <line x1="19.07" y1="4.93" x2="4.93" y2="19.07" />
      </svg>
    ),
    title: "Expand into new markets",
    description:
      "Easily expand into new markets. We're already there waiting for you with the infrastructure you need.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#374151" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 4 23 10 17 10" />
        <polyline points="1 20 1 14 7 14" />
        <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
      </svg>
    ),
    title: "Reduce your costs",
    description:
      "Say goodbye to expensive bank and currency conversion fees. We keep them to a minimum for you.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#374151" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    ),
    title: "Safe and secure",
    description:
      "We'll protect you against risk and fraud and ensure your payments are always completely compliant with the latest regulations.",
  },
];

export default function TrustedPartner(): ReactElement {
  return (
    <section
      style={{
        background: "#eef4f7",
        padding: "70px 60px 80px",
        fontFamily: "'Helvetica Neue', Arial, sans-serif",
      }}
    >
      {/* Heading */}
      <h2
        style={{
          textAlign: "center",
          fontSize: "clamp(22px, 2.8vw, 36px)",
          fontWeight: "700",
          color: "#1a1a1a",
          marginBottom: "48px",
          letterSpacing: "-0.3px",
          maxWidth: "700px",
          margin: "0 auto 48px",
        }}
      >
        Your trusted partner for global mass payouts
      </h2>

      {/* Cards grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "20px",
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        {cards.map((card, i) => (
          <div
            key={i}
            style={{
              background: "#ffffff",
              borderRadius: "16px",
              padding: "28px 24px 32px",
              boxShadow: "0 2px 12px rgba(0,0,0,0.05)",
              border: "1px solid rgba(0,0,0,0.04)",
              display: "flex",
              flexDirection: "column",
              transition: "box-shadow 0.2s, transform 0.2s",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLDivElement;
              el.style.boxShadow = "0 8px 28px rgba(0,0,0,0.1)";
              el.style.transform = "translateY(-3px)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLDivElement;
              el.style.boxShadow = "0 2px 12px rgba(0,0,0,0.05)";
              el.style.transform = "translateY(0)";
            }}
          >
            {/* Icon */}
            <div style={{ marginBottom: "16px" }}>
              {card.icon}
            </div>

            {/* Divider */}
            <div
              style={{
                width: "32px",
                height: "2px",
                background: "#e5e7eb",
                borderRadius: "2px",
                marginBottom: "16px",
              }}
            />

            {/* Title */}
            <h3
              style={{
                fontSize: "15px",
                fontWeight: "700",
                color: "#111827",
                marginBottom: "12px",
                lineHeight: 1.3,
              }}
            >
              {card.title}
            </h3>

            {/* Description */}
            <p
              style={{
                fontSize: "13px",
                color: "#6b7280",
                lineHeight: 1.7,
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
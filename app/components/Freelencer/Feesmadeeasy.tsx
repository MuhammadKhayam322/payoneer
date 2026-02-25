"use client";

import { ReactElement } from "react";

// ── TYPES ─────────────────────────────────────────────────────────
interface FeeCard {
  icon: ReactElement;
  title: string;
  description: string;
}

// ── FEE CARDS DATA ────────────────────────────────────────────────
const feeCards: FeeCard[] = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    title: "No delays, low fees",
    description:
      "Sending payments to other Payoneer customers is fast, and all transactions have refreshingly low fees.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3H14z" />
        <path d="M7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" />
      </svg>
    ),
    title: "No surprises",
    description:
      "We'll always be completely transparent with our fees, so there'll be no unpleasant surprises.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M8 14s1.5 2 4 2 4-2 4-2" />
        <line x1="9" y1="9" x2="9.01" y2="9" />
        <line x1="15" y1="9" x2="15.01" y2="9" />
      </svg>
    ),
    title: "No trouble",
    description:
      "We collect our fees automatically, so you'll have the reassurance of knowing you're always up to date.",
  },
];

// ── MAIN COMPONENT ────────────────────────────────────────────────
export default function FeesMadeEasy(): ReactElement {
  return (
    <div style={{ background: "#f9fafb", fontFamily: "'Helvetica Neue', Arial, sans-serif" }}>

      {/* ── SECTION 1: Fees Made Easy ── */}
      <section
        style={{
          padding: "70px 40px 60px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          maxWidth: "860px",
          margin: "0 auto",
        }}
      >
        <h2
          style={{
            fontSize: "clamp(24px, 3vw, 36px)",
            fontWeight: "700",
            color: "#1a1a1a",
            marginBottom: "12px",
            letterSpacing: "-0.3px",
          }}
        >
          Fees made easy
        </h2>
        <p style={{ fontSize: "14px", color: "#6b7280", marginBottom: "40px", maxWidth: "420px" }}>
          We&apos;ve made our pricing easy to understand, the way it should be.
        </p>

        {/* Cards grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "16px",
            width: "100%",
            marginBottom: "40px",
          }}
        >
          {feeCards.map((card, i) => (
            <div
              key={i}
              style={{
                background: "#fff",
                borderRadius: "14px",
                padding: "24px 20px",
                textAlign: "left",
                boxShadow: "0 1px 6px rgba(0,0,0,0.06)",
                border: "1px solid #f0f0f0",
              }}
            >
              {/* Icon circle */}
              <div
                style={{
                  width: "42px",
                  height: "42px",
                  borderRadius: "50%",
                  border: "1.5px solid #e5e7eb",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "14px",
                  background: "#fafafa",
                }}
              >
                {card.icon}
              </div>

              {/* Divider line */}
              <div style={{ height: "1px", background: "#f3f4f6", marginBottom: "14px" }} />

              <h3 style={{ fontSize: "14px", fontWeight: "700", color: "#1a1a1a", marginBottom: "8px" }}>
                {card.title}
              </h3>
              <p style={{ fontSize: "13px", color: "#6b7280", lineHeight: 1.65, margin: 0 }}>
                {card.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <button
          style={{
            background: "#111",
            color: "#fff",
            border: "none",
            borderRadius: "50px",
            padding: "14px 32px",
            fontSize: "14px",
            fontWeight: "600",
            cursor: "pointer",
            letterSpacing: "0.2px",
            transition: "background 0.2s",
          }}
          onMouseEnter={(e) => ((e.target as HTMLButtonElement).style.background = "#333")}
          onMouseLeave={(e) => ((e.target as HTMLButtonElement).style.background = "#111")}
        >
          See our pricing
        </button>
      </section>

      {/* ── SECTION 2: Testimonial ── */}
      <section
        style={{
          background: "#fff",
          padding: "60px 40px 70px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        {/* Eyebrow label */}
        <p
          style={{
            fontSize: "11px",
            fontWeight: "700",
            letterSpacing: "1.5px",
            color: "#9ca3af",
            textTransform: "uppercase",
            marginBottom: "14px",
          }}
        >
          Get the lowdown
        </p>

        {/* Heading */}
        <h2
          style={{
            fontSize: "clamp(20px, 2.5vw, 28px)",
            fontWeight: "700",
            color: "#1a1a1a",
            maxWidth: "400px",
            lineHeight: 1.3,
            marginBottom: "40px",
            letterSpacing: "-0.2px",
          }}
        >
          See what other businesses and freelancers are saying about their Payoneer account
        </h2>

        {/* Testimonial card */}
        <div
          style={{
            background: "#f9fafb",
            borderRadius: "18px",
            padding: "40px 48px",
            maxWidth: "560px",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {/* Avatar */}
          <div
            style={{
              width: "64px",
              height: "64px",
              borderRadius: "50%",
              background: "linear-gradient(135deg, #fce4ec, #e8eaf6)",
              marginBottom: "16px",
              overflow: "hidden",
              border: "3px solid #fff",
              boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg width="36" height="36" viewBox="0 0 24 24" fill="#c4b5d0">
              <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
            </svg>
          </div>

          {/* Name */}
          <p style={{ fontSize: "15px", fontWeight: "700", color: "#1a1a1a", marginBottom: "4px" }}>
            Eliana Barrionuevo
          </p>

          {/* Role */}
          <p style={{ fontSize: "12px", color: "#9ca3af", marginBottom: "20px" }}>
            Freelance Writer &amp; Travel Blogger Argentina
          </p>

          {/* Quote */}
          <p style={{ fontSize: "14px", color: "#4b5563", lineHeight: 1.7, margin: 0, fontStyle: "italic" }}>
            What I love about Payoneer is the freedom I have to use it all over the world and the
            solution that fits my digital nomad lifestyle.
          </p>
        </div>
      </section>
    </div>
  );
}
"use client";

import React, { useState, useEffect } from "react";

// ─── Seeded stars (no hydration mismatch) ────────────────────────────────────
interface Star { width: number; height: number; top: number; left: number; opacity: number; }
function seededRand(seed: number): number {
  const x = Math.sin(seed + 1) * 10000;
  return x - Math.floor(x);
}
const STARS: Star[] = Array.from({ length: 60 }, (_, i) => ({
  width:   seededRand(i * 5 + 1) * 2.5 + 1,
  height:  seededRand(i * 5 + 2) * 2.5 + 1,
  top:     seededRand(i * 5 + 3) * 100,
  left:    seededRand(i * 5 + 4) * 100,
  opacity: seededRand(i * 5 + 5) * 0.5 + 0.1,
}));

// ─── Card data ────────────────────────────────────────────────────────────────
interface Card { title: string; description: string; icon: React.ReactNode; }

const CARDS: Card[] = [
  {
    title: "Web Development",
    description: "Build scalable and responsive websites tailored to your business needs.",
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <line x1="2" y1="20" x2="22" y2="20" />
        <polyline points="9 10 7 12 9 14" />
        <polyline points="15 10 17 12 15 14" />
        <line x1="11" y1="14" x2="13" y2="10" />
      </svg>
    ),
  },
  {
    title: "App Development",
    description: "Create intuitive and engaging mobile applications for iOS and Android platforms.",
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2" />
        <circle cx="12" cy="17" r="1" fill="white" />
        <line x1="9" y1="6" x2="15" y2="6" />
      </svg>
    ),
  },
  {
    title: "IT Solutions",
    description: "Implement robust IT infrastructure and solutions for seamless operations.",
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="5" rx="1" />
        <rect x="2" y="10" width="20" height="5" rx="1" />
        <rect x="2" y="17" width="20" height="5" rx="1" />
        <circle cx="18" cy="5.5"  r="1" fill="white" />
        <circle cx="18" cy="12.5" r="1" fill="white" />
        <circle cx="18" cy="19.5" r="1" fill="white" />
      </svg>
    ),
  },
  {
    title: "Digital Marketing",
    description: "Boost your online presence with SEO, social media, PPC, and content strategies.",
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 11v2a1 1 0 001 1h1l2 4h1v-4h1l9 4V7L9 11H4a1 1 0 00-1 1z" />
        <path d="M19 9s1 1 1 3-1 3-1 3" />
      </svg>
    ),
  },
  {
    title: "Graphic Design",
    description: "Craft visually compelling designs that communicate your brand story effectively.",
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="19" x2="6.5" y2="19" />
        <path d="M17.5 3.5a2.121 2.121 0 013 3L7 20l-4 1 1-4 12.5-13.5z" />
      </svg>
    ),
  },
  {
    title: "Mobile App Development",
    description: "Design and develop high-performance mobile apps with seamless user experiences.",
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2" />
        <circle cx="12" cy="17" r="1" fill="white" />
        <line x1="9" y1="6" x2="15" y2="6" />
      </svg>
    ),
  },
];

// ─── Purple gradient circle icon ──────────────────────────────────────────────
function IconCircle({ icon, hovered }: { icon: React.ReactNode; hovered: boolean }) {
  return (
    <div
      style={{
        width:          90,
        height:         90,
        borderRadius:   "50%",
        background:     hovered
          ? "linear-gradient(135deg, #7c3aed, #4f46e5)"
          : "linear-gradient(135deg, #6d28d9, #4338ca)",
        display:        "flex",
        alignItems:     "center",
        justifyContent: "center",
        boxShadow:      hovered
          ? "0 0 32px rgba(109,40,217,0.55)"
          : "0 0 20px rgba(109,40,217,0.3)",
        transition:     "background 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease",
        transform:      hovered ? "scale(1.08)" : "scale(1)",
        flexShrink:     0,
      }}
    >
      {icon}
    </div>
  );
}

// ─── Single card ──────────────────────────────────────────────────────────────
function ServiceCard({ card }: { card: Card }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display:        "flex",
        flexDirection:  "column",
        alignItems:     "flex-start",
        gap:            16,
        padding:        "36px 32px",
        borderRadius:   20,
        background:     hovered ? "rgba(255,255,255,0.05)" : "transparent",
        border:         `1px solid ${hovered ? "rgba(255,255,255,0.1)" : "transparent"}`,
        cursor:         "default",
        transition:     "background 0.3s ease, border 0.3s ease",
        flex:           1,
      }}
    >
      <IconCircle icon={card.icon} hovered={hovered} />

      <h3
        style={{
          fontSize:   "clamp(16px, 1.5vw, 19px)",
          fontWeight: 700,
          color:      "#ffffff",
          margin:     0,
          lineHeight: 1.3,
          fontFamily: "'Segoe UI', Arial, sans-serif",
        }}
      >
        {card.title}
      </h3>

      <p
        style={{
          fontSize:   "clamp(13px, 1.2vw, 15px)",
          color:      "rgba(255,255,255,0.5)",
          margin:     0,
          lineHeight: 1.7,
          fontFamily: "'Segoe UI', Arial, sans-serif",
          fontWeight: 400,
        }}
      >
        {card.description}
      </p>
    </div>
  );
}

// ─── Main section ─────────────────────────────────────────────────────────────
export default function OurServices() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const row1 = CARDS.slice(0, 3);
  const row2 = CARDS.slice(3, 6);

  return (
    <section
      style={{
        position:   "relative",
        width:      "100%",
         background:
          "linear-gradient(135deg, #0a0a14 0%, #0d0f1a 50%, #080c18 100%)",
        overflow:   "hidden",
        padding:    "72px 40px 80px",
        fontFamily: "'Segoe UI', Arial, sans-serif",
      }}
    >
      {/* Stars */}
      {mounted && (
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
          {STARS.map((s, i) => (
            <div
              key={i}
              style={{
                position:     "absolute",
                borderRadius: "50%",
                background:   "white",
                width:        `${s.width}px`,
                height:       `${s.height}px`,
                top:          `${s.top}%`,
                left:         `${s.left}%`,
                opacity:      s.opacity,
              }}
            />
          ))}
        </div>
      )}

      {/* Content */}
      <div style={{ position: "relative", zIndex: 10, maxWidth: 1100, margin: "0 auto" }}>

        {/* Heading */}
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <h2
            style={{
              fontSize:      "clamp(26px, 4vw, 40px)",
              fontWeight:    700,
              color:         "#ffffff",
              margin:        "0 0 16px 0",
              letterSpacing: "-0.3px",
              lineHeight:    1.15,
            }}
          >
            Our Services
          </h2>
          <div
            style={{
              width:        60,
              height:       3,
              borderRadius: 2,
              background:   "linear-gradient(90deg, #6d28d9, #4338ca)",
              margin:       "0 auto 20px",
            }}
          />
          <p
            style={{
              fontSize:   "clamp(14px, 1.5vw, 16px)",
              color:      "rgba(255,255,255,0.5)",
              maxWidth:   540,
              margin:     "0 auto",
              lineHeight: 1.75,
            }}
          >
            From design to deployment — we deliver end-to-end digital solutions
            tailored to your business goals.
          </p>
        </div>

        {/* Row 1 — 3 cards */}
        <div
          style={{
            display:        "flex",
            flexDirection:  "row",
            justifyContent: "center",
            gap:            0,
            marginBottom:   8,
          }}
        >
          {row1.map((card, i) => (
            <React.Fragment key={card.title}>
              <ServiceCard card={card} />
              {i < row1.length - 1 && (
                <div
                  style={{
                    width:      1,
                    background: "rgba(255,255,255,0.08)",
                    alignSelf:  "stretch",
                    margin:     "20px 0",
                  }}
                />
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Horizontal divider between rows */}
        <div
          style={{
            height:     1,
            background: "rgba(255,255,255,0.08)",
            margin:     "0 32px",
          }}
        />

        {/* Row 2 — 3 cards */}
        <div
          style={{
            display:        "flex",
            flexDirection:  "row",
            justifyContent: "center",
            gap:            0,
            marginTop:      8,
          }}
        >
          {row2.map((card, i) => (
            <React.Fragment key={card.title}>
              <ServiceCard card={card} />
              {i < row2.length - 1 && (
                <div
                  style={{
                    width:      1,
                    background: "rgba(255,255,255,0.08)",
                    alignSelf:  "stretch",
                    margin:     "20px 0",
                  }}
                />
              )}
            </React.Fragment>
          ))}
        </div>

      </div>
    </section>
  );
}
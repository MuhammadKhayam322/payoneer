"use client";
import React, { useState, useEffect } from "react";

// ─── Seeded stars ──────────────────────────────────────────────────────────────
interface Star {
  width: number;
  height: number;
  top: number;
  left: number;
  opacity: number;
}

function seededRand(seed: number): number {
  const x = Math.sin(seed + 1) * 10000;
  return x - Math.floor(x);
}

const STARS: Star[] = Array.from({ length: 60 }, (_, i) => ({
  width: seededRand(i * 5 + 1) * 2.5 + 1,
  height: seededRand(i * 5 + 2) * 2.5 + 1,
  top: seededRand(i * 5 + 3) * 100,
  left: seededRand(i * 5 + 4) * 100,
  opacity: seededRand(i * 5 + 5) * 0.5 + 0.1,
}));

// ─── Card data ──────────────────────────────────────────────────────────────────
interface Card {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const CARDS: Card[] = [
  {
    title: "Web Development",
    description: "Build scalable and responsive websites tailored to your business needs.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2"/><polyline points="8 21 12 17 16 21"/>
      </svg>
    ),
  },
  {
    title: "App Development",
    description: "Create intuitive and engaging mobile applications for iOS and Android platforms.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2"/><circle cx="12" cy="17" r="1"/>
      </svg>
    ),
  },
  {
    title: "IT Solutions",
    description: "Implement robust IT infrastructure and solutions for seamless operations.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/>
        <line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/>
      </svg>
    ),
  },
  {
    title: "Digital Marketing",
    description: "Boost your online presence with SEO, social media, PPC, and content strategies.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
      </svg>
    ),
  },
  {
    title: "Graphic Design",
    description: "Craft visually compelling designs that communicate your brand story effectively.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="3"/>
      </svg>
    ),
  },
  {
    title: "Mobile App Development",
    description: "Design and develop high-performance mobile apps with seamless user experiences.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2"/><line x1="9" y1="7" x2="15" y2="7"/>
      </svg>
    ),
  },
];

// ─── Icon Circle ───────────────────────────────────────────────────────────────
function IconCircle({ icon, hovered }: { icon: React.ReactNode; hovered: boolean }) {
  return (
    <div
      style={{
        width: 52,
        height: 52,
        borderRadius: "50%",
        background: hovered
          ? "linear-gradient(135deg, #a855f7, #7c3aed)"
          : "linear-gradient(135deg, #7c3aed55, #a855f733)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#e2d9ff",
        flexShrink: 0,
        transition: "background 0.3s ease",
      }}
    >
      {icon}
    </div>
  );
}

// ─── Single Card ───────────────────────────────────────────────────────────────
function ServiceCard({ card }: { card: Card }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="service-card"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: 16,
        padding: "36px 32px",
        borderRadius: 20,
        background: hovered ? "rgba(255,255,255,0.05)" : "transparent",
        border: `1px solid ${hovered ? "rgba(255,255,255,0.1)" : "transparent"}`,
        cursor: "default",
        transition: "background 0.3s ease, border 0.3s ease",
        flex: 1,
      }}
    >
      <IconCircle icon={card.icon} hovered={hovered} />
      <div style={{ color: "#fff", fontSize: 18, fontWeight: 600 }}>{card.title}</div>
      <div style={{ color: "rgba(255,255,255,0.55)", fontSize: 14, lineHeight: 1.7 }}>
        {card.description}
      </div>
    </div>
  );
}

// ─── Vertical Divider ──────────────────────────────────────────────────────────
function VerticalDivider() {
  return (
    <div
      className="vertical-divider"
      style={{
        width: 1,
        alignSelf: "stretch",
        background: "linear-gradient(to bottom, transparent, rgba(255,255,255,0.08), transparent)",
        flexShrink: 0,
      }}
    />
  );
}

// ─── Horizontal Divider ────────────────────────────────────────────────────────
function HorizontalDivider() {
  return (
    <div
      style={{
        height: 1,
        width: "100%",
        background: "linear-gradient(to right, transparent, rgba(255,255,255,0.08), transparent)",
        margin: "8px 0",
      }}
    />
  );
}

// ─── Main Section ──────────────────────────────────────────────────────────────
export default function OurServices() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const row1 = CARDS.slice(0, 3);
  const row2 = CARDS.slice(3, 6);

  return (
    <>
      <style>{`
        .services-section {
          position: relative;
          width: 100%;
          background: #0a0a14;
          padding: 80px 40px;
          overflow: hidden;
          box-sizing: border-box;
        }

        .services-row {
          display: flex;
          flex-direction: row;
          align-items: stretch;
          gap: 0;
        }

        .vertical-divider {
          display: block;
        }

        /* ── Mobile: 394px and below ── */
        @media (max-width: 430px) {
          .services-section {
            padding: 48px 20px;
          }

          .services-heading {
            font-size: 28px !important;
            line-height: 1.3 !important;
          }

          .services-subheading {
            font-size: 14px !important;
          }

          .services-row {
            flex-direction: column;
            gap: 0;
          }

          .vertical-divider {
            display: none !important;
          }

          .service-card {
            padding: 24px 16px !important;
            border: 1px solid rgba(255,255,255,0.06) !important;
            border-radius: 16px !important;
            background: rgba(255,255,255,0.02) !important;
            margin-bottom: 12px;
          }

          .service-card:last-child {
            margin-bottom: 0;
          }
        }

        /* ── Tablet: 431px – 768px ── */
        @media (min-width: 431px) and (max-width: 768px) {
          .services-section {
            padding: 60px 28px;
          }

          .services-heading {
            font-size: 36px !important;
          }

          .services-row {
            flex-direction: column;
            gap: 0;
          }

          .vertical-divider {
            display: none !important;
          }

          .service-card {
            padding: 28px 24px !important;
            border: 1px solid rgba(255,255,255,0.07) !important;
            border-radius: 18px !important;
            background: rgba(255,255,255,0.025) !important;
            margin-bottom: 12px;
          }
        }
      `}</style>

      <section className="services-section">
       

        {/* Content */}
        <div style={{ position: "relative", zIndex: 1, maxWidth: 1100, margin: "0 auto" }}>
          {/* Heading */}
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <h2
              className="services-heading"
              style={{
                fontSize: 48,
                fontWeight: 700,
                color: "#fff",
                margin: "0 0 16px",
                letterSpacing: "-0.5px",
              }}
            >
              Our Services
            </h2>
            <p
              className="services-subheading"
              style={{
                color: "rgba(255,255,255,0.5)",
                fontSize: 16,
                maxWidth: 520,
                margin: "0 auto",
                lineHeight: 1.7,
              }}
            >
              From design to deployment — we deliver end-to-end digital solutions tailored to your
              business goals.
            </p>
          </div>

          {/* Row 1 */}
          <div className="services-row">
            {row1.map((card, i) => (
              <React.Fragment key={card.title}>
                <ServiceCard card={card} />
                {i < row1.length - 1 && <VerticalDivider />}
              </React.Fragment>
            ))}
          </div>

          <HorizontalDivider />

          {/* Row 2 */}
          <div className="services-row">
            {row2.map((card, i) => (
              <React.Fragment key={card.title}>
                <ServiceCard card={card} />
                {i < row2.length - 1 && <VerticalDivider />}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
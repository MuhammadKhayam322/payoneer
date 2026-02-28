// ServiceProtection.tsx
"use client";

import { ReactElement, useState, useEffect } from "react";

import ServiceCard from "../ServiceCard";

const cards = [
  {
    icon: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
  <path d="M3 11v2a1 1 0 0 0 1 1h1l2 4h1v-4h8l2 2V6l-2 2H8V4H7L5 8H4a1 1 0 0 0-1 1z" />
  <path d="M19 9.5a3 3 0 0 1 0 5" />
</svg>
    ),
    title: "Social Media Marketing",
    description: "Engaging campaigns across platforms like Facebook, Instagram, and LinkedIn.",
    color: "#4f46e5",
  },
  {
    icon: (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
  <line x1="3" y1="20" x2="21" y2="20" />
  <line x1="3" y1="20" x2="3" y2="4" />
  <polyline points="5 14 9 10 13 13 19 6" />
  <polyline points="17 6 19 6 19 8" />
</svg>
    ),
    title: "SEO Optimization",
    description: "Improve your rankings and visibility on search engines.",
    color: "#7c3aed",
  },
  {
    icon: (
     <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
  <circle cx="11" cy="11" r="7" />
  <line x1="16.5" y1="16.5" x2="22" y2="22" />
  <line x1="11" y1="7" x2="11" y2="15" />
  <path d="M8.5 9.5a2.5 2.5 0 0 1 5 0c0 1.5-2.5 2-2.5 2s-2.5.5-2.5 2a2.5 2.5 0 0 0 5 0" />
</svg>
    ),
    title: "PPC Campaigns",
    description: "Targeted ads designed for maximum ROI.",
    color: "#6d28d9",
  },
  {
    icon: (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  <line x1="8" y1="9" x2="16" y2="9" />
  <line x1="8" y1="13" x2="14" y2="13" />
</svg>
    ),
    title: "Email Marketing",
    description: "Personalized campaigns that drive customer engagement.",
    color: "#4f46e5",
  },
  {
    icon: (
   <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
  <circle cx="9" cy="7" r="3" />
  <path d="M3 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" />
  <circle cx="17" cy="7" r="3" />
  <path d="M21 21v-2a4 4 0 0 0-3-3.87" />
</svg>
    ),
    title: "Influencer Marketing",
    description: "Collaborations with key industry influencers.",
    color: "#7c3aed",
  },
  {
    icon: (
 <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
  <rect x="2" y="7" width="13" height="10" rx="2" />
  <polygon points="23 7 16 12 23 17 23 7" />
</svg>
    ),
    title: "Video Marketing",
    description: "Compelling video content to tell your brand story.",
    color: "#6d28d9",
  },
];

function useWindowWidth() {
  const [width, setWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1200
  );
  useEffect(() => {
    const handler = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);
  return width;
}

export default function ITServices(): ReactElement {
  const width = useWindowWidth();

  const gridColumns =
    width < 480
      ? "1fr"
      : width < 768
      ? "repeat(2, 1fr)"
      : "repeat(3, 1fr)";

  const sectionPadding =
    width < 480
      ? "50px 20px 60px"
      : width < 768
      ? "60px 28px 70px"
      : "70px 40px 80px";

  return (
    <section
      style={{
        background:
          "linear-gradient(135deg, #0a0a14 0%, #0d0f1a 50%, #080c18 100%)",
        padding: sectionPadding,
        fontFamily: "'Helvetica Neue', Arial, sans-serif",
        minHeight: "520px",
      }}
    >
      <div style={{ textAlign: "center", marginBottom: "48px" }}>
        <h2
          style={{
            fontSize: "clamp(24px, 3vw, 38px)",
            fontWeight: "700",
            color: "#ffffff",
            letterSpacing: "-0.3px",
          }}
        >
          Our Services
        </h2>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: gridColumns,
          gap: "20px",
          maxWidth: "1000px",
          margin: "0 auto",
        }}
      >
        {cards.map((card, i) => (
          <ServiceCard
            key={i}
            icon={card.icon}
            title={card.title}
            description={card.description}
            color={card.color}
          />
        ))}
      </div>
    </section>
  );
}
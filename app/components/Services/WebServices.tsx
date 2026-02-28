// ServiceProtection.tsx
"use client";

import { ReactElement, useState, useEffect } from "react";

import ServiceCard from "../ServiceCard";

const cards = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
        <line x1="3" y1="6" x2="21" y2="6" />
        <path d="M16 10a4 4 0 0 1-8 0" />
      </svg>
    ),
    title: "E-commerce Website Development",
    description: "Custom solutions for online stores.",
    color: "#272726",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    title: "CMS/Custom Website Development",
    description: "Tailored content management systems and custom-built websites.",
    color: "#272726",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
        <path d="M7 8h3v3H7zM13 8h4M13 11h3" />
      </svg>
    ),
    title: "Application Website Development",
    description: "Websites designed to support various applications.",
    color: "#272726",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c3 3 9 3 12 0v-5" />
      </svg>
    ),
    title: "E-Learning Platforms",
    description: "Specialized platforms catering to education.",
    color: "#272726",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "Social Networking Platforms",
    description: "Connecting people through interactive websites.",
    color: "#272726",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
      </svg>
    ),
    title: "CRM Platforms",
    description: "Managing customer relationships efficiently.",
    color: "#272726",
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

export default function WebServices(): ReactElement {
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
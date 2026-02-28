// ServiceProtection.tsx
"use client";

import { ReactElement, useState, useEffect } from "react";

import ServiceCard from "../ServiceCard";

const cards = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
  <rect x="5" y="2" width="14" height="20" rx="2" />
  <line x1="12" y1="18" x2="12" y2="18.01" />
</svg>
    ),
    title: "E-commerce Website Development",
    description: "Custom solutions for online stores.",
    color: "#4f46e5",
  },
  {
    icon: (
     <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
  <circle cx="12" cy="12" r="2" />
  <ellipse cx="12" cy="12" rx="10" ry="4" />
  <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" />
  <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" />
</svg>
    ),
    title: "CMS/Custom Website Development",
    description: "Tailored content management systems and custom-built websites.",
    color: "#7c3aed",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
  <line x1="8" y1="6" x2="21" y2="6" />
  <line x1="8" y1="12" x2="21" y2="12" />
  <line x1="8" y1="18" x2="21" y2="18" />
  <circle cx="3" cy="6" r="1" fill="white" />
  <circle cx="3" cy="12" r="1" fill="white" />
  <circle cx="3" cy="18" r="1" fill="white" />
</svg>
    ),
    title: "Application Website Development",
    description: "Websites designed to support various applications.",
    color: "#6d28d9",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="white">
  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
</svg>
    ),
    title: "E-Learning Platforms",
    description: "Specialized platforms catering to education.",
    color: "#4f46e5",
  },
  {
    icon: (
     <svg width="32" height="32" viewBox="0 0 24 24" fill="white">
  <path d="M17.523 15.341a.95.95 0 0 1-.953.953.95.95 0 0 1-.953-.953.95.95 0 0 1 .953-.953.95.95 0 0 1 .953.953zm-9.186 0a.95.95 0 0 1-.953.953.95.95 0 0 1-.953-.953.95.95 0 0 1 .953-.953.95.95 0 0 1 .953.953zm9.769-7.237l1.714-2.972a.357.357 0 0 0-.131-.488.357.357 0 0 0-.488.131l-1.734 3.006A10.617 10.617 0 0 0 12 7.077c-1.681 0-3.27.393-4.667 1.104L5.599 5.175a.357.357 0 0 0-.488-.131.357.357 0 0 0-.131.488l1.714 2.972C4.036 9.909 2.4 12.434 2.4 15.341h19.2c0-2.907-1.636-5.432-4.294-7.237z"/>
</svg>
    ),
    title: "Social Networking Platforms",
    description: "Connecting people through interactive websites.",
    color: "#7c3aed",
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
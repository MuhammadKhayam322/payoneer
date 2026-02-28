// ServiceProtection.tsx
"use client";
import { ReactElement, useState, useEffect } from "react";
import ServiceCard from "../ServiceCard";

const cards = [
  {
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M9.06 11.9l8.07-8.06a2.85 2.85 0 1 1 4.03 4.03l-8.06 8.08" />
        <path d="M7.07 14.94C5.79 16.2 4 16 4 16s-.2-1.79 1.06-3.07l2.01 1.01z" />
      </svg>
    ),
    title: "Logo Design",
    description:
      "Unique and professional logos that define your brand identity.",
    color: "#4f46e5",
  },
  {
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 19l7-7 3 3-7 7-3-3z" />
        <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
        <path d="M2 2l7.586 7.586" />
        <circle cx="11" cy="11" r="2" />
      </svg>
    ),
    title: "Brand Identity Design",
    description:
      "Complete branding solutions including typography and color palettes.",
    color: "#7c3aed",
  },
  {
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="13.5" cy="6.5" r="1" fill="white" stroke="none" />
        <circle cx="17.5" cy="10.5" r="1" fill="white" stroke="none" />
        <circle cx="8.5" cy="7.5" r="1" fill="white" stroke="none" />
        <circle cx="6.5" cy="12.5" r="1" fill="white" stroke="none" />
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c1.1 0 2-.9 2-2v-.5c0-.28.22-.5.5-.5H17c2.76 0 5-2.24 5-5 0-5.52-4.48-10-10-10z" />
      </svg>
    ),
    title: "UI/UX Design",
    description: "Modern user interfaces for websites and mobile applications.",
    color: "#6d28d9",
  },
  {
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="3" width="18" height="18" rx="1" strokeDasharray="2 2" />
        <rect x="1.5" y="1.5" width="3" height="3" rx="0.5" fill="white" />
        <rect x="19.5" y="1.5" width="3" height="3" rx="0.5" fill="white" />
        <rect x="1.5" y="19.5" width="3" height="3" rx="0.5" fill="white" />
        <rect x="19.5" y="19.5" width="3" height="3" rx="0.5" fill="white" />
      </svg>
    ),
    title: "Print & Marketing Collaterals",
    description: "Flyers, brochures, and posters designed to impress.",
    color: "#4f46e5",
  },
  {
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <circle cx="10" cy="13" r="2" />
        <path d="M20 17l-3-3-4 4" />
      </svg>
    ),
    title: "Illustrations & Icons",
    description: "Custom vector art, icons, and illustrations.",
    color: "#7c3aed",
  },
  {
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M9 21h6" />
        <path d="M12 3a6 6 0 0 1 6 6c0 2.22-1.2 4.16-3 5.2V17a1 1 0 0 1-1 1H10a1 1 0 0 1-1-1v-2.8C7.2 13.16 6 11.22 6 9a6 6 0 0 1 6-6z" />
      </svg>
    ),
    title: "Creative Concept Development",
    description: "Innovative visual ideas tailored for your business.",
    color: "#6d28d9",
  },
];

function useWindowWidth() {
  const [width, setWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1200,
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
    width < 480 ? "1fr" : width < 768 ? "repeat(2, 1fr)" : "repeat(3, 1fr)";

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

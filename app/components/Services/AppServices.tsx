// ServiceProtection.tsx
"use client";

import { ReactElement } from "react";

import ServiceCard from "../ServiceCard";

const cards = [
  {
    icon: (
     <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
  <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
</svg>
    ),
    title: "Cloud Solutions",
    description: "Scalable and secure cloud infrastructure",
    color: "#4f46e5",
  },
  {
    icon: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
  <rect x="2" y="2" width="20" height="5" rx="1" />
  <rect x="2" y="9" width="20" height="5" rx="1" />
  <rect x="2" y="16" width="20" height="5" rx="1" />
  <circle cx="6" cy="4.5" r="0.8" fill="white" />
  <circle cx="6" cy="11.5" r="0.8" fill="white" />
  <circle cx="6" cy="18.5" r="0.8" fill="white" />
</svg>
    ),
    title: "IT Infrastructure",
    description: "Comprehensive IT infrastructure setup and management.",
    color: "#7c3aed",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  <polyline points="9 12 11 14 15 10" />
</svg>
    ),
    title: "Cybersecurity Services",
    description: "Protect your business with advanced cybersecurity.",
    color: "#6d28d9",
  },
  {
    icon: (
     <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
  <rect x="2" y="9" width="4" height="4" rx="1" />
  <rect x="10" y="2" width="4" height="4" rx="1" />
  <rect x="10" y="16" width="4" height="4" rx="1" />
  <rect x="18" y="9" width="4" height="4" rx="1" />
  <line x1="6" y1="11" x2="10" y2="11" />
  <line x1="12" y1="6" x2="12" y2="9" />
  <line x1="12" y1="16" x2="12" y2="14" />
  <line x1="14" y1="11" x2="18" y2="11" />
</svg>
    ),
    title: "Network Management",
    description: "Efficient networking and connectivity solutions.",
    color: "#4f46e5",
  },
  {
    icon: (
     <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
  <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
</svg>
    ),
    title: "Software Support & Maintenance",
    description: "Ongoing software updates, bug fixes, and support.",
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
    title: "Database Management",
    description: "Reliable database design, monitoring, and optimization.",
    color: "#6d28d9",
  },
];

export default function AppServices(): ReactElement {
  return (
    <section
      style={{
        background:
          "linear-gradient(135deg, #0a0a14 0%, #0d0f1a 50%, #080c18 100%)",
        padding: "70px 40px 80px",
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
          gridTemplateColumns: "repeat(3, 1fr)",
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
"use client";

import { useState } from "react";

const CircleIcon = ({ children }: { children: React.ReactNode }) => (
  <div
    style={{
      width: "56px",
      height: "56px",
      borderRadius: "50%",
      background: "#111111",
      border: "1px solid rgba(255,255,255,0.1)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0,
    }}
  >
    {children}
  </div>
);

const features = [
  {
    icon: (
      <CircleIcon>
        {/* Code icon </> */}
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
          <path d="M8 6L2 12L8 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16 6L22 12L16 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </CircleIcon>
    ),
    title: "40+",
    description:
      "Projects Delivered sucessfully complete projects across multiple industries",
  },
  {
    icon: (
      <CircleIcon>
        {/* Team / Users icon */}
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
          <circle cx="9" cy="7" r="3" stroke="white" strokeWidth="1.8" fill="none"/>
          <path d="M3 20c0-3.314 2.686-6 6-6s6 2.686 6 6" stroke="white" strokeWidth="1.8" strokeLinecap="round" fill="none"/>
          <circle cx="17" cy="7" r="2.5" stroke="white" strokeWidth="1.8" fill="none"/>
          <path d="M21 20c0-2.761-1.791-5-4-5.5" stroke="white" strokeWidth="1.8" strokeLinecap="round" fill="none"/>
        </svg>
      </CircleIcon>
    ),
    title: "15+",
    description:
      "Team Members Dedicated professionals driving innovation and results.",
  },
  {
    icon: (
      <CircleIcon>
        {/* Rocket icon */}
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 2C12 2 7 6 7 13l2 2c1-1 2-1.5 3-1.5s2 .5 3 1.5l2-2c0-7-5-11-5-11z"
            stroke="white"
            strokeWidth="1.8"
            strokeLinejoin="round"
            fill="none"
          />
          <path d="M9 15l-3 3M15 15l3 3" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
          <circle cx="12" cy="10" r="1.5" fill="white"/>
        </svg>
      </CircleIcon>
    ),
    title: "5+",
    description:
      "Years Experience Years of combined expertise in delivering digital solutions.",
  },
  {
    icon: (
      <CircleIcon>
        {/* Trophy icon */}
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
          <path
            d="M8 3h8v8a4 4 0 01-8 0V3z"
            stroke="white"
            strokeWidth="1.8"
            strokeLinejoin="round"
            fill="none"
          />
          <path d="M8 5H5a2 2 0 000 4h3" stroke="white" strokeWidth="1.8" strokeLinecap="round" fill="none"/>
          <path d="M16 5h3a2 2 0 010 4h-3" stroke="white" strokeWidth="1.8" strokeLinecap="round" fill="none"/>
          <path d="M12 15v3" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
          <path d="M9 21h6" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
        </svg>
      </CircleIcon>
    ),
    title: "10+",
    description:
      "Successful Clients Clients who achieved measurable growth through our solutions.",
  },
];

export default function EmpoweringTech() {
  return (
    <section
      style={{
        background:
          "linear-gradient(135deg, #0a0a14 0%, #0d0f1a 50%, #080c18 100%)",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        padding: "80px 60px",
        position: "relative",
        overflow: "hidden",
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      {/* Background glow blobs */}
      <div
        style={{
          position: "absolute",
          top: "-80px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "600px",
          height: "300px",
          background:
            "radial-gradient(ellipse, rgba(99,102,241,0.15) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "20px",
          right: "100px",
          width: "200px",
          height: "200px",
          background:
            "radial-gradient(ellipse, rgba(16,185,129,0.1) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          width: "80%",
          justifyContent: "center",
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
          justifyItems: "center",
        }}
      >
        {/* Header */}
        <div style={{ marginBottom: "56px" }}>
          <h2
            style={{
              fontSize: "clamp(28px, 4vw, 42px)",
              fontWeight: 600,
              color: "#ffffff",
              margin: "0 0 16px",
              letterSpacing: "-0.02em",
            }}
          >
            Empowering Businesses with Innovative Technology
          </h2>
          <p
            style={{
              fontSize: "15px",
              color: "rgba(255,255,255,0.5)",
              lineHeight: "1.6",
              margin: 0,
            }}
          >
            At BrandRaize, we are a dynamic team of passionate software
            developers, designers, and technology experts dedicated to crafting
            innovative digital solutions. With over a decade of experience,
            we&apos;ve helped businesses across various industries transform their
            digital presence and streamline their operations.
          </p>
        </div>

        <div
          style={{
            display: "flex",
            gap: "16px",
            overflowX: "hidden",
            scrollBehavior: "smooth",
          }}
        >
          {features.map((f, i) => (
            <FeatureCard key={i} {...f} />
          ))}
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            marginTop: "32px",
          }}
        />
      </div>
    </section>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        minWidth: "200px",
        flex: "1 0 200px",
        background: hovered
          ? "linear-gradient(135deg, rgba(255,255,255,0.07), rgba(255,255,255,0.03))"
          : "linear-gradient(135deg, rgba(255,255,255,0.04), rgba(255,255,255,0.01))",
        border: hovered
          ? "1px solid rgba(255,255,255,0.12)"
          : "1px solid rgba(255,255,255,0.06)",
        borderRadius: "16px",
        padding: "28px 22px",
        transition: "all 0.25s ease",
        cursor: "default",
        backdropFilter: "blur(8px)",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
        boxShadow: hovered ? "0 20px 40px rgba(0,0,0,0.4)" : "none",
        textAlign: "left",
      }}
    >
      <div style={{ marginBottom: "20px" }}>{icon}</div>
      <h3
        style={{
          fontSize: "14px",
          fontWeight: 600,
          color: "#ffffff",
          margin: "0 0 12px",
          lineHeight: "1.4",
          letterSpacing: "-0.01em",
        }}
      >
        {title}
      </h3>
      <p
        style={{
          fontSize: "12.5px",
          color: "rgba(255,255,255,0.45)",
          lineHeight: "1.65",
          margin: 0,
        }}
      >
        {description}
      </p>
    </div>
  );
}
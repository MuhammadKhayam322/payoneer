"use client";

import { useState, useRef, useEffect } from "react";

const features = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M16 4C9.37 4 4 9.37 4 16s5.37 12 12 12 12-5.37 12-12S22.63 4 16 4z" stroke="#7C3AED" strokeWidth="1.5" fill="none"/>
        <path d="M10 16l4 4 8-8" stroke="#A78BFA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="16" cy="8" r="2" fill="#7C3AED" opacity="0.5"/>
      </svg>
    ),
    title: "Keep more of what you earn",
    description:
      "There are no lengthy or costly international wire transfers to think about. With Payoneer you can get paid quickly and simply, as if you were a local.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="12" stroke="#0EA5E9" strokeWidth="1.5" fill="none"/>
        <path d="M4 16h24M16 4c-4 4-6 8-6 12s2 8 6 12M16 4c4 4 6 8 6 12s-2 8-6 12" stroke="#38BDF8" strokeWidth="1.5" fill="none"/>
      </svg>
    ),
    title: "Open marketplace opportunities",
    description:
      "With connections to all the leading marketplaces, Payoneer lets you expand global business as you wish.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <circle cx="8" cy="16" r="3" stroke="#10B981" strokeWidth="1.5" fill="none"/>
        <circle cx="24" cy="8" r="3" stroke="#10B981" strokeWidth="1.5" fill="none"/>
        <circle cx="24" cy="24" r="3" stroke="#10B981" strokeWidth="1.5" fill="none"/>
        <path d="M11 16h6M21 10l-6 5M21 22l-6-5" stroke="#34D399" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: "Join the network",
    description:
      "You're part of something big – connect with millions of businesses and platforms already putting their trust in Payoneer.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect x="4" y="8" width="24" height="16" rx="2" stroke="#F59E0B" strokeWidth="1.5" fill="none"/>
        <path d="M4 13h24" stroke="#FCD34D" strokeWidth="1.5"/>
        <circle cx="10" cy="19" r="2" fill="#F59E0B" opacity="0.7"/>
        <rect x="14" y="18" width="8" height="2" rx="1" fill="#FCD34D" opacity="0.5"/>
      </svg>
    ),
    title: "We're with you at every step",
    description:
      "Our global teams are ready to talk everything business payments in the language of your choice.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect x="6" y="10" width="20" height="14" rx="2" stroke="#6366F1" strokeWidth="1.5" fill="none"/>
        <path d="M6 15h20" stroke="#818CF8" strokeWidth="1.5"/>
        <circle cx="16" cy="10" r="3" stroke="#6366F1" strokeWidth="1.5" fill="none"/>
        <path d="M13 10V8a3 3 0 016 0v2" stroke="#818CF8" strokeWidth="1.5"/>
      </svg>
    ),
    title: "Your global business wallet",
    description:
      "The world's in your wallet when you can pay and get paid by anyone, anywhere. Our reach can help you with global expansion in the digital economy.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect x="6" y="6" width="20" height="20" rx="4" fill="#1C1C1E" stroke="#555" strokeWidth="1"/>
        <text x="16" y="18" textAnchor="middle" fill="white" fontSize="8" fontFamily="system-ui" fontWeight="600">Pay</text>
        <circle cx="22" cy="10" r="3" fill="#34D399" opacity="0.8"/>
      </svg>
    ),
    title: "Easy, fast transactions with Apple Pay",
    description:
      "Use your Payoneer card with Apple Pay for an easy, secure, and private way to pay – in-store, online, and even in your favorite apps. Available with your Payoneer card on your Apple devices.",
  },
];

export default function PayoneerWhySection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const visibleCount = 5;

  const scrollTo = (index: number) => {
    setCurrentIndex(index);
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.scrollWidth / features.length;
      scrollRef.current.scrollTo({ left: cardWidth * index, behavior: "smooth" });
    }
  };

  const prev = () => scrollTo(Math.max(0, currentIndex - 1));
  const next = () => scrollTo(Math.min(features.length - visibleCount, currentIndex + 2));

  return (
    <section
      style={{
        background: "linear-gradient(135deg, #0a0a14 0%, #0d0f1a 50%, #080c18 100%)",
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
      <div style={{
        position: "absolute", top: "-80px", left: "50%", transform: "translateX(-50%)",
        width: "600px", height: "300px",
        background: "radial-gradient(ellipse, rgba(99,102,241,0.15) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", top: "20px", right: "100px",
        width: "200px", height: "200px",
        background: "radial-gradient(ellipse, rgba(16,185,129,0.1) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600&display=swap" rel="stylesheet" />

      <div style={{ maxWidth: "1200px", margin: "0 auto", width: "100%" }}>
        {/* Header */}
        <div style={{ marginBottom: "56px" }}>
          <h2 style={{
            fontSize: "clamp(28px, 4vw, 42px)",
            fontWeight: 600,
            color: "#ffffff",
            margin: "0 0 16px",
            letterSpacing: "-0.02em",
          }}>
            Why do business with Payoneer?
          </h2>
          <p style={{
            fontSize: "15px",
            color: "rgba(255,255,255,0.5)",
            maxWidth: "380px",
            lineHeight: "1.6",
            margin: 0,
          }}>
            Cross-border payments can get complicated but we've made it our mission to uncomplicate them.
          </p>
        </div>

        {/* Cards scroll container */}
        <div
          ref={scrollRef}
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

        {/* Controls */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px", marginTop: "32px" }}>
          <button onClick={prev} style={navBtnStyle}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M10 12L6 8l4-4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button onClick={next} style={navBtnStyle}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M6 12l4-4-4-4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          {/* Progress bar */}
          <div style={{
            flex: 1,
            height: "3px",
            background: "rgba(255,255,255,0.1)",
            borderRadius: "2px",
            overflow: "hidden",
          }}>
            <div style={{
              height: "100%",
              width: `${((currentIndex + visibleCount) / features.length) * 100}%`,
              background: "linear-gradient(90deg, #6366F1, #10B981)",
              borderRadius: "2px",
              transition: "width 0.3s ease",
            }} />
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
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
        border: hovered ? "1px solid rgba(255,255,255,0.12)" : "1px solid rgba(255,255,255,0.06)",
        borderRadius: "16px",
        padding: "28px 22px",
        transition: "all 0.25s ease",
        cursor: "default",
        backdropFilter: "blur(8px)",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
        boxShadow: hovered ? "0 20px 40px rgba(0,0,0,0.4)" : "none",
      }}
    >
      <div style={{ marginBottom: "20px" }}>{icon}</div>
      <h3 style={{
        fontSize: "14px",
        fontWeight: 600,
        color: "#ffffff",
        margin: "0 0 12px",
        lineHeight: "1.4",
        letterSpacing: "-0.01em",
      }}>
        {title}
      </h3>
      <p style={{
        fontSize: "12.5px",
        color: "rgba(255,255,255,0.45)",
        lineHeight: "1.65",
        margin: 0,
      }}>
        {description}
      </p>
    </div>
  );
}

const navBtnStyle: React.CSSProperties = {
  width: "34px",
  height: "34px",
  borderRadius: "50%",
  border: "1px solid rgba(255,255,255,0.15)",
  background: "rgba(255,255,255,0.05)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  flexShrink: 0,
  transition: "background 0.2s",
};
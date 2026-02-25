"use client";
import React, { useRef } from "react";

const values = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#a78bfa" strokeWidth="1.8">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
    title: "Excellence",
    text: "Driving Payoneer's DNA, this means we hold ourselves and each other to the highest standards in everything we do. We are always striving to improve and raise our performance.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#a78bfa" strokeWidth="1.8">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 8v4l3 3" />
      </svg>
    ),
    title: "Transparency",
    text: "We are open and direct in our communications, with each other, with our customers, internally and with our partners and community.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#a78bfa" strokeWidth="1.8">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "Humility",
    text: "We believe in what we're doing. We know we offer a great service. However, we are aware that we still have a lot to go to reach our best.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#a78bfa" strokeWidth="1.8">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
    title: "Passion",
    text: "They all share a desire to solve the unsolvable. We are driven by our love of what we do and the impact we have on the lives of our community.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#a78bfa" strokeWidth="1.8">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <line x1="23" y1="11" x2="17" y2="11" />
        <line x1="20" y1="8" x2="20" y2="14" />
      </svg>
    ),
    title: "Inclusion",
    text: "Payoneer represents an equal opportunity to be involved and we create a culture where all people are always welcomed. While allowing for some risk we still hold our community to best-in-class standards.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#a78bfa" strokeWidth="1.8">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
    title: "Action",
    text: "With a progressive approach, passionate and always curious, we are always exploring and discovering new paths and ideas that lead to better outcomes in innovative ways.",
  },
];

export default function HowWeDoIt() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({ left: dir === "left" ? -260 : 260, behavior: "smooth" });
  };

  return (
    <section
      style={{
        backgroundColor: "#0d0d14",
        backgroundImage:
          "radial-gradient(ellipse at 80% 50%, rgba(80,40,120,0.45) 0%, transparent 60%)",
        padding: "56px 48px 48px",
        position: "relative",
        overflow: "hidden",
        fontFamily: "'Segoe UI', Arial, sans-serif",
        minHeight: "360px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      {/* Background person silhouette hint */}
      <div
        style={{
          position: "absolute",
          right: 0,
          top: 0,
          bottom: 0,
          width: "35%",
          background:
            "linear-gradient(to left, rgba(60,30,90,0.3) 0%, transparent 100%)",
          pointerEvents: "none",
        }}
      />

      {/* Heading block */}
      <div style={{ maxWidth: "380px", marginBottom: "32px", position: "relative", zIndex: 2 }}>
        <h2
          style={{
            fontSize: "clamp(18px, 2.5vw, 26px)",
            fontWeight: 700,
            color: "#fff",
            marginBottom: "14px",
            letterSpacing: "-0.3px",
          }}
        >
          This is how we do it
        </h2>
        <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.55)", lineHeight: 1.7 }}>
          We&apos;re not going to tell you that we&apos;re different. Everyone says that. Instead, here are the six behaviors we ask everyone at Payoneer to follow. They sum us up pretty neatly.
        </p>
      </div>

      {/* Scrollable cards row */}
      <div style={{ position: "relative", zIndex: 2 }}>
        <div
          ref={scrollRef}
          style={{
            display: "flex",
            gap: "14px",
            overflowX: "auto",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            paddingBottom: "4px",
            scrollSnapType: "x mandatory",
          }}
        >
          {/* Hide scrollbar for webkit */}
          <style>{`
            div::-webkit-scrollbar { display: none; }
          `}</style>

          {values.map((v, i) => (
            <div
              key={i}
              style={{
                minWidth: "180px",
                maxWidth: "180px",
                flexShrink: 0,
                scrollSnapAlign: "start",
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.10)",
                borderRadius: "10px",
                padding: "18px 16px",
                backdropFilter: "blur(6px)",
              }}
            >
              <div style={{ marginBottom: "10px" }}>{v.icon}</div>
              <h3
                style={{
                  fontSize: "13px",
                  fontWeight: 700,
                  color: "#fff",
                  marginBottom: "8px",
                  letterSpacing: "0.1px",
                }}
              >
                {v.title}
              </h3>
              <p style={{ fontSize: "11px", color: "rgba(255,255,255,0.5)", lineHeight: 1.7 }}>
                {v.text}
              </p>
            </div>
          ))}
        </div>

        {/* Arrow controls */}
        <div style={{ display: "flex", gap: "10px", marginTop: "20px" }}>
          <button
            onClick={() => scroll("left")}
            aria-label="Scroll left"
            style={arrowBtn}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
          <button
            onClick={() => scroll("right")}
            aria-label="Scroll right"
            style={arrowBtn}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

const arrowBtn: React.CSSProperties = {
  width: "32px",
  height: "32px",
  borderRadius: "50%",
  border: "1px solid rgba(255,255,255,0.2)",
  backgroundColor: "rgba(255,255,255,0.06)",
  color: "#fff",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  flexShrink: 0,
};
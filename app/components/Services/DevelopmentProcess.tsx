"use client";

import { ReactElement, useState, useEffect } from "react";

const topSteps = [
  "Define Requirement",
  "Architect Solution",
  "Design Interface",
  "Develop Functionality",
];

const bottomSteps = ["Testing", "Deliver", "Support"];

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

export default function DevelopmentProcess(): ReactElement {
  const width = useWindowWidth();

  const isMobile = width < 480;
  const isTablet = width >= 480 && width < 768;

  // Top row grid columns
  const topColumns = isMobile
    ? "repeat(2, 1fr)"
    : isTablet
    ? "repeat(2, 1fr)"
    : "repeat(4, 1fr)";

  // Bottom row grid columns
  const bottomColumns = isMobile
    ? "repeat(2, 1fr)"
    : "repeat(3, 1fr)";

  // Bottom row max-width & margin
  const bottomMaxWidth = isMobile ? "100%" : isTablet ? "100%" : "750px";
  const bottomMarginLeft = isMobile || isTablet
    ? "auto"
    : "calc((1000px - 750px) / 2 + 40px)";

  const sectionPadding = isMobile ? "40px 20px" : isTablet ? "50px 28px" : "60px 40px";

  return (
    <section
      style={{
        background:
          "linear-gradient(135deg, #0a0a14 0%, #0d0f1a 50%, #080c18 100%)",
        padding: sectionPadding,
        fontFamily: "'Helvetica Neue', Arial, sans-serif",
      }}
    >
      {/* Title */}
      <h2
        style={{
          textAlign: "center",
          color: "#ffffff",
          fontSize: "clamp(20px, 2.5vw, 30px)",
          fontWeight: "700",
          marginBottom: "48px",
        }}
      >
        Development Process
      </h2>

      {/* Top Row */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: topColumns,
          gap: "16px",
          maxWidth: "1000px",
          margin: "0 auto 16px",
        }}
      >
        {topSteps.map((step, i) => (
          <div
            key={i}
            style={{
              background: "linear-gradient(135deg, #424040, #d1b885)",
              borderRadius: "12px",
              padding: "24px 16px",
              textAlign: "center",
              color: "#1a1a2e",
              fontSize: "15px",
              fontWeight: "600",
              cursor: "default",
              transition: "transform 0.2s, box-shadow 0.2s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLDivElement).style.transform = "translateY(-4px)";
              (e.currentTarget as HTMLDivElement).style.boxShadow = "0 8px 24px rgba(251,191,36,0.4)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
              (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
            }}
          >
            {step}
          </div>
        ))}
      </div>

      {/* Bottom Row */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: bottomColumns,
          gap: "16px",
          maxWidth: bottomMaxWidth,
          margin: "0 auto",
          marginLeft: bottomMarginLeft,
        }}
      >
        {bottomSteps.map((step, i) => (
          <div
            key={i}
            style={{
              background: "linear-gradient(135deg, #424040, #d1b885)",
              borderRadius: "12px",
              padding: "24px 16px",
              textAlign: "center",
              color: "#1a1a2e",
              fontSize: "15px",
              fontWeight: "600",
              cursor: "default",
              transition: "transform 0.2s, box-shadow 0.2s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLDivElement).style.transform = "translateY(-4px)";
              (e.currentTarget as HTMLDivElement).style.boxShadow = "0 8px 24px rgba(251,191,36,0.4)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
              (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
            }}
          >
            {step}
          </div>
        ))}
      </div>
    </section>
  );
}
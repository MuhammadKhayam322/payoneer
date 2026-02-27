"use client";

import { ReactElement } from "react";

const topSteps = [
  "Define Requirement",
  "Architect Solution",
  "Design Interface",
  "Develop Functionality",
];

const bottomSteps = ["Testing", "Deliver", "Support"];

export default function DevelopmentProcess(): ReactElement {
  return (
    <section
      style={{
        background:
        "linear-gradient(135deg, #0a0a14 0%, #0d0f1a 50%, #080c18 100%)",
        padding: "60px 40px",
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

      {/* Top Row - 4 items */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "16px",
          maxWidth: "1000px",
          margin: "0 auto 16px",
        }}
      >
        {topSteps.map((step, i) => (
          <div
            key={i}
            style={{
              background: "linear-gradient(135deg, #f59e0b, #fbbf24)",
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

      {/* Bottom Row - 3 items centered */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "16px",
          maxWidth: "750px",
          margin: "0 auto",
          marginLeft: "calc((1000px - 750px) / 2 + 40px)",
        }}
      >
        {bottomSteps.map((step, i) => (
          <div
            key={i}
            style={{
              background: "linear-gradient(135deg, #f59e0b, #fbbf24)",
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
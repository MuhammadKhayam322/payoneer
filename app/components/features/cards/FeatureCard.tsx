// app/components/features/FeatureCard.tsx

"use client";

import React, { useState } from "react";
import { FeatureCardProps } from "../types";
import LearnMoreLink from "../LearnMoreLink";

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  tag,
  highlighted = false,
  visual,
}) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: highlighted ? "#f0f5ff" : "white",
        borderRadius: "16px",
        padding: "24px",
        border: `1px solid ${hovered ? "#cbd5e1" : highlighted ? "#c7d8f8" : "#e8edf2"}`,
        cursor: "pointer",
        transition: "transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease",
        transform: hovered ? "translateY(-3px)" : "translateY(0)",
        boxShadow: hovered ? "0 12px 32px rgba(0,0,0,0.08)" : "none",
        display: "flex",
        flexDirection: "column",
        minHeight: "240px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {tag && (
        <div
          style={{
            display: "inline-block",
            background: "#0052cc",
            color: "white",
            fontSize: "10px",
            fontWeight: 700,
            letterSpacing: "0.08em",
            padding: "3px 8px",
            borderRadius: "4px",
            marginBottom: "12px",
            width: "fit-content",
          }}
        >
          {tag}
        </div>
      )}

      <div
        style={{
          fontSize: "15px",
          fontWeight: 700,
          color: "#0f172a",
          marginBottom: "8px",
          letterSpacing: "-0.01em",
        }}
      >
        {title}
      </div>

      <div
        style={{
          fontSize: "12.5px",
          lineHeight: 1.6,
          color: "#64748b",
          flex: 1,
        }}
      >
        {description}
      </div>

      <div style={{ marginTop: "14px", display: "flex", flexDirection: "column", gap: "12px" }}>
        <LearnMoreLink />
        <div style={{ height: "90px" }}>{visual}</div>
      </div>
    </div>
  );
};

export default FeatureCard;
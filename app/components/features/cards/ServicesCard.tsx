// app/components/features/FeatureCard.tsx

"use client";

import React, { useState } from "react";
import { FeatureCardProps } from "../types";


const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
  highlighted = false,
  
  
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
      {/* Icon at the top */}
      {icon && (
        <div
          style={{
            width: "48px",
            height: "48px",
            borderRadius: "12px",
            background: "#EFF6FF",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "16px",
            color: "#2563EB",
            flexShrink: 0,
          }}
        >
          {icon}
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

     
    </div>
  );
};

export default FeatureCard;
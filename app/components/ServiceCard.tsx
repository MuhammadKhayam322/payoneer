// components/ServiceCard.tsx
"use client";

import { ReactElement } from "react";
import { useRouter } from "next/navigation";

interface ServiceCardProps {
  icon: ReactElement;
  title: string;
  description: string;
  color: string;
}

export default function ServiceCard({ icon, title, description, color }: ServiceCardProps) {
  const router = useRouter();

  return (
    <div
      style={{
        background: color,
        borderRadius: "16px",
        padding: "32px 24px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        transition: "transform 0.2s, box-shadow 0.2s",
        cursor: "default",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.transform = "translateY(-4px)";
        (e.currentTarget as HTMLDivElement).style.boxShadow = "0 12px 32px rgba(0,0,0,0.4)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
        (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
      }}
    >
      <div style={{ marginBottom: "16px" }}>{icon}</div>

      <h3 style={{ fontSize: "16px", fontWeight: "700", color: "#ffffff", marginBottom: "12px", lineHeight: 1.3 }}>
        {title}
      </h3>

      <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.8)", lineHeight: 1.7, marginBottom: "24px", flexGrow: 1 }}>
        {description}
      </p>

      <button
        onClick={() => router.push("/contact")}
        style={{
          background: "white",
          color: color,
          border: "none",
          borderRadius: "8px",
          padding: "10px 32px",
          fontSize: "14px",
          fontWeight: "600",
          cursor: "pointer",
          width: "100%",
          transition: "opacity 0.2s",
        }}
        onMouseEnter={(e) => ((e.currentTarget as HTMLButtonElement).style.opacity = "0.85")}
        onMouseLeave={(e) => ((e.currentTarget as HTMLButtonElement).style.opacity = "1")}
      >
        Get Started
      </button>
    </div>
  );
}
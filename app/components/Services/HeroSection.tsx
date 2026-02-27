"use client";

import { ReactElement } from "react";
import { useRouter } from "next/navigation";

interface HeroSectionProps {
  title: string;
  description: string;
  readMoreLink?: string;
  getStartedLink?: string;
}

export default function HeroSection({
  title,
  description,
  readMoreLink = "/",
  getStartedLink = "/contact",
}: HeroSectionProps): ReactElement {
  const router = useRouter();

  return (
    <section
      style={{
         background:
          "linear-gradient(135deg, #0a0a14 0%, #0d0f1a 50%, #080c18 100%)",
        minHeight: "420px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "80px 24px",
        fontFamily: "'Helvetica Neue', Arial, sans-serif",
        position: "relative",
        overflow: "hidden",
      }}
    >
    

      {/* Content */}
      <div style={{ position: "relative", zIndex: 1, maxWidth: "780px" }}>
        <h1
          style={{
            fontSize: "clamp(32px, 5vw, 58px)",
            fontWeight: "800",
            color: "#ffffff",
            lineHeight: 1.2,
            marginBottom: "24px",
            letterSpacing: "-0.5px",
          }}
        >
          {title}
        </h1>

        <p
          style={{
            fontSize: "clamp(15px, 2vw, 18px)",
            color: "rgba(255,255,255,0.75)",
            lineHeight: 1.7,
            marginBottom: "40px",
            maxWidth: "560px",
            margin: "0 auto 40px",
          }}
        >
          {description}
        </p>

        <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
          {/* Read More Button */}
          <button
            onClick={() => router.push(readMoreLink)}
            style={{
              background: "#2563eb",
              color: "#ffffff",
              border: "none",
              borderRadius: "6px",
              padding: "12px 28px",
              fontSize: "15px",
              fontWeight: "600",
              cursor: "pointer",
              transition: "background 0.2s",
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLButtonElement).style.background = "#1d4ed8")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLButtonElement).style.background = "#2563eb")}
          >
            Read More
          </button>

          {/* Get Started Button */}
          <button
            onClick={() => router.push(getStartedLink)}
            style={{
              background: "transparent",
              color: "#ffffff",
              border: "2px solid rgba(255,255,255,0.6)",
              borderRadius: "6px",
              padding: "12px 28px",
              fontSize: "15px",
              fontWeight: "600",
              cursor: "pointer",
              transition: "border-color 0.2s, background 0.2s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.borderColor = "#ffffff";
              (e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.08)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(255,255,255,0.6)";
              (e.currentTarget as HTMLButtonElement).style.background = "transparent";
            }}
          >
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
}
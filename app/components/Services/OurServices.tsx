"use client";

import { ReactElement } from "react";

export default function OurServices(): ReactElement {
  return (
    <section
      style={{
         background:
          "linear-gradient(135deg, #0a0a14 0%, #0d0f1a 50%, #080c18 100%)",
        padding: "120px 40px 80px",
        fontFamily: "'Helvetica Neue', Arial, sans-serif",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Top-right teal blob */}
      <div
        style={{
          position: "absolute",
          top: "-30px",
          right: "-60px",
          width: "200px",
          height: "200px",
          borderRadius: "50%",
          background: "linear-gradient(135deg, #06b6d4, #3b82f6)",
          filter: "blur(60px)",
          opacity: 0.35,
          pointerEvents: "none",
        }}
      />

      {/* Bottom-left red/pink blob */}
      <div
        style={{
          position: "absolute",
          bottom: "40px",
          left: "-60px",
          width: "180px",
          height: "180px",
          borderRadius: "50%",
          background: "linear-gradient(135deg, #f43f5e, #ec4899)",
          filter: "blur(55px)",
          opacity: 0.3,
          pointerEvents: "none",
        }}
      />

      {/* ── TEXT BLOCK ── */}
      <div
        style={{
          textAlign: "center",
          maxWidth: "640px",
          margin: "0 auto 40px",
        }}
      >
        <h2
          style={{
            fontSize: "clamp(26px, 3.5vw, 44px)",
            fontWeight: "700",
            color: "#f7f3f3",
            marginBottom: "18px",
            letterSpacing: "-0.4px",
            lineHeight: 1.15,
          }}
        >
          Our Services
        </h2>
        <p
          style={{
            fontSize: "15px",
            color: "#eef1f5",
            lineHeight: 1.75,
            maxWidth: "520px",
            margin: "0 auto 32px",
          }}
        >
          At BrandRaize, we're passionate about creating innovative digital
          solutions that help businesses thrive in the modern world.
        </p>

        {/* CTA */}
        <button
          style={{
            background: "#f8f3f3",
            color: "#0a0202",
            border: "none",
            borderRadius: "50px",
            padding: "16px 36px",
            fontSize: "15px",
            fontWeight: "600",
            cursor: "pointer",
            letterSpacing: "0.2px",
            transition: "background 0.2s",
          }}
          onMouseEnter={(e) =>
            ((e.target as HTMLButtonElement).style.background = "#333")
          }
          onMouseLeave={(e) =>
            ((e.target as HTMLButtonElement).style.background = "#111")
          }
        >
          Explore Services
        </button>
      </div>
    </section>
  );
}


  

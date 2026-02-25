"use client";
import React, { useRef } from "react";

export default function AboutPayoneer() {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <section
      style={{
        position: "relative",
        width: "100%",
        minHeight: "420px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        fontFamily: "'Segoe UI', Arial, sans-serif",
      }}
    >
      {/* ── BACKGROUND VIDEO ── */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 0,
        }}
        src="/Freelancer-video.mp4"
      />

     
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(120deg, rgba(140,60,180,0.78) 0%, rgba(100,60,200,0.72) 35%, rgba(60,100,210,0.70) 65%, rgba(40,140,220,0.68) 100%)",
          zIndex: 1,
        }}
      />

 
      <div
        style={{
          position: "relative",
          zIndex: 2,
          textAlign: "center",
          color: "#fff",
          maxWidth: "680px",
          padding: "80px 28px",
        }}
      >
        <h1
          style={{
            fontSize: "clamp(28px, 4vw, 46px)",
            fontWeight: 800,
            marginBottom: "24px",
            letterSpacing: "-0.5px",
            lineHeight: 1.2,
            textShadow: "0 2px 12px rgba(0,0,0,0.25)",
          }}
        >
          About Payoneer
        </h1>

        <p
          style={{
            fontSize: "clamp(15px, 2vw, 18px)",
            lineHeight: 1.75,
            marginBottom: "40px",
            color: "rgba(255,255,255,0.93)",
            textShadow: "0 1px 6px rgba(0,0,0,0.20)",
            maxWidth: "580px",
            margin: "0 auto 40px",
          }}
        >
          Our story began with a vision: to democratize access to global
          commerce for businesses of any size in any location. Since 2005,
          we&apos;ve powered the growth of millions of small and medium
          businesses and built a financial platform that connects the world.
        </p>

        <a
          href="#"
          style={{
            display: "inline-block",
            backgroundColor: "#fff",
            color: "#1a1a2e",
            fontSize: "16px",
            fontWeight: 600,
            padding: "14px 44px",
            borderRadius: "50px",
            textDecoration: "none",
            boxShadow: "0 4px 20px rgba(0,0,0,0.18)",
            letterSpacing: "0.1px",
            transition: "opacity 0.2s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.9")}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
        >
          Register now
        </a>
      </div>
    </section>
  );
}
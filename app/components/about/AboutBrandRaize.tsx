"use client";
import React, { useRef } from "react";

export default function About() {
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
          "linear-gradient(135deg, #0a0a14 0%, #0d0f1a 50%, #080c18 100%)",
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
          About BrandRaize
        </h1>

        <h1
          style={{
            fontSize: "clamp(25px, 2vw, 18px)",
            lineHeight: 1.75,
            marginBottom: "40px",
            color: "rgba(255,255,255,0.93)",
            textShadow: "0 1px 6px rgba(0,0,0,0.20)",
            maxWidth: "580px",
            margin: "0 auto 40px",
          }}
        >
          Elevating brands above the noise with creativity, technology, and
          strategy.
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
          We believe the future of business lies at the intersection of
          innovation and creativity. From startups to enterprises, BrandRaize
          helps brands redefine how they connect, grow, and succeed in a
          digital-first world.
        </p>
      </div>
    </section>
  );
}

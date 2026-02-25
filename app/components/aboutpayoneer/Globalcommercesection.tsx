"use client";
import React, { useState } from "react";

export default function GlobalCommerceSection() {
  const [playing, setPlaying] = useState(false);

  return (
    <section
      style={{
        padding: "64px 48px",
        borderRadius: "24px",
        maxWidth: "1100px",
        margin: "40px auto",
        display: "flex",
        alignItems: "center",
        gap: "72px",
        flexWrap: "wrap",
        fontFamily: "'Segoe UI', Arial, sans-serif",
        boxSizing: "border-box",
      }}
    >
      {/* ── LEFT: Text ── */}
      <div style={{ flex: "1 1 320px", minWidth: "260px" }}>
        <h2
          style={{
            fontSize: "clamp(26px, 3.5vw, 38px)",
            fontWeight: 800,
            color: "#1a1a2e",
            lineHeight: 1.25,
            marginBottom: "28px",
            letterSpacing: "-0.5px",
          }}
        >
          We make global<br />commerce local
        </h2>
        <p
          style={{
            fontSize: "15px",
            color: "#444",
            lineHeight: 1.85,
            maxWidth: "420px",
          }}
        >
          Today, the world is your market where anyone anywhere can pay you and
          you can pay them. And you know you&apos;re open to cross-border trade
          when you see opportunities, not obstacles. With a Payoneer account,
          you can manage your business in multiple currencies, target new markets
          and international opportunities, and access working capital to drive
          your global growth.
        </p>
      </div>

      {/* ── RIGHT: Video card ── */}
      <div
        style={{
          flex: "1 1 340px",
          minWidth: "280px",
          maxWidth: "460px",
          position: "relative",
          borderRadius: "16px",
          overflow: "hidden",
          boxShadow: "0 8px 40px rgba(80,80,160,0.13)",
          cursor: "pointer",
          aspectRatio: "16/10",
          background: "#1a1a2e",
        }}
        onClick={() => setPlaying(true)}
      >
        {!playing ? (
          <>
            {/* Thumbnail image */}
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80"
              alt="Welcome to the open ecommerce era"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
                transition: "transform 0.3s",
              }}
            />

            {/* Dark overlay */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "rgba(0,0,0,0.15)",
              }}
            />

            {/* Play button */}
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: "52px",
                height: "52px",
                borderRadius: "50%",
                backgroundColor: "#fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 4px 18px rgba(0,0,0,0.22)",
              }}
            >
              {/* Triangle play icon */}
              <svg width="18" height="18" viewBox="0 0 24 24" fill="#e84040">
                <polygon points="5,3 19,12 5,21" />
              </svg>
            </div>

            {/* Caption bar */}
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                padding: "12px 16px",
                background: "linear-gradient(transparent, rgba(0,0,0,0.55))",
              }}
            >
              <p style={{ color: "#fff", fontSize: "14px", fontWeight: 500, margin: 0 }}>
                Welcome to the open ecommerce era
              </p>
            </div>
          </>
        ) : (
        
          <video
            autoPlay
            controls
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            src="/marketplace-video.mp4"
          />
        )}
      </div>
    </section>
  );
}
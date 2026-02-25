import React from "react";

export default function GetStartedSection() {
  return (
    <section
      style={{
        position: "relative",
        background:
          "radial-gradient(ellipse at 70% 50%, #0d5c4a 0%, #0a3d30 30%, #000 60%), radial-gradient(ellipse at 30% 80%, #3a1a5c 0%, #000 50%)",
        backgroundColor: "#000",
        padding: "72px 24px",
        textAlign: "center",
        overflow: "hidden",
      }}
    >
      {/* purple glow bottom-left */}
      <div
        style={{
          position: "absolute",
          bottom: "-60px",
          left: "10%",
          width: "350px",
          height: "200px",
          background: "radial-gradient(ellipse, rgba(100,40,160,0.5) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      {/* teal glow right */}
      <div
        style={{
          position: "absolute",
          top: "0",
          right: "10%",
          width: "400px",
          height: "250px",
          background: "radial-gradient(ellipse, rgba(0,120,90,0.45) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* Content */}
      <div style={{ position: "relative", zIndex: 1 }}>
        <h2
          style={{
            fontSize: "clamp(20px, 3vw, 28px)",
            fontWeight: 700,
            color: "#fff",
            marginBottom: "16px",
          }}
        >
          Get started now
        </h2>
        <p
          style={{
            fontSize: "15px",
            color: "rgba(255,255,255,0.75)",
            lineHeight: 1.7,
            maxWidth: "340px",
            margin: "0 auto 36px",
          }}
        >
          Speak to one of our experts to find a solution that helps you grow
          your business.
        </p>

        <a
          href="#"
          style={{
            display: "inline-block",
            background: "linear-gradient(135deg, #7c4ddb, #5c35b0)",
            color: "#fff",
            fontSize: "15px",
            fontWeight: 600,
            padding: "14px 36px",
            borderRadius: "50px",
            textDecoration: "none",
            boxShadow: "0 4px 24px rgba(100,60,200,0.45)",
            letterSpacing: "0.3px",
          }}
        >
          Contact Sales
        </a>
      </div>

      {/* Bottom multicolor bar */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "3px",
          background:
            "linear-gradient(to right, #e84040, #e040e8, #4060e8, #40a0e8, #40c8c8, #40c840)",
        }}
      />
    </section>
  );
}
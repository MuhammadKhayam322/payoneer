"use client";

import Image from "next/image";

export default function PayoneerHero() {
  return (
    <section
      style={{
        background:
          "linear-gradient(135deg, #f0f4ff 0%, #fce4ec 50%, #fff 100%)",
        minHeight: "420px",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        position: "relative",
        padding: "40px 80px",
        fontFamily: "'Helvetica Neue', Arial, sans-serif",
      }}
    >
      {/* Background blur blobs */}
      <div
        style={{
          position: "absolute",
          bottom: "-60px",
          left: "-40px",
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          background: "linear-gradient(135deg, #e8eaf6, #f3e5f5)",
          filter: "blur(60px)",
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "-40px",
          right: "-20px",
          width: "220px",
          height: "220px",
          borderRadius: "50%",
          background: "linear-gradient(135deg, #ff6b6b, #ff8e53)",
          filter: "blur(60px)",
          opacity: 0.35,
          zIndex: 0,
        }}
      />

      {/* Left content */}
      <div style={{ flex: 1, zIndex: 1, maxWidth: "520px" }}>
        <h1
          style={{
            fontSize: "clamp(48px, 3.5vw, 44px)",
            fontWeight: "400",
            color: "#1a1a1a",
            lineHeight: 1.15,
            marginBottom: "20px",
            letterSpacing: "-0.5px",
          }}
        >
          The global account for
          <br />
          freelance businesses
        </h1>

        <p
          style={{
            fontSize: "15px",
            color: "#555",
            lineHeight: 1.7,
            maxWidth: "400px",
            marginBottom: "36px",
          }}
        >
          A Payoneer account is the quick, secure, and reliable way to get paid
          by clients and freelance marketplaces. Make payments from your
          Payoneer account or withdraw earnings locally with just a few clicks.
        </p>

        <button
          style={{
            background: "#111",
            color: "#fff",
            border: "none",
            borderRadius: "50px",
            padding: "16px 36px",
            fontSize: "15px",
            fontWeight: "700",
            cursor: "pointer",
            letterSpacing: "0.3px",
            transition: "background 0.2s",
          }}
          onMouseEnter={(e) => ((e.target as HTMLElement).style.background = "#333")}
          onMouseLeave={(e) => ((e.target as HTMLElement).style.background = "#111")}
        >
          Sign up now
        </button>
      </div>

      {/* Right image / illustration */}
      <div
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Outer large circle */}
        <div
          style={{
            width: "360px",
            height: "360px",
            borderRadius: "50%",
            background: "rgba(255,255,255,0.4)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
          }}
        >
          {/* Inner circle with gradient */}
          <div
            style={{
              width: "280px",
              height: "280px",
              borderRadius: "50%",
              background: "linear-gradient(160deg, #f48fb1 0%, #ce93d8 100%)",
              overflow: "hidden",
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "center",
            }}
          >
            {/*
              Replace the src below with your actual image path, e.g.:
              <Image src="/freelancer.png" alt="Freelancer" width={280} height={280} style={{ objectFit: "cover" }} />
            */}
            <div
              style={{
                width: "100%",
                height: "100%",
                background: "linear-gradient(160deg, #f8bbd0 0%, #ce93d8 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "rgba(255,255,255,0.6)",
                fontSize: "13px",
                textAlign: "center",
                padding: "20px",
              }}
            >
              {/* Swap this div for <Image /> with your freelancer photo */}
              Place freelancer image here
            </div>
          </div>

          {/* Red dot top-left */}
          <div
            style={{
              position: "absolute",
              top: "40px",
              left: "60px",
              width: "14px",
              height: "14px",
              borderRadius: "50%",
              background: "#e53935",
            }}
          />

          {/* Teal dot bottom-right */}
          <div
            style={{
              position: "absolute",
              bottom: "60px",
              right: "20px",
              width: "18px",
              height: "18px",
              borderRadius: "50%",
              background: "#00bfa5",
            }}
          />

          {/* Person icon badge top-right */}
          <div
            style={{
              position: "absolute",
              top: "60px",
              right: "10px",
              width: "44px",
              height: "44px",
              borderRadius: "50%",
              background: "#fff",
              boxShadow: "0 2px 12px rgba(0,0,0,0.12)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "18px",
            }}
          >
            👤
          </div>
        </div>
      </div>
    </section>
  );
}
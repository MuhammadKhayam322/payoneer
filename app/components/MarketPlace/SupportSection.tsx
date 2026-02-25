import React from "react";

const supportLinks = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
    title: "Get online support",
    href: "#",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18M9 21V9" />
      </svg>
    ),
    title: "How-to videos and guides",
    href: "#",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="9" cy="7" r="4" />
        <path d="M3 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        <path d="M21 21v-2a4 4 0 0 0-3-3.87" />
      </svg>
    ),
    title: "Payoneer Community",
    href: "#",
  },
];

export default function SupportSection() {
  return (
    <section
      style={{
        fontFamily: "'Segoe UI', sans-serif",
        backgroundColor: "#f9f9fb",
        padding: "64px 24px 80px",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background decorative circles */}
      <div
        style={{
          position: "absolute",
          top: "-80px",
          left: "-80px",
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          border: "1px solid #e0e0e8",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-100px",
          right: "-100px",
          width: "350px",
          height: "350px",
          borderRadius: "50%",
          border: "1px solid #e0e0e8",
          pointerEvents: "none",
        }}
      />

      {/* Heading */}
      <h2
        style={{
          fontSize: "clamp(24px, 4vw, 36px)",
          fontWeight: 700,
          color: "#1a1a2e",
          marginBottom: "12px",
        }}
      >
        Support when you need it
      </h2>

      {/* Divider line */}
      <div
        style={{
          width: "40px",
          height: "2px",
          backgroundColor: "#6b7280",
          margin: "0 auto 20px",
        }}
      />

      {/* Subtitle */}
      <p
        style={{
          fontSize: "15px",
          color: "#555",
          maxWidth: "420px",
          margin: "0 auto 56px",
          lineHeight: 1.7,
        }}
      >
        When you need help, you want it fast and from a real person. Our
        international teams are on hand to answer all your questions in 22+
        languages.
      </p>

      {/* Multicolor divider bar */}
      <div
        style={{
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "32px",
        }}
      >
        {/* Full-width gradient bar */}
        <div
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            height: "2px",
            background:
              "linear-gradient(to right, #e84040, #e84040 15%, #e040e8 25%, #4060e8 40%, #40a0e8 55%, #40c8c8 70%, #40c840 85%, #40c840)",
          }}
        />

        {/* Icons on the bar */}
        <div
          style={{
            position: "relative",
            display: "flex",
            justifyContent: "space-around",
            width: "100%",
            maxWidth: "700px",
          }}
        >
          {supportLinks.map((item, i) => (
            <div
              key={i}
              style={{
                backgroundColor: "#f9f9fb",
                padding: "0 12px",
                color: "#555",
              }}
            >
              {item.icon}
            </div>
          ))}
        </div>
      </div>

      {/* Cards row */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "48px",
          flexWrap: "wrap",
          maxWidth: "800px",
          margin: "0 auto",
        }}
      >
        {supportLinks.map((item, i) => (
          <div
            key={i}
            style={{
              textAlign: "center",
              minWidth: "160px",
            }}
          >
            <p
              style={{
                fontSize: "15px",
                fontWeight: 600,
                color: "#1a1a2e",
                marginBottom: "8px",
              }}
            >
              {item.title}
            </p>
            <a
              href={item.href}
              style={{
                fontSize: "14px",
                color: "#1a4dd8",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: "4px",
                fontWeight: 500,
              }}
            >
              Take me there{" "}
              <span style={{ fontSize: "16px" }}>→</span>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
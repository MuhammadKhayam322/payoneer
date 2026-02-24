"use client";

import { useRef } from "react";

const customers = [
  {
    id: "freelancers",
    title: "Freelancers",
    description:
      "Freelance opportunities are everywhere, so you need a payments solution that is truly global. Our Payoneer account lets you save time and effort as you get paid, make payments, access earnings, and manage your money.",
    video: "freelancer-video.mp4",
    imageAlt: "Freelancer working on laptop",
  },
  {
    id: "businesses",
    title: "Businesses",
    description:
      "Global means global, so we break down the borders and barriers of international payments for businesses. Pay suppliers, contractors, and service providers in multiple currencies.",
    video: "/business-video.mp4",
    imageAlt: "Business people collaborating",
  },
  {
    id: "marketplaces",
    title: "Marketplaces",
    description:
      "While you're looking after your sellers, we're taking care of all your international payments needs. Reach new markets with ease and lead your way with advanced infrastructure.",
    video: "/marketplace-video.mp4",
    imageAlt: "Marketplace seller with products",
  },
];

export default function WhoAreOurCustomers() {
  return (
    <section
      style={{
        background: "#ffffff",
        padding: "80px 40px",
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      {/* Google Font */}
      <link
        href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600&display=swap"
        rel="stylesheet"
      />

      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: "64px" }}>
        <h2
          style={{
            fontSize: "clamp(22px, 3vw, 30px)",
            fontWeight: 600,
            color: "#111",
            marginBottom: "14px",
          }}
        >
          Who are our customers?
        </h2>

        <div
          style={{
            width: "40px",
            height: "3px",
            background: "#4F46E5",
            margin: "0 auto",
            borderRadius: "2px",
          }}
        />
      </div>

      {/* Rows */}
      <div
        style={{
          maxWidth: "860px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: "48px",
        }}
      >
        {customers.map((customer, index) => (
          <CustomerRow key={customer.id} customer={customer} index={index} />
        ))}
      </div>
    </section>
  );
}

function CustomerRow({
  customer,
  index,
}: {
  customer: (typeof customers)[0];
  index: number;
}) {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const playVideo = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
    }
  };

  const stopVideo = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  const imageOnLeft = index % 2 === 0;

  const videoBlock = (
    <div
      onMouseEnter={playVideo}
      onMouseLeave={stopVideo}
      style={{
        flex: "1",
        position: "relative",
        borderRadius: "12px",
        overflow: "hidden",
        minHeight: "240px",
        background: "#000",
        cursor: "pointer",
      }}
    >
      <video
        ref={videoRef}
        src={customer.video}
        muted
        loop
        playsInline
        preload="metadata"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />

      {/* Dark Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(0,0,0,0.2)",
        }}
      />

      {/* Play Button */}
      <div
        style={{
          position: "absolute",
          bottom: "16px",
          right: "16px",
          width: "42px",
          height: "42px",
          borderRadius: "50%",
          background: "rgba(255,255,255,0.18)",
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(255,255,255,0.4)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          pointerEvents: "none",
        }}
      >
        <svg width="14" height="14" viewBox="0 0 12 12" fill="none">
          <path d="M3 2l7 4-7 4V2z" fill="white" />
        </svg>
      </div>
    </div>
  );

  const textBlock = (
    <div
      style={{
        flex: "1",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <h3 style={{ fontSize: "22px", fontWeight: 600, marginBottom: "14px" }}>
        {customer.title}
      </h3>

      <p
        style={{
          fontSize: "14px",
          color: "#555",
          lineHeight: "1.7",
          marginBottom: "24px",
          maxWidth: "360px",
        }}
      >
        {customer.description}
      </p>

      <button
        style={{
          padding: "10px 22px",
          background: "#111",
          color: "#fff",
          border: "none",
          borderRadius: "6px",
          fontSize: "13px",
          cursor: "pointer",
          width: "fit-content",
        }}
      >
        Explore more →
      </button>
    </div>
  );

  return (
    <div
      style={{
        display: "flex",
        gap: "48px",
        alignItems: "center",
        flexDirection: imageOnLeft ? "row" : "row-reverse",
      }}
    >
      {videoBlock}
      {textBlock}
    </div>
  );
}
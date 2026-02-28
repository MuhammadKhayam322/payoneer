"use client";

import { useState, useEffect, ReactElement } from "react";

function useWindowWidth() {
  const [width, setWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1200
  );
  useEffect(() => {
    const handler = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);
  return width;
}

export default function ContactPage(): ReactElement {
  const width = useWindowWidth();
  const isMobile = width < 480;
  const isTablet = width >= 480 && width < 768;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
  };

  const inputStyle = {
    width: "100%",
    background: "rgba(255,255,255,0.07)",
    border: "1px solid rgba(255,255,255,0.15)",
    borderRadius: "8px",
    padding: "14px 16px",
    fontSize: "14px",
    color: "#ffffff",
    outline: "none",
    boxSizing: "border-box" as const,
    transition: "border-color 0.2s",
    fontFamily: "'Helvetica Neue', Arial, sans-serif",
  };

  const labelStyle = {
    fontSize: "13px",
    color: "rgba(255,255,255,0.75)",
    marginBottom: "8px",
    display: "block",
    fontFamily: "'Helvetica Neue', Arial, sans-serif",
  };

  const infoCards = [
    {
      title: "Address",
      value: "Al Sawadi, Riyadh, Saudi Arabia",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      ),
    },
    {
      title: "Phone",
      value: "+966551981751",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.26h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.74a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 16z" />
        </svg>
      ),
    },
    {
      title: "Email",
      value: "brandraize1@gmail.com",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <polyline points="22,6 12,13 2,6" />
        </svg>
      ),
    },
  ];

  return (
    <section
      style={{
        background:
          "linear-gradient(135deg, #0a0a14 0%, #0d0f1a 50%, #080c18 100%)",
        minHeight: "100vh",
        padding: isMobile ? "40px 16px" : isTablet ? "50px 20px" : "60px 24px",
        fontFamily: "'Helvetica Neue', Arial, sans-serif",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div style={{ position: "relative", zIndex: 1, maxWidth: "1000px", margin: "0 auto" }}>

        {/* Info Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : isTablet ? "repeat(2, 1fr)" : "repeat(3, 1fr)",
            gap: "20px",
            marginBottom: "48px",
          }}
        >
          {infoCards.map((card, i) => (
            <div
              key={i}
              style={{
                background: "rgba(255,255,255,0.07)",
                border: "1px solid rgba(255,255,255,0.12)",
                borderRadius: "12px",
                padding: "28px 24px",
                textAlign: "center",
              }}
            >
              <div style={{ marginBottom: "12px" }}>{card.icon}</div>
              <h3 style={{ fontSize: "16px", fontWeight: "700", color: "#ffffff", marginBottom: "8px" }}>
                {card.title}
              </h3>
              <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.65)", lineHeight: 1.6 }}>
                {card.value}
              </p>
            </div>
          ))}
        </div>

        {/* Form Card */}
        <div
          style={{
            background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: "16px",
            padding: isMobile ? "28px 20px" : isTablet ? "36px 28px" : "48px 40px",
          }}
        >
          <h2
            style={{
              fontSize: "22px",
              fontWeight: "700",
              color: "#ffffff",
              textAlign: "center",
              marginBottom: "36px",
            }}
          >
            Send Us a Message
          </h2>

          {/* Name + Email Row */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
              gap: "20px",
              marginBottom: "20px",
            }}
          >
            <div>
              <label style={labelStyle}>Your Name</label>
              <input
                name="name"
                type="text"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleChange}
                style={inputStyle}
                onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.4)")}
                onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)")}
              />
            </div>
            <div>
              <label style={labelStyle}>Your Email</label>
              <input
                name="email"
                type="email"
                placeholder="Enter your email address"
                value={formData.email}
                onChange={handleChange}
                style={inputStyle}
                onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.4)")}
                onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)")}
              />
            </div>
          </div>

          {/* Subject */}
          <div style={{ marginBottom: "20px" }}>
            <label style={labelStyle}>Subject</label>
            <input
              name="subject"
              type="text"
              placeholder="Enter the subject"
              value={formData.subject}
              onChange={handleChange}
              style={inputStyle}
              onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.4)")}
              onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)")}
            />
          </div>

          {/* Message */}
          <div style={{ marginBottom: "28px" }}>
            <label style={labelStyle}>Your Message</label>
            <textarea
              name="message"
              placeholder="Write your message here"
              value={formData.message}
              onChange={handleChange}
              rows={7}
              style={{ ...inputStyle, resize: "vertical" }}
              onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.4)")}
              onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)")}
            />
          </div>

          {/* Submit Button */}
          <button
            onClick={handleSubmit}
            style={{
              width: "100%",
              background: "rgba(255,255,255,0.1)",
              border: "1px solid rgba(255,255,255,0.2)",
              borderRadius: "8px",
              padding: "14px",
              fontSize: "15px",
              fontWeight: "600",
              color: "#ffffff",
              cursor: "pointer",
              transition: "background 0.2s, border-color 0.2s",
              fontFamily: "'Helvetica Neue', Arial, sans-serif",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.18)";
              (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(255,255,255,0.4)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.1)";
              (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(255,255,255,0.2)";
            }}
          >
            Send Message
          </button>
        </div>
      </div>
    </section>
  );
}
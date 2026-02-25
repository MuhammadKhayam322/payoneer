"use client";

import { ReactElement, useEffect, useRef } from "react";

export default function GoGlobal(): ReactElement {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const W = canvas.width;
    const H = canvas.height;
    const cx = W / 2;
    const cy = H / 2;

    // Ellipse orbit params
    const rx = 220; // x-radius of orbit
    const ry = 45;  // y-radius (flat ellipse)

    // Dots along the orbit
    const dots: { t: number; color: string; r: number; speed: number }[] = [
      { t: 0,    color: "#f43f5e", r: 5,  speed: 0.004 },
      { t: 1.0,  color: "#06b6d4", r: 4,  speed: 0.004 },
      { t: 2.1,  color: "#a855f7", r: 3,  speed: 0.004 },
      { t: 3.5,  color: "#22c55e", r: 3,  speed: 0.004 },
      { t: 4.8,  color: "#f97316", r: 3,  speed: 0.004 },
    ];

    let animId: number;

    function draw() {
      if (!ctx) return;
      ctx.clearRect(0, 0, W, H);

      // Draw the ellipse orbit line (light grey dashed)
      ctx.save();
      ctx.strokeStyle = "rgba(180,180,200,0.35)";
      ctx.lineWidth = 1.2;
      ctx.setLineDash([6, 6]);
      ctx.beginPath();
      ctx.ellipse(cx, cy, rx, ry, 0, 0, Math.PI * 2);
      ctx.stroke();
      ctx.restore();

      // Draw center rainbow ring (static)
      const ringX = cx;
      const ringY = cy - 10;
      const ringR = 28;
      const colors = ["#f43f5e", "#f97316", "#eab308", "#22c55e", "#3b82f6", "#a855f7", "#ec4899"];
      colors.forEach((color, i) => {
        const startAngle = (i / colors.length) * Math.PI * 2 - Math.PI / 2;
        const endAngle   = ((i + 1) / colors.length) * Math.PI * 2 - Math.PI / 2;
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(ringX, ringY, ringR, startAngle, endAngle);
        ctx.strokeStyle = color;
        ctx.lineWidth = 5;
        ctx.lineCap = "round";
        ctx.stroke();
      });

      // Update & draw orbit dots
      dots.forEach((dot) => {
        dot.t += dot.speed;
        const x = cx + rx * Math.cos(dot.t);
        const y = cy + ry * Math.sin(dot.t);
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(x, y, dot.r, 0, Math.PI * 2);
        ctx.fillStyle = dot.color;
        ctx.fill();
      });

      animId = requestAnimationFrame(draw);
    }

    draw();
    return () => cancelAnimationFrame(animId);
  }, []);

  return (
    <section
      style={{
        background: "#ffffff",
        padding: "70px 40px 80px",
        fontFamily: "'Helvetica Neue', Arial, sans-serif",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Heading */}
      <h2
        style={{
          fontSize: "clamp(28px, 4vw, 44px)",
          fontWeight: "700",
          color: "#1a1a1a",
          marginBottom: "16px",
          letterSpacing: "-0.4px",
          textAlign: "center",
        }}
      >
        Go global
      </h2>

      {/* Subtitle */}
      <p
        style={{
          fontSize: "14px",
          color: "#6b7280",
          lineHeight: 1.75,
          maxWidth: "420px",
          textAlign: "center",
          marginBottom: "10px",
        }}
      >
        We support payments in 190+ countries and territories and handle 70 currencies
        — that&apos;s a lot more than many other payment providers. Explore our globe to
        discover all the services we offer businesses around the world.
      </p>

      {/* Globe / canvas area */}
      <div style={{ position: "relative", width: "600px", height: "260px" }}>
        <canvas
          ref={canvasRef}
          width={600}
          height={260}
          style={{ position: "absolute", top: 0, left: 0 }}
        />

        {/* User pin 1 — bottom left */}
        <div
          style={{
            position: "absolute",
            bottom: "20px",
            left: "80px",
            display: "flex",
            alignItems: "center",
            gap: "8px",
            background: "#fff",
            borderRadius: "50px",
            padding: "6px 14px 6px 6px",
            boxShadow: "0 4px 18px rgba(0,0,0,0.12)",
            zIndex: 10,
          }}
        >
          {/* Avatar */}
          <div
            style={{
              width: "38px",
              height: "38px",
              borderRadius: "50%",
              background: "linear-gradient(135deg,#fce4ec,#e8eaf6)",
              overflow: "hidden",
              flexShrink: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="#c4b5d0">
              <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
            </svg>
          </div>

          {/* Amount info */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.5">
                <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                <polyline points="17 6 23 6 23 12" />
              </svg>
              <span style={{ fontSize: "13px", fontWeight: "700", color: "#1a1a1a" }}>1,200 USD</span>
            </div>
            <span style={{ fontSize: "11px", color: "#9ca3af" }}>Paid</span>
          </div>
        </div>

        {/* User pin 2 — right side */}
        <div
          style={{
            position: "absolute",
            top: "90px",
            right: "30px",
            display: "flex",
            alignItems: "center",
            gap: "8px",
            background: "#fff",
            borderRadius: "50px",
            padding: "6px 14px 6px 6px",
            boxShadow: "0 4px 18px rgba(0,0,0,0.12)",
            zIndex: 10,
          }}
        >
          {/* Avatar */}
          <div
            style={{
              width: "34px",
              height: "34px",
              borderRadius: "50%",
              background: "linear-gradient(135deg,#e0f7fa,#e8eaf6)",
              overflow: "hidden",
              flexShrink: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="#90caf9">
              <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
            </svg>
          </div>

          {/* Name tag */}
          <div>
            <span style={{ fontSize: "12px", fontWeight: "600", color: "#1a1a1a", display: "block" }}>Qirim ulla</span>
            <span style={{ fontSize: "10px", color: "#9ca3af" }}>Freelancer</span>
          </div>
        </div>

        {/* Faint blobs for depth */}
        <div
          style={{
            position: "absolute",
            left: "10px",
            top: "80px",
            width: "80px",
            height: "80px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(168,85,247,0.12) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            right: "10px",
            bottom: "20px",
            width: "100px",
            height: "100px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(6,182,212,0.12) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
      </div>
    </section>
  );
}
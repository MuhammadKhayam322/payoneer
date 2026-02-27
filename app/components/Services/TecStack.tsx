"use client";

import React, { useState, useEffect } from "react";

// ─── Seeded stars (no hydration mismatch) ────────────────────────────────────
interface Star { width: number; height: number; top: number; left: number; opacity: number; }
function seededRand(seed: number): number {
  const x = Math.sin(seed + 1) * 10000;
  return x - Math.floor(x);
}
const STARS: Star[] = Array.from({ length: 80 }, (_, i) => ({
  width:   seededRand(i * 5 + 1) * 2 + 1,
  height:  seededRand(i * 5 + 2) * 2 + 1,
  top:     seededRand(i * 5 + 3) * 100,
  left:    seededRand(i * 5 + 4) * 100,
  opacity: seededRand(i * 5 + 5) * 0.5 + 0.1,
}));

// ─── Tech rows — exactly matching the image ───────────────────────────────────
interface Tech { name: string; logo: string; }

const ROW1: Tech[] = [
  { name: "CSS3",       logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "React",      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Angular",    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" },
  { name: "Vue.js",     logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" },
  { name: "Redux",      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" },
  { name: "GraphQL",    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg" },
];

const ROW2: Tech[] = [
  { name: "Jenkins",      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg" },
  { name: "AWS",          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" },
  { name: "Google Cloud", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" },
  { name: "Cloud",        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" },
  { name: "Git",          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "Linux",        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
];

const ROW3: Tech[] = [
  { name: "PyTorch",    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" },
  { name: "Keras",      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/keras/keras-original.svg" },
  { name: "OpenCV",     logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg" },
  { name: "AI",         logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
  { name: "Robotics",   logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg" },
  { name: "Solidity",   logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/solidity/solidity-original.svg" },
  { name: "Blockchain", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/240px-Bitcoin.svg.png" },
];

const ALL_ROWS = [ROW1, ROW2, ROW3];

// ─── Single icon card ─────────────────────────────────────────────────────────
function TechCard({
  tech,
  hovered,
  onEnter,
  onLeave,
}: {
  tech: Tech;
  hovered: boolean;
  onEnter: () => void;
  onLeave: () => void;
}) {
  return (
    <div
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      style={{
        display:       "flex",
        flexDirection: "column",
        alignItems:    "center",
        gap:           10,
        width:         100,
        cursor:        "pointer",
        userSelect:    "none",
        transform:     hovered ? "translateY(-6px) scale(1.08)" : "translateY(0) scale(1)",
        transition:    "transform 0.25s ease",
      }}
    >
      <div
        style={{
          width:          72,
          height:         72,
          display:        "flex",
          alignItems:     "center",
          justifyContent: "center",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={tech.logo}
          alt={tech.name}
          width={60}
          height={60}
          loading="lazy"
          style={{
            objectFit:  "contain",
            maxWidth:   "100%",
            maxHeight:  "100%",
            filter:     hovered ? "drop-shadow(0 0 10px rgba(255,255,255,0.7))" : "none",
            transition: "filter 0.25s ease",
          }}
        />
      </div>
      <span
        style={{
          color:      "rgba(255,255,255,0.85)",
          fontSize:   13,
          fontFamily: "'Segoe UI', Arial, sans-serif",
          fontWeight: 400,
          textAlign:  "center",
          whiteSpace: "nowrap",
        }}
      >
        {tech.name}
      </span>
    </div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────
export default function TechStack() {
  const [hoveredKey, setHoveredKey] = useState<string | null>(null);
  const [mounted, setMounted]       = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section
      style={{
        position:   "relative",
        width:      "100%",
         background:
          "linear-gradient(135deg, #0a0a14 0%, #0d0f1a 50%, #080c18 100%)",
        overflow:   "hidden",
        padding:    "72px 40px 80px",
      }}
    >
     

      {/* ── Heading ── */}
      <div
        style={{
          position:     "relative",
          zIndex:       10,
          textAlign:    "center",
          marginBottom: 56,
          padding:      "0 20px",
        }}
      >
        <h2
          style={{
            fontSize:      "clamp(26px, 4vw, 40px)",
            fontWeight:    700,
            color:         "#ffffff",
            margin:        "0 0 16px 0",
            lineHeight:    1.15,
            fontFamily:    "'Segoe UI', Arial, sans-serif",
            letterSpacing: "-0.3px",
          }}
        >
          Technologies We Use
        </h2>
        {/* Accent underline */}
        <div
          style={{
            width:        60,
            height:       3,
            borderRadius: 2,
            background:   "linear-gradient(90deg, #6366f1, #a855f7)",
            margin:       "0 auto 20px",
          }}
        />
        <p
          style={{
            fontSize:   "clamp(14px, 1.6vw, 16px)",
            color:      "rgba(255,255,255,0.5)",
            maxWidth:   580,
            margin:     "0 auto",
            lineHeight: 1.75,
            fontFamily: "'Segoe UI', Arial, sans-serif",
            fontWeight: 400,
          }}
        >
          From web and mobile to AI, DevOps, and Cloud — we leverage
          cutting-edge technologies to build innovative solutions.
        </p>
      </div>

      {/* ── 3 rows, each individually centered ── */}
      <div
        style={{
          position:      "relative",
          zIndex:        10,
          display:       "flex",
          flexDirection: "column",
          alignItems:    "center",
          gap:           48,
        }}
      >
        {ALL_ROWS.map((row, rowIdx) => (
          <div
            key={rowIdx}
            style={{
              display:        "flex",
              flexDirection:  "row",
              justifyContent: "center",
              alignItems:     "flex-start",
              flexWrap:       "wrap",
              gap:            48,
            }}
          >
            {row.map((tech) => {
              const key = `${rowIdx}-${tech.name}`;
              return (
                <TechCard
                  key={key}
                  tech={tech}
                  hovered={hoveredKey === key}
                  onEnter={() => setHoveredKey(key)}
                  onLeave={() => setHoveredKey(null)}
                />
              );
            })}
          </div>
        ))}
      </div>
        {/* Top-right teal blob */}
      <div
        style={{
          position: "absolute",
          top: "-30px",
          left: "-60px",
          width: "200px",
          height: "200px",
          borderRadius: "50%",
          background: "linear-gradient(135deg, #06b6d4, #3b82f6)",
          filter: "blur(60px)",
          opacity: 0.35,
          pointerEvents: "none",
        }}
      />
    </section>
  );
}
"use client";

import { useState, useEffect } from "react";

const customers = [
  {
    id: "project",
    image: "/project.png",
    imageAlt: "Freelancer working on laptop",
  },
  {
    id: "project1",
    image: "/project1.png",
    imageAlt: "Business people collaborating",
  },
  {
    id: "project2",
    image: "/project2.png",
    imageAlt: "Marketplace seller with products",
  },
  {
    id: "project3",
    image: "/project3.png",
    imageAlt: "Marketplace seller with products",
  },
  {
    id: "project4",
    image: "/project4.png",
    imageAlt: "Marketplace seller with products",
  },
  {
    id: "project5",
    image: "/project5.png",
    imageAlt: "Marketplace seller with products",
  },
  {
    id: "project6",
    image: "/project6.png",
    imageAlt: "Marketplace seller with products",
  },
    {
    id: "project7",
    image: "/project7.png",
    imageAlt: "Marketplace seller with products",
  },
   {
    id: "project8",
    image: "/project8.png",
    imageAlt: "Marketplace seller with products",
  },
];

type Customer = (typeof customers)[0];

export default function WhoAreOurCustomers() {
  const [lightbox, setLightbox] = useState<Customer | null>(null);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  useEffect(() => {
    document.body.style.overflow = lightbox ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [lightbox]);

  return (
    <section
      style={{
        background:
          "linear-gradient(135deg, #0a0a14 0%, #0d0f1a 50%, #080c18 100%)",
        padding: "80px 40px",
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      <link
        href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&display=swap"
        rel="stylesheet"
      />

      <style>{`
        /* Grid */
        .cards-grid {
          max-width: 1100px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
        }

        /* Card */
        .card {
          display: flex;
          flex-direction: column;
          border-radius: 14px;
          overflow: hidden;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .card:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 48px rgba(0,0,0,0.5);
        }

        /* Image wrapper - pan on hover */
        .card-image-wrapper {
          position: relative;
          width: 100%;
          height: 220px;
          overflow: hidden;
          cursor: pointer;
        }
        .card-image-wrapper img {
          width: 100%;
          height: 150%;
          object-fit: cover;
          object-position: center bottom;
          display: block;
          transition: object-position 0.6s ease;
        }
        .card-image-wrapper:hover img {
          object-position: center top;
        }

        /* Button area below image */
        .card-footer {
          padding: 16px 18px;
          display: flex;
          justify-content: center;
        }

        .explore-btn {
          padding: 10px 28px;
          background: #ffffff;
          color: #0a0a14;
          border: none;
          border-radius: 6px;
          font-size: 13px;
          font-weight: 600;
          cursor: pointer;
          width: 100%;
          font-family: 'DM Sans', sans-serif;
          transition: background 0.2s, color 0.2s;
          letter-spacing: 0.02em;
        }
        .explore-btn:hover {
          background: #4F46E5;
          color: #fff;
        }

        /* Lightbox */
        .lightbox-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.92);
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          animation: lbFadeIn 0.25s ease;
          padding: 20px;
        }
        @keyframes lbFadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        .lightbox-img {
          max-width: 100%;
          max-height: 90vh;
          width: auto;
          height: auto;
          object-fit: contain;
          border-radius: 10px;
          animation: lbZoomIn 0.3s cubic-bezier(0.16,1,0.3,1);
          display: block;
        }
        @keyframes lbZoomIn {
          from { opacity: 0; transform: scale(0.92); }
          to   { opacity: 1; transform: scale(1); }
        }
        .lightbox-close {
          position: fixed;
          top: 20px;
          right: 24px;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: rgba(255,255,255,0.15);
          border: 1px solid rgba(255,255,255,0.3);
          color: #fff;
          font-size: 22px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.2s;
          z-index: 10000;
        }
        .lightbox-close:hover {
          background: rgba(255,255,255,0.28);
        }

        @media (max-width: 768px) {
          .cards-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 480px) {
          .cards-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: "64px" }}>
        <h2
          style={{
            fontSize: "clamp(22px, 3vw, 30px)",
            fontWeight: 600,
            color: "#f8f1f1",
            marginBottom: "14px",
          }}
        >
          Award Winning Projects
        </h2>
      </div>

      {/* Cards Grid */}
      <div className="cards-grid">
        {customers.map((customer) => (
          <div key={customer.id} className="card">
            {/* Image with pan effect */}
            <div className="card-image-wrapper">
              <img src={customer.image} alt={customer.imageAlt} />
            </div>

            {/* Explore button below */}
            <div className="card-footer">
              <button
                className="explore-btn"
                onClick={() => setLightbox(customer)}
              >
                Explore more →
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Fullscreen Lightbox */}
      {lightbox && (
        <div className="lightbox-backdrop" onClick={() => setLightbox(null)}>
          <button
            className="lightbox-close"
            onClick={() => setLightbox(null)}
            aria-label="Close"
          >
            ✕
          </button>
          <img
            className="lightbox-img"
            src={lightbox.image}
            alt={lightbox.imageAlt}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
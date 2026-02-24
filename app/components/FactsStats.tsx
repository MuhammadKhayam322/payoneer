"use client";
import Link from "next/link";

const stats = [
  { value: "Millions", label: "OF CUSTOMERS WORLDWIDE", bold: true },
  { value: "70", label: "CURRENCIES SUPPORTED" },
  { value: "190+", label: "COUNTRIES AND\nTERRITORIES COVERED" },
  { value: "17", label: "LANGUAGES SUPPORTED" },
];

export default function FactsStats() {
  return (
    <section className="facts-section">
      <div className="container">
        <h2 className="title">Facts and stats</h2>
        <p className="description">
          Our platform&apos;s ready to take your business global with{" "}
          <a href="#" className="link">Trustpilot reviews</a> and{" "}
          <a href="#" className="link">App Store ratings</a> to prove it. Join 5
          million people who already trust us to manage and move their money
          around the world.
        </p>

        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-item">
              <span className="stat-value">{stat.value}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </div>

        <div className="button-wrapper">
          <Link href="/about" className="cta-buttonr">
            <button className="cta-button">More about us</button>
          </Link>
        </div>
      </div>

      <style jsx>{`
        .facts-section {
          background-color: #f0f2f5;
          padding: 60px 20px 80px;
          font-family: "Georgia", serif;
        }

        .container {
          max-width: 900px;
          margin: 0 auto;
          text-align: center;
        }

        .title {
          font-size: 2rem;
          font-weight: 600;
          color: #111;
          margin-bottom: 20px;
          font-family: "Georgia", serif;
        }

        .description {
          font-size: 1rem;
          color: #333;
          line-height: 1.7;
          max-width: 580px;
          margin: 0 auto 48px;
          font-family: sans-serif;
        }

        .link {
          color: #1a56db;
          text-decoration: underline;
        }

        .stats-grid {
          display: flex;
          justify-content: center;
          gap: 0;
          margin-bottom: 60px;
          border-top: none;
        }

        .stat-item {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 0 24px;
          border-right: 1px solid #ccc;
          gap: 8px;
        }

        .stat-item:last-child {
          border-right: none;
        }

        .stat-value {
          font-size: 2rem;
          font-weight: 700;
          color: #111;
          font-family: "Georgia", serif;
        }

        .stat-label {
          font-size: 0.7rem;
          font-weight: 600;
          color: #444;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          white-space: pre-line;
          font-family: sans-serif;
        }

        .button-wrapper {
          display: flex;
          justify-content: center;
        }

        .cta-button {
          background-color: #111;
          color: #fff;
          border: none;
          padding: 14px 32px;
          border-radius: 999px;
          font-size: 0.95rem;
          font-weight: 600;
          cursor: pointer;
          font-family: sans-serif;
          transition: background 0.2s;
        }

        .cta-button:hover {
          background-color: #333;
        }

        /* ================= RESPONSIVENESS ================= */

        /* Tablet */
        @media (max-width: 992px) {
          .container {
            padding: 0 20px;
          }

          .title {
            font-size: 1.7rem;
          }

          .description {
            font-size: 0.95rem;
            margin-bottom: 36px;
          }

          .stat-item {
            padding: 0 16px;
          }

          .stat-value {
            font-size: 1.6rem;
          }
        }

        /* Mobile */
        @media (max-width: 768px) {
          .facts-section {
            padding: 50px 16px 60px;
          }

          .stats-grid {
            flex-direction: column;
            gap: 28px;
          }

          .stat-item {
            border-right: none;
            border-bottom: 1px solid #ddd;
            padding-bottom: 20px;
          }

          .stat-item:last-child {
            border-bottom: none;
          }

          .stat-value {
            font-size: 1.8rem;
          }

          .stat-label {
            font-size: 0.75rem;
          }
        }

        /* Small Mobile */
        @media (max-width: 480px) {
          .title {
            font-size: 1.5rem;
          }

          .description {
            font-size: 0.9rem;
            line-height: 1.6;
          }

          .cta-button {
            width: 100%;
            padding: 14px 20px;
            font-size: 0.9rem;
          }
        }
      `}</style>
    </section>
  );
}
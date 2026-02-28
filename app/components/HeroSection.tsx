import React from "react";
import Link from "next/link";

const PaymentHero: React.FC = () => {
  return (
    <div
      className="relative w-full"
      style={{
        minHeight: "520px",
        height: "90vh",
        maxHeight: "700px",
        background: "#0a0a14",
      }}
    >
      {/* Main Content - centered text */}
      <div
        className="relative flex flex-col items-center justify-center text-center px-4 sm:px-8 h-full"
        style={{ zIndex: 10 }}
      >
        <div>
          <h1
            className="font-bold text-gray-300 leading-tight mb-6 text-7xl sm:text-2xl md:text-4xl"
            style={{ maxWidth: "900px" }}
          >
            Elevating Brands Above the Noise
          </h1>
          <p
            className="text-gray-300 mb-7 sm:mb-9 mx-auto sm:text-base md:text-lg"
            style={{ maxWidth: "480px", }}
          >
            Brandraize is a creative digital agency led by Engr. Aman Shah. We
            specialize in digital marketing, web & app development, branding,
            and IT solutions to help businesses grow with measurable impact.
          </p>
          <Link href="/contact">
            <button
              className="text-black font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 px-6 py-3 text-sm sm:px-10 sm:py-4 sm:text-base md:text-lg"
              style={{ background: "white" }}
            >
              Get In Touch
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PaymentHero;
import React from "react";
import Link from "next/link";
interface AvatarBadgeProps {
  src: string;
  amount: string;
  label: string;
  style?: React.CSSProperties;
}

const AvatarBadge: React.FC<AvatarBadgeProps> = ({
  src,
  amount,
  label,
  style,
}) => (
  <div
    className="absolute flex items-center gap-2  rounded-full shadow-lg pr-3
    "
    style={{ zIndex: 20, ...style }}
  >
    
    <div className="flex flex-col">
      <div className="flex items-center gap-1">
        <div className="w-3 h-3 rounded-sm bg-orange-400 flex items-center justify-center">
        
        </div>
        <span className="text-[10px] font-bold text-gray-800">{amount}</span>
      </div>
      <span className="text-[9px] text-green-500 font-semibold">{label}</span>
    </div>
  </div>
);

const PaymentHero: React.FC = () => {
  return (
    <div
      className="relative w-full  "
      style={{
        minHeight: "520px",
        height: "90vh",
        maxHeight: "700px",
        background:
          "linear-gradient(135deg, #0a0a14 0%, #0d0f1a 50%, #080c18 100%)",
      }}
    >
      {/* Gradient blobs - background decorations */}
      <div
        className="absolute top-8 right-8 w-24 h-24 sm:w-32 sm:h-32 rounded-full opacity-60"
        style={{
          background:
            "linear-gradient(135deg, #0a0a14 0%, #0d0f1a 50%, #080c18 100%)",
          filter: "blur(8px)",
          zIndex: 1,
        }}
      />
      
      <div
        className="absolute bottom-8 left-1/2 -translate-x-32 w-5 h-5 rounded-full bg-cyan-400 shadow-lg"
        style={{ zIndex: 2 }}
      />
      <div
        className="absolute top-1/3 left-8 w-3 h-3 rounded-full bg-gray-300"
        style={{ zIndex: 2 }}
      />

      {/* Large Rainbow Ring - only top arc visible */}
      <div
        className="absolute left-1/2 -translate-x-1/2"
        style={{
          bottom: "10%",
          width: "140vw",
          height: "140vw",
          maxWidth: "1400px",
          maxHeight: "1400px",
          zIndex: 3,
        }}
      >
        
        {/* Grid icon - top right area */}
        <div
          className="absolute bg-white rounded-xl shadow-md flex items-center justify-center"
          style={{
            right: "20%",
            top: "14%",
            width: 40,
            height: 40,
            zIndex: 20,
          }}
        >
         
        </div>
      </div>

      {/* Main Content - centered text */}
      <div
        className="relative flex flex-col items-center justify-center text-center px-4 sm:px-8 h-full"
        style={{ zIndex: 10 }}
      >
        <div style={{ marginTop: "-25vh" }}>
          <h1
            className="
    font-bold text-gray-300 leading-tight 
    text-4xl
    sm:text-5xl
    md:text-6xl
    lg:text-7xl
    xl:text-8xl
  "
            style={{ maxWidth: "900px" }}
          >
            Elevating Brands Above the Noise
          </h1>
          <p
            className="text-gray-300 mb-7 sm:mb-9 mx-auto
            text-sm sm:text-base md:text-lg"
            style={{ maxWidth: "480px" }}
          >
            Brandraize is a creative digital agency led by Engr. Aman Shah. We
            specialize in digital marketing, web & app development, branding,
            and IT solutions to help businesses grow with measurable impact.
          </p>
          <Link href="/contact">
            <button
              className="text-black font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105
              px-6 py-9 text-sm sm:px-10 sm:py-4 sm:text-base md:text-lg "
              style={{
                background: "white",
                marginTop: "1rem",
              }}
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

import React from 'react';

interface AvatarBadgeProps {
  src: string;
  amount: string;
  label: string;
  style?: React.CSSProperties;
}

const AvatarBadge: React.FC<AvatarBadgeProps> = ({ src, amount, label, style }) => (
  <div
    className="absolute flex items-center gap-2 bg-white rounded-full shadow-lg pr-3"
    style={{ zIndex: 20, ...style }}
  >
    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden flex-shrink-0 border-2 border-white shadow">
      <img src={src} alt="avatar" className="w-full h-full object-cover" />
    </div>
    <div className="flex flex-col">
      <div className="flex items-center gap-1">
        <div className="w-3 h-3 rounded-sm bg-orange-400 flex items-center justify-center">
          <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
            <rect x="0.5" y="2" width="7" height="5" rx="0.5" stroke="white" strokeWidth="0.8"/>
            <path d="M2 2V1.5C2 0.67 2.67 0 3.5 0H4.5C5.33 0 6 0.67 6 1.5V2" stroke="white" strokeWidth="0.8"/>
          </svg>
        </div>
        <span className="text-[10px] font-bold text-gray-800">{amount}</span>
      </div>
      <span className="text-[9px] text-green-500 font-semibold">{label}</span>
    </div>
  </div>
);

const PaymentHero: React.FC = () => {
  return (
    <div className="relative w-full overflow-hidden bg-gray-50" style={{ minHeight: '520px', height: '90vh', maxHeight: '700px' }}>

      {/* Gradient blobs - background decorations */}
      <div className="absolute top-8 right-8 w-24 h-24 sm:w-32 sm:h-32 rounded-full opacity-60"
        style={{ background: 'radial-gradient(circle, #a78bfa, #818cf8)', filter: 'blur(8px)', zIndex: 1 }} />
      <div className="absolute bottom-16 left-4 w-16 h-16 sm:w-20 sm:h-20 rounded-full opacity-70"
        style={{ background: 'radial-gradient(circle, #f472b6, #ec4899)', filter: 'blur(6px)', zIndex: 1 }} />
      <div className="absolute bottom-8 left-1/2 -translate-x-32 w-5 h-5 rounded-full bg-cyan-400 shadow-lg" style={{ zIndex: 2 }} />
      <div className="absolute top-1/3 left-8 w-3 h-3 rounded-full bg-gray-300" style={{ zIndex: 2 }} />

      {/* Large Rainbow Ring - only top arc visible */}
      <div
        className="absolute left-1/2 -translate-x-1/2"
        style={{
          bottom: '10%',
          width: '140vw',
          height: '140vw',
          maxWidth: '1400px',
          maxHeight: '1400px',
          zIndex: 3,
        }}
      >
        <svg
          className="w-full h-full"
          viewBox="0 0 1400 1400"
          preserveAspectRatio="xMidYMid meet"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="rainbowGradient" x1="0%" y1="50%" x2="100%" y2="50%">
              <stop offset="0%"   stopColor="#f97316" />
              <stop offset="16%"  stopColor="#eab308" />
              <stop offset="33%"  stopColor="#84cc16" />
              <stop offset="50%"  stopColor="#22c55e" />
              <stop offset="66%"  stopColor="#06b6d4" />
              <stop offset="83%"  stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#06b6d4" />
            </linearGradient>
          </defs>
          <circle
            cx="700"
            cy="700"
            r="600"
            stroke="url(#rainbowGradient)"
            strokeWidth="50"
            fill="none"
            strokeLinecap="round"
          />
        </svg>

       

       


        {/* Grid icon - top right area */}
        <div
          className="absolute bg-white rounded-xl shadow-md flex items-center justify-center"
          style={{ right: '20%', top: '14%', width: 40, height: 40, zIndex: 20 }}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <rect x="2" y="2" width="6" height="6" rx="1" fill="#94a3b8"/>
            <rect x="12" y="2" width="6" height="6" rx="1" fill="#94a3b8"/>
            <rect x="2" y="12" width="6" height="6" rx="1" fill="#94a3b8"/>
            <rect x="12" y="12" width="6" height="6" rx="1" fill="#94a3b8"/>
          </svg>
        </div>
      </div>

      {/* Main Content - centered text */}
      <div className="relative flex flex-col items-center justify-center text-center px-4 sm:px-8 h-full" style={{ zIndex: 10 }}>
        <div style={{ marginTop: '-25vh' }}>
         <h1
  className="
    font-bold text-gray-900 leading-tight mb-6
    text-4xl
    sm:text-5xl
    md:text-6xl
    lg:text-7xl
    xl:text-8xl
  "
  style={{ maxWidth: "900px" }}
>
  Global payments made
  <br />
  simple – online payment
  <br />
  solutions for you
</h1>
          <p className="text-gray-500 mb-7 sm:mb-9 mx-auto
            text-sm sm:text-base md:text-lg"
            style={{ maxWidth: '480px' }}
          >
            The Payoneer multi-currency account has everything your business
            needs to pay, get paid, and grow globally.
          </p>
         
          <button
            className="text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105
              px-8 py-3 text-sm sm:px-10 sm:py-4 sm:text-base md:text-lg "
            style={{
              background: 'linear-gradient(135deg, #6d28d9, #7c3aed)',
              marginTop: '1rem',
            }}
          >
            Open your account
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentHero;
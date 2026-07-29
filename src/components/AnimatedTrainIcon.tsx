import React from 'react';

export const AnimatedTrainIcon: React.FC<{ className?: string }> = ({ className = "w-12 h-12" }) => {
  return (
    <div className={`relative flex items-center justify-center overflow-visible select-none ${className}`}>
      <style>{`
        @keyframes wheelRotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes trainChug {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-1px); }
        }
        .anim-wheel {
          transform-box: fill-box;
          transform-origin: center;
          animation: wheelRotate 0.8s linear infinite;
        }
        .anim-train-body {
          animation: trainChug 0.5s ease-in-out infinite;
        }
      `}</style>

      {/* SVG Colorful Steam Locomotive */}
      <svg
        viewBox="0 0 100 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-sm overflow-hidden"
      >
        {/* Steam Puffs (Static / Gentle) */}
        <g className="smoke-particles" opacity="0.8">
          <circle cx="32" cy="20" r="4" fill="#cbd5e1" />
          <circle cx="28" cy="15" r="5" fill="#e2e8f0" />
          <circle cx="23" cy="10" r="6" fill="#f1f5f9" />
        </g>

        {/* LOCOMOTIVE MAIN BODY WITH CHUGGING MOTION / BALANÇO DO TREM */}
        <g className="anim-train-body">
          
          {/* Track Rail snippet under wheels */}
          <line x1="5" y1="72" x2="95" y2="72" stroke="#64748b" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="8" y1="75" x2="92" y2="75" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3" />

          {/* Cabin (Back - Red / Gold / Emerald) */}
          <rect x="58" y="30" width="28" height="34" rx="2" fill="#047857" stroke="#065f46" strokeWidth="1.5" />
          {/* Cabin Roof */}
          <path d="M54 30 L90 30 L86 24 L58 24 Z" fill="#b91c1c" stroke="#991b1b" strokeWidth="1" />
          {/* Cabin Window */}
          <rect x="64" y="36" width="16" height="14" rx="2" fill="#38bdf8" stroke="#0284c7" strokeWidth="1.5" />
          {/* Window Light Reflection */}
          <path d="M65 37 L72 37 L67 49 L65 49 Z" fill="#ffffff" opacity="0.6" />

          {/* Boiler (Middle Cylinder - Dark Emerald / Metallic Teal) */}
          <rect x="26" y="38" width="34" height="26" rx="3" fill="#0f766e" stroke="#115e59" strokeWidth="1.5" />
          {/* Boiler Bands (Gold accents) */}
          <rect x="34" y="38" width="3" height="26" fill="#f59e0b" />
          <rect x="46" y="38" width="3" height="26" fill="#f59e0b" />

          {/* Steam Funnel / Smokestack */}
          <path d="M29 38 L35 38 L37 26 L27 26 Z" fill="#dc2626" stroke="#b91c1c" strokeWidth="1" />
          {/* Smokestack Top Rim */}
          <ellipse cx="32" cy="26" rx="6" ry="2" fill="#f59e0b" />

          {/* Steam Dome */}
          <path d="M42 38 C42 32, 50 32, 50 38 Z" fill="#f59e0b" stroke="#d97706" strokeWidth="1" />

          {/* Front Cowcatcher / Grate (Amber/Gold Grill) */}
          <polygon points="12,64 26,52 26,64" fill="#d97706" stroke="#b45309" strokeWidth="1" />

          {/* Headlight (Glowing Yellow/White on Front) */}
          <rect x="18" y="44" width="8" height="10" rx="1" fill="#ea580c" />
          <circle cx="18" cy="49" r="4" fill="#fef08a" />
          {/* Light Beam Effect */}
          <polygon points="18,49 2,42 2,56" fill="#fef08a" opacity="0.35" />

          {/* Connecting Rods (Connecting wheels) */}
          <line x1="32" y1="64" x2="74" y2="64" stroke="#e2e8f0" strokeWidth="2.5" strokeLinecap="round" />

          {/* ROTATING WHEELS / RODINHAS SE MEXENDO */}
          
          {/* Front Small Wheel 1 */}
          <g transform="translate(22, 64)">
            <g className="anim-wheel">
              <circle cx="0" cy="0" r="6" fill="#334155" stroke="#f59e0b" strokeWidth="1.5" />
              <line x1="-5" y1="0" x2="5" y2="0" stroke="#f8fafc" strokeWidth="1.5" />
              <line x1="0" y1="-5" x2="0" y2="5" stroke="#f8fafc" strokeWidth="1.5" />
              <circle cx="0" cy="0" r="2" fill="#dc2626" />
            </g>
          </g>

          {/* Big Driver Wheel 1 (Middle) */}
          <g transform="translate(42, 63)">
            <g className="anim-wheel">
              <circle cx="0" cy="0" r="9" fill="#1e293b" stroke="#f59e0b" strokeWidth="2" />
              <line x1="-8" y1="0" x2="8" y2="0" stroke="#f8fafc" strokeWidth="1.5" />
              <line x1="0" y1="-8" x2="0" y2="8" stroke="#f8fafc" strokeWidth="1.5" />
              <line x1="-6" y1="-6" x2="6" y2="6" stroke="#f8fafc" strokeWidth="1" />
              <line x1="-6" y1="6" x2="6" y2="-6" stroke="#f8fafc" strokeWidth="1" />
              <circle cx="0" cy="0" r="3" fill="#047857" />
            </g>
          </g>

          {/* Big Driver Wheel 2 (Rear) */}
          <g transform="translate(64, 63)">
            <g className="anim-wheel">
              <circle cx="0" cy="0" r="9" fill="#1e293b" stroke="#f59e0b" strokeWidth="2" />
              <line x1="-8" y1="0" x2="8" y2="0" stroke="#f8fafc" strokeWidth="1.5" />
              <line x1="0" y1="-8" x2="0" y2="8" stroke="#f8fafc" strokeWidth="1.5" />
              <line x1="-6" y1="-6" x2="6" y2="6" stroke="#f8fafc" strokeWidth="1" />
              <line x1="-6" y1="6" x2="6" y2="-6" stroke="#f8fafc" strokeWidth="1" />
              <circle cx="0" cy="0" r="3" fill="#047857" />
            </g>
          </g>

          {/* Rear Small Wheel under tender */}
          <g transform="translate(80, 64)">
            <g className="anim-wheel">
              <circle cx="0" cy="0" r="6" fill="#334155" stroke="#f59e0b" strokeWidth="1.5" />
              <line x1="-5" y1="0" x2="5" y2="0" stroke="#f8fafc" strokeWidth="1.5" />
              <line x1="0" y1="-5" x2="0" y2="5" stroke="#f8fafc" strokeWidth="1.5" />
              <circle cx="0" cy="0" r="2" fill="#dc2626" />
            </g>
          </g>

        </g>
      </svg>
    </div>
  );
};

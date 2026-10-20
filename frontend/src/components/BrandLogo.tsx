import React from "react";

interface BrandLogoProps {
  className?: string;
  showText?: boolean;
  size?: "sm" | "md" | "lg";
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  className = "",
  showText = true,
  size = "md",
}) => {
  const iconSizes = {
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-14 h-14",
  };

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {/* SVG Icon Mark */}
      <svg
        viewBox="0 0 120 120"
        className={`${iconSizes[size]} shrink-0 transition-transform duration-300 hover:scale-105`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Subtle Background Circle */}
        <circle cx="60" cy="60" r="55" fill="#0F2A1E" stroke="#1F4A35" strokeWidth="2" />

        {/* Stylized Minimalist Leaf */}
        <path
          d="M60,15 C90,15 105,40 105,65 C105,95 60,105 60,105 C60,105 15,95 15,65 C15,40 30,15 60,15 Z"
          fill="#22C55E"
        />
        {/* Leaf shadow/fold for depth */}
        <path
          d="M60,15 C60,15 95,30 95,65 C95,95 60,105 60,105 Z"
          fill="#16A34A"
        />
        {/* Center Vein */}
        <path d="M60,15 L60,100" stroke="#E8F5E9" strokeWidth="2.5" strokeLinecap="round" />

        {/* Object Detection Box (AI Computer Vision) */}
        {/* Top Left */}
        <path d="M25,30 L45,30" stroke="#00BCD4" strokeWidth="4.5" strokeLinecap="round" />
        <path d="M25,30 L25,50" stroke="#00BCD4" strokeWidth="4.5" strokeLinecap="round" />

        {/* Top Right */}
        <path d="M95,30 L75,30" stroke="#00BCD4" strokeWidth="4.5" strokeLinecap="round" />
        <path d="M95,30 L95,50" stroke="#00BCD4" strokeWidth="4.5" strokeLinecap="round" />

        {/* Bottom Left */}
        <path d="M25,90 L45,90" stroke="#00BCD4" strokeWidth="4.5" strokeLinecap="round" />
        <path d="M25,90 L25,70" stroke="#00BCD4" strokeWidth="4.5" strokeLinecap="round" />

        {/* Bottom Right */}
        <path d="M95,90 L75,90" stroke="#00BCD4" strokeWidth="4.5" strokeLinecap="round" />
        <path d="M95,90 L95,70" stroke="#00BCD4" strokeWidth="4.5" strokeLinecap="round" />

        {/* Simple AI focus dot indicating detected anomaly */}
        <circle cx="75" cy="55" r="6" fill="#FFFFFF" />
        <circle cx="75" cy="55" r="3" fill="#00BCD4" />
      </svg>

      {/* Typography */}
      {showText && (
        <div className="flex flex-col text-left">
          <span className="font-extrabold tracking-tight text-[#F4FBF6] leading-none text-xs sm:text-sm uppercase">
            Plant Disease Detection
          </span>
          <div className="flex items-center gap-1.5 mt-0.5">
            <span className="text-[10px] sm:text-[11px] font-bold text-[#22C55E] tracking-widest uppercase">
              Powered by AI
            </span>
            <span className="w-5 h-[2px] bg-[#00BCD4] rounded-full inline-block" />
          </div>
        </div>
      )}
    </div>
  );
};

export default BrandLogo;

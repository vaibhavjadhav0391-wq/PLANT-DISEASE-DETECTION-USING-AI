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
    sm: "w-9 h-7",
    md: "w-12 h-9",
    lg: "w-20 h-16",
  };

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {/* SVG Icon Mark: Plant with diseased drooping leaf & magnified pathogen callout */}
      <svg
        viewBox="0 0 260 200"
        className={`${iconSizes[size]} shrink-0 transition-transform duration-300 hover:scale-105`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Ground / Soil */}
        <path d="M 10,180 L 190,180" stroke="#1F4A35" strokeWidth="8" strokeLinecap="round" />
        <path
          d="M 30,176 C 40,155 60,145 80,150 C 90,135 110,135 125,145 C 145,140 160,155 165,176 Z"
          fill="#143826"
        />

        {/* Plant Stem */}
        <path
          d="M 95,150 L 95,70 C 95,55 85,45 75,45 C 65,45 55,55 55,70"
          stroke="#22C55E"
          strokeWidth="8"
          strokeLinecap="round"
        />
        {/* Secondary Stem */}
        <path
          d="M 95,110 C 110,100 120,105 125,120"
          stroke="#22C55E"
          strokeWidth="8"
          strokeLinecap="round"
        />

        {/* Left Drooping Leaf */}
        <path
          d="M 55,65 C 20,80 15,115 25,130 C 45,135 75,115 85,85 C 80,65 65,60 55,65 Z"
          fill="#16A34A"
        />
        {/* Left Leaf Veins */}
        <path
          d="M 55,75 L 45,115 M 45,95 L 35,90 M 45,105 L 60,110"
          stroke="#BEF264"
          strokeWidth="3.5"
          strokeLinecap="round"
        />

        {/* Right Drooping Leaf */}
        <path
          d="M 125,115 C 105,140 115,165 130,170 C 155,165 170,135 165,115 C 150,105 135,105 125,115 Z"
          fill="#16A34A"
        />
        {/* Right Leaf Veins */}
        <path
          d="M 128,122 L 145,155 M 138,140 L 150,135"
          stroke="#BEF264"
          strokeWidth="3.5"
          strokeLinecap="round"
        />

        {/* Microscopic Callout Box & Line */}
        <line x1="145" y1="140" x2="195" y2="90" stroke="#22C55E" strokeWidth="5" strokeLinecap="round" />
        <rect x="150" y="10" width="105" height="95" rx="10" fill="#0F2A1E" stroke="#1F4A35" strokeWidth="3" />

        {/* Bacteria / Pathogens inside the box */}
        <g transform="translate(150, 10)">
          {/* Pathogen 1 */}
          <g transform="translate(32, 38) rotate(-30)">
            <rect x="-15" y="-6" width="30" height="12" rx="6" stroke="#BEF264" strokeWidth="3" />
            <line x1="-10" y1="-6" x2="-10" y2="-10" stroke="#BEF264" strokeWidth="2" />
            <line x1="0" y1="-6" x2="0" y2="-10" stroke="#BEF264" strokeWidth="2" />
            <line x1="10" y1="-6" x2="10" y2="-10" stroke="#BEF264" strokeWidth="2" />
            <line x1="-10" y1="6" x2="-10" y2="10" stroke="#BEF264" strokeWidth="2" />
            <line x1="0" y1="6" x2="0" y2="10" stroke="#BEF264" strokeWidth="2" />
            <line x1="10" y1="6" x2="10" y2="10" stroke="#BEF264" strokeWidth="2" />
          </g>

          {/* Pathogen 2 */}
          <g transform="translate(68, 58) rotate(15)">
            <rect x="-12" y="-5" width="24" height="10" rx="5" stroke="#22C55E" strokeWidth="3" />
            <line x1="-6" y1="-5" x2="-6" y2="-8" stroke="#22C55E" strokeWidth="2" />
            <line x1="6" y1="-5" x2="6" y2="-8" stroke="#22C55E" strokeWidth="2" />
            <line x1="-6" y1="5" x2="-6" y2="8" stroke="#22C55E" strokeWidth="2" />
            <line x1="6" y1="5" x2="6" y2="8" stroke="#22C55E" strokeWidth="2" />
          </g>

          {/* Spores / Dots */}
          <circle cx="20" cy="22" r="3" fill="#BEF264" />
          <circle cx="28" cy="15" r="2" fill="#BEF264" />
          <circle cx="75" cy="25" r="2.5" fill="#BEF264" />
          <circle cx="85" cy="35" r="2" fill="#BEF264" />
          <circle cx="45" cy="78" r="2.5" fill="#BEF264" />
          <circle cx="35" cy="68" r="2" fill="#BEF264" />
        </g>
      </svg>

      {/* Typography Layout */}
      {showText && (
        <div className="flex flex-col text-left">
          <div className="flex items-center gap-1.5 leading-none">
            <span className="font-extrabold tracking-tight text-[#F4FBF6] text-xs sm:text-sm uppercase">
              Plant Disease
            </span>
            <span className="font-extrabold tracking-tight text-[#22C55E] text-xs sm:text-sm uppercase">
              Detection
            </span>
          </div>
          <div className="flex items-center gap-1.5 mt-1">
            <span className="text-[10px] font-bold text-[#B6CCBF] tracking-wider uppercase">
              Diagnostic Pathology
            </span>
            <span className="text-[9px] px-1.5 py-0.2 rounded font-mono font-bold bg-[#143826] text-[#22C55E] border border-[#1F4A35]">
              AI
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default BrandLogo;

import React from "react";
import { cn } from "@/lib/utils";

export interface Logo {
  name: string;
  image: string;
}

export interface FlowingLogosProps {
  data: Logo[];
  variant?: "wide" | "compact";
  className?: string;
}

export const FlowingLogos: React.FC<FlowingLogosProps> = ({
  data,
  variant = "wide",
  className,
}) => {
  return (
    <div
      className={cn(
        "group relative flex w-full overflow-hidden [--duration:35s] [--gap:2.5rem]",
        className
      )}
    >
      <div
        className="flex shrink-0 animate-canopy-x items-center justify-around gap-[var(--gap)] group-hover:[animation-play-state:paused]"
        style={{ minWidth: "100%" }}
      >
        {data.map((logo, idx) => (
          <div
            key={`first-${idx}`}
            className="flex items-center gap-3.5 px-6 py-3.5 rounded-2xl bg-[#0F2A1E]/80 border border-[#1F4A35] shadow-lg backdrop-blur-md transition-all duration-300 hover:border-[#22C55E]/60 hover:scale-105 hover:bg-[#143826]"
          >
            <img
              src={logo.image}
              alt={logo.name}
              className="h-8 w-auto max-w-[120px] object-contain shrink-0 brightness-90 hover:brightness-100 transition-all filter drop-shadow-sm"
              loading="lazy"
            />
            <span className="text-sm font-semibold tracking-wide text-[#F4FBF6] whitespace-nowrap">
              {logo.name}
            </span>
          </div>
        ))}
      </div>

      <div
        aria-hidden="true"
        className="flex shrink-0 animate-canopy-x items-center justify-around gap-[var(--gap)] group-hover:[animation-play-state:paused]"
        style={{ minWidth: "100%" }}
      >
        {data.map((logo, idx) => (
          <div
            key={`second-${idx}`}
            className="flex items-center gap-3.5 px-6 py-3.5 rounded-2xl bg-[#0F2A1E]/80 border border-[#1F4A35] shadow-lg backdrop-blur-md transition-all duration-300 hover:border-[#22C55E]/60 hover:scale-105 hover:bg-[#143826]"
          >
            <img
              src={logo.image}
              alt={logo.name}
              className="h-8 w-auto max-w-[120px] object-contain shrink-0 brightness-90 hover:brightness-100 transition-all filter drop-shadow-sm"
              loading="lazy"
            />
            <span className="text-sm font-semibold tracking-wide text-[#F4FBF6] whitespace-nowrap">
              {logo.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

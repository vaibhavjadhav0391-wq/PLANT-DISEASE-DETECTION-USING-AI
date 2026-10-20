import React, { useRef } from "react";
import MarqueeAlongSvgPath from "./ui/marquee-along-svg-path";
import { Leaf, ShieldCheck, AlertCircle, Sparkles, Activity, Microscope, Droplets, Zap } from "lucide-react";

interface CropSpecimen {
  name: string;
  condition: string;
  status: "healthy" | "diseased" | "investigating";
  confidence: string;
  img: string;
  icon: React.ReactNode;
}

const SPECIMENS: CropSpecimen[] = [
  {
    name: "Tomato Leaf",
    condition: "Early Blight",
    status: "diseased",
    confidence: "98.9%",
    img: "https://images.unsplash.com/photo-1592417817098-8f3d6eb228cc?auto=format&fit=crop&w=320&q=80",
    icon: <AlertCircle className="w-3.5 h-3.5 text-[#EF4444]" />,
  },
  {
    name: "Corn / Maize",
    condition: "Common Rust",
    status: "diseased",
    confidence: "99.4%",
    img: "https://images.unsplash.com/photo-1551754655-cd27e38d2076?auto=format&fit=crop&w=320&q=80",
    icon: <Activity className="w-3.5 h-3.5 text-[#FBBF24]" />,
  },
  {
    name: "Apple Foliage",
    condition: "Apple Scab",
    status: "diseased",
    confidence: "97.8%",
    img: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?auto=format&fit=crop&w=320&q=80",
    icon: <AlertCircle className="w-3.5 h-3.5 text-[#EF4444]" />,
  },
  {
    name: "Bell Pepper",
    condition: "Healthy Leaf",
    status: "healthy",
    confidence: "99.8%",
    img: "https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?auto=format&fit=crop&w=320&q=80",
    icon: <ShieldCheck className="w-3.5 h-3.5 text-[#22C55E]" />,
  },
  {
    name: "Grapevine",
    condition: "Black Rot",
    status: "diseased",
    confidence: "98.2%",
    img: "https://images.unsplash.com/photo-1533616688419-b7a585564566?auto=format&fit=crop&w=320&q=80",
    icon: <Microscope className="w-3.5 h-3.5 text-[#FBBF24]" />,
  },
  {
    name: "Soybean",
    condition: "Healthy Vigorous",
    status: "healthy",
    confidence: "99.6%",
    img: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=320&q=80",
    icon: <ShieldCheck className="w-3.5 h-3.5 text-[#22C55E]" />,
  },
  {
    name: "Potato Leaf",
    condition: "Late Blight",
    status: "diseased",
    confidence: "99.1%",
    img: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=320&q=80",
    icon: <AlertCircle className="w-3.5 h-3.5 text-[#EF4444]" />,
  },
  {
    name: "Strawberry",
    condition: "Leaf Scorch",
    status: "diseased",
    confidence: "96.7%",
    img: "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?auto=format&fit=crop&w=320&q=80",
    icon: <Droplets className="w-3.5 h-3.5 text-[#FBBF24]" />,
  },
];

// Fluid continuous looping SVG path for 1200x520 viewport
const PATH =
  "M -80 260 " +
  "C 120 70, 240 450, 480 240 " +
  "C 680 70, 780 470, 1000 240 " +
  "C 1140 80, 1280 430, 1420 220 " +
  "C 1520 80, 1600 380, 1750 250";

export const CropPathShowcase: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section id="path-showcase" className="relative py-24 px-4 sm:px-8 z-20 overflow-hidden">
      {/* Background radial glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] rounded-full blur-[130px] pointer-events-none opacity-40"
        style={{ background: "radial-gradient(circle, rgba(34,197,94,0.18) 0%, transparent 70%)" }}
      />

      <div className="max-w-7xl mx-auto text-center mb-8 relative z-10">
        <div
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-3 shadow-sm"
          style={{
            backgroundColor: "rgba(34, 197, 94, 0.12)",
            borderColor: "#1F4A35",
            borderWidth: "1px",
            borderStyle: "solid",
            color: "#22C55E",
          }}
        >
          <Zap className="w-3.5 h-3.5" />
          <span>Continuous AI Path Diagnostics</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-3" style={{ color: "#F4FBF6" }}>
          Explore 38 Trained Crop Disease Classes
        </h2>
        <p className="text-sm max-w-2xl mx-auto leading-relaxed" style={{ color: "#B6CCBF" }}>
          Drag to slide or scroll down to accelerate. Every specimen is mapped through our deep CNN + Grad-CAM heatmap inference pipeline in real time.
        </p>
      </div>

      {/* SVG Path Marquee Stage */}
      <div
        ref={containerRef}
        className="relative w-full h-[460px] sm:h-[500px] flex items-center justify-center overflow-hidden rounded-3xl"
        style={{
          backgroundColor: "#0A1B14",
          border: "1px solid #1F4A35",
          boxShadow: "inset 0 0 50px rgba(0,0,0,0.6)",
        }}
      >
        <MarqueeAlongSvgPath
          path={PATH}
          viewBox="0 0 1600 500"
          baseVelocity={4.5}
          showPath={true}
          slowdownOnHover={true}
          draggable={true}
          dragAwareDirection={true}
          dragVelocityDecay={0.96}
          scrollAwareDirection={true}
          useScrollVelocity={true}
          scrollContainer={containerRef}
          repeat={3}
          enableRollingZIndex={true}
          dragSensitivity={0.015}
          className="absolute inset-0 w-full h-full text-emerald-500/25"
          responsive={true}
          grabCursor={true}
        >
          {SPECIMENS.map((item, idx) => (
            <div
              key={idx}
              className="w-48 select-none p-3 rounded-2xl transition-all duration-300 transform -translate-x-1/2 -translate-y-1/2 hover:scale-110 hover:shadow-2xl hover:border-emerald-400 group cursor-grab active:cursor-grabbing"
              style={{
                backgroundColor: "#0F2A1E",
                borderColor: "#1F4A35",
                borderWidth: "1px",
                borderStyle: "solid",
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.5), 0 0 12px rgba(34, 197, 94, 0.15)",
              }}
            >
              {/* Image with status badge */}
              <div className="relative w-full h-28 rounded-xl overflow-hidden mb-2.5 bg-black/40">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  draggable={false}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />

                <div className="absolute top-2 right-2 flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-[#07130E]/85 border border-[#1F4A35] text-[#F4FBF6] backdrop-blur-md">
                  {item.icon}
                  <span>{item.confidence}</span>
                </div>
              </div>

              {/* Text details */}
              <div className="flex items-center justify-between text-left">
                <div>
                  <h4 className="text-xs font-bold truncate max-w-[110px]" style={{ color: "#F4FBF6" }}>
                    {item.name}
                  </h4>
                  <p
                    className="text-[11px] font-medium truncate max-w-[110px]"
                    style={{
                      color: item.status === "healthy" ? "#22C55E" : "#FBBF24",
                    }}
                  >
                    {item.condition}
                  </p>
                </div>

                <div
                  className="w-6 h-6 rounded-lg flex items-center justify-center shrink-0"
                  style={{
                    backgroundColor: "rgba(34, 197, 94, 0.12)",
                    border: "1px solid #1F4A35",
                  }}
                >
                  <Sparkles className="w-3 h-3 text-[#22C55E]" />
                </div>
              </div>
            </div>
          ))}
        </MarqueeAlongSvgPath>

        {/* Ambient bottom caption */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 pointer-events-none z-30 flex items-center gap-2 px-3.5 py-1 rounded-full text-[11px] font-medium bg-[#07130E]/80 border border-[#1F4A35] text-[#B6CCBF] backdrop-blur-md shadow-lg">
          <Leaf className="w-3.5 h-3.5 text-[#22C55E]" />
          <span>Interactive SVG ribbon • Drag horizontally or hover to inspect</span>
        </div>
      </div>
    </section>
  );
};

export default CropPathShowcase;

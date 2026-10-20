import React from "react";
import { Camera, Cpu, BarChart3, ShieldCheck, ArrowRight } from "lucide-react";

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      num: "01",
      icon: <Camera className="w-6 h-6 text-[#22C55E]" />,
      title: "Upload Leaf",
      subtitle: "Capture photo or pick file",
      desc: "Take a clear, well-lit snapshot of the affected plant leaf using your phone camera or drag and drop an image.",
    },
    {
      num: "02",
      icon: <Cpu className="w-6 h-6 text-[#22C55E]" />,
      title: "AI Analysis",
      subtitle: "CNN pattern inference",
      desc: "Our neural network evaluates morphological lesion patterns across 38 classes in under two seconds.",
    },
    {
      num: "03",
      icon: <BarChart3 className="w-6 h-6 text-[#22C55E]" />,
      title: "Disease Insights",
      subtitle: "Grad-CAM & Severity",
      desc: "Inspect explainable Grad-CAM heatmaps showing exact focal areas and quantified leaf damage percentages.",
    },
    {
      num: "04",
      icon: <ShieldCheck className="w-6 h-6 text-[#22C55E]" />,
      title: "Smart Recommendations",
      subtitle: "Actionable treatments",
      desc: "Receive immediate organic remedies, chemical spray dosages, and download an official PDF report.",
    },
  ];

  return (
    <section id="how-it-works" className="relative py-24 px-6 sm:px-12 z-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-3"
            style={{
              backgroundColor: "rgba(34, 197, 94, 0.15)",
              borderColor: "#1F4A35",
              borderWidth: "1px",
              borderStyle: "solid",
              color: "#22C55E",
            }}
          >
            <span>Seamless Workflow</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4" style={{ color: "#F4FBF6" }}>
            How Plant Disease Detection Using AI Works
          </h2>
          <p className="text-sm sm:text-base leading-relaxed" style={{ color: "#B6CCBF" }}>
            From leaf photography to tailored agricultural prescription in four automated stages.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((s, idx) => (
            <div
              key={idx}
              className="glass-card p-6 rounded-2xl relative flex flex-col justify-between"
              style={{
                backgroundColor: "#0F2A1E",
                borderColor: "#1F4A35",
                borderWidth: "1px",
                borderStyle: "solid",
              }}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center shadow-lg"
                    style={{
                      backgroundColor: "rgba(34, 197, 94, 0.12)",
                      borderColor: "#1F4A35",
                      borderWidth: "1px",
                      borderStyle: "solid",
                    }}
                  >
                    {s.icon}
                  </div>
                  <span className="text-2xl font-black font-mono" style={{ color: "rgba(34, 197, 94, 0.35)" }}>
                    {s.num}
                  </span>
                </div>

                <div className="text-xs uppercase tracking-wider font-semibold mb-1" style={{ color: "#22C55E" }}>
                  {s.subtitle}
                </div>
                <h3 className="text-lg font-bold mb-2" style={{ color: "#F4FBF6" }}>
                  {s.title}
                </h3>
                <p className="text-xs sm:text-sm leading-relaxed" style={{ color: "#B6CCBF" }}>
                  {s.desc}
                </p>
              </div>

              {idx < steps.length - 1 && (
                <div className="hidden lg:flex absolute -right-3 top-1/2 -translate-y-1/2 z-20" style={{ color: "#22C55E", opacity: 0.5 }}>
                  <ArrowRight className="w-5 h-5" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

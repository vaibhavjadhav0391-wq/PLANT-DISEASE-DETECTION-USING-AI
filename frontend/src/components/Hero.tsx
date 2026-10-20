import React from "react";
import { ArrowRight, Sparkles, Brain, Eye, HeartPulse, Scan, Activity, ShieldCheck, Flame } from "lucide-react";

interface HeroProps {
  onGetStarted: () => void;
  language: string;
}

export const Hero: React.FC<HeroProps> = ({ onGetStarted, language }) => {
  const content = {
    en: {
      badge: "✦ AI-POWERED SMART AGRICULTURE",
      heading1: "Grow Smarter.",
      heading2: "Detect Earlier.",
      heading3: "Protect Every Leaf.",
      subtitle:
        "Discover plant diseases early with intelligent AI analysis, explainable predictions and personalized crop health guidance.",
      primaryCta: "Get Started →",
      secondaryCta: "Explore Features",
      feature1: "AI-Powered Diagnosis",
      feature2: "Explainable AI",
      feature3: "Smart Crop Health",
    },
    mr: {
      badge: "✦ कृत्रिम बुद्धिमत्ता आधारित आधुनिक कृषी तंत्रज्ञान",
      heading1: "स्मार्ट शेती करा.",
      heading2: "रोग लवकर ओळखा.",
      heading3: "प्रत्येक पान सुरक्षित ठेवा.",
      subtitle:
        "अत्याधुनिक कृत्रिम बुद्धिमत्ता, स्पष्ट विश्लेषण आणि शास्त्रोक्त मार्गदर्शनाने पिकांवरील रोग वेळीच ओळखा आणि उपाययोजना करा.",
      primaryCta: "सुरुवात करा →",
      secondaryCta: "वैशिष्ट्ये पहा",
      feature1: "एआय रोग निदान",
      feature2: "पारदर्शक उष्णता नकाशे (Grad-CAM)",
      feature3: "स्मार्ट पीक आरोग्य",
    },
    hi: {
      badge: "✦ एआई-संचालित आधुनिक कृषि समाधान",
      heading1: "स्मार्ट खेती करें.",
      heading2: "रोग पहले पहचानें.",
      heading3: "हर पत्ती सुरक्षित रखें.",
      subtitle:
        "बुद्धिमान एआई विश्लेषण, सटीक हीटमैप और व्यक्तिगत फसल स्वास्थ्य मार्गदर्शन के साथ पौधों के रोगों का शीघ्र पता लगाएं।",
      primaryCta: "शुरू करें →",
      secondaryCta: "सुविधाएं देखें",
      feature1: "एआई रोग निदान",
      feature2: "पारदर्शी हीटमैप (Grad-CAM)",
      feature3: "स्मार्ट फसल स्वास्थ्य",
    },
  }[language as "en" | "mr" | "hi"] || {
    badge: "✦ AI-POWERED SMART AGRICULTURE",
    heading1: "Grow Smarter.",
    heading2: "Detect Earlier.",
    heading3: "Protect Every Leaf.",
    subtitle:
      "Discover plant diseases early with intelligent AI analysis, explainable predictions and personalized crop health guidance.",
    primaryCta: "Get Started →",
    secondaryCta: "Explore Features",
    feature1: "AI-Powered Diagnosis",
    feature2: "Explainable AI",
    feature3: "Smart Crop Health",
  };

  return (
    <section id="home" className="relative min-h-[90vh] flex items-center pt-28 pb-16 px-6 sm:px-12 z-10">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Hero Content */}
        <div className="lg:col-span-7 xl:col-span-7 flex flex-col items-start text-left">
          {/* Rule 9: The "AI-Powered Smart Agriculture" pill uses primary green with 15% opacity background */}
          <div
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-6 shadow-md"
            style={{
              backgroundColor: "rgba(34, 197, 94, 0.15)",
              borderColor: "#1F4A35",
              borderWidth: "1px",
              borderStyle: "solid",
              color: "#22C55E",
            }}
          >
            <Sparkles className="w-3.5 h-3.5 text-[#22C55E] animate-pulse" />
            <span>{content.badge}</span>
          </div>

          {/* Rule 3: Main Heading */}
          {/* "Grow Smarter." and "Protect Every Leaf." use heading text color #F4FBF6 */}
          {/* "Detect Earlier." uses a gradient from #22C55E to #BEF264 */}
          <h1 className="text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight leading-[1.08] mb-6">
            <span style={{ color: "#F4FBF6" }}>{content.heading1} </span>
            <span
              className="block bg-clip-text text-transparent"
              style={{
                backgroundImage: "linear-gradient(90deg, #22C55E 0%, #BEF264 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {content.heading2}
            </span>
            <span className="block" style={{ color: "#F4FBF6" }}>{content.heading3}</span>
          </h1>

          {/* Rule 10: Paragraph text uses #B6CCBF */}
          <p className="max-w-xl text-base sm:text-lg leading-relaxed mb-8" style={{ color: "#B6CCBF" }}>
            {content.subtitle}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 mb-12">
            {/* Rule 4: Main button uses #22C55E with #04130B text and soft green glow shadow. Hover #16A34A */}
            <button
              onClick={onGetStarted}
              className="glow-button inline-flex items-center gap-2.5 px-8 py-3.5 rounded-xl font-bold text-base tracking-wide uppercase transition-all cursor-pointer shadow-xl hover:scale-105 active:scale-95"
            >
              <span>{content.primaryCta}</span>
              <ArrowRight className="w-4 h-4 stroke-[2.5]" />
            </button>

            {/* Rule 5: Secondary button: transparent bg, #1F4A35 border, #F4FBF6 text. On hover border becomes #22C55E */}
            <a
              href="#features"
              className="secondary-btn inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm"
            >
              {content.secondaryCta}
            </a>
          </div>

          {/* 3 Compact Highlights */}
          <div
            className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full max-w-2xl pt-6"
            style={{ borderTop: "1px solid #1F4A35" }}
          >
            <div
              className="flex items-center gap-3 p-3 rounded-xl"
              style={{
                backgroundColor: "#0F2A1E",
                borderColor: "#1F4A35",
                borderWidth: "1px",
                borderStyle: "solid",
              }}
            >
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: "rgba(34, 197, 94, 0.15)", color: "#22C55E" }}
              >
                <Brain className="w-4 h-4" />
              </div>
              <span className="text-xs sm:text-sm font-medium" style={{ color: "#F4FBF6" }}>
                {content.feature1}
              </span>
            </div>

            <div
              className="flex items-center gap-3 p-3 rounded-xl"
              style={{
                backgroundColor: "#0F2A1E",
                borderColor: "#1F4A35",
                borderWidth: "1px",
                borderStyle: "solid",
              }}
            >
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: "rgba(34, 197, 94, 0.15)", color: "#22C55E" }}
              >
                <Eye className="w-4 h-4" />
              </div>
              <span className="text-xs sm:text-sm font-medium" style={{ color: "#F4FBF6" }}>
                {content.feature2}
              </span>
            </div>

            <div
              className="flex items-center gap-3 p-3 rounded-xl"
              style={{
                backgroundColor: "#0F2A1E",
                borderColor: "#1F4A35",
                borderWidth: "1px",
                borderStyle: "solid",
              }}
            >
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: "rgba(34, 197, 94, 0.15)", color: "#22C55E" }}
              >
                <HeartPulse className="w-4 h-4" />
              </div>
              <span className="text-xs sm:text-sm font-medium" style={{ color: "#F4FBF6" }}>
                {content.feature3}
              </span>
            </div>
          </div>
        </div>

        {/* Right Side: Rule 6 - Precision Decision Pipeline card uses #0F2A1E with #1F4A35 border */}
        <div className="lg:col-span-5 xl:col-span-5 flex justify-center">
          <div
            className="w-full max-w-md p-6 sm:p-7 rounded-3xl shadow-2xl relative overflow-hidden group"
            style={{
              backgroundColor: "#0F2A1E",
              borderColor: "#1F4A35",
              borderWidth: "1px",
              borderStyle: "solid",
            }}
          >
            {/* Header */}
            <div
              className="flex items-center justify-between mb-5 pb-4"
              style={{ borderBottom: "1px solid #1F4A35" }}
            >
              <div className="flex items-center gap-2.5">
                <div
                  className="w-3 h-3 rounded-full animate-pulse"
                  style={{ backgroundColor: "#22C55E" }}
                />
                <span className="text-xs font-bold uppercase tracking-wider" style={{ color: "#22C55E" }}>
                  Precision Decision Pipeline
                </span>
              </div>
              {/* Rule 9: "38 Classes" badge uses primary green with 15% opacity background */}
              <span
                className="text-[11px] font-mono px-2.5 py-0.5 rounded-full font-semibold"
                style={{
                  backgroundColor: "rgba(34, 197, 94, 0.15)",
                  color: "#22C55E",
                  borderColor: "#1F4A35",
                  borderWidth: "1px",
                  borderStyle: "solid",
                }}
              >
                38 Classes
              </span>
            </div>

            {/* Visual inspection scanner area */}
            <div
              className="relative aspect-[4/3] rounded-2xl overflow-hidden flex flex-col items-center justify-center p-6 mb-5 transition-colors"
              style={{
                backgroundColor: "#07130E",
                borderColor: "#1F4A35",
                borderWidth: "1px",
                borderStyle: "solid",
              }}
            >
              <div
                className="absolute inset-x-0 h-0.5 top-1/3 animate-pulse"
                style={{
                  background: "linear-gradient(90deg, transparent 0%, #22C55E 50%, transparent 100%)",
                }}
              />
              
              <div
                className="w-20 h-20 rounded-2xl flex items-center justify-center mb-3 shadow-inner"
                style={{
                  backgroundColor: "rgba(34, 197, 94, 0.15)",
                  borderColor: "#1F4A35",
                  borderWidth: "1px",
                  borderStyle: "solid",
                  color: "#22C55E",
                }}
              >
                <Scan className="w-10 h-10 stroke-[1.5]" />
              </div>

              {/* Rule 7: Disease result labels use amber #FBBF24 */}
              <div className="text-sm font-bold text-center" style={{ color: "#F4FBF6" }}>
                Tomato • <span style={{ color: "#FBBF24" }}>Early Blight Diagnostic</span>
              </div>
              {/* Rule 9: Confidence text uses primary green with 15% opacity background */}
              <div
                className="text-xs text-center font-mono mt-1 px-2.5 py-0.5 rounded-full"
                style={{
                  color: "#22C55E",
                  backgroundColor: "rgba(34, 197, 94, 0.15)",
                }}
              >
                Target Spot Identified • 96.2% Confidence
              </div>
            </div>

            {/* Rule 6: Small cards use #0F2A1E with #1F4A35 border */}
            {/* Rule 7: Use amber #FBBF24 ONLY for disease and warning elements: Grad-CAM icon, severity badge */}
            <div className="grid grid-cols-2 gap-3 mb-5 text-xs">
              <div
                className="p-3 rounded-xl"
                style={{
                  backgroundColor: "#07130E",
                  borderColor: "#1F4A35",
                  borderWidth: "1px",
                  borderStyle: "solid",
                }}
              >
                <div className="flex items-center gap-1.5 font-semibold mb-1" style={{ color: "#FBBF24" }}>
                  <Flame className="w-3.5 h-3.5" style={{ color: "#FBBF24" }} />
                  <span>Grad-CAM Focal</span>
                </div>
                <div className="font-medium" style={{ color: "#B6CCBF" }}>Concentric Lesion</div>
              </div>

              <div
                className="p-3 rounded-xl"
                style={{
                  backgroundColor: "#07130E",
                  borderColor: "#1F4A35",
                  borderWidth: "1px",
                  borderStyle: "solid",
                }}
              >
                <div className="flex items-center gap-1.5 font-semibold mb-1" style={{ color: "#FBBF24" }}>
                  <Activity className="w-3.5 h-3.5" style={{ color: "#FBBF24" }} />
                  <span>Severity Index</span>
                </div>
                <div className="font-medium" style={{ color: "#B6CCBF" }}>Stage 2 (Moderate)</div>
              </div>
            </div>

            {/* Rule 4: Main button: Launch Live Plant Scanner uses #22C55E with #04130B text */}
            <button
              onClick={onGetStarted}
              className="glow-button w-full py-3 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
            >
              <ShieldCheck className="w-4 h-4 text-[#04130B]" />
              <span>Launch Live Plant Scanner</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

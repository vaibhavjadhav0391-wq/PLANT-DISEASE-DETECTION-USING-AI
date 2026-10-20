import React from "react";
import {
  ScanEye,
  Percent,
  CloudSunRain,
  Languages,
  FileText,
  Activity,
  Flame,
} from "lucide-react";

interface FeaturesProps {
  language: string;
}

export const Features: React.FC<FeaturesProps> = ({ language }) => {
  const cards = [
    {
      icon: <ScanEye className="w-6 h-6 text-[#22C55E]" />,
      title: "Intelligent Disease Detection",
      titleMr: "बुद्धिमत्तापूर्ण रोग निदान",
      desc: "Deep convolutional neural network trained on 38 distinct plant disease classes across 14+ Indian and global crop varieties.",
      descMr: "१४+ प्रमुख पिकांमधील ३८ रोगांचे अचूक निदान करणारे प्रगत कृत्रिम बुद्धिमत्ता मॉडेल.",
      tag: "Deep CNN",
    },
    {
      icon: <Flame className="w-6 h-6 text-[#FBBF24]" />,
      title: "Explainable AI Heatmaps",
      titleMr: "पारदर्शक उष्णता नकाशे (Grad-CAM)",
      desc: "Grad-CAM visual overlays highlight exact infected leaf regions so farmers understand the exact visual basis of the prediction.",
      descMr: "पानावरील संसर्गग्रस्त भाग हायलाइट करून रोगाचे मूळ कारण स्पष्टपणे दाखवणारे तंत्रज्ञान.",
      tag: "Explainable AI",
    },
    {
      icon: <Percent className="w-6 h-6 text-[#FBBF24]" />,
      title: "Disease Severity Analysis",
      titleMr: "रोग तीव्रता विश्लेषण",
      desc: "Quantifies leaf infection surface area into Mild, Moderate, or Severe categories to advise whether spraying is urgently required.",
      descMr: "संसर्गाचे क्षेत्रफळ मोजून रोग प्राथमिक, मध्यम की तीव्र अवस्थेत आहे हे ठरवून त्यानुसार उपाययोजना.",
      tag: "Severity Score",
    },
    {
      icon: <CloudSunRain className="w-6 h-6 text-[#22C55E]" />,
      title: "Weather-Based Risk Alerts",
      titleMr: "हवामान आधारित धोका इशारा",
      desc: "Cross-checks real-time local humidity and ambient temperatures against fungal and bacterial multiplication thresholds.",
      descMr: "स्थानिक तापमान व आर्द्रतेचा अभ्यास करून बुरशी व जिवाणू वाढीचा धोका आधीच ओळखतो.",
      tag: "Live Microclimate",
    },
    {
      icon: <Languages className="w-6 h-6 text-[#22C55E]" />,
      title: "Marathi AI Farmer Assistant",
      titleMr: "मराठी शेतकरी मित्र AI सहाय्यक",
      desc: "Provides structured agronomic guidance in regional mother tongues (मराठी & हिंदी) covering organic, chemical, and preventive measures.",
      descMr: "रासायनिक फवारणी, सेंद्रिय उपाय आणि प्रतिबंधात्मक काळजी याबाबत मराठीत सहज व सोपा सल्ला.",
      tag: "स्थानिक भाषा",
    },
    {
      icon: <FileText className="w-6 h-6 text-[#22C55E]" />,
      title: "Crop Health History & PDF",
      titleMr: "आरोग्य अहवाल व PDF डाऊनलोड",
      desc: "Generates instant downloadable PDF diagnostic reports with photographic evidence, treatments, and advisory notes.",
      descMr: "प्रत्येक निदानासाठी फोटो व शिफारसींसह डाऊनलोड करता येणारा अधिकृत शेती आरोग्य अहवाल.",
      tag: "PDF Report",
    },
  ];

  return (
    <section id="features" className="relative py-24 px-6 sm:px-12 z-20">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
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
            <Activity className="w-3.5 h-3.5 text-[#22C55E]" />
            <span>Advanced Agronomy Features</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4" style={{ color: "#F4FBF6" }}>
            Designed for Precision Agriculture
          </h2>
          <p className="text-sm sm:text-base leading-relaxed" style={{ color: "#B6CCBF" }}>
            Plant Disease Detection Using AI bridges state-of-the-art computer vision with field-ready agronomy decision support.
          </p>
        </div>

        {/* 6 Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((c, idx) => (
            <div
              key={idx}
              className="glass-card p-6 sm:p-8 rounded-2xl flex flex-col justify-between group"
              style={{
                backgroundColor: "#0F2A1E",
                borderColor: "#1F4A35",
                borderWidth: "1px",
                borderStyle: "solid",
              }}
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110 shadow-inner"
                    style={{
                      backgroundColor: "rgba(34, 197, 94, 0.12)",
                      borderColor: "#1F4A35",
                      borderWidth: "1px",
                      borderStyle: "solid",
                    }}
                  >
                    {c.icon}
                  </div>
                  <span
                    className="text-[11px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-full"
                    style={{
                      backgroundColor: "rgba(34, 197, 94, 0.15)",
                      color: "#22C55E",
                      borderColor: "#1F4A35",
                      borderWidth: "1px",
                      borderStyle: "solid",
                    }}
                  >
                    {c.tag}
                  </span>
                </div>

                <h3 className="text-lg font-bold mb-2.5 transition-colors group-hover:text-[#22C55E]" style={{ color: "#F4FBF6" }}>
                  {language === "mr" ? c.titleMr : c.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#B6CCBF" }}>
                  {language === "mr" ? c.descMr : c.desc}
                </p>
              </div>

              <div
                className="mt-6 pt-4 flex items-center justify-between text-xs font-medium"
                style={{
                  borderTop: "1px solid #1F4A35",
                  color: "#22C55E",
                }}
              >
                <span>Production Pipeline</span>
                <span className="group-hover:translate-x-1 transition-transform">✦</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

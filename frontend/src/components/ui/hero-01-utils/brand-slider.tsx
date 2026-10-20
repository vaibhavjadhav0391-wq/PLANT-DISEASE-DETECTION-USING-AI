import React from "react"
import { ShieldCheck, Cpu, Database, CloudSun, Leaf, Microscope } from "lucide-react"

export interface BrandList {
  image: string
  lightimg?: string
  name: string
}

interface BrandSliderProps {
  brandList: BrandList[]
}

const PARTNER_BADGES = [
  { name: "PlantVillage Dataset", icon: <Database className="w-4 h-4 text-[#22C55E]" />, desc: "38 Plant Classes" },
  { name: "TensorFlow 2.15+", icon: <Cpu className="w-4 h-4 text-[#FBBF24]" />, desc: "Deep CNN Weights" },
  { name: "Grad-CAM Explainable AI", icon: <Microscope className="w-4 h-4 text-[#BEF264]" />, desc: "Visual Attention Heatmaps" },
  { name: "OpenWeatherMap API", icon: <CloudSun className="w-4 h-4 text-[#22C55E]" />, desc: "Live Weather Correlation" },
  { name: "Smart Agronomy", icon: <Leaf className="w-4 h-4 text-[#22C55E]" />, desc: "Organic & Chemical Remedies" },
  { name: "ISO Agri-Standard", icon: <ShieldCheck className="w-4 h-4 text-[#22C55E]" />, desc: "Verified Pipeline" },
]

export default function BrandSlider({ brandList }: BrandSliderProps) {
  return (
    <section className="py-12 border-y border-[#1F4A35] bg-[#0A1B14]/70 backdrop-blur-sm overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <p className="text-center text-xs uppercase tracking-widest font-bold text-[#B6CCBF]/60 mb-8">
          Powered By Industry-Leading Datasets, Frameworks & Agronomic Research
        </p>

        {/* Carousel / Badge grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 items-center justify-center">
          {PARTNER_BADGES.map((item, idx) => (
            <div
              key={idx}
              className="p-3.5 rounded-2xl bg-[#0F2A1E] border border-[#1F4A35] flex flex-col items-center justify-center text-center group hover:border-[#22C55E] transition-all duration-300 hover:scale-105"
            >
              <div className="w-8 h-8 rounded-xl bg-[#07130E] border border-[#1F4A35] flex items-center justify-center mb-2 shadow-inner group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <span className="text-xs font-bold text-[#F4FBF6] line-clamp-1">{item.name}</span>
              <span className="text-[10px] text-[#B6CCBF]/70 line-clamp-1">{item.desc}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

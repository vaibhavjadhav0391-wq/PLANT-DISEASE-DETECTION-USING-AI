import React from "react"
import { Sparkles, ArrowRight, CheckCircle2, Cpu } from "lucide-react"
import { Button } from "@/components/ui/button"

export interface AvatarList {
  image: string
}

interface HeroSectionProps {
  avatarList: AvatarList[]
  onLaunchApp?: () => void
}

export default function HeroSection({ avatarList, onLaunchApp }: HeroSectionProps) {
  return (
    <section id="home" className="relative pt-16 pb-20 px-4 sm:px-8 overflow-hidden">
      {/* Glow highlight */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] rounded-full blur-[140px] pointer-events-none opacity-35"
        style={{ background: "radial-gradient(circle, rgba(34, 197, 94, 0.28) 0%, transparent 70%)" }}
      />

      <div className="max-w-6xl mx-auto text-center relative z-10">
        {/* Top announcement pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-8 bg-[#0F2A1E]/85 backdrop-blur-md border border-[#1F4A35] text-[#22C55E] shadow-xl hover:border-[#22C55E]/60 transition-colors">
          <Sparkles className="w-3.5 h-3.5 text-[#22C55E] animate-pulse" />
          <span>Next-Gen Agricultural Intelligence Engine</span>
        </div>

        {/* Main hero title */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#F4FBF6] mb-6 leading-tight drop-shadow-md">
          Detect Earlier. <br className="hidden sm:inline" />
          <span className="bg-gradient-to-r from-[#22C55E] via-[#BEF264] to-[#22C55E] bg-clip-text text-transparent">
            Grow Smarter.
          </span>{" "}
          Protect Every Leaf.
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg max-w-2xl mx-auto text-[#B6CCBF] mb-10 leading-relaxed drop-shadow">
          Upload any crop leaf photograph. Our dual-stream deep CNN accurately classifies 38 disease categories, maps Grad-CAM visual heatmaps, and correlates live weather risk in seconds.
        </p>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
          <Button
            onClick={onLaunchApp}
            size="lg"
            className="w-full sm:w-auto bg-[#22C55E] hover:bg-[#16A34A] text-[#07130E] font-extrabold text-sm px-8 py-6 rounded-2xl shadow-xl shadow-[#22C55E]/20"
          >
            <span className="flex items-center justify-center gap-2">
              <span>Launch Live Plant Scanner</span>
              <ArrowRight className="w-4 h-4" />
            </span>
          </Button>

          <Button
            asChild
            variant="outline"
            size="lg"
            className="w-full sm:w-auto border-[#1F4A35] bg-[#0F2A1E] text-[#F4FBF6] hover:bg-[#173B2B] text-sm px-8 py-6 rounded-2xl"
          >
            <a href="#features" className="flex items-center justify-center gap-2">
              <Cpu className="w-4 h-4 text-[#22C55E]" />
              <span>Explore 38 Disease Classes</span>
            </a>
          </Button>
        </div>

        {/* Avatar Social Proof & Stats */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-6 border-t border-[#1F4A35]/60 max-w-xl mx-auto">
          <div className="flex items-center -space-x-3">
            {avatarList.map((avatar, idx) => (
              <img
                key={idx}
                src={avatar.image}
                alt={`Contributor ${idx + 1}`}
                className="w-10 h-10 rounded-full border-2 border-[#0F2A1E] object-cover shadow-md"
              />
            ))}
          </div>

          <div className="text-left text-xs sm:text-sm">
            <div className="flex items-center gap-1 font-bold text-[#F4FBF6]">
              <CheckCircle2 className="w-4 h-4 text-[#22C55E]" />
              <span>99.2% Test Accuracy • 54,305 Leaf Samples</span>
            </div>
            <p className="text-[#B6CCBF]/80 text-xs">
              Trained on PlantVillage 38-class benchmark with Grad-CAM explainability
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

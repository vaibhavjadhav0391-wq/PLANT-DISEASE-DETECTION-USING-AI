"use client";

import { motion } from "motion/react";
import { FlowingLogos, Logo } from "@/components/ui/logo-cloud-marquee-utils/flowing-logos";
import { cn } from "@/lib/utils";

interface LogoCloudMarqueeProps {
  title?: string;
  description?: string;
  data?: Logo[];
  className?: string;
}

export const defaultTechLogos: Logo[] = [
  {
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
    name: "TensorFlow Deep CNN",
  },
  {
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg",
    name: "PyTorch Pipeline",
  },
  {
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    name: "Python 3.10 Engine",
  },
  {
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg",
    name: "OpenCV Vision",
  },
  {
    image: "https://cdn.21st.dev/assets/localized/91d1c562d12ba69aa7525d3782c6c6223b90e302073d59769dfce665ab9a83b7.svg",
    name: "Grad-CAM Heatmaps",
  },
  {
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    name: "React 19 UI",
  },
  {
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    name: "TypeScript Strict",
  },
  {
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
    name: "Tailwind CSS v4",
  },
  {
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
    name: "FastAPI / Flask",
  },
  {
    image: "https://cdn.21st.dev/assets/localized/d824c259df6b2b2962fbef96e68a6877cab689b19246e3dc34ac9e7b144d32bd.svg",
    name: "PlantVillage 54k Dataset",
  },
];

export default function LogoCloudMarquee({
  title = "Built with Industry-Leading AI Technologies",
  description = "Engineered with dual-stream deep neural networks, Grad-CAM visual pathology maps, live meteorological risk correlation, and real-time GPU accelerated inference.",
  data = defaultTechLogos,
  className,
}: LogoCloudMarqueeProps) {
  const words = title.split(" ");

  return (
    <section id="technologies" className={cn("relative w-full overflow-hidden py-20 bg-[#07130E]", className)}>
      <div className="mx-auto max-w-6xl px-6">
        {/* Badge */}
        <div className="flex justify-center mb-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#0F2A1E] border border-[#1F4A35] text-[#22C55E]">
            <span className="w-2 h-2 rounded-full bg-[#22C55E] animate-ping" />
            <span>Core Architecture & Technology Stack</span>
          </div>
        </div>

        <h2 className="relative z-10 mx-auto max-w-4xl text-center text-3xl font-extrabold tracking-tight text-[#F4FBF6] md:text-5xl lg:text-6xl">
          {words.map((word, index) => {
            const isHighlighted = word.toLowerCase().includes("ai") || word.toLowerCase().includes("technologies");
            return (
              <motion.span
                key={`${word}-${index}`}
                initial={{ opacity: 0, filter: "blur(6px)", y: 12 }}
                whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.06,
                  ease: "easeInOut",
                }}
                className={cn(
                  "mr-2 inline-block",
                  isHighlighted
                    ? "bg-gradient-to-r from-[#22C55E] via-[#BEF264] to-[#22C55E] bg-clip-text text-transparent"
                    : "text-[#F4FBF6]"
                )}
              >
                {word}
              </motion.span>
            );
          })}
        </h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="relative z-10 mx-auto mt-6 max-w-3xl text-center text-base text-[#B6CCBF] md:text-lg leading-relaxed"
        >
          {description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="relative mt-14"
        >
          {/* Subtle edge fade overlays matching background #07130E */}
          <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-28 bg-gradient-to-r from-[#07130E] via-[#07130E]/75 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-28 bg-gradient-to-l from-[#07130E] via-[#07130E]/75 to-transparent" />
          
          <FlowingLogos
            data={data}
            variant="wide"
            className="[--duration:35s]"
          />
        </motion.div>
      </div>
    </section>
  );
}

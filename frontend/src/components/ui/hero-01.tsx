import HeroSection from "@/components/ui/hero-01-utils/hero";
import type { NavigationSection } from "@/components/ui/hero-01-utils/header";
import Header from "@/components/ui/hero-01-utils/header";
import BrandSlider, {
  BrandList,
} from "@/components/ui/hero-01-utils/brand-slider";
import type { AvatarList } from "@/components/ui/hero-01-utils/hero";

interface AgencyHeroSectionProps {
  onLaunchApp?: () => void;
  activeLanguage?: string;
  onLanguageChange?: (lang: string) => void;
}

export default function AgencyHeroSection({
  onLaunchApp,
  activeLanguage = "en",
  onLanguageChange,
}: AgencyHeroSectionProps) {
  const avatarList: AvatarList[] = [
    {
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80",
    },
    {
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80",
    },
    {
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80",
    },
    {
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80",
    },
  ];

  const navigationData: NavigationSection[] = [
    {
      title: "Home",
      href: "#home",
      isActive: true,
    },
    {
      title: "Features",
      href: "#features",
    },
    {
      title: "How It Works",
      href: "#how-it-works",
    },
    {
      title: "AI Ribbon",
      href: "#path-showcase",
    },
    {
      title: "Team",
      href: "#team",
    },
  ];

  const brandList: BrandList[] = [
    {
      image:
        "https://cdn.21st.dev/assets/localized/d824c259df6b2b2962fbef96e68a6877cab689b19246e3dc34ac9e7b144d32bd.svg",
      name: "PlantVillage",
    },
    {
      image:
        "https://cdn.21st.dev/assets/localized/266083df0c7d0633f145889af4700d18e62b8f2c068fd8ab73d5a94b87a5a5cb.svg",
      name: "TensorFlow",
    },
    {
      image:
        "https://cdn.21st.dev/assets/localized/91d1c562d12ba69aa7525d3782c6c6223b90e302073d59769dfce665ab9a83b7.svg",
      name: "Grad-CAM AI",
    },
    {
      image:
        "https://cdn.21st.dev/assets/localized/f50b06ae2b7bf86d199b0ac986a47442f4a198d2f6dd81a9fe83c43022608498.svg",
      name: "OpenWeather",
    },
    {
      image:
        "https://cdn.21st.dev/assets/localized/3ad67ddda671655df765a507c9bcc7b67e4138a1ffe903ace17cef99c5c972a3.svg",
      name: "Smart Agronomy",
    },
  ];

  return (
    <div className="relative w-full bg-[#07130E] text-[#B6CCBF]">
      <Header
        navigationData={navigationData}
        onLaunchApp={onLaunchApp}
        activeLanguage={activeLanguage}
        onLanguageChange={onLanguageChange}
      />
      <main>
        <HeroSection avatarList={avatarList} onLaunchApp={onLaunchApp} />
        <BrandSlider brandList={brandList} />
      </main>
    </div>
  );
}

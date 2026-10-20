import React, { useState } from "react";
import { LogoCloud } from "@/components/ui/logo-cloud-15";
import { StarburstThanksFooter } from "@/components/ui/starburst-thanks-footer";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { HowItWorks } from "@/components/HowItWorks";
import { Team } from "@/components/Team";
import { CropPathShowcase } from "@/components/CropPathShowcase";
import { DiseaseDetection } from "@/components/DiseaseDetection";

export default function App() {
  const [currentPage, setCurrentPage] = useState<"landing" | "diagnosis">("landing");
  const [language, setLanguage] = useState<string>("en");

  const handleLaunchApp = () => {
    setCurrentPage("diagnosis");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBackToHome = () => {
    setCurrentPage("landing");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="relative min-h-screen bg-[#07130E] text-[#B6CCBF] overflow-x-hidden">
      {/* Background with subtle radial green glow behind hero section */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[750px] pointer-events-none"
          style={{
            background: "radial-gradient(circle at 50% 25%, rgba(34, 197, 94, 0.08) 0%, rgba(7, 19, 14, 0) 70%)",
          }}
        />
        <div className="absolute inset-0 bg-[#07130E]" style={{ zIndex: -1 }} />
      </div>

      {/* Floating Navbar */}
      <Navbar
        onLaunchApp={handleLaunchApp}
        activeLanguage={language}
        onLanguageChange={setLanguage}
      />

      {/* Dynamic View Router */}
      {currentPage === "landing" ? (
        <main className="relative z-10 w-full">
          {/* Hero Section */}
          <Hero onGetStarted={handleLaunchApp} language={language} />

          {/* Multilingual / Crops Animated LogoCloud */}
          <section id="multilingual" className="relative z-20 py-10 w-full">
            <LogoCloud />
          </section>

          {/* Feature Highlights */}
          <Features language={language} />

          {/* How It Works */}
          <HowItWorks />

          {/* Interactive Marquee Along SVG Path - Crop Disease Class Ribbon */}
          <CropPathShowcase />

          {/* Dedicated Team Members Section */}
          <Team />

          {/* Interactive Starburst Thanks Footer */}
          <section className="relative z-20 pt-8 pb-12 w-full">
            <StarburstThanksFooter
              name="Plant Disease Detection Using AI"
              thanks={["Thank you", "धन्यवाद", "आभार", "Shukriya", "Merci", "Gracias"]}
              tagline="for supporting smart farming"
              signoff="Plant Disease Detection Using AI • Project Team: Shrutee Bhosale, Priya Tathe, Khushi Chaudhari, Vaishnavi Divte"
              links={[
                {
                  caption: "Team Lead & Developer",
                  label: "SHRUTEE BHOSALE (EN: 25511510304)",
                  href: "#team",
                },
                {
                  caption: "Project Developer",
                  label: "PRIYA V. TATHE (EN: 25511510299)",
                  href: "#team",
                },
                {
                  caption: "Project Developer",
                  label: "KHUSHI K. CHAUDHARI (EN: 24651230440)",
                  href: "#team",
                },
                {
                  caption: "Project Developer",
                  label: "VAISHNAVI S. DIVTE (EN: 24511510377)",
                  href: "#team",
                },
              ]}
              email=""
              phone=""
              background="#0F2A1E"
              ink="#F4FBF6"
              accent="#22C55E"
              height="auto"
              starPoints={12}
              grain={0.04}
            />
          </section>
        </main>
      ) : (
        <main className="relative z-10 w-full">
          <DiseaseDetection
            onBackToHome={handleBackToHome}
            language={language}
          />
        </main>
      )}
    </div>
  );
}

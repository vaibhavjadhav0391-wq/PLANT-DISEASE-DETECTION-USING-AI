import React, { useState } from "react";
import { Leaf, Menu, X, Globe, Sparkles } from "lucide-react";

interface NavbarProps {
  onLaunchApp: () => void;
  activeLanguage: string;
  onLanguageChange: (lang: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onLaunchApp,
  activeLanguage,
  onLanguageChange,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);

  const languages = [
    { code: "en", label: "English" },
    { code: "mr", label: "मराठी" },
    { code: "hi", label: "हिंदी" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-8 py-4 transition-all">
      <div
        className="max-w-7xl mx-auto flex items-center justify-between px-5 py-3 rounded-2xl shadow-2xl"
        style={{
          backgroundColor: "#0F2A1E",
          borderColor: "#1F4A35",
          borderWidth: "1px",
          borderStyle: "solid",
        }}
      >
        {/* Logo: PLANT DISEASE DETECTION USING AI */}
        <a href="#home" className="flex items-center gap-2.5 text-[#F4FBF6] font-bold text-sm sm:text-base tracking-tight group">
          <div
            className="w-9 h-9 rounded-xl flex items-center justify-center shadow-lg transition-transform group-hover:scale-105 shrink-0"
            style={{
              backgroundColor: "#22C55E",
              color: "#04130B",
              boxShadow: "0 0 15px rgba(34, 197, 94, 0.35)",
            }}
          >
            <Leaf className="w-5 h-5 text-[#04130B]" />
          </div>
          <span className="text-[#F4FBF6] font-extrabold tracking-wider uppercase text-xs sm:text-sm">
            Plant Disease Detection <span style={{ color: "#22C55E" }}>Using AI</span>
          </span>
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center gap-8 text-sm font-medium text-[#B6CCBF]">
          <a href="#home" className="hover:text-[#22C55E] transition-colors">Home</a>
          <a href="#features" className="hover:text-[#22C55E] transition-colors">Features</a>
          <a href="#how-it-works" className="hover:text-[#22C55E] transition-colors">How It Works</a>
          <a href="#multilingual" className="hover:text-[#22C55E] transition-colors">Languages</a>
          <a href="#team" className="hover:text-[#22C55E] transition-colors">Team</a>
        </div>

        {/* Actions: Language & CTA */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Language Selector */}
          <div className="relative">
            <button
              onClick={() => setLangDropdownOpen(!langDropdownOpen)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium transition-colors"
              style={{
                backgroundColor: "#0F2A1E",
                borderColor: "#1F4A35",
                borderWidth: "1px",
                borderStyle: "solid",
                color: "#B6CCBF",
              }}
            >
              <Globe className="w-3.5 h-3.5" style={{ color: "#22C55E" }} />
              <span>{languages.find((l) => l.code === activeLanguage)?.label || "English"}</span>
            </button>

            {langDropdownOpen && (
              <div
                className="absolute right-0 mt-2 w-32 py-1 rounded-xl shadow-xl z-50"
                style={{
                  backgroundColor: "#0F2A1E",
                  borderColor: "#1F4A35",
                  borderWidth: "1px",
                  borderStyle: "solid",
                }}
              >
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      onLanguageChange(lang.code);
                      setLangDropdownOpen(false);
                    }}
                    className="w-full text-left px-3 py-1.5 text-xs transition-colors"
                    style={{
                      backgroundColor: activeLanguage === lang.code ? "rgba(34, 197, 94, 0.15)" : "transparent",
                      color: activeLanguage === lang.code ? "#22C55E" : "#B6CCBF",
                      fontWeight: activeLanguage === lang.code ? "600" : "400",
                    }}
                  >
                    {lang.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Launch App Button */}
          <button
            onClick={onLaunchApp}
            className="glow-button flex items-center gap-2 px-5 py-2 rounded-xl font-bold text-xs sm:text-sm tracking-wide uppercase cursor-pointer"
          >
            <Sparkles className="w-4 h-4 fill-[#04130B]" />
            <span>Launch App</span>
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            onClick={onLaunchApp}
            className="glow-button px-3 py-1.5 rounded-lg font-bold text-xs"
          >
            Launch
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#B6CCBF] hover:text-[#22C55E]"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div
          className="lg:hidden mt-2 p-4 rounded-2xl flex flex-col gap-3 text-sm animate-in fade-in"
          style={{
            backgroundColor: "#0F2A1E",
            borderColor: "#1F4A35",
            borderWidth: "1px",
            borderStyle: "solid",
            color: "#B6CCBF",
          }}
        >
          <a
            href="#home"
            onClick={() => setMobileMenuOpen(false)}
            className="py-1.5 hover:text-[#22C55E]"
          >
            Home
          </a>
          <a
            href="#features"
            onClick={() => setMobileMenuOpen(false)}
            className="py-1.5 hover:text-[#22C55E]"
          >
            Features
          </a>
          <a
            href="#how-it-works"
            onClick={() => setMobileMenuOpen(false)}
            className="py-1.5 hover:text-[#22C55E]"
          >
            How It Works
          </a>
          <a
            href="#multilingual"
            onClick={() => setMobileMenuOpen(false)}
            className="py-1.5 hover:text-[#22C55E]"
          >
            Languages & Crops
          </a>
          <a
            href="#team"
            onClick={() => setMobileMenuOpen(false)}
            className="py-1.5 hover:text-[#22C55E]"
          >
            Project Team
          </a>

          <div
            className="pt-2 flex items-center justify-between"
            style={{ borderTop: "1px solid #1F4A35" }}
          >
            <span className="text-xs text-[#22C55E]">Language:</span>
            <div className="flex gap-2">
              {languages.map((l) => (
                <button
                  key={l.code}
                  onClick={() => onLanguageChange(l.code)}
                  className="px-2 py-1 text-xs rounded-lg border transition-colors"
                  style={{
                    borderColor: activeLanguage === l.code ? "#22C55E" : "#1F4A35",
                    backgroundColor: activeLanguage === l.code ? "rgba(34, 197, 94, 0.15)" : "transparent",
                    color: activeLanguage === l.code ? "#22C55E" : "#B6CCBF",
                    fontWeight: activeLanguage === l.code ? "bold" : "normal",
                  }}
                >
                  {l.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

import React from "react";
import { Leaf, Heart } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer id="about" className="relative border-t border-emerald-500/15 py-12 px-6 sm:px-12 z-20 bg-[#050b07]/80">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-emerald-600 flex items-center justify-center">
            <Leaf className="w-4 h-4 text-emerald-950 font-black" />
          </div>
          <span className="font-bold text-white text-base tracking-tight">
            Plant Disease Detection <span className="text-emerald-400">Using AI</span>
          </span>
          <span className="text-xs text-emerald-100/50 hidden sm:inline">
            • AI-Powered Decision Support for Indian & Global Farmers
          </span>
        </div>

        <div className="flex items-center gap-6 text-xs text-emerald-100/60">
          <a href="#home" className="hover:text-emerald-300 transition-colors">Home</a>
          <a href="#features" className="hover:text-emerald-300 transition-colors">Features</a>
          <a href="#how-it-works" className="hover:text-emerald-300 transition-colors">How It Works</a>
          <a href="#team" className="hover:text-emerald-300 transition-colors">Our Team</a>
        </div>

        <div className="text-xs text-emerald-100/40 flex items-center gap-1">
          <span>Built with</span>
          <Heart className="w-3.5 h-3.5 text-emerald-500 fill-emerald-500" />
          <span>for sustainable agronomy</span>
        </div>
      </div>
    </footer>
  );
};

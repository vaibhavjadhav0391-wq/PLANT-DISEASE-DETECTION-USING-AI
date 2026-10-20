import React from "react";
import { Globe, Languages, Sprout, Apple, Wheat, Grape, Sparkles, Leaf } from "lucide-react";

export const Logo01 = () => (
  <div className="flex items-center gap-3 px-4 py-2 rounded-xl bg-emerald-950/40 border border-emerald-500/20 text-emerald-200">
    <Globe className="w-6 h-6 text-emerald-400" />
    <div className="text-left">
      <div className="text-sm font-semibold text-emerald-300">English</div>
      <div className="text-[11px] text-emerald-400/70">AI Diagnostic Core</div>
    </div>
  </div>
);

export const Logo02 = () => (
  <div className="flex items-center gap-3 px-4 py-2 rounded-xl bg-emerald-950/40 border border-emerald-500/20 text-emerald-200">
    <Languages className="w-6 h-6 text-emerald-400" />
    <div className="text-left">
      <div className="text-sm font-semibold text-emerald-300">मराठी</div>
      <div className="text-[11px] text-emerald-400/70">शेतकरी मित्र AI सहाय्यक</div>
    </div>
  </div>
);

export const Logo03 = () => (
  <div className="flex items-center gap-3 px-4 py-2 rounded-xl bg-emerald-950/40 border border-emerald-500/20 text-emerald-200">
    <Sparkles className="w-6 h-6 text-emerald-400" />
    <div className="text-left">
      <div className="text-sm font-semibold text-emerald-300">हिंदी</div>
      <div className="text-[11px] text-emerald-400/70">कृषि स्वास्थ्य मार्गदर्शक</div>
    </div>
  </div>
);

export const Logo04 = () => (
  <div className="flex items-center gap-3 px-4 py-2 rounded-xl bg-emerald-950/40 border border-emerald-500/20 text-emerald-200">
    <Sprout className="w-6 h-6 text-emerald-400" />
    <div className="text-left">
      <div className="text-sm font-semibold text-emerald-300">Tomato (टोमॅटो)</div>
      <div className="text-[11px] text-emerald-400/70">10 Disease Classes</div>
    </div>
  </div>
);

export const Logo05 = () => (
  <div className="flex items-center gap-3 px-4 py-2 rounded-xl bg-emerald-950/40 border border-emerald-500/20 text-emerald-200">
    <Wheat className="w-6 h-6 text-emerald-400" />
    <div className="text-left">
      <div className="text-sm font-semibold text-emerald-300">Corn / Maize (मका)</div>
      <div className="text-[11px] text-emerald-400/70">Common Rust & Blight</div>
    </div>
  </div>
);

export const Logo06 = () => (
  <div className="flex items-center gap-3 px-4 py-2 rounded-xl bg-emerald-950/40 border border-emerald-500/20 text-emerald-200">
    <Grape className="w-6 h-6 text-emerald-400" />
    <div className="text-left">
      <div className="text-sm font-semibold text-emerald-300">Grape (द्राक्षे)</div>
      <div className="text-[11px] text-emerald-400/70">Black Rot & Esca</div>
    </div>
  </div>
);

export const Logo07 = () => (
  <div className="flex items-center gap-3 px-4 py-2 rounded-xl bg-emerald-950/40 border border-emerald-500/20 text-emerald-200">
    <Apple className="w-6 h-6 text-emerald-400" />
    <div className="text-left">
      <div className="text-sm font-semibold text-emerald-300">Apple (सफरचंद)</div>
      <div className="text-[11px] text-emerald-400/70">Scab & Cedar Rust</div>
    </div>
  </div>
);

export const Logo08 = () => (
  <div className="flex items-center gap-3 px-4 py-2 rounded-xl bg-emerald-950/40 border border-emerald-500/20 text-emerald-200">
    <Leaf className="w-6 h-6 text-emerald-400" />
    <div className="text-left">
      <div className="text-sm font-semibold text-emerald-300">Potato (बटाटा)</div>
      <div className="text-[11px] text-emerald-400/70">Early & Late Blight</div>
    </div>
  </div>
);

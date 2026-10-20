"use client";

import React, { useEffect, useState } from "react";
import { Menu, X, Moon, Sun, Sparkles, Globe, ChevronDown, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Toggle } from "@/components/ui/toggle";
import { useTheme } from "next-themes";
import { BrandLogo } from "@/components/BrandLogo";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

export interface NavigationSection {
  title: string;
  href: string;
  isActive?: boolean;
}

interface HeaderProps {
  navigationData?: NavigationSection[];
  onLaunchApp?: () => void;
  activeLanguage?: string;
  onLanguageChange?: (lang: string) => void;
  className?: string;
}

const defaultNavItems: NavigationSection[] = [
  { title: "Home", href: "#home", isActive: true },
  { title: "Features", href: "#features" },
  { title: "How It Works", href: "#how-it-works" },
  { title: "Technologies", href: "#technologies" },
  { title: "Team", href: "#team" },
];

const cropCategories = [
  {
    title: "Tomato Pathology",
    href: "#features",
    description: "Detect Early Blight, Late Blight, Leaf Mold & Septoria leaf spot.",
  },
  {
    title: "Potato Blights",
    href: "#features",
    description: "Identify Phytophthora infestans (Late Blight) and Alternaria solani.",
  },
  {
    title: "Corn & Maize",
    href: "#features",
    description: "Screen for Common Rust, Northern Leaf Blight & Cercospora.",
  },
  {
    title: "Apple & Orchards",
    href: "#features",
    description: "Spot Apple Scab, Black Rot and Cedar Apple Rust on leaves.",
  },
  {
    title: "Grapevine Health",
    href: "#features",
    description: "Diagnostic coverage for Black Rot, Esca, and Isariopsis Blight.",
  },
  {
    title: "Grad-CAM Heatmaps",
    href: "#features",
    description: "Transparent visual attribution highlighting disease focal zones.",
  },
];

export const Header: React.FC<HeaderProps> = ({
  navigationData = defaultNavItems,
  onLaunchApp,
  activeLanguage = "en",
  onLanguageChange,
  className,
}) => {
  const [menuState, setMenuState] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);

  const languages = [
    { code: "en", label: "English" },
    { code: "mr", label: "मराठी" },
    { code: "hi", label: "हिंदी" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={cn("sticky top-0 z-50 w-full transition-all duration-300", className)}>
      <nav
        data-state={menuState ? "active" : "inactive"}
        className={cn(
          "w-full px-3 sm:px-6 transition-all duration-300",
          isScrolled ? "py-2" : "py-3 border-b border-[#1F4A35]/40 bg-[#07130E]/60 backdrop-blur-md"
        )}
      >
        <div
          className={cn(
            "mx-auto transition-all duration-300",
            isScrolled
              ? "max-w-6xl rounded-2xl border border-[#1F4A35] bg-[#0F2A1E]/85 shadow-2xl backdrop-blur-xl px-4 py-1.5"
              : "max-w-7xl px-2"
          )}
        >
          <div className="relative flex items-center justify-between gap-4">
            {/* Brand Logo */}
            <div className="flex items-center justify-between w-full lg:w-auto">
              <a href="#home" aria-label="Home" className="flex items-center gap-2 group">
                <BrandLogo size="sm" />
              </a>

              {/* Mobile Hamburger Button */}
              <div className="flex items-center gap-2 lg:hidden">
                {onLanguageChange && (
                  <button
                    onClick={() => {
                      const next = activeLanguage === "en" ? "mr" : activeLanguage === "mr" ? "hi" : "en";
                      onLanguageChange(next);
                    }}
                    className="px-2.5 py-1 text-xs rounded-lg bg-[#0F2A1E] border border-[#1F4A35] text-[#22C55E] font-bold uppercase"
                  >
                    {activeLanguage}
                  </button>
                )}
                <button
                  onClick={() => setMenuState(!menuState)}
                  aria-label={menuState ? "Close Menu" : "Open Menu"}
                  className="p-2 rounded-xl text-[#F4FBF6] hover:text-[#22C55E] hover:bg-[#143826] transition-colors"
                >
                  {menuState ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Desktop Navigation Menu (Center) */}
            <div className="hidden lg:flex items-center justify-center">
              <NavigationMenu>
                <NavigationMenuList className="gap-1">
                  {navigationData.slice(0, 3).map((item, idx) => (
                    <NavigationMenuItem key={idx}>
                      <NavigationMenuLink
                        asChild
                        className={cn(
                          navigationMenuTriggerStyle(),
                          "bg-transparent text-xs font-semibold tracking-wider uppercase transition-colors",
                          item.isActive
                            ? "text-[#22C55E] bg-[#143826]/70"
                            : "text-[#B6CCBF] hover:text-[#22C55E] hover:bg-[#143826]/40"
                        )}
                      >
                        <a href={item.href}>{item.title}</a>
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  ))}

                  {/* Dropdown for Disease Diagnostic Classes */}
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="bg-transparent text-xs font-semibold tracking-wider uppercase text-[#B6CCBF] hover:text-[#22C55E] hover:bg-[#143826]/40">
                      Diagnostics
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="p-3 bg-[#0F2A1E] border border-[#1F4A35] shadow-2xl rounded-2xl">
                      <ul className="grid gap-2.5 md:grid-cols-2 max-w-lg lg:w-[480px]">
                        {cropCategories.map((crop) => (
                          <ListItem key={crop.title} title={crop.title} href={crop.href}>
                            {crop.description}
                          </ListItem>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  {navigationData.slice(3).map((item, idx) => (
                    <NavigationMenuItem key={`extra-${idx}`}>
                      <NavigationMenuLink
                        asChild
                        className={cn(
                          navigationMenuTriggerStyle(),
                          "bg-transparent text-xs font-semibold tracking-wider uppercase transition-colors text-[#B6CCBF] hover:text-[#22C55E] hover:bg-[#143826]/40"
                        )}
                      >
                        <a href={item.href}>{item.title}</a>
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>
            </div>

            {/* Desktop Right Actions: Language Switcher, Theme Toggle, CTA */}
            <div className="hidden lg:flex items-center gap-3">
              {/* Language Switcher */}
              {onLanguageChange && (
                <div className="relative">
                  <button
                    onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold uppercase tracking-wider bg-[#0F2A1E] border border-[#1F4A35] text-[#B6CCBF] hover:text-[#22C55E] hover:border-[#22C55E]/50 transition-colors shadow-sm"
                  >
                    <Globe className="w-3.5 h-3.5 text-[#22C55E]" />
                    <span>{activeLanguage}</span>
                    <ChevronDown className="w-3 h-3 text-[#B6CCBF]" />
                  </button>

                  {langDropdownOpen && (
                    <div className="absolute right-0 mt-2 w-32 py-1.5 rounded-xl shadow-2xl bg-[#0F2A1E] border border-[#1F4A35] z-50 backdrop-blur-xl">
                      {languages.map((l) => (
                        <button
                          key={l.code}
                          onClick={() => {
                            onLanguageChange(l.code);
                            setLangDropdownOpen(false);
                          }}
                          className={cn(
                            "w-full text-left px-3 py-1.5 text-xs transition-colors flex items-center justify-between",
                            activeLanguage === l.code
                              ? "text-[#22C55E] font-bold bg-[#143826]"
                              : "text-[#B6CCBF] hover:bg-[#143826]/70 hover:text-white"
                          )}
                        >
                          <span>{l.label}</span>
                          {activeLanguage === l.code && <Check className="w-3.5 h-3.5 text-[#22C55E]" />}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* Mode Toggle */}
              <ModeToggle />

              {/* Launch Scanner CTA */}
              <Button
                onClick={onLaunchApp}
                className="bg-[#22C55E] hover:bg-[#16A34A] text-[#07130E] font-extrabold text-xs px-4 py-2 rounded-xl shadow-lg shadow-[#22C55E]/20 hover:shadow-[#22C55E]/35 hover:scale-[1.02] transition-all"
              >
                <Sparkles className="w-3.5 h-3.5 mr-1.5" />
                <span>Launch Scanner</span>
              </Button>
            </div>
          </div>

          {/* Mobile Dropdown Panel */}
          {menuState && (
            <div className="lg:hidden mt-3 pt-3 border-t border-[#1F4A35] flex flex-col gap-2 pb-3 animate-in fade-in-50 slide-in-from-top-2">
              <ul className="space-y-1">
                {navigationData.map((item, idx) => (
                  <li key={idx}>
                    <a
                      href={item.href}
                      onClick={() => setMenuState(false)}
                      className="block px-3 py-2 rounded-xl text-sm font-semibold text-[#B6CCBF] hover:text-[#22C55E] hover:bg-[#143826] transition-colors"
                    >
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>

              <div className="pt-2 border-t border-[#1F4A35]/60 flex flex-col gap-2">
                <Button
                  onClick={() => {
                    setMenuState(false);
                    onLaunchApp?.();
                  }}
                  className="w-full bg-[#22C55E] hover:bg-[#16A34A] text-[#07130E] font-extrabold text-xs py-3 rounded-xl shadow-lg"
                >
                  <Sparkles className="w-4 h-4 mr-2" />
                  <span>Launch Live Plant Scanner</span>
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string; title: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <a
          href={href}
          className="block select-none space-y-1 rounded-xl p-3 leading-none no-underline outline-none transition-colors hover:bg-[#143826] focus:bg-[#143826]"
        >
          <div className="text-xs font-bold leading-none text-[#F4FBF6]">{title}</div>
          <p className="line-clamp-2 text-[11px] leading-snug text-[#B6CCBF]/80 mt-1">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
}

export function ModeToggle() {
  let themeContext: { theme?: string; setTheme?: (t: string) => void } = {};
  try {
    themeContext = useTheme();
  } catch {
    // Graceful fallback outside ThemeProvider
  }
  const [mounted, setMounted] = useState(false);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const currentTheme = themeContext.theme ?? (isDark ? "dark" : "light");

  const handleToggle = () => {
    const next = currentTheme === "dark" ? "light" : "dark";
    setIsDark(next === "dark");
    if (themeContext.setTheme) {
      themeContext.setTheme(next);
    }
  };

  return (
    <div className="flex items-center">
      <Toggle
        className="group bg-[#0F2A1E] border border-[#1F4A35] text-[#B6CCBF] hover:text-[#22C55E] hover:bg-[#143826] cursor-pointer size-8 rounded-xl transition-all"
        pressed={currentTheme === "dark"}
        onPressedChange={handleToggle}
        aria-label={`Switch to ${currentTheme === "dark" ? "light" : "dark"} mode`}
      >
        <Moon
          size={14}
          className="shrink-0 transition-all text-[#22C55E]"
          aria-hidden="true"
        />
      </Toggle>
    </div>
  );
}

export default Header;

import React, { useState } from "react"
import { Menu, Leaf, Sparkles, Globe } from "lucide-react"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"

import { BrandLogo } from "@/components/BrandLogo"

export interface NavigationSection {
  title: string
  href: string
  isActive?: boolean
}

interface HeaderProps {
  navigationData: NavigationSection[]
  onLaunchApp?: () => void
  activeLanguage?: string
  onLanguageChange?: (lang: string) => void
}

export default function Header({
  navigationData,
  onLaunchApp,
  activeLanguage = "en",
  onLanguageChange,
}: HeaderProps) {
  const [langDropdownOpen, setLangDropdownOpen] = useState(false)

  const languages = [
    { code: "en", label: "English" },
    { code: "mr", label: "मराठी" },
    { code: "hi", label: "हिंदी" },
  ]

  return (
    <header className="sticky top-0 z-40 w-full px-4 sm:px-8 py-3 backdrop-blur-md bg-[#07130E]/85 border-b border-[#1F4A35]">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Brand */}
        <a href="#home" className="group">
          <BrandLogo size="md" />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <NavigationMenu>
            <NavigationMenuList className="gap-2">
              {navigationData.map((item, idx) => (
                <NavigationMenuItem key={idx}>
                  <NavigationMenuLink
                    href={item.href}
                    className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider transition-colors ${
                      item.isActive
                        ? "text-[#22C55E] bg-[#0F2A1E] border border-[#1F4A35]"
                        : "text-[#B6CCBF] hover:text-[#22C55E] hover:bg-[#0F2A1E]/50"
                    }`}
                  >
                    {item.title}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          {/* Language Switcher */}
          {onLanguageChange && (
            <div className="relative">
              <button
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium bg-[#0F2A1E] border border-[#1F4A35] text-[#B6CCBF] hover:text-[#22C55E] transition-colors"
              >
                <Globe className="w-3.5 h-3.5 text-[#22C55E]" />
                <span className="uppercase">{activeLanguage}</span>
              </button>

              {langDropdownOpen && (
                <div className="absolute right-0 mt-2 w-32 py-1 rounded-xl shadow-xl bg-[#0F2A1E] border border-[#1F4A35] z-50">
                  {languages.map((l) => (
                    <button
                      key={l.code}
                      onClick={() => {
                        onLanguageChange(l.code)
                        setLangDropdownOpen(false)
                      }}
                      className={`w-full text-left px-3 py-1.5 text-xs transition-colors flex items-center justify-between ${
                        activeLanguage === l.code
                          ? "text-[#22C55E] font-bold bg-[#173B2B]"
                          : "text-[#B6CCBF] hover:bg-[#173B2B]/60 hover:text-white"
                      }`}
                    >
                      <span>{l.label}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}

          <Button
            onClick={onLaunchApp}
            className="bg-[#22C55E] hover:bg-[#16A34A] text-[#07130E] font-bold text-xs px-4 py-2 rounded-xl shadow-lg shadow-[#22C55E]/20"
          >
            <Sparkles className="w-3.5 h-3.5 mr-1.5" />
            <span>Launch App</span>
          </Button>
        </div>

        {/* Mobile Navigation Sheet */}
        <div className="md:hidden flex items-center gap-2">
          {onLanguageChange && (
            <button
              onClick={() => {
                const next = activeLanguage === "en" ? "mr" : activeLanguage === "mr" ? "hi" : "en"
                onLanguageChange(next)
              }}
              className="px-2.5 py-1 text-xs rounded-lg bg-[#0F2A1E] border border-[#1F4A35] text-[#22C55E] font-bold uppercase"
            >
              {activeLanguage}
            </button>
          )}

          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="w-9 h-9 border-[#1F4A35] bg-[#0F2A1E] text-[#F4FBF6]"
              >
                <Menu className="w-4 h-4" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-[#0F2A1E] border-[#1F4A35] text-[#F4FBF6]">
              <SheetHeader className="mb-6 text-left">
                <SheetTitle className="text-[#F4FBF6]">
                  <BrandLogo size="sm" />
                </SheetTitle>
              </SheetHeader>
              <div className="flex flex-col gap-3">
                {navigationData.map((item, idx) => (
                  <a
                    key={idx}
                    href={item.href}
                    className="px-3 py-2 rounded-lg text-sm font-semibold transition-colors text-[#B6CCBF] hover:text-[#22C55E] hover:bg-[#173B2B]"
                  >
                    {item.title}
                  </a>
                ))}
                <div className="pt-4 border-t border-[#1F4A35]">
                  <Button
                    onClick={onLaunchApp}
                    className="w-full bg-[#22C55E] hover:bg-[#16A34A] text-[#07130E] font-bold"
                  >
                    Launch Plant Scanner
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

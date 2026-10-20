import React from "react"
import { Menu, Leaf, Sparkles } from "lucide-react"
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

export interface NavigationSection {
  title: string
  href: string
  isActive?: boolean
}

interface HeaderProps {
  navigationData: NavigationSection[]
}

export default function Header({ navigationData }: HeaderProps) {
  return (
    <header className="sticky top-0 z-40 w-full px-4 sm:px-8 py-3 backdrop-blur-md bg-[#07130E]/85 border-b border-[#1F4A35]">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Brand */}
        <a href="#home" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-xl bg-[#22C55E] flex items-center justify-center text-[#07130E] shadow-md shadow-[#22C55E]/30 transition-transform group-hover:scale-105">
            <Leaf className="w-5 h-5 text-[#07130E]" />
          </div>
          <span className="text-sm sm:text-base font-extrabold tracking-tight uppercase text-[#F4FBF6]">
            Plant Disease Detection <span className="text-[#22C55E]">Using AI</span>
          </span>
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

          <Button
            asChild
            className="bg-[#22C55E] hover:bg-[#16A34A] text-[#07130E] font-bold text-xs px-4 py-2 rounded-xl shadow-lg shadow-[#22C55E]/20"
          >
            <a href="#home" className="flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Launch App</span>
            </a>
          </Button>
        </div>

        {/* Mobile Navigation Sheet */}
        <div className="md:hidden">
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
                <SheetTitle className="text-[#F4FBF6] flex items-center gap-2">
                  <Leaf className="w-5 h-5 text-[#22C55E]" />
                  <span>Plant Disease AI</span>
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
                    asChild
                    className="w-full bg-[#22C55E] hover:bg-[#16A34A] text-[#07130E] font-bold"
                  >
                    <a href="#home">Launch Plant Scanner</a>
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

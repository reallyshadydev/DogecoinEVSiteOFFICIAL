"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  Menu,
  Home,
  Info,
  MessageCircle,
  Github,
  Users,
  ExternalLink,
  Phone,
  Map,
  BarChart3,
  BookOpen,
  Pickaxe,
  TrendingUp,
  Heart,
} from "lucide-react"
import { XIcon } from "@/components/x-icon"
import { cn } from "@/lib/utils"

const navigationItems = [
  { name: "Home", href: "/", icon: Home },
  { name: "About", href: "/about", icon: Info },
  { name: "Mining", href: "/mining", icon: Pickaxe },
  { name: "Resources", href: "/resources", icon: BookOpen },
  { name: "Node Map", href: "/node-map", icon: Map },
  { name: "Widgets", href: "/widgets", icon: BarChart3 },
  { name: "Market Data", href: "/market-data", icon: TrendingUp },
  { name: "Donations", href: "/donations", icon: Heart },
  { name: "Contact", href: "/contact", icon: Phone },
]

export default function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isPWA, setIsPWA] = useState(false)
  const pathname = usePathname()

  // Detect PWA mode
  useEffect(() => {
    const checkPWA = () => {
      const isStandalone = window.matchMedia("(display-mode: standalone)").matches
      const isIOSStandalone = (window.navigator as any).standalone === true
      const isAndroidPWA = window.matchMedia("(display-mode: standalone)").matches

      setIsPWA(isStandalone || isIOSStandalone || isAndroidPWA)
    }

    checkPWA()

    // Listen for display mode changes
    const mediaQuery = window.matchMedia("(display-mode: standalone)")
    mediaQuery.addEventListener("change", checkPWA)

    return () => mediaQuery.removeEventListener("change", checkPWA)
  }, [])

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
      document.body.style.position = "fixed"
      document.body.style.width = "100%"
    } else {
      document.body.style.overflow = ""
      document.body.style.position = ""
      document.body.style.width = ""
    }

    return () => {
      document.body.style.overflow = ""
      document.body.style.position = ""
      document.body.style.width = ""
    }
  }, [isOpen])

  // For PWA mode - show bottom navigation
  if (isPWA) {
    return (
      <>
        {/* Bottom Navigation Bar for PWA */}
        <div className="md:hidden fixed bottom-0 left-0 right-0 z-[40] pb-safe">
          <div className="absolute inset-0 bg-slate-900/95 backdrop-blur-xl border-t border-white/10"></div>
          <div className="relative px-2 pt-2 pb-4">
            <div className="flex items-center justify-around">
              {navigationItems.slice(0, 4).map((item) => {
                const Icon = item.icon
                const isActive = pathname === item.href
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`flex flex-col items-center gap-1 p-2 rounded-xl transition-all duration-200 min-w-[60px] ${
                      isActive
                        ? "text-white bg-gradient-to-t from-purple-600/20 to-transparent"
                        : "text-gray-400 hover:text-white active:text-purple-400"
                    }`}
                    style={{ WebkitTapHighlightColor: "transparent" }}
                  >
                    <div
                      className={`p-1 rounded-lg transition-all duration-200 ${
                        isActive ? "bg-gradient-to-br from-purple-500 to-pink-500 shadow-lg" : ""
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-medium leading-tight">{item.name}</span>
                    {isActive && (
                      <div className="w-1 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                    )}
                  </Link>
                )
              })}
            </div>
          </div>
        </div>

        {/* PWA More Menu Overlay */}
        <div
          className={`md:hidden fixed inset-0 z-[50] bg-black/70 backdrop-blur-sm transition-all duration-300 ${
            isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
          onClick={() => setIsOpen(false)}
        />

        <div
          className={`md:hidden fixed bottom-0 left-0 right-0 z-[55] bg-slate-900/95 backdrop-blur-xl border-t border-white/10 transform transition-transform duration-300 ease-out ${
            isOpen ? "translate-y-0" : "translate-y-full"
          }`}
        >
          <div className="p-4 pb-safe">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-white font-bold text-lg">More Options</h3>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 text-gray-400 hover:text-white"
                style={{ WebkitTapHighlightColor: "transparent" }}
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {navigationItems.slice(4).map((item) => {
                const Icon = item.icon
                const isActive = pathname === item.href
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "flex items-center gap-3 p-3 rounded-lg bg-white/10 hover:bg-white/20 transition-all duration-200",
                      isActive
                        ? "bg-purple-100 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400"
                        : "hover:bg-gray-100 dark:hover:bg-gray-800",
                    )}
                  >
                    <Icon className="w-5 h-5 text-purple-400" />
                    <span className="text-white font-medium">{item.name}</span>
                  </Link>
                )
              })}
            </div>
          </div>
        </div>
      </>
    )
  }

  // For mobile browsers - show hamburger menu
  return (
    <>
      {/* Mobile Menu Button - Hamburger for browsers */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden fixed top-4 right-4 z-[60] w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 backdrop-blur-md rounded-full border-2 border-white/20 flex items-center justify-center text-white transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95"
        aria-label="Toggle mobile menu"
        style={{ WebkitTapHighlightColor: "transparent" }}
      >
        <Menu className="w-5 h-5" />
      </button>

      {/* Mobile Menu Overlay */}
      <div
        className={`md:hidden fixed inset-0 z-[50] bg-black/70 backdrop-blur-sm transition-all duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile Menu Slide-out for browsers */}
      <div
        className={`md:hidden fixed top-0 right-0 h-full w-[90vw] max-w-xs bg-slate-900/95 backdrop-blur-xl border-l border-white/10 z-[55] transform transition-transform duration-300 ease-out shadow-2xl ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="pt-16 pb-4 px-4 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">D</span>
              </div>
              <h2 className="text-lg font-bold text-white">DogecoinEV</h2>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex-1 px-4 py-4 overflow-y-auto">
            <nav className="space-y-2">
              {navigationItems.map((item) => {
                const Icon = item.icon
                const isActive = pathname === item.href
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`flex items-center gap-3 p-3 rounded-xl transition-all duration-200 ${
                      isActive
                        ? "bg-gradient-to-r from-purple-600/80 to-pink-600/80 text-white shadow-md"
                        : "text-gray-300 hover:bg-white/10 hover:text-white active:bg-white/20"
                    }`}
                    onClick={() => setIsOpen(false)}
                    style={{ WebkitTapHighlightColor: "transparent" }}
                  >
                    <Icon className="w-5 h-5 flex-shrink-0" />
                    <span className="font-medium">{item.name}</span>
                  </Link>
                )
              })}
            </nav>

            {/* Quick Links */}
            <div className="mt-6 pt-4 border-t border-white/10">
              <h3 className="text-white/70 font-medium mb-3 text-sm uppercase tracking-wider px-3">Quick Links</h3>
              <div className="space-y-1">
                <Link
                  href="https://github.com/DogecoinEV-Foundation/DogecoinEV"
                  target="_blank"
                  className="flex items-center gap-3 p-3 rounded-lg text-gray-300 hover:bg-white/10 hover:text-white transition-all duration-200 active:bg-white/20"
                  onClick={() => setIsOpen(false)}
                  style={{ WebkitTapHighlightColor: "transparent" }}
                >
                  <Github className="w-4 h-4 flex-shrink-0" />
                  <span className="text-sm">GitHub</span>
                  <ExternalLink className="w-3 h-3 ml-auto opacity-50" />
                </Link>
                <Link
                  href="https://discord.gg/SVXHn3RE5K"
                  target="_blank"
                  className="flex items-center gap-3 p-3 rounded-lg text-gray-300 hover:bg-white/10 hover:text-white transition-all duration-200 active:bg-white/20"
                  onClick={() => setIsOpen(false)}
                  style={{ WebkitTapHighlightColor: "transparent" }}
                >
                  <Users className="w-4 h-4 flex-shrink-0" />
                  <span className="text-sm">Discord</span>
                  <ExternalLink className="w-3 h-3 ml-auto opacity-50" />
                </Link>
                <Link
                  href="https://t.me/DEVOFFICIALTG"
                  target="_blank"
                  className="flex items-center gap-3 p-3 rounded-lg text-gray-300 hover:bg-white/10 hover:text-white transition-all duration-200 active:bg-white/20"
                  onClick={() => setIsOpen(false)}
                  style={{ WebkitTapHighlightColor: "transparent" }}
                >
                  <MessageCircle className="w-4 h-4 flex-shrink-0" />
                  <span className="text-sm">Telegram</span>
                  <ExternalLink className="w-3 h-3 ml-auto opacity-50" />
                </Link>
                <Link
                  href="https://t.me/DogecoinEV"
                  target="_blank"
                  className="flex items-center gap-3 p-3 rounded-lg text-gray-300 hover:bg-white/10 hover:text-white transition-all duration-200 active:bg-white/20"
                  onClick={() => setIsOpen(false)}
                  style={{ WebkitTapHighlightColor: "transparent" }}
                >
                  <MessageCircle className="w-4 h-4 flex-shrink-0" />
                  <span className="text-sm">Telegram 中文</span>
                  <ExternalLink className="w-3 h-3 ml-auto opacity-50" />
                </Link>
                <Link
                  href="https://x.com/DogecoinEV_"
                  target="_blank"
                  className="flex items-center gap-3 p-3 rounded-lg text-gray-300 hover:bg-white/10 hover:text-white transition-all duration-200 active:bg-white/20"
                  onClick={() => setIsOpen(false)}
                  style={{ WebkitTapHighlightColor: "transparent" }}
                >
                  <XIcon className="w-4 h-4 flex-shrink-0" />
                  <span className="text-sm">X (Twitter)</span>
                  <ExternalLink className="w-3 h-3 ml-auto opacity-50" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

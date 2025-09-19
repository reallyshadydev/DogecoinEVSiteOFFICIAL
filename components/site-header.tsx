"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function SiteHeader() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigationItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Mining", href: "/mining" },
    { name: "Resources", href: "/resources" },
    { name: "Node Map", href: "/node-map" },
    { name: "Widgets", href: "/widgets" },
    { name: "Market Data", href: "/market-data" },
    { name: "Donations", href: "/donations" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <header className="relative z-40 bg-white/10 backdrop-blur-md border-b border-white/20 sticky top-0">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between py-4">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo.png-BtE0gs3U8sy7930XR6HaF5AW2vdiHj.webp"
                alt="DogecoinEV Logo"
                width={50}
                height={50}
                className="rounded-full group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </div>
            <h1 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              DogecoinEV
            </h1>
          </Link>

          {/* Desktop Hamburger Menu */}
          <div className="hidden md:block">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg hover:bg-white/10 transition-colors duration-300"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-white" />
              ) : (
                <Menu className="w-6 h-6 text-white" />
              )}
            </button>

            {/* Desktop Dropdown Menu */}
            {isMenuOpen && (
              <div className="absolute top-full right-4 mt-2 w-64 bg-slate-900/95 backdrop-blur-xl border border-white/20 rounded-lg shadow-2xl py-2 z-50">
                {navigationItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block px-4 py-3 hover:bg-white/10 transition-colors duration-300 font-medium ${
                      pathname === item.href ? "text-purple-400 bg-purple-400/10" : "text-white"
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Overlay for desktop menu */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-30 md:block hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </header>
  )
}

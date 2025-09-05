"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function SiteHeader() {
  const pathname = usePathname()

  const navigationItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Mining", href: "/mining" },
    { name: "Resources", href: "/resources" },
    { name: "Node Map", href: "/node-map" },
    { name: "Widgets", href: "/widgets" },
    { name: "Market Data", href: "/market-data" },
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

          <nav className="hidden md:flex items-center gap-8">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`hover:text-purple-400 transition-colors duration-300 font-medium ${
                  pathname === item.href ? "text-purple-400" : ""
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  )
}



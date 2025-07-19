"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Star, Calendar, Database, Blocks, DollarSign, MessageCircle } from "lucide-react"
import { PriceWidget } from "@/components/price-widget"
import { BlockHeightWidget } from "@/components/block-height-widget"
import { HalveningWidget } from "@/components/halvening-widget"
import { NetworkStatsWidget } from "@/components/network-stats-widget"

export default function WidgetsPage() {
  const [scrollY, setScrollY] = useState(0)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -inset-10 opacity-50">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
        </div>
      </div>

      {/* Header */}
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

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <Link
                href="/"
                className={`hover:text-purple-400 transition-colors duration-300 font-medium ${
                  pathname === "/" ? "text-purple-400" : ""
                }`}
              >
                Home
              </Link>
              <Link
                href="/about"
                className={`hover:text-purple-400 transition-colors duration-300 font-medium ${
                  pathname === "/about" ? "text-purple-400" : ""
                }`}
              >
                About
              </Link>
              <Link
                href="/mining"
                className={`hover:text-purple-400 transition-colors duration-300 font-medium ${
                  pathname === "/mining" ? "text-purple-400" : ""
                }`}
              >
                Mining
              </Link>
              <Link
                href="/resources"
                className={`hover:text-purple-400 transition-colors duration-300 font-medium ${
                  pathname === "/resources" ? "text-purple-400" : ""
                }`}
              >
                Resources
              </Link>
              <Link
                href="/node-map"
                className={`hover:text-purple-400 transition-colors duration-300 font-medium ${
                  pathname === "/node-map" ? "text-purple-400" : ""
                }`}
              >
                Node Map
              </Link>
              <Link
                href="/widgets"
                className={`hover:text-purple-400 transition-colors duration-300 font-medium ${
                  pathname === "/widgets" ? "text-purple-400" : ""
                }`}
              >
                Widgets
              </Link>
              <Link
                href="/contact"
                className={`hover:text-purple-400 transition-colors duration-300 font-medium ${
                  pathname === "/contact" ? "text-purple-400" : ""
                }`}
              >
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="relative z-10 pb-20 md:pb-0">
        {/* Hero Section */}
        <section className="py-16 md:py-32 text-center relative">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full px-4 py-2 mb-6 md:mb-8 border border-purple-500/30">
                <Star className="w-4 h-4 text-yellow-400" />
                <span className="text-sm font-medium">Live Data Widgets</span>
              </div>

              <h1 className="text-4xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent leading-tight">
                DogecoinEV
                <br />
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400 bg-clip-text text-transparent">
                  Widgets
                </span>
              </h1>

              <p className="text-lg md:text-2xl text-gray-300 mb-8 md:mb-12 leading-relaxed max-w-3xl mx-auto px-4">
                Real-time data widgets for DogecoinEV. Monitor price, network stats, and blockchain metrics.
              </p>
            </div>
          </div>
        </section>

        {/* Live Widgets Section */}
        <section className="py-16 md:py-20 relative">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Live Data Widgets
              </h2>
              <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto px-4">
                Real-time information about the DogecoinEV network and market data
              </p>
            </div>

            <div className="max-w-6xl mx-auto">
              {/* Main Widgets Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12">
                {/* Price Widget */}
                <div className="bg-white/10 backdrop-blur-md p-6 md:p-8 rounded-2xl border border-white/20 hover:border-orange-500/50 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-xl flex items-center justify-center">
                      <DollarSign className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white">Price Tracker</h3>
                  </div>
                  <div className="flex justify-center">
                    <PriceWidget />
                  </div>
                  <p className="text-gray-300 text-sm mt-4 text-center">
                    Live DEV price with 24-hour change data from LiveCoinWatch
                  </p>
                </div>

                {/* Block Height Widget */}
                <div className="bg-white/10 backdrop-blur-md p-6 md:p-8 rounded-2xl border border-white/20 hover:border-blue-500/50 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                      <Blocks className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white">Block Height</h3>
                  </div>
                  <div className="flex justify-center">
                    <BlockHeightWidget />
                  </div>
                  <p className="text-gray-300 text-sm mt-4 text-center">
                    Current blockchain height, difficulty, and mining reward
                  </p>
                </div>

                {/* Halvening Widget */}
                <div className="bg-white/10 backdrop-blur-md p-6 md:p-8 rounded-2xl border border-white/20 hover:border-purple-500/50 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                      <Calendar className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white">Halvening Schedule</h3>
                  </div>
                  <div className="flex justify-center">
                    <HalveningWidget />
                  </div>
                  <p className="text-gray-300 text-sm mt-4 text-center">Next reward halvening countdown and schedule</p>
                </div>
              </div>

              {/* Network Stats Widget */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                <NetworkStatsWidget />

                {/* Blockchain Info Widget */}
                <div className="bg-white/10 backdrop-blur-md p-6 md:p-8 rounded-2xl border border-white/20 hover:border-yellow-500/50 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center">
                      <Database className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white">Blockchain Info</h3>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Launch Date:</span>
                      <span className="text-white font-mono">Jan 26, 2025</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Algorithm:</span>
                      <span className="text-white font-mono">Scrypt</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Network Port:</span>
                      <span className="text-white font-mono">42069</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Merge Mining:</span>
                      <span className="text-white font-mono">Block 30,000+</span>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm mt-4 text-center">Technical blockchain details</p>
                </div>
              </div>

              {/* Widget Integration Info */}
              <div className="mt-12 md:mt-16 bg-white/10 backdrop-blur-md p-6 md:p-8 rounded-2xl border border-white/20">
                <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent text-center">
                  Widget Integration
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-bold text-white mb-3">For Developers</h4>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      These widgets are built with React and can be easily integrated into your own applications. Check
                      our GitHub repository for component source code and API endpoints.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-3">Real-Time Data</h4>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      All widgets display live data from the DogecoinEV network and exchanges. Data is automatically
                      refreshed to ensure accuracy and up-to-date information.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative z-10 bg-white/10 backdrop-blur-md border-t border-white/20 py-8 md:py-12 mb-16 md:mb-0">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <div className="mb-6 md:mb-8">
            <Link href="/" className="inline-flex items-center gap-3 group">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo.png-BtE0gs3U8sy7930XR6HaF5AW2vdiHj.webp"
                alt="DogecoinEV Logo"
                width={40}
                height={40}
                className="rounded-full group-hover:scale-110 transition-transform duration-300"
              />
              <span className="text-lg md:text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                DogecoinEV
              </span>
            </Link>
          </div>

          <div className="flex justify-center gap-4 mb-4">
            <Link
              href="https://twitter.com/DogecoinEV"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 p-2"
              style={{ WebkitTapHighlightColor: "transparent" }}
              aria-label="DogecoinEV Twitter"
              title="DogecoinEV Twitter"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-twitter"
              >
                <path d="M22 4s-.7 2.1-2 3.4c1.6 1.6 3 5.1 3 5.1-1.5-3-5-3-5.6-.4 1.9 2.1 5.4 5.4 9 6.9-3 2.2-7.2 1.1-9.9-2.3 2.6 1.4 4.8 1.3 7.5-.5-5.4-1-9.3-4.2-11.4-9C18 14.3 20 15 22 15.4"></path>
              </svg>
              <span className="sr-only">Twitter</span>
            </Link>
            <Link
              href="https://discord.gg/CtJmV2s9JY"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 p-2"
              style={{ WebkitTapHighlightColor: "transparent" }}
              aria-label="DogecoinEV Discord"
              title="DogecoinEV Discord"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-discord"
              >
                <path d="M17.74 12.26C15.94 11.14 14.15 10.02 12.35 8.9c-.18-.11-.36-.22-.55-.33-1.53.93-3.06 1.86-4.58 2.78-1.8 1.08-2.88 2.19-2.88 2.19s3.42 1.55 4.5 2.12c.6.3 1.2.61 1.79.91.18.1.37.21.55.31 1.53.93 3.06 1.86 4.58 2.78 1.8-1.08 2.88-2.19 2.88-2.19s-3.42-1.55-4.5-2.12c-.6-.3-1.2-.61-1.79-.91-.18-.1-.37-.21-.55-.31 0 0 .21-.13.42-.25 1.79-1.12 3.58-2.24 5.38-3.36ZM16.5 6.75c-1.24 0-2.25 1.01-2.25 2.25s1.01 2.25 2.25 2.25 2.25-1.01 2.25-2.25-1.01-2.25-2.25-2.25ZM7.5 6.75c-1.24 0-2.25 1.01-2.25 2.25s1.01 2.25 2.25 2.25 2.25-1.01 2.25-2.25-1.01-2.25-2.25-2.25Z"></path>
              </svg>
              <span className="sr-only">Discord</span>
            </Link>
            <Link
              href="https://t.me/DogecoinEV"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 p-2"
              style={{ WebkitTapHighlightColor: "transparent" }}
              aria-label="DogecoinEV Telegram Group"
              title="DogecoinEV Telegram Group"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-message-circle"
              >
                <path d="m3 12c0 3.41 2.18 6.34 5.4 7.59-1.22 1.22-1.97 3.05-1.9 4.91.05.83.53 1.44 1.14 1.56.41.08.83-.13 1.12-.41l2.14-2.13 3.13.78c3.42.85 6.28-.92 6.28-4.03 0-3.41-2.18-6.34-5.4-7.59 1.22-1.22 1.97-3.05 1.9-4.91-.05-.83-.53-1.44-1.14-1.56-.41-.08-.83.13-1.12.41L13.26 5.13l-3.13-.78C6.71 3.5 3.85 5.27 3.85 8.38c0 0 0 0 0 0C3 8.67 3 11.33 3 12Z"></path>
              </svg>
              <span className="sr-only">Telegram</span>
            </Link>
            <Link
              href="https://t.me/DogecoinEV"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 p-2"
              style={{ WebkitTapHighlightColor: "transparent" }}
              aria-label="DogecoinEV Chinese Telegram Group"
              title="DogecoinEV Chinese Telegram Group"
            >
              <MessageCircle className="w-6 h-6" />
              <span className="sr-only">Telegram 中文</span>
            </Link>
          </div>

          <p className="text-gray-400 mb-4 md:mb-6 text-sm md:text-base">
            Building the future of blockchain technology, one block at a time.
          </p>
          <p className="text-gray-500 text-xs md:text-sm">© 2025 DogecoinEV Foundation. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

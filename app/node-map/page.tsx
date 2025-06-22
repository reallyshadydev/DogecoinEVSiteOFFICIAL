"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { RefreshCw, Star, MessageCircle } from "lucide-react"
import dynamic from "next/dynamic"

// Dynamically import the map component to avoid SSR issues
const NodeMap = dynamic(() => import("@/components/node-map"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[600px] bg-gray-900 rounded-2xl border border-orange-500/30 flex items-center justify-center">
      <div className="text-center">
        <RefreshCw className="w-8 h-8 animate-spin text-orange-400 mx-auto mb-4" />
        <p className="text-orange-400 text-lg font-bold">Loading node map...</p>
        <p className="text-gray-400 text-sm mt-2">Initializing interactive map</p>
      </div>
    </div>
  ),
})

export default function NodeMapPage() {
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
        {/* Hero Section with Price Widget */}
        <section className="py-8 md:py-16 relative">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500/20 to-yellow-500/20 rounded-full px-4 py-2 mb-6 border border-orange-500/30">
                  <Star className="w-4 h-4 text-yellow-400" />
                  <span className="text-sm font-medium">Live Network Status</span>
                </div>

                <h1 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-orange-200 to-yellow-200 bg-clip-text text-transparent leading-tight">
                  DogecoinEV Network Map
                </h1>

                <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
                  Explore the global DogecoinEV network in real-time. Interactive map showing node distribution
                  worldwide.
                </p>
              </div>

              {/* Map Container */}
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-orange-500/30 p-4 md:p-6">
                <NodeMap />
              </div>

              {/* Map Instructions */}
              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20">
                  <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
                    How to Use the Map
                  </h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                      Click on markers to see node details
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                      Zoom and pan to explore different regions
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      Markers are clustered for better performance
                    </li>
                  </ul>
                </div>

                <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20">
                  <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                    Network Information
                  </h3>
                  <div className="text-gray-300 space-y-2">
                    <div>Real-time data from DogecoinEV explorer</div>
                    <div>Updates automatically every 12 hours</div>
                    <div>Geolocation based on IP addresses</div>
                    <div>Duplicate IPs are consolidated</div>
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
              href="https://twitter.com/DogecoinEv"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-colors duration-300 p-2"
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
                <path d="M22 4s-.7 2.1-2 3.4c1.6 1.6 2.8 3.5 3.2 5.5-1.4-.3-3.1-.8-4.8-1.3-1.6 1.6-3.3 3.3-5.1 4.8-2.3-2.3-4-4-5.7-6.1 2.2 1.1 4.6 1.8 6.9 2.3-.6-1.3-1.8-2.3-3.3-2.7 3.2 1.9 5.2 3.9 6.8 5.7-1-1-2.1-2-3.3-2.6 3 1.8 4.9 3.7 6.1 5.6-1.1-.6-2.3-1.1-3.6-1.7z" />
              </svg>
              <span className="sr-only">Twitter</span>
            </Link>
            <Link
              href="https://discord.gg/CtJmV7YqK5"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-purple-400 transition-colors duration-300 p-2"
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
                <path d="M21 14c-.6-1.1-1.3-2.1-2-3l-1.8-.8c.3-.7.6-1.5.7-2.3.1-.8 0-1.7-.4-2.4-.9-1.7-2-3-3.4-4.2C12.3 2.2 11 2.2 11 2.2S10 3.3 10 4.5c0 .8.2 1.6.5 2.3l-.1.2c0 0-.1 0-.1-.1-.3.7-.6 1.5-.8 2.2l-1.8.8c-.7.9-1.4 2-2 3-.6 1.1-1.3 2.1-2 3v1c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-1z" />
                <path d="M16.5 10.5c-1.4 0-2.5 1.1-2.5 2.5s1.1 2.5 2.5 2.5 2.5-1.1 2.5-2.5-1.1-2.5-2.5-2.5zM7.5 10.5c-1.4 0-2.5 1.1-2.5 2.5s1.1 2.5 2.5 2.5 2.5-1.1 2.5-2.5-1.1-2.5-2.5-2.5z" />
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
              <MessageCircle className="w-6 h-6" />
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

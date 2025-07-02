"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Github, ExternalLink, MessageCircle, Globe, Download, TrendingUp, Database, Zap, Star } from "lucide-react"
import { XIcon } from "@/components/x-icon"

export default function ResourcesPage() {
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
                <span className="text-sm font-medium">Ecosystem Resources</span>
              </div>

              <h1 className="text-4xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent leading-tight">
                Resources &
                <br />
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400 bg-clip-text text-transparent">
                  Links
                </span>
              </h1>

              <p className="text-lg md:text-2xl text-gray-300 mb-8 md:mb-12 leading-relaxed max-w-3xl mx-auto px-4">
                Everything you need to get started with DogecoinEV - from wallets and explorers to trading platforms and
                community links.
              </p>
            </div>
          </div>
        </section>

        {/* Links Section */}
        <section className="py-16 md:py-20 relative">
          <div className="container mx-auto px-4 md:px-6">
            <div className="space-y-12 md:space-y-16">
              {/* Official Resources */}
              <div>
                <h3 className="text-xl md:text-2xl font-bold mb-6 md:mb-8 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Official Resources
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                  {[
                    {
                      name: "GitHub Repository",
                      href: "https://github.com/DogecoinEV-Foundation/DogecoinEV",
                      icon: Github,
                      description: "View and contribute to our open-source code",
                    },
                    {
                      name: "Source Code Download",
                      href: "https://github.com/DogecoinEV-Foundation/DogecoinEV/archive/refs/heads/main.zip",
                      icon: Download,
                      description: "Download the latest source code",
                    },
                    {
                      name: "Whitepaper",
                      href: "https://github.com/DogecoinEV-Foundation/DOGECOINEV-WHITEPAPER/blob/main/DOGECOINEV-WHITEPAPER",
                      icon: ExternalLink,
                      description: "Read our technical documentation",
                    },
                  ].map((item, index) => (
                    <Link
                      key={index}
                      href={item.href}
                      target="_blank"
                      className="group block p-4 md:p-6 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 hover:border-purple-500/50 transition-all duration-300 transform hover:scale-105"
                      style={{ WebkitTapHighlightColor: "transparent" }}
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                          <item.icon className="w-5 h-5 text-white flex-shrink-0" />
                        </div>
                        <span className="font-semibold text-white group-hover:text-purple-300 transition-colors duration-300 text-sm md:text-base">
                          {item.name}
                        </span>
                      </div>
                      <p className="text-gray-400 text-sm">{item.description}</p>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Explorers */}
              <div>
                <h3 className="text-xl md:text-2xl font-bold mb-6 md:mb-8 text-center bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Block Explorers
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                  {[
                    {
                      name: "Block Explorer",
                      href: "https://explorer.dogecoinev.com/",
                      description: "Primary blockchain explorer",
                    },
                    {
                      name: "Block Explorer 2",
                      href: "https://explorer2.dogecoinev.com",
                      description: "Alternative blockchain explorer",
                    },
                    {
                      name: "Mempool Explorer",
                      href: "https://dev-mempool.space",
                      description: "View mempool and transaction data",
                    },
                  ].map((item, index) => (
                    <Link
                      key={index}
                      href={item.href}
                      target="_blank"
                      className="group block p-4 md:p-6 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105"
                      style={{ WebkitTapHighlightColor: "transparent" }}
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                          <Database className="w-5 h-5 text-white flex-shrink-0" />
                        </div>
                        <span className="font-semibold text-white group-hover:text-blue-300 transition-colors duration-300 text-sm md:text-base">
                          {item.name}
                        </span>
                      </div>
                      <p className="text-gray-400 text-sm">{item.description}</p>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Wallets */}
              <div>
                <h3 className="text-xl md:text-2xl font-bold mb-6 md:mb-8 text-center bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                  Wallets
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                  {[
                    {
                      name: "MyDEV Wallet",
                      href: "https://mydevwallet.com",
                      description: "Web-based wallet for DogecoinEV",
                    },
                    {
                      name: "Core Wallet (Windows)",
                      href: "https://github.com/DogecoinEV-Foundation/DogecoinEV/releases/download/v1.1.0-update1/dogecoinev-qt.1.exe",
                      description: "Official desktop wallet for Windows",
                    },
                    {
                      name: "Plugz Wallet (Mobile)",
                      href: "https://Blockchainplugz.com",
                      description: "Mobile wallet application",
                    },
                    {
                      name: "Dedoo Wallet (Browser Extension)",
                      href: "https://chromewebstore.google.com/detail/dedoo-wallet/idkbhaiccmgojcojeciglmbcjfpocpol",
                      description: "Multi-chain browser extension wallet",
                      website: "https://dedoo.xyz/",
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="group block p-4 md:p-6 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 hover:border-green-500/50 transition-all duration-300 transform hover:scale-105"
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                          <Zap className="w-5 h-5 text-white flex-shrink-0" />
                        </div>
                        <span className="font-semibold text-white group-hover:text-green-300 transition-colors duration-300 text-sm md:text-base">
                          {item.name}
                        </span>
                      </div>
                      <p className="text-gray-400 text-sm mb-3">{item.description}</p>
                      <div className="flex flex-col gap-2">
                        <Link
                          href={item.href}
                          target="_blank"
                          className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors duration-300 text-sm"
                          style={{ WebkitTapHighlightColor: "transparent" }}
                        >
                          <ExternalLink className="w-4 h-4" />
                          {item.name.includes("Extension") ? "Install Extension" : "Download"}
                        </Link>
                        {item.website && (
                          <Link
                            href={item.website}
                            target="_blank"
                            className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors duration-300 text-sm"
                            style={{ WebkitTapHighlightColor: "transparent" }}
                          >
                            <Globe className="w-4 h-4" />
                            Learn More
                          </Link>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Trading */}
              <div>
                <h3 className="text-xl md:text-2xl font-bold mb-6 md:mb-8 text-center bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                  Trading Platforms
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                  {[
                    {
                      name: "MecaCEX Exchange",
                      href: "https://mecacex.com/market/DEVUSDT",
                      description: "Professional trading platform",
                    },
                    {
                      name: "Exbitron Exchange",
                      href: "https://app.exbitron.com/exchange/?market=DEV-USDT",
                      description: "Trade DEV/USDT pairs",
                    },
                    {
                      name: "NestEx Exchange",
                      href: "https://nex.nestexchange.com/market/DEV-USDT",
                      description: "Trade DEV/USDT pairs on NestEx",
                    },
                  ].map((item, index) => (
                    <Link
                      key={index}
                      href={item.href}
                      target="_blank"
                      className="group block p-4 md:p-6 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 hover:border-yellow-500/50 transition-all duration-300 transform hover:scale-105"
                      style={{ WebkitTapHighlightColor: "transparent" }}
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center">
                          <TrendingUp className="w-5 h-5 text-white flex-shrink-0" />
                        </div>
                        <span className="font-semibold text-white group-hover:text-yellow-300 transition-colors duration-300 text-sm md:text-base">
                          {item.name}
                        </span>
                      </div>
                      <p className="text-gray-400 text-sm">{item.description}</p>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Community */}
              <div>
                <h3 className="text-xl md:text-2xl font-bold mb-6 md:mb-8 text-center bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">
                  Join Our Community
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
                  {[
                    {
                      name: "Discord",
                      href: "https://discord.gg/SVXHn3RE5K",
                      icon: MessageCircle,
                      description: "Join our Discord server",
                    },
                    {
                      name: "Telegram",
                      href: "https://t.me/DEVOFFICIALTG",
                      icon: MessageCircle,
                      description: "Official Telegram group",
                    },
                    {
                      name: "Telegram 中文",
                      href: "https://t.me/DogecoinEV",
                      icon: MessageCircle,
                      description: "Chinese community group",
                    },
                    {
                      name: "X",
                      href: "https://x.com/DogecoinEV_",
                      icon: XIcon,
                      description: "Follow us on X",
                    },
                    {
                      name: "BitcoinTalk",
                      href: "https://bitcointalk.org/index.php?topic=5529709.0",
                      icon: Globe,
                      description: "Discussion forum",
                    },
                  ].map((item, index) => (
                    <Link
                      key={index}
                      href={item.href}
                      target="_blank"
                      className="group block p-4 md:p-6 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 hover:border-pink-500/50 transition-all duration-300 transform hover:scale-105"
                      style={{ WebkitTapHighlightColor: "transparent" }}
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-rose-500 rounded-lg flex items-center justify-center">
                          <item.icon className="w-5 h-5 text-white flex-shrink-0" />
                        </div>
                        <span className="font-semibold text-white group-hover:text-pink-300 transition-colors duration-300 text-sm md:text-base">
                          {item.name}
                        </span>
                      </div>
                      <p className="text-gray-400 text-sm">{item.description}</p>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 md:py-20 relative">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Ready to Get Started?
              </h2>
              <p className="text-lg md:text-xl text-gray-300 mb-8 md:mb-12 leading-relaxed px-4">
                Download a wallet, join our community, or start exploring the DogecoinEV ecosystem today.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-3 md:gap-4">
                <Link
                  href="/"
                  onClick={() => {
                    // Scroll to top when navigating to home
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }}
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 min-h-[48px]"
                  style={{ WebkitTapHighlightColor: "transparent" }}
                >
                  Back to Home
                </Link>
                <Link
                  href="https://mecacex.com/market/DEVUSDT"
                  target="_blank"
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 min-h-[48px]"
                  style={{ WebkitTapHighlightColor: "transparent" }}
                >
                  <TrendingUp className="w-4 h-4" />
                  Buy DEV
                </Link>
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

          <p className="text-gray-400 mb-4 md:mb-6 text-sm md:text-base">
            Building the future of blockchain technology, one block at a time.
          </p>
          <p className="text-gray-500 text-xs md:text-sm">© 2025 DogecoinEV Foundation. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

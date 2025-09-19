"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  ExternalLink,
  Globe,
  Download,
  Zap,
  Star,
  ArrowRight,
  TrendingUp,
} from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

export default function WalletsPage() {
  const [scrollY, setScrollY] = useState(0)
  const pathname = usePathname()
  const [buyModalOpen, setBuyModalOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const exchanges = [
    {
      name: "BitGoGet",
      url: "https://bitgoget.com/spot/DEVUSDT",
      pair: "DEV/USDT",
      description: "Primary exchange",
    },
    {
      name: "BitGoGet",
      url: "https://bitgoget.com/spot/DEVBGG",
      pair: "DEV/BGG",
      description: "Alternative trading pair",
    },
    {
      name: "Exbitron",
      url: "https://app.exbitron.com/exchange/?market=DEV-USDT",
      pair: "DEV/USDT",
      description: "Active trading with high volume",
    },
    {
      name: "Nestex",
      url: "https://trade.nestexchange.com/spot/DEV",
      pair: "DEV Spot Trading",
      description: "Modern trading interface",
    },
  ]

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

      <main className="relative z-10 pb-20 md:pb-0">
        {/* Hero Section */}
        <section className="py-16 md:py-32 text-center relative">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full px-4 py-2 mb-6 md:mb-8 border border-green-500/30">
                <Zap className="w-4 h-4 text-green-400" />
                <span className="text-sm font-medium">Secure Your DEV</span>
              </div>

              <h1 className="text-4xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-green-200 to-emerald-200 bg-clip-text text-transparent leading-tight">
                DEV
                <br />
                <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent">
                  Wallets
                </span>
              </h1>

              <p className="text-lg md:text-2xl text-gray-300 mb-8 md:mb-12 leading-relaxed max-w-3xl mx-auto px-4">
                Choose the perfect wallet to store, send, and receive your DogecoinEV tokens securely.
              </p>
            </div>
          </div>
        </section>

        {/* Wallets Section */}
        <section className="py-16 md:py-20 relative">
          <div className="container mx-auto px-4 md:px-6">
            <div className="space-y-12 md:space-y-16">
              {/* Wallets */}
              <div>
                <h3 className="text-xl md:text-2xl font-bold mb-6 md:mb-8 text-center bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                  Available Wallets
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

              {/* Wallet Features */}
              <div>
                <h3 className="text-xl md:text-2xl font-bold mb-6 md:mb-8 text-center bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Wallet Features
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  {[
                    {
                      title: "Secure Storage",
                      description: "Your private keys are encrypted and stored securely on your device",
                      icon: "🔐",
                    },
                    {
                      title: "Easy Transactions",
                      description: "Send and receive DEV tokens with just a few clicks",
                      icon: "⚡",
                    },
                    {
                      title: "Multi-Platform",
                      description: "Available on desktop, web, and mobile platforms",
                      icon: "📱",
                    },
                    {
                      title: "Open Source",
                      description: "All wallets are open source and audited for security",
                      icon: "🔍",
                    },
                  ].map((feature, index) => (
                    <div
                      key={index}
                      className="p-4 md:p-6 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 hover:border-blue-500/50 transition-all duration-300"
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <div className="text-2xl">{feature.icon}</div>
                        <h4 className="font-semibold text-white text-sm md:text-base">
                          {feature.title}
                        </h4>
                      </div>
                      <p className="text-gray-400 text-sm">{feature.description}</p>
                    </div>
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
              <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                Ready to Get Started?
              </h2>
              <p className="text-lg md:text-xl text-gray-300 mb-8 md:mb-12 leading-relaxed px-4">
                Download a wallet today and start managing your DogecoinEV tokens securely.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-3 md:gap-4">
                <Link
                  href="/resources"
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 min-h-[48px]"
                  style={{ WebkitTapHighlightColor: "transparent" }}
                >
                  View All Resources
                </Link>
                <Dialog open={buyModalOpen} onOpenChange={setBuyModalOpen}>
                  <DialogTrigger asChild>
                    <button
                      className="group inline-flex items-center justify-center gap-3 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-green-500/25 min-h-[48px]"
                      style={{ WebkitTapHighlightColor: "transparent" }}
                    >
                      <TrendingUp className="w-5 h-5" />
                      Buy DEV
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-lg bg-slate-900 border-purple-500/30 text-white">
                    <DialogHeader>
                      <DialogTitle className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                        Buy DEV
                      </DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4">
                      <p className="text-gray-300 text-sm">DogecoinEV (DEV) is available on the following exchanges:</p>

                      <div className="space-y-3">
                        {exchanges.map((exchange, index) => (
                          <div
                            key={index}
                            className="bg-white/10 backdrop-blur-md p-4 rounded-lg border border-white/20 hover:border-purple-500/50 transition-all duration-300"
                          >
                            <div className="flex items-center justify-between">
                              <div>
                                <h3 className="font-semibold text-white">{exchange.name}</h3>
                                <p className="text-sm text-gray-400">{exchange.pair}</p>
                                <p className="text-xs text-gray-500 mt-1">{exchange.description}</p>
                              </div>
                              <Link
                                href={exchange.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 px-4 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 text-sm"
                                onClick={() => setBuyModalOpen(false)}
                              >
                                Trade Now
                              </Link>
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-3">
                        <p className="text-blue-300 text-xs">
                          <strong>Note:</strong> Always verify you're on the official exchange website before trading.
                          Be cautious of phishing sites and double-check URLs.
                        </p>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
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

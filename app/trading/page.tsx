"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  ExternalLink,
  TrendingUp,
  DollarSign,
  Star,
  ArrowRight,
  Globe,
  BarChart3,
  Shield,
} from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import SiteFooter from "@/components/site-footer"

export default function TradingPage() {
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
    {
      name: "Komodo",
      url: "https://app.komodoplatform.com",
      pair: "DEV Trading",
      description: "DEX with atomic swap technology",
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
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-full px-4 py-2 mb-6 md:mb-8 border border-yellow-500/30">
                <TrendingUp className="w-4 h-4 text-yellow-400" />
                <span className="text-sm font-medium">Trade DEV</span>
              </div>

              <h1 className="text-4xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-yellow-200 to-orange-200 bg-clip-text text-transparent leading-tight">
                DEV
                <br />
                <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
                  Trading
                </span>
              </h1>

              <p className="text-lg md:text-2xl text-gray-300 mb-8 md:mb-12 leading-relaxed max-w-3xl mx-auto px-4">
                Trade DogecoinEV on multiple exchanges with competitive rates and secure platforms.
              </p>
            </div>
          </div>
        </section>

        {/* Trading Section */}
        <section className="py-16 md:py-20 relative">
          <div className="container mx-auto px-4 md:px-6">
            <div className="space-y-12 md:space-y-16">
              {/* Trading Platforms */}
              <div>
                <h3 className="text-xl md:text-2xl font-bold mb-6 md:mb-8 text-center bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                  Available Exchanges
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  {[
                    {
                      name: "Exbitron Exchange",
                      href: "https://app.exbitron.com/exchange/?market=DEV-USDT",
                      description: "Trade DEV/USDT pairs",
                      pair: "DEV/USDT",
                    },
                    {
                      name: "NestEx Exchange",
                      href: "https://nex.nestexchange.com/market/DEV-USDT",
                      description: "Trade DEV/USDT pairs on NestEx",
                      pair: "DEV/USDT",
                    },
                    {
                      name: "Komodo DEX",
                      href: "https://app.komodoplatform.com",
                      description: "Decentralized exchange with atomic swaps",
                      pair: "DEV Trading",
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
                      <p className="text-gray-400 text-sm mb-2">{item.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-500 font-mono">{item.pair}</span>
                        <div className="flex items-center gap-2 text-yellow-400 hover:text-yellow-300 transition-colors duration-300 text-sm">
                          <ExternalLink className="w-4 h-4" />
                          Trade Now
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Trading Features */}
              <div>
                <h3 className="text-xl md:text-2xl font-bold mb-6 md:mb-8 text-center bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                  Trading Features
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  {[
                    {
                      title: "Multiple Pairs",
                      description: "Trade DEV against USDT, BGG, and other major cryptocurrencies",
                      icon: "💱",
                    },
                    {
                      title: "High Liquidity",
                      description: "Access deep order books with competitive spreads",
                      icon: "🌊",
                    },
                    {
                      title: "Secure Trading",
                      description: "All exchanges implement industry-standard security measures",
                      icon: "🔒",
                    },
                    {
                      title: "24/7 Trading",
                      description: "Trade DEV around the clock on supported exchanges",
                      icon: "⏰",
                    },
                  ].map((feature, index) => (
                    <div
                      key={index}
                      className="p-4 md:p-6 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 hover:border-green-500/50 transition-all duration-300"
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

              {/* Trading Tips */}
              <div>
                <h3 className="text-xl md:text-2xl font-bold mb-6 md:mb-8 text-center bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Trading Tips
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                  {[
                    {
                      title: "Do Your Research",
                      description: "Always research exchanges before trading and verify you're on official websites",
                      icon: "🔍",
                    },
                    {
                      title: "Start Small",
                      description: "Begin with small amounts to familiarize yourself with the trading process",
                      icon: "📊",
                    },
                    {
                      title: "Secure Storage",
                      description: "Move your DEV to a secure wallet after trading for long-term storage",
                      icon: "🛡️",
                    },
                  ].map((tip, index) => (
                    <div
                      key={index}
                      className="p-4 md:p-6 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 hover:border-blue-500/50 transition-all duration-300"
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <div className="text-2xl">{tip.icon}</div>
                        <h4 className="font-semibold text-white text-sm md:text-base">
                          {tip.title}
                        </h4>
                      </div>
                      <p className="text-gray-400 text-sm">{tip.description}</p>
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
              <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                Ready to Trade?
              </h2>
              <p className="text-lg md:text-xl text-gray-300 mb-8 md:mb-12 leading-relaxed px-4">
                Start trading DEV on our supported exchanges and join the DogecoinEV trading community.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-3 md:gap-4">
                <Link
                  href="/wallets"
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-green-500/25 min-h-[48px]"
                  style={{ WebkitTapHighlightColor: "transparent" }}
                >
                  <Globe className="w-5 h-5" />
                  Get Wallet
                </Link>
                <Link
                  href="/explorers"
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25 min-h-[48px]"
                  style={{ WebkitTapHighlightColor: "transparent" }}
                >
                  <BarChart3 className="w-5 h-5" />
                  View Blockchain
                </Link>
                <Dialog open={buyModalOpen} onOpenChange={setBuyModalOpen}>
                  <DialogTrigger asChild>
                    <button
                      className="group inline-flex items-center justify-center gap-3 bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-500 hover:to-orange-500 px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/25 min-h-[48px]"
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

      <SiteFooter />
    </div>
  )
}

"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  Github,
  Download,
  ExternalLink,
  Code,
  Star,
  ArrowRight,
  TrendingUp,
  Globe,
  BookOpen,
  Terminal,
} from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import SiteFooter from "@/components/site-footer"

export default function DeveloperPage() {
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
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full px-4 py-2 mb-6 md:mb-8 border border-purple-500/30">
                <Code className="w-4 h-4 text-purple-400" />
                <span className="text-sm font-medium">Developer Resources</span>
              </div>

              <h1 className="text-4xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent leading-tight">
                Developer
                <br />
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400 bg-clip-text text-transparent">
                  Resources
                </span>
              </h1>

              <p className="text-lg md:text-2xl text-gray-300 mb-8 md:mb-12 leading-relaxed max-w-3xl mx-auto px-4">
                Access source code, documentation, and development tools to build on the DogecoinEV blockchain.
              </p>
            </div>
          </div>
        </section>

        {/* Developer Section */}
        <section className="py-16 md:py-20 relative">
          <div className="container mx-auto px-4 md:px-6">
            <div className="space-y-12 md:space-y-16">
              {/* Official Resources */}
              <div>
                <h3 className="text-xl md:text-2xl font-bold mb-6 md:mb-8 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Official Resources
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  {[
                    {
                      name: "GitHub Repository",
                      href: "https://github.com/DogecoinEV-Foundation/DogecoinEV",
                      icon: Github,
                      description: "View and contribute to our open-source code",
                    },
                    {
                      name: "Git Repository (Clone)",
                      href: "https://github.com/DogecoinEV-Foundation/DogecoinEV.git",
                      icon: Terminal,
                      description: "Clone the repository for development",
                    },
                    {
                      name: "Latest Release (v1.2.0)",
                      href: "https://github.com/DogecoinEV-Foundation/DogecoinEV/releases/tag/v1.2.0-patch",
                      icon: Star,
                      description: "View the latest release notes and changelog",
                    },
                    {
                      name: "Windows Wallet Download",
                      href: "https://github.com/DogecoinEV-Foundation/DogecoinEV/releases/download/v1.2.0-patch/dogecoinev-qt.exe",
                      icon: Download,
                      description: "Download the Windows desktop wallet",
                    },
                    {
                      name: "Source Code Archive",
                      href: "https://github.com/DogecoinEV-Foundation/DogecoinEV/archive/refs/tags/v1.2.0-patch.zip",
                      icon: Code,
                      description: "Download the latest source code archive",
                    },
                    {
                      name: "ElectrumX Server",
                      href: "https://github.com/DogecoinEV-Foundation/electrumx-dev",
                      icon: ExternalLink,
                      description: "ElectrumX server for DEV blockchain",
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

              {/* Repository Status */}
              <div>
                <h3 className="text-xl md:text-2xl font-bold mb-6 md:mb-8 text-center bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Repository Status
                </h3>
                <div className="bg-white/10 backdrop-blur-md rounded-xl border border-white/20 p-6 md:p-8">
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-400 mb-2">4</div>
                      <div className="text-sm text-gray-400">Forks</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-400 mb-2">19</div>
                      <div className="text-sm text-gray-400">Commits</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-purple-400 mb-2">v1.2.0</div>
                      <div className="text-sm text-gray-400">Latest Release</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-yellow-400 mb-2">4</div>
                      <div className="text-sm text-gray-400">Contributors</div>
                    </div>
                  </div>
                  <div className="mt-6 pt-6 border-t border-white/20">
                    <div className="flex items-center justify-center gap-2 mb-4">
                      <Github className="w-5 h-5 text-gray-400" />
                      <span className="text-sm text-gray-400">Repository Languages</span>
                    </div>
                    <div className="flex flex-wrap justify-center gap-4 text-sm">
                      <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full">C++ 56.3%</span>
                      <span className="px-3 py-1 bg-yellow-500/20 text-yellow-300 rounded-full">Python 13.6%</span>
                      <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full">C 13.3%</span>
                      <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full">Makefile 12.9%</span>
                      <span className="px-3 py-1 bg-orange-500/20 text-orange-300 rounded-full">M4 2.1%</span>
                      <span className="px-3 py-1 bg-gray-500/20 text-gray-300 rounded-full">Shell 0.6%</span>
                    </div>
                    <div className="mt-4 text-center">
                      <Link
                        href="https://github.com/DogecoinEV-Foundation/DogecoinEV"
                        target="_blank"
                        className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors duration-300 text-sm"
                      >
                        <Github className="w-4 h-4" />
                        View on GitHub
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Development Tools */}
              <div>
                <h3 className="text-xl md:text-2xl font-bold mb-6 md:mb-8 text-center bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Development Tools
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  {[
                    {
                      title: "Node Software",
                      description: "Run your own DogecoinEV node to participate in network consensus",
                      icon: "🖥️",
                    },
                    {
                      title: "RPC API",
                      description: "Interact with the blockchain using our JSON-RPC interface",
                      icon: "🔌",
                    },
                    {
                      title: "Block Explorer API",
                      description: "Access blockchain data programmatically through our explorer APIs",
                      icon: "📊",
                    },
                    {
                      title: "Testnet",
                      description: "Test your applications on our development testnet",
                      icon: "🧪",
                    },
                  ].map((tool, index) => (
                    <div
                      key={index}
                      className="p-4 md:p-6 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 hover:border-blue-500/50 transition-all duration-300"
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <div className="text-2xl">{tool.icon}</div>
                        <h4 className="font-semibold text-white text-sm md:text-base">
                          {tool.title}
                        </h4>
                      </div>
                      <p className="text-gray-400 text-sm">{tool.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Getting Started */}
              <div>
                <h3 className="text-xl md:text-2xl font-bold mb-6 md:mb-8 text-center bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                  Getting Started
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                  {[
                    {
                      title: "Read Documentation",
                      description: "Start with our whitepaper and technical documentation",
                      icon: "📚",
                      action: "Read Docs",
                    },
                    {
                      title: "Clone Repository",
                      description: "Get the source code and explore the codebase",
                      icon: "📥",
                      action: "Clone Code",
                    },
                    {
                      title: "Join Community",
                      description: "Connect with other developers in our Discord and Telegram",
                      icon: "👥",
                      action: "Join Discord",
                    },
                  ].map((step, index) => (
                    <div
                      key={index}
                      className="p-4 md:p-6 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 hover:border-green-500/50 transition-all duration-300"
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <div className="text-2xl">{step.icon}</div>
                        <h4 className="font-semibold text-white text-sm md:text-base">
                          {step.title}
                        </h4>
                      </div>
                      <p className="text-gray-400 text-sm mb-3">{step.description}</p>
                      <div className="text-green-400 text-sm font-medium">{step.action}</div>
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
              <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Ready to Build?
              </h2>
              <p className="text-lg md:text-xl text-gray-300 mb-8 md:mb-12 leading-relaxed px-4">
                Start developing on DogecoinEV today and be part of the future of blockchain technology.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-3 md:gap-4">
                <Link
                  href="/resources"
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 min-h-[48px]"
                  style={{ WebkitTapHighlightColor: "transparent" }}
                >
                  <BookOpen className="w-5 h-5" />
                  View All Resources
                </Link>
                <Link
                  href="/explorers"
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25 min-h-[48px]"
                  style={{ WebkitTapHighlightColor: "transparent" }}
                >
                  <Terminal className="w-5 h-5" />
                  Explore Blockchain
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

      <SiteFooter />
    </div>
  )
}
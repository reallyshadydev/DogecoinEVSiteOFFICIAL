"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  MessageCircle,
  Globe,
  Users,
  Star,
  ArrowRight,
  TrendingUp,
  Heart,
  ExternalLink,
} from "lucide-react"
import { XIcon } from "@/components/x-icon"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import SiteFooter from "@/components/site-footer"

export default function CommunityPage() {
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
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500/20 to-rose-500/20 rounded-full px-4 py-2 mb-6 md:mb-8 border border-pink-500/30">
                <Users className="w-4 h-4 text-pink-400" />
                <span className="text-sm font-medium">Join the Community</span>
              </div>

              <h1 className="text-4xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-pink-200 to-rose-200 bg-clip-text text-transparent leading-tight">
                DEV
                <br />
                <span className="bg-gradient-to-r from-pink-400 via-rose-400 to-red-400 bg-clip-text text-transparent">
                  Community
                </span>
              </h1>

              <p className="text-lg md:text-2xl text-gray-300 mb-8 md:mb-12 leading-relaxed max-w-3xl mx-auto px-4">
                Connect with fellow DEV enthusiasts, developers, and supporters across multiple platforms and languages.
              </p>
            </div>
          </div>
        </section>

        {/* Community Section */}
        <section className="py-16 md:py-20 relative">
          <div className="container mx-auto px-4 md:px-6">
            <div className="space-y-12 md:space-y-16">
              {/* Community Platforms */}
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
                      color: "from-indigo-500 to-purple-500",
                    },
                    {
                      name: "Telegram",
                      href: "https://t.me/DEVOFFICIALTG",
                      icon: MessageCircle,
                      description: "Official Telegram group",
                      color: "from-blue-500 to-cyan-500",
                    },
                    {
                      name: "Telegram 中文",
                      href: "https://t.me/+sNqHBXePU9pjMjMx",
                      icon: MessageCircle,
                      description: "Chinese community group",
                      color: "from-green-500 to-emerald-500",
                    },
                    {
                      name: "X",
                      href: "https://x.com/DogecoinEV_",
                      icon: XIcon,
                      description: "Follow us on X",
                      color: "from-gray-500 to-slate-500",
                    },
                    {
                      name: "BitcoinTalk",
                      href: "https://bitcointalk.org/index.php?topic=5529709.0",
                      icon: Globe,
                      description: "Discussion forum",
                      color: "from-orange-500 to-yellow-500",
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
                        <div className={`w-10 h-10 bg-gradient-to-r ${item.color} rounded-lg flex items-center justify-center`}>
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

              {/* Community Features */}
              <div>
                <h3 className="text-xl md:text-2xl font-bold mb-6 md:mb-8 text-center bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Community Features
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  {[
                    {
                      title: "Multi-Language Support",
                      description: "Join communities in English, Chinese, and other languages",
                      icon: "🌍",
                    },
                    {
                      title: "Real-Time Chat",
                      description: "Get instant help and discuss DEV with community members",
                      icon: "💬",
                    },
                    {
                      title: "Developer Support",
                      description: "Connect with developers and get technical assistance",
                      icon: "👨‍💻",
                    },
                    {
                      title: "News & Updates",
                      description: "Stay informed about the latest DEV developments",
                      icon: "📰",
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

              {/* Community Guidelines */}
              <div>
                <h3 className="text-xl md:text-2xl font-bold mb-6 md:mb-8 text-center bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                  Community Guidelines
                </h3>
                <div className="bg-white/10 backdrop-blur-md rounded-xl border border-white/20 p-6 md:p-8">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                      {
                        title: "Be Respectful",
                        description: "Treat all community members with kindness and respect",
                        icon: "🤝",
                      },
                      {
                        title: "Stay On Topic",
                        description: "Keep discussions relevant to DogecoinEV and cryptocurrency",
                        icon: "🎯",
                      },
                      {
                        title: "No Spam",
                        description: "Avoid excessive self-promotion or off-topic content",
                        icon: "🚫",
                      },
                    ].map((guideline, index) => (
                      <div key={index} className="text-center">
                        <div className="text-3xl mb-3">{guideline.icon}</div>
                        <h4 className="font-semibold text-white mb-2">{guideline.title}</h4>
                        <p className="text-gray-400 text-sm">{guideline.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 md:py-20 relative">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">
                Ready to Connect?
              </h2>
              <p className="text-lg md:text-xl text-gray-300 mb-8 md:mb-12 leading-relaxed px-4">
                Join our vibrant community and be part of the DogecoinEV revolution.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-3 md:gap-4">
                <Link
                  href="/resources"
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 min-h-[48px]"
                  style={{ WebkitTapHighlightColor: "transparent" }}
                >
                  <Globe className="w-5 h-5" />
                  View All Resources
                </Link>
                <Link
                  href="/trading"
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-500 hover:to-orange-500 px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/25 min-h-[48px]"
                  style={{ WebkitTapHighlightColor: "transparent" }}
                >
                  <TrendingUp className="w-5 h-5" />
                  Start Trading
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

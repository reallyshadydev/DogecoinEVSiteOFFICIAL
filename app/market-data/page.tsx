"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { TrendingUp, ExternalLink, BarChart3, Star, Globe, Database, Activity } from "lucide-react"
import SiteFooter from "@/components/site-footer"

export default function MarketDataPage() {
  const [scrollY, setScrollY] = useState(0)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const marketDataPlatforms = [
    {
      name: "CoinCodex",
      url: "https://coincodex.com/crypto/dogecoinev/",
      description: "Comprehensive cryptocurrency data with price predictions and market analysis",
      features: ["Live Price Charts", "Market Analysis", "Price Predictions", "Historical Data"],
      icon: BarChart3,
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      name: "LiveCoinWatch",
      url: "https://www.livecoinwatch.com/price/DogecoinEV-________DEV",
      description: "Real-time cryptocurrency prices and market data tracking platform",
      features: ["Real-time Prices", "Portfolio Tracking", "Market Cap Data", "Volume Analytics"],
      icon: Activity,
      gradient: "from-green-500 to-emerald-500",
    },
    {
      name: "CoinPaprika",
      url: "https://coinpaprika.com/coin/dev-dogecoinev/",
      description: "Detailed cryptocurrency market statistics and project information",
      features: ["Market Statistics", "Team Information", "Project Analysis", "Social Media Data"],
      icon: Database,
      gradient: "from-purple-500 to-pink-500",
    },
    {
      name: "Blockspot",
      url: "https://blockspot.io/coin/dogecoinev/",
      description: "Blockchain data and market information aggregator",
      features: ["Blockchain Data", "Market Information", "Trading Data", "Network Statistics"],
      icon: Globe,
      gradient: "from-orange-500 to-red-500",
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

      {/* Header moved to Root Layout */}

      <main className="relative z-10 pb-20 md:pb-0">
        {/* Hero Section */}
        <section className="py-16 md:py-32 text-center relative">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full px-4 py-2 mb-6 md:mb-8 border border-purple-500/30">
                <TrendingUp className="w-4 h-4 text-yellow-400" />
                <span className="text-sm font-medium">Real-Time Market Data</span>
              </div>

              <h1 className="text-4xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent leading-tight">
                Market Data &
                <br />
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400 bg-clip-text text-transparent">
                  Analytics
                </span>
              </h1>

              <p className="text-lg md:text-2xl text-gray-300 mb-8 md:mb-12 leading-relaxed max-w-3xl mx-auto px-4">
                Track DogecoinEV (DEV) across multiple market data platforms. Get real-time prices, market analysis, and
                comprehensive cryptocurrency data.
              </p>
            </div>
          </div>
        </section>

        {/* Market Data Platforms */}
        <section className="py-16 md:py-20 relative">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Track DEV on Leading Platforms
              </h2>
              <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto px-4">
                DogecoinEV is listed on major cryptocurrency data platforms for comprehensive market tracking
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
              {marketDataPlatforms.map((platform, index) => (
                <div key={index} className="group relative h-full">
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${platform.gradient} rounded-2xl blur opacity-25 group-hover:opacity-40 transition-opacity duration-300`}
                  ></div>
                  <div className="relative bg-white/10 backdrop-blur-md p-6 md:p-8 rounded-2xl border border-white/20 hover:border-white/40 transition-all duration-300 transform hover:scale-105 h-full flex flex-col">
                    <div className="flex items-center gap-4 mb-4 md:mb-6">
                      <div
                        className={`w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r ${platform.gradient} rounded-xl flex items-center justify-center`}
                      >
                        <platform.icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl md:text-2xl font-bold text-white">{platform.name}</h3>
                        <div className="flex items-center gap-2 mt-1">
                          <Star className="w-4 h-4 text-yellow-400" />
                          <span className="text-sm text-gray-400">Verified Listing</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-300 leading-relaxed mb-4 md:mb-6 flex-grow text-sm md:text-base">
                      {platform.description}
                    </p>

                    <div className="mb-6">
                      <h4 className="text-white font-semibold mb-3">Key Features:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {platform.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex-shrink-0"></div>
                            <span className="text-gray-300 text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Link
                      href={platform.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center justify-center gap-3 bg-gradient-to-r ${platform.gradient} hover:opacity-90 px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 text-white shadow-lg hover:shadow-xl`}
                      style={{ WebkitTapHighlightColor: "transparent" }}
                    >
                      View on {platform.name}
                      <ExternalLink className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Track Market Data */}
        <section className="py-16 md:py-20 relative">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12 md:mb-16">
                <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Why Track Market Data?
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                <div className="bg-white/10 backdrop-blur-md p-6 md:p-8 rounded-2xl border border-white/20">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mb-4">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-4">Real-Time Insights</h3>
                  <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                    Stay updated with live price movements, trading volumes, and market trends. Make informed decisions
                    with up-to-the-minute data from multiple reliable sources.
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-md p-6 md:p-8 rounded-2xl border border-white/20">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-4">
                    <BarChart3 className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-4">Comprehensive Analysis</h3>
                  <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                    Access detailed charts, technical indicators, and market analysis tools. Compare DogecoinEV's
                    performance against other cryptocurrencies and market indices.
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-md p-6 md:p-8 rounded-2xl border border-white/20">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-4">
                    <Database className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-4">Historical Data</h3>
                  <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                    Review historical price data, identify patterns, and understand long-term trends. Essential for
                    technical analysis and investment planning.
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-md p-6 md:p-8 rounded-2xl border border-white/20">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center mb-4">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-4">Global Perspective</h3>
                  <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                    Monitor DogecoinEV's presence across different exchanges and regions. Track adoption, liquidity, and
                    market sentiment from a global viewpoint.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Resources */}
        <section className="py-16 md:py-20 relative">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Additional Resources
              </h2>
              <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto px-4">
                Explore more tools and resources for tracking and analyzing DogecoinEV
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
              <Link
                href="/widgets"
                className="group block p-6 md:p-8 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 hover:border-purple-500/50 transition-all duration-300 transform hover:scale-105"
                style={{ WebkitTapHighlightColor: "transparent" }}
              >
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-4">
                  <BarChart3 className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Live Widgets</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Real-time price widgets and network statistics for your website or dashboard
                </p>
              </Link>

              <Link
                href="https://explorer.dogecoinev.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="group block p-6 md:p-8 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105"
                style={{ WebkitTapHighlightColor: "transparent" }}
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-4">
                  <Database className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Block Explorer</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Explore transactions, blocks, and network activity on the DogecoinEV blockchain
                </p>
              </Link>

              <Link
                href="/resources"
                className="group block p-6 md:p-8 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 hover:border-green-500/50 transition-all duration-300 transform hover:scale-105"
                style={{ WebkitTapHighlightColor: "transparent" }}
              >
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mb-4">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">All Resources</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Complete list of wallets, exchanges, tools, and community resources
                </p>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}

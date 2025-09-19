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
import SiteFooter from "@/components/site-footer"

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

      {/* Header moved to Root Layout */}

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
                    Live DEV price with 24-hour change data from multiple exchanges
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

      <SiteFooter />
    </div>
  )
}

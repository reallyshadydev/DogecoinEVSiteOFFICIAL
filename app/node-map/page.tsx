"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { RefreshCw, Star, MessageCircle } from "lucide-react"
import dynamic from "next/dynamic"
import SiteFooter from "@/components/site-footer"

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

      {/* Header moved to Root Layout */}

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

      <SiteFooter />
    </div>
  )
}

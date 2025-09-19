import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import SiteFooter from "@/components/site-footer"

export const metadata: Metadata = {
  title: "Development Roadmap | DogecoinEV",
  description: "Explore DogecoinEV's development roadmap and journey towards building the future of blockchain technology.",
}

export default function RoadmapPage() {

  const roadmapPhases = [
    {
      phase: "Phase 1",
      title: "Foundation",
      status: "completed",
      items: [
        "Core blockchain development",
        "Initial network launch (Jan 26, 2025)",
        "Basic wallet functionality",
        "Community establishment",
      ],
    },
    {
      phase: "Phase 2",
      title: "Growth",
      status: "current",
      items: ["Exchange listings", "Enhanced wallet features", "Mobile applications", "Developer tools"],
    },
    {
      phase: "Phase 3",
      title: "Expansion",
      status: "upcoming",
      items: [
        "Smart contract integration",
        "DeFi ecosystem",
        "Cross-chain bridges",
        "Enterprise partnerships",
      ],
    },
    {
      phase: "Phase 4",
      title: "Innovation",
      status: "future",
      items: ["Layer 2 solutions", "Advanced privacy features", "AI integration", "Global adoption"],
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
              <h1 className="text-4xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent leading-tight">
                Development
                <br />
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                  Roadmap
                </span>
              </h1>

              <p className="text-lg md:text-2xl text-gray-300 mb-8 md:mb-12 leading-relaxed max-w-3xl mx-auto px-4">
                Our journey towards building the future of blockchain technology
              </p>
            </div>
          </div>
        </section>

        {/* Roadmap Section */}
        <section className="py-16 md:py-20 relative">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
              {roadmapPhases.map((item, index) => (
                <div key={index} className="group relative">
                  <div
                    className={`absolute inset-0 rounded-2xl blur opacity-25 transition-opacity duration-300 ${
                      item.status === "completed"
                        ? "bg-gradient-to-r from-green-600 to-emerald-600"
                        : item.status === "current"
                          ? "bg-gradient-to-r from-blue-600 to-cyan-600"
                          : item.status === "upcoming"
                            ? "bg-gradient-to-r from-purple-600 to-pink-600"
                            : "bg-gradient-to-r from-gray-600 to-slate-600"
                    }`}
                  ></div>
                  <div className="relative bg-white/10 backdrop-blur-md p-6 md:p-8 rounded-2xl border border-white/20 hover:border-white/40 transition-all duration-300">
                    <div className="flex items-center gap-4 mb-4 md:mb-6">
                      <div
                        className={`px-3 py-1 rounded-full text-sm font-medium ${
                          item.status === "completed"
                            ? "bg-green-500/20 text-green-400"
                            : item.status === "current"
                              ? "bg-blue-500/20 text-blue-400"
                              : item.status === "upcoming"
                                ? "bg-purple-500/20 text-purple-400"
                                : "bg-gray-500/20 text-gray-400"
                        }`}
                      >
                        {item.status === "completed"
                          ? "Completed"
                          : item.status === "current"
                            ? "In Progress"
                            : item.status === "upcoming"
                              ? "Upcoming"
                              : "Future"}
                      </div>
                      <div className="text-sm text-gray-400">{item.phase}</div>
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-white">{item.title}</h3>
                    <ul className="space-y-2">
                      {item.items.map((subItem, subIndex) => (
                        <li key={subIndex} className="flex items-center gap-3 text-gray-300 text-sm md:text-base">
                          <div
                            className={`w-2 h-2 rounded-full flex-shrink-0 ${
                              item.status === "completed"
                                ? "bg-green-400"
                                : item.status === "current"
                                  ? "bg-blue-400"
                                  : "bg-gray-500"
                            }`}
                          />
                          {subItem}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 md:py-20 relative">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Join Our Journey
              </h2>
              <p className="text-lg md:text-xl text-gray-300 mb-8 md:mb-12 leading-relaxed px-4">
                Be part of the DogecoinEV ecosystem as we build the future of blockchain technology.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-3 md:gap-4">
                <Link
                  href="/community"
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 min-h-[48px]"
                >
                  Join Community
                </Link>
                <Link
                  href="/developer"
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25 min-h-[48px]"
                >
                  Developer Resources
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}

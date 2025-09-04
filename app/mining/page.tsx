"use client"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Pickaxe, ExternalLink, Zap, Shield, Users, TrendingUp, BookOpen } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function MiningPage() {
  const pathname = usePathname()

  const miningPools = [
    {
      name: "LongPool",
      url: "https://longpool.org/",
      description: "Our most notable mining pool with reliable payouts",
      featured: true,
    },
    {
      name: "ZergPool",
      url: "http://zergpool.com",
      description: "Multi-algorithm mining pool with auto-switching",
      featured: false,
    },
  ]

  const rentalServices = [
    {
      name: "NiceHash",
      url: "https://www.nicehash.com",
      description: "World's largest crypto mining marketplace",
      icon: "🏪",
    },
    {
      name: "Mining Rig Rentals",
      url: "https://www.miningrigrentals.com",
      description: "Rent mining rigs by the hour or day",
      icon: "⚡",
      tutorialUrl: "https://www.miningrigrentals.com/helpcenter/Tutorials/",
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
                href="/mining"
                className={`hover:text-purple-400 transition-colors duration-300 font-medium ${
                  pathname === "/mining" ? "text-purple-400" : ""
                }`}
              >
                Mining
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
                <Pickaxe className="w-4 h-4 text-yellow-400" />
                <span className="text-sm font-medium">Start Mining Today</span>
              </div>

              <h1 className="text-4xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent leading-tight">
                Mine
                <br />
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400 bg-clip-text text-transparent">
                  DogecoinEV
                </span>
              </h1>

              <p className="text-lg md:text-2xl text-gray-300 mb-8 md:mb-12 leading-relaxed max-w-3xl mx-auto px-4">
                Join thousands of miners securing the DogecoinEV network and earning DEV rewards with Scrypt mining
              </p>

              <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 md:gap-4 mb-12 md:mb-16 px-4">
                <Link
                  href="https://miningpoolstats.stream/dogecoinev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-3 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-400 hover:to-pink-400 text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 min-h-[48px]"
                  style={{ WebkitTapHighlightColor: "transparent" }}
                >
                  <TrendingUp className="w-5 h-5" />
                  Pool Stats
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Mining Specs */}
        <section className="py-16 md:py-20 relative">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Mining Specifications
              </h2>
              <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto px-4">
                DogecoinEV uses the proven Scrypt algorithm with modern enhancements
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              <Card className="bg-white/10 backdrop-blur-md border border-white/20 hover:border-purple-500/50 transition-all duration-300 transform hover:scale-105">
                <CardHeader>
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center mb-4 md:mb-6">
                    <Zap className="w-6 h-6 md:w-8 md:h-8 text-white" />
                  </div>
                  <CardTitle className="text-white">Algorithm</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                    <strong>Scrypt</strong> - Same algorithm as Dogecoin and Litecoin, compatible with existing ASIC
                    miners
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-md border border-white/20 hover:border-purple-500/50 transition-all duration-300 transform hover:scale-105">
                <CardHeader>
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-xl flex items-center justify-center mb-4 md:mb-6">
                    <Shield className="w-6 h-6 md:w-8 md:h-8 text-white" />
                  </div>
                  <CardTitle className="text-white">Block Time</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                    <strong>60 seconds</strong> - Fast confirmations with 1-minute block intervals for quick
                    transactions
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-md border border-white/20 hover:border-purple-500/50 transition-all duration-300 transform hover:scale-105">
                <CardHeader>
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-xl flex items-center justify-center mb-4 md:mb-6">
                    <Users className="w-6 h-6 md:w-8 md:h-8 text-white" />
                  </div>
                  <CardTitle className="text-white">Merge Mining</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                    <strong>AuxPoW Compatible</strong> - Mine DEV alongside Litecoin, Dogecoin, and other Scrypt coins
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* What is Scrypt Mining */}
        <section className="py-16 md:py-20 relative">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12 md:mb-16">
                <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  What is Scrypt Mining?
                </h2>
              </div>

              <div className="bg-white/10 backdrop-blur-md p-6 md:p-8 rounded-2xl border border-white/20">
                <div className="space-y-6 text-gray-300 leading-relaxed">
                  <p className="text-lg">
                    Scrypt is a memory-hard cryptographic algorithm that was designed to be more accessible to
                    individual miners compared to SHA-256 (used by Bitcoin). It requires more memory to compute, making
                    it resistant to certain types of specialized hardware attacks.
                  </p>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-3">Why Scrypt?</h3>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span>More accessible to individual miners</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span>Compatible with existing Scrypt ASIC miners</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span>Proven security track record</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span>Energy efficient compared to SHA-256</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-white mb-3">Merge Mining Benefits</h3>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-pink-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span>Mine multiple coins simultaneously</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-pink-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span>No additional power consumption</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-pink-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span>Increased mining profitability</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-pink-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span>Enhanced network security</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mining Pools */}
        <section className="py-16 md:py-20 relative">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Recommended Mining Pools
              </h2>
              <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto px-4">
                Join established pools for consistent rewards and reliable payouts
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
              {miningPools.map((pool, index) => (
                <Card
                  key={index}
                  className={`bg-white/10 backdrop-blur-md border border-white/20 hover:border-purple-500/50 transition-all duration-300 transform hover:scale-105 ${pool.featured ? "ring-2 ring-purple-500/50" : ""}`}
                >
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-white text-xl">{pool.name}</CardTitle>
                      {pool.featured && (
                        <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white">Featured</Badge>
                      )}
                    </div>
                    <CardDescription className="text-gray-300">{pool.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button
                      asChild
                      className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-400 hover:to-pink-400 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      <Link href={pool.url} target="_blank" rel="noopener noreferrer">
                        Visit Pool <ExternalLink className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-8">
              <Link
                href="https://miningpoolstats.stream/dogecoinev"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 font-semibold transition-colors duration-300"
                style={{ WebkitTapHighlightColor: "transparent" }}
              >
                View all pool statistics
                <ExternalLink className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Mining Rig Rentals */}
        <section className="py-16 md:py-20 relative">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Mining Rig Rentals
              </h2>
              <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto px-4">
                Don't have mining hardware? Rent mining power from established marketplaces
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
              {rentalServices.map((service, index) => (
                <Card
                  key={index}
                  className="bg-white/10 backdrop-blur-md border border-white/20 hover:border-purple-500/50 transition-all duration-300 transform hover:scale-105"
                >
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="text-2xl">{service.icon}</div>
                      <CardTitle className="text-white text-xl">{service.name}</CardTitle>
                    </div>
                    <CardDescription className="text-gray-300">{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Button
                      asChild
                      className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-400 hover:to-cyan-400 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      <Link href={service.url} target="_blank" rel="noopener noreferrer">
                        Visit {service.name} <ExternalLink className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                    {service.tutorialUrl && (
                      <Button
                        asChild
                        className="w-full bg-white/20 hover:bg-white/30 text-white border border-white/30 hover:border-white/50 transition-all duration-300"
                      >
                        <Link href={service.tutorialUrl} target="_blank" rel="noopener noreferrer">
                          View Tutorials <BookOpen className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

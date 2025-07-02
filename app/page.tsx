"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Github, MessageCircle, Zap, Shield, Users, ArrowRight, Star, TrendingUp } from "lucide-react"
import { XIcon } from "@/components/x-icon"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

export default function HomePage() {
  const [scrollY, setScrollY] = useState(0)
  const pathname = usePathname()
  const [buyModalOpen, setBuyModalOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Error boundary for external scripts
  useEffect(() => {
    const handleError = (event: ErrorEvent) => {
      if (event.message.includes("MetaMask") || event.message.includes("ChromeTransport")) {
        console.warn("External wallet extension error caught and ignored:", event.message)
        event.preventDefault()
        return false
      }
    }

    window.addEventListener("error", handleError)
    return () => window.removeEventListener("error", handleError)
  }, [])

  const exchanges = [
    {
      name: "Exbitron",
      url: "https://app.exbitron.com/exchange/?market=DEV-USDT",
      pair: "DEV/USDT",
      description: "Active trading with high volume",
    },
    {
      name: "Xeggex",
      url: "https://xeggex.com/asset/DEV",
      pair: "DEV/USDT",
      description: "Established exchange platform",
    },
    {
      name: "Nestex",
      url: "https://trade.nestex.one/spot/DEV",
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
                <span className="text-sm font-medium">Launched January 26, 2025</span>
              </div>

              <h1 className="text-4xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent leading-tight">
                Welcome to
                <br />
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400 bg-clip-text text-transparent">
                  DogecoinEV
                </span>
              </h1>

              <p className="text-lg md:text-2xl text-gray-300 mb-8 md:mb-12 leading-relaxed max-w-3xl mx-auto px-4">
                An exciting evolution of Dogecoin and Pepecoin, designed for sustainable speed with 10MB blocks and
                1-minute block times. Inspired by Elon's vision of fast, affordable crypto for everyone.
              </p>

              <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 md:gap-4 mb-12 md:mb-16 px-4">
                <Link
                  href="https://github.com/DogecoinEV-Foundation/DogecoinEV"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 min-h-[48px]"
                  style={{ WebkitTapHighlightColor: "transparent" }}
                >
                  <Github className="w-5 h-5" />
                  GitHub
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>

                <Link
                  href="https://x.com/DogecoinEV_"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25 min-h-[48px]"
                  style={{ WebkitTapHighlightColor: "transparent" }}
                >
                  <XIcon className="w-5 h-5" />
                  X
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>

                <Link
                  href="https://t.me/DEVOFFICIALTG"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-3 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25 min-h-[48px]"
                  style={{ WebkitTapHighlightColor: "transparent" }}
                >
                  <MessageCircle className="w-5 h-5" />
                  Telegram
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
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

              <div className="inline-flex items-center gap-2 text-gray-400 animate-bounce">
                <span className="text-sm md:text-base">Discover more below</span>
                <ArrowRight className="w-4 h-4 rotate-90" />
              </div>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="py-16 md:py-20 relative">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Key Features
              </h2>
              <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto px-4">
                Built for the future with cutting-edge technology and community-driven innovation
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {[
                {
                  icon: Zap,
                  title: "Enhanced Scalability",
                  description:
                    "Engineered for exceptional speed, DogecoinEV supports up to 666 transactions per second with a robust 10MB block size, ensuring unparalleled throughput and efficiency.",
                  gradient: "from-yellow-400 to-orange-500",
                },
                {
                  icon: Shield,
                  title: "Inflationary Model",
                  description:
                    "Our inflationary model ensures low fees and accessibility, allowing users to participate without high costs, fostering an inclusive ecosystem.",
                  gradient: "from-blue-400 to-cyan-500",
                },
                {
                  icon: Users,
                  title: "Merged Mining",
                  description:
                    "Supports merge mining with Litecoin, Dogecoin, Pepecoin, and other merge mineable Scrypt coins for added efficiency.",
                  gradient: "from-purple-400 to-pink-500",
                },
              ].map((feature, index) => (
                <div key={index} className="group relative h-full">
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} rounded-2xl blur opacity-25 group-hover:opacity-40 transition-opacity duration-300`}
                  ></div>
                  <div className="relative bg-white/10 backdrop-blur-md p-6 md:p-8 rounded-2xl border border-white/20 hover:border-purple-500/50 transition-all duration-300 transform hover:scale-105 h-full flex flex-col">
                    <div
                      className={`w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r ${feature.gradient} rounded-xl flex items-center justify-center mb-4 md:mb-6`}
                    >
                      <feature.icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-white">{feature.title}</h3>
                    <p className="text-gray-300 leading-relaxed flex-grow text-sm md:text-base">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-8 md:mt-12">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 font-semibold transition-colors duration-300"
                style={{ WebkitTapHighlightColor: "transparent" }}
              >
                Learn more about our technology
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Roadmap */}
        <section className="py-16 md:py-20 relative">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Development Roadmap
              </h2>
              <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto px-4">
                Our journey towards building the future of blockchain technology
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
              {[
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
              ].map((item, index) => (
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

        {/* Logo Section */}
        <section className="py-16 md:py-20 relative">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Our Brand
              </h2>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8 md:mb-12">
                <div className="inline-block p-6 md:p-8 bg-white/10 backdrop-blur-md rounded-3xl border border-white/20">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2ndlogo-c0jK0sFxVm0b23MMF2PaAdkIdKmN6r.png"
                    alt="DogecoinEV Secondary Logo"
                    width={250}
                    height={250}
                    className="mx-auto md:w-[300px] md:h-[300px]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                <div className="bg-white/10 backdrop-blur-md p-6 md:p-8 rounded-2xl border border-white/20">
                  <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Primary Logo
                  </h3>
                  <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                    This design fuses the recognizable Shiba Inu—emblematic of Dogecoin's vibrant community—with dynamic
                    elements inspired by Elon Musk and Tesla's innovative legacy.
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-md p-6 md:p-8 rounded-2xl border border-white/20">
                  <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                    Secondary Logo
                  </h3>
                  <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                    Featuring a stylized "D" intertwined with an "X"—a nod to X (formerly Twitter)—this logo symbolizes
                    the synergy between Dogecoin's community roots and modern technological progress.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Inspiring Message Section with Shiba */}
        <section className="py-16 md:py-20 relative">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
                <div className="order-2 lg:order-1">
                  <h2 className="text-3xl md:text-5xl font-bold mb-6 md:mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    From Meme to Movement
                  </h2>
                  <div className="space-y-4 md:space-y-6 text-base md:text-lg text-gray-300 leading-relaxed">
                    <p>
                      What started as a playful tribute to the beloved Shiba Inu has evolved into something
                      extraordinary. DogecoinEV represents the perfect fusion of community spirit and cutting-edge
                      blockchain technology.
                    </p>
                    <p>
                      We believe that the future of cryptocurrency shouldn't be complicated or exclusive. Just like our
                      four-legged mascot, DogecoinEV is approachable, reliable, and always ready for the next adventure.
                    </p>
                    <p className="text-xl md:text-2xl font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                      "Much speed. Very scale. Such wow!" 🚀
                    </p>
                  </div>
                </div>

                <div className="order-1 lg:order-2 relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl blur opacity-25 animate-pulse"></div>
                  <div className="relative bg-white/10 backdrop-blur-md p-6 md:p-8 rounded-3xl border border-white/20 hover:border-purple-500/50 transition-all duration-300">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20May%2025%2C%202025%2C%2005_38_45%20PM-ikjXSoXFswlY3teLCLwzef2qA5mdlq.png"
                      alt="DogecoinEV Shiba Inu Mascot"
                      width={400}
                      height={400}
                      className="mx-auto rounded-2xl hover:scale-105 transition-transform duration-300"
                      priority
                    />
                    <div className="mt-4 text-center">
                      <div className="text-lg font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                        Chief Executive Doge
                      </div>
                      <div className="text-sm text-gray-400 mt-1">Professional. Reliable. Much Business. 🚀</div>
                    </div>
                  </div>
                </div>
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

          <div className="flex justify-center gap-4 md:gap-6 mb-6 md:mb-8">
            <Link
              href="https://github.com/DogecoinEV-Foundation/DogecoinEV"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-purple-400 transition-colors duration-300 p-2"
              style={{ WebkitTapHighlightColor: "transparent" }}
            >
              <Github className="w-6 h-6" />
            </Link>
            <Link
              href="https://x.com/DogecoinEV_"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-colors duration-300 p-2"
              style={{ WebkitTapHighlightColor: "transparent" }}
            >
              <XIcon className="w-6 h-6" />
            </Link>
            <Link
              href="https://t.me/DEVOFFICIALTG"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 p-2"
              style={{ WebkitTapHighlightColor: "transparent" }}
            >
              <MessageCircle className="w-6 h-6" />
            </Link>
            <Link
              href="https://t.me/DogecoinEV"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 p-2"
              style={{ WebkitTapHighlightColor: "transparent" }}
              aria-label="DogecoinEV Chinese Telegram Group"
              title="DogecoinEV Chinese Telegram Group"
            >
              <MessageCircle className="w-6 h-6" />
              <span className="sr-only">Telegram 中文</span>
            </Link>
          </div>

          <p className="text-gray-500 text-xs md:text-sm">© 2025 DogecoinEV Foundation. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

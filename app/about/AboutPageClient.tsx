"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Github, MessageCircle, Zap, Shield, Users, ArrowRight, Star, TrendingUp, Pickaxe } from "lucide-react"
import { XIcon } from "@/components/x-icon"

export default function AboutPageClient() {
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
                <span className="text-sm font-medium">Learn About DogecoinEV</span>
              </div>

              <h1 className="text-4xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent leading-tight">
                About
                <br />
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400 bg-clip-text text-transparent">
                  DogecoinEV
                </span>
              </h1>

              <p className="text-lg md:text-2xl text-gray-300 mb-8 md:mb-12 leading-relaxed max-w-3xl mx-auto px-4">
                Discover the technology, vision, and community behind the next evolution of cryptocurrency
              </p>
            </div>
          </div>
        </section>

        {/* What is DogecoinEV Section */}
        <section className="py-16 md:py-20 relative">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12 md:mb-16">
                <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  What is DogecoinEV?
                </h2>
                <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto px-4">
                  The next evolution of cryptocurrency that combines the best of Dogecoin's community spirit with cutting-edge blockchain technology
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center mb-16">
                <div className="order-2 lg:order-1">
                  <h3 className="text-2xl md:text-3xl font-bold mb-6 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                    The Evolution of Dogecoin
                  </h3>
                  <div className="space-y-4 text-gray-300 leading-relaxed">
                    <p>
                      DogecoinEV (DEV) represents the next generation of cryptocurrency, building upon the beloved legacy of Dogecoin while introducing advanced blockchain capabilities. We've taken the fun, community-driven spirit of the original Dogecoin and enhanced it with modern technology.
                    </p>
                    <p>
                      Launched on January 26, 2025, DogecoinEV combines the accessibility and humor that made Dogecoin famous with serious blockchain innovations including faster transactions, enhanced security, and scalable infrastructure.
                    </p>
                    <p>
                      Our mission is simple: make cryptocurrency fun, accessible, and beneficial for everyone while maintaining the "much wow" factor that defines our community.
                    </p>
                  </div>
                </div>
                <div className="order-1 lg:order-2">
                  <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20">
                    <div className="grid grid-cols-2 gap-6">
                      <div className="text-center">
                        <div className="text-3xl mb-2">🚀</div>
                        <h4 className="font-bold text-white mb-2">Fast</h4>
                        <p className="text-sm text-gray-400">Lightning-fast transactions</p>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl mb-2">🔒</div>
                        <h4 className="font-bold text-white mb-2">Secure</h4>
                        <p className="text-sm text-gray-400">Advanced blockchain security</p>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl mb-2">🌍</div>
                        <h4 className="font-bold text-white mb-2">Global</h4>
                        <p className="text-sm text-gray-400">Worldwide accessibility</p>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl mb-2">❤️</div>
                        <h4 className="font-bold text-white mb-2">Community</h4>
                        <p className="text-sm text-gray-400">Driven by the people</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                <div className="bg-white/10 backdrop-blur-md p-6 md:p-8 rounded-2xl border border-white/20 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">⚡</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">Technical Innovation</h3>
                  <p className="text-gray-300 text-sm">
                    Built on advanced blockchain technology with improved scalability, security, and transaction speed compared to traditional cryptocurrencies.
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-md p-6 md:p-8 rounded-2xl border border-white/20 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🐕</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">Community Spirit</h3>
                  <p className="text-gray-300 text-sm">
                    Maintaining the fun, approachable, and inclusive culture that made Dogecoin beloved while fostering a supportive global community.
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-md p-6 md:p-8 rounded-2xl border border-white/20 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🌙</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">Future Vision</h3>
                  <p className="text-gray-300 text-sm">
                    Committed to continuous evolution, bringing new features, partnerships, and real-world utility to make cryptocurrency accessible to everyone.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Specifications */}
        <section className="py-16 md:py-20 relative">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Technical Specifications
              </h2>
              <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto px-4">
                Built with cutting-edge technology for maximum performance and scalability
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {[
                {
                  title: "Block Time",
                  value: "60 seconds",
                  description: "Fast confirmations for quick transactions",
                  icon: Zap,
                  gradient: "from-yellow-400 to-orange-500",
                },
                {
                  title: "Block Size",
                  value: "10 MB",
                  description: "Large blocks for high transaction throughput",
                  icon: Shield,
                  gradient: "from-blue-400 to-cyan-500",
                },
                {
                  title: "Algorithm",
                  value: "Scrypt",
                  description: "Proven mining algorithm with ASIC support",
                  icon: Pickaxe,
                  gradient: "from-purple-400 to-pink-500",
                },
                {
                  title: "Max TPS",
                  value: "666 TPS",
                  description: "High transaction processing capacity",
                  icon: TrendingUp,
                  gradient: "from-green-400 to-emerald-500",
                },
                {
                  title: "Network Port",
                  value: "42069",
                  description: "Default network communication port",
                  icon: Users,
                  gradient: "from-pink-400 to-rose-500",
                },
                {
                  title: "Launch Date",
                  value: "Jan 26, 2025",
                  description: "Official mainnet launch date",
                  icon: Star,
                  gradient: "from-indigo-400 to-purple-500",
                },
              ].map((spec, index) => (
                <div key={index} className="group relative h-full">
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${spec.gradient} rounded-2xl blur opacity-25 group-hover:opacity-40 transition-opacity duration-300`}
                  ></div>
                  <div className="relative bg-white/10 backdrop-blur-md p-6 md:p-8 rounded-2xl border border-white/20 hover:border-purple-500/50 transition-all duration-300 transform hover:scale-105 h-full flex flex-col">
                    <div
                      className={`w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r ${spec.gradient} rounded-xl flex items-center justify-center mb-4 md:mb-6`}
                    >
                      <spec.icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-3 text-white">{spec.title}</h3>
                    <div className="text-2xl md:text-3xl font-bold mb-3 md:mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                      {spec.value}
                    </div>
                    <p className="text-gray-300 leading-relaxed flex-grow text-sm md:text-base">{spec.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="py-16 md:py-20 relative">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16">
                <div className="bg-white/10 backdrop-blur-md p-6 md:p-8 rounded-2xl border border-white/20 hover:border-purple-500/50 transition-all duration-300">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Our Vision
                  </h2>
                  <p className="text-gray-300 leading-relaxed text-base md:text-lg mb-6">
                    DogecoinEV envisions a future where cryptocurrency is accessible, fast, and fun for everyone. We're
                    building a blockchain that combines the community spirit of Dogecoin with the innovation inspired by
                    Elon Musk's vision for the future.
                  </p>
                  <p className="text-gray-300 leading-relaxed text-base md:text-lg">
                    Our goal is to create a sustainable, scalable, and secure network that can handle real-world
                    transaction volumes while maintaining the playful and inclusive nature that makes crypto exciting.
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-md p-6 md:p-8 rounded-2xl border border-white/20 hover:border-blue-500/50 transition-all duration-300">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                    Our Mission
                  </h2>
                  <p className="text-gray-300 leading-relaxed text-base md:text-lg mb-6">
                    To democratize access to fast, affordable cryptocurrency transactions while building a strong,
                    supportive community of users, developers, and miners who share our passion for innovation.
                  </p>
                  <p className="text-gray-300 leading-relaxed text-base md:text-lg">
                    We're committed to maintaining an open-source, community-driven approach to development, ensuring
                    that DogecoinEV remains true to the decentralized principles that make blockchain technology
                    revolutionary.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="py-16 md:py-20 relative">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                What Makes Us Different
              </h2>
              <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto px-4">
                DogecoinEV combines proven technology with innovative features
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto">
              {[
                {
                  title: "Enhanced Scalability",
                  description:
                    "With 10MB blocks and 1-minute block times, DogecoinEV can handle up to 666 transactions per second, making it suitable for real-world payment applications.",
                  features: ["666 TPS capacity", "10MB block size", "1-minute confirmations", "Low transaction fees"],
                },
                {
                  title: "Merge Mining Support",
                  description:
                    "Starting from block 30,000, DogecoinEV supports merge mining with Litecoin, Dogecoin, and other Scrypt-based cryptocurrencies, increasing network security.",
                  features: ["AuxPoW compatible", "Increased security", "Miner efficiency", "Network stability"],
                },
                {
                  title: "Community-Driven Development",
                  description:
                    "Our open-source approach ensures transparency and community involvement in all major decisions, keeping the project decentralized and democratic.",
                  features: ["Open source code", "Community governance", "Transparent development", "Regular updates"],
                },
                {
                  title: "Sustainable Economics",
                  description:
                    "Our inflationary model ensures sustainable mining rewards while keeping transaction fees low, making DogecoinEV accessible to everyone.",
                  features: ["Low fees", "Sustainable rewards", "Accessible mining", "Long-term viability"],
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-md p-6 md:p-8 rounded-2xl border border-white/20 hover:border-purple-500/50 transition-all duration-300"
                >
                  <h3 className="text-xl md:text-2xl font-bold mb-4 text-white">{feature.title}</h3>
                  <p className="text-gray-300 leading-relaxed mb-6 text-sm md:text-base">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.features.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center gap-3 text-gray-300 text-sm md:text-base">
                        <div className="w-2 h-2 bg-purple-400 rounded-full flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Logo Section */}
        <section className="py-16 md:py-20 relative">
          <div className="container mx-auto px-4 md:px-6">
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

        {/* Brand Identity Section */}
        <section className="py-16 md:py-20 relative">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12 md:mb-16">
                <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Our Brand Identity
                </h2>
                <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto px-4">
                  More than just logos and colors - our brand represents a movement towards accessible, fun, and innovative cryptocurrency
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 mb-16">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Brand Personality
                  </h3>
                  <div className="space-y-4 text-gray-300">
                    <p>
                      DogecoinEV embodies the perfect fusion of <strong className="text-purple-400">playful accessibility</strong> and <strong className="text-pink-400">serious innovation</strong>. We're the cryptocurrency that doesn't take itself too seriously while delivering serious value.
                    </p>
                    <p>
                      Our brand voice is <strong className="text-blue-400">approachable, enthusiastic, and inclusive</strong>. We speak in a language that everyone can understand, whether you're a crypto veteran or just getting started.
                    </p>
                    <p>
                      We believe that the future of blockchain should be <strong className="text-green-400">fun, accessible, and beneficial for everyone</strong> - not just the technically elite.
                    </p>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                    Brand Values
                  </h3>
                  <div className="space-y-4">
                    <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/20">
                      <h4 className="font-bold text-white mb-2 flex items-center gap-2">
                        <span className="text-yellow-400">🌟</span> Innovation with Heart
                      </h4>
                      <p className="text-gray-300 text-sm">Cutting-edge technology wrapped in warmth and community spirit</p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/20">
                      <h4 className="font-bold text-white mb-2 flex items-center gap-2">
                        <span className="text-green-400">🌱</span> Accessibility First
                      </h4>
                      <p className="text-gray-300 text-sm">Making cryptocurrency approachable for everyone, everywhere</p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/20">
                      <h4 className="font-bold text-white mb-2 flex items-center gap-2">
                        <span className="text-purple-400">🤝</span> Community Driven
                      </h4>
                      <p className="text-gray-300 text-sm">Built by the people, for the people, with the people</p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/20">
                      <h4 className="font-bold text-white mb-2 flex items-center gap-2">
                        <span className="text-pink-400">🎯</span> Transparency
                      </h4>
                      <p className="text-gray-300 text-sm">Open, honest, and clear communication in everything we do</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                <div className="bg-white/10 backdrop-blur-md p-6 md:p-8 rounded-2xl border border-white/20 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🎨</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">Visual Identity</h3>
                  <p className="text-gray-300 text-sm">
                    Our purple and pink gradients symbolize innovation and creativity, while the Shiba Inu mascot represents our playful, community-driven approach to serious technology.
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-md p-6 md:p-8 rounded-2xl border border-white/20 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">💬</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">Communication Style</h3>
                  <p className="text-gray-300 text-sm">
                    Friendly, enthusiastic, and clear. We use "much wow" language that's fun but professional, making complex blockchain concepts accessible to everyone.
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-md p-6 md:p-8 rounded-2xl border border-white/20 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🌍</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">Global Impact</h3>
                  <p className="text-gray-300 text-sm">
                    We're building a worldwide community that transcends borders, languages, and technical barriers to make cryptocurrency truly universal.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team & Community */}
        <section className="py-16 md:py-20 relative">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Built by the Community
              </h2>
              <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto px-4">
                DogecoinEV is developed and maintained by a passionate community of contributors
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-md p-6 md:p-8 rounded-2xl border border-white/20">
                <div className="text-center mb-8">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">Join Our Development Community</h3>
                  <p className="text-gray-300 leading-relaxed text-base md:text-lg">
                    Whether you're a developer, designer, writer, or just passionate about cryptocurrency, there's a
                    place for you in the DogecoinEV community. We welcome contributors of all skill levels and
                    backgrounds.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Github className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-lg font-bold text-white mb-2">Developers</h4>
                    <p className="text-gray-300 text-sm">Contribute code, fix bugs, and help build new features</p>
                  </div>

                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-lg font-bold text-white mb-2">Community</h4>
                    <p className="text-gray-300 text-sm">Help newcomers, share knowledge, and grow the ecosystem</p>
                  </div>

                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Pickaxe className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-lg font-bold text-white mb-2">Miners</h4>
                    <p className="text-gray-300 text-sm">Secure the network and earn rewards through mining</p>
                  </div>
                </div>

                <div className="text-center">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
                    style={{ WebkitTapHighlightColor: "transparent" }}
                  >
                    Get Involved
                    <ArrowRight className="w-4 h-4" />
                  </Link>
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

          <div className="flex justify-center gap-4 mb-4">
            <Link
              href="https://discord.gg/SVXHn3RE5K"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-purple-400 transition-colors duration-300 p-2"
              style={{ WebkitTapHighlightColor: "transparent" }}
              aria-label="DogecoinEV Discord Server"
              title="DogecoinEV Discord Server"
            >
              <MessageCircle className="w-6 h-6" />
              <span className="sr-only">Discord</span>
            </Link>
            <Link
              href="https://t.me/DEVOFFICIALTG"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 p-2"
              style={{ WebkitTapHighlightColor: "transparent" }}
              aria-label="DogecoinEV Telegram Group"
              title="DogecoinEV Telegram Group"
            >
              <MessageCircle className="w-6 h-6" />
              <span className="sr-only">Telegram</span>
            </Link>
            <Link
              href="https://t.me/+sNqHBXePU9pjMjMx"
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
            <Link
              href="https://x.com/DogecoinEV_"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-colors duration-300 p-2"
              style={{ WebkitTapHighlightColor: "transparent" }}
              aria-label="DogecoinEV on X"
              title="DogecoinEV on X"
            >
              <XIcon className="w-6 h-6" />
              <span className="sr-only">X</span>
            </Link>
            <Link
              href="https://github.com/DogecoinEV-Foundation/DogecoinEV"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-400 transition-colors duration-300 p-2"
              style={{ WebkitTapHighlightColor: "transparent" }}
              aria-label="DogecoinEV GitHub Repository"
              title="DogecoinEV GitHub Repository"
            >
              <Github className="w-6 h-6" />
              <span className="sr-only">GitHub</span>
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

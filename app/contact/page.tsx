"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Mail, MessageCircle, Github, Globe, Users, Heart, Code, Zap, Shield } from "lucide-react"
import { XIcon } from "@/components/x-icon"

export default function ContactPage() {
  const [scrollY, setScrollY] = useState(0)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const contactMethods = [
    {
      icon: MessageCircle,
      title: "Discord Community",
      description: "Join our active Discord server for real-time discussions",
      link: "https://discord.gg/SVXHn3RE5K",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: MessageCircle,
      title: "Telegram Group",
      description: "Connect with the community on our official Telegram",
      link: "https://t.me/DEVOFFICIALTG",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: XIcon,
      title: "X",
      description: "Follow us for the latest updates and announcements",
      link: "https://x.com/DogecoinEV_",
      gradient: "from-cyan-500 to-blue-500",
    },
    {
      icon: Github,
      title: "GitHub Repository",
      description: "Contribute to our open-source development",
      link: "https://github.com/DogecoinEV-Foundation/DogecoinEV",
      gradient: "from-gray-500 to-slate-600",
    },
    {
      icon: Mail,
      title: "Email Support",
      description: "Click to open your email client and send us a message",
      link: "mailto:reallyshadydev@dogecoinev.com?subject=DogecoinEV Inquiry&body=Hi DogecoinEV Team,%0D%0A%0D%0AI'm reaching out regarding:%0D%0A%0D%0A[Please describe your inquiry here]%0D%0A%0D%0AThank you!",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      icon: Globe,
      title: "BitcoinTalk Forum",
      description: "Join the discussion on BitcoinTalk",
      link: "https://bitcointalk.org/index.php?topic=5529709.0",
      gradient: "from-yellow-500 to-orange-500",
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
                <Heart className="w-4 h-4 text-pink-400" />
                <span className="text-sm font-medium">Get in Touch</span>
              </div>

              <h1 className="text-4xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent leading-tight">
                Contact Our
                <br />
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400 bg-clip-text text-transparent">
                  Amazing Team
                </span>
              </h1>

              <p className="text-lg md:text-2xl text-gray-300 mb-8 md:mb-12 leading-relaxed max-w-3xl mx-auto px-4">
                Have questions about DogecoinEV? Want to contribute to the project? We'd love to hear from you! Our
                community and team are here to help.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-16 md:py-20 relative">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Ways to Connect
              </h2>
              <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto px-4">
                Choose your preferred way to get in touch with our community and team
              </p>
            </div>

            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {contactMethods.map((method, index) => (
                  <Link key={index} href={method.link} target="_blank" className="group relative block h-full">
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${method.gradient} rounded-2xl blur opacity-25 group-hover:opacity-40 transition-opacity duration-300`}
                    ></div>
                    <div className="relative bg-white/10 backdrop-blur-md p-6 md:p-8 rounded-2xl border border-white/20 hover:border-white/40 transition-all duration-300 transform hover:scale-105 h-full flex flex-col">
                      <div
                        className={`w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r ${method.gradient} rounded-xl flex items-center justify-center mb-4 md:mb-6 mx-auto`}
                      >
                        <method.icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-white text-center">
                        {method.title}
                      </h3>
                      <p className="text-gray-300 leading-relaxed text-center flex-grow text-sm md:text-base">
                        {method.description}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Community Stats */}
        <section className="py-16 md:py-20 relative">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Join Our Growing Community
              </h2>
              <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto px-4">
                Be part of a vibrant ecosystem of developers, miners, and enthusiasts
              </p>
            </div>

            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
                    <Users className="w-8 h-8 md:w-10 md:h-10 text-white" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2 md:mb-3">
                    500+
                  </div>
                  <div className="text-gray-300 text-sm md:text-lg">Community Members</div>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
                    <Code className="w-8 h-8 md:w-10 md:h-10 text-white" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2 md:mb-3">
                    20+
                  </div>
                  <div className="text-gray-300 text-sm md:text-lg">Contributors</div>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
                    <Zap className="w-8 h-8 md:w-10 md:h-10 text-white" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-2 md:mb-3">
                    100+
                  </div>
                  <div className="text-gray-300 text-sm md:text-lg">Active Nodes</div>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
                    <Shield className="w-8 h-8 md:w-10 md:h-10 text-white" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent mb-2 md:mb-3">
                    99.9%
                  </div>
                  <div className="text-gray-300 text-sm md:text-lg">Uptime</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-20 relative">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Frequently Asked Questions
              </h2>
              <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto px-4">
                Quick answers to common questions about DogecoinEV
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-6 md:space-y-8">
              {[
                {
                  question: "How can I contribute to DogecoinEV development?",
                  answer:
                    "You can contribute by joining our GitHub repository, participating in community discussions, reporting bugs, or submitting pull requests. We welcome developers of all skill levels!",
                },
                {
                  question: "What makes DogecoinEV different from other cryptocurrencies?",
                  answer:
                    "DogecoinEV combines the community spirit of Dogecoin with advanced scalability features, supporting 666 TPS with 1-minute block times and merge mining compatibility.",
                },
                {
                  question: "How do I get support for technical issues?",
                  answer:
                    "For technical support, join our Discord or Telegram communities where our team and experienced community members can help you troubleshoot issues.",
                },
                {
                  question: "Can I partner with DogecoinEV for business opportunities?",
                  answer:
                    "Yes! We're always open to partnerships. Please reach out via email at reallyshadydev@dogecoinev.com for business inquiries and partnership opportunities.",
                },
              ].map((faq, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-md p-6 md:p-8 rounded-2xl border border-white/20 hover:border-purple-500/50 transition-all duration-300"
                >
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">{faq.question}</h3>
                  <p className="text-gray-300 leading-relaxed text-base md:text-lg">{faq.answer}</p>
                </div>
              ))}
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
          <p className="text-gray-500 text-xs md:text-sm">© 2025 DogecoinEV Foundation. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  Zap,
  Shield,
  Users,
  Globe,
  Cpu,
  TrendingUp,
  Target,
  Rocket,
  Star,
  Code,
  Database,
  Network,
  Calendar,
  DollarSign,
  ClockIcon,
  Activity,
  MessageCircle,
  Copy,
  Check,
} from "lucide-react"
import Breadcrumbs from "@/components/breadcrumbs"

export default function AboutPageClient() {
  const [scrollY, setScrollY] = useState(0)
  const pathname = usePathname()
  const [copiedAddress, setCopiedAddress] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const copyToClipboard = async (address: string, type: string) => {
    try {
      await navigator.clipboard.writeText(address)
      setCopiedAddress(type)
      setTimeout(() => setCopiedAddress(null), 2000)
    } catch (err) {
      const textArea = document.createElement("textarea")
      textArea.value = address
      document.body.appendChild(textArea)
      textArea.select()
      try {
        document.execCommand("copy")
        setCopiedAddress(type)
        setTimeout(() => setCopiedAddress(null), 2000)
      } catch (copyErr) {
        console.error("Fallback copy failed:", copyErr)
        // Optionally, inform the user that copy failed
      }
      document.body.removeChild(textArea)
    }
  }

  const features = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "666 transactions per second with 1-minute block times and 10MB block capacity",
      gradient: "from-yellow-400 to-orange-500",
    },
    {
      icon: Shield,
      title: "Secure & Reliable",
      description: "Proven Scrypt algorithm with DigiShield difficulty adjustment and merge mining support",
      gradient: "from-blue-400 to-cyan-500",
    },
    {
      icon: Users,
      title: "Community Driven",
      description: "Built by passionate developers, crypto enthusiasts, and creative minds working together",
      gradient: "from-purple-400 to-pink-500",
    },
    {
      icon: Globe,
      title: "Real-World Ready",
      description: "From tipping streamers to buying coffee, designed for everyday transactions",
      gradient: "from-green-400 to-emerald-500",
    },
    {
      icon: Cpu,
      title: "Efficient Mining",
      description: "Merge mineable with Litecoin, Dogecoin, and Pepecoin starting at block 30,000",
      gradient: "from-red-400 to-rose-500",
    },
    {
      icon: TrendingUp,
      title: "Scalable Future",
      description: "Provisions for future upgrades to handle growing network demands",
      gradient: "from-indigo-400 to-purple-500",
    },
  ]

  const specifications = [
    { label: "Launch Date", value: "January 26, 2025", icon: Calendar },
    { label: "Block Time", value: "1 minute", icon: ClockIcon },
    { label: "Block Size", value: "10 MB", icon: Database },
    { label: "Base Size", value: "5 MB", icon: Database },
    { label: "TPS Capacity", value: "666", icon: Zap },
    { label: "Algorithm", value: "Scrypt", icon: Code },
    {
      label: "Difficulty Adjustment",
      value: "DigiShield (every block)",
      icon: Target,
    },
    { label: "Network Type", value: "Proof of Work", icon: Network },
    { label: "Network Port", value: "42069", icon: Activity },
    { label: "Address Prefix", value: "D (public)", icon: Target },
  ]

  const miningRewards = [
    {
      range: "1-144,999",
      reward: "Random: 0 to 1,000,000 until 1k then set → Fixed: 500,000",
      notes: "Initial random distribution then fixed reward",
    },
    {
      range: "145,000-200,000",
      reward: "250,000",
      notes: "First halving event",
    },
    {
      range: "200,001-300,000",
      reward: "125,000",
      notes: "Second halving event",
    },
    {
      range: "300,001-400,000",
      reward: "62,500",
      notes: "Third halving event",
    },
    {
      range: "400,001-500,000",
      reward: "31,250",
      notes: "Fourth halving event",
    },
    {
      range: "500,001-600,000",
      reward: "15,625",
      notes: "Fifth halving event",
    },
    {
      range: "600,001+",
      reward: "10,000",
      notes: "Long-term fixed reward",
    },
  ]

  const useCases = [
    {
      title: "Online Tipping",
      description: "Send 10 DEV to streamers on X or Twitch with minimal fees",
      icon: DollarSign,
      gradient: "from-green-400 to-emerald-500",
    },
    {
      title: "Charity Donations",
      description: "Process thousands of 50 DEV donations globally without intermediaries",
      icon: Users,
      gradient: "from-purple-400 to-pink-500",
    },
    {
      title: "Retail Transactions",
      description: "Buy a 5 DEV coffee or 50,000 DEV Tesla with quick settlements",
      icon: Zap,
      gradient: "from-blue-400 to-cyan-500",
    },
    {
      title: "Microtransactions",
      description: "Pay 1 DEV for articles or 5 DEV for game items instantly",
      icon: Target,
      gradient: "from-yellow-400 to-orange-500",
    },
  ]

  const donationCards = [
    {
      currency: "DogecoinEV (DEV)",
      address: "D6BDnxC2uemsgjwgbs7SgdT8D2cHvjTZ5V",
      qrData: "D6BDnxC2uemsgjwgbs7SgdT8D2cHvjTZ5V",
      gradient: "from-green-400 to-emerald-400",
      hoverBorder: "hover:border-green-500/50",
      copyButtonBg: "bg-green-600/20 hover:bg-green-600/30",
      copyButtonText: "text-green-400",
      type: "dev",
    },
    {
      currency: "Dogecoin (DOGE)",
      address: "DEXKkt6KVzowBHa2TQkkrh1wZ2EJvhwz2V",
      qrData: "DEXKkt6KVzowBHa2TQkkrh1wZ2EJvhwz2V",
      gradient: "from-yellow-400 to-orange-400",
      hoverBorder: "hover:border-yellow-500/50",
      copyButtonBg: "bg-yellow-600/20 hover:bg-yellow-600/30",
      copyButtonText: "text-yellow-400",
      type: "doge",
    },
    {
      currency: "Bitcoin (BTC)",
      address: "bc1pc7pcx5p387a4qckfq7l4c0glau4k8p285nmgl74zl34un7lejpsq6rvtwt",
      qrData: "bitcoin:bc1pc7pcx5p387a4qckfq7l4c0glau4k8p285nmgl74zl34un7lejpsq6rvtwt",
      gradient: "from-orange-400 to-red-400",
      hoverBorder: "hover:border-orange-500/50",
      copyButtonBg: "bg-orange-600/20 hover:bg-orange-600/30",
      copyButtonText: "text-orange-400",
      type: "btc",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-x-hidden dark:from-gray-800 dark:via-purple-900 dark:to-gray-800">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute -inset-10 opacity-50 dark:opacity-30">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
        </div>
      </div>

      {/* Header */}
      <header className="relative z-40 bg-white/10 backdrop-blur-md border-b border-white/20 sticky top-0 dark:bg-gray-900/50 dark:border-gray-700/50">
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
                  pathname === "/" ? "text-purple-400 dark:text-purple-300" : "dark:hover:text-purple-300"
                }`}
              >
                Home
              </Link>
              <Link
                href="/about"
                className={`hover:text-purple-400 transition-colors duration-300 font-medium ${
                  pathname === "/about" ? "text-purple-400 dark:text-purple-300" : "dark:hover:text-purple-300"
                }`}
              >
                About
              </Link>
              <Link
                href="/resources"
                className={`hover:text-purple-400 transition-colors duration-300 font-medium ${
                  pathname === "/resources" ? "text-purple-400 dark:text-purple-300" : "dark:hover:text-purple-300"
                }`}
              >
                Resources
              </Link>
              <Link
                href="/node-map"
                className={`hover:text-purple-400 transition-colors duration-300 font-medium ${
                  pathname === "/node-map" ? "text-purple-400 dark:text-purple-300" : "dark:hover:text-purple-300"
                }`}
              >
                Node Map
              </Link>
              <Link
                href="/widgets"
                className={`hover:text-purple-400 transition-colors duration-300 font-medium ${
                  pathname === "/widgets" ? "text-purple-400 dark:text-purple-300" : "dark:hover:text-purple-300"
                }`}
              >
                Widgets
              </Link>
              <Link
                href="/contact"
                className={`hover:text-purple-400 transition-colors duration-300 font-medium ${
                  pathname === "/contact" ? "text-purple-400 dark:text-purple-300" : "dark:hover:text-purple-300"
                }`}
              >
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 md:px-6 py-4">
        <Breadcrumbs />
      </div>

      <main className="relative z-10 pb-20 md:pb-0">
        {/* Hero Section */}
        <section className="py-16 md:py-32 text-center relative">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full px-4 py-2 mb-6 md:mb-8 border border-purple-500/30 dark:bg-purple-500/10 dark:border-purple-500/20">
                <Star className="w-4 h-4 text-yellow-400" />
                <span className="text-sm font-medium text-gray-200 dark:text-gray-300">Launched January 26, 2025</span>
              </div>

              <h1 className="text-4xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent leading-tight dark:from-gray-100 dark:via-purple-300 dark:to-pink-300">
                The Future of
                <br />
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400 bg-clip-text text-transparent">
                  Fun and Function
                </span>
              </h1>

              <p className="text-lg md:text-2xl text-gray-300 mb-8 md:mb-12 leading-relaxed max-w-3xl mx-auto px-4 dark:text-gray-400">
                DogecoinEV is an exciting evolution of Dogecoin and Pepecoin, designed for sustainable speed with 10MB
                blocks and 1-minute block times. Built to handle everything from small tips to large purchases.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
                <div className="bg-white/10 backdrop-blur-md p-4 md:p-6 rounded-2xl border border-white/20 dark:bg-gray-800/50 dark:border-gray-700/50">
                  <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                    666
                  </div>
                  <div className="text-gray-300 text-sm md:text-base dark:text-gray-400">Transactions per Second</div>
                </div>
                <div className="bg-white/10 backdrop-blur-md p-4 md:p-6 rounded-2xl border border-white/20 dark:bg-gray-800/50 dark:border-gray-700/50">
                  <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                    10MB
                  </div>
                  <div className="text-gray-300 text-sm md:text-base dark:text-gray-400">Block Size</div>
                </div>
                <div className="bg-white/10 backdrop-blur-md p-4 md:p-6 rounded-2xl border border-white/20 dark:bg-gray-800/50 dark:border-gray-700/50">
                  <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-2">
                    1min
                  </div>
                  <div className="text-gray-300 text-sm md:text-base dark:text-gray-400">Block Time</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="py-16 md:py-20 relative">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-5xl font-bold mb-6 md:mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Our Vision
                </h2>
                <div className="space-y-4 md:space-y-6 text-base md:text-lg text-gray-300 leading-relaxed dark:text-gray-400">
                  <p>
                    DogecoinEV operates using the Scrypt algorithm in a proof-of-work system, optimized with the
                    DigiShield mechanism to ensure blocks are consistently created every 60 seconds. It maintains
                    efficiency with a 5-megabyte base size, allowing for a maximum block capacity of 10 megabytes to
                    handle high transaction volumes.
                  </p>
                  <p>
                    More than just a cryptocurrency, DogecoinEV is a movement. It combines high transaction
                    capacity—capable of handling hundreds of transactions per second—with the decentralized,
                    community-driven ethos of its predecessors.
                  </p>
                  <p>
                    Whether you're tipping a creator, supporting a new idea, or buying a coffee, DogecoinEV is built to
                    scale, adapt, and thrive, all while staying true to the meme-coin magic that started it all.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl blur opacity-25 dark:opacity-15"></div>
                <div className="relative bg-white/10 backdrop-blur-md p-6 md:p-8 rounded-3xl border border-white/20 dark:bg-gray-800/50 dark:border-gray-700/50">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2ndlogo-c0jK0sFxVm0b23MMF2PaAdkIdKmN6r.png"
                    alt="DogecoinEV Vision"
                    width={350}
                    height={350}
                    className="mx-auto md:w-[400px] md:h-[400px]"
                  />
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
              <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto px-4 dark:text-gray-400">
                DogecoinEV combines proven technology with innovative features to create a truly next-generation
                blockchain
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {features.map((feature, index) => (
                <div key={index} className="group relative h-full">
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} rounded-2xl blur opacity-25 group-hover:opacity-40 transition-opacity duration-300 dark:opacity-15 dark:group-hover:opacity-25`}
                  ></div>
                  <div className="relative bg-white/10 backdrop-blur-md p-6 md:p-8 rounded-2xl border border-white/20 hover:border-white/40 transition-all duration-300 transform hover:scale-105 h-full flex flex-col dark:bg-gray-800/50 dark:border-gray-700/50 dark:hover:border-gray-600">
                    <div
                      className={`w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r ${feature.gradient} rounded-xl flex items-center justify-center mb-4 md:mb-6`}
                    >
                      <feature.icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-white dark:text-gray-100">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed flex-grow text-sm md:text-base dark:text-gray-400">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Real-World Use Cases */}
        <section className="py-16 md:py-20 relative">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                Real-World Applications
              </h2>
              <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto px-4 dark:text-gray-400">
                From microtransactions to major purchases, DogecoinEV handles it all with speed and efficiency
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="group relative h-full">
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${useCase.gradient} rounded-2xl blur opacity-25 group-hover:opacity-40 transition-opacity duration-300 dark:opacity-15 dark:group-hover:opacity-25`}
                  ></div>
                  <div className="relative bg-white/10 backdrop-blur-md p-4 md:p-6 rounded-2xl border border-white/20 hover:border-white/40 transition-all duration-300 transform hover:scale-105 h-full flex flex-col text-center dark:bg-gray-800/50 dark:border-gray-700/50 dark:hover:border-gray-600">
                    <div
                      className={`w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r ${useCase.gradient} rounded-xl flex items-center justify-center mb-3 md:mb-4 mx-auto`}
                    >
                      <useCase.icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                    </div>
                    <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-white dark:text-gray-100">
                      {useCase.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed flex-grow text-sm dark:text-gray-400">
                      {useCase.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technical Specifications */}
        <section className="py-16 md:py-20 relative">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Technical Specifications
              </h2>
              <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto px-4 dark:text-gray-400">
                Built on proven Scrypt technology with enhancements for modern blockchain needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {specifications.map((spec, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-md p-4 md:p-6 rounded-2xl border border-white/20 hover:border-blue-500/50 transition-all duration-300 dark:bg-gray-800/50 dark:border-gray-700/50 dark:hover:border-blue-500/40"
                >
                  <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <spec.icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-sm md:text-lg font-semibold text-white dark:text-gray-100">{spec.label}</div>
                      <div className="text-lg md:text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                        {spec.value}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mining Rewards */}
        <section className="py-16 md:py-20 relative">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                Mining Rewards Structure
              </h2>
              <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto px-4 dark:text-gray-400">
                Structured to incentivize miners while gradually reducing issuance over time
              </p>
            </div>

            <div className="max-w-6xl mx-auto">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 overflow-hidden dark:bg-gray-800/50 dark:border-gray-700/50">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gradient-to-r from-yellow-600/20 to-orange-600/20 dark:from-yellow-700/20 dark:to-orange-700/20">
                      <tr>
                        <th className="px-4 md:px-6 py-3 md:py-4 text-left text-white font-semibold text-sm md:text-base dark:text-gray-200">
                          Block Range
                        </th>
                        <th className="px-4 md:px-6 py-3 md:py-4 text-left text-white font-semibold text-sm md:text-base dark:text-gray-200">
                          Block Reward (DEV)
                        </th>
                        <th className="px-4 md:px-6 py-3 md:py-4 text-left text-white font-semibold text-sm md:text-base dark:text-gray-200">
                          Notes
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {miningRewards.map((reward, index) => (
                        <tr
                          key={index}
                          className="border-t border-white/10 hover:bg-white/5 transition-colors dark:border-gray-700/50 dark:hover:bg-gray-700/30"
                        >
                          <td className="px-4 md:px-6 py-3 md:py-4 text-gray-300 font-medium text-sm md:text-base dark:text-gray-400">
                            {reward.range}
                          </td>
                          <td className="px-4 md:px-6 py-3 md:py-4 text-yellow-400 font-bold text-base md:text-lg dark:text-yellow-300">
                            {reward.reward}
                          </td>
                          <td className="px-4 md:px-6 py-3 md:py-4 text-gray-400 text-sm md:text-base dark:text-gray-500">
                            {reward.notes}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="mt-6 md:mt-8 bg-white/10 backdrop-blur-md p-4 md:p-6 rounded-2xl border border-white/20 dark:bg-gray-800/50 dark:border-gray-700/50">
                <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                  Tokenomics - A Currency That Moves
                </h3>
                <p className="text-gray-300 leading-relaxed text-sm md:text-base dark:text-gray-400">
                  DogecoinEV does not have a supply cap, with new DEV coins continuously created through block rewards.
                  This inflationary model encourages spending and circulation rather than hoarding, maintaining an
                  active and dynamic economy. With approximately 14.4 million DEV created daily, the system promotes
                  transactions and community engagement while keeping fees low.
                </p>
              </div>
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
              <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto px-4 dark:text-gray-400">
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
                    className={`absolute inset-0 rounded-2xl blur opacity-25 transition-opacity duration-300 dark:opacity-15 ${
                      item.status === "completed"
                        ? "bg-gradient-to-r from-green-600 to-emerald-600"
                        : item.status === "current"
                          ? "bg-gradient-to-r from-blue-600 to-cyan-600"
                          : item.status === "upcoming"
                            ? "bg-gradient-to-r from-purple-600 to-pink-600"
                            : "bg-gradient-to-r from-gray-600 to-slate-600"
                    }`}
                  ></div>
                  <div className="relative bg-white/10 backdrop-blur-md p-6 md:p-8 rounded-2xl border border-white/20 hover:border-white/40 transition-all duration-300 dark:bg-gray-800/50 dark:border-gray-700/50 dark:hover:border-gray-600">
                    <div className="flex items-center gap-4 mb-4 md:mb-6">
                      <div
                        className={`px-3 py-1 rounded-full text-sm font-medium ${
                          item.status === "completed"
                            ? "bg-green-500/20 text-green-400 dark:bg-green-500/10 dark:text-green-300"
                            : item.status === "current"
                              ? "bg-blue-500/20 text-blue-400 dark:bg-blue-500/10 dark:text-blue-300"
                              : item.status === "upcoming"
                                ? "bg-purple-500/20 text-purple-400 dark:bg-purple-500/10 dark:text-purple-300"
                                : "bg-gray-500/20 text-gray-400 dark:bg-gray-500/10 dark:text-gray-300"
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
                      <div className="text-sm text-gray-400 dark:text-gray-500">{item.phase}</div>
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-white dark:text-gray-100">
                      {item.title}
                    </h3>
                    <ul className="space-y-2">
                      {item.items.map((subItem, subIndex) => (
                        <li
                          key={subIndex}
                          className="flex items-center gap-3 text-gray-300 text-sm md:text-base dark:text-gray-400"
                        >
                          <div
                            className={`w-2 h-2 rounded-full flex-shrink-0 ${
                              item.status === "completed"
                                ? "bg-green-400 dark:bg-green-300"
                                : item.status === "current"
                                  ? "bg-blue-400 dark:bg-blue-300"
                                  : "bg-gray-500 dark:bg-gray-400"
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

        {/* Community & Team */}
        <section className="py-16 md:py-20 relative">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Community-Driven Innovation
              </h2>
              <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto px-4 dark:text-gray-400">
                Built by passionate developers, crypto enthusiasts, and creative minds working together
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-md p-6 md:p-8 rounded-3xl border border-white/20 mb-6 md:mb-8 dark:bg-gray-800/50 dark:border-gray-700/50">
                <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Founding Team & Community
                </h3>
                <div className="space-y-4 md:space-y-6 text-base md:text-lg text-gray-300 leading-relaxed dark:text-gray-400">
                  <p>
                    DogecoinEV is a testament to the power of community-driven innovation. Born from the collective
                    vision of passionate individuals—developers, crypto enthusiasts, and creative minds—our project
                    thrives on the principles of scalability, speed, and sustainability.
                  </p>
                  <p>
                    We are not bound by corporate interests; instead, we are fueled by the shared dreams of a diverse
                    community eager to push the boundaries of what's possible in the blockchain space. Our community is
                    the heart of DogecoinEV, a dynamic group of like-minded individuals who believe in the potential of
                    blockchain to transform industries.
                  </p>
                  <p>
                    From finance to entertainment, gaming to real-world solutions, we are committed to creating a
                    platform that caters to developers and innovators across various fields. Our focus on scalability
                    ensures that we can accommodate the growing demands of our users, while our commitment to speed
                    guarantees swift and efficient transactions.
                  </p>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-md p-6 md:p-8 rounded-3xl border border-white/20 dark:bg-gray-800/50 dark:border-gray-700/50">
                <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Future Vision
                </h3>
                <div className="space-y-4 md:space-y-6 text-base md:text-lg text-gray-300 leading-relaxed dark:text-gray-400">
                  <p>
                    Looking to the future, DogecoinEV is poised for growth and innovation. We envision scaling to even
                    larger and faster blocks, continually enhancing our network's capabilities. Our roadmap includes
                    fostering partnerships that integrate DogecoinEV into diverse sectors.
                  </p>
                  <p>
                    Together, we are building a sustainable, inclusive ecosystem that empowers everyone to dream big and
                    achieve more. We ensure that our community remains at the forefront of technological advancement,
                    creating opportunities for developers, businesses, and users worldwide.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 md:mt-16 text-center">
              <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Join Our Community
              </h3>
              <div className="flex flex-wrap justify-center gap-3 md:gap-4">
                <Link
                  href="https://discord.gg/SVXHn3RE5K"
                  target="_blank"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 px-4 md:px-6 py-2 md:py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 text-sm md:text-base dark:hover:from-purple-500/90 dark:hover:to-pink-500/90"
                  style={{ WebkitTapHighlightColor: "transparent" }}
                >
                  <Users className="w-4 h-4 md:w-5 md:h-5" />
                  Discord
                </Link>
                <Link
                  href="https://t.me/DEVOFFICIALTG"
                  target="_blank"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 px-4 md:px-6 py-2 md:py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 text-sm md:text-base dark:hover:from-blue-500/90 dark:hover:to-cyan-500/90"
                  style={{ WebkitTapHighlightColor: "transparent" }}
                >
                  <Users className="w-4 h-4 md:w-5 md:h-5" />
                  Telegram
                </Link>
                <Link
                  href="https://github.com/DogecoinEV-Foundation/DogecoinEV"
                  target="_blank"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-gray-600 to-slate-600 hover:from-gray-500 hover:to-slate-500 px-4 md:px-6 py-2 md:py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 text-sm md:text-base dark:from-gray-700 dark:to-slate-700 dark:hover:from-gray-600/90 dark:hover:to-slate-600/90"
                  style={{ WebkitTapHighlightColor: "transparent" }}
                >
                  <Code className="w-4 h-4 md:w-5 md:h-5" />
                  GitHub
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 md:py-20 relative">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Ready to Join the Future?
              </h2>
              <p className="text-lg md:text-xl text-gray-300 mb-8 md:mb-12 leading-relaxed px-4 dark:text-gray-400">
                Be part of the next evolution in blockchain technology. Download a wallet, join our community, or start
                mining today.
              </p>
              <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 md:gap-4">
                <Link
                  href="/resources"
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }}
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 min-h-[48px] dark:hover:from-purple-500/90 dark:hover:to-pink-500/90"
                  style={{ WebkitTapHighlightColor: "transparent" }}
                >
                  <Rocket className="w-4 h-4 md:w-5 md:h-5" />
                  Get Started
                </Link>
                <Link
                  href="https://xeggex.com/market/DEV_USDT"
                  target="_blank"
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 min-h-[48px] dark:hover:from-green-500/90 dark:hover:to-emerald-500/90"
                  style={{ WebkitTapHighlightColor: "transparent" }}
                >
                  <TrendingUp className="w-4 h-4 md:w-5 md:h-5" />
                  Buy DEV
                </Link>
                <Link
                  href="https://github.com/DogecoinEV-Foundation/DOGECOINEV-WHITEPAPER/blob/main/DOGECOINEV-WHITEPAPER"
                  target="_blank"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-md hover:bg-white/20 px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold transition-all duration-300 border border-white/20 hover:border-white/40 min-h-[48px] dark:bg-gray-800/50 dark:border-gray-700/50 dark:hover:bg-gray-700/70 dark:hover:border-gray-600"
                  style={{ WebkitTapHighlightColor: "transparent" }}
                >
                  Read Whitepaper
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Donations Section */}
        <section className="py-16 md:py-20 relative">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                Support DogecoinEV Development
              </h2>
              <p className="text-lg md:text-xl text-gray-300 mb-8 md:mb-12 leading-relaxed px-4 dark:text-gray-400">
                Your generous donations help us continue building and improving the DogecoinEV blockchain.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                {donationCards.map((card) => (
                  <div
                    key={card.type}
                    className={`bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 ${card.hoverBorder} transition-all duration-300 dark:bg-gray-800/50 dark:border-gray-700/50`}
                  >
                    <h3
                      className={`text-xl font-bold mb-4 bg-gradient-to-r ${card.gradient} bg-clip-text text-transparent`}
                    >
                      {card.currency}
                    </h3>

                    <div className="mb-4 flex justify-center">
                      <div className="bg-white p-3 rounded-lg">
                        <Image
                          src={`https://api.qrserver.com/v1/create-qr-code/?size=120x120&data=${encodeURIComponent(card.qrData)}`}
                          alt={`${card.currency} Donation QR Code`}
                          width={120}
                          height={120}
                          className="w-[120px] h-[120px]"
                          unoptimized // Using external QR service, no Next.js optimization needed
                        />
                      </div>
                    </div>

                    <div className="bg-black/20 rounded-lg p-3 mb-4 dark:bg-gray-900/50">
                      <p className="text-gray-300 text-sm break-all font-mono dark:text-gray-400">{card.address}</p>
                    </div>

                    <button
                      onClick={() => copyToClipboard(card.address, card.type)}
                      className={`w-full flex items-center justify-center gap-2 ${card.copyButtonBg} px-4 py-2 rounded-lg ${card.copyButtonText} font-medium transition-all duration-300 text-sm`}
                      style={{ WebkitTapHighlightColor: "transparent" }}
                    >
                      {copiedAddress === card.type ? (
                        <>
                          <Check className="w-4 h-4" />
                          Copied!
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4" />
                          Copy Address
                        </>
                      )}
                    </button>
                  </div>
                ))}
              </div>

              <div className="mt-8 bg-white/10 backdrop-blur-md p-4 md:p-6 rounded-2xl border border-white/20 dark:bg-gray-800/50 dark:border-gray-700/50">
                <p className="text-gray-300 text-sm md:text-base dark:text-gray-400">
                  💡 <strong>Tip:</strong> Scan the QR code with your mobile wallet or copy the address to send
                  donations. Every contribution helps us improve the DogecoinEV ecosystem!
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative z-10 bg-white/10 backdrop-blur-md border-t border-white/20 py-8 md:py-12 mb-16 md:mb-0 dark:bg-gray-900/50 dark:border-gray-700/50">
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

          <p className="text-gray-400 mb-4 md:mb-6 text-sm md:text-base dark:text-gray-500">
            Building the future of blockchain technology, one block at a time.
          </p>
          <div className="flex justify-center gap-4 md:gap-6 mb-6 md:mb-8">
            <Link
              href="https://discord.gg/SVXHn3RE5K"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-purple-400 transition-colors duration-300 p-2 dark:text-gray-500 dark:hover:text-purple-300"
              style={{ WebkitTapHighlightColor: "transparent" }}
              aria-label="DogecoinEV Discord Server"
              title="DogecoinEV Discord Server"
            >
              <Users className="w-6 h-6" />
              <span className="sr-only">Discord</span>
            </Link>
            <Link
              href="https://t.me/DEVOFFICIALTG"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 p-2 dark:text-gray-500 dark:hover:text-cyan-300"
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
              className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 p-2 dark:text-gray-500 dark:hover:text-cyan-300"
              style={{ WebkitTapHighlightColor: "transparent" }}
              aria-label="DogecoinEV Chinese Telegram Group"
              title="DogecoinEV Chinese Telegram Group"
            >
              <MessageCircle className="w-6 h-6" />
              <span className="sr-only">Telegram 中文</span>
            </Link>
            <Link
              href="https://github.com/DogecoinEV-Foundation/DogecoinEV"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-slate-400 transition-colors duration-300 p-2 dark:text-gray-500 dark:hover:text-slate-300"
              style={{ WebkitTapHighlightColor: "transparent" }}
              aria-label="DogecoinEV GitHub Repository"
              title="DogecoinEV GitHub Repository"
            >
              <Code className="w-6 h-6" />
              <span className="sr-only">GitHub</span>
            </Link>
          </div>
          <p className="text-gray-500 text-xs md:text-sm dark:text-gray-600">
            © 2025 DogecoinEV Foundation. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

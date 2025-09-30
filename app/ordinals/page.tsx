"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight, Github, Code2, ExternalLink, Coins, Terminal, BookOpen } from "lucide-react"
import SiteFooter from "@/components/site-footer"

export default function OrdinalsPage() {
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
        <section className="py-16 md:py-24 text-center relative">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full px-4 py-2 mb-6 md:mb-8 border border-purple-500/30">
                <Coins className="w-4 h-4 text-yellow-400" />
                <span className="text-sm font-medium">Ordinals Infrastructure</span>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent leading-tight">
                DogecoinEV
                <br />
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400 bg-clip-text text-transparent">
                  Ordinals
                </span>
              </h1>

              <p className="text-lg md:text-xl text-gray-300 mb-8 md:mb-12 leading-relaxed max-w-3xl mx-auto px-4">
                Explore and create digital artifacts on DogecoinEV. Our Ordinals infrastructure enables unique, 
                verifiable digital collectibles and inscriptions on the DogecoinEV blockchain.
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-8 md:py-16 relative">
          <div className="container mx-auto px-4 md:px-6">
            {/* Ordinals Explorer */}
            <div className="max-w-5xl mx-auto mb-12 md:mb-16">
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition-opacity duration-300"></div>
                <div className="relative bg-white/10 backdrop-blur-md p-6 md:p-8 rounded-2xl border border-white/20 hover:border-purple-500/50 transition-all duration-300">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <ExternalLink className="w-6 h-6 md:w-8 md:h-8 text-white" />
                    </div>
                    <div className="flex-grow">
                      <h2 className="text-2xl md:text-3xl font-bold mb-3 text-white">Ordinals Explorer</h2>
                      <p className="text-gray-300 mb-4 text-sm md:text-base">
                        Browse, search, and verify ordinal inscriptions on DogecoinEV. Our explorer provides a 
                        comprehensive view of all inscriptions, including metadata, ownership, and transaction history.
                      </p>
                      <Link
                        href="https://ord-dogecoinev.io"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25"
                      >
                        Visit Explorer
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                  <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-4">
                    <p className="text-purple-300 text-sm">
                      <strong>URL:</strong>{" "}
                      <a href="https://ord-dogecoinev.io" target="_blank" rel="noopener noreferrer" className="hover:underline">
                        ord-dogecoinev.io
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Resources Grid */}
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Developer Resources
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Ord Repository */}
                <div className="group relative h-full">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition-opacity duration-300"></div>
                  <div className="relative bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105 h-full flex flex-col">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-xl flex items-center justify-center mb-4">
                      <Github className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold mb-3 text-white">Ord-DogecoinEV</h3>
                    <p className="text-gray-300 leading-relaxed mb-4 flex-grow text-sm md:text-base">
                      The official ordinals indexer and server for DogecoinEV. Fork of ord with DogecoinEV-specific 
                      modifications including support for dev-20 tokens and inscriptions.
                    </p>
                    <div className="space-y-3">
                      <Link
                        href="https://github.com/reallyshadydev/Ord-DogecoinEV"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 px-4 py-2 rounded-lg font-medium transition-all duration-300 text-sm"
                      >
                        <Github className="w-4 h-4" />
                        View Repository
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                      <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-3">
                        <p className="text-blue-300 text-xs">
                          <strong>Features:</strong> Indexer, REST API, Web Explorer
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Devscriptions CLI */}
                <div className="group relative h-full">
                  <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition-opacity duration-300"></div>
                  <div className="relative bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 hover:border-green-500/50 transition-all duration-300 transform hover:scale-105 h-full flex flex-col">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-emerald-500 rounded-xl flex items-center justify-center mb-4">
                      <Terminal className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold mb-3 text-white">Devscriptions</h3>
                    <p className="text-gray-300 leading-relaxed mb-4 flex-grow text-sm md:text-base">
                      Command-line tool for creating inscriptions on DogecoinEV. Mint, transfer, and manage your 
                      ordinal inscriptions directly from the terminal with this powerful CLI minter.
                    </p>
                    <div className="space-y-3">
                      <Link
                        href="https://github.com/DogecoinEV-Foundation/Devscriptions"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 px-4 py-2 rounded-lg font-medium transition-all duration-300 text-sm"
                      >
                        <Github className="w-4 h-4" />
                        View Repository
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                      <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-3">
                        <p className="text-green-300 text-xs">
                          <strong>Type:</strong> CLI Minter Tool
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* What are Ordinals Section */}
            <div className="max-w-5xl mx-auto mt-12 md:mt-16">
              <div className="bg-white/10 backdrop-blur-md p-6 md:p-8 rounded-2xl border border-white/20">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <BookOpen className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">What are Ordinals?</h2>
                    <div className="space-y-4 text-gray-300 text-sm md:text-base">
                      <p>
                        Ordinals are a numbering scheme for satoshis (the smallest unit of a cryptocurrency) that allows 
                        tracking and transferring individual sats. This enables digital artifacts - NFT-like assets - to 
                        be inscribed directly on the blockchain.
                      </p>
                      <p>
                        On DogecoinEV, ordinals enable creators to inscribe images, text, JSON, and other data types 
                        directly onto the blockchain. Each inscription is permanent, immutable, and verifiable.
                      </p>
                      <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4 mt-4">
                        <p className="text-yellow-300 text-sm">
                          <strong>Key Benefits:</strong> Permanent storage, true ownership, verifiable provenance, 
                          and seamless transfer alongside DEV transactions.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Getting Started Section */}
            <div className="max-w-5xl mx-auto mt-8 md:mt-12">
              <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-md p-6 md:p-8 rounded-2xl border border-purple-500/30">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white text-center">Getting Started</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-xl font-bold">1</span>
                    </div>
                    <h3 className="font-semibold mb-2">Explore</h3>
                    <p className="text-gray-300 text-sm">
                      Visit the ord-dogecoinev.io explorer to browse existing inscriptions
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-xl font-bold">2</span>
                    </div>
                    <h3 className="font-semibold mb-2">Set Up</h3>
                    <p className="text-gray-300 text-sm">
                      Install the Devscriptions CLI tool from the GitHub repository
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-xl font-bold">3</span>
                    </div>
                    <h3 className="font-semibold mb-2">Create</h3>
                    <p className="text-gray-300 text-sm">
                      Start inscribing your own digital artifacts on DogecoinEV
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

"use client"

import Image from "next/image"
import Link from "next/link"
import { Github, MessageCircle, Users } from "lucide-react"
import { XIcon } from "@/components/x-icon"

export default function SiteFooter() {
  return (
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
            aria-label="DogecoinEV GitHub Repository"
            title="DogecoinEV GitHub Repository"
          >
            <Github className="w-6 h-6" />
            <span className="sr-only">GitHub</span>
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
            href="https://discord.gg/SVXHn3RE5K"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-indigo-400 transition-colors duration-300 p-2"
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
            <Users className="w-6 h-6" />
            <span className="sr-only">Telegram 中文</span>
          </Link>
        </div>

        <p className="text-gray-500 text-xs md:text-sm">© 2025 DogecoinEV Foundation. All rights reserved.</p>
      </div>
    </footer>
  )
}

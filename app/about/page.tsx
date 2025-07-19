import type { Metadata } from "next"
import { getSiteUrl } from "@/lib/constants"
import AboutPageClient from "./AboutPageClient"

export const metadata: Metadata = {
  title: "About DogecoinEV | Fun & Functional Cryptocurrency",
  description:
    "Discover DogecoinEV: a fast, secure, and community-driven cryptocurrency. Learn about its features, technical specifications, mining rewards, and vision for the future of digital currency.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About DogecoinEV | Fun & Functional Cryptocurrency",
    description:
      "Explore DogecoinEV's unique features, robust technology, and community-first approach. See how we're building the future of fun and functional digital transactions.",
    url: `${getSiteUrl()}/about`,
    images: [
      {
        url: `${getSiteUrl()}/og-image-about.png`,
        width: 1200,
        height: 630,
        alt: "DogecoinEV About Page",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About DogecoinEV | Fun & Functional Cryptocurrency",
    description:
      "Learn all about DogecoinEV - the fast, secure, and community-driven crypto. Features, tech specs, roadmap, and more!",
    images: [`${getSiteUrl()}/twitter-image-about.png`],
  },
}

export default function AboutPage() {
  return <AboutPageClient />
}

import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" })

export const metadata: Metadata = {
  title: {
    default: "WoodCraft Hangers - Premium Wooden Hangers Manufacturing",
    template: "%s | WoodCraft Hangers",
  },
  description:
    "Premium wooden hangers crafted with precision. Sustainable, durable, and elegant storage solutions for your wardrobe. Custom manufacturing and wholesale available.",
  keywords: [
    "wooden hangers",
    "premium hangers",
    "sustainable hangers",
    "custom hangers",
    "wholesale hangers",
    "wardrobe accessories",
  ],
  authors: [{ name: "WoodCraft Hangers" }],
  creator: "WoodCraft Hangers",
  publisher: "WoodCraft Hangers",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://woodcraft-hangers.com",
    siteName: "WoodCraft Hangers",
    title: "WoodCraft Hangers - Premium Wooden Hangers Manufacturing",
    description: "Premium wooden hangers crafted with precision. Sustainable, durable, and elegant storage solutions.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "WoodCraft Hangers - Premium Wooden Hangers",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "WoodCraft Hangers - Premium Wooden Hangers Manufacturing",
    description: "Premium wooden hangers crafted with precision. Sustainable, durable, and elegant storage solutions.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans bg-cream text-medium-brown">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

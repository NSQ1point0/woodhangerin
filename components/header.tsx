"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

const navigation = [
  { name: "Home", href: "/" },
  { name: "Products", href: "/products" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-cream/95 backdrop-blur-sm border-b border-light-beige transition-all duration-300 hover:bg-cream">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo with hover animation */}
          <Link href="/" className="flex items-center space-x-2 group hover-scale">
            <div className="w-8 h-8 bg-medium-brown rounded-full flex items-center justify-center group-hover:rotate-180 transition-transform duration-500">
              <div className="w-4 h-4 bg-cream rounded-full group-hover:scale-110 transition-transform duration-300"></div>
            </div>
            <span className="font-display text-xl font-bold text-medium-brown group-hover:text-medium-brown/80 transition-colors">
              WoodCraft Hangers
            </span>
          </Link>

          {/* Desktop Navigation with enhanced hover effects */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item, index) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "text-medium-brown hover:text-medium-brown/80 transition-all duration-300 font-medium relative group hover:scale-105",
                  pathname === item.href && "text-medium-brown border-b-2 border-medium-brown",
                )}
              >
                <span className="relative z-10">{item.name}</span>
                <div className="absolute inset-0 bg-light-beige rounded-lg scale-0 group-hover:scale-100 transition-transform duration-200 -z-10"></div>
              </Link>
            ))}
            <Button asChild className="bg-medium-brown hover:bg-medium-brown/90 text-cream hover-lift hover-glow group">
              <Link href="/contact">
                <span className="group-hover:scale-105 transition-transform duration-200">Get Quote</span>
              </Link>
            </Button>
          </div>

          {/* Mobile menu button with animation */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="hover:bg-light-beige group"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6 text-medium-brown group-hover:rotate-90 transition-transform duration-300" />
              ) : (
                <Menu className="h-6 w-6 text-medium-brown group-hover:scale-110 transition-transform duration-300" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation with slide animation */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-light-beige animate-fade-in-up">
            <div className="flex flex-col space-y-4 pt-4">
              {navigation.map((item, index) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    `text-medium-brown hover:text-medium-brown/80 transition-all duration-300 font-medium hover:transform hover:translate-x-2 animate-fade-in-left animate-delay-${(index + 1) * 100}`,
                    pathname === item.href && "text-medium-brown font-semibold",
                  )}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Button
                asChild
                className="bg-medium-brown hover:bg-medium-brown/90 text-cream w-fit hover-scale animate-fade-in-left animate-delay-500"
              >
                <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                  Get Quote
                </Link>
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

import Link from "next/link"
import { Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-medium-brown text-cream">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info with animation */}
          <div className="space-y-4 animate-fade-in-up animate-delay-100">
            <div className="flex items-center space-x-2 group">
              <div className="w-8 h-8 bg-sage-green rounded-full flex items-center justify-center group-hover:rotate-180 transition-transform duration-500">
                <div className="w-4 h-4 bg-cream rounded-full group-hover:scale-110 transition-transform duration-300"></div>
              </div>
              <span className="font-display text-xl font-bold group-hover:text-light-beige transition-colors">
                WoodCraft Hangers
              </span>
            </div>
            <p className="text-light-beige hover:text-cream transition-colors cursor-default">
              Premium wooden hangers crafted with precision, sustainability, and timeless elegance.
            </p>
          </div>

          {/* Quick Links with staggered hover effects */}
          <div className="animate-fade-in-up animate-delay-200">
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: "Home", href: "/" },
                { name: "Products", href: "/products" },
                { name: "About Us", href: "/about" },
                { name: "Contact", href: "/contact" },
              ].map((link, index) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className={`text-light-beige hover:text-cream transition-all duration-300 hover:transform hover:translate-x-2 animate-fade-in-up animate-delay-${300 + index * 50}`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products with hover effects */}
          <div className="animate-fade-in-up animate-delay-300">
            <h3 className="font-semibold text-lg mb-4">Products</h3>
            <ul className="space-y-2 text-light-beige">
              {["Suit Hangers", "Dress Hangers", "Shirt Hangers", "Coat Hangers", "Custom Solutions"].map(
                (product, index) => (
                  <li
                    key={product}
                    className={`hover:text-cream transition-all duration-300 cursor-default hover:transform hover:translate-x-1 animate-fade-in-up animate-delay-${350 + index * 50}`}
                  >
                    {product}
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* Contact Info with icon animations */}
          <div className="animate-fade-in-up animate-delay-400">
            <h3 className="font-semibold text-lg mb-4">Contact Info</h3>
            <div className="space-y-3">
              {[
                { icon: MapPin, text: "shop no 10,Road no 15,Indira nagar,baiganwadi,Govandi, Mumbai-400043" },
                { icon: Phone, text: "9987861269 / 9324543134" },
                { icon: Mail, text: "info@woodenhangerin.com" },
              ].map((item, index) => (
                <div
                  key={index}
                  className={`flex items-center space-x-2 text-light-beige group hover:text-cream transition-all duration-300 hover:transform hover:translate-x-1 animate-fade-in-up animate-delay-${450 + index * 50}`}
                >
                  <item.icon className="w-4 h-4 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300" />
                  <span className="text-sm">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-sage-green mt-8 pt-8 text-center animate-fade-in-up animate-delay-600">
          <p className="text-light-beige hover:text-cream transition-colors cursor-default">
            © 2025 WoodCraft Hangers. All rights reserved. |
            <span className="hover:text-cream transition-colors cursor-pointer"> Privacy Policy</span> |
            <span className="hover:text-cream transition-colors cursor-pointer"> Terms of Service</span>
          </p>
        </div>
      </div>
    </footer>
  )
}

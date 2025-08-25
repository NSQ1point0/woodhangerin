import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Award, Leaf, Users, Package, Truck, Shield, Store, Building2, Hotel, Scissors, ShoppingCart, Shirt, BriefcaseBusiness } from "lucide-react"

const metadata: Metadata = {
  title: "WoodenHangerIn.com | Premium Wooden Hangers – Manufacturer & Bulk Supplier",
  description:
    "Premium wooden hangers manufacturer and bulk supplier across India. High-quality solid wood hangers with custom branding, bulk orders, and nationwide shipping.",
}

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-light-beige to-warm-beige overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/banner.jpg"
            alt="Premium wooden hangers craftsmanship"
            fill
            className="object-cover opacity-50 transition-transform duration-700"
            priority
          />
        </div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4 animate-fade-in-up">
          <h1 className="font-display text-5xl md:text-7xl font-bold text-medium-brown mb-6 animate-float">
            Wooden Hanger In
          </h1>
          <p className="text-xl md:text-2xl text-medium-brown mb-8 max-w-2xl mx-auto opacity-80 animate-fade-in-up animate-delay-200">
            Premium Wooden Hangers – Manufacturer & Bulk Supplier Across India
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animate-delay-400">
            <Button
              asChild
              size="lg"
              className="bg-medium-brown hover:bg-medium-brown/90 text-cream hover-lift hover-glow group"
            >
              <Link href="/products">
                <span className="group-hover:scale-105 transition-transform duration-200">View Our Products</span>
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-medium-brown text-medium-brown hover:bg-medium-brown hover:text-cream bg-transparent hover-lift group"
            >
              <Link href="/contact">
                <span className="group-hover:scale-105 transition-transform duration-200">Get Quote</span>
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl font-bold text-medium-brown mb-4">Why Choose Our Wooden Hangers?</h2>
            <p className="text-lg text-medium-brown opacity-80 max-w-2xl mx-auto">
              Crafted from high-quality solid wood, our hangers combine durability with elegance for garment showrooms, boutiques, hotels, fashion brands, and exporters
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Shield,
                title: "Superior Material",
                desc: "Made from select woods: Deodar, Neem, Steamed Beech, or Mango wood—customizable to your preference",
                bg: "bg-sage-green",
                delay: "animate-delay-100",
              },
              {
                icon: Award,
                title: "Variety of Finishes",
                desc: "Natural, Black, White, Brown, Dark Brown, Polished, Walnut, Whitewashed, Matte, and more",
                bg: "bg-medium-brown",
                delay: "animate-delay-200",
              },
              {
                icon: Star,
                title: "Durable Hooks",
                desc: "360° rotating, anti-rust chrome or gold-plated hooks for convenience and longevity",
                bg: "bg-warm-beige",
                delay: "animate-delay-300",
              },
              {
                icon: Package,
                title: "Multiple Designs",
                desc: "Flat, Curved, Notched, With Clips, Suit Hangers, Coat Hangers, and tailored shapes",
                bg: "bg-light-beige",
                delay: "animate-delay-400",
              },
            ].map((item, index) => (
              <Card
                key={index}
                className={`text-center border-none shadow-lg bg-white hover-lift hover-glow animate-fade-in-up ${item.delay} group cursor-pointer`}
              >
                <CardContent className="p-8">
                  <div
                    className={`w-16 h-16 ${item.bg} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <item.icon className="w-8 h-8 text-cream group-hover:rotate-12 transition-transform duration-300" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-medium-brown mb-2 group-hover:text-medium-brown/80 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-medium-brown opacity-80 group-hover:opacity-100 transition-opacity">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Product Showcase */}
      <section className="py-20 bg-light-beige">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl font-bold text-medium-brown mb-4">Key Product Highlights</h2>
            <p className="text-lg text-medium-brown opacity-80 max-w-2xl mx-auto">
              Perfect for shirts, pants, suits, coats, lehengas, sarees, jackets, and heavy clothing
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Direct Manufacturing",
                desc: "Competitive factory pricing with in-house production and rigorous quality controls",
                img: "/prod-1.jpg",
                delay: "animate-delay-100",
              },
              {
                title: "Strong & Termite-Resistant",
                desc: "High-quality solid wood that lasts with smooth finish protecting garments from snags",
                img: "/prod-2.jpg",
                delay: "animate-delay-200",
              },
              {
                title: "Custom Branding",
                desc: "Logo printing, private labeling, and branding services to elevate your brand identity",
                img: "/prod-3.jpg",
                delay: "animate-delay-300",
              },
            ].map((product, index) => (
              <Card
                key={index}
                className={`overflow-hidden border-none shadow-lg hover-lift hover-glow animate-fade-in-up ${product.delay} group cursor-pointer`}
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={product.img || "/placeholder.svg"}
                    alt={product.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-medium-brown/0 group-hover:bg-medium-brown/10 transition-colors duration-300"></div>
                </div>
                <CardContent className="p-6 bg-white">
                  <h3 className="font-display text-xl font-semibold text-medium-brown mb-2 group-hover:text-medium-brown/80 transition-colors">
                    {product.title}
                  </h3>
                  <p className="text-medium-brown mb-4 group-hover:text-medium-brown/80 transition-colors">
                    {product.desc}
                  </p>
                  <Button
                    asChild
                    variant="outline"
                    className="border-medium-brown text-medium-brown hover:bg-medium-brown hover:text-cream bg-transparent hover-scale group/btn"
                  >
                    <Link href="/contact">
                      <span className="group-hover/btn:scale-105 transition-transform duration-200">Get Quote</span>
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Perfect For Section */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl font-bold text-medium-brown mb-4">Perfect For</h2>
            <p className="text-lg text-medium-brown opacity-80 max-w-2xl mx-auto">
              Garment exporters, retail shops, showrooms, hotels, tailors, online sellers, and wholesalers looking for quality wooden hanger solutions
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: "Garment Exporters", icon: Package },
              { label: "Retail Shops", icon: Store },
              { label: "Showrooms", icon: Building2 },
              { label: "Hotels", icon: Hotel },
              { label: "Tailors", icon: Scissors },
              { label: "Online Sellers", icon: ShoppingCart },
              { label: "Wholesalers", icon: BriefcaseBusiness },
              { label: "Fashion Brands", icon: Shirt },
            ].map((category, index) => (
              <Card
                key={index}
                className="text-center border-none shadow-md bg-white hover-lift hover-glow animate-fade-in-up group cursor-pointer"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-medium-brown rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                    <category.icon className="w-6 h-6 text-cream" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-medium-brown group-hover:text-medium-brown/80 transition-colors">
                    {category.label}
                  </h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-medium-brown text-cream">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-4xl font-bold mb-4">Ready to Partner With WoodenHangerIn.com?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Contact us today to get pricing, request samples, and place your bulk order. Share your specifications, and let's create the perfect wooden hangers for your business!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-cream text-cream hover:bg-cream hover:text-medium-brown bg-transparent"
            >
              <Link href="/contact">Get In Touch</Link>
            </Button>
            <Button asChild size="lg" className="bg-cream text-medium-brown hover:bg-warm-beige">
              <Link href="/products">Browse Products</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Award, Leaf, Users } from "lucide-react"

export const metadata: Metadata = {
  title: "Premium Wooden Hangers Manufacturing | WoodCraft Hangers",
  description:
    "Discover our premium wooden hangers crafted with precision. Sustainable, durable, and elegant storage solutions for your wardrobe. Custom manufacturing available.",
}

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-light-beige to-warm-beige overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="Wooden hangers craftsmanship"
            fill
            className="object-cover opacity-20 transition-transform duration-700 hover:scale-105"
            priority
          />
        </div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4 animate-fade-in-up">
          <h1 className="font-display text-5xl md:text-7xl font-bold text-medium-brown mb-6 animate-float">
            WoodCraft Hangers
          </h1>
          <p className="text-xl md:text-2xl text-medium-brown mb-8 max-w-2xl mx-auto opacity-80 animate-fade-in-up animate-delay-200">
            Premium wooden hangers crafted with precision, sustainability, and timeless elegance
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
              <Link href="/about">
                <span className="group-hover:scale-105 transition-transform duration-200">Our Story</span>
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl font-bold text-medium-brown mb-4">Why Choose WoodCraft Hangers?</h2>
            <p className="text-lg text-medium-brown opacity-80 max-w-2xl mx-auto">
              Our commitment to quality, sustainability, and craftsmanship sets us apart in the industry
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Leaf,
                title: "Sustainable",
                desc: "Eco-friendly materials and responsible manufacturing processes",
                bg: "bg-sage-green",
                delay: "animate-delay-100",
              },
              {
                icon: Award,
                title: "Premium Quality",
                desc: "Handcrafted with attention to detail and superior materials",
                bg: "bg-medium-brown",
                delay: "animate-delay-200",
              },
              {
                icon: Users,
                title: "Custom Solutions",
                desc: "Tailored designs to meet your specific requirements",
                bg: "bg-warm-beige",
                delay: "animate-delay-300",
              },
              {
                icon: Star,
                title: "Trusted Brand",
                desc: "Over 20 years of excellence in wooden hanger manufacturing",
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
            <h2 className="font-display text-4xl font-bold text-medium-brown mb-4">Our Featured Products</h2>
            <p className="text-lg text-medium-brown opacity-80 max-w-2xl mx-auto">
              Discover our range of premium wooden hangers designed for every need
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Premium Suit Hangers",
                desc: "Elegant hangers designed for suits and formal wear",
                img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                delay: "animate-delay-100",
              },
              {
                title: "Dress Hangers",
                desc: "Specially designed for dresses and delicate garments",
                img: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                delay: "animate-delay-200",
              },
              {
                title: "Custom Solutions",
                desc: "Bespoke hangers tailored to your specific needs",
                img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
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
                    <Link href={index === 2 ? "/contact" : "/products"}>
                      <span className="group-hover/btn:scale-105 transition-transform duration-200">
                        {index === 2 ? "Get Quote" : "Learn More"}
                      </span>
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-medium-brown text-cream">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-4xl font-bold mb-4">Ready to Elevate Your Wardrobe?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Contact us today to discuss your wooden hanger needs and discover how we can help you
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

import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Premium Wooden Hangers Products",
  description:
    "Explore our complete range of premium wooden hangers. From suit hangers to dress hangers, find the perfect storage solution for your wardrobe.",
}

const products = [
  {
    id: 1,
    name: "Executive Suit Hanger",
    description: "Premium cedar wood hanger with contoured shoulders and trouser bar",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Suit Hangers",
    features: ["Cedar Wood", "Contoured Design", "Trouser Bar", "Chrome Hardware"],
  },
  {
    id: 2,
    name: "Elegant Dress Hanger",
    description: "Curved design perfect for dresses and delicate garments",
    image:
      "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Dress Hangers",
    features: ["Curved Design", "Smooth Finish", "Non-Slip Notches", "Lightweight"],
  },
  {
    id: 3,
    name: "Classic Shirt Hanger",
    description: "Traditional design ideal for shirts and lightweight garments",
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Shirt Hangers",
    features: ["Natural Wood", "Standard Size", "Durable Construction", "Affordable"],
  },
  {
    id: 4,
    name: "Luxury Coat Hanger",
    description: "Heavy-duty hanger designed for coats and heavy garments",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Coat Hangers",
    features: ["Extra Strong", "Wide Shoulders", "Premium Finish", "Heavy Duty"],
  },
  {
    id: 5,
    name: "Boutique Display Hanger",
    description: "Elegant hanger perfect for retail and boutique displays",
    image:
      "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Display Hangers",
    features: ["Retail Ready", "Elegant Design", "Brand Customization", "Bulk Available"],
  },
  {
    id: 6,
    name: "Custom Corporate Hanger",
    description: "Personalized hangers with your company logo and branding",
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Custom Hangers",
    features: ["Logo Engraving", "Custom Colors", "Bulk Orders", "Corporate Branding"],
  },
]

export default function ProductsPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-light-beige to-warm-beige">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-5xl font-bold text-medium-brown mb-6 animate-fade-in-up">
            Our Premium Products
          </h1>
          <p className="text-xl text-medium-brown opacity-80 max-w-3xl mx-auto animate-fade-in-up animate-delay-200">
            Discover our comprehensive range of wooden hangers, each crafted with precision and designed to meet your
            specific needs
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <Card
                key={product.id}
                className={`overflow-hidden border-none shadow-lg hover-lift hover-glow animate-fade-in-up animate-delay-${((index % 3) + 1) * 100} group cursor-pointer transition-all duration-300`}
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 transform group-hover:scale-105 transition-transform duration-300">
                    <Badge className="bg-medium-brown text-cream group-hover:bg-medium-brown/90 transition-colors">
                      {product.category}
                    </Badge>
                  </div>
                  <div className="absolute inset-0 bg-medium-brown/0 group-hover:bg-medium-brown/5 transition-colors duration-300"></div>
                </div>
                <CardContent className="p-6 bg-white">
                  <h3 className="font-display text-xl font-semibold text-medium-brown mb-2 group-hover:text-medium-brown/80 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-medium-brown opacity-80 mb-4 group-hover:opacity-100 transition-opacity">
                    {product.description}
                  </p>
                  <div className="mb-4">
                    <h4 className="font-semibold text-medium-brown mb-2">Features:</h4>
                    <div className="flex flex-wrap gap-2">
                      {product.features.map((feature, featureIndex) => (
                        <Badge
                          key={featureIndex}
                          variant="outline"
                          className={`border-sage-green text-sage-green hover:bg-sage-green hover:text-cream transition-all duration-200 hover:scale-105 animate-delay-${featureIndex * 50}`}
                        >
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <Button
                    asChild
                    className="w-full bg-medium-brown hover:bg-medium-brown/90 text-cream hover-scale group/btn"
                  >
                    <Link href="/contact">
                      <span className="group-hover/btn:scale-105 transition-transform duration-200">Request Quote</span>
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Solutions CTA */}
      <section className="py-20 bg-light-beige">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-4xl font-bold text-medium-brown mb-6">Need Something Custom?</h2>
          <p className="text-lg text-medium-brown opacity-80 mb-8 max-w-2xl mx-auto">
            We specialize in creating bespoke wooden hangers tailored to your exact specifications. From corporate
            branding to unique designs, we bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-medium-brown hover:bg-medium-brown/90 text-cream">
              <Link href="/contact">Discuss Custom Order</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-medium-brown text-medium-brown hover:bg-medium-brown hover:text-cream bg-transparent"
            >
              <Link href="/about">Learn About Our Process</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

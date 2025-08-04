import type { Metadata } from "next"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Award, Users, Leaf, Clock } from "lucide-react"

export const metadata: Metadata = {
  title: "About WoodCraft Hangers - Our Story & Craftsmanship",
  description:
    "Learn about WoodCraft Hangers' 20+ year journey in wooden hanger manufacturing. Discover our commitment to quality, sustainability, and craftsmanship.",
}

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-light-beige to-warm-beige">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-left">
              <h1 className="font-display text-5xl font-bold text-medium-brown mb-6">Our Story</h1>
              <p className="text-xl text-medium-brown opacity-90 mb-6 animate-fade-in-left animate-delay-200">
                For over two decades, WoodCraft Hangers has been at the forefront of wooden hanger manufacturing,
                combining traditional craftsmanship with modern innovation.
              </p>
              <p className="text-lg text-medium-brown opacity-80 animate-fade-in-left animate-delay-400">
                What started as a small family workshop has grown into a trusted name in the industry, serving customers
                worldwide with premium wooden hangers that stand the test of time.
              </p>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden animate-fade-in-right hover-scale group">
              <Image
                src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Craftsman working on wooden hangers"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl font-bold text-medium-brown mb-4">Our Values</h2>
            <p className="text-lg text-medium-brown opacity-80 max-w-2xl mx-auto">
              These core principles guide everything we do, from sourcing materials to delivering the final product
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Award,
                title: "Quality First",
                desc: "Every hanger is crafted to meet our exacting standards of excellence",
                bg: "bg-medium-brown",
              },
              {
                icon: Leaf,
                title: "Sustainability",
                desc: "Committed to eco-friendly practices and responsible sourcing",
                bg: "bg-sage-green",
              },
              {
                icon: Users,
                title: "Customer Focus",
                desc: "Your satisfaction is our priority, from design to delivery",
                bg: "bg-warm-beige",
              },
              {
                icon: Clock,
                title: "Timeless Craft",
                desc: "Preserving traditional techniques while embracing innovation",
                bg: "bg-light-beige",
              },
            ].map((value, index) => (
              <Card
                key={index}
                className={`text-center border-none shadow-lg bg-white hover-lift hover-glow animate-fade-in-up animate-delay-${(index + 1) * 100} group cursor-pointer`}
              >
                <CardContent className="p-8">
                  <div
                    className={`w-16 h-16 ${value.bg} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300`}
                  >
                    <value.icon className="w-8 h-8 text-cream" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-medium-brown mb-2 group-hover:text-medium-brown/80 transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-medium-brown opacity-80 group-hover:opacity-100 transition-opacity">
                    {value.desc}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-light-beige">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl font-bold text-medium-brown mb-4">Our Manufacturing Process</h2>
            <p className="text-lg text-medium-brown opacity-80 max-w-2xl mx-auto">
              From raw wood to finished product, every step is carefully executed to ensure the highest quality
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "1. Material Selection",
                desc: "We carefully select premium hardwoods from sustainable sources, ensuring each piece meets our quality standards.",
                img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
              },
              {
                title: "2. Precision Crafting",
                desc: "Our skilled craftsmen shape and refine each hanger using time-tested techniques and modern precision tools.",
                img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
              },
              {
                title: "3. Quality Finishing",
                desc: "Each hanger receives a premium finish and undergoes rigorous quality control before packaging.",
                img: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
              },
            ].map((step, index) => (
              <div key={index} className={`text-center animate-fade-in-up animate-delay-${(index + 1) * 200} group`}>
                <div className="relative h-64 mb-6 rounded-lg overflow-hidden hover-scale">
                  <Image
                    src={step.img || "/placeholder.svg"}
                    alt={step.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-medium-brown/0 group-hover:bg-medium-brown/10 transition-colors duration-300"></div>
                </div>
                <h3 className="font-display text-xl font-semibold text-medium-brown mb-2 group-hover:text-medium-brown/80 transition-colors">
                  {step.title}
                </h3>
                <p className="text-medium-brown opacity-80 group-hover:opacity-100 transition-opacity">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-4xl font-bold text-medium-brown mb-6">Meet Our Team</h2>
          <p className="text-lg text-medium-brown opacity-80 mb-12 max-w-2xl mx-auto">
            Our dedicated team of craftsmen, designers, and quality specialists work together to create exceptional
            wooden hangers
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-none shadow-lg bg-white">
              <CardContent className="p-8 text-center">
                <div className="w-24 h-24 bg-medium-brown rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-12 h-12 text-cream" />
                </div>
                <h3 className="font-display text-xl font-semibold text-medium-brown mb-2">Master Craftsmen</h3>
                <p className="text-medium-brown opacity-80">
                  Skilled artisans with decades of experience in woodworking and hanger manufacturing
                </p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-lg bg-white">
              <CardContent className="p-8 text-center">
                <div className="w-24 h-24 bg-sage-green rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Award className="w-12 h-12 text-cream" />
                </div>
                <h3 className="font-display text-xl font-semibold text-dark-brown mb-2">Design Team</h3>
                <p className="text-medium-brown">
                  Creative professionals who blend functionality with aesthetic appeal in every design
                </p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-lg bg-white">
              <CardContent className="p-8 text-center">
                <div className="w-24 h-24 bg-warm-beige rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Leaf className="w-12 h-12 text-medium-brown" />
                </div>
                <h3 className="font-display text-xl font-semibold text-dark-brown mb-2">Quality Assurance</h3>
                <p className="text-medium-brown">
                  Dedicated specialists ensuring every product meets our rigorous quality standards
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}

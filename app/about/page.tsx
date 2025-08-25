// import type { Metadata } from "next"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Award, Users, Leaf, Factory, Truck, Shield } from "lucide-react"

// const metadata: Metadata = {
//   title: "About WoodenHangerIn.com - Manufacturer & Bulk Supplier",
//   description:
//     "Learn about WoodenHangerIn.com's manufacturing capabilities and commitment to quality. Direct factory pricing, bulk orders, and nationwide shipping across India.",
// }

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-light-beige to-warm-beige">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-left">
              <h1 className="font-display text-5xl font-bold text-medium-brown mb-6">About WoodenHangerIn.com</h1>
              <p className="text-xl text-medium-brown opacity-90 mb-6 animate-fade-in-left animate-delay-200">
                We specialize in manufacturing and supplying premium wooden hangers across India. Our direct manufacturing approach ensures competitive factory pricing while maintaining the highest quality standards.
              </p>
              <p className="text-lg text-medium-brown opacity-80 animate-fade-in-left animate-delay-400">
                From garment showrooms and boutiques to hotels, fashion brands, and exporters, we serve businesses nationwide with reliable wooden hanger solutions.
              </p>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden animate-fade-in-right hover-scale group">
              <Image
                src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Wooden hanger manufacturing facility"
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
            <h2 className="font-display text-4xl font-bold text-medium-brown mb-4">Why Partner With WoodenHangerIn.com?</h2>
            <p className="text-lg text-medium-brown opacity-80 max-w-2xl mx-auto">
              These core advantages set us apart in the wooden hanger manufacturing industry
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Factory,
                title: "In-House Production",
                desc: "Direct manufacturing with rigorous quality controls and competitive factory pricing",
                bg: "bg-medium-brown",
              },
              {
                icon: Award,
                title: "Competitive Pricing",
                desc: "Tailored pricing for bulk buyers with flexible minimum order quantities (MOQ)",
                bg: "bg-sage-green",
              },
              {
                icon: Shield,
                title: "Flexible Customization",
                desc: "Custom branding, private label options, and tailored designs to meet your needs",
                bg: "bg-warm-beige",
              },
              {
                icon: Truck,
                title: "Reliable Support",
                desc: "Fast dispatch, nationwide shipping across India, and dedicated customer service",
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
              From raw wood selection to finished product, every step ensures superior quality and durability
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "1. Material Selection",
                desc: "Carefully select premium hardwoods including Deodar, Neem, Steamed Beech, Beech, or Mango wood from sustainable sources.",
                img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
              },
              {
                title: "2. Precision Manufacturing",
                desc: "Advanced manufacturing techniques create strong, termite-resistant wooden hangers with smooth finishes that protect garments.",
                img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
              },
              {
                title: "3. Quality Assurance",
                desc: "Rigorous quality control ensures each hanger meets our standards before packaging and nationwide shipping.",
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

      {/* Target Markets Section */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-4xl font-bold text-medium-brown mb-6">Serving Businesses Nationwide</h2>
          <p className="text-lg text-medium-brown opacity-80 mb-12 max-w-2xl mx-auto">
            Our premium wooden hangers are perfect for various business needs across India
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-none shadow-lg bg-white">
              <CardContent className="p-8 text-center">
                <div className="w-24 h-24 bg-medium-brown rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-12 h-12 text-cream" />
                </div>
                <h3 className="font-display text-xl font-semibold text-medium-brown mb-2">Garment Exporters</h3>
                <p className="text-medium-brown opacity-80">
                  High-quality hangers for international markets with custom branding options
                </p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-lg bg-white">
              <CardContent className="p-8 text-center">
                <div className="w-24 h-24 bg-sage-green rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Award className="w-12 h-12 text-cream" />
                </div>
                <h3 className="font-display text-xl font-semibold text-dark-brown mb-2">Retail & Showrooms</h3>
                <p className="text-medium-brown">
                  Elegant display hangers for boutiques, showrooms, and fashion retail
                </p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-lg bg-white">
              <CardContent className="p-8 text-center">
                <div className="w-24 h-24 bg-warm-beige rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Leaf className="w-12 h-12 text-medium-brown" />
                </div>
                <h3 className="font-display text-xl font-semibold text-dark-brown mb-2">Hotels & Hospitality</h3>
                <p className="text-medium-brown">
                  Premium hangers for luxury hotels and hospitality establishments
                </p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-lg bg-white">
              <CardContent className="p-8 text-center">
                <div className="w-24 h-24 bg-light-beige rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Truck className="w-12 h-12 text-medium-brown" />
                </div>
                <h3 className="font-display text-xl font-semibold text-dark-brown mb-2">Online Sellers</h3>
                <p className="text-medium-brown">
                  Bulk supply for e-commerce businesses and online fashion retailers
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}

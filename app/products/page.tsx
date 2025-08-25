import type { Metadata } from "next"
import path from "path"
import fs from "fs"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import ProductGrid from "../../components/product-grid"

const metadata: Metadata = {
  title: "Premium Wooden Hangers Products | WoodenHangerIn.com",
  description:
    "Explore our complete range of premium wooden hangers. From suit hangers to dress hangers with custom branding and bulk orders available.",
}

type ProductFromPublic = {
  name: string
  images: string[]
}

const woodTypes = [
  "Deodar Wood",
  "Neem Wood", 
  "Steamed Beech",
  "Mango Wood"
]

const finishes = [
  "Natural",
  "Black",
  "White", 
  "Brown",
  "Dark Brown",
  "Polished",
  "Walnut",
  "Whitewashed",
  "Matte"
]

function getProductsFromPublic(): ProductFromPublic[] {
  const publicDir = path.join(process.cwd(), "public")
  const allEntries = fs.readdirSync(publicDir)
  const imageExtensions = new Set([".jpg", ".jpeg", ".png", ".webp"])

  const products: ProductFromPublic[] = []

  for (const entryName of allEntries) {
    const entryPath = path.join(publicDir, entryName)
    const stat = fs.statSync(entryPath)
    if (!stat.isDirectory()) continue

    // Collect images in this folder only (do not recurse)
    const images = fs
      .readdirSync(entryPath)
      .filter((file) => imageExtensions.has(path.extname(file).toLowerCase()))
      .map((file) => `/${entryName}/${file}`)

    if (images.length === 0) continue

    products.push({ name: entryName, images })
  }

  // Sort alphabetically for stable order
  products.sort((a, b) => a.name.localeCompare(b.name))
  return products
}

export default function ProductsPage() {
  const products = getProductsFromPublic()
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-light-beige to-warm-beige">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-5xl font-bold text-medium-brown mb-6 animate-fade-in-up">
            Our Complete Product Range
          </h1>
          <p className="text-xl text-medium-brown opacity-80 max-w-3xl mx-auto animate-fade-in-up animate-delay-200">
            Discover our comprehensive range of 30+ wooden hanger varieties, each crafted with precision and designed to meet your specific needs. Perfect for garment showrooms, boutiques, hotels, fashion brands, and exporters.
          </p>
        </div>
      </section>

      {/* Wood Types & Finishes */}
      <section className="py-16 bg-cream">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="animate-fade-in-left">
              <h2 className="font-display text-3xl font-bold text-medium-brown mb-6">Superior Materials</h2>
              <p className="text-lg text-medium-brown opacity-80 mb-6">
                Made from select woods customizable to your preference:
              </p>
              <div className="grid grid-cols-2 gap-3">
                {woodTypes.map((wood, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-medium-brown rounded-full"></div>
                    <span className="text-medium-brown">{wood}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="animate-fade-in-right">
              <h2 className="font-display text-3xl font-bold text-medium-brown mb-6">Variety of Finishes</h2>
              <p className="text-lg text-medium-brown opacity-80 mb-6">
                Choose from multiple finish options:
              </p>
              <div className="grid grid-cols-3 gap-3">
                {finishes.map((finish, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-sage-green rounded-full"></div>
                    <span className="text-medium-brown">{finish}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-light-beige">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl font-bold text-medium-brown mb-4">Our Products</h2>
            <p className="text-lg text-medium-brown opacity-80 max-w-2xl mx-auto">
              Generated directly from your folder structure under the public directory
            </p>
          </div>
          <ProductGrid products={products} />
        </div>
      </section>

      {/* Custom Solutions CTA */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-4xl font-bold text-medium-brown mb-6">Custom Branding & Bulk Orders</h2>
          <p className="text-lg text-medium-brown opacity-80 mb-8 max-w-2xl mx-auto">
            We offer logo printing, private labeling, and branding services to elevate your brand identity. Accept large quantity orders with flexible minimum order quantities (MOQ).
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

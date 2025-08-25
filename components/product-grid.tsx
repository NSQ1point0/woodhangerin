"use client"

import Image from "next/image"
import { useMemo, useState } from "react"
import { Card } from "@/components/ui/card"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

export type ProductFromPublic = {
  name: string
  images: string[]
}

type Props = {
  products: ProductFromPublic[]
}

export default function ProductGrid({ products }: Props) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const [slideIndex, setSlideIndex] = useState(0)

  const activeProduct = useMemo(() => {
    if (activeIndex == null) return null
    return products[activeIndex]
  }, [activeIndex, products])

  const openModal = (index: number) => {
    setActiveIndex(index)
    setSlideIndex(0)
  }

  const closeModal = () => setActiveIndex(null)

  const nextSlide = () => {
    if (!activeProduct) return
    setSlideIndex((prev) => (prev + 1) % activeProduct.images.length)
  }

  const prevSlide = () => {
    if (!activeProduct) return
    setSlideIndex((prev) => (prev - 1 + activeProduct.images.length) % activeProduct.images.length)
  }

  return (
    <>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product, index) => (
          <Card
            key={product.name}
            className="overflow-hidden border-none shadow-lg hover-lift hover-glow animate-fade-in-up group cursor-pointer transition-all duration-300"
            onClick={() => openModal(index)}
          >
            <div className="relative h-64 overflow-hidden">
              <Image
                src={product.images[0]}
                alt={product.name}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-medium-brown/0 group-hover:bg-medium-brown/5 transition-colors duration-300"></div>
            </div>
            <div className="p-6 bg-white">
              <h3 className="font-display text-xl font-semibold text-medium-brown mb-1 group-hover:text-medium-brown/80 transition-colors">
                {product.name}
              </h3>
              <p className="text-medium-brown opacity-80 text-sm">{product.images.length} image(s)</p>
            </div>
          </Card>
        ))}
      </div>

      {activeProduct && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 p-4 animate-fade-in">
          <div className="relative w-full max-w-5xl bg-white rounded-lg shadow-2xl overflow-hidden">
            <button
              aria-label="Close"
              onClick={closeModal}
              className="absolute top-3 right-3 z-10 p-2 rounded-full bg-black/60 text-white hover:bg-black/80"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative h-[420px] md:h-[520px] bg-black/5">
              <Image
                src={activeProduct.images[slideIndex]}
                alt={`${activeProduct.name} ${slideIndex + 1}`}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 900px"
                priority
              />

              <button
                aria-label="Previous image"
                onClick={prevSlide}
                className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 text-white hover:bg-black/80"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                aria-label="Next image"
                onClick={nextSlide}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 text-white hover:bg-black/80"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 text-xs px-2 py-1 rounded bg-black/60 text-white">
                {slideIndex + 1} / {activeProduct.images.length}
              </div>
            </div>

            <div className="p-4 md:p-6">
              <h3 className="font-display text-2xl font-semibold text-medium-brown mb-3">
                {activeProduct.name}
              </h3>
              <div className="flex items-center gap-2 overflow-x-auto pb-2">
                {activeProduct.images.map((src, i) => (
                  <button
                    key={src}
                    onClick={() => setSlideIndex(i)}
                    className={`relative w-20 h-16 rounded overflow-hidden border ${
                      i === slideIndex ? "border-medium-brown" : "border-transparent"
                    }`}
                    aria-label={`Go to image ${i + 1}`}
                  >
                    <Image src={src} alt={`${activeProduct.name} thumb ${i + 1}`} fill className="object-cover" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}



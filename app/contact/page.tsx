"use client"
import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapPin, Phone, Mail, Clock, Package, Truck } from "lucide-react"

const metadata: Metadata = {
  title: "Contact WoodenHangerIn.com - Get Pricing & Bulk Quote",
  description:
    "Contact WoodenHangerIn.com for wooden hanger pricing, bulk orders, and custom branding. Get quotes, request samples, and discuss your specifications.",
}

import { useState } from "react"

export default function ContactPage() {
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    businessType: "",
    inquiryType: "",
    message: "",
  })

  const update = (key: string, value: string) => setForm((f) => ({ ...f, [key]: value }))

  const submit = async () => {
    if (!form.email || !form.message) return
    try {
      setLoading(true)
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error("Failed")
      alert("Thanks! We'll get back to you shortly.")
      setForm({ firstName: "", lastName: "", email: "", phone: "", company: "", businessType: "", inquiryType: "", message: "" })
    } catch (e) {
      alert("There was an error sending your inquiry. Please try again later.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-light-beige to-warm-beige">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-5xl font-bold text-medium-brown mb-6 animate-fade-in-up">Get Pricing & Quote</h1>
          <p className="text-xl text-medium-brown opacity-80 max-w-3xl mx-auto animate-fade-in-up animate-delay-200">
            Contact us today to get pricing, request samples, and place your bulk order. Share your specifications, and let's create the perfect wooden hangers for your business!
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="border-none shadow-lg hover-glow animate-fade-in-left">
              <CardHeader>
                <CardTitle className="font-display text-2xl text-medium-brown">Request Quote & Samples</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2 animate-fade-in-up animate-delay-100">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input
                      id="firstName"
                      placeholder="John"
                      className="hover:border-medium-brown focus:border-medium-brown transition-colors"
                      value={form.firstName}
                      onChange={(e) => update("firstName", e.target.value)}
                    />
                  </div>
                  <div className="space-y-2 animate-fade-in-up animate-delay-200">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input
                      id="lastName"
                      placeholder="Doe"
                      className="hover:border-medium-brown focus:border-medium-brown transition-colors"
                      value={form.lastName}
                      onChange={(e) => update("lastName", e.target.value)}
                    />
                  </div>
                </div>
                <div className="space-y-2 animate-fade-in-up animate-delay-300">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@company.com"
                    className="hover:border-medium-brown focus:border-medium-brown transition-colors"
                    value={form.email}
                    onChange={(e) => update("email", e.target.value)}
                  />
                </div>
                <div className="space-y-2 animate-fade-in-up animate-delay-400">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+91 98765 43210"
                    className="hover:border-medium-brown focus:border-medium-brown transition-colors"
                    value={form.phone}
                    onChange={(e) => update("phone", e.target.value)}
                  />
                </div>
                <div className="space-y-2 animate-fade-in-up animate-delay-500">
                  <Label htmlFor="company">Company Name</Label>
                  <Input
                    id="company"
                    placeholder="Your Company Name"
                    className="hover:border-medium-brown focus:border-medium-brown transition-colors"
                    value={form.company}
                    onChange={(e) => update("company", e.target.value)}
                  />
                </div>
                <div className="space-y-2 animate-fade-in-up animate-delay-500">
                  <Label htmlFor="businessType">Business Type</Label>
                  <Select value={form.businessType} onValueChange={(v) => update("businessType", v)}>
                    <SelectTrigger className="hover:border-medium-brown focus:border-medium-brown transition-colors">
                      <SelectValue placeholder="Select your business type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="garment-exporter">Garment Exporter</SelectItem>
                      <SelectItem value="retail-shop">Retail Shop</SelectItem>
                      <SelectItem value="showroom">Showroom</SelectItem>
                      <SelectItem value="hotel">Hotel</SelectItem>
                      <SelectItem value="tailor">Tailor</SelectItem>
                      <SelectItem value="online-seller">Online Seller</SelectItem>
                      <SelectItem value="wholesaler">Wholesaler</SelectItem>
                      <SelectItem value="fashion-brand">Fashion Brand</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2 animate-fade-in-up animate-delay-500">
                  <Label htmlFor="inquiryType">Inquiry Type</Label>
                  <Select value={form.inquiryType} onValueChange={(v) => update("inquiryType", v)}>
                    <SelectTrigger className="hover:border-medium-brown focus:border-medium-brown transition-colors">
                      <SelectValue placeholder="Select inquiry type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="bulk-quote">Bulk Order Quote</SelectItem>
                      <SelectItem value="sample-request">Sample Request</SelectItem>
                      <SelectItem value="custom-branding">Custom Branding</SelectItem>
                      <SelectItem value="private-label">Private Label</SelectItem>
                      <SelectItem value="pricing">Pricing Inquiry</SelectItem>
                      <SelectItem value="general">General Question</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2 animate-fade-in-up animate-delay-500">
                  <Label htmlFor="message">Requirements & Specifications</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your requirements: quantity needed, wood type preference, finish options, custom branding needs, timeline, or any specific questions..."
                    rows={5}
                    className="hover:border-medium-brown focus:border-medium-brown transition-colors"
                    value={form.message}
                    onChange={(e) => update("message", e.target.value)}
                  />
                </div>
                <Button onClick={submit} disabled={loading || !form.email || !form.message} className="w-full bg-medium-brown hover:bg-medium-brown/90 text-cream hover-scale hover-glow group animate-fade-in-up animate-delay-600">
                  <span className="group-hover:scale-105 transition-transform duration-200">{loading ? "Sending..." : "Send Inquiry"}</span>
                </Button>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="border-none shadow-lg hover-glow animate-fade-in-right">
                <CardContent className="p-8">
                  <h3 className="font-display text-2xl font-semibold text-medium-brown mb-6">Contact Information</h3>
                  <div className="space-y-6">
                    {[
                      {
                        icon: MapPin,
                        title: "Manufacturing Facility",
                        content: "WoodenHangerIn.com\nManufacturing Unit\nIndia",
                        bg: "bg-medium-brown",
                      },
                      {
                        icon: Phone,
                        title: "Phone",
                        content: "Sales: +91 98765 43210\nSupport: +91 98765 43211",
                        bg: "bg-sage-green",
                      },
                      {
                        icon: Mail,
                        title: "Email",
                        content: "info@woodenhangerin.com\nsales@woodenhangerin.com",
                        bg: "bg-warm-beige",
                      },
                      {
                        icon: Clock,
                        title: "Business Hours",
                        content: "Monday - Friday: 9:00 AM - 6:00 PM\nSaturday: 9:00 AM - 4:00 PM\nSunday: Closed",
                        bg: "bg-light-beige",
                      },
                    ].map((item, index) => (
                      <div
                        key={index}
                        className={`flex items-start space-x-4 animate-fade-in-right animate-delay-${(index + 1) * 100} group hover:transform hover:translate-x-2 transition-transform duration-300`}
                      >
                        <div
                          className={`w-12 h-12 ${item.bg} rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}
                        >
                          <item.icon className="w-6 h-6 text-cream group-hover:rotate-12 transition-transform duration-300" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-medium-brown mb-1 group-hover:text-medium-brown/80 transition-colors">
                            {item.title}
                          </h4>
                          <p className="text-medium-brown opacity-80 group-hover:opacity-100 transition-opacity whitespace-pre-line">
                            {item.content}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg bg-medium-brown text-cream hover-glow animate-fade-in-right animate-delay-400 group">
                <CardContent className="p-8">
                  <h3 className="font-display text-2xl font-semibold mb-4 group-hover:scale-105 transition-transform duration-300">
                    Why Partner With Us?
                  </h3>
                  <ul className="space-y-3">
                    {[
                      "Direct factory pricing",
                      "Flexible MOQ options",
                      "Custom branding available",
                      "Nationwide shipping",
                      "Fast dispatch & delivery",
                      "Quality assurance guarantee",
                    ].map((item, index) => (
                      <li
                        key={index}
                        className={`flex items-center space-x-2 animate-fade-in-right animate-delay-${500 + index * 100} group/item hover:transform hover:translate-x-2 transition-transform duration-200`}
                      >
                        <div className="w-2 h-2 bg-cream rounded-full group-hover/item:scale-125 transition-transform duration-200"></div>
                        <span className="group-hover/item:text-light-beige transition-colors">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-light-beige">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl font-bold text-medium-brown mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-medium-brown opacity-80 max-w-2xl mx-auto">
              Quick answers to common questions about our products and bulk ordering
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <h3 className="font-semibold text-medium-brown mb-2">What is your minimum order quantity (MOQ)?</h3>
                <p className="text-medium-brown opacity-80">
                  We offer flexible MOQ options. For standard hangers, minimum order is typically 100 pieces, while custom branding orders may have different requirements. Contact us for specific details.
                </p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <h3 className="font-semibold text-dark-brown mb-2">Do you offer custom branding and private labeling?</h3>
                <p className="text-medium-brown">
                  Yes! We offer logo printing, private labeling, and branding services to elevate your brand identity. Custom colors and packaging options available.
                </p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <h3 className="font-semibold text-dark-brown mb-2">What wood types and finishes do you offer?</h3>
                <p className="text-medium-brown">
                  We offer Deodar, Neem, Steamed Beech, Beech, and Mango wood. Finishes include Natural, Black, White, Brown, Dark Brown, Polished, Walnut, Whitewashed, and Matte.
                </p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <h3 className="font-semibold text-dark-brown mb-2">Do you ship nationwide across India?</h3>
                <p className="text-medium-brown">
                  Yes, we provide nationwide shipping across India with fast dispatch and reliable delivery. Contact us for shipping costs and delivery timelines.
                </p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <h3 className="font-semibold text-dark-brown mb-2">Can I request samples before placing a bulk order?</h3>
                <p className="text-medium-brown">
                  Absolutely! We encourage sample requests to ensure you're satisfied with our quality. Contact us to request samples of your preferred wood type and finish.
                </p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <h3 className="font-semibold text-dark-brown mb-2">What is your typical lead time for bulk orders?</h3>
                <p className="text-medium-brown">
                  Standard bulk orders typically ship within 2-3 weeks, while custom branding orders may take 4-6 weeks depending on complexity and quantity.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}

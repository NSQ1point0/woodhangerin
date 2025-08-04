import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export const metadata: Metadata = {
  title: "Contact WoodCraft Hangers - Get Your Custom Quote",
  description:
    "Contact WoodCraft Hangers for custom wooden hanger solutions. Get quotes, ask questions, or discuss your specific requirements with our expert team.",
}

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-light-beige to-warm-beige">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-5xl font-bold text-medium-brown mb-6 animate-fade-in-up">Get In Touch</h1>
          <p className="text-xl text-medium-brown opacity-80 max-w-3xl mx-auto animate-fade-in-up animate-delay-200">
            Ready to discuss your wooden hanger needs? We're here to help you find the perfect solution for your
            requirements
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
                <CardTitle className="font-display text-2xl text-medium-brown">Send Us a Message</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2 animate-fade-in-up animate-delay-100">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input
                      id="firstName"
                      placeholder="John"
                      className="hover:border-medium-brown focus:border-medium-brown transition-colors"
                    />
                  </div>
                  <div className="space-y-2 animate-fade-in-up animate-delay-200">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input
                      id="lastName"
                      placeholder="Doe"
                      className="hover:border-medium-brown focus:border-medium-brown transition-colors"
                    />
                  </div>
                </div>
                <div className="space-y-2 animate-fade-in-up animate-delay-300">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    className="hover:border-medium-brown focus:border-medium-brown transition-colors"
                  />
                </div>
                <div className="space-y-2 animate-fade-in-up animate-delay-400">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+1 (555) 123-4567"
                    className="hover:border-medium-brown focus:border-medium-brown transition-colors"
                  />
                </div>
                <div className="space-y-2 animate-fade-in-up animate-delay-500">
                  <Label htmlFor="company">Company (Optional)</Label>
                  <Input
                    id="company"
                    placeholder="Your Company Name"
                    className="hover:border-medium-brown focus:border-medium-brown transition-colors"
                  />
                </div>
                <div className="space-y-2 animate-fade-in-up animate-delay-500">
                  <Label htmlFor="inquiryType">Inquiry Type</Label>
                  <Select>
                    <SelectTrigger className="hover:border-medium-brown focus:border-medium-brown transition-colors">
                      <SelectValue placeholder="Select inquiry type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="quote">Request Quote</SelectItem>
                      <SelectItem value="custom">Custom Order</SelectItem>
                      <SelectItem value="wholesale">Wholesale Inquiry</SelectItem>
                      <SelectItem value="general">General Question</SelectItem>
                      <SelectItem value="support">Customer Support</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2 animate-fade-in-up animate-delay-500">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your requirements, quantity needed, timeline, or any specific questions you have..."
                    rows={5}
                    className="hover:border-medium-brown focus:border-medium-brown transition-colors"
                  />
                </div>
                <Button className="w-full bg-medium-brown hover:bg-medium-brown/90 text-cream hover-scale hover-glow group animate-fade-in-up animate-delay-600">
                  <span className="group-hover:scale-105 transition-transform duration-200">Send Message</span>
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
                        title: "Address",
                        content: "123 Craftsman Lane\nWoodville, WV 12345\nUnited States",
                        bg: "bg-medium-brown",
                      },
                      {
                        icon: Phone,
                        title: "Phone",
                        content: "Main: +1 (555) 123-4567\nSales: +1 (555) 123-4568",
                        bg: "bg-sage-green",
                      },
                      {
                        icon: Mail,
                        title: "Email",
                        content: "info@woodcraft-hangers.com\nsales@woodcraft-hangers.com",
                        bg: "bg-warm-beige",
                      },
                      {
                        icon: Clock,
                        title: "Business Hours",
                        content: "Monday - Friday: 8:00 AM - 6:00 PM\nSaturday: 9:00 AM - 4:00 PM\nSunday: Closed",
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
                    Why Choose Us?
                  </h3>
                  <ul className="space-y-3">
                    {[
                      "20+ years of experience",
                      "Custom solutions available",
                      "Sustainable materials",
                      "Competitive wholesale pricing",
                      "Fast turnaround times",
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
              Quick answers to common questions about our products and services
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <h3 className="font-semibold text-medium-brown mb-2">What is your minimum order quantity?</h3>
                <p className="text-medium-brown opacity-80">
                  Our minimum order quantity varies by product type. For standard hangers, it's typically 100 pieces,
                  while custom orders may have different requirements.
                </p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <h3 className="font-semibold text-dark-brown mb-2">Do you offer custom branding?</h3>
                <p className="text-medium-brown">
                  Yes! We offer logo engraving, custom colors, and personalized packaging options to match your brand
                  requirements.
                </p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <h3 className="font-semibold text-dark-brown mb-2">What is your typical lead time?</h3>
                <p className="text-medium-brown">
                  Standard orders typically ship within 2-3 weeks, while custom orders may take 4-6 weeks depending on
                  complexity and quantity.
                </p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <h3 className="font-semibold text-dark-brown mb-2">Do you ship internationally?</h3>
                <p className="text-medium-brown">
                  Yes, we ship worldwide. International shipping costs and delivery times vary by destination. Contact
                  us for specific quotes.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}

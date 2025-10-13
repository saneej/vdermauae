"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, Phone, MapPin, Send, ExternalLink } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Format message for WhatsApp
    const whatsappMessage = `
*New Contact Form Submission*

*Name:* ${formData.name}
*Email:* ${formData.email}
*Phone:* ${formData.phone}
*Company:* ${formData.company}

*Message:*
${formData.message}
    `.trim()

    // Encode message for URL
    const encodedMessage = encodeURIComponent(whatsappMessage)

    const whatsappNumber = "971528955833"

    // Open WhatsApp with pre-filled message
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, "_blank")
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-5xl lg:text-6xl font-bold text-balance">Get in Touch</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Have questions about our products or services? We're here to help. Reach out to our team and we'll get
              back to you as soon as possible.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-4">Send us a Message</h2>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll send your inquiry directly to our WhatsApp.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="John Doe"
                    required
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                    required
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+971 XX XXX XXXX"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company">Company/Clinic Name</Label>
                  <Input
                    id="company"
                    name="company"
                    placeholder="Your Company"
                    value={formData.company}
                    onChange={handleChange}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us about your requirements..."
                    rows={6}
                    required
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>

                <Button type="submit" size="lg" className="w-full">
                  <Send className="mr-2" size={20} />
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-4">Contact Information</h2>
                <p className="text-muted-foreground">
                  Reach out to us through any of these channels. We're available 24/7 to assist you.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex gap-4 p-6 bg-card rounded-xl border border-border/50 hover:shadow-lg transition-all">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Mail className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <a
                      href="mailto:info@vdermauae.com"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      info@vdermauae.com
                    </a>
                  </div>
                </div>

                <div className="flex gap-4 p-6 bg-card rounded-xl border border-border/50 hover:shadow-lg transition-all">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Phone className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Phone</h3>
                    <a href="tel:+971528955833" className="text-muted-foreground hover:text-primary transition-colors">
                      +971 52 895 5833
                    </a>
                    <p className="text-sm text-muted-foreground mt-1">Available 24/7</p>
                  </div>
                </div>

                <div className="flex gap-4 p-6 bg-card rounded-xl border border-border/50 hover:shadow-lg transition-all">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <MapPin className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Office</h3>
                    <p className="text-muted-foreground">Arkan Business Center</p>
                    <p className="text-muted-foreground">Al Qusais, Dubai, UAE</p>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="p-6 bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl">
                <h3 className="font-semibold mb-4">Business Hours</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Monday - Friday</span>
                    <span className="font-medium">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Saturday</span>
                    <span className="font-medium">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Sunday</span>
                    <span className="font-medium">Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-4xl font-bold">Visit Our Office</h2>
              <p className="text-xl text-muted-foreground">Find us at Arkan Business Center in Al Qusais, Dubai</p>
            </div>

            {/* Location Card with Map Link */}
            <div className="bg-card rounded-2xl border-2 border-primary/20 shadow-xl overflow-hidden">
              <div className="p-6 md:p-8 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-14 h-14 bg-primary rounded-xl flex items-center justify-center">
                    <MapPin className="text-primary-foreground" size={28} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-xl mb-2">VEDERMA LINE MEDICAL EQUIPMENTS TRADING LLC</h3>
                    <p className="text-muted-foreground mb-4">
                      Al Qusais Industrial Area 3, Dubai, United Arab Emirates
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button asChild className="flex-1 sm:flex-none">
                        <a
                          href="https://www.google.com/maps/place/79WW%2BP7X+VEDERMA+LINE+MEDICAL+EQUIPMENTS+TRADING+LLC+-+Al+Qusais+Ind.+Third+-+Al+Qusais+Industrial+Area+3+-+Dubai/data=!4m2!3m1!1s0x3e5f5d0005801c7f:0x781d0ce84e98aec9?utm_source=mstt_1&entry=gps&coh=192189&g_ep=CAESBzI1LjQxLjMYACCenQoqogEsOTQyNjc3MjcsOTQyOTIxOTUsOTQyODQ0ODEsOTQyMjMyOTksOTQyMTY0MTMsOTQyODA1NzYsOTQyMTI0OTYsOTQyMDczOTQsOTQyMDc1MDYsOTQyMDg1MDYsOTQyMTc1MjMsOTQyMTg2NTMsOTQyMjk4MzksOTQyNzUxNjgsOTQyNzk2MTksOTQyNjI3MzksNDcwODQzOTMsOTQyMTMyMDBCAkFF&skid=e1c01eea-60ab-4f27-b52f-3082db438754&g_st=awb"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <MapPin className="mr-2" size={18} />
                          Open in Google Maps
                        </a>
                      </Button>
                      <Button asChild variant="outline" className="flex-1 sm:flex-none bg-transparent">
                        <a
                          href="https://maps.apple.com/?address=Al%20Qusais%20Industrial%20Area%203,%20Dubai,%20UAE"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="mr-2" size={18} />
                          Open in Apple Maps
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Static Map Preview - Only on Desktop */}
                <div className="hidden md:block rounded-xl overflow-hidden border-2 border-border/50">
                  <a
                    href="https://www.google.com/maps/place/79WW%2BP7X+VEDERMA+LINE+MEDICAL+EQUIPMENTS+TRADING+LLC+-+Al+Qusais+Ind.+Third+-+Al+Qusais+Industrial+Area+3+-+Dubai/data=!4m2!3m1!1s0x3e5f5d0005801c7f:0x781d0ce84e98aec9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block relative group"
                  >
                    <img
                      src="https://maps.googleapis.com/maps/api/staticmap?center=25.296854,55.39358&zoom=15&size=800x400&markers=color:red%7C25.296854,55.39358&key=YOUR_API_KEY"
                      alt="Vederma Medical Office Location Map"
                      className="w-full h-64 object-cover group-hover:opacity-90 transition-opacity"
                      onError={(e) => {
                        // Fallback to a placeholder if static map fails
                        e.currentTarget.src = "/dubai-map-location.jpg"
                      }}
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-background/95 px-6 py-3 rounded-lg shadow-lg">
                        <p className="font-semibold flex items-center gap-2">
                          <ExternalLink size={18} />
                          Click to open in Google Maps
                        </p>
                      </div>
                    </div>
                  </a>
                </div>

                {/* Mobile: Direct Links Only */}
                <div className="md:hidden p-4 bg-muted/50 rounded-lg">
                  <p className="text-sm text-muted-foreground text-center">
                    Tap the buttons above to open the location in your preferred maps app
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, Phone, MapPin, Send } from "lucide-react"

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

            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-primary/10">
              <div className="aspect-[16/9] md:aspect-[21/9] w-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.5234567890123!2d55.39358!3d25.296854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5d0005801c7f%3A0x781d0ce84e98aec9!2sVEDERMA%20LINE%20MEDICAL%20EQUIPMENTS%20TRADING%20LLC!5e0!3m2!1sen!2sae!4v1234567890123!5m2!1sen!2sae"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Vederma Medical Office Location"
                  className="w-full h-full"
                />
              </div>

              <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6 bg-background/95 backdrop-blur-sm p-4 md:p-6 rounded-xl shadow-lg border border-border/50">
                <div className="flex flex-col sm:flex-row items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                    <MapPin className="text-primary-foreground" size={24} />
                  </div>
                  <div className="flex-1 w-full">
                    <h3 className="font-bold text-base md:text-lg mb-1">VEDERMA LINE MEDICAL EQUIPMENTS TRADING LLC</h3>
                    <p className="text-muted-foreground text-xs md:text-sm mb-3">
                      Al Qusais Industrial Area 3, Dubai, United Arab Emirates
                    </p>
                    <Button asChild size="sm" className="w-full sm:w-auto">
                      <a
                        href="https://www.google.com/maps/place/79WW%2BP7X+VEDERMA+LINE+MEDICAL+EQUIPMENTS+TRADING+LLC+-+Al+Qusais+Ind.+Third+-+Al+Qusais+Industrial+Area+3+-+Dubai/data=!4m2!3m1!1s0x3e5f5d0005801c7f:0x781d0ce84e98aec9?utm_source=mstt_1&entry=gps&coh=192189&g_ep=CAESBzI1LjQxLjMYACCenQoqogEsOTQyNjc3MjcsOTQyOTIxOTUsOTQyODQ0ODEsOTQyMjMyOTksOTQyMTY0MTMsOTQyODA1NzYsOTQyMTI0OTYsOTQyMDczOTQsOTQyMDc1MDYsOTQyMDg1MDYsOTQyMTc1MjMsOTQyMTg2NTMsOTQyMjk4MzksOTQyNzUxNjgsOTQyNzk2MTksOTQyNjI3MzksNDcwODQzOTMsOTQyMTMyMDBCAkFF&skid=e1c01eea-60ab-4f27-b52f-3082db438754&g_st=awb"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Get Directions
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

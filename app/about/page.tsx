"use client"

import Image from "next/image"
import { CheckCircle2, Award, Users, Globe, Shield } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"

const values = [
  {
    icon: Award,
    title: "Quality Excellence",
    description: "All products meet CE/ISO international standards with rigorous quality control.",
  },
  {
    icon: Shield,
    title: "Safety First",
    description: "Sterile, non-toxic, and pyrogen-free products ensuring patient safety.",
  },
  {
    icon: Users,
    title: "Customer Focus",
    description: "24/7 support and dedicated service for healthcare professionals.",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "Serving clinics and hospitals across the UAE and beyond.",
  },
]

const stats = [
  { value: "500+", label: "Clinics Served" },
  { value: "10+", label: "Years Experience" },
  { value: "50+", label: "Product Range" },
  { value: "24/7", label: "Support Available" },
]

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollReveal animation="fade-up">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold text-balance">About Vederma Medical</h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Leading supplier of premium medical equipment and supplies for aesthetic medicine and dermatology
                professionals across the UAE.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal animation="slide-right">
              <div className="space-y-6">
                <h2 className="text-4xl font-bold">Our Mission</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  At Vederma Medical Equipment Trading L.L.C, we are committed to providing healthcare professionals
                  with the highest quality medical equipment and supplies. Our mission is to{" "}
                  <span className="text-primary font-semibold">innovate to elevate care</span> by delivering products
                  that meet international standards and exceed expectations.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We specialize in aesthetic medicine equipment, including PRP tubes, derma pens, micro-cannulas, and
                  injection needles. Every product in our portfolio is carefully selected to ensure safety, efficacy,
                  and reliability.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="slide-left">
              <div className="relative h-96 rounded-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo%20colour-FhZbsnxDsRXZDF0jpSSVp5l6EKtPN5.png"
                    alt="Vederma Medical"
                    width={400}
                    height={200}
                    className="w-3/4 h-auto"
                  />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <ScrollReveal key={stat.label} animation="scale-in" delay={index * 100}>
                <div className="text-center p-8 bg-card rounded-xl border border-border/50 hover:shadow-lg transition-all">
                  <div className="text-5xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollReveal animation="fade-up">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Our Core Values</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                The principles that guide everything we do
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <ScrollReveal key={value.title} animation="fade-up" delay={index * 100}>
                <div className="p-8 bg-card rounded-xl border border-border/50 hover:shadow-lg transition-all space-y-4 h-full">
                  <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center">
                    <value.icon className="text-primary" size={28} />
                  </div>
                  <h3 className="text-xl font-semibold">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-24 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal animation="fade-up">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-4">Quality & Certifications</h2>
                <p className="text-xl text-muted-foreground">
                  All our products meet international quality and safety standards
                </p>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                "CE Certified Products",
                "ISO Quality Standards",
                "Sterile & Pyrogen-Free",
                "FDA Approved Materials",
                "GMP Manufacturing",
                "Regular Quality Audits",
              ].map((cert, index) => (
                <ScrollReveal key={cert} animation="fade-up" delay={index * 80}>
                  <div className="flex items-center gap-3 p-4 bg-card rounded-lg border border-border/50">
                    <CheckCircle2 className="text-primary flex-shrink-0" size={24} />
                    <span className="font-medium">{cert}</span>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

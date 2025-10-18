"use client"

import { Shield, Zap, Award, HeartHandshake } from "lucide-react"
import { motion } from "framer-motion"
import { ScrollReveal } from "@/components/scroll-reveal"

const pillars = [
  {
    icon: Shield,
    title: "Quality Assured",
    description:
      "All products are CE and ISO certified, meeting the highest international standards for medical equipment.",
  },
  {
    icon: Zap,
    title: "Fast Delivery",
    description:
      "Quick turnaround times with reliable logistics to ensure your practice never runs out of essential supplies.",
  },
  {
    icon: Award,
    title: "Expert Support",
    description: "Dedicated technical support and training to help you get the most out of our products.",
  },
  {
    icon: HeartHandshake,
    title: "Trusted Partner",
    description:
      "Building long-term relationships with healthcare professionals through consistent quality and service.",
  },
]

export function ValuePillars() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold text-balance">Why Choose Vederma Medical</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Committed to excellence in every aspect of medical equipment supply
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar, index) => (
            <div key={pillar.title} className="group bg-card p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-500 border border-border/50 h-full">
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary transition-all duration-300">
                <pillar.icon
                  className="text-primary group-hover:text-primary-foreground transition-colors"
                  size={28}
                />
              </div>

              <h3 className="text-xl font-semibold mb-3">
                {pillar.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

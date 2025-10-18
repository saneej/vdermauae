"use client"

import { CheckCircle2 } from "lucide-react"
import { motion } from "framer-motion"
import { ScrollReveal } from "@/components/scroll-reveal"

const steps = [
  {
    number: "01",
    title: "Schedule",
    description: "Choose your maintenance frequency based on equipment usage and clinical needs.",
  },
  {
    number: "02",
    title: "Maintain",
    description: "Our certified technicians perform comprehensive preventive maintenance checks.",
  },
  {
    number: "03",
    title: "Optimize",
    description: "Receive detailed reports and recommendations to maximize equipment performance.",
  },
]

export function PPMCallout() {
  return (
    <section className="py-24 bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-block">
              <span className="text-sm font-medium text-primary bg-primary/10 px-4 py-2 rounded-full">
                PPM Service
              </span>
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold text-balance">
              Preventive Maintenance That Keeps You Running
            </h2>

            <p className="text-xl text-muted-foreground leading-relaxed">
              Minimize downtime and extend equipment lifespan with our comprehensive Planned Preventive Maintenance
              service. Tailored schedules, expert technicians, and guaranteed SLAs.
            </p>

            <ul className="space-y-4">
              {[
                "Certified technician visits",
                "Comprehensive equipment checks",
                "Priority support and rapid response",
                "Detailed maintenance reports",
                "Compliance documentation",
              ].map((item, index) => (
                <li key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="text-primary flex-shrink-0" size={24} />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            {steps.map((step, index) => (
              <div key={step.number} className="relative bg-card p-8 rounded-xl shadow-sm border border-border/50">
                <div className="flex gap-6">
                  <div className="text-6xl font-bold text-primary/20">{step.number}</div>
                  <div className="flex-1 pt-2">
                    <h3 className="text-2xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>
                </div>

                {index < steps.length - 1 && (
                  <div className="absolute left-16 -bottom-6 w-0.5 h-6 bg-primary/30" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

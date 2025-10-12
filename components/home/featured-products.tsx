"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import { ScrollReveal } from "@/components/scroll-reveal"

const products = [
  {
    name: "PRP Tube",
    category: "Regenerative Therapy",
    description: "Platelet-Rich Plasma preparation with ACD/GEL+BIOTIN and growth factors for optimal results.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1%20%282%29-sn7Zy0jM8La6OduZwbg9s2hs7E3Lhr.png",
    href: "/products/prp-tubes",
    badges: ["CE Certified", "Sterile"],
  },
  {
    name: "Mesotherapy Needle",
    category: "Injection Systems",
    description: "Ethylene oxide sterile, non-toxic, pyrogen-free needles for precise mesotherapy treatments.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1%20%281%29-TpJuRtDVIEHjyfNPpPAXA4xoKmKorB.png",
    href: "/products/mesotherapy",
    badges: ["ISO Certified", "Non-toxic"],
  },
  {
    name: "Derma Cannula",
    category: "Injection Systems",
    description: "Ethylene oxide sterile cannulas for safe and effective dermal filler applications.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1%20%283%29-seemC8rThMxVuK6RP1K1fOd4crsJ54.png",
    href: "/products/micro-cannulas",
    badges: ["Pyrogen Free", "Sterile"],
  },
  {
    name: "Derma Pen",
    category: "Microneedling",
    description: "Professional microneedling devices with 12/24/36 pin and nano cartridges for various treatments.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/derma%20pen-0bYkT40wnFLL75poLcnNqzbEbxZSM0.png",
    href: "/products/derma-pens",
    badges: ["Professional Grade", "Multiple Tips"],
  },
]

export function FeaturedProducts() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <ScrollReveal animation="fade-up">
          <div className="flex justify-between items-end mb-16">
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-bold text-balance">Featured Product Ranges</h2>
              <p className="text-xl text-muted-foreground max-w-2xl">
                Discover our comprehensive selection of medical equipment
              </p>
            </div>
            <Button asChild variant="outline" className="hidden lg:flex bg-transparent">
              <Link href="/products">
                View All Products
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <ScrollReveal key={product.name} animation="zoom-in" delay={index * 0.1} duration={0.8}>
              <motion.div
                className="group h-full"
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-border/50 h-full">
                  <div className="relative h-80 bg-gradient-to-br from-primary/5 to-accent/5 flex items-center justify-center p-8 overflow-hidden">
                    <motion.div
                      whileHover={{ scale: 1.15 }}
                      transition={{ type: "spring", stiffness: 300, damping: 15 }}
                      className="w-full h-full"
                    >
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        width={300}
                        height={300}
                        className="w-full h-full object-contain"
                      />
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="p-6 space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {product.badges.map((badge, badgeIndex) => (
                        <motion.div
                          key={badge}
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.1 + badgeIndex * 0.05 }}
                          viewport={{ once: true }}
                        >
                          <Badge variant="secondary" className="text-xs">
                            {badge}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>

                    <div>
                      <div className="text-sm text-primary font-medium mb-1">{product.category}</div>
                      <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{product.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal animation="fade-up" delay={0.4}>
          <div className="mt-12 text-center lg:hidden">
            <Button asChild>
              <Link href="/products">
                View All Products
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

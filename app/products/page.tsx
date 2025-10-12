"use client"

import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2 } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"

const products = [
  {
    name: "PRP Tube",
    category: "Regenerative Therapy",
    description:
      "Platelet-Rich Plasma preparation with ACD/GEL+BIOTIN and growth factors. Activates ACD/GEL+BIOTIN GROWTH FACTOR for optimal regenerative results.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1%20%282%29-sn7Zy0jM8La6OduZwbg9s2hs7E3Lhr.png",
    badges: ["CE Certified", "Sterile", "Growth Factor"],
    features: [
      "ACD/GEL+BIOTIN formulation",
      "Enhanced platelet concentration",
      "Sterile and pyrogen-free",
      "Optimal growth factor activation",
    ],
  },
  {
    name: "Mesotherapy Needle",
    category: "Injection Systems",
    description:
      "Ethylene oxide sterile, non-toxic, pyrogen-free needles designed for precise mesotherapy treatments and aesthetic procedures.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1%20%281%29-TpJuRtDVIEHjyfNPpPAXA4xoKmKorB.png",
    badges: ["ISO Certified", "Non-toxic", "Pyrogen Free"],
    features: [
      "Ethylene oxide sterilization",
      "Ultra-sharp needle tips",
      "Various gauge options",
      "Minimal patient discomfort",
    ],
  },
  {
    name: "Derma Cannula",
    category: "Injection Systems",
    description:
      "Ethylene oxide sterile micro-cannulas for safe and effective dermal filler applications with reduced bruising and trauma.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1%20%283%29-seemC8rThMxVuK6RP1K1fOd4crsJ54.png",
    badges: ["Pyrogen Free", "Sterile", "Blunt Tip"],
    features: [
      "Blunt tip design for safety",
      "Reduced bruising and swelling",
      "Multiple length options",
      "Smooth filler delivery",
    ],
  },
  {
    name: "Derma Pen",
    category: "Microneedling",
    description:
      "Professional microneedling devices with 12/24/36 pin and nano cartridges for collagen induction and skin rejuvenation treatments.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/derma%20pen-0bYkT40wnFLL75poLcnNqzbEbxZSM0.png",
    badges: ["Professional Grade", "Multiple Tips", "Adjustable Depth"],
    features: ["12/24/36 pin cartridges", "Nano needle options", "Adjustable needle depth", "Cordless operation"],
  },
]

export default function ProductsPage() {
  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollReveal animation="fade-up">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold text-balance">Our Products</h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Premium medical equipment and supplies for aesthetic medicine, dermatology, and clinical procedures. All
                products are CE/ISO certified and meet international quality standards.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {products.map((product, index) => (
              <ScrollReveal
                key={product.name}
                animation={index % 2 === 0 ? "slide-left" : "slide-right"}
                delay={index * 150}
              >
                <div className="group bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-border/50">
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Product Image */}
                    <div className="relative h-80 md:h-full bg-gradient-to-br from-primary/5 to-accent/5 flex items-center justify-center p-8">
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        width={300}
                        height={300}
                        className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>

                    {/* Product Details */}
                    <div className="p-8 flex flex-col justify-center space-y-6">
                      <div>
                        <div className="text-sm text-primary font-medium mb-2">{product.category}</div>
                        <h2 className="text-3xl font-bold mb-3">{product.name}</h2>
                        <p className="text-muted-foreground leading-relaxed">{product.description}</p>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {product.badges.map((badge) => (
                          <Badge key={badge} variant="secondary">
                            {badge}
                          </Badge>
                        ))}
                      </div>

                      <div className="space-y-3">
                        {product.features.map((feature) => (
                          <div key={feature} className="flex items-start gap-2">
                            <CheckCircle2 className="text-primary flex-shrink-0 mt-0.5" size={18} />
                            <span className="text-sm text-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollReveal animation="fade-up">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h2 className="text-4xl font-bold">Need More Information?</h2>
              <p className="text-xl text-muted-foreground">
                Contact our team to learn more about our products, request samples, or discuss bulk orders.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  )
}

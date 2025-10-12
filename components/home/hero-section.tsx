"use client"

import { useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { motion, useScroll, useTransform } from "framer-motion"

export function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0])

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center overflow-hidden pt-20">
      <motion.div
        style={{ y, opacity }}
        className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5"
      />

      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "30%"]) }}
        className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "40%"]) }}
        className="absolute bottom-20 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "20%"]) }} className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-block"
            >
              <span className="text-sm font-medium text-primary bg-primary/10 px-4 py-2 rounded-full">
                V+ Dermi Care Excellence
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl lg:text-7xl font-bold leading-tight text-balance"
            >
              Innovate to <span className="text-primary">Elevate Care</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-xl text-muted-foreground leading-relaxed max-w-xl"
            >
              Premium medical equipment trusted worldwide
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <Button
                asChild
                size="lg"
                className="shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
              >
                <Link href="/products">
                  Explore Products
                  <ArrowRight className="ml-2" size={20} />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="group bg-transparent">
                <Link href="/contact">
                  Contact Us
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="grid grid-cols-3 gap-8 pt-8 border-t"
            >
              <motion.div whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 300 }}>
                <div className="text-3xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Clinics Served</div>
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 300 }}>
                <div className="text-3xl font-bold text-primary">CE/ISO</div>
                <div className="text-sm text-muted-foreground">Certified</div>
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 300 }}>
                <div className="text-3xl font-bold text-primary">24/7</div>
                <div className="text-sm text-muted-foreground">Support</div>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "15%"]) }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative lg:h-[600px] flex items-center justify-center"
          >
            <div className="relative w-full max-w-md">
              <motion.div
                animate={{
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
                className="relative z-10"
                whileHover={{ scale: 1.05 }}
              >
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1%20%282%29-sn7Zy0jM8La6OduZwbg9s2hs7E3Lhr.png"
                  alt="PRP Tube - Platelet-Rich Plasma Regenerative Therapy"
                  width={400}
                  height={500}
                  className="w-full h-auto drop-shadow-2xl"
                  priority
                />
              </motion.div>

              <motion.div
                animate={{
                  y: [0, -15, 0],
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 5,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
                className="absolute top-0 -left-12 w-48 opacity-60"
                whileHover={{ scale: 1.15, opacity: 1 }}
              >
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1%20%281%29-TpJuRtDVIEHjyfNPpPAXA4xoKmKorB.png"
                  alt="Mesotherapy Needle"
                  width={200}
                  height={250}
                  className="w-full h-auto drop-shadow-xl"
                />
              </motion.div>
              <motion.div
                animate={{
                  y: [0, -10, 0],
                  scale: [1, 1.08, 1],
                }}
                transition={{
                  duration: 6,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
                className="absolute bottom-0 -right-12 w-48 opacity-60"
                whileHover={{ scale: 1.15, opacity: 1 }}
              >
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1%20%283%29-seemC8rThMxVuK6RP1K1fOd4crsJ54.png"
                  alt="Derma Cannula"
                  width={200}
                  height={250}
                  className="w-full h-auto drop-shadow-xl"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

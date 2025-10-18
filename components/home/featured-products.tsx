"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import { ScrollReveal } from "@/components/scroll-reveal"
import { createClient } from "@/lib/supabase/client"

interface Product {
  id: string
  name: string
  subcategory: string | null
  description: string | null
  image_url: string | null
  badges: string[] | null
  category_name?: string
}

export function FeaturedProducts() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchFeaturedProducts = async () => {
      const supabase = createClient()

      const { data, error } = await supabase
        .from("products")
        .select(`
          id,
          name,
          subcategory,
          description,
          image_url,
          badges,
          categories (name)
        `)
        .eq("is_featured", true)
        .order("display_order", { ascending: true })
        .limit(4)

      if (error) {
        console.error("Error fetching featured products:", error)
        setLoading(false)
        return
      }

      const formattedProducts =
        data?.map((product) => ({
          ...product,
          category_name: product.categories?.name,
        })) || []

      setProducts(formattedProducts)
      setLoading(false)
    }

    fetchFeaturedProducts()
  }, [])

  if (loading) {
    return (
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="text-center">Loading featured products...</div>
        </div>
      </section>
    )
  }

  if (products.length === 0) {
    return null
  }

  return (
    <section className="py-24">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
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

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 overflow-hidden">
          {products.map((product, index) => (
            <div key={product.id} className="group h-full">
                <div className="bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-border/50 h-full">
                  <div className="relative h-80 bg-gradient-to-br from-primary/5 to-accent/5 flex items-center justify-center p-8 overflow-hidden">
                    <motion.div
                      whileHover={{ scale: 1.15 }}
                      transition={{ type: "spring", stiffness: 300, damping: 15 }}
                      className="w-full h-full"
                    >
                      <Image
                        src={product.image_url || "/placeholder.svg?height=300&width=300"}
                        alt={product.name}
                        width={300}
                        height={300}
                        className="w-full h-full object-contain"
                      />
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="p-6 space-y-4">
                    {product.badges && product.badges.length > 0 && (
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
                    )}

                    <div>
                      <div className="text-sm text-primary font-medium mb-1">
                        {product.subcategory || product.category_name}
                      </div>
                      <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{product.description}</p>
                    </div>
                  </div>
                </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center lg:hidden">
          <Button asChild>
            <Link href="/products">
              View All Products
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CheckCircle2, Clock, ArrowLeft, ChevronRight, AlertCircle } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"
import { createBrowserClient } from "@supabase/ssr"

interface Category {
  id: string
  name: string
  description: string | null
  icon: string | null
}

interface Product {
  id: string
  name: string
  category_id: string
  subcategory: string | null
  description: string | null
  image_url: string | null
  features: string[] | null
  badges: string[] | null
  is_coming_soon: boolean
  display_order: number
}

export default function ProductsPage() {
  const [categories, setCategories] = useState<Category[]>([])
  const [products, setProducts] = useState<Product[]>([])
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null)
  const [selectedSubcategory, setSelectedSubcategory] = useState<string | null>(null)
  const [subcategories, setSubcategories] = useState<string[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  const supabase = supabaseUrl && supabaseAnonKey ? createBrowserClient(supabaseUrl, supabaseAnonKey) : null

  useEffect(() => {
    if (!supabase) {
      setError("Database connection not configured")
      setLoading(false)
      return
    }
    fetchCategories()
  }, [])

  useEffect(() => {
    if (selectedCategory) {
      fetchProductsByCategory(selectedCategory.id)
    }
  }, [selectedCategory])

  async function fetchCategories() {
    if (!supabase) return

    setLoading(true)
    setError(null)
    try {
      const { data, error: fetchError } = await supabase
        .from("categories")
        .select("*")
        .order("display_order", { ascending: true })

      if (fetchError) throw fetchError
      setCategories(data || [])
    } catch (err) {
      console.error("Error fetching categories:", err)
      setError("Failed to load categories")
    } finally {
      setLoading(false)
    }
  }

  async function fetchProductsByCategory(categoryId: string) {
    if (!supabase) return

    try {
      const { data, error: fetchError } = await supabase
        .from("products")
        .select("*")
        .eq("category_id", categoryId)
        .order("display_order", { ascending: true })

      if (fetchError) throw fetchError

      const productList = data || []
      setProducts(productList)

      // Extract unique subcategories
      const uniqueSubcategories = Array.from(new Set(productList.map((p) => p.subcategory).filter(Boolean))) as string[]
      setSubcategories(uniqueSubcategories)
    } catch (err) {
      console.error("Error fetching products:", err)
      setError("Failed to load products")
    }
  }

  function handleCategoryClick(category: Category) {
    setSelectedCategory(category)
    setSelectedSubcategory(null)
  }

  function handleBack() {
    if (selectedSubcategory) {
      setSelectedSubcategory(null)
    } else {
      setSelectedCategory(null)
      setSubcategories([])
    }
  }

  const filteredProducts = selectedSubcategory
    ? products.filter((p) => p.subcategory === selectedSubcategory)
    : selectedCategory && subcategories.length === 0
      ? products
      : []

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

      {/* Breadcrumb Navigation */}
      {(selectedCategory || selectedSubcategory) && (
        <section className="py-6 border-b">
          <div className="container mx-auto px-4 lg:px-8">
            <Button variant="ghost" onClick={handleBack} className="gap-2">
              <ArrowLeft size={16} />
              Back
            </Button>
            <div className="flex items-center gap-2 mt-2 text-sm text-muted-foreground">
              <span>Products</span>
              {selectedCategory && (
                <>
                  <ChevronRight size={16} />
                  <span className="text-foreground font-medium">{selectedCategory.name}</span>
                </>
              )}
              {selectedSubcategory && (
                <>
                  <ChevronRight size={16} />
                  <span className="text-foreground font-medium">{selectedSubcategory}</span>
                </>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Main Categories View */}
      {!selectedCategory && (
        <section className="py-24">
          <div className="container mx-auto px-4 lg:px-8">
            {loading ? (
              <div className="text-center py-12">
                <p className="text-muted-foreground">Loading categories...</p>
              </div>
            ) : error ? (
              <div className="max-w-2xl mx-auto text-center py-12 space-y-6">
                <div className="flex justify-center">
                  <div className="rounded-full bg-destructive/10 p-6">
                    <AlertCircle className="w-12 h-12 text-destructive" />
                  </div>
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold">Unable to Load Products</h3>
                  <p className="text-muted-foreground leading-relaxed">{error}</p>
                </div>
                <div className="pt-4">
                  <Button size="lg" onClick={() => window.location.reload()} className="gap-2">
                    Try Again
                  </Button>
                </div>
              </div>
            ) : categories.length === 0 ? (
              <div className="max-w-2xl mx-auto text-center py-12 space-y-6">
                <div className="flex justify-center">
                  <div className="rounded-full bg-primary/10 p-6">
                    <AlertCircle className="w-12 h-12 text-primary" />
                  </div>
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold">No Products Available Yet</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    The product catalog is currently being set up. Please check back soon or contact us for more
                    information about our available products.
                  </p>
                </div>
                <div className="pt-4">
                  <Button size="lg" className="gap-2">
                    Contact Us
                  </Button>
                </div>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {categories.map((category) => (
                  <ScrollReveal key={category.id} animation="fade-up">
                    <button
                      onClick={() => handleCategoryClick(category)}
                      className="group bg-card rounded-2xl p-8 shadow-sm hover:shadow-2xl transition-all duration-500 border border-border/50 text-left w-full"
                    >
                      <div className="space-y-4">
                        {category.icon && (
                          <div className="text-5xl group-hover:scale-110 transition-transform duration-300">
                            {category.icon}
                          </div>
                        )}
                        <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                          {category.name}
                        </h3>
                        {category.description && (
                          <p className="text-muted-foreground leading-relaxed">{category.description}</p>
                        )}
                        <div className="flex items-center gap-2 text-primary font-medium">
                          <span>Explore</span>
                          <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </button>
                  </ScrollReveal>
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      {/* Subcategories View */}
      {selectedCategory && subcategories.length > 0 && !selectedSubcategory && (
        <section className="py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">{selectedCategory.name}</h2>
              <p className="text-xl text-muted-foreground">Select a subcategory to view products</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {subcategories.map((subcategory) => (
                <ScrollReveal key={subcategory} animation="fade-up">
                  <button
                    onClick={() => setSelectedSubcategory(subcategory)}
                    className="group bg-card rounded-2xl p-8 shadow-sm hover:shadow-2xl transition-all duration-500 border border-border/50 text-left w-full"
                  >
                    <div className="space-y-4">
                      <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">{subcategory}</h3>
                      <div className="flex items-center gap-2 text-primary font-medium">
                        <span>View Products</span>
                        <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </button>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Products Grid */}
      {filteredProducts.length > 0 && (
        <section className="py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              {filteredProducts.map((product, index) => (
                <ScrollReveal
                  key={product.id}
                  animation={index % 2 === 0 ? "slide-left" : "slide-right"}
                  delay={Math.min(index * 50, 200)}
                >
                  <div className="group bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-border/50">
                    <div className="grid md:grid-cols-2 gap-6">
                      {/* Product Image */}
                      <div className="relative h-80 md:h-full bg-gradient-to-br from-primary/5 to-accent/5 flex items-center justify-center p-8">
                        {product.is_coming_soon && (
                          <div className="absolute top-4 right-4 z-10">
                            <Badge variant="secondary" className="flex items-center gap-1">
                              <Clock size={14} />
                              Coming Soon
                            </Badge>
                          </div>
                        )}
                        <Image
                          src={
                            product.image_url ||
                            `/placeholder.svg?height=300&width=300&query=${encodeURIComponent(product.name) || "/placeholder.svg"}`
                          }
                          alt={product.name}
                          width={300}
                          height={300}
                          className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>

                      {/* Product Details */}
                      <div className="p-8 flex flex-col justify-center space-y-6">
                        <div>
                          <div className="text-sm text-primary font-medium mb-2">
                            {product.subcategory || selectedCategory?.name}
                          </div>
                          <h2 className="text-3xl font-bold mb-3">{product.name}</h2>
                          <p className="text-muted-foreground leading-relaxed">
                            {product.description || "Premium medical equipment for professional use."}
                          </p>
                        </div>

                        {product.badges && product.badges.length > 0 && (
                          <div className="flex flex-wrap gap-2">
                            {product.badges.map((badge) => (
                              <Badge key={badge} variant="secondary">
                                {badge}
                              </Badge>
                            ))}
                          </div>
                        )}

                        {product.features && product.features.length > 0 && (
                          <div className="space-y-3">
                            {product.features.map((feature) => (
                              <div key={feature} className="flex items-start gap-2">
                                <CheckCircle2 className="text-primary flex-shrink-0 mt-0.5" size={18} />
                                <span className="text-sm text-foreground">{feature}</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

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

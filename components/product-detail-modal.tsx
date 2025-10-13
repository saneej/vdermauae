"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, Clock } from "lucide-react"
import Image from "next/image"

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
  is_featured: boolean
  display_order: number
}

interface ProductDetailModalProps {
  product: Product | null
  open: boolean
  onOpenChange: (open: boolean) => void
  categoryName?: string
}

export function ProductDetailModal({ product, open, onOpenChange, categoryName }: ProductDetailModalProps) {
  if (!product) return null

  console.log("[v0] Product image URL:", product.image_url)

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold">{product.name}</DialogTitle>
          <div className="text-sm text-primary font-medium">{product.subcategory || categoryName}</div>
        </DialogHeader>

        <div className="grid md:grid-cols-2 gap-8 mt-6">
          {/* Product Image */}
          <div className="relative h-96 bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl flex items-center justify-center p-8">
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
                product.image_url || `/placeholder.svg?height=400&width=400&query=${encodeURIComponent(product.name)}`
              }
              alt={product.name}
              width={400}
              height={400}
              className="w-full h-full object-contain"
              onError={(e) => {
                console.log("[v0] Image failed to load:", product.image_url)
                e.currentTarget.src = `/placeholder.svg?height=400&width=400&query=${encodeURIComponent(product.name)}`
              }}
            />
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">Description</h3>
              <p className="text-muted-foreground leading-relaxed">
                {product.description || "Premium medical equipment for professional use."}
              </p>
            </div>

            {product.badges && product.badges.length > 0 && (
              <div>
                <h3 className="text-lg font-semibold mb-3">Certifications</h3>
                <div className="flex flex-wrap gap-2">
                  {product.badges.map((badge) => (
                    <Badge key={badge} variant="secondary">
                      {badge}
                    </Badge>
                  ))}
                </div>
              </div>
            )}

            {product.features && product.features.length > 0 && (
              <div>
                <h3 className="text-lg font-semibold mb-3">Key Features</h3>
                <div className="space-y-3">
                  {product.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-2">
                      <CheckCircle2 className="text-primary flex-shrink-0 mt-0.5" size={18} />
                      <span className="text-sm text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

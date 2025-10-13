"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Plus, Pencil, Trash2, Trash, Upload } from "lucide-react"
import { createClient } from "@/lib/supabase/client"
import { useRouter } from "next/navigation"
import { Switch } from "@/components/ui/switch"
import { Checkbox } from "@/components/ui/checkbox"

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
  category_name?: string
}

interface ProductsManagerProps {
  initialProducts: Product[]
  categories: any[]
}

export function ProductsManager({ initialProducts, categories }: ProductsManagerProps) {
  const router = useRouter()
  const supabase = createClient()
  const [products, setProducts] = useState(initialProducts)
  const [isAdding, setIsAdding] = useState(false)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [selectedProducts, setSelectedProducts] = useState<Set<string>>(new Set())
  const [uploadingImage, setUploadingImage] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    category_id: "",
    subcategory: "",
    description: "",
    image_url: "",
    features: "",
    badges: "",
    is_coming_soon: false,
    is_featured: false,
    display_order: 0,
  })

  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      setSelectedProducts(new Set(products.map((p) => p.id)))
    } else {
      setSelectedProducts(new Set())
    }
  }

  const handleSelectProduct = (productId: string, checked: boolean) => {
    const newSelected = new Set(selectedProducts)
    if (checked) {
      newSelected.add(productId)
    } else {
      newSelected.delete(productId)
    }
    setSelectedProducts(newSelected)
  }

  const handleBulkDelete = async () => {
    if (selectedProducts.size === 0) {
      alert("Please select products to delete")
      return
    }

    if (!confirm(`Are you sure you want to delete ${selectedProducts.size} product(s)?`)) return

    const { error } = await supabase.from("products").delete().in("id", Array.from(selectedProducts))

    if (error) {
      alert("Error deleting products: " + error.message)
      return
    }

    setSelectedProducts(new Set())
    router.refresh()
  }

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    // Check if file is an image
    if (!file.type.startsWith("image/")) {
      alert("Please upload an image file")
      return
    }

    // Check file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      alert("Image size should be less than 5MB")
      return
    }

    setUploadingImage(true)

    try {
      // Create a unique file name
      const fileExt = file.name.split(".").pop()
      const fileName = `${Math.random().toString(36).substring(2)}-${Date.now()}.${fileExt}`
      const filePath = `products/${fileName}`

      console.log("[v0] Uploading image:", fileName)

      // Upload to Supabase Storage
      const { data, error } = await supabase.storage.from("product-images").upload(filePath, file)

      if (error) {
        console.log("[v0] Upload error:", error)
        throw error
      }

      console.log("[v0] Upload successful:", data)

      // Get public URL
      const {
        data: { publicUrl },
      } = supabase.storage.from("product-images").getPublicUrl(filePath)

      console.log("[v0] Public URL:", publicUrl)

      // Update form data with the image URL
      setFormData({ ...formData, image_url: publicUrl })
      alert("Image uploaded successfully!")
    } catch (error: any) {
      console.error("[v0] Error uploading image:", error)
      alert("Error uploading image: " + (error.message || "Please ensure Supabase storage is configured"))
    } finally {
      setUploadingImage(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const productData = {
      name: formData.name,
      category_id: formData.category_id,
      subcategory: formData.subcategory || null,
      description: formData.description || null,
      image_url: formData.image_url || null,
      features: formData.features ? formData.features.split("\n").filter((f) => f.trim()) : null,
      badges: formData.badges
        ? formData.badges
            .split(",")
            .map((b) => b.trim())
            .filter((b) => b)
        : null,
      is_coming_soon: formData.is_coming_soon,
      is_featured: formData.is_featured || false,
      display_order: formData.display_order,
    }

    if (editingId) {
      const { error } = await supabase.from("products").update(productData).eq("id", editingId)
      if (error) {
        alert("Error updating product: " + error.message)
        return
      }
    } else {
      const { error } = await supabase.from("products").insert(productData)
      if (error) {
        alert("Error adding product: " + error.message)
        return
      }
    }

    setIsAdding(false)
    setEditingId(null)
    setFormData({
      name: "",
      category_id: "",
      subcategory: "",
      description: "",
      image_url: "",
      features: "",
      badges: "",
      is_coming_soon: false,
      is_featured: false,
      display_order: 0,
    })
    router.refresh()
  }

  const handleEdit = (product: Product) => {
    setEditingId(product.id)
    setFormData({
      name: product.name,
      category_id: product.category_id,
      subcategory: product.subcategory || "",
      description: product.description || "",
      image_url: product.image_url || "",
      features: product.features?.join("\n") || "",
      badges: product.badges?.join(", ") || "",
      is_coming_soon: product.is_coming_soon,
      is_featured: product.is_featured || false,
      display_order: product.display_order,
    })
    setIsAdding(true)
  }

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this product?")) return

    const { error } = await supabase.from("products").delete().eq("id", id)
    if (error) {
      alert("Error deleting product: " + error.message)
      return
    }

    router.refresh()
  }

  const handleCancel = () => {
    setIsAdding(false)
    setEditingId(null)
    setFormData({
      name: "",
      category_id: "",
      subcategory: "",
      description: "",
      image_url: "",
      features: "",
      badges: "",
      is_coming_soon: false,
      is_featured: false,
      display_order: 0,
    })
  }

  const allSelected = products.length > 0 && selectedProducts.size === products.length

  return (
    <div className="space-y-6">
      {/* Add/Edit Form */}
      {isAdding ? (
        <Card>
          <CardHeader>
            <CardTitle>{editingId ? "Edit Product" : "Add New Product"}</CardTitle>
            <CardDescription>
              {editingId ? "Update product information" : "Fill in the details to add a new product"}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Product Name *</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="category">Category *</Label>
                  <Select
                    value={formData.category_id}
                    onValueChange={(value) => setFormData({ ...formData, category_id: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((cat) => (
                        <SelectItem key={cat.id} value={cat.id}>
                          {cat.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="subcategory">Subcategory</Label>
                  <Input
                    id="subcategory"
                    value={formData.subcategory}
                    onChange={(e) => setFormData({ ...formData, subcategory: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="image_upload">Product Image</Label>
                  <div className="flex gap-2">
                    <Input
                      id="image_upload"
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      disabled={uploadingImage}
                      className="flex-1"
                    />
                    {uploadingImage && (
                      <Button type="button" disabled size="sm">
                        <Upload className="mr-2 h-4 w-4 animate-spin" />
                        Uploading...
                      </Button>
                    )}
                  </div>
                  {formData.image_url && (
                    <p className="text-xs text-muted-foreground truncate">Current: {formData.image_url}</p>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  rows={3}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="features">Features (one per line)</Label>
                <Textarea
                  id="features"
                  value={formData.features}
                  onChange={(e) => setFormData({ ...formData, features: e.target.value })}
                  rows={4}
                  placeholder="Feature 1&#10;Feature 2&#10;Feature 3"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="badges">Badges (comma separated)</Label>
                  <Input
                    id="badges"
                    value={formData.badges}
                    onChange={(e) => setFormData({ ...formData, badges: e.target.value })}
                    placeholder="CE Certified, Sterile, Premium"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="display_order">Display Order</Label>
                  <Input
                    id="display_order"
                    type="number"
                    value={formData.display_order}
                    onChange={(e) => setFormData({ ...formData, display_order: Number.parseInt(e.target.value) || 0 })}
                  />
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Switch
                    id="is_coming_soon"
                    checked={formData.is_coming_soon}
                    onCheckedChange={(checked) => setFormData({ ...formData, is_coming_soon: checked })}
                  />
                  <Label htmlFor="is_coming_soon">Mark as Coming Soon</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Switch
                    id="is_featured"
                    checked={formData.is_featured}
                    onCheckedChange={(checked) => setFormData({ ...formData, is_featured: checked })}
                  />
                  <Label htmlFor="is_featured">List product in featured section</Label>
                </div>
              </div>

              <div className="flex gap-2">
                <Button type="submit">{editingId ? "Update Product" : "Add Product"}</Button>
                <Button type="button" variant="outline" onClick={handleCancel}>
                  Cancel
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      ) : (
        <div className="flex flex-wrap gap-2">
          <Button onClick={() => setIsAdding(true)}>
            <Plus className="mr-2" size={16} />
            Add New Product
          </Button>
          {selectedProducts.size > 0 && (
            <Button variant="destructive" onClick={handleBulkDelete}>
              <Trash className="mr-2" size={16} />
              Delete Selected ({selectedProducts.size})
            </Button>
          )}
        </div>
      )}

      {products.length > 0 && !isAdding && (
        <div className="flex items-center space-x-2 p-4 bg-muted/50 rounded-lg">
          <Checkbox id="select-all" checked={allSelected} onCheckedChange={handleSelectAll} />
          <Label htmlFor="select-all" className="cursor-pointer">
            Select All Products ({products.length})
          </Label>
        </div>
      )}

      {/* Products List */}
      <div className="grid gap-4">
        {products.map((product) => (
          <Card key={product.id}>
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <Checkbox
                  checked={selectedProducts.has(product.id)}
                  onCheckedChange={(checked) => handleSelectProduct(product.id, checked as boolean)}
                  className="mt-1"
                />
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-lg font-semibold">{product.name}</h3>
                    {product.is_coming_soon && <Badge variant="secondary">Coming Soon</Badge>}
                    {product.is_featured && <Badge variant="default">Featured</Badge>}
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">{product.subcategory || product.category_name}</p>
                  {product.description && <p className="text-sm mb-2">{product.description}</p>}
                  {product.badges && product.badges.length > 0 && (
                    <div className="flex flex-wrap gap-1 mb-2">
                      {product.badges.map((badge) => (
                        <Badge key={badge} variant="outline" className="text-xs">
                          {badge}
                        </Badge>
                      ))}
                    </div>
                  )}
                  <p className="text-xs text-muted-foreground">Display Order: {product.display_order}</p>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" onClick={() => handleEdit(product)}>
                    <Pencil size={14} />
                  </Button>
                  <Button size="sm" variant="destructive" onClick={() => handleDelete(product.id)}>
                    <Trash2 size={14} />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

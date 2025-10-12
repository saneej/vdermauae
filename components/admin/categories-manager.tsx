"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Plus, Pencil, Trash2 } from "lucide-react"
import { createClient } from "@/lib/supabase/client"
import { useRouter } from "next/navigation"

interface Category {
  id: string
  name: string
  description: string | null
  display_order: number
}

interface CategoriesManagerProps {
  initialCategories: Category[]
}

export function CategoriesManager({ initialCategories }: CategoriesManagerProps) {
  const router = useRouter()
  const supabase = createClient()
  const [categories, setCategories] = useState(initialCategories)
  const [isAdding, setIsAdding] = useState(false)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    display_order: 0,
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const categoryData = {
      name: formData.name,
      description: formData.description || null,
      display_order: formData.display_order,
    }

    if (editingId) {
      const { error } = await supabase.from("categories").update(categoryData).eq("id", editingId)
      if (error) {
        alert("Error updating category: " + error.message)
        return
      }
    } else {
      const { error } = await supabase.from("categories").insert(categoryData)
      if (error) {
        alert("Error adding category: " + error.message)
        return
      }
    }

    setIsAdding(false)
    setEditingId(null)
    setFormData({ name: "", description: "", display_order: 0 })
    router.refresh()
  }

  const handleEdit = (category: Category) => {
    setEditingId(category.id)
    setFormData({
      name: category.name,
      description: category.description || "",
      display_order: category.display_order,
    })
    setIsAdding(true)
  }

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure? This will also delete all products in this category.")) return

    const { error } = await supabase.from("categories").delete().eq("id", id)
    if (error) {
      alert("Error deleting category: " + error.message)
      return
    }

    router.refresh()
  }

  const handleCancel = () => {
    setIsAdding(false)
    setEditingId(null)
    setFormData({ name: "", description: "", display_order: 0 })
  }

  return (
    <div className="space-y-6">
      {/* Add/Edit Form */}
      {isAdding ? (
        <Card>
          <CardHeader>
            <CardTitle>{editingId ? "Edit Category" : "Add New Category"}</CardTitle>
            <CardDescription>
              {editingId ? "Update category information" : "Fill in the details to add a new category"}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Category Name *</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
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
                <Label htmlFor="display_order">Display Order</Label>
                <Input
                  id="display_order"
                  type="number"
                  value={formData.display_order}
                  onChange={(e) => setFormData({ ...formData, display_order: Number.parseInt(e.target.value) || 0 })}
                />
              </div>

              <div className="flex gap-2">
                <Button type="submit">{editingId ? "Update Category" : "Add Category"}</Button>
                <Button type="button" variant="outline" onClick={handleCancel}>
                  Cancel
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      ) : (
        <Button onClick={() => setIsAdding(true)}>
          <Plus className="mr-2" size={16} />
          Add New Category
        </Button>
      )}

      {/* Categories List */}
      <div className="grid gap-4">
        {categories.map((category) => (
          <Card key={category.id}>
            <CardContent className="pt-6">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-2">{category.name}</h3>
                  {category.description && <p className="text-sm text-muted-foreground mb-2">{category.description}</p>}
                  <p className="text-xs text-muted-foreground">Display Order: {category.display_order}</p>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" onClick={() => handleEdit(category)}>
                    <Pencil size={14} />
                  </Button>
                  <Button size="sm" variant="destructive" onClick={() => handleDelete(category.id)}>
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

"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { LogOut, Package, FolderTree } from "lucide-react"
import { createClient } from "@/lib/supabase/client"
import { useRouter } from "next/navigation"
import { ProductsManager } from "./products-manager"
import { CategoriesManager } from "./categories-manager"
import { ChangePasswordForm } from "./change-password-form"
import type { User } from "@supabase/supabase-js"

interface AdminDashboardProps {
  user: User
  initialCategories: any[]
  initialProducts: any[]
}

export function AdminDashboard({ user, initialCategories, initialProducts }: AdminDashboardProps) {
  const router = useRouter()
  const supabase = createClient()
  const [isLoggingOut, setIsLoggingOut] = useState(false)

  const handleLogout = async () => {
    setIsLoggingOut(true)
    await supabase.auth.signOut()
    router.push("/")
    router.refresh()
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold">Admin Dashboard</h1>
          <p className="text-muted-foreground mt-2">Manage products and categories</p>
        </div>
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="text-sm text-muted-foreground">
            Logged in as: <span className="font-medium text-foreground block sm:inline">{user.email}</span>
          </div>
          <Button variant="outline" onClick={handleLogout} disabled={isLoggingOut}>
            <LogOut className="mr-2" size={16} />
            {isLoggingOut ? "Logging out..." : "Logout"}
          </Button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Products</CardTitle>
            <Package className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{initialProducts.length}</div>
            <p className="text-xs text-muted-foreground">Across all categories</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Categories</CardTitle>
            <FolderTree className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{initialCategories.length}</div>
            <p className="text-xs text-muted-foreground">Product categories</p>
          </CardContent>
        </Card>
      </div>

      {/* Management Tabs */}
      <Tabs defaultValue="products" className="space-y-6">
        <TabsList>
          <TabsTrigger value="products">Products</TabsTrigger>
          <TabsTrigger value="categories">Categories</TabsTrigger>
          <TabsTrigger value="password">Change Password</TabsTrigger>
        </TabsList>

        <TabsContent value="products">
          <ProductsManager initialProducts={initialProducts} categories={initialCategories} />
        </TabsContent>

        <TabsContent value="categories">
          <CategoriesManager initialCategories={initialCategories} />
        </TabsContent>

        <TabsContent value="password">
          <ChangePasswordForm />
        </TabsContent>
      </Tabs>
    </div>
  )
}

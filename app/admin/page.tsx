import { redirect } from "next/navigation"
import { createClient } from "@/lib/supabase/server"
import { AdminDashboard } from "@/components/admin/admin-dashboard"

export default async function AdminPage() {
  const supabase = await createClient()

  const {
    data: { user },
    error,
  } = await supabase.auth.getUser()

  if (error || !user) {
    redirect("/auth/login")
  }

  // Fetch categories and products
  const { data: categories } = await supabase.from("categories").select("*").order("display_order")

  const { data: products } = await supabase
    .from("products")
    .select(`
      *,
      categories!inner(name)
    `)
    .order("display_order")

  return (
    <div className="min-h-screen bg-background">
      <AdminDashboard
        user={user}
        initialCategories={categories || []}
        initialProducts={
          (products || []).map((p: any) => ({
            ...p,
            category_name: p.categories?.name || "Uncategorized",
          })) || []
        }
      />
    </div>
  )
}

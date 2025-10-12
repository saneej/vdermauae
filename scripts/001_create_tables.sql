-- Create categories table
CREATE TABLE IF NOT EXISTS public.categories (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL UNIQUE,
  description TEXT,
  display_order INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create products table
CREATE TABLE IF NOT EXISTS public.products (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  category_id UUID REFERENCES public.categories(id) ON DELETE CASCADE,
  subcategory TEXT,
  description TEXT,
  image_url TEXT,
  features TEXT[],
  badges TEXT[],
  is_coming_soon BOOLEAN DEFAULT FALSE,
  display_order INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE public.categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.products ENABLE ROW LEVEL SECURITY;

-- Public read access for categories and products
CREATE POLICY "categories_public_read" ON public.categories FOR SELECT USING (true);
CREATE POLICY "products_public_read" ON public.products FOR SELECT USING (true);

-- Admin write access (authenticated users can manage)
CREATE POLICY "categories_auth_insert" ON public.categories FOR INSERT TO authenticated WITH CHECK (true);
CREATE POLICY "categories_auth_update" ON public.categories FOR UPDATE TO authenticated USING (true);
CREATE POLICY "categories_auth_delete" ON public.categories FOR DELETE TO authenticated USING (true);

CREATE POLICY "products_auth_insert" ON public.products FOR INSERT TO authenticated WITH CHECK (true);
CREATE POLICY "products_auth_update" ON public.products FOR UPDATE TO authenticated USING (true);
CREATE POLICY "products_auth_delete" ON public.products FOR DELETE TO authenticated USING (true);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_products_category_id ON public.products(category_id);
CREATE INDEX IF NOT EXISTS idx_products_display_order ON public.products(display_order);
CREATE INDEX IF NOT EXISTS idx_categories_display_order ON public.categories(display_order);

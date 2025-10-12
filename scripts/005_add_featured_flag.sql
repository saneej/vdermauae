-- Add is_featured column to products table
ALTER TABLE products ADD COLUMN IF NOT EXISTS is_featured BOOLEAN DEFAULT false;

-- Set some products as featured (you can modify these based on your needs)
UPDATE products 
SET is_featured = true 
WHERE display_order <= 4 AND is_coming_soon = false;

-- Create an index for better query performance
CREATE INDEX IF NOT EXISTS idx_products_featured ON products(is_featured) WHERE is_featured = true;

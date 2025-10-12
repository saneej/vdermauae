-- Insert new categories based on V Derma Medical Product Catalog
INSERT INTO public.categories (name, description, display_order) VALUES
('Aesthetic & Regenerative Medicine', 'Premium products for aesthetic procedures, regenerative therapy, and skin treatments', 1),
('Drug Delivery Systems', 'Advanced injection pens and delivery systems for precise medication administration', 2),
('Medical Disposables & Accessories', 'Essential medical supplies, syringes, needles, and accessories', 3),
('Hospital & Clinic Equipment', 'Professional medical equipment, furniture, and diagnostic devices', 4)
ON CONFLICT (name) DO NOTHING;

-- Get category IDs
DO $$
DECLARE
  cat_aesthetic UUID;
  cat_drug_delivery UUID;
  cat_disposables UUID;
  cat_equipment UUID;
BEGIN
  SELECT id INTO cat_aesthetic FROM public.categories WHERE name = 'Aesthetic & Regenerative Medicine';
  SELECT id INTO cat_drug_delivery FROM public.categories WHERE name = 'Drug Delivery Systems';
  SELECT id INTO cat_disposables FROM public.categories WHERE name = 'Medical Disposables & Accessories';
  SELECT id INTO cat_equipment FROM public.categories WHERE name = 'Hospital & Clinic Equipment';

  -- I. Aesthetic & Regenerative Medicine
  -- 1. Lifting Threads
  INSERT INTO public.products (name, category_id, subcategory, is_coming_soon, display_order) VALUES
  ('Big V', cat_aesthetic, 'Lifting Threads (PDO & PCL Series)', false, 1),
  ('Small V', cat_aesthetic, 'Lifting Threads (PDO & PCL Series)', false, 2),
  ('Mona', cat_aesthetic, 'Lifting Threads (PDO & PCL Series)', false, 3),
  ('Mona Screw', cat_aesthetic, 'Lifting Threads (PDO & PCL Series)', false, 4),
  ('Cog 3D', cat_aesthetic, 'Lifting Threads (PDO & PCL Series)', false, 5),
  ('Molding Cog', cat_aesthetic, 'Lifting Threads (PDO & PCL Series)', false, 6);

  -- 2. PRP & Cell Therapy Kits
  INSERT INTO public.products (name, category_id, subcategory, is_coming_soon, display_order) VALUES
  ('PRP TUBE', cat_aesthetic, 'PRP & Cell Therapy Kits', false, 7),
  ('PRP CLASSIC ACID + GEL', cat_aesthetic, 'PRP & Cell Therapy Kits', false, 8),
  ('PRP ACID + GEL + BIOTIN', cat_aesthetic, 'PRP & Cell Therapy Kits', false, 9),
  ('PRP GROWTH FACTOR', cat_aesthetic, 'PRP & Cell Therapy Kits', false, 10),
  ('Prefilled Glass Syringe', cat_aesthetic, 'PRP & Cell Therapy Kits', false, 11);

  -- 3. Micro-Needling Devices
  INSERT INTO public.products (name, category_id, subcategory, is_coming_soon, display_order) VALUES
  ('Microneedling Derma Roller', cat_aesthetic, 'Micro-Needling Devices', false, 12),
  ('Hydra Needle HN20', cat_aesthetic, 'Micro-Needling Devices', false, 13),
  ('Hydra Roller 64 HR64', cat_aesthetic, 'Micro-Needling Devices', false, 14),
  ('Hydra Pen H3', cat_aesthetic, 'Micro-Needling Devices', false, 15),
  ('Hydra Pen H5', cat_aesthetic, 'Micro-Needling Devices', false, 16),
  ('Derma Pen A6', cat_aesthetic, 'Micro-Needling Devices', false, 17),
  ('Derma Pen A6S', cat_aesthetic, 'Micro-Needling Devices', false, 18),
  ('Derma Pen A10', cat_aesthetic, 'Micro-Needling Devices', false, 19),
  ('Derma Pen M5', cat_aesthetic, 'Micro-Needling Devices', false, 20),
  ('Derma Pen M8', cat_aesthetic, 'Micro-Needling Devices', false, 21),
  ('Derma Pen X5', cat_aesthetic, 'Micro-Needling Devices', false, 22);

  -- 4. Needles for Aesthetics
  INSERT INTO public.products (name, category_id, subcategory, is_coming_soon, display_order) VALUES
  ('Medical Beauty Injection Disposable Needle', cat_aesthetic, 'Needles for Aesthetics', false, 23),
  ('Disposable Micro Cannula Needle (Blunt Type)', cat_aesthetic, 'Needles for Aesthetics', false, 24),
  ('Mesotherapy Needle', cat_aesthetic, 'Needles for Aesthetics', false, 25);

  -- 5. Multi-Needle Systems
  INSERT INTO public.products (name, category_id, subcategory, is_coming_soon, display_order) VALUES
  ('Crystal 5 Pin Multi Needle', cat_aesthetic, 'Multi-Needle Systems', false, 26),
  ('9 Pin Multi Needle', cat_aesthetic, 'Multi-Needle Systems', false, 27),
  ('Nanosoft 3 Pin Needle', cat_aesthetic, 'Multi-Needle Systems', false, 28);

  -- II. Drug Delivery Systems
  -- 1. Injection Pens
  INSERT INTO public.products (name, category_id, subcategory, is_coming_soon, display_order) VALUES
  ('Reusable Pen Injector', cat_drug_delivery, 'Injection Pens', false, 29),
  ('Disposable Injection Pen (Tryweken Pan)', cat_drug_delivery, 'Injection Pens', false, 30),
  ('Reusable Magic Pen', cat_drug_delivery, 'Injection Pens', false, 31);

  -- 2. Pen Needles
  INSERT INTO public.products (name, category_id, subcategory, is_coming_soon, display_order) VALUES
  ('Disposable Insulin Pen Matching Needle', cat_drug_delivery, 'Pen Needles', false, 32);

  -- III. Medical Disposables & Accessories
  -- 1. Syringes and General Needles
  INSERT INTO public.products (name, category_id, subcategory, is_coming_soon, display_order) VALUES
  ('Syringe Series (W/needle)', cat_disposables, 'Syringes and General Needles', false, 33),
  ('Syringe Series (W/O needle)', cat_disposables, 'Syringes and General Needles', false, 34),
  ('Disposable Intracardiac Needle', cat_disposables, 'Syringes and General Needles', false, 35),
  ('Biopsy Needle Tube', cat_disposables, 'Syringes and General Needles', false, 36),
  ('Wire Carving Needle', cat_disposables, 'Syringes and General Needles', false, 37),
  ('Anesthesia Needle', cat_disposables, 'Syringes and General Needles', false, 38),
  ('Mitsubishi Needle', cat_disposables, 'Syringes and General Needles', false, 39),
  ('Bending Needle', cat_disposables, 'Syringes and General Needles', false, 40);

  -- 2. Vascular Access & IV Components
  INSERT INTO public.products (name, category_id, subcategory, is_coming_soon, display_order) VALUES
  ('Vein Detained Needle (IV Catheter)', cat_disposables, 'Vascular Access & IV Components', false, 41),
  ('Three-Way Stopcock', cat_disposables, 'Vascular Access & IV Components', false, 42),
  ('Luer Lock Connector', cat_disposables, 'Vascular Access & IV Components', false, 43);

  -- 3. Dental Needles
  INSERT INTO public.products (name, category_id, subcategory, is_coming_soon, display_order) VALUES
  ('Dental Endo Irrigation Needle', cat_disposables, 'Dental Needles', false, 44);

  -- 4. Blood Collection
  INSERT INTO public.products (name, category_id, subcategory, is_coming_soon, display_order) VALUES
  ('Blood Collection Needle', cat_disposables, 'Blood Collection', false, 45);

  -- IV. Hospital & Clinic Equipment
  -- 1. Hospital Furniture
  INSERT INTO public.products (name, category_id, subcategory, is_coming_soon, display_order) VALUES
  ('HOSPITAL BED', cat_equipment, 'Hospital Furniture', true, 46),
  ('EXAMINATION COUCH', cat_equipment, 'Hospital Furniture', true, 47),
  ('BLOOD DONOR CHAIR', cat_equipment, 'Hospital Furniture', true, 48),
  ('PATIENT STRETCHER', cat_equipment, 'Hospital Furniture', true, 49),
  ('PEDIATRIC BED', cat_equipment, 'Hospital Furniture', true, 50),
  ('SOFA BED', cat_equipment, 'Hospital Furniture', true, 51),
  ('WARD SCREEN', cat_equipment, 'Hospital Furniture', true, 52),
  ('MEDICAL TROLLEY', cat_equipment, 'Hospital Furniture', true, 53),
  ('CABINETS AND SINK', cat_equipment, 'Hospital Furniture', true, 54),
  ('BED SIDE CABINET', cat_equipment, 'Hospital Furniture', true, 55),
  ('OVER BED TABLE', cat_equipment, 'Hospital Furniture', true, 56),
  ('STOOL', cat_equipment, 'Hospital Furniture', true, 57),
  ('IV STAND', cat_equipment, 'Hospital Furniture', true, 58),
  ('SCOOP STRETCHER', cat_equipment, 'Hospital Furniture', true, 59),
  ('FOOT STEP', cat_equipment, 'Hospital Furniture', true, 60),
  ('DERMATOLOGY BED', cat_equipment, 'Hospital Furniture', true, 61),
  ('ELECTRIC COUCH', cat_equipment, 'Hospital Furniture', true, 62),
  ('TRACTION TABLE', cat_equipment, 'Hospital Furniture', true, 63);

  -- 2. Therapy & Beauty Machines
  INSERT INTO public.products (name, category_id, subcategory, is_coming_soon, display_order) VALUES
  ('MICRONEEDLING MACHINE', cat_equipment, 'Therapy & Beauty Machines', true, 64),
  ('HYDRA FACIAL', cat_equipment, 'Therapy & Beauty Machines', true, 65),
  ('HIFU MACHINE', cat_equipment, 'Therapy & Beauty Machines', true, 66),
  ('CRYOPOLYSIS FAT FREEZING MACHINE', cat_equipment, 'Therapy & Beauty Machines', true, 67),
  ('SLIMMING MACHINE', cat_equipment, 'Therapy & Beauty Machines', true, 68),
  ('LASER MACHINE', cat_equipment, 'Therapy & Beauty Machines', true, 69),
  ('CRYO GUN', cat_equipment, 'Therapy & Beauty Machines', true, 70),
  ('ELECTROCAUTERY MACHINE', cat_equipment, 'Therapy & Beauty Machines', true, 71),
  ('PHYSIOTHERAPY EQUIPMENTS', cat_equipment, 'Therapy & Beauty Machines', true, 72),
  ('ULTRASOUND THERAPY', cat_equipment, 'Therapy & Beauty Machines', true, 73),
  ('SHOCK WAVE THERAPY', cat_equipment, 'Therapy & Beauty Machines', true, 74),
  ('TENS MACHINE', cat_equipment, 'Therapy & Beauty Machines', true, 75),
  ('TRACTION MACHINE', cat_equipment, 'Therapy & Beauty Machines', true, 76),
  ('IFT MACHINE', cat_equipment, 'Therapy & Beauty Machines', true, 77),
  ('HYDROCOLLATOR', cat_equipment, 'Therapy & Beauty Machines', true, 78),
  ('INFRARED SURGICAL MACHINE', cat_equipment, 'Therapy & Beauty Machines', true, 79),
  ('LASER SAFETY GOGGLES', cat_equipment, 'Therapy & Beauty Machines', true, 80),
  ('PHOTOTHERAPY', cat_equipment, 'Therapy & Beauty Machines', true, 81);

  -- 3. Diagnostic & Respiratory
  INSERT INTO public.products (name, category_id, subcategory, is_coming_soon, display_order) VALUES
  ('PORTABLE VENTILATOR', cat_equipment, 'Diagnostic & Respiratory', true, 82),
  ('ANESTHESIA VENTILATOR MACHINE', cat_equipment, 'Diagnostic & Respiratory', true, 83),
  ('OXYGEN CONCENTRATOR', cat_equipment, 'Diagnostic & Respiratory', true, 84),
  ('CPAP/BIPAP', cat_equipment, 'Diagnostic & Respiratory', true, 85),
  ('OXYGEN MACHINES', cat_equipment, 'Diagnostic & Respiratory', true, 86),
  ('PULSE OXIMETER', cat_equipment, 'Diagnostic & Respiratory', true, 87),
  ('SYRINGE PUMP', cat_equipment, 'Diagnostic & Respiratory', true, 88),
  ('GLUCOMETER', cat_equipment, 'Diagnostic & Respiratory', true, 89),
  ('THERMOMETER', cat_equipment, 'Diagnostic & Respiratory', true, 90),
  ('NEBULIZER', cat_equipment, 'Diagnostic & Respiratory', true, 91),
  ('DIAGNOSTIC SET', cat_equipment, 'Diagnostic & Respiratory', true, 92),
  ('INFUSION PUMP', cat_equipment, 'Diagnostic & Respiratory', true, 93),
  ('ACCU-CHEK', cat_equipment, 'Diagnostic & Respiratory', true, 94),
  ('EXAMINATION LAMP', cat_equipment, 'Diagnostic & Respiratory', true, 95),
  ('STHETHOSCOPE', cat_equipment, 'Diagnostic & Respiratory', true, 96),
  ('PEN TORCH', cat_equipment, 'Diagnostic & Respiratory', true, 97),
  ('MERCURY BP', cat_equipment, 'Diagnostic & Respiratory', true, 98),
  ('DIGITAL BP', cat_equipment, 'Diagnostic & Respiratory', true, 99),
  ('KNEE HAMMER & TUNING FORK', cat_equipment, 'Diagnostic & Respiratory', true, 100),
  ('X-RAY VIEWER', cat_equipment, 'Diagnostic & Respiratory', true, 101),
  ('SUCTION MACHINE', cat_equipment, 'Diagnostic & Respiratory', true, 102),
  ('AMBU BAG', cat_equipment, 'Diagnostic & Respiratory', true, 103);

  -- 4. Other Equipment/Accessories
  INSERT INTO public.products (name, category_id, subcategory, is_coming_soon, display_order) VALUES
  ('SKIN MARKER', cat_equipment, 'Other Equipment/Accessories', true, 104);

END $$;

-- Insert categories
INSERT INTO public.categories (name, description, display_order) VALUES
('Aesthetic & Regenerative Medicine', 'Beauty and cosmetic focus products for aesthetic procedures', 1),
('Drug Delivery Systems', 'Injection and pen technology for precise drug delivery', 2),
('Medical Disposables & Accessories', 'General use medical supplies and accessories', 3),
('Hospital & Clinic Equipment', 'Capital equipment and machines for healthcare facilities', 4)
ON CONFLICT (name) DO NOTHING;

-- Get category IDs for reference
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

  -- Aesthetic & Regenerative Medicine Products
  INSERT INTO public.products (name, category_id, subcategory, description, features, badges, is_coming_soon, display_order) VALUES
  ('Big V Lifting Thread', cat_aesthetic, 'Lifting Threads (PDO & PCL Series)', 'Premium PDO lifting threads for facial contouring and lifting procedures', ARRAY['PDO material', 'Long-lasting results', 'Minimal downtime', 'Natural-looking lift'], ARRAY['CE Certified', 'Sterile', 'Biocompatible'], false, 1),
  ('Small V Lifting Thread', cat_aesthetic, 'Lifting Threads (PDO & PCL Series)', 'Precision PDO threads for targeted facial lifting', ARRAY['Fine thread design', 'Minimal trauma', 'Quick procedure', 'Effective lifting'], ARRAY['CE Certified', 'Sterile'], false, 2),
  ('Mono Thread', cat_aesthetic, 'Lifting Threads (PDO & PCL Series)', 'Smooth mono threads for skin rejuvenation', ARRAY['Collagen stimulation', 'Skin tightening', 'Natural results', 'Safe procedure'], ARRAY['CE Certified', 'Biocompatible'], false, 3),
  ('Mona Screw Thread', cat_aesthetic, 'Lifting Threads (PDO & PCL Series)', 'Screw-type threads for enhanced volume and lift', ARRAY['Volume enhancement', 'Strong lifting effect', 'Long-lasting', 'Versatile application'], ARRAY['CE Certified', 'Sterile'], false, 4),
  ('Cog 3D Thread', cat_aesthetic, 'Lifting Threads (PDO & PCL Series)', '3D cog threads for maximum lifting power', ARRAY['Multi-directional cogs', 'Superior lifting', 'Immediate results', 'Durable'], ARRAY['CE Certified', 'Professional Grade'], false, 5),
  ('Molding Cog Thread', cat_aesthetic, 'Lifting Threads (PDO & PCL Series)', 'Specialized molding cog threads for facial contouring', ARRAY['Precise contouring', 'Strong hold', 'Natural appearance', 'Minimal scarring'], ARRAY['CE Certified', 'Sterile'], false, 6),
  
  ('PRP Tube Classic', cat_aesthetic, 'PRP & Cell Therapy Kits', 'Classic ACD + Gel formulation for platelet-rich plasma preparation', ARRAY['ACD + Gel formulation', 'Enhanced platelet concentration', 'Sterile and pyrogen-free', 'Optimal growth factor activation'], ARRAY['CE Certified', 'Sterile', 'Growth Factor'], false, 7),
  ('PRP Tube with Biotin', cat_aesthetic, 'PRP & Cell Therapy Kits', 'Advanced PRP tube with ACD + Gel + Biotin for enhanced results', ARRAY['Biotin enriched', 'Superior platelet yield', 'Hair restoration support', 'Skin rejuvenation'], ARRAY['CE Certified', 'Biotin Enhanced'], false, 8),
  ('PRP Tube Growth Factor', cat_aesthetic, 'PRP & Cell Therapy Kits', 'Premium PRP tube with concentrated growth factors', ARRAY['High growth factor concentration', 'Accelerated healing', 'Enhanced regeneration', 'Clinical grade'], ARRAY['CE Certified', 'Growth Factor', 'Premium'], false, 9),
  ('PRP Kit Complete', cat_aesthetic, 'PRP & Cell Therapy Kits', 'Complete PRP preparation kit with all necessary components', ARRAY['All-in-one solution', 'Easy to use', 'Consistent results', 'Professional grade'], ARRAY['CE Certified', 'Complete Kit'], false, 10),
  ('Prefilled Glass Syringe', cat_aesthetic, 'PRP & Cell Therapy Kits', 'Sterile prefilled glass syringes for PRP applications', ARRAY['Pre-sterilized', 'Glass construction', 'Precise measurements', 'Ready to use'], ARRAY['Sterile', 'Glass'], false, 11),
  
  ('Hydra Pen H3', cat_aesthetic, 'Micro-Needling Devices', 'Professional hydra pen for mesotherapy and skin treatments', ARRAY['Adjustable needle depth', 'Hydration delivery', 'Minimal discomfort', 'Versatile treatments'], ARRAY['Professional Grade', 'Adjustable Depth'], false, 12),
  ('Hydra Pen H5', cat_aesthetic, 'Micro-Needling Devices', 'Advanced hydra pen with enhanced features', ARRAY['5-speed settings', 'Precise control', 'Enhanced hydration', 'Professional results'], ARRAY['Professional Grade', '5 Speeds'], false, 13),
  ('Derma Pen A6', cat_aesthetic, 'Micro-Needling Devices', 'Professional derma pen for microneedling treatments', ARRAY['12-pin cartridge', 'Adjustable depth', 'Cordless operation', 'Rechargeable'], ARRAY['Professional Grade', 'Cordless'], false, 14),
  ('Derma Pen A6S', cat_aesthetic, 'Micro-Needling Devices', 'Advanced derma pen with superior performance', ARRAY['Enhanced motor', 'Quiet operation', 'Long battery life', 'Ergonomic design'], ARRAY['Professional Grade', 'Silent'], false, 15),
  ('Derma Pen A10', cat_aesthetic, 'Micro-Needling Devices', 'Premium derma pen with 10-speed control', ARRAY['10-speed settings', 'Precision control', 'Professional grade', 'Durable construction'], ARRAY['Professional Grade', '10 Speeds'], false, 16),
  ('Derma Pen M5', cat_aesthetic, 'Micro-Needling Devices', 'Compact derma pen for targeted treatments', ARRAY['Compact design', 'Easy handling', 'Effective results', 'Portable'], ARRAY['Professional Grade', 'Portable'], false, 17),
  ('Derma Pen M8', cat_aesthetic, 'Micro-Needling Devices', 'Advanced microneedling pen with 8-speed control', ARRAY['8-speed settings', 'Versatile applications', 'Professional results', 'Reliable performance'], ARRAY['Professional Grade', '8 Speeds'], false, 18),
  ('Derma Pen X5', cat_aesthetic, 'Micro-Needling Devices', 'Premium X-series derma pen', ARRAY['Advanced technology', 'Superior performance', 'Professional grade', 'Long-lasting'], ARRAY['Professional Grade', 'Premium'], false, 19),
  ('Microneedling Derma Roller', cat_aesthetic, 'Micro-Needling Devices', 'Manual derma roller for home and professional use', ARRAY['Various needle lengths', 'Easy to use', 'Cost-effective', 'Durable'], ARRAY['Multiple Sizes', 'Durable'], false, 20),
  ('Hydra Needle HN20', cat_aesthetic, 'Micro-Needling Devices', 'Specialized hydra needle for deep hydration', ARRAY['20-needle configuration', 'Deep penetration', 'Enhanced hydration', 'Professional use'], ARRAY['Professional Grade', '20 Needles'], false, 21),
  ('Hydra Roller 64 HR64', cat_aesthetic, 'Micro-Needling Devices', '64-needle hydra roller for comprehensive treatment', ARRAY['64-needle design', 'Wide coverage', 'Efficient treatment', 'Professional results'], ARRAY['Professional Grade', '64 Needles'], false, 22),
  
  ('Disposable Micro Cannula', cat_aesthetic, 'Aesthetic & Mesotherapy Needles', 'Blunt-tip micro cannulas for safe filler applications', ARRAY['Blunt tip design', 'Reduced bruising', 'Multiple lengths', 'Smooth delivery'], ARRAY['Pyrogen Free', 'Sterile', 'Blunt Tip'], false, 23),
  ('Medical Beauty Injection Needle', cat_aesthetic, 'Aesthetic & Mesotherapy Needles', 'Precision needles for aesthetic injections', ARRAY['Ultra-sharp tips', 'Various gauges', 'Minimal discomfort', 'Sterile packaging'], ARRAY['ISO Certified', 'Sterile'], false, 24),
  ('Mesotherapy Needle', cat_aesthetic, 'Aesthetic & Mesotherapy Needles', 'Specialized needles for mesotherapy treatments', ARRAY['Ethylene oxide sterilization', 'Ultra-sharp tips', 'Various gauge options', 'Minimal discomfort'], ARRAY['ISO Certified', 'Non-toxic', 'Pyrogen Free'], false, 25),
  
  ('Crystal 5 Pin Multi Needle', cat_aesthetic, 'Multi-Needle Systems', '5-pin multi-needle system for advanced treatments', ARRAY['5-pin configuration', 'Precise delivery', 'Professional grade', 'Consistent results'], ARRAY['Professional Grade', '5 Pins'], false, 26),
  ('9 Pin Multi Needle', cat_aesthetic, 'Multi-Needle Systems', '9-pin multi-needle for comprehensive coverage', ARRAY['9-pin design', 'Wide coverage', 'Efficient treatment', 'Professional use'], ARRAY['Professional Grade', '9 Pins'], false, 27),
  ('Nanosoft 3 Pin Needle', cat_aesthetic, 'Multi-Needle Systems', 'Ultra-fine 3-pin needle system', ARRAY['Nano-sized needles', 'Minimal trauma', 'Precise application', 'Gentle treatment'], ARRAY['Professional Grade', 'Nano Technology'], false, 28);

  -- Drug Delivery Systems Products
  INSERT INTO public.products (name, category_id, subcategory, description, features, badges, is_coming_soon, display_order) VALUES
  ('Reusable Insulin Pen', cat_drug_delivery, 'Injection Pens', 'Reusable pen injector for insulin delivery', ARRAY['Durable construction', 'Precise dosing', 'Easy to use', 'Cost-effective'], ARRAY['Reusable', 'Precise'], false, 29),
  ('Reusable Growth Hormone Pen', cat_drug_delivery, 'Injection Pens', 'Reusable pen for growth hormone administration', ARRAY['Accurate dosing', 'Patient-friendly', 'Long-lasting', 'Reliable'], ARRAY['Reusable', 'Medical Grade'], false, 30),
  ('Liraglutide Pen Injector', cat_drug_delivery, 'Injection Pens', 'Specialized pen for liraglutide delivery', ARRAY['Pre-calibrated', 'Easy operation', 'Portable', 'Accurate dosing'], ARRAY['Reusable', 'Calibrated'], false, 31),
  ('Semaglutide Pen Injector', cat_drug_delivery, 'Injection Pens', 'Precision pen for semaglutide administration', ARRAY['Accurate delivery', 'User-friendly', 'Portable design', 'Reliable performance'], ARRAY['Reusable', 'Precision'], false, 32),
  ('Tryweken Disposable Pen', cat_drug_delivery, 'Injection Pens', 'Single-use disposable injection pen', ARRAY['Pre-filled option', 'Convenient', 'Sterile', 'Easy disposal'], ARRAY['Disposable', 'Sterile'], false, 33),
  ('Reusable Magic Pen', cat_drug_delivery, 'Injection Pens', 'Versatile reusable injection pen', ARRAY['Multi-purpose', 'Durable', 'Easy to clean', 'Cost-effective'], ARRAY['Reusable', 'Versatile'], false, 34),
  ('Disposable Insulin Pen Needle', cat_drug_delivery, 'Pen Needles', 'Compatible needles for insulin pens', ARRAY['Universal compatibility', 'Ultra-thin', 'Pain-free', 'Sterile'], ARRAY['Disposable', 'Sterile', 'Universal'], false, 35);

  -- Medical Disposables & Accessories Products
  INSERT INTO public.products (name, category_id, subcategory, description, features, badges, is_coming_soon, display_order) VALUES
  ('IV Catheter', cat_disposables, 'Vascular Access & IV Components', 'Vein detained needle for IV access', ARRAY['Easy insertion', 'Secure fixation', 'Various sizes', 'Sterile'], ARRAY['Sterile', 'Medical Grade'], false, 36),
  ('Three-Way Stopcock', cat_disposables, 'Vascular Access & IV Components', 'Medical three-way stopcock for fluid management', ARRAY['Leak-proof', 'Easy operation', 'Durable', 'Multiple ports'], ARRAY['Medical Grade', 'Leak-Proof'], false, 37),
  ('Luer Lock Connector', cat_disposables, 'Vascular Access & IV Components', 'Secure luer lock connectors', ARRAY['Secure connection', 'Universal fit', 'Leak-proof', 'Durable'], ARRAY['Universal', 'Secure'], false, 38),
  ('Syringe with Needle', cat_disposables, 'Syringes and General Needles', 'Disposable syringes with attached needles', ARRAY['Pre-attached needle', 'Sterile', 'Various sizes', 'Single-use'], ARRAY['Disposable', 'Sterile'], false, 39),
  ('Syringe without Needle', cat_disposables, 'Syringes and General Needles', 'Disposable syringes for various applications', ARRAY['Luer lock compatible', 'Clear markings', 'Sterile', 'Multiple sizes'], ARRAY['Disposable', 'Sterile'], false, 40),
  ('Intracardiac Needle', cat_disposables, 'Syringes and General Needles', 'Specialized disposable intracardiac needle', ARRAY['Precision design', 'Sterile', 'Medical grade', 'Single-use'], ARRAY['Disposable', 'Sterile', 'Specialized'], false, 41),
  ('Biopsy Needle Tube', cat_disposables, 'Syringes and General Needles', 'Biopsy needle with collection tube', ARRAY['Tissue sampling', 'Sterile', 'Sharp cutting edge', 'Safe handling'], ARRAY['Sterile', 'Medical Grade'], false, 42),
  ('Anesthesia Needle', cat_disposables, 'Syringes and General Needles', 'Specialized needles for anesthesia delivery', ARRAY['Precise delivery', 'Various gauges', 'Sterile', 'Sharp tip'], ARRAY['Sterile', 'Medical Grade'], false, 43),
  ('Mitsubishi Needle', cat_disposables, 'Syringes and General Needles', 'Premium Mitsubishi brand needles', ARRAY['Japanese quality', 'Ultra-sharp', 'Minimal pain', 'Consistent quality'], ARRAY['Premium', 'Japanese'], false, 44),
  ('Bending Needle', cat_disposables, 'Syringes and General Needles', 'Flexible bending needles for specialized procedures', ARRAY['Flexible design', 'Precise control', 'Sterile', 'Specialized use'], ARRAY['Sterile', 'Flexible'], false, 45),
  ('Dental Endo Irrigation Needle', cat_disposables, 'Dental Needles', 'Specialized needles for dental endodontic irrigation', ARRAY['Precise irrigation', 'Flexible tip', 'Sterile', 'Dental grade'], ARRAY['Sterile', 'Dental Grade'], false, 46);

  -- Hospital & Clinic Equipment Products
  INSERT INTO public.products (name, category_id, subcategory, description, features, badges, is_coming_soon, display_order) VALUES
  ('Hospital Bed', cat_equipment, 'Hospital Furniture', 'Adjustable hospital bed for patient care', ARRAY['Electric adjustment', 'Durable frame', 'Easy cleaning', 'Patient comfort'], ARRAY['Medical Grade', 'Adjustable'], true, 47),
  ('Examination Couch', cat_equipment, 'Hospital Furniture', 'Professional examination couch', ARRAY['Adjustable height', 'Comfortable padding', 'Easy to clean', 'Durable'], ARRAY['Medical Grade', 'Adjustable'], true, 48),
  ('Blood Donor Chair', cat_equipment, 'Hospital Furniture', 'Specialized chair for blood donation', ARRAY['Reclining function', 'Comfortable design', 'Easy access', 'Durable'], ARRAY['Medical Grade', 'Reclining'], true, 49),
  ('Patient Stretcher', cat_equipment, 'Hospital Furniture', 'Mobile patient stretcher', ARRAY['Wheeled mobility', 'Adjustable height', 'Safety rails', 'Durable construction'], ARRAY['Medical Grade', 'Mobile'], true, 50),
  ('Dermatology Bed', cat_equipment, 'Hospital Furniture', 'Specialized bed for dermatology procedures', ARRAY['Adjustable positions', 'Easy cleaning', 'Patient comfort', 'Professional grade'], ARRAY['Medical Grade', 'Specialized'], true, 51),
  ('Pediatric Bed', cat_equipment, 'Hospital Furniture', 'Child-friendly pediatric bed', ARRAY['Safety rails', 'Colorful design', 'Adjustable', 'Durable'], ARRAY['Medical Grade', 'Pediatric'], true, 52),
  ('Sofa Bed', cat_equipment, 'Hospital Furniture', 'Convertible sofa bed for patient rooms', ARRAY['Dual function', 'Comfortable', 'Space-saving', 'Easy conversion'], ARRAY['Medical Grade', 'Convertible'], true, 53),
  ('Ward Screen', cat_equipment, 'Hospital Furniture', 'Privacy screens for hospital wards', ARRAY['Portable', 'Easy setup', 'Privacy protection', 'Durable'], ARRAY['Medical Grade', 'Portable'], true, 54),
  ('Medical Cabinets', cat_equipment, 'Hospital Furniture', 'Storage cabinets for medical supplies', ARRAY['Secure storage', 'Easy organization', 'Durable', 'Various sizes'], ARRAY['Medical Grade', 'Storage'], true, 55),
  ('Medical Sink', cat_equipment, 'Hospital Furniture', 'Hygienic medical sink', ARRAY['Hands-free operation', 'Easy cleaning', 'Durable', 'Hygienic'], ARRAY['Medical Grade', 'Hygienic'], true, 56),
  ('Over Bed Table', cat_equipment, 'Hospital Furniture', 'Adjustable over-bed table', ARRAY['Height adjustable', 'Wheeled', 'Easy to clean', 'Stable'], ARRAY['Medical Grade', 'Adjustable'], true, 57),
  
  ('Microneedling Machine', cat_equipment, 'Therapy & Beauty Machines', 'Professional microneedling device', ARRAY['Adjustable depth', 'Multiple speeds', 'Professional results', 'Safe operation'], ARRAY['Professional Grade', 'CE Certified'], true, 58),
  ('Hydra Facial Machine', cat_equipment, 'Therapy & Beauty Machines', 'Advanced hydra facial system', ARRAY['Multi-function', 'Deep cleansing', 'Hydration therapy', 'Professional grade'], ARRAY['Professional Grade', 'Multi-Function'], true, 59),
  ('HIFU Machine', cat_equipment, 'Therapy & Beauty Machines', 'High-intensity focused ultrasound device', ARRAY['Non-invasive lifting', 'Skin tightening', 'Professional results', 'Safe technology'], ARRAY['Professional Grade', 'Non-Invasive'], true, 60),
  ('Cryolipolysis Fat Freezing', cat_equipment, 'Therapy & Beauty Machines', 'Fat freezing machine for body contouring', ARRAY['Non-invasive', 'Effective results', 'Safe procedure', 'Professional grade'], ARRAY['Professional Grade', 'Non-Invasive'], true, 61),
  ('Slimming Machine', cat_equipment, 'Therapy & Beauty Machines', 'Multi-function slimming device', ARRAY['Body contouring', 'Cellulite reduction', 'Multiple technologies', 'Professional results'], ARRAY['Professional Grade', 'Multi-Function'], true, 62),
  ('Laser Machine', cat_equipment, 'Therapy & Beauty Machines', 'Professional laser treatment device', ARRAY['Multiple wavelengths', 'Safe operation', 'Effective results', 'Professional grade'], ARRAY['Professional Grade', 'CE Certified'], true, 63),
  ('Cryo Gun', cat_equipment, 'Therapy & Beauty Machines', 'Cryotherapy gun for targeted treatments', ARRAY['Precise cooling', 'Portable', 'Easy to use', 'Professional results'], ARRAY['Professional Grade', 'Portable'], true, 64),
  ('Electrocautery Machine', cat_equipment, 'Therapy & Beauty Machines', 'Surgical electrocautery device', ARRAY['Precise cutting', 'Hemostasis', 'Safe operation', 'Medical grade'], ARRAY['Medical Grade', 'Surgical'], true, 65),
  ('Physiotherapy Equipment', cat_equipment, 'Therapy & Beauty Machines', 'Comprehensive physiotherapy devices', ARRAY['Multiple modalities', 'Rehabilitation support', 'Professional grade', 'Effective treatment'], ARRAY['Medical Grade', 'Rehabilitation'], true, 66),
  
  ('Portable Ventilator', cat_equipment, 'Diagnostic & Respiratory', 'Portable ventilation device', ARRAY['Portable design', 'Emergency use', 'Reliable performance', 'Medical grade'], ARRAY['Medical Grade', 'Portable'], true, 67),
  ('Anesthesia Ventilator', cat_equipment, 'Diagnostic & Respiratory', 'Anesthesia ventilator machine', ARRAY['Precise control', 'Safe operation', 'Monitoring features', 'Medical grade'], ARRAY['Medical Grade', 'Anesthesia'], true, 68),
  ('Oxygen Concentrator', cat_equipment, 'Diagnostic & Respiratory', 'Medical oxygen concentrator', ARRAY['Continuous oxygen', 'Quiet operation', 'Portable options', 'Reliable'], ARRAY['Medical Grade', 'Reliable'], true, 69),
  ('CPAP/BIPAP Machine', cat_equipment, 'Diagnostic & Respiratory', 'Sleep apnea therapy devices', ARRAY['Comfortable therapy', 'Quiet operation', 'Data tracking', 'Medical grade'], ARRAY['Medical Grade', 'Sleep Therapy'], true, 70),
  ('Pulse Oximeter', cat_equipment, 'Diagnostic & Respiratory', 'Digital pulse oximeter', ARRAY['Accurate readings', 'Easy to use', 'Portable', 'Medical grade'], ARRAY['Medical Grade', 'Accurate'], true, 71),
  ('Syringe Pump', cat_equipment, 'Diagnostic & Respiratory', 'Precision syringe infusion pump', ARRAY['Accurate delivery', 'Programmable', 'Safe operation', 'Medical grade'], ARRAY['Medical Grade', 'Precision'], true, 72),
  ('Glucometer', cat_equipment, 'Diagnostic & Respiratory', 'Blood glucose monitoring system', ARRAY['Fast results', 'Accurate readings', 'Easy to use', 'Portable'], ARRAY['Medical Grade', 'Accurate'], true, 73),
  ('Digital Thermometer', cat_equipment, 'Diagnostic & Respiratory', 'Medical digital thermometer', ARRAY['Fast reading', 'Accurate', 'Easy to clean', 'Medical grade'], ARRAY['Medical Grade', 'Accurate'], true, 74),
  ('Nebulizer', cat_equipment, 'Diagnostic & Respiratory', 'Medical nebulizer for respiratory therapy', ARRAY['Effective delivery', 'Quiet operation', 'Easy to use', 'Portable'], ARRAY['Medical Grade', 'Portable'], true, 75),
  ('Diagnostic Set', cat_equipment, 'Diagnostic & Respiratory', 'Complete diagnostic instrument set', ARRAY['Multiple instruments', 'Professional grade', 'Durable', 'Complete kit'], ARRAY['Medical Grade', 'Complete Kit'], true, 76);

END $$;

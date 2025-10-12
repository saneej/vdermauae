import { HeroSection } from "@/components/home/hero-section"
import { ValuePillars } from "@/components/home/value-pillars"
import { FeaturedProducts } from "@/components/home/featured-products"
import { PPMCallout } from "@/components/home/ppm-callout"
import { CertificationsBand } from "@/components/home/certifications-band"
import { FinalCTA } from "@/components/home/final-cta"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ValuePillars />
      <FeaturedProducts />
      <PPMCallout />
      <CertificationsBand />
      <FinalCTA />
    </>
  )
}

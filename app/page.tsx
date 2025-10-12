import { HeroSection } from "@/components/home/hero-section"
import { ValuePillars } from "@/components/home/value-pillars"
import { FeaturedProducts } from "@/components/home/featured-products"
import { PPMCallout } from "@/components/home/ppm-callout"
import { CertificationsBand } from "@/components/home/certifications-band"
import { FinalCTA } from "@/components/home/final-cta"
import { FadeSection } from "@/components/fade-section"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FadeSection>
        <ValuePillars />
      </FadeSection>
      <FadeSection>
        <FeaturedProducts />
      </FadeSection>
      <FadeSection>
        <PPMCallout />
      </FadeSection>
      <FadeSection>
        <CertificationsBand />
      </FadeSection>
      <FadeSection>
        <FinalCTA />
      </FadeSection>
    </>
  )
}

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <Button asChild variant="ghost" className="mb-8">
          <Link href="/">
            <ArrowLeft className="mr-2" size={16} />
            Back to Home
          </Link>
        </Button>

        <div className="max-w-4xl mx-auto prose prose-slate dark:prose-invert">
          <h1 className="text-4xl font-bold mb-2">Terms of Service</h1>
          <p className="text-muted-foreground mb-8">Effective Date: [Insert Date]</p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
            <p>
              By using{" "}
              <a href="https://www.vdermauae.com" className="text-primary">
                www.vdermauae.com
              </a>
              , you agree to these Terms of Service ("Terms"). If you do not agree, please refrain from using this
              website.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. About Us</h2>
            <p>
              Vederma Medical Equipments LLC operates as a UAE-based supplier of certified medical and aesthetic
              devices, consumables, and maintenance services (PPM).
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. Use of Website</h2>
            <p>You agree to use our website lawfully and ethically. You must not:</p>
            <ul>
              <li>Copy, duplicate, or republish website content</li>
              <li>Attempt to breach or hack our systems</li>
              <li>Misuse the website or upload malicious code</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Product Information</h2>
            <p>
              Product specifications, images, and descriptions on this site are for reference only. We reserve the right
              to modify or discontinue products without prior notice. While we strive for accuracy, errors may
              occasionally occur.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Orders & Pricing</h2>
            <ul>
              <li>All prices are listed in AED (UAE Dirhams) unless otherwise stated.</li>
              <li>Orders are subject to availability and confirmation by Vederma.</li>
              <li>We reserve the right to cancel orders suspected of fraud or pricing errors.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. Warranty & Service</h2>
            <ul>
              <li>Products include manufacturer or distributor warranties, where applicable.</li>
              <li>Warranty validity requires correct use and maintenance according to manufacturer guidelines.</li>
              <li>PPM (Planned Preventive Maintenance) services are available under separate contracts.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">7. Intellectual Property</h2>
            <p>
              All logos, trademarks, graphics, images, and website content are the exclusive property of Vederma Medical
              Equipments LLC or its licensors. You may not reproduce, distribute, or modify any materials without prior
              written permission.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">8. Limitation of Liability</h2>
            <p>Vederma is not liable for:</p>
            <ul>
              <li>Indirect or consequential damages</li>
              <li>Losses due to misuse or improper handling of products</li>
              <li>Website downtime or data errors beyond our control</li>
            </ul>
            <p>Our total liability shall not exceed the total value of the product purchased.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">9. External Links</h2>
            <p>
              This website may contain third-party links for convenience. We do not endorse or assume responsibility for
              external sites or their content.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">10. Governing Law & Jurisdiction</h2>
            <p>
              These Terms are governed by the laws of the United Arab Emirates. Any disputes will be resolved
              exclusively in the courts of Dubai, UAE.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">11. Contact Information</h2>
            <div className="bg-muted p-6 rounded-lg">
              <p className="font-semibold mb-2">Vederma Medical Equipments LLC</p>
              <p>Office 407, ARKAN Building, Al Qusais, Dubai, UAE</p>
              <p>📞 +971 52 895 5833 · +971 55 921 0613</p>
              <p>
                ✉️{" "}
                <a href="mailto:sales@vdermauae.com" className="text-primary">
                  sales@vdermauae.com
                </a>
              </p>
              <p>
                🌐{" "}
                <a href="https://www.vdermauae.com" className="text-primary">
                  www.vdermauae.com
                </a>
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

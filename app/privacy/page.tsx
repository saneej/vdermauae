import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function PrivacyPage() {
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
          <h1 className="text-4xl font-bold mb-2">Privacy Policy</h1>
          <p className="text-muted-foreground mb-8">
            Effective Date: [Insert Date]
            <br />
            Last Updated: [Insert Date]
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
            <p>
              Welcome to Vederma Medical Equipments LLC ("Vederma", "we", "our", or "us"). We respect your privacy and
              are committed to protecting your personal information. This Privacy Policy explains how we collect, use,
              and protect data when you visit our website{" "}
              <a href="https://www.vdermauae.com" className="text-primary">
                www.vdermauae.com
              </a>
              , contact us, or use our services.
            </p>
            <p>By accessing or using our website, you agree to this Privacy Policy.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Information We Collect</h2>
            <p>We collect two types of information:</p>

            <h3 className="text-xl font-semibold mt-6 mb-3">a. Personal Information</h3>
            <p>Information you voluntarily provide, such as:</p>
            <ul>
              <li>Full name and contact details (email, phone, WhatsApp)</li>
              <li>Business or clinic name</li>
              <li>Billing and delivery addresses</li>
              <li>Inquiry or order details</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3">b. Non-Personal Information</h3>
            <p>Automatically collected data such as:</p>
            <ul>
              <li>IP address and browser type</li>
              <li>Device details and operating system</li>
              <li>Site analytics (via cookies or tracking tools)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. How We Use Your Information</h2>
            <p>We use the information to:</p>
            <ul>
              <li>Respond to inquiries and provide quotations</li>
              <li>Process product or service requests</li>
              <li>Manage maintenance (PPM) service schedules</li>
              <li>Improve our website, services, and customer experience</li>
              <li>Send updates or offers (only with your consent)</li>
              <li>Fulfill legal or regulatory requirements</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Cookies and Analytics</h2>
            <p>
              We use cookies and analytics tools (like Google Analytics) to improve site performance and personalize
              content. You can disable cookies in your browser settings, but some features may not function properly.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Data Sharing & Disclosure</h2>
            <p>We do not sell or rent your personal information. We may share information with:</p>
            <ul>
              <li>Service providers (e.g., couriers, hosting, analytics)</li>
              <li>Regulators or authorities when required by law</li>
              <li>Authorized partners or distributors (only for service fulfillment)</li>
            </ul>
            <p>All third parties are bound by confidentiality and data protection agreements.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. Data Security</h2>
            <p>
              We apply industry-standard security measures to prevent unauthorized access, alteration, or disclosure of
              your data. However, no online platform can guarantee 100% security.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">7. Your Rights</h2>
            <p>You may request to:</p>
            <ul>
              <li>Access, correct, or delete your data</li>
              <li>Withdraw marketing consent</li>
              <li>Request a copy of your personal information</li>
            </ul>
            <p>
              To exercise these rights, email us at{" "}
              <a href="mailto:sales@vdermauae.com" className="text-primary">
                sales@vdermauae.com
              </a>
              .
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">8. Data Retention</h2>
            <p>We keep your data only as long as needed for the purposes described above or as required by law.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">9. Third-Party Links</h2>
            <p>
              Our site may contain links to external websites. We are not responsible for their content or privacy
              practices.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">10. Policy Updates</h2>
            <p>
              We may update this Privacy Policy periodically. The updated version will be posted on this page with a
              revised effective date.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">11. Contact Us</h2>
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

import Link from "next/link"
import Image from "next/image"
import { Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  const productLinks = [
    { href: "/products/prp-tubes", label: "PRP Tubes" },
    { href: "/products/derma-pens", label: "Derma Pens" },
    { href: "/products/micro-cannulas", label: "Micro Cannulas" },
    { href: "/products/mesotherapy", label: "Mesotherapy Needles" },
  ]

  const companyLinks = [
    { href: "/about", label: "About Us" },
    { href: "/ppm-service", label: "PPM Service" },
    { href: "/resources", label: "Resources" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <footer className="bg-muted/30 border-t">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo%20colour-FhZbsnxDsRXZDF0jpSSVp5l6EKtPN5.png"
              alt="Vederma Medical Equipment Trading LLC - Medical Equipment Supplier UAE"
              width={180}
              height={40}
              className="h-8 w-auto"
            />
            <p className="text-sm text-muted-foreground leading-relaxed">
              Innovate to elevate care with premium medical equipment and supplies.
            </p>
            <div className="flex items-center">
              <Image
                src="/images/dermi-care-logo.png"
                alt="Dermi Care - Aesthetic Devices Dubai"
                width={120}
                height={40}
                className="h-8 w-auto"
              />
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Products</h3>
            <ul className="space-y-3">
              {productLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Company</h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <Mail size={16} className="mt-0.5 text-primary flex-shrink-0" />
                <a href="mailto:info@vdermauae.com" className="hover:text-primary transition-colors">
                  info@vdermauae.com
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <Phone size={16} className="mt-0.5 text-primary flex-shrink-0" />
                <a href="tel:+971528955833" className="hover:text-primary transition-colors">
                  +971 52 895 5833
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin size={16} className="mt-0.5 text-primary flex-shrink-0" />
                <span>Dubai, United Arab Emirates</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-border/50">
        <div className="container mx-auto px-4 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} Vederma Medical Equipment Trading LLC. All rights reserved.</p>

            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
              <Link href="/privacy" className="hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-primary transition-colors">
                Terms of Service
              </Link>
              <span className="hidden md:inline text-border">|</span>
              <a
                href="https://instagram.com/heysaneej"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                From the desk of <span className="font-medium text-primary">Saneejified</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

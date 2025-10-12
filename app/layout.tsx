import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Suspense } from "react"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://vdermauae.com"),
  title: {
    default: "Vederma Medical Equipment Trading LLC | Medical Equipment Supplier UAE | Innovate to Elevate Care",
    template: "%s | Vederma Medical UAE",
  },
  description:
    "Leading medical equipment supplier in UAE. Premium aesthetic devices, PRP tubes, derma pens, micro-cannulas, and clinical instruments in Dubai. ISO certified medical equipment with PPM maintenance service.",
  keywords: [
    "medical equipment supplier UAE",
    "aesthetic devices Dubai",
    "PRP tubes UAE",
    "derma pen distributor",
    "clinical instruments Dubai",
    "Vederma UAE",
    "PPM maintenance service",
    "ISO certified medical equipment",
    "PRF centrifuge UAE",
    "mesotherapy needles Dubai",
    "micro cannulas UAE",
    "medical beauty equipment",
    "dermatology supplies UAE",
  ],
  authors: [{ name: "Vederma Medical Equipments LLC" }],
  creator: "Vederma Medical Equipments LLC",
  publisher: "Vederma Medical Equipments LLC",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_AE",
    url: "https://vdermauae.com",
    siteName: "Vederma Medical Equipment Trading LLC",
    title: "Vederma Medical Equipment Trading LLC | Medical Equipment Supplier UAE",
    description:
      "Leading medical equipment supplier in UAE. Premium aesthetic devices, PRP tubes, derma pens, and clinical instruments in Dubai.",
    images: [
      {
        url: "/images/logo-color.png",
        width: 1200,
        height: 630,
        alt: "Vederma Medical Equipment Trading LLC",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vederma Medical Equipment Trading LLC | Medical Equipment Supplier UAE",
    description: "Leading medical equipment supplier in UAE. Premium aesthetic devices and clinical instruments.",
    images: ["/images/logo-color.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://vdermauae.com",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "@id": "https://vdermauae.com/#organization",
    name: "Vederma Medical Equipments LLC",
    alternateName: "Vederma UAE",
    url: "https://vdermauae.com",
    logo: "https://vdermauae.com/images/logo-color.png",
    description:
      "Leading medical equipment supplier in UAE specializing in aesthetic devices, PRP tubes, derma pens, and clinical instruments.",
    email: "info@vdermauae.com",
    telephone: "+971528955833",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Dubai",
      addressCountry: "AE",
      addressRegion: "Dubai",
    },
    areaServed: {
      "@type": "Country",
      name: "United Arab Emirates",
    },
    sameAs: ["https://instagram.com/heysaneej"],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Medical Equipment Products",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Product",
            name: "PRP Tubes",
            description: "Premium PRP tubes for platelet-rich plasma therapy",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Product",
            name: "Derma Pens",
            description: "Professional derma pens for microneedling treatments",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Product",
            name: "Micro Cannulas",
            description: "High-quality micro cannulas for aesthetic procedures",
          },
        },
      ],
    },
  }

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://vdermauae.com/#localbusiness",
    name: "Vederma Medical Equipments LLC",
    image: "https://vdermauae.com/images/logo-color.png",
    telephone: "+971528955833",
    email: "info@vdermauae.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Dubai",
      addressLocality: "Dubai",
      addressCountry: "AE",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "25.2048",
      longitude: "55.2708",
    },
    url: "https://vdermauae.com",
    priceRange: "$$",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
    ],
  }

  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="icon" type="image/png" sizes="32x32" href="/images/icon.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/images/icon.png" />
        <link rel="apple-touch-icon" href="/images/icon.png" />
        <link rel="shortcut icon" href="/images/icon.png" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
        <link rel="canonical" href="https://vdermauae.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <script src="https://cdn.jsdelivr.net/npm/@studio-freight/lenis@1.0.42/dist/lenis.min.js" defer />
      </head>
      <body className="font-sans antialiased">
        <Suspense fallback={<div>Loading...</div>}>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </Suspense>
        <Analytics />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.addEventListener('load', function() {
                // Check for reduced motion preference
                const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
                
                if (typeof Lenis !== 'undefined' && !prefersReducedMotion) {
                  const lenis = new Lenis({
                    duration: 1.2,
                    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
                    direction: 'vertical',
                    gestureDirection: 'vertical',
                    smooth: true,
                    smoothTouch: false,
                    touchMultiplier: 2,
                    infinite: false,
                    lerp: 0.1,
                    wheelMultiplier: 1,
                  });

                  function raf(time) {
                    lenis.raf(time);
                    requestAnimationFrame(raf);
                  }

                  requestAnimationFrame(raf);

                  // Sync with anchor links for smooth navigation
                  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                    anchor.addEventListener('click', function (e) {
                      const href = this.getAttribute('href');
                      if (href && href !== '#') {
                        e.preventDefault();
                        const target = document.querySelector(href);
                        if (target) {
                          lenis.scrollTo(target, { offset: -80, duration: 1.5 });
                        }
                      }
                    });
                  });

                  // Handle browser back/forward navigation
                  window.addEventListener('popstate', () => {
                    if (window.location.hash) {
                      const target = document.querySelector(window.location.hash);
                      if (target) {
                        lenis.scrollTo(target, { offset: -80, duration: 1.5 });
                      }
                    }
                  });

                  // Expose lenis globally for debugging and external control
                  window.lenis = lenis;
                  
                  // Add lenis class to html for CSS targeting
                  document.documentElement.classList.add('lenis', 'lenis-smooth');
                }
              });
            `,
          }}
        />
      </body>
    </html>
  )
}

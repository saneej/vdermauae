import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, MessageCircle } from "lucide-react"

export function FinalCTA() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-primary to-accent p-12 lg:p-20 text-center">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />

          <div className="relative z-10 max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold text-white text-balance">Ready to Elevate Your Practice?</h2>
            <p className="text-xl text-white/90 leading-relaxed">
              Join hundreds of healthcare professionals who trust Vederma Medical for their equipment needs. Get started
              with a personalized consultation today.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-0.5"
              >
                <Link href="/contact">
                  Request a Quote
                  <ArrowRight className="ml-2" size={20} />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-white/10 border-white/20 text-white hover:bg-white/20 backdrop-blur-sm"
              >
                <Link href="https://wa.me/971528955833" target="_blank">
                  <MessageCircle className="mr-2" size={20} />
                  WhatsApp Us
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

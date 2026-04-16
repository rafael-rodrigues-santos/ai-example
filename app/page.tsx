import { Header } from "@/components/landing/header"
import { HeroSection } from "@/components/landing/hero-section"
import { SocialProof } from "@/components/landing/social-proof"
import { FeaturesSection } from "@/components/landing/features-section"
import { PricingSection } from "@/components/landing/pricing-section"
import { FaqSection } from "@/components/landing/faq-section"
import { FooterCta, Footer } from "@/components/landing/footer-cta"
import { FadeInSection } from "@/components/landing/fade-in-section"

export default function LandingPage() {
  return (
    <main id="main-content" className="min-h-screen">
      <Header />
      <FadeInSection>
        <HeroSection />
      </FadeInSection>
      <section id="depoimentos" className="scroll-mt-16 md:scroll-mt-20">
        <FadeInSection>
          <SocialProof />
        </FadeInSection>
      </section>
      <section id="modulos" className="scroll-mt-16 md:scroll-mt-20">
        <FadeInSection>
          <FeaturesSection />
        </FadeInSection>
      </section>
      <section id="precos" className="scroll-mt-16 md:scroll-mt-20">
        <FadeInSection>
          <PricingSection />
        </FadeInSection>
      </section>
      <section id="faq" className="scroll-mt-16 md:scroll-mt-20">
        <FadeInSection>
          <FaqSection />
        </FadeInSection>
      </section>
      <FadeInSection>
        <FooterCta />
      </FadeInSection>
      <Footer />
    </main>
  )
}

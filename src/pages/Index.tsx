import HeroSection from '@/components/HeroSection'
import AboutSection from '@/components/AboutSection'
import BenefitsSection from '@/components/BenefitsSection'
import PricingSection from '@/components/PricingSection'
import QASection from '@/components/QASection'
import Footer from '@/components/Footer'

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      
      <div className="section-separator" />
      
      <AboutSection />
      
      <div className="section-separator" />
      
      <BenefitsSection />
      
      <div className="section-separator" />
      
      <PricingSection />
      
      <div className="section-separator" />
      
      <QASection />
      
      <Footer />
    </div>
  )
}
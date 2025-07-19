import HeroSection from "@/components/HeroSection";
import QASection from "@/components/QASection";
import CourseSection from "@/components/CourseSection";
import EmploymentSection from "@/components/EmploymentSection";
import PricingSection from "@/components/PricingSection";
import BenefitsSection from "@/components/BenefitsSection";
import ContactForm from "@/components/ContactForm";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <QASection />
      <CourseSection />
      <EmploymentSection />
      <PricingSection />
      <BenefitsSection />
      <ContactForm />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Index;

import HeroSection from "@/components/home/HeroSection";
import FeaturedProperties from "@/components/home/FeaturedProperties";
import ClientIdentification from "@/components/home/ClientIdentification";
import ProblemSection from "@/components/home/ProblemSection";
import SolutionSection from "@/components/home/SolutionSection";
import HowItWorks from "@/components/home/HowItWorks";
import BenefitsSection from "@/components/home/BenefitsSection";
import DifferentiatorSection from "@/components/home/DifferentiatorSection";
import MaintenanceHighlight from "@/components/home/MaintenanceHighlight";
import SocialProofSection from "@/components/home/SocialProofSection";
import PricingSection from "@/components/home/PricingSection";
import FAQSection from "@/components/home/FAQSection";
import FinalCTA from "@/components/home/FinalCTA";
import SEOHead from "@/components/SEOHead";


const jsonLd = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  name: "DEVERI",
  legalName: "Inmobiliaria Deveri S.A. de C.V.",
  url: "/",
  description:
    "Administración, renta y mantenimiento de propiedades en Veracruz, Boca del Río, Medellín y Riviera Veracruzana. Más de 25 años de experiencia.",
  areaServed: ["Veracruz", "Boca del Río", "Medellín", "Riviera Veracruzana"],
  telephone: "+522296840727",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Boca del Río",
    addressRegion: "Veracruz",
    addressCountry: "MX",
  },
};

const Index = () => (
  <>
    <SEOHead
      title="Administración de propiedades en Veracruz | DEVERI"
      description="Olvídate de gestionar tu propiedad. En DEVERI administramos, rentamos y damos mantenimiento con más de 25 años de experiencia en Veracruz y Boca del Río."
      jsonLd={jsonLd}
    />
    <HeroSection />
    <ClientIdentification />
    <ProblemSection />
    <SolutionSection />
    <HowItWorks />
    <BenefitsSection />
    <DifferentiatorSection />
    <MaintenanceHighlight />
    <SocialProofSection />
    <PricingSection />
    <FAQSection />
    <FinalCTA />
  </>
);

export default Index;

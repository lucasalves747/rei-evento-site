import { HeroSection } from "@/components/HeroSection";
import { TargetAudienceSection } from "@/components/TargetAudienceSection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { ProblemaSection } from "@/components/ProblemaSection";
import { PricingSection } from "@/components/PricingSection";
import { MentorSection } from "@/components/MentorSection";
import { ModulesSection} from "@/components/ModulesSection";
import { MetodoSection } from "@/components/MetodoSection";
import { FAQSection } from "@/components/FAQSection";
import { ChoiceSection } from "@/components/ChoiceSection";
import { Footer } from "@/components/Footer";
import { Helmet } from "react-helmet";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Método REI 26 - Transforme Sua Vida em 2 Dias | Lisboa</title>
        <meta 
          name="description" 
          content="Participe do Método REI 26 em Lisboa nos dias 13 e 14 de Dezembro. Uma metodologia única para ativar sua identidade e prosperar em todas as áreas da vida. Mais de 140 turmas realizadas." 
        />
        <meta name="keywords" content="desenvolvimento pessoal, transformação, liderança, propósito, método rei, lisboa, evento" />
      </Helmet>
      
      <main className="min-h-screen">
        <HeroSection /> 
        <TargetAudienceSection />
        <BenefitsSection />
        <ProblemaSection />
        <ModulesSection/>
        <MetodoSection />
        <MentorSection />
        <ChoiceSection />
        <PricingSection />
        <FAQSection />
        <Footer />
      </main>
    </>
  );
};

export default Index;

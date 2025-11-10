import { CheckCircle2 } from "lucide-react";

const benefits = [
  "Clareza absoluta sobre sua identidade e propósito de vida",
  "Estratégias práticas para prosperar em todas as áreas: pessoal, profissional, familiar e financeira",
  "Ferramentas comprovadas para tomada de decisões alinhadas com seus valores",
  "Métodos para superar crenças limitantes e padrões de autosabotagem",
  "Networking com pessoas de alto nível em processo de transformação",
  "Plano de ação personalizado para os próximos 90 dias",
  "Acesso vitalício à comunidade exclusiva de alunos do Método REI",
  "Certificação reconhecida internacionalmente",
];

export const BenefitsSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              O Que Você Vai <span className="text-primary">Aprender</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Em 2 dias intensivos, você terá acesso a uma metodologia completa que já transformou milhares de vidas
            </p>
          </div>

          <div className="space-y-4">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="flex gap-4 items-start p-4 rounded-lg hover:bg-card transition-colors duration-300"
              >
                <div className="flex-shrink-0 mt-1">
                  <CheckCircle2 className="w-6 h-6 text-primary" />
                </div>
                <p className="text-foreground">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";

const includes = [
  "2 dias completos de imersão presencial",
  "Material didático exclusivo (workbook + ferramentas)",
  "Coffee breaks e almoços incluídos",
  "Certificado de conclusão internacional",
  "Acesso vitalício à comunidade exclusiva",
  "6 meses de mentoria em grupo online",
  "Acesso a masterclasses mensais",
  "Suporte direto da equipe por 90 dias",
];

export const PricingSection = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Investimento na Sua <span className="text-primary">Transformação</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Um investimento que retorna multiplicado em todas as áreas da sua vida
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="p-8 lg:p-12 bg-card border-2 border-primary/50 relative overflow-hidden">
            {/* Badge */}
            <div className="absolute top-6 right-6 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-bold">
              VAGAS LIMITADAS
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Pricing */}
              <div className="space-y-6">
                <div>
                  <div className="text-muted-foreground line-through text-2xl mb-2">
                    €4.997
                  </div>
                  <div className="text-6xl font-bold text-primary mb-2">
                    €2.997
                  </div>
                  <p className="text-muted-foreground">
                    ou 12x de €249,75 sem juros
                  </p>
                </div>

                <div className="pt-6 border-t border-border">
                  <p className="text-sm text-muted-foreground mb-4">
                    🎁 BÔNUS EXCLUSIVO: Inscreva-se hoje e ganhe:
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-primary flex-shrink-0" />
                      <span>Sessão 1-on-1 de 60min com mentor sênior</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-primary flex-shrink-0" />
                      <span>Pacote de 3 audiobooks sobre transformação</span>
                    </li>
                  </ul>
                </div>

                <Button variant="hero" size="lg" className="w-full text-lg py-6 h-auto">
                  GARANTIR MINHA VAGA
                </Button>

                <p className="text-xs text-center text-muted-foreground">
                  ✓ Garantia de satisfação de 7 dias<br />
                  ✓ Pagamento 100% seguro
                </p>
              </div>

              {/* What's Included */}
              <div>
                <h3 className="text-2xl font-bold mb-6">O Que Está Incluído:</h3>
                <div className="space-y-3">
                  {includes.map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Card>

          {/* Trust indicators */}
          <div className="mt-8 flex flex-wrap justify-center gap-8 text-center text-sm text-muted-foreground">
            <div>
              <div className="text-2xl font-bold text-primary">140+</div>
              <div>Turmas Realizadas</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary">5000+</div>
              <div>Vidas Transformadas</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary">98%</div>
              <div>Satisfação</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

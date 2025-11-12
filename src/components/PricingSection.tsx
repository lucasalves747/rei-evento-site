import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";

const includes = [
  "2 dias de imersão intensiva com Nezio Monteiro",
  "Sessão de acompanhamento pós-evento de 21 dias",

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


            <div className="grid lg:grid-cols-2 gap-12">
              {/* Pricing */}
              <div className="space-y-6">
                <div>
                  <div className="text-2xl mb-2">
                    GARANTIA <span className="text-primary">MÉTODO IP </span> 
                    Se após o primeiro dia de imersão você sentir que o método não está alinhado com suas expectativas, basta nos comunicar e <span className="text-primary"> devolveremos 100% </span>do seu investimento - sem perguntas, sem burocracia.

                    Assumimos todo o risco porque <span className="text-primary"> SABEMOS </span> o poder de transformação do MétodoIP.
                  </div>


                </div>

                <div className="pt-6 border-t border-border">


                </div>

                <Button variant="hero" size="lg" className="w-full text-lg py-6 h-auto">
                  GARANTIR MINHA VAGA
                </Button>


              </div>

              {/* What's Included */}
              <div>
                <h3 className="text-2xl font-bold mb-6">O QUE VOCÊ VAI

                  RECEBER:</h3>
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
          
        </div>
      </div>
    </section>
  );
};

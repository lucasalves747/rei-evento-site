import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";

const includes = [
  "2 dias de imersão intensiva com Nezio Monteiro",
  "Sessão de acompanhamento pós-evento de 21 dias",
];

export const PricingSection = () => {
  return (
    <section className="py-20 sm:py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 px-2">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
            Investimento na Sua <span className="text-primary">Transformação</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground">
            Um investimento que retorna multiplicado em todas as áreas da sua vida
          </p>
        </div>

        {/* Card */}
        <div className="max-w-5xl mx-auto">
          <Card className="p-6 sm:p-8 lg:p-12 bg-card border-2 border-primary/50 relative overflow-hidden backdrop-blur-sm">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              {/* Pricing Info */}
              <div className="space-y-6">
                <div>
                  <p className="text-base sm:text-lg lg:text-2xl leading-relaxed text-foreground">
                    GARANTIA <span className="text-primary font-semibold">MÉTODO IP</span> — 
                    se após o primeiro dia de imersão você sentir que o método não está 
                    alinhado com suas expectativas, basta nos comunicar e 
                    <span className="text-primary font-semibold"> devolveremos 100%</span> 
                    do seu investimento — sem perguntas, sem burocracia.
                  </p>
                  <p className="mt-4 text-base sm:text-lg text-muted-foreground">
                    Assumimos todo o risco porque <span className="text-primary font-semibold">sabemos</span> 
                    o poder de transformação do Método IP.
                  </p>
                </div>

                <div className="pt-4 border-t border-border" />

                <div className="flex justify-center lg:justify-start">
                  <Button
                    variant="hero"
                    size="lg"
                    className="text-base sm:text-lg px-8 sm:px-12 py-4 sm:py-6 h-auto animate-glow w-full sm:w-auto"
                  >
                    QUERO ENTRAR NO MÉTODO IP
                  </Button>
                </div>
              </div>

              {/* What's Included */}
              <div>
                <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-center lg:text-left">
                  O QUE VOCÊ VAI RECEBER:
                </h3>
                <div className="space-y-3">
                  {includes.map((item, index) => (
                    <div key={index} className="flex items-start gap-3 text-sm sm:text-base">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

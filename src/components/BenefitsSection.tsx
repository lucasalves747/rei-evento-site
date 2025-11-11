import { CheckCircle2, TrendingUp, Users, Zap } from "lucide-react";
import { Card } from "./ui/card";

const audiences = [
  {
    icon: TrendingUp,
    title: "Mas, quando você muda a forma como se enxerga, tudo muda:",
    description: `° Suas escolhas mudam.
    ° Seu ambiente muda.
    ° Seus resultados começam a aparecer.
    
    A maioria carrega uma história que nem escolheu.
É a voz do pai, da escola, da religião, da sociedade…
Mas tem quem decide parar de repetir o passado dos outros. E começa a escrever a própria história.`,
  },
];

export const BenefitsSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Sabe o que separa quem vive no automático de quem <span className="text-primary">constrói algo grande de verdade</span> aqui nos EUA?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Não é dinheiro. Nem sorte. Nem diploma. <br /><br />

              É a forma como a pessoa se enxerga. Se você se vê pequeno, perdido, inseguro… Vai continuar tomando decisões que te mantêm exatamente aí.
            </p>
          </div>

          <div className="gap-6">
            {audiences.map((audience, index) => {
              const Icon = audience.icon;
              return (
                <Card
                  key={index}
                  className="p-6 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{audience.title}</h3>
                  <p className="text-muted-foreground whitespace-pre-line ">{audience.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
        <div className="text-center max-w-3xl mx-auto mb-16 mt-20">
        
          <p className="text-lg text-white">
            E você? Vai continuar vivendo no que te deram… ou vai assumir o que é seu de verdade?
          </p>
        </div>
      </div>
    </section>
  );
};

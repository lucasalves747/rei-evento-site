import { Card } from "@/components/ui/card";
import { Target, TrendingUp, Users, Zap } from "lucide-react";

const audiences = [
  {
    icon: TrendingUp,
    title: "Empreendedores",
    description: "Que desejam levar seus negócios a um novo patamar através do autoconhecimento e estratégia",
  },
  {
    icon: Users,
    title: "Líderes",
    description: "Que querem impactar positivamente suas equipes e organizações com liderança autêntica",
  },
  {
    icon: Target,
    title: "Profissionais",
    description: "Em busca de propósito, clareza de direção e resultados extraordinários na carreira",
  },
  {
    icon: Zap,
    title: "Pessoas em Transformação",
    description: "Prontas para ativar seu potencial máximo e criar uma vida de significado e abundância",
  },
];

export const TargetAudienceSection = () => {
  return (
    <section className="py-24 bg-dark-surface">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Para Quem é o <span className="text-primary">Método REI</span>?
          </h2>
          <p className="text-lg text-muted-foreground">
            Este evento é para você que está pronto para transformar sua vida em todas as dimensões
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                <p className="text-muted-foreground">{audience.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

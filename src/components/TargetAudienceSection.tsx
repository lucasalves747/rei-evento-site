import { Card } from "@/components/ui/card";
import { Target, TrendingUp, Users, Zap } from "lucide-react";

const audiences = [
  {
    icon: TrendingUp,
    title: "Empreendedores",
    description: "Homens que estavam cansados de correr o dia inteiro… e hoje têm empresa funcionando com mais leveza e lucro.",
  },
  {
    icon: Users,
    title: "Líderes",
    description: "Empresários que estavam travados, e depois de 2 dias no IP destravaram o crescimento que estava empacado há anos.",
  },
  
  {
    icon: Zap,
    title: "Pessoas em Transformação",
    description: "Pais de família que carregavam tudo sozinhos… e hoje têm clareza, energia e estão construindo uma nova fase — por dentro e por fora.",
  },
];

export const TargetAudienceSection = () => {
  return (
    <section className="py-24 bg-dark-surface">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Gente como você que
decidiu<span className="text-primary"> virar a chave:</span>
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

import { Card } from "@/components/ui/card";
import { TrendingUp, Users, Zap } from "lucide-react";
import { Button } from "./ui/button";


const audiences = [
  {
    icon: TrendingUp,

    description: "A verdade é que não é falta de esforço. É que tem algo te travando por dentro — e você sente isso.",
  },
  {
    icon: Users,

    description: "Até quem vive com você enxerga: Tem uma versão sua mais forte, mais confiante, pronta pra sair",
  },

  {
    icon: Zap,

    description: "E talvez... o que você precisa agora não é mais conteúdo. É destravar o quejá está aí dentro",
  },
];

export const ProblemaSection = () => {
  return (
    <section className="py-24 bg-dark-surface">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Você já percebeu que <span className="text-primary"> trabalha como nunca</span>, mas o resultado não acompanha?
          </h2>
          <p className="text-lg text-muted-foreground">
            Você estuda, tenta mudar a rotina, até começa algo novo… Mas sempre volta pro mesmo ponto. Dois passos pra frente, um pra trás.
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

                <p className="text-muted-foreground">{audience.description}</p>
              </Card>
            );
          })}
        </div>
        <br/>
        <br/>
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Chegou a hora de <span className="text-primary"> parar de sobreviver e começar a governar</span>sua própria vida.
            </h2>
            <br/>
            <br/>
            <br/>
             <Button variant="hero" size="lg" className="text-lg px-12 py-6 h-auto">
              QUERO ENTRAR NO MÉTODO IP
            </Button></div></div>
      </div>
    </section>
  );
};

import { Card } from "@/components/ui/card";
import { Award, BookOpen, Users, TrendingUp } from "lucide-react";

const achievements = [
  {
    icon: Award,
    value: "20+",
    label: "Anos de Experiência",
  },
  {
    icon: Users,
    value: "5000+",
    label: "Pessoas Impactadas",
  },
  {
    icon: BookOpen,
    value: "3",
    label: "Livros Publicados",
  },
  {
    icon: TrendingUp,
    value: "140+",
    label: "Turmas Realizadas",
  },
];

export const MentorSection = () => {
  return (
    <section className="py-24 bg-dark-surface">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Conheça o <span className="text-primary">Mentor</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Um especialista dedicado à transformação de vidas
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Image placeholder */}
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-transparent border-2 border-primary/30 overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center text-primary/40">
                <Users className="w-32 h-32" />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold mb-2">João Silva</h3>
              <p className="text-primary text-lg">Fundador do Método REI</p>
            </div>

            <div className="space-y-4 text-muted-foreground">
              <p>
                Com mais de duas décadas de experiência em desenvolvimento pessoal e liderança, João Silva é reconhecido internacionalmente como um dos maiores especialistas em transformação humana.
              </p>
              <p>
                Formado em Psicologia pela Universidade de Lisboa, com especialização em Neurociência Comportamental em Harvard, João desenvolveu o Método REI após estudar e aplicar as melhores práticas de desenvolvimento humano em mais de 30 países.
              </p>
              <p>
                Autor de 3 livros bestsellers sobre propósito e realização, já impactou mais de 5.000 pessoas através de seus programas presenciais e mentorias, ajudando-as a alcançar resultados extraordinários em suas vidas pessoais e profissionais.
              </p>
            </div>

            {/* Achievements */}
            <div className="grid grid-cols-2 gap-4 pt-6">
              {achievements.map((achievement, index) => {
                const Icon = achievement.icon;
                return (
                  <Card key={index} className="p-4 bg-card border-border text-center">
                    <Icon className="w-8 h-8 text-primary mx-auto mb-2" />
                    <div className="text-2xl font-bold text-primary">{achievement.value}</div>
                    <div className="text-sm text-muted-foreground">{achievement.label}</div>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

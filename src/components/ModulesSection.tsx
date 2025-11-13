import { Card } from "@/components/ui/card";

const modules = [
  {
    number: "01",
    description: "Você acorda. Corre. Trabalha. Faz o que tem que ser feito, mas no fundo… sente que está só apagando incêndio.",
  },
  {
    number: "02",
    description: "Suas ideias ficam no papel. Sempre tem algo 'urgente' atrapalhando o importante.",
  },
  {
    number: "03",
    description: "Você se esforça, mas parece que está girando em círculos. Nada realmente avança.",
  },
  {
    number: "04",
    description: "Quando pensa na vida que queria estar vivendo... Vem um aperto no peito.",
  },
];

const modules2 = [
  {
    number: "01",
    description: "Você vai acordar com leveza — sabendo o que quer, o que fazer e por que fazer.",
  },
  {
    number: "02",
    description: "Vai parar de duvidar de si mesmo e começar a agir com confiança.",
  },
  {
    number: "03",
    description: "Vai aprender a controlar sua mente e suas emoções até nos piores dias — sem mais sabotagem, sem mais paralisia.",
  },
  {
    number: "04",
    description: "Vai estar cercado de gente que pensa grande, te impulsiona e te lembra todo dia que você veio pros EUA pra crescer — não pra sobreviver.",
  },
];

export const ModulesSection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-12 bg-dark-surface">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-start max-w-7xl mx-auto">
        {/* Coluna 1 */}
        <div>
          <div className="text-center lg:text-left max-w-3xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 leading-tight">
              ONDE VOCÊ ESTÁ AGORA, <br />
              <span className="text-primary">E NEM PERCEBEU</span>
            </h2>
          </div>

          <div className="flex flex-col gap-6">
            {modules.map((module) => (
              <Card
                key={module.number}
                className="p-6 bg-card/80 border border-border hover:border-primary/70 
                           transition-all duration-300 group backdrop-blur-sm"
              >
                <div className="flex items-start gap-4 mb-2">
                  <div className="text-5xl sm:text-6xl font-bold text-primary/70 group-hover:text-primary/70 transition-colors">
                    {module.number}
                  </div>
                </div>
                <p className="text-sm sm:text-base text-white leading-relaxed">
                  {module.description}
                </p>
              </Card>
            ))}
          </div>
        </div>

        {/* Coluna 2 */}
        <div>
          <div className="text-center lg:text-left max-w-3xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 leading-tight">
              ONDE VOCÊ ESTARÁ <br />
              <span className="text-primary">DEPOIS DO MÉTODO IP:</span>
            </h2>
          </div>

          <div className="flex flex-col gap-6">
            {modules2.map((module) => (
              <Card
                key={module.number}
                className="p-6 bg-card/80 border border-border hover:border-primary/70 
                           transition-all duration-300 group backdrop-blur-sm"
              >
                <div className="flex items-start gap-4 mb-2">
                  <div className="text-5xl sm:text-6xl font-bold text-primary/70 group-hover:text-primary/70 transition-colors">
                    {module.number}
                  </div>
                </div>
                <p className="text-sm sm:text-base text-white leading-relaxed">
                  {module.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

import { Card } from "@/components/ui/card";

const modules = [
  {
    number: "01",
    title: "Identidade & Propósito",
    description: "Descubra quem você realmente é, seus valores essenciais e o propósito que guiará todas as suas decisões.",
    topics: ["Mapa de Identidade", "Valores Fundamentais", "Missão de Vida"],
  },
  {
    number: "02",
    title: "Visão & Estratégia",
    description: "Crie uma visão clara e inspiradora do seu futuro e desenvolva a estratégia para alcançá-la.",
    topics: ["Visão de 10 Anos", "Objetivos Trimestrais", "Plano de Ação"],
  },
  {
    number: "03",
    title: "Mentalidade de Alto Desempenho",
    description: "Reprograme crenças limitantes e desenvolva os hábitos mentais dos grandes realizadores.",
    topics: ["Padrões de Pensamento", "Gestão Emocional", "Resiliência"],
  },
  {
    number: "04",
    title: "Prosperidade Integral",
    description: "Aprenda a prosperar em todas as áreas: saúde, relacionamentos, carreira e finanças.",
    topics: ["Roda da Vida", "Equilíbrio Dinâmico", "Abundância Sustentável"],
  },
  {
    number: "05",
    title: "Liderança & Influência",
    description: "Desenvolva sua capacidade de liderar a si mesmo e inspirar outros a alcançar resultados extraordinários.",
    topics: ["Auto-liderança", "Comunicação Impactante", "Influência Positiva"],
  },
  {
    number: "06",
    title: "Execução & Resultados",
    description: "Transforme conhecimento em ação com sistemas práticos de produtividade e execução consistente.",
    topics: ["Sistema de Execução", "Métricas de Sucesso", "Accountability"],
  },
];

export const ModulesSection = () => {
  return (
    <section className="py-24 bg-dark-surface">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Módulos do <span className="text-primary">Método REI</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Um programa completo estruturado em 6 módulos fundamentais
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {modules.map((module) => (
            <Card 
              key={module.number}
              className="p-8 bg-card border-border hover:border-primary transition-all duration-300 group"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="text-6xl font-bold text-primary/20 group-hover:text-primary/40 transition-colors">
                  {module.number}
                </div>
              </div>
              
              <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                {module.title}
              </h3>
              
              <p className="text-muted-foreground mb-6">
                {module.description}
              </p>

              <div className="space-y-2">
                {module.topics.map((topic, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                    <span className="text-foreground">{topic}</span>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

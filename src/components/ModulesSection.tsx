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
    
  }
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
    
  }
];

export const ModulesSection = () => {
  return (
    <section className="py-24 bg-dark-surface grid lg:grid-cols-2 gap-12 items-center ">
      <div className="container  mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className=" text-2xl lg:text-3xl font-bold mb-4">
            ONDE VOCÊ ESTÁ AGORA,
            <span className="text-primary"> E NEM PERCEBEU</span>
          </h2>
          
        </div>

        <div className="gap-8">
          {modules.map((module) => (
            <Card 
              key={module.number}
              className="p-4 ml-10 mr-10 mt-1 bg-card border-border hover:border-primary transition-all duration-300 group"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="text-6xl font-bold text-primary/20 group-hover:text-primary/40 transition-colors">
                  {module.number}
                </div>
              </div>
              
             
              
              <p className="text-muted-foreground mb-6">
                {module.description}
              </p>

              
            </Card>
          ))}
        </div>
      </div>

      <div className="container  mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className=" text-2xl lg:text-3xl font-bold mb-6">
           ONDE VOCÊ ESTARÁ 
            <span className="text-primary"> DEPOIS </span>DO MÉTODO IP:
          </h2>
          
        </div>

        <div className="gap-8">
          {modules2.map((module) => (
            <Card 
              key={module.number}
              className="p-4 ml-10 mr-10 mt-1 bg-card border-border hover:border-primary transition-all duration-300 group"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="text-6xl font-bold text-primary/20 group-hover:text-primary/40 transition-colors">
                  {module.number}
                </div>
              </div>
              
             
              
              <p className="text-muted-foreground mb-6">
                {module.description}
              </p>

              
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

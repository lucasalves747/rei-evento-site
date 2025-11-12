import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TypeAnimation } from "react-type-animation";

const metodoData = [
  {
    title: "COMO DEIXAR DE SER ALIENADO",
    topics: [
      "Mentiras que te contaram",
      "Saia do ritmo hipnótico",
      "Como fazer perguntas",
      "Liberdade",
      "Deixe de ser idiota",
      "O Câncer das famílias",
      "Improdutividade"
    ]
  },
  {
    title: "O PIOR ANO DA SUA VIDA",
    topics: [
      "Crie problemas",
      "Ame os problemas",
      "Fracasse muito",
      "Toxinas cerebrais",
      "Controle mental absoluto",
      "Curva de 40 dias",
      "Curva de aprendizagem",
      "Vá para guerra",
      "Eu, o pior problema"
    ]
  },
  {
    title: "A FÓRMULA EXPONENCIAL",
    topics: [
      "Rendas passivas",
      "Preços x Valor",
      "A arte da atração",
      "Ganhe dinheiro na compra",
      "Venda areia no deserto",
      "Gatilhos emocionais",
      "Mente mestra",
      "Chave maestra do universo",
      "Os 3 capitais",
      "Capitalização"
    ]
  },
  {
    title: "MODELAGEM",
    topics: [
      "Remédio da humanidade",
      "Princípios",
      "LifeStyle",
      "As 4 revoluções",
      "7 ciclos da vida",
      "Zona de aprendizagem",
      "Leia ainda esse ano",
      "Código da tensão"
    ]
  },
  {
    title: "PRODUTIVIDADE",
    topics: [
      "Criatividade cíclica",
      "O que você não quer fazer",
      "Oportunidade x Atitude",
      "Sociedade e falta de recurso",
      "Dívidas são boas",
      "5 ciclos empresariais",
      "Não empreste dinheiro",
      "Pare de forcar em dinheiro",
      "Os 5 passos"
    ]
  },
  {
    title: "TRANSBORDO",
    topics: [
      "Propósito",
      "Sem raiva de otários",
      "Cale a boca e diga não",
      "Modelagem",
      "Como fazer tarefas",
      "Qual desenho vai levar?",
      "Comunicação",
      "Energia radial",
      "Retificação cerebral",
      "Renda eterna"
    ]
  }
];

export const MetodoSection = () => {
  return (
    <section className="py-8 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto max-w-7xl">
        {/* Título */}
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 text-primary leading-tight">
            <TypeAnimation
              sequence={[
                "O MÉTODO",
                2000,
               ]}
              speed={50}
              repeat={Infinity}
            />
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-2">
            Veja o que será ensinado para que você possa governar sobre a Terra
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {metodoData.map((module, index) => (
            <Card
              key={index}
              className="bg-card/80 backdrop-blur-sm border border-border/50 hover:border-primary/50 
                         transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
            >
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl font-bold text-primary text-center sm:text-left">
                  {module.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {module.topics.map((topic, topicIndex) => (
                    <li
                      key={topicIndex}
                      className="text-sm sm:text-base text-foreground/80 flex items-start gap-2"
                    >
                      <span className="text-primary mt-1">▸</span>
                      <span>{topic}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

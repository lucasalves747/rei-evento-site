import { TrendingUp } from "lucide-react";
import { Card } from "./ui/card";
import { motion } from "framer-motion";

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
    <section className="py-16 sm:py-20 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Texto principal */}
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-snug sm:leading-tight text-center lg:text-left">
              Sabe o que separa quem vive no automático de quem{" "}
              <span className="text-primary">constrói algo grande de verdade</span>{" "}
              aqui nos EUA?
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground mb-8 leading-relaxed text-center lg:text-left">
              Não é dinheiro. Nem sorte. Nem diploma.
              <br className="hidden sm:block" />
              <br className="hidden sm:block" />
              É a forma como a pessoa se enxerga. Se você se vê pequeno,
              perdido, inseguro… Vai continuar tomando decisões que te mantêm
              exatamente aí.
            </p>
          </div>

          {/* Card com animação */}
          <div className="flex flex-col gap-6">
            {audiences.map((audience, index) => {
              const Icon = audience.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 1.2,
                    ease: "easeOut",
                  }}
                  viewport={{ once: true, amount: 0.2 }}
                >
                  <Card className="p-5 sm:p-6 md:p-8 bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold mb-3 leading-snug">
                      {audience.title}
                    </h3>
                    <p className="text-sm sm:text-base text-muted-foreground whitespace-pre-line leading-relaxed">
                      {audience.description}
                    </p>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Texto final */}
        <div className="text-center max-w-2xl sm:max-w-3xl mx-auto mt-16 sm:mt-20">
          <p className="text-base sm:text-lg md:text-xl text-white leading-relaxed">
            E você? Vai continuar vivendo no que te deram… ou vai assumir o que é seu de verdade?
          </p>
        </div>
      </div>
    </section>
  );
};

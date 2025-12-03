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
    <section className="py-16 sm:py-20 md:py-24 bg-[#EE0900]/70">
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Texto principal */}
          <Card className="bg-primary/0 pt-10 pb-10 border-none ">
                    <div className="px-2 sm:text-center  ">
                      <div>
           <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-snug sm:leading-tight sm:text-center px-2 lg:text-left text-white">
              Sabe o que separa quem vive no automático de quem{" "}
              <span className="">constrói algo grande de verdade</span>{" "}
              aqui nos EUA?
            </h2>
            
           
            <p className="text-base sm:text-lg text-white mb-8 leading-relaxed px-2 sm:text-center lg:text-left">
              Não é dinheiro. Nem sorte. Nem diploma.
              <br className="hidden sm:block" />
              <br className="hidden sm:block" />
              É a forma como a pessoa se enxerga. Se você se vê pequeno,
              perdido, inseguro… Vai continuar tomando decisões que te mantêm
              exatamente aí.
            </p>
          </div>
        </div>
                  </Card>
          

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
                  <Card className="p-5 sm:p-6 md:p-8 bg-black  hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
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

        <Card className="bg-black p-5 mt-10 mx-2 sm:mx-20 sm:mt-20  hover:border-white/50  hover:shadow-lg hover:shadow-white/20">
                    <div className="px-2 sm:text-center  ">
          <p className="text-white/90  sm:text-lg md:text-xl  leading-relaxed font-semibold">
            E você? Vai continuar vivendo no que te deram… ou vai assumir o que é seu de verdade?
          </p>
        </div>
                  </Card>

        {/* Texto final */}
        
      </div>
    </section>
  );
};

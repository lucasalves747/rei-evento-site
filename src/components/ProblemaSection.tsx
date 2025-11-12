import { Card } from "@/components/ui/card";
import { TrendingUp, Users, Zap } from "lucide-react";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import bgimg from "@/assets/detailed_black_red_background.png";

const audiences = [
  {
    icon: TrendingUp,
    description:
      "Não é falta de esforço. É que tem algo te travando por dentro — e você sente isso.",
  },
  {
    icon: Users,
    description:
      "Até quem vive com você enxerga: há uma versão sua mais forte, mais confiante, pronta pra sair.",
  },
  {
    icon: Zap,
    description:
      "E talvez... o que você precisa agora não é mais conteúdo. É destravar o que já está aí dentro.",
  },
];

export const ProblemaSection = () => {
  return (
    <section className="relative py-10 md:py-28 bg-dark-surface overflow-hidden">
      {/* Fundo com textura */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{
          backgroundImage: `url(${bgimg})`,
          backgroundAttachment: "fixed",
        }}
      />

      {/* Conteúdo */}
      <div className="relative container mx-auto px-3">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="space-y-4 md:space-y-14 p-2 sm:p-10 rounded-3xl bg-white/5 backdrop-blur-2xl border border-white/20 shadow-[0_0_40px_-10px_rgba(255,255,255,0.2)]"
        >
          {/* Título principal */}
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
              Você já percebeu que{" "}
              <span className="text-primary">trabalha como nunca</span>, mas o
              resultado não acompanha?
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground">
              Você estuda, tenta mudar a rotina, até começa algo novo… mas
              sempre volta pro mesmo ponto. Dois passos pra frente, um pra trás.
            </p>
          </div>

          {/* Cards */}
          <div className="grid pt-2 sm:pt-10 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {audiences.map((audience, index) => {
              const Icon = audience.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.2,
                    ease: "easeOut",
                  }}
                  viewport={{ once: true }}
                >
                  <Card className="p-3 sm:p-8 bg-black/70 border border-white/20 backdrop-blur-xl hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,0,0,0.3)]">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <p className="text-foreground/90">{audience.description}</p>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          {/* Chamada final */}
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 text-foreground">
              Chegou a hora de{" "}
              <span className="text-primary">
                parar de sobreviver e começar a governar{" "}
              </span>
              sua própria vida.
            </h2>

            <div className="flex justify-center">
              <Button
                variant="hero"
                size="lg"
                className=" px-10 py-5 h-auto animate-glow hover:scale-105 hover:bg-gradient-to-r from-primary to-primary/70 transition-transform duration-300 w-full sm:w-auto mx-auto"
              >
                QUERO ENTRAR NO MÉTODO IP
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

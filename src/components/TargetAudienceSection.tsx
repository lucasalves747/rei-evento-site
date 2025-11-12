import { Card } from "@/components/ui/card";
import { TrendingUp, Users, Zap } from "lucide-react";
import { motion } from "framer-motion";

const audiences = [
  {
    icon: TrendingUp,
    title: "Empreendedores",
    description:
      "Homens que estavam cansados de correr o dia inteiro… e hoje têm empresa funcionando com mais leveza e lucro.",
  },
  {
    icon: Users,
    title: "Líderes",
    description:
      "Empresários que estavam travados, e depois de 2 dias no IP destravaram o crescimento que estava empacado há anos.",
  },
  {
    icon: Zap,
    title: "Pessoas em Transformação",
    description:
      "Pais de família que carregavam tudo sozinhos… e hoje têm clareza, energia e estão construindo uma nova fase — por dentro e por fora.",
  },
];

export const TargetAudienceSection = () => {
  return (
    <section className="py-5 md:py-28 bg-dark-surface relative overflow-hidden">
      {/* Fundo translúcido */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />

      <div className="relative container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            Gente como você que decidiu{" "}
            <span className="text-primary">virar a chave</span>:
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground">
            Este evento é para quem está pronto para transformar sua vida em
            todas as dimensões.
          </p>
        </div>

        {/* Grid de cards */}
        <div className="grid sm:pt-10 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {audiences.map((audience, index) => {
            const Icon = audience.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.2,
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
              >
                <Card className="p-4 sm:p-10 bg-white/10 backdrop-blur-xl border border-white/20 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_25px_rgba(255,0,0,0.3)]">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">
                    {audience.title}
                  </h3>
                  <p className="text-muted-foreground text-base leading-relaxed">
                    {audience.description}
                  </p>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

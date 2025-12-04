import { Card } from "@/components/ui/card";
import { TrendingUp, Users, Zap } from "lucide-react";
import { motion } from "framer-motion";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


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
      "Pais de família que carregavam tudo sozinhos… e hoje têm clareza, energia e estão construindo uma nova fase, por dentro e por fora.",
  },
];

const videos = [
  "https://player.vimeo.com/video/1083156855?autopause=0&app_id=122963",
  "https://www.youtube.com/embed/2VKqHAn6Wo4?enablejsapi=1&rel=0&modestbranding=1&playsinline=1&color=white",
  "https://www.youtube.com/embed/OYxGNUa3KG4?enablejsapi=1&rel=0&modestbranding=1&playsinline=1&color=white",
  "https://www.youtube.com/embed/62xXLhqWo6I?enablejsapi=1&rel=0&modestbranding=1&playsinline=1&color=white",
];

export const TargetAudienceSection = () => {
  return (
    <section className="py-10 md:py-10 bg-dark-surface relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />

      <div className="relative container mx-auto px-6">
        <div className="sm:text-center px-2 max-w-3xl mx-auto mb-10 sm:16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
            Gente como você que decidiu{" "}
            <span className="text-primary">virar a chave</span>:
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground">
            Este evento é para quem está pronto para transformar sua vida em
            todas as dimensões.
          </p>
        </div>

        {/* Cards */}
        <div className="grid  md:grid-cols-2 lg:grid-cols-3 gap-3">
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

        {/* Carrossel de Vídeos */}
        <div className="mt-16">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            centeredSlides
            loop
            pagination={{ clickable: true }}
            navigation
            className="rounded-xl overflow-hidden"
          >
            {videos.map((url, idx) => (
              <SwiperSlide key={idx}>
                <div className="w-full aspect-video rounded-xl overflow-hidden">
                  <iframe
                    src={url}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>
    </section>
  );
};

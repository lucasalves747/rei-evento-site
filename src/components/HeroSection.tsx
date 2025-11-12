import { Button } from "@/components/ui/button";
import { Calendar, MapPin } from "lucide-react";
import heroImage from "@/assets/hero-image.png";
import logo from "@/assets/logo.png";
import { motion } from "framer-motion";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background pt-16 pb-16 sm:pt-24 sm:pb-24">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{ backgroundImage: `url(${heroImage})` }}
      />

      {/* Red Glow Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-primary/20" />

      {/* Conteúdo */}
      <div className="container mx-auto px-5 sm:px-8 md:px-10 relative z-10">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 lg:gap-16 items-center justify-center text-center lg:text-left">
          {/* Coluna Esquerda */}
          <div className="space-y-10 w-full max-w-2xl mx-auto lg:mx-0">
            {/* Logo */}
            <div className="flex justify-center lg:justify-start">
              <img
                src={logo}
                alt="Logo"
                className="w-32 sm:w-40 md:w-52 max-w-full"
              />
            </div>

            {/* Informações do Evento */}
            <div className="hidden sm:flex  flex-wrap justify-center lg:justify-start gap-4 sm:gap-6 text-sm sm:text-base md:text-lg">
              <div className="flex items-center gap-2">
                <span className="text-primary">▸</span>
                <span className="font-semibold">Método REI 26</span>
              </div>
              <div className="flex items-center gap-2 text-primary hidden md:inline">
                <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>06 e 07 Dezembro</span>
              </div>
              <div className="flex items-center gap-2 text-primary">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
                <a
                  href="https://www.google.com.br/maps/place/Crowne+Plaza+Hollywood+Beach/@25.9874362,-80.1200348,17z/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  <span>Abrir no Maps</span>
                </a>
              </div>
            </div>

            {/* Card com animação */}
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.4, ease: "easeOut" }}
              className="space-y-6 p-1 sm:space-y-8 p-5 sm:p-8 md:p-10 rounded-3xl md:bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl"
            >
              {/* Título */}
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-snug sm:leading-tight">
                Em apenas 2 dias, você vai despertar sua verdadeira{" "}
                <span className="text-primary">IDENTIDADE</span>, alinhar seu{" "}
                <span className="text-primary">PROPÓSITO</span> e destravar o caminho
                <br className="hidden md:block" /> para{" "}
                <span className="text-primary">PROSPERAR</span> em todas as áreas da vida.
              </h2>

              {/* Descrição */}
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
                Em 2 dias, descubra sua IDENTIDADE, alinhe seu PROPÓSITO e prospere em todas as áreas da vida.
              </p>

              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                DOUBLETREE RESORT BY HILTON • 4000 S OCEAN DR. HOLLYWOOD, FL 33019
              </p>

              {/* Botão CTA */}
              <div className="flex justify-center lg:justify-start">
                <Button
                  variant="hero"
                  size="lg"
                  className="w-full sm:w-auto text-base sm:text-lg px-8 sm:px-12 py-5 h-auto animate-glow"
                >
                  QUERO ENTRAR NO MÉTODO IP
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

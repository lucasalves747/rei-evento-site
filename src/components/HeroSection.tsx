import { Button } from "@/components/ui/button";
import { Calendar, MapPin } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-background">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Red Glow Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-primary/20" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-primary flex items-center justify-center font-bold text-2xl">
                IP
              </div>
              <h1 className="text-3xl font-bold tracking-tight">
                MÉTODO <span className="text-primary">REI</span>
              </h1>
            </div>

            {/* Event Info */}
            <div className="flex flex-wrap gap-6 text-sm">
              <div className="flex items-center gap-2">
                <span className="text-primary">▸</span>
                <span className="font-semibold">Método REI 26</span>
              </div>
              <div className="flex items-center gap-2 text-primary">
                <Calendar className="w-4 h-4" />
                <span>13 e 14 de Dezembro</span>
              </div>
              <div className="flex items-center gap-2 text-primary">
                <MapPin className="w-4 h-4" />
                <span>Lisboa</span>
              </div>
            </div>

            {/* Main Headline */}
            <h2 className="text-4xl lg:text-6xl font-bold leading-tight">
              São 2 dias para ativar a sua identidade, clarificar o propósito e descobrir como prosperar em todas as áreas da vida
            </h2>

            {/* Description */}
            <p className="text-lg text-muted-foreground leading-relaxed">
              Uma metodologia única desenvolvida para quem verdadeiramente quer prosperar em todas as áreas da vida. Mais de 140 turmas e milhares de pessoas impactadas que mudam diariamente as suas vidas, famílias e negócios.
            </p>

            {/* CTA Button */}
            <Button variant="hero" size="lg" className="text-lg px-12 py-6 h-auto">
              QUERO ENTRAR NO MÉTODO REI
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

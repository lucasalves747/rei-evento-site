import { Button } from "@/components/ui/button";
import { Calendar, MapPin } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";
import logo from "@/assets/logo.png"

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
             <img src={logo} alt="" />
              
            </div>

            {/* Event Info */}
            <div className="flex flex-wrap gap-6 text-sm">
              <div className="flex items-center gap-2">
                <span className="text-primary">▸</span>
                <span className="font-semibold">Método REI 26</span>
              </div>
              <div className="flex items-center gap-2 text-primary">
                <Calendar className="w-4 h-4" />
                <span>06 e 07 Dezembro</span>
              </div>
              <div className="flex items-center gap-2 text-primary">
                <MapPin className="w-4 h-4" />
                <a href="https://www.google.com.br/maps/place/Crowne+Plaza+Hollywood+Beach/@25.9874362,-80.1200348,17z/data=!3m1!4b1!4m9!3m8!1s0x88d9ab5fe0991f4d:0x96200e21bc257f37!5m2!4m1!1i2!8m2!3d25.9874362!4d-80.1200348!16s%2Fg%2F11f_10_zmy?entry=ttu&g_ep=EgoyMDI1MTEwNS4wIKXMDSoASAFQAw%3D%3D"> <span>Abrir no Maps</span></a>
              </div>
            </div>

            {/* Main Headline */}
            <h2 className="text-4xl lg:text-6xl font-bold leading-tight">
              Em apenas 2 dias, você vai despertar sua verdadeira IDENTIDADE , alinhar seu PROPÓSITO e destravar o caminho para PROSPERAR em todas as áreas da vida.
            </h2>

            {/* Description */}
            <p className="text-lg text-muted-foreground leading-relaxed">
              Uma metodologia exclusiva, criada para quem está pronto para prosperar de verdade em todas as áreas da vida. Já são mais de 155 turmas e milhares de vidas transformadas — pessoas que hoje vivem com propósito, fortalecem suas famílias e lideram negócios com identidade e clareza — agora é sua vez.
            </p>

             <p className="text-sm text-muted-foreground leading-relaxed">
              DOUBLETREE RESORT BY HILTON 4000 S OCEAN DR. HOLYWOOD, FL 33019
            </p>

            {/* CTA Button */}
            <Button variant="hero" size="lg" className="text-lg px-12 py-6 h-auto">
              QUERO ENTRAR NO MÉTODO IP
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

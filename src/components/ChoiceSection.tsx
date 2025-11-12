import { Button } from "@/components/ui/button";
import { X, Check } from "lucide-react";

export const ChoiceSection = () => {
  return (
    <section className="py-16 sm:py-20 md:py-24 px-4 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto max-w-6xl">
        {/* Título */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-foreground leading-snug">
            Escolha agora!
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-10 sm:mb-12">
          {/* Opção Negativa */}
          <div className="relative p-6 sm:p-8 rounded-2xl bg-muted/50 border-2 border-destructive/30 backdrop-blur-md">
            {/* Badge */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <div className="bg-destructive text-destructive-foreground px-4 sm:px-6 py-2 rounded-full flex items-center gap-2 text-sm sm:text-base">
                <X className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="font-semibold">Zona de Conforto</span>
              </div>
            </div>

            {/* Texto */}
            <div className="mt-8 text-center">
              <p className="text-base sm:text-lg md:text-xl leading-relaxed text-muted-foreground">
                Continuar como está, repetindo os mesmos padrões e obtendo os
                mesmos resultados...
              </p>
            </div>
          </div>

          {/* Opção Positiva */}
          <div className="relative p-6 sm:p-8 rounded-2xl bg-primary/10 border-2 border-primary/70 backdrop-blur-md shadow-lg">
            {/* Badge */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <div className="bg-primary text-primary-foreground px-4 sm:px-6 py-2 rounded-full flex items-center gap-2 text-sm sm:text-base">
                <Check className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="font-semibold">Transformação</span>
              </div>
            </div>

            {/* Texto */}
            <div className="mt-8 text-center">
              <p className="text-base sm:text-lg md:text-xl leading-relaxed font-semibold text-foreground">
                Ativar de vez a sua verdadeira identidade e propósito em Lisboa.
              </p>
            </div>
          </div>
        </div>

        {/* Botão */}
        <div className="text-center">
          <Button
            variant="hero"
            size="lg"
            className="w-full sm:w-auto text-base sm:text-lg px-10 sm:px-12 py-5 sm:py-6 h-auto animate-glow"
          >
            QUERO ENTRAR NO MÉTODO IP
          </Button>
        </div>
      </div>
    </section>
  );
};

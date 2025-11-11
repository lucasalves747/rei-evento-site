import { Button } from "@/components/ui/button";
import { X, Check } from "lucide-react";

export const ChoiceSection = () => {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
            Escolha agora!
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Opção Negativa */}
          <div className="relative p-8 rounded-2xl bg-muted/50 border-2 border-destructive/30 backdrop-blur-sm">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <div className="bg-destructive text-destructive-foreground px-6 py-2 rounded-full flex items-center gap-2">
                <X className="w-5 h-5" />
                <span className="font-semibold">Zona de Conforto</span>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <p className="text-xl md:text-2xl leading-relaxed text-muted-foreground">
                Continuar como está, repetindo os mesmos padrões e obtendo os mesmos resultados...
              </p>
            </div>
          </div>

          {/* Opção Positiva */}
          <div className="relative p-8 rounded-2xl bg-primary/5 border-2 border-primary backdrop-blur-sm shadow-lg">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <div className="bg-primary text-primary-foreground px-6 py-2 rounded-full flex items-center gap-2">
                <Check className="w-5 h-5" />
                <span className="font-semibold">Transformação</span>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <p className="text-xl md:text-2xl leading-relaxed font-semibold text-foreground">
                Ativar de vez a sua verdadeira identidade e propósitos em Lisboa.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Button 
            variant="hero" 
            size="lg" 
            className="text-xl px-12 py-8 h-auto shadow-xl hover:shadow-2xl transition-all"
          >
            ADQUIRA SUA VAGA AGORA
          </Button>
        </div>
      </div>
    </section>
  );
};

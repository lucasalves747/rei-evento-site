import { Separator } from "@/components/ui/separator";
import { Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

export const Footer = () => {
  return (
    <footer className="bg-darker-surface p-5 sm:py-12 px-4">
      <div className="container mx-auto">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 mb-10 sm:text-center sm:text-left">
          {/* Brand */}
          <div className="space-y-4 flex flex-col items-center sm:items-start">
            <div className="flex sm:items-center sm:justify-start gap-3">
              <img
                src={logo}
                alt="Logo Método REI"
                className="w-32 h-auto object-contain"
              />
            </div>
            <p className="text-sm text-muted-foreground max-w-xs mx-auto sm:mx-0">
              Transformando vidas através de uma metodologia única e comprovada.
            </p>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg text-foreground">Contacto</h3>
            <div className="space-y-3 text-sm text-muted-foreground">
              <div className="flex  sm:justify-start items-center gap-2">
                <Mail className="w-4 h-4 text-primary" />
                <span>contato@metodrei.com</span>
              </div>
              <div className="flex  sm:justify-start items-center gap-2">
                <Phone className="w-4 h-4 text-primary" />
                <span>+351 21 123 4567</span>
              </div>
              <div className="flex  sm:justify-start items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" />
                <span>Miami, EUA</span>
              </div>
            </div>
          </div>

          {/* Links */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg text-foreground">Links Úteis</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Sobre o Método
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Depoimentos
                </a>
              </li>
              
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center text-center gap-4 text-sm text-muted-foreground">
          <p>© 2025 Método IP. Todos os direitos reservados.</p>
          <p>
            Desenvolvido por{" "}
            <a href="#" className="text-primary hover:underline">
              Lucas Alves
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

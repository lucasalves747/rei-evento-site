import { Card } from "@/components/ui/card";
import { Award, BookOpen, Users, TrendingUp } from "lucide-react";
import mentorSantiago from "@/assets/mentor-santiago.png";
import mentorPablo from "@/assets/mentor-pablo.png";
import mentorNezio from "@/assets/mentor-nezio.png";
import mentorThiago from "@/assets/mentor-thiago.png";



export const MentorSection = () => {
  return (
    <section className="py-24 bg-dark-surface">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Conheça o <span className="text-primary">Mentor</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Um especialista dedicado à transformação de vidas
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Image */}
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden border-2 border-primary/30">
              <img 
                src={mentorSantiago} 
                alt="Dr. Santiago Vecina" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold mb-2">Dr. Santiago Vecina</h3>

            </div>

            <div className="space-y-4 text-muted-foreground">
              <p>
                Médico, empresário e palestrante internacional, Santiago Vecina é especialista em nutrologia esportiva e otimização da saúde. Ele já transformou vidas de atletas e profissionais de alta performance, levando equipes como o Esporte Clube São Bento e os Vipers ao topo de competições nacionais.
              </p>
              <p>
                Triatleta e criador do método SAAMS, que combina estratégias de saúde, nutrição e propósito, Santiago ajuda pessoas a perder até 20 kg em dois meses e a conquistar feitos como completar o Ironman.
              </p>
              <p>
                Autor do livro "Médico do Corpo e da Alma", ele inspira uma nova forma de viver: com energia, foco e resultados extraordinários.
              </p>
              <p>
                Se você busca o próximo nível na vida ou nos negócios, Santiago é o mentor certo para te guiar.
              </p>

            </div>



          </div>

          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden border-2 border-primary/30">
              <img 
                src={mentorPablo} 
                alt="Pablo Marçal" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold mb-2">Pablo Marçal</h3>

            </div>

            <div className="space-y-4 text-muted-foreground">
              <p>
                Pablo Marçal, cristão, casado com @carolmarcal1, pai do Lorenzo, Benjamin, Miguel e Isabela. Aos 36 anos, se tornou um dos patriarcas mais prósperos do Brasil.

                Nas redes sociais é assistido por mais de 20 milhões de pessoas por mês.
              </p>
              <p>
                Multiempreendedor, mentor, escritor, piloto de corrida e investidor. Hoje, lidera como CVO (Chief Visionary Officer) um grupo multibilionário nos ramos imobiliário, digital, ensino, seguros, vendas, automobilístico, aviação, tecnologia, hotelaria, fazenda e outros.
              </p>
              <p>
                Mora no Jardim Europa – SP e tem um dos maiores ecossistemas empresariais da América Latina.
              </p>
              <p>
                Marçal já liderou a semana de livros mais vendidos do país com mais de 35 títulos e muitos se tornaram Best Sellers.
              </p>
              <p>
                Marçal se orgulha de ser professor de quase 1 milhão de alunos em mentorias e cursos na internet.
              </p>
              <p>
                O propósito do Marçal é ativar a identidade e clarificar o propósito das pessoas que se conectem a ele. Seu maior desafio é transformar a mentalidade do povo brasileiro, através de todas as esferas da sociedade.
              </p>

            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden border-2 border-primary/30">
              <img 
                src={mentorNezio} 
                alt="Nezio Monteiro" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold mb-2">Nezio Monteiro</h3>

            </div>

            <div className="space-y-4 text-muted-foreground">
              <p>Nezio hoje possui 24 empresas em diversos segmentos e já treinou mais de 20 mil pessoas em seus cursos, mentorias e eventos.
              </p>
              <p>
                É um empreendedor serial que tem foco no crescimento exponencial. É especialista em GSR (Gestão simplificada de resultados).
              </p>
              <p>
                Uma nova forma de gerir empresas sem se deixar travar por burocracias e processos lentos. É o novo modelo que funciona e gera resultados exponenciais nos negócios de Nezio Monteiro.
              </p>
              <p>
                Nezio é cristão, casado com Jessyca Monteiro e pai de Ana Liz, palestrante, iron man e escritor. Tem como propósito destravar negócios e empresários que tem valores e princípios alinhados com o seu. E o mais importante, que tenham mensagens fortes em seus corações.</p>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden border-2 border-primary/30">
              <img 
                src={mentorThiago} 
                alt="Thiago Rocha" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold mb-2">Thiago Rocha</h3>

            </div>

            <div className="space-y-4 text-muted-foreground">
              <p>
                Tiago Rocha é mentor Especialista na Criação e Desenvolvimento de Métodos e Metodologias de Ensino para Mentores e Palestrantes. Atua há mais de 10 anos no mercado de Infoeducação formando profissionais que desejam transformar seus conhecimentos em Mentorias e Palestras.
              </p><p>
                Já formou mais de 10 mil alunos e hoje é o Líder da Plataforma Global na Europa. Lidera múltiplos negócios e atende Mentores dos mais variados nichos.
              </p><p>
                É um profissional que vive o que ensina e fatura todos os meses múltiplos 7D com Mentorias e Infoprodutos.
              </p>
            </div>
          </div>


        </div></div>
    </section>
  );
};

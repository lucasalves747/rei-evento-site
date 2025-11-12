import { Award, BookOpen, Users, TrendingUp } from "lucide-react";
import mentorSantiago from "@/assets/mentor-santiago.png";
import mentorPablo from "@/assets/mentor-pablo.png";
import mentorNezio from "@/assets/mentor-nezio.png";
import mentorThiago from "@/assets/mentor-thiago.png";

export const MentorSection = () => {
  const mentors = [
    {
      name: "Dr. Santiago Vecina",
      image: mentorSantiago,
      bio: [
        "Médico, empresário e palestrante internacional, Santiago Vecina é especialista em nutrologia esportiva e otimização da saúde. Ele já transformou vidas de atletas e profissionais de alta performance, levando equipes como o Esporte Clube São Bento e os Vipers ao topo de competições nacionais.",
        "Triatleta e criador do método SAAMS, que combina estratégias de saúde, nutrição e propósito, Santiago ajuda pessoas a perder até 20 kg em dois meses e a conquistar feitos como completar o Ironman.",
        'Autor do livro "Médico do Corpo e da Alma", ele inspira uma nova forma de viver: com energia, foco e resultados extraordinários.',
        "Se você busca o próximo nível na vida ou nos negócios, Santiago é o mentor certo para te guiar.",
      ],
    },
    {
      name: "Pablo Marçal",
      image: mentorPablo,
      bio: [
        "Pablo Marçal, cristão, casado com @carolmarcal1, pai do Lorenzo, Benjamin, Miguel e Isabela. Aos 36 anos, se tornou um dos patriarcas mais prósperos do Brasil.",
        "Nas redes sociais é assistido por mais de 20 milhões de pessoas por mês.",
        "Multiempreendedor, mentor, escritor, piloto de corrida e investidor. Hoje, lidera como CVO (Chief Visionary Officer) um grupo multibilionário nos ramos imobiliário, digital, ensino, seguros, vendas, automobilístico, aviação, tecnologia, hotelaria, fazenda e outros.",
        "Mora no Jardim Europa – SP e tem um dos maiores ecossistemas empresariais da América Latina.",
        "Marçal já liderou a semana de livros mais vendidos do país com mais de 35 títulos e muitos se tornaram Best Sellers.",
        "Marçal se orgulha de ser professor de quase 1 milhão de alunos em mentorias e cursos na internet.",
        "O propósito do Marçal é ativar a identidade e clarificar o propósito das pessoas que se conectem a ele. Seu maior desafio é transformar a mentalidade do povo brasileiro, através de todas as esferas da sociedade.",
      ],
    },
    {
      name: "Nezio Monteiro",
      image: mentorNezio,
      bio: [
        "Nezio hoje possui 24 empresas em diversos segmentos e já treinou mais de 20 mil pessoas em seus cursos, mentorias e eventos.",
        "É um empreendedor serial que tem foco no crescimento exponencial. É especialista em GSR (Gestão Simplificada de Resultados).",
        "Uma nova forma de gerir empresas sem se deixar travar por burocracias e processos lentos. É o novo modelo que funciona e gera resultados exponenciais nos negócios de Nezio Monteiro.",
        "Nezio é cristão, casado com Jessyca Monteiro e pai de Ana Liz, palestrante, iron man e escritor. Tem como propósito destravar negócios e empresários que têm valores e princípios alinhados com o seu.",
      ],
    },
    {
      name: "Thiago Rocha",
      image: mentorThiago,
      bio: [
        "Tiago Rocha é mentor especialista na criação e desenvolvimento de métodos e metodologias de ensino para mentores e palestrantes.",
        "Atua há mais de 10 anos no mercado de Infoeducação formando profissionais que desejam transformar seus conhecimentos em mentorias e palestras.",
        "Já formou mais de 10 mil alunos e hoje é o líder da Plataforma Global na Europa. Lidera múltiplos negócios e atende mentores dos mais variados nichos.",
        "É um profissional que vive o que ensina e fatura todos os meses múltiplos 7 dígitos com mentorias e infoprodutos.",
      ],
    },
  ];

  return (
    <section className="py-24 bg-dark-surface px-4">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Conheça os <span className="text-primary">Mentores</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Especialistas dedicados à transformação de vidas
          </p>
        </div>

        <div className="flex flex-col gap-20 max-w-6xl mx-auto">
          {mentors.map((mentor, index) => (
            <div
              key={index}
              className={`grid items-center gap-10 lg:gap-16 ${
                index % 2 === 1 ? "lg:grid-cols-2 lg:flex-row-reverse" : "lg:grid-cols-2"
              }`}
            >
              {/* Imagem */}
              <div className="relative mx-auto max-w-sm">
                <div className="aspect-square rounded-2xl overflow-hidden border-2 border-primary/30 shadow-lg">
                  <img
                    src={mentor.image}
                    alt={mentor.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </div>

              {/* Texto */}
              <div className="space-y-6 text-center lg:text-left">
                <h3 className="text-3xl font-bold text-foreground">{mentor.name}</h3>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  {mentor.bio.map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

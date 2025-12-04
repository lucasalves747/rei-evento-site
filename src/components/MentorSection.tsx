import mentorSantiago from "@/assets/mentor-santiago.png";
import mentorPablo from "@/assets/mentor-pablo.png";
import mentorNezio from "@/assets/mentor-nezio.png";

export const MentorSection = () => {
  const mentors = [
    {
      name: "Pablo Marçal",
      image: mentorPablo,
      bio: [
        "Pablo Marçal, casado com @carolmarcal1 e pai de Lorenzo, Benjamin, Miguel e Isabela. Aos 36 anos tornou-se um dos patriarcas mais prósperos do Brasil.",
        "Nas redes sociais, é seguido por mais de 20 milhões de pessoas a cada mês. Acompanhe pelos canais oficiais: Blog Pablo Marçal, Cortes do Marçal, Instagram, TikTok, YouTube, Twitter e Threads. É multiempreendedor, mentor, escritor, piloto de corridas e investidor. Actualmente lidera, na qualidade de CVO (Chief Visionary Officer), um grupo multibilionário nos sectores imobiliário, digital, ensino, seguros, vendas, automóvel, aviação, tecnologia, hotelaria, agricultura, entre outros. Reside em Alphaville, São Paulo, e tem um dos maiores ecossistemas empresariais da América Latina.",
        "Marçal já liderou a semana dos livros mais vendidos do Brasil, com mais de 35 títulos, muitos dos quais tornaram-se Best Sellers, como os livros Antimedo e A destruição do marxismo cultural.",
      ],
    },
    {
      name: "Dr. Santiago Vecina",
      image: mentorSantiago,
      bio: [
        "Médico, empresário e palestrante internacional, Santiago Vecina é especialista em nutrologia esportiva e otimização da saúde.",
        "Ele já transformou a vida de atletas e profissionais de alta performance, levando equipes como o Esporte Clube São Bento e os Vipers ao topo de competições nacionais. Triatleta e criador do método SAAMS, que combina estratégias de saúde, nutrição e propósito.",
        "Santiago ajuda pessoas a perder até 20 kg em dois meses e a conquistar feitos como completar o Ironman. Autor do livro Médico do Corpo e da Alma, ele inspira uma nova forma de viver: com energia, foco e resultados extraordinários.",
      ],
    },
    {
      name: "Nezio Monteiro",
      image: mentorNezio,
      bio: [
        "Possui hoje 24 empresas em diversos segmentos e já treinou mais de 20 mil pessoas em seus cursos, mentorias e eventos.",
        "É um empreendedor serial com foco no crescimento exponencial e especialista em GSR (Gestão Simplificada de Resultados). Essa é uma nova forma de gerir empresas sem se prender a burocracias e processos lentos, um modelo moderno que funciona e gera resultados exponenciais nos negócios.",
        "Nezio é cristão, casado com Jessyca Monteiro e pai de Ana Liz. Palestrante, Ironman e escritor, tem como propósito destravar negócios e empresários que possuem valores e princípios alinhados aos seus.",
      ],
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-background relative overflow-hidden">
      {/* Grid background pattern */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />
      
      <div className="container mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Conheça os <span className="text-primary">Mentores</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Especialistas dedicados à transformação de vidas
          </p>
        </div>

        <div className="flex flex-col gap-24">
          {mentors.map((mentor, index) => (
            <div
              key={index}
              className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-0 ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Image container with red card background */}
              <div className="relative flex-shrink-0 w-full lg:w-1/2 flex justify-center lg:justify-start px-4">
                {/* Red decorative card */}
                <div className="absolute top-8 right-8 lg:right-auto lg:left-32 w-48 h-64 sm:w-56 sm:h-72 bg-primary rounded-2xl z-0" />
                
                {/* Mentor image */}
                <div className="relative z-10">
                  <img
                    src={mentor.image}
                    alt={mentor.name}
                    className="w-72 sm:w-80 lg:w-96 h-auto object-contain drop-shadow-2xl"
                  />
                </div>
              </div>

              {/* Text content */}
              <div className={`flex-1 px-4 lg:px-8 space-y-6 ${index % 2 === 1 ? "lg:text-right" : ""}`}>
                <h3 className="text-3xl sm:text-4xl font-bold text-foreground">
                  {mentor.name}
                </h3>
                <div className="space-y-4 text-muted-foreground leading-relaxed text-sm sm:text-base">
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

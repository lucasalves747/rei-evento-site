import mentorSantiago from "@/assets/mentor-santiago.png";
import mentorPablo from "@/assets/mentor-pablo.png";
import mentorNezio from "@/assets/mentor-nezio.png";
import mentorBackground from "@/assets/mentor-background.png";

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
    <section className="py-16 sm:py-24 bg-[#0a0a0a] relative overflow-hidden">
      {/* Grid background pattern */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px'
        }}
      />
      
      <div className="container mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20 px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Conheça os <span className="text-primary">Mentores</span>
          </h2>
          <p className="text-lg text-gray-400">
            Especialistas dedicados à transformação de vidas
          </p>
        </div>

        <div className="flex flex-col gap-32">
          {mentors.map((mentor, index) => (
            <div
              key={index}
              className="relative"
            >
              {/* Background with crowd image */}
              <div 
                className="absolute inset-0 opacity-40"
                style={{
                  backgroundImage: `url(${mentorBackground})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />
              {/* Dark gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-transparent to-[#0a0a0a]" />
              
              <div className={`relative z-10 flex flex-col lg:flex-row items-center py-12 ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}>
                {/* Left side - Image with red card */}
                <div className="relative w-full lg:w-1/2 flex justify-center">
                  {/* Red decorative card with gradient */}
                  <div 
                    className={`absolute ${index % 2 === 1 ? "right-4 lg:right-20" : "left-4 lg:left-20"} top-1/2 -translate-y-1/2 w-52 h-80 sm:w-64 sm:h-96 rounded-3xl z-0 overflow-hidden`}
                    style={{
                      background: 'linear-gradient(135deg, #dc2626 0%, #991b1b 100%)',
                      boxShadow: '0 25px 50px -12px rgba(220, 38, 38, 0.4)'
                    }}
                  >
                    {/* Event image inside card */}
                    <img 
                      src={mentorBackground} 
                      alt="Evento" 
                      className="w-full h-full object-cover opacity-50 mix-blend-overlay"
                    />
                  </div>
                  
                  {/* Mentor image */}
                  <div className="relative z-10">
                    <img
                      src={mentor.image}
                      alt={mentor.name}
                      className="w-80 sm:w-96 lg:w-[450px] h-auto object-contain drop-shadow-[0_35px_35px_rgba(0,0,0,0.5)]"
                    />
                  </div>
                </div>

                {/* Right side - Text content */}
                <div className={`flex-1 px-6 lg:px-12 mt-8 lg:mt-0 ${index % 2 === 1 ? "lg:text-right lg:pr-8" : "lg:pl-8"}`}>
                  <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                    {mentor.name}
                  </h3>
                  <div className="space-y-5 text-gray-300 leading-relaxed text-sm sm:text-base">
                    {mentor.bio.map((paragraph, i) => (
                      <p key={i}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

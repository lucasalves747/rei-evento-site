import bgSantiago from "@/assets/santiagobg.png";
import bgPablo from "@/assets/pablobg.png";
import bgNezio from "@/assets/nesiobg.png";
import nesio from "@/assets/nesio.png"
import pablo from "@/assets/pablo.png"
import santiago from "@/assets/santiago.png"

export const MentorSection = () => {
  const mentors = [
    {
      name: "Pablo Marçal",
      background: bgPablo,
      img:pablo,
      bio: [
        "Pablo Marçal, casado com @carolmarcal1 e pai de Lorenzo, Benjamin, Miguel e Isabela. Aos 36 anos tornou-se um dos patriarcas mais prósperos do Brasil.",
        "Nas redes sociais, é seguido por mais de 20 milhões de pessoas a cada mês. Acompanhe pelos canais oficiais: Blog Pablo Marçal, Cortes do Marçal, Instagram, TikTok, YouTube, Twitter e Threads. É multiempreendedor, mentor, escritor, piloto de corridas e investidor. Atualmente lidera, como CVO (Chief Visionary Officer), um grupo multibilionário nos setores imobiliário, digital, educacional, de seguros, vendas, automobilístico, aviação, tecnologia, hotelaria, agronegócio e outros.",
        "Marçal já liderou a semana dos livros mais vendidos do Brasil, com mais de 35 títulos publicados, muitos deles best-sellers.",
      ],
    },
    {
      name: "Dr. Santiago Vecina",
      background: bgSantiago,
      img: santiago,
      bio: [
        "Médico, empresário e palestrante internacional, Santiago Vecina é especialista em nutrologia esportiva e otimização da saúde.",
        "Ele já transformou a vida de atletas e profissionais de alta performance, levando equipes como o Esporte Clube São Bento e os Vipers ao topo de competições nacionais. Triatleta e creator do método SAAMS, que combina estratégias de saúde, nutrição e propósito.",
        "Santiago ajuda pessoas a perder até 20 kg em dois meses e a conquistar feitos como completar o Ironman. Autor do livro Médico do Corpo e da Alma, ele inspira uma nova forma de viver: com energia, foco e resultados extraordinários.",
      ],
    },
    {
      name: "Nezio Monteiro",
      background: bgNezio,
      img: nesio,
      bio: [
        "Possui hoje 24 empresas em diversos segmentos e já treinou mais de 20 mil pessoas em seus cursos, mentorias e eventos.",
        "É um empreendedor serial com foco no crescimento exponencial e especialista em GSR (Gestão Simplificada de Resultados). Essa é uma nova forma de gerir empresas sem se prender a burocracias.",
        "Nezio é cristão, casado com Jessyca Monteiro e pai de Ana Liz. Palestrante, Ironman e escritor, tem como propósito destravar negócios e empresários com valores alinhados aos seus.",
      ],
    },
  ];

  return (
    <section className="py-4  bg-[#0a0a0a] relative overflow-hidden">
      
      {/* Grid background pattern */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      <div className="container mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-10 ">
          <h2 className="text-4xl md:text-5xl font-bold mb-3 text-white">
            Conheça os <span className="text-primary">Mentores</span>
          </h2>
          <p className="text-lg text-gray-400">
            Especialistas dedicados à transformação de vidas
          </p>
        </div>

        <div className="flex flex-col md:gap-16">
          {mentors.map((mentor, index) => (
            <div
              key={index}
              className="relative w-full rounded-3xl overflow-hidden min-h-[650px]"
            >
              
              {/* DESKTOP: BACKGROUND FULL WIDTH */}
              <div
                className="hidden md:block absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url(${mentor.background})`,
                }}
              />

              {/* MOBILE — IMAGEM GRANDE */}
              <img
                src={mentor.img}
                alt={mentor.name}
                className="
                  block md:hidden w-full 
                  h-[420px] sm:h-[500px] 
                  object-cover object-top
                "
              />

              {/* CONTEÚDO */}
              <div
                className="
                  relative z-10 flex flex-col
                  md:flex-row md:justify-end
                  gap-6
                  mt-6 md:mt-20 lg:px-12 py-3 md:py-16
                "
              >
                {/* CARD */}
                <div
                  className="
                    bg-gray-900/10 backdrop-blur-xl p-8 rounded-3xl 
                    shadow-[0_0_40px_rgba(0,0,0,0.6)]
                    w-full 
                    md:max-w-xl 
                    min-h-[380px] sm:min-h-[420px]
                  "
                >
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

import bgSantiago from "@/assets/santiagobg.png";
import bgPablo from "@/assets/pablobg.png";
import bgNezio from "@/assets/nesiobg.png";

export const MentorSection = () => {
  const mentors = [
    {
      name: "Pablo Marçal",
      background: bgPablo,
      bio: [
        "Pablo Marçal, casado com @carolmarcal1 e pai de Lorenzo, Benjamin, Miguel e Isabela. Aos 36 anos tornou-se um dos patriarcas mais prósperos do Brasil.",
        "Nas redes sociais, é seguido por mais de 20 milhões de pessoas a cada mês. Acompanhe pelos canais oficiais: Blog Pablo Marçal, Cortes do Marçal, Instagram, TikTok, YouTube, Twitter e Threads. É multiempreendedor, mentor, escritor, piloto de corridas e investidor. Atualmente lidera, como CVO (Chief Visionary Officer), um grupo multibilionário nos setores imobiliário, digital, educacional, de seguros, vendas, automobilístico, aviação, tecnologia, hotelaria, agronegócio e outros.",
        "Marçal já liderou a semana dos livros mais vendidos do Brasil, com mais de 35 títulos publicados, muitos deles best-sellers.",
      ],
    },
    {
      name: "Dr. Santiago Vecina",
      background: bgSantiago,
      bio: [
        "Médico, empresário e palestrante internacional, Santiago Vecina é especialista em nutrologia esportiva e otimização da saúde.",
        "Ele já transformou a vida de atletas e profissionais de alta performance, levando equipes como o Esporte Clube São Bento e os Vipers ao topo de competições nacionais. Triatleta e criador do método SAAMS, que combina estratégias de saúde, nutrição e propósito.",
        "Santiago ajuda pessoas a perder até 20 kg em dois meses e a conquistar feitos como completar o Ironman. Autor do livro Médico do Corpo e da Alma, ele inspira uma nova forma de viver: com energia, foco e resultados extraordinários.",
      ],
    },
    {
      name: "Nezio Monteiro",
      background: bgNezio,
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
      backgroundSize: "80px 80px",
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
          className="relative w-full rounded-3xl overflow-hidden min-h-[650px]"
        >
          {/* BACKGROUND FULL WIDTH */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${mentor.background})`,
            }}
          />

          {/* ESCURECER */}
          <div className="absolute inset-0 bg-black/50" />

          {/* CONTEÚDO */}
          <div className="relative z-10 flex justify-end px-6 lg:px-12 py-16 h-full">
            {/* CARD CINZA — ALTURA IGUAL PARA TODOS */}
            <div className="bg-gray-900/80 backdrop-blur-xl p-10 rounded-3xl max-w-xl shadow-[0_0_40px_rgba(0,0,0,0.6)] h-full overflow-y-auto">
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

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "O Método IP funciona mesmo?",
    answer:
      "Sim! O Método IP já transformou a vida de milhares de pessoas em mais de 140 turmas realizadas. Os resultados são comprovados por participantes que conseguiram ativar sua identidade, encontrar propósito e prosperar em todas as áreas da vida.",
  },
  {
    question: "Como será o credenciamento?",
    answer:
      "O credenciamento será realizado no local do evento antes do início das atividades. Você receberá todas as informações detalhadas por e-mail após a confirmação da sua inscrição, incluindo horários e documentação necessária.",
  },
  {
    question: "Posso fazer com o meu cônjuge ou parente?",
    answer:
      "Sim! É altamente recomendado participar com pessoas próximas. A experiência compartilhada potencializa os resultados e fortalece os vínculos familiares, criando uma base sólida para a transformação conjunta.",
  },
  {
    question: "Menor de idade pode participar?",
    answer:
      "O evento é direcionado para maiores de 18 anos. Para menores de idade, é necessário autorização dos pais ou responsáveis e acompanhamento durante todo o evento.",
  },
  {
    question: "Eu não tenho tempo para ficar 2 dias em imersão. E agora?",
    answer:
      "Se você não tem tempo para 2 dias de imersão, provavelmente é quem mais precisa estar aqui. A falta de tempo é muitas vezes um sintoma de uma vida desorganizada e sem propósito. Esses 2 dias vão te ensinar a recuperar o controle do seu tempo e multiplicar sua produtividade.",
  },
  {
    question: "Eu nunca dei certo em nada, o Método IP funciona para mim?",
    answer:
      "Sim! O Método IP foi desenvolvido justamente para pessoas que sentem que não estão alcançando seu potencial. Vamos trabalhar as causas raiz que te impedem de prosperar e ativar os recursos internos que você já possui para ter sucesso.",
  },
  {
    question: "Eu não sei o meu propósito, vale a pena participar?",
    answer:
      "Com certeza! Descobrir e ativar seu propósito é um dos principais objetivos do Método IP. Durante os 2 dias de imersão, você passará por processos específicos para identificar sua identidade verdadeira e o caminho que deve seguir.",
  },
  {
    question: "Eu tenho medo de me arriscar...",
    answer:
      "O medo é natural, mas ficar parado é o maior risco. O Método IP oferece um ambiente seguro e estruturado para você dar esse passo. Você estará acompanhado por mentores experientes e cercado por pessoas que também estão em busca de transformação.",
  },
  {
    question: "Meu marido não me deixa ir. O que fazer?",
    answer:
      "Esta é uma oportunidade de exercer sua autonomia e tomar decisões sobre sua própria vida. Converse abertamente sobre os benefícios que essa experiência trará não só para você, mas para toda a família. Melhor ainda: convide-o para participar junto!",
  },
];

export const FAQSection = () => {
  return (
    <section className="py-16 sm:py-20 md:py-24 px-4 bg-background">
      <div className="container mx-auto max-w-4xl">
        {/* Cabeçalho */}
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 text-foreground leading-snug">
            Perguntas Frequentes
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground">
            Tire suas dúvidas sobre o Método IP
          </p>
        </div>

        {/* FAQ */}
        <Accordion
          type="single"
          collapsible
          className="w-full space-y-3 sm:space-y-4"
        >
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-card border border-border rounded-xl px-4 sm:px-6 py-2 shadow-sm hover:shadow-md transition-all"
            >
              <AccordionTrigger className="text-left text-base sm:text-lg md:text-xl font-semibold text-foreground hover:text-primary transition-colors">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-sm sm:text-base text-muted-foreground leading-relaxed pt-2 pb-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

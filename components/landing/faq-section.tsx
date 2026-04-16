"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { ArrowRight, MessageCircle } from "lucide-react"

const faqs = [
  {
    question: "Para quem é o curso O Novo Mercado?",
    answer: "O curso é para qualquer pessoa que queira aprender a criar, vender e escalar negócios digitais. Seja você um iniciante total ou alguém que já tem um negócio e quer expandir, o conteúdo foi desenvolvido para atender diferentes níveis de experiência."
  },
  {
    question: "Por quanto tempo terei acesso ao conteúdo?",
    answer: "O acesso é vitalício. Isso significa que você pode estudar no seu próprio ritmo, revisar as aulas quantas vezes quiser e terá acesso a todas as atualizações futuras do curso, sem nenhum custo adicional."
  },
  {
    question: "Preciso ter um produto ou negócio para começar?",
    answer: "Não! Um dos módulos do curso é justamente dedicado à criação de infoprodutos do zero. Você vai aprender a identificar oportunidades, validar ideias e criar produtos que as pessoas realmente querem comprar."
  },
  {
    question: "Como funcionam as mentorias em grupo?",
    answer: "As mentorias acontecem ao vivo, semanalmente, via Zoom. São sessões de 90 minutos onde você pode tirar dúvidas, receber feedback sobre seu projeto e aprender com as perguntas de outros alunos. As gravações ficam disponíveis na área de membros."
  },
  {
    question: "E se eu não gostar do curso?",
    answer: "Oferecemos garantia incondicional de 7 dias. Se por qualquer motivo você não ficar satisfeito, basta enviar um e-mail e devolveremos 100% do seu investimento. Sem perguntas, sem burocracia."
  },
  {
    question: "Posso parcelar o pagamento?",
    answer: "Sim! Oferecemos parcelamento em até 12x no cartão de crédito. Também aceitamos PIX, boleto bancário e PayPal. Entre em contato com nosso suporte para condições especiais de pagamento."
  },
  {
    question: "Os templates e ferramentas estão inclusos?",
    answer: "Sim, dependendo do plano escolhido. Os planos Completo e Premium incluem acesso a todos os 50+ templates de copy, planilhas de planejamento, scripts de vendas e outras ferramentas práticas para acelerar seus resultados."
  },
  {
    question: "Quanto tempo leva para ver resultados?",
    answer: "Isso depende do seu comprometimento e ponto de partida. Temos alunos que fizeram suas primeiras vendas em poucas semanas aplicando as estratégias do curso. O importante é aplicar o conhecimento de forma consistente."
  },
]

export function FaqSection() {
  return (
    <section className="py-20 lg:py-32 relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Content */}
          <div className="lg:sticky lg:top-8">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">FAQ</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 text-balance">
              Perguntas frequentes
            </h2>
            <p className="text-muted-foreground text-lg mt-4">
              Tire suas dúvidas sobre o curso. Se não encontrar a resposta que procura, entre em contato.
            </p>
            
            <div className="mt-8 p-6 bg-card border border-border rounded-2xl">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Ainda tem dúvidas?</p>
                  <p className="text-sm text-muted-foreground">Nossa equipe está pronta para ajudar</p>
                </div>
              </div>
              <Button variant="outline" className="w-full text-foreground hover:text-foreground">
                Falar com suporte
                <ArrowRight aria-hidden="true" className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Right Content - Accordion */}
          <div>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="bg-card border border-border rounded-xl px-6 data-[state=open]:border-primary/30 transition-colors"
                >
                  <AccordionTrigger className="text-left text-foreground hover:no-underline py-6 text-base md:text-lg font-medium">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  )
}

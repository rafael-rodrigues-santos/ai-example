import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Ricardo Mendes",
    role: "Empreendedor Digital",
    content: "Em 6 meses apliquei o método e faturei meu primeiro milhão. O conteúdo é direto ao ponto e sem enrolação.",
    rating: 5,
  },
  {
    name: "Carla Ferreira",
    role: "Copywriter",
    content: "Mudou completamente minha visão sobre negócios digitais. Hoje tenho uma agência com 15 clientes recorrentes.",
    rating: 5,
  },
  {
    name: "Bruno Costa",
    role: "Consultor de Marketing",
    content: "O melhor investimento que fiz na minha carreira. As aulas sobre posicionamento são transformadoras.",
    rating: 5,
  },
  {
    name: "Amanda Silva",
    role: "Infoprodutora",
    content: "Saí do zero e hoje tenho um infoproduto que me gera 6 dígitos por mês. Metodologia comprovada.",
    rating: 5,
  },
  {
    name: "Felipe Oliveira",
    role: "Social Media",
    content: "As estratégias de conteúdo me ajudaram a crescer 300% em engajamento. Vale cada centavo.",
    rating: 5,
  },
  {
    name: "Juliana Martins",
    role: "Mentora",
    content: "Transformei meu conhecimento em um negócio escalável. Hoje faturo múltiplos 6 dígitos por ano.",
    rating: 5,
  },
]

const stats = [
  { value: "50.000+", label: "Alunos" },
  { value: "R$500M+", label: "Faturados pelos alunos" },
  { value: "97%", label: "Taxa de satisfação" },
  { value: "200h+", label: "De conteúdo" },
]

export function SocialProof() {
  return (
    <section className="py-16 lg:py-32 bg-card/50">
      <div className="container mx-auto px-4">
        {/* Stats */}
        <div className="grid grid-cols-1 min-[380px]:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-14 md:mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-2xl min-[380px]:text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent break-words">
                {stat.value}
              </p>
              <p className="text-sm md:text-base text-muted-foreground mt-2">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Depoimentos</span>
          <h2 className="text-[clamp(1.65rem,8vw,3rem)] font-bold mt-4 text-balance">
            O que nossos alunos dizem
          </h2>
          <p className="text-muted-foreground text-base md:text-lg mt-4 max-w-2xl mx-auto">
            Milhares de pessoas já transformaram suas carreiras com nossa metodologia
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-card border border-border rounded-2xl p-5 md:p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground/90 leading-relaxed mb-6">
                {`"${testimonial.content}"`}
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-lg font-semibold text-primary">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

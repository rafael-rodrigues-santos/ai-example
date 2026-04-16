import { 
  Target, 
  TrendingUp, 
  Users, 
  Lightbulb, 
  MessageSquare, 
  BarChart3, 
  Rocket, 
  Shield,
  Video
} from "lucide-react"

const modules = [
  {
    icon: Target,
    title: "Posicionamento Estratégico",
    description: "Aprenda a se posicionar como autoridade no seu mercado e atrair os clientes certos.",
    lessons: "24 aulas",
  },
  {
    icon: MessageSquare,
    title: "Copywriting que Vende",
    description: "Domine a arte de escrever textos persuasivos que convertem visitantes em compradores.",
    lessons: "32 aulas",
  },
  {
    icon: TrendingUp,
    title: "Tráfego Pago e Orgânico",
    description: "Estratégias avançadas para gerar tráfego qualificado e escalar suas vendas.",
    lessons: "28 aulas",
  },
  {
    icon: Users,
    title: "Construção de Audiência",
    description: "Crie uma comunidade engajada que confia em você e compra seus produtos.",
    lessons: "20 aulas",
  },
  {
    icon: Lightbulb,
    title: "Criação de Infoprodutos",
    description: "Do conceito ao lançamento: crie produtos digitais que as pessoas querem comprar.",
    lessons: "36 aulas",
  },
  {
    icon: BarChart3,
    title: "Métricas e Otimização",
    description: "Analise dados para tomar decisões inteligentes e maximizar seus resultados.",
    lessons: "18 aulas",
  },
  {
    icon: Rocket,
    title: "Lançamentos Lucrativos",
    description: "A fórmula comprovada para lançamentos de 6 e 7 dígitos que você pode replicar.",
    lessons: "26 aulas",
  },
  {
    icon: Shield,
    title: "Mentalidade Empreendedora",
    description: "Desenvolva a mentalidade necessária para superar desafios e crescer consistentemente.",
    lessons: "16 aulas",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-20 lg:py-32 relative">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Conteúdo Completo</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 text-balance">
            O que você vai aprender
          </h2>
          <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
            Mais de 200 horas de conteúdo prático dividido em 8 módulos estratégicos
          </p>
        </div>

        {/* Modules Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {modules.map((module, index) => (
            <div 
              key={index} 
              className="group relative bg-card border border-border rounded-2xl p-6 transition-all duration-300 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-5 group-hover:from-primary/30 group-hover:to-accent/30 transition-all duration-300">
                <module.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">{module.title}</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">{module.description}</p>
              <div className="flex items-center gap-2 text-sm">
                <Video className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">{module.lessons}</span>
              </div>
              
              {/* Hover accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 rounded-b-2xl bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        {/* Additional features */}
        <div className="mt-16 grid md:grid-cols-3 gap-8 p-8 bg-card/50 border border-border rounded-2xl">
          <div className="text-center md:text-left">
            <p className="text-4xl font-bold text-primary mb-2">200+</p>
            <p className="text-foreground font-medium">Aulas em vídeo</p>
            <p className="text-sm text-muted-foreground mt-1">Conteúdo gravado em alta qualidade</p>
          </div>
          <div className="text-center md:text-left">
            <p className="text-4xl font-bold text-primary mb-2">50+</p>
            <p className="text-foreground font-medium">Templates e ferramentas</p>
            <p className="text-sm text-muted-foreground mt-1">Materiais prontos para usar</p>
          </div>
          <div className="text-center md:text-left">
            <p className="text-4xl font-bold text-primary mb-2">Vitalício</p>
            <p className="text-foreground font-medium">Acesso ilimitado</p>
            <p className="text-sm text-muted-foreground mt-1">Incluindo atualizações futuras</p>
          </div>
        </div>
      </div>
    </section>
  )
}

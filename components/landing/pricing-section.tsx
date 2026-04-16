import { Button } from "@/components/ui/button"
import { Check, Sparkles, ArrowRight } from "lucide-react"

const plans = [
  {
    name: "Essencial",
    description: "Para quem está começando no mercado digital",
    price: "997",
    originalPrice: "1.497",
    billing: "ou 12x de R$97",
    popular: false,
    features: [
      "Acesso a todos os 8 módulos",
      "200+ aulas em vídeo",
      "Certificado de conclusão",
      "Acesso vitalício",
      "Atualizações gratuitas",
      "Comunidade no Discord",
    ],
  },
  {
    name: "Completo",
    description: "A escolha da maioria dos nossos alunos",
    price: "1.997",
    originalPrice: "2.997",
    billing: "ou 12x de R$197",
    popular: true,
    features: [
      "Tudo do plano Essencial",
      "Mentorias em grupo ao vivo",
      "50+ templates e ferramentas",
      "Suporte prioritário",
      "Grupo exclusivo de networking",
      "Bônus: Curso de Copywriting",
      "Bônus: Curso de Tráfego Pago",
    ],
  },
  {
    name: "Premium",
    description: "Para quem quer acelerar ao máximo",
    price: "4.997",
    originalPrice: "7.997",
    billing: "ou 12x de R$497",
    popular: false,
    features: [
      "Tudo do plano Completo",
      "3 mentorias individuais",
      "Análise do seu negócio",
      "Grupo VIP com Ícaro",
      "Acesso antecipado a novidades",
      "Evento presencial anual",
      "Suporte 1-1 via WhatsApp",
    ],
  },
]

export function PricingSection() {
  return (
    <section className="py-20 lg:py-32 bg-card/50 relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Investimento</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 text-balance">
            Escolha o plano ideal para você
          </h2>
          <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
            Todos os planos incluem garantia incondicional de 7 dias
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`relative bg-card rounded-2xl p-8 transition-all duration-300 ${
                plan.popular 
                  ? 'border-2 border-primary shadow-xl shadow-primary/10 scale-105' 
                  : 'border border-border hover:border-primary/30'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground text-sm font-medium">
                    <Sparkles className="w-4 h-4" />
                    Mais Popular
                  </div>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-2xl font-bold text-foreground">{plan.name}</h3>
                <p className="text-muted-foreground mt-2">{plan.description}</p>
              </div>

              <div className="mb-6">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold text-foreground">R${plan.price}</span>
                  <span className="text-lg text-muted-foreground line-through">R${plan.originalPrice}</span>
                </div>
                <p className="text-sm text-muted-foreground mt-1">{plan.billing}</p>
              </div>

              <Button 
                className={`w-full py-6 text-base font-semibold transition-all duration-300 ${
                  plan.popular 
                    ? 'bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30' 
                    : 'bg-secondary hover:bg-secondary/80 text-secondary-foreground'
                }`}
              >
                Começar agora
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>

              <ul className="mt-8 space-y-4">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
                      plan.popular ? 'bg-primary/20' : 'bg-muted'
                    }`}>
                      <Check className={`w-3 h-3 ${plan.popular ? 'text-primary' : 'text-muted-foreground'}`} />
                    </div>
                    <span className="text-foreground/90">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Guarantee */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 bg-card border border-border rounded-2xl px-8 py-6">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
              <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div className="text-left">
              <p className="text-lg font-semibold text-foreground">Garantia incondicional de 7 dias</p>
              <p className="text-muted-foreground">Se não gostar, devolvemos 100% do seu dinheiro. Sem perguntas.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

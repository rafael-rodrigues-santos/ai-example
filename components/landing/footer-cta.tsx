import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

export function FooterCta() {
  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/50 to-background" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />
      
      <div className="container relative mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-balance">
            Pronto para dominar o{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Novo Mercado
            </span>
            ?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mt-6 max-w-2xl mx-auto">
            Junte-se a mais de 50.000 alunos que já transformaram suas carreiras e estão faturando com negócios digitais.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <Button
              size="lg"
              aria-label="Comecar inscricao agora"
              className="cta-pulse group text-base md:text-lg px-10 py-7 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground font-semibold shadow-lg shadow-primary/25 transition-all duration-300 hover:shadow-xl hover:shadow-primary/30 hover:scale-105"
            >
              Começar agora
              <ArrowRight aria-hidden="true" className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              aria-label="Ver aula gratuita"
              className="text-base md:text-lg px-10 py-7 border-border text-foreground hover:text-foreground hover:bg-card"
            >
              Ver aula gratuita
            </Button>
          </div>

          <p className="text-sm text-muted-foreground mt-8">
            Garantia incondicional de 7 dias • Acesso vitalício • Suporte dedicado
          </p>
        </div>
      </div>
    </section>
  )
}

export function Footer() {
  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="relative w-8 h-8 rounded-lg overflow-hidden ring-1 ring-border/60">
              <Image
                src="/placeholder-logo.svg"
                alt="Logo O Novo Mercado"
                fill
                sizes="32px"
                className="object-cover"
                loading="lazy"
              />
            </div>
            <span className="font-semibold text-foreground">O Novo Mercado</span>
          </div>
          
          <nav className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-foreground transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-foreground transition-colors">Suporte</a>
            <a href="#" className="hover:text-foreground transition-colors">Contato</a>
          </nav>
          
          <p className="text-sm text-muted-foreground">
            © 2026 O Novo Mercado. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}

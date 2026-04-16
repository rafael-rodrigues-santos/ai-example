"use client"

import { Button } from "@/components/ui/button"
import { Play, ArrowRight } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-card" />
      <div className="absolute top-1/4 -right-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -left-32 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      
      <div className="container relative mx-auto px-4 pt-8 pb-20 lg:pt-16 lg:pb-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <span aria-hidden="true" className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm font-medium text-primary">+50.000 alunos formados</span>
            </div>
            
            <h1 className="text-[clamp(1.9rem,9vw,3.75rem)] font-bold leading-tight text-balance">
              Domine o{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Novo Mercado
              </span>{" "}
              e construa um negócio digital lucrativo
            </h1>
            
            <p className="text-base md:text-xl text-muted-foreground leading-relaxed max-w-xl">
              Aprenda a metodologia comprovada para criar, vender e escalar produtos digitais. 
              Sem fórmulas mágicas, apenas estratégias que funcionam.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="cta-pulse group text-base px-8 py-6 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground font-semibold shadow-lg shadow-primary/25 transition-all duration-300 hover:shadow-xl hover:shadow-primary/30 hover:scale-105"
              >
                Quero me inscrever
                <ArrowRight aria-hidden="true" className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                aria-label="Ver apresentacao em video"
                className="text-base px-8 py-6 border-border text-foreground hover:text-foreground hover:bg-card"
              >
                <Play aria-hidden="true" className="mr-2 h-5 w-5" />
                Assistir apresentação
              </Button>
            </div>
            
            <div className="flex flex-col min-[360px]:flex-row min-[360px]:items-center gap-4 min-[360px]:gap-8 pt-2 md:pt-4">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="relative w-10 h-10 rounded-full border-2 border-background overflow-hidden"
                  >
                    <Image
                      src="/placeholder-logo.svg"
                      alt={`Avatar do aluno ${i}`}
                      fill
                      sizes="40px"
                      className="object-cover"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
              <div className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">4.9/5</span> baseado em +2.500 avaliações
              </div>
            </div>
          </motion.div>
          
          {/* Right Content - Video */}
          <div className="relative">
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-card border border-border shadow-2xl">
              <Image
                src="/placeholder.svg"
                alt="Prévia da aula introdutória do O Novo Mercado"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover opacity-50"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <button
                  type="button"
                  aria-label="Reproduzir aula introdutoria gratuita"
                  className="group relative w-20 h-20 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center shadow-lg shadow-primary/30 transition-all duration-300 hover:scale-110"
                >
                  <Play aria-hidden="true" className="w-8 h-8 text-primary-foreground fill-current ml-1" />
                  <span aria-hidden="true" className="absolute inset-0 rounded-full bg-primary/50 animate-ping" />
                </button>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-background/80 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-sm text-foreground/80 font-medium">Assista a aula introdutória gratuita</p>
              </div>
            </div>
            
            {/* Floating stats */}
            <div className="absolute -bottom-6 -left-6 bg-card border border-border rounded-xl p-4 shadow-xl">
              <p className="text-2xl font-bold text-foreground">+200h</p>
              <p className="text-sm text-muted-foreground">de conteúdo</p>
            </div>
            <div className="absolute -top-6 -right-6 bg-card border border-border rounded-xl p-4 shadow-xl">
              <p className="text-2xl font-bold text-primary">97%</p>
              <p className="text-sm text-muted-foreground">satisfação</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

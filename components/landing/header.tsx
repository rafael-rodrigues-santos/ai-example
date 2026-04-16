"use client"

import { useState, useEffect, useRef } from "react"
import type { KeyboardEvent, MouseEvent } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Image from "next/image"

type NavLink = {
  label: string
  href: `#${string}`
}

const navLinks: readonly NavLink[] = [
  { label: "Módulos", href: "#modulos" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Preços", href: "#precos" },
  { label: "FAQ", href: "#faq" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const mobileMenuRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = (event: MouseEvent<HTMLAnchorElement>, href: `#${string}`) => {
    event.preventDefault()

    const targetId = href.slice(1)
    const target = document.getElementById(targetId)
    if (!target) return

    target.scrollIntoView({
      behavior: "smooth",
      block: "start",
    })
    window.history.pushState(null, "", href)
    setIsMobileMenuOpen(false)
  }

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false)
      }
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  useEffect(() => {
    if (!isMobileMenuOpen || !mobileMenuRef.current) return

    const focusableElements = mobileMenuRef.current.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
    )
    const firstFocusable = focusableElements[0]
    const lastFocusable = focusableElements[focusableElements.length - 1]
    firstFocusable?.focus()

    const handleKeyDown = (event: KeyboardEvent | globalThis.KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMobileMenuOpen(false)
        return
      }

      if (event.key !== "Tab" || !firstFocusable || !lastFocusable) return

      if (event.shiftKey && document.activeElement === firstFocusable) {
        event.preventDefault()
        lastFocusable.focus()
      } else if (!event.shiftKey && document.activeElement === lastFocusable) {
        event.preventDefault()
        firstFocusable.focus()
      }
    }

    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [isMobileMenuOpen])

  return (
    <header
      className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/80 backdrop-blur-lg border-b border-border' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2" aria-label="Ir para o topo da pagina">
            <div className="relative w-8 h-8 overflow-hidden rounded-lg ring-1 ring-border/60">
              <Image
                src="/placeholder-logo.svg"
                alt="Logo O Novo Mercado"
                fill
                sizes="32px"
                className="object-cover"
                priority
              />
            </div>
            <span className="font-semibold text-foreground hidden sm:block">O Novo Mercado</span>
          </a>

          {/* Desktop Navigation */}
          <nav aria-label="Menu principal" className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                onClick={(event) => handleNavClick(event, link.href)}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              className="cta-pulse bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground font-medium"
            >
              Inscreva-se
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-foreground cursor-pointer"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-main-menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div
            id="mobile-main-menu"
            ref={mobileMenuRef}
            className="md:hidden py-4 border-t border-border bg-background/95 backdrop-blur-lg"
          >
            <nav aria-label="Menu principal mobile" className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a 
                  key={link.href}
                  href={link.href}
                  className="text-foreground hover:text-primary transition-colors py-2 text-sm"
                  onClick={(event) => handleNavClick(event, link.href)}
                >
                  {link.label}
                </a>
              ))}
              <Button
                className="cta-pulse w-full mt-4 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground font-medium"
              >
                Inscreva-se agora
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

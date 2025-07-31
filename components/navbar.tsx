"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import { ThemeToggle } from "./theme-toggle"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <span className="text-2xl font-bold bg-gradient-to-r from-primary to-slate-600 bg-clip-text text-transparent">
            Zectra
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex flex-1 items-center space-x-6 text-sm font-medium">
          <Link href="/quienes-somos" className="transition-colors hover:text-primary">
            Quiénes Somos
          </Link>
          <Link href="/soluciones" className="transition-colors hover:text-primary">
            Soluciones
          </Link>
          <Link href="/inversores" className="transition-colors hover:text-primary">
            Inversores
          </Link>
          <Link href="/recursos" className="transition-colors hover:text-primary">
            Recursos
          </Link>
          <Link href="/contacto" className="transition-colors hover:text-primary">
            Contacto
          </Link>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <ThemeToggle />
          <Button variant="ghost" size="sm" asChild>
            <Link href="/contacto">Únete al Proyecto</Link>
          </Button>
        </div>

        {/* Mobile menu button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t bg-background/95 backdrop-blur">
          <nav className="container py-4 space-y-4">
            <Link href="/quienes-somos" className="block py-2 text-sm hover:text-primary">
              Quiénes Somos
            </Link>
            <Link href="/soluciones" className="block py-2 text-sm hover:text-primary">
              Soluciones
            </Link>
            <Link href="/inversores" className="block py-2 text-sm hover:text-primary">
              Inversores
            </Link>
            <Link href="/recursos" className="block py-2 text-sm hover:text-primary">
              Recursos
            </Link>
            <Link href="/contacto" className="block py-2 text-sm hover:text-primary">
              Contacto
            </Link>
            <div className="pt-4 space-y-2 flex items-center gap-4">
              <ThemeToggle />
              <Button variant="ghost" size="sm" className="flex-1" asChild>
                <Link href="/contacto">Únete al Proyecto</Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}

import "./globals.css"
import { Inter } from "next/font/google"
import type React from "react"
import type { Metadata } from "next"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Zectra - Startup de Inteligencia Artificial | IA Aplicada para Empresas",
  description:
    "Zectra redefine los límites de la inteligencia artificial. Startup emergente especializada en IA para seguridad, logística, industria y vehículos autónomos. Buscamos inversores y partners estratégicos.",
  keywords:
    "startup IA, inteligencia artificial aplicada, soluciones IA empresas, visión artificial, ciberseguridad IA, Zectra, IA logística, automatización industrial, IA vehículos autónomos, detección amenazas",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${inter.className} bg-background text-foreground antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}

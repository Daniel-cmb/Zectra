import { Button } from "@/components/ui/button"
import { ArrowRight, Zap } from "lucide-react"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="relative overflow-hidden gradient-bg text-white">
      <div className="absolute inset-0 ai-pattern opacity-10" />

      <div className="relative container max-w-screen-2xl py-24 md:py-32">
        <div className="flex flex-col items-center text-center space-y-8">
          <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 animate-pulse">
            <Zap className="h-4 w-4 text-green-400" />
            <span className="text-sm font-medium">Startup Emergente de IA</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight max-w-4xl animate-fade-in">
            Redefiniendo los límites de la{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              inteligencia artificial
            </span>
          </h1>

          <p className="max-w-2xl text-lg sm:text-xl text-gray-300 leading-relaxed animate-fade-in-delay">
            Democratizamos la inteligencia artificial con soluciones innovadoras para seguridad, logística, industria y
            vehículos autónomos.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-fade-in-delay-2">
            <Button size="lg" className="bg-primary hover:bg-primary/90 hover:scale-105 transition-transform" asChild>
              <Link href="/contacto">
                Únete al Proyecto
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/20 text-white hover:bg-white/10 bg-transparent hover:scale-105 transition-transform"
              asChild
            >
              <Link href="/quienes-somos">Conócenos</Link>
            </Button>
          </div>

          <div className="pt-8 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center animate-fade-in-delay-3">
            <div className="hover:scale-105 transition-transform">
              <div className="text-2xl font-bold text-slate-400">7+</div>
              <div className="text-sm text-gray-300">Soluciones de IA</div>
            </div>
            <div className="hover:scale-105 transition-transform">
              <div className="text-2xl font-bold text-slate-400">100%</div>
              <div className="text-sm text-gray-300">Enfoque en Innovación</div>
            </div>
            <div className="hover:scale-105 transition-transform">
              <div className="text-2xl font-bold text-slate-400">∞</div>
              <div className="text-sm text-gray-300">Potencial de Crecimiento</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

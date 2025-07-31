import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { TrendingUp, Users, Lightbulb, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function InvestorsCTA() {
  return (
    <section className="py-24 gradient-bg text-white">
      <div className="container max-w-screen-2xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Únete a la Revolución de la IA</h2>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto">
            Buscamos inversores visionarios, partners estratégicos y talento excepcional para construir el futuro de la
            inteligencia artificial aplicada.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardContent className="p-6 text-center">
              <TrendingUp className="h-12 w-12 text-slate-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Inversores</h3>
              <p className="text-gray-200 mb-4">
                Oportunidad única de invertir en una startup de IA con alto potencial de crecimiento
              </p>
              <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 bg-transparent" asChild>
                <Link href="/inversores">Ver Pitch Deck</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardContent className="p-6 text-center">
              <Users className="h-12 w-12 text-slate-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Partners Estratégicos</h3>
              <p className="text-gray-200 mb-4">Colabora con nosotros para llevar la IA a nuevos mercados y sectores</p>
              <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 bg-transparent" asChild>
                <Link href="/contacto">Proponer Alianza</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardContent className="p-6 text-center">
              <Lightbulb className="h-12 w-12 text-slate-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Únete al Equipo</h3>
              <p className="text-gray-200 mb-4">
                Forma parte de un proyecto innovador desde sus inicios y ayuda a construir el futuro
              </p>
              <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 bg-transparent" asChild>
                <Link href="/contacto">Participar</Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
            <Link href="/contacto">
              Contacta con el Fundador
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

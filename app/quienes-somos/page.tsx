import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { User, Target, Eye, Heart, Lightbulb, ArrowRight } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Quiénes Somos - Zectra AI | Startup de Inteligencia Artificial",
  description:
    "Conoce la historia, misión y visión de Zectra, la startup emergente que democratiza la inteligencia artificial aplicada. Un proyecto innovador en busca de inversores y colaboradores.",
}

export default function QuienesSomos() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-bg text-white py-24">
        <div className="container max-w-screen-2xl">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">La Historia de Zectra</h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Una startup emergente nacida de la pasión por democratizar la inteligencia artificial y crear soluciones
              que realmente transformen el mundo empresarial.
            </p>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-24 bg-gray-50">
        <div className="container max-w-screen-2xl">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">El Fundador</h2>
              <p className="text-lg text-muted-foreground">
                Un visionario comprometido con el futuro de la inteligencia artificial
              </p>
            </div>

            <Card className="p-8">
              <CardContent className="flex flex-col md:flex-row items-center gap-8">
                <div className="w-48 h-48 bg-gradient-to-br from-primary to-green-600 rounded-full flex items-center justify-center">
                  <User className="h-24 w-24 text-white" />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl font-bold mb-4">Fundador y CEO</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Como único miembro del equipo fundador, lidero Zectra con la visión de democratizar la inteligencia
                    artificial. Mi experiencia en tecnología y mi pasión por la innovación me impulsan a crear
                    soluciones que realmente marquen la diferencia en el mundo empresarial.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Actualmente, estoy buscando inversores visionarios, partners estratégicos y talento excepcional para
                    unirse a esta emocionante aventura y construir juntos el futuro de la IA aplicada.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-24">
        <div className="container max-w-screen-2xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nuestra Filosofía</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Los principios que guían cada decisión y desarrollo en Zectra
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-l-4 border-l-primary">
              <CardContent className="p-8">
                <Target className="h-12 w-12 text-primary mb-6" />
                <h3 className="text-2xl font-semibold mb-4">Misión</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Democratizar la inteligencia artificial aplicada, haciendo que las tecnologías más avanzadas sean
                  accesibles para empresas de todos los tamaños, desde startups hasta grandes corporaciones.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-green-500">
              <CardContent className="p-8">
                <Eye className="h-12 w-12 text-green-500 mb-6" />
                <h3 className="text-2xl font-semibold mb-4">Visión</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Crear modelos de inteligencia artificial útiles, éticos y sostenibles que transformen industrias
                  completas y mejoren significativamente la calidad de vida de las personas.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-emerald-500">
              <CardContent className="p-8">
                <Heart className="h-12 w-12 text-emerald-500 mb-6" />
                <h3 className="text-2xl font-semibold mb-4">Valores</h3>
                <ul className="text-muted-foreground space-y-2">
                  <li>• Innovación constante</li>
                  <li>• Seguridad de datos</li>
                  <li>• Eficiencia operativa</li>
                  <li>• Impacto social positivo</li>
                  <li>• Transparencia y ética</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Zectra */}
      <section className="py-24 bg-gray-50">
        <div className="container max-w-screen-2xl">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">¿Por Qué Zectra?</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <Card>
                <CardContent className="p-6">
                  <Lightbulb className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Innovación Disruptiva</h3>
                  <p className="text-muted-foreground">
                    Desarrollamos soluciones de IA que realmente resuelven problemas reales, no solo tecnología por
                    tecnología.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <Target className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Enfoque Especializado</h3>
                  <p className="text-muted-foreground">
                    Nos especializamos en sectores específicos para ofrecer soluciones verdaderamente optimizadas y
                    efectivas.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-4">
              <Button size="lg" asChild>
                <Link href="/inversores">
                  Únete a Nuestra Visión
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <p className="text-muted-foreground">¿Quieres formar parte de esta revolución tecnológica?</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

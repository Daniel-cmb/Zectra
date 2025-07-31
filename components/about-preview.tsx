import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Target, Eye, Heart, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function AboutPreview() {
  return (
    <section className="py-24 bg-gray-800">
      <div className="container max-w-screen-2xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Una Startup con Visión de Futuro</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Zectra nace de la pasión por democratizar la inteligencia artificial y crear soluciones que realmente
            impacten en el mundo empresarial.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <Card className="border-l-4 border-l-primary">
            <CardContent className="p-6">
              <Target className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Misión</h3>
              <p className="text-muted-foreground">
                Democratizar la inteligencia artificial aplicada, haciendo que las tecnologías más avanzadas sean
                accesibles para empresas de todos los tamaños.
              </p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-green-500">
            <CardContent className="p-6">
              <Eye className="h-8 w-8 text-green-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Visión</h3>
              <p className="text-muted-foreground">
                Crear modelos de IA útiles, éticos y sostenibles que transformen industrias y mejoren la calidad de vida
                de las personas.
              </p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-emerald-500">
            <CardContent className="p-6">
              <Heart className="h-8 w-8 text-emerald-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Valores</h3>
              <p className="text-muted-foreground">
                Innovación constante, seguridad de datos, eficiencia operativa y impacto positivo en la sociedad.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <Button asChild>
            <Link href="/quienes-somos">
              Conoce Más Sobre Nosotros
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

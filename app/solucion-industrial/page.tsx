import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Factory, CheckCircle, ArrowRight, Cog, AlertTriangle, TrendingUp, Wrench } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "IA Industrial - Zectra | Automatización y Mantenimiento Predictivo",
  description:
    "Soluciones de inteligencia artificial para la industria 4.0. Mantenimiento predictivo, control de calidad y optimización de procesos industriales.",
}

const features = [
  {
    icon: Wrench,
    title: "Mantenimiento Predictivo",
    description: "Predicción de fallos en maquinaria antes de que ocurran, reduciendo paradas no planificadas",
  },
  {
    icon: Cog,
    title: "Optimización de Procesos",
    description: "Análisis continuo para mejorar la eficiencia y reducir desperdicios en producción",
  },
  {
    icon: AlertTriangle,
    title: "Control de Calidad",
    description: "Detección automática de defectos y anomalías en productos y procesos",
  },
  {
    icon: TrendingUp,
    title: "Analytics Avanzados",
    description: "Dashboards inteligentes con métricas clave y recomendaciones de mejora",
  },
]

const applications = [
  {
    title: "Manufactura",
    description: "Optimización de líneas de producción",
    benefits: [
      "Reducción de defectos",
      "Aumento de productividad",
      "Menor desperdicio",
      "Control de calidad automático",
    ],
  },
  {
    title: "Energía",
    description: "Gestión inteligente de plantas",
    benefits: ["Mantenimiento predictivo", "Optimización energética", "Reducción de emisiones", "Seguridad mejorada"],
  },
  {
    title: "Química y Farmacéutica",
    description: "Procesos controlados por IA",
    benefits: ["Cumplimiento normativo", "Trazabilidad completa", "Optimización de fórmulas", "Control de temperatura"],
  },
]

const benefits = [
  "Reducción del 45% en paradas no planificadas",
  "Aumento del 30% en eficiencia operativa",
  "Disminución del 25% en costos de mantenimiento",
  "Mejora del 40% en control de calidad",
  "Reducción del 35% en desperdicios",
  "Aumento del 20% en vida útil de equipos",
  "ROI comprobado en menos de 18 meses",
  "Cumplimiento automático de normativas",
]

export default function SolucionIndustrial() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="gradient-bg text-white py-24">
        <div className="container max-w-screen-2xl">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 rounded-xl bg-gradient-to-r from-orange-500 to-orange-700 shadow-lg">
                <Factory className="h-12 w-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">IA Industrial</h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Transforma tu industria con inteligencia artificial que optimiza procesos, predice mantenimientos y mejora
              la calidad de producción.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24">
        <div className="container max-w-screen-2xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Industria 4.0 Inteligente</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Tecnología de vanguardia para la automatización industrial moderna
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <feature.icon className="h-8 w-8 text-orange-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-24 bg-muted">
        <div className="container max-w-screen-2xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Sectores Industriales</h2>
            <p className="text-lg text-muted-foreground">Soluciones especializadas para diferentes industrias</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {applications.map((app, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{app.title}</h3>
                  <p className="text-muted-foreground mb-4">{app.description}</p>
                  <div className="space-y-2">
                    {app.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24">
        <div className="container max-w-screen-2xl">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Impacto Medible</h2>
              <p className="text-lg text-muted-foreground">
                Resultados que nuestras soluciones industriales pueden generar
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                  <span className="text-foreground">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 gradient-bg text-white">
        <div className="container max-w-screen-2xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Listo para la Industria 4.0?</h2>
          <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
            Contáctanos para explorar cómo la IA puede revolucionar tu proceso industrial.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
              <Link href="/contacto">
                Solicitar Consulta
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/20 text-white hover:bg-white/10 bg-transparent"
              asChild
            >
              <Link href="/soluciones">Ver Todas las Soluciones</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

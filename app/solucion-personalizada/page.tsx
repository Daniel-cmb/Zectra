import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Building, CheckCircle, ArrowRight, Lightbulb, Users, Cog, Target } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "IA Personalizada - Zectra | Soluciones a Medida",
  description:
    "Soluciones de inteligencia artificial personalizadas para tu empresa. Desarrollo a medida, integración con sistemas existentes y soporte especializado.",
}

const features = [
  {
    icon: Lightbulb,
    title: "Análisis de Necesidades",
    description: "Evaluación profunda de tus procesos para identificar oportunidades de IA",
  },
  {
    icon: Cog,
    title: "Desarrollo a Medida",
    description: "Creación de soluciones específicas adaptadas a tu industria y procesos",
  },
  {
    icon: Users,
    title: "Integración Completa",
    description: "Implementación seamless con tus sistemas y workflows existentes",
  },
  {
    icon: Target,
    title: "Soporte Continuo",
    description: "Acompañamiento técnico y optimización continua de la solución",
  },
]

const process = [
  {
    step: "1",
    title: "Consulta Inicial",
    description: "Análisis de tus necesidades y objetivos empresariales",
  },
  {
    step: "2",
    title: "Diseño de Solución",
    description: "Propuesta técnica detallada y roadmap de implementación",
  },
  {
    step: "3",
    title: "Desarrollo MVP",
    description: "Creación de un producto mínimo viable para validación",
  },
  {
    step: "4",
    title: "Implementación",
    description: "Despliegue completo e integración con sistemas existentes",
  },
  {
    step: "5",
    title: "Optimización",
    description: "Mejora continua basada en datos y feedback",
  },
]

const industries = [
  {
    title: "Fintech",
    description: "Detección de fraudes, análisis de riesgo, trading algorítmico",
  },
  {
    title: "Healthcare",
    description: "Diagnóstico asistido, análisis de imágenes médicas, gestión hospitalaria",
  },
  {
    title: "Retail",
    description: "Recomendaciones personalizadas, optimización de precios, análisis de sentimiento",
  },
  {
    title: "Educación",
    description: "Aprendizaje adaptativo, evaluación automática, tutorías inteligentes",
  },
  {
    title: "Agricultura",
    description: "Agricultura de precisión, monitoreo de cultivos, predicción climática",
  },
  {
    title: "Legal",
    description: "Análisis de documentos, investigación legal, automatización de contratos",
  },
]

const benefits = [
  "Solución 100% adaptada a tus necesidades",
  "Integración con sistemas existentes",
  "Escalabilidad según crecimiento",
  "Propiedad intelectual compartida",
  "Soporte técnico especializado",
  "Actualizaciones y mejoras continuas",
  "ROI medible y transparente",
  "Cumplimiento normativo garantizado",
]

export default function SolucionPersonalizada() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="gradient-bg text-white py-24">
        <div className="container max-w-screen-2xl">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 rounded-xl bg-gradient-to-r from-purple-500 to-purple-700 shadow-lg">
                <Building className="h-12 w-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">IA Personalizada</h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Desarrollamos soluciones de inteligencia artificial completamente personalizadas para resolver los
              desafíos específicos de tu empresa.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24">
        <div className="container max-w-screen-2xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Enfoque Personalizado</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Metodología probada para crear soluciones de IA que se adapten perfectamente a tu negocio
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <feature.icon className="h-8 w-8 text-purple-500 flex-shrink-0 mt-1" />
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

      {/* Process Section */}
      <section className="py-24 bg-muted">
        <div className="container max-w-screen-2xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Proceso de Desarrollo</h2>
            <p className="text-lg text-muted-foreground">
              Metodología estructurada para garantizar el éxito de tu proyecto de IA
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {process.map((step, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-purple-600 dark:text-purple-300 font-bold">{step.step}</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-24">
        <div className="container max-w-screen-2xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Industrias que Atendemos</h2>
            <p className="text-lg text-muted-foreground">
              Experiencia en múltiples sectores con casos de uso específicos
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{industry.title}</h3>
                  <p className="text-muted-foreground">{industry.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-muted">
        <div className="container max-w-screen-2xl">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ventajas de Trabajar con Nosotros</h2>
              <p className="text-lg text-muted-foreground">Beneficios únicos de nuestro enfoque personalizado</p>
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Tienes un Desafío Específico?</h2>
          <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
            Contáctanos para discutir cómo podemos crear una solución de IA personalizada para tu empresa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
              <Link href="/contacto">
                Solicitar Consulta Gratuita
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

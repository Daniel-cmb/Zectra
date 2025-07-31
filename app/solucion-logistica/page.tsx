import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Truck, CheckCircle, ArrowRight, Route, Package, BarChart3, Clock } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "IA para Logística - Zectra | Optimización Inteligente de Rutas",
  description:
    "Soluciones de inteligencia artificial para logística. Optimización de rutas, gestión de inventarios y predicción de demanda con IA avanzada.",
}

const features = [
  {
    icon: Route,
    title: "Optimización de Rutas",
    description: "Algoritmos avanzados que calculan las rutas más eficientes en tiempo real",
  },
  {
    icon: Package,
    title: "Gestión de Inventarios",
    description: "Control automatizado de stock con predicción de necesidades",
  },
  {
    icon: BarChart3,
    title: "Predicción de Demanda",
    description: "Análisis predictivo para anticipar picos de demanda y optimizar recursos",
  },
  {
    icon: Clock,
    title: "Entregas en Tiempo Real",
    description: "Seguimiento y optimización continua de tiempos de entrega",
  },
]

const applications = [
  {
    title: "E-commerce",
    description: "Optimización de última milla",
    benefits: [
      "Reducción de costos de entrega",
      "Mejora en tiempos de entrega",
      "Satisfacción del cliente",
      "Gestión de devoluciones",
    ],
  },
  {
    title: "Distribución",
    description: "Gestión de flotas y almacenes",
    benefits: [
      "Optimización de rutas de reparto",
      "Control de inventarios",
      "Reducción de combustible",
      "Mantenimiento predictivo",
    ],
  },
  {
    title: "Supply Chain",
    description: "Cadena de suministro inteligente",
    benefits: ["Visibilidad completa", "Reducción de desperdicios", "Optimización de costos", "Gestión de riesgos"],
  },
]

const benefits = [
  "Reducción del 30% en costos de transporte",
  "Mejora del 25% en tiempos de entrega",
  "Optimización del 40% en gestión de inventarios",
  "Reducción del 20% en emisiones de CO2",
  "Aumento del 35% en satisfacción del cliente",
  "Automatización del 80% de procesos rutinarios",
  "ROI comprobado en menos de 12 meses",
  "Integración con sistemas ERP existentes",
]

export default function SolucionLogistica() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="gradient-bg text-white py-24">
        <div className="container max-w-screen-2xl">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 rounded-xl bg-gradient-to-r from-blue-500 to-blue-700 shadow-lg">
                <Truck className="h-12 w-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">IA para Logística</h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Optimiza tu cadena de suministro con inteligencia artificial que reduce costos, mejora tiempos de entrega
              y maximiza la eficiencia operativa.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24">
        <div className="container max-w-screen-2xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Características Principales</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Tecnología avanzada para revolucionar tu operación logística
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <feature.icon className="h-8 w-8 text-blue-500 flex-shrink-0 mt-1" />
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Aplicaciones por Sector</h2>
            <p className="text-lg text-muted-foreground">Soluciones adaptadas a diferentes necesidades logísticas</p>
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Beneficios Comprobados</h2>
              <p className="text-lg text-muted-foreground">Resultados reales que nuestras soluciones pueden ofrecer</p>
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Listo para Optimizar tu Logística?</h2>
          <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
            Contáctanos para discutir cómo la IA puede transformar tu operación logística.
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

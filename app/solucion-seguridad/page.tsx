import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Shield, CheckCircle, ArrowRight, Eye, Bell, Users, BarChart3 } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "IA para Seguridad - Zectra | Detección Inteligente de Amenazas",
  description:
    "Soluciones de inteligencia artificial para seguridad empresarial. Detección en tiempo real, análisis predictivo y sistemas de vigilancia inteligente.",
}

const features = [
  {
    icon: Eye,
    title: "Vigilancia Inteligente",
    description: "Monitoreo 24/7 con reconocimiento facial y detección de objetos en tiempo real",
  },
  {
    icon: Bell,
    title: "Alertas Automáticas",
    description: "Sistema de notificaciones inteligentes que reduce falsos positivos",
  },
  {
    icon: Users,
    title: "Control de Acceso",
    description: "Gestión automatizada de permisos y accesos con biometría avanzada",
  },
  {
    icon: BarChart3,
    title: "Analytics Avanzados",
    description: "Informes detallados y análisis predictivo de patrones de seguridad",
  },
]

const benefits = [
  "Reducción del 90% en falsos positivos",
  "Detección de amenazas en menos de 2 segundos",
  "Integración con sistemas existentes",
  "ROI comprobado en menos de 6 meses",
  "Cumplimiento con normativas de privacidad",
  "Soporte técnico 24/7",
]

export default function SolucionSeguridad() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="gradient-bg text-white py-24">
        <div className="container max-w-screen-2xl">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 rounded-xl bg-gradient-to-r from-red-500 to-red-700 shadow-lg">
                <Shield className="h-12 w-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">IA para Seguridad</h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Protege tu empresa con sistemas de inteligencia artificial que detectan amenazas en tiempo real y analizan
              patrones de riesgo con precisión excepcional.
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
              Tecnología de vanguardia para una seguridad integral y inteligente
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <feature.icon className="h-8 w-8 text-red-500 flex-shrink-0 mt-1" />
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

      {/* Benefits Section */}
      <section className="py-24 bg-muted">
        <div className="container max-w-screen-2xl">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Beneficios Comprobados</h2>
              <p className="text-lg text-muted-foreground">Resultados reales que nuestros clientes han experimentado</p>
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

      {/* How it Works */}
      <section className="py-24">
        <div className="container max-w-screen-2xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">¿Cómo Funciona?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-red-600 font-bold">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Análisis del Entorno</h3>
                <p className="text-muted-foreground">
                  Nuestros algoritmos analizan continuamente las cámaras y sensores de tu empresa
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-red-600 font-bold">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Detección Inteligente</h3>
                <p className="text-muted-foreground">
                  La IA identifica patrones anómalos y amenazas potenciales en tiempo real
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-red-600 font-bold">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Respuesta Automática</h3>
                <p className="text-muted-foreground">
                  El sistema envía alertas inmediatas y activa protocolos de seguridad
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 gradient-bg text-white">
        <div className="container max-w-screen-2xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Listo para Revolucionar tu Seguridad?</h2>
          <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
            Contáctanos para una demostración personalizada y descubre cómo la IA puede proteger tu empresa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
              <Link href="/contacto">
                Solicitar Demo
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

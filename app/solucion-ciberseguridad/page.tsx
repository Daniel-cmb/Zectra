import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Lock, CheckCircle, ArrowRight, Shield, AlertTriangle, Eye, Zap } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Ciberseguridad con IA - Zectra | Protección Avanzada contra Amenazas",
  description:
    "Soluciones de inteligencia artificial para ciberseguridad. Detección de amenazas avanzadas, análisis de vulnerabilidades y respuesta automatizada a incidentes.",
}

const features = [
  {
    icon: Eye,
    title: "Detección de Amenazas",
    description: "Identificación en tiempo real de ataques cibernéticos y comportamientos anómalos",
  },
  {
    icon: Shield,
    title: "Análisis de Vulnerabilidades",
    description: "Evaluación continua de sistemas para identificar puntos débiles",
  },
  {
    icon: Zap,
    title: "Respuesta Automatizada",
    description: "Acciones inmediatas para contener y mitigar amenazas detectadas",
  },
  {
    icon: AlertTriangle,
    title: "Monitoreo 24/7",
    description: "Vigilancia continua de redes, sistemas y aplicaciones críticas",
  },
]

const threats = [
  {
    title: "Malware Avanzado",
    description: "Detección de virus, ransomware y software malicioso",
  },
  {
    title: "Ataques de Phishing",
    description: "Identificación de correos y sitios web fraudulentos",
  },
  {
    title: "Intrusiones de Red",
    description: "Detección de accesos no autorizados a sistemas",
  },
  {
    title: "Amenazas Internas",
    description: "Monitoreo de comportamientos sospechosos de usuarios",
  },
  {
    title: "Ataques DDoS",
    description: "Protección contra ataques de denegación de servicio",
  },
  {
    title: "Fraude Digital",
    description: "Detección de transacciones y actividades fraudulentas",
  },
]

const benefits = [
  "Detección del 99.8% de amenazas conocidas",
  "Reducción del 85% en tiempo de respuesta",
  "Disminución del 70% en falsos positivos",
  "Protección 24/7 automatizada",
  "Cumplimiento normativo garantizado",
  "Reducción del 60% en costos de seguridad",
  "Integración con SIEM existentes",
  "Reportes ejecutivos automatizados",
]

export default function SolucionCiberseguridad() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="gradient-bg text-white py-24">
        <div className="container max-w-screen-2xl">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 rounded-xl bg-gradient-to-r from-indigo-500 to-indigo-700 shadow-lg">
                <Lock className="h-12 w-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Ciberseguridad con IA</h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Protege tu empresa con inteligencia artificial que detecta, analiza y responde a amenazas cibernéticas
              avanzadas en tiempo real.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24">
        <div className="container max-w-screen-2xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Protección Inteligente</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Tecnología de IA para una ciberseguridad proactiva y adaptativa
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <feature.icon className="h-8 w-8 text-indigo-500 flex-shrink-0 mt-1" />
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

      {/* Threats Section */}
      <section className="py-24 bg-muted">
        <div className="container max-w-screen-2xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Amenazas que Detectamos</h2>
            <p className="text-lg text-muted-foreground">
              Protección integral contra las amenazas cibernéticas más comunes y avanzadas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {threats.map((threat, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-2">{threat.title}</h3>
                  <p className="text-muted-foreground">{threat.description}</p>
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Resultados Comprobados</h2>
              <p className="text-lg text-muted-foreground">
                Beneficios que nuestras soluciones de ciberseguridad pueden ofrecer
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Listo para Fortalecer tu Ciberseguridad?</h2>
          <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
            Contáctanos para una evaluación gratuita de tu postura de seguridad actual.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
              <Link href="/contacto">
                Evaluación Gratuita
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

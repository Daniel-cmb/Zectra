import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { TrendingUp, Target, Users, Lightbulb, ArrowRight, DollarSign, BarChart } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Inversores - Zectra AI | Oportunidad de Inversión en IA",
  description:
    "Únete a la revolución de la IA. Oportunidad única de inversión en startup emergente con alto potencial de crecimiento en inteligencia artificial aplicada.",
}

const metrics = [
  {
    icon: Target,
    title: "Mercado Objetivo",
    value: "$150B+",
    description: "Mercado global de IA empresarial para 2027",
  },
  {
    icon: TrendingUp,
    title: "Crecimiento Proyectado",
    value: "300%",
    description: "Crecimiento esperado en los próximos 3 años",
  },
  {
    icon: Users,
    title: "Sectores Objetivo",
    value: "6+",
    description: "Industrias con demanda comprobada de IA",
  },
  {
    icon: BarChart,
    title: "ROI Proyectado",
    value: "10x",
    description: "Retorno de inversión estimado a 5 años",
  },
]

const milestones = [
  {
    phase: "Fase 1",
    timeline: "Q1-Q2 2025",
    title: "MVP y Validación",
    description: "Desarrollo de productos mínimos viables y primeros clientes piloto",
    funding: "€250K",
  },
  {
    phase: "Fase 2",
    timeline: "Q3-Q4 2025",
    title: "Escalabilidad",
    description: "Expansión del equipo, desarrollo de plataforma y primeras ventas",
    funding: "€750K",
  },
  {
    phase: "Fase 3",
    timeline: "2026",
    title: "Crecimiento",
    description: "Expansión internacional y desarrollo de nuevas soluciones",
    funding: "€2M",
  },
]

const advantages = [
  "Entrada temprana en mercado de alto crecimiento",
  "Fundador con visión clara y experiencia técnica",
  "Soluciones diferenciadas con casos de uso específicos",
  "Modelo de negocio escalable y recurrente",
  "Potencial de adquisición por grandes tech companies",
  "Impacto social positivo a través de la democratización de la IA",
]

export default function Inversores() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="gradient-bg text-white py-24">
        <div className="container max-w-screen-2xl">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Invierte en el Futuro de la IA</h1>
            <p className="text-xl text-gray-200 leading-relaxed mb-8">
              Únete a nosotros en esta emocionante aventura para democratizar la inteligencia artificial y crear
              soluciones que transformen industrias completas.
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
              <Link href="/contacto">
                Solicitar Pitch Deck
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Market Metrics */}
      <section className="py-24">
        <div className="container max-w-screen-2xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Oportunidad de Mercado</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              El mercado de inteligencia artificial empresarial está experimentando un crecimiento exponencial
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <metric.icon className="h-8 w-8 text-primary mx-auto mb-4" />
                  <div className="text-3xl font-bold text-primary mb-2">{metric.value}</div>
                  <h3 className="text-lg font-semibold mb-2">{metric.title}</h3>
                  <p className="text-sm text-muted-foreground">{metric.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Roadmap */}
      <section className="py-24 bg-muted">
        <div className="container max-w-screen-2xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Roadmap de Inversión</h2>
            <p className="text-lg text-muted-foreground">
              Plan estratégico de crecimiento por fases con objetivos claros y medibles
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {milestones.map((milestone, index) => (
              <Card key={index} className="relative">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">
                      {index + 1}
                    </div>
                    <div>
                      <div className="font-semibold">{milestone.phase}</div>
                      <div className="text-sm text-muted-foreground">{milestone.timeline}</div>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>
                  <p className="text-muted-foreground mb-4">{milestone.description}</p>
                  <div className="flex items-center gap-2 text-green-600 font-semibold">
                    <DollarSign className="h-4 w-4" />
                    <span>{milestone.funding}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Invest */}
      <section className="py-24">
        <div className="container max-w-screen-2xl">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">¿Por Qué Invertir en Zectra?</h2>
            <p className="text-lg text-muted-foreground">
              Ventajas competitivas que nos posicionan para el éxito en el mercado de IA
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {advantages.map((advantage, index) => (
              <div key={index} className="flex items-start gap-3">
                <TrendingUp className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                <span className="text-foreground">{advantage}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Types */}
      <section className="py-24 bg-muted">
        <div className="container max-w-screen-2xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Tipos de Inversión</h2>
            <p className="text-lg text-muted-foreground">Diferentes formas de participar en el crecimiento de Zectra</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6 text-center">
                <DollarSign className="h-12 w-12 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Inversión Seed</h3>
                <p className="text-muted-foreground mb-4">
                  Participación equity en las primeras rondas de financiación
                </p>
                <Button variant="outline" asChild>
                  <Link href="/contacto">Más Información</Link>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <Users className="h-12 w-12 text-blue-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Partnership Estratégico</h3>
                <p className="text-muted-foreground mb-4">Colaboración técnica y comercial con beneficios mutuos</p>
                <Button variant="outline" asChild>
                  <Link href="/contacto">Proponer Alianza</Link>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <Lightbulb className="h-12 w-12 text-purple-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Mentoring & Advisory</h3>
                <p className="text-muted-foreground mb-4">
                  Asesoramiento estratégico a cambio de equity o compensación
                </p>
                <Button variant="outline" asChild>
                  <Link href="/contacto">Ser Advisor</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 gradient-bg text-white">
        <div className="container max-w-screen-2xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Listo para Invertir en el Futuro?</h2>
          <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
            Contáctanos para recibir nuestro pitch deck completo y discutir oportunidades de inversión.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
              <Link href="/contacto">
                Contactar Fundador
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/20 text-white hover:bg-white/10 bg-transparent"
              asChild
            >
              <Link href="/quienes-somos">Conocer Más</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

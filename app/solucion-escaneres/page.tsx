import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Scan, CheckCircle, ArrowRight, Eye, Zap, Shield, BarChart3, Plane, Ship } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "IA para Escáneres - Zectra | Detección Automática en Aeropuertos y Puertos",
  description:
    "Soluciones de inteligencia artificial para escáneres de seguridad. Detección automática de objetos peligrosos en aeropuertos, puertos y fronteras con precisión excepcional.",
}

const features = [
  {
    icon: Eye,
    title: "Análisis de Rayos X Inteligente",
    description: "Procesamiento avanzado de imágenes de rayos X con detección automática de objetos sospechosos",
  },
  {
    icon: Zap,
    title: "Detección en Tiempo Real",
    description: "Identificación instantánea de armas, explosivos y sustancias prohibidas",
  },
  {
    icon: Shield,
    title: "Reducción de Falsos Positivos",
    description: "Algoritmos optimizados que minimizan las alarmas falsas y agilizan el proceso",
  },
  {
    icon: BarChart3,
    title: "Analytics y Reportes",
    description: "Estadísticas detalladas y análisis de patrones para mejorar la seguridad",
  },
]

const applications = [
  {
    icon: Plane,
    title: "Aeropuertos",
    description: "Escáneres de equipaje de mano y facturado",
    benefits: ["Control de pasajeros", "Equipaje de cabina", "Carga aérea", "Personal autorizado"],
  },
  {
    icon: Ship,
    title: "Puertos Marítimos",
    description: "Inspección de contenedores y carga",
    benefits: ["Contenedores de carga", "Vehículos importados", "Mercancías sospechosas", "Control aduanero"],
  },
  {
    icon: Shield,
    title: "Fronteras y Aduanas",
    description: "Control de equipajes y mercancías",
    benefits: ["Puestos fronterizos", "Inspección vehicular", "Paquetería internacional", "Control migratorio"],
  },
]

const benefits = [
  "Reducción del 85% en tiempo de inspección",
  "Precisión del 99.7% en detección de amenazas",
  "Disminución del 70% en falsos positivos",
  "Integración con sistemas existentes",
  "Cumplimiento con normativas internacionales",
  "Entrenamiento continuo del modelo",
  "Soporte técnico especializado 24/7",
  "ROI comprobado en menos de 8 meses",
]

const detectionCapabilities = [
  "Armas de fuego y armas blancas",
  "Explosivos y materiales peligrosos",
  "Drogas y sustancias controladas",
  "Dispositivos electrónicos sospechosos",
  "Líquidos y geles prohibidos",
  "Objetos metálicos ocultos",
  "Materiales orgánicos e inorgánicos",
  "Contrabando y mercancías ilegales",
]

export default function SolucionEscaneres() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="gradient-bg text-white py-24">
        <div className="container max-w-screen-2xl">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 rounded-xl bg-gradient-to-r from-cyan-500 to-cyan-700 shadow-lg">
                <Scan className="h-12 w-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">IA para Escáneres de Seguridad</h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Revoluciona la seguridad en aeropuertos, puertos y fronteras con inteligencia artificial que detecta
              automáticamente objetos peligrosos con precisión excepcional.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24">
        <div className="container max-w-screen-2xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Tecnología de Vanguardia</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Nuestros algoritmos de IA analizan imágenes de rayos X con precisión sobrehumana
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <feature.icon className="h-8 w-8 text-cyan-500 flex-shrink-0 mt-1" />
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Aplicaciones Principales</h2>
            <p className="text-lg text-muted-foreground">
              Nuestras soluciones se adaptan a diferentes entornos de seguridad crítica
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {applications.map((app, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <app.icon className="h-12 w-12 text-cyan-500 mb-4" />
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

      {/* Detection Capabilities */}
      <section className="py-24">
        <div className="container max-w-screen-2xl">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Capacidades de Detección</h2>
              <p className="text-lg text-muted-foreground">
                Nuestro sistema puede identificar una amplia gama de objetos y sustancias peligrosas
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {detectionCapabilities.map((capability, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-cyan-500 flex-shrink-0" />
                  <span className="text-foreground">{capability}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-muted">
        <div className="container max-w-screen-2xl">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Beneficios Comprobados</h2>
              <p className="text-lg text-muted-foreground">
                Resultados reales que nuestros clientes han experimentado en implementaciones piloto
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

      {/* How it Works */}
      <section className="py-24">
        <div className="container max-w-screen-2xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">¿Cómo Funciona?</h2>
            <p className="text-lg text-muted-foreground">
              Proceso automatizado de análisis de imágenes de rayos X en tiempo real
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-cyan-600 font-bold">1</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Captura de Imagen</h3>
                <p className="text-sm text-muted-foreground">
                  El escáner de rayos X captura la imagen del equipaje o paquete
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-cyan-600 font-bold">2</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Análisis IA</h3>
                <p className="text-sm text-muted-foreground">
                  Nuestros algoritmos analizan la imagen en busca de objetos sospechosos
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-cyan-600 font-bold">3</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Clasificación</h3>
                <p className="text-sm text-muted-foreground">
                  El sistema clasifica y marca automáticamente los objetos detectados
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-cyan-600 font-bold">4</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Alerta Inteligente</h3>
                <p className="text-sm text-muted-foreground">
                  Se genera una alerta solo cuando se detecta una amenaza real
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Technical Specs */}
      <section className="py-24 bg-muted">
        <div className="container max-w-screen-2xl">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Especificaciones Técnicas</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Rendimiento</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span>Tiempo de análisis:</span>
                      <span className="font-semibold">{"< 2 segundos"}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Precisión de detección:</span>
                      <span className="font-semibold">99.7%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Falsos positivos:</span>
                      <span className="font-semibold">{"< 0.5%"}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Throughput:</span>
                      <span className="font-semibold">1000+ items/hora</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Compatibilidad</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span>Escáneres soportados:</span>
                      <span className="font-semibold">Todos los principales</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Integración:</span>
                      <span className="font-semibold">API REST</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Deployment:</span>
                      <span className="font-semibold">Cloud/On-premise</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Actualizaciones:</span>
                      <span className="font-semibold">Automáticas</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 gradient-bg text-white">
        <div className="container max-w-screen-2xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Listo para Revolucionar tu Seguridad?</h2>
          <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
            Contáctanos para una demostración en vivo y descubre cómo la IA puede transformar tus sistemas de seguridad.
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

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { FileText, ExternalLink, ArrowRight, BookOpen, Code, Lightbulb } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Recursos - Zectra AI | Documentación y Materiales",
  description:
    "Recursos, documentación y materiales informativos sobre nuestras soluciones de inteligencia artificial. Información técnica para desarrolladores e inversores.",
}

const resources = [
  {
    icon: FileText,
    title: "Documentación Técnica",
    description: "Especificaciones técnicas y arquitectura de nuestras soluciones de IA",
    status: "En desarrollo",
    type: "docs",
  },
  {
    icon: BookOpen,
    title: "Casos de Uso",
    description: "Ejemplos detallados de aplicaciones de IA en diferentes industrias",
    status: "Disponible",
    type: "guide",
  },
  {
    icon: Code,
    title: "APIs y Integraciones",
    description: "Documentación para integrar nuestras soluciones en sistemas existentes",
    status: "Próximamente",
    type: "api",
  },
]

const learningResources = [
  {
    title: "¿Qué es la Inteligencia Artificial Aplicada?",
    description: "Introducción a los conceptos básicos de IA empresarial",
    readTime: "5 min",
    category: "Fundamentos",
  },
  {
    title: "Beneficios de la IA en Seguridad Empresarial",
    description: "Cómo la IA puede mejorar los sistemas de seguridad existentes",
    readTime: "8 min",
    category: "Seguridad",
  },
  {
    title: "ROI en Proyectos de Inteligencia Artificial",
    description: "Cómo calcular el retorno de inversión en implementaciones de IA",
    readTime: "10 min",
    category: "Inversión",
  },
]

export default function Recursos() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="gradient-bg text-white py-24">
        <div className="container max-w-screen-2xl">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Recursos y Documentación</h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Materiales informativos, guías técnicas y recursos para entender mejor nuestras soluciones de inteligencia
              artificial.
            </p>
          </div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-24">
        <div className="container max-w-screen-2xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Documentación Técnica</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Recursos técnicos para desarrolladores, integradores y tomadores de decisiones
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {resources.map((resource, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <resource.icon className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{resource.title}</h3>
                  <p className="text-muted-foreground mb-4">{resource.description}</p>
                  <div className="flex items-center justify-between">
                    <span
                      className={`text-xs px-2 py-1 rounded-full ${
                        resource.status === "Disponible"
                          ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                          : resource.status === "En desarrollo"
                            ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
                            : "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200"
                      }`}
                    >
                      {resource.status}
                    </span>
                    {resource.status === "Disponible" ? (
                      <Button variant="outline" size="sm" asChild>
                        <Link href="/contacto">
                          Solicitar
                          <ExternalLink className="ml-2 h-3 w-3" />
                        </Link>
                      </Button>
                    ) : (
                      <Button variant="outline" size="sm" disabled>
                        {resource.status}
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Resources */}
      <section className="py-24 bg-muted">
        <div className="container max-w-screen-2xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Guías y Artículos</h2>
            <p className="text-lg text-muted-foreground">Contenido educativo sobre inteligencia artificial aplicada</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {learningResources.map((article, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                      {article.category}
                    </span>
                    <span className="text-xs text-muted-foreground">{article.readTime}</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{article.title}</h3>
                  <p className="text-muted-foreground mb-4">{article.description}</p>
                  <Button variant="outline" size="sm" asChild>
                    <Link href="/contacto">
                      Solicitar Acceso
                      <ArrowRight className="ml-2 h-3 w-3" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24">
        <div className="container max-w-screen-2xl">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Preguntas Frecuentes</h2>
              <p className="text-lg text-muted-foreground">
                Respuestas a las preguntas más comunes sobre nuestras soluciones
              </p>
            </div>

            <div className="space-y-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-2">¿En qué fase se encuentra Zectra actualmente?</h3>
                  <p className="text-muted-foreground">
                    Zectra es una startup en fase inicial (pre-seed) con un fundador dedicado al desarrollo de
                    soluciones de IA. Estamos buscando inversores, partners estratégicos y talento para unirse al equipo
                    fundador.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-2">¿Tienen clientes actuales?</h3>
                  <p className="text-muted-foreground">
                    Actualmente estamos en fase de desarrollo de productos y validación de mercado. Buscamos partners
                    para proyectos piloto y casos de uso iniciales.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-2">¿Cómo puedo colaborar con Zectra?</h3>
                  <p className="text-muted-foreground">
                    Hay varias formas: como inversor, partner estratégico, miembro del equipo, o cliente piloto.
                    Contáctanos para discutir oportunidades de colaboración.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-2">¿Qué diferencia a Zectra de otras startups de IA?</h3>
                  <p className="text-muted-foreground">
                    Nos enfocamos en aplicaciones específicas de IA con casos de uso claros y medibles, priorizando la
                    democratización de la tecnología y el impacto real en las empresas.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-24 bg-muted">
        <div className="container max-w-screen-2xl">
          <div className="max-w-2xl mx-auto text-center">
            <Lightbulb className="h-12 w-12 text-primary mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">Mantente Informado</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Suscríbete para recibir actualizaciones sobre nuestro progreso, nuevos recursos y oportunidades de
              colaboración.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="tu@email.com"
                className="flex-1 px-4 py-2 border border-border rounded-md bg-background"
              />
              <Button asChild>
                <Link href="/contacto">Suscribirse</Link>
              </Button>
            </div>
            <p className="text-xs text-muted-foreground mt-4">
              Al suscribirte, aceptas recibir comunicaciones sobre el progreso de Zectra.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 gradient-bg text-white">
        <div className="container max-w-screen-2xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Necesitas Más Información?</h2>
          <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
            Contáctanos directamente para obtener información específica sobre nuestras soluciones o oportunidades de
            colaboración.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
            <Link href="/contacto">
              Contactar Fundador
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Shield, Truck, Factory, Car, Building, Lock, Scan } from "lucide-react"
import Link from "next/link"

const solutions = [
  {
    icon: Shield,
    title: "IA para Seguridad",
    description: "Detección inteligente de amenazas y análisis predictivo de riesgos",
    slug: "seguridad",
  },
  {
    icon: Truck,
    title: "IA para Logística",
    description: "Optimización de rutas y gestión inteligente de paquetería",
    slug: "logistica",
  },
  {
    icon: Factory,
    title: "IA Industrial",
    description: "Automatización y mantenimiento predictivo para la industria 4.0",
    slug: "industrial",
  },
  {
    icon: Car,
    title: "Vehículos Autónomos",
    description: "Sistemas de navegación y control para vehículos y drones",
    slug: "vehiculos-autonomos",
  },
  {
    icon: Building,
    title: "IA Personalizada",
    description: "Soluciones a medida para necesidades específicas empresariales",
    slug: "personalizada",
  },
  {
    icon: Lock,
    title: "Ciberseguridad con IA",
    description: "Protección avanzada contra amenazas cibernéticas emergentes",
    slug: "ciberseguridad",
  },
  {
    icon: Scan,
    title: "IA para Escáneres",
    description: "Detección automática de objetos peligrosos en aeropuertos y puertos",
    slug: "escaneres",
  },
]

export default function SolutionsPreview() {
  return (
    <section className="py-24">
      <div className="container max-w-screen-2xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Nuestras Soluciones de IA</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Desarrollamos tecnologías de inteligencia artificial especializadas para diferentes sectores e industrias.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {solutions.map((solution, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6">
                <solution.icon className="h-12 w-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-semibold mb-2">{solution.title}</h3>
                <p className="text-muted-foreground mb-4">{solution.description}</p>
                <Button variant="outline" size="sm" asChild>
                  <Link href={`/solucion-${solution.slug}`}>Ver Detalles</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" asChild>
            <Link href="/soluciones">Ver Todas las Soluciones</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

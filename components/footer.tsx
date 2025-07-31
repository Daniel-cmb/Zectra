import Link from "next/link"
import { Mail, Phone, Linkedin, Twitter, Github } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container max-w-screen-2xl py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-bold">Zectra</span>
            </div>
            <p className="text-gray-400">Redefiniendo los límites de la inteligencia artificial aplicada.</p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Github className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Empresa</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/quienes-somos" className="text-gray-400 hover:text-white transition-colors">
                  Quiénes Somos
                </Link>
              </li>
              <li>
                <Link href="/inversores" className="text-gray-400 hover:text-white transition-colors">
                  Inversores
                </Link>
              </li>
              <li>
                <Link href="/recursos" className="text-gray-400 hover:text-white transition-colors">
                  Recursos
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="text-gray-400 hover:text-white transition-colors">
                  Únete al Proyecto
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Soluciones</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/solucion-seguridad" className="text-gray-400 hover:text-white transition-colors">
                  IA para Seguridad
                </Link>
              </li>
              <li>
                <Link href="/solucion-logistica" className="text-gray-400 hover:text-white transition-colors">
                  IA para Logística
                </Link>
              </li>
              <li>
                <Link href="/solucion-industrial" className="text-gray-400 hover:text-white transition-colors">
                  IA Industrial
                </Link>
              </li>
              <li>
                <Link href="/solucion-escaneres" className="text-gray-400 hover:text-white transition-colors">
                  IA para Escáneres
                </Link>
              </li>
              <li>
                <Link href="/soluciones" className="text-gray-400 hover:text-white transition-colors">
                  Ver Todas
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contacto</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-gray-400">
                <Mail className="h-4 w-4" />
                <span>contacto@zectra.ai</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <Phone className="h-4 w-4" />
                <span>+34 XXX XXX XXX</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Zectra AI Startup. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

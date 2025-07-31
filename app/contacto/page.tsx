"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send, User, Building, Lightbulb } from "lucide-react"
import { useState } from "react"

const contactOptions = [
  {
    icon: User,
    title: "Únete al Equipo",
    description: "¿Eres desarrollador, diseñador o experto en IA? Forma parte de nuestro equipo fundador.",
    cta: "Enviar CV",
  },
  {
    icon: Building,
    title: "Partnership Empresarial",
    description: "Empresas interesadas en colaboraciones estratégicas o implementar nuestras soluciones.",
    cta: "Proponer Colaboración",
  },
  {
    icon: Lightbulb,
    title: "Inversión & Mentoring",
    description: "Inversores angel, VCs o mentors que quieran apoyar nuestra visión.",
    cta: "Solicitar Pitch",
  },
]

export default function Contacto() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
    type: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí implementarías el envío del formulario
    console.log("Form submitted:", formData)
    alert("Mensaje enviado correctamente. Te contactaremos pronto.")
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="gradient-bg text-white py-24">
        <div className="container max-w-screen-2xl">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Conecta con Zectra</h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              ¿Listo para formar parte de la revolución de la IA? Contáctanos y construyamos juntos el futuro.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-24">
        <div className="container max-w-screen-2xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">¿Cómo Quieres Participar?</h2>
            <p className="text-lg text-muted-foreground">
              Diferentes formas de conectar con Zectra según tu perfil e intereses
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactOptions.map((option, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <CardContent className="p-6">
                  <option.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">{option.title}</h3>
                  <p className="text-muted-foreground mb-4">{option.description}</p>
                  <Button variant="outline" onClick={() => setFormData((prev) => ({ ...prev, type: option.title }))}>
                    {option.cta}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-24 bg-muted">
        <div className="container max-w-screen-2xl">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Form */}
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6">Envíanos un Mensaje</h3>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Nombre *</label>
                        <Input
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Tu nombre completo"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Email *</label>
                        <Input
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="tu@email.com"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Empresa/Organización</label>
                      <Input
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Nombre de tu empresa (opcional)"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Tipo de Consulta</label>
                      <select
                        name="type"
                        value={formData.type}
                        onChange={handleChange}
                        className="w-full p-2 border border-border rounded-md bg-background"
                      >
                        <option value="">Selecciona una opción</option>
                        <option value="inversion">Inversión</option>
                        <option value="partnership">Partnership</option>
                        <option value="empleo">Oportunidades de Empleo</option>
                        <option value="demo">Solicitar Demo</option>
                        <option value="general">Consulta General</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Asunto *</label>
                      <Input
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Resumen de tu consulta"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Mensaje *</label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Cuéntanos más detalles sobre tu consulta..."
                        rows={6}
                        required
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full">
                      Enviar Mensaje
                      <Send className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Contact Info */}
              <div className="space-y-8">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4">Información de Contacto</h3>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <Mail className="h-5 w-5 text-primary" />
                        <span>contacto@zectra.ai</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Phone className="h-5 w-5 text-primary" />
                        <span>+34 XXX XXX XXX</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <MapPin className="h-5 w-5 text-primary" />
                        <span>España (Ubicación remota)</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4">Tiempo de Respuesta</h3>
                    <p className="text-muted-foreground mb-4">
                      Nos comprometemos a responder todas las consultas en un plazo máximo de 48 horas.
                    </p>
                    <div className="space-y-2 text-sm">
                      <div>
                        <strong>Inversores:</strong> Respuesta prioritaria en 24h
                      </div>
                      <div>
                        <strong>Partners:</strong> Respuesta en 48h
                      </div>
                      <div>
                        <strong>Empleo:</strong> Respuesta en 72h
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4">Próximos Pasos</h3>
                    <div className="space-y-3 text-sm text-muted-foreground">
                      <div className="flex gap-2">
                        <span className="font-semibold text-primary">1.</span>
                        <span>Revisamos tu consulta</span>
                      </div>
                      <div className="flex gap-2">
                        <span className="font-semibold text-primary">2.</span>
                        <span>Te contactamos para agendar una reunión</span>
                      </div>
                      <div className="flex gap-2">
                        <span className="font-semibold text-primary">3.</span>
                        <span>Discutimos oportunidades de colaboración</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

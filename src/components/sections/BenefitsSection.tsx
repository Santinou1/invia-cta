import { Palette, Share2, Sparkles, Heart } from 'lucide-react'

export default function BenefitsSection() {
  const benefits = [
    {
      icon: <Palette className="w-12 h-12" />,
      title: 'Plantillas modernas y personalizables',
      description: 'Elegí entre docenas de diseños hermosos y personalizalos con tus colores, fotos y textos.'
    },
    {
      icon: <Share2 className="w-12 h-12" />,
      title: 'Compartí fácilmente',
      description: 'Enviá tu invitación por WhatsApp, email o generá un código QR para imprimir.'
    },
    {
      icon: <Sparkles className="w-12 h-12" />,
      title: 'Invitaciones interactivas',
      description: 'Agregá mapa, confirmación de asistencia, galería de fotos, cuenta regresiva y más.'
    },
    {
      icon: <Heart className="w-12 h-12" />,
      title: 'Para todo tipo de eventos',
      description: 'Ideal para casamientos, cumpleaños, 15 años, baby showers y eventos corporativos.'
    }
  ]

  return (
    <section id="beneficios" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Todo lo que necesitás en un solo lugar
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Herramientas profesionales y fáciles de usar para crear invitaciones que tus invitados amarán
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="group bg-violet-50 rounded-2xl p-8 hover:bg-gradient-to-br hover:from-violet-100 hover:to-violet-50 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-2"
            >
              <div className="text-violet-600 mb-4 group-hover:scale-110 transition-transform duration-300">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {benefit.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


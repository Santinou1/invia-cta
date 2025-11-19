import { Palette, Sparkles, Share2, ArrowRight } from 'lucide-react'

export default function HowItWorksSection() {
  const steps = [
    {
      number: '01',
      title: 'Elegí una plantilla',
      description: 'Explorá nuestra colección de diseños modernos y seleccioná el que mejor se adapte a tu evento.',
      icon: <Palette className="w-10 h-10" />
    },
    {
      number: '02',
      title: 'Personalizá todo',
      description: 'Agregá tus textos, fotos, colores y secciones. Cada detalle a tu medida, sin límites.',
      icon: <Sparkles className="w-10 h-10" />
    },
    {
      number: '03',
      title: 'Compartí con tus invitados',
      description: 'Enviá tu invitación por WhatsApp, email o QR. Tus invitados la verán desde cualquier dispositivo.',
      icon: <Share2 className="w-10 h-10" />
    }
  ]

  return (
    <section id="como-funciona" className="py-20 bg-gradient-to-br from-violet-800 to-violet-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Tres pasos simples
          </h2>
          <p className="text-xl text-violet-100 max-w-2xl mx-auto">
            Creá tu invitación perfecta en minutos, sin necesidad de experiencia en diseño
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-6xl font-bold text-violet-200">
                    {step.number}
                  </span>
                  <div className="text-violet-600">
                    {step.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
              {index < 2 && (
                <div className="hidden md:block absolute top-1/2 -right-6 transform -translate-y-1/2">
                  <ArrowRight className="w-8 h-8 text-violet-300" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


import { CheckCircle2, ArrowRight } from 'lucide-react'

interface AllFeaturesSectionProps {
  onScrollToWhitelist: () => void
}

export default function AllFeaturesSection({ onScrollToWhitelist }: AllFeaturesSectionProps) {
  const features = [
    {
      title: 'Más de 20 plantillas profesionales',
      description: 'Casamientos, cumpleaños, baby showers, quinceaños, eventos corporativos y mucho más'
    },
    {
      title: 'Editor avanzado de diseño',
      description: 'Personalizá colores, fuentes, imágenes y mucho más con nuestro editor intuitivo'
    },
    {
      title: 'Gestión completa de invitados',
      description: 'Administrá confirmaciones, envía recordatorios y lleva el control de tus invitados'
    },
    {
      title: 'Compartir por WhatsApp, email y redes',
      description: 'Envía tus invitaciones digitales de forma fácil y rápida a todos tus contactos'
    },
    {
      title: 'Dominio personalizado',
      description: 'Crea URLs únicas y memorables para tus eventos especiales'
    },
    {
      title: 'Analíticas en tiempo real',
      description: 'Seguí quién vio tu invitación y quién confirmó asistencia'
    },
    {
      title: 'Organización de mesas',
      description: 'Asigná invitados a mesas y visualizá la distribución de tu evento de forma intuitiva'
    },
    {
      title: 'Preferencias alimentarias',
      description: 'Registrá las preferencias de cada invitado: vegano, vegetariano, celíaco, y más opciones'
    },
    {
      title: 'QR para álbum de fotos',
      description: 'Generá códigos QR para que tus invitados accedan al álbum de fotos del evento'
    },
    {
      title: 'Trivias interactivas',
      description: 'Agregá juegos y trivias divertidas para que tus invitados interactúen antes y durante el evento'
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block bg-violet-800 text-white px-6 py-2 rounded-full text-sm font-semibold mb-6">
            🚀 Próximamente en 2026
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Todo lo que necesitás para tu evento perfecto
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Estamos desarrollando la plataforma más completa para crear y gestionar invitaciones digitales
          </p>
        </div>

        <div className="bg-violet-50 rounded-3xl shadow-2xl p-8 sm:p-12">
          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-violet-100 rounded-full flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6 text-violet-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={onScrollToWhitelist}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-violet-800 to-violet-600 hover:from-violet-900 hover:to-violet-700 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
            >
              Sumate a la Whitelist
              <ArrowRight className="w-5 h-5" />
            </button>
            <p className="text-sm text-gray-500 mt-4">
              Sé de los primeros en acceder cuando lancemos en 2026
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}


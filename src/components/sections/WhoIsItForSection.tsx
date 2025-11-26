import { Heart, PartyPopper, Sparkles, Briefcase } from 'lucide-react'

export default function WhoIsItForSection() {
  const audiences = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Parejas que se casan',
      description: 'Creá la invitación perfecta para el día más importante de sus vidas'
    },
    {
      icon: <PartyPopper className="w-8 h-8" />,
      title: 'Padres organizadores',
      description: 'Invitaciones únicas para cumpleaños infantiles y eventos familiares'
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: 'Quinceañeras y familias',
      description: 'Diseños sofisticados para celebrar los 15 años con estilo'
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: 'Organizadores de eventos',
      description: 'Solución profesional para eventos corporativos y lanzamientos'
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            ¿Para quién es INVIA?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Perfecto para cualquier persona que quiera crear invitaciones memorables
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {audiences.map((audience, index) => (
            <div 
              key={index}
              className="bg-violet-50 rounded-2xl p-6 hover:bg-gradient-to-br hover:from-violet-100 hover:to-violet-50 transition-all duration-300 hover:shadow-lg"
            >
              <div className="text-violet-600 mb-4">
                {audience.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {audience.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {audience.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


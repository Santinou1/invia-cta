import { Link } from 'react-router-dom'
import { Heart, PartyPopper, Sparkles, Baby, ArrowRight } from 'lucide-react'

export default function ExamplesGallerySection() {
  const templates = [
    {
      title: 'Casamiento',
      icon: <Heart className="w-8 h-8" />,
      color: 'from-violet-100 to-violet-200',
      description: 'Elegante y romántico',
      link: '/template/casamiento'
    },
    {
      title: 'Cumpleaños Infantil',
      icon: <PartyPopper className="w-8 h-8" />,
      color: 'from-blue-100 to-pink-100',
      description: 'Divertido y colorido',
      link: '/template/cumpleanos'
    },
    {
      title: '15 Años',
      icon: <Sparkles className="w-8 h-8" />,
      color: 'from-purple-100 to-pink-100',
      description: 'Sofisticado y único',
      link: '/template/quince'
    },
    {
      title: 'Baby Shower',
      icon: <Baby className="w-8 h-8" />,
      color: 'from-blue-100 to-violet-100',
      description: 'Tierno y dulce',
      link: '/template/babyshower'
    }
  ]

  return (
    <section id="plantillas" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Plantillas para cada ocasión
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Diseños pensados para hacer de tu evento algo inolvidable
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {templates.map((template, index) => (
            <Link 
              key={index}
              to={template.link}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className={`bg-gradient-to-br ${template.color} aspect-[3/4] p-8 flex flex-col items-center justify-center text-center`}>
                  <div className="text-gray-700 mb-4 group-hover:scale-110 transition-transform duration-300">
                    {template.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    {template.title}
                  </h3>
                  <p className="text-gray-600">
                    {template.description}
                  </p>
                  <div className="mt-4 text-violet-600 font-semibold flex items-center gap-2">
                    Ver ejemplo
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
                <div className="absolute inset-0 bg-violet-500 bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300"></div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}


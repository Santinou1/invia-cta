export default function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Lucía Fernández',
      role: 'Mamá de Sofía',
      text: 'No puedo creer lo fácil que fue armar la invitación de los 15 de mi hija. Quedó hermosa y todos me preguntaron quién la diseñó.',
      avatar: 'LF'
    },
    {
      name: 'Martín González',
      role: 'Novio',
      text: 'Estábamos buscando algo diferente para nuestro casamiento y INVIA nos dio justo lo que necesitábamos. Súper moderno y fácil de usar.',
      avatar: 'MG'
    },
    {
      name: 'Carolina Ruiz',
      role: 'Organizadora de eventos',
      text: 'Uso INVIA para todos mis eventos. Mis clientes quedan fascinados con las invitaciones y el proceso es súper ágil.',
      avatar: 'CR'
    }
  ]

  return (
    <section className="py-20 bg-violet-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Lo que dicen nuestros usuarios
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-violet-600 to-violet-800 flex items-center justify-center text-white font-bold">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-bold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed">
                "{testimonial.text}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


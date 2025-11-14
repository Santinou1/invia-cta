import { useState } from 'react'
import { Link } from 'react-router-dom'
import { 
  Heart, 
  Sparkles, 
  Share2, 
  Palette, 
  MapPin, 
  CheckCircle2,
  Calendar,
  Baby,
  PartyPopper,
  Briefcase,
  ChevronDown,
  Mail,
  User,
  ArrowRight,
  Instagram,
  Facebook,
  Twitter
} from 'lucide-react'

function App() {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí iría la integración con el backend
    console.log('Whitelist submission:', { name, email })
    
    // Reportar conversión a Google Ads
    if (typeof window !== 'undefined' && (window as any).gtag_report_conversion) {
      (window as any).gtag_report_conversion()
    }
    
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setEmail('')
      setName('')
    }, 3000)
  }

  const scrollToWhitelist = () => {
    document.getElementById('whitelist')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-sand-100 via-nude-50 to-sand-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left animate-fade-in-up">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                Invitaciones hermosas para tus{' '}
                <span className="text-nude-500 relative">
                  momentos
                  <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 10 Q 50 2, 100 8 T 198 10" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round"/>
                  </svg>
                </span>{' '}
                más importantes
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
                Creá invitaciones digitales únicas, modernas e interactivas para casamientos, cumpleaños, 15 años y todo tipo de eventos. 
                Sin complicaciones, con resultados profesionales.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button 
                  onClick={scrollToWhitelist}
                  className="bg-nude-500 hover:bg-nude-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-2"
                >
                  Unirme a la Whitelist
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button 
                  onClick={() => document.getElementById('como-funciona')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-white hover:bg-sand-100 text-gray-800 px-8 py-4 rounded-full font-semibold text-lg border-2 border-sand-300 hover:border-nude-300 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  Ver cómo funciona
                  <ChevronDown className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Right Content - Mockup */}
            <div className="relative animate-fade-in">
              <div className="relative z-10 transform hover:scale-105 transition-transform duration-500">
                {/* Simulated phone mockup */}
                <div className="bg-white rounded-3xl shadow-2xl p-6 max-w-sm mx-auto border-8 border-gray-800">
                  <div className="bg-gradient-to-br from-nude-100 to-sand-100 rounded-2xl p-6 space-y-4">
                    <div className="text-center space-y-2">
                      <Heart className="w-12 h-12 text-nude-500 mx-auto" />
                      <h3 className="font-bold text-2xl text-gray-800">María & Juan</h3>
                      <p className="text-gray-600">¡Nos casamos!</p>
                    </div>
                    <div className="bg-white rounded-xl p-4 space-y-2">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-5 h-5 text-nude-500" />
                        <p className="text-sm text-gray-700">15 de Marzo, 2025</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-5 h-5 text-nude-500" />
                        <p className="text-sm text-gray-700">Salón Los Jardines</p>
                      </div>
                    </div>
                    <button className="w-full bg-nude-500 text-white py-3 rounded-lg font-semibold">
                      Confirmar Asistencia
                    </button>
                  </div>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-nude-200 rounded-full blur-xl opacity-60 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-sand-300 rounded-full blur-xl opacity-40 animate-pulse delay-100"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
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
            {[
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
            ].map((benefit, index) => (
              <div 
                key={index}
                className="group bg-sand-50 rounded-2xl p-8 hover:bg-gradient-to-br hover:from-nude-50 hover:to-sand-100 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-2"
              >
                <div className="text-nude-500 mb-4 group-hover:scale-110 transition-transform duration-300">
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

      {/* How It Works Section */}
      <section id="como-funciona" className="py-20 bg-gradient-to-br from-sand-100 to-nude-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Tres pasos simples
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Creá tu invitación perfecta en minutos, sin necesidad de experiencia en diseño
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {[
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
            ].map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-6xl font-bold text-sand-200">
                      {step.number}
                    </span>
                    <div className="text-nude-500">
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
                    <ArrowRight className="w-8 h-8 text-sand-300" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Examples Gallery Section */}
      <section className="py-20 bg-white">
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
            {[
              {
                title: 'Casamiento',
                icon: <Heart className="w-8 h-8" />,
                color: 'from-nude-100 to-nude-200',
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
                color: 'from-blue-100 to-sand-100',
                description: 'Tierno y dulce',
                link: '/template/babyshower'
              }
            ].map((template, index) => (
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
                    <div className="mt-4 text-nude-600 font-semibold flex items-center gap-2">
                      Ver ejemplo
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-nude-500 bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300"></div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Whitelist CTA Section */}
      <section id="whitelist" className="py-24 bg-gradient-to-br from-nude-100 via-sand-100 to-nude-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block bg-nude-500 text-white px-6 py-2 rounded-full text-sm font-semibold mb-6">
              🎉 Lanzamiento Próximo
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Sé de los primeros en usar URSIS Invitations
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Sumate a la whitelist y accedé antes que nadie a beneficios exclusivos del lanzamiento
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl p-8 sm:p-12">
            {submitted ? (
              <div className="text-center py-8 animate-scale-in">
                <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  ¡Genial! Ya estás en la lista
                </h3>
                <p className="text-gray-600">
                  Te avisaremos cuando lancemos. Revisá tu email para confirmar tu inscripción.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Tu nombre
                  </label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      placeholder="Ingresá tu nombre"
                      className="w-full pl-12 pr-4 py-4 border-2 border-sand-200 rounded-xl focus:border-nude-400 focus:outline-none text-lg transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Tu email
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      placeholder="tucorreo@ejemplo.com"
                      className="w-full pl-12 pr-4 py-4 border-2 border-sand-200 rounded-xl focus:border-nude-400 focus:outline-none text-lg transition-colors"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-nude-500 hover:bg-nude-600 text-white py-5 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-2"
                >
                  Unirme a la Whitelist
                  <ArrowRight className="w-5 h-5" />
                </button>

                <p className="text-sm text-gray-500 text-center">
                  Al registrarte, aceptás recibir novedades sobre URSIS Invitations. Podés cancelar tu suscripción en cualquier momento.
                </p>
              </form>
            )}
          </div>

          <div className="mt-12 text-center">
            <div className="flex flex-wrap justify-center gap-8 text-gray-600">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-nude-500" />
                <span>Acceso anticipado</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-nude-500" />
                <span>Descuentos exclusivos</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-nude-500" />
                <span>Sin compromiso</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who Is It For Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              ¿Para quién es URSIS Invitations?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Perfecto para cualquier persona que quiera crear invitaciones memorables
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
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
            ].map((audience, index) => (
              <div 
                key={index}
                className="bg-sand-50 rounded-2xl p-6 hover:bg-gradient-to-br hover:from-nude-50 hover:to-sand-100 transition-all duration-300 hover:shadow-lg"
              >
                <div className="text-nude-500 mb-4">
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

      {/* Testimonials Section */}
      <section className="py-20 bg-sand-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Lo que dicen nuestros usuarios
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Lucía Fernández',
                role: 'Mamá de Sofía',
                text: 'No puedo creer lo fácil que fue armar la invitación de los 15 de mi hija. Quedó hermosa y todos me preguntaron quién la diseñó.',
                avatar: 'LF'
              },
              {
                name: 'Martín González',
                role: 'Novio',
                text: 'Estábamos buscando algo diferente para nuestro casamiento y URSIS nos dio justo lo que necesitábamos. Súper moderno y fácil de usar.',
                avatar: 'MG'
              },
              {
                name: 'Carolina Ruiz',
                role: 'Organizadora de eventos',
                text: 'Uso URSIS para todos mis eventos. Mis clientes quedan fascinados con las invitaciones y el proceso es súper ágil.',
                avatar: 'CR'
              }
            ].map((testimonial, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-nude-400 to-nude-600 flex items-center justify-center text-white font-bold">
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

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Preguntas frecuentes
            </h2>
          </div>

          <div className="space-y-6">
            {[
              {
                question: '¿Cuánto cuesta URSIS Invitations?',
                answer: 'Durante el lanzamiento, los primeros usuarios de la whitelist tendrán acceso a planes con beneficios y descuentos exclusivos. Te avisaremos los detalles cuando estemos listos para lanzar.'
              },
              {
                question: '¿Necesito saber de diseño para usar URSIS?',
                answer: 'Para nada. URSIS está diseñado para que cualquier persona pueda crear invitaciones hermosas sin necesidad de experiencia en diseño. Las plantillas ya vienen listas, solo tenés que personalizarlas con tus datos.'
              },
              {
                question: '¿Cómo comparto las invitaciones con mis invitados?',
                answer: 'Podés compartir tu invitación de múltiples formas: enviándola directamente por WhatsApp, por email, o generando un código QR para imprimir. Tus invitados podrán verla desde cualquier dispositivo.'
              },
              {
                question: '¿Puedo editar la invitación después de crearla?',
                answer: 'Sí, podés editar tu invitación todas las veces que quieras. Los cambios se reflejan en tiempo real para todos tus invitados.'
              }
            ].map((faq, index) => (
              <details 
                key={index}
                className="group bg-sand-50 rounded-2xl p-6 hover:bg-sand-100 transition-colors"
              >
                <summary className="flex justify-between items-center cursor-pointer list-none">
                  <h3 className="text-lg font-bold text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                  <ChevronDown className="w-5 h-5 text-nude-500 group-open:rotate-180 transition-transform flex-shrink-0" />
                </summary>
                <p className="mt-4 text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold mb-2 flex items-center justify-center md:justify-start gap-2">
                <Heart className="w-6 h-6 text-nude-400" />
                URSIS Invitations
              </h3>
              <p className="text-gray-400">
                Invitaciones hermosas para momentos inolvidables
              </p>
            </div>

            <div className="flex gap-6">
              <a 
                href="#" 
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
            © 2025 URSIS Invitations. Todos los derechos reservados.
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

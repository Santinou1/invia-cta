import { useState } from 'react'
import { Link } from 'react-router-dom'
import { CheckCircle2, Sparkles, Rocket, Gift, ArrowLeft, Calendar, Zap, Users } from 'lucide-react'

export default function Whitelist() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    eventType: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí iría la lógica para enviar a un backend/servicio
    console.log('Whitelist submission:', formData)
    setSubmitted(true)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-nude-50 via-sand-50 to-nude-100">
      {/* Header */}
      <nav className="bg-white/80 backdrop-blur-sm shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <Link to="/" className="flex items-center gap-2 text-nude-600 hover:text-nude-700">
            <ArrowLeft className="w-5 h-5" />
            <span className="font-semibold">Volver al inicio</span>
          </Link>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-block bg-gradient-to-r from-nude-500 to-sand-500 text-white px-6 py-2 rounded-full text-sm font-semibold mb-6 animate-pulse">
            🎉 Lanzamiento 2026
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
            ¡Estamos por lanzar algo increíble!
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            INVIA está en desarrollo. Sumate a la whitelist y sé de los primeros en crear invitaciones digitales únicas para tus eventos especiales.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-nude-100 rounded-full flex items-center justify-center mb-4">
              <Gift className="w-6 h-6 text-nude-600" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Descuentos Exclusivos</h3>
            <p className="text-gray-600 text-sm">
              Acceso anticipado con descuentos especiales para miembros de la whitelist
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-sand-100 rounded-full flex items-center justify-center mb-4">
              <Zap className="w-6 h-6 text-sand-600" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Acceso Anticipado</h3>
            <p className="text-gray-600 text-sm">
              Sé de los primeros en usar todas las funcionalidades antes del lanzamiento oficial
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-nude-100 rounded-full flex items-center justify-center mb-4">
              <Sparkles className="w-6 h-6 text-nude-600" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Más Plantillas</h3>
            <p className="text-gray-600 text-sm">
              Lo que ves ahora es solo el comienzo. Tendremos muchas más plantillas y funciones
            </p>
          </div>
        </div>

        {/* What's Coming Section */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 mb-16">
          <div className="flex items-center gap-3 mb-6">
            <Rocket className="w-8 h-8 text-nude-500" />
            <h2 className="text-3xl font-bold text-gray-900">¿Qué viene en el lanzamiento?</h2>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900">Más de 20 plantillas profesionales</h3>
                <p className="text-gray-600 text-sm">Casamientos, cumpleaños, baby showers, quinceaños, eventos corporativos y mucho más</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900">Editor avanzado de diseño</h3>
                <p className="text-gray-600 text-sm">Personalizá colores, fuentes, imágenes y mucho más con nuestro editor intuitivo</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900">Gestión de invitados</h3>
                <p className="text-gray-600 text-sm">Administrá confirmaciones, envía recordatorios y lleva el control de tus invitados</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900">Compartir por WhatsApp, email y redes</h3>
                <p className="text-gray-600 text-sm">Envía tus invitaciones digitales de forma fácil y rápida</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900">Dominio personalizado</h3>
                <p className="text-gray-600 text-sm">Crea URLs únicas y memorables para tus eventos</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900">Analíticas en tiempo real</h3>
                <p className="text-gray-600 text-sm">Seguí quién vio tu invitación y quién confirmó asistencia</p>
              </div>
            </div>
          </div>
        </div>

        {/* Form Section */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 sm:p-12">
          {submitted ? (
            <div className="text-center py-8 animate-scale-in">
              <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                ¡Genial! Ya estás en la lista
              </h3>
              <p className="text-gray-600 mb-6">
                Te avisaremos cuando lancemos en 2026. Revisá tu email para confirmar tu inscripción.
              </p>
              <Link 
                to="/"
                className="inline-flex items-center gap-2 text-nude-600 hover:text-nude-700 font-semibold"
              >
                <ArrowLeft className="w-5 h-5" />
                Volver al inicio
              </Link>
            </div>
          ) : (
            <>
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                  Sumate a la Whitelist
                </h2>
                <p className="text-gray-600">
                  Completá tus datos y te avisaremos cuando lancemos con beneficios exclusivos
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Tu nombre *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="Ej: María González"
                    className="w-full px-4 py-3 border-2 border-sand-200 rounded-xl focus:border-nude-400 focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Tu email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder="tu@email.com"
                    className="w-full px-4 py-3 border-2 border-sand-200 rounded-xl focus:border-nude-400 focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    ¿Qué tipo de evento te interesa? *
                  </label>
                  <select
                    required
                    value={formData.eventType}
                    onChange={(e) => setFormData({...formData, eventType: e.target.value})}
                    className="w-full px-4 py-3 border-2 border-sand-200 rounded-xl focus:border-nude-400 focus:outline-none transition-colors"
                  >
                    <option value="">Seleccioná una opción</option>
                    <option value="casamiento">💒 Casamiento</option>
                    <option value="babyshower">👶 Baby Shower</option>
                    <option value="cumpleanos">🎂 Cumpleaños</option>
                    <option value="quince">👑 Quinceaños</option>
                    <option value="corporativo">💼 Evento Corporativo</option>
                    <option value="otro">✨ Otro</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-nude-500 to-sand-500 hover:from-nude-600 hover:to-sand-600 text-white py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2"
                >
                  <Users className="w-5 h-5" />
                  Unirme a la Whitelist
                </button>

                <p className="text-xs text-gray-500 text-center">
                  Al registrarte, aceptás recibir emails sobre el lanzamiento de INVIA
                </p>
              </form>
            </>
          )}
        </div>

        {/* Timeline Section */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 bg-white rounded-full px-6 py-3 shadow-lg">
            <Calendar className="w-5 h-5 text-nude-500" />
            <span className="font-semibold text-gray-900">Lanzamiento estimado: Primer trimestre 2026</span>
          </div>
        </div>
      </div>
    </div>
  )
}

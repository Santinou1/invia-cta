import { useState } from 'react'
import {
  CheckCircle2,
  Mail,
  User,
  ArrowRight,
  MessageSquare,
  Loader2,
  AlertCircle
} from 'lucide-react'
import apiService from '../../config/apiService'
import { WhitelistRegistration } from '../../config/api'

export default function WhitelistCTASection() {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [interestReason, setInterestReason] = useState('')
  const [isEventOrganizer, setIsEventOrganizer] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    const registrationData: WhitelistRegistration = {
      name: name.trim(),
      email: email.trim(),
      interestReason: interestReason.trim(),
      isEventOrganizer
    }

    try {
      await apiService.registerToWhitelist(registrationData)
      
      // Reportar conversión a Google Ads
      if (typeof window !== 'undefined' && (window as any).gtag_report_conversion) {
        (window as any).gtag_report_conversion()
      }
      
      setSubmitted(true)
      setTimeout(() => {
        setSubmitted(false)
        setEmail('')
        setName('')
        setInterestReason('')
        setIsEventOrganizer(false)
      }, 5000)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Ocurrió un error inesperado')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="whitelist" className="py-24 bg-gradient-to-br from-violet-800 to-violet-600">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-2 rounded-full text-sm font-semibold mb-6">
            🎉 Lanzamiento Próximo
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Sé de los primeros en usar INVIA
          </h2>
          <p className="text-xl text-violet-100 mb-8">
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
              {error && (
                <div className="bg-red-50 border-2 border-red-200 rounded-xl p-4 flex items-center gap-3">
                  <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                  <p className="text-red-700 text-sm">{error}</p>
                </div>
              )}

              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                  Tu nombre *
                </label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    disabled={loading}
                    placeholder="Ingresá tu nombre"
                    className="w-full pl-12 pr-4 py-4 border-2 border-violet-200 rounded-xl focus:border-violet-400 focus:outline-none text-lg transition-colors disabled:bg-gray-50 disabled:cursor-not-allowed"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Tu email *
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    disabled={loading}
                    placeholder="tucorreo@ejemplo.com"
                    className="w-full pl-12 pr-4 py-4 border-2 border-violet-200 rounded-xl focus:border-violet-400 focus:outline-none text-lg transition-colors disabled:bg-gray-50 disabled:cursor-not-allowed"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="interestReason" className="block text-sm font-semibold text-gray-700 mb-2">
                  ¿Por qué te interesa URSIS Invitations? *
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-4 top-4 text-gray-400 w-5 h-5" />
                  <textarea
                    id="interestReason"
                    value={interestReason}
                    onChange={(e) => setInterestReason(e.target.value)}
                    required
                    disabled={loading}
                    rows={4}
                    placeholder="Contanos qué tipo de eventos organizás o qué te atrae de crear invitaciones digitales..."
                    className="w-full pl-12 pr-4 py-4 border-2 border-violet-200 rounded-xl focus:border-violet-400 focus:outline-none text-lg transition-colors resize-none disabled:bg-gray-50 disabled:cursor-not-allowed"
                  />
                </div>
              </div>

              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="isEventOrganizer"
                  checked={isEventOrganizer}
                  onChange={(e) => setIsEventOrganizer(e.target.checked)}
                  disabled={loading}
                  className="mt-1 w-5 h-5 text-violet-600 border-2 border-violet-200 rounded focus:ring-violet-400 focus:ring-2 disabled:cursor-not-allowed"
                />
                <label htmlFor="isEventOrganizer" className="text-sm text-gray-700 cursor-pointer">
                  <span className="font-semibold">Soy organizador/a de eventos</span>
                  <p className="text-gray-500 mt-1">
                    Organizás bodas, cumpleaños, eventos corporativos u otros tipos de celebraciones
                  </p>
                </label>
              </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-violet-800 hover:bg-violet-900 disabled:bg-gray-400 disabled:cursor-not-allowed text-white py-5 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-2"
                >
                {loading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Registrando...
                  </>
                ) : (
                  <>
                    Unirme a la Whitelist
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </button>

              <p className="text-sm text-gray-500 text-center">
                Al registrarte, aceptás recibir novedades sobre INVIA. Podés cancelar tu suscripción en cualquier momento.
              </p>
            </form>
          )}
        </div>

        <div className="mt-12 text-center">
            <div className="flex flex-wrap justify-center gap-8 text-violet-100">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-white" />
                <span>Acceso anticipado</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-white" />
                <span>Descuentos exclusivos</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-white" />
                <span>Sin compromiso</span>
              </div>
            </div>
        </div>
      </div>
    </section>
  )
}


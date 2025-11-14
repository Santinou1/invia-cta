import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Heart, Calendar, MapPin, Clock, Music, Camera, Gift, ArrowLeft, Share2, Download, Volume2, VolumeX, Sparkles } from 'lucide-react'

interface InvitationData {
  novio1: string
  novio2: string
  fecha: string
  hora: string
  lugarCeremonia: string
  direccionCeremonia: string
  lugarFiesta: string
  direccionFiesta: string
  horaFiesta: string
}

export default function TemplateCasamiento() {
  const [showRSVP, setShowRSVP] = useState(false)
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })
  const [isPlaying, setIsPlaying] = useState(false)
  const [envelopeOpened, setEnvelopeOpened] = useState(false)
  const [formCompleted, setFormCompleted] = useState(false)
  const [invitationData, setInvitationData] = useState<InvitationData>({
    novio1: '',
    novio2: '',
    fecha: '',
    hora: '',
    lugarCeremonia: '',
    direccionCeremonia: '',
    lugarFiesta: '',
    direccionFiesta: '',
    horaFiesta: ''
  })
  const audioRef = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    const weddingDate = new Date('2026-03-15T18:00:00').getTime()
    
    const timer = setInterval(() => {
      const now = new Date().getTime()
      const distance = weddingDate - now
      
      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  useEffect(() => {
    // Configurar volumen del audio
    if (audioRef.current) {
      audioRef.current.volume = 0.3 // Volumen al 30%
    }
  }, [])

  // Manejar cuando el audio termina (aunque está en loop)
  useEffect(() => {
    const audio = audioRef.current
    if (audio) {
      const handleEnded = () => {
        setIsPlaying(false)
      }
      audio.addEventListener('ended', handleEnded)
      return () => audio.removeEventListener('ended', handleEnded)
    }
  }, [])

  const handleOpenEnvelope = () => {
    setEnvelopeOpened(true)
    // Scroll al top inmediatamente
    window.scrollTo({ top: 0, behavior: 'smooth' })
    // Iniciar música cuando se abre el sobre
    setTimeout(() => {
      if (audioRef.current) {
        audioRef.current.play().catch(() => setIsPlaying(false))
        setIsPlaying(true)
      }
    }, 800)
  }

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormCompleted(true)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleLoadDemo = () => {
    setInvitationData({
      novio1: 'María',
      novio2: 'Juan',
      fecha: '2025-06-15',
      hora: '18:00',
      lugarCeremonia: 'Iglesia San José',
      direccionCeremonia: 'Av. Libertador 1234, CABA',
      lugarFiesta: 'Salón Los Jardines',
      direccionFiesta: 'Ruta 8 Km 45, Pilar',
      horaFiesta: '20:00'
    })
    setFormCompleted(true)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-nude-50 via-sand-50 to-nude-100">
      {/* Audio Element */}
      <audio 
        ref={audioRef} 
        loop
        preload="auto"
      >
        <source src="https://cdn.pixabay.com/audio/2022/05/13/audio_257112ce99.mp3" type="audio/mpeg" />
        <source src="https://cdn.pixabay.com/audio/2022/03/23/audio_b8a2200c5a.mp3" type="audio/mpeg" />
      </audio>

      {/* Formulario de Personalización */}
      {!formCompleted && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-gradient-to-br from-nude-50 via-sand-50 to-nude-100 overflow-y-auto p-4">
          <div className="max-w-2xl w-full my-8">
            <div className="bg-white rounded-3xl shadow-2xl p-8 sm:p-12">
              <div className="text-center mb-8">
                <Heart className="w-16 h-16 text-nude-500 mx-auto mb-4" />
                <h2 className="text-4xl font-bold text-gray-900 mb-3">
                  Personalizá tu Invitación
                </h2>
                <p className="text-gray-600">
                  Completá los datos de tu casamiento para crear una invitación única
                </p>
              </div>

              <form onSubmit={handleFormSubmit} className="space-y-6">
                {/* Nombres de los novios */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Nombre del novio/a 1 *
                    </label>
                    <input
                      type="text"
                      required
                      value={invitationData.novio1}
                      onChange={(e) => setInvitationData({...invitationData, novio1: e.target.value})}
                      placeholder="Ej: María"
                      className="w-full px-4 py-3 border-2 border-sand-200 rounded-xl focus:border-nude-400 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Nombre del novio/a 2 *
                    </label>
                    <input
                      type="text"
                      required
                      value={invitationData.novio2}
                      onChange={(e) => setInvitationData({...invitationData, novio2: e.target.value})}
                      placeholder="Ej: Juan"
                      className="w-full px-4 py-3 border-2 border-sand-200 rounded-xl focus:border-nude-400 focus:outline-none"
                    />
                  </div>
                </div>

                {/* Fecha y hora */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Fecha del evento *
                    </label>
                    <input
                      type="date"
                      required
                      value={invitationData.fecha}
                      onChange={(e) => setInvitationData({...invitationData, fecha: e.target.value})}
                      className="w-full px-4 py-3 border-2 border-sand-200 rounded-xl focus:border-nude-400 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Hora de la ceremonia *
                    </label>
                    <input
                      type="time"
                      required
                      value={invitationData.hora}
                      onChange={(e) => setInvitationData({...invitationData, hora: e.target.value})}
                      className="w-full px-4 py-3 border-2 border-sand-200 rounded-xl focus:border-nude-400 focus:outline-none"
                    />
                  </div>
                </div>

                {/* Ceremonia */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Lugar de la ceremonia *
                  </label>
                  <input
                    type="text"
                    required
                    value={invitationData.lugarCeremonia}
                    onChange={(e) => setInvitationData({...invitationData, lugarCeremonia: e.target.value})}
                    placeholder="Ej: Iglesia San José"
                    className="w-full px-4 py-3 border-2 border-sand-200 rounded-xl focus:border-nude-400 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Dirección de la ceremonia *
                  </label>
                  <input
                    type="text"
                    required
                    value={invitationData.direccionCeremonia}
                    onChange={(e) => setInvitationData({...invitationData, direccionCeremonia: e.target.value})}
                    placeholder="Ej: Av. Libertador 1234, CABA"
                    className="w-full px-4 py-3 border-2 border-sand-200 rounded-xl focus:border-nude-400 focus:outline-none"
                  />
                </div>

                {/* Fiesta */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Lugar de la fiesta *
                  </label>
                  <input
                    type="text"
                    required
                    value={invitationData.lugarFiesta}
                    onChange={(e) => setInvitationData({...invitationData, lugarFiesta: e.target.value})}
                    placeholder="Ej: Salón Los Jardines"
                    className="w-full px-4 py-3 border-2 border-sand-200 rounded-xl focus:border-nude-400 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Dirección de la fiesta *
                  </label>
                  <input
                    type="text"
                    required
                    value={invitationData.direccionFiesta}
                    onChange={(e) => setInvitationData({...invitationData, direccionFiesta: e.target.value})}
                    placeholder="Ej: Ruta 8 Km 45, Pilar"
                    className="w-full px-4 py-3 border-2 border-sand-200 rounded-xl focus:border-nude-400 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Hora de la fiesta *
                  </label>
                  <input
                    type="time"
                    required
                    value={invitationData.horaFiesta}
                    onChange={(e) => setInvitationData({...invitationData, horaFiesta: e.target.value})}
                    className="w-full px-4 py-3 border-2 border-sand-200 rounded-xl focus:border-nude-400 focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-nude-500 hover:bg-nude-600 text-white py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2"
                >
                  Crear mi Invitación
                  <Heart className="w-5 h-5" />
                </button>
              </form>

              {/* Botón Ver Demo */}
              <div className="mt-6 text-center">
                <p className="text-sm text-gray-500 mb-3">¿Solo querés ver cómo queda?</p>
                <button
                  onClick={handleLoadDemo}
                  className="w-full bg-white hover:bg-sand-50 text-gray-700 py-3 rounded-xl font-semibold border-2 border-sand-200 hover:border-nude-300 transition-all flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-5 h-5 text-nude-500" />
                  Ver Demo con Datos de Ejemplo
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Envelope Animation */}
      {formCompleted && !envelopeOpened && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-gradient-to-br from-nude-100 via-sand-100 to-nude-200 animate-fade-in">
          <div className="text-center">
            {/* Sobre */}
            <div 
              onClick={handleOpenEnvelope}
              className="relative cursor-pointer group"
            >
              {/* Cuerpo del sobre */}
              <div className="relative w-80 h-56 bg-gradient-to-br from-nude-200 to-sand-200 rounded-lg shadow-2xl transform transition-all duration-500 group-hover:scale-105 group-hover:shadow-nude-400/50">
                {/* Tapa del sobre */}
                <div className="absolute -top-0 left-0 right-0 h-32 bg-gradient-to-br from-nude-300 to-sand-300 origin-top transform transition-all duration-700 group-hover:-translate-y-2 group-hover:rotate-[-5deg]"
                  style={{
                    clipPath: 'polygon(0 0, 50% 60%, 100% 0)'
                  }}
                >
                </div>
                
                {/* Sello/Corazón */}
                <div className="absolute top-4 right-4 w-12 h-12 bg-nude-500 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <Heart className="w-6 h-6 text-white fill-white" />
                </div>

                {/* Contenido visible del sobre */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                  <Heart className="w-16 h-16 text-nude-600 mb-4 animate-pulse" />
                  <p className="text-2xl font-bold text-gray-800 mb-2">
                    {invitationData.novio1} & {invitationData.novio2}
                  </p>
                  <p className="text-sm text-gray-600 italic">Hacé click para abrir</p>
                </div>

                {/* Brillo decorativo */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Texto debajo */}
              <div className="mt-8 animate-bounce">
                <p className="text-lg text-gray-700 font-semibold">✨ Abrí tu invitación ✨</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Music Control Button - Floating (solo visible después de abrir el sobre) */}
      {envelopeOpened && (
        <button
          onClick={toggleMusic}
          className={`fixed bottom-8 right-8 z-50 p-4 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 group ${
            isPlaying 
              ? 'bg-nude-500 hover:bg-nude-600 text-white animate-pulse' 
              : 'bg-gray-700 hover:bg-gray-800 text-white'
          }`}
          aria-label={isPlaying ? 'Pausar música' : 'Reproducir música'}
        >
          {isPlaying ? (
            <Volume2 className="w-6 h-6" />
          ) : (
            <VolumeX className="w-6 h-6" />
          )}
          <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white text-sm px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-lg">
            {isPlaying ? '🎵 Pausar música' : '🎵 Reproducir música'}
          </span>
        </button>
      )}

      {/* Contenido principal con animación de entrada */}
      <div className={`transition-all duration-1000 ${envelopeOpened ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>

      {/* Header Navigation */}
      <nav className="bg-white/80 backdrop-blur-sm shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex items-center gap-2 text-nude-600 hover:text-nude-700 transition-colors">
              <ArrowLeft className="w-5 h-5" />
              <span className="font-semibold">Volver al inicio</span>
            </Link>
            <div className="flex gap-3">
              <button className="p-2 rounded-full hover:bg-sand-100 transition-colors">
                <Share2 className="w-5 h-5 text-gray-600" />
              </button>
              <button className="p-2 rounded-full hover:bg-sand-100 transition-colors">
                <Download className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Imagen de fondo */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1519741497674-611481863552?w=1920&q=80" 
            alt="Pareja de novios"
            className="w-full h-full object-cover"
          />
          {/* Overlay oscuro para mejor legibilidad */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-white"></div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-nude-200 rounded-full blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-sand-300 rounded-full blur-3xl opacity-20 animate-pulse"></div>
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 py-24">
          <div className="mb-10 animate-fade-in">
            <div className="inline-block p-4 bg-white rounded-full shadow-xl mb-6">
              <Heart className="w-12 h-12 text-nude-500" />
            </div>
          </div>
          
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold mb-4 animate-fade-in-up drop-shadow-2xl">
            <span className="text-white">
              {invitationData.novio1} & {invitationData.novio2}
            </span>
          </h1>
          
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-white/60"></div>
            <p className="text-3xl sm:text-4xl text-white font-light italic drop-shadow-lg">
              ¡Nos casamos!
            </p>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-white/60"></div>
          </div>
          
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 max-w-2xl mx-auto mb-8 shadow-2xl">
            <p className="text-xl text-gray-800 leading-relaxed">
              Después de 5 años juntos, decidimos dar el siguiente paso. 
              Queremos compartir este momento tan especial con vos.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center bg-white/90 backdrop-blur-sm rounded-full px-8 py-4 shadow-xl max-w-fit mx-auto">
            <div className="flex items-center gap-2 text-gray-800">
              <Calendar className="w-5 h-5 text-nude-500" />
              <span className="font-semibold">{new Date(invitationData.fecha).toLocaleDateString('es-AR', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
            </div>
            <div className="hidden sm:block w-1 h-1 bg-nude-400 rounded-full"></div>
            <div className="flex items-center gap-2 text-gray-800">
              <MapPin className="w-5 h-5 text-nude-500" />
              <span className="font-semibold">{invitationData.lugarCeremonia}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Countdown Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Faltan para el gran día
          </h2>
          <div className="grid grid-cols-4 gap-4 sm:gap-8">
            {[
              { value: timeLeft.days, label: 'Días' },
              { value: timeLeft.hours, label: 'Horas' },
              { value: timeLeft.minutes, label: 'Minutos' },
              { value: timeLeft.seconds, label: 'Segundos' }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-br from-nude-100 to-sand-100 rounded-2xl p-4 sm:p-6 mb-3 shadow-lg">
                  <span className="text-3xl sm:text-5xl font-bold text-nude-600">
                    {item.value}
                  </span>
                </div>
                <p className="text-sm sm:text-base text-gray-600 font-semibold">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Details */}
      <section className="py-16 bg-sand-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Detalles del evento
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Ceremonia */}
            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-nude-100 rounded-full">
                  <Heart className="w-6 h-6 text-nude-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Ceremonia</h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Calendar className="w-5 h-5 text-nude-500 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">{new Date(invitationData.fecha).toLocaleDateString('es-AR', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
                    <p className="text-gray-600 text-sm">{new Date(invitationData.fecha).toLocaleDateString('es-AR', { weekday: 'long' })}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-nude-500 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">{invitationData.hora} hs</p>
                    <p className="text-gray-600 text-sm">Puntualidad por favor</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-nude-500 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">{invitationData.lugarCeremonia}</p>
                    <p className="text-gray-600 text-sm">{invitationData.direccionCeremonia}</p>
                  </div>
                </div>
              </div>
              <button className="w-full mt-6 bg-nude-500 hover:bg-nude-600 text-white py-3 rounded-xl font-semibold transition-colors">
                Ver en mapa
              </button>
            </div>

            {/* Fiesta */}
            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-nude-100 rounded-full">
                  <Music className="w-6 h-6 text-nude-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Fiesta</h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Calendar className="w-5 h-5 text-nude-500 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">{new Date(invitationData.fecha).toLocaleDateString('es-AR', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
                    <p className="text-gray-600 text-sm">{new Date(invitationData.fecha).toLocaleDateString('es-AR', { weekday: 'long' })}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-nude-500 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">{invitationData.horaFiesta} hs</p>
                    <p className="text-gray-600 text-sm">Hasta que el cuerpo aguante</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-nude-500 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">{invitationData.lugarFiesta}</p>
                    <p className="text-gray-600 text-sm">{invitationData.direccionFiesta}</p>
                  </div>
                </div>
              </div>
              <button className="w-full mt-6 bg-nude-500 hover:bg-nude-600 text-white py-3 rounded-xl font-semibold transition-colors">
                Ver en mapa
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Camera className="w-12 h-12 text-nude-500 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Nuestra historia
            </h2>
            <p className="text-gray-600">
              Algunos momentos especiales que compartimos juntos
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              'https://images.unsplash.com/photo-1519741497674-611481863552?w=500&q=80',
              'https://images.unsplash.com/photo-1606800052052-a08af7148866?w=500&q=80',
              'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=500&q=80',
              'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=500&q=80',
              'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=500&q=80',
              'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=500&q=80'
            ].map((img, index) => (
              <div 
                key={index}
                className="aspect-square rounded-2xl overflow-hidden hover:scale-105 transition-transform cursor-pointer shadow-lg group"
              >
                <img 
                  src={img} 
                  alt={`Momento ${index + 1}`}
                  className="w-full h-full object-cover group-hover:brightness-110 transition-all"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RSVP Section */}
      <section className="py-16 bg-gradient-to-br from-nude-100 to-sand-100">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-2xl">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Confirmá tu asistencia
              </h2>
              <p className="text-gray-600">
                Por favor, confirmanos antes del 1 de Marzo
              </p>
            </div>

            {showRSVP ? (
              <div className="text-center py-8 animate-scale-in">
                <Heart className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  ¡Confirmado!
                </h3>
                <p className="text-gray-600">
                  Nos vemos en la boda. ¡Gracias por confirmar!
                </p>
              </div>
            ) : (
              <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); setShowRSVP(true); }}>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Tu nombre completo
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ingresá tu nombre"
                    className="w-full px-4 py-3 border-2 border-sand-200 rounded-xl focus:border-nude-400 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    ¿Cuántas personas asistirán?
                  </label>
                  <select className="w-full px-4 py-3 border-2 border-sand-200 rounded-xl focus:border-nude-400 focus:outline-none">
                    <option>1 persona</option>
                    <option>2 personas</option>
                    <option>3 personas</option>
                    <option>4 personas</option>
                    <option>5+ personas</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Mensaje para los novios (opcional)
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Dejanos un mensaje..."
                    className="w-full px-4 py-3 border-2 border-sand-200 rounded-xl focus:border-nude-400 focus:outline-none resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-nude-500 hover:bg-nude-600 text-white py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all"
                >
                  Confirmar asistencia
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Gift Registry */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Gift className="w-12 h-12 text-nude-500 mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Lista de regalos
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Tu presencia es nuestro mejor regalo, pero si querés colaborar con nuestra luna de miel, acá dejamos nuestros datos
          </p>
          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <div className="bg-sand-50 rounded-2xl p-6 hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-gray-900 mb-2">Transferencia</h3>
              <p className="text-sm text-gray-600 mb-3">CBU: 0000003100012345678901</p>
              <p className="text-sm text-gray-600">Alias: MARIA.JUAN.BODA</p>
            </div>
            <div className="bg-sand-50 rounded-2xl p-6 hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-gray-900 mb-2">Lista de regalos</h3>
              <button className="mt-2 text-nude-600 hover:text-nude-700 font-semibold">
                Ver lista completa →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Heart className="w-8 h-8 text-nude-400 mx-auto mb-4" />
          <p className="text-gray-400 mb-2">
            Creado con amor usando URSIS Invitations
          </p>
          <Link to="/" className="text-nude-400 hover:text-nude-300 text-sm">
            Creá tu propia invitación →
          </Link>
        </div>
      </footer>
      </div>
      {/* Cierre del div de contenido principal */}
    </div>
  )
}

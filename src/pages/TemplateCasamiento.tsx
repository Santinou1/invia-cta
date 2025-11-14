import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Heart, Calendar, MapPin, Clock, Music, Camera, Gift, ArrowLeft, Volume2, VolumeX, Sparkles, Settings, X, Upload } from 'lucide-react'
import { EditableField } from '../components/EditableField'
import { EditableImage } from '../components/EditableImage'

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
  imagenFondo: string
  // Textos hero
  mensajeHero: string
  descripcionHero: string
  // Títulos de secciones
  tituloCountdown: string
  tituloDetalles: string
  tituloCeremonia: string
  tituloFiesta: string
  mensajePuntualidad: string
  mensajeDuracion: string
  // Galería
  tituloGaleria: string
  subtituloGaleria: string
  // RSVP
  tituloRSVP: string
  subtituloRSVP: string
  labelNombre: string
  labelPersonas: string
  labelMensaje: string
  textoBotonRSVP: string
  mensajeConfirmacion: string
  mensajeAgradecimiento: string
  // Regalos
  tituloRegalos: string
  descripcionRegalos: string
  tituloTransferencia: string
  datosCBU: string
  datosAlias: string
  tituloListaRegalos: string
  textoVerLista: string
}

export default function TemplateCasamiento() {
  const [showRSVP, setShowRSVP] = useState(false)
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })
  const [isPlaying, setIsPlaying] = useState(false)
  const [envelopeOpened, setEnvelopeOpened] = useState(false)
  const [formCompleted, setFormCompleted] = useState(false)
  const [showEditPanel, setShowEditPanel] = useState(false)
  const [activeTab, setActiveTab] = useState<'basico' | 'textos' | 'rsvp' | 'regalos'>('basico')
  const [invitationData, setInvitationData] = useState<InvitationData>({
    novio1: '',
    novio2: '',
    fecha: '',
    hora: '',
    lugarCeremonia: '',
    direccionCeremonia: '',
    lugarFiesta: '',
    direccionFiesta: '',
    horaFiesta: '',
    imagenFondo: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=1920&q=80',
    mensajeHero: '¡Nos casamos!',
    descripcionHero: 'Después de 5 años juntos, decidimos dar el siguiente paso. Queremos compartir este momento tan especial con vos.',
    tituloCountdown: 'Faltan para el gran día',
    tituloDetalles: 'Detalles del evento',
    tituloCeremonia: 'Ceremonia',
    tituloFiesta: 'Fiesta',
    mensajePuntualidad: 'Puntualidad por favor',
    mensajeDuracion: 'Hasta que el cuerpo aguante',
    tituloGaleria: 'Nuestra historia',
    subtituloGaleria: 'Algunos momentos especiales que compartimos juntos',
    tituloRSVP: 'Confirmá tu asistencia',
    subtituloRSVP: 'Por favor, confirmanos antes del 1 de Marzo',
    labelNombre: 'Tu nombre completo',
    labelPersonas: '¿Cuántas personas asistirán?',
    labelMensaje: 'Mensaje para los novios (opcional)',
    textoBotonRSVP: 'Confirmar asistencia',
    mensajeConfirmacion: '¡Confirmado!',
    mensajeAgradecimiento: 'Nos vemos en la boda. ¡Gracias por confirmar!',
    tituloRegalos: 'Lista de regalos',
    descripcionRegalos: 'Tu presencia es nuestro mejor regalo, pero si querés colaborar con nuestra luna de miel, acá dejamos nuestros datos',
    tituloTransferencia: 'Transferencia',
    datosCBU: 'CBU: 0000003100012345678901',
    datosAlias: 'Alias: MARIA.JUAN.BODA',
    tituloListaRegalos: 'Lista de regalos',
    textoVerLista: 'Ver lista completa →'
  })
  const audioRef = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    // Usar la fecha y hora editables del invitationData
    const fechaHora = invitationData.fecha && invitationData.hora 
      ? `${invitationData.fecha}T${invitationData.hora}:00`
      : '2026-03-15T18:00:00'
    const weddingDate = new Date(fechaHora).getTime()
    
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
  }, [invitationData.fecha, invitationData.hora])

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
      horaFiesta: '20:00',
      imagenFondo: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=1920&q=80',
      mensajeHero: '¡Nos casamos!',
      descripcionHero: 'Después de 5 años juntos, decidimos dar el siguiente paso. Queremos compartir este momento tan especial con vos.',
      tituloCountdown: 'Faltan para el gran día',
      tituloDetalles: 'Detalles del evento',
      tituloCeremonia: 'Ceremonia',
      tituloFiesta: 'Fiesta',
      mensajePuntualidad: 'Puntualidad por favor',
      mensajeDuracion: 'Hasta que el cuerpo aguante',
      tituloGaleria: 'Nuestra historia',
      subtituloGaleria: 'Algunos momentos especiales que compartimos juntos',
      tituloRSVP: 'Confirmá tu asistencia',
      subtituloRSVP: 'Por favor, confirmanos antes del 1 de Marzo',
      labelNombre: 'Tu nombre completo',
      labelPersonas: '¿Cuántas personas asistirán?',
      labelMensaje: 'Mensaje para los novios (opcional)',
      textoBotonRSVP: 'Confirmar asistencia',
      mensajeConfirmacion: '¡Confirmado!',
      mensajeAgradecimiento: 'Nos vemos en la boda. ¡Gracias por confirmar!',
      tituloRegalos: 'Lista de regalos',
      descripcionRegalos: 'Tu presencia es nuestro mejor regalo, pero si querés colaborar con nuestra luna de miel, acá dejamos nuestros datos',
      tituloTransferencia: 'Transferencia',
      datosCBU: 'CBU: 0000003100012345678901',
      datosAlias: 'Alias: MARIA.JUAN.BODA',
      tituloListaRegalos: 'Lista de regalos',
      textoVerLista: 'Ver lista completa →'
    })
    setFormCompleted(true)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const updateInvitationField = (field: keyof InvitationData, value: string) => {
    setInvitationData(prev => ({ ...prev, [field]: value }))
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
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
            <div className="flex items-center gap-3">
              <button 
                onClick={() => setShowEditPanel(!showEditPanel)}
                className="flex items-center gap-2 px-4 py-2 bg-nude-500 hover:bg-nude-600 text-white rounded-lg transition-all shadow-md hover:shadow-lg"
              >
                <Settings className="w-5 h-5" />
                <span className="font-semibold">Panel de Edición</span>
              </button>
              <Link
                to="/whitelist"
                className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white rounded-lg transition-all shadow-md hover:shadow-lg"
              >
                <Upload className="w-5 h-5" />
                <span className="font-semibold">Publicar</span>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Panel de Edición Lateral */}
      {showEditPanel && (
      <div className="fixed top-0 right-0 h-full w-96 bg-white shadow-2xl z-[60] transform transition-transform duration-300 translate-x-0 overflow-y-auto animate-slide-in">
        <div className="flex flex-col h-full">
          {/* Header del Panel */}
          <div className="flex justify-between items-center p-4 border-b-2 border-nude-200 bg-gradient-to-r from-nude-50 to-sand-50">
            <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
              <Settings className="w-5 h-5 text-nude-500" />
              Editor
            </h2>
            <button 
              onClick={() => setShowEditPanel(false)}
              className="p-1.5 hover:bg-white rounded-full transition-colors"
            >
              <X className="w-5 h-5 text-gray-600" />
            </button>
          </div>

          {/* Pestañas */}
          <div className="flex border-b border-gray-200 bg-white px-2">
            <button
              onClick={() => setActiveTab('basico')}
              className={`flex-1 py-3 px-2 text-sm font-semibold transition-colors border-b-2 ${
                activeTab === 'basico'
                  ? 'border-nude-500 text-nude-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              📋 Básico
            </button>
            <button
              onClick={() => setActiveTab('textos')}
              className={`flex-1 py-3 px-2 text-sm font-semibold transition-colors border-b-2 ${
                activeTab === 'textos'
                  ? 'border-nude-500 text-nude-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              ✏️ Textos
            </button>
            <button
              onClick={() => setActiveTab('rsvp')}
              className={`flex-1 py-3 px-2 text-sm font-semibold transition-colors border-b-2 ${
                activeTab === 'rsvp'
                  ? 'border-nude-500 text-nude-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              💌 RSVP
            </button>
            <button
              onClick={() => setActiveTab('regalos')}
              className={`flex-1 py-3 px-2 text-sm font-semibold transition-colors border-b-2 ${
                activeTab === 'regalos'
                  ? 'border-nude-500 text-nude-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              🎁 Regalos
            </button>
          </div>

          {/* Contenido de las pestañas */}
          <div className="flex-1 overflow-y-auto p-4 bg-gray-50">
            
            {/* TAB: Básico */}
            {activeTab === 'basico' && (
              <div className="space-y-4">
                {/* Novios */}
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <Heart className="w-4 h-4 text-nude-500" />
                    Novios
                  </h3>
                  <div className="space-y-2">
                    <input
                      type="text"
                      value={invitationData.novio1}
                      onChange={(e) => updateInvitationField('novio1', e.target.value)}
                      placeholder="Novio/a 1"
                      className="w-full px-3 py-2 text-sm border rounded-lg focus:border-nude-400 focus:outline-none"
                    />
                    <input
                      type="text"
                      value={invitationData.novio2}
                      onChange={(e) => updateInvitationField('novio2', e.target.value)}
                      placeholder="Novio/a 2"
                      className="w-full px-3 py-2 text-sm border rounded-lg focus:border-nude-400 focus:outline-none"
                    />
                  </div>
                </div>

                {/* Fecha y Hora */}
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-nude-500" />
                    Fecha & Hora
                  </h3>
                  <div className="space-y-2">
                    <div>
                      <label className="text-xs text-gray-600 mb-1 block">Fecha</label>
                      <input
                        type="date"
                        value={invitationData.fecha}
                        onChange={(e) => updateInvitationField('fecha', e.target.value)}
                        onFocus={() => scrollToSection('countdown')}
                        className="w-full px-3 py-2 text-sm border rounded-lg focus:border-nude-400 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="text-xs text-gray-600 mb-1 block">Hora Ceremonia</label>
                      <input
                        type="time"
                        value={invitationData.hora}
                        onChange={(e) => updateInvitationField('hora', e.target.value)}
                        onFocus={() => scrollToSection('countdown')}
                        className="w-full px-3 py-2 text-sm border rounded-lg focus:border-nude-400 focus:outline-none"
                      />
                    </div>
                  </div>
                </div>

                {/* Ceremonia */}
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <Heart className="w-4 h-4 text-nude-500" />
                    Ceremonia
                  </h3>
                  <div className="space-y-2">
                    <input
                      type="text"
                      value={invitationData.lugarCeremonia}
                      onChange={(e) => updateInvitationField('lugarCeremonia', e.target.value)}
                      onFocus={() => scrollToSection('ceremonia')}
                      placeholder="Lugar"
                      className="w-full px-3 py-2 text-sm border rounded-lg focus:border-nude-400 focus:outline-none"
                    />
                    <input
                      type="text"
                      value={invitationData.direccionCeremonia}
                      onChange={(e) => updateInvitationField('direccionCeremonia', e.target.value)}
                      onFocus={() => scrollToSection('ceremonia')}
                      placeholder="Dirección"
                      className="w-full px-3 py-2 text-sm border rounded-lg focus:border-nude-400 focus:outline-none"
                    />
                  </div>
                </div>

                {/* Fiesta */}
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <Music className="w-4 h-4 text-nude-500" />
                    Fiesta
                  </h3>
                  <div className="space-y-2">
                    <input
                      type="time"
                      value={invitationData.horaFiesta}
                      onChange={(e) => updateInvitationField('horaFiesta', e.target.value)}
                      onFocus={() => scrollToSection('fiesta')}
                      placeholder="Hora"
                      className="w-full px-3 py-2 text-sm border rounded-lg focus:border-nude-400 focus:outline-none"
                    />
                    <input
                      type="text"
                      value={invitationData.lugarFiesta}
                      onChange={(e) => updateInvitationField('lugarFiesta', e.target.value)}
                      onFocus={() => scrollToSection('fiesta')}
                      placeholder="Lugar"
                      className="w-full px-3 py-2 text-sm border rounded-lg focus:border-nude-400 focus:outline-none"
                    />
                    <input
                      type="text"
                      value={invitationData.direccionFiesta}
                      onChange={(e) => updateInvitationField('direccionFiesta', e.target.value)}
                      onFocus={() => scrollToSection('fiesta')}
                      placeholder="Dirección"
                      className="w-full px-3 py-2 text-sm border rounded-lg focus:border-nude-400 focus:outline-none"
                    />
                  </div>
                </div>

                {/* Imagen */}
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <Camera className="w-4 h-4 text-nude-500" />
                    Imagen de Fondo
                  </h3>
                  <input
                    type="url"
                    value={invitationData.imagenFondo}
                    onChange={(e) => updateInvitationField('imagenFondo', e.target.value)}
                    onFocus={() => scrollToSection('hero')}
                    placeholder="https://..."
                    className="w-full px-3 py-2 text-sm border rounded-lg focus:border-nude-400 focus:outline-none"
                  />
                </div>
              </div>
            )}

            {/* TAB: Textos */}
            {activeTab === 'textos' && (
              <div className="space-y-4">
                {/* Hero */}
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <h3 className="font-bold text-gray-900 mb-3">Hero</h3>
                  <div className="space-y-2">
                    <input
                      type="text"
                      value={invitationData.mensajeHero}
                      onChange={(e) => updateInvitationField('mensajeHero', e.target.value)}
                      onFocus={() => scrollToSection('hero')}
                      placeholder="Mensaje principal"
                      className="w-full px-3 py-2 text-sm border rounded-lg focus:border-nude-400 focus:outline-none"
                    />
                    <textarea
                      value={invitationData.descripcionHero}
                      onChange={(e) => updateInvitationField('descripcionHero', e.target.value)}
                      onFocus={() => scrollToSection('hero')}
                      placeholder="Descripción"
                      rows={3}
                      className="w-full px-3 py-2 text-sm border rounded-lg focus:border-nude-400 focus:outline-none resize-none"
                    />
                  </div>
                </div>

                {/* Títulos */}
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <h3 className="font-bold text-gray-900 mb-3">Títulos</h3>
                  <div className="space-y-2">
                    <input
                      type="text"
                      value={invitationData.tituloCountdown}
                      onChange={(e) => updateInvitationField('tituloCountdown', e.target.value)}
                      placeholder="Título Countdown"
                      className="w-full px-3 py-2 text-sm border rounded-lg focus:border-nude-400 focus:outline-none"
                    />
                    <input
                      type="text"
                      value={invitationData.tituloDetalles}
                      onChange={(e) => updateInvitationField('tituloDetalles', e.target.value)}
                      placeholder="Título Detalles"
                      className="w-full px-3 py-2 text-sm border rounded-lg focus:border-nude-400 focus:outline-none"
                    />
                    <input
                      type="text"
                      value={invitationData.tituloCeremonia}
                      onChange={(e) => updateInvitationField('tituloCeremonia', e.target.value)}
                      placeholder="Título Ceremonia"
                      className="w-full px-3 py-2 text-sm border rounded-lg focus:border-nude-400 focus:outline-none"
                    />
                    <input
                      type="text"
                      value={invitationData.tituloFiesta}
                      onChange={(e) => updateInvitationField('tituloFiesta', e.target.value)}
                      placeholder="Título Fiesta"
                      className="w-full px-3 py-2 text-sm border rounded-lg focus:border-nude-400 focus:outline-none"
                    />
                  </div>
                </div>

                {/* Galería */}
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <h3 className="font-bold text-gray-900 mb-3">Galería</h3>
                  <div className="space-y-2">
                    <input
                      type="text"
                      value={invitationData.tituloGaleria}
                      onChange={(e) => updateInvitationField('tituloGaleria', e.target.value)}
                      placeholder="Título"
                      className="w-full px-3 py-2 text-sm border rounded-lg focus:border-nude-400 focus:outline-none"
                    />
                    <input
                      type="text"
                      value={invitationData.subtituloGaleria}
                      onChange={(e) => updateInvitationField('subtituloGaleria', e.target.value)}
                      placeholder="Subtítulo"
                      className="w-full px-3 py-2 text-sm border rounded-lg focus:border-nude-400 focus:outline-none"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* TAB: RSVP */}
            {activeTab === 'rsvp' && (
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <h3 className="font-bold text-gray-900 mb-3">Títulos</h3>
                  <div className="space-y-2">
                    <input
                      type="text"
                      value={invitationData.tituloRSVP}
                      onChange={(e) => updateInvitationField('tituloRSVP', e.target.value)}
                      placeholder="Título RSVP"
                      className="w-full px-3 py-2 text-sm border rounded-lg focus:border-nude-400 focus:outline-none"
                    />
                    <input
                      type="text"
                      value={invitationData.subtituloRSVP}
                      onChange={(e) => updateInvitationField('subtituloRSVP', e.target.value)}
                      placeholder="Subtítulo"
                      className="w-full px-3 py-2 text-sm border rounded-lg focus:border-nude-400 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <h3 className="font-bold text-gray-900 mb-3">Labels</h3>
                  <div className="space-y-2">
                    <input
                      type="text"
                      value={invitationData.labelNombre}
                      onChange={(e) => updateInvitationField('labelNombre', e.target.value)}
                      placeholder="Label Nombre"
                      className="w-full px-3 py-2 text-sm border rounded-lg focus:border-nude-400 focus:outline-none"
                    />
                    <input
                      type="text"
                      value={invitationData.labelPersonas}
                      onChange={(e) => updateInvitationField('labelPersonas', e.target.value)}
                      placeholder="Label Personas"
                      className="w-full px-3 py-2 text-sm border rounded-lg focus:border-nude-400 focus:outline-none"
                    />
                    <input
                      type="text"
                      value={invitationData.labelMensaje}
                      onChange={(e) => updateInvitationField('labelMensaje', e.target.value)}
                      placeholder="Label Mensaje"
                      className="w-full px-3 py-2 text-sm border rounded-lg focus:border-nude-400 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <h3 className="font-bold text-gray-900 mb-3">Mensajes</h3>
                  <div className="space-y-2">
                    <input
                      type="text"
                      value={invitationData.textoBotonRSVP}
                      onChange={(e) => updateInvitationField('textoBotonRSVP', e.target.value)}
                      placeholder="Texto del botón"
                      className="w-full px-3 py-2 text-sm border rounded-lg focus:border-nude-400 focus:outline-none"
                    />
                    <input
                      type="text"
                      value={invitationData.mensajeConfirmacion}
                      onChange={(e) => updateInvitationField('mensajeConfirmacion', e.target.value)}
                      placeholder="Mensaje confirmación"
                      className="w-full px-3 py-2 text-sm border rounded-lg focus:border-nude-400 focus:outline-none"
                    />
                    <textarea
                      value={invitationData.mensajeAgradecimiento}
                      onChange={(e) => updateInvitationField('mensajeAgradecimiento', e.target.value)}
                      placeholder="Mensaje agradecimiento"
                      rows={2}
                      className="w-full px-3 py-2 text-sm border rounded-lg focus:border-nude-400 focus:outline-none resize-none"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* TAB: Regalos */}
            {activeTab === 'regalos' && (
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <h3 className="font-bold text-gray-900 mb-3">General</h3>
                  <div className="space-y-2">
                    <input
                      type="text"
                      value={invitationData.tituloRegalos}
                      onChange={(e) => updateInvitationField('tituloRegalos', e.target.value)}
                      placeholder="Título"
                      className="w-full px-3 py-2 text-sm border rounded-lg focus:border-nude-400 focus:outline-none"
                    />
                    <textarea
                      value={invitationData.descripcionRegalos}
                      onChange={(e) => updateInvitationField('descripcionRegalos', e.target.value)}
                      placeholder="Descripción"
                      rows={3}
                      className="w-full px-3 py-2 text-sm border rounded-lg focus:border-nude-400 focus:outline-none resize-none"
                    />
                  </div>
                </div>

                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <h3 className="font-bold text-gray-900 mb-3">Transferencia</h3>
                  <div className="space-y-2">
                    <input
                      type="text"
                      value={invitationData.tituloTransferencia}
                      onChange={(e) => updateInvitationField('tituloTransferencia', e.target.value)}
                      placeholder="Título"
                      className="w-full px-3 py-2 text-sm border rounded-lg focus:border-nude-400 focus:outline-none"
                    />
                    <input
                      type="text"
                      value={invitationData.datosCBU}
                      onChange={(e) => updateInvitationField('datosCBU', e.target.value)}
                      placeholder="CBU"
                      className="w-full px-3 py-2 text-sm border rounded-lg focus:border-nude-400 focus:outline-none"
                    />
                    <input
                      type="text"
                      value={invitationData.datosAlias}
                      onChange={(e) => updateInvitationField('datosAlias', e.target.value)}
                      placeholder="Alias"
                      className="w-full px-3 py-2 text-sm border rounded-lg focus:border-nude-400 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <h3 className="font-bold text-gray-900 mb-3">Lista de Regalos</h3>
                  <div className="space-y-2">
                    <input
                      type="text"
                      value={invitationData.tituloListaRegalos}
                      onChange={(e) => updateInvitationField('tituloListaRegalos', e.target.value)}
                      placeholder="Título"
                      className="w-full px-3 py-2 text-sm border rounded-lg focus:border-nude-400 focus:outline-none"
                    />
                    <input
                      type="text"
                      value={invitationData.textoVerLista}
                      onChange={(e) => updateInvitationField('textoVerLista', e.target.value)}
                      placeholder="Texto del enlace"
                      className="w-full px-3 py-2 text-sm border rounded-lg focus:border-nude-400 focus:outline-none"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Footer con botón de cerrar */}
          <div className="p-4 border-t border-gray-200 bg-white">
            <button
              onClick={() => setShowEditPanel(false)}
              className="w-full py-3 bg-gradient-to-r from-nude-500 to-sand-500 hover:from-nude-600 hover:to-sand-600 text-white rounded-lg font-semibold transition-all shadow-md"
            >
              Cerrar Editor
            </button>
          </div>
        </div>
      </div>
      )}

      {/* Overlay cuando el panel está abierto */}
      {showEditPanel && (
        <div 
          className="fixed inset-0 bg-black/30 z-[55]"
          onClick={() => setShowEditPanel(false)}
        />
      )}

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Imagen de fondo */}
        <div className="absolute inset-0">
          <EditableImage
            src={invitationData.imagenFondo}
            alt="Pareja de novios"
            onSave={(newSrc) => updateInvitationField('imagenFondo', newSrc)}
            className="w-full h-full object-cover"
          />
          {/* Overlay oscuro para mejor legibilidad */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-white pointer-events-none"></div>
        </div>

        {/* Contenido */}
        <div className="relative z-10 text-center px-4">
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-12 shadow-2xl max-w-2xl mx-auto">
            <Heart className="w-16 h-16 text-nude-500 mx-auto mb-6 animate-pulse" />
            <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-4">
              <EditableField
                value={invitationData.novio1}
                onSave={(value) => updateInvitationField('novio1', value)}
                className="text-gray-900"
                inputClassName="text-5xl sm:text-6xl font-bold text-gray-900 text-center w-full"
                showEditIcon={false}
              />
              <span className="text-nude-500"> & </span>
              <EditableField
                value={invitationData.novio2}
                onSave={(value) => updateInvitationField('novio2', value)}
                className="text-gray-900"
                inputClassName="text-5xl sm:text-6xl font-bold text-gray-900 text-center w-full"
                showEditIcon={false}
              />
            </h1>
            <p className="text-2xl text-gray-700 font-light mb-6">
              <EditableField
                value={invitationData.mensajeHero}
                onSave={(value) => updateInvitationField('mensajeHero', value)}
                className="text-2xl text-gray-700 font-light"
                inputClassName="text-2xl text-gray-700 font-light w-full text-center"
              />
            </p>
            <p className="text-gray-600 mb-8 max-w-xl mx-auto">
              <EditableField
                value={invitationData.descripcionHero}
                onSave={(value) => updateInvitationField('descripcionHero', value)}
                className="text-gray-600"
                inputClassName="text-gray-600 w-full text-center"
                multiline
              />
            </p>
            <div className="flex items-center justify-center gap-4 text-gray-800">
              <Calendar className="w-5 h-5 text-nude-500" />
              <span className="text-lg font-semibold">
                {new Date(invitationData.fecha).toLocaleDateString('es-AR', { 
                  day: 'numeric', 
                  month: 'long', 
                  year: 'numeric' 
                })}
              </span>
            </div>
            <div className="flex items-center justify-center gap-4 text-gray-800">
              <MapPin className="w-5 h-5 text-nude-500" />
              <EditableField
                value={invitationData.lugarCeremonia}
                onSave={(value) => updateInvitationField('lugarCeremonia', value)}
                className="font-semibold"
                inputClassName="font-semibold text-gray-900"
                showEditIcon={false}
              />
            </div>
          </div>
        </div>

        {/* Botón de música */}
        <button
          onClick={toggleMusic}
          className="absolute bottom-8 right-8 p-4 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-all z-20"
        >
          {isPlaying ? (
            <Volume2 className="w-6 h-6 text-nude-500" />
          ) : (
            <VolumeX className="w-6 h-6 text-gray-400" />
          )}
        </button>
      </section>

      {/* Countdown Section */}
      <section id="countdown" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            <EditableField
              value={invitationData.tituloCountdown}
              onSave={(value) => updateInvitationField('tituloCountdown', value)}
              className="text-3xl font-bold text-center text-gray-900"
              inputClassName="text-3xl font-bold text-center text-gray-900 w-full"
            />
          </h2>
          <div className="grid grid-cols-4 gap-4 sm:gap-8">
            {[
              { value: timeLeft.days, label: 'Días' },
              { value: timeLeft.hours, label: 'Horas' },
              { value: timeLeft.minutes, label: 'Minutos' },
              { value: timeLeft.seconds, label: 'Segundos' }
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="bg-gradient-to-br from-nude-100 to-sand-100 rounded-2xl p-6 mb-2 shadow-md">
                  <span className="text-4xl sm:text-5xl font-bold text-nude-600">{item.value}</span>
                </div>
                <span className="text-sm text-gray-600 font-semibold">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detalles del Evento */}
      <section className="py-16 bg-gradient-to-br from-sand-50 to-nude-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            <EditableField
              value={invitationData.tituloDetalles}
              onSave={(value) => updateInvitationField('tituloDetalles', value)}
              className="text-3xl font-bold text-center text-gray-900"
              inputClassName="text-3xl font-bold text-center text-gray-900 w-full"
            />
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Ceremonia */}
            <div id="ceremonia" className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-nude-100 rounded-full">
                  <Heart className="w-6 h-6 text-nude-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  <EditableField
                    value={invitationData.tituloCeremonia}
                    onSave={(value) => updateInvitationField('tituloCeremonia', value)}
                    className="text-2xl font-bold text-gray-900"
                    inputClassName="text-2xl font-bold text-gray-900 w-full"
                  />
                </h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-nude-500 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900">{invitationData.hora}</p>
                    <p className="text-sm text-gray-600">
                      <EditableField
                        value={invitationData.mensajePuntualidad}
                        onSave={(value) => updateInvitationField('mensajePuntualidad', value)}
                        className="text-sm text-gray-600"
                        inputClassName="text-sm text-gray-600 w-full"
                      />
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-nude-500 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900">
                      <EditableField
                        value={invitationData.lugarCeremonia}
                        onSave={(value) => updateInvitationField('lugarCeremonia', value)}
                        className="font-semibold text-gray-900"
                        inputClassName="font-semibold text-gray-900 w-full"
                      />
                    </p>
                    <p className="text-gray-600 text-sm">
                      <EditableField
                        value={invitationData.direccionCeremonia}
                        onSave={(value) => updateInvitationField('direccionCeremonia', value)}
                        className="text-gray-600 text-sm"
                        inputClassName="text-gray-600 text-sm w-full"
                      />
                    </p>
                  </div>
                </div>
              </div>
              <button className="w-full mt-6 bg-nude-500 hover:bg-nude-600 text-white py-3 rounded-xl font-semibold transition-colors">
                Ver en mapa
              </button>
            </div>

            {/* Fiesta */}
            <div id="fiesta" className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-nude-100 rounded-full">
                  <Music className="w-6 h-6 text-nude-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  <EditableField
                    value={invitationData.tituloFiesta}
                    onSave={(value) => updateInvitationField('tituloFiesta', value)}
                    className="text-2xl font-bold text-gray-900"
                    inputClassName="text-2xl font-bold text-gray-900 w-full"
                  />
                </h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-nude-500 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900">{invitationData.horaFiesta}</p>
                    <p className="text-sm text-gray-600">
                      <EditableField
                        value={invitationData.mensajeDuracion}
                        onSave={(value) => updateInvitationField('mensajeDuracion', value)}
                        className="text-sm text-gray-600"
                        inputClassName="text-sm text-gray-600 w-full"
                      />
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-nude-500 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900">
                      <EditableField
                        value={invitationData.lugarFiesta}
                        onSave={(value) => updateInvitationField('lugarFiesta', value)}
                        className="font-semibold text-gray-900"
                        inputClassName="font-semibold text-gray-900 w-full"
                      />
                    </p>
                    <p className="text-gray-600 text-sm">
                      <EditableField
                        value={invitationData.direccionFiesta}
                        onSave={(value) => updateInvitationField('direccionFiesta', value)}
                        className="text-gray-600 text-sm"
                        inputClassName="text-gray-600 text-sm w-full"
                      />
                    </p>
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

      {/* Galería */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Camera className="w-12 h-12 text-nude-500 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              <EditableField
                value={invitationData.tituloGaleria}
                onSave={(value) => updateInvitationField('tituloGaleria', value)}
                className="text-3xl font-bold text-gray-900"
                inputClassName="text-3xl font-bold text-gray-900 w-full text-center"
              />
            </h2>
            <p className="text-gray-600">
              <EditableField
                value={invitationData.subtituloGaleria}
                onSave={(value) => updateInvitationField('subtituloGaleria', value)}
                className="text-gray-600"
                inputClassName="text-gray-600 w-full text-center"
              />
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              'https://images.unsplash.com/photo-1606800052052-a08af7148866?w=600&q=80',
              'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=600&q=80',
              'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80',
              'https://images.unsplash.com/photo-1529634806980-85c3dd6d34ac?w=600&q=80',
              'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=600&q=80',
              'https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=600&q=80'
            ].map((img, i) => (
              <div key={i} className="aspect-square bg-gradient-to-br from-nude-100 to-sand-100 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow group cursor-pointer">
                <img 
                  src={img} 
                  alt={`Momento especial ${i + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RSVP */}
      <section className="py-16 bg-gradient-to-br from-sand-50 to-nude-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-12 shadow-2xl">
            <div className="text-center mb-8">
              <Heart className="w-12 h-12 text-nude-500 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                <EditableField
                  value={invitationData.tituloRSVP}
                  onSave={(value) => updateInvitationField('tituloRSVP', value)}
                  className="text-3xl font-bold text-gray-900"
                  inputClassName="text-3xl font-bold text-gray-900 w-full text-center"
                />
              </h2>
              <p className="text-gray-600">
                <EditableField
                  value={invitationData.subtituloRSVP}
                  onSave={(value) => updateInvitationField('subtituloRSVP', value)}
                  className="text-gray-600"
                  inputClassName="text-gray-600 w-full text-center"
                />
              </p>
            </div>

            {!showRSVP ? (
              <button
                onClick={() => setShowRSVP(true)}
                className="w-full bg-gradient-to-r from-nude-500 to-sand-500 hover:from-nude-600 hover:to-sand-600 text-white py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all"
              >
                <EditableField
                  value={invitationData.textoBotonRSVP}
                  onSave={(value) => updateInvitationField('textoBotonRSVP', value)}
                  className="text-white font-bold text-lg"
                  inputClassName="text-gray-900 font-bold text-lg w-full text-center"
                  showEditIcon={false}
                />
              </button>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    <EditableField
                      value={invitationData.labelNombre}
                      onSave={(value) => updateInvitationField('labelNombre', value)}
                      className="text-sm font-semibold text-gray-700"
                      inputClassName="text-sm font-semibold text-gray-700 w-full"
                      showEditIcon={false}
                    />
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border-2 border-sand-200 rounded-xl focus:border-nude-400 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    <EditableField
                      value={invitationData.labelPersonas}
                      onSave={(value) => updateInvitationField('labelPersonas', value)}
                      className="text-sm font-semibold text-gray-700"
                      inputClassName="text-sm font-semibold text-gray-700 w-full"
                      showEditIcon={false}
                    />
                  </label>
                  <select className="w-full px-4 py-3 border-2 border-sand-200 rounded-xl focus:border-nude-400 focus:outline-none">
                    <option>1 persona</option>
                    <option>2 personas</option>
                    <option>3 personas</option>
                    <option>4+ personas</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    <EditableField
                      value={invitationData.labelMensaje}
                      onSave={(value) => updateInvitationField('labelMensaje', value)}
                      className="text-sm font-semibold text-gray-700"
                      inputClassName="text-sm font-semibold text-gray-700 w-full"
                      showEditIcon={false}
                    />
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
                  <EditableField
                    value={invitationData.textoBotonRSVP}
                    onSave={(value) => updateInvitationField('textoBotonRSVP', value)}
                    className="text-white font-bold text-lg"
                    inputClassName="text-gray-900 font-bold text-lg w-full text-center"
                    showEditIcon={false}
                  />
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
            <EditableField
              value={invitationData.tituloRegalos}
              onSave={(value) => updateInvitationField('tituloRegalos', value)}
              className="text-3xl font-bold text-gray-900"
              inputClassName="text-3xl font-bold text-gray-900 w-full text-center"
            />
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            <EditableField
              value={invitationData.descripcionRegalos}
              onSave={(value) => updateInvitationField('descripcionRegalos', value)}
              className="text-gray-600"
              inputClassName="text-gray-600 w-full text-center"
              multiline
            />
          </p>
          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <div className="bg-sand-50 rounded-2xl p-6 hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-gray-900 mb-2">
                <EditableField
                  value={invitationData.tituloTransferencia}
                  onSave={(value) => updateInvitationField('tituloTransferencia', value)}
                  className="font-bold text-gray-900"
                  inputClassName="font-bold text-gray-900 w-full text-center"
                />
              </h3>
              <p className="text-sm text-gray-600 mb-3">
                <EditableField
                  value={invitationData.datosCBU}
                  onSave={(value) => updateInvitationField('datosCBU', value)}
                  className="text-sm text-gray-600"
                  inputClassName="text-sm text-gray-600 w-full text-center"
                />
              </p>
              <p className="text-sm text-gray-600">
                <EditableField
                  value={invitationData.datosAlias}
                  onSave={(value) => updateInvitationField('datosAlias', value)}
                  className="text-sm text-gray-600"
                  inputClassName="text-sm text-gray-600 w-full text-center"
                />
              </p>
            </div>
            <div className="bg-sand-50 rounded-2xl p-6 hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-gray-900 mb-2">
                <EditableField
                  value={invitationData.tituloListaRegalos}
                  onSave={(value) => updateInvitationField('tituloListaRegalos', value)}
                  className="font-bold text-gray-900"
                  inputClassName="font-bold text-gray-900 w-full text-center"
                />
              </h3>
              <button className="mt-2 text-nude-600 hover:text-nude-700 font-semibold">
                <EditableField
                  value={invitationData.textoVerLista}
                  onSave={(value) => updateInvitationField('textoVerLista', value)}
                  className="text-nude-600 font-semibold"
                  inputClassName="text-nude-600 font-semibold w-full text-center"
                  showEditIcon={false}
                />
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
            Creado con amor usando INVIA
          </p>
          <Link to="/" className="text-nude-400 hover:text-nude-300 text-sm">
            Creá tu propia invitación →
          </Link>
        </div>
      </footer>
      </div>
    </div>
  )
}

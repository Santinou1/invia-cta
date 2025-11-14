import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { PartyPopper, Calendar, MapPin, Clock, Cake, Gamepad2, ArrowLeft, Volume2, VolumeX, Sparkles, Settings, X, Upload } from 'lucide-react'
import { EditableField } from '../components/EditableField'
import { EditableImage } from '../components/EditableImage'

interface InvitationData {
  nombreNino: string
  edad: string
  fecha: string
  hora: string
  horaFin: string
  lugar: string
  direccion: string
  imagenFondo: string
  tituloInvitacion: string
  descripcionEvento: string
  mensajeDressCode: string
  detallesDressCode: string
  mensajeRegalos: string
  mensajePadres: string
  mensajeAlergias: string
  // Emojis
  emojisHero: string
  // Sección de diversión
  tituloDiversion: string
  subtituloDiversion: string
  actividad1Emoji: string
  actividad1Titulo: string
  actividad1Desc: string
  actividad2Emoji: string
  actividad2Titulo: string
  actividad2Desc: string
  actividad3Emoji: string
  actividad3Titulo: string
  actividad3Desc: string
  actividad4Emoji: string
  actividad4Titulo: string
  actividad4Desc: string
  actividad5Emoji: string
  actividad5Titulo: string
  actividad5Desc: string
  actividad6Emoji: string
  actividad6Titulo: string
  actividad6Desc: string
  // Títulos de secciones
  tituloSeccionDetalles: string
  tituloSeccionDressCode: string
  emojisDressCode: string
  tituloSeccionInfo: string
  tituloRegalos: string
  emojisRegalos: string
  tituloPadres: string
  emojisPadres: string
  tituloAlergias: string
  emojisAlergias: string
  // Sección RSVP
  tituloRSVP: string
  mensajeConfirmacion: string
}

export default function TemplateCumpleanos() {
  const [showRSVP, setShowRSVP] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [envelopeOpened, setEnvelopeOpened] = useState(false)
  const [formCompleted, setFormCompleted] = useState(false)
  const [showEditPanel, setShowEditPanel] = useState(false)
  const [activeTab, setActiveTab] = useState<'basico' | 'textos' | 'actividades' | 'rsvp'>('basico')
  const [invitationData, setInvitationData] = useState<InvitationData>({
    nombreNino: '',
    edad: '',
    fecha: '',
    hora: '',
    horaFin: '',
    lugar: '',
    direccion: '',
    imagenFondo: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=1920&q=80',
    tituloInvitacion: '¡Vení a festejar!',
    descripcionEvento: 'Una tarde llena de juegos, diversión y sorpresas',
    mensajeDressCode: '¡Vení cómodo y listo para jugar!',
    detallesDressCode: 'Ropa informal y zapatillas para correr y divertirse',
    mensajeRegalos: 'Tu presencia es el mejor regalo, pero si querés traer algo, ¡sorprendenos!',
    mensajePadres: 'Los papás pueden quedarse o retirarse. ¡Hay café y snacks para ustedes!',
    mensajeAlergias: 'Por favor avisanos si tu hijo/a tiene alguna alergia alimentaria',
    emojisHero: '🎈 🎂 🎉',
    tituloDiversion: '🎮 ¡Diversión asegurada!',
    subtituloDiversion: 'Preparamos un montón de sorpresas',
    actividad1Emoji: '🎪',
    actividad1Titulo: 'Animación',
    actividad1Desc: 'Juegos y diversión',
    actividad2Emoji: '🎨',
    actividad2Titulo: 'Pintacaritas',
    actividad2Desc: 'Diseños increíbles',
    actividad3Emoji: '🎭',
    actividad3Titulo: 'Show de magia',
    actividad3Desc: 'Trucos sorprendentes',
    actividad4Emoji: '🎵',
    actividad4Titulo: 'Música',
    actividad4Desc: 'Baile y karaoke',
    actividad5Emoji: '🍕',
    actividad5Titulo: 'Comida',
    actividad5Desc: 'Pizza, snacks y más',
    actividad6Emoji: '🎂',
    actividad6Titulo: 'Torta',
    actividad6Desc: 'Momento especial',
    tituloSeccionDetalles: '📅 Cuándo y dónde',
    tituloSeccionDressCode: 'Dress Code',
    emojisDressCode: '👕👗',
    tituloSeccionInfo: '📋 Información importante',
    tituloRegalos: 'Regalos',
    emojisRegalos: '🎁',
    tituloPadres: 'Padres',
    emojisPadres: '👨‍👩‍👧‍👦',
    tituloAlergias: 'Alergias',
    emojisAlergias: '🍰',
    tituloRSVP: '¡Confirmá tu asistencia!',
    mensajeConfirmacion: '¡Confirmado! 🎉'
  })
  const audioRef = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.3
    }
  }, [])

  useEffect(() => {
    const audio = audioRef.current
    if (audio) {
      const handleEnded = () => setIsPlaying(false)
      audio.addEventListener('ended', handleEnded)
      return () => audio.removeEventListener('ended', handleEnded)
    }
  }, [])

  const handleOpenEnvelope = () => {
    setEnvelopeOpened(true)
    window.scrollTo({ top: 0, behavior: 'smooth' })
    setTimeout(() => {
      if (audioRef.current) {
        audioRef.current.play()
          .then(() => {
            setIsPlaying(true)
            console.log('Música iniciada correctamente')
          })
          .catch((error) => {
            console.log('Error al reproducir música:', error)
            setIsPlaying(false)
          })
      }
    }, 1000)
  }

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

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormCompleted(true)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleLoadDemo = () => {
    setInvitationData({
      nombreNino: 'Sofía',
      edad: '7',
      fecha: '2025-04-20',
      hora: '15:00',
      horaFin: '18:00',
      lugar: 'Salón Infantil Arcoíris',
      direccion: 'Av. San Martín 567, Caballito',
      imagenFondo: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=1920&q=80',
      tituloInvitacion: '¡Vení a festejar!',
      descripcionEvento: 'Una tarde llena de juegos, diversión y sorpresas',
      mensajeDressCode: '¡Vení cómodo y listo para jugar!',
      detallesDressCode: 'Ropa informal y zapatillas para correr y divertirse',
      mensajeRegalos: 'Tu presencia es el mejor regalo, pero si querés traer algo, ¡sorprendenos!',
      mensajePadres: 'Los papás pueden quedarse o retirarse. ¡Hay café y snacks para ustedes!',
      mensajeAlergias: 'Por favor avisanos si tu hijo/a tiene alguna alergia alimentaria',
      emojisHero: '🎈 🎂 🎉',
      tituloDiversion: '🎮 ¡Diversión asegurada!',
      subtituloDiversion: 'Preparamos un montón de sorpresas',
      actividad1Emoji: '🎪',
      actividad1Titulo: 'Animación',
      actividad1Desc: 'Juegos y diversión',
      actividad2Emoji: '🎨',
      actividad2Titulo: 'Pintacaritas',
      actividad2Desc: 'Diseños increíbles',
      actividad3Emoji: '🎭',
      actividad3Titulo: 'Show de magia',
      actividad3Desc: 'Trucos sorprendentes',
      actividad4Emoji: '🎵',
      actividad4Titulo: 'Música',
      actividad4Desc: 'Baile y karaoke',
      actividad5Emoji: '🍕',
      actividad5Titulo: 'Comida',
      actividad5Desc: 'Pizza, snacks y más',
      actividad6Emoji: '🎂',
      actividad6Titulo: 'Torta',
      actividad6Desc: 'Momento especial',
      tituloSeccionDetalles: '📅 Cuándo y dónde',
      tituloSeccionDressCode: 'Dress Code',
      emojisDressCode: '👕👗',
      tituloSeccionInfo: '📋 Información importante',
      tituloRegalos: 'Regalos',
      emojisRegalos: '🎁',
      tituloPadres: 'Padres',
      emojisPadres: '👨‍👩‍👧‍👦',
      tituloAlergias: 'Alergias',
      emojisAlergias: '🍰',
      tituloRSVP: '¡Confirmá tu asistencia!',
      mensajeConfirmacion: '¡Confirmado! 🎉'
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-pink-50 to-purple-50">
      {/* Audio Element */}
      <audio ref={audioRef} loop preload="auto">
        <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" type="audio/mpeg" />
        <source src="https://cdn.pixabay.com/audio/2022/05/27/audio_1808fbf07a.mp3" type="audio/mpeg" />
      </audio>

      {/* Formulario de Personalización */}
      {!formCompleted && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-gradient-to-br from-blue-50 via-pink-50 to-purple-50 overflow-y-auto p-4">
          <div className="max-w-2xl w-full my-8">
            <div className="bg-white rounded-3xl shadow-2xl p-8 sm:p-12">
              <div className="text-center mb-8">
                <PartyPopper className="w-16 h-16 text-purple-500 mx-auto mb-4" />
                <h2 className="text-4xl font-bold text-gray-900 mb-3">
                  Personalizá tu Invitación
                </h2>
                <p className="text-gray-600">
                  Completá los datos del cumpleaños para crear una invitación única
                </p>
              </div>

              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Nombre del cumpleañero/a *
                  </label>
                  <input
                    type="text"
                    required
                    value={invitationData.nombreNino}
                    onChange={(e) => setInvitationData({...invitationData, nombreNino: e.target.value})}
                    placeholder="Ej: Sofía"
                    className="w-full px-4 py-3 border-2 border-purple-200 rounded-xl focus:border-purple-400 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Edad que cumple *
                  </label>
                  <input
                    type="number"
                    required
                    value={invitationData.edad}
                    onChange={(e) => setInvitationData({...invitationData, edad: e.target.value})}
                    placeholder="Ej: 7"
                    className="w-full px-4 py-3 border-2 border-purple-200 rounded-xl focus:border-purple-400 focus:outline-none"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Fecha del cumpleaños *
                    </label>
                    <input
                      type="date"
                      required
                      value={invitationData.fecha}
                      onChange={(e) => setInvitationData({...invitationData, fecha: e.target.value})}
                      className="w-full px-4 py-3 border-2 border-purple-200 rounded-xl focus:border-purple-400 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Hora de inicio *
                    </label>
                    <input
                      type="time"
                      required
                      value={invitationData.hora}
                      onChange={(e) => setInvitationData({...invitationData, hora: e.target.value})}
                      className="w-full px-4 py-3 border-2 border-purple-200 rounded-xl focus:border-purple-400 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Hora de finalización *
                  </label>
                  <input
                    type="time"
                    required
                    value={invitationData.horaFin}
                    onChange={(e) => setInvitationData({...invitationData, horaFin: e.target.value})}
                    className="w-full px-4 py-3 border-2 border-purple-200 rounded-xl focus:border-purple-400 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Lugar del evento *
                  </label>
                  <input
                    type="text"
                    required
                    value={invitationData.lugar}
                    onChange={(e) => setInvitationData({...invitationData, lugar: e.target.value})}
                    placeholder="Ej: Salón Infantil Arcoíris"
                    className="w-full px-4 py-3 border-2 border-purple-200 rounded-xl focus:border-purple-400 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Dirección *
                  </label>
                  <input
                    type="text"
                    required
                    value={invitationData.direccion}
                    onChange={(e) => setInvitationData({...invitationData, direccion: e.target.value})}
                    placeholder="Ej: Av. San Martín 567, Caballito"
                    className="w-full px-4 py-3 border-2 border-purple-200 rounded-xl focus:border-purple-400 focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2"
                >
                  Crear mi Invitación
                  <PartyPopper className="w-5 h-5" />
                </button>
              </form>

              <div className="mt-6 text-center">
                <p className="text-sm text-gray-500 mb-3">¿Solo querés ver cómo queda?</p>
                <button
                  onClick={handleLoadDemo}
                  className="w-full bg-white hover:bg-purple-50 text-gray-700 py-3 rounded-xl font-semibold border-2 border-purple-200 hover:border-purple-300 transition-all flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-5 h-5 text-purple-500" />
                  Ver Demo con Datos de Ejemplo
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Envelope Animation */}
      {formCompleted && !envelopeOpened && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-gradient-to-br from-blue-100 via-pink-100 to-purple-100 animate-fade-in">
          <div className="text-center">
            <div onClick={handleOpenEnvelope} className="relative cursor-pointer group">
              <div className="relative w-80 h-56 bg-gradient-to-br from-purple-200 to-pink-200 rounded-lg shadow-2xl transform transition-all duration-500 group-hover:scale-105">
                <div className="absolute -top-0 left-0 right-0 h-32 bg-gradient-to-br from-purple-300 to-pink-300 origin-top transform transition-all duration-700 group-hover:-translate-y-2 group-hover:rotate-[-5deg]"
                  style={{clipPath: 'polygon(0 0, 50% 60%, 100% 0)'}}>
                </div>
                
                <div className="absolute top-4 right-4 w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <PartyPopper className="w-6 h-6 text-white" />
                </div>

                <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                  <PartyPopper className="w-16 h-16 text-purple-600 mb-4 animate-pulse" />
                  <p className="text-2xl font-bold text-gray-800 mb-2">
                    ¡{invitationData.nombreNino} cumple {invitationData.edad}!
                  </p>
                  <p className="text-sm text-gray-600 italic">Hacé click para abrir</p>
                </div>

                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              <div className="mt-8 animate-bounce">
                <p className="text-lg text-gray-700 font-semibold">✨ Abrí tu invitación ✨</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Music Control Button */}
      {envelopeOpened && (
        <button
          onClick={toggleMusic}
          className={`fixed bottom-8 right-8 z-50 p-5 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 group ${
            isPlaying 
              ? 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white' 
              : 'bg-gray-700 hover:bg-gray-800 text-white'
          }`}
          aria-label={isPlaying ? 'Pausar música' : 'Reproducir música'}
        >
          {isPlaying ? (
            <Volume2 className="w-7 h-7 animate-pulse" />
          ) : (
            <VolumeX className="w-7 h-7" />
          )}
          <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white text-sm px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-lg font-semibold">
            {isPlaying ? '🎵 Pausar música' : '🎵 Click para reproducir'}
          </span>
        </button>
      )}

      {/* Contenido principal */}
      <div className={`transition-all duration-1000 ${envelopeOpened ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <nav className="bg-white/80 backdrop-blur-sm shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex items-center gap-2 text-purple-600 hover:text-purple-700">
              <ArrowLeft className="w-5 h-5" />
              <span className="font-semibold">Volver</span>
            </Link>
            <div className="flex items-center gap-3">
              <button 
                onClick={() => setShowEditPanel(!showEditPanel)}
                className="flex items-center gap-2 px-4 py-2 bg-purple-500 hover:bg-purple-600 text-white rounded-lg transition-all shadow-md hover:shadow-lg"
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
          <div className="flex justify-between items-center p-4 border-b-2 border-purple-200 bg-gradient-to-r from-purple-50 to-pink-50">
            <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
              <Settings className="w-5 h-5 text-purple-500" />
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
                  ? 'border-purple-500 text-purple-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              📋 Básico
            </button>
            <button
              onClick={() => setActiveTab('textos')}
              className={`flex-1 py-3 px-2 text-sm font-semibold transition-colors border-b-2 ${
                activeTab === 'textos'
                  ? 'border-purple-500 text-purple-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              ✏️ Textos
            </button>
            <button
              onClick={() => setActiveTab('actividades')}
              className={`flex-1 py-3 px-2 text-sm font-semibold transition-colors border-b-2 ${
                activeTab === 'actividades'
                  ? 'border-purple-500 text-purple-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              🎮 Actividades
            </button>
            <button
              onClick={() => setActiveTab('rsvp')}
              className={`flex-1 py-3 px-2 text-sm font-semibold transition-colors border-b-2 ${
                activeTab === 'rsvp'
                  ? 'border-purple-500 text-purple-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              💌 RSVP
            </button>
          </div>

          {/* Contenido de las pestañas */}
          <div className="flex-1 overflow-y-auto p-4 bg-gray-50">
            
            {/* TAB: Básico */}
            {activeTab === 'basico' && (
              <div className="space-y-4">
                {/* Cumpleañero */}
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <Cake className="w-4 h-4 text-purple-500" />
                    Cumpleañero/a
                  </h3>
                  <div className="space-y-2">
                    <input
                      type="text"
                      value={invitationData.nombreNino}
                      onChange={(e) => updateInvitationField('nombreNino', e.target.value)}
                      placeholder="Nombre"
                      className="w-full px-3 py-2 text-sm border rounded-lg focus:border-purple-400 focus:outline-none"
                    />
                    <input
                      type="number"
                      value={invitationData.edad}
                      onChange={(e) => updateInvitationField('edad', e.target.value)}
                      placeholder="Edad"
                      className="w-full px-3 py-2 text-sm border rounded-lg focus:border-purple-400 focus:outline-none"
                    />
                  </div>
                </div>

                {/* Fecha y Hora */}
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-purple-500" />
                    Fecha & Hora
                  </h3>
                  <div className="space-y-2">
                    <div>
                      <label className="text-xs text-gray-600 mb-1 block">Fecha</label>
                      <input
                        type="date"
                        value={invitationData.fecha}
                        onChange={(e) => updateInvitationField('fecha', e.target.value)}
                        onFocus={() => scrollToSection('detalles')}
                        className="w-full px-3 py-2 text-sm border rounded-lg focus:border-purple-400 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="text-xs text-gray-600 mb-1 block">Hora inicio</label>
                      <input
                        type="time"
                        value={invitationData.hora}
                        onChange={(e) => updateInvitationField('hora', e.target.value)}
                        onFocus={() => scrollToSection('detalles')}
                        className="w-full px-3 py-2 text-sm border rounded-lg focus:border-purple-400 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="text-xs text-gray-600 mb-1 block">Hora fin</label>
                      <input
                        type="time"
                        value={invitationData.horaFin}
                        onChange={(e) => updateInvitationField('horaFin', e.target.value)}
                        onFocus={() => scrollToSection('detalles')}
                        className="w-full px-3 py-2 text-sm border rounded-lg focus:border-purple-400 focus:outline-none"
                      />
                    </div>
                  </div>
                </div>

                {/* Lugar */}
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-purple-500" />
                    Lugar
                  </h3>
                  <div className="space-y-2">
                    <input
                      type="text"
                      value={invitationData.lugar}
                      onChange={(e) => updateInvitationField('lugar', e.target.value)}
                      onFocus={() => scrollToSection('detalles')}
                      placeholder="Nombre del lugar"
                      className="w-full px-3 py-2 text-sm border rounded-lg focus:border-purple-400 focus:outline-none"
                    />
                    <input
                      type="text"
                      value={invitationData.direccion}
                      onChange={(e) => updateInvitationField('direccion', e.target.value)}
                      onFocus={() => scrollToSection('detalles')}
                      placeholder="Dirección"
                      className="w-full px-3 py-2 text-sm border rounded-lg focus:border-purple-400 focus:outline-none"
                    />
                  </div>
                </div>

                {/* Imagen */}
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <PartyPopper className="w-4 h-4 text-purple-500" />
                    Imagen de Fondo
                  </h3>
                  <input
                    type="url"
                    value={invitationData.imagenFondo}
                    onChange={(e) => updateInvitationField('imagenFondo', e.target.value)}
                    onFocus={() => scrollToSection('hero')}
                    placeholder="https://..."
                    className="w-full px-3 py-2 text-sm border rounded-lg focus:border-purple-400 focus:outline-none"
                  />
                </div>
              </div>
            )}

            {/* TAB: Textos */}
            {activeTab === 'textos' && (
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <h3 className="font-bold text-gray-900 mb-3">Hero</h3>
                  <div className="space-y-2">
                    <input
                      type="text"
                      value={invitationData.tituloInvitacion}
                      onChange={(e) => updateInvitationField('tituloInvitacion', e.target.value)}
                      placeholder="Título"
                      className="w-full px-3 py-2 text-sm border rounded-lg focus:border-purple-400 focus:outline-none"
                    />
                    <input
                      type="text"
                      value={invitationData.descripcionEvento}
                      onChange={(e) => updateInvitationField('descripcionEvento', e.target.value)}
                      placeholder="Descripción"
                      className="w-full px-3 py-2 text-sm border rounded-lg focus:border-purple-400 focus:outline-none"
                    />
                    <input
                      type="text"
                      value={invitationData.emojisHero}
                      onChange={(e) => updateInvitationField('emojisHero', e.target.value)}
                      placeholder="Emojis"
                      className="w-full px-3 py-2 text-sm border rounded-lg focus:border-purple-400 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <h3 className="font-bold text-gray-900 mb-3">Títulos</h3>
                  <div className="space-y-2">
                    <input
                      type="text"
                      value={invitationData.tituloSeccionDetalles}
                      onChange={(e) => updateInvitationField('tituloSeccionDetalles', e.target.value)}
                      placeholder="Título Detalles"
                      className="w-full px-3 py-2 text-sm border rounded-lg focus:border-purple-400 focus:outline-none"
                    />
                    <input
                      type="text"
                      value={invitationData.tituloDiversion}
                      onChange={(e) => updateInvitationField('tituloDiversion', e.target.value)}
                      placeholder="Título Diversión"
                      className="w-full px-3 py-2 text-sm border rounded-lg focus:border-purple-400 focus:outline-none"
                    />
                    <input
                      type="text"
                      value={invitationData.subtituloDiversion}
                      onChange={(e) => updateInvitationField('subtituloDiversion', e.target.value)}
                      placeholder="Subtítulo Diversión"
                      className="w-full px-3 py-2 text-sm border rounded-lg focus:border-purple-400 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <h3 className="font-bold text-gray-900 mb-3">Dress Code</h3>
                  <div className="space-y-2">
                    <input
                      type="text"
                      value={invitationData.tituloSeccionDressCode}
                      onChange={(e) => updateInvitationField('tituloSeccionDressCode', e.target.value)}
                      placeholder="Título"
                      className="w-full px-3 py-2 text-sm border rounded-lg focus:border-purple-400 focus:outline-none"
                    />
                    <input
                      type="text"
                      value={invitationData.mensajeDressCode}
                      onChange={(e) => updateInvitationField('mensajeDressCode', e.target.value)}
                      placeholder="Mensaje"
                      className="w-full px-3 py-2 text-sm border rounded-lg focus:border-purple-400 focus:outline-none"
                    />
                    <textarea
                      value={invitationData.detallesDressCode}
                      onChange={(e) => updateInvitationField('detallesDressCode', e.target.value)}
                      placeholder="Detalles"
                      rows={2}
                      className="w-full px-3 py-2 text-sm border rounded-lg focus:border-purple-400 focus:outline-none resize-none"
                    />
                  </div>
                </div>

                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <h3 className="font-bold text-gray-900 mb-3">Info Adicional</h3>
                  <div className="space-y-2">
                    <textarea
                      value={invitationData.mensajeRegalos}
                      onChange={(e) => updateInvitationField('mensajeRegalos', e.target.value)}
                      placeholder="Mensaje Regalos"
                      rows={2}
                      className="w-full px-3 py-2 text-sm border rounded-lg focus:border-purple-400 focus:outline-none resize-none"
                    />
                    <textarea
                      value={invitationData.mensajePadres}
                      onChange={(e) => updateInvitationField('mensajePadres', e.target.value)}
                      placeholder="Mensaje Padres"
                      rows={2}
                      className="w-full px-3 py-2 text-sm border rounded-lg focus:border-purple-400 focus:outline-none resize-none"
                    />
                    <textarea
                      value={invitationData.mensajeAlergias}
                      onChange={(e) => updateInvitationField('mensajeAlergias', e.target.value)}
                      placeholder="Mensaje Alergias"
                      rows={2}
                      className="w-full px-3 py-2 text-sm border rounded-lg focus:border-purple-400 focus:outline-none resize-none"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* TAB: Actividades */}
            {activeTab === 'actividades' && (
              <div className="space-y-4">
                {[1, 2, 3, 4, 5, 6].map((num) => (
                  <div key={num} className="bg-white rounded-lg p-4 shadow-sm">
                    <h3 className="font-bold text-gray-900 mb-3">Actividad {num}</h3>
                    <div className="space-y-2">
                      <input
                        type="text"
                        value={invitationData[`actividad${num}Emoji` as keyof InvitationData]}
                        onChange={(e) => updateInvitationField(`actividad${num}Emoji` as keyof InvitationData, e.target.value)}
                        placeholder="Emoji"
                        className="w-full px-3 py-2 text-sm border rounded-lg focus:border-purple-400 focus:outline-none"
                      />
                      <input
                        type="text"
                        value={invitationData[`actividad${num}Titulo` as keyof InvitationData]}
                        onChange={(e) => updateInvitationField(`actividad${num}Titulo` as keyof InvitationData, e.target.value)}
                        placeholder="Título"
                        className="w-full px-3 py-2 text-sm border rounded-lg focus:border-purple-400 focus:outline-none"
                      />
                      <input
                        type="text"
                        value={invitationData[`actividad${num}Desc` as keyof InvitationData]}
                        onChange={(e) => updateInvitationField(`actividad${num}Desc` as keyof InvitationData, e.target.value)}
                        placeholder="Descripción"
                        className="w-full px-3 py-2 text-sm border rounded-lg focus:border-purple-400 focus:outline-none"
                      />
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* TAB: RSVP */}
            {activeTab === 'rsvp' && (
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <h3 className="font-bold text-gray-900 mb-3">RSVP</h3>
                  <div className="space-y-2">
                    <input
                      type="text"
                      value={invitationData.tituloRSVP}
                      onChange={(e) => updateInvitationField('tituloRSVP', e.target.value)}
                      placeholder="Título"
                      className="w-full px-3 py-2 text-sm border rounded-lg focus:border-purple-400 focus:outline-none"
                    />
                    <input
                      type="text"
                      value={invitationData.mensajeConfirmacion}
                      onChange={(e) => updateInvitationField('mensajeConfirmacion', e.target.value)}
                      placeholder="Mensaje confirmación"
                      className="w-full px-3 py-2 text-sm border rounded-lg focus:border-purple-400 focus:outline-none"
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
              className="w-full py-3 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-lg font-semibold transition-all shadow-md"
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

      {/* Banner informativo de edición */}
      <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 text-white py-3 px-4 text-center shadow-md">
        <p className="text-sm sm:text-base font-semibold flex items-center justify-center gap-2">
          <Sparkles className="w-4 h-4" />
          ✨ Hacé doble clic en cualquier texto o imagen para editarlo ✨
          <Sparkles className="w-4 h-4" />
        </p>
      </div>

      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Imagen de fondo */}
        <div className="absolute inset-0">
          <EditableImage
            src={invitationData.imagenFondo}
            alt="Fiesta infantil"
            onSave={(newSrc) => updateInvitationField('imagenFondo', newSrc)}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-white pointer-events-none"></div>
        </div>

        {/* Burbujas decorativas */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-24 h-24 bg-yellow-300 rounded-full opacity-60 animate-pulse"></div>
          <div className="absolute top-32 right-20 w-20 h-20 bg-pink-300 rounded-full opacity-60 animate-pulse" style={{animationDelay: '0.5s'}}></div>
          <div className="absolute bottom-20 left-1/4 w-28 h-28 bg-blue-300 rounded-full opacity-60 animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-32 right-1/3 w-16 h-16 bg-purple-300 rounded-full opacity-60 animate-pulse" style={{animationDelay: '1.5s'}}></div>
        </div>
        
        <div className="max-w-5xl mx-auto px-4 text-center relative z-10 py-24">
          <div className="inline-block p-5 bg-white rounded-full shadow-2xl mb-8 animate-bounce">
            <PartyPopper className="w-16 h-16 text-purple-500" />
          </div>
          
          <h1 className="text-7xl sm:text-8xl font-black mb-6 animate-fade-in-up drop-shadow-2xl">
            <span className="text-white">
              ¡<EditableField
                value={invitationData.nombreNino}
                onSave={(value) => updateInvitationField('nombreNino', value)}
                className="text-white"
                inputClassName="text-7xl sm:text-8xl font-black text-gray-900 text-center"
                showEditIcon={false}
              /> cumple <EditableField
                value={invitationData.edad}
                onSave={(value) => updateInvitationField('edad', value)}
                className="text-white"
                inputClassName="text-7xl sm:text-8xl font-black text-gray-900 text-center w-24"
                showEditIcon={false}
              />!
            </span>
          </h1>
          
          <div className="text-5xl mb-8 animate-pulse drop-shadow-lg">
            <EditableField
              value={invitationData.emojisHero}
              onSave={(value) => updateInvitationField('emojisHero', value)}
              className="text-5xl"
              inputClassName="text-5xl text-center w-full"
              showEditIcon={false}
            />
          </div>
          
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 max-w-2xl mx-auto mb-8 shadow-2xl">
            <p className="text-3xl font-bold text-gray-800 mb-2">
              <EditableField
                value={invitationData.tituloInvitacion}
                onSave={(value) => updateInvitationField('tituloInvitacion', value)}
                className="text-3xl font-bold text-gray-800"
                inputClassName="text-3xl font-bold text-gray-800 w-full text-center"
              />
            </p>
            <p className="text-xl text-gray-700">
              <EditableField
                value={invitationData.descripcionEvento}
                onSave={(value) => updateInvitationField('descripcionEvento', value)}
                className="text-xl text-gray-700"
                inputClassName="text-xl text-gray-700 w-full text-center"
              />
            </p>
          </div>

          <div className="bg-white/90 backdrop-blur-sm rounded-full px-8 py-4 shadow-xl max-w-fit mx-auto">
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <div className="flex items-center gap-2 text-gray-800">
                <Calendar className="w-5 h-5 text-purple-500" />
                <span className="font-semibold">{new Date(invitationData.fecha).toLocaleDateString('es-AR', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
              </div>
              <div className="hidden sm:block w-1 h-1 bg-purple-400 rounded-full"></div>
              <div className="flex items-center gap-2 text-gray-800">
                <MapPin className="w-5 h-5 text-purple-500" />
                <EditableField
                  value={invitationData.lugar}
                  onSave={(value) => updateInvitationField('lugar', value)}
                  className="font-semibold"
                  inputClassName="font-semibold text-gray-900"
                  showEditIcon={false}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="detalles" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            <EditableField
              value={invitationData.tituloSeccionDetalles}
              onSave={(value) => updateInvitationField('tituloSeccionDetalles', value)}
              className="text-4xl font-bold text-center"
              inputClassName="text-4xl font-bold text-center w-full"
            />
          </h2>
          <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-3xl p-12 space-y-6">
            <div className="flex items-start gap-4">
              <Calendar className="w-6 h-6 text-purple-600 mt-1" />
              <div>
                <p className="text-2xl font-bold">{new Date(invitationData.fecha).toLocaleDateString('es-AR', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Clock className="w-6 h-6 text-pink-600 mt-1" />
              <div>
                <p className="text-2xl font-bold">
                  <EditableField
                    value={invitationData.hora}
                    onSave={(value) => updateInvitationField('hora', value)}
                    className="text-2xl font-bold"
                    inputClassName="text-2xl font-bold w-20"
                    showEditIcon={false}
                  /> a <EditableField
                    value={invitationData.horaFin}
                    onSave={(value) => updateInvitationField('horaFin', value)}
                    className="text-2xl font-bold"
                    inputClassName="text-2xl font-bold w-20"
                    showEditIcon={false}
                  /> hs
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <MapPin className="w-6 h-6 text-blue-600 mt-1" />
              <div>
                <p className="text-2xl font-bold">
                  <EditableField
                    value={invitationData.lugar}
                    onSave={(value) => updateInvitationField('lugar', value)}
                    className="text-2xl font-bold"
                    inputClassName="text-2xl font-bold w-full"
                  />
                </p>
                <p className="text-gray-600">
                  <EditableField
                    value={invitationData.direccion}
                    onSave={(value) => updateInvitationField('direccion', value)}
                    className="text-gray-600"
                    inputClassName="text-gray-600 w-full"
                  />
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-yellow-50 to-orange-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <Gamepad2 className="w-12 h-12 text-orange-500 mx-auto mb-4" />
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              <EditableField
                value={invitationData.tituloDiversion}
                onSave={(value) => updateInvitationField('tituloDiversion', value)}
                className="text-4xl font-bold text-gray-900"
                inputClassName="text-4xl font-bold text-gray-900 w-full text-center"
              />
            </h2>
            <p className="text-gray-600 text-lg">
              <EditableField
                value={invitationData.subtituloDiversion}
                onSave={(value) => updateInvitationField('subtituloDiversion', value)}
                className="text-gray-600 text-lg"
                inputClassName="text-gray-600 text-lg w-full text-center"
              />
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { emoji: invitationData.actividad1Emoji, title: invitationData.actividad1Titulo, desc: invitationData.actividad1Desc, emojiField: 'actividad1Emoji', titleField: 'actividad1Titulo', descField: 'actividad1Desc' },
              { emoji: invitationData.actividad2Emoji, title: invitationData.actividad2Titulo, desc: invitationData.actividad2Desc, emojiField: 'actividad2Emoji', titleField: 'actividad2Titulo', descField: 'actividad2Desc' },
              { emoji: invitationData.actividad3Emoji, title: invitationData.actividad3Titulo, desc: invitationData.actividad3Desc, emojiField: 'actividad3Emoji', titleField: 'actividad3Titulo', descField: 'actividad3Desc' },
              { emoji: invitationData.actividad4Emoji, title: invitationData.actividad4Titulo, desc: invitationData.actividad4Desc, emojiField: 'actividad4Emoji', titleField: 'actividad4Titulo', descField: 'actividad4Desc' },
              { emoji: invitationData.actividad5Emoji, title: invitationData.actividad5Titulo, desc: invitationData.actividad5Desc, emojiField: 'actividad5Emoji', titleField: 'actividad5Titulo', descField: 'actividad5Desc' },
              { emoji: invitationData.actividad6Emoji, title: invitationData.actividad6Titulo, desc: invitationData.actividad6Desc, emojiField: 'actividad6Emoji', titleField: 'actividad6Titulo', descField: 'actividad6Desc' }
            ].map((activity, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2">
                <div className="text-6xl mb-4">
                  <EditableField
                    value={activity.emoji}
                    onSave={(value) => updateInvitationField(activity.emojiField as keyof InvitationData, value)}
                    className="text-6xl"
                    inputClassName="text-6xl w-full text-center"
                    showEditIcon={false}
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  <EditableField
                    value={activity.title}
                    onSave={(value) => updateInvitationField(activity.titleField as keyof InvitationData, value)}
                    className="text-2xl font-bold text-gray-900"
                    inputClassName="text-2xl font-bold text-gray-900 w-full text-center"
                  />
                </h3>
                <p className="text-gray-600">
                  <EditableField
                    value={activity.desc}
                    onSave={(value) => updateInvitationField(activity.descField as keyof InvitationData, value)}
                    className="text-gray-600"
                    inputClassName="text-gray-600 w-full text-center"
                  />
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dress Code Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 rounded-3xl p-12 text-center shadow-xl">
            <div className="text-6xl mb-6">
              <EditableField
                value={invitationData.emojisDressCode}
                onSave={(value) => updateInvitationField('emojisDressCode', value)}
                className="text-6xl"
                inputClassName="text-6xl w-full text-center"
                showEditIcon={false}
              />
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              <EditableField
                value={invitationData.tituloSeccionDressCode}
                onSave={(value) => updateInvitationField('tituloSeccionDressCode', value)}
                className="text-4xl font-bold text-gray-900"
                inputClassName="text-4xl font-bold text-gray-900 w-full text-center"
              />
            </h2>
            <p className="text-2xl text-gray-700 mb-4">
              <EditableField
                value={invitationData.mensajeDressCode}
                onSave={(value) => updateInvitationField('mensajeDressCode', value)}
                className="text-2xl text-gray-700"
                inputClassName="text-2xl text-gray-700 w-full text-center"
              />
            </p>
            <p className="text-lg text-gray-600">
              <EditableField
                value={invitationData.detallesDressCode}
                onSave={(value) => updateInvitationField('detallesDressCode', value)}
                className="text-lg text-gray-600"
                inputClassName="text-lg text-gray-600 w-full text-center"
              />
            </p>
          </div>
        </div>
      </section>

      {/* Info Adicional */}
      <section className="py-16 bg-gradient-to-br from-pink-50 to-purple-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            <EditableField
              value={invitationData.tituloSeccionInfo}
              onSave={(value) => updateInvitationField('tituloSeccionInfo', value)}
              className="text-4xl font-bold text-center"
              inputClassName="text-4xl font-bold text-center w-full"
            />
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="text-5xl mb-4">
                <EditableField
                  value={invitationData.emojisRegalos}
                  onSave={(value) => updateInvitationField('emojisRegalos', value)}
                  className="text-5xl"
                  inputClassName="text-5xl w-full text-center"
                  showEditIcon={false}
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                <EditableField
                  value={invitationData.tituloRegalos}
                  onSave={(value) => updateInvitationField('tituloRegalos', value)}
                  className="text-2xl font-bold text-gray-900"
                  inputClassName="text-2xl font-bold text-gray-900 w-full text-center"
                />
              </h3>
              <p className="text-gray-600">
                <EditableField
                  value={invitationData.mensajeRegalos}
                  onSave={(value) => updateInvitationField('mensajeRegalos', value)}
                  className="text-gray-600"
                  inputClassName="text-gray-600 w-full text-center"
                  multiline
                />
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="text-5xl mb-4">
                <EditableField
                  value={invitationData.emojisPadres}
                  onSave={(value) => updateInvitationField('emojisPadres', value)}
                  className="text-5xl"
                  inputClassName="text-5xl w-full text-center"
                  showEditIcon={false}
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                <EditableField
                  value={invitationData.tituloPadres}
                  onSave={(value) => updateInvitationField('tituloPadres', value)}
                  className="text-2xl font-bold text-gray-900"
                  inputClassName="text-2xl font-bold text-gray-900 w-full text-center"
                />
              </h3>
              <p className="text-gray-600">
                <EditableField
                  value={invitationData.mensajePadres}
                  onSave={(value) => updateInvitationField('mensajePadres', value)}
                  className="text-gray-600"
                  inputClassName="text-gray-600 w-full text-center"
                  multiline
                />
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="text-5xl mb-4">
                <EditableField
                  value={invitationData.emojisAlergias}
                  onSave={(value) => updateInvitationField('emojisAlergias', value)}
                  className="text-5xl"
                  inputClassName="text-5xl w-full text-center"
                  showEditIcon={false}
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                <EditableField
                  value={invitationData.tituloAlergias}
                  onSave={(value) => updateInvitationField('tituloAlergias', value)}
                  className="text-2xl font-bold text-gray-900"
                  inputClassName="text-2xl font-bold text-gray-900 w-full text-center"
                />
              </h3>
              <p className="text-gray-600">
                <EditableField
                  value={invitationData.mensajeAlergias}
                  onSave={(value) => updateInvitationField('mensajeAlergias', value)}
                  className="text-gray-600"
                  inputClassName="text-gray-600 w-full text-center"
                  multiline
                />
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-purple-100 to-pink-100">
        <div className="max-w-2xl mx-auto px-4">
          <div className="bg-white rounded-3xl p-12 shadow-2xl">
            <div className="text-center mb-8">
              <Cake className="w-12 h-12 text-pink-500 mx-auto mb-4" />
              <h2 className="text-3xl font-bold mb-4">
                <EditableField
                  value={invitationData.tituloRSVP}
                  onSave={(value) => updateInvitationField('tituloRSVP', value)}
                  className="text-3xl font-bold"
                  inputClassName="text-3xl font-bold w-full text-center"
                />
              </h2>
            </div>
            {showRSVP ? (
              <div className="text-center py-8">
                <PartyPopper className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold">
                  <EditableField
                    value={invitationData.mensajeConfirmacion}
                    onSave={(value) => updateInvitationField('mensajeConfirmacion', value)}
                    className="text-2xl font-bold"
                    inputClassName="text-2xl font-bold w-full text-center"
                  />
                </h3>
              </div>
            ) : (
              <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); setShowRSVP(true); }}>
                <input type="text" required placeholder="Nombre del niño/a" 
                  className="w-full px-4 py-3 border-2 rounded-xl focus:outline-none" />
                <button type="submit" 
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-4 rounded-xl font-bold">
                  🎈 Confirmar
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12 text-center">
        <PartyPopper className="w-8 h-8 text-pink-400 mx-auto mb-4" />
        <Link to="/" className="text-pink-400 hover:text-pink-300">Creá tu invitación →</Link>
      </footer>
      </div>
      {/* Cierre del div de contenido principal */}
    </div>
  )
}

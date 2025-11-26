import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Sparkles, Calendar, MapPin, Clock, Music, Heart, Gift, ArrowLeft, Volume2, VolumeX, Crown, Settings, X, Upload } from 'lucide-react'
import { EditableField } from '../components/EditableField'
import { EditableImage } from '../components/EditableImage'

interface InvitationData {
  nombre: string
  fecha: string
  horaCeremonia: string
  lugarCeremonia: string
  direccionCeremonia: string
  horaFiesta: string
  lugarFiesta: string
  direccionFiesta: string
  imagenFondo: string
  // Textos hero
  tituloHero: string
  mensajeHero: string
  descripcionHero: string
  // Títulos de secciones
  tituloPrograma: string
  tituloCeremonia: string
  tituloFiesta: string
  // RSVP
  tituloRSVP: string
  labelNombre: string
  placeholderNombre: string
  labelAcompañantes: string
  textoBotonRSVP: string
  mensajeConfirmacion: string
  mensajeAgradecimiento: string
  // Regalos
  tituloRegalos: string
  descripcionRegalos: string
  tituloSobres: string
  descripcionSobres: string
  tituloLista: string
  textoVerLista: string
  // Timeline del programa
  tituloTimeline: string
  evento1Hora: string
  evento1Desc: string
  evento2Hora: string
  evento2Desc: string
  evento3Hora: string
  evento3Desc: string
  evento4Hora: string
  evento4Desc: string
  evento5Hora: string
  evento5Desc: string
  evento6Hora: string
  evento6Desc: string
  // Dress Code
  tituloDressCode: string
  mensajeDressCode: string
  detallesDressCode: string
}

export default function TemplateQuinceanos() {
  const [showRSVP, setShowRSVP] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [envelopeOpened, setEnvelopeOpened] = useState(false)
  const [formCompleted, setFormCompleted] = useState(false)
  const [showEditPanel, setShowEditPanel] = useState(false)
  const [activeTab, setActiveTab] = useState<'basico' | 'textos' | 'programa' | 'rsvp' | 'regalos'>('basico')
  const [invitationData, setInvitationData] = useState<InvitationData>({
    nombre: '',
    fecha: '',
    horaCeremonia: '',
    lugarCeremonia: '',
    direccionCeremonia: '',
    horaFiesta: '',
    lugarFiesta: '',
    direccionFiesta: '',
    imagenFondo: 'https://images.unsplash.com/photo-1464047736614-af63643285bf?w=1920&q=80',
    tituloHero: '15 Años',
    mensajeHero: 'Una noche mágica e inolvidable',
    descripcionHero: 'Te espero para celebrar juntos este momento tan especial',
    tituloPrograma: '✨ Programa de la noche',
    tituloCeremonia: 'Ceremonia',
    tituloFiesta: 'Fiesta',
    tituloRSVP: 'Confirmá tu asistencia',
    labelNombre: 'Tu nombre',
    placeholderNombre: 'Ingresá tu nombre',
    labelAcompañantes: '¿Venís con acompañantes?',
    textoBotonRSVP: '👑 Confirmar',
    mensajeConfirmacion: '¡Confirmado!',
    mensajeAgradecimiento: 'Nos vemos en la fiesta. ¡Gracias por confirmar!',
    tituloRegalos: '🎁 Regalos',
    descripcionRegalos: 'Tu presencia es el mejor regalo, pero si querés colaborar, acá dejamos algunas opciones',
    tituloSobres: 'Lluvia de sobres',
    descripcionSobres: 'Habrá un buzón especial en la fiesta',
    tituloLista: 'Lista de regalos',
    textoVerLista: 'Ver lista →',
    tituloTimeline: '🎵 Programa de la noche',
    evento1Hora: '21:00',
    evento1Desc: 'Recepción y bienvenida',
    evento2Hora: '21:30',
    evento2Desc: 'Vals de la quinceañera',
    evento3Hora: '22:00',
    evento3Desc: 'Cena',
    evento4Hora: '23:00',
    evento4Desc: 'Baile y fiesta',
    evento5Hora: '00:00',
    evento5Desc: 'Torta y brindis',
    evento6Hora: '01:00',
    evento6Desc: 'Fiesta hasta el final',
    tituloDressCode: '👗 Dress Code',
    mensajeDressCode: 'Elegante / Formal',
    detallesDressCode: 'Colores sugeridos: Violeta, Rosa, Plateado'
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
          .then(() => setIsPlaying(true))
          .catch(() => setIsPlaying(false))
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
      nombre: 'Valentina',
      fecha: '2025-09-20',
      horaCeremonia: '19:00',
      lugarCeremonia: 'Parroquia Santa María',
      direccionCeremonia: 'Av. Corrientes 1234, CABA',
      horaFiesta: '21:00',
      lugarFiesta: 'Salón Crystal',
      direccionFiesta: 'Av. del Libertador 5678, Vicente López',
      imagenFondo: 'https://images.unsplash.com/photo-1464047736614-af63643285bf?w=1920&q=80',
      tituloHero: '15 Años',
      mensajeHero: 'Una noche mágica e inolvidable',
      descripcionHero: 'Te espero para celebrar juntos este momento tan especial',
      tituloPrograma: '✨ Programa de la noche',
      tituloCeremonia: 'Ceremonia',
      tituloFiesta: 'Fiesta',
      tituloRSVP: 'Confirmá tu asistencia',
      labelNombre: 'Tu nombre',
      placeholderNombre: 'Ingresá tu nombre',
      labelAcompañantes: '¿Venís con acompañantes?',
      textoBotonRSVP: '👑 Confirmar',
      mensajeConfirmacion: '¡Confirmado!',
      mensajeAgradecimiento: 'Nos vemos en la fiesta. ¡Gracias por confirmar!',
      tituloRegalos: '🎁 Regalos',
      descripcionRegalos: 'Tu presencia es el mejor regalo, pero si querés colaborar, acá dejamos algunas opciones',
      tituloSobres: 'Lluvia de sobres',
      descripcionSobres: 'Habrá un buzón especial en la fiesta',
      tituloLista: 'Lista de regalos',
      textoVerLista: 'Ver lista →',
      tituloTimeline: '🎵 Programa de la noche',
      evento1Hora: '21:00',
      evento1Desc: 'Recepción y bienvenida',
      evento2Hora: '21:30',
      evento2Desc: 'Vals de la quinceañera',
      evento3Hora: '22:00',
      evento3Desc: 'Cena',
      evento4Hora: '23:00',
      evento4Desc: 'Baile y fiesta',
      evento5Hora: '00:00',
      evento5Desc: 'Torta y brindis',
      evento6Hora: '01:00',
      evento6Desc: 'Fiesta hasta el final',
      tituloDressCode: '👗 Dress Code',
      mensajeDressCode: 'Elegante / Formal',
      detallesDressCode: 'Colores sugeridos: Violeta, Rosa, Plateado'
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
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-purple-100">
      {/* Audio Element */}
      <audio ref={audioRef} loop preload="auto">
        <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3" type="audio/mpeg" />
        <source src="https://cdn.pixabay.com/audio/2022/05/27/audio_1808fbf07a.mp3" type="audio/mpeg" />
      </audio>

      {/* Formulario de Personalización */}
      {!formCompleted && (
        <div className="fixed inset-0 z-[100] flex justify-center bg-gradient-to-br from-purple-50 via-pink-50 to-purple-100 overflow-y-auto p-4">
          <div className="max-w-2xl w-full my-auto py-8">
            <div className="bg-white rounded-3xl shadow-2xl p-8 sm:p-12">
              <div className="text-center mb-8">
                <Crown className="w-16 h-16 text-purple-500 mx-auto mb-4" />
                <h2 className="text-4xl font-bold text-gray-900 mb-3">
                  Personalizá tu Invitación de 15
                </h2>
                <p className="text-gray-600">
                  Completá los datos de tu fiesta para crear una invitación única
                </p>
              </div>

              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Nombre de la quinceañera *
                  </label>
                  <input
                    type="text"
                    required
                    value={invitationData.nombre}
                    onChange={(e) => setInvitationData({...invitationData, nombre: e.target.value})}
                    placeholder="Ej: Valentina"
                    className="w-full px-4 py-3 border-2 border-purple-200 rounded-xl focus:border-purple-400 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Fecha del evento *
                  </label>
                  <input
                    type="date"
                    required
                    value={invitationData.fecha}
                    onChange={(e) => setInvitationData({...invitationData, fecha: e.target.value})}
                    className="w-full px-4 py-3 border-2 border-purple-200 rounded-xl focus:border-purple-400 focus:outline-none"
                  />
                </div>

                <div className="border-t-2 border-purple-100 pt-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">⛪ Ceremonia</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Hora de la ceremonia *
                      </label>
                      <input
                        type="time"
                        required
                        value={invitationData.horaCeremonia}
                        onChange={(e) => setInvitationData({...invitationData, horaCeremonia: e.target.value})}
                        className="w-full px-4 py-3 border-2 border-purple-200 rounded-xl focus:border-purple-400 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Lugar de la ceremonia *
                      </label>
                      <input
                        type="text"
                        required
                        value={invitationData.lugarCeremonia}
                        onChange={(e) => setInvitationData({...invitationData, lugarCeremonia: e.target.value})}
                        placeholder="Ej: Parroquia Santa María"
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
                        value={invitationData.direccionCeremonia}
                        onChange={(e) => setInvitationData({...invitationData, direccionCeremonia: e.target.value})}
                        placeholder="Ej: Av. Corrientes 1234"
                        className="w-full px-4 py-3 border-2 border-purple-200 rounded-xl focus:border-purple-400 focus:outline-none"
                      />
                    </div>
                  </div>
                </div>

                <div className="border-t-2 border-purple-100 pt-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">🎉 Fiesta</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Hora de la fiesta *
                      </label>
                      <input
                        type="time"
                        required
                        value={invitationData.horaFiesta}
                        onChange={(e) => setInvitationData({...invitationData, horaFiesta: e.target.value})}
                        className="w-full px-4 py-3 border-2 border-purple-200 rounded-xl focus:border-purple-400 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Lugar de la fiesta *
                      </label>
                      <input
                        type="text"
                        required
                        value={invitationData.lugarFiesta}
                        onChange={(e) => setInvitationData({...invitationData, lugarFiesta: e.target.value})}
                        placeholder="Ej: Salón Crystal"
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
                        value={invitationData.direccionFiesta}
                        onChange={(e) => setInvitationData({...invitationData, direccionFiesta: e.target.value})}
                        placeholder="Ej: Av. del Libertador 5678"
                        className="w-full px-4 py-3 border-2 border-purple-200 rounded-xl focus:border-purple-400 focus:outline-none"
                      />
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2"
                >
                  Crear mi Invitación
                  <Crown className="w-5 h-5" />
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
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-gradient-to-br from-purple-100 via-pink-100 to-purple-200 animate-fade-in">
          <div className="text-center">
            <div onClick={handleOpenEnvelope} className="relative cursor-pointer group">
              <div className="relative w-80 h-56 bg-gradient-to-br from-purple-300 to-pink-300 rounded-lg shadow-2xl transform transition-all duration-500 group-hover:scale-105">
                <div className="absolute -top-0 left-0 right-0 h-32 bg-gradient-to-br from-purple-400 to-pink-400 origin-top transform transition-all duration-700 group-hover:-translate-y-2 group-hover:rotate-[-5deg]"
                  style={{clipPath: 'polygon(0 0, 50% 60%, 100% 0)'}}>
                </div>
                
                <div className="absolute top-4 right-4 w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <Crown className="w-6 h-6 text-white" />
                </div>

                <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                  <Crown className="w-16 h-16 text-purple-700 mb-4 animate-pulse" />
                  <p className="text-2xl font-bold text-gray-900 mb-2">
                    Mis 15 Años
                  </p>
                  <p className="text-3xl font-black text-purple-700 mb-2">
                    {invitationData.nombre}
                  </p>
                  <p className="text-sm text-gray-700 italic">Hacé click para abrir</p>
                </div>

                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              <div className="mt-8 animate-bounce">
                <p className="text-lg text-gray-800 font-semibold">✨ Abrí tu invitación ✨</p>
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
        >
          {isPlaying ? <Volume2 className="w-7 h-7 animate-pulse" /> : <VolumeX className="w-7 h-7" />}
          <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white text-sm px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-lg font-semibold">
            {isPlaying ? '🎵 Pausar música' : '🎵 Click para reproducir'}
          </span>
        </button>
      )}

      {/* Contenido principal */}
      <div className={`transition-all duration-1000 ${envelopeOpened ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <nav className="bg-white/80 backdrop-blur-sm shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
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
          <div className="flex justify-between items-center p-4 border-b-2 border-purple-200 bg-gradient-to-r from-purple-50 to-pink-50">
            <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
              <Settings className="w-5 h-5 text-purple-500" />
              Editor
            </h2>
            <button onClick={() => setShowEditPanel(false)} className="p-1.5 hover:bg-white rounded-full transition-colors">
              <X className="w-5 h-5 text-gray-600" />
            </button>
          </div>
          <div className="flex border-b border-gray-200 bg-white px-1">
            {['basico', 'textos', 'programa', 'rsvp', 'regalos'].map((tab) => (
              <button key={tab} onClick={() => setActiveTab(tab as any)} className={`flex-1 py-3 px-1 text-xs font-semibold transition-colors border-b-2 ${activeTab === tab ? 'border-purple-500 text-purple-600' : 'border-transparent text-gray-500'}`}>
                {tab === 'basico' && '📋 Básico'}
                {tab === 'textos' && '✏️ Textos'}
                {tab === 'programa' && '🎵 Programa'}
                {tab === 'rsvp' && '💌 RSVP'}
                {tab === 'regalos' && '🎁 Regalos'}
              </button>
            ))}
          </div>
          <div className="flex-1 overflow-y-auto p-4 bg-gray-50">
            {activeTab === 'basico' && (
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2"><Crown className="w-4 h-4 text-purple-500" />Quinceañera</h3>
                  <input type="text" value={invitationData.nombre} onChange={(e) => updateInvitationField('nombre', e.target.value)} placeholder="Nombre" className="w-full px-3 py-2 text-sm border rounded-lg focus:border-purple-400 focus:outline-none" />
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2"><Calendar className="w-4 h-4 text-purple-500" />Fecha</h3>
                  <input type="date" value={invitationData.fecha} onChange={(e) => updateInvitationField('fecha', e.target.value)} className="w-full px-3 py-2 text-sm border rounded-lg focus:border-purple-400 focus:outline-none" />
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2"><Heart className="w-4 h-4 text-purple-500" />Ceremonia</h3>
                  <div className="space-y-2">
                    <input type="time" value={invitationData.horaCeremonia} onChange={(e) => updateInvitationField('horaCeremonia', e.target.value)} onFocus={() => scrollToSection('programa')} className="w-full px-3 py-2 text-sm border rounded-lg focus:border-purple-400 focus:outline-none" />
                    <input type="text" value={invitationData.lugarCeremonia} onChange={(e) => updateInvitationField('lugarCeremonia', e.target.value)} onFocus={() => scrollToSection('programa')} placeholder="Lugar" className="w-full px-3 py-2 text-sm border rounded-lg focus:border-purple-400 focus:outline-none" />
                    <input type="text" value={invitationData.direccionCeremonia} onChange={(e) => updateInvitationField('direccionCeremonia', e.target.value)} onFocus={() => scrollToSection('programa')} placeholder="Dirección" className="w-full px-3 py-2 text-sm border rounded-lg focus:border-purple-400 focus:outline-none" />
                  </div>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2"><Music className="w-4 h-4 text-purple-500" />Fiesta</h3>
                  <div className="space-y-2">
                    <input type="time" value={invitationData.horaFiesta} onChange={(e) => updateInvitationField('horaFiesta', e.target.value)} onFocus={() => scrollToSection('programa')} className="w-full px-3 py-2 text-sm border rounded-lg focus:border-purple-400 focus:outline-none" />
                    <input type="text" value={invitationData.lugarFiesta} onChange={(e) => updateInvitationField('lugarFiesta', e.target.value)} onFocus={() => scrollToSection('programa')} placeholder="Lugar" className="w-full px-3 py-2 text-sm border rounded-lg focus:border-purple-400 focus:outline-none" />
                    <input type="text" value={invitationData.direccionFiesta} onChange={(e) => updateInvitationField('direccionFiesta', e.target.value)} onFocus={() => scrollToSection('programa')} placeholder="Dirección" className="w-full px-3 py-2 text-sm border rounded-lg focus:border-purple-400 focus:outline-none" />
                  </div>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2"><Crown className="w-4 h-4 text-purple-500" />Imagen</h3>
                  <input type="url" value={invitationData.imagenFondo} onChange={(e) => updateInvitationField('imagenFondo', e.target.value)} onFocus={() => scrollToSection('hero')} placeholder="https://..." className="w-full px-3 py-2 text-sm border rounded-lg focus:border-purple-400 focus:outline-none" />
                </div>
              </div>
            )}
            {activeTab === 'textos' && (
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <h3 className="font-bold text-gray-900 mb-3">Hero</h3>
                  <div className="space-y-2">
                    <input type="text" value={invitationData.tituloHero} onChange={(e) => updateInvitationField('tituloHero', e.target.value)} placeholder="Título" className="w-full px-3 py-2 text-sm border rounded-lg focus:border-purple-400 focus:outline-none" />
                    <input type="text" value={invitationData.mensajeHero} onChange={(e) => updateInvitationField('mensajeHero', e.target.value)} placeholder="Mensaje" className="w-full px-3 py-2 text-sm border rounded-lg focus:border-purple-400 focus:outline-none" />
                    <textarea value={invitationData.descripcionHero} onChange={(e) => updateInvitationField('descripcionHero', e.target.value)} placeholder="Descripción" rows={2} className="w-full px-3 py-2 text-sm border rounded-lg focus:border-purple-400 focus:outline-none resize-none" />
                  </div>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <h3 className="font-bold text-gray-900 mb-3">Títulos</h3>
                  <div className="space-y-2">
                    <input type="text" value={invitationData.tituloPrograma} onChange={(e) => updateInvitationField('tituloPrograma', e.target.value)} placeholder="Título Programa" className="w-full px-3 py-2 text-sm border rounded-lg focus:border-purple-400 focus:outline-none" />
                    <input type="text" value={invitationData.tituloCeremonia} onChange={(e) => updateInvitationField('tituloCeremonia', e.target.value)} placeholder="Título Ceremonia" className="w-full px-3 py-2 text-sm border rounded-lg focus:border-purple-400 focus:outline-none" />
                    <input type="text" value={invitationData.tituloFiesta} onChange={(e) => updateInvitationField('tituloFiesta', e.target.value)} placeholder="Título Fiesta" className="w-full px-3 py-2 text-sm border rounded-lg focus:border-purple-400 focus:outline-none" />
                  </div>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <h3 className="font-bold text-gray-900 mb-3">Dress Code</h3>
                  <div className="space-y-2">
                    <input type="text" value={invitationData.tituloDressCode} onChange={(e) => updateInvitationField('tituloDressCode', e.target.value)} placeholder="Título" className="w-full px-3 py-2 text-sm border rounded-lg focus:border-purple-400 focus:outline-none" />
                    <input type="text" value={invitationData.mensajeDressCode} onChange={(e) => updateInvitationField('mensajeDressCode', e.target.value)} placeholder="Mensaje" className="w-full px-3 py-2 text-sm border rounded-lg focus:border-purple-400 focus:outline-none" />
                    <textarea value={invitationData.detallesDressCode} onChange={(e) => updateInvitationField('detallesDressCode', e.target.value)} placeholder="Detalles" rows={2} className="w-full px-3 py-2 text-sm border rounded-lg focus:border-purple-400 focus:outline-none resize-none" />
                  </div>
                </div>
              </div>
            )}
            {activeTab === 'programa' && (
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <h3 className="font-bold text-gray-900 mb-3">Título Timeline</h3>
                  <input type="text" value={invitationData.tituloTimeline} onChange={(e) => updateInvitationField('tituloTimeline', e.target.value)} placeholder="Título" className="w-full px-3 py-2 text-sm border rounded-lg focus:border-purple-400 focus:outline-none" />
                </div>
                {[1,2,3,4,5,6].map(num => (
                  <div key={num} className="bg-white rounded-lg p-4 shadow-sm">
                    <h3 className="font-bold text-gray-900 mb-3">Evento {num}</h3>
                    <div className="space-y-2">
                      <input type="time" value={invitationData[`evento${num}Hora` as keyof InvitationData]} onChange={(e) => updateInvitationField(`evento${num}Hora` as keyof InvitationData, e.target.value)} className="w-full px-3 py-2 text-sm border rounded-lg focus:border-purple-400 focus:outline-none" />
                      <input type="text" value={invitationData[`evento${num}Desc` as keyof InvitationData]} onChange={(e) => updateInvitationField(`evento${num}Desc` as keyof InvitationData, e.target.value)} placeholder="Descripción" className="w-full px-3 py-2 text-sm border rounded-lg focus:border-purple-400 focus:outline-none" />
                    </div>
                  </div>
                ))}
              </div>
            )}
            {activeTab === 'rsvp' && (
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <h3 className="font-bold text-gray-900 mb-3">RSVP</h3>
                  <div className="space-y-2">
                    <input type="text" value={invitationData.tituloRSVP} onChange={(e) => updateInvitationField('tituloRSVP', e.target.value)} placeholder="Título" className="w-full px-3 py-2 text-sm border rounded-lg focus:border-purple-400 focus:outline-none" />
                    <input type="text" value={invitationData.labelNombre} onChange={(e) => updateInvitationField('labelNombre', e.target.value)} placeholder="Label Nombre" className="w-full px-3 py-2 text-sm border rounded-lg focus:border-purple-400 focus:outline-none" />
                    <input type="text" value={invitationData.placeholderNombre} onChange={(e) => updateInvitationField('placeholderNombre', e.target.value)} placeholder="Placeholder" className="w-full px-3 py-2 text-sm border rounded-lg focus:border-purple-400 focus:outline-none" />
                    <input type="text" value={invitationData.labelAcompañantes} onChange={(e) => updateInvitationField('labelAcompañantes', e.target.value)} placeholder="Label Acompañantes" className="w-full px-3 py-2 text-sm border rounded-lg focus:border-purple-400 focus:outline-none" />
                    <input type="text" value={invitationData.textoBotonRSVP} onChange={(e) => updateInvitationField('textoBotonRSVP', e.target.value)} placeholder="Texto botón" className="w-full px-3 py-2 text-sm border rounded-lg focus:border-purple-400 focus:outline-none" />
                    <input type="text" value={invitationData.mensajeConfirmacion} onChange={(e) => updateInvitationField('mensajeConfirmacion', e.target.value)} placeholder="Confirmación" className="w-full px-3 py-2 text-sm border rounded-lg focus:border-purple-400 focus:outline-none" />
                    <textarea value={invitationData.mensajeAgradecimiento} onChange={(e) => updateInvitationField('mensajeAgradecimiento', e.target.value)} placeholder="Agradecimiento" rows={2} className="w-full px-3 py-2 text-sm border rounded-lg focus:border-purple-400 focus:outline-none resize-none" />
                  </div>
                </div>
              </div>
            )}
            {activeTab === 'regalos' && (
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <h3 className="font-bold text-gray-900 mb-3">General</h3>
                  <div className="space-y-2">
                    <input type="text" value={invitationData.tituloRegalos} onChange={(e) => updateInvitationField('tituloRegalos', e.target.value)} placeholder="Título" className="w-full px-3 py-2 text-sm border rounded-lg focus:border-purple-400 focus:outline-none" />
                    <textarea value={invitationData.descripcionRegalos} onChange={(e) => updateInvitationField('descripcionRegalos', e.target.value)} placeholder="Descripción" rows={3} className="w-full px-3 py-2 text-sm border rounded-lg focus:border-purple-400 focus:outline-none resize-none" />
                  </div>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <h3 className="font-bold text-gray-900 mb-3">Sobres</h3>
                  <div className="space-y-2">
                    <input type="text" value={invitationData.tituloSobres} onChange={(e) => updateInvitationField('tituloSobres', e.target.value)} placeholder="Título" className="w-full px-3 py-2 text-sm border rounded-lg focus:border-purple-400 focus:outline-none" />
                    <textarea value={invitationData.descripcionSobres} onChange={(e) => updateInvitationField('descripcionSobres', e.target.value)} placeholder="Descripción" rows={2} className="w-full px-3 py-2 text-sm border rounded-lg focus:border-purple-400 focus:outline-none resize-none" />
                  </div>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <h3 className="font-bold text-gray-900 mb-3">Lista</h3>
                  <div className="space-y-2">
                    <input type="text" value={invitationData.tituloLista} onChange={(e) => updateInvitationField('tituloLista', e.target.value)} placeholder="Título" className="w-full px-3 py-2 text-sm border rounded-lg focus:border-purple-400 focus:outline-none" />
                    <input type="text" value={invitationData.textoVerLista} onChange={(e) => updateInvitationField('textoVerLista', e.target.value)} placeholder="Texto enlace" className="w-full px-3 py-2 text-sm border rounded-lg focus:border-purple-400 focus:outline-none" />
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="p-4 border-t border-gray-200 bg-white">
            <button onClick={() => setShowEditPanel(false)} className="w-full py-3 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-lg font-semibold transition-all shadow-md">
              Cerrar Editor
            </button>
          </div>
        </div>
      </div>
      )}
      {showEditPanel && (<div className="fixed inset-0 bg-black/30 z-[55]" onClick={() => setShowEditPanel(false)} />)}

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
            alt="Quinceañera"
            onSave={(newSrc) => updateInvitationField('imagenFondo', newSrc)}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-purple-900/60 via-pink-900/40 to-white pointer-events-none"></div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-50/50 to-white pointer-events-none"></div>
        
        {/* Sparkles decorativos */}
        <div className="absolute top-20 left-1/4 animate-pulse">
          <Sparkles className="w-8 h-8 text-purple-300" />
        </div>
        <div className="absolute top-40 right-1/4 animate-pulse" style={{animationDelay: '1s'}}>
          <Sparkles className="w-6 h-6 text-pink-300" />
        </div>
        <div className="absolute bottom-32 left-1/3 animate-pulse" style={{animationDelay: '2s'}}>
          <Sparkles className="w-10 h-10 text-purple-200" />
        </div>
        
        <div className="max-w-5xl mx-auto px-4 text-center relative z-10 py-24">
          <div className="inline-block p-5 bg-white rounded-full shadow-2xl mb-8">
            <Crown className="w-16 h-16 text-purple-600 animate-pulse" />
          </div>
          
          <p className="text-2xl text-white font-light mb-4 tracking-widest uppercase drop-shadow-lg">Mis</p>
          
          <h1 className="text-8xl sm:text-9xl font-black mb-6 drop-shadow-2xl">
            <span className="text-white">
              <EditableField
                value={invitationData.tituloHero}
                onSave={(value) => updateInvitationField('tituloHero', value)}
                className="text-white"
                inputClassName="text-8xl sm:text-9xl font-black text-gray-900 text-center"
                showEditIcon={false}
              />
            </span>
          </h1>
          
          <div className="flex items-center justify-center gap-6 mb-8">
            <div className="h-px w-20 bg-gradient-to-r from-transparent to-white/60"></div>
            <p className="text-5xl font-bold text-white drop-shadow-lg">
              <EditableField
                value={invitationData.nombre}
                onSave={(value) => updateInvitationField('nombre', value)}
                className="text-5xl font-bold text-white drop-shadow-lg"
                inputClassName="text-5xl font-bold text-gray-900 text-center"
                showEditIcon={false}
              />
            </p>
            <div className="h-px w-20 bg-gradient-to-l from-transparent to-white/60"></div>
          </div>
          
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 max-w-2xl mx-auto mb-8 shadow-2xl">
            <p className="text-2xl text-gray-800 font-light italic mb-2">
              <EditableField
                value={invitationData.mensajeHero}
                onSave={(value) => updateInvitationField('mensajeHero', value)}
                className="text-2xl text-gray-800 font-light italic"
                inputClassName="text-2xl text-gray-800 font-light italic w-full text-center"
              />
            </p>
            <p className="text-lg text-gray-600">
              <EditableField
                value={invitationData.descripcionHero}
                onSave={(value) => updateInvitationField('descripcionHero', value)}
                className="text-lg text-gray-600"
                inputClassName="text-lg text-gray-600 w-full text-center"
              />
            </p>
          </div>

          <div className="bg-white/90 backdrop-blur-sm rounded-full px-8 py-4 shadow-xl max-w-fit mx-auto">
            <div className="flex items-center gap-2 text-gray-800">
              <Calendar className="w-5 h-5 text-purple-500" />
              <span className="font-semibold">{new Date(invitationData.fecha).toLocaleDateString('es-AR', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
            </div>
          </div>
        </div>
      </section>

      <section id="programa" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            <EditableField
              value={invitationData.tituloPrograma}
              onSave={(value) => updateInvitationField('tituloPrograma', value)}
              className="text-4xl font-bold text-center text-gray-900"
              inputClassName="text-4xl font-bold text-center text-gray-900 w-full"
            />
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Ceremonia */}
            <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-3xl p-8 shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-purple-500 rounded-full">
                  <Heart className="w-6 h-6 text-white" />
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
                  <Clock className="w-5 h-5 text-purple-600 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900">{invitationData.horaCeremonia} hs</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-purple-600 mt-1" />
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
            <button className="w-full mt-8 bg-gradient-to-r from-purple-500 to-pink-500 text-white py-4 rounded-2xl font-bold">
              Ver ubicación
            </button>
          </div>

          {/* Fiesta */}
          <div className="bg-gradient-to-br from-pink-100 to-purple-100 rounded-3xl p-8 shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-pink-500 rounded-full">
                <Music className="w-6 h-6 text-white" />
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
                <Clock className="w-5 h-5 text-pink-600 mt-1" />
                <div>
                  <p className="font-semibold text-gray-900">{invitationData.horaFiesta} hs</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-pink-600 mt-1" />
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
            <button className="w-full mt-8 bg-gradient-to-r from-pink-500 to-purple-500 text-white py-4 rounded-2xl font-bold">
              Ver ubicación
            </button>
          </div>
        </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-pink-50 to-purple-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <Music className="w-12 h-12 text-purple-500 mx-auto mb-4" />
            <h2 className="text-4xl font-bold">
              <EditableField
                value={invitationData.tituloTimeline}
                onSave={(value) => updateInvitationField('tituloTimeline', value)}
                className="text-4xl font-bold"
                inputClassName="text-4xl font-bold w-full text-center"
              />
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { time: invitationData.evento1Hora, event: invitationData.evento1Desc, timeField: 'evento1Hora', eventField: 'evento1Desc' },
              { time: invitationData.evento2Hora, event: invitationData.evento2Desc, timeField: 'evento2Hora', eventField: 'evento2Desc' },
              { time: invitationData.evento3Hora, event: invitationData.evento3Desc, timeField: 'evento3Hora', eventField: 'evento3Desc' },
              { time: invitationData.evento4Hora, event: invitationData.evento4Desc, timeField: 'evento4Hora', eventField: 'evento4Desc' },
              { time: invitationData.evento5Hora, event: invitationData.evento5Desc, timeField: 'evento5Hora', eventField: 'evento5Desc' },
              { time: invitationData.evento6Hora, event: invitationData.evento6Desc, timeField: 'evento6Hora', eventField: 'evento6Desc' }
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-lg flex gap-4">
                <div className="text-3xl font-bold text-purple-500">
                  <EditableField
                    value={item.time}
                    onSave={(value) => updateInvitationField(item.timeField as keyof InvitationData, value)}
                    className="text-3xl font-bold text-purple-500"
                    inputClassName="text-3xl font-bold text-purple-500 w-20"
                    showEditIcon={false}
                  />
                </div>
                <div className="flex-1">
                  <p className="text-lg font-semibold">
                    <EditableField
                      value={item.event}
                      onSave={(value) => updateInvitationField(item.eventField as keyof InvitationData, value)}
                      className="text-lg font-semibold"
                      inputClassName="text-lg font-semibold w-full"
                    />
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">
            <EditableField
              value={invitationData.tituloDressCode}
              onSave={(value) => updateInvitationField('tituloDressCode', value)}
              className="text-4xl font-bold"
              inputClassName="text-4xl font-bold w-full text-center"
            />
          </h2>
          <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-3xl p-8 max-w-2xl mx-auto">
            <p className="text-2xl font-bold mb-4">
              <EditableField
                value={invitationData.mensajeDressCode}
                onSave={(value) => updateInvitationField('mensajeDressCode', value)}
                className="text-2xl font-bold"
                inputClassName="text-2xl font-bold w-full text-center"
              />
            </p>
            <p className="text-lg text-gray-700">
              <EditableField
                value={invitationData.detallesDressCode}
                onSave={(value) => updateInvitationField('detallesDressCode', value)}
                className="text-lg text-gray-700"
                inputClassName="text-lg text-gray-700 w-full text-center"
              />
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-purple-100 to-pink-100">
        <div className="max-w-2xl mx-auto px-4">
          <div className="bg-white rounded-3xl p-12 shadow-2xl">
            <div className="text-center mb-8">
              <Sparkles className="w-12 h-12 text-purple-500 mx-auto mb-4" />
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
                <Sparkles className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold">
                  <EditableField
                    value={invitationData.mensajeConfirmacion}
                    onSave={(value) => updateInvitationField('mensajeConfirmacion', value)}
                    className="text-2xl font-bold"
                    inputClassName="text-2xl font-bold w-full text-center"
                  />
                </h3>
                <p className="text-gray-600 mt-4">
                  <EditableField
                    value={invitationData.mensajeAgradecimiento}
                    onSave={(value) => updateInvitationField('mensajeAgradecimiento', value)}
                    className="text-gray-600"
                    inputClassName="text-gray-600 w-full text-center"
                  />
                </p>
              </div>
            ) : (
              <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); setShowRSVP(true); }}>
                <input type="text" required placeholder={invitationData.placeholderNombre}
                  className="w-full px-4 py-3 border-2 rounded-xl focus:outline-none" />
                <select className="w-full px-4 py-3 border-2 rounded-xl focus:outline-none">
                  <option>1 persona</option>
                  <option>2 personas</option>
                </select>
                <button type="submit" 
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-4 rounded-xl font-bold">
                  <EditableField
                    value={invitationData.textoBotonRSVP}
                    onSave={(value) => updateInvitationField('textoBotonRSVP', value)}
                    className="text-white font-bold"
                    inputClassName="text-gray-900 font-bold w-full text-center"
                    showEditIcon={false}
                  />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Gift className="w-12 h-12 text-purple-500 mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-4">
            <EditableField
              value={invitationData.tituloRegalos}
              onSave={(value) => updateInvitationField('tituloRegalos', value)}
              className="text-3xl font-bold"
              inputClassName="text-3xl font-bold w-full text-center"
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
            <div className="bg-purple-50 rounded-2xl p-6">
              <h3 className="font-bold text-gray-900 mb-2">
                <EditableField
                  value={invitationData.tituloSobres}
                  onSave={(value) => updateInvitationField('tituloSobres', value)}
                  className="font-bold text-gray-900"
                  inputClassName="font-bold text-gray-900 w-full text-center"
                />
              </h3>
              <p className="text-sm text-gray-600">
                <EditableField
                  value={invitationData.descripcionSobres}
                  onSave={(value) => updateInvitationField('descripcionSobres', value)}
                  className="text-sm text-gray-600"
                  inputClassName="text-sm text-gray-600 w-full text-center"
                />
              </p>
            </div>
            <div className="bg-purple-50 rounded-2xl p-6">
              <h3 className="font-bold text-gray-900 mb-2">
                <EditableField
                  value={invitationData.tituloLista}
                  onSave={(value) => updateInvitationField('tituloLista', value)}
                  className="font-bold text-gray-900"
                  inputClassName="font-bold text-gray-900 w-full text-center"
                />
              </h3>
              <button className="mt-2 text-purple-600 hover:text-purple-700 font-semibold">
                <EditableField
                  value={invitationData.textoVerLista}
                  onSave={(value) => updateInvitationField('textoVerLista', value)}
                  className="text-purple-600 font-semibold"
                  inputClassName="text-purple-600 font-semibold w-full text-center"
                  showEditIcon={false}
                />
              </button>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12 text-center">
        <Sparkles className="w-8 h-8 text-purple-400 mx-auto mb-4" />
        <Link to="/" className="text-purple-400 hover:text-purple-300">Creá tu invitación →</Link>
      </footer>
      </div>
      {/* Cierre del div de contenido principal */}
    </div>
  )
}

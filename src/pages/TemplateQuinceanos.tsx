import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Sparkles, Calendar, MapPin, Clock, Music, Heart, Gift, ArrowLeft, Share2, Volume2, VolumeX, Crown } from 'lucide-react'

interface InvitationData {
  nombre: string
  fecha: string
  horaCeremonia: string
  lugarCeremonia: string
  direccionCeremonia: string
  horaFiesta: string
  lugarFiesta: string
  direccionFiesta: string
}

export default function TemplateQuinceanos() {
  const [showRSVP, setShowRSVP] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [envelopeOpened, setEnvelopeOpened] = useState(false)
  const [formCompleted, setFormCompleted] = useState(false)
  const [invitationData, setInvitationData] = useState<InvitationData>({
    nombre: '',
    fecha: '',
    horaCeremonia: '',
    lugarCeremonia: '',
    direccionCeremonia: '',
    horaFiesta: '',
    lugarFiesta: '',
    direccionFiesta: ''
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
      direccionFiesta: 'Av. del Libertador 5678, Vicente López'
    })
    setFormCompleted(true)
    window.scrollTo({ top: 0, behavior: 'smooth' })
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
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-gradient-to-br from-purple-50 via-pink-50 to-purple-100 overflow-y-auto p-4">
          <div className="max-w-2xl w-full my-8">
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
            <button className="p-2 rounded-full hover:bg-purple-100">
              <Share2 className="w-5 h-5" />
            </button>
          </div>
        </div>
      </nav>

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Imagen de fondo */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1519741497674-611481863552?w=1920&q=80" 
            alt="Quinceañera"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-purple-900/60 via-pink-900/40 to-white"></div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-50/50 to-white"></div>
        
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
              15 Años
            </span>
          </h1>
          
          <div className="flex items-center justify-center gap-6 mb-8">
            <div className="h-px w-20 bg-gradient-to-r from-transparent to-white/60"></div>
            <p className="text-5xl font-bold text-white drop-shadow-lg">{invitationData.nombre}</p>
            <div className="h-px w-20 bg-gradient-to-l from-transparent to-white/60"></div>
          </div>
          
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 max-w-2xl mx-auto mb-8 shadow-2xl">
            <p className="text-2xl text-gray-800 font-light italic mb-2">Una noche mágica e inolvidable</p>
            <p className="text-lg text-gray-600">Te espero para celebrar juntos este momento tan especial</p>
          </div>

          <div className="bg-white/90 backdrop-blur-sm rounded-full px-8 py-4 shadow-xl max-w-fit mx-auto">
            <div className="flex items-center gap-2 text-gray-800">
              <Calendar className="w-5 h-5 text-purple-500" />
              <span className="font-semibold">{new Date(invitationData.fecha).toLocaleDateString('es-AR', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">✨ Programa de la noche</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Ceremonia */}
            <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-3xl p-8 shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-purple-500 rounded-full">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Ceremonia</h3>
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
                    <p className="font-semibold text-gray-900">{invitationData.lugarCeremonia}</p>
                    <p className="text-gray-600 text-sm">{invitationData.direccionCeremonia}</p>
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
              <h3 className="text-2xl font-bold text-gray-900">Fiesta</h3>
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
                  <p className="font-semibold text-gray-900">{invitationData.lugarFiesta}</p>
                  <p className="text-gray-600 text-sm">{invitationData.direccionFiesta}</p>
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
            <h2 className="text-4xl font-bold">🎵 Programa de la noche</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { time: '21:00', event: 'Recepción y bienvenida' },
              { time: '21:30', event: 'Vals de la quinceañera' },
              { time: '22:00', event: 'Cena' },
              { time: '23:00', event: 'Baile y fiesta' },
              { time: '00:00', event: 'Torta y brindis' },
              { time: '01:00', event: 'Fiesta hasta el final' }
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-lg flex gap-4">
                <div className="text-3xl font-bold text-purple-500">{item.time}</div>
                <div className="flex-1">
                  <p className="text-lg font-semibold">{item.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">👗 Dress Code</h2>
          <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-3xl p-8 max-w-2xl mx-auto">
            <p className="text-2xl font-bold mb-4">Elegante / Formal</p>
            <p className="text-lg text-gray-700">Colores sugeridos: Violeta, Rosa, Plateado</p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-purple-100 to-pink-100">
        <div className="max-w-2xl mx-auto px-4">
          <div className="bg-white rounded-3xl p-12 shadow-2xl">
            <div className="text-center mb-8">
              <Sparkles className="w-12 h-12 text-purple-500 mx-auto mb-4" />
              <h2 className="text-3xl font-bold mb-4">Confirmá tu asistencia</h2>
            </div>
            {showRSVP ? (
              <div className="text-center py-8">
                <Sparkles className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold">¡Confirmado! ✨</h3>
              </div>
            ) : (
              <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); setShowRSVP(true); }}>
                <input type="text" required placeholder="Tu nombre" 
                  className="w-full px-4 py-3 border-2 rounded-xl focus:outline-none" />
                <select className="w-full px-4 py-3 border-2 rounded-xl focus:outline-none">
                  <option>1 persona</option>
                  <option>2 personas</option>
                </select>
                <button type="submit" 
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-4 rounded-xl font-bold">
                  ✨ Confirmar
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Gift className="w-12 h-12 text-purple-500 mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-4">🎁 Regalos</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Tu presencia es el mejor regalo. Si querés colaborar:
          </p>
          <div className="bg-purple-50 rounded-2xl p-6 max-w-md mx-auto">
            <p className="font-semibold">Alias: VALEN.15AÑOS</p>
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

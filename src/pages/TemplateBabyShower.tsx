import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Baby, Calendar, MapPin, Clock, Heart, Gift, ArrowLeft, Share2, Volume2, VolumeX, Sparkles } from 'lucide-react'

interface InvitationData {
  nombreBebe: string
  sexo: string
  fechaEvento: string
  hora: string
  lugar: string
  direccion: string
  nombresMama: string
  nombresPapa: string
}

export default function TemplateBabyShower() {
  const [showRSVP, setShowRSVP] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [envelopeOpened, setEnvelopeOpened] = useState(false)
  const [formCompleted, setFormCompleted] = useState(false)
  const [invitationData, setInvitationData] = useState<InvitationData>({
    nombreBebe: '',
    sexo: 'niño',
    fechaEvento: '',
    hora: '',
    lugar: '',
    direccion: '',
    nombresMama: '',
    nombresPapa: ''
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
      nombreBebe: 'Mateo',
      sexo: 'niño',
      fechaEvento: '2025-06-15',
      hora: '16:00',
      lugar: 'Jardín Las Rosas',
      direccion: 'Av. Santa Fe 2345, Palermo',
      nombresMama: 'Laura',
      nombresPapa: 'Martín'
    })
    setFormCompleted(true)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const colorScheme = invitationData.sexo === 'niño' 
    ? { primary: 'blue', secondary: 'sky', emoji: '👶💙' }
    : { primary: 'pink', secondary: 'rose', emoji: '👶💗' }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-sand-50 to-blue-100">
      {/* Audio Element */}
      <audio ref={audioRef} loop preload="auto">
        <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3" type="audio/mpeg" />
      </audio>

      {/* Formulario */}
      {!formCompleted && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-gradient-to-br from-blue-50 via-pink-50 to-blue-100 overflow-y-auto p-4">
          <div className="max-w-2xl w-full my-8">
            <div className="bg-white rounded-3xl shadow-2xl p-8 sm:p-12">
              <div className="text-center mb-8">
                <Baby className="w-16 h-16 text-blue-500 mx-auto mb-4" />
                <h2 className="text-4xl font-bold text-gray-900 mb-3">
                  Personalizá tu Baby Shower
                </h2>
                <p className="text-gray-600">
                  Completá los datos para crear una invitación única
                </p>
              </div>

              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Nombre del bebé *
                  </label>
                  <input
                    type="text"
                    required
                    value={invitationData.nombreBebe}
                    onChange={(e) => setInvitationData({...invitationData, nombreBebe: e.target.value})}
                    placeholder="Ej: Mateo"
                    className="w-full px-4 py-3 border-2 border-blue-200 rounded-xl focus:border-blue-400 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Sexo del bebé *
                  </label>
                  <select
                    required
                    value={invitationData.sexo}
                    onChange={(e) => setInvitationData({...invitationData, sexo: e.target.value})}
                    className="w-full px-4 py-3 border-2 border-blue-200 rounded-xl focus:border-blue-400 focus:outline-none"
                  >
                    <option value="niño">Niño 💙</option>
                    <option value="niña">Niña 💗</option>
                    <option value="sorpresa">Sorpresa 💛</option>
                  </select>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Nombre de la mamá *
                    </label>
                    <input
                      type="text"
                      required
                      value={invitationData.nombresMama}
                      onChange={(e) => setInvitationData({...invitationData, nombresMama: e.target.value})}
                      placeholder="Ej: Laura"
                      className="w-full px-4 py-3 border-2 border-blue-200 rounded-xl focus:border-blue-400 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Nombre del papá *
                    </label>
                    <input
                      type="text"
                      required
                      value={invitationData.nombresPapa}
                      onChange={(e) => setInvitationData({...invitationData, nombresPapa: e.target.value})}
                      placeholder="Ej: Martín"
                      className="w-full px-4 py-3 border-2 border-blue-200 rounded-xl focus:border-blue-400 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Fecha del evento *
                    </label>
                    <input
                      type="date"
                      required
                      value={invitationData.fechaEvento}
                      onChange={(e) => setInvitationData({...invitationData, fechaEvento: e.target.value})}
                      className="w-full px-4 py-3 border-2 border-blue-200 rounded-xl focus:border-blue-400 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Hora *
                    </label>
                    <input
                      type="time"
                      required
                      value={invitationData.hora}
                      onChange={(e) => setInvitationData({...invitationData, hora: e.target.value})}
                      className="w-full px-4 py-3 border-2 border-blue-200 rounded-xl focus:border-blue-400 focus:outline-none"
                    />
                  </div>
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
                    placeholder="Ej: Jardín Las Rosas"
                    className="w-full px-4 py-3 border-2 border-blue-200 rounded-xl focus:border-blue-400 focus:outline-none"
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
                    placeholder="Ej: Av. Santa Fe 2345"
                    className="w-full px-4 py-3 border-2 border-blue-200 rounded-xl focus:border-blue-400 focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-500 to-pink-500 hover:from-blue-600 hover:to-pink-600 text-white py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2"
                >
                  Crear mi Invitación
                  <Baby className="w-5 h-5" />
                </button>
              </form>

              <div className="mt-6 text-center">
                <p className="text-sm text-gray-500 mb-3">¿Solo querés ver cómo queda?</p>
                <button
                  onClick={handleLoadDemo}
                  className="w-full bg-white hover:bg-blue-50 text-gray-700 py-3 rounded-xl font-semibold border-2 border-blue-200 hover:border-blue-300 transition-all flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-5 h-5 text-blue-500" />
                  Ver Demo con Datos de Ejemplo
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Sobre */}
      {formCompleted && !envelopeOpened && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-gradient-to-br from-blue-100 via-pink-100 to-blue-200 animate-fade-in">
          <div className="text-center">
            <div onClick={handleOpenEnvelope} className="relative cursor-pointer group">
              <div className="relative w-80 h-56 bg-gradient-to-br from-blue-200 to-pink-200 rounded-lg shadow-2xl transform transition-all duration-500 group-hover:scale-105">
                <div className="absolute -top-0 left-0 right-0 h-32 bg-gradient-to-br from-blue-300 to-pink-300 origin-top transform transition-all duration-700 group-hover:-translate-y-2 group-hover:rotate-[-5deg]"
                  style={{clipPath: 'polygon(0 0, 50% 60%, 100% 0)'}}>
                </div>
                
                <div className="absolute top-4 right-4 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <Baby className="w-6 h-6 text-white" />
                </div>

                <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                  <Baby className="w-16 h-16 text-blue-600 mb-4 animate-pulse" />
                  <p className="text-xl font-bold text-gray-800 mb-2">
                    Baby Shower
                  </p>
                  <p className="text-3xl font-black text-blue-700 mb-2">
                    {invitationData.nombreBebe}
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

      {/* Music Button */}
      {envelopeOpened && (
        <button
          onClick={toggleMusic}
          className={`fixed bottom-8 right-8 z-50 p-5 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 group ${
            isPlaying 
              ? 'bg-gradient-to-r from-blue-500 to-pink-500 hover:from-blue-600 hover:to-pink-600 text-white' 
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
            <Link to="/" className="flex items-center gap-2 text-blue-600 hover:text-blue-700">
              <ArrowLeft className="w-5 h-5" />
              <span className="font-semibold">Volver</span>
            </Link>
            <button className="p-2 rounded-full hover:bg-blue-100">
              <Share2 className="w-5 h-5" />
            </button>
          </div>
        </div>
      </nav>

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Imagen de fondo */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=1920&q=80" 
            alt="Baby shower"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/50 via-pink-900/30 to-white"></div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-50/30 to-white"></div>
        
        {/* Nubes decorativas */}
        <div className="absolute top-10 left-10 w-32 h-20 bg-white rounded-full opacity-80 shadow-lg"></div>
        <div className="absolute top-20 right-20 w-40 h-24 bg-white rounded-full opacity-70 shadow-lg"></div>
        <div className="absolute bottom-20 left-1/4 w-36 h-22 bg-white rounded-full opacity-75 shadow-lg"></div>
        
        <div className="max-w-5xl mx-auto px-4 text-center relative z-10 py-24">
          <div className="inline-block p-5 bg-white rounded-full shadow-2xl mb-8">
            <Baby className="w-16 h-16 text-blue-500" />
          </div>
          
          <h1 className="text-6xl sm:text-7xl font-bold mb-6 drop-shadow-2xl">
            <span className="text-white">
              Baby Shower
            </span>
          </h1>
          
          <div className="text-5xl mb-8 drop-shadow-lg">{colorScheme.emoji}✨</div>
          
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 max-w-2xl mx-auto mb-8 shadow-2xl">
            <p className="text-4xl font-bold text-gray-800 mb-4">¡{invitationData.nombreBebe} está en camino!</p>
            
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-blue-400"></div>
              <Heart className="w-6 h-6 text-blue-400" />
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-blue-400"></div>
            </div>
            
            <p className="text-xl text-gray-700 leading-relaxed">
              Celebremos juntos la llegada de nuestro bebé con amor, risas y buenos deseos
            </p>
          </div>

          <div className="bg-white/90 backdrop-blur-sm rounded-full px-8 py-4 shadow-xl max-w-fit mx-auto">
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <div className="flex items-center gap-2 text-gray-800">
                <Calendar className="w-5 h-5 text-blue-500" />
                <span className="font-semibold">{new Date(invitationData.fechaEvento).toLocaleDateString('es-AR', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
              </div>
              <div className="hidden sm:block w-1 h-1 bg-blue-400 rounded-full"></div>
              <div className="flex items-center gap-2 text-gray-800">
                <MapPin className="w-5 h-5 text-blue-500" />
                <span className="font-semibold">{invitationData.lugar}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">👶 Detalles del evento</h2>
          <div className="bg-gradient-to-br from-blue-100 to-pink-100 rounded-3xl p-12 space-y-6">
            <div className="flex items-start gap-4">
              <Calendar className="w-6 h-6 text-blue-600 mt-1" />
              <div>
                <p className="text-2xl font-bold">{new Date(invitationData.fechaEvento).toLocaleDateString('es-AR', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Clock className="w-6 h-6 text-blue-600 mt-1" />
              <div>
                <p className="text-2xl font-bold">{invitationData.hora} hs</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <MapPin className="w-6 h-6 text-blue-600 mt-1" />
              <div>
                <p className="text-2xl font-bold">{invitationData.lugar}</p>
                <p className="text-gray-600">{invitationData.direccion}</p>
              </div>
            </div>
            <button className="w-full mt-8 bg-gradient-to-r from-blue-500 to-pink-500 text-white py-4 rounded-2xl font-bold">
              Ver ubicación
            </button>
          </div>
        </div>
      </section>

      {/* Padres Section */}
      <section className="py-16 bg-gradient-to-br from-sand-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Heart className="w-12 h-12 text-blue-500 mx-auto mb-6" />
          <h2 className="text-4xl font-bold mb-8 text-gray-900">💙 Los futuros papás</h2>
          <div className="bg-white rounded-3xl p-8 max-w-2xl mx-auto shadow-lg">
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="font-semibold text-lg">Mamá:</span>
                <span className="text-xl text-blue-600">{invitationData.nombresMama}</span>
              </div>
              <div className="h-px bg-gray-200"></div>
              <div className="flex justify-between items-center">
                <span className="font-semibold text-lg">Papá:</span>
                <span className="text-xl text-blue-600">{invitationData.nombresPapa}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold">Nombre:</span>
                <span>Mateo Benjamín</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">🎮 Actividades</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { emoji: '🎯', title: 'Juegos' },
              { emoji: '🍰', title: 'Merienda' },
              { emoji: '📸', title: 'Fotos' },
              { emoji: '🎁', title: 'Regalos' },
              { emoji: '💌', title: 'Consejos' },
              { emoji: '🎨', title: 'Decoración' }
            ].map((item, i) => (
              <div key={i} className="bg-blue-50 rounded-2xl p-6">
                <div className="text-4xl mb-2">{item.emoji}</div>
                <p className="font-semibold">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-blue-100 to-sand-100">
        <div className="max-w-2xl mx-auto px-4">
          <div className="bg-white rounded-3xl p-12 shadow-2xl">
            <div className="text-center mb-8">
              <Baby className="w-12 h-12 text-blue-500 mx-auto mb-4" />
              <h2 className="text-3xl font-bold mb-4">Confirmá tu asistencia</h2>
            </div>
            {showRSVP ? (
              <div className="text-center py-8">
                <Heart className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold">¡Confirmado! 💙</h3>
              </div>
            ) : (
              <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); setShowRSVP(true); }}>
                <input type="text" required placeholder="Tu nombre" 
                  className="w-full px-4 py-3 border-2 rounded-xl focus:outline-none" />
                <button type="submit" 
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white py-4 rounded-xl font-bold">
                  👶 Confirmar
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Gift className="w-12 h-12 text-blue-500 mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-4">🎁 Lista de regalos</h2>
          <p className="text-gray-600 mb-8">
            Mateo necesita: Ropa (talle RN y 0-3 meses), pañales, productos de higiene
          </p>
          <div className="bg-blue-50 rounded-2xl p-6 max-w-md mx-auto">
            <p className="font-semibold">Alias: MATEO.BABY</p>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12 text-center">
        <Baby className="w-8 h-8 text-blue-400 mx-auto mb-4" />
        <Link to="/" className="text-blue-400 hover:text-blue-300">Creá tu invitación →</Link>
      </footer>
      </div>
      {/* Cierre del div de contenido principal */}
    </div>
  )
}

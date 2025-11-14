import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { PartyPopper, Calendar, MapPin, Clock, Cake, Gamepad2, ArrowLeft, Share2, Volume2, VolumeX, Sparkles } from 'lucide-react'

interface InvitationData {
  nombreNino: string
  edad: string
  fecha: string
  hora: string
  horaFin: string
  lugar: string
  direccion: string
}

export default function TemplateCumpleanos() {
  const [showRSVP, setShowRSVP] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [envelopeOpened, setEnvelopeOpened] = useState(false)
  const [formCompleted, setFormCompleted] = useState(false)
  const [invitationData, setInvitationData] = useState<InvitationData>({
    nombreNino: '',
    edad: '',
    fecha: '',
    hora: '',
    horaFin: '',
    lugar: '',
    direccion: ''
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
      direccion: 'Av. San Martín 567, Caballito'
    })
    setFormCompleted(true)
    window.scrollTo({ top: 0, behavior: 'smooth' })
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
            <button className="p-2 rounded-full hover:bg-blue-100">
              <Share2 className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>
      </nav>

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Imagen de fondo */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=1920&q=80" 
            alt="Fiesta infantil"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-white"></div>
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
              ¡{invitationData.nombreNino} cumple {invitationData.edad}!
            </span>
          </h1>
          
          <div className="text-5xl mb-8 animate-pulse drop-shadow-lg">
            🎈 🎂 🎉
          </div>
          
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 max-w-2xl mx-auto mb-8 shadow-2xl">
            <p className="text-3xl font-bold text-gray-800 mb-2">¡Vení a festejar!</p>
            <p className="text-xl text-gray-700">
              Una tarde llena de juegos, diversión y sorpresas
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
                <span className="font-semibold">{invitationData.lugar}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">📅 Cuándo y dónde</h2>
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
                <p className="text-2xl font-bold">{invitationData.hora} a {invitationData.horaFin} hs</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <MapPin className="w-6 h-6 text-blue-600 mt-1" />
              <div>
                <p className="text-2xl font-bold">{invitationData.lugar}</p>
                <p className="text-gray-600">{invitationData.direccion}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-yellow-50 to-orange-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <Gamepad2 className="w-12 h-12 text-orange-500 mx-auto mb-4" />
            <h2 className="text-4xl font-bold text-gray-900 mb-4">🎮 ¡Diversión asegurada!</h2>
            <p className="text-gray-600 text-lg">Preparamos un montón de sorpresas</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { emoji: '🎪', title: 'Animación', desc: 'Juegos y diversión' },
              { emoji: '🎨', title: 'Pintacaritas', desc: 'Diseños increíbles' },
              { emoji: '🎭', title: 'Show de magia', desc: 'Trucos sorprendentes' },
              { emoji: '🎵', title: 'Música', desc: 'Baile y karaoke' },
              { emoji: '🍕', title: 'Comida', desc: 'Pizza, snacks y más' },
              { emoji: '🎂', title: 'Torta', desc: 'Momento especial' }
            ].map((activity, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2">
                <div className="text-6xl mb-4">{activity.emoji}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{activity.title}</h3>
                <p className="text-gray-600">{activity.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dress Code Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 rounded-3xl p-12 text-center shadow-xl">
            <div className="text-6xl mb-6">👕👗</div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Dress Code</h2>
            <p className="text-2xl text-gray-700 mb-4">¡Vení cómodo y listo para jugar!</p>
            <p className="text-lg text-gray-600">Ropa informal y zapatillas para correr y divertirse</p>
          </div>
        </div>
      </section>

      {/* Info Adicional */}
      <section className="py-16 bg-gradient-to-br from-pink-50 to-purple-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">📝 Información importante</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="text-5xl mb-4">🎁</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Regalos</h3>
              <p className="text-gray-600">Tu presencia es el mejor regalo, pero si querés traer algo, ¡sorprendenos!</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="text-5xl mb-4">👨‍👩‍👧‍👦</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Padres</h3>
              <p className="text-gray-600">Los papás pueden quedarse o retirarse. ¡Hay café y snacks para ustedes!</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="text-5xl mb-4">🍰</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Alergias</h3>
              <p className="text-gray-600">Por favor avisanos si tu hijo/a tiene alguna alergia alimentaria</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-purple-100 to-pink-100">
        <div className="max-w-2xl mx-auto px-4">
          <div className="bg-white rounded-3xl p-12 shadow-2xl">
            <div className="text-center mb-8">
              <Cake className="w-12 h-12 text-pink-500 mx-auto mb-4" />
              <h2 className="text-3xl font-bold mb-4">¡Confirmá tu asistencia!</h2>
            </div>
            {showRSVP ? (
              <div className="text-center py-8">
                <PartyPopper className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold">¡Confirmado! 🎉</h3>
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

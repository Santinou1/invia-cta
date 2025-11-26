import { Heart, ArrowRight, ChevronDown, Calendar, MapPin } from 'lucide-react'
import banner01 from '../../assets/images/banner-home-01.jpg'
import banner02 from '../../assets/images/banner-home-02.jpg'
import banner03 from '../../assets/images/banner-home-03.jpg'

interface HeroSectionProps {
  onScrollToWhitelist: () => void
}

export default function HeroSection({ onScrollToWhitelist }: HeroSectionProps) {
  return (
    <section className="relative bg-violet-900 overflow-hidden">
      {/* Background Image Carousel */}
      <div className="absolute inset-0 z-0 banners-home">
        <img 
          src={banner01} 
          alt="" 
          className="absolute inset-0 w-full h-full object-cover opacity-0 animate-banner-1"
          aria-hidden="true"
          loading="lazy"
        />
        <img 
          src={banner02} 
          alt="" 
          className="absolute inset-0 w-full h-full object-cover opacity-0 animate-banner-2"
          aria-hidden="true"
          loading="lazy"
        />
        <img 
          src={banner03} 
          alt="" 
          className="absolute inset-0 w-full h-full object-cover opacity-0 animate-banner-3"
          aria-hidden="true"
          loading="lazy"
        />
        {/* Overlay oscuro para mejorar legibilidad */}
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Contenido por encima del fondo */}
      <div className="relative z-10 pt-20 md:pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white drop-shadow-lg mb-6 leading-tight">
              Invitaciones hermosas para tus{' '}
              <span className="text-violet-200 relative">
                momentos
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 10 Q 50 2, 100 8 T 198 10" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round"/>
                </svg>
              </span>{' '}
              más importantes
            </h1>
            <p className="text-lg sm:text-xl text-white drop-shadow-md mb-8 leading-relaxed">
              Creá invitaciones digitales únicas, modernas e interactivas para casamientos, cumpleaños, 15 años y todo tipo de eventos. 
              Sin complicaciones, con resultados profesionales.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button 
                onClick={onScrollToWhitelist}
                className="bg-violet-800 hover:bg-violet-900 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-2"
              >
                Unirme a la Whitelist
                <ArrowRight className="w-5 h-5" />
              </button>
              <button 
                onClick={() => document.getElementById('plantillas')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white hover:bg-violet-50 text-gray-800 px-8 py-4 rounded-full font-semibold text-lg border-2 border-violet-200 hover:border-violet-300 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Crear mi tarjeta de ejemplo
                <ChevronDown className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Right Content - Mockup */}
          <div className="relative animate-fade-in">
            <div className="relative z-10 transform hover:scale-105 transition-transform duration-500">
              {/* Simulated phone mockup */}
              <div 
                className="rounded-3xl shadow-2xl p-6 max-w-sm mx-auto backdrop-blur-[15px]"
                style={{
                  border: 'solid 1px #ffffff1f',
                  backgroundColor: '#ffffff17'
                }}
              >
                <div className="bg-gradient-to-br from-violet-100 rounded-2xl p-6 space-y-4">
                  <div className="text-center space-y-2">
                    <Heart className="w-12 h-12 text-violet-600 mx-auto" />
                    <h3 className="font-bold text-2xl text-gray-800">María & Juan</h3>
                    <p className="text-gray-600">¡Nos casamos!</p>
                  </div>
                  <div className="bg-white rounded-xl p-4 space-y-2">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-5 h-5 text-violet-600" />
                      <p className="text-sm text-gray-700">15 de Marzo, 2025</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-5 h-5 text-violet-600" />
                      <p className="text-sm text-gray-700">Salón Los Jardines</p>
                    </div>
                  </div>
                  <button className="w-full bg-violet-800 text-white py-3 rounded-lg font-semibold">
                    Confirmar Asistencia
                  </button>
                </div>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-violet-300 rounded-full blur-xl opacity-60 animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-violet-200 rounded-full blur-xl opacity-40 animate-pulse delay-100"></div>
          </div>
        </div>
        </div>
      </div>
    </section>
  )
}


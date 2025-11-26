import { useState, useEffect } from 'react'
import logoInvia from '../assets/images/logo-invia-bn.png'
import logoInviaColor from '../assets/images/logo-invia-color.png'

interface HeaderProps {
  onScrollToWhitelist: () => void
}

export default function Header({ onScrollToWhitelist }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50
      setScrolled(isScrolled)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setIsMenuOpen(false) // Cerrar menú después de hacer scroll
  }

  const handleWhitelistClick = () => {
    onScrollToWhitelist()
    setIsMenuOpen(false) // Cerrar menú después de hacer scroll
  }

  const navItems = [
    { label: 'Cómo funciona', id: 'como-funciona' },
    { label: 'Beneficios', id: 'beneficios' },
    { label: 'Plantillas', id: 'plantillas' },
    { label: 'FAQ', id: 'faq' }
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'backdrop-blur-md shadow-md'
          : 'bg-transparent'
      }`}
      style={
        scrolled
          ? {
              backgroundColor: '#ffffffd9',
              backdropFilter: 'blur(15px)'
            }
          : undefined
      }
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="cursor-pointer"
            >
              {scrolled ? (
                <img
                  src={logoInviaColor}
                  alt="INVIA Logo"
                  className="h-8 sm:h-10 w-auto transition-opacity duration-300"
                />
              ) : (
                <img
                  src={logoInvia}
                  alt="INVIA Logo"
                  className="h-8 sm:h-10 w-auto transition-opacity duration-300"
                />
              )}
            </button>
          </div>

          {/* Navigation Items */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm font-medium transition-colors duration-300 ${
                  scrolled
                    ? 'text-gray-700 hover:text-violet-600'
                    : 'text-white hover:text-violet-200'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={onScrollToWhitelist}
              className={`px-6 py-2 rounded-full font-semibold text-sm transition-all duration-300 ${
                scrolled
                  ? 'bg-violet-800 hover:bg-violet-900 text-white shadow-lg'
                  : 'bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white border border-white/30'
              }`}
            >
              Unirme a la Whitelist
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              scrolled
                ? 'text-gray-700 hover:bg-gray-100'
                : 'text-white hover:bg-white/10'
            }`}
            aria-label="Menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-white/10 mt-2 pt-4 pb-4">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-left px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-300 ${
                    scrolled
                      ? 'text-gray-700 hover:bg-gray-100'
                      : 'text-white hover:bg-white/10'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={handleWhitelistClick}
                className={`mx-4 px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 ${
                  scrolled
                    ? 'bg-violet-800 hover:bg-violet-900 text-white shadow-lg'
                    : 'bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white border border-white/30'
                }`}
              >
                Unirme a la Whitelist
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}


import { Instagram, Facebook, Twitter } from 'lucide-react'
import logoInvia from '../../assets/images/logo-invia-bn.png'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
              <img 
                src={logoInvia} 
                alt="INVIA Logo" 
                className="h-8 w-auto"
              />
            </div>
            <p className="text-gray-400">
              Invitaciones hermosas para momentos inolvidables
            </p>
          </div>

          <div className="flex gap-6">
            <a 
              href="#" 
              className="text-gray-400 hover:text-violet-400 transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a 
              href="#" 
              className="text-gray-400 hover:text-violet-400 transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-6 h-6" />
            </a>
            <a 
              href="#" 
              className="text-gray-400 hover:text-violet-400 transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="w-6 h-6" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
          © 2025 INVIA. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  )
}

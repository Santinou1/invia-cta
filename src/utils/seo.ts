/**
 * SEO Utilities - Sistema centralizado de metadatos para INVIA
 * https://invia.ursis.com.ar
 */

export interface SEOData {
  title: string
  description: string
  keywords?: string
  canonical?: string
  ogImage?: string
  ogType?: 'website' | 'article' | 'product'
  noindex?: boolean
  nofollow?: boolean
}

// Función para obtener BASE_URL según el ambiente
function getBaseUrl(): string {
  if (typeof window === 'undefined') {
    return 'https://invia.ursis.com.ar'
  }
  
  const isLocal = window.location.hostname === 'localhost' || 
    window.location.hostname === '127.0.0.1' ||
    window.location.hostname.includes('localhost')
  
  return isLocal 
    ? `${window.location.protocol}//${window.location.host}`
    : 'https://invia.ursis.com.ar'
}

// Función para crear configuración SEO (usa BASE_URL dinámico)
export function getSEOConfig(): Record<string, SEOData> {
  const baseUrl = getBaseUrl()
  const defaultOgImage = `${baseUrl}/og-image.jpg`
  
  return {
    '/': {
      title: 'INVIA - Invitaciones Digitales Hermosas | Casamientos, Cumpleaños, 15 Años',
      description: 'Creá invitaciones digitales únicas, modernas e interactivas para casamientos, cumpleaños, 15 años y todo tipo de eventos. Sin complicaciones, con resultados profesionales. Sumate a la whitelist.',
      keywords: 'invitaciones digitales, invitaciones online, casamiento, cumpleaños, 15 años, baby shower, eventos, tarjetas digitales, invitaciones interactivas, Argentina',
      canonical: baseUrl,
      ogType: 'website',
      ogImage: defaultOgImage
    },
    '/whitelist': {
      title: 'Unite a la Whitelist de INVIA - Acceso Anticipado | Invitaciones Digitales',
      description: 'Sumate a la whitelist de INVIA y sé de los primeros en crear invitaciones digitales únicas. Acceso anticipado con descuentos exclusivos para miembros de la whitelist.',
      keywords: 'whitelist INVIA, acceso anticipado, invitaciones digitales, descuentos exclusivos, registro temprano',
      canonical: `${baseUrl}/whitelist`,
      ogType: 'website',
      ogImage: defaultOgImage
    },
    '/template/casamiento': {
      title: 'Plantilla de Invitación de Casamiento - Ejemplo Interactivo | INVIA',
      description: 'Explorá nuestra plantilla de invitación de casamiento elegante y romántica. Personalizá todos los detalles y ve cómo queda tu invitación digital antes de crear la tuya.',
      keywords: 'plantilla casamiento, invitación boda, ejemplo casamiento, invitación digital casamiento, template boda',
      canonical: `${baseUrl}/template/casamiento`,
      ogType: 'article',
      ogImage: `${baseUrl}/og-template-casamiento.jpg`,
      noindex: true // Demo interactivo, no indexar
    },
    '/template/cumpleanos': {
      title: 'Plantilla de Invitación de Cumpleaños - Ejemplo Interactivo | INVIA',
      description: 'Descubrí nuestra plantilla de invitación de cumpleaños divertida y colorida. Personalizá todos los detalles y ve cómo queda tu invitación digital.',
      keywords: 'plantilla cumpleaños, invitación cumpleaños, ejemplo cumpleaños infantil, invitación digital cumpleaños',
      canonical: `${baseUrl}/template/cumpleanos`,
      ogType: 'article',
      ogImage: `${baseUrl}/og-template-cumpleanos.jpg`,
      noindex: true // Demo interactivo, no indexar
    },
    '/template/quince': {
      title: 'Plantilla de Invitación de 15 Años - Ejemplo Interactivo | INVIA',
      description: 'Conocé nuestra plantilla de invitación de 15 años sofisticada y única. Personalizá todos los detalles y ve cómo queda tu invitación digital.',
      keywords: 'plantilla 15 años, invitación quinceañera, ejemplo 15 años, invitación digital 15 años',
      canonical: `${baseUrl}/template/quince`,
      ogType: 'article',
      ogImage: `${baseUrl}/og-template-quince.jpg`,
      noindex: true // Demo interactivo, no indexar
    },
    '/template/babyshower': {
      title: 'Plantilla de Invitación de Baby Shower - Ejemplo Interactivo | INVIA',
      description: 'Explorá nuestra plantilla de invitación de baby shower tierna y dulce. Personalizá todos los detalles y ve cómo queda tu invitación digital.',
      keywords: 'plantilla baby shower, invitación baby shower, ejemplo baby shower, invitación digital baby shower',
      canonical: `${baseUrl}/template/babyshower`,
      ogType: 'article',
      ogImage: `${baseUrl}/og-template-babyshower.jpg`,
      noindex: true // Demo interactivo, no indexar
    }
  }
}

// Configuración SEO (se recalcula en cada acceso)
export const seoConfig = getSEOConfig()

export function getSEOData(pathname: string): SEOData {
  // Recalcular configuración para obtener BASE_URL actualizado
  const config = getSEOConfig()
  // Normalizar pathname
  const normalizedPath = pathname === '' ? '/' : pathname
  return config[normalizedPath] || config['/']
}

export function generateTitle(title: string, includeBrand: boolean = true): string {
  const brand = 'INVIA'
  return includeBrand ? `${title} | ${brand}` : title
}


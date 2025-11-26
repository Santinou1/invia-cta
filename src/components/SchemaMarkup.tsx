import { useLocation } from 'react-router-dom'

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

export default function SchemaMarkup() {
  const location = useLocation()
  const BASE_URL = getBaseUrl()

  // Schema Website (solo en landing principal)
  const websiteSchema = location.pathname === '/' ? {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'INVIA',
    description: 'Invitaciones digitales únicas, modernas e interactivas para casamientos, cumpleaños, 15 años y todo tipo de eventos.',
    url: BASE_URL,
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${BASE_URL}/search?q={search_term_string}`
      },
      'query-input': 'required name=search_term_string'
    }
  } : null

  // Schema Organization (URSIS) - en todas las páginas
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'URSIS',
    url: 'https://ursis.com.ar',
    logo: `${BASE_URL}/logo-invia-color.png`,
    sameAs: [
      // Agregar redes sociales cuando estén disponibles
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      areaServed: 'AR',
      availableLanguage: 'Spanish'
    }
  }

  // Schema Product (INVIA) - solo en landing principal
  const productSchema = location.pathname === '/' ? {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'INVIA',
    applicationCategory: 'WebApplication',
    operatingSystem: 'Web',
    description: 'Plataforma para crear invitaciones digitales únicas, modernas e interactivas para eventos especiales.',
    brand: {
      '@type': 'Brand',
      name: 'URSIS'
    },
    url: BASE_URL,
    image: `${BASE_URL}/og-image.jpg`,
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/PreOrder',
      priceCurrency: 'ARS',
      url: `${BASE_URL}/whitelist`
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      ratingCount: '1'
    }
  } : null

  // Schema BreadcrumbList - solo en páginas internas
  const breadcrumbSchema = location.pathname !== '/' ? (() => {
    const pathSegments = location.pathname.split('/').filter(Boolean)
    const breadcrumbs = [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Inicio',
        item: BASE_URL
      }
    ]

    let currentPath = ''
    pathSegments.forEach((segment, index) => {
      currentPath += `/${segment}`
      const name = segment
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ')
      
      breadcrumbs.push({
        '@type': 'ListItem',
        position: index + 2,
        name: name,
        item: `${BASE_URL}${currentPath}`
      })
    })

    return {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: breadcrumbs
    }
  })() : null

  // Schema Event (solo para plantillas de ejemplo - eventos ficticios)
  const eventSchema = location.pathname.startsWith('/template/') ? (() => {
    const templateType = location.pathname.split('/').pop()
    const eventNames: Record<string, any> = {
      'casamiento': {
        name: 'Ejemplo de Invitación de Casamiento',
        description: 'Plantilla de ejemplo de invitación digital para casamiento',
        startDate: '2025-06-15',
        eventStatus: 'https://schema.org/EventScheduled',
        eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
        location: {
          '@type': 'Place',
          name: 'Ejemplo de ubicación'
        }
      },
      'cumpleanos': {
        name: 'Ejemplo de Invitación de Cumpleaños',
        description: 'Plantilla de ejemplo de invitación digital para cumpleaños',
        startDate: '2025-04-20',
        eventStatus: 'https://schema.org/EventScheduled',
        eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
        location: {
          '@type': 'Place',
          name: 'Ejemplo de ubicación'
        }
      },
      'quince': {
        name: 'Ejemplo de Invitación de 15 Años',
        description: 'Plantilla de ejemplo de invitación digital para 15 años',
        startDate: '2025-05-10',
        eventStatus: 'https://schema.org/EventScheduled',
        eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
        location: {
          '@type': 'Place',
          name: 'Ejemplo de ubicación'
        }
      },
      'babyshower': {
        name: 'Ejemplo de Invitación de Baby Shower',
        description: 'Plantilla de ejemplo de invitación digital para baby shower',
        startDate: '2025-03-25',
        eventStatus: 'https://schema.org/EventScheduled',
        eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
        location: {
          '@type': 'Place',
          name: 'Ejemplo de ubicación'
        }
      }
    }

    const eventData = eventNames[templateType || '']
    if (!eventData) return null

    return {
      '@context': 'https://schema.org',
      '@type': 'Event',
      ...eventData,
      organizer: {
        '@type': 'Organization',
        name: 'INVIA',
        url: BASE_URL
      }
    }
  })() : null

  const schemas = [
    websiteSchema,
    organizationSchema,
    productSchema,
    breadcrumbSchema,
    eventSchema
  ].filter(Boolean)

  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema, null, 2) }}
        />
      ))}
    </>
  )
}


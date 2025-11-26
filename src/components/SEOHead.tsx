import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { getSEOData } from '../utils/seo'

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

export default function SEOHead() {
  const location = useLocation()
  const seoData = getSEOData(location.pathname)

  useEffect(() => {
    // Obtener BASE_URL una sola vez
    const baseUrl = getBaseUrl()
    
    // Actualizar title
    document.title = seoData.title

    // Actualizar o crear meta description
    let metaDescription = document.querySelector('meta[name="description"]')
    if (!metaDescription) {
      metaDescription = document.createElement('meta')
      metaDescription.setAttribute('name', 'description')
      document.head.appendChild(metaDescription)
    }
    metaDescription.setAttribute('content', seoData.description)

    // Actualizar o crear meta keywords
    if (seoData.keywords) {
      let metaKeywords = document.querySelector('meta[name="keywords"]')
      if (!metaKeywords) {
        metaKeywords = document.createElement('meta')
        metaKeywords.setAttribute('name', 'keywords')
        document.head.appendChild(metaKeywords)
      }
      metaKeywords.setAttribute('content', seoData.keywords)
    }

    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      document.head.appendChild(canonical)
    }
    canonical.setAttribute('href', seoData.canonical || `${baseUrl}${location.pathname}`)

    // Robots meta
    if (seoData.noindex || seoData.nofollow) {
      let robots = document.querySelector('meta[name="robots"]')
      if (!robots) {
        robots = document.createElement('meta')
        robots.setAttribute('name', 'robots')
        document.head.appendChild(robots)
      }
      const content = [
        seoData.noindex ? 'noindex' : 'index',
        seoData.nofollow ? 'nofollow' : 'follow'
      ].join(', ')
      robots.setAttribute('content', content)
    }

    // Open Graph
    const ogTags = {
      'og:title': seoData.title,
      'og:description': seoData.description,
      'og:url': seoData.canonical || `${baseUrl}${location.pathname}`,
      'og:type': seoData.ogType || 'website',
      'og:image': seoData.ogImage || `${baseUrl}/og-image.jpg`,
      'og:site_name': 'INVIA',
      'og:locale': 'es_AR'
    }

    Object.entries(ogTags).forEach(([property, content]) => {
      let ogTag = document.querySelector(`meta[property="${property}"]`)
      if (!ogTag) {
        ogTag = document.createElement('meta')
        ogTag.setAttribute('property', property)
        document.head.appendChild(ogTag)
      }
      ogTag.setAttribute('content', content)
    })

    // Twitter Card
    const twitterTags = {
      'twitter:card': 'summary_large_image',
      'twitter:title': seoData.title,
      'twitter:description': seoData.description,
      'twitter:image': seoData.ogImage || `${baseUrl}/og-image.jpg`
    }

    Object.entries(twitterTags).forEach(([name, content]) => {
      let twitterTag = document.querySelector(`meta[name="${name}"]`)
      if (!twitterTag) {
        twitterTag = document.createElement('meta')
        twitterTag.setAttribute('name', name)
        document.head.appendChild(twitterTag)
      }
      twitterTag.setAttribute('content', content)
    })
  }, [location.pathname, seoData])

  return null
}


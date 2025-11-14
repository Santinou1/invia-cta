// API Configuration
const API_CONFIG = {
  baseURL: (() => {
    const nodeEnv = import.meta.env.VITE_NODE_ENV
    const prodUrl = import.meta.env.VITE_API_URL_PRODUCTION
    const localUrl = import.meta.env.VITE_API_URL_LOCAL
    
    
    // Fallback values
    const fallbackProdUrl = 'https://your-production-domain.com/api'
    const fallbackLocalUrl = 'http://localhost:3000/api'
    
    if (nodeEnv === 'production') {
      return prodUrl || fallbackProdUrl
    } else {
      return localUrl || fallbackLocalUrl
    }
  })(),
  endpoints: {
    whitelist: '/whitelist/register'
  },
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  }
}

export default API_CONFIG

// API Response Types
export interface WhitelistRegistration {
  name: string
  email: string
  interestReason: string
  isEventOrganizer?: boolean
}

export interface WhitelistResponse {
  message: string
  data: {
    id: string
    name: string
    email: string
    interestReason: string
    isEventOrganizer: boolean
    createdAt: string
  }
}

export interface ApiError {
  message: string
  status?: number
}

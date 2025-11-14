// API Configuration
const API_CONFIG = {
  baseURL: import.meta.env.VITE_NODE_ENV === 'production' 
    ? import.meta.env.VITE_API_URL_PRODUCTION 
    : import.meta.env.VITE_API_URL_LOCAL,
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

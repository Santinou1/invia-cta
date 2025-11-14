import API_CONFIG, { WhitelistRegistration, WhitelistResponse } from './api'

class ApiService {
  private baseURL: string
  private timeout: number

  constructor() {
    this.baseURL = API_CONFIG.baseURL
    this.timeout = API_CONFIG.timeout
  }

  async registerToWhitelist(data: WhitelistRegistration): Promise<WhitelistResponse> {
    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), this.timeout)

    try {
      const response = await fetch(`${this.baseURL}${API_CONFIG.endpoints.whitelist}`, {
        method: 'POST',
        headers: API_CONFIG.headers,
        body: JSON.stringify(data),
        signal: controller.signal
      })

      clearTimeout(timeoutId)

      if (!response.ok) {
        let errorMessage = 'Error en el registro'
        
        switch (response.status) {
          case 409:
            errorMessage = 'Este email ya está registrado en la whitelist'
            break
          case 429:
            errorMessage = 'Demasiados intentos. Intentá de nuevo en unos minutos'
            break
          case 400:
            errorMessage = 'Por favor verificá que todos los datos sean correctos'
            break
          default:
            errorMessage = 'Ocurrió un error. Intentá de nuevo más tarde'
        }

        throw new Error(errorMessage)
      }

      const result: WhitelistResponse = await response.json()
      return result
    } catch (error) {
      clearTimeout(timeoutId)
      
      if (error instanceof Error) {
        if (error.name === 'AbortError') {
          throw new Error('La conexión tardó demasiado. Verificá tu conexión a internet')
        }
        throw error
      }
      
      throw new Error('Error de conexión. Verificá tu conexión a internet')
    }
  }
}

export default new ApiService()

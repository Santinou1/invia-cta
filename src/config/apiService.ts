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

    const url = `${this.baseURL}${API_CONFIG.endpoints.whitelist}`

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: API_CONFIG.headers,
        body: JSON.stringify(data),
        signal: controller.signal
      })

      clearTimeout(timeoutId)


      // Check if response is JSON
      const contentType = response.headers.get('content-type')
      const isJson = contentType && contentType.includes('application/json')

      if (!response.ok) {
        let errorMessage = 'Error en el registro'
        
        // Try to get error message from response
        if (isJson) {
          try {
            const errorData = await response.json()
            errorMessage = errorData.message || errorMessage
          } catch (e) {
          }
        }
        
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
          case 404:
            errorMessage = 'El servicio no está disponible. Verificá la URL de la API'
            break
          default:
            errorMessage = `Error del servidor (${response.status}). Intentá de nuevo más tarde`
        }

        throw new Error(errorMessage)
      }

      if (!isJson) {
        throw new Error('El servidor respondió con un formato incorrecto. Verificá la configuración de la API')
      }

      const result: WhitelistResponse = await response.json()
      return result
    } catch (error) {
      clearTimeout(timeoutId)
      
      if (error instanceof Error) {
        if (error.name === 'AbortError') {
          throw new Error('La conexión tardó demasiado. Verificá tu conexión a internet')
        }
        
        // If it's a JSON parsing error, provide more context
        if (error.message.includes('JSON')) {
          throw new Error('El servidor respondió con un formato incorrecto. Verificá que la API esté funcionando correctamente')
        }
        
        throw error
      }
      
      throw new Error('Error de conexión. Verificá tu conexión a internet')
    }
  }
}

export default new ApiService()

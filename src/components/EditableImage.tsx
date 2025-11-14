import { useState } from 'react'
import { Edit2, X, Check } from 'lucide-react'

interface EditableImageProps {
  src: string
  alt: string
  onSave: (newSrc: string) => void
  className?: string
  containerClassName?: string
}

export function EditableImage({
  src,
  alt,
  onSave,
  className = '',
  containerClassName = ''
}: EditableImageProps) {
  const [isEditing, setIsEditing] = useState(false)
  const [newUrl, setNewUrl] = useState(src)
  const [showEditButton, setShowEditButton] = useState(false)

  const handleSave = () => {
    if (newUrl.trim() && newUrl !== src) {
      onSave(newUrl.trim())
    }
    setIsEditing(false)
  }

  const handleCancel = () => {
    setNewUrl(src)
    setIsEditing(false)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      handleSave()
    } else if (e.key === 'Escape') {
      handleCancel()
    }
  }

  return (
    <div
      className={`${containerClassName} relative group`}
      onMouseEnter={() => setShowEditButton(true)}
      onMouseLeave={() => setShowEditButton(false)}
      onDoubleClick={() => setIsEditing(true)}
    >
      <img
        src={src}
        alt={alt}
        className={`${className} ${isEditing ? 'opacity-50' : ''}`}
      />
      
      {!isEditing && showEditButton && (
        <button
          onClick={() => setIsEditing(true)}
          className="absolute top-4 right-4 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all transform hover:scale-110"
          title="Doble click para cambiar imagen"
        >
          <Edit2 className="w-5 h-5 text-gray-700" />
        </button>
      )}

      {isEditing && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/50 p-4">
          <div className="bg-white rounded-xl p-6 max-w-md w-full shadow-2xl">
            <h3 className="text-lg font-bold mb-3 text-gray-900">Cambiar URL de imagen</h3>
            <input
              type="url"
              value={newUrl}
              onChange={(e) => setNewUrl(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="https://ejemplo.com/imagen.jpg"
              className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none mb-4"
              autoFocus
            />
            <div className="flex gap-2">
              <button
                onClick={handleSave}
                className="flex-1 bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors"
              >
                <Check className="w-4 h-4" />
                Guardar
              </button>
              <button
                onClick={handleCancel}
                className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-700 py-2 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors"
              >
                <X className="w-4 h-4" />
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

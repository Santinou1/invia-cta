import { useState, useRef, useEffect } from 'react'

interface UseEditableFieldProps {
  initialValue: string
  onSave: (value: string) => void
  multiline?: boolean
}

export function useEditableField({ initialValue, onSave, multiline = false }: UseEditableFieldProps) {
  const [isEditing, setIsEditing] = useState(false)
  const [value, setValue] = useState(initialValue)
  const inputRef = useRef<HTMLInputElement | HTMLTextAreaElement>(null)

  useEffect(() => {
    setValue(initialValue)
  }, [initialValue])

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus()
      // Seleccionar todo el texto
      if (inputRef.current instanceof HTMLInputElement || inputRef.current instanceof HTMLTextAreaElement) {
        inputRef.current.select()
      }
    }
  }, [isEditing])

  const handleDoubleClick = () => {
    setIsEditing(true)
  }

  const handleSave = () => {
    setIsEditing(false)
    if (value.trim() !== initialValue) {
      onSave(value.trim())
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !multiline) {
      e.preventDefault()
      handleSave()
    } else if (e.key === 'Escape') {
      setValue(initialValue)
      setIsEditing(false)
    }
  }

  const handleBlur = () => {
    handleSave()
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValue(e.target.value)
  }

  return {
    isEditing,
    value,
    inputRef,
    handleDoubleClick,
    handleKeyDown,
    handleBlur,
    handleChange,
  }
}

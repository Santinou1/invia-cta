import { useEditableField } from '../hooks/useEditableField'
import { Edit2 } from 'lucide-react'

interface EditableFieldProps {
  value: string
  onSave: (value: string) => void
  multiline?: boolean
  className?: string
  inputClassName?: string
  placeholder?: string
  as?: 'span' | 'div' | 'h1' | 'h2' | 'h3' | 'p'
  showEditIcon?: boolean
}

export function EditableField({
  value,
  onSave,
  multiline = false,
  className = '',
  inputClassName = '',
  placeholder = 'Escribí aquí...',
  as: Component = 'span',
  showEditIcon = true
}: EditableFieldProps) {
  const {
    isEditing,
    value: currentValue,
    inputRef,
    handleDoubleClick,
    handleKeyDown,
    handleBlur,
    handleChange,
  } = useEditableField({ initialValue: value, onSave, multiline })

  if (isEditing) {
    if (multiline) {
      return (
        <textarea
          ref={inputRef as React.RefObject<HTMLTextAreaElement>}
          value={currentValue}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          onBlur={handleBlur}
          placeholder={placeholder}
          className={`${inputClassName} border-2 border-blue-400 rounded-lg px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none`}
          rows={3}
        />
      )
    }

    return (
      <input
        ref={inputRef as React.RefObject<HTMLInputElement>}
        type="text"
        value={currentValue}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        onBlur={handleBlur}
        placeholder={placeholder}
        className={`${inputClassName} border-2 border-blue-400 rounded-lg px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500`}
      />
    )
  }

  return (
    <Component
      onDoubleClick={handleDoubleClick}
      className={`${className} cursor-pointer relative group transition-all hover:bg-blue-50/50 rounded px-1`}
      title="Doble click para editar"
    >
      {currentValue || placeholder}
      {showEditIcon && (
        <Edit2 className="inline-block ml-2 w-4 h-4 opacity-0 group-hover:opacity-50 transition-opacity" />
      )}
    </Component>
  )
}

import { ChevronDown } from 'lucide-react'

export default function FAQSection() {
  const faqs = [
    {
      question: '¿Cuánto cuesta INVIA?',
      answer: 'Durante el lanzamiento, los primeros usuarios de la whitelist tendrán acceso a planes con beneficios y descuentos exclusivos. Te avisaremos los detalles cuando estemos listos para lanzar.'
    },
    {
      question: '¿Necesito saber de diseño para usar INVIA?',
      answer: 'Para nada. INVIA está diseñado para que cualquier persona pueda crear invitaciones hermosas sin necesidad de experiencia en diseño. Las plantillas ya vienen listas, solo tenés que personalizarlas con tus datos.'
    },
    {
      question: '¿Cómo comparto las invitaciones con mis invitados?',
      answer: 'Podés compartir tu invitación de múltiples formas: enviándola directamente por WhatsApp, por email, o generando un código QR para imprimir. Tus invitados podrán verla desde cualquier dispositivo.'
    },
    {
      question: '¿Puedo editar la invitación después de crearla?',
      answer: 'Sí, podés editar tu invitación todas las veces que quieras. Los cambios se reflejan en tiempo real para todos tus invitados.'
    }
  ]

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Preguntas frecuentes
          </h2>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <details 
              key={index}
              className="group bg-violet-50 rounded-2xl p-6 hover:bg-violet-100 transition-colors"
            >
              <summary className="flex justify-between items-center cursor-pointer list-none">
                <h3 className="text-lg font-bold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                <ChevronDown className="w-5 h-5 text-violet-600 group-open:rotate-180 transition-transform flex-shrink-0" />
              </summary>
              <p className="mt-4 text-gray-600 leading-relaxed">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}


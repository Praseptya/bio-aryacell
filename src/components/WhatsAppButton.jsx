import { MessageCircle } from 'lucide-react'
import { waLink } from '../data/businessData'

export default function WhatsAppButton() {
  return (
    <a href={waLink} target="_blank" rel="noopener noreferrer" aria-label="Chat WhatsApp Arya Cell"
      className="fixed bottom-5 right-5 z-40 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-lg transition hover:scale-105">
      <MessageCircle size={26} />
    </a>
  )
}

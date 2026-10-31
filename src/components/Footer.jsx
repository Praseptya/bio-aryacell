import { Smartphone, MapPin, Phone, Clock } from 'lucide-react'
import { business, navLinks } from '../data/businessData'

export default function Footer() {
  return (
    <footer className="bg-navy text-white/80">
      <div className="container-x grid gap-10 py-14 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3 text-white">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-white/10"><Smartphone size={20} /></span>
            <span className="font-extrabold tracking-wide">ARYA CELL</span>
          </div>
          <p className="mt-4 text-sm leading-relaxed">Agen BRILink dan konter handphone di Situ Ilir, Cibungbulang, Kabupaten Bogor.</p>
        </div>
        <nav aria-label="Navigasi footer">
          <h3 className="font-bold text-white">Navigasi</h3>
          <ul className="mt-4 space-y-2 text-sm">{navLinks.map((l) => <li key={l.href}><a href={l.href} className="transition hover:text-white">{l.label}</a></li>)}</ul>
        </nav>
        <ul className="space-y-3 text-sm">
          <li className="flex gap-3"><MapPin size={18} className="mt-0.5 shrink-0" />{business.address}</li>
          <li className="flex gap-3"><Phone size={18} className="shrink-0" /><a href={business.phoneHref}>{business.phone}</a></li>
          <li className="flex gap-3"><Clock size={18} className="shrink-0" />Setiap hari, 08.00–22.00</li>
        </ul>
      </div>
      <p className="border-t border-white/10 py-5 text-center text-xs">© 2026 Arya Cell. All Rights Reserved.</p>
    </footer>
  )
}

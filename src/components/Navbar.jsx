import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import LogoMark from './LogoMark'
import { business, navLinks, waLink } from '../data/businessData'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-50 border-b border-navy/10 bg-white/95 backdrop-blur">
      <nav className="container-x flex h-16 items-center justify-between" aria-label="Navigasi utama">
        <a href="#beranda" className="flex items-center gap-3">
          <LogoMark className="h-10 w-10" />
          <span className="leading-tight">
            <span className="block text-base font-extrabold tracking-wide text-navy">ARYA CELL</span>
            <span className="block text-[11px] text-muted">{business.subtitle}</span>
          </span>
        </a>
        <ul className="hidden items-center gap-7 lg:flex">
          {navLinks.map((l) => <li key={l.href}><a href={l.href} className="text-sm font-medium text-ink transition hover:text-brand">{l.label}</a></li>)}
          <li><a href={waLink} target="_blank" rel="noopener noreferrer" className="btn-accent !py-2.5">Hubungi Kami</a></li>
        </ul>
        <button className="rounded-lg p-2 text-navy lg:hidden" onClick={() => setOpen(!open)} aria-expanded={open} aria-label={open ? 'Tutup menu' : 'Buka menu'}>
          {open ? <X /> : <Menu />}
        </button>
      </nav>
      {open && (
        <div className="border-t border-navy/10 bg-white lg:hidden">
          <ul className="container-x flex flex-col gap-1 py-3">
            {navLinks.map((l) => <li key={l.href}><a href={l.href} onClick={() => setOpen(false)} className="block rounded-lg px-3 py-3 font-medium hover:bg-surface">{l.label}</a></li>)}
            <li className="pt-2"><a href={waLink} target="_blank" rel="noopener noreferrer" className="btn-accent w-full">Hubungi Kami</a></li>
          </ul>
        </div>
      )}
    </header>
  )
}

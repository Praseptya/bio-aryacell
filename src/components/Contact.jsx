import { MessageCircle, Phone } from 'lucide-react'
import { business, waLink } from '../data/businessData'
import Reveal from './Reveal'

export default function Contact() {
  return (
    <section className="section-y">
      <Reveal className="container-x">
        <div className="rounded-3xl bg-navy px-6 py-12 text-center text-white sm:px-12 sm:py-16">
          <h2 className="mx-auto max-w-2xl text-3xl font-extrabold tracking-tight sm:text-4xl">Butuh Informasi atau Ingin Melakukan Transaksi?</h2>
          <p className="mx-auto mt-4 max-w-xl text-white/75">Hubungi Arya Cell untuk mendapatkan informasi mengenai layanan dan kebutuhan transaksi Anda.</p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a href={waLink} target="_blank" rel="noopener noreferrer" className="btn-accent"><MessageCircle size={18} />WhatsApp Sekarang</a>
            <a href={business.phoneHref} className="btn-ghost"><Phone size={18} />Telepon Kami</a>
          </div>
        </div>
      </Reveal>
    </section>
  )
}

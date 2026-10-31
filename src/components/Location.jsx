import { Navigation, Phone } from 'lucide-react'
import { business } from '../data/businessData'
import Reveal from './Reveal'

export default function Location() {
  return (
    <section id="lokasi" className="section-y bg-white">
      <Reveal className="container-x grid items-center gap-10 lg:grid-cols-2">
        <div>
          <h2 className="h2">Kunjungi Arya Cell</h2>
          <address className="mt-5 text-base not-italic leading-relaxed text-muted sm:text-lg">{business.address}</address>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href={business.mapsUrl} target="_blank" rel="noopener noreferrer" className="btn-accent"><Navigation size={18} />Petunjuk Arah</a>
            <a href={business.phoneHref} className="btn-outline"><Phone size={18} />Hubungi Kami</a>
          </div>
        </div>
        <iframe title="Peta lokasi Arya Cell di Google Maps" src={business.mapsEmbed} loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="h-80 w-full rounded-2xl border-0 shadow-soft sm:h-96" />
      </Reveal>
    </section>
  )
}

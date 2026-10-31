import { ImageOff } from 'lucide-react'
import { gallery } from '../data/businessData'
import Reveal from './Reveal'

export default function Gallery() {
  return (
    <section id="galeri" className="section-y bg-white">
      <div className="container-x">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="h2">Galeri</h2>
          <p className="mt-4 text-muted">Suasana toko dan area layanan Arya Cell.</p>
        </Reveal>
        <Reveal className="mt-12 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
          {gallery.map(({ title, src }, i) => (
            <figure key={title} className={`overflow-hidden rounded-2xl bg-surface ${i === 0 ? 'col-span-2 row-span-2' : ''}`}>
              {src ? (
                <img src={src} alt={title} loading="lazy" className="h-full min-h-44 w-full object-cover" />
              ) : (
                <div role="img" aria-label={`Placeholder: ${title}`} className="flex h-full min-h-44 flex-col items-center justify-center gap-2 border-2 border-dashed border-navy/15 p-4 text-center text-muted">
                  <ImageOff size={24} /><span className="text-xs font-medium">{title}</span><span className="text-[11px]">Foto akan ditambahkan</span>
                </div>
              )}
            </figure>
          ))}
        </Reveal>
      </div>
    </section>
  )
}

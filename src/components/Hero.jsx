import { BadgeCheck, CalendarCheck, MapPin, Star, MessageCircle } from 'lucide-react'
import { business, waLinkBrilink } from '../data/businessData'

const info = [{ icon: BadgeCheck, text: 'Transfer dan Tarik Tunai' }, { icon: CalendarCheck, text: 'Buka Setiap Hari' }, { icon: MapPin, text: 'Situ Ilir, Cibungbulang' }]

export default function Hero() {
  return (
    <section id="beranda" className="bg-white">
      <div className="container-x grid items-center gap-10 py-12 sm:py-20 lg:grid-cols-2 lg:gap-14">
        <div>
          <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight text-navy sm:text-5xl">Transfer, Tarik Tunai, dan Kebutuhan Digital Anda, Lebih Mudah di Arya Cell.</h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg">Agen BRILink di Cibungbulang untuk transfer antarbank dan tarik tunai, ditambah pulsa, paket data, dan aksesori handphone dalam satu tempat.</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href={waLinkBrilink} target="_blank" rel="noopener noreferrer" className="btn-accent"><MessageCircle size={18} />Tanya Layanan BRILink via WhatsApp</a>
            <a href="#layanan" className="btn-outline">Lihat Layanan</a>
          </div>
          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
            {info.map(({ icon: Icon, text }) => <li key={text} className="flex items-center gap-2 text-sm font-medium text-ink"><Icon size={18} className="text-brand" />{text}</li>)}
          </ul>
        </div>
        <div className="relative">
          <img src={business.photo} alt="Tampak depan toko Arya Cell, Agen BRILink di Cibungbulang" className="aspect-[4/3] w-full rounded-2xl object-cover shadow-soft" />
          <div className="absolute left-4 top-4 flex items-center gap-2 rounded-xl bg-accent px-4 py-2 text-sm font-bold text-white shadow-soft"><BadgeCheck size={16} />Agen BRILink</div>
          <div className="absolute -bottom-4 left-4 flex items-center gap-2 rounded-xl bg-white px-4 py-3 text-sm font-semibold text-navy shadow-soft">
            <Star size={16} className="fill-accent text-accent" />{business.rating}
          </div>
        </div>
      </div>
    </section>
  )
}

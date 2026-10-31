import { business } from '../data/businessData'
import Reveal from './Reveal'

export default function About() {
  return (
    <section id="tentang" className="section-y bg-white">
      <Reveal className="container-x grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <img src={business.photo} alt="Toko Arya Cell di Situ Ilir, Cibungbulang" className="aspect-[4/3] w-full rounded-2xl object-cover shadow-soft" />
        <div>
          <h2 className="h2">Lebih Dekat, Lebih Praktis.</h2>
          <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">Arya Cell merupakan toko lokal yang berlokasi di Situ Ilir, Cibungbulang, Kabupaten Bogor. Kami hadir untuk membantu memenuhi kebutuhan komunikasi dan transaksi digital masyarakat melalui layanan Agen BRILink dan konter handphone.</p>
        </div>
      </Reveal>
    </section>
  )
}

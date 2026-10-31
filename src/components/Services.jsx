import { ArrowRight, BadgeCheck } from 'lucide-react'
import { brilinkServices, counterServices, waLinkBrilink } from '../data/businessData'
import Reveal from './Reveal'

export default function Services() {
  return (
    <section id="layanan" className="section-y">
      <div className="container-x">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="h2">Layanan untuk Kebutuhan Sehari-hari</h2>
          <p className="mt-4 text-muted">Berbagai kebutuhan komunikasi dan transaksi digital dapat dilakukan dengan lebih praktis di Arya Cell.</p>
        </Reveal>

        <Reveal className="mt-12 overflow-hidden rounded-3xl bg-navy p-6 text-white sm:p-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_1.3fr] lg:items-center">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-accent px-3.5 py-1.5 text-sm font-bold"><BadgeCheck size={16} />Agen BRILink</span>
              <h3 className="mt-4 text-2xl font-extrabold tracking-tight sm:text-3xl">Transfer dan tarik tunai langsung di Arya Cell.</h3>
              <p className="mt-3 text-white/75">Layanan transaksi keuangan melalui Agen BRILink. Hubungi kami untuk menanyakan kebutuhan transaksi Anda.</p>
              <a href={waLinkBrilink} target="_blank" rel="noopener noreferrer" className="btn-accent mt-6">Tanya via WhatsApp<ArrowRight size={18} /></a>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {brilinkServices.map(({ icon: Icon, title, desc }) => (
                <article key={title} className="rounded-2xl bg-white p-6 text-ink transition duration-300 hover:-translate-y-1">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-accent/10 text-accent"><Icon size={24} /></span>
                  <h4 className="mt-4 text-lg font-bold text-navy">{title}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{desc}</p>
                </article>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal className="mt-14">
          <h3 className="text-xl font-extrabold text-navy">Layanan Konter</h3>
          <div className="mt-6 grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-4">
            {counterServices.map(({ icon: Icon, title, desc }) => (
              <article key={title} className="group rounded-2xl bg-white p-4 shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-6">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand/10 text-brand transition group-hover:bg-brand group-hover:text-white"><Icon size={22} /></span>
                <h4 className="mt-4 text-sm font-bold text-navy sm:text-base">{title}</h4>
                <p className="mt-2 text-xs leading-relaxed text-muted sm:text-sm">{desc}</p>
              </article>
            ))}
          </div>
        </Reveal>
        <p className="mt-8 text-center text-sm text-muted">Ketersediaan layanan dan rincian lainnya dapat dikonfirmasi melalui WhatsApp.</p>
      </div>
    </section>
  )
}

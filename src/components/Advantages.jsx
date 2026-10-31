import { advantages } from '../data/businessData'
import Reveal from './Reveal'

export default function Advantages() {
  return (
    <section className="section-y">
      <div className="container-x">
        <Reveal><h2 className="h2 text-center">Mengapa Memilih Arya Cell?</h2></Reveal>
        <Reveal className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {advantages.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-navy/10 bg-white p-6">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-accent/10 text-accent"><Icon size={22} /></span>
              <h3 className="mt-5 font-bold text-navy">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{desc}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}

import { Clock } from 'lucide-react'
import { hours } from '../data/businessData'
import Reveal from './Reveal'

export default function OperatingHours() {
  return (
    <section className="section-y">
      <Reveal className="container-x">
        <div className="mx-auto max-w-xl overflow-hidden rounded-2xl bg-white shadow-soft">
          <div className="flex items-center gap-4 bg-navy p-6 text-white">
            <span className="grid h-12 w-12 place-items-center rounded-xl bg-white/10"><Clock /></span>
            <div><h2 className="text-xl font-extrabold">Jam Operasional</h2><p className="text-sm text-white/70">Buka Setiap Hari</p></div>
          </div>
          <dl className="divide-y divide-navy/10 px-6">
            {hours.map(({ day, time }) => (
              <div key={day} className="flex justify-between py-3.5 text-sm"><dt className="font-medium text-ink">{day}</dt><dd className="font-semibold text-navy">{time}</dd></div>
            ))}
          </dl>
        </div>
      </Reveal>
    </section>
  )
}

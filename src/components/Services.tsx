import { BedDouble, Check, Palette, Sofa, Home } from 'lucide-react'
import { services } from '../data'

const icons = [Sofa, Home, BedDouble, Palette]

export default function Services() {
  return (
    <section id="services" className="bg-ink py-24 text-cream">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-brand">Services</p>
          <h2 className="font-display text-3xl md:text-5xl">Styling for every campaign</h2>
          <p className="mt-4 text-cream/60">
            From a single consultation to a full turn-key fit-out, we scale to the
            property and the market.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => {
            const Icon = icons[i % icons.length]
            return (
              <article
                key={s.title}
                className="rounded-2xl border border-cream/10 bg-cream/5 p-6 transition-colors hover:border-brand/60"
              >
                <Icon size={26} className="text-brand" strokeWidth={1.5} />
                <h3 className="font-display mt-4 text-xl">{s.title}</h3>
                <p className="mt-2 text-sm text-cream/60">{s.blurb}</p>
                <ul className="mt-4 space-y-2">
                  {s.includes.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-cream/75">
                      <Check size={15} className="mt-0.5 shrink-0 text-brand" />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

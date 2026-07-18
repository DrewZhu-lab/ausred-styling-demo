import { featuredComparison, projects, stats } from '../data'
import BeforeAfter from './BeforeAfter'

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-brand">Our Work</p>
          <h2 className="font-display text-3xl md:text-5xl">Results you can walk through</h2>
          <p className="mt-4 text-ink/70">
            Every campaign is styled to the buyer profile of its suburb — then measured
            against the sale.
          </p>
        </div>

        <div className="mt-12 grid gap-8 text-center sm:grid-cols-3">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="font-display text-4xl text-brand md:text-5xl">{s.value}</p>
              <p className="mt-2 text-sm text-ink/60">{s.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-14">
          <BeforeAfter image={featuredComparison.img} />
          <p className="mt-3 text-center text-sm text-ink/50">
            Drag to compare — {featuredComparison.suburb} terrace, styled for auction
            (demo imagery)
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <figure key={p.suburb + p.type} className="group relative overflow-hidden rounded-2xl">
              <img
                src={p.img}
                alt={`${p.suburb} — ${p.type}`}
                loading="lazy"
                className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/80 to-transparent p-5 pt-12 text-white">
                <p className="font-display text-lg">{p.suburb}</p>
                <p className="text-xs text-white/75">{p.type}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

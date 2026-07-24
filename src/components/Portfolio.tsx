import { featuredComparison, stylePreviews } from '../data'
import BeforeAfter from './BeforeAfter'

export default function Portfolio() {
  return (
    <section id="portfolio" className="pb-24 pt-4">
      <div className="mx-auto max-w-6xl px-6">
        <div>
          <BeforeAfter image={featuredComparison.img} />
          <p className="mt-3 text-center text-sm text-ink/50">
            Drag to compare — every style begins with the same room (demo imagery)
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {stylePreviews.map((s) => (
            <figure key={s.name} className="group relative overflow-hidden rounded-t-[9rem] rounded-b-2xl">
              <img
                src={s.img}
                alt={`${s.name} styling`}
                loading="lazy"
                className="aspect-[3/4] w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/85 to-transparent p-5 pt-14 text-white">
                <p className="font-display text-2xl">{s.name}</p>
                <p className="mt-1 text-xs text-white/75">{s.blurb}</p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {s.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-white/30 px-2.5 py-0.5 text-[10px] text-white/80"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

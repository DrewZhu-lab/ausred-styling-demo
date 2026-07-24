import { Link } from 'react-router-dom'
import { stylePreviews } from '../data'

export default function FeaturedWork() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-brand">
            Signature Styles
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {stylePreviews.slice(0, 3).map((s) => (
            <figure key={s.name} className="group relative overflow-hidden rounded-t-[9rem] rounded-b-2xl">
              <img
                src={s.img}
                alt={`${s.name} styling`}
                loading="lazy"
                className="aspect-[3/4] w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/80 to-transparent p-5 pt-14 text-white">
                <p className="font-display text-2xl">{s.name}</p>
                <p className="mt-1 text-xs text-white/75">{s.blurb}</p>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/gallery"
            className="inline-block rounded-full border border-ink/20 px-8 py-3 font-medium text-ink transition-colors hover:border-brand hover:text-brand"
          >
            Explore all six styles
          </Link>
        </div>
      </div>
    </section>
  )
}

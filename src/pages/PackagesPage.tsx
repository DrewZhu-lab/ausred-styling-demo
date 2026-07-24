import { Check } from 'lucide-react'
import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import CTABand from '../components/CTABand'
import { useLang } from '../i18n'

export default function PackagesPage() {
  const { t } = useLang()
  return (
    <main className="pt-2">
      <PageHeader eyebrow={t.packages.eyebrow} title={t.packages.title} intro={t.packages.intro} />
      <section className="pb-24">
        <div className="mx-auto grid max-w-6xl gap-6 px-6 sm:grid-cols-2 lg:grid-cols-4">
          {t.packages.items.map((p) => (
            <article
              key={p.name}
              className={`flex flex-col rounded-2xl border p-6 transition-shadow hover:shadow-md ${
                p.featured ? 'border-brand bg-linen shadow-sm' : 'border-ink/10 bg-linen'
              }`}
            >
              {p.featured && (
                <span className="mb-3 self-start rounded-full bg-brand px-3 py-1 text-xs font-medium text-white">
                  {t.packages.mostPopular}
                </span>
              )}
              <h2 className="font-display text-2xl">{p.name}</h2>
              <p className="mt-1 text-xs uppercase tracking-[0.2em] text-ink/50">{p.tagline}</p>
              <p className="mt-3 text-sm text-ink/65">{p.blurb}</p>
              <ul className="mt-4 flex-1 space-y-2">
                {p.includes.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-ink/75">
                    <Check size={15} className="mt-0.5 shrink-0 text-brand" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className={`mt-6 rounded-full px-5 py-2.5 text-center text-sm font-medium transition-colors ${
                  p.featured
                    ? 'bg-brand text-white hover:bg-brand-dark'
                    : 'border border-ink/20 text-ink hover:border-brand hover:text-brand'
                }`}
              >
                {t.packages.quoteBtn}
              </Link>
            </article>
          ))}
        </div>
        <p className="mx-auto mt-10 max-w-2xl px-6 text-center text-sm text-ink/50">
          {t.packages.footnote}
        </p>
      </section>
      <CTABand />
    </main>
  )
}

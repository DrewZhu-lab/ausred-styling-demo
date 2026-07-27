import { BedDouble, Check, Palette, Sofa, Home } from 'lucide-react'
import { useLang } from '../i18n'

const icons = [Sofa, Home, BedDouble, Palette]

export default function Services() {
  const { t } = useLang()
  return (
    <section id="services" className="bg-sand/45 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-brand">
            {t.services.eyebrow}
          </p>
          <h2 className="font-display text-3xl md:text-[2.75rem]">{t.services.title}</h2>
          <p className="mt-4 text-ink/60">{t.services.intro}</p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {t.services.items.map((s, i) => {
            const Icon = icons[i % icons.length]
            return (
              <article
                key={s.title}
                className="rounded-2xl border border-oak/15 bg-linen p-6 shadow-sm transition-colors hover:border-brand/50"
              >
                <Icon size={26} className="text-brand" strokeWidth={1.5} />
                <h3 className="font-display mt-4 text-xl">{s.title}</h3>
                <p className="mt-2 text-sm text-ink/60">{s.blurb}</p>
                <ul className="mt-4 space-y-2">
                  {s.includes.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-ink/75">
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

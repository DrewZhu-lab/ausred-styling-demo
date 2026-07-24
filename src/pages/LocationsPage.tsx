import { MapPin } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import CTABand from '../components/CTABand'
import { locationRegions } from '../data'
import { useLang } from '../i18n'

export default function LocationsPage() {
  const { t } = useLang()
  return (
    <main className="pt-2">
      <PageHeader eyebrow={t.locations.eyebrow} title={t.locations.title} intro={t.locations.intro} />
      <section className="pb-24">
        <div className="mx-auto grid max-w-6xl gap-6 px-6 sm:grid-cols-2 lg:grid-cols-3">
          {locationRegions.map((r) => (
            <article key={r.region} className="rounded-2xl border border-ink/10 bg-linen p-6">
              <h2 className="flex items-center gap-2 font-display text-xl">
                <MapPin size={18} className="text-brand" />
                {r.region}
              </h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {r.suburbs.map((s) => (
                  <span key={s} className="rounded-full bg-sand px-3 py-1 text-xs text-ink/70">
                    {s}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
        <p className="mx-auto mt-10 max-w-2xl px-6 text-center text-sm text-ink/50">
          {t.locations.note}
        </p>
      </section>
      <CTABand />
    </main>
  )
}

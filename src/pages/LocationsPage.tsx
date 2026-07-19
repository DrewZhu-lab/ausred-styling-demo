import { MapPin } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import CTABand from '../components/CTABand'
import { locationRegions } from '../data'

export default function LocationsPage() {
  return (
    <main className="pt-2">
      <PageHeader
        eyebrow="Locations"
        title="Styling homes across Sydney"
        intro="From the Eastern Suburbs to the Hills, our team delivers and installs across greater Sydney — with service in English and Mandarin. 我们提供中英双语服务。"
      />
      <section className="pb-24">
        <div className="mx-auto grid max-w-6xl gap-6 px-6 sm:grid-cols-2 lg:grid-cols-3">
          {locationRegions.map((r) => (
            <article key={r.region} className="rounded-2xl border border-ink/10 bg-white p-6">
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
          Not on the list? We regularly style beyond these areas — ask us about your
          suburb at a free consultation.
        </p>
      </section>
      <CTABand />
    </main>
  )
}

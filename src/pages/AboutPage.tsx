import { Eye, Leaf, Minus, Sun, Timer } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import ProcessSteps from '../components/ProcessSteps'
import CTABand from '../components/CTABand'
import { useLang } from '../i18n'

const valueIcons = [Leaf, Sun, Timer, Minus, Eye]

export default function AboutPage() {
  const { t } = useLang()
  return (
    <main className="pt-2">
      <PageHeader eyebrow={t.about.eyebrow} title={t.about.title} intro={t.about.intro} />

      <section className="bg-linen py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="font-display text-2xl leading-relaxed text-ink md:text-[1.75rem]">
            {t.story.quote}
          </p>
          <div className="mx-auto mt-8 flex items-center justify-center gap-3 text-oak">
            <span className="h-px w-10 bg-oak/40" />
            <span className="text-[9px]">◆</span>
            <span className="h-px w-10 bg-oak/40" />
          </div>
        </div>
        <div className="mx-auto mt-16 grid max-w-4xl grid-cols-2 gap-8 px-6 text-center sm:grid-cols-5">
          {t.about.values.map((label, i) => {
            const Icon = valueIcons[i % valueIcons.length]
            return (
              <div key={label} className="flex flex-col items-center gap-2">
                <Icon size={22} className="text-brand" strokeWidth={1.5} />
                <p className="text-xs font-medium uppercase tracking-[0.15em] text-ink/70">
                  {label}
                </p>
              </div>
            )
          })}
        </div>
      </section>

      <ProcessSteps />
      <CTABand />
    </main>
  )
}

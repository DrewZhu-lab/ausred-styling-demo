import { Eye, Leaf, Minus, Sun, Timer } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import ProcessSteps from '../components/ProcessSteps'
import CTABand from '../components/CTABand'

const values = [
  { icon: Leaf, label: 'Natural' },
  { icon: Sun, label: 'Bright & Airy' },
  { icon: Timer, label: 'Timeless' },
  { icon: Minus, label: 'Minimal & Refined' },
  { icon: Eye, label: 'Detail-Oriented' },
]

export default function AboutPage() {
  return (
    <main className="pt-2">
      <PageHeader
        eyebrow="About"
        title="The Vale&Co. story"
        intro="A Sydney styling studio backed by Ausred International Investment Group — pairing property market insight with timeless, liveable design."
      />

      <section className="bg-linen py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="font-display text-2xl leading-relaxed text-ink md:text-[1.75rem]">
            “At Vale&amp;Co., we believe every home deserves to tell a story. Through
            thoughtful styling and timeless design, we create spaces that feel
            effortless, welcoming, and enduring.”
          </p>
          <div className="mx-auto mt-8 flex items-center justify-center gap-3 text-oak">
            <span className="h-px w-10 bg-oak/40" />
            <span className="text-[9px]">◆</span>
            <span className="h-px w-10 bg-oak/40" />
          </div>
        </div>
        <div className="mx-auto mt-16 grid max-w-4xl grid-cols-2 gap-8 px-6 text-center sm:grid-cols-5">
          {values.map((v) => (
            <div key={v.label} className="flex flex-col items-center gap-2">
              <v.icon size={22} className="text-brand" strokeWidth={1.5} />
              <p className="text-xs font-medium uppercase tracking-[0.15em] text-ink/70">
                {v.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <ProcessSteps />
      <CTABand />
    </main>
  )
}

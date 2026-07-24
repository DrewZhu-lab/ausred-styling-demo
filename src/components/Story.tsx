import { useLang } from '../i18n'

export default function Story() {
  const { t } = useLang()
  return (
    <section id="story" className="bg-linen py-24">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <p className="mb-6 text-xs font-medium uppercase tracking-[0.3em] text-brand">
          {t.story.eyebrow}
        </p>
        <p className="font-display text-2xl leading-relaxed text-ink md:text-[1.75rem]">
          {t.story.quote}
        </p>
        <div className="mx-auto mt-8 flex items-center justify-center gap-3 text-oak">
          <span className="h-px w-10 bg-oak/40" />
          <span className="text-[9px]">◆</span>
          <span className="h-px w-10 bg-oak/40" />
        </div>
      </div>
    </section>
  )
}

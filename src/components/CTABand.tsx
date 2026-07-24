import { Link } from 'react-router-dom'
import { useLang } from '../i18n'

export default function CTABand() {
  const { t } = useLang()
  return (
    <section className="bg-ink py-20 text-center text-cream">
      <p className="px-6 text-xs font-medium uppercase tracking-[0.35em] text-cream/60">
        Style Spaces. Elevate Living. Inspire Value.
      </p>
      <h2 className="font-display mt-4 px-6 text-3xl md:text-4xl">
        {t.cta.title}
      </h2>
      <Link
        to="/contact"
        className="mt-8 inline-block rounded-full bg-brand px-8 py-3 font-medium text-white transition-colors hover:bg-brand-dark"
      >
        {t.cta.button}
      </Link>
    </section>
  )
}

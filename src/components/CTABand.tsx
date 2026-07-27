import { Link } from 'react-router-dom'
import { useLang } from '../i18n'

export default function CTABand() {
  const { t } = useLang()
  return (
    <section className="bg-brand py-20 text-center text-white">
      <p className="px-6 text-xs font-medium uppercase tracking-[0.35em] text-white/70">
        Style Spaces. Inspire Living. Elevate Value.
      </p>
      <h2 className="font-display mt-4 px-6 text-3xl md:text-4xl">
        {t.cta.title}
      </h2>
      <Link
        to="/contact"
        className="mt-8 inline-block rounded-full bg-white px-8 py-3 font-medium text-brand-dark transition-colors hover:bg-linen"
      >
        {t.cta.button}
      </Link>
    </section>
  )
}

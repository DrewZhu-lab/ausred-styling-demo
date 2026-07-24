import { Link } from 'react-router-dom'
import StyleGallery from './StyleGallery'
import { useLang } from '../i18n'

export default function FeaturedWork() {
  const { t } = useLang()
  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-brand">
            {t.featured.eyebrow}
          </p>
        </div>

        <div className="mt-12">
          <StyleGallery preview />
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/gallery"
            className="inline-block rounded-full border border-ink/20 px-8 py-3 font-medium text-ink transition-colors hover:border-brand hover:text-brand"
          >
            {t.featured.explore}
          </Link>
        </div>
      </div>
    </section>
  )
}

import { featuredComparison } from '../data'
import { useLang } from '../i18n'
import BeforeAfter from './BeforeAfter'
import StyleGallery from './StyleGallery'

export default function Portfolio() {
  const { t } = useLang()
  return (
    <section id="portfolio" className="pb-24 pt-4">
      <div className="mx-auto max-w-6xl px-6">
        <div>
          <BeforeAfter before={featuredComparison.before} after={featuredComparison.after} />
          <p className="mt-3 text-center text-sm text-ink/50">{t.gallery.baCaption}</p>
        </div>

        <div className="mt-16">
          <StyleGallery />
        </div>
      </div>
    </section>
  )
}

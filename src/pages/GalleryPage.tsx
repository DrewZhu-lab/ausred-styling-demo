import PageHeader from '../components/PageHeader'
import Portfolio from '../components/Portfolio'
import CTABand from '../components/CTABand'
import { useLang } from '../i18n'

export default function GalleryPage() {
  const { t } = useLang()
  return (
    <main className="pt-2">
      <PageHeader eyebrow={t.gallery.eyebrow} title={t.gallery.title} intro={t.gallery.intro} />
      <Portfolio />
      <CTABand />
    </main>
  )
}

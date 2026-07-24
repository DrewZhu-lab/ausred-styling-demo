import PageHeader from '../components/PageHeader'
import Portfolio from '../components/Portfolio'
import CTABand from '../components/CTABand'

export default function GalleryPage() {
  return (
    <main className="pt-2">
      <PageHeader
        eyebrow="Gallery"
        title="Our Work"
        intro="Every campaign is styled to the buyer profile of its suburb — then measured against the sale."
      />
      <Portfolio />
      <CTABand />
    </main>
  )
}

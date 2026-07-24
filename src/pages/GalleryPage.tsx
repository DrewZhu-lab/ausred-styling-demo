import PageHeader from '../components/PageHeader'
import Portfolio from '../components/Portfolio'
import CTABand from '../components/CTABand'

export default function GalleryPage() {
  return (
    <main className="pt-2">
      <PageHeader
        eyebrow="Gallery"
        title="Our Signature Styles"
        intro="Six distinct looks, each tailored to your home and the buyers in your suburb — from calm Japandi to hotel-grade Modern Luxe."
      />
      <Portfolio />
      <CTABand />
    </main>
  )
}

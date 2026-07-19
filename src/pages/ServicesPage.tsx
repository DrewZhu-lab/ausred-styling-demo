import PageHeader from '../components/PageHeader'
import Services from '../components/Services'
import ProcessSteps from '../components/ProcessSteps'
import CTABand from '../components/CTABand'

export default function ServicesPage() {
  return (
    <main className="pt-2">
      <PageHeader
        eyebrow="Services"
        title="Styling for every campaign"
        intro="From a single consultation to a full turn-key fit-out, we scale to the property and the market. Every engagement starts with a free, no-obligation consultation."
      />
      <Services />
      <ProcessSteps />
      <CTABand />
    </main>
  )
}

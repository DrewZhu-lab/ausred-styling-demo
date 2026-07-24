import PageHeader from '../components/PageHeader'
import Services from '../components/Services'
import MoodBoard from '../components/MoodBoard'
import ProcessSteps from '../components/ProcessSteps'
import CTABand from '../components/CTABand'
import { useLang } from '../i18n'

export default function ServicesPage() {
  const { t } = useLang()
  return (
    <main className="pt-2">
      <PageHeader eyebrow={t.services.eyebrow} title={t.services.title} intro={t.services.pageIntro} />
      <Services />
      <MoodBoard />
      <ProcessSteps />
      <CTABand />
    </main>
  )
}

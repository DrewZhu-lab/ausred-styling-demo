import Hero from '../components/Hero'
import Story from '../components/Story'
import FeaturedWork from '../components/FeaturedWork'
import Services from '../components/Services'
import CTABand from '../components/CTABand'

export default function Home() {
  return (
    <>
      <Hero />
      {/* 移动端首页不展示大段文字 */}
      <div className="hidden md:block">
        <Story />
      </div>
      <FeaturedWork />
      <Services />
      <CTABand />
    </>
  )
}

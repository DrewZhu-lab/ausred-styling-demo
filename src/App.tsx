import Nav from './components/Nav'
import Hero from './components/Hero'
import AIStudio from './components/AIStudio'
import Portfolio from './components/Portfolio'
import Story from './components/Story'
import Services from './components/Services'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <AIStudio />
        <Portfolio />
        <Story />
        <Services />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

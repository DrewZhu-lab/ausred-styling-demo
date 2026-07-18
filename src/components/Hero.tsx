import { useEffect, useState } from 'react'
import { heroSlides } from '../data'

export default function Hero() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % heroSlides.length), 6000)
    return () => clearInterval(t)
  }, [])

  return (
    <section id="top" className="relative h-screen min-h-[560px] overflow-hidden">
      {heroSlides.map((s, i) => (
        <div
          key={s.img}
          className={`absolute inset-0 transition-opacity duration-[1500ms] ${
            i === index ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={s.img}
            alt={s.alt}
            className={`h-full w-full object-cover ${i === index ? 'animate-kenburns' : ''}`}
          />
        </div>
      ))}
      <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-ink/30 to-ink/25" />

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center text-white">
        <p className="animate-fade-up mb-4 text-xs font-medium uppercase tracking-[0.35em] text-white/80">
          Property Styling · Sydney
        </p>
        <h1 className="animate-fade-up-delay-1 font-display max-w-3xl text-4xl leading-tight md:text-6xl">
          Homes styled to sell faster, for more
        </h1>
        <p className="animate-fade-up-delay-2 mt-5 max-w-xl text-white/85">
          AusRed Styling stages properties that buyers fall for — and with our AI Style
          Studio, you can preview your own home restyled before we lift a cushion.
        </p>
        <div className="animate-fade-up-delay-2 mt-8 flex flex-wrap justify-center gap-4">
          <a
            href="#ai-studio"
            className="rounded-full bg-brand px-7 py-3 font-medium text-white transition-colors hover:bg-brand-dark"
          >
            Preview my home with AI
          </a>
          <a
            href="#portfolio"
            className="rounded-full border border-white/60 px-7 py-3 font-medium text-white transition-colors hover:bg-white/10"
          >
            View our work
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        {heroSlides.map((s, i) => (
          <button
            key={s.img}
            onClick={() => setIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-1.5 rounded-full transition-all ${
              i === index ? 'w-8 bg-white' : 'w-4 bg-white/40 hover:bg-white/70'
            }`}
          />
        ))}
      </div>
    </section>
  )
}

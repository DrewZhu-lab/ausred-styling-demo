import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { heroSlides } from '../data'

const SLOGAN_LINES = ['Style Spaces.', 'Elevate Living.', 'Inspire Value.']
const INTRO_LIFT_MS = 2300
const INTRO_DONE_MS = 3150
const SLIDE_MS = 6000

// 开场动画每个会话只播一次（切换页面回来不重播）
let introPlayed = false

export default function Hero() {
  const [index, setIndex] = useState(0)
  // 0: intro overlay showing · 1: overlay lifting, content revealing · 2: done
  const [stage, setStage] = useState(introPlayed ? 2 : 0)

  useEffect(() => {
    if (introPlayed) return
    const t1 = window.setTimeout(() => setStage(1), INTRO_LIFT_MS)
    const t2 = window.setTimeout(() => {
      setStage(2)
      introPlayed = true
    }, INTRO_DONE_MS)
    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
    }
  }, [])

  useEffect(() => {
    if (stage < 2) return
    const t = setInterval(() => setIndex((i) => (i + 1) % heroSlides.length), SLIDE_MS)
    return () => clearInterval(t)
  }, [stage])

  return (
    <section id="top" className="relative h-screen min-h-[560px] overflow-hidden bg-ink">
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
            className={`h-full w-full object-cover ${
              i === index ? (i % 2 ? 'animate-kenburns-b' : 'animate-kenburns-a') : ''
            }`}
          />
        </div>
      ))}
      <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/30 to-ink/30" />

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center text-white">
        <p
          className={`mb-5 text-xs font-medium uppercase tracking-[0.35em] text-white/80 ${
            stage >= 1 ? 'animate-fade-in-slow' : 'opacity-0'
          }`}
          style={{ animationDelay: '0.1s' }}
        >
          Property Styling · Sydney
        </p>
        <h1 className="font-display max-w-4xl text-5xl leading-[1.08] md:text-7xl">
          {SLOGAN_LINES.map((line, i) => (
            <span key={line} className="block overflow-hidden py-[0.06em]">
              <span
                className={`block ${stage >= 1 ? 'animate-rise' : 'opacity-0'}`}
                style={{ animationDelay: `${0.15 + i * 0.18}s` }}
              >
                {line}
              </span>
            </span>
          ))}
        </h1>
        <p
          className={`mt-6 max-w-xl text-white/85 ${stage >= 1 ? 'animate-fade-in-slow' : 'opacity-0'}`}
          style={{ animationDelay: '1s' }}
        >
          Vale&amp;Co. Styling stages homes that sell faster, for more — and with our AI
          Style Studio, you can preview your own home restyled before we lift a cushion.
        </p>
        <div
          className={`mt-9 flex flex-wrap justify-center gap-4 ${
            stage >= 1 ? 'animate-fade-in-slow' : 'opacity-0'
          }`}
          style={{ animationDelay: '1.25s' }}
        >
          <Link
            to="/ai"
            className="rounded-full bg-brand px-7 py-3 font-medium text-white transition-colors hover:bg-brand-dark"
          >
            Preview my home with AI
          </Link>
          <Link
            to="/gallery"
            className="rounded-full border border-white/60 px-7 py-3 font-medium text-white transition-colors hover:bg-white/10"
          >
            View our work
          </Link>
        </div>
      </div>

      {/* 项目名角标：随幻灯片切换 */}
      {stage >= 2 && (
        <div key={`cap-${index}`} className="animate-fade-in-slow absolute bottom-9 left-8 z-10 hidden md:block">
          <p className="text-[10px] font-medium uppercase tracking-[0.4em] text-white/60">
            {heroSlides[index].caption}
          </p>
        </div>
      )}

      {/* 进度条式指示器 */}
      <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 gap-3">
        {heroSlides.map((s, i) => (
          <button
            key={s.img}
            onClick={() => setIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
            className="flex h-5 items-center"
          >
            <span className="block h-[3px] w-10 overflow-hidden rounded-full bg-white/25">
              {i === index && stage >= 2 && (
                <span key={`p-${index}`} className="animate-progress block h-full bg-white" />
              )}
            </span>
          </button>
        ))}
      </div>

      {/* 滚动提示 */}
      {stage >= 2 && (
        <div className="absolute bottom-8 right-8 z-10 hidden flex-col items-center gap-2 text-white/70 md:flex">
          <span className="text-[9px] font-medium uppercase tracking-[0.35em]">Scroll</span>
          <span className="animate-scroll-cue block h-8 w-px bg-white/60" />
        </div>
      )}

      {/* 品牌开场动画 */}
      {stage < 2 && (
        <div
          className={`absolute inset-0 z-30 flex flex-col items-center justify-center bg-ink transition-transform duration-[850ms] ease-[cubic-bezier(0.76,0,0.24,1)] ${
            stage >= 1 ? '-translate-y-full' : ''
          }`}
        >
          <p className="animate-intro-logo font-display text-5xl text-cream md:text-6xl">
            Vale&amp;Co.
          </p>
          <p
            className="animate-fade-in-slow mt-4 text-[11px] font-medium uppercase tracking-[0.6em] text-cream/70"
            style={{ animationDelay: '0.9s' }}
          >
            Styling
          </p>
        </div>
      )}
    </section>
  )
}

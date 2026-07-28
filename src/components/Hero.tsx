import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { brandLogo } from '../brand'
import { useLang } from '../i18n'

const SLOGAN_LINES = ['Style Spaces.', 'Inspire Living.', 'Elevate Value.']
const INTRO_LIFT_MS = 2300
const INTRO_DONE_MS = 3150

// 开场动画每个会话只播一次（切换页面回来不重播）
let introPlayed = false

const BASE = import.meta.env.BASE_URL

export default function Hero() {
  const { t } = useLang()
  const videoRef = useRef<HTMLVideoElement>(null)
  // 竖屏/手机加载竖版短片（9:16，人物取景），横屏加载横版
  const [portrait] = useState(
    () => window.matchMedia('(max-width: 767px), (orientation: portrait)').matches
  )
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

  // 静音视频始终允许自动播放；个别浏览器在资源加载竞态、省电模式或标签页
  // 由后台转前台时会暂停，这里做三重兜底：挂载即播、回到前台续播、首次点击触发。
  useEffect(() => {
    const play = () => videoRef.current?.play().catch(() => {})
    play()
    const resume = () => {
      if (!document.hidden) play()
    }
    const tap = () => {
      play()
      window.removeEventListener('pointerdown', tap)
    }
    document.addEventListener('visibilitychange', resume)
    window.addEventListener('pointerdown', tap)
    return () => {
      document.removeEventListener('visibilitychange', resume)
      window.removeEventListener('pointerdown', tap)
    }
  }, [])

  return (
    <section id="top" className="relative h-screen min-h-[560px] overflow-hidden bg-ink">
      {/* 背景短片：浏览器要求自动播放必须静音，右下角按钮可开启音乐 */}
      <video
        ref={videoRef}
        src={`${BASE}${portrait ? 'hero-m.mp4' : 'hero.mp4'}`}
        poster={`${BASE}${portrait ? 'hero-poster-m.jpg' : 'hero-poster.jpg'}`}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/45 via-ink/10 to-ink/5" />

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center text-white">
        {/* 移动端首屏不显示大片文字：眉题/标语/副文案仅 md 以上展示 */}
        <p
          className={`mb-5 hidden text-xs font-medium uppercase tracking-[0.35em] text-white/80 md:block ${
            stage >= 1 ? 'animate-fade-in-slow' : 'opacity-0'
          }`}
          style={{ animationDelay: '0.1s' }}
        >
          {t.hero.eyebrow}
        </p>
        <h1 className="font-display hidden max-w-4xl text-[3.125rem] leading-[1.08] md:block md:text-[4.875rem]">
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
          className={`mt-6 hidden max-w-xl text-white/85 md:block ${stage >= 1 ? 'animate-fade-in-slow' : 'opacity-0'}`}
          style={{ animationDelay: '1s' }}
        >
          {t.hero.sub}
        </p>
        <div
          className={`mt-9 flex flex-wrap justify-center gap-4 ${
            stage >= 1 ? 'animate-fade-in-slow' : 'opacity-0'
          }`}
          style={{ animationDelay: '1.25s' }}
        >
          <Link
            to="/contact"
            className="rounded-full bg-brand px-7 py-3 font-medium text-white transition-colors hover:bg-brand-dark"
          >
            {t.cta.button}
          </Link>
          <Link
            to="/gallery"
            className="rounded-full border border-white/60 px-7 py-3 font-medium text-white transition-colors hover:bg-white/10"
          >
            {t.hero.ctaWork}
          </Link>
        </div>
      </div>

      {/* 滚动提示 */}
      {stage >= 2 && (
        <div className="absolute bottom-8 left-8 z-10 hidden flex-col items-center gap-2 text-white/70 md:flex">
          <span className="text-[9px] font-medium uppercase tracking-[0.35em]">{t.hero.scroll}</span>
          <span className="animate-scroll-cue block h-8 w-px bg-white/60" />
        </div>
      )}

      {/* 品牌开场动画 */}
      {stage < 2 && (
        <div
          className={`absolute inset-0 z-30 flex flex-col items-center justify-center bg-cream transition-transform duration-[850ms] ease-[cubic-bezier(0.76,0,0.24,1)] ${
            stage >= 1 ? '-translate-y-full' : ''
          }`}
        >
          <img
            src={brandLogo}
            alt="Vale & Co. Property Styling"
            className="animate-intro-logo w-[min(78vw,360px)]"
          />
        </div>
      )}
    </section>
  )
}

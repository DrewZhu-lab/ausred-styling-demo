import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { Volume2, VolumeX } from 'lucide-react'
import { useLang } from '../i18n'

const SLOGAN_LINES = ['Style Spaces.', 'Elevate Living.', 'Inspire Value.']
const INTRO_LIFT_MS = 2300
const INTRO_DONE_MS = 3150

// 开场动画每个会话只播一次（切换页面回来不重播）
let introPlayed = false

const BASE = import.meta.env.BASE_URL

export default function Hero() {
  const { t } = useLang()
  const videoRef = useRef<HTMLVideoElement>(null)
  const audioRef = useRef<HTMLAudioElement>(null)
  const [muted, setMuted] = useState(true)
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

  // 音乐与视频解耦：音乐是独立的整首曲目循环播放，不随 18 秒视频重头。
  // 默认尝试直接播放；被浏览器拦截时，用户第一次点击页面任意处即开声。
  useEffect(() => {
    const a = audioRef.current
    if (!a) return
    const enable = (e: PointerEvent) => {
      if ((e.target as HTMLElement | null)?.closest('[data-sound-toggle]')) return
      a.play()
      // 手机省电模式会禁止自动播放视频，首次点击一并触发
      videoRef.current?.play().catch(() => {})
      setMuted(false)
      window.removeEventListener('pointerdown', enable)
    }
    // 静音视频始终允许自动播放；个别浏览器在资源加载竞态或标签页由后台转前台时会暂停，这里兜底
    videoRef.current?.play().catch(() => {})
    const resume = () => {
      if (!document.hidden) videoRef.current?.play().catch(() => {})
    }
    document.addEventListener('visibilitychange', resume)
    a.volume = 0.85
    a.play()
      .then(() => setMuted(false))
      .catch(() => {
        setMuted(true)
        window.addEventListener('pointerdown', enable)
      })
    return () => {
      window.removeEventListener('pointerdown', enable)
      document.removeEventListener('visibilitychange', resume)
      a.pause()
    }
  }, [])

  const toggleSound = () => {
    const a = audioRef.current
    if (!a) return
    if (a.paused) {
      a.play()
      setMuted(false)
    } else {
      a.pause()
      setMuted(true)
    }
  }

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
      <audio ref={audioRef} src={`${BASE}hero-music.mp3`} loop preload="none" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/25 to-ink/15" />

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
        <h1 className="font-display hidden max-w-4xl text-5xl leading-[1.08] md:block md:text-7xl">
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

      {/* 音乐开关：静音时用醒目的胶囊按钮邀请开声 */}
      {stage >= 2 &&
        (muted ? (
          <button
            data-sound-toggle
            onClick={toggleSound}
            aria-label="Unmute background music"
            className="absolute bottom-8 right-6 z-10 flex items-center gap-2.5 rounded-full bg-white/95 px-5 py-3 font-medium text-ink shadow-xl transition-transform hover:scale-105 md:right-8"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-brand" />
            </span>
            <VolumeX size={18} />
            {t.hero.musicOn}
          </button>
        ) : (
          <button
            data-sound-toggle
            onClick={toggleSound}
            aria-label="Mute background music"
            className="absolute bottom-8 right-6 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white/90 text-ink shadow-lg transition-transform hover:scale-105 md:right-8"
          >
            <Volume2 size={20} />
          </button>
        ))}

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

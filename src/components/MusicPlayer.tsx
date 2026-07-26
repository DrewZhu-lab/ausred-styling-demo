import { useEffect, useRef, useState } from 'react'
import { Volume2, VolumeX } from 'lucide-react'
import { useLang } from '../i18n'

const BASE = import.meta.env.BASE_URL
const PREF_KEY = 'valeco-music' // 'off' = 用户主动关过，不再自动播放

// 全站背景音乐：整首循环、切页不停。默认尝试直接播放；被浏览器拦截时，
// 用户在任意页面的第一次点击即自动开声（点音乐按钮除外，交给按钮处理）。
export default function MusicPlayer() {
  const { t } = useLang()
  const audioRef = useRef<HTMLAudioElement>(null)
  const [muted, setMuted] = useState(true)

  useEffect(() => {
    const a = audioRef.current
    if (!a) return
    a.volume = 0.85
    if (localStorage.getItem(PREF_KEY) === 'off') return

    const enable = (e: PointerEvent) => {
      if ((e.target as HTMLElement | null)?.closest('[data-sound-toggle]')) return
      a.play()
      setMuted(false)
      window.removeEventListener('pointerdown', enable)
    }
    a.play()
      .then(() => setMuted(false))
      .catch(() => window.addEventListener('pointerdown', enable))
    return () => {
      window.removeEventListener('pointerdown', enable)
      a.pause()
    }
  }, [])

  const toggle = () => {
    const a = audioRef.current
    if (!a) return
    if (a.paused) {
      a.play()
      setMuted(false)
      localStorage.setItem(PREF_KEY, 'on')
    } else {
      a.pause()
      setMuted(true)
      localStorage.setItem(PREF_KEY, 'off')
    }
  }

  return (
    <>
      <audio ref={audioRef} src={`${BASE}hero-music.mp3`} loop preload="none" />
      {muted ? (
        <button
          data-sound-toggle
          onClick={toggle}
          aria-label="Play background music"
          className="fixed bottom-6 right-5 z-40 flex items-center gap-2.5 rounded-full bg-white/95 px-5 py-3 font-medium text-ink shadow-xl transition-transform hover:scale-105 md:right-8 md:bottom-8"
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
          onClick={toggle}
          aria-label="Mute background music"
          className="fixed bottom-6 right-5 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-white/90 text-ink shadow-lg transition-transform hover:scale-105 md:right-8 md:bottom-8"
        >
          <Volume2 size={20} />
        </button>
      )}
    </>
  )
}

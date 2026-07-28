import { useEffect, useRef, useState } from 'react'
import { Volume2, VolumeX } from 'lucide-react'
import { useLang } from '../i18n'

const BASE = import.meta.env.BASE_URL
const DEFAULT_VOLUME = 0.18

// 全站背景音乐：每次进入网站默认尝试播放；若浏览器阻止自动播放，
// 则在用户第一次点击或按键时开始。手动暂停只在本次浏览期间生效。
export default function MusicPlayer() {
  const { t } = useLang()
  const audioRef = useRef<HTMLAudioElement>(null)
  const [muted, setMuted] = useState(false)

  useEffect(() => {
    const a = audioRef.current
    if (!a) return
    a.volume = DEFAULT_VOLUME

    const removeUnlockListeners = () => {
      window.removeEventListener('pointerdown', enable)
      window.removeEventListener('keydown', enableFromKeyboard)
    }

    const start = async () => {
      try {
        await a.play()
        setMuted(false)
        removeUnlockListeners()
      } catch {
        // The unlock listeners stay active until the browser accepts playback.
      }
    }

    const enable = (e: PointerEvent) => {
      if ((e.target as HTMLElement | null)?.closest('[data-sound-toggle]')) return
      void start()
    }

    const enableFromKeyboard = () => {
      void start()
    }

    void start()
    window.addEventListener('pointerdown', enable)
    window.addEventListener('keydown', enableFromKeyboard)

    return () => {
      removeUnlockListeners()
      a.pause()
    }
  }, [])

  const toggle = async () => {
    const a = audioRef.current
    if (!a) return
    if (a.paused) {
      try {
        await a.play()
        setMuted(false)
      } catch {
        setMuted(true)
      }
    } else {
      a.pause()
      setMuted(true)
    }
  }

  return (
    <>
      <audio ref={audioRef} src={`${BASE}hero-music.mp3`} autoPlay loop preload="auto" playsInline />
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

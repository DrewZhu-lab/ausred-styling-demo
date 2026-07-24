import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { X } from 'lucide-react'
import { styleGalleries } from '../data'
import { useLang } from '../i18n'

type Sel = { style: number; img: number } | null

// 格子图画廊 + 点击弹出风格介绍灯箱。preview 模式只显示每种风格的首图（6 格）。
export default function StyleGallery({ preview = false }: { preview?: boolean }) {
  const { t } = useLang()
  const [sel, setSel] = useState<Sel>(null)

  useEffect(() => {
    document.body.style.overflow = sel ? 'hidden' : ''
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setSel(null)
    window.addEventListener('keydown', onKey)
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [sel])

  const tiles = preview
    ? styleGalleries.map((imgs, s) => ({ style: s, img: 0, src: imgs[0] }))
    : styleGalleries.flatMap((imgs, s) => imgs.map((src, i) => ({ style: s, img: i, src })))

  const selStyle = sel ? t.styles[sel.style] : null
  const selImgs = sel ? styleGalleries[sel.style] : []

  return (
    <>
      <div className={`grid gap-3 ${preview ? 'grid-cols-2 sm:grid-cols-3' : 'grid-cols-2 md:grid-cols-3'}`}>
        {tiles.map((tile) => (
          <button
            key={`${tile.style}-${tile.img}`}
            onClick={() => setSel({ style: tile.style, img: tile.img })}
            aria-label={t.styles[tile.style].name}
            className="group relative overflow-hidden rounded-xl focus:outline-none"
          >
            <img
              src={tile.src}
              alt={t.styles[tile.style].name}
              loading="lazy"
              className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <span className="absolute inset-0 bg-ink/0 transition-colors group-hover:bg-ink/25" />
            <span className="absolute bottom-3 left-3 rounded-full bg-ink/60 px-3 py-1 font-display text-sm text-white opacity-0 backdrop-blur transition-opacity group-hover:opacity-100">
              {t.styles[tile.style].name}
            </span>
          </button>
        ))}
      </div>
      <p className="mt-4 text-center text-xs text-ink/45">{t.gallery.hint}</p>

      {sel && selStyle && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/70 p-4 backdrop-blur-sm"
          onClick={() => setSel(null)}
        >
          <div
            className="grid max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl bg-linen md:grid-cols-2"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <img
                src={selImgs[sel.img]}
                alt={selStyle.name}
                className="h-64 w-full object-cover md:h-full"
              />
              <div className="absolute bottom-3 left-3 flex gap-2">
                {selImgs.map((src, i) => (
                  <button
                    key={src}
                    onClick={() => setSel({ ...sel, img: i })}
                    aria-label={`Photo ${i + 1}`}
                    className={`h-12 w-12 overflow-hidden rounded-lg border-2 transition-opacity ${
                      i === sel.img ? 'border-white' : 'border-transparent opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img src={src} alt="" className="h-full w-full object-cover" />
                  </button>
                ))}
              </div>
            </div>
            <div className="relative p-7">
              <button
                onClick={() => setSel(null)}
                aria-label="Close"
                className="absolute right-4 top-4 text-ink/50 hover:text-ink"
              >
                <X size={20} />
              </button>
              <p className="text-xs font-medium uppercase tracking-[0.3em] text-brand">
                {t.featured.eyebrow}
              </p>
              <h3 className="font-display mt-2 text-3xl">{selStyle.name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink/70">{selStyle.desc}</p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {selStyle.tags.map((tag) => (
                  <span key={tag} className="rounded-full bg-sand px-2.5 py-1 text-xs text-ink/70">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-7 flex flex-col gap-2">
                <Link
                  to="/ai"
                  className="rounded-full bg-brand px-6 py-2.5 text-center text-sm font-medium text-white transition-colors hover:bg-brand-dark"
                >
                  {t.hero.ctaAI}
                </Link>
                <Link
                  to="/contact"
                  className="rounded-full border border-ink/20 px-6 py-2.5 text-center text-sm font-medium text-ink transition-colors hover:border-brand hover:text-brand"
                >
                  {t.cta.button}
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

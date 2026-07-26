import { Link } from 'react-router-dom'
import BeforeAfter from './BeforeAfter'
import { roomPairs } from '../data'
import { useLang } from '../i18n'

// 六个功能区，每格一个「空房 → 布置后」拖动对比。
// preview 模式（首页）只显示布置后的静态方格，点击进入 /gallery。
export default function StyleGallery({ preview = false }: { preview?: boolean }) {
  const { t } = useLang()

  if (preview) {
    return (
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        {roomPairs.map((p, i) => ({ p, i })).filter(({ i }) => i % 2 === 0).map(({ p, i }) => (
          <Link
            key={p.after}
            to="/gallery"
            aria-label={t.styles[i].name}
            className="group relative overflow-hidden rounded-xl"
          >
            <img
              src={p.after}
              alt={t.styles[i].name}
              loading="lazy"
              className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <span className="absolute inset-0 bg-ink/0 transition-colors group-hover:bg-ink/25" />
            <span className="absolute bottom-3 left-3 rounded-full bg-ink/60 px-3 py-1 font-display text-sm text-white opacity-0 backdrop-blur transition-opacity group-hover:opacity-100">
              {t.styles[i].name}
            </span>
          </Link>
        ))}
      </div>
    )
  }

  return (
    <>
      <div className="grid gap-x-8 gap-y-12 md:grid-cols-2">
        {roomPairs.map((p, i) => (
          <div key={p.after}>
            <BeforeAfter before={p.before} after={p.after} />
            <h3 className="font-display mt-4 text-2xl">{t.styles[i].name}</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-ink/65">{t.styles[i].blurb}</p>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {t.styles[i].tags.map((tag) => (
                <span key={tag} className="rounded-full bg-sand/60 px-2.5 py-1 text-xs text-ink/70">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
      <p className="mt-10 text-center text-xs text-ink/45">{t.gallery.hint}</p>
    </>
  )
}

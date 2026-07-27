import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import BeforeAfter from './BeforeAfter'
import { roomPairs, visibleStyleIndicesByRoom } from '../data'
import { useLang } from '../i18n'

// 六个功能区 × 三种公开风格，每行最后一列固定为法式。
// preview 模式（首页）只显示 6 格布置后的静态方格，点击进入 /gallery。
// 完整模式按房间分节：桌面端左侧粘性快速跳转，移动端顶部横向胶囊条。
const ROOM_IDS = ['living', 'lounge', 'dining', 'kitchen', 'bedroom', 'entryway']

export default function StyleGallery({ preview = false }: { preview?: boolean }) {
  const { t } = useLang()
  const [active, setActive] = useState(ROOM_IDS[0])

  // 首页预览每个房间 1 格，仅保留 Living 一组豪宅作为首屏代表。
  const PREVIEW_IDX = [0, 4, 8, 10, 13, 16]

  // 滚动监听：高亮当前所在房间（仅完整模式）
  useEffect(() => {
    if (preview) return
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id)
        })
      },
      { rootMargin: '-25% 0px -65% 0px' }
    )
    ROOM_IDS.forEach((id) => {
      const el = document.getElementById(id)
      if (el) obs.observe(el)
    })
    return () => obs.disconnect()
  }, [preview])

  if (preview) {
    return (
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        {PREVIEW_IDX.map((i) => ({ p: roomPairs[i], i })).map(({ p, i }) => (
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

  // HashRouter 下不能用 #anchor 链接（会被当作路由），改为程序化滚动
  const jump = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  // 按房间分组：每组 3 格，源素材索引仍与 roomPairs / t.styles 对齐。
  const groups = ROOM_IDS.map((id, g) => ({
    id,
    label: t.gallery.rooms[g],
    items: visibleStyleIndicesByRoom[g].map((i) => {
      return { pair: roomPairs[i], style: t.styles[i] }
    }),
  }))

  return (
    <div>
      {/* 窄屏：顶部横向胶囊跳转条 */}
      <div className="sticky top-16 z-30 -mx-6 mb-8 overflow-x-auto bg-cream/95 px-6 py-3 backdrop-blur min-[1400px]:hidden">
        <div className="flex w-max gap-2">
          {groups.map((g) => (
            <button
              key={g.id}
              onClick={() => jump(g.id)}
              className={`whitespace-nowrap rounded-full border px-4.5 py-2 text-[15px] transition-colors ${
                active === g.id
                  ? 'border-brand bg-brand font-medium text-white'
                  : 'border-ink/25 text-ink/70'
              }`}
            >
              {g.label}
            </button>
          ))}
        </div>
      </div>

      {/* 宽屏：左侧书签导航——品牌菱形 ◆ + 细竖线的编辑感设计 */}
      <nav
        aria-label="Room bookmarks"
        className="fixed left-10 top-1/2 z-40 hidden -translate-y-1/2 min-[1400px]:block"
      >
        <div className="relative">
          <span className="absolute bottom-3 left-[5.5px] top-3 w-px bg-oak/30" aria-hidden />
          <div className="flex flex-col gap-7">
            {groups.map((g) => (
              <button
                key={g.id}
                onClick={() => jump(g.id)}
                className="group flex items-center gap-4"
              >
                <span className="relative z-10 flex h-3 w-3 items-center justify-center">
                  <span
                    className={`block rotate-45 transition-all duration-300 ${
                      active === g.id
                        ? 'h-3 w-3 bg-brand shadow-sm'
                        : 'h-2 w-2 border border-oak/70 bg-cream group-hover:bg-oak/40'
                    }`}
                  />
                </span>
                <span
                  className={`font-display whitespace-nowrap text-[17px] tracking-wide transition-colors ${
                    active === g.id
                      ? 'text-ink'
                      : 'text-ink/45 group-hover:text-ink/80'
                  }`}
                >
                  {g.label}
                </span>
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* 分组内容 */}
      <div className="min-w-0">
        <div className="space-y-16">
          {groups.map((g) => (
            <section key={g.id} id={g.id} className="scroll-mt-36">
              <div className="mb-5 flex items-center gap-4">
                <h2 className="font-display text-2xl">{g.label}</h2>
                <span className="h-px flex-1 bg-oak/25" />
              </div>
              <div className="grid gap-x-6 gap-y-10 sm:grid-cols-2 xl:grid-cols-3">
                {g.items.map(({ pair: p, style: s }) => (
                  <div key={p.after}>
                    <BeforeAfter before={p.before} after={p.after} />
                    <h3 className="font-display mt-3.5 text-xl">{s.name}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-ink/65">{s.blurb}</p>
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {s.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-sand/60 px-2.5 py-1 text-xs text-ink/70"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  )
}

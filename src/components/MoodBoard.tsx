import { Check } from 'lucide-react'
import { brandLogo } from '../brand'
import { styleImgs } from '../data'
import { useLang } from '../i18n'

// 品牌色板与材质词保持英文（设计语言，与 slogan 同规则）
const SWATCHES = [
  { hex: '#f3ede1', name: 'Ivory' },
  { hex: '#e4d9c7', name: 'Oat' },
  { hex: '#cdbca2', name: 'Greige' },
  { hex: '#a0825f', name: 'Walnut' },
  { hex: '#7d8574', name: 'Olive' },
  { hex: '#33291d', name: 'Noir' },
]
const MATERIALS = ['Linen', 'Bouclé', 'White Oak', 'Walnut', 'Travertine', 'Marble', 'Black Steel']
const KEYWORDS = 'Warm · Timeless · Elevated · Inviting'

export default function MoodBoard() {
  const { t } = useLang()
  return (
    <section className="py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-2">
        <div>
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-brand">
            {t.moodboard.eyebrow}
          </p>
          <h2 className="font-display text-3xl md:text-4xl">{t.moodboard.title}</h2>
          <p className="mt-4 text-ink/65">{t.moodboard.body}</p>
          <ul className="mt-6 space-y-2.5">
            {t.moodboard.includes.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-sm text-ink/75">
                <Check size={16} className="mt-0.5 shrink-0 text-brand" />
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm italic text-ink/50">{t.moodboard.note}</p>
        </div>

        {/* 原生拼贴：模拟一份 Vale&Co. 提案 mood board */}
        <div className="rounded-2xl border border-oak/15 bg-linen p-5 shadow-md">
          <div className="mb-4 flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
            <img
              src={brandLogo}
              alt="Vale & Co. Property Styling"
              className="h-14 w-14 object-cover"
              loading="lazy"
            />
            <p className="text-[10px] font-medium uppercase tracking-[0.25em] text-ink/45">
              {t.moodboard.boardLabel}
            </p>
          </div>
          <div className="grid grid-cols-3 gap-3">
            <img
              src={styleImgs[0]}
              alt="Style direction"
              loading="lazy"
              className="col-span-2 row-span-2 h-full w-full rounded-xl object-cover"
            />
            <img
              src={styleImgs[4]}
              alt="Texture reference"
              loading="lazy"
              className="aspect-square w-full rounded-xl object-cover"
            />
            <div className="grid grid-cols-2 content-center gap-x-1 gap-y-2 rounded-xl bg-cream/70 p-3">
              {SWATCHES.map((s) => (
                <div key={s.name} className="flex flex-col items-center gap-1">
                  <span
                    className="h-6 w-6 rounded-full border border-ink/10"
                    style={{ backgroundColor: s.hex }}
                  />
                  <span className="text-[7px] uppercase text-ink/50">{s.name}</span>
                </div>
              ))}
            </div>
            <div className="col-span-3 rounded-xl bg-cream/70 px-4 py-3.5">
              <div className="flex flex-wrap gap-1.5">
                {MATERIALS.map((m) => (
                  <span
                    key={m}
                    className="rounded-full border border-oak/25 px-2.5 py-0.5 text-[10px] uppercase tracking-wider text-ink/60"
                  >
                    {m}
                  </span>
                ))}
              </div>
              <p className="font-display mt-3 text-sm italic text-ink/55">{KEYWORDS}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

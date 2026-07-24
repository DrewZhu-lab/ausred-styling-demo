import { useState } from 'react'

// 左右为两张真实照片：空房（before）与布置完成（after）。
export default function BeforeAfter({ before, after }: { before: string; after: string }) {
  const [pos, setPos] = useState(50)

  return (
    <div className="relative aspect-[16/9] select-none overflow-hidden rounded-2xl shadow-md">
      <img src={after} alt="After styling" className="absolute inset-0 h-full w-full object-cover" />
      <img
        src={before}
        alt="Before styling"
        className="absolute inset-0 h-full w-full object-cover"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
      />

      <span className="absolute left-4 top-4 rounded-full bg-ink/70 px-3 py-1 text-xs font-medium text-white backdrop-blur">
        Before
      </span>
      <span className="absolute right-4 top-4 rounded-full bg-brand px-3 py-1 text-xs font-medium text-white">
        After
      </span>

      <div className="pointer-events-none absolute inset-y-0 z-10 w-0.5 bg-white shadow" style={{ left: `${pos}%` }}>
        <span className="absolute left-1/2 top-1/2 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-xs font-semibold text-ink shadow-md">
          ⇔
        </span>
      </div>

      <input
        type="range"
        min={0}
        max={100}
        value={pos}
        onChange={(e) => setPos(Number(e.target.value))}
        aria-label="Compare before and after styling"
        className="absolute inset-0 z-20 h-full w-full cursor-ew-resize opacity-0"
      />
    </div>
  )
}

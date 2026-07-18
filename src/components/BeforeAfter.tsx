import { useState } from 'react'

// Both sides show the same photo; the Before half is desaturated to read as
// "unstyled". Swap for a real before/after photo pair when available.
export default function BeforeAfter({ image }: { image: string }) {
  const [pos, setPos] = useState(50)

  return (
    <div className="relative aspect-[16/9] select-none overflow-hidden rounded-2xl shadow-md">
      <img src={image} alt="After styling" className="absolute inset-0 h-full w-full object-cover" />
      <img
        src={image}
        alt="Before styling"
        className="absolute inset-0 h-full w-full object-cover grayscale brightness-90"
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

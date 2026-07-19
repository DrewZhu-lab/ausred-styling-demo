import { useEffect, useState } from 'react'

const links = [
  { href: '#ai-studio', label: 'AI Preview' },
  { href: '#portfolio', label: 'Our Work' },
  { href: '#services', label: 'Services' },
  { href: '#contact', label: 'Contact' },
]

export default function Nav() {
  const [solid, setSolid] = useState(false)

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        solid ? 'bg-cream/95 shadow-sm backdrop-blur' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className={`leading-none ${solid ? 'text-ink' : 'text-white'}`}>
          <span className="font-display text-2xl tracking-[0.06em]">Vale&amp;Co.</span>
          <span
            className={`mt-1 block text-center text-[9px] font-medium tracking-[0.5em] ${
              solid ? 'text-ink/60' : 'text-white/75'
            }`}
          >
            STYLING
          </span>
        </a>
        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-sm font-medium transition-colors ${
                solid ? 'text-ink/70 hover:text-brand' : 'text-white/85 hover:text-white'
              }`}
            >
              {l.label}
            </a>
          ))}
        </div>
        <a
          href="#contact"
          className="rounded-full bg-brand px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-brand-dark"
        >
          Free consultation
        </a>
      </nav>
    </header>
  )
}

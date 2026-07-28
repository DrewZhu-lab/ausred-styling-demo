import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { ChevronDown, Globe, Menu, X } from 'lucide-react'
import { langOptions, useLang } from '../i18n'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [langOpen, setLangOpen] = useState(false)
  const langRef = useRef<HTMLDivElement>(null)
  const { pathname } = useLocation()
  const { lang, setLang, t } = useLang()

  const links = [
    { to: '/', label: t.nav.home },
    { to: '/services', label: t.nav.services },
    { to: '/packages', label: t.nav.packages },
    { to: '/gallery', label: t.nav.gallery },
    { to: '/locations', label: t.nav.locations },
    { to: '/about', label: t.nav.about },
  ]

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setOpen(false), [pathname])

  // 点击外部关闭语言下拉
  useEffect(() => {
    const onDown = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) setLangOpen(false)
    }
    document.addEventListener('mousedown', onDown)
    return () => document.removeEventListener('mousedown', onDown)
  }, [])

  // 只有首页顶部（深色 hero 之上）用透明白字，其余一律实底深字
  const solid = scrolled || pathname !== '/' || open

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        solid ? 'bg-cream/95 shadow-sm backdrop-blur' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link to="/" className={`leading-none ${solid ? 'text-ink' : 'text-white'}`}>
          <span className="font-display text-2xl tracking-[0.06em]">Vale&amp;Co.</span>
          <span
            className={`mt-1 block text-center text-[9px] font-medium tracking-[0.5em] ${
              solid ? 'text-ink/60' : 'text-white/75'
            }`}
          >
            PROPERTY STYLING
          </span>
        </Link>

        <div className="hidden items-center gap-6 lg:flex">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors ${
                  solid
                    ? isActive
                      ? 'text-brand'
                      : 'text-ink/70 hover:text-brand'
                    : isActive
                      ? 'text-white'
                      : 'text-white/80 hover:text-white'
                } ${isActive ? 'underline decoration-brand decoration-2 underline-offset-8' : ''}`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <div ref={langRef} className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              aria-label="Select language"
              aria-expanded={langOpen}
              className={`flex items-center gap-1.5 text-sm font-medium transition-colors ${
                solid ? 'text-ink/70 hover:text-brand' : 'text-white/85 hover:text-white'
              }`}
            >
              <Globe size={15} />
              <span className="hidden sm:inline">
                {langOptions.find((o) => o.code === lang)?.label}
              </span>
              <ChevronDown size={13} className={`transition-transform ${langOpen ? 'rotate-180' : ''}`} />
            </button>
            {langOpen && (
              <ul className="absolute right-0 top-full z-50 mt-3 w-36 overflow-hidden rounded-xl border border-ink/10 bg-cream shadow-lg">
                {langOptions.map((o) => (
                  <li key={o.code}>
                    <button
                      onClick={() => {
                        setLang(o.code)
                        setLangOpen(false)
                      }}
                      className={`w-full px-4 py-2.5 text-left text-sm transition-colors ${
                        o.code === lang
                          ? 'bg-sand/60 font-medium text-brand'
                          : 'text-ink/75 hover:bg-sand/40'
                      }`}
                    >
                      {o.label}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <Link
            to="/contact"
            className="hidden rounded-full bg-brand px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-brand-dark sm:block"
          >
            {t.nav.consult}
          </Link>
          <button
            onClick={() => setOpen(!open)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            className={`lg:hidden ${solid ? 'text-ink' : 'text-white'}`}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-ink/10 bg-cream/98 px-6 pb-8 pt-4 backdrop-blur lg:hidden">
          <div className="flex flex-col gap-4">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                className={({ isActive }) =>
                  `text-base font-medium ${isActive ? 'text-brand' : 'text-ink/80'}`
                }
              >
                {l.label}
              </NavLink>
            ))}
            <div className="flex flex-wrap gap-2 pt-1">
              {langOptions.map((o) => (
                <button
                  key={o.code}
                  onClick={() => setLang(o.code)}
                  className={`rounded-full border px-3.5 py-1.5 text-xs font-medium ${
                    o.code === lang
                      ? 'border-brand bg-brand text-white'
                      : 'border-ink/20 text-ink/70'
                  }`}
                >
                  {o.label}
                </button>
              ))}
            </div>
            <Link
              to="/contact"
              className="mt-2 rounded-full bg-brand px-5 py-2.5 text-center text-sm font-medium text-white"
            >
              {t.nav.consult}
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}

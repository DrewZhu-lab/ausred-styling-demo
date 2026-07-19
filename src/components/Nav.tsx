import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const links = [
  { to: '/', label: 'Home' },
  { to: '/ai', label: 'AI Preview' },
  { to: '/services', label: 'Services' },
  { to: '/packages', label: 'Packages' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/locations', label: 'Locations' },
  { to: '/about', label: 'About' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setOpen(false), [pathname])

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
            STYLING
          </span>
        </Link>

        <div className="hidden items-center gap-7 lg:flex">
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
          <Link
            to="/contact"
            className="hidden rounded-full bg-brand px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-brand-dark sm:block"
          >
            Free consultation
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
            <Link
              to="/contact"
              className="mt-2 rounded-full bg-brand px-5 py-2.5 text-center text-sm font-medium text-white"
            >
              Free consultation
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}

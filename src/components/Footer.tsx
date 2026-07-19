export default function Footer() {
  return (
    <footer className="bg-ink text-cream/60">
      <div className="border-b border-cream/10 py-6 text-center">
        <p className="px-6 text-xs font-medium tracking-[0.35em] text-cream/80">
          STYLE SPACES. ELEVATE LIVING. INSPIRE VALUE.
        </p>
      </div>
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 py-10 text-center text-sm">
        <p className="leading-none text-cream">
          <span className="font-display text-xl tracking-[0.06em]">Vale&amp;Co.</span>
          <span className="mt-1 block text-[9px] font-medium tracking-[0.5em] text-cream/60">
            STYLING
          </span>
        </p>
        <nav className="flex flex-wrap justify-center gap-6">
          <a href="#ai-studio" className="hover:text-cream">AI Preview</a>
          <a href="#portfolio" className="hover:text-cream">Our Work</a>
          <a href="#services" className="hover:text-cream">Services</a>
          <a href="#contact" className="hover:text-cream">Contact</a>
        </nav>
        <p className="text-xs text-cream/40">
          © 2026 Vale&amp;Co. Styling · A brand of Ausred International Investment Group
          Pty Ltd · ABN 97 608 594 592
        </p>
      </div>
    </footer>
  )
}

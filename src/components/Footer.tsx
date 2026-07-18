export default function Footer() {
  return (
    <footer className="bg-ink py-10 text-cream/60">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 text-center text-sm">
        <p className="font-display text-xl text-cream">
          AUSRED <span className="text-brand">Styling</span>
        </p>
        <nav className="flex flex-wrap justify-center gap-6">
          <a href="#ai-studio" className="hover:text-cream">AI Preview</a>
          <a href="#portfolio" className="hover:text-cream">Our Work</a>
          <a href="#services" className="hover:text-cream">Services</a>
          <a href="#contact" className="hover:text-cream">Contact</a>
        </nav>
        <p className="text-xs text-cream/40">
          © 2026 Ausred International Investment Group Pty Ltd · ABN 97 608 594 592
        </p>
      </div>
    </footer>
  )
}

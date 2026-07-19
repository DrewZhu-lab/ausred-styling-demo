import { Link } from 'react-router-dom'

export default function CTABand() {
  return (
    <section className="bg-ink py-20 text-center text-cream">
      <p className="px-6 text-xs font-medium uppercase tracking-[0.35em] text-cream/60">
        Style Spaces. Elevate Living. Inspire Value.
      </p>
      <h2 className="font-display mt-4 px-6 text-3xl md:text-4xl">
        Ready to style your next sale?
      </h2>
      <Link
        to="/contact"
        className="mt-8 inline-block rounded-full bg-brand px-8 py-3 font-medium text-white transition-colors hover:bg-brand-dark"
      >
        Book a free consultation
      </Link>
    </section>
  )
}

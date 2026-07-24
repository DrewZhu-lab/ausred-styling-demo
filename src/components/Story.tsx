export default function Story() {
  return (
    <section id="story" className="bg-linen py-24">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <p className="mb-6 text-xs font-medium uppercase tracking-[0.3em] text-brand">
          Our Story
        </p>
        <p className="font-display text-2xl leading-relaxed text-ink md:text-[1.75rem]">
          “At Vale&amp;Co., we believe every home deserves to tell a story. Through
          thoughtful styling and timeless design, we create spaces that feel
          effortless, welcoming, and enduring.”
        </p>
        <div className="mx-auto mt-8 flex items-center justify-center gap-3 text-oak">
          <span className="h-px w-10 bg-oak/40" />
          <span className="text-[9px]">◆</span>
          <span className="h-px w-10 bg-oak/40" />
        </div>
      </div>
    </section>
  )
}

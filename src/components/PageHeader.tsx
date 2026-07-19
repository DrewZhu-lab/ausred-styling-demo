export default function PageHeader({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string
  title: string
  intro?: string
}) {
  return (
    <section className="bg-cream px-6 pb-14 pt-36 text-center">
      <p className="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-brand">{eyebrow}</p>
      <h1 className="font-display mx-auto max-w-3xl text-4xl md:text-5xl">{title}</h1>
      {intro && <p className="mx-auto mt-5 max-w-2xl text-ink/70">{intro}</p>}
    </section>
  )
}

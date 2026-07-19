import { processSteps } from '../data'

export default function ProcessSteps() {
  return (
    <section className="bg-sand/60 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-brand">
            How it works
          </p>
          <h2 className="font-display text-3xl md:text-4xl">Five steps, one styling day</h2>
        </div>
        <div className="mt-14 grid gap-8 md:grid-cols-5">
          {processSteps.map((s) => (
            <div key={s.step} className="text-center md:text-left">
              <p className="font-display text-3xl text-brand/70">{s.step}</p>
              <h3 className="mt-2 font-medium">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/65">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

import { useState } from 'react'
import { Clock, Mail, MapPin } from 'lucide-react'
import { useLang } from '../i18n'

const inputClass =
  'w-full rounded-xl border border-ink/10 bg-linen px-4 py-3 text-sm outline-none transition-colors placeholder:text-ink/40 focus:border-brand'

export default function Contact() {
  const { t } = useLang()
  const [sent, setSent] = useState(false)

  return (
    <section id="contact" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-brand">
            {t.contact.eyebrow}
          </p>
          <h2 className="font-display text-3xl md:text-[2.75rem]">{t.contact.title}</h2>
          <p className="mt-4 text-ink/70">{t.contact.intro}</p>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-[3fr_2fr]">
          {sent ? (
            <div className="flex flex-col items-center justify-center rounded-2xl bg-sand/60 p-10 text-center">
              <p className="font-display text-2xl">{t.contact.thanks}</p>
              <p className="mt-2 max-w-sm text-ink/70">{t.contact.received}</p>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault()
                setSent(true)
              }}
              className="grid gap-4 sm:grid-cols-2"
            >
              <input required placeholder={t.contact.name} className={inputClass} />
              <input required type="tel" placeholder={t.contact.phone} className={inputClass} />
              <input
                required
                type="email"
                placeholder={t.contact.email}
                className={`${inputClass} sm:col-span-2`}
              />
              <input placeholder={t.contact.address} className={`${inputClass} sm:col-span-2`} />
              <select required defaultValue="" className={`${inputClass} sm:col-span-2 text-ink/70`}>
                <option value="" disabled>
                  {t.contact.service}
                </option>
                {t.contact.serviceOptions.map((o) => (
                  <option key={o}>{o}</option>
                ))}
              </select>
              <textarea
                rows={4}
                placeholder={t.contact.message}
                className={`${inputClass} resize-none sm:col-span-2`}
              />
              <button
                type="submit"
                className="rounded-full bg-brand px-8 py-3 font-medium text-white transition-colors hover:bg-brand-dark sm:col-span-2 sm:justify-self-start"
              >
                {t.contact.submit}
              </button>
            </form>
          )}

          <div className="space-y-6 rounded-2xl bg-sand/60 p-8">
            <div className="flex gap-3">
              <Mail size={20} className="mt-0.5 shrink-0 text-brand" />
              <div>
                <p className="text-sm font-medium">{t.contact.emailLabel}</p>
                <a href="mailto:admin@valeandco.com.au" className="text-sm text-ink/70 hover:text-brand">
                  admin@valeandco.com.au
                </a>
              </div>
            </div>
            <div className="flex gap-3">
              <MapPin size={20} className="mt-0.5 shrink-0 text-brand" />
              <div>
                <p className="text-sm font-medium">{t.contact.officeLabel}</p>
                <p className="text-sm text-ink/70">
                  Level 24, Tower 3, 300 Barangaroo Avenue
                  <br />
                  Sydney NSW 2000
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <Clock size={20} className="mt-0.5 shrink-0 text-brand" />
              <div>
                <p className="text-sm font-medium">{t.contact.hoursLabel}</p>
                <p className="text-sm text-ink/70">{t.contact.hours}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

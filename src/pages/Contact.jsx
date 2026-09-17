import { useState } from 'react'
import Seo from '../components/Seo.jsx'
import Reveal from '../components/Reveal.jsx'
import { BUSINESS } from '../lib/business.js'

// TODO before launch: point this at a real submission endpoint
// (e.g. a serverless function, Formspree, or CRM webhook) and remove
// the client-side-only simulation below.
const CONTACT_ENDPOINT = '[PLACEHOLDER: contact form submission endpoint]'

const initialForm = {
  name: '',
  company: '',
  email: '',
  phone: '',
  devices: '',
  message: '',
}

function validate(form) {
  const errors = {}
  if (!form.name.trim()) errors.name = 'Enter your name.'
  if (!form.email.trim()) {
    errors.email = 'Enter an email address.'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = 'Enter a valid email address.'
  }
  if (!form.message.trim()) errors.message = 'Tell us a little about what you need.'
  return errors
}

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | submitting | sent

  function update(field, value) {
    setForm((f) => ({ ...f, [field]: value }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    const nextErrors = validate(form)
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) return

    setStatus('submitting')
    // Simulated submission — see CONTACT_ENDPOINT above.
    await new Promise((resolve) => setTimeout(resolve, 500))
    setStatus('sent')
  }

  return (
    <>
      <Seo
        title="Contact"
        description="Get in touch with A-IT for managed cybersecurity and monitoring. UK-based team, business hours contact."
      />

      <section className="border-b border-stone py-16 md:py-24">
        <div className="container-x">
          <p className="eyebrow">Contact</p>
          <h1 className="mt-3 max-w-[20ch] font-display text-4xl font-semibold leading-[1.05] md:text-5xl">
            Tell us what you're running. We'll tell you what it needs.
          </h1>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container-x grid gap-12 md:grid-cols-12">
          <Reveal className="md:col-span-7" as="div">
            {status === 'sent' ? (
              <div className="rounded-[10px] border border-petrol/30 bg-petrol/[0.06] p-8">
                <h2 className="font-display text-2xl font-semibold text-ink">
                  Message received.
                </h2>
                <p className="mt-3 max-w-[46ch] text-ink/75">
                  We'll come back to you within{' '}
                  <span className="font-medium">[PLACEHOLDER: reply-time commitment]</span>.
                  If it's urgent, call us on{' '}
                  <a className="link-underline text-petrol" href={BUSINESS.phoneHref}>
                    {BUSINESS.phone}
                  </a>
                  .
                </p>
              </div>
            ) : (
              <form noValidate onSubmit={handleSubmit} className="space-y-6 rounded-[10px] border border-stone bg-white/60 p-6 md:p-8">
                <div className="grid gap-6 sm:grid-cols-2">
                  <Field label="Name" htmlFor="name" error={errors.name} required>
                    <input
                      id="name"
                      type="text"
                      autoComplete="name"
                      value={form.name}
                      onChange={(e) => update('name', e.target.value)}
                      className={inputClass(errors.name)}
                    />
                  </Field>
                  <Field label="Company" htmlFor="company">
                    <input
                      id="company"
                      type="text"
                      autoComplete="organization"
                      value={form.company}
                      onChange={(e) => update('company', e.target.value)}
                      className={inputClass()}
                    />
                  </Field>
                  <Field label="Email" htmlFor="email" error={errors.email} required>
                    <input
                      id="email"
                      type="email"
                      autoComplete="email"
                      value={form.email}
                      onChange={(e) => update('email', e.target.value)}
                      className={inputClass(errors.email)}
                    />
                  </Field>
                  <Field label="Phone" htmlFor="phone">
                    <input
                      id="phone"
                      type="tel"
                      autoComplete="tel"
                      value={form.phone}
                      onChange={(e) => update('phone', e.target.value)}
                      className={inputClass()}
                    />
                  </Field>
                </div>

                <Field label="Roughly how many devices?" htmlFor="devices">
                  <select
                    id="devices"
                    value={form.devices}
                    onChange={(e) => update('devices', e.target.value)}
                    className={inputClass()}
                  >
                    <option value="">Not sure yet</option>
                    <option value="1-10">1–10</option>
                    <option value="11-25">11–25</option>
                    <option value="26-50">26–50</option>
                    <option value="51-100">51–100</option>
                    <option value="100+">100+</option>
                  </select>
                </Field>

                <Field label="What's going on?" htmlFor="message" error={errors.message} required>
                  <textarea
                    id="message"
                    rows={5}
                    value={form.message}
                    onChange={(e) => update('message', e.target.value)}
                    className={inputClass(errors.message)}
                    placeholder="E.g. current provider isn't responsive, setting up IT for the first time, had a security incident..."
                  />
                </Field>

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="inline-flex items-center justify-center gap-2 rounded-[8px] bg-ink px-7 py-3.5 text-[15px] font-medium text-paper transition-colors duration-200 hover:bg-petrol-dark disabled:opacity-60"
                >
                  {status === 'submitting' ? 'Sending…' : 'Send message'}
                </button>

                <p className="text-xs text-slate">
                  This form is a working demo — it validates and confirms on
                  screen, but isn’t yet wired to an inbox.{' '}
                  <span className="text-brass-dark">{CONTACT_ENDPOINT}</span> needs
                  connecting before launch.
                </p>
              </form>
            )}
          </Reveal>

          <Reveal delay={120} className="md:col-span-4 md:col-start-9" as="div">
            <div className="grid gap-3">
              <div className="bento-tile p-5">
                <p className="eyebrow">Call</p>
                <a href={BUSINESS.phoneHref} className="link-underline mt-1 block font-display text-xl font-semibold text-ink">
                  {BUSINESS.phone}
                </a>
              </div>
              <div className="bento-tile p-5">
                <p className="eyebrow">Email</p>
                <a href={BUSINESS.emailHref} className="link-underline mt-1 block text-ink/85">
                  {BUSINESS.email}
                </a>
              </div>
              <div className="bento-tile p-5">
                <p className="eyebrow">Hours</p>
                <p className="mt-1 text-ink/85">{BUSINESS.hours}</p>
                <p className="mt-1 text-sm text-slate">
                  24/7 monitored alerting applies to the Silver and Gold
                  tiers regardless of office hours.
                </p>
              </div>
              <div className="bento-tile p-5">
                <p className="eyebrow">Existing client?</p>
                <p className="mt-1 text-ink/85">
                  For an active security incident, use the emergency contact
                  details in your onboarding pack rather than this form — it
                  reaches our sales inbox, not the monitoring team.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}

function Field({ label, htmlFor, error, required, children }) {
  return (
    <div>
      <label htmlFor={htmlFor} className="block text-sm font-medium text-ink/85">
        {label}
        {required && <span className="text-brass-dark"> *</span>}
      </label>
      <div className="mt-1.5">{children}</div>
      {error && (
        <p className="mt-1.5 text-sm text-[#9A4128]" role="alert">
          {error}
        </p>
      )}
    </div>
  )
}

function inputClass(error) {
  return `w-full rounded-[6px] border bg-white px-3.5 py-2.5 text-[15px] text-ink placeholder:text-slate/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-petrol ${
    error ? 'border-[#9A4128]' : 'border-stone-dark'
  }`
}

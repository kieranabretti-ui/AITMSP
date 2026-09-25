import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import Seo from '../components/Seo.jsx'
import { BUSINESS } from '../lib/business.js'

// Submits via Netlify Forms — Netlify parses the static mirror form in
// index.html at build time to register the "contact" form, then this
// POST associates with it. The one step this can't do from code: set
// the notification recipient in the Netlify dashboard (Site
// configuration → Forms → Form notifications → Email notification →
// hello@a-it.uk), since that's account/UI-only.
// data-netlify-honeypot on the form handles server-side spam
// rejection; the client-side checks below are a first-pass filter
// only, not the real defence.

// Minimum time (ms) a human plausibly takes to open the page and fill
// the form. Bots that submit instantly get caught here.
const MIN_FILL_TIME_MS = 3000

function encodeFormData(data) {
  return Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&')
}

const initialForm = {
  name: '',
  company: '',
  email: '',
  phone: '',
  devices: '',
  message: '',
  // Honeypot — left blank by humans, invisible in the layout, but a
  // plain form field a naive bot will happily fill in.
  website: '',
}

function validate(form) {
  const errors = {}
  const name = form.name.trim()
  const message = form.message.trim()

  if (!name) {
    errors.name = 'Enter your name.'
  } else if (name.length < 2) {
    errors.name = 'That name looks too short.'
  }

  if (!form.email.trim()) {
    errors.email = 'Enter an email address.'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
    errors.email = 'Enter a valid email address.'
  }

  if (form.phone.trim() && !/^[+()\d\s-]{7,20}$/.test(form.phone.trim())) {
    errors.phone = 'Enter a valid phone number, or leave it blank.'
  }

  if (!message) {
    errors.message = 'Tell us a little about what you need.'
  } else if (message.length < 10) {
    errors.message = 'A few more details would help — what’s going on?'
  }

  return errors
}

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | submitting | sent | error
  const mountedAt = useRef(Date.now())

  function update(field, value) {
    setForm((f) => ({ ...f, [field]: value }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    const nextErrors = validate(form)
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) return

    const isLikelySpam =
      form.website.trim().length > 0 || Date.now() - mountedAt.current < MIN_FILL_TIME_MS

    setStatus('submitting')
    if (isLikelySpam) {
      // Fail open on the UI (don't tip off the bot) and skip the real
      // send — Netlify's own honeypot check would reject it anyway if
      // it did go through.
      await new Promise((resolve) => setTimeout(resolve, 400))
      setStatus('sent')
      return
    }

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encodeFormData({ 'form-name': 'contact', ...form }),
      })
      if (!response.ok) throw new Error(`Submission failed: ${response.status}`)
      setStatus('sent')
    } catch {
      setStatus('error')
    }
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
          <div className="md:col-span-7">
            {status === 'sent' ? (
              <div className="rounded-sm border border-petrol/30 bg-petrol/[0.06] p-8">
                <h2 className="font-display text-2xl font-semibold text-ink">
                  Thanks — message received.
                </h2>
                <p className="mt-3 max-w-[46ch] text-ink/75">
                  We'll be in touch soon.
                </p>
                <p className="mt-4 max-w-[46ch] text-sm text-ink/60">
                  Already a client? Please raise support requests through our usual Jira ticketing system rather
                  than this form, so they reach the right queue straight away.
                </p>
              </div>
            ) : (
              <form
                noValidate
                name="contact"
                data-netlify="true"
                data-netlify-honeypot="website"
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                {status === 'error' && (
                  <p className="rounded-sm border border-[#9A4128]/30 bg-[#9A4128]/[0.06] p-4 text-sm text-[#9A4128]" role="alert">
                    Something went wrong sending that — please try again, or
                    email us directly at{' '}
                    <a className="link-underline" href={BUSINESS.emailHref}>
                      {BUSINESS.email}
                    </a>
                    .
                  </p>
                )}

                {/* Honeypot field — hidden from sighted users and screen
                    readers, but present in the DOM for bots to fill in. */}
                <div className="absolute left-[-9999px] top-auto h-px w-px overflow-hidden" aria-hidden="true">
                  <label htmlFor="website">Website</label>
                  <input
                    id="website"
                    name="website"
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                    value={form.website}
                    onChange={(e) => update('website', e.target.value)}
                  />
                </div>

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
                  <Field label="Phone" htmlFor="phone" error={errors.phone}>
                    <input
                      id="phone"
                      type="tel"
                      autoComplete="tel"
                      value={form.phone}
                      onChange={(e) => update('phone', e.target.value)}
                      className={inputClass(errors.phone)}
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
                  className="inline-flex items-center justify-center gap-2 rounded-[3px] bg-ink px-7 py-3.5 text-[15px] font-medium text-paper transition-colors duration-200 hover:bg-petrol-dark disabled:opacity-60"
                >
                  {status === 'submitting' ? 'Sending…' : 'Send message'}
                </button>

                <p className="text-xs text-slate">
                  By sending this you agree to our{' '}
                  <Link className="link-underline text-petrol" to="/privacy">
                    Privacy Policy
                  </Link>
                  .
                </p>
              </form>
            )}
          </div>

          <div className="md:col-span-4 md:col-start-9">
            <div className="space-y-8 border-t border-stone pt-8 md:border-t-0 md:border-l md:border-stone md:pl-10 md:pt-0">
              <div>
                <p className="eyebrow">Email</p>
                <a href={BUSINESS.emailHref} className="link-underline mt-1 block text-ink/85">
                  {BUSINESS.email}
                </a>
              </div>
              <div>
                <p className="eyebrow">Hours</p>
                <p className="mt-1 text-ink/85">{BUSINESS.hours}</p>
                <p className="mt-1 text-sm text-slate">
                  24/7 monitored alerting applies to the Silver and Gold
                  tiers regardless of office hours.
                </p>
              </div>
              <div>
                <p className="eyebrow">Existing client?</p>
                <p className="mt-1 text-ink/85">
                  For an active security incident, use the emergency contact
                  details in your onboarding pack rather than this form — it
                  reaches our sales inbox, not the monitoring team.
                </p>
              </div>
            </div>
          </div>
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
  return `w-full rounded-[3px] border bg-white px-3.5 py-2.5 text-[15px] text-ink placeholder:text-slate/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-petrol ${
    error ? 'border-[#9A4128]' : 'border-stone-dark'
  }`
}

import { useEffect, useRef, useState } from 'react'
import Seo from '../components/Seo.jsx'
import Button from '../components/Button.jsx'
import { BUSINESS } from '../lib/business.js'
import { TIERS, ADDONS, formatGBP } from '../lib/pricing.js'
import { hasAnalyticsConsent, loadGoogleAdsConversionTracking, CONSENT_ACCEPTED_EVENT } from '../lib/analytics.js'

// Unlisted landing page for a Google Ads campaign — reachable only by
// direct link. Not in Nav/Footer, not in sitemap.xml, noindex via Seo
// below. Keep it that way: don't link to this page from anywhere else
// on the site.

// Submits via Netlify Forms, same mechanism as Contact.jsx — its own
// named form ("dorset-it-support") so leads from this campaign land in
// a separate Netlify Forms bucket. The static mirror in index.html
// registers it with Netlify's build-time crawler; field names must
// stay in sync with that mirror. The notification recipient for this
// form also needs setting in the Netlify dashboard (Site configuration
// → Forms → Form notifications) — it doesn't inherit the "contact"
// form's setting.
//
// Separately (see handleSubmit below), also relays straight into the
// CRM as a lead via relay-lead.js — not the same thing as a Netlify
// Forms notification, and not dependent on one being configured.

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
  interest: '',
  website: '', // honeypot
}

function validate(form) {
  const errors = {}
  const name = form.name.trim()

  if (!name) {
    errors.name = 'Enter your name.'
  } else if (name.length < 2) {
    errors.name = 'That name looks too short.'
  }

  if (!form.company.trim()) {
    errors.company = 'Enter your business name.'
  }

  if (!form.email.trim()) {
    errors.email = 'Enter an email address.'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
    errors.email = 'Enter a valid email address.'
  }

  if (!form.phone.trim()) {
    errors.phone = 'Enter a phone number.'
  } else if (!/^[+()\d\s-]{7,20}$/.test(form.phone.trim())) {
    errors.phone = 'Enter a valid phone number.'
  }

  if (!form.interest) {
    errors.interest = 'Let us know what you’re looking for.'
  }

  return errors
}

const BENEFITS = [
  {
    label: 'Security-first',
    detail: 'Every plan includes managed cybersecurity, not IT support with security bolted on.',
  },
  {
    label: 'Local',
    detail: 'Based in Dorset, built for Dorset businesses — not a national call centre.',
  },
  {
    label: 'Clear pricing',
    detail: 'Published per-device pricing, no “contact us for a quote” mystery.',
  },
  {
    label: 'Proactive',
    detail: 'Monitoring and patching before problems become downtime.',
  },
]

const SERVICES = [
  { title: 'Managed cybersecurity', detail: 'Endpoint protection and monitoring, centrally managed.' },
  { title: 'Managed backup', detail: 'Backup verification so a lost device isn’t a lost business.' },
  { title: 'RMM', detail: 'Remote monitoring and management of your devices, around the clock.' },
  { title: 'Email security', detail: 'Protection for your biggest attack surface.' },
  { title: 'Security awareness training', detail: 'Phishing simulation and staff training — included on Platinum.' },
  { title: 'Fast-response support', detail: 'Optional guaranteed-response SLA, added on top of any plan.' },
  { title: 'Break-fix support', detail: 'Hands-on help when you need it, billed by the hour.' },
]

const premiumSla = ADDONS.find((a) => a.id === 'premium-sla')
const breakfix = ADDONS.find((a) => a.id === 'breakfix')

export default function DorsetITSupport() {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | submitting | error
  const mountedAt = useRef(Date.now())

  // Google Ads conversion tag for this campaign — scoped to this page
  // (not loaded site-wide like GA4), and only once analytics consent
  // has already been given. If consent hasn't been decided yet, this
  // picks it up the moment the visitor accepts the cookie banner
  // rather than requiring a reload.
  useEffect(() => {
    if (hasAnalyticsConsent()) {
      loadGoogleAdsConversionTracking()
      return
    }
    window.addEventListener(CONSENT_ACCEPTED_EVENT, loadGoogleAdsConversionTracking)
    return () => window.removeEventListener(CONSENT_ACCEPTED_EVENT, loadGoogleAdsConversionTracking)
  }, [])

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
      window.location.assign('/dorset-it-support/thank-you')
      return
    }

    // Best-effort side channel straight into the CRM as a lead — fired
    // alongside the real (Netlify Forms) submission below, not instead
    // of it. Netlify Forms stays the source of truth for whether this
    // submission succeeded from the visitor's point of view; a relay
    // failure here only ever logs a console warning, never blocks the
    // thank-you redirect or shows an error. See relay-lead.js for why
    // this exists instead of a Netlify Forms notification webhook.
    const relayPromise = fetch('/.netlify/functions/relay-lead', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: form.name, company: form.company, email: form.email,
        phone: form.phone, devices: form.devices, interest: form.interest,
      }),
    }).catch((err) => console.warn('Could not relay this lead into the CRM:', err.message))

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encodeFormData({ 'form-name': 'dorset-it-support', ...form }),
      })
      if (!response.ok) throw new Error(`Submission failed: ${response.status}`)
      // Give the relay a chance to actually finish its request before
      // the navigation below potentially cuts it off.
      await relayPromise
      // A full navigation (not client-side routing) so the thank-you
      // URL gets a real page load — that's what a Google Ads website
      // conversion tag fires on.
      window.location.assign('/dorset-it-support/thank-you')
    } catch {
      setStatus('error')
    }
  }

  return (
    <>
      <Seo
        title="Dorset IT Support & Cybersecurity"
        description="Cybersecurity-led IT support for Dorset SMEs. Managed monitoring, backup and email security across Bournemouth, Poole, Christchurch and Dorset, from £15 per device per month."
        noindex
      />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-stone bg-paper-dim">
        <div className="bg-grid-motif pointer-events-none absolute inset-0 opacity-60" />
        <div className="container-x relative py-20 md:py-28">
          <div className="max-w-[42ch]">
            <p className="eyebrow">Dorset IT support &amp; cybersecurity</p>
            <h1 className="mt-4 font-display text-[2.5rem] font-semibold leading-[1.08] tracking-tightish md:text-6xl">
              Cybersecurity-Led IT Support for Dorset Businesses
            </h1>
            <p className="mt-6 max-w-[52ch] text-lg leading-relaxed text-ink/75 md:text-xl">
              Managed IT and cybersecurity for small and medium businesses in
              Bournemouth, Poole, Christchurch and across Dorset &mdash;
              monitoring, backup and support from a local team.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Button to="#lead-form" variant="accent">
                Get a Quote
              </Button>
              <Button href={BUSINESS.phoneHref} variant="outline">
                Call us &mdash; {BUSINESS.phone}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="border-b border-stone bg-paper py-10">
        <div className="container-x">
          <div className="grid grid-cols-2 gap-x-6 gap-y-6 md:grid-cols-4 md:gap-x-10">
            {BENEFITS.map((b) => (
              <div key={b.label} className="border-l-2 border-brass pl-4">
                <p className="font-display text-base font-semibold leading-snug text-ink">
                  {b.label}
                </p>
                <p className="mt-0.5 text-sm text-slate">{b.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 md:py-20">
        <div className="container-x">
          <p className="eyebrow">What&rsquo;s included</p>
          <h2 className="mt-3 max-w-[24ch] font-display text-3xl font-semibold leading-tight md:text-4xl">
            Everything your business needs to stay protected.
          </h2>
          <div className="mt-10 grid gap-x-8 gap-y-6 sm:grid-cols-2">
            {SERVICES.map((s) => (
              <div key={s.title} className="border-t border-stone pt-4">
                <p className="font-display text-lg font-semibold text-ink">{s.title}</p>
                <p className="mt-1 text-[15px] text-ink/70">{s.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="border-t border-stone bg-paper-dim py-16 md:py-20">
        <div className="container-x">
          <p className="eyebrow">Pricing</p>
          <h2 className="mt-3 max-w-[24ch] font-display text-3xl font-semibold leading-tight md:text-4xl">
            Clear, per-device pricing.
          </h2>

          <div className="mt-10 overflow-x-auto">
            <table className="w-full min-w-[520px] border-collapse text-left">
              <thead>
                <tr className="border-b border-stone-dark">
                  <th scope="col" className="py-3 pr-4 font-mono text-xs uppercase tracking-wideish text-slate">
                    Plan
                  </th>
                  <th scope="col" className="py-3 pr-4 font-mono text-xs uppercase tracking-wideish text-slate">
                    Price
                  </th>
                  <th scope="col" className="py-3 font-mono text-xs uppercase tracking-wideish text-slate">
                    Best for
                  </th>
                </tr>
              </thead>
              <tbody>
                {TIERS.map((tier) => (
                  <tr key={tier.id} className="border-b border-stone/60">
                    <td className="py-4 pr-4 align-top">
                      <span className="font-display text-lg font-semibold text-ink">{tier.name}</span>
                      {tier.recommended && (
                        <span className="ml-2 rounded-full bg-brass px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wideish text-ink">
                          Most chosen
                        </span>
                      )}
                    </td>
                    <td className="py-4 pr-4 align-top font-mono text-[15px] text-ink/85 whitespace-nowrap">
                      {formatGBP(tier.price)}/device/mo
                    </td>
                    <td className="py-4 align-top text-[15px] text-ink/70">{tier.tagline}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-6 max-w-[62ch] text-sm text-slate">
            Optional 6-hour response SLA available (+{formatGBP(premiumSla.price)}/device/month).
            Ad-hoc support billed at {formatGBP(breakfix.price)}/hour weekdays, {formatGBP(80)}/hour weekends.
          </p>
        </div>
      </section>

      {/* Trust */}
      <section className="border-t border-stone py-16 md:py-20">
        <div className="container-x max-w-[62ch]">
          <p className="eyebrow">Who you&rsquo;re talking to</p>
          <div className="mt-6 space-y-6">
            <div className="border-l-2 border-petrol pl-4">
              <p className="font-display text-base font-semibold text-ink">Based in Dorset</p>
              <p className="mt-1 text-[15px] text-ink/70">
                A-IT is built to work with Dorset businesses directly &mdash;
                not routed through a national call centre.
              </p>
            </div>
            <div className="border-l-2 border-petrol pl-4">
              <p className="font-display text-base font-semibold text-ink">
                [PLACEHOLDER: founder name(s) + a short line on relevant background]
              </p>
              <p className="mt-1 text-[15px] text-ink/70">
                To be added once supplied &mdash; swap this block for the real
                founder introduction before this page goes live in ads.
              </p>
            </div>
            <div className="border-l-2 border-petrol pl-4">
              <p className="font-display text-base font-semibold text-ink">What&rsquo;s included is what you pay for</p>
              <p className="mt-1 text-[15px] text-ink/70">
                A-IT is a new provider &mdash; rather than claim a track record
                we don&rsquo;t have yet, every plan is published in full above:
                what&rsquo;s included, what it costs, and what&rsquo;s optional. No
                bundled extras you didn&rsquo;t ask for, no vague pricing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="bg-ink py-20 text-paper md:py-24">
        <div className="container-x flex flex-col items-start gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="max-w-[22ch] font-display text-3xl font-semibold leading-tight md:text-4xl">
              Talk to a Dorset IT and cybersecurity team
            </h2>
            <p className="mt-3 max-w-[46ch] text-paper/70">
              Tell us a bit about your business and we&rsquo;ll get back to you
              &mdash; no obligation, no pressure.
            </p>
          </div>
          <div className="shrink-0">
            <Button to="#lead-form" variant="accent">
              Get a Quote
            </Button>
          </div>
        </div>
      </section>

      {/* Lead form */}
      <section id="lead-form" className="scroll-mt-[72px] py-16 md:py-20">
        <div className="container-x max-w-[640px]">
          <p className="eyebrow">Get a quote</p>
          <h2 className="mt-3 font-display text-3xl font-semibold leading-tight md:text-4xl">
            Tell us about your business.
          </h2>

          <form
            noValidate
            name="dorset-it-support"
            data-netlify="true"
            data-netlify-honeypot="website"
            onSubmit={handleSubmit}
            className="mt-8 space-y-6"
          >
            {status === 'error' && (
              <p className="rounded-sm border border-[#9A4128]/30 bg-[#9A4128]/[0.06] p-4 text-sm text-[#9A4128]" role="alert">
                Something went wrong sending that &mdash; please try again, or
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
              <Field label="Business name" htmlFor="company" error={errors.company} required>
                <input
                  id="company"
                  type="text"
                  autoComplete="organization"
                  value={form.company}
                  onChange={(e) => update('company', e.target.value)}
                  className={inputClass(errors.company)}
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
              <Field label="Phone" htmlFor="phone" error={errors.phone} required>
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

            <Field label="Number of devices / employees (approx.)" htmlFor="devices">
              <input
                id="devices"
                type="text"
                placeholder="E.g. 12"
                value={form.devices}
                onChange={(e) => update('devices', e.target.value)}
                className={inputClass()}
              />
            </Field>

            <Field label="What are you looking for?" htmlFor="interest" error={errors.interest} required>
              <select
                id="interest"
                value={form.interest}
                onChange={(e) => update('interest', e.target.value)}
                className={inputClass(errors.interest)}
              >
                <option value="">Select one&hellip;</option>
                <option value="General IT support">General IT support</option>
                <option value="Cybersecurity">Cybersecurity</option>
                <option value="Not sure">Not sure</option>
              </select>
            </Field>

            <button
              type="submit"
              disabled={status === 'submitting'}
              className="inline-flex items-center justify-center gap-2 rounded-[3px] bg-ink px-7 py-3.5 text-[15px] font-medium text-paper transition-colors duration-200 hover:bg-petrol-dark disabled:opacity-60"
            >
              {status === 'submitting' ? 'Sending…' : 'Get a Quote'}
            </button>
          </form>
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

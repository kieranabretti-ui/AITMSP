import Seo from '../components/Seo.jsx'
import Button from '../components/Button.jsx'
import PricingCalculator from '../components/PricingCalculator.jsx'
import { Link } from 'react-router-dom'

const TRUST_SIGNALS = [
  { label: 'UK-based security team', detail: 'No outsourced SOC' },
  { label: 'Fixed price per device', detail: 'One line on the invoice' },
  { label: '24/7 monitoring on every plan', detail: 'Not just business hours' },
  { label: 'Fast onboarding', detail: '1–10 working days to full coverage' },
]

const SERVICES = [
  {
    n: '01',
    title: 'Cybersecurity',
    body: 'Endpoint protection, patching and monitored threat detection, sized to how much risk your business actually carries.',
    to: '/services#cybersecurity',
  },
  {
    n: '02',
    title: 'Monitoring & management',
    body: 'Devices, servers and network kit watched around the clock on every plan, with alerts that reach a person before your team notices anything wrong.',
    to: '/services#monitoring',
  },
  {
    n: '03',
    title: 'Cloud & backup',
    body: 'Backup verification on every plan, plus Microsoft 365 or Google Workspace data protection and backup on Gold and Platinum — so a lost laptop or deleted mailbox isn’t a lost business.',
    to: '/services#cloud-backup',
  },
]

export default function Home() {
  return (
    <>
      <Seo description="A-IT is a UK managed cybersecurity and monitoring provider for small and medium businesses. Proactive protection, patching and 24/7 monitoring on every plan, from £15 per device per month." />

      {/* Hero — asymmetric, off-center split */}
      <section className="relative overflow-hidden border-b border-stone bg-paper-dim">
        <div className="bg-grid-motif pointer-events-none absolute inset-0 opacity-60" />
        <div className="container-x relative grid gap-12 py-20 md:grid-cols-12 md:py-28">
          <div className="md:col-span-7">
            <p className="eyebrow">Cybersecurity &amp; managed monitoring for UK SMBs</p>
            <h1 className="mt-4 max-w-[18ch] font-display text-[2.75rem] font-semibold leading-[1.05] tracking-tightish md:text-6xl">
              Your security, handled before it becomes a problem.
            </h1>
            <p className="mt-6 max-w-[52ch] text-lg leading-relaxed text-ink/75 md:text-xl">
              A-IT monitors, patches and protects the devices your business
              runs on — so downtime, phishing emails and a dying laptop
              don't land on your desk on a Tuesday morning.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Button to="/contact" variant="accent">
                Get a quote
              </Button>
              <Button to="#pricing-estimator" variant="ghost">
                See pricing →
              </Button>
            </div>
          </div>

          <div className="md:col-span-5 md:pt-3">
            <div className="rounded-sm border border-ink/10 bg-ink text-paper shadow-card">
              <div className="border-b border-paper/10 px-5 py-3">
                <span className="font-mono text-xs uppercase tracking-wideish text-paper/60">
                  How we respond
                </span>
              </div>
              <ol className="divide-y divide-paper/10">
                {[
                  ['01', 'Monitor', 'Devices and email watched continuously — 24/7 on every plan'],
                  ['02', 'Detect', 'Alerts triaged the moment something looks wrong, day or night'],
                  ['03', 'Respond', 'A named engineer acts on confirmed threats, not just flags them'],
                  ['04', 'Report', 'A plain-English summary of what happened and what changed'],
                ].map(([n, k, v]) => (
                  <li key={n} className="flex gap-4 px-5 py-4">
                    <span className="font-mono text-xs text-brass-light">{n}</span>
                    <div>
                      <p className="font-display text-base font-semibold text-paper">{k}</p>
                      <p className="mt-0.5 text-sm leading-snug text-paper/60">{v}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Trust signals — plain strip, no invented numbers */}
      <section className="border-b border-stone bg-paper py-10">
        <div className="container-x">
          <div className="grid grid-cols-2 gap-x-6 gap-y-6 md:grid-cols-4 md:gap-x-10">
            {TRUST_SIGNALS.map((t) => (
              <div key={t.label} className="border-l-2 border-brass pl-4">
                <p className="font-display text-base font-semibold leading-snug text-ink">
                  {t.label}
                </p>
                <p className="mt-0.5 text-sm text-slate">{t.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services overview — numbered editorial list, not a card grid */}
      <section className="py-20 md:py-28">
        <div className="container-x">
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-4">
              <p className="eyebrow">What we do</p>
              <h2 className="mt-3 font-display text-3xl font-semibold leading-tight md:text-4xl">
                Three things, done properly.
              </h2>
              <p className="mt-4 max-w-[38ch] text-ink/70">
                We're a security-first provider. Everything below is core
                to keeping a small business protected — day-to-day
                helpdesk support isn't bundled in, but it's available as a
                priced add-on on top of any tier.
              </p>
            </div>

            <div className="md:col-span-8">
              <ul className="divide-y divide-stone border-t border-stone">
                {SERVICES.map((s) => (
                  <li key={s.n}>
                    <Link
                      to={s.to}
                      className="group flex flex-col gap-2 py-7 sm:flex-row sm:items-baseline sm:gap-8"
                    >
                      <span className="font-mono text-sm text-brass-dark sm:w-10 sm:shrink-0">
                        {s.n}
                      </span>
                      <span className="font-display text-2xl font-semibold text-ink transition-colors group-hover:text-petrol sm:w-[13ch] sm:shrink-0">
                        {s.title}
                      </span>
                      <span className="max-w-[52ch] text-ink/70">{s.body}</span>
                      <span className="ml-auto hidden shrink-0 text-petrol opacity-0 transition-opacity group-hover:opacity-100 sm:block">
                        →
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing teaser */}
      <section id="pricing-estimator" className="scroll-mt-[72px] border-t border-stone bg-paper-dim py-20 md:py-28">
        <div className="container-x">
          <div className="max-w-[60ch]">
            <p className="eyebrow">Pricing</p>
            <h2 className="mt-3 font-display text-3xl font-semibold leading-tight md:text-4xl">
              Priced per device. See your number in seconds.
            </h2>
          </div>
          <div className="mt-10">
            <PricingCalculator compact />
          </div>
          <div className="mt-8">
            <Button to="/pricing" variant="outline">
              Full pricing &amp; comparison
            </Button>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="bg-ink py-20 text-paper md:py-24">
        <div className="container-x flex flex-col items-start gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="max-w-[20ch] font-display text-3xl font-semibold leading-tight md:text-4xl">
              Tell us what's running your business, and we'll tell you what it costs to protect it.
            </h2>
          </div>
          <div className="flex shrink-0 gap-4">
            <Button to="/contact" variant="accent">
              Get a quote
            </Button>
            <Button to="/services" variant="outline-light">
              Explore services
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}

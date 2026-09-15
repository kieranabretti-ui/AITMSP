import Seo from '../components/Seo.jsx'
import Button from '../components/Button.jsx'
import PricingCalculator from '../components/PricingCalculator.jsx'
import { Link } from 'react-router-dom'

const TRUST_SIGNALS = [
  { label: 'UK-based helpdesk', detail: 'No offshore call queue' },
  { label: 'Fixed price per device', detail: 'One line on the invoice' },
  { label: 'Monitoring from day one', detail: 'Included in every tier' },
  { label: '[PLACEHOLDER: Cyber Essentials Plus]', detail: 'Certification to be confirmed' },
]

const SERVICES = [
  {
    n: '01',
    title: 'IT support',
    body: 'A helpdesk that answers, remote and onsite fixes, and someone who already knows your setup when you call.',
    to: '/services#it-support',
  },
  {
    n: '02',
    title: 'Cybersecurity',
    body: 'Endpoint protection, patching and monitored threat detection, sized to how much risk your business actually carries.',
    to: '/services#cybersecurity',
  },
  {
    n: '03',
    title: 'Monitoring',
    body: 'Devices, servers and network kit watched around the clock, with alerts that reach a person before your team notices anything wrong.',
    to: '/services#monitoring',
  },
  {
    n: '04',
    title: 'Cloud & backup',
    body: "Backups that are actually tested, and cloud accounts (Microsoft 365, Google Workspace) configured so a lost laptop isn't a lost business.",
    to: '/services#cloud-backup',
  },
]

export default function Home() {
  return (
    <>
      <Seo description="A-IT is a UK managed IT support and cybersecurity provider for small and medium businesses. Proactive monitoring, helpdesk support and cybersecurity from £8 per device per month." />

      {/* Hero — asymmetric, off-center split */}
      <section className="relative overflow-hidden border-b border-stone bg-paper-dim">
        <div className="bg-grid-motif pointer-events-none absolute inset-0 opacity-60" />
        <div className="container-x relative grid gap-12 py-20 md:grid-cols-12 md:py-28">
          <div className="md:col-span-7">
            <p className="eyebrow">Managed IT &amp; cybersecurity for UK SMBs</p>
            <h1 className="mt-4 max-w-[18ch] font-display text-[2.75rem] font-semibold leading-[1.05] tracking-tightish md:text-6xl">
              Your IT, handled before it becomes a problem.
            </h1>
            <p className="mt-6 max-w-[52ch] text-lg leading-relaxed text-ink/75 md:text-xl">
              A-IT monitors, patches and protects the devices your business
              runs on — so downtime, phishing emails and a dying laptop
              don't land on your desk on a Tuesday morning.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Button to="/contact" variant="primary">
                Get a quote
              </Button>
              <Button to="/pricing" variant="ghost">
                See pricing →
              </Button>
            </div>
          </div>

          <div className="md:col-span-5 md:pt-3">
            <div className="rounded-sm border border-ink/10 bg-ink text-paper shadow-card">
              <div className="flex items-center justify-between border-b border-paper/10 px-5 py-3">
                <span className="font-mono text-xs uppercase tracking-wideish text-paper/60">
                  Sample client dashboard
                </span>
                <span className="flex items-center gap-1.5 font-mono text-xs text-petrol-light">
                  <span className="h-1.5 w-1.5 rounded-full bg-petrol-light" />
                  Monitored
                </span>
              </div>
              <dl className="divide-y divide-paper/10">
                {[
                  ['Devices online', '42 / 42'],
                  ['Patches applied (7d)', '118'],
                  ['Threats blocked (7d)', '6'],
                  ['Open incidents', '0'],
                ].map(([k, v]) => (
                  <div key={k} className="flex items-center justify-between px-5 py-3.5">
                    <dt className="text-sm text-paper/65">{k}</dt>
                    <dd className="font-mono text-sm tabular-nums text-paper">{v}</dd>
                  </div>
                ))}
              </dl>
              <p className="border-t border-paper/10 px-5 py-3 text-[11px] text-paper/40">
                Illustrative example of the monitoring dashboard clients see — not live or aggregate company data.
              </p>
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
                Four things, done properly.
              </h2>
              <p className="mt-4 max-w-[38ch] text-ink/70">
                We don't sell add-ons you don't need. Everything below is
                core to keeping a small business running and secure.
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
      <section className="border-t border-stone bg-paper-dim py-20 md:py-28">
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

import Seo from '../components/Seo.jsx'
import Button from '../components/Button.jsx'
import Reveal from '../components/Reveal.jsx'
import PricingCalculator from '../components/PricingCalculator.jsx'
import { Link } from 'react-router-dom'

const TRUST_SIGNALS = [
  { label: 'UK-based security team', detail: 'No outsourced SOC' },
  { label: 'Fixed price per device', detail: 'One line on the invoice' },
  { label: '24/7 monitoring on Silver & Gold', detail: 'Not just business hours' },
  { label: '[PLACEHOLDER: Cyber Essentials Plus]', detail: 'Certification to be confirmed' },
]

function IconShield() {
  return (
    <svg viewBox="0 0 40 40" className="h-9 w-9" aria-hidden="true">
      <path
        d="M20 5l11 3.5v9c0 8.5-5.9 13.7-11 17-5.1-3.3-11-8.5-11-17v-9L20 5z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
      />
      <path d="M14.5 20l3.5 3.5L26 15" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function IconRadar() {
  return (
    <svg viewBox="0 0 40 40" className="h-9 w-9" aria-hidden="true">
      <circle cx="20" cy="20" r="13" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.3" />
      <circle cx="20" cy="20" r="7.5" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
      <circle cx="20" cy="20" r="2" fill="currentColor" />
      <path d="M20 20L30 11" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
    </svg>
  )
}

function IconCloud() {
  return (
    <svg viewBox="0 0 40 40" className="h-9 w-9" aria-hidden="true">
      <path
        d="M12 26a6.5 6.5 0 01-0.6-13A7.5 7.5 0 0127 10a5.5 5.5 0 013 10"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
      <path d="M12 26h16" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
    </svg>
  )
}

const SERVICES = [
  {
    n: '01',
    icon: IconShield,
    title: 'Cybersecurity',
    body: 'Endpoint protection, patching and monitored threat detection, sized to how much risk your business actually carries.',
    to: '/services#cybersecurity',
    featured: true,
  },
  {
    n: '02',
    icon: IconRadar,
    title: 'Monitoring & management',
    body: 'Devices, servers and network kit watched around the clock on Silver and Gold, with alerts that reach a person before your team notices anything wrong.',
    to: '/services#monitoring',
  },
  {
    n: '03',
    icon: IconCloud,
    title: 'Cloud & backup',
    body: 'Backup verification on Silver and Gold, plus Microsoft 365 or Google Workspace data protection and backup on Gold.',
    to: '/services#cloud-backup',
  },
]

export default function Home() {
  return (
    <>
      <Seo description="A-IT is a UK managed cybersecurity and monitoring provider for small and medium businesses. Proactive protection, patching and 24/7 monitoring on Silver and Gold, from £8 per device per month." />

      {/* Hero — single bento canvas: headline, response panel and trust chips in one grid */}
      <section className="relative overflow-hidden border-b border-stone bg-paper-dim">
        <div className="bg-grid-motif pointer-events-none absolute inset-0 opacity-50" />
        <div className="container-x relative py-16 md:py-24">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-12">
            <Reveal className="col-span-2 bento-tile p-8 md:col-span-7 md:p-12" as="div">
              <p className="eyebrow">Cybersecurity &amp; managed monitoring for UK SMBs</p>
              <h1 className="mt-4 max-w-[17ch] font-display text-[2.6rem] font-semibold leading-[1.02] tracking-tightish md:text-[3.4rem]">
                Your security, handled before it becomes a problem.
              </h1>
              <p className="mt-6 max-w-[50ch] text-lg leading-relaxed text-ink/75">
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
            </Reveal>

            <Reveal delay={80} className="col-span-2 rounded-[10px] border border-ink/10 bg-ink text-paper shadow-bento md:col-span-5">
              <div className="border-b border-paper/10 px-5 py-3">
                <span className="font-mono text-xs uppercase tracking-wideish text-paper/60">
                  How we respond
                </span>
              </div>
              <ol className="divide-y divide-paper/10">
                {[
                  ['01', 'Monitor', 'Devices and email watched continuously — 24/7 on Silver and Gold'],
                  ['02', 'Detect', 'Alerts triaged the moment something looks wrong, day or night'],
                  ['03', 'Respond', 'A named engineer acts on confirmed threats, not just flags them'],
                  ['04', 'Report', 'A plain-English summary of what happened and what changed'],
                ].map(([n, k, v]) => (
                  <li key={n} className="flex gap-4 px-5 py-4">
                    <span className="font-mono text-xs text-petrol-light">{n}</span>
                    <div>
                      <p className="font-display text-base font-semibold text-paper">{k}</p>
                      <p className="mt-0.5 text-sm leading-snug text-paper/60">{v}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </Reveal>

            {TRUST_SIGNALS.map((t, i) => (
              <Reveal
                key={t.label}
                delay={140 + i * 60}
                className="bento-tile corner-frame p-5 md:col-span-3"
              >
                <p className="font-display text-[15px] font-semibold leading-snug text-ink">
                  {t.label}
                </p>
                <p className="mt-1 text-sm text-slate">{t.detail}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Services overview — bento card grid */}
      <section className="py-20 md:py-28">
        <div className="container-x">
          <Reveal className="max-w-[46ch]">
            <p className="eyebrow">What we do</p>
            <h2 className="mt-3 font-display text-3xl font-semibold leading-tight md:text-4xl">
              Three things, done properly.
            </h2>
            <p className="mt-4 text-ink/70">
              We're a security-first provider. Everything below is core to
              keeping a small business protected — day-to-day helpdesk
              support isn't bundled in, but it's available as a priced
              add-on on top of any tier.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {SERVICES.map((s, i) => {
              const Icon = s.icon
              return (
                <Reveal key={s.n} delay={i * 90} className="md:col-span-1">
                  <Link
                    to={s.to}
                    className="corner-frame group flex h-full flex-col rounded-[10px] border border-stone bg-white/60 p-7 transition-all duration-300 ease-soft hover:-translate-y-1 hover:shadow-bento"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-petrol">
                        <Icon />
                      </span>
                      <span className="font-mono text-xs text-stone-dark">{s.n}</span>
                    </div>
                    <h3 className="mt-6 font-display text-xl font-semibold text-ink transition-colors group-hover:text-petrol">
                      {s.title}
                    </h3>
                    <p className="mt-2 text-[15px] leading-relaxed text-ink/70">{s.body}</p>
                    <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-petrol opacity-0 transition-opacity group-hover:opacity-100">
                      Learn more →
                    </span>
                  </Link>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* Pricing teaser */}
      <section className="border-t border-stone bg-paper-dim py-20 md:py-28">
        <div className="container-x">
          <Reveal className="max-w-[60ch]">
            <p className="eyebrow">Pricing</p>
            <h2 className="mt-3 font-display text-3xl font-semibold leading-tight md:text-4xl">
              Priced per device. See your number in seconds.
            </h2>
          </Reveal>
          <Reveal delay={100} className="mt-10 rounded-[12px] border border-stone bg-white/50 p-2 shadow-bento">
            <PricingCalculator compact />
          </Reveal>
          <div className="mt-8">
            <Button to="/pricing" variant="outline">
              Full pricing &amp; comparison
            </Button>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="relative overflow-hidden bg-ink py-20 text-paper md:py-24">
        <div className="bg-grid-motif-dark pointer-events-none absolute inset-0 opacity-70" />
        <div className="container-x relative flex flex-col items-start gap-6 md:flex-row md:items-end md:justify-between">
          <Reveal>
            <h2 className="max-w-[20ch] font-display text-3xl font-semibold leading-tight md:text-4xl">
              Tell us what's running your business, and we'll tell you what it costs to protect it.
            </h2>
          </Reveal>
          <Reveal delay={100} className="flex shrink-0 gap-4">
            <Button to="/contact" variant="accent">
              Get a quote
            </Button>
            <Button to="/services" variant="outline-light">
              Explore services
            </Button>
          </Reveal>
        </div>
      </section>
    </>
  )
}

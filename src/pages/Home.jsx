import Seo from '../components/Seo.jsx'
import Button from '../components/Button.jsx'
import Marquee from '../components/Marquee.jsx'
import PricingCalculator from '../components/PricingCalculator.jsx'
import { useActiveSection } from '../lib/useActiveSection.js'

const TICKER_ITEMS = [
  'UK-based security team',
  'No outsourced SOC',
  'Fixed price per device',
  '24/7 monitoring on Silver & Gold',
  '[PLACEHOLDER: Cyber Essentials Plus]',
]

function IconShield() {
  return (
    <svg viewBox="0 0 64 64" className="h-14 w-14" aria-hidden="true">
      <path
        d="M32 8l18 6v14c0 14-9.5 22.5-18 28-8.5-5.5-18-14-18-28V14l18-6z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path d="M23 32l6 6 12-13" fill="none" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function IconRadar() {
  return (
    <svg viewBox="0 0 64 64" className="h-14 w-14" aria-hidden="true">
      <circle cx="32" cy="32" r="22" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.3" />
      <circle cx="32" cy="32" r="13" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
      <circle cx="32" cy="32" r="2.5" fill="currentColor" />
      <path d="M32 32L48 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <circle cx="48" cy="18" r="2.5" fill="currentColor" />
    </svg>
  )
}

function IconCloud() {
  return (
    <svg viewBox="0 0 64 64" className="h-14 w-14" aria-hidden="true">
      <path
        d="M20 42a10 10 0 01-1-19.9A12 12 0 0143 18a9 9 0 015 16.3"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path d="M20 42h24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M32 34v16m0 0l-5-5m5 5l5-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

const SERVICES = [
  {
    icon: IconShield,
    n: '01',
    title: 'Cybersecurity',
    body: 'Endpoint protection, patching and monitored threat detection, sized to how much risk your business actually carries. 24/7 monitored detection and EDR from Silver.',
  },
  {
    icon: IconRadar,
    n: '02',
    title: 'Monitoring & management',
    body: 'Devices, servers and network kit watched around the clock on Silver and Gold, with alerts that reach a person before your team notices anything wrong.',
  },
  {
    icon: IconCloud,
    n: '03',
    title: 'Cloud & backup',
    body: 'Backup verification on Silver and Gold, plus Microsoft 365 or Google Workspace data protection and backup on Gold — so a lost laptop or deleted mailbox isn’t a lost business.',
  },
]

export default function Home() {
  const [active, registerRef] = useActiveSection(SERVICES.length)
  const ActiveIcon = SERVICES[active].icon

  return (
    <>
      <Seo description="A-IT is a UK managed cybersecurity and monitoring provider for small and medium businesses. Proactive protection, patching and 24/7 monitoring on Silver and Gold, from £8 per device per month." />

      {/* Hero — full-bleed dark canvas, type as the hero device */}
      <section className="relative overflow-hidden">
        <div className="bg-grid-motif-dark pointer-events-none absolute inset-0 opacity-70" />
        <div
          className="pointer-events-none absolute -top-1/3 right-[-10%] h-[600px] w-[600px] rounded-full opacity-20 blur-3xl"
          style={{ background: 'radial-gradient(circle, #2C5A52 0%, transparent 70%)' }}
          aria-hidden="true"
        />
        <div className="container-x relative flex min-h-[86vh] flex-col justify-center py-24">
          <p className="eyebrow">Cybersecurity &amp; managed monitoring for UK SMBs</p>
          <h1 className="mt-6 max-w-[15ch] font-display text-[clamp(2.75rem,8vw,6.5rem)] font-semibold leading-[0.98] tracking-tightish">
            Your security,
            <br />
            <span className="text-petrol-light">handled before</span>
            <br />
            it becomes a problem.
          </h1>
          <p className="mt-8 max-w-[52ch] text-lg leading-relaxed text-paper/65 md:text-xl">
            A-IT monitors, patches and protects the devices your business
            runs on — so downtime, phishing emails and a dying laptop
            don't land on your desk on a Tuesday morning.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Button to="/contact" variant="primary">
              Get a quote
            </Button>
            <Button to="/pricing" variant="ghost">
              See pricing →
            </Button>
          </div>
        </div>
      </section>

      <Marquee items={TICKER_ITEMS} />

      {/* Sticky-scroll services story */}
      <section className="border-b border-paper/10 py-20 md:py-28">
        <div className="container-x">
          <p className="eyebrow">What we do</p>
          <h2 className="mt-3 max-w-[20ch] font-display text-3xl font-semibold leading-tight md:text-4xl">
            Three things, done properly.
          </h2>
          <p className="mt-4 max-w-[46ch] text-paper/60">
            We're a security-first provider. Day-to-day helpdesk support
            isn't bundled in, but it's available as a priced add-on on top
            of any tier.
          </p>

          <div className="mt-14 grid gap-10 md:grid-cols-12">
            <div className="hidden md:col-span-5 md:block">
              <div className="sticky top-28 flex items-start gap-5">
                <span className="text-petrol-light">
                  <ActiveIcon />
                </span>
                <div>
                  <p className="font-mono text-sm text-brass-light">{SERVICES[active].n}</p>
                  <p className="mt-1 font-display text-2xl font-semibold">
                    {SERVICES[active].title}
                  </p>
                </div>
              </div>
            </div>

            <div className="md:col-span-7">
              {SERVICES.map((s, i) => {
                const Icon = s.icon
                return (
                  <div
                    key={s.n}
                    ref={registerRef(i)}
                    className="flex min-h-[46vh] flex-col justify-center border-t border-paper/10 py-10 first:border-t-0 md:min-h-[52vh]"
                  >
                    <span className="text-petrol-light md:hidden">
                      <Icon />
                    </span>
                    <p className="mt-4 font-mono text-sm text-brass-light md:hidden">{s.n}</p>
                    <h3 className="mt-2 font-display text-2xl font-semibold md:hidden">{s.title}</h3>
                    <p className="mt-4 max-w-[52ch] text-lg leading-relaxed text-paper/70">
                      {s.body}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Big standalone statement */}
      <section className="border-b border-paper/10 py-28 md:py-36">
        <div className="container-x">
          <p className="max-w-[18ch] font-display text-[clamp(1.75rem,4.5vw,3.25rem)] font-semibold leading-[1.05] tracking-tightish text-paper/90">
            Not a helpdesk. Not an upsell engine.{' '}
            <span className="text-petrol-light">Just protection that works</span> while you don't think about it.
          </p>
        </div>
      </section>

      {/* Pricing teaser — paper island for legibility */}
      <section className="py-20 md:py-28">
        <div className="container-x">
          <p className="eyebrow">Pricing</p>
          <h2 className="mt-3 font-display text-3xl font-semibold leading-tight md:text-4xl">
            Priced per device. See your number in seconds.
          </h2>
          <div className="paper-island mt-10 p-2">
            <PricingCalculator compact />
          </div>
          <div className="mt-8">
            <Button to="/pricing" variant="outline">
              Full pricing &amp; comparison
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}

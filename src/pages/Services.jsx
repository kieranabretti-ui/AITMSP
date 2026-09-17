import Seo from '../components/Seo.jsx'
import Button from '../components/Button.jsx'

function IconShield() {
  return (
    <svg viewBox="0 0 64 64" className="h-16 w-16" aria-hidden="true">
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
    <svg viewBox="0 0 64 64" className="h-16 w-16" aria-hidden="true">
      <circle cx="32" cy="32" r="22" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.25" />
      <circle cx="32" cy="32" r="13" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
      <circle cx="32" cy="32" r="2.5" fill="currentColor" />
      <path d="M32 32L48 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <circle cx="48" cy="18" r="2.5" fill="currentColor" />
    </svg>
  )
}

function IconCloud() {
  return (
    <svg viewBox="0 0 64 64" className="h-16 w-16" aria-hidden="true">
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

function IconHelpdesk() {
  return (
    <svg viewBox="0 0 64 64" className="h-10 w-10" aria-hidden="true">
      <circle cx="32" cy="32" r="30" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.25" />
      <path d="M20 34v-4a12 12 0 0124 0v4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <rect x="16" y="34" width="8" height="10" rx="2" fill="none" stroke="currentColor" strokeWidth="2" />
      <rect x="40" y="34" width="8" height="10" rx="2" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="M44 44v2a6 6 0 01-6 6h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

const SECTIONS = [
  {
    id: 'cybersecurity',
    icon: IconShield,
    eyebrow: '01 — Cybersecurity',
    title: 'Security is the job, not the upsell.',
    lead: 'Most attacks on small businesses aren’t sophisticated — they’re a phishing email, a reused password, or a laptop patched three months late. We close those gaps and keep watching for the next one.',
    points: [
      'Managed endpoint protection and patching across Windows, macOS and common third-party apps',
      'Email security — phishing and spoofing filtering, with SPF, DKIM and DMARC configured properly',
      'Multi-factor authentication rolled out across email, cloud storage and other key systems',
      '24/7 monitored threat detection and endpoint detection & response (EDR), with a named response plan, not just an alert nobody reads (Silver & Gold)',
    ],
  },
  {
    id: 'monitoring',
    icon: IconRadar,
    eyebrow: '02 — Monitoring & management',
    title: 'Round-the-clock on Silver and Gold. Never guesswork.',
    lead: 'A dying hard drive, a failed backup job, a server quietly running out of disk space — the failures that cause real downtime almost always give warning first. Bronze covers monitoring during business hours; Silver and Gold watch around the clock.',
    points: [
      'Devices, servers, switches and Wi-Fi access points monitored 24/7 on Silver and Gold, business hours on Bronze',
      'Thresholds tuned to catch real problems early — failing disks, memory pressure, unusual login activity',
      'Out-of-hours alerting that reaches a person, with escalation if the first alert isn’t acknowledged (Silver & Gold)',
      'Monthly reporting so you can see device health and patch status without having to ask',
    ],
  },
  {
    id: 'cloud-backup',
    icon: IconCloud,
    eyebrow: '03 — Cloud & backup',
    title: 'Backups that are proven to work, not just scheduled.',
    lead: 'A backup you’ve never tested is a guess. Silver and Gold verify your backups are actually working, not just scheduled — and on Gold we go further, protecting and backing up your Microsoft 365 or Google Workspace data directly, not just checking someone else’s backup exists.',
    points: [
      'Microsoft 365 or Google Workspace administration — mailboxes, licensing, shared drives, conditional access',
      'Microsoft 365 / Google Workspace data protection and backup, so a deleted mailbox or file isn’t gone for good (Gold)',
      'Backup verification for servers and endpoints, with scheduled test restores logged and reported (Silver & Gold)',
      'A written recovery plan for what happens if a device, account or server is lost or compromised',
    ],
  },
]

export default function Services() {
  return (
    <>
      <Seo
        title="Services"
        description="A-IT services: cybersecurity, 24/7 monitoring and management, and cloud & backup — a security-first managed provider for UK small and medium businesses."
      />

      <section className="border-b border-stone bg-paper-dim py-16 md:py-24">
        <div className="container-x">
          <p className="eyebrow">Services</p>
          <h1 className="mt-3 max-w-[22ch] font-display text-4xl font-semibold leading-[1.05] md:text-5xl">
            Everything a small business needs to stay secure. Nothing it doesn't.
          </h1>
          <p className="mt-5 max-w-[58ch] text-lg leading-relaxed text-ink/75">
            Three areas, all included across our tiers to different depths —
            see the <a className="link-underline text-petrol" href="/pricing">pricing comparison</a> for exactly what's in Bronze, Silver and Gold.
          </p>
        </div>
      </section>

      {SECTIONS.map((section, i) => {
        const Icon = section.icon
        const reversed = i % 2 === 1
        return (
          <section
            key={section.id}
            id={section.id}
            className={`scroll-mt-[72px] border-b border-stone py-16 md:py-24 ${
              reversed ? 'bg-paper-dim' : 'bg-paper'
            }`}
          >
            <div className="container-x">
              <div className="grid gap-10 md:grid-cols-12 md:gap-14">
                <div className={`md:col-span-3 ${reversed ? 'md:order-2' : ''}`}>
                  <div className="flex items-start md:sticky md:top-24">
                    <div className="text-petrol">
                      <Icon />
                    </div>
                  </div>
                </div>

                <div className={`md:col-span-9 ${reversed ? 'md:order-1' : ''}`}>
                  <p className="eyebrow">{section.eyebrow}</p>
                  <h2 className="mt-3 max-w-[24ch] font-display text-3xl font-semibold leading-tight md:text-4xl">
                    {section.title}
                  </h2>
                  <p className="mt-5 max-w-[62ch] text-lg leading-relaxed text-ink/75">
                    {section.lead}
                  </p>
                  <ul className="mt-8 grid max-w-[70ch] gap-x-8 gap-y-4 sm:grid-cols-2">
                    {section.points.map((p) => (
                      <li key={p} className="flex gap-3 border-t border-stone pt-4 text-[15px] leading-relaxed text-ink/85">
                        <span aria-hidden="true" className="mt-1 text-brass">＋</span>
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>
        )
      })}

      {/* Optional add-on — deliberately outside the numbered core list */}
      <section className="border-b border-stone bg-paper py-16 md:py-20">
        <div className="container-x">
          <div className="flex flex-col gap-6 rounded-sm border border-stone-dark bg-paper-dim p-8 md:flex-row md:items-start md:gap-8 md:p-10">
            <div className="text-slate">
              <IconHelpdesk />
            </div>
            <div>
              <p className="eyebrow">Also available, priced separately</p>
              <h2 className="mt-2 font-display text-2xl font-semibold md:text-3xl">
                Day-to-day IT support
              </h2>
              <p className="mt-3 max-w-[62ch] text-ink/75">
                We're a security-first provider, not a helpdesk by default —
                general day-to-day IT support isn't included in Bronze,
                Silver or Gold. Two ways to add it: pay-as-you-go break-fix
                callouts from £60/hour, or Premium SLA ticket support from
                £10 per device a month (Mon–Fri, 8am–5pm), on top of any
                tier.
              </p>
              <div className="mt-5">
                <Button to="/pricing#addons" variant="outline">
                  See add-on pricing
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ink py-20 text-paper md:py-24">
        <div className="container-x flex flex-col items-start gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow !text-brass-light">Ready when you are</p>
            <h2 className="mt-3 max-w-[22ch] font-display text-3xl font-semibold leading-tight md:text-4xl">
              See what this looks like for your device count.
            </h2>
          </div>
          <div className="flex shrink-0 gap-4">
            <Button to="/pricing" variant="accent">
              Estimate your cost
            </Button>
            <Button to="/contact" variant="outline-light">
              Talk to us
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}

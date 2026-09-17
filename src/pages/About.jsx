import Seo from '../components/Seo.jsx'
import Button from '../components/Button.jsx'
import { BUSINESS } from '../lib/business.js'

export default function About() {
  return (
    <>
      <Seo
        title="About"
        description="A-IT is a small, UK-based managed cybersecurity team. Here's how we work and why we set it up this way."
      />

      <section className="border-b border-paper/10 py-16 md:py-24">
        <div className="container-x">
          <p className="eyebrow">About</p>
          <h1 className="mt-3 max-w-[18ch] font-display text-[clamp(2rem,5.5vw,4rem)] font-semibold leading-[1.05] tracking-tightish">
            Most security is sold as an add-on to a helpdesk contract.{' '}
            <span className="text-petrol-light">We built it the other way round.</span>
          </h1>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container-x">
          <div className="grid gap-10 md:grid-cols-12">
            <div className="paper-island space-y-6 p-8 md:col-span-7 md:col-start-1 md:p-10">
              <p className="font-display text-2xl leading-snug text-ink/90 md:text-[1.6rem]">
                A-IT started because too many small businesses were stuck
                choosing between enterprise security tooling priced for
                companies ten times their size, and managed providers who
                only take security seriously once you've bought a helpdesk
                contract you didn't need.
              </p>
              <p className="leading-relaxed text-ink/75">
                Neither made sense. A 40-person company doesn’t need a
                27-page security policy nobody reads — it needs its laptops
                patched, its backups tested, and someone watching for the
                invoice that looks like it might be a scam. So that’s what
                we built: monitoring and cybersecurity scoped to what a
                small or medium business actually runs on, priced simply
                enough that you can work out your bill without a
                spreadsheet. We're upfront that day-to-day helpdesk support
                isn't part of the package — it dilutes what we're actually
                good at, so we'd rather scope it separately if you need it.
              </p>
              <p className="leading-relaxed text-ink/75">
                We’re a small team by design. If something trips an alert,
                you’ll usually end up dealing with someone who already
                knows your setup, not a first-line script-reader whose job
                is to escalate you elsewhere. That’s slower to scale than a
                call-centre model — it’s also the reason clients stay.
              </p>
              <div className="pt-2">
                <Button to="/contact" variant="on-paper-outline">
                  Get in touch
                </Button>
              </div>
            </div>

            <div className="grid gap-3 md:col-span-4 md:col-start-9">
              <div className="rounded-2xl border border-paper/15 bg-ink-soft p-5">
                <p className="eyebrow">Based</p>
                <p className="mt-1 text-paper/80">{BUSINESS.address}</p>
              </div>
              <div className="rounded-2xl border border-paper/15 bg-ink-soft p-5">
                <p className="eyebrow">Founded</p>
                <p className="mt-1 text-paper/80">[PLACEHOLDER: founding year]</p>
              </div>
              <div className="rounded-2xl border border-paper/15 bg-ink-soft p-5">
                <p className="eyebrow">Team</p>
                <p className="mt-1 text-paper/80">
                  [PLACEHOLDER: team size / founder bio — kept out of scope for this build]
                </p>
              </div>
              <div className="rounded-2xl border border-paper/15 bg-ink-soft p-5">
                <p className="eyebrow">Coverage</p>
                <p className="mt-1 text-paper/80">
                  Remote monitoring and management UK-wide
                  [PLACEHOLDER: confirm onsite availability and service radius]
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-paper/10 py-16 md:py-20">
        <div className="container-x">
          <p className="eyebrow">How we work</p>
          <h2 className="mt-3 max-w-[26ch] font-display text-3xl font-semibold leading-tight md:text-4xl">
            Three things we try never to do.
          </h2>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {[
              {
                title: 'Bill for jargon',
                body: 'If we can’t explain a recommendation in plain English and a reason it matters to your business, we don’t make it.',
              },
              {
                title: 'Let an alert go unowned',
                body: 'Every alert and open issue has a named owner. If something’s taking longer than expected to resolve, you’ll hear that from us before you have to ask.',
              },
              {
                title: 'Sell you what you don’t need',
                body: 'Our tiers exist so you pay for the level of cover that matches your risk — not the biggest package we can quote.',
              },
            ].map((item) => (
              <div key={item.title} className="border-t-2 border-brass pt-5">
                <h3 className="font-display text-xl font-semibold">{item.title}</h3>
                <p className="mt-2 leading-relaxed text-paper/65">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

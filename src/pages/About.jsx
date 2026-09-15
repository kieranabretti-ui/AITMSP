import Seo from '../components/Seo.jsx'
import Button from '../components/Button.jsx'
import { BUSINESS } from '../lib/business.js'

export default function About() {
  return (
    <>
      <Seo
        title="About"
        description="A-IT is a small, UK-based managed IT and cybersecurity team. Here's how we work and why we set it up this way."
      />

      <section className="border-b border-stone py-16 md:py-24">
        <div className="container-x">
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-8">
              <p className="eyebrow">About</p>
              <h1 className="mt-3 font-display text-4xl font-semibold leading-[1.05] md:text-5xl">
                Most IT support is built around the provider, not the client. We built it the other way round.
              </h1>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container-x">
          <div className="grid gap-14 md:grid-cols-12">
            <div className="space-y-6 md:col-span-7 md:col-start-1">
              <p className="font-display text-2xl leading-snug text-ink/90 md:text-[1.65rem]">
                A-IT started because too many small businesses were stuck
                choosing between IT support that’s too slow to matter and
                enterprise security tooling priced for companies ten times
                their size.
              </p>
              <p className="leading-relaxed text-ink/75">
                Neither made sense. A 40-person company doesn’t need a
                27-page security policy nobody reads — it needs its laptops
                patched, its backups tested, and someone to answer the
                phone when an invoice looks like it might be a scam. So
                that’s what we built: support and cybersecurity scoped to
                what a small or medium business actually runs on, priced
                simply enough that you can work out your bill without a
                spreadsheet.
              </p>
              <p className="leading-relaxed text-ink/75">
                We’re a small team by design. If you call, you’ll
                usually end up speaking to someone who already knows your
                setup, not a first-line script-reader whose job is to
                escalate you elsewhere. That’s slower to scale than a
                call-centre model — it’s also the reason clients stay.
              </p>
              <div className="pt-2">
                <Button to="/contact" variant="outline">
                  Get in touch
                </Button>
              </div>
            </div>

            <div className="space-y-8 border-t border-stone pt-8 md:col-span-4 md:col-start-9 md:border-t-0 md:border-l md:border-stone md:pl-10 md:pt-0">
              <div>
                <p className="eyebrow">Based</p>
                <p className="mt-1 text-ink/85">
                  {BUSINESS.address}
                </p>
              </div>
              <div>
                <p className="eyebrow">Founded</p>
                <p className="mt-1 text-ink/85">
                  [PLACEHOLDER: founding year]
                </p>
              </div>
              <div>
                <p className="eyebrow">Team</p>
                <p className="mt-1 text-ink/85">
                  [PLACEHOLDER: team size / founder bio — kept out of scope for this build]
                </p>
              </div>
              <div>
                <p className="eyebrow">Coverage</p>
                <p className="mt-1 text-ink/85">
                  Remote support UK-wide, onsite visits within
                  [PLACEHOLDER: confirm onsite service radius]
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-stone bg-paper-dim py-16 md:py-20">
        <div className="container-x">
          <p className="eyebrow">How we work</p>
          <h2 className="mt-3 max-w-[26ch] font-display text-3xl font-semibold leading-tight md:text-4xl">
            Three things we try never to do.
          </h2>
          <div className="mt-10 grid gap-x-10 gap-y-10 md:grid-cols-3">
            <div className="border-t-2 border-brass pt-5">
              <h3 className="font-display text-xl font-semibold">
                Bill for jargon
              </h3>
              <p className="mt-2 leading-relaxed text-ink/70">
                If we can’t explain a recommendation in plain English and
                a reason it matters to your business, we don’t make it.
              </p>
            </div>
            <div className="border-t-2 border-brass pt-5">
              <h3 className="font-display text-xl font-semibold">
                Let a ticket go quiet
              </h3>
              <p className="mt-2 leading-relaxed text-ink/70">
                Every open issue has an owner. If something’s taking
                longer than expected, you’ll hear that from us before you
                have to ask.
              </p>
            </div>
            <div className="border-t-2 border-brass pt-5">
              <h3 className="font-display text-xl font-semibold">
                Sell you what you don’t need
              </h3>
              <p className="mt-2 leading-relaxed text-ink/70">
                Our tiers exist so you pay for the level of cover that
                matches your risk — not the biggest package we can quote.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

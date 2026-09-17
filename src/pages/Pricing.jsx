import Seo from '../components/Seo.jsx'
import Button from '../components/Button.jsx'
import Reveal from '../components/Reveal.jsx'
import PricingCalculator from '../components/PricingCalculator.jsx'
import PricingTable from '../components/PricingTable.jsx'
import { ADDONS, formatGBP } from '../lib/pricing.js'

export default function Pricing() {
  return (
    <>
      <Seo
        title="Pricing"
        description="Simple per-device pricing for managed cybersecurity and monitoring: Bronze £8, Silver £15, Gold £18 per device per month. 24/7 monitoring on Silver and Gold — see what's included and estimate your cost."
      />

      <section className="border-b border-stone bg-paper-dim py-16 md:py-24">
        <div className="container-x">
          <p className="eyebrow">Pricing</p>
          <h1 className="mt-3 max-w-[16ch] font-display text-4xl font-semibold leading-[1.05] md:text-5xl">
            One price per device. No surprise line items.
          </h1>
          <p className="mt-5 max-w-[56ch] text-lg leading-relaxed text-ink/75">
            You pay a flat monthly rate per device covered. No setup fees
            buried in a PDF, no "starting from" pricing that changes at the
            call. Pick a tier, tell us how many devices, and that's the bill.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container-x">
          <Reveal>
            <h2 className="font-display text-2xl font-semibold md:text-3xl">
              Estimate your monthly cost
            </h2>
            <p className="mt-2 max-w-[56ch] text-ink/70">
              Move the slider or type a device count — every laptop, desktop
              and server you'd like covered.
            </p>
          </Reveal>
          <Reveal delay={100} className="mt-8">
            <PricingCalculator />
          </Reveal>
        </div>
      </section>

      <section className="border-t border-stone py-16 md:py-20">
        <div className="container-x">
          <Reveal>
            <h2 className="font-display text-2xl font-semibold md:text-3xl">
              Compare what's included
            </h2>
            <p className="mt-2 max-w-[56ch] text-ink/70">
              Each tier builds on the one before it — Silver includes
              everything in Bronze, Gold includes everything in Silver.
            </p>
          </Reveal>
          <Reveal delay={100} className="mt-8">
            <PricingTable />
          </Reveal>
        </div>
      </section>

      <section id="addons" className="scroll-mt-[88px] border-t border-stone bg-paper-dim py-16 md:py-20">
        <div className="container-x">
          <Reveal>
            <p className="eyebrow">Add-ons</p>
            <h2 className="mt-3 font-display text-2xl font-semibold md:text-3xl">
              Priced by the job, not the tier
            </h2>
            <p className="mt-2 max-w-[56ch] text-ink/70">
              Outside the monthly plans, on top of any tier — pay for what
              you actually use.
            </p>
          </Reveal>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {ADDONS.map((addon, i) => (
              <Reveal
                key={addon.id}
                delay={100 + i * 90}
                className="corner-frame rounded-[10px] border border-stone bg-white/60 p-7"
              >
                <p className="font-mono text-xs uppercase tracking-wideish text-slate">
                  {addon.cadence}
                </p>
                <h3 className="mt-2 font-display text-2xl font-semibold">{addon.name}</h3>
                <p className="mt-4 font-display text-3xl font-semibold tabular-nums">
                  {formatGBP(addon.price)}
                  <span className="ml-1 font-body text-base font-normal text-slate">
                    {addon.unit}
                  </span>
                </p>
                <p className="mt-2 max-w-[42ch] text-sm leading-relaxed text-slate">
                  {addon.detail}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-t border-stone bg-ink py-16 text-paper md:py-20">
        <div className="bg-grid-motif-dark pointer-events-none absolute inset-0 opacity-70" />
        <div className="container-x relative grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="font-display text-2xl font-semibold md:text-3xl">
              Not sure which tier fits?
            </h2>
            <p className="mt-3 max-w-[48ch] text-paper/70">
              Most businesses without a compliance requirement start on
              Silver. If you handle client card data, health records or
              operate in a regulated sector, Gold is worth the conversation.
            </p>
            <div className="mt-6">
              <Button to="/contact" variant="accent">
                Talk to us about your setup
              </Button>
            </div>
          </div>
          <dl className="space-y-6 border-t border-paper/15 pt-8 md:border-t-0 md:border-l md:border-paper/15 md:pl-10 md:pt-0">
            <div>
              <dt className="font-mono text-xs uppercase tracking-wideish text-brass-light">
                Contract terms
              </dt>
              <dd className="mt-1 text-paper/75">
                [PLACEHOLDER: confirm minimum term — monthly rolling or annual]
              </dd>
            </div>
            <div>
              <dt className="font-mono text-xs uppercase tracking-wideish text-brass-light">
                Onboarding
              </dt>
              <dd className="mt-1 text-paper/75">
                [PLACEHOLDER: confirm onboarding fee, if any, and typical setup time]
              </dd>
            </div>
            <div>
              <dt className="font-mono text-xs uppercase tracking-wideish text-brass-light">
                VAT
              </dt>
              <dd className="mt-1 text-paper/75">
                All prices shown exclude VAT.
              </dd>
            </div>
          </dl>
        </div>
      </section>
    </>
  )
}

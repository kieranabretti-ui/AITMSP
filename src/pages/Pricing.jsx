import Seo from '../components/Seo.jsx'
import Button from '../components/Button.jsx'
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

      <section className="border-b border-paper/10 py-16 md:py-24">
        <div className="container-x">
          <p className="eyebrow">Pricing</p>
          <h1 className="mt-3 max-w-[14ch] font-display text-[clamp(2.25rem,6vw,4.5rem)] font-semibold leading-[1.02] tracking-tightish">
            One price per device. No surprise line items.
          </h1>
          <p className="mt-5 max-w-[56ch] text-lg leading-relaxed text-paper/65">
            You pay a flat monthly rate per device covered. No setup fees
            buried in a PDF, no "starting from" pricing that changes at the
            call. Pick a tier, tell us how many devices, and that's the bill.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container-x">
          <h2 className="font-display text-2xl font-semibold md:text-3xl">
            Estimate your monthly cost
          </h2>
          <p className="mt-2 max-w-[56ch] text-paper/60">
            Move the slider or type a device count — every laptop, desktop
            and server you'd like covered.
          </p>
          <div className="paper-island mt-8 p-6 md:p-8">
            <PricingCalculator />
          </div>
        </div>
      </section>

      <section className="border-t border-paper/10 py-16 md:py-20">
        <div className="container-x">
          <h2 className="font-display text-2xl font-semibold md:text-3xl">
            Compare what's included
          </h2>
          <p className="mt-2 max-w-[56ch] text-paper/60">
            Each tier builds on the one before it — Silver includes
            everything in Bronze, Gold includes everything in Silver.
          </p>
          <div className="paper-island mt-8 overflow-hidden p-6 md:p-8">
            <PricingTable />
          </div>
        </div>
      </section>

      <section id="addons" className="scroll-mt-[88px] border-t border-paper/10 py-16 md:py-20">
        <div className="container-x">
          <p className="eyebrow">Add-ons</p>
          <h2 className="mt-3 font-display text-2xl font-semibold md:text-3xl">
            Priced by the job, not the tier
          </h2>
          <p className="mt-2 max-w-[56ch] text-paper/60">
            Outside the monthly plans, on top of any tier — pay for what
            you actually use.
          </p>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {ADDONS.map((addon) => (
              <div
                key={addon.id}
                className="rounded-2xl border border-paper/15 bg-ink-soft p-8 transition-shadow duration-300 hover:shadow-glow"
              >
                <p className="font-mono text-xs uppercase tracking-wideish text-brass-light">
                  {addon.cadence}
                </p>
                <h3 className="mt-2 font-display text-2xl font-semibold">{addon.name}</h3>
                <p className="mt-5 font-display text-4xl font-semibold tabular-nums text-petrol-light">
                  {formatGBP(addon.price)}
                  <span className="ml-1 font-body text-base font-normal text-paper/50">
                    {addon.unit}
                  </span>
                </p>
                <p className="mt-3 max-w-[42ch] text-sm leading-relaxed text-paper/60">
                  {addon.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-paper/10 py-16 md:py-20">
        <div className="container-x grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="font-display text-2xl font-semibold md:text-3xl">
              Not sure which tier fits?
            </h2>
            <p className="mt-3 max-w-[48ch] text-paper/60">
              Most businesses without a compliance requirement start on
              Silver. If you handle client card data, health records or
              operate in a regulated sector, Gold is worth the conversation.
            </p>
            <div className="mt-6">
              <Button to="/contact" variant="primary">
                Talk to us about your setup
              </Button>
            </div>
          </div>
          <dl className="space-y-6 border-t border-paper/10 pt-8 md:border-t-0 md:border-l md:border-paper/10 md:pl-10 md:pt-0">
            <div>
              <dt className="font-mono text-xs uppercase tracking-wideish text-brass-light">
                Contract terms
              </dt>
              <dd className="mt-1 text-paper/70">
                [PLACEHOLDER: confirm minimum term — monthly rolling or annual]
              </dd>
            </div>
            <div>
              <dt className="font-mono text-xs uppercase tracking-wideish text-brass-light">
                Onboarding
              </dt>
              <dd className="mt-1 text-paper/70">
                [PLACEHOLDER: confirm onboarding fee, if any, and typical setup time]
              </dd>
            </div>
            <div>
              <dt className="font-mono text-xs uppercase tracking-wideish text-brass-light">
                VAT
              </dt>
              <dd className="mt-1 text-paper/70">
                All prices shown exclude VAT.
              </dd>
            </div>
          </dl>
        </div>
      </section>
    </>
  )
}

import Seo from '../components/Seo.jsx'
import Button from '../components/Button.jsx'
import PricingCalculator from '../components/PricingCalculator.jsx'
import PricingTable from '../components/PricingTable.jsx'

export default function Pricing() {
  return (
    <>
      <Seo
        title="Pricing"
        description="Simple per-device pricing for managed IT support and cybersecurity: Bronze £8, Silver £15, Gold £18 per device per month. See what's included and estimate your cost."
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
          <h2 className="font-display text-2xl font-semibold md:text-3xl">
            Estimate your monthly cost
          </h2>
          <p className="mt-2 max-w-[56ch] text-ink/70">
            Move the slider or type a device count — every laptop, desktop
            and server you'd like covered.
          </p>
          <div className="mt-8">
            <PricingCalculator />
          </div>
        </div>
      </section>

      <section className="border-t border-stone py-16 md:py-20">
        <div className="container-x">
          <h2 className="font-display text-2xl font-semibold md:text-3xl">
            Compare what's included
          </h2>
          <p className="mt-2 max-w-[56ch] text-ink/70">
            Each tier builds on the one before it — Silver includes
            everything in Bronze, Gold includes everything in Silver.
          </p>
          <div className="mt-8">
            <PricingTable />
          </div>
        </div>
      </section>

      <section className="border-t border-stone bg-ink py-16 text-paper md:py-20">
        <div className="container-x grid gap-10 md:grid-cols-2">
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

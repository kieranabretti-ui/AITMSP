import { useEffect } from 'react'
import Seo from '../components/Seo.jsx'
import { BUSINESS } from '../lib/business.js'
import { hasAnalyticsConsent, loadGoogleAdsConversionTracking, CONSENT_ACCEPTED_EVENT } from '../lib/analytics.js'

// Reached only via the redirect after a successful /dorset-it-support
// form submission, or a direct link — never linked from elsewhere on
// the site. noindex for the same reason as the landing page it belongs
// to; this is also the URL the Google Ads conversion tag fires on
// (see the useEffect below), since reaching this page is the
// conversion event for that campaign.

export default function DorsetITSupportThankYou() {
  useEffect(() => {
    if (hasAnalyticsConsent()) {
      loadGoogleAdsConversionTracking()
      return
    }
    window.addEventListener(CONSENT_ACCEPTED_EVENT, loadGoogleAdsConversionTracking)
    return () => window.removeEventListener(CONSENT_ACCEPTED_EVENT, loadGoogleAdsConversionTracking)
  }, [])

  return (
    <>
      <Seo
        title="Thanks — we've got your details"
        description="Thanks for getting in touch with A-IT. A member of the team will be in touch within one business day."
        noindex
      />

      <section className="py-24 md:py-32">
        <div className="container-x max-w-[52ch]">
          <div className="rounded-sm border border-petrol/30 bg-petrol/[0.06] p-8">
            <h1 className="font-display text-3xl font-semibold leading-tight text-ink md:text-4xl">
              Thanks &mdash; we&rsquo;ve got your details.
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-ink/75">
              A member of the A-IT team will be in touch within one business
              day. If it&rsquo;s urgent, call us on{' '}
              <a className="link-underline text-petrol" href={BUSINESS.phoneHref}>
                {BUSINESS.phone}
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

import { Link } from 'react-router-dom'
import Seo from '../components/Seo.jsx'
import { BUSINESS } from '../lib/business.js'

export default function Terms() {
  return (
    <>
      <Seo
        title="Terms &amp; Conditions"
        description="Terms and conditions for using the A-IT website. Actual managed service engagements are governed by a separate signed agreement."
      />

      <section className="border-b border-stone bg-paper-dim py-16 md:py-20">
        <div className="container-x">
          <p className="eyebrow">Legal</p>
          <h1 className="mt-3 max-w-[20ch] font-display text-4xl font-semibold leading-[1.05] md:text-5xl">
            Terms &amp; Conditions
          </h1>
          <p className="mt-4 text-sm text-slate">Last updated: 17 September 2026</p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container-x max-w-[70ch]">
          <div className="space-y-8 text-ink/80">
            <div>
              <h2 className="font-display text-xl font-semibold text-ink">Scope</h2>
              <p className="mt-3 leading-relaxed">
                These terms cover your use of this website only — they are
                not the contract for A-IT's managed IT and cybersecurity
                services. If you become a client, that relationship is
                governed by a separate signed{' '}
                <a
                  className="link-underline text-petrol"
                  href="/A-IT-Managed-Services-Agreement.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Managed IT Services Agreement
                </a>
                , which takes precedence over anything on this site in the
                event of a conflict. The linked copy is a working template —
                some terms (notice periods, response-time credits) are still
                marked for confirmation, and it hasn't yet been reviewed by a
                solicitor.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-semibold text-ink">Using this site</h2>
              <p className="mt-3 leading-relaxed">
                You may browse this site and use the contact form to get
                in touch with us. Don't use it to send unlawful,
                abusive or fraudulent content, attempt to gain
                unauthorised access to it, or interfere with how it runs
                (including automated scraping beyond normal search-engine
                indexing).
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-semibold text-ink">Accuracy of information</h2>
              <p className="mt-3 leading-relaxed">
                We try to keep pricing, service descriptions and contact
                details on this site accurate and current, but they're
                provided for general information and don't constitute a
                binding quote or offer. Confirm current pricing and exact
                service inclusions with us directly before relying on
                them — see the <Link className="link-underline text-petrol" to="/pricing">pricing page</Link> for
                the tiers and add-ons this applies to.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-semibold text-ink">Intellectual property</h2>
              <p className="mt-3 leading-relaxed">
                The text, design and branding on this site belong to A-IT
                unless stated otherwise. You can view and share pages
                normally (e.g. sending a link), but don't reproduce or
                repurpose the content commercially without asking us
                first.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-semibold text-ink">No professional advice</h2>
              <p className="mt-3 leading-relaxed">
                Content on this site is general information about our
                services, not tailored cybersecurity or IT advice for
                your specific setup. Talk to us directly before making
                decisions based on anything here.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-semibold text-ink">Liability</h2>
              <p className="mt-3 leading-relaxed">
                We're not liable for losses arising from your use of this
                website, to the extent permitted by law — this doesn't
                affect any liability that can't legally be excluded (for
                example, for death or personal injury caused by
                negligence, or fraud). This clause doesn't apply to
                liability arising from an actual client services
                agreement, which is covered by that agreement's own terms.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-semibold text-ink">Governing law</h2>
              <p className="mt-3 leading-relaxed">
                These terms are governed by the laws of England and
                Wales, and any disputes will be handled by the courts of
                England and Wales.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-semibold text-ink">Contact</h2>
              <p className="mt-3 leading-relaxed">
                Questions about these terms:{' '}
                <a className="link-underline text-petrol" href={BUSINESS.emailHref}>{BUSINESS.email}</a>.
                See our{' '}
                <Link className="link-underline text-petrol" to="/privacy">Privacy Policy</Link> for how we handle
                personal data.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

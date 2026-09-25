import Seo from '../components/Seo.jsx'
import { BUSINESS } from '../lib/business.js'

export default function Privacy() {
  return (
    <>
      <Seo
        title="Privacy Policy"
        description="How A-IT collects, uses and protects personal data, including cookies and analytics used on this website."
      />

      <section className="border-b border-stone bg-paper-dim py-16 md:py-20">
        <div className="container-x">
          <p className="eyebrow">Legal</p>
          <h1 className="mt-3 max-w-[20ch] font-display text-4xl font-semibold leading-[1.05] md:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-4 text-sm text-slate">Last updated: 17 September 2026</p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container-x max-w-[70ch]">
          <div className="mb-10 rounded-sm border border-brass/40 bg-brass/[0.08] p-5 text-sm leading-relaxed text-ink/80">
            <strong className="font-semibold">Draft notice:</strong> this page
            describes the site as built — what data it actually collects and
            why. It is a starting point, not a substitute for review by a
            solicitor or data protection professional before this site goes
            live, particularly the sections marked{' '}
            <span className="text-brass-dark">[PLACEHOLDER]</span>.
          </div>

          <div className="prose-legal space-y-8 text-ink/80">
            <div>
              <h2 className="font-display text-xl font-semibold text-ink">Who we are</h2>
              <p className="mt-3 leading-relaxed">
                A-IT ("we", "us") is the data controller for personal data
                collected through this website. You can contact us at{' '}
                <a className="link-underline text-petrol" href={BUSINESS.emailHref}>{BUSINESS.email}</a>.
                Registered address:{' '}
                {BUSINESS.address}. Companies House number:{' '}
                [PLACEHOLDER: company registration number].
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-semibold text-ink">What we collect</h2>
              <ul className="mt-3 list-disc space-y-2 pl-5 leading-relaxed">
                <li>
                  <strong>Contact form submissions</strong> — name, email,
                  phone number (optional), company name (optional), an
                  approximate device count, and whatever you write in the
                  message field. Submitted via Netlify Forms and stored
                  there for 6 months after submission.
                </li>
                <li>
                  <strong>Analytics data</strong> — if you accept analytics
                  cookies via the banner on this site, Google Analytics
                  collects anonymised-where-possible usage data: pages
                  visited, approximate location (country/city level),
                  device and browser type, and how you arrived at the
                  site. We don't use this to identify you personally.
                </li>
                <li>
                  <strong>Cookie preference</strong> — your accept/reject
                  choice from the cookie banner is stored in your browser
                  (localStorage), not as a tracking cookie, so we can
                  remember it on your next visit.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="font-display text-xl font-semibold text-ink">Cookies used on this site</h2>
              <div className="mt-3 overflow-x-auto">
                <table className="w-full min-w-[480px] border-collapse text-left text-sm">
                  <thead>
                    <tr className="border-b border-stone">
                      <th className="py-2 pr-4 font-semibold text-ink">Name</th>
                      <th className="py-2 pr-4 font-semibold text-ink">Purpose</th>
                      <th className="py-2 font-semibold text-ink">Expiry</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-stone/60">
                      <td className="py-2 pr-4">_ga, _ga_*</td>
                      <td className="py-2 pr-4">Google Analytics — distinguishes visitors, only set if you accept analytics cookies</td>
                      <td className="py-2">Up to 2 years</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="mt-3 text-sm text-slate">
                No cookies are set until you accept them in the banner,
                except the strictly necessary storage that remembers your
                choice.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-semibold text-ink">Why we process this data</h2>
              <ul className="mt-3 list-disc space-y-2 pl-5 leading-relaxed">
                <li>To respond to enquiries you send us (legitimate interest / steps to enter a contract)</li>
                <li>To understand how the site is used and improve it, where you've consented to analytics (consent)</li>
                <li>To meet legal obligations, where applicable (legal obligation)</li>
              </ul>
            </div>

            <div>
              <h2 className="font-display text-xl font-semibold text-ink">Who we share it with</h2>
              <p className="mt-3 leading-relaxed">
                This website is hosted by Netlify, Inc., who process
                standard web server logs (IP address, request details) as
                part of delivering the site, and who also receive and
                store contact form submissions on our behalf via Netlify
                Forms. Contact form submissions are also forwarded to
                Atlassian (Jira), which we use internally to track and
                action enquiries. If you accept analytics cookies, usage
                data is processed by Google as part of Google Analytics,
                which may transfer data outside the UK — Google's
                standard contractual clauses cover this transfer. We
                don't sell personal data, and we don't share contact
                form submissions with any other third party.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-semibold text-ink">How long we keep it</h2>
              <p className="mt-3 leading-relaxed">
                Contact form submissions are kept in Netlify Forms and in
                Jira for 6 months after submission, then deleted, unless
                you become a client — in which case relevant details
                carry into your client record under the separate Managed
                IT Services Agreement. Analytics data is retained per
                Google Analytics' configured window (see the cookie
                table above).
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-semibold text-ink">Your rights</h2>
              <p className="mt-3 leading-relaxed">
                Under UK GDPR, you can ask us to access, correct, delete or
                restrict the personal data we hold about you, object to
                how we use it, or request a portable copy. To do any of
                this, email{' '}
                <a className="link-underline text-petrol" href={BUSINESS.emailHref}>{BUSINESS.email}</a>.
                If you're unhappy with how we've handled your data, you
                can complain to the UK Information Commissioner's Office
                (ico.org.uk).
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-semibold text-ink">Children</h2>
              <p className="mt-3 leading-relaxed">
                This site is aimed at business owners and IT decision
                makers, not children, and we don't knowingly collect data
                from anyone under 16.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-semibold text-ink">Changes to this policy</h2>
              <p className="mt-3 leading-relaxed">
                We'll update this page if what we collect or why changes,
                and update the date at the top.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

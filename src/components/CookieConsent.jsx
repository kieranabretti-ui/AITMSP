import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getStoredConsent, setStoredConsent, loadAnalytics, CONSENT_ACCEPTED_EVENT } from '../lib/analytics.js'

function markConsentAccepted() {
  loadAnalytics()
  window.dispatchEvent(new Event(CONSENT_ACCEPTED_EVENT))
}

export default function CookieConsent() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const stored = getStoredConsent()
    if (stored === 'accepted') {
      markConsentAccepted()
    } else if (stored !== 'rejected') {
      setVisible(true)
    }
  }, [])

  function respond(choice) {
    setStoredConsent(choice)
    if (choice === 'accepted') markConsentAccepted()
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      aria-live="polite"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-stone bg-paper/95 backdrop-blur"
    >
      <div className="mx-auto flex max-w-content flex-col gap-4 px-6 py-5 md:flex-row md:items-center md:justify-between md:px-10">
        <p className="max-w-[60ch] text-sm leading-relaxed text-ink/80">
          We use cookies for site analytics — only if you accept them. See
          our{' '}
          <Link className="link-underline text-petrol" to="/privacy">
            Privacy Policy
          </Link>{' '}
          for details.
        </p>
        <div className="flex shrink-0 gap-3">
          <button
            type="button"
            onClick={() => respond('rejected')}
            className="rounded-[3px] border border-ink/25 px-5 py-2.5 text-sm font-medium text-ink transition-colors duration-200 hover:border-ink hover:bg-ink/5"
          >
            Reject
          </button>
          <button
            type="button"
            onClick={() => respond('accepted')}
            className="rounded-[3px] bg-ink px-5 py-2.5 text-sm font-medium text-paper transition-colors duration-200 hover:bg-petrol-dark"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  )
}

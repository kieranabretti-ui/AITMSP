// Swap in the real GA4 property ID before launch. Until then, loadAnalytics()
// intentionally no-ops so no broken tracking calls ever fire.
export const GA_MEASUREMENT_ID = '[PLACEHOLDER: GA4 measurement ID, e.g. G-XXXXXXXXXX]'

let loaded = false

export function isConfigured() {
  return Boolean(GA_MEASUREMENT_ID) && !GA_MEASUREMENT_ID.startsWith('[PLACEHOLDER')
}

export function loadAnalytics() {
  if (loaded || !isConfigured()) return
  loaded = true

  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`
  document.head.appendChild(script)

  window.dataLayer = window.dataLayer || []
  window.gtag = function gtag() {
    window.dataLayer.push(arguments)
  }
  window.gtag('js', new Date())
  // IP anonymisation — GA4 does this by default, kept explicit for clarity.
  window.gtag('config', GA_MEASUREMENT_ID, { anonymize_ip: true, send_page_view: false })
}

export function trackPageview(path) {
  if (typeof window.gtag !== 'function') return
  window.gtag('event', 'page_view', { page_path: path })
}

const STORAGE_KEY = 'cookie-consent'

export function getStoredConsent() {
  try {
    return window.localStorage.getItem(STORAGE_KEY)
  } catch {
    return null
  }
}

export function setStoredConsent(value) {
  try {
    window.localStorage.setItem(STORAGE_KEY, value)
  } catch {
    // Private browsing / storage disabled — consent just won't persist.
  }
}

export function hasAnalyticsConsent() {
  return getStoredConsent() === 'accepted'
}

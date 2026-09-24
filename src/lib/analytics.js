// Swap in the real GA4 property ID before launch. Until then, loadAnalytics()
// intentionally no-ops so no broken tracking calls ever fire.
export const GA_MEASUREMENT_ID = '[PLACEHOLDER: GA4 measurement ID, e.g. G-XXXXXXXXXX]'

// The Google Ads conversion ID for the /dorset-it-support campaign —
// real, not a placeholder, so loadGoogleAdsConversionTracking() below
// is live as soon as consent allows it.
export const GOOGLE_ADS_CONVERSION_ID = 'AW-18079286953'

export function isConfigured() {
  return Boolean(GA_MEASUREMENT_ID) && !GA_MEASUREMENT_ID.startsWith('[PLACEHOLDER')
}

// gtag.js is one shared loader/dataLayer for every destination (GA4,
// Google Ads, ...) — you load the script once, then call gtag('config',
// ...) once per destination ID. Safe to call repeatedly; only injects
// the <script> tag the first time, from whichever destination asks first.
let gtagScriptLoaded = false
function ensureGtagScriptLoaded(idForScriptSrc) {
  window.dataLayer = window.dataLayer || []
  window.gtag = window.gtag || function gtag() {
    window.dataLayer.push(arguments)
  }
  if (gtagScriptLoaded) return
  gtagScriptLoaded = true

  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${idForScriptSrc}`
  document.head.appendChild(script)

  window.gtag('js', new Date())
}

let gaLoaded = false
export function loadAnalytics() {
  if (gaLoaded || !isConfigured()) return
  gaLoaded = true

  ensureGtagScriptLoaded(GA_MEASUREMENT_ID)
  // IP anonymisation — GA4 does this by default, kept explicit for clarity.
  window.gtag('config', GA_MEASUREMENT_ID, { anonymize_ip: true, send_page_view: false })
}

export function trackPageview(path) {
  if (typeof window.gtag !== 'function') return
  window.gtag('event', 'page_view', { page_path: path })
}

// Scoped to the /dorset-it-support Google Ads campaign — called only
// from that page and its thank-you page (see DorsetITSupport.jsx /
// DorsetITSupportThankYou.jsx), not loaded site-wide like GA4 above,
// and only once analytics consent has been given.
let adsLoaded = false
export function loadGoogleAdsConversionTracking() {
  if (adsLoaded) return
  adsLoaded = true

  ensureGtagScriptLoaded(GOOGLE_ADS_CONVERSION_ID)
  window.gtag('config', GOOGLE_ADS_CONVERSION_ID)
}

// Fired by CookieConsent.jsx whenever analytics consent becomes
// "accepted" (on first load if already stored, or right when the
// visitor clicks Accept) — lets page-scoped tracking like the Ads tag
// above react without CookieConsent needing to know which pages care.
export const CONSENT_ACCEPTED_EVENT = 'analytics-consent-accepted'

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

import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Nav from './Nav.jsx'
import Footer from './Footer.jsx'
import CookieConsent from './CookieConsent.jsx'
import { hasAnalyticsConsent, trackPageview } from '../lib/analytics.js'

export default function Layout({ children }) {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const target = document.getElementById(hash.slice(1))
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' })
        return
      }
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])

  useEffect(() => {
    if (hasAnalyticsConsent()) {
      trackPageview(pathname)
    }
  }, [pathname])

  return (
    <div className="flex min-h-screen flex-col">
      <Nav />
      <main className="flex-1">{children}</main>
      <Footer />
      <CookieConsent />
    </div>
  )
}

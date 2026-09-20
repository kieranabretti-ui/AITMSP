import { useEffect } from 'react'

export default function Seo({ title, description, noindex = false }) {
  useEffect(() => {
    const fullTitle = title ? `${title} — A-IT` : 'A-IT — Managed Cybersecurity & Monitoring for UK Businesses'
    document.title = fullTitle

    if (description) {
      let meta = document.querySelector('meta[name="description"]')
      if (!meta) {
        meta = document.createElement('meta')
        meta.setAttribute('name', 'description')
        document.head.appendChild(meta)
      }
      meta.setAttribute('content', description)
    }

    // Pages that opt into noindex get the tag added here; every other
    // page removes it — otherwise it would leak onto the next route
    // visited in the same SPA session (the tag lives in a shared
    // document.head, not per-page).
    let robotsMeta = document.querySelector('meta[name="robots"]')
    if (noindex) {
      if (!robotsMeta) {
        robotsMeta = document.createElement('meta')
        robotsMeta.setAttribute('name', 'robots')
        document.head.appendChild(robotsMeta)
      }
      robotsMeta.setAttribute('content', 'noindex, nofollow')
    } else if (robotsMeta) {
      robotsMeta.remove()
    }

    return () => {
      if (noindex) {
        document.querySelector('meta[name="robots"]')?.remove()
      }
    }
  }, [title, description, noindex])

  return null
}

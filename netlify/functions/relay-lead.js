// Bridges a /dorset-it-support form submission into the CRM
// (crm.a-it.uk) as a lead — called directly by DorsetITSupport.jsx
// at submit time, alongside (not instead of) the normal Netlify Forms
// submission.
//
// This exists instead of relying on Netlify Forms' own "Outgoing
// webhook" notification because that path has two failure modes
// nobody can see from outside the Netlify dashboard: whether the
// notification is actually configured correctly, and whether Netlify's
// own automatic spam classifier silently dropped a real submission
// before the webhook ever fired. Calling the CRM directly from code
// here removes both — this function's own logs are the one place to
// look if a lead doesn't arrive.
//
// Same-origin from the browser's point of view (the React page calls
// /.netlify/functions/relay-lead on its own domain), so there's no
// CORS to configure. The shared secret lives only in this function's
// own environment — never sent to or visible in the browser — and is
// attached server-side to the outgoing request to the CRM.
//
// Required environment variable (Netlify: Site configuration ->
// Environment variables — never VITE_-prefixed, or it would ship to
// the browser bundle):
//   DORSET_LEAD_WEBHOOK_SECRET   the exact same value already set on
//                                 the CRM site (crm.a-it.uk) as its own
//                                 DORSET_LEAD_WEBHOOK_SECRET
const CRM_WEBHOOK_URL = 'https://crm.a-it.uk/.netlify/functions/dorset-lead-webhook'
const FIELDS = ['name', 'company', 'email', 'phone', 'devices', 'interest']

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method not allowed' }
  }

  const { DORSET_LEAD_WEBHOOK_SECRET } = process.env
  if (!DORSET_LEAD_WEBHOOK_SECRET) {
    console.error('[relay-lead] DORSET_LEAD_WEBHOOK_SECRET is not set')
    return { statusCode: 500, body: JSON.stringify({ error: 'Server is not configured.' }) }
  }

  let form
  try {
    form = JSON.parse(event.body || '{}')
  } catch {
    return { statusCode: 400, body: JSON.stringify({ error: 'Invalid JSON body.' }) }
  }

  // Only forward the fields the CRM actually uses — never the
  // honeypot value even if a caller sent one, and nothing else a
  // modified request might try to smuggle through.
  const data = {}
  for (const field of FIELDS) {
    if (typeof form[field] === 'string') data[field] = form[field]
  }

  try {
    const url = `${CRM_WEBHOOK_URL}?secret=${encodeURIComponent(DORSET_LEAD_WEBHOOK_SECRET)}`
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
    const responseText = await response.text().catch(() => '')
    if (!response.ok) {
      console.error(`[relay-lead] CRM rejected the lead (${response.status}):`, responseText.slice(0, 300))
      return { statusCode: 502, body: JSON.stringify({ error: 'CRM did not accept the lead.' }) }
    }
    return { statusCode: 200, body: responseText || JSON.stringify({ ok: true }) }
  } catch (err) {
    console.error('[relay-lead] could not reach the CRM:', err.message)
    return { statusCode: 502, body: JSON.stringify({ error: 'Could not reach the CRM.' }) }
  }
}

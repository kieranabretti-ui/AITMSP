# A-IT marketing website

Managed cybersecurity and monitoring marketing site for A-IT (UK SMB
audience). A-IT is security-first — day-to-day IT helpdesk support is
not included in any package and is only offered by separate
arrangement (see the "Also available" note on the Services page).
React + Vite + Tailwind, five pages (Home, Services, Pricing, About,
Contact), fully responsive.

## Stack

- React 18 + React Router (multi-page)
- Vite (build/dev server)
- Tailwind CSS (custom design tokens — see `tailwind.config.js`)
- Fonts: Zilla Slab (display) + IBM Plex Sans (body), loaded from Google Fonts in `index.html`

## Running locally

```bash
npm install
npm run dev       # dev server, http://localhost:5173
npm run build     # production build to dist/
npm run preview   # serve the production build locally
```

## Design system

Colour tokens and font families are defined in `tailwind.config.js`
(`ink`, `paper`, `petrol`, `brass`, `stone`, `slate`). Pricing data and
the feature comparison matrix live in `src/lib/pricing.js` — update
tier prices or included features there and both the calculator
(`PricingCalculator`) and comparison table (`PricingTable`) update
automatically.

## Before launch — replace these placeholders

Search the codebase for `[PLACEHOLDER` to find every spot marked for
real content. In summary:

- **`src/lib/business.js`** — phone number, email address, registered
  address, Companies House number.
- **Logo** — `src/components/Logo.jsx` is a typographic wordmark. Swap
  in a real logo file if one exists.
- **Pricing page & table** (`src/pages/Pricing.jsx`,
  `src/lib/pricing.js`) — confirm the exact priority incident response
  time for Gold, contract minimum term, and any onboarding fee.
- **About page** (`src/pages/About.jsx`) — founding year, team
  size/founder note, onsite service radius.
- **Contact page** (`src/pages/Contact.jsx`) — the form is a working
  client-side demo (validates, shows a confirmation) but is **not**
  wired to a real inbox yet. Connect `CONTACT_ENDPOINT` at the top of
  that file to a real submission target (serverless function,
  Formspree, CRM webhook, etc.) before launch, and confirm the
  reply-time commitment shown on the success screen.
- **Cyber Essentials Plus** badge on the homepage trust strip — remove
  or confirm this if the certification isn't held.

No fabricated testimonials, client logos, or company-wide stats are
included anywhere on the site by design — add real ones if and when
they exist.

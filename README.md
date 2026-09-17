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

## Deploying to Netlify

`netlify.toml` is already set up — build command `npm run build`,
publish directory `dist`, Node 20, and a catch-all redirect to
`index.html` (required for React Router's client-side routes like
`/pricing` to work on a direct visit or refresh, not just on
in-app navigation).

To deploy:

1. Push this repo to GitHub (already done if you're reading this from
   the repo).
2. In Netlify: **Add new site → Import an existing project** and pick
   this repo. Netlify will detect `netlify.toml` automatically — no
   manual build settings needed.
3. Deploy. No environment variables are required (the site has no
   backend yet — see the Contact form note below).

There's no CI test/lint step wired up yet; `npm run build` is what
Netlify runs, and it will fail the deploy if the build breaks.

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

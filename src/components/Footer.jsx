import { Link } from 'react-router-dom'
import Logo from './Logo.jsx'
import Button from './Button.jsx'
import { BUSINESS } from '../lib/business.js'

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-paper/10 bg-ink text-paper">
      <div className="bg-grid-motif-dark pointer-events-none absolute inset-0 opacity-60" />

      <div className="container-x relative py-20 md:py-28">
        <p className="eyebrow">Get in touch</p>
        <h2 className="mt-4 max-w-[16ch] font-display text-[clamp(2.25rem,6vw,4.25rem)] font-semibold leading-[1.02] tracking-tightish">
          Ready when you are.
        </h2>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Button to="/contact" variant="primary">
            Get a quote
          </Button>
          <a
            href={BUSINESS.phoneHref}
            className="link-underline text-lg font-medium text-paper/85 hover:text-paper"
          >
            {BUSINESS.phone}
          </a>
        </div>
      </div>

      <div className="container-x relative grid gap-10 border-t border-paper/10 py-12 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Logo />
          <p className="mt-4 max-w-[30ch] text-[15px] leading-relaxed text-paper/55">
            Managed cybersecurity and monitoring for small and medium
            businesses across the UK.
          </p>
        </div>

        <div>
          <h3 className="eyebrow">Company</h3>
          <ul className="mt-4 space-y-3 text-[15px]">
            <li><Link className="link-underline text-paper/75 hover:text-paper" to="/services">Services</Link></li>
            <li><Link className="link-underline text-paper/75 hover:text-paper" to="/pricing">Pricing</Link></li>
            <li><Link className="link-underline text-paper/75 hover:text-paper" to="/about">About</Link></li>
            <li><Link className="link-underline text-paper/75 hover:text-paper" to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="eyebrow">Details</h3>
          <ul className="mt-4 space-y-3 text-[15px] text-paper/75">
            <li><a className="link-underline hover:text-paper" href={BUSINESS.emailHref}>{BUSINESS.email}</a></li>
            <li className="text-paper/50">{BUSINESS.hours}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-paper/10">
        <div className="container-x relative flex flex-col gap-2 py-6 text-xs text-paper/40 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} A-IT. All rights reserved.</p>
          <p>Prices exclude VAT. See pricing page for full terms.</p>
        </div>
      </div>
    </footer>
  )
}

import { Link } from 'react-router-dom'
import Logo from './Logo.jsx'
import { BUSINESS } from '../lib/business.js'

export default function Footer() {
  return (
    <footer className="border-t border-stone bg-ink text-paper/90">
      <div className="container-x grid gap-12 py-16 md:grid-cols-[1.2fr_1fr_1fr_1fr]">
        <div>
          <Logo dark />
          <p className="mt-4 max-w-[30ch] text-[15px] leading-relaxed text-paper/65">
            Managed cybersecurity and monitoring for small and medium
            businesses across the UK.
          </p>
        </div>

        <div>
          <h3 className="eyebrow !text-brass-light">Company</h3>
          <ul className="mt-4 space-y-3 text-[15px]">
            <li><Link className="link-underline text-paper/80 hover:text-paper" to="/services">Services</Link></li>
            <li><Link className="link-underline text-paper/80 hover:text-paper" to="/pricing">Pricing</Link></li>
            <li><Link className="link-underline text-paper/80 hover:text-paper" to="/about">About</Link></li>
            <li><Link className="link-underline text-paper/80 hover:text-paper" to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="eyebrow !text-brass-light">Get in touch</h3>
          <ul className="mt-4 space-y-3 text-[15px] text-paper/80">
            <li><a className="link-underline hover:text-paper" href={BUSINESS.emailHref}>{BUSINESS.email}</a></li>
            <li className="text-paper/60">{BUSINESS.hours}</li>
          </ul>
        </div>

        <div>
          <h3 className="eyebrow !text-brass-light">Legal</h3>
          <ul className="mt-4 space-y-3 text-[15px]">
            <li><Link className="link-underline text-paper/80 hover:text-paper" to="/privacy">Privacy Policy</Link></li>
            <li><Link className="link-underline text-paper/80 hover:text-paper" to="/terms">Terms &amp; Conditions</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-paper/10">
        <div className="container-x flex flex-col gap-2 py-6 text-xs text-paper/60 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {new Date().getFullYear()} {BUSINESS.legalName} (trading as A-IT). Company No.{' '}
            {BUSINESS.companyNumber}. All rights reserved.
          </p>
          <p>VAT not currently charged. See pricing page for full terms.</p>
        </div>
      </div>
    </footer>
  )
}

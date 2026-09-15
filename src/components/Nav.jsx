import { useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import Logo from './Logo.jsx'
import Button from './Button.jsx'

const LINKS = [
  { to: '/services', label: 'Services' },
  { to: '/pricing', label: 'Pricing' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  return (
    <header className="sticky top-0 z-40 border-b border-stone/70 bg-paper/95 backdrop-blur">
      <div className="container-x flex h-[72px] items-center justify-between">
        <NavLink to="/" className="shrink-0" aria-label="A-IT home">
          <Logo />
        </NavLink>

        <nav className="hidden items-center gap-9 md:flex" aria-label="Primary">
          {LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `link-underline pb-1 text-[15px] font-medium ${
                  isActive ? 'text-petrol' : 'text-ink/80 hover:text-ink'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button to="/contact" variant="accent">
            Get a quote
          </Button>
        </div>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="relative block h-4 w-6">
            <span
              className={`absolute left-0 top-0 h-[2px] w-6 bg-ink transition-transform duration-200 ${
                open ? 'translate-y-[7px] rotate-45' : ''
              }`}
            />
            <span
              className={`absolute left-0 top-[7px] h-[2px] w-6 bg-ink transition-opacity duration-200 ${
                open ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`absolute left-0 top-[14px] h-[2px] w-6 bg-ink transition-transform duration-200 ${
                open ? '-translate-y-[7px] -rotate-45' : ''
              }`}
            />
          </span>
        </button>
      </div>

      {open && (
        <nav
          id="mobile-menu"
          aria-label="Mobile"
          className="border-t border-stone/70 bg-paper md:hidden"
        >
          <ul className="container-x flex flex-col gap-1 py-4">
            {LINKS.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    `block py-3 text-lg font-medium ${isActive ? 'text-petrol' : 'text-ink'}`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
            <li className="pt-3">
              <Button to="/contact" variant="accent" className="w-full">
                Get a quote
              </Button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}

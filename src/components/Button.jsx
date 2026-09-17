import { Link } from 'react-router-dom'

const base =
  'inline-flex items-center justify-center gap-2 rounded-full font-body font-semibold transition-all duration-200 ease-soft focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 active:scale-[0.98]'

const variants = {
  primary: 'bg-brass text-ink hover:bg-brass-light px-6 py-3 text-[15px]',
  accent: 'bg-petrol text-paper hover:bg-petrol-light px-6 py-3 text-[15px]',
  outline: 'border border-paper/25 text-paper hover:border-paper hover:bg-paper/5 px-6 py-3 text-[15px]',
  'on-paper': 'bg-ink text-paper hover:bg-petrol-dark px-6 py-3 text-[15px]',
  'on-paper-outline': 'border border-ink/25 text-ink hover:border-ink hover:bg-ink/5 px-6 py-3 text-[15px]',
  ghost: 'text-paper hover:text-brass-light px-0 py-1 text-[15px] underline decoration-paper/30 underline-offset-4 hover:decoration-brass-light',
}

export default function Button({ to, href, variant = 'primary', children, className = '', ...props }) {
  const classes = `${base} ${variants[variant]} ${className}`

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    )
  }
  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    )
  }
  return (
    <button className={classes} {...props}>
      {children}
    </button>
  )
}

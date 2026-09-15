import { Link } from 'react-router-dom'

const base =
  'inline-flex items-center justify-center gap-2 rounded-[3px] font-body font-medium transition-all duration-200 ease-soft focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2'

const variants = {
  primary: 'bg-ink text-paper hover:bg-petrol-dark px-6 py-3 text-[15px]',
  accent: 'bg-petrol text-paper hover:bg-petrol-dark px-6 py-3 text-[15px]',
  outline: 'border border-ink/25 text-ink hover:border-ink hover:bg-ink/5 px-6 py-3 text-[15px]',
  'outline-light': 'border border-paper/35 text-paper hover:border-paper hover:bg-paper/10 px-6 py-3 text-[15px]',
  ghost: 'text-ink hover:text-petrol px-0 py-1 text-[15px] underline decoration-ink/30 underline-offset-4 hover:decoration-petrol',
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

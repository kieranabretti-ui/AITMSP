export default function Logo({ dark = false, mark = false }) {
  const itColor = dark ? 'text-petrol-light' : 'text-petrol'

  if (!mark) {
    return (
      <span className="inline-flex items-baseline gap-[2px] font-display text-2xl font-semibold tracking-tightish">
        <span className={dark ? 'text-paper' : 'text-ink'}>A</span>
        <span className={itColor}>-IT</span>
      </span>
    )
  }

  return (
    <span
      className="inline-flex items-baseline font-display text-2xl font-semibold tracking-tightish"
      aria-label="A-IT"
    >
      <span aria-hidden="true" className={dark ? 'text-paper' : 'text-ink'}>
        A
      </span>
      <svg
        aria-hidden="true"
        viewBox="0 0 26 26"
        className={`relative top-[0.1em] mx-[0.03em] h-[0.62em] w-[0.62em] shrink-0 ${itColor}`}
      >
        <path
          d="M4 14.5l6.5 6.5L22 6.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="4.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span aria-hidden="true" className={itColor}>
        IT
      </span>
    </span>
  )
}

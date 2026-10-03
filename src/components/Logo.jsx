export default function Logo({ dark = false }) {
  return (
    <span className="inline-flex items-baseline gap-[2px] font-display text-2xl font-semibold tracking-tightish">
      <span className={dark ? 'text-paper' : 'text-ink'}>A</span>
      <span className={dark ? 'text-petrol-light' : 'text-petrol'}>-IT</span>
    </span>
  )
}

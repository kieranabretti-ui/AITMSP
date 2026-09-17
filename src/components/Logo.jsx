export default function Logo({ onLight = false }) {
  return (
    <span className="inline-flex items-baseline gap-[2px] font-display text-2xl font-semibold tracking-tightish">
      <span className={onLight ? 'text-ink' : 'text-paper'}>A</span>
      <span className={onLight ? 'text-petrol' : 'text-petrol-light'}>-IT</span>
    </span>
  )
}

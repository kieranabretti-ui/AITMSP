export default function Marquee({ items }) {
  const track = (
    <>
      {items.map((item, i) => (
        <span key={i} className="flex shrink-0 items-center gap-3 px-6">
          <span className="whitespace-nowrap font-mono text-sm uppercase tracking-wideish text-paper/70">
            {item}
          </span>
          <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-brass" />
        </span>
      ))}
    </>
  )

  return (
    <div className="overflow-hidden border-y border-paper/10 bg-ink-soft py-4">
      <div className="marquee-track">
        {track}
        <span aria-hidden="true" className="flex shrink-0">
          {track}
        </span>
      </div>
    </div>
  )
}

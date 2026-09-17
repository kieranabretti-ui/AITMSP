import { useEffect, useRef, useState } from 'react'

const prefersReducedMotion =
  typeof window !== 'undefined' && window.matchMedia
    ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
    : false

// Animates a numeric display value toward `target` whenever it changes.
export function useCountUp(target, duration = 350) {
  const [value, setValue] = useState(target)
  const frame = useRef(null)
  const from = useRef(target)

  useEffect(() => {
    if (prefersReducedMotion) {
      setValue(target)
      return
    }
    const start = performance.now()
    const startValue = from.current
    if (frame.current) cancelAnimationFrame(frame.current)

    function tick(now) {
      const t = Math.min(1, (now - start) / duration)
      const eased = 1 - Math.pow(1 - t, 3)
      setValue(startValue + (target - startValue) * eased)
      if (t < 1) {
        frame.current = requestAnimationFrame(tick)
      } else {
        from.current = target
      }
    }
    frame.current = requestAnimationFrame(tick)
    return () => {
      if (frame.current) cancelAnimationFrame(frame.current)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [target])

  return value
}

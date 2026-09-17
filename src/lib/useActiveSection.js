import { useEffect, useRef, useState } from 'react'

// Tracks which of N stacked panels currently sits in a thin band near the
// vertical center of the viewport, for a sticky-scroll "pinned visual,
// scrolling detail" pattern. Returns [activeIndex, registerRef].
export function useActiveSection(count) {
  const [active, setActive] = useState(0)
  const refs = useRef([])
  const intersecting = useRef(new Set())

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const index = Number(entry.target.dataset.sectionIndex)
          if (entry.isIntersecting) {
            intersecting.current.add(index)
          } else {
            intersecting.current.delete(index)
          }
        }
        if (intersecting.current.size > 0) {
          setActive(Math.min(...intersecting.current))
        }
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: 0 },
    )

    refs.current.forEach((el) => el && observer.observe(el))
    return () => observer.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count])

  function registerRef(index) {
    return (el) => {
      refs.current[index] = el
      if (el) el.dataset.sectionIndex = String(index)
    }
  }

  return [active, registerRef]
}

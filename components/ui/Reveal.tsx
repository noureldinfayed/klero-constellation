'use client'

import { useEffect, useRef, type ReactNode } from 'react'

type Props = {
  children: ReactNode
  delay?: 0 | 1 | 2 | 3 | 4 | 5
  as?: 'div' | 'article' | 'section' | 'span' | 'p' | 'h1' | 'h2' | 'h3'
  className?: string
}

export default function Reveal({ children, delay = 0, as: Tag = 'div', className = '' }: Props) {
  const ref = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in')
            io.unobserve(e.target)
          }
        })
      },
      { threshold: 0.08 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  const delayClass = delay ? ` d${delay}` : ''
  const TagAny = Tag as 'div'

  return (
    <TagAny
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`reveal${delayClass} ${className}`.trim()}
    >
      {children}
    </TagAny>
  )
}

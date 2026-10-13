import { useEffect, useRef } from 'react'
import { createTorusFrame } from './torusFrame'
import { advanceTorusMotion, joltTorus } from './torusMotion'

const initialFrame = createTorusFrame(0.6, 0.3)

export default function AsciiTorus() {
  const frameRef = useRef<HTMLPreElement>(null)
  const boostRef = useRef(0)

  const accelerate = () => {
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      boostRef.current = joltTorus(boostRef.current)
    }
  }

  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    let animationId = 0
    let previousFrame = 0
    let previousTimestamp: number | null = null
    let tilt = 0.6
    let spin = 0.3

    const animate = (timestamp: number) => {
      const seconds = previousTimestamp === null ? 0 : Math.min((timestamp - previousTimestamp) / 1000, 0.1)
      previousTimestamp = timestamp
      const motion = advanceTorusMotion(boostRef.current, seconds)
      boostRef.current = motion.boost
      tilt += motion.rotationTime * 0.65
      spin += motion.rotationTime * 0.35
      if (timestamp - previousFrame >= 1000 / 30) {
        if (frameRef.current) {
          frameRef.current.textContent = createTorusFrame(tilt, spin)
        }
        previousFrame = timestamp
      }
      animationId = requestAnimationFrame(animate)
    }

    const updateAnimation = () => {
      cancelAnimationFrame(animationId)
      previousTimestamp = null
      previousFrame = 0
      if (reducedMotion.matches) {
        boostRef.current = 0
        tilt = 0.6
        spin = 0.3
        if (frameRef.current) frameRef.current.textContent = initialFrame
      } else if (!document.hidden) {
        animationId = requestAnimationFrame(animate)
      }
    }

    updateAnimation()
    reducedMotion.addEventListener('change', updateAnimation)
    document.addEventListener('visibilitychange', updateAnimation)
    return () => {
      cancelAnimationFrame(animationId)
      reducedMotion.removeEventListener('change', updateAnimation)
      document.removeEventListener('visibilitychange', updateAnimation)
    }
  }, [])

  return (
    <div
      className="name-landing__torus"
      role="button"
      tabIndex={0}
      aria-label="Speed up the spinning ASCII torus"
      onClick={accelerate}
      onKeyDown={event => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault()
          if (!event.repeat) accelerate()
        }
      }}
    >
      <pre ref={frameRef} className="name-landing__torus-frame" aria-hidden="true">{initialFrame}</pre>
    </div>
  )
}

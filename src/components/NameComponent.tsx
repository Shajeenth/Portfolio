import { useLayoutEffect, useRef } from 'react'
import './NameComponent.css'
import AsciiTorus from './AsciiTorus'

export default function NameComponent() {
  const firstNameRef = useRef<HTMLSpanElement>(null)
  const surnameRef = useRef<HTMLSpanElement>(null)
  const descriptionRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    let active = true
    const fitName = () => {
      const firstName = firstNameRef.current
      const surname = surnameRef.current
      if (!active || !firstName || !surname) return

      // Measure the actual font and letter spacing at a known size.
      for (const [line, widthFraction] of [[firstName, 0.5], [surname, 0.3]] as const) {
        line.style.fontSize = '100px'
        const measuredWidth = line.getBoundingClientRect().width
        if (measuredWidth > 0) {
          const targetWidth = document.documentElement.clientWidth * widthFraction
          line.style.fontSize = `${100 * targetWidth / measuredWidth}px`
        }
      }
      if (descriptionRef.current) {
        descriptionRef.current.style.width = `${surname.getBoundingClientRect().width}px`
      }
    }

    fitName()
    window.addEventListener('resize', fitName)
    void document.fonts.load('650 100px "Montserrat"').then(fitName, () => {})
    return () => {
      active = false
      window.removeEventListener('resize', fitName)
    }
  }, [])

  return (
    <main className="name-landing">
      <div className="name-landing__content">
        <h1 className="name-landing__name" aria-label="shajeenth shanmugarajah">
          <span ref={firstNameRef}>shajeenth</span>
          <span ref={surnameRef}>shanmugarajah</span>
        </h1>
        <div className="name-landing__details">
          <AsciiTorus />
          <div ref={descriptionRef} className="name-landing__description-container">
          <p className="name-landing__description">
            I'm a mechatronics engineering student at the University of Waterloo.
          </p>
          <p className="name-landing__description">
             I'm working on a project that uses OpenCV and ROS 2 to autonomously play a flawless game of{' '}
            <a href="https://en.wikipedia.org/wiki/Carrom">carrom</a>. Check out {' '}
            <a href="https://github.com/Shajeenth/carrombot">my current progress</a>!
          </p>
          <div className="name-landing__sections">
            <span>projects</span>
            <span>experience</span>
            <span>resume</span>
          </div>
          <hr className="name-landing__divider" />
          <nav className="name-landing__socials" aria-label="Social and contact links">
            <a
              href="https://github.com/Shajeenth"
              className="name-landing__social-link"
              aria-label="GitHub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 .75a11.25 11.25 0 0 0-3.56 21.92c.56.1.77-.24.77-.54v-2.1c-3.13.68-3.79-1.33-3.79-1.33-.51-1.3-1.25-1.65-1.25-1.65-1.02-.7.08-.69.08-.69 1.13.08 1.72 1.16 1.72 1.16 1 1.72 2.63 1.22 3.27.93.1-.73.39-1.22.71-1.5-2.5-.28-5.13-1.25-5.13-5.56 0-1.23.44-2.23 1.16-3.02-.12-.28-.5-1.43.11-2.98 0 0 .95-.3 3.1 1.15a10.77 10.77 0 0 1 5.63 0c2.15-1.46 3.1-1.15 3.1-1.15.61 1.55.23 2.7.11 2.98.72.79 1.16 1.79 1.16 3.02 0 4.32-2.64 5.28-5.15 5.56.4.35.76 1.03.76 2.08v3.1c0 .3.2.65.78.54A11.25 11.25 0 0 0 12 .75Z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/shajeenth/"
              className="name-landing__social-link"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96C2 21.32 2.69 22 3.55 22h16.9c.86 0 1.55-.68 1.55-1.52V3.52c0-.84-.69-1.52-1.55-1.52ZM7.93 18.75H4.98V9.2h2.95v9.55ZM6.45 7.9a1.71 1.71 0 1 1 0-3.42 1.71 1.71 0 0 1 0 3.42Zm12.3 10.85H15.8V14.1c0-1.11-.02-2.54-1.55-2.54-1.55 0-1.79 1.21-1.79 2.46v4.73H9.51V9.2h2.83v1.3h.04c.39-.74 1.35-1.53 2.78-1.53 2.97 0 3.59 1.95 3.59 4.49v5.29Z" />
              </svg>
            </a>
            <a
              href="mailto:shajeenths@gmail.com"
              className="name-landing__social-link"
              aria-label="Email Shajeenth"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
                <rect x="2.5" y="4.5" width="19" height="15" rx="2" />
                <path d="m3 6 9 7 9-7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </nav>
          </div>
        </div>
      </div>
    </main>
  )
}

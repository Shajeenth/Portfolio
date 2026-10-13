import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import NameComponent from './components/NameComponent'
import ProjectsPage from './components/ProjectsPage'
import ExperiencePage from './components/ExperiencePage'
import ThemeToggle from './components/ThemeToggle'
import { useMobilePageFit } from './useMobilePageFit'
import './App.css'
import './MobileLayout.css'
import './Theme.css'

type Page = 'landing' | 'projects' | 'experience'

export default function App() {
  const [page, setPage] = useState<Page>('landing')
  const [destination, setDestination] = useState<Page | null>(null)
  const pageRef = useRef<HTMLDivElement>(null)
  const hasNavigated = useRef(false)
  const lastSection = useRef<Page>('projects')

  useMobilePageFit(pageRef, page)

  const navigate = (nextPage: Page) => {
    if (destination !== null || nextPage === page) return
    hasNavigated.current = true
    if (nextPage !== 'landing') lastSection.current = nextPage
    setDestination(nextPage)
  }

  useEffect(() => {
    if (destination === null) return
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const timeout = window.setTimeout(() => {
      setPage(destination)
      setDestination(null)
      window.scrollTo({ top: 0, behavior: 'instant' })
    }, reducedMotion ? 0 : 220)
    return () => window.clearTimeout(timeout)
  }, [destination])

  useLayoutEffect(() => {
    if (hasNavigated.current) {
      const selector = page === 'landing'
        ? `[data-section="${lastSection.current}"]`
        : '[data-page-focus]'
      pageRef.current?.querySelector<HTMLElement>(selector)?.focus({ preventScroll: true })
    }
  }, [page])

  return (
    <>
      <ThemeToggle />
      <div
        key={page}
        ref={pageRef}
        className={`portfolio-page${destination !== null ? ' portfolio-page--leaving' : ''}`}
        inert={destination !== null}
        aria-busy={destination !== null}
      >
        {page === 'landing'
          ? <NameComponent onProjects={() => navigate('projects')} onExperience={() => navigate('experience')} />
          : page === 'projects'
            ? <ProjectsPage onBack={() => navigate('landing')} />
            : <ExperiencePage onBack={() => navigate('landing')} />}
      </div>
    </>
  )
}

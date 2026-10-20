import { useState } from 'react'
import { projects } from './projects'
import './ProjectCarousel.css'

const slides = projects.filter(project => project.image)

export default function ProjectCarousel() {
  const [activeIndex, setActiveIndex] = useState(0)
  const project = slides[activeIndex]

  function changeSlide(direction: number) {
    setActiveIndex(index => (index + direction + slides.length) % slides.length)
  }

  if (!project) return null

  return (
    <section className="project-carousel" aria-label="Projects" aria-roledescription="carousel">
      <div className="project-carousel__images">
        <button type="button" className="project-carousel__arrow" onClick={() => changeSlide(-1)} aria-label="Previous project">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
            <path d="m14 6-6 6 6 6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <img className="project-carousel__image" src={project.image} alt={project.alt || project.title} />
        <button type="button" className="project-carousel__arrow" onClick={() => changeSlide(1)} aria-label="Next project">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
            <path d="m10 6 6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
      <p className="project-carousel__name" aria-live="polite" aria-atomic="true">{project.title}</p>
    </section>
  )
}

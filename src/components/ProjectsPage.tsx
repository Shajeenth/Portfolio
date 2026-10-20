import { useEffect, useRef, useState } from 'react'
import { projects } from './projects'
import './ProjectsPage.css'

export default function ProjectsPage({ onBack }: { onBack: () => void }) {
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[number] | null>(null)
  const dialogRef = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    if (selectedProject) dialogRef.current?.showModal()
  }, [selectedProject])

  return (
    <main className="projects-page">
      <div className="projects-page__content">
        <header className="projects-page__header">
          <button type="button" className="projects-page__back" onClick={onBack} aria-label="Back to landing page">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
              <path d="M20 12H4m7-7-7 7 7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <h1 className="projects-page__title" tabIndex={-1} data-page-focus>projects</h1>
        </header>
        <div className="projects-page__list">
          {projects.map(project => (
            <article className="projects-page__project" key={project.title}>
              <button
                type="button"
                className="projects-page__project-trigger"
                onClick={() => setSelectedProject(project)}
                aria-label={`Open ${project.title} details`}
                aria-haspopup="dialog"
              />
              {project.image
                ? <img className="projects-page__image" src={project.image} alt={project.alt} />
                : <div className="projects-page__placeholder" aria-hidden="true">in progress</div>}
              <div className="projects-page__details">
                <h2>{project.title}</h2>
                <p>{project.description}</p>
                {project.href && (
                  <a href={project.href} target="_blank" rel="noopener noreferrer">view project ↗</a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
      <dialog
        ref={dialogRef}
        className="projects-page__dialog"
        aria-labelledby="project-dialog-title"
        onClose={() => setSelectedProject(null)}
        onClick={event => {
          if (event.target === event.currentTarget) dialogRef.current?.close()
        }}
      >
        {selectedProject && (
          <div className="projects-page__popup">
            <button
              type="button"
              className="projects-page__popup-close"
              onClick={() => dialogRef.current?.close()}
              aria-label="Close project details"
              autoFocus
            >
              ×
            </button>
            {selectedProject.image && (
              <img className="projects-page__image" src={selectedProject.image} alt={selectedProject.alt} />
            )}
            <div className="projects-page__details">
              <h2 id="project-dialog-title">{selectedProject.title}</h2>
              <p>{selectedProject.description}</p>
              {selectedProject.fdescription && <p>{selectedProject.fdescription}</p>}
              <a href={selectedProject.href} target="_blank" rel="noopener noreferrer">view project ↗</a>
            </div>
          </div>
        )}
      </dialog>
    </main>
  )
}

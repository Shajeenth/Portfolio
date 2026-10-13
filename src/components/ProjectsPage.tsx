import prototypeImage from '../assets/prototype.jpg'
import rotaImage from '../assets/imgOfRota.png'
import './ProjectsPage.css'

const projects = [
  {
    title: 'carrombot',
    description: 'An autonomous carrom project using OpenCV and ROS 2.',
    href: 'https://github.com/Shajeenth/carrombot',
    image: null,
    alt: '',
  },
  {
    title: 'hardware prototype',
    description: 'A breadboard prototype with a microcontroller, buttons, and connected modules.',
    image: prototypeImage,
    alt: 'Breadboard electronics prototype',
  },
  {
    title: 'rota',
    description: 'A system for managing clients and vehicles.',
    image: rotaImage,
    alt: 'Rota login screen',
  },
]

export default function ProjectsPage({ onBack }: { onBack: () => void }) {
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
              {project.image
                ? <img className="projects-page__image" src={project.image} alt={project.alt} />
                : <div className="projects-page__placeholder" aria-hidden="true">OpenCV<br />ROS 2</div>}
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
    </main>
  )
}

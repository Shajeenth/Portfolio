import prototypeImage from '../assets/prototype.jpg'
import rotaImage from '../assets/imgOfRota.png'
import gripperImage from '../assets/gripper.jpg'
import './ProjectsPage.css'

const projects = [
  {
    title: 'carrombot',
    description: 'An autonomous carrom project with a 2D gantry system using OpenCV and ROS 2.',
    href: 'https://github.com/Shajeenth/carrombot',
    image: null,
    alt: '',
  },
  {
    title: 'Autonomous LiDAR ROS 2 Simulation',
    description: 'A foxglove simulation that uses LiDAR data to map out and remember its surroundings. Using that data it uses A* and pure pursuit navigation logic to move around obstacles to a given point.',
    href: 'https://github.com/Shajeenth/wato_asd_training',
    image: null,
    alt: '',
  },
  {
    title: 'FreeRTOS Gripper',
    description: 'A 3D-printed gripper that gets web inputs from a wifi-connected ESP32 while using FreeRTOS.',
    href: 'https://github.com/Shajeenth/robot-arm',
    image: gripperImage,
    alt: 'Breadboard electronics prototype',
  },
    {
    title: 'MakeshiftController',
    description: 'An ESP32 Controller that communicates throught Bluetooth. It works with Steam Games, such as Hades and Hollow Knight.',
    href: 'https://github.com/Shajeenth/MakeshiftController',
    image: prototypeImage,
    alt: 'Breadboard electronics prototype',
  },
  {
    title: 'rota',
    description: 'A system for managing clients and vehicles.',
    href: 'https://github.com/Shajeenth/rota',
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
    </main>
  )
}

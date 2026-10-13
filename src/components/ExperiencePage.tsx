import './ExperiencePage.css'

type Experience = {
  role: string
  organization: string
  period: string
  description: string[]
}

const experiences: Experience[] = [
  {
    role: 'Victoria Park Robotics',
    organization: 'Victoria Park Collegiate Institute · North York, ON',
    period: 'Sep. 2023 – Mar. 2026',
    description: [
      'Developed a centralized static Java class for managing motor and servo IDs, improving hardware configuration consistency in order to boost efficiency in programming.',
      'Tested and tuned motor speed and position to achieve accurate and repeatable linear slide positioning using encoder feedback.',
      'Worked amongst a team using one shared GitHub repository.',
      'Competed in the FIRST Tech Challenge and won an Innovate Award.',
    ],
  },
]

export default function ExperiencePage({ onBack }: { onBack: () => void }) {
  return (
    <main className="experience-page">
      <div className="experience-page__content">
        <header className="experience-page__header">
          <button type="button" className="experience-page__back" onClick={onBack} aria-label="Back to landing page">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
              <path d="M20 12H4m7-7-7 7 7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <h1 className="experience-page__title" tabIndex={-1} data-page-focus>experience</h1>
        </header>
        <div className="experience-page__list">
          {experiences.length === 0 && (
            <p className="experience-page__empty">Experience details coming soon.</p>
          )}
          {experiences.map(experience => (
            <article className="experience-page__entry" key={`${experience.organization}-${experience.role}-${experience.period}`}>
              <div className="experience-page__summary">
                <h2>{experience.role}</h2>
                <p className="experience-page__organization">{experience.organization}</p>
                <p className="experience-page__period">{experience.period}</p>
              </div>
              <ul className="experience-page__description">
                {experience.description.map(description => (
                  <li key={description}>{description}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </main>
  )
}

import './ExperiencePage.css'

type Experience = {
  role: string
  organization: string
  period: string
  description: string
}

// Add experience entries here; each renders as a horizontal row.
const experiences: Experience[] = []

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
              <p className="experience-page__description">{experience.description}</p>
            </article>
          ))}
        </div>
      </div>
    </main>
  )
}

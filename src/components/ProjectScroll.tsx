import './styles.css'
import { useState } from 'react'
import ProjectDisplay from './ProjectDisplay.tsx';
import ExperienceDisplay from './ExperienceDisplay.tsx';

function ProjectScroll() {
    const [activeTab, setActiveTab] = useState<'projects' | 'experience' | 'resume'>('projects')

    return (
        <section className="py-8">
            <div className="container mx-auto px-4">
                <div className="group mt-0 mb-8 flex w-full flex-wrap items-center justify-between gap-3 px-4 py-3">
                    <div className="flex items-center gap-16" style={{ fontFamily: 'Libertinus Math, serif' }}>
                        <span
                            className={`cursor-pointer text-2xl font-medium transition-all duration-300 ${activeTab === 'projects' ? 'text-6xl font-bold text-[#fdf8c2]' : 'text-[#fdf8c283]'}`}
                            onClick={() => setActiveTab('projects')}
                            onMouseEnter={() => setActiveTab('projects')}
                        >
                            projects
                        </span>
                        <span
                            className={`cursor-pointer text-2xl font-medium transition-all duration-300 ${activeTab === 'experience' ? 'text-6xl font-bold text-[#fdf8c2]' : 'text-[#fdf8c283]'}`}
                            onClick={() => setActiveTab('experience')}
                            onMouseEnter={() => setActiveTab('experience')}
                        >
                            experience
                        </span>
                        <span
                            className={`cursor-pointer text-2xl font-medium transition-all duration-300 ${activeTab === 'resume' ? 'text-6xl font-bold text-[#fdf8c2]' : 'text-[#fdf8c283]'}`}
                            onClick={() => setActiveTab('resume')}
                            onMouseEnter={() => setActiveTab('resume')}
                        >
                            resume
                        </span>
                    </div>
                </div>
                {activeTab === 'experience' ? <ExperienceDisplay /> : <ProjectDisplay />}
            </div>
        </section>
    )
}

export default ProjectScroll
import './styles.css'
import Project from './Project.tsx'
import { useState } from 'react'

function ProjectScroll() {
    const [activeTab, setActiveTab] = useState<'projects' | 'experience' | 'resume'>('projects')

    return (
        <section className="py-8">
            <div className="container mx-auto px-4">
                <div className="group mt-0 mb-8 flex w-full flex-wrap items-center justify-between gap-3 px-4 py-3">
                    <div className="flex items-center gap-16" style={{ fontFamily: 'Libertinus Math, serif' }}>
                        <span
                            className={`cursor-pointer text-2xl font-medium transition-all duration-300 ${activeTab === 'projects' ? 'text-6xl font-bold text-[#fdf8c2]' : 'text-[#fdf8c283]'}`}
                            onMouseEnter={() => setActiveTab('projects')}
                            onMouseLeave={() => setActiveTab('projects')}
                        >
                            projects
                        </span>
                        <span
                            className={`cursor-pointer text-2xl font-medium transition-all duration-300 ${activeTab === 'experience' ? 'text-6xl font-bold text-[#fdf8c2]' : 'text-[#fdf8c283]'}`}
                            onMouseEnter={() => setActiveTab('experience')}
                            onMouseLeave={() => setActiveTab('projects')}
                        >
                            experience
                        </span>
                        <span
                            className={`cursor-pointer text-2xl font-medium transition-all duration-300 ${activeTab === 'resume' ? 'text-6xl font-bold text-[#fdf8c2]' : 'text-[#fdf8c283]'}`}
                            onMouseEnter={() => setActiveTab('resume')}
                            onMouseLeave={() => setActiveTab('projects')}
                        >
                            resume
                        </span>
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
                    <div className="flex justify-center md:justify-start">
                        <Project image="src/assets/imgOfRota.png" alt="imageOfRota" header="rota" text="A simple rental car and customer management system that uses localStorage."/>
                    </div>
                    <div className="flex justify-center md:justify-end">
                        <Project image="src/assets/prototype.jpg" alt="prototype" header="Makeshift Controller" text="An ESP32 Controller that communicates throught Bluetooth. It works with Steam Games, such as Hades and Hollow Knight."/>
                    </div>
                    <div className="flex justify-center md:justify-start">
                        <Project image="src/assets/img2048.png" alt="imageOf2048" header="2048" text="A simple web version of 2048 made using javascript."/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProjectScroll
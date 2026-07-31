import './styles.css'
import Project from './Project.tsx'

function ProjectScroll() {
    return (
        <section
            className="py-16"
            style={{
                backgroundColor: '#05070b',
                backgroundImage:
                    'linear-gradient(rgba(212, 160, 23, 0.18) 1px, transparent 1px), linear-gradient(90deg, rgba(212, 160, 23, 0.18) 1px, transparent 1px)',
                backgroundSize: '32px 32px',
            }}
        >
            <div className="container mx-auto px-4">
                <div className="mt-0">
                    <h1 className="text-6xl heading mb-8 mt-0 text-[#fdf8c2]">Projects</h1>
                </div>
                <div className="flex justify-center">
                    <Project image="src/assets/img2048.png" alt="imageOf2048" header="2048" text="A simple web version of 2048 made using javascript."/>
                </div>
            </div>
        </section>
    )
}

export default ProjectScroll
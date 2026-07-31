import './styles.css'
import Project from './Project.tsx'

function ProjectScroll() {
    return (
        <section className="project-panel py-16">
            <div className="container mx-auto px-4">
                <div>
                    <h1 className="text-6xl heading my-8 text-[#fdf8c2]">Projects</h1>
                </div>
                <div className="flex justify-center">
                    <Project image="src/assets/img2048.png" alt="imageOf2048" header="2048" text="A simple web version of 2048 made using javascript."/>
                </div>
            </div>
        </section>
    )
}

export default ProjectScroll
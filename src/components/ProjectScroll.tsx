import './styles.css'
import Project from './Project.tsx'

function ProjectScroll() {
    return (
        <>
            <div className="container mx-auto">
                <div>
                    <h1 className="text-6xl heading my-8">Projects</h1>
                </div>
                <div className="flex justify-between">
                    <div></div>
                    <Project image="src/assets/img2048.png" alt="imageOf2048" header="2048" text="A simple web version of 2048 made using javascript."/>
                    <div></div>
                </div>
            </div>
        </>
    )
}

export default ProjectScroll
import './styles.css'
import Project from './Project.tsx'

function ProjectScroll() {
    return (
        <section className="py-8">
            <div className="container mx-auto px-4">
                <div className="mt-0">
                    <h1 className="text-6xl heading mb-8 mt-0 text-[#fdf8c2]" style={{ fontFamily: 'Libertinus Math, serif' }}>projects</h1>
                </div>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
                    <div className="flex justify-center md:justify-start">
                        <Project image="src/assets/img2048.png" alt="imageOf2048" header="2048" text="A simple web version of 2048 made using javascript."/>
                    </div>
                    <div className="flex justify-center md:justify-end">
                        <Project image="src/assets/img2048.png" alt="imageOf2048" header="MakeshiftController" text="An ESP32 Controller that communicates throught Bluetooth. It works with Steam Games, such as Hades and Hollow Knight."/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProjectScroll
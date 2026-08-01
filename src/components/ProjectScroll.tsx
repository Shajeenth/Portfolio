import './styles.css'
import Project from './Project.tsx'

function ProjectScroll() {
    return (
        <section className="py-8">
            <div className="container mx-auto px-4">
                <div className="group mt-0 mb-8 flex w-full flex-wrap items-center justify-between gap-3 px-4 py-3">
                    <h1
                        className="text-6xl heading text-[#fdf8c2] transition-all duration-300"
                        style={{ fontFamily: 'Libertinus Math, serif' }}
                    >
                        projects
                    </h1>
                    <div className="flex items-center gap-4 text-sm text-[#fdf8c2]" style={{ fontFamily: 'Libertinus Math, serif' }}>
                        <span className="transition-colors duration-300 hover:text-[#fdf8c2]">experience</span>
                        <span className="transition-colors duration-300 hover:text-[#fdf8c2]">resume</span>
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
import './styles.css'
import Project from './Project.tsx'

function ProjectScroll() {
    return (
        <section className="py-8">
            <div className="container mx-auto px-4">
                <div className="mt-0 flex items-center gap-3">
                    <h1 className="text-6xl heading mb-8 mt-0 text-[#fdf8c2]" style={{ fontFamily: 'Libertinus Math, serif' }}>projects</h1>
                    <div
                        className="mb-8 mt-1"
                        style={{
                            width: 0,
                            height: 0,
                            borderTop: '0.7rem solid transparent',
                            borderBottom: '0.7rem solid transparent',
                            borderRight: '1.15rem solid #fdf8c2',
                        }}
                        aria-hidden="true"
                    />
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
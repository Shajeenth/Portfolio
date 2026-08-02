import Project from './Project.tsx'

function ProjectDisplay() {
    return (
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
    )
}

export default ProjectDisplay
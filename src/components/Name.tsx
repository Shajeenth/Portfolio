import './styles.css'

function Name() {
    return (
        <aside className="w-full bg-[#05070b] px-6 py-6 sm:px-8 lg:fixed lg:top-0 lg:left-0 lg:h-screen lg:w-[28rem] lg:px-10">
            <div className="fade flex flex-col items-start justify-start">
                <h1
                    className="pb-4 max-w-full text-white leading-tight text-[clamp(2rem,3.2vw,3.25rem)]"
                    style={{ fontFamily: 'Libertinus Math, serif' }}
                >
                    shajeenth shanmugarajah
                </h1>

                <div className="mb-5 h-[1px] w-full max-w-72 rounded-full bg-gradient-to-r from-[#fdf8c2] via-[#d4a017] to-transparent opacity-90" />

                <p className="tinytext text-white">
                    <span className="text-gray-300">mechatronics @ </span>
                    <span className="font-semibold text-white">UWaterloo</span>
                </p>
            </div>
        </aside>
    )
}

export default Name
import './styles.css'

interface Details{
    image:string;
    alt:string;
    header:string;
    text:string;
}

function Project(details:Details) {
    return (
        <div className="card project-card overflow-hidden shadow-sm">
            <figure>
                <img
                src={details.image}
                alt={details.alt} />
            </figure>
            <div className="card-body text-white">
                <h2 className="card-title heading text-[#fdf8c2]">{details.header}</h2>
                <p className="tinytext text-gray-200">{details.text}</p>
            </div>
        </div>
    )
}

export default Project
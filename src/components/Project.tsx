import './styles.css'

interface Details{
    image:string;
    alt:string;
    header:string;
    text:string;
}

function Project(details:Details) {
    return (
        <div className="card bg-base-200 w-96 shadow-sm duration-300 ease-out">
            <figure>
                <img
                src={details.image}
                alt={details.alt} />
            </figure>
            <div className="card-body">
                <h2 className="card-title heading">{details.header}</h2>
                <p className="tinytext">{details.text}</p>
            </div>
        </div>
    )
}

export default Project
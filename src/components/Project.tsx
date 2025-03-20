import './styles.css'

interface Details{
    image:string;
    alt:string;
    header:string;
    text:string;
}

function Project(details:Details) {
    return (
        <div className="card bg-base-100 w-96 shadow-sm">
            <figure>
                <img
                src={"assets/${details.image}"}
                alt="${details.alt}" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{details.header}</h2>
                <p>{details.text}</p>
                <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    )
}

export default Project
import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer"

export const CardLocations = ({ location }) => {

    const { store, dispatch } = useGlobalReducer()

    return (
        <>
            <div className="card shadow-sm card shadow-sm border border-black" style={{ minWidth: "18rem", maxWidth: "18rem", height: "550px", overflow: "hidden" }}>
                <img
                    src={`https://cdn.thesimpsonsapi.com/1280/location/${location.id}.webp`}
                    style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        objectPosition: "top"
                    }}
                    className="card-img-top"
                    alt="..." />
                <div className="card-body">
                    <h5 className="card-title text-truncate">{location.name}</h5>
                    <p className="card-text mb-1 small"><strong>Town: </strong>{location.town ? location.town : "Unknown"}</p>
                    <p className="card-text mb-1 small" style={{ height: "70px" }}><strong>Use: </strong>{location.use ? location.use : "Unknown"}</p>
                    <div className="d-flex justify-content-between">
                        <Link to="/morelocation">
                            <button className="btn btn-outline-info">Learn more!</button>
                        </Link>
                        <button className="btn btn-outline-warning"><i className="fa-regular fa-heart"></i></button>
                    </div>
                </div>
            </div>
        </>
    );
};
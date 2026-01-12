import useGlobalReducer from "../hooks/useGlobalReducer"

export const CardLocations = ({ location }) => {

    const { store, dispatch } = useGlobalReducer()

    return (
        <>
            <div className="card m-2" style={{ minWidth: "17rem", height: "450px" }}>
                <img src={`https://cdn.thesimpsonsapi.com/1280/location/${location.id}.webp`}
                style={{
                    height: "200px",      
                    objectFit: "cover",   
                    width: "100%"         
                }} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-body d-flex flex-column text-start">{location.name}</h5>
                    <p className="card-text mb-1 small">{location.town ? location.town : "Unknown"}</p>
                    <p className="card-text mb-3 small" style={{ height: "70px" }}>{location.use ? location.use : "Unknown"}</p>
                    <div className="d-flex justify-content-between">
                        <button className="btn btn-outline-info">Learn more!</button><button className="btn btn-outline-warning"><i className="fa-regular fa-heart"></i></button>
                    </div>
                </div>
            </div>
        </>
    );
};
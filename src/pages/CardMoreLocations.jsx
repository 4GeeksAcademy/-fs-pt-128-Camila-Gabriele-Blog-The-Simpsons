import { Link, useParams } from "react-router-dom"
import useGlobalReducer from "../hooks/useGlobalReducer"
import { useEffect, useState } from "react"
import { getLocation } from "../Service/APIService"

export const CardMoreLocations = () => {
    const { store, dispatch } = useGlobalReducer()
    const { id } = useParams()
    const [location, setLocation] = useState({})
    const getLocationData = async () => {
        const locationData = await getLocation(id)
        setLocation(locationData)
    }
    useEffect(() => {
        getLocationData()
    }, [])
    return (
        <>
            <div className=" mt-5 p-5 m-5 border-black m-auto" style={{width: "60rem"}}>
                <img src={`https://cdn.thesimpsonsapi.com/1280/location/${id}.webp`} className="card-img-top" alt="..." />
                <div className="card-body m-2 p-2">
                    <h1 className="card-title">{location.name}</h1>
                    <p className="card-text mb-1 small"><strong>Description: </strong>{location.description ? location.description : "Unknown"}</p>
                    <p className="card-text mb-1 small"><strong>Town: </strong>{location.town ? location.town : "Unknown"}</p>
                    <p className="card-text mb-1 small" style={{ height: "70px" }}><strong>Use: </strong>{location.use ? location.use : "Unknown"}</p>
                    <div className="border-0 p-3 d-flex justify-content-center">
                        <Link to="/">
                            <button type="button" className="btn btn-warning ">
                                Back to home
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}
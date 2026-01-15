

import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer"


export const CardCharacters = ({ character }) => {

    const { store, dispatch } = useGlobalReducer()
    const isFavorite = store.favorites.some(fav => fav.id === character.id);
    const handleFavoriteClick = () => {
        dispatch({
            type: "add_favorites",
            payload: character
        });
    };
  
    return (
        <>
            <div className="card shadow-sm border border-black" style={{ minWidth: "18rem", maxWidth: "18rem", height: "550px" }}>
                <div style={{ height: "300px", overflow: "hidden" }}></div>
                <img
                    src={`https://cdn.thesimpsonsapi.com/500/character/${character.id}.webp`}
                    className="card-img-top"
                    alt="..."
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
                <div className="card-body">
                    <h5 className="card-title text-truncate">{character.name}</h5>
                    <p className="card-text mb-1 small"><strong>Gender: </strong>{character.gender}</p>
                    <p className="card-text mb-1 small"><strong>Age: </strong>{character.age ? character.age : "Unknown"}</p>
                    <p className="card-text small" style={{ height: "70px" }}><strong>Occupation: </strong>{character.occupation}</p>
                    <div className="d-flex justify-content-between">
                        <Link to={`/character/${character.id}`}>
                            <button
                                className="btn btn-outline-info"
                            >
                                Learn more!
                            </button>
                        </Link>
                        <button
                            className={`btn ${isFavorite ? "btn-warning" : "btn-outline-warning"}`}
                            onClick={handleFavoriteClick}
                        >
                            <i className={`${isFavorite ? "fa-solid" : "fa-regular"} fa-heart`}></i>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};
import useGlobalReducer from "../hooks/useGlobalReducer"

export const CardCharacters = ({ character }) => {

        const { store, dispatch } = useGlobalReducer()


    return (
        <>
            <div className="card m-2" style={{ minWidth: "17rem", height:"560px"}}>
                <img src={`https://cdn.thesimpsonsapi.com/500/character/${character.id}.webp`} className="card-img-top" alt="..."  />
                <div className="card-body">
                    <h5 className="card-body d-flex flex-column text-start">{character.name}</h5>
                    <p className="card-text mb-1 small">{character.gender}</p>
                    <p className="card-text mb-1 small">{character.age ? character.age : "Unknown"}</p>
                    <p className="card-text mb-3 small" style={{height:"70px"}}>{character.occupation}</p>
                    <div className="d-flex justify-content-between">
                        <button className="btn btn-outline-info">Learn more!</button><button className="btn btn-outline-warning"><i className="fa-regular fa-heart"></i></button>
                    </div>
                </div>
            </div>
        </>
    );
};
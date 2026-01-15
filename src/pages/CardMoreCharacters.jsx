import { useEffect, useState } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer"
import { Link, useParams } from "react-router-dom";
import { getCharacter } from "../Service/APIService";


export const CardMoreCharacters = () => {

   const { store, dispatch } = useGlobalReducer()
   const { id } = useParams()
   const [character, setCharacter] = useState({})
   const getCharacterData = async () => {
      const characterData = await getCharacter(id)
      setCharacter(characterData)
   }

   useEffect(() => {
      getCharacterData()
   }, [])

   return (
      <>
         <div className=" mt-5 p-5 m-5 border-black">
            <div className="row g-0">
               <div className="col-md-4">
                  <img src={`https://cdn.thesimpsonsapi.com/500/character/${id}.webp`} className="img-fluid rounded-start" alt="..." />
               </div>
               <div className="col-md-6">
                  <div className="card-body">
                     <h1 className="card-title text">{character.name}</h1>
                     <p className="card-text"><strong>Gender: </strong>{character.gender}</p>
                     <p className="card-text"><strong>Age: </strong>{character.age}</p>
                     <p className="card-text"><strong>Occupation: </strong>{character.occupation}</p>
                     <p className="card-text"><strong>Phrases: </strong></p>
                     <ul>
                        {character.phrases && character.phrases.map((frase, index) => (
                           <li key={index} className="list-group-item">
                              ☁️<i>"{frase}"</i>
                           </li>
                        ))}
                     </ul>
                  </div>
               </div>
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
   );
};
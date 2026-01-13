

import { Link } from "react-router-dom"
import useGlobalReducer from "../hooks/useGlobalReducer"


export const CardMoreCharacters = (character) => {

   return (
      <>
         <div className="card mt-5 p-5 m-5" style={{ maxHeight: "540px" }}>
            <div className="row g-0">
               <div className="col-md-4">
                  <img src="" className="img-fluid rounded-start" alt="..." />
               </div>
               <div className="col-md-8">
                  <div className="card-body">
                     <h5 className="card-title">{character.name}</h5>
                     <p className="card-text">{character.birthdate}</p>
                     <li className="card-text">
                        {character.phrases}
                     </li>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};
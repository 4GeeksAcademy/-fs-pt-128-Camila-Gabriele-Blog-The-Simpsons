
import { useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { getCharacters, getLocations } from "../Service/APIService.js";
import { CardCharacters } from "./CardCharacters.jsx";
import { CardLocations } from "./CardLocations.jsx";

export const Home = () => {

	const { store, dispatch } = useGlobalReducer()
	useEffect(() => {
		getCharacters(dispatch);
		getLocations(dispatch);
		findCharacter();
	}, [])

	return (
		<div className="container-fluid p-4">
			<h1 className="d-flex justify-content-start p-3"><strong>Characters</strong></h1>
			<div className="d-flex flex-row overflow-x-auto gap-3 p-3" style={{ scrollbarWidth: "thin" }}>
				{
					store.characters.map(character => {
						return (
							<CardCharacters key={character.id} character={character} />
						)
					})
				}
			</div>
			<h1 className="d-flex justify-content-start p-3 g-3"><strong>Locations</strong></h1>
			<div className="d-flex flex-row overflow-x-auto gap-3 p-3" style={{ scrollbarWidth: "thin" }}>
				{
					store.locations.map(location => {
						return (
							<CardLocations key={location.id} location={location} />
						)
					})
				}
			</div>
		</div>
	);
}; 
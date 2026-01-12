
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
	}, [])

	return (
		<div className="text-center mt-5">
			<div className="d-flex flex-row overflow-auto py-3 align-items-stretch" style={{ scrollbarWidth: "thin" }}>
				{
					store.characters.map(character => {
						return (
							<CardCharacters key={character.id} character={character} />
						)
					})
				}
			</div>
			<div className="d-flex flex-row overflow-auto py-3 align-items-stretch" style={{ scrollbarWidth: "thin" }}>
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
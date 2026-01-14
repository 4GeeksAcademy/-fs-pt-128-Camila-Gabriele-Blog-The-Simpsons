import { useState } from "react";
import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const Navbar = () => {
	const { store, dispatch } = useGlobalReducer()
	
	// const [count, setCount] = useState(0);
	// const incrementar = () => {
	// 	setContador(count + 1);
	// };
	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<a className="navbar-brand" href="#">
					<Link to="/">
						<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/The_Simpsons_yellow_logo.svg/960px-The_Simpsons_yellow_logo.svg.png" width="120" height="70" />
					</Link>
				</a>
				<div className="ml-auto">
					<Link to="/demo">
						<button className="btn btn-warning">Favorites <i className="fa-regular fa-heart"></i></button>
					</Link>
				</div>
			</div>
		</nav>
	);
};
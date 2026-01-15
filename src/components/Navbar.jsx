import { useState } from "react";
import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const Navbar = ({favorite}) => {
	const { store, dispatch } = useGlobalReducer()

	// const [count, setCount] = useState(0);
	// const incrementar = () => {
	// 	setContador(count + 1);
	// };
	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/" className="navbar-brand">
					<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/The_Simpsons_yellow_logo.svg/960px-The_Simpsons_yellow_logo.svg.png" width="120" height="70" />
				</Link>

				<div className="dropdown ms-auto">
					<button className="btn btn-warning dropdown-toggle" type="button" data-bs-toggle="dropdown">
						Favoritos ({store.favorites.length})
					</button>
					<ul className="dropdown-menu dropdown-menu-end">
						{store.favorites.length === 0 ? (
							<li><span className="dropdown-item-text text-muted">No hay favoritos</span></li>
						) : (
								store.favorites.map((favorite) => (
								<li key={favorite.id} className="d-flex align-items-center dropdown-item">
										<Link to={`/character/${favorite.id}`} className="text-decoration-none text-dark flex-grow-1">
										{favorite.name}
									</Link>
									<i
										className="fa-solid fa-trash ms-2 text-danger"
										style={{ cursor: "pointer" }}
											onClick={() => dispatch({ type: "delete_favorites", payload: favorite.id })}
									></i>
								</li>
							))
						)}
					</ul>
				</div>
			</div>
		</nav>
	);
};
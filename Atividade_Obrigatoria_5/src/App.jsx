import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Search from "../pages/Search";
import Details from "../pages/Details";
import Favorites from "../pages/Favorites";
import { FavoritesProvider } from "../context/FavoritesContext";

export default function App() {
	return (
		<FavoritesProvider>
			<Router>
				<nav>
					<Link to="/">Busca</Link> | <Link to="/favorites">Favoritos</Link>
				</nav>
				<Routes>
					<Route path="/" element={<Search />} />
					<Route path="/details/:id" element={<Details />} />
					<Route path="/favorites" element={<Favorites />} />
				</Routes>
			</Router>
		</FavoritesProvider>
	);
}

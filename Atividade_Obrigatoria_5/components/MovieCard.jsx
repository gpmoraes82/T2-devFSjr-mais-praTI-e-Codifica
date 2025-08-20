import { Link } from "react-router-dom";
import { useFavorites } from "../context/FavoritesContext";

export default function MovieCard({ movie }) {
	const { favorites, addFavorite, removeFavorite } = useFavorites();
	const isFavorite = favorites.some((fav) => fav.imdbID === movie.imdbID);

	return (
		<div className="border rounded p-2">
			<img src={movie.Poster} alt={movie.Title} width="150" />
			<h3>{movie.Title} ({movie.Year})</h3>
			<Link to={`/details/${movie.imdbID}`}>Ver Detalhes</Link>
			<button
				onClick={() =>
					isFavorite ? removeFavorite(movie.imdbID) : addFavorite(movie)
				}
			>
				{isFavorite ? "Remover Favorito" : "Adicionar Favorito"}
			</button>
		</div>
	);
}
